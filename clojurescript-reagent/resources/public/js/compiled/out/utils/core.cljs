(ns utils.core)

(defn log 
  ([x] (js/console.log (clj->js x)))
  ([x & args] (apply js/console.log (cons x (map clj->js args)) )))