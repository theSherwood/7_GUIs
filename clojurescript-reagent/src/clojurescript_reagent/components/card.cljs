(ns clojurescript-reagent.components.card
  (:require
   [clojure.string :refer [replace]]))

(defn main [child-title children]
  (let [title (replace child-title #" " "-")]
   [:section {:class (str "Card " title)}
    [:h2 child-title]
    children]))
