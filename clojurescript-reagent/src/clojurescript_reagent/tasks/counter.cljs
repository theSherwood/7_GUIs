(ns clojurescript-reagent.counter
  (:require [reagent.core :as reagent :refer [atom]]
            [clojurescript-reagent.components.card :refer [card]]))

(defonce click-count (atom 0))

(defn counter []
  (card 
   "Counter"
   [:<> @click-count
    [:button {:on-click #(swap! click-count inc)} "+"]]))