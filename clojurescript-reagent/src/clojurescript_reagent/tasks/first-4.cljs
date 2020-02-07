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

(def c (atom "0"))
(def f (atom "32"))

(defn is-valid? [n]
    (re-find #"^-?\d*.?\d*$" n))

(set-validator! c #(is-valid? %))
(set-validator! f #(is-valid? %))

(defn get-f [c]
  (str (int (+ (* (/ 9 5) (int c)) 32))))
(defn get-c [f]
  (str (int (* (/ 5 9) (- (int f) 32)))))

(defn update-c [e]
  (do
    (reset! c e.target.value)
    (reset! f (get-f e.target.value))))
(defn update-f [e]
  (do
    (reset! f e.target.value)
    (reset! c (get-c e.target.value))))

(defn temperature-converter []
  (components/card
   "Temperature Converter"
   [:<> 
    [:span [:input 
            {:value @c :on-change update-c}] " Celsius"]
    "="
    [:span [:input 
            {:value @f :on-change update-f}] " Fahrenheit"]]))


; function trunc(n) {
;   return Number(n.toFixed(2));
; }
; function remove0(n) {
;   if (n.length > 1 && n[0] === '0' && n[1] !== '.') {
;     return n.slice(1)
;   }
;   return n
; }
; function getC(f) {
;   return trunc((5 / 9) * (f - 32));
; }
; function getF(c) {
;   return trunc((9 / 5) * c + 32);
; }
; let r = /^-?\d*.?\d*$/;

; export const temperatureConverter = () => {
;   let c = o(0);
;   let f = o(32);

;   const updateFromC = e => update(e, c, f, getF)
;   const updateFromF = e => update(e, f, c, getC)

;   const update = (e, from, to, get) => {
;     let value = e.target.value || "0";
;     if (value === "0-") {
;       from("-");
;     } else if (r.test(value)) {
;       value = remove0(value) || 0;
;       from(value);
;       to(get(value) || 0);
;     }
;   }

;   function handleKeyDown(e) {
;     if (
;       ["Backspace", "Tab", "Alt", "ArrowLeft", "ArrowRight", "Meta"].includes(
;         e.key
;       )
;     )
;       return;
;     if (
;       (e.target.value === "0" && !"1234567890.-".includes(e.key)) ||
;       (e.target.value !== "0" && !"123456789.".includes(e.key)) ||
;       (e.target.value.includes('.') && !"123456789".includes(e.key))
;     ) {
;       e.preventDefault();
;       e.stopPropagation();
;     }
;   }

;   return html`
;     <${card} title="Temperature Converter">
;       <span>
;         <input value=${c} onkeydown=${handleKeyDown} oninput=${updateFromC} />
;         Celsius
;       </span>
;       =
;       <span>
;         <input value=${f} onkeydown=${handleKeyDown} oninput=${updateFromF} />
;         Fahrenheit
;       </span>
;     <//>
;   `;
; };