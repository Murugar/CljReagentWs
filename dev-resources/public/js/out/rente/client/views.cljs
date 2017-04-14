(ns rente.client.views
  (:require [rente.client.ws :as socket]))

(defn main [data]
  [:div {:class "container-fluid"}
  [:nav {:class "navbar navbar-toggleable-md navbar-primary bg-faded"}
    [:a {:class "navbar-brand" :href "#"} "Clojure Reagent Web Socket!"]
    
     [:div {:class "navbar-collapse" :id "navbarNavAltMarkup"}
    
      [:div {:class "navbar-nav"}
            [:a {:class "nav-link nav-item active" :href "#"} "Home"]
            [:a {:class "nav-link nav-item" :href "#"} "Contacts"]
            [:a {:class "nav-link nav-item disabled" :href "#"} "Disabled"]
      ]
     ]
  ]

  [:br]
  
  [:div {:class "container"}
  [:div {:class "card card-info"}
   [:div {:class "card-header bg-warning"} "Clojure Reagent Web Socket!"]
   [:div {:class "card-block"}
   [:h1 {:class "text-primary"} (:title @data)]
   [:div {:class "text-danger"} "Hello World! This is Reagent Speaking!"]
   [:br]
   [:br]
   [:div "Look in Your Browsers Developer Console to see the Web Socket Communications, When Clicking Below Buttons."]
   [:br]
   [:br]
   [:button {:on-click socket/test-socket-callback :class "btn btn-danger"} "Send Message Callback"]
   [:br]
   [:br]
   [:button  {:on-click socket/test-socket-event :class "btn btn-primary"} "Send Message Event"]]]]])

