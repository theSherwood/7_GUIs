(ns clojurescript-reagent.app
  (:require [tasks.core :as tasks]))

(defn app []
  [:main {:class "App"}
   [:a {:href "../../../index.html"} "Home"]
   
   [tasks/counter]
   [tasks/temperature-converter]])