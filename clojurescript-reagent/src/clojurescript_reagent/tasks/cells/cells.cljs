(ns clojurescript-reagent.cells
  (:require
   [reagent.core :as r]
   [clojurescript-reagent.components.card :as card]
   [clojurescript-reagent.cells.sample-data :refer [sample-data]]
   [clojurescript-reagent.cells.parse :refer [parse-string]]))

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
      (= direction :before) (nth vec (dec idx) nil)
      (= direction :after) (nth vec (inc idx) nil)
      :else nil)))

(def shape [100 100])

(def rows (mapv str (range (first shape))))
(def columns (vec (letter-range (second shape))))

(def *cell-data (r/atom (into {}
                              (map
                               (fn [[k v]]
                                 [k (parse-string v rows columns)])
                               sample-data))))

(def *cell-cache (atom {}))

(declare resolve-cells)

(defn compute-cell-value [cell cell-data *cell-cache]
  (when-let [type (:type cell)]
    (case type
      :string (:string cell)
      :cell   (resolve-cells [(:cell cell)] cell-data *cell-cache)
      :op     (let [op (:op cell)]
                (reduce op
                        (map
                         js/Number
                         (resolve-cells (:cells cell) cell-data *cell-cache)))))))

(defn resolve-cells [cell-ids cell-data *cell-cache]
  ;; The cell-ids will be valid
  (let [cell-cache @*cell-cache]
    (reduce
     (fn [acc cell-id]
       (if-let [cell-value (cell-cache cell-id)]
         (conj acc cell-value)
         (let [cell-value (compute-cell-value
                           (cell-data cell-id) cell-data *cell-cache)]
           (swap! *cell-cache assoc cell-id cell-value)
           (conj acc cell-value))))
     []
     cell-ids)))

(def t-body (atom nil))

(defn handle-change [e *cell]
  (reset! *cell-cache {})
  (reset! *cell (parse-string (.. e -target -value) rows columns)))

(defn handle-key-down [e c r]
  (let [selector
        (cond
          (= (.-key e) "ArrowUp")
          (let [new-row (find-adjacent rows r :before)]
            (if-not (nil? new-row) (str c new-row)))

          (not= -1 (.indexOf ["ArrowDown" "Enter"] (.-key e)))
          (let [new-row (find-adjacent rows r :after)]
            (if-not (nil? new-row) (str c new-row)))

          (and (= (.-key e) "ArrowLeft") (.-altKey e))
          (let [new-column (find-adjacent columns c :before)]
            (if-not (nil? new-column) (str new-column r)))

          (and (= (.-key e) "ArrowRight") (.-altKey e))
          (let [new-column (find-adjacent columns c :after)]
            (if-not (nil? new-column) (str new-column r))))]
    (if selector
      (do
        (.preventDefault e)
        (.focus (.querySelector @t-body (str "#cell-" selector)))))))

(defn clear []
  (reset! *cell-data {}))

(defn head []
  [:thead
   (into
    [:tr [:td {:class "row-key"}]]
    (map (fn [column] [:td {:class "column-key"} column])
         columns))])

(defn input [{:keys [c r *focused *cell]}]
  (let [cell @*cell]
    [:input {:id (str "cell-" c r)
             :auto-focus true
             :value (or (:string cell) "")
             :on-change #(handle-change % *cell)
             :on-focus #(reset! *focused true)
             :on-key-down #(handle-key-down % c r)
             :on-blur #(reset! *focused false)}]))

(defn computed-string [cell]
  ;; We put this in its own fn so that we get the reactive barrier between this
  ;; computation and the rest of the component
  (str (compute-cell-value cell @*cell-data *cell-cache)))

(defn cell-view [c r]
  (r/with-let
    [cell-id  (str c r)
     input-id (str "cell-" c r)
     *focused (r/atom false)
     _ (add-watch *focused :set-selection
                  (fn [_ _ o n]
                    (if (and (not o) n)
                      (js/setTimeout
                       (fn []
                         (let [target-input (.querySelector @t-body 
                                                            (str "#" input-id))]
                           (.. target-input (setSelectionRange 0 99999))))
                       10))))
     *cell    (r/cursor *cell-data [cell-id])]
    (let [cell @*cell
          string-type? (= :string (:type cell :string))]
      [:td {:id cell-id
            :on-click #(reset! *focused true)}
       (if @*focused
         [input {:c c :r r :*cell *cell :*focused *focused}]
         [:div {:id input-id
                :tabIndex 0
                :on-focus #(reset! *focused true)}
          (if string-type?
           ;; Just render the string from the cell
            (:string cell)
           ;; Compute the string to display from *cell-data and *cell-cache
            [computed-string cell])])])))

(defn main []
  [card/main
   "Cells"
   [:<>
    [:div {:class "wrapper"}
     [:table
      [head]
      [:tbody {:ref #(reset! t-body %)}
       (doall
        (for [r rows]
          ^{:key r}
          [:tr {:id (str "row-" r)}
           [:td {:class "row-key"} r]
           (doall
            (for [c columns]
              ^{:key (str c r)}
              [cell-view c r]))]))]]]
    [:button {:on-click clear} "Clear"]]])
