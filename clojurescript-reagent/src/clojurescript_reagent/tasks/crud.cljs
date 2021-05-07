(ns clojurescript-reagent.crud
  (:require [reagent.core :as r]
            [reagent.ratom :as ratom]
            [clojure.string :as string]
            [clojurescript-reagent.components.card :as card]))

(defn filter-entries [entries prefix]
  (filterv #(string/starts-with?
            (string/lower-case (second %))
            (string/lower-case prefix))
          entries))

(defn find-index-of [pred items]
  (first (keep-indexed #(if (pred %2) %1) items)))

(defn main [entries]
  (r/with-let
    [*prefix          (r/atom "")
     *entries         (r/atom (mapv
                               (fn [[fst snd]] [fst snd (random-uuid)])
                               entries))
     *filtered-entries (ratom/reaction (filter-entries @*entries @*prefix))
     *first-name       (r/atom "")
     *surname          (r/atom "")

     *selected         (r/atom nil)
     resolve-selected  #(or @*selected (nth (first @*filtered-entries) 2 nil))

     _ (add-watch *prefix :set-selected
                  #(reset! *selected 
                           (nth (first (filter-entries @*entries %4)) 2)))

     add-entry!    (fn add-entry! []
                     (let [id (random-uuid)]
                       (swap! *entries conj (vector @*first-name @*surname id))
                       (reset! *selected id)))
     update-entry! (fn update-entry! []
                     (let [selected (resolve-selected)
                           idx (find-index-of #(= selected (nth % 2)) @*entries)]
                       (swap! *entries assoc idx (vector @*first-name @*surname selected))))
     delete-entry! (fn delete-entry! []
                     (let [selected (resolve-selected)
                           entries  @*entries
                           filtered-entries @*filtered-entries
                           entries-idx (find-index-of #(= selected (nth % 2))
                                                      entries)
                           filtered-idx (find-index-of #(= selected (nth % 2))
                                                       filtered-entries)]
                       (reset! *entries
                               (vec (concat (subvec entries 0 entries-idx)
                                            (subvec entries (inc entries-idx)))))
                       (if (= (nth (last filtered-entries) 2)
                                selected)
                         (reset! *selected
                                 (nth (last (butlast filtered-entries)) 2))
                         (reset! *selected
                                 (nth 
                                  (nth filtered-entries (inc filtered-idx))
                                  2)))))]
    [card/main
     "CRUD"
     [:div {:class "wrapper"}
      "Filter prefix: "
      [:input {:value @*prefix
               :on-change (fn [e] (reset! *prefix (.. e -target -value)))}]
      [:select {:size "4" :value @*selected}
       (doall
        (for [[fst lst id] @*filtered-entries]
          ^{:key id}
          [:option
           {:value id
            :on-click #(reset! *selected id)}
           lst ", " fst]))]
      [:div
       "Name: "
       [:input {:value @*first-name
                :on-change (fn [e] (reset! *first-name (.. e -target -value)))}]
       "Surname: "
       [:input {:value @*surname
                :on-change (fn [e] (reset! *surname (.. e -target -value)))}]]
      [:div {:class "buttons"}
       [:button {:on-click add-entry!} "Create"]
       [:button {:on-click update-entry!} "Update"]
       [:button {:on-click delete-entry!} "Delete"]]]]))