(ns clojurescript-reagent.app
  (:require
   [clojurescript-reagent.counter :refer [counter]]
   [clojurescript-reagent.temperature :refer [temperature]]
   [clojurescript-reagent.flight :refer [flight]]
   [clojurescript-reagent.timer :refer [timer]]
   [clojurescript-reagent.crud :refer [crud]]
   [clojurescript-reagent.circle :refer [circle]]
   [clojurescript-reagent.cells :refer [cells]]))

(defn app []
  [:main {:class "App"}
   [:a {:href "../../../index.html"} "Home"]
  ;;  [counter]
  ;;  [temperature]
  ;;  [flight]
  ;;  [timer]
  ;;  [crud]
  ;;  [circle]
   [cells]])