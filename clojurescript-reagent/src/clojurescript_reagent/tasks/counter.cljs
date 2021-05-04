(ns clojurescript-reagent.counter
  (:require [reagent.core :as r]
            [clojurescript-reagent.components.card :as card]))

(defn main []
  (r/with-let [*count (r/atom 0)]
    [card/main
     "Counter"
     [:<> @*count
      [:button {:on-click #(swap! *count inc)} "+"]]]))