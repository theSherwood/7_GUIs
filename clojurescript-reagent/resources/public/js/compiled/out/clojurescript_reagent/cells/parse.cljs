(ns clojurescript-reagent.cells.parse
  (:require [clojure.string :refer [lower-case upper-case split]]))

(defn exp [x n]
  (reduce * (repeat n x)))

(def operations 
  {:sum +
   :sub -
   :mul *
   :div /
   :mod mod
   :exp exp})

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

(defn get-range [start end rows columns]
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

(defn cell? [string rows columns]
  (if (well-formed? string)
    (let [[fst snd] (split-operand string)]
      (and (some #(= % snd) rows)
           (some #(= % fst) columns)))
    false))

(defn parse-formula [{:keys [string op formula rows columns]}]
  (let [string-map {:string string
                    :type :string}]
    (if-not (and (= (first formula) \()
                 (= (last formula) \)))
      string-map
      (let [formula (subs formula 1 (dec (count formula)))]
        (if (includes formula ",")
          (let [formula-coll (split formula #",")]
            (if (not= (count formula-coll) 2)
              string-map
              (let [fst (first formula-coll)
                    snd (second formula-coll)]
                (if (and (cell? fst rows columns)
                         (cell? snd rows columns))
                  {:string string
                   :type :op
                   :op (operations op)
                   :cells [fst snd]}
                  string-map))))
          (if (includes formula ":")
            (let [formula-coll (split formula #":")]
              (if (not= (count formula-coll) 2)
                string-map
                (let [fst (first formula-coll)
                      snd (second formula-coll)]
                  (if (and (cell? fst rows columns)
                           (cell? snd rows columns))
                    {:string string
                     :type :op
                     :op (operations op)
                     :cells (vec (get-range fst snd rows columns))}
                    string-map))))
            string-map))))))

(defn parse-string [string rows columns]
  (cond
    (nil? string) {:type :string
                   :string string}
    (empty? string) {:type :string
                     :string string}
    (not (= (first string) \=)) {:type :string
                                 :string string}
    :else (let [formula (subs string 1)
                fst (keyword (lower-case (subs formula 0 3)))
                snd (upper-case (subs formula 3))]
            (if (contains? operations fst)
              (parse-formula {:string string
                              :op fst
                              :formula snd
                              :rows rows
                              :columns columns} )
              (if (cell? formula rows columns)
                {:string string
                 :type   :cell
                 :cell   formula}
                {:string string
                 :type   :string})))))