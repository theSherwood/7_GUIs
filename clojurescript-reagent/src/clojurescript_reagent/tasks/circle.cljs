(ns clojurescript-reagent.circle
  (:require [reagent.core :as r]
            [clojurescript-reagent.components.card :as card]))

(def BASE_RADIUS 30)

(defn overlay [{:keys [end-resize *resizing *radius]}]
  [:<> 
   [:div {:class "overlay" :on-click end-resize}]
   [:div {:class "resizer"}
    [:p "Adjust radius of circle at " (:x @*resizing) ", " (:y @*resizing)]
    [:p @*radius]
    [:input {:type       "range" 
             :min        0 
             :max        100 
             :value      @*radius 
             :on-change (fn [e]
                          (reset! *radius
                                  (js/Number (.. e -target -value))))}]]])

(defn circle-svg [cir handle-right-click]
  [:circle {:cx              (:x cir)
            :cy              (:y cir)
            :r               (:r cir)
            :fill            "white" 
            :stroke          "black"
            :on-click        (fn [e] 
                               (.preventDefault e)
                               (.stopPropagation e)) 
            :on-context-menu handle-right-click}])

(defn main []
  (r/with-let
    [*step      (r/atom 0)
     *snapshots (r/atom [[]])
     *radius    (r/atom BASE_RADIUS)
     *resizing  (r/atom false)
     *present   (r/atom [])

     handle-resize (fn handle-resize [resizing radius]
                     (and resizing
                          (reset! *present
                                  (mapv #(if (and (= (% :x) (resizing :x))
                                                  (= (% :y) (resizing :y)))
                                           (assoc % :r radius) %)
                                        @*present))))

     _ (add-watch *resizing :resize #(handle-resize %4 @*radius))
     _ (add-watch *radius :resize #(handle-resize @*resizing %4))
     _ (add-watch *snapshots :update-present #(reset! *present (%4 (inc @*step))))
     _ (add-watch *step :update-present #(reset! *present (@*snapshots %4)))

     handle-right-click (fn handle-right-click [e]
                          (.preventDefault e)
                          (.stopPropagation e)
                          (let [circle (.. e -target)]
                            (reset! *resizing {:x (.. circle -cx -baseVal -value)
                                               :y (.. circle -cy -baseVal -value)
                                               :r (.. circle -r -baseVal -value)})
                            (reset! *radius (.. circle -r -baseVal -value))))
     add-snapshot (fn add-snapshot [new-snapshot]
                    (reset! *snapshots
                            (conj (subvec @*snapshots 0 (inc @*step))
                                  new-snapshot))
                    (swap! *step inc))
     add-circle (fn add-circle [e]
                  (let [x (.. e -nativeEvent -layerX)
                        y (.. e -nativeEvent -layerY)]
                    (add-snapshot (conj (@*snapshots @*step) {:x x :y y :r BASE_RADIUS}))))
     undo (defn undo []
            (reset! *step (max (- @*step 1) 0)))
     redo (defn redo []
            (reset! *step (min (+ @*step 1) (- (count @*snapshots) 1))))
     end-resize (fn end-resize []
                  (and (not= @*radius (@*resizing :r))
                       (do
                         (reset! *resizing false)
                         (add-snapshot @*present)
                         (reset! *radius BASE_RADIUS)))
                  (reset! *resizing false))]
    [card/main
     "Circle Drawer"
     [:div {:class "wrapper"}
      [:div {:class "buttons"}
       [:button {:on-click undo
                 :disabled (= @*step 0)} "Undo"]
       [:button {:on-click redo
                 :disabled (= @*step (- (count @*snapshots) 1))} "Redo"]]
      [:div {:class "canvas"}
       [:svg {:on-click add-circle}
        (doall
         (for [cir @*present]
           ^{:key (str (:x cir) (:y cir))}
           [circle-svg cir handle-right-click]))]]
      (when @*resizing [overlay {:end-resize end-resize
                                 :*radius    *radius
                                 :*resizing  *resizing}])]]))