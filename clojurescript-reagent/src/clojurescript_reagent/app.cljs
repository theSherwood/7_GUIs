(ns clojurescript-reagent.app
  (:require
   [clojurescript-reagent.counter :as counter]
   [clojurescript-reagent.temperature :as temperature]
   [clojurescript-reagent.flight :as flight]
   [clojurescript-reagent.timer :as timer]
   [clojurescript-reagent.crud :as crud]
   [clojurescript-reagent.circle :as circle]
  ;;  [clojurescript-reagent.cells :as cells]
   ))

(defn app []
  [:main {:class "App"}
   [:a {:href "../../../index.html"} "Home"]
   [counter/main]
   [temperature/main]
   [flight/main]
   [timer/main]
   [crud/main]
   [circle/main]
  ;;  [cells/main]
   ])