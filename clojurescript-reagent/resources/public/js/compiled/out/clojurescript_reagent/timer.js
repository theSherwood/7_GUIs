// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojurescript_reagent.timer');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojurescript_reagent.components.card');
clojurescript_reagent.timer.MAX = (30000);
clojurescript_reagent.timer.main = (function clojurescript_reagent$timer$main(){
var with_let21508 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let21508","with-let21508",-1934162697));
var temp__5724__auto___21510 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___21510 == null)){
} else {
var c__21087__auto___21511 = temp__5724__auto___21510;
if((with_let21508.generation === c__21087__auto___21511.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let21508.generation = c__21087__auto___21511.ratomGeneration;
}


var init21509 = (with_let21508.length === (0));
var _STAR_duration = ((init21509)?(with_let21508[(0)] = reagent.core.atom.call(null,(5000))):(with_let21508[(0)]));
var _STAR_start = ((init21509)?(with_let21508[(1)] = reagent.core.atom.call(null,null)):(with_let21508[(1)]));
var _STAR_now = ((init21509)?(with_let21508[(2)] = reagent.core.atom.call(null,null)):(with_let21508[(2)]));
var _STAR_interval = ((init21509)?(with_let21508[(3)] = reagent.core.atom.call(null,null)):(with_let21508[(3)]));
var create_interval_BANG_ = ((init21509)?(with_let21508[(4)] = ((function (init21509,_STAR_duration,_STAR_start,_STAR_now,_STAR_interval,with_let21508){
return (function clojurescript_reagent$timer$main_$_create_interval_BANG_(){
return setInterval(((function (init21509,_STAR_duration,_STAR_start,_STAR_now,_STAR_interval,with_let21508){
return (function (){
return cljs.core.reset_BANG_.call(null,_STAR_now,(new Date()).valueOf());
});})(init21509,_STAR_duration,_STAR_start,_STAR_now,_STAR_interval,with_let21508))
,(10));
});})(init21509,_STAR_duration,_STAR_start,_STAR_now,_STAR_interval,with_let21508))
):(with_let21508[(4)]));
var start_timer_BANG_ = ((init21509)?(with_let21508[(5)] = ((function (init21509,_STAR_duration,_STAR_start,_STAR_now,_STAR_interval,create_interval_BANG_,with_let21508){
return (function clojurescript_reagent$timer$main_$_start_timer_BANG_(){
clearInterval(cljs.core.deref.call(null,_STAR_interval));

cljs.core.reset_BANG_.call(null,_STAR_start,(new Date()).valueOf());

cljs.core.reset_BANG_.call(null,_STAR_now,cljs.core.deref.call(null,_STAR_start));

return cljs.core.reset_BANG_.call(null,_STAR_interval,create_interval_BANG_.call(null));
});})(init21509,_STAR_duration,_STAR_start,_STAR_now,_STAR_interval,create_interval_BANG_,with_let21508))
):(with_let21508[(5)]));
var _ = ((init21509)?(with_let21508[(6)] = start_timer_BANG_.call(null)):(with_let21508[(6)]));
var res__21088__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.components.card.main,"Timer",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"wrapper"], null),"Elapsed Time:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),((cljs.core.deref.call(null,_STAR_now) - cljs.core.deref.call(null,_STAR_start)) / cljs.core.deref.call(null,_STAR_duration))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"duration"], null),(cljs.core.deref.call(null,_STAR_duration) / (1000)).toFixed((1))], null),"Duration",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),clojurescript_reagent.timer.MAX,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,_STAR_duration),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init21509,_STAR_duration,_STAR_start,_STAR_now,_STAR_interval,create_interval_BANG_,start_timer_BANG_,_,with_let21508){
return (function (e){
return cljs.core.reset_BANG_.call(null,_STAR_duration,e.target.value);
});})(init21509,_STAR_duration,_STAR_start,_STAR_now,_STAR_interval,create_interval_BANG_,start_timer_BANG_,_,with_let21508))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),start_timer_BANG_], null),"Reset Timer"], null)], null)], null);

return res__21088__auto__;
});

//# sourceMappingURL=timer.js.map?rel=1620419387017
