// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojurescript_reagent.components.card');
goog.require('cljs.core');
goog.require('clojure.string');
clojurescript_reagent.components.card.main = (function clojurescript_reagent$components$card$main(child_title,children){
var title = clojure.string.replace.call(null,child_title,/ /,"-");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["Card ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),child_title], null),children], null);
});

//# sourceMappingURL=card.js.map?rel=1620419386144
