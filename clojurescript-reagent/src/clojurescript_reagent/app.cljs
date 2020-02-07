(ns clojurescript-reagent.app
  (:require [reagent.core :refer [atom]]))

(defonce app-state (atom {:text "Hello world!"}))

(defn app []
  [:div
   [:h1 (:text @app-state)]
   [:h3 "Edit this and watch it change!"]])