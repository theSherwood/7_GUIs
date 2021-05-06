(ns clojurescript-reagent.flight
  (:require [reagent.core :as r]
            [clojure.string :as string]
            [clojurescript-reagent.components.card :as card]))

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

(defn main []
  (r/with-let
    [*flight-type (r/atom :1)
     *start-date  (r/atom (as-string (new js/Date)))
     *return-date (r/atom (as-string (new js/Date)))
     *errors      (r/atom {:1 nil :2 nil :3 nil})

     _ (add-watch *start-date :error1
                  #(reset! *errors (assoc @*errors :1 (false? (as-date %4)))))
     _ (add-watch *return-date :error2
                  #(reset! *errors (assoc @*errors :2 (false? (as-date %4)))))
     _ (add-watch *return-date :error3
                  #(reset! *errors (assoc @*errors :3 (< (as-date %4) (as-date @*start-date)))))
     _ (add-watch *start-date :error3
                  #(reset! *errors (assoc @*errors :3 (< (as-date @*return-date) (as-date %4)))))

     book (fn book []
            (let [time-strings {:1 (str " for " @*start-date)
                                :2 (str " from " @*start-date " to " @*return-date)}
                  index (keyword @*flight-type)]
              (js/alert (str "You have booked a "
                             (index flight-map)
                             (index time-strings)))))]
    [card/main
     "Flight Booker"
     [:div
      [:select {:value     @*flight-type
                :on-change (fn [e] (reset! *flight-type
                                           (.. e -target -value)))}
       [:option {:value :1} (:1 flight-map)]
       [:option {:value :2} (:2 flight-map)]]
      [:input {:value @*start-date
               :class (if (@*errors :1) "error" "")
               :on-change (fn [e] (reset! *start-date
                                          (.. e -target -value)))}]
      [:input {:value @*return-date
               :class (if (@*errors :2) "error" "")
               :on-change (fn [e] (reset! *return-date
                                          (.. e -target -value)))
               :disabled (= @*flight-type :1)}]
      [:button {:on-click book
                :disabled (or (@*errors :1) (@*errors :2) (@*errors :3))}
       "Book"]]]))