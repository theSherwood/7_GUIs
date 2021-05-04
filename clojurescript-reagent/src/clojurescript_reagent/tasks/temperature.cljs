(ns clojurescript-reagent.temperature
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string :as string]
            [clojurescript-reagent.components.card :as card]))

(defonce c (atom "0"))
(defonce f (atom "32"))

(defn is-valid? [n] 
  (and (< (count n) 10)
       (cond
         (re-find #"^-?\d*$" n) true
         (re-find #"^-?\d+[.]?\d*$" n) true
         :else false)))

(set-validator! c #(is-valid? %))
(set-validator! f #(is-valid? %))

(defn get-f [c]
  (str (.toFixed (+ (* (/ 9 5) (float c)) 32) 2)))
(defn get-c [f]
  (str (.toFixed (* (/ 5 9) (- (float f) 32)) 2)))

(defn remove0 [n]
  (cond
    (re-find #"^0\d+" n) (string/join (rest n))
    (re-find #"^-0\d+" n) (str "-" (string/join (rest (rest n))))
    :else n))

(defn update-c [e]
  (let [val (remove0 js/e.target.value)]
    (do
      (reset! c val)
      (reset! f (get-f val)))))
(defn update-f [e]
  (let [val (remove0 js/e.target.value)]
    (do
      (reset! f val)
      (reset! c (get-c val)))))

(defn main []
  [card/main
   "Temperature Converter"
   [:<>
    [:span [:input
            {:value @c :on-change update-c}] " Celsius"]
    "="
    [:span [:input
            {:value @f :on-change update-f}] " Fahrenheit"]]])
