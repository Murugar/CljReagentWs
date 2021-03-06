(ns taoensso.sente
  "Channel sockets for Clojure/Script.

      Protocol  | client>server | client>server ?+ ack/reply | server>user push
    * WebSockets:       ✓              [1]                           ✓
    * Ajax:            [2]              ✓                           [3]

    [1] Emulate with cb-uuid wrapping
    [2] Emulate with dummy-cb wrapping
    [3] Emulate with long-polling

  Abbreviations:
    * chsk      - Channel socket (Sente's own pseudo \"socket\")
    * server-ch - Underlying web server's async channel that implement
                  Sente's server channel interface
    * sch       - server-ch alias
    * uid       - User-id. An application-level user identifier used for async
                  push. May have semantic meaning (e.g. username, email address),
                  may not (e.g. client/random id) - app's discretion.
    * cb        - Callback
    * tout      - Timeout
    * ws        - WebSocket/s
    * pstr      - Packed string. Arbitrary Clojure data serialized as a
                  string (e.g. edn) for client<->server comms
    * udt       - Unix timestamp (datetime long)

  Special messages:
    * Callback wrapping: [<clj> <?cb-uuid>] for [1], [2]
    * Callback replies: :chsk/closed, :chsk/timeout, :chsk/error

    * Client-side events:
        [:chsk/handshake [<?uid> <?csrf-token> <?handshake-data> <first-handshake?>]]
        [:chsk/state [<old-state-map> <new-state-map>]]
        [:chsk/recv <ev-as-pushed-from-server>] ; Server>user push

    * Server-side events:
        [:chsk/bad-package <packed-str>]
        [:chsk/bad-event   <event>]
        [:chsk/uidport-open  <uid>]
        [:chsk/uidport-close <uid>]

  Notable implementation details:
    * core.async is used liberally where brute-force core.async allows for
      significant implementation simplifications. We lean on core.async's
      efficiency here.
    * For WebSocket fallback we use long-polling rather than HTTP 1.1 streaming
      (chunked transfer encoding). Http-kit _does_ support chunked transfer
      encoding but a small minority of browsers &/or proxies do not. Instead of
      implementing all 3 modes (WebSockets, streaming, long-polling) - it seemed
      reasonable to focus on the two extremes (performance + compatibility).
      In any case client support for WebSockets is growing rapidly so fallback
      modes will become increasingly irrelevant while the extra simplicity will
      continue to pay dividends.

  General-use notes:
    * Single HTTP req+session persists over entire chsk session but cannot
      modify sessions! Use standard a/sync HTTP Ring req/resp for logins, etc.
    * Easy to wrap standard HTTP Ring resps for transport over chsks. Prefer
      this approach to modifying handlers (better portability)."

  {:author "Peter Taoussanis (@ptaoussanis)"}

       
           
                               
                                                                              
                                                                                       
                                                                            
                                              

        
  (:require
   [clojure.string  :as str]
   [cljs.core.async :as async  :refer (<! >! put! chan)]
   [taoensso.encore :as enc    :refer (format swap-in! reset-in! swapped)
                               :refer-macros (have have! have?)]
   [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
   [taoensso.sente.interfaces :as interfaces])

        
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)]))

(if (vector? taoensso.encore/encore-version)
  (enc/assert-min-encore-version [2 53 1])
  (enc/assert-min-encore-version  2.53))

;; (timbre/set-level! :trace) ; Uncomment for debugging
(defonce debug-mode?_ (atom false))

;;;; Events
;; Clients & server both send `event`s and receive (i.e. route) `event-msg`s:
;;   - `event`s have the same form client+server side,
;;   - `event-msg`s have a similar but not identical form

