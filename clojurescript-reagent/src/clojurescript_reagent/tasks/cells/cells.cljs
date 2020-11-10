(ns clojurescript-reagent.cells
     (:require [reagent.core :as r]
               [clojurescript-reagent.components.card :refer [card]]
               [clojurescript-reagent.cells.sample-data :refer [sample-data]]
               [clojurescript-reagent.cells.parse :refer [Parser parse]]))

(def LETTERS "ABCDEFGHIJKLMNOPQRSTUVWXYZ")

(defn as-base-26 [n]
  (loop [n n
         result ()]
    (if (> n 25)
      (recur (- (js/Math.floor (/ n 26)) 1)
             (cons (mod n 26) result))
      (cons n result))))

(defn number-as-letters [n]
  (apply str (map #(get LETTERS %) (as-base-26 n))))

(defn letter-range [n]
  (map number-as-letters (range n)))

(defn find-adjacent [vec value direction]
  (let [idx (.indexOf vec value)]
    (cond
      (= idx -1) nil
      (= direction "before") (nth vec (dec idx) nil)
      (= direction "after") (nth vec (inc idx) nil)
      :else nil)))

(def shape '(50 50))

(def rows (mapv str (range (first shape))))
(def columns (vec (letter-range (second shape))))

(def rows-data 
  (apply hash-map (interleave rows (repeatedly #(r/atom {})))))
(doseq [[k v] sample-data]
  (swap! (get rows-data (first (re-seq #"\d+" (str k)))) assoc k (r/atom v)))

(def dat (r/atom rows-data))

(def focused (r/atom nil))
(def t-body (atom nil))
(def parser (Parser. (atom "") dat columns rows))

(defn create-new-cell [key]
  (if-not (contains? @dat key)
    (swap! dat assoc key (r/atom ""))))

(defn handle-focus [e c r]
  (let [key (keyword (str c r))
        input js/e.target]
    
    (let [row-data (get @dat r)
          cell-data (get @row-data key)]
      (if (nil? cell-data)
        (swap! row-data assoc key (r/atom ""))))
    
    (reset! focused key)
    (js/setTimeout
     #(.setSelectionRange input 0 9999)
     10)))

(defn handle-blur []
  (reset! focused nil))

(defn handle-change [e c r]
  (reset! ((keyword (str c r)) @(get @dat r)) js/e.target.value))

(defn handle-key-down [e c r]
  (let [selector
        (cond
          (= (.-key e) "ArrowUp")
          (let [new-row (find-adjacent rows r "before")]
            (if-not (nil? new-row) (str c new-row)))

          (not= -1 (.indexOf ["ArrowDown" "Enter"] (.-key e)))
          (let [new-row (find-adjacent rows r "after")]
            (if-not (nil? new-row) (str c new-row)))

          (and (= (.-key e) "ArrowLeft") (.-altKey e))
          (let [new-column (find-adjacent columns c "before")]
            (if-not (nil? new-column) (str new-column r)))

          (and (= (.-key e) "ArrowRight") (.-altKey e))
          (let [new-column (find-adjacent columns c "after")]
            (if-not (nil? new-column) (str new-column r))))]
    (if selector 
      (do
        (.preventDefault e)
        (.focus (.querySelector @t-body (str "#input-" selector)))))))

(defn clear []
  (reset! dat {}))

(defn head []
  [:thead
   (into
    [:tr [:td {:class "row-key"}]]
    (map (fn [column] [:td {:class "column-key"} column])
         columns))])

(defn get-val [cell-data c r]
  (if (nil? cell-data)
    ""
    (if (= @focused (keyword (str c r)))
      @cell-data
      (parse parser @cell-data))))

(defn cell [c r cell-data]
  [:td {:id (str c r)}
   [:input {:id (str "input-" c r)
            :value (str (get-val cell-data c r))
            :on-change #(handle-change % c r)
            :on-focus #(handle-focus % c r)
            :on-key-down #(handle-key-down % c r)
            :on-blur handle-blur}]])

(defn row [r row-data]
  [:tr {:id (str "row-" r)}
         [:td {:class "row-key"} r]
   (doall
    (for [c columns]
      ^{:key (str c r)} [cell c r (get @row-data (keyword (str c r)) nil)]))])

(defn cells []
  (card
   "Cells"
   [:<>
    [:div {:class "wrapper"}
     [:table
      [head]
      [:tbody {:ref #(reset! t-body %)}
       (doall
        (for [r rows]
          ^{:key (str r)} [row r (get @dat r)]))]]]
      [:button {:on-click clear} "Clear"]]))
