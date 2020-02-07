(ns tasks.core
    (:require [reagent.core :as reagent :refer [atom]]
              [clojure.string :as string]
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

(defn temperature-converter []
  (components/card
   "Temperature Converter"
   [:<> 
    [:span [:input 
            {:value @c :on-change update-c}] " Celsius"]
    "="
    [:span [:input 
            {:value @f :on-change update-f}] " Fahrenheit"]]))


;; Flight Booker

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

(defn flight-booker []
  (components/card
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


;; Timer

(def MAX 30000)

(defonce duration (atom 5000))
(defonce start (atom nil))
(defonce now (atom nil))
(defonce interval (atom nil))

(defn create-interval []
  (js/setInterval 
   #(reset! now (.valueOf (js/Date.)))
   10))
(defn start-timer []
  (js/clearInterval @interval)
  (reset! start (.valueOf (js/Date.)))
  (reset! now @start)
  (reset! interval (create-interval)))

(start-timer)

(defn timer []
  (components/card
   "Timer"
   [:div {:class "wrapper"}
    "Elapsed Time:"
    [:progress {:value (/ (- @now @start) @duration)}]
    [:div {:class "duration"} (.toFixed (/ @duration 1000) 1)]
    "Duration"
    [:input {:type "range" :min 0 :max MAX :value @duration 
             :on-change (fn [e] (reset! duration js/e.target.value))}]
    [:button {:on-click start-timer} "Reset Timer"]]))
