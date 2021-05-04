(ns clojurescript-reagent.crud
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string :as string]
            [clojurescript-reagent.components.card :as card]))

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

(defn main []
  [card/main
   "CRUD"
   [:div {:class "wrapper"}
    "Filter prefix: "
    [:input {:value @prefix :on-change (fn [e] (reset! prefix js/e.target.value))}]
    (into [:select {:size "4" :value @selected}] @filtered-entries)
    [:div
     "Name: "
     [:input {:value @first-name :on-change (fn [e] (reset! first-name js/e.target.value))}]
     "Surname: "
     [:input {:value @surname :on-change (fn [e] (reset! surname js/e.target.value))}]]
    [:div {:class "buttons"}
     [:button {:on-click add-entry} "Create"]
     [:button {:on-click update-entry} "Update"]
     [:button {:on-click delete-entry} "Delete"]]]])