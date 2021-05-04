(ns clojurescript-reagent.circle
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string :as string]
            [clojurescript-reagent.components.card :as card]))

(def BASE_RADIUS 30)

(defonce step (atom 0))
(defonce snapshots (atom [[]]))
(defonce radius (atom BASE_RADIUS))
(defonce resizing (atom false))
(defonce present (atom []))

(defn handle-resize [resizing radius]
  (and resizing
       (reset! present 
               (mapv #(if (and (= (% :x) (resizing :x))
                               (= (% :y) (resizing :y)))
                        (assoc % :r radius) %) 
                     @present))))

(add-watch resizing :resize #(handle-resize %4 @radius))
(add-watch radius :resize #(handle-resize @resizing %4))

;; TODO reduce changes to present
; (add-watch present :logger #(js/console.log "present changed"))

(add-watch snapshots :update-present #(reset! present (%4 (inc @step))))
(add-watch step :update-present #(reset! present (@snapshots %4)))

(defn handle-right-click [e]
  (.preventDefault e) 
  (.stopPropagation e)
  (let [circle js/e.target]
    (reset! resizing {:x js/circle.cx.baseVal.value
                      :y js/circle.cy.baseVal.value
                      :r js/circle.r.baseVal.value})
    (reset! radius js/circle.r.baseVal.value)))

(defn add-snapshot [new-snapshot]
  (reset! snapshots (conj (subvec @snapshots 0 (inc @step)) new-snapshot))
  (swap! step inc))

(defn add-circle [e]
    (let [x js/e.nativeEvent.layerX
          y js/e.nativeEvent.layerY]
      (add-snapshot (conj (@snapshots @step) {:x x :y y :r BASE_RADIUS}))))

(defn undo []
  (reset! step (max (- @step 1) 0)))

(defn redo []
  (reset! step (min (+ @step 1) (- (count @snapshots) 1))))

(defn end-resize []
  (and (not= @radius (@resizing :r))
       (do 
         (reset! resizing false)
         (add-snapshot @present)
         (reset! radius BASE_RADIUS)
         ))
  (reset! resizing false))

(defn overlay []
  [:<> 
   [:div {:class "overlay" :on-click end-resize}]
   [:div {:class "resizer"}
    [:p "Adjust radius of circle at " (:x @resizing) ", " (:y @resizing)]
    [:p @radius]
    [:input {:type "range" 
             :min 0 
             :max 100 
             :value @radius 
             :on-change (fn [e] (reset! radius (js/Number js/e.target.value)))}]]])

(defn circle-svg [cir]
  [:circle {:cx (:x cir)
            :cy (:y cir)
            :r (:r cir)
            :fill "white" 
            :stroke "black"
            :on-click (fn [e] (.preventDefault e) (.stopPropagation e)) 
            :on-context-menu handle-right-click}])

(defn main []
  [card/main
   "Circle Drawer"
   [:div {:class "wrapper"}
    [:div {:class "buttons"}
     [:button {:on-click undo
               :disabled (= @step 0)} "Undo"]
     [:button {:on-click redo
               :disabled (= @step (- (count @snapshots) 1))} "Redo"]]
    [:div {:class "canvas"}
     (into [:svg {:on-click add-circle}] (map circle-svg @present))]
    (and @resizing (overlay))]])