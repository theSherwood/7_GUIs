(ns clojurescript-reagent.cells.parse
  (:require [clojure.string :refer [lower-case upper-case split]]
            [cljs.core :refer [clj->js]]))

(defn exp [x n]
  (reduce * (repeat n x)))

(def operations 
  {:sum +
   :sub -
   :mul *
   :div /
   :mod mod
   :exp exp
   })

(defn includes [coll x]
  (not= (.indexOf coll x) -1))

(defn cartesian-product [letters, numbers]
  (for [c letters r numbers] (str c r)))

(defn find-vec-range [vec start end]
  (let [start-idx (.indexOf vec start)
        end-idx (.indexOf vec end)]
    (if (or (= start-idx -1) (= end-idx -1) (> start-idx end-idx))
      []
      (subvec vec start-idx (inc end-idx)))))

(defn split-operand [operand]
  (let [op (str operand)]
    [(first (re-seq #"[a-zA-Z]+" op)) (first (re-seq #"\d+" op))]))

(defn well-formed? [operand]
    (not (nil? (re-find #"[a-zA-Z]+\d+" operand)))) 

(defprotocol IParser
  (get-range [this start end])
  (apply-to-range [this op start end])
  (apply-once [this op operand-1 operand-2])
  (parse-operand [this operand])
  (parse-operation [this op formula])
  (parse [this contents]))

(defrecord Parser [current-string cells columns rows]
  IParser
  (get-range
    [this start end]
    (let [start (split-operand start)
          end (split-operand end)
          letters (find-vec-range
                   columns
                   (first start)
                   (first end))
          numbers (find-vec-range
                   rows
                   (second start)
                   (second end))]
      (cartesian-product letters numbers)))
  (apply-to-range
    [this op start end]
    (if (and (not (well-formed? start)) (well-formed? end))
      @current-string
      (let [range (get-range this start end)]
        (reduce (op operations)
                (map #(js/Number (parse this ((keyword %) @cells)))
                     range)))))
  (apply-once
    [this op operand-1 operand-2]
    (let [fst (parse-operand this operand-1)
          snd (parse-operand this operand-2)]
      (if (or (nil? fst) (nil? snd))
        @current-string
        ((get operations op) fst snd))))
  (parse-operand
    [this operand]
    (cond
      (not (js/isNaN (js/Number operand)))
      (js/Number operand)

      (contains? @cells (keyword operand))
      (js/Number (parse this (get @cells (keyword operand))))

      (well-formed? operand)
      0

      :else nil))
  (parse-operation
    [this op formula]
    (if (not (and (= (first formula) \() (= (last formula) \))))
      @current-string
      (let [formula (subs formula 1 (dec (count formula)))]
        (if (includes formula ",")
          (let [formula-coll (split formula #",")]
            (if (not= (count formula-coll) 2)
              @current-string
              (apply-once this
                          op
                          (first formula-coll)
                          (second formula-coll))))
          (if (includes formula ":")
            (let [formula-coll (split formula #":")]
              (if (not= (count formula-coll) 2)
                @current-string
                (apply-to-range this
                                op
                                (first formula-coll)
                                (second formula-coll))))
            @current-string)))))
  (parse
   [this contents]
   (reset! current-string contents)
   (cond
     (not (string? contents)) ""
     (not (= (first contents) \=)) contents
     :else (let [formula (subs contents 1)
                 fst (keyword (lower-case (subs formula 0 3)))
                 snd (upper-case (subs formula 3))]
             (if (contains? operations fst)
               (parse-operation this fst snd)
               (get (keyword formula) @cells contents))))))