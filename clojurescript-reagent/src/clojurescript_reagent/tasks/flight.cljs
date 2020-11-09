(ns clojurescript-reagent.flight
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string :as string]
            [clojurescript-reagent.components.card :refer [card]]))

(defn as-date [date-string]
  (let [date-vec (reverse (string/split date-string #"[.]"))]
    (if (or (not= 3 (count date-vec))
            (not= 4 (count (nth date-vec 0 false))) 
            (not= 2 (count (nth date-vec 1 false)))
            (not= 2 (count (nth date-vec 2 false))))
      false
      (let [date (js/Date. (string/join "-" date-vec))]
        (if (.valueOf date) 
          (.valueOf date)
          false)))))

(defn as-string [date]
  (as-> date $
    (.toISOString $)
    (take 10 $)
    (string/join $)
    (string/split $ #"-")
    (reverse $)
    (string/join "." $)))

(def flight-map {:1 "one-way flight"
                 :2 "return flight"})

(defonce flight-type (atom :1))
(defonce start-date (atom (as-string (new js/Date))))
(defonce return-date (atom (as-string (new js/Date))))
(defonce errors (atom {:1 nil :2 nil :3 nil}))

(add-watch start-date :error1 
           #(reset! errors (assoc @errors :1 (false? (as-date %4)))))
(add-watch return-date :error2 
           #(reset! errors (assoc @errors :2 (false? (as-date %4)))))
(add-watch start-date :error3 
           #(reset! errors (assoc @errors :3 (< (as-date @return-date) (as-date %4)))))
(add-watch return-date :error3 
           #(reset! errors (assoc @errors :3 (< (as-date %4) (as-date @start-date)))))
;; TODO: handle error if booking date is before today.

(defn book []
  (let [time-strings {:1 (str " for " @start-date) 
                      :2 (str " from " @start-date " to " @return-date)}
        index (keyword @flight-type)]
    (js/alert (str "You have booked a " 
                   (index flight-map) 
                   (index time-strings)))))

(defn flight []
  (card
   "Flight Booker"
   [:div
    [:select {:value @flight-type :on-change (fn [e] (reset! flight-type js/e.target.value))}
     [:option {:value :1} (:1 flight-map)]
     [:option {:value :2} (:2 flight-map)]]
    [:input {:value @start-date
             :class (if (@errors :1) "error" "")
             :on-change (fn [e] (reset! start-date js/e.target.value))}]
    [:input {:value @return-date 
             :class (if (@errors :2) "error" "")
             :on-change (fn [e] (reset! return-date js/e.target.value)) 
             :disabled (= @flight-type :1)}]
    [:button {:on-click book 
              :disabled (or (@errors :1) (@errors :2) (@errors :3))} 
     "Book"]]))