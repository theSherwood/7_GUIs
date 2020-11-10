(ns clojurescript-reagent.cells.parse
  (:require [clojure.string :refer [lower-case upper-case split]]
            [cljs.core :refer [clj->js]]))

; import {subscribe} from 'sinuous/observable'

(def ? #(do (.log js/console %) %))

(defn exp [x n]
  (reduce * (repeat n x)))

;; (def current-string (atom ""))
;; (def cells (atom {}))
;; (def columns (atom nil))
;; (def rows (atom nil))
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

;   cartesianProduct(letters, numbers) {
;     var result = []
;     letters.forEach(letter => {
;       numbers.forEach(number => {
;         result.push(letter + number)
;       })
;     })
;     return result
;   }

(defn find-vec-range [vec start end]
  (let [start-idx (.indexOf vec start)
        end-idx (.indexOf vec end)]
    (if (or (= start-idx -1) (= end-idx -1) (> start-idx end-idx))
      []
      (subvec vec start-idx (inc end-idx)))))

;   findArrRange(arr, start, end) {
;     let startI = arr.indexOf(start)
;     let endI = arr.indexOf(end)
;     if (startI == -1 || endI == -1 || startI > endI) return []
;     return arr.slice(startI, endI + 1)
;   }

(defn split-operand [operand]
  (let [op (str operand)]
    [(first (re-seq #"[a-zA-Z]+" op)) (first (re-seq #"\d+" op))]))

;   splitOperand(operand) {
;     return [operand.match(/[a-zA-Z]+/)[0], Number(operand.match(/\d+/)[0])]
;   }


(defn well-formed? [operand]
    (not (nil? (re-find #"[a-zA-Z]+\d+" operand))))

;   isWellFormed(operand) {
;     return /[a-zA-Z]+\d+/.test(operand)
;   }
   

(defprotocol IParser
  (get-range [this start end])
  ;; (find-vec-range [op start end])
  (apply-to-range [this op start end])
  (apply-once [this op operand-1 operand-2])
  (parse-operand [this operand])
  (parse-operation [this op formula])
  (parse [this string]))

(defrecord Parser [current-string cells columns rows]

; export class Parser {
;   constructor(store, columns, rows) {
;     this.cells = {}
;     this.store = store
;     this.columns = columns
;     this.rows = rows
;     this.operations = {
;       sum: (a, b) => a + b,
;       sub: (a, b) => a - b,
;       mul: (a, b) => a * b,
;       div: (a, b) => a / b,
;       mod: (a, b) => a % b,
;       exp: (a, b) => a ** b
;     }

;     subscribe(() => this.cells = this.store())
;   }
  
  
  
  
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



;   getRange(rangeStart, rangeEnd) {
;     rangeStart = this.splitOperand(rangeStart)
;     rangeEnd = this.splitOperand(rangeEnd)
;     let letters = this.findArrRange(this.columns, rangeStart[0], rangeEnd[0])
;     let numbers = this.findArrRange(this.rows, rangeStart[1], rangeEnd[1])
;     return this.cartesianProduct(letters, numbers)
;   }



  (apply-to-range
   [this op start end]
   (if (and (not (well-formed? start)) (well-formed? end))
     @current-string
     (let [range (get-range this start end)]
       (reduce (op operations)
               (map #(parse this (? (% @cells)))
                    range)))))

;   rangeOperation(op, rangeStart, rangeEnd) {
;     if (!(this.isWellFormed(rangeStart) && this.isWellFormed(rangeEnd)))
;       return this.originalString

;     let range = this.getRange(rangeStart, rangeEnd)

;     return range
;       .map(address => Number(this.parse(this.cells[address]())))
;       .reduce(this.operations[op])
;   }

  (apply-once
    [this op operand-1 operand-2]
    (let [fst (parse-operand this operand-1)
          snd (parse-operand this operand-2)]
      (if (or (nil? fst) (nil? snd))
        @current-string
        ((get operations op) fst snd))))

;   singleOperation(op, operand1, operand2) {
;     let first = this.parseOperand(operand1)
;     let second = this.parseOperand(operand2)

;     if (first === null || second === null) return this.originalString

;     return this.operations[op](first, second).toString()
;   }

  (parse-operand
    [this operand]
    (cond
      (number? operand) operand
      (contains? @cells operand) (parse this (get @cells operand))
      (well-formed? operand) 0
      :else nil))

;   parseOperand(operand) {
;     if (!isNaN(Number(operand))) return Number(operand)
;     if (operand in this.cells) return Number(this.parse(this.cells[operand]()))
;     if (this.isWellFormed(operand)) return 0

;     return null
;   }
  
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

;   parseOperation(op, formula) {
;     if (!(formula.startsWith('(') && formula.endsWith(')')))
;       return this.originalString

;     formula = formula.slice(1, formula.length - 1)

;     let operationType
;     let formulaArr
;     if (formula.includes(',')) {
;       operationType = 'single'
;       formulaArr = formula.split(',')
;     } else if (formula.includes(':')) {
;       operationType = 'range'
;       formulaArr = formula.split(':')
;     }

;     if (formulaArr.length !== 2) return this.originalString

;     if (operationType === 'single')
;       return this.singleOperation(op, formulaArr[0], formulaArr[1])

;     if (operationType === 'range')
;       return this.rangeOperation(op, formulaArr[0], formulaArr[1])

;     return this.originalString
;   }

  (parse
    [this contents]
    (do
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

;   parse(str) {
;     this.originalString = str
;     if (typeof str !== 'string') return ''
;     if (!str.startsWith('=')) return str

;     let formula = str.slice(1)
;     if (formula.slice(0, 3).toLowerCase() in this.operations) {
;       return this.parseOperation(
;         formula.slice(0, 3).toLowerCase(),
;         formula.slice(3).toUpperCase()
;       )
;     } else {
;       return this.cells[formula] || str
;     }
;   }
; }
    )