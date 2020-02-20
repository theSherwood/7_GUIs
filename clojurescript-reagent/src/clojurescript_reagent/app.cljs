(ns clojurescript-reagent.app
  (:require [tasks1to4.core :as t1to4]
            [tasks5to6.core :as t5to6]
            [cells.core :as cells]))

(defn app []
  [:main {:class "App"}
   [:a {:href "../../../index.html"} "Home"]
   
  ;  [t1to4/counter]
  ;  [t1to4/temperature-converter]
  ;  [t1to4/flight-booker]
  ;  [t1to4/timer]
  ;  [t5to6/crud]
  ;  [t5to6/circle-drawer]
   [cells/cells]
   ])