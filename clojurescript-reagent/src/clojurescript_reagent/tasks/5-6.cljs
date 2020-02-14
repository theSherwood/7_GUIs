(ns tasks5to6.core
    (:require [reagent.core :as reagent :refer [atom]]
              [clojure.string :as string]
              [components.core :as components]))


;; CRUD

(defonce prefix (atom ""))
(defonce entries ( atom ['("Paul" "Atreides")
                     '("Gurney" "Halleck")
                     '("Duncan" "Idaho")]))
(defonce filtered-entries (atom ()))
(defonce first-name (atom ""))
(defonce surname (atom ""))
(defonce selected (atom -1))

(defn filter-entries []
  (reset! filtered-entries
          (->> @entries
               (map-indexed (fn [idx entry] (list (first entry) (second entry) idx)))
               (filter #(string/starts-with?
                         (string/lower-case (second %))
                         (string/lower-case @prefix)))
               (map #(identity [:option {:value (nth % 2)
                                         :on-click (fn [] (reset! selected (nth % 2)))}
                                (second %) ", " (first %)])))))

(filter-entries)

(add-watch prefix :clear-selected #(reset! selected -1))
(add-watch prefix :filter-entries filter-entries)
(add-watch entries :filter-entries filter-entries)

(defn add-entry []
  (swap! entries conj (list @first-name @surname)))
(defn update-entry []
  (if (> @selected -1)
    (swap! entries assoc @selected (list @first-name @surname))))
(defn delete-entry []
  (if (> @selected -1)
    (reset! entries 
            (vec (concat (subvec @entries 0 @selected) 
                         (subvec @entries (inc @selected)))))))

(defn crud []
  (components/card
   "CRUD"
   [:div {:class "wrapper"}
    "Filter prefix: "
    [:input {:value @prefix :on-change (fn [e] (reset! prefix js/e.target.value))}]
    (into [:select {:size "4" :value @selected }] @filtered-entries)
    [:div
     "Name: "
     [:input {:value @first-name :on-change (fn [e] (reset! first-name js/e.target.value))}]
     "Surname: "
     [:input {:value @surname :on-change (fn [e] (reset! surname js/e.target.value))}]]
    [:div {:class "buttons"}
     [:button {:on-click add-entry} "Create"]
     [:button {:on-click update-entry} "Update"]
     [:button {:on-click delete-entry} "Delete"]]]))


;; Circle Drawer

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

(defn circle-drawer []
  (components/card
   "Circle Drawer"
   [:div {:class "wrapper"}
    [:div {:class "buttons"}
     [:button {:on-click undo
               :disabled (= @step 0)} "Undo"]
     [:button {:on-click redo 
               :disabled (= @step (- (count @snapshots) 1))} "Redo"]]
    [:div {:class "canvas"}
     (into [:svg {:on-click add-circle}] (map circle-svg @present))]
    (and @resizing (overlay))]))
