(ns clojurescript-reagent.timer
  (:require [reagent.core :as r]
            [clojurescript-reagent.components.card :as card]))

(def MAX 30000)

(defn main []
  (r/with-let
    [*duration (r/atom 5000)
     *start    (r/atom nil)
     *now      (r/atom nil)
     *interval (r/atom nil)

     create-interval! (fn create-interval! []
                        (js/setInterval
                         #(reset! *now (.valueOf (js/Date.)))
                         10))
     start-timer!     (fn start-timer! []
                        (js/clearInterval @*interval)
                        (reset! *start (.valueOf (js/Date.)))
                        (reset! *now @*start)
                        (reset! *interval (create-interval!)))

     _ (start-timer!)]
    [card/main
     "Timer"
     [:div {:class "wrapper"}
      "Elapsed Time:"
      [:progress {:value (/ (- @*now @*start) @*duration)}]
      [:div {:class "duration"} (.toFixed (/ @*duration 1000) 1)]
      "Duration"
      [:input {:type "range"
               :min 0
               :max MAX
               :value @*duration
               :on-change (fn [e] (reset! *duration (.. e -target -value)))}]
      [:button {:on-click start-timer!} "Reset Timer"]]]))