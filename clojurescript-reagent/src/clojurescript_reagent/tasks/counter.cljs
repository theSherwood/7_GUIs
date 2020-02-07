(ns tasks.core
    (:require [reagent.core :as reagent :refer [atom]]
              [components.core :as components]))

(defonce click-count (atom 0))

(defn counter []
  (components/card 
   "Counter"
   [:<> @click-count
    [:button {:on-click #(swap! click-count inc)} "+"]]))