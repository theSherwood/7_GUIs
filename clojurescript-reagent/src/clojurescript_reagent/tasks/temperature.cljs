(ns clojurescript-reagent.temperature
  (:require [reagent.core :as r]
            [clojure.string :as string]
            [clojurescript-reagent.components.card :as card]))

(defn is-valid? [n] 
  (and (< (count n) 15)
       (cond
         (re-find #"^-?\d*$" n) true
         (re-find #"^-?\d+[.]?\d*$" n) true
         :else false)))

(defn get-f [c]
  (str (.toFixed (+ (* (/ 9 5) (float c)) 32) 2)))
(defn get-c [f]
  (str (.toFixed (* (/ 5 9) (- (float f) 32)) 2)))

(defn remove-0 [n]
  (cond
    (re-find #"^0\d+" n) (string/join (rest n))
    (re-find #"^-0\d+" n) (str "-" (string/join (rest (rest n))))
    :else n))

(defn main []
  (r/with-let
    [*c (r/atom "0")
     *f (r/atom "32")
     _ (set-validator! *c #(is-valid? %))
     _ (set-validator! *f #(is-valid? %))
     update-c (fn update-c [e]
                (let [val (remove-0 (.. e -target -value))]
                  (do
                    (reset! *c val)
                    (reset! *f (get-f val)))))
     update-f (fn update-f [e]
                (let [val (remove-0 (.. e -target -value))]
                  (do
                    (reset! *f val)
                    (reset! *c (get-c val)))))]
    [card/main
     "Temperature Converter"
     [:<>
      [:span [:input
              {:value @*c :on-change update-c}] " Celsius"]
      "="
      [:span [:input
              {:value @*f :on-change update-f}] " Fahrenheit"]]]))
