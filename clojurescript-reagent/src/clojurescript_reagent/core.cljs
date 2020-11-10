(ns clojurescript-reagent.core
  (:require [reagent.core :as reagent]
            [clojurescript-reagent.app :as app]))

(enable-console-print!)

(println "This text is printed from src/clojurescript-reagent/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(reagent/render-component [app/app]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
