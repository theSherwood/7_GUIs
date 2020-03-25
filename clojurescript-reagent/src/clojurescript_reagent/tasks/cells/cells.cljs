(ns cells.core
    (:require [reagent.core :refer [atom]]
              [clojure.string :as string]
              [components.core :as components]
              [cells.data :refer [sample-data]]
              [utils.core :refer [log]]))

; import { html, o } from "sinuous";
; import { sample } from "sinuous/observable";
; import { card } from "../../components/card";
; import { sampleData } from "./sampleData.js";
; import { Parser } from "./parse.js";

; (log "data" sample-data)

(def LETTERS "ABCDEFGHIJKLMNOPQRSTUVWXYZ")

; const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
; function range(n) {
;   return [...Array(n).keys()];
; }

(defn as-base-26 [n]
  (loop [n n
         result ()]
    (if (> n 25)
      (recur (- (js/Math.floor (/ n 26)) 1)
             (cons (mod n 26) result))
      (cons n result))))
; (log "as-base-26" (as-base-26 26928374))

; function getBase26(n) {
;   let result = [];
;   while (n > 25) {
;     let remainder = n % 26;
;     result.push(remainder);
;     n = Math.floor(n / 26) - 1;
;   }
;   result.push(n);
;   return result.reverse();
; }

(defn number-as-letters [n]
  (apply str (map #(get LETTERS %) (as-base-26 n))))
; (log "number-as-letters" (number-as-letters 99))

; function getNumberAsLetters(n) {
;   let arr = getBase26(n);
;   return arr.map(num => LETTERS[num]).join("");
; }

(defn letter-range [n]
  (map number-as-letters (range n)))
; (log (letter-range 100))

; function letterRange(n) {
;   return range(n).map(getNumberAsLetters);
; }


; function findAdjacent(arr, value, direction) {
;   let index = arr.indexOf(value);
;   if (index === -1) return null;
;   if (direction === "before")
;     return arr[index - 1] === undefined ? null : arr[index - 1];
;   if (direction === "after") return arr[index + 1] || null;
;   return null;
; }

(def shape '(100 100))

; export const cells = (props) => {
;   let shape = props && props.shape || [100, 100]
;   Object.keys(sampleData).forEach(key => {
;     // Make each entry an observable
;     sampleData[key] = o(sampleData[key]);
;   });

(def data (atom sample-data))
(add-watch data :logger #(log %4))

(def rows (range (first shape)))
(def columns (letter-range (second shape)))

;   const data = o(sampleData);
;   const rows = range(shape[1]);
;   const columns = letterRange(shape[0]);

;   const p = new Parser(data, columns, rows);

(def focused (atom nil))
; (add-watch focused :logger #(log %4))

;   let focused = o(undefined);
;   let tBody; // Used as a ref

(defn create-new-cell [key]
  (if (contains? @data key)
    ()
    (swap! data assoc key "")))

;   function createNewCell(key) {
;     let dataRef = sample(data);
;     if (!dataRef[key]) {
;       dataRef[key] = o("");
;       data(dataRef);
;     }
;   }

(defn handle-focus [e c r]
  (let [key (str c r)
        input js/e.target]
    (create-new-cell key)
    (reset! focused key)
    (js/setTimeout 
     #(.setSelectionRange input 0 9999)
     10)))

;   function handleFocus(e, key) {
;     createNewCell(key)
;     focused(key);
;     setTimeout(() => {
;       // The timeout allows the selection to occur after
;       // the parsing switch inside a cell
;       e.target.setSelectionRange(0, 9999);
;     }, 10);
;   }

(defn handle-blur []
  (reset! focused nil))

;   function handleBlur() {
;     focused(undefined);
;   }

(defn handle-change [e c r]
  (log "handle-change" e c r))

;   function handleInput(e, key) {
;     sample(data)[key](e.target.value);
;   }

(defn handle-key-down [e c r]
  (log "handle-key-down" e c r))

;   function handleKeydown(e, column, row) {
;     // Navigate across the spreadsheet with arrow keys (and alt/option key)
;     let selector;
;     if (e.key === "ArrowUp") {
;       let newRow = findAdjacent(rows, row, "before");
;       selector = newRow !== null ? column + newRow : null;
;     }
;     if (e.key === "ArrowDown" || e.key === "Enter") {
;       let newRow = findAdjacent(rows, row, "after");
;       selector = newRow !== null ? column + newRow : null;
;     }
;     if (e.key === "ArrowLeft" && e.altKey) {
;       let newColumn = findAdjacent(columns, column, "before");
;       selector = newColumn !== null ? newColumn + row : null;
;     }
;     if (e.key === "ArrowRight" && e.altKey) {
;       let newColumn = findAdjacent(columns, column, "after");
;       selector = newColumn !== null ? newColumn + row : null;
;     }

;     if (selector) {
;       e.preventDefault();
;       let input = tBody.querySelector("#input-" + selector);
;       input.focus();
;     }
;   }

(defn clear []
  (reset! data {}))

;   function clear() {
;     data({});
;   }

(defn head []
  [:thead
   (into
    [:tr [:td {:class "row-key"}]]
    (map (fn [column] [:td {:class "column-key"} column])
         columns))])

(defn render-cell [c r]
  [:td {:id (str c r)}
   [:input {:id (str "input-" c r)
            :on-change #(handle-change % c r)
            :on-focus #(handle-focus % c r)
            :on-key-down #(handle-key-down % c r)
            :on-blur handle-blur}]])

(defn render-row [r]
  (into [:tr {:id (str "row-" r)}
         [:td {:class "row-key"} r]]
        (map #(render-cell % r) columns)))

(defn cells []
  (components/card
   "Cells"
   [:<>
    [:div {:class "wrapper"}
     [:table
      [head]
      (into [:tbody]
            (map render-row rows))]]
    [:button {:on-click clear} "Clear"]]))

;   const view = html`
;     <${card} title="Cells">
;       <div class="wrapper">
;         <table>
;           <thead>
;             <tr>
;               <td class="row-key"></td>
;               ${() =>
;                 columns.map(
;                   column =>
;                     html`
;                       <td class="column-key">${column}</td>
;                     `
;                 )}
;             </tr>
;           </thead>
;           <tbody>
;             ${() =>
;               rows.map(
;                 i => html`
;                   <tr id=${"row-" + i}>
;                     <td class="row-key">${i}</td>
;                     ${() =>
;                       columns.map(
;                         j => html`
;                           <td id=${j + i}>
;                             <input
;                               id=${"input-" + j + i}
;                               value=${() => {
;                                 return (j+i) in data()
;                                   ? focused() === j + i
;                                     ? data()[j + i]()
;                                     : p.parse(data()[j + i]())
;                                   : "";
;                               }}
;                               onfocus=${e => handleFocus(e, j + i)}
;                               onblur=${handleBlur}
;                               onkeydown=${e => handleKeydown(e, j, i)}
;                               oninput=${e => handleInput(e, j + i)}
;                             />
;                           </td>
;                         `
;                       )}
;                   </tr>
;                 `
;               )}
;           </tbody>
;         </table>
;       </div>
;       <button onclick=${clear}>Clear</button>
;     <//>
;   `;

;   tBody = view.querySelector("tbody"); // Assign ref to domNode

;   return view;
; };
