(ns rente.app
  (:require [clojure.tools.logging :as log]
            [com.stuartsierra.component :as component]
            [rente.ws :as ws]))

(defrecord App [ws-connection]
  component/Lifecycle
  (start [component]
    (log/debug "Application Logic Started")
    component)
  (stop [component]
    (log/debug "Application Logic Stopped")
    component))

(defn new-app []
  (map->App {}))