(defn- validate-event [x]
  (cond
    (not (vector? x))        :wrong-type
    (not (#{1 2} (count x))) :wrong-length
    :else (let [[ev-id _] x]
            (cond (not (keyword?  ev-id)) :wrong-id-type
                  (not (namespace ev-id)) :unnamespaced-id
                  :else nil))))

(defn event? "Valid [ev-id ?ev-data] form?" [x] (nil? (validate-event x)))

(defn as-event [x] (if (event? x) x [:chsk/bad-event x]))

(defn assert-event [x]
  (when-let [?err (validate-event x)]
    (let [err-msg
          (str
            (case ?err
              :wrong-type   "Malformed event (wrong type)."
              :wrong-length "Malformed event (wrong length)."
              (:wrong-id-type :unnamespaced-id)
              "Malformed event (`ev-id` should be a namespaced keyword)."
              :else "Malformed event (unknown error).")
            " Event should be of `[ev-id ?ev-data]` form: " x)]
      (throw (ex-info err-msg {:malformed-event x})))))

(defn client-event-msg? [x]
  (and
    (map? x)
    (enc/keys= x #{:ch-recv :send-fn :state :event :id :?data})
    (let [{:keys [ch-recv send-fn state event]} x]
      (and
        (enc/chan? ch-recv)
        (ifn?      send-fn)
        (enc/atom? state)
        (event?    event)))))

(defn server-event-msg? [x]
  (and
    (map? x)
    (enc/keys= x #{:ch-recv :send-fn :connected-uids
                   :ring-req :client-id
                   :event :id :?data :?reply-fn :uid})
    (let [{:keys [ch-recv send-fn connected-uids
                  ring-req client-id event ?reply-fn]} x]
      (and
        (enc/chan?       ch-recv)
        (ifn?            send-fn)
        (enc/atom?       connected-uids)
        (map?            ring-req)
        (enc/nblank-str? client-id)
        (event?          event)
        (or (nil? ?reply-fn)
            (ifn? ?reply-fn))))))

(defn- put-server-event-msg>ch-recv!
  "All server `event-msg`s go through this"
  [ch-recv {:as ev-msg :keys [event ?reply-fn]}]
  (let [[ev-id ev-?data :as valid-event] (as-event event)
        ev-msg* (merge ev-msg {:event     valid-event
                               :?reply-fn ?reply-fn
                               :id        ev-id
                               :?data     ev-?data})]
    (if-not (server-event-msg? ev-msg*)
      (warnf "Bad ev-msg: %s" ev-msg) ; Log 'n drop
      (put! ch-recv ev-msg*))))

;;; Note that cb replys need _not_ be `event` form!
       (defn cb-error?   [cb-reply-clj] (#{:chsk/closed :chsk/timeout :chsk/error} cb-reply-clj))
       (defn cb-success? [cb-reply-clj] (not (cb-error? cb-reply-clj)))

;;;; Packing
;; * Client<->server payloads are arbitrary Clojure vals (cb replies or events).
;; * Payloads are packed for client<->server transit.
;; * Packing includes ->str encoding, and may incl. wrapping to carry cb info.

(defn- unpack "prefixed-pstr->[clj ?cb-uuid]"
  [packer prefixed-pstr]
  (have? string? prefixed-pstr)
  (let [wrapped? (enc/str-starts-with? prefixed-pstr "+")
        pstr     (subs prefixed-pstr 1)
        clj
        (try
          (interfaces/unpack packer pstr)
          (catch                        :default t
            (debugf "Bad package: %s (%s)" pstr t)
            [:chsk/bad-package pstr]))

        [clj ?cb-uuid] (if wrapped? clj [clj nil])
        ?cb-uuid (if (= 0 ?cb-uuid) :ajax-cb ?cb-uuid)]

    (tracef "Unpacking: %s -> %s" prefixed-pstr [clj ?cb-uuid])
    [clj ?cb-uuid]))

(defn- with-?meta [x ?m] (if (seq ?m) (with-meta x ?m) x))

(defn- pack "clj->prefixed-pstr"
  ([packer ?packer-meta clj]
   (let [pstr
         (str "-" ; => Unwrapped (no cb metadata)
           (interfaces/pack packer (with-?meta clj ?packer-meta)))]
     (tracef "Packing (unwrapped): %s -> %s" [?packer-meta clj] pstr)
     pstr))

  ([packer ?packer-meta clj ?cb-uuid]
   (let [;;; Keep wrapping as light as possible:
         ?cb-uuid    (if (= ?cb-uuid :ajax-cb) 0 ?cb-uuid)
         wrapped-clj (if ?cb-uuid [clj ?cb-uuid] [clj])
         pstr
         (str "+" ; => Wrapped (cb metadata)
           (interfaces/pack packer (with-?meta wrapped-clj ?packer-meta)))]
     (tracef "Packing (wrapped): %s -> %s" [?packer-meta clj ?cb-uuid] pstr)
     pstr)))

(deftype EdnPacker []
  interfaces/IPacker
  (pack   [_ x] (enc/pr-edn   x))
  (unpack [_ s] (enc/read-edn s)))

(def ^:private default-edn-packer (EdnPacker.))

(defn- coerce-packer [x]
  (if (= x :edn)
    default-edn-packer
    (have #(satisfies? interfaces/IPacker %) x)))

(comment
  (do
    (require '[taoensso.sente.packers.transit :as transit])
    (def ^:private default-transit-json-packer (transit/get-transit-packer)))

  (let [pack   interfaces/pack
        unpack interfaces/unpack
        data   {:a :A :b :B :c "hello world"}]

    (enc/qb 10000
      (let [pk default-edn-packer]          (unpack pk (pack pk data)))
      (let [pk default-transit-json-packer] (unpack pk (pack pk data))))))

;;;; Server API

(declare
  ^:private send-buffered-server-evs>ws-clients!
  ^:private send-buffered-server-evs>ajax-clients!
  ^:private default-client-side-ajax-timeout-ms)

(defn make-channel-socket-server!
  "Takes a web server adapter[1] and returns a map with keys:
    :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
    :send-fn ; (fn [user-id ev] for server>user push.
    :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
    :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
    :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).

  Common options:
    :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
    :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
    :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
    :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
                       ; w/in given msecs.
    :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
    :send-buf-ms-ajax  ; [2]
    :send-buf-ms-ws    ; [2]
    :packer            ; :edn (default), or an IPacker implementation.

  [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
           `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
      You must have the necessary web-server dependency in your project.clj and
      the necessary entry in your namespace's `ns` form.

  [2] Optimization to allow transparent batching of rapidly-triggered
      server>user pushes. This is esp. important for Ajax clients which use a
      (slow) reconnecting poller. Actual event dispatch may occur <= given ms
      after send call (larger values => larger batch windows)."

  [web-server-ch-adapter
   & [{:keys [recv-buf-or-n ws-kalive-ms lp-timeout-ms
              send-buf-ms-ajax send-buf-ms-ws
              user-id-fn csrf-token-fn handshake-data-fn packer]
       :or   {recv-buf-or-n    (async/sliding-buffer 1000)
              ws-kalive-ms     (enc/ms :secs 25) ; < Heroku 55s timeout
              lp-timeout-ms    (enc/ms :secs 20) ; < Heroku 30s timeout
              send-buf-ms-ajax 100
              send-buf-ms-ws   30
              user-id-fn    (fn [ring-req] (get-in ring-req [:session :uid]))
              csrf-token-fn (fn [ring-req]
                              (or (get-in ring-req [:session :csrf-token])
                                  (get-in ring-req [:session :ring.middleware.anti-forgery/anti-forgery-token])
                                  (get-in ring-req [:session "__anti-forgery-token"])))
              handshake-data-fn (fn [ring-req] nil)
              packer :edn}}]]

  (have? enc/pos-int? send-buf-ms-ajax send-buf-ms-ws)
  (have? #(satisfies? interfaces/IServerChanAdapter %) web-server-ch-adapter)

  (let [max-ms default-client-side-ajax-timeout-ms]
   (when (>= lp-timeout-ms max-ms)
     (throw
       (ex-info (str ":lp-timeout-ms must be < " max-ms)
         {:lp-timeout-ms lp-timeout-ms
          :default-client-side-ajax-timeout-ms max-ms}))))

  (let [packer  (coerce-packer packer)
        ch-recv (chan recv-buf-or-n)

        user-id-fn
        (fn [ring-req client-id]
          ;; Allow uid to depend (in part or whole) on client-id. Be cautious
          ;; of security implications.
          (or (user-id-fn (assoc ring-req :client-id client-id)) ::nil-uid))

        ;; :ws udts used for ws-kalive (to check for activity in window period)
        ;; :ajax udts used for lp-timeout (as a way to check active conn identity)
        conns_          (atom {:ws  {} :ajax  {}}) ; {<uid> {<client-id> [<?sch> <udt>]}}
        send-buffers_   (atom {:ws  {} :ajax  {}}) ; {<uid> [<buffered-evs> <#{ev-uuids}>]}
        connected-uids_ (atom {:ws #{} :ajax #{} :any #{}}) ; Public

        upd-conn!
        (fn
          ([conn-type uid client-id] ; Update udt
           (swap-in! conns_ [conn-type uid client-id]
             (fn [?v]
               (let [[?sch _udt] ?v
                     new-udt (enc/now-udt)]
                 (enc/swapped
                   [?sch new-udt]
                   {:init? (nil? ?v) :udt new-udt :?sch ?sch})))))

          ([conn-type uid client-id new-?sch] ; Update sch + udt
           (swap-in! conns_ [conn-type uid client-id]
             (fn [?v]
               (let [new-udt (enc/now-udt)]
                 (enc/swapped
                   [new-?sch new-udt]
                   {:init? (nil? ?v) :udt new-udt :?sch new-?sch}))))))

        connect-uid!
        (fn [conn-type uid] {:pre [(have? uid)]}
          (let [newly-connected?
                (swap-in! connected-uids_ []
                  (fn [{:keys [ws ajax any] :as old-m}]
                    (let [new-m
                          (case conn-type
                            :ws   {:ws (conj ws uid) :ajax ajax            :any (conj any uid)}
                            :ajax {:ws ws            :ajax (conj ajax uid) :any (conj any uid)})]
                      (swapped new-m
                        (let [old-any (:any old-m)
                              new-any (:any new-m)]
                          (when (and (not (contains? old-any uid))
                                          (contains? new-any uid))
                            :newly-connected))))))]
            newly-connected?))

        upd-connected-uid!
        (fn [uid] {:pre [(have? uid)]}
          (let [newly-disconnected?
                (swap-in! connected-uids_ []
                  (fn [{:keys [ws ajax any] :as old-m}]
                    (let [conns' @conns_
                          any-ws-clients?   (contains? (:ws   conns') uid)
                          any-ajax-clients? (contains? (:ajax conns') uid)
                          any-clients?      (or any-ws-clients?
                                                any-ajax-clients?)
                          new-m
                          {:ws   (if any-ws-clients?   (conj ws   uid) (disj ws   uid))
                           :ajax (if any-ajax-clients? (conj ajax uid) (disj ajax uid))
                           :any  (if any-clients?      (conj any  uid) (disj any  uid))}]

                      (swapped new-m
                        (let [old-any (:any old-m)
                              new-any (:any new-m)]
                          (when (and      (contains? old-any uid)
                                     (not (contains? new-any uid)))
                            :newly-disconnected))))))]

            newly-disconnected?))

        send-fn ; server>user (by uid) push
        (fn [user-id ev & [{:as opts :keys [flush?]}]]
          (let [uid (if (= user-id :sente/all-users-without-uid) ::nil-uid user-id)
                _   (tracef "Chsk send: (->uid %s) %s" uid ev)
                _   (assert uid
                    (str "Support for sending to `nil` user-ids has been REMOVED. "
                         "Please send to `:sente/all-users-without-uid` instead."))
                _   (assert-event ev)

                ev-uuid (enc/uuid-str)

                flush-buffer!
                (fn [conn-type]
                  (when-let
                      [pulled
                       (swap-in! send-buffers_ [conn-type]
                         (fn [m]
                           ;; Don't actually flush unless the event buffered
                           ;; with _this_ send call is still buffered (awaiting
                           ;; flush). This means that we'll have many (go
                           ;; block) buffer flush calls that'll noop. They're
                           ;; cheap, and this approach is preferable to
                           ;; alternatives like flush workers.
                           (let [[_ ev-uuids] (get m uid)]
                             (if (contains? ev-uuids ev-uuid)
                               (swapped (dissoc m uid)
                                        (get    m uid))
                               (swapped m nil)))))]

                    (let [[buffered-evs ev-uuids] pulled]
                      (have? vector? buffered-evs)
                      (have? set?    ev-uuids)

                      (let [packer-metas         (mapv meta buffered-evs)
                            combined-packer-meta (reduce merge {} packer-metas)
                            buffered-evs-ppstr   (pack packer
                                                   combined-packer-meta
                                                   buffered-evs)]

                        (tracef "buffered-evs-ppstr: %s (with meta %s)"
                          buffered-evs-ppstr combined-packer-meta)

                        (case conn-type
                          :ws   (send-buffered-server-evs>ws-clients! conns_
                                  uid buffered-evs-ppstr upd-conn!)
                          :ajax (send-buffered-server-evs>ajax-clients! conns_
                                  uid buffered-evs-ppstr))))))]

            (if (= ev [:chsk/close]) ; Currently undocumented
              (do
                (debugf "Chsk closing (client may reconnect): %s" uid)
                (when flush?
                  (flush-buffer! :ws)
                  (flush-buffer! :ajax))

                (doseq [[?sch _udt] (vals (get-in @conns_ [:ws uid]))]
                  (when-let [sch ?sch] (interfaces/sch-close! sch)))

                (doseq [[?sch _udt] (vals (get-in @conns_ [:ajax uid]))]
                  (when-let [sch ?sch] (interfaces/sch-close! sch))))

              (do
                ;; Buffer event
                (doseq [conn-type [:ws :ajax]]
                  (swap-in! send-buffers_ [conn-type uid]
                    (fn [?v]
                      (if-not ?v
                        [[ev] #{ev-uuid}]
                        (let [[buffered-evs ev-uuids] ?v]
                          [(conj buffered-evs ev)
                           (conj ev-uuids     ev-uuid)])))))

                ;;; Flush event buffers after relevant timeouts:
                ;; * May actually flush earlier due to another timeout.
                ;; * We send to _all_ of a uid's connections.
                ;; * Broadcasting is possible but I'd suggest doing it rarely,
                ;;   and only to users we know/expect are actually online.
                ;;
                (if flush?
                  (do
                    (flush-buffer! :ws)
                    (flush-buffer! :ajax))
                  (let [ws-timeout   (async/timeout send-buf-ms-ws)
                        ajax-timeout (async/timeout send-buf-ms-ajax)]
                    (go
                      (<! ws-timeout)
                      (flush-buffer! :ws))
                    (go
                      (<! ajax-timeout)
                      (flush-buffer! :ajax)))))))

          ;; Server-side send is async so nothing useful to return (currently
          ;; undefined):
          nil)

        ev-msg-const
        {:ch-recv        ch-recv
         :send-fn        send-fn
         :connected-uids connected-uids_}]

    {:ch-recv        ch-recv
     :send-fn        send-fn
     :connected-uids connected-uids_

     ;; Does not participate in `conns_` (has specific req->resp)
     :ajax-post-fn
     (fn [ring-req]
       (interfaces/ring-req->server-ch-resp web-server-ch-adapter ring-req
         {:on-open
          (fn [server-ch websocket?]
            (assert (not websocket?))
            (let [params        (get ring-req :params)
                  ppstr         (get params   :ppstr)
                  client-id     (get params   :client-id)
                  [clj has-cb?] (unpack packer ppstr)
                  reply-fn
                  (let [replied?_ (atom false)]
                    (fn [resp-clj] ; Any clj form
                      (when (compare-and-set! replied?_ false true)
                        (tracef "Chsk send (ajax post reply): %s" resp-clj)
                        (interfaces/sch-send! server-ch websocket?
                          (pack packer (meta resp-clj) resp-clj)))))]

              (put-server-event-msg>ch-recv! ch-recv
                (merge ev-msg-const
                  {;; Note that the client-id is provided here just for the
                   ;; user's convenience. non-lp-POSTs don't actually need a
                   ;; client-id for Sente's own implementation:
                   :client-id client-id #_"unnecessary-for-non-lp-POSTs"
                   :ring-req  ring-req
                   :event     clj
                   :uid       (user-id-fn ring-req client-id)
                   :?reply-fn (when has-cb? reply-fn)}))

              (if has-cb?
                (when-let [ms lp-timeout-ms]
                  (go
                    (<! (async/timeout ms))
                    (reply-fn :chsk/timeout)))
                (reply-fn :chsk/dummy-cb-200))))}))

     ;; Ajax handshake/poll, or WebSocket handshake
     :ajax-get-or-ws-handshake-fn
     (fn [ring-req]
       (let [sch-uuid   (enc/uuid-str 6)
             params     (get ring-req :params)
             client-id  (get params   :client-id)
             csrf-token (csrf-token-fn ring-req)
             uid        (user-id-fn    ring-req client-id)

             receive-event-msg! ; Partial
             (fn self
               ([event          ] (self event nil))
               ([event ?reply-fn]
                (put-server-event-msg>ch-recv! ch-recv
                  (merge ev-msg-const
                    {:client-id client-id
                     :ring-req  ring-req
                     :event     event
                     :?reply-fn ?reply-fn
                     :uid       uid}))))

             send-handshake!
             (fn [server-ch websocket?]
               (tracef "send-handshake!")
               (let [?handshake-data (handshake-data-fn ring-req)
                     handshake-ev
                     (if (nil? ?handshake-data) ; Micro optimization
                       [:chsk/handshake [uid csrf-token]]
                       [:chsk/handshake [uid csrf-token ?handshake-data]])]
                 (interfaces/sch-send! server-ch websocket?
                   (pack packer nil handshake-ev))))]

         (if (str/blank? client-id)
           (let [err-msg "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?"]
             (errorf (str err-msg ": %s") ring-req) ; Careful re: % in req
             (throw (ex-info err-msg {:ring-req ring-req})))

           (interfaces/ring-req->server-ch-resp web-server-ch-adapter ring-req
             {:on-open
              (fn [server-ch websocket?]
                (if websocket?

                  ;; WebSocket handshake
                  (let [_ (tracef "New WebSocket channel: %s (%s)" uid sch-uuid)
                        updated-conn (upd-conn! :ws uid client-id server-ch)
                        udt-open     (:udt updated-conn)]

                    (when (connect-uid! :ws uid)
                      (receive-event-msg! [:chsk/uidport-open uid]))

                    (send-handshake! server-ch websocket?)

                    ;; Start ws-kalive loop
                    ;; This also works to gc ws conns that were suddenly
                    ;; terminated (e.g. by turning on airplane mode)
                    (when-let [ms ws-kalive-ms]
                      (go-loop [udt-t0 udt-open]
                        (<! (async/timeout ms))
                        (when-let [[_sch udt-t1] (get-in @conns_ [:ws uid client-id])]
                          (when (interfaces/sch-open? server-ch)
                            ;; (assert (= _sch server-ch))
                            (when (= udt-t1 udt-t0)
                              ;; We've seen no send/recv activity on this
                              ;; conn w/in our kalive window so send a ping
                              ;; ->client (should auto-close conn if it's
                              ;; gone dead)
                              (interfaces/sch-send! server-ch websocket?
                                (pack packer nil :chsk/ws-ping)))
                            (recur udt-t1))))))

                  ;; Ajax handshake/poll
                  (let [_ (tracef "New Ajax handshake/poll: %s (%s)" uid sch-uuid)
                        updated-conn (upd-conn! :ajax uid client-id server-ch)
                        udt-open     (:udt updated-conn)
                        handshake?   (or (:init? updated-conn) (:handshake? params))]

                    (when (connect-uid! :ajax uid)
                      (receive-event-msg! [:chsk/uidport-open uid]))

                    (if handshake?
                      ; Client will immediately repoll
                      (send-handshake! server-ch websocket?)

                      (when-let [ms lp-timeout-ms]
                        (go
                          (<! (async/timeout ms))
                          (when-let [[_sch udt-t1] (get-in @conns_ [:ajax uid client-id])]
                            (when (= udt-t1 udt-open)
                              ;; (assert (= _sch server-ch))
                              ;; Appears to still be the active sch
                              (interfaces/sch-send! server-ch websocket?
                                (pack packer nil :chsk/timeout))))))))))

              :on-msg
              (fn [server-ch websocket? req-ppstr]
                (assert websocket?)
                (upd-conn! :ws uid client-id)
                (let [[clj ?cb-uuid] (unpack packer req-ppstr)]
                  (receive-event-msg! clj ; Should be ev
                    (when ?cb-uuid
                      (fn reply-fn [resp-clj] ; Any clj form
                        (tracef "Chsk send (ws reply): %s" resp-clj)
                        ;; true iff apparent success:
                        (interfaces/sch-send! server-ch websocket?
                          (pack packer (meta resp-clj) resp-clj ?cb-uuid)))))))

              :on-close ; We rely on `on-close` to trigger for _every_ conn!
              (fn [server-ch websocket? _status]
                ;; Note that `status` type varies with underlying web server
                (let [conn-type (if websocket? :ws :ajax)
                      _ (tracef "%s channel closed: %s (%s)"
                          (if websocket? "WebSocket" "Ajax")
                          uid sch-uuid)

                      updated-conn (upd-conn! conn-type uid client-id nil)
                      udt-close    (:udt updated-conn)]

                  ;; Allow some time for possible reconnects (repoll,
                  ;; sole window refresh, etc.):
                  (go
                    (<! (async/timeout 5000))
                    (let [[_?sch udt-t1] (get-in @conns_ [conn-type uid client-id])]

                      (when @debug-mode?_
                        (debugf "close-timeout: %s %s %s %s" conn-type uid
                          sch-uuid [(= udt-t1 udt-close) udt-t1 udt-close]))

                      (when (= udt-t1 udt-close)
                        (let [disconnect? ; Removed entry for client-id?
                              (swap-in! conns_ [conn-type uid client-id]
                                (fn [[_sch udt-t1]]
                                  (if (= udt-t1 udt-close)
                                    (swapped :swap/dissoc true)
                                    (swapped udt-t1       false))))]

                          (when disconnect?

                            ;; Potentially remove entry for uid
                            (swap-in! conns_ [conn-type uid]
                              (fn [?m] (if (empty? ?m) :swap/dissoc ?m)))

                            (when (upd-connected-uid! uid)
                              (receive-event-msg! [:chsk/uidport-close uid])))))))))

              :on-error
              (fn [server-ch websocket? error]
                (errorf "ring-req->server-ch-resp error: %s (%s)"
                  error uid sch-uuid))}))))}))

(defn- send-buffered-server-evs>ws-clients!
  "Actually pushes buffered events (as packed-str) to all uid's WebSocket conns."
  [conns_ uid buffered-evs-pstr upd-conn!]
  (tracef "send-buffered-server-evs>ws-clients!: %s" buffered-evs-pstr)
  (doseq [[client-id [?sch _udt]] (get-in @conns_ [:ws uid])]
    (when-let [sch ?sch]
      (upd-conn! :ws uid client-id)
      (interfaces/sch-send! sch :websocket buffered-evs-pstr))))

(defn- send-buffered-server-evs>ajax-clients!
  "Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
  Allows some time for possible Ajax poller reconnects."
  [conns_ uid buffered-evs-pstr]
  (tracef "send-buffered-server-evs>ajax-clients!: %s" buffered-evs-pstr)
  (let [nmax-attempts 7
        ms-base 90
        ms-rand 90
        ;; (* 7 (+ 90 (/ 90 2.0))) ~= 945ms

        ;; All connected/possibly-reconnecting client uuids:
        client-ids-unsatisfied (keys (get-in @conns_ [:ajax uid]))]

    (when-not (empty? client-ids-unsatisfied)
      ;; (tracef "client-ids-unsatisfied: %s" client-ids-unsatisfied)
      (go-loop [n 0 client-ids-satisfied #{}]
        (let [?pulled ; nil or {<client-id> [<?sch> <udt>]}
              (swap-in! conns_ [:ajax uid]
                (fn [m] ; {<client-id> [<?sch> <udt>]}
                  (let [ks-to-pull (remove client-ids-satisfied (keys m))]
                    ;; (tracef "ks-to-pull: %s" ks-to-pull)
                    (if (empty? ks-to-pull)
                      (swapped m nil)
                      (swapped
                        (reduce
                          (fn [m k]
                            (let [[?sch udt] (get m k)]
                              ;; Nb don't change udt; for Ajax conns_ we only
                              ;; want udt updated on poll or close, not on
                              ;; activity (as with ws conns_)
                              (assoc m k [nil udt #_(enc/now-udt)])))

                          m ks-to-pull)
                        (select-keys m ks-to-pull))))))]

          (have? [:or nil? map?] ?pulled)

          (let [?newly-satisfied
                (when ?pulled
                  (reduce-kv
                    (fn [s client-id [?sch _udt]]
                      (let [sent?
                            (when-let [sch ?sch]
                              ;; Will noop + return false if sch already closed:
                              (interfaces/sch-send! ?sch (not :websocket)
                                buffered-evs-pstr))]

                        (if sent? (conj s client-id) s)))
                    #{} ?pulled))

                now-satisfied (into client-ids-satisfied ?newly-satisfied)]

            ;; (tracef "now-satisfied: %s" now-satisfied)
            (when (and (< n nmax-attempts)
                       (some (complement now-satisfied) client-ids-unsatisfied))
              ;; Allow some time for possible poller reconnects:
              (<! (async/timeout (+ ms-base (rand-int ms-rand))))
              (recur (inc n) now-satisfied))))))))

;;;; Client API

       (def ajax-lite "Alias of `taoensso.encore/ajax-lite`" enc/ajax-lite)
      
(defprotocol IChSocket
  (-chsk-connect!    [chsk])
  (-chsk-disconnect! [chsk reconn?])
  (-chsk-reconnect!  [chsk])
  (-chsk-send!       [chsk ev opts]))

       (defn chsk-connect!              [chsk] (-chsk-connect!    chsk))
       (defn chsk-destroy! "Deprecated" [chsk] (-chsk-disconnect! chsk false))
       (defn chsk-disconnect!           [chsk] (-chsk-disconnect! chsk false))
      
(defn chsk-reconnect! "Useful for reauthenticating after login/logout, etc."
  [chsk] (-chsk-reconnect! chsk))

      
(defn chsk-send!
  "Sends `[ev-id ev-?data :as event]`, returns true on apparent success."
  ([chsk ev]                 (chsk-send! chsk ev {}))
  ([chsk ev ?timeout-ms ?cb] (chsk-send! chsk ev {:timeout-ms ?timeout-ms
                                                  :cb         ?cb}))
  ([chsk ev opts]
   (tracef "Chsk send: (%s) %s" (assoc opts :cb (boolean (:cb opts))) ev)
   (-chsk-send! chsk ev opts)))

      
(defn- chsk-send->closed! [?cb-fn]
  (warnf "Chsk send against closed chsk.")
  (when ?cb-fn (?cb-fn :chsk/closed))
  false)

      
(defn- assert-send-args [x ?timeout-ms ?cb]
  (assert-event x)
  (assert (or (and (nil? ?timeout-ms) (nil? ?cb))
              (and (enc/nneg-int? ?timeout-ms)))
    (str "cb requires a timeout; timeout-ms should be a +ive integer: " ?timeout-ms))
  (assert (or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))
    (str "cb should be nil, an ifn, or a channel: " (type ?cb))))

      
(defn- pull-unused-cb-fn! [cbs-waiting_ ?cb-uuid]
  (when-let [cb-uuid ?cb-uuid]
    (swap-in! cbs-waiting_ [cb-uuid]
      (fn [?f] (swapped :swap/dissoc ?f)))))

      
(defn- merge>chsk-state! [{:keys [chs state_] :as chsk} merge-state]
  (let [[old-state new-state]
        (swap-in! state_ []
          (fn [old-state]
            (let [new-state (merge old-state merge-state)

                  ;; Is this a reasonable way of helping client distinguish
                  ;; cause of an auto reconnect? Didn't give it much
                  ;; thought...
                  requested-reconnect?
                  (and (:requested-reconnect-pending? old-state)
                         (:open? new-state)
                    (not (:open? old-state)))

                  new-state
                  (if (:first-open? old-state)
                    (assoc new-state :first-open? false)
                    new-state)

                  new-state
                  (if requested-reconnect?
                    (-> new-state
                        (dissoc :requested-reconnect-pending?)
                        (assoc  :requested-reconnect? true))
                    (dissoc new-state :requested-reconnect?))]

              (swapped new-state [old-state new-state]))))]

    (when (not= old-state new-state)
      (let [output [old-state new-state]]
        ;; (debugf "Chsk state change: %s" output)
        (put! (:state chs) [:chsk/state output])
        output))))

      
(defn- cb-chan-as-fn
  "Experimental, undocumented. Allows a core.async channel to be provided
  instead of a cb-fn. The channel will receive values of form
  [<event-id>.cb <reply>]."
  [?cb ev]
  (if (or (nil? ?cb) (ifn? ?cb))
    ?cb
    (do
      (have? enc/chan? ?cb)
      (assert-event ev)
      (let [[ev-id _] ev
            cb-ch ?cb]
        (fn [reply]
          (put! cb-ch
            [(keyword (str (enc/fq-name ev-id) ".cb"))
             reply]))))))

      
(defn- receive-buffered-evs! [chs clj]
  (tracef "receive-buffered-evs!: %s" clj)
  (let [buffered-evs (have vector? clj)]
    (doseq [ev buffered-evs]
      (assert-event ev)
      ;; Should never receive :chsk/* events from server here:
      (let [[id] ev] (assert (not= (namespace id) "chsk")))
      (put! (:<server chs) ev))))

      
(defn- handshake? [x]
  (and (vector? x) ; Nb support arb input (e.g. cb replies)
       (let [[x1] x] (= x1 :chsk/handshake))))

      
(defn- receive-handshake! [chsk-type chsk clj]
  (have? [:el #{:ws :ajax}] chsk-type)
  (have? handshake? clj)
  (tracef "receive-handshake! (%s): %s" chsk-type clj)
  (let [[_ [?uid ?csrf-token ?handshake-data]] clj
        {:keys [chs ever-opened?_]} chsk
        first-handshake? (compare-and-set! ever-opened?_ false true)
        new-state
        {:type           chsk-type ; :auto -> e/o #{:ws :ajax}, etc.
         :open?          true
         :ever-opened?   true
         :uid            ?uid
         :csrf-token     ?csrf-token
         :handshake-data ?handshake-data
         :first-open?    first-handshake?}

        handshake-ev
        [:chsk/handshake
         [?uid ?csrf-token ?handshake-data first-handshake?]]]

    (assert-event handshake-ev)
    (when (str/blank? ?csrf-token)
      (warnf "SECURITY WARNING: no CSRF token available for use by Sente"))

    (merge>chsk-state! chsk new-state)
    (put! (:internal chs) handshake-ev)

    :handled))

      
(defrecord ChWebSocket
  ;; WebSocket-only IChSocket implementation
  ;; Handles (re)connections, cbs, etc.

  [client-id chs params packer url
   state_ ; {:type _ :open? _ :uid _ :csrf-token _ ...}
   active-retry-id_ retry-count_ ever-opened?_
   backoff-ms-fn ; (fn [nattempt]) -> msecs
   cbs-waiting_ ; {<cb-uuid> <fn> ...}
   socket_]

  IChSocket
  (-chsk-disconnect! [chsk reconn?]
    (reset! active-retry-id_ "_disable-auto-retry")
    (if reconn?
      (merge>chsk-state! chsk {:open? false :requested-reconnect-pending? true})
      (merge>chsk-state! chsk {:open? false}))
    (when-let [s @socket_] (.close s 1000 "CLOSE_NORMAL")))

  (-chsk-reconnect! [chsk]
    (-chsk-disconnect! chsk :reconn)
    (-chsk-connect!    chsk))

  (-chsk-send! [chsk ev opts]
    (let [{?timeout-ms :timeout-ms ?cb :cb :keys [flush?]} opts
          _ (assert-send-args ev ?timeout-ms ?cb)
          ?cb-fn (cb-chan-as-fn ?cb ev)]
      (if-not (:open? @state_) ; Definitely closed
        (chsk-send->closed! ?cb-fn)

        ;; TODO Buffer before sending (but honor `:flush?`)
        (let [?cb-uuid (when ?cb-fn (enc/uuid-str 6))
              ppstr    (pack packer (meta ev) ev ?cb-uuid)]

          (when-let [cb-uuid ?cb-uuid]
            (reset-in! cbs-waiting_ [cb-uuid] (have ?cb-fn))
            (when-let [timeout-ms ?timeout-ms]
              (go (<! (async/timeout timeout-ms))
                  (when-let [cb-fn* (pull-unused-cb-fn! cbs-waiting_ ?cb-uuid)]
                    (cb-fn* :chsk/timeout)))))

          (try
            (.send @socket_ ppstr)
            :apparent-success
            (catch js/Error e
              (errorf e "Chsk send error")
              (when-let [cb-uuid ?cb-uuid]
                (let [cb-fn* (or (pull-unused-cb-fn! cbs-waiting_ cb-uuid)
                                 (have ?cb-fn))]
                  (cb-fn* :chsk/error)))
              false))))))

  (-chsk-connect! [chsk]
    (when-let [WebSocket (or (enc/oget js/window "WebSocket")
                             (enc/oget js/window "MozWebSocket"))]
      (let [retry-id (enc/uuid-str)
            connect-fn
            (fn connect-fn []
              (let [retry-fn
                    (fn []
                      (when (= @active-retry-id_ retry-id)
                        (let [retry-count* (swap! retry-count_ inc)
                              backoff-ms   (backoff-ms-fn retry-count*)]
                          (warnf "Chsk is closed: will try reconnect (%s)" retry-count*)
                          (.setTimeout js/window connect-fn backoff-ms))))

                    ?socket
                    (try
                      (WebSocket.
                        (enc/merge-url-with-query-string url
                          (merge params ; 1st (don't clobber impl.):
                            {:client-id client-id})))
                      (catch js/Error e
                        (errorf e "WebSocket js/Error")
                        nil))]

                (if-not ?socket
                  (retry-fn) ; Couldn't even get a socket

                  (reset! socket_
                    (doto ?socket
                      (aset "onerror"
                        (fn [ws-ev]
                          (errorf
                           ;; ^:meta {:raw-console? true} ; TODO Maybe later
                           "WebSocket error: %s"
                           (try (js->clj ws-ev) (catch :default _ ws-ev)))

                          (let [;; Note that `ws-ev` doesn't seem to contain
                                ;; much useful info? Ref. http://goo.gl/bBJq0p
                                last-ws-error {:uuid (enc/uuid-str)
                                               :ev   ws-ev}]

                            (merge>chsk-state! chsk {:last-ws-error last-ws-error}))))

                      (aset "onmessage" ; Nb receives both push & cb evs!
                        (fn [ws-ev]
                          (let [ppstr (enc/oget ws-ev "data")
                                [clj ?cb-uuid] (unpack packer ppstr)]

                            ;; Nb may or may NOT satisfy `event?` since we
                            ;; also receive cb replies here! This is actually
                            ;; why we prefix our pstrs to indicate whether
                            ;; they're wrapped or not.
                            ;; (assert-event clj) ;; NO!

                            (or
                              (when (handshake? clj)
                                (receive-handshake! :ws chsk clj)
                                (reset! retry-count_ 0))

                              (when (= clj :chsk/ws-ping)
                                (when @debug-mode?_
                                  (receive-buffered-evs! chs [[:debug/ws-ping]]))
                                :noop)

                              (if-let [cb-uuid ?cb-uuid]
                                (if-let [cb-fn (pull-unused-cb-fn! cbs-waiting_
                                                 cb-uuid)]
                                  (cb-fn clj)
                                  (warnf "Cb reply w/o local cb-fn: %s" clj))
                                (let [buffered-evs clj]
                                  (receive-buffered-evs! chs buffered-evs)))))))

                      #_(aset "onopen"
                        (fn [_ws-ev]
                          ;; NO, better for server to send a handshake:
                          ;; (merge>chsk-state! chsk {:open? true})
                          ))

                      ;; Fires repeatedly (on each connection attempt) while
                      ;; server is down:
                      (aset "onclose"
                        (fn [ws-ev]
                          (let [clean? (enc/oget ws-ev "wasClean")
                                code   (enc/oget ws-ev "code")
                                reason (enc/oget ws-ev "reason")
                                last-ws-close
                                {:uuid   (enc/uuid-str)
                                 :ev     ws-ev
                                 :clean? clean?
                                 :code   code
                                 :reason reason}]

                            ;; Firefox calls "onclose" while unloading,
                            ;; Ref. http://goo.gl/G5BYbn:
                            (if clean?
                              (do
                                (debugf "Clean WebSocket close, will not attempt reconnect")
                                (merge>chsk-state! chsk {:last-ws-close last-ws-close}))
                              (do
                                (merge>chsk-state! chsk {:last-ws-close last-ws-close :open? false})
                                (retry-fn)))))))))))]

        (reset! active-retry-id_ retry-id)
        (reset! retry-count_ 0)
        (connect-fn)
        chsk))))

      
(defn- new-ChWebSocket [opts]
  (map->ChWebSocket
    (merge
      {:state_           (atom {:type :ws :open? false})
       :active-retry-id_ (atom "_pending")
       :retry-count_     (atom 0)
       :ever-opened?_    (atom false)
       :cbs-waiting_     (atom {})
       :socket_          (atom nil)}
      opts)))

(def ^:private default-client-side-ajax-timeout-ms
  "We must set *some* client-side timeout otherwise an unpredictable (and
  probably too short) browser default will be used. Must be > server's
  :lp-timeout-ms."
  (enc/ms :secs 60))

      
(defrecord ChAjaxSocket
  ;; Ajax-only IChSocket implementation
  ;; Handles (re)polling, etc.

  [client-id chs params packer url state_
   active-retry-id_ ever-opened?_
   backoff-ms-fn
   ajax-opts curr-xhr_]

  IChSocket
  (-chsk-disconnect! [chsk reconn?]
    (reset! active-retry-id_ "_disable-auto-retry")
    (if reconn?
      (merge>chsk-state! chsk {:open? false :requested-reconnect-pending? true})
      (merge>chsk-state! chsk {:open? false}))
    (when-let [x @curr-xhr_] (.abort x)))

  (-chsk-reconnect! [chsk]
    (-chsk-disconnect! chsk :reconn)
    (-chsk-connect!    chsk))

  (-chsk-send! [chsk ev opts]
    (let [{?timeout-ms :timeout-ms ?cb :cb :keys [flush?]} opts
          _ (assert-send-args ev ?timeout-ms ?cb)
          ?cb-fn (cb-chan-as-fn ?cb ev)]
      (if-not (:open? @state_) ; Definitely closed
        (chsk-send->closed! ?cb-fn)

        ;; TODO Buffer before sending (but honor `:flush?`)
        (let [csrf-token (:csrf-token @state_)]
          (ajax-lite url
            (merge ajax-opts
              {:method :post
               :timeout-ms (or ?timeout-ms (:timeout-ms ajax-opts)
                               default-client-side-ajax-timeout-ms)
               :resp-type :text ; We'll do our own pstr decoding
               :headers
               (merge (:headers ajax-opts) ; 1st (don't clobber impl.):
                 {:X-CSRF-Token csrf-token})

               :params
               (let [ppstr (pack packer (meta ev) ev (when ?cb-fn :ajax-cb))]
                 (merge params ; 1st (don't clobber impl.):
                   {:udt         (enc/now-udt) ; Force uncached resp

                    ;; A duplicate of X-CSRF-Token for user's convenience and
                    ;; for back compatibility with earlier CSRF docs:
                    :csrf-token  csrf-token

                    ;; Just for user's convenience here. non-lp-POSTs don't
                    ;; actually need a client-id for Sente's own implementation:
                    :client-id   client-id

                    :ppstr       ppstr}))})

           (fn ajax-cb [{:keys [?error ?content]}]
             (if ?error
               (if (= ?error :timeout)
                 (when ?cb-fn (?cb-fn :chsk/timeout))
                 (do (merge>chsk-state! chsk {:open? false})
                     (when ?cb-fn (?cb-fn :chsk/error))))

               (let [content      ?content
                     resp-ppstr   content
                     [resp-clj _] (unpack packer resp-ppstr)]
                 (if ?cb-fn
                   (?cb-fn resp-clj)
                   (when (not= resp-clj :chsk/dummy-cb-200)
                     (warnf "Cb reply w/o local cb-fn: %s" resp-clj)))
                 (merge>chsk-state! chsk {:open? true})))))

          :apparent-success))))

  (-chsk-connect! [chsk]
    (let [retry-id (enc/uuid-str)
          poll-fn ; async-poll-for-update-fn
          (fn poll-fn [retry-count]
            (tracef "async-poll-for-update!")
            (let [retry-fn
                  (fn []
                    (when (= @active-retry-id_ retry-id)
                      (let [retry-count* (inc retry-count)
                            backoff-ms   (backoff-ms-fn retry-count*)]
                        (warnf "Chsk is closed: will try reconnect (%s)" retry-count*)
                        (.setTimeout js/window (fn [] (poll-fn retry-count*)) backoff-ms))))]

              (reset! curr-xhr_
                (ajax-lite url
                  (merge ajax-opts
                    {:method :get ; :timeout-ms timeout-ms
                     :timeout-ms (or (:timeout-ms ajax-opts)
                                     default-client-side-ajax-timeout-ms)
                     :resp-type :text ; Prefer to do our own pstr reading
                     :params
                     (merge

                       ;; Note that user params here are actually POST params for
                       ;; convenience. Contrast: WebSocket params sent as query
                       ;; params since there's no other choice there.
                       params ; 1st (don't clobber impl.):

                       {:udt        (enc/now-udt) ; Force uncached resp
                        :client-id  client-id}

                       ;; A truthy :handshake? param will prompt server to
                       ;; reply immediately with a handshake response,
                       ;; letting us confirm that our client<->server comms
                       ;; are working:
                       (when-not (:open? @state_) {:handshake? true}))})

                  (fn ajax-cb [{:keys [?error ?content]}]
                    (if ?error
                      (cond
                        (= ?error :timeout) (poll-fn 0)
                        ;; (= ?error :abort) ; Abort => intentional, not an error
                        :else
                        (do (merge>chsk-state! chsk {:open? false})
                            (retry-fn)))

                      ;; The Ajax long-poller is used only for events, never cbs:
                      (let [content    ?content
                            ppstr      content
                            [clj]      (unpack packer ppstr)
                            handshake? (handshake? clj)]

                        (when handshake? (receive-handshake! :ajax chsk clj))

                        (merge>chsk-state! chsk {:open? true})
                        (poll-fn 0) ; Repoll asap

                        (when-not handshake?
                          (or
                           (when (= clj :chsk/timeout)
                             (when @debug-mode?_
                               (receive-buffered-evs! chs [[:debug/timeout]]))
                             :noop)

                            (let [buffered-evs clj] ; An application reply
                              (receive-buffered-evs! chs buffered-evs)))))))))))]

      (reset! active-retry-id_ retry-id)
      (poll-fn 0)
      chsk)))

      
(defn- new-ChAjaxSocket [opts]
  (map->ChAjaxSocket
    (merge
      {:state_           (atom {:type :ajax :open? false})
       :active-retry-id_ (atom "_pending")
       :ever-opened?_    (atom false)
       :curr-xhr_        (atom nil)}
      opts)))

      
(defrecord ChAutoSocket
  ;; Dynamic WebSocket/Ajax IChSocket implementation
  ;; Wraps a swappable ChWebSocket/ChAjaxSocket

  [ws-chsk-opts ajax-chsk-opts state_
   impl_ ; ChWebSocket or ChAjaxSocket
   ]

  IChSocket
  (-chsk-disconnect! [chsk reconn?]
    (when-let [impl @impl_]
      (-chsk-disconnect! impl reconn?)))

  ;; Possibly reset impl type:
  (-chsk-reconnect! [chsk]
    (when-let [impl @impl_]
      (-chsk-disconnect! impl :reconn)
      (-chsk-connect!    chsk)))

  (-chsk-send! [chsk ev opts]
    (if-let [impl @impl_]
      (-chsk-send! impl ev opts)
      (let [{?cb :cb} opts
            ?cb-fn (cb-chan-as-fn ?cb ev)]
        (chsk-send->closed! ?cb-fn))))

  (-chsk-connect! [chsk]
    ;; Starting with a simple downgrade-only strategy here as a proof of concept
    ;; TODO Later consider smarter downgrade or downgrade+upgrade strategies?
    (let [ajax-chsk-opts (assoc ajax-chsk-opts :state_ state_)
            ws-chsk-opts (assoc   ws-chsk-opts :state_ state_)

          ajax-conn!
          (fn []
            ;; Remove :auto->:ajax downgrade watch
            (remove-watch state_ :chsk/auto-ajax-downgrade)
            (-chsk-connect! (new-ChAjaxSocket ajax-chsk-opts)))

          ws-conn!
          (fn []
            ;; Configure :auto->:ajax downgrade watch
            (let [downgraded?_ (atom false)]
              (add-watch state_ :chsk/auto-ajax-downgrade
                (fn [_ _ old-state new-state]
                  (when-let [impl @impl_]
                    (when-let [ever-opened?_ (:ever-opened?_ impl)]
                      (when-not @ever-opened?_
                        (when (:last-error new-state)
                          (when (compare-and-set! downgraded?_ false true)
                            (warnf "Permanently downgrading :auto chsk -> :ajax")
                            (-chsk-disconnect! impl false)
                            (reset! impl_ (ajax-conn!))))))))))

            (-chsk-connect! (new-ChWebSocket ws-chsk-opts)))]

      (reset! impl_ (or (ws-conn!) (ajax-conn!)))
      chsk)))

      
(defn- new-ChAutoSocket [opts]
  (map->ChAutoSocket
    (merge
      {:state_ (atom {:type :auto :open? false})
       :impl_  (atom nil)}
      opts)))

      
(defn- get-chsk-url [protocol host path type]
  (let [protocol (case type
                   :ajax protocol
                   :ws   (if (= protocol "https:") "wss:" "ws:"))]
    (str protocol "//" (enc/path host path))))

      
(defn make-channel-socket-client!
  "Returns nil on failure, or a map with keys:
    :ch-recv ; core.async channel to receive `event-msg`s (internal or from
             ; clients). May `put!` (inject) arbitrary `event`s to this channel.
    :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
    :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
    :chsk    ; IChSocket implementer. You can usu. ignore this.

  Common options:
    :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
    :host           ; Server host (defaults to current page's host).
    :params         ; Map of any params to incl. in chsk Ring requests (handy
                    ; for application-level auth, etc.).
    :packer         ; :edn (default), or an IPacker implementation.
    :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
    :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?"

  [path &
   [{:keys [type host params recv-buf-or-n packer
            client-id ajax-opts wrap-recv-evs? backoff-ms-fn]
     :as   opts
     :or   {type          :auto
            recv-buf-or-n (async/sliding-buffer 2048) ; Mostly for buffered-evs
            packer        :edn
            client-id     (or (:client-uuid opts) ; Backwards compatibility
                              (enc/uuid-str))

            ;; TODO Deprecated. Default to false later, then eventually just
            ;; drop this option altogether? - here now for back compatibility:
            wrap-recv-evs? true

            backoff-ms-fn  enc/exp-backoff}}

    _deprecated-more-opts]]

  (have? [:in #{:ajax :ws :auto}] type)
  (have? enc/nblank-str? client-id)

  (when (not (nil? _deprecated-more-opts)) (warnf "`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."))
  (when (contains? opts :lp-timeout)       (warnf ":lp-timeout opt has CHANGED; please use :lp-timout-ms."))

  (let [packer (coerce-packer packer)

        win-loc         (enc/get-win-loc)
        win-protocol  (:protocol win-loc)
        host (or host (:host     win-loc))
        path (or path (:pathname win-loc))

        [ws-url ajax-url]
        (if-let [f (:chsk-url-fn opts)] ; Deprecated
          [(f path win-loc :ws) (f path win-loc :ajax)]
          [(get-chsk-url win-protocol host path :ws)
           (get-chsk-url win-protocol host path :ajax)])

        private-chs
        {:internal (chan (async/sliding-buffer 128))
         :state    (chan (async/sliding-buffer 10))
         ;; Nb must be >= max expected buffered-evs size:
         :<server  (chan (async/sliding-buffer 512))}

        common-chsk-opts
        {:client-id client-id
         :chs       private-chs
         :params    params
         :packer    packer}

        ws-chsk-opts
        (merge common-chsk-opts
          {:url           ws-url
           :backoff-ms-fn backoff-ms-fn})

        ajax-chsk-opts
        (merge common-chsk-opts
          {:url           ajax-url
           :ajax-opts     ajax-opts
           :backoff-ms-fn backoff-ms-fn})

        auto-chsk-opts
        {:ws-chsk-opts     ws-chsk-opts
         :ajax-chsk-opts ajax-chsk-opts}

        ?chsk
        (-chsk-connect!
          (case type
            :ws   (new-ChWebSocket    ws-chsk-opts)
            :ajax (new-ChAjaxSocket ajax-chsk-opts)
            :auto (new-ChAutoSocket auto-chsk-opts)))]

    (if-let [chsk ?chsk]
      (let [send-fn (partial chsk-send! chsk)

            ;; TODO map< is deprecated, prefer transducers (needs clj 1.7+)

            ev-ch
            (async/merge
              [(do              (:internal private-chs))
               (do              (:state    private-chs))
               (let [<server-ch (:<server  private-chs)]
                 (if wrap-recv-evs?
                   (async/map< (fn [ev] [:chsk/recv ev]) <server-ch)
                   <server-ch))]
              recv-buf-or-n)

            ev-msg-ch
            (async/map<
              ;; All client-side `event-msg`s go through this (allows client to
              ;; inject arbitrary synthetic events into router for handling):
              (fn ev->ev-msg [ev]
                (let [[ev-id ev-?data :as ev] (as-event ev)]
                  {:ch-recv ev-ch
                   :send-fn send-fn
                   :state   (:state_ chsk)
                   :event   ev
                   :id      ev-id
                   :?data   ev-?data}))
              ev-ch)]

        {:chsk    chsk
         :ch-recv ev-msg-ch ; Public `ev`s->`ev-msg`s ch
         :send-fn send-fn
         :state   (:state_ chsk)})

      (warnf "Failed to create channel socket"))))

;;;; Event-msg routers (handler loops)

(defn- -start-chsk-router!
  [server? ch-recv event-msg-handler opts]
  (let [{:keys [trace-evs? error-handler]} opts
        ch-ctrl (chan)]

    (go-loop []
      (let [[v p] (async/alts! [ch-recv ch-ctrl])
            stop? (= p ch-ctrl)]

        (when-not stop?
          (let [{:as event-msg :keys [event]} v
                [_ ?error]
                (enc/catch-errors
                  (when trace-evs? (tracef "Pre-handler event: %s" event))
                  (event-msg-handler
                    (if server?
                      (have! server-event-msg? event-msg)
                      (have! client-event-msg? event-msg))))]

            (when-let [e ?error]
              (let [[_ ?error2]
                    (enc/catch-errors
                      (if-let [eh error-handler]
                        (error-handler e event-msg)
                        (errorf e "Chsk router `event-msg-handler` error: %s" event)))]
                (when-let [e2 ?error2]
                  (errorf e2 "Chsk router `error-handler` error: %s" event))))

            (recur)))))

    (fn stop! [] (async/close! ch-ctrl))))

(defn start-server-chsk-router!
  "Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
  log any errors. Returns a `(fn stop! [])`.

  For performance, you'll likely want your `event-msg-handler` fn to be
  non-blocking (at least for slow handling operations). Clojure offers
  a rich variety of tools here including futures, agents, core.async,
  etc.

  Advanced users may also prefer to write their own loop against `ch-recv`."
  [ch-recv event-msg-handler & [{:as opts :keys [trace-evs? error-handler]}]]
  (-start-chsk-router! :server ch-recv event-msg-handler opts))

(defn start-client-chsk-router!
  "Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
  log any errors. Returns a `(fn stop! [])`.

  For performance, you'll likely want your `event-msg-handler` fn to be
  non-blocking (at least for slow handling operations). Clojure offers
  a rich variety of tools here including futures, agents, core.async,
  etc.

  Advanced users may also prefer to write their own loop against `ch-recv`."
  [ch-recv event-msg-handler & [{:as opts :keys [trace-evs? error-handler]}]]
  (-start-chsk-router! (not :server) ch-recv event-msg-handler opts))

;;;; Platform aliases

(def event-msg?                                client-event-msg?)

(def make-channel-socket!
                                    
         make-channel-socket-client!)

(def start-chsk-router!
                                  
         start-client-chsk-router!)

;;;; Deprecated

     
                             
                                                       
                             
                                    
                                              
                                                                

      
(defn start-chsk-router-loop!
  "DEPRECATED: Please use `start-chsk-router!` instead"
  [event-handler ch-recv]
  (start-client-chsk-router! ch-recv
    ;; Old handler form: (fn [ev ch-recv])
    (fn [ev-msg] (event-handler (:event ev-msg) (:ch-recv ev-msg)))))

(def set-logging-level! "DEPRECATED. Please use `timbre/set-level!` instead" timbre/set-level!)

       (def ajax-call "DEPRECATED: Please use `ajax-lite` instead" enc/ajax-lite)
      
(def default-chsk-url-fn "DEPRECATED"
  (fn [path {:as location :keys [protocol host pathname]} websocket?]
    (let [protocol
          (if websocket?
            (if (= protocol "https:") "wss:" "ws:")
            protocol)]
      (str protocol "//" host (or path pathname)))))

;;;;;;;;;;;; This file autogenerated from src/taoensso/sente.cljx
