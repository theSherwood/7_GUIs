(ns clojurescript-reagent.components.card)

(defn card [child-title children]
  (let [title (clojure.string/replace child-title #" " "-")]
   [:section {:class (str "Card " title)}
    [:h2 child-title]
    children]))
