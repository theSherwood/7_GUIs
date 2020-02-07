(ns tasks.core
    (:require [reagent.core :as reagent :refer [atom]]
              [components.core :as components]))

;; Counter

(defonce click-count (atom 0))

(defn counter []
  (components/card 
   "Counter"
   [:<> @click-count
    [:button {:on-click #(swap! click-count inc)} "+"]]))

;; Temperature Converter

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
  (str (int (+ (* (/ 9 5) (int c)) 32))))
(defn get-c [f]
  (str (int (* (/ 5 9) (- (int f) 32)))))

(defn remove0 [n]
  (cond
    (re-find #"^0\d+" n) (clojure.string/join (rest n))
    (re-find #"^-0\d+" n) (str "-" (clojure.string/join (rest (rest n))))
    :else n))

(defn update-c [e]
  (let [val (remove0 e.target.value)]
    (do
      (reset! c val)
      (reset! f (get-f val)))))
(defn update-f [e]
  (let [val (remove0 e.target.value)]
    (do
      (reset! f val)
      (reset! c (get-c val)))))

(defn temperature-converter []
  (components/card
   "Temperature Converter"
   [:<> 
    [:span [:input 
            {:value @c :on-change update-c}] " Celsius"]
    "="
    [:span [:input 
            {:value @f :on-change update-f}] " Fahrenheit"]]))


