// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojurescript_reagent.counter');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojurescript_reagent.components.card');
clojurescript_reagent.counter.main = (function clojurescript_reagent$counter$main(){
var with_let21522 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let21522","with-let21522",-2118959591));
var temp__5724__auto___21524 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___21524 == null)){
} else {
var c__21087__auto___21525 = temp__5724__auto___21524;
if((with_let21522.generation === c__21087__auto___21525.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let21522.generation = c__21087__auto___21525.ratomGeneration;
}


var init21523 = (with_let21522.length === (0));
var _STAR_count = ((init21523)?(with_let21522[(0)] = reagent.core.atom.call(null,(0))):(with_let21522[(0)]));
var res__21088__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.components.card.main,"Counter",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.deref.call(null,_STAR_count),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init21523,_STAR_count,with_let21522){
return (function (){
return cljs.core.swap_BANG_.call(null,_STAR_count,cljs.core.inc);
});})(init21523,_STAR_count,with_let21522))
], null),"+"], null)], null)], null);

return res__21088__auto__;
});

//# sourceMappingURL=counter.js.map?rel=1620419387042
