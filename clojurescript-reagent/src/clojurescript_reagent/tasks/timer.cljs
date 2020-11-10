(ns clojurescript-reagent.timer
  (:require [reagent.core :as reagent :refer [atom]]
            [clojurescript-reagent.components.card :refer [card]]))

(def MAX 30000)

(defonce duration (atom 5000))
(defonce start (atom nil))
(defonce now (atom nil))
(defonce interval (atom nil))

(defn create-interval []
  (js/setInterval 
   #(reset! now (.valueOf (js/Date.)))
   10))
(defn start-timer []
  (js/clearInterval @interval)
  (reset! start (.valueOf (js/Date.)))
  (reset! now @start)
  (reset! interval (create-interval)))

(start-timer)

(defn timer []
  (card
   "Timer"
   [:div {:class "wrapper"}
    "Elapsed Time:"
    [:progress {:value (/ (- @now @start) @duration)}]
    [:div {:class "duration"} (.toFixed (/ @duration 1000) 1)]
    "Duration"
    [:input {:type "range" :min 0 :max MAX :value @duration 
             :on-change (fn [e] (reset! duration js/e.target.value))}]
    [:button {:on-click start-timer} "Reset Timer"]]))