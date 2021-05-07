// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojurescript_reagent.flight');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('clojurescript_reagent.components.card');
clojurescript_reagent.flight.as_date = (function clojurescript_reagent$flight$as_date(date_string){
var date_vec = cljs.core.reverse.call(null,clojure.string.split.call(null,date_string,/[.]/));
if(((cljs.core.not_EQ_.call(null,(3),cljs.core.count.call(null,date_vec))) || (cljs.core.not_EQ_.call(null,(4),cljs.core.count.call(null,cljs.core.nth.call(null,date_vec,(0),false)))) || (cljs.core.not_EQ_.call(null,(2),cljs.core.count.call(null,cljs.core.nth.call(null,date_vec,(1),false)))) || (cljs.core.not_EQ_.call(null,(2),cljs.core.count.call(null,cljs.core.nth.call(null,date_vec,(2),false)))))){
return false;
} else {
var date = (new Date(clojure.string.join.call(null,"-",date_vec)));
if(cljs.core.truth_(date.valueOf())){
return date.valueOf();
} else {
return false;
}
}
});
clojurescript_reagent.flight.as_string = (function clojurescript_reagent$flight$as_string(date){
var $ = date;
var $__$1 = $.toISOString();
var $__$2 = cljs.core.take.call(null,(10),$__$1);
var $__$3 = clojure.string.join.call(null,$__$2);
var $__$4 = clojure.string.split.call(null,$__$3,/-/);
var $__$5 = cljs.core.reverse.call(null,$__$4);
return clojure.string.join.call(null,".",$__$5);
});
clojurescript_reagent.flight.flight_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"1","1",-521621649),"one-way flight",new cljs.core.Keyword(null,"2","2",-1645882217),"return flight"], null);
clojurescript_reagent.flight.main = (function clojurescript_reagent$flight$main(){
var with_let21502 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let21502","with-let21502",1598819854));
var temp__5724__auto___21504 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___21504 == null)){
} else {
var c__21087__auto___21505 = temp__5724__auto___21504;
if((with_let21502.generation === c__21087__auto___21505.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let21502.generation = c__21087__auto___21505.ratomGeneration;
}


var init21503 = (with_let21502.length === (0));
var _STAR_flight_type = ((init21503)?(with_let21502[(0)] = reagent.core.atom.call(null,new cljs.core.Keyword(null,"1","1",-521621649))):(with_let21502[(0)]));
var _STAR_start_date = ((init21503)?(with_let21502[(1)] = reagent.core.atom.call(null,clojurescript_reagent.flight.as_string.call(null,(new Date())))):(with_let21502[(1)]));
var _STAR_return_date = ((init21503)?(with_let21502[(2)] = reagent.core.atom.call(null,clojurescript_reagent.flight.as_string.call(null,(new Date())))):(with_let21502[(2)]));
var _STAR_errors = ((init21503)?(with_let21502[(3)] = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"1","1",-521621649),null,new cljs.core.Keyword(null,"2","2",-1645882217),null,new cljs.core.Keyword(null,"3","3",2097825370),null], null))):(with_let21502[(3)]));
var _ = ((init21503)?(with_let21502[(4)] = cljs.core.add_watch.call(null,_STAR_start_date,new cljs.core.Keyword(null,"error1","error1",1211783802),((function (init21503,_STAR_flight_type,_STAR_start_date,_STAR_return_date,_STAR_errors,with_let21502){
return (function (p1__21487_SHARP_,p2__21488_SHARP_,p3__21489_SHARP_,p4__21486_SHARP_){
return cljs.core.reset_BANG_.call(null,_STAR_errors,cljs.core.assoc.call(null,cljs.core.deref.call(null,_STAR_errors),new cljs.core.Keyword(null,"1","1",-521621649),clojurescript_reagent.flight.as_date.call(null,p4__21486_SHARP_) === false));
});})(init21503,_STAR_flight_type,_STAR_start_date,_STAR_return_date,_STAR_errors,with_let21502))
)):(with_let21502[(4)]));
var ___$1 = ((init21503)?(with_let21502[(5)] = cljs.core.add_watch.call(null,_STAR_return_date,new cljs.core.Keyword(null,"error2","error2",-733754739),((function (init21503,_STAR_flight_type,_STAR_start_date,_STAR_return_date,_STAR_errors,_,with_let21502){
return (function (p1__21491_SHARP_,p2__21492_SHARP_,p3__21493_SHARP_,p4__21490_SHARP_){
return cljs.core.reset_BANG_.call(null,_STAR_errors,cljs.core.assoc.call(null,cljs.core.deref.call(null,_STAR_errors),new cljs.core.Keyword(null,"2","2",-1645882217),clojurescript_reagent.flight.as_date.call(null,p4__21490_SHARP_) === false));
});})(init21503,_STAR_flight_type,_STAR_start_date,_STAR_return_date,_STAR_errors,_,with_let21502))
)):(with_let21502[(5)]));
var ___$2 = ((init21503)?(with_let21502[(6)] = cljs.core.add_watch.call(null,_STAR_return_date,new cljs.core.Keyword(null,"error3","error3",1281618842),((function (init21503,_STAR_flight_type,_STAR_start_date,_STAR_return_date,_STAR_errors,_,___$1,with_let21502){
return (function (p1__21495_SHARP_,p2__21496_SHARP_,p3__21497_SHARP_,p4__21494_SHARP_){
return cljs.core.reset_BANG_.call(null,_STAR_errors,cljs.core.assoc.call(null,cljs.core.deref.call(null,_STAR_errors),new cljs.core.Keyword(null,"3","3",2097825370),(clojurescript_reagent.flight.as_date.call(null,p4__21494_SHARP_) < clojurescript_reagent.flight.as_date.call(null,cljs.core.deref.call(null,_STAR_start_date)))));
});})(init21503,_STAR_flight_type,_STAR_start_date,_STAR_return_date,_STAR_errors,_,___$1,with_let21502))
)):(with_let21502[(6)]));
var ___$3 = ((init21503)?(with_let21502[(7)] = cljs.core.add_watch.call(null,_STAR_start_date,new cljs.core.Keyword(null,"error3","error3",1281618842),((function (init21503,_STAR_flight_type,_STAR_start_date,_STAR_return_date,_STAR_errors,_,___$1,___$2,with_let21502){
return (function (p1__21499_SHARP_,p2__21500_SHARP_,p3__21501_SHARP_,p4__21498_SHARP_){
return cljs.core.reset_BANG_.call(null,_STAR_errors,cljs.core.assoc.call(null,cljs.core.deref.call(null,_STAR_errors),new cljs.core.Keyword(null,"3","3",2097825370),(clojurescript_reagent.flight.as_date.call(null,cljs.core.deref.call(null,_STAR_return_date)) < clojurescript_reagent.flight.as_date.call(null,p4__21498_SHARP_))));
});})(init21503,_STAR_flight_type,_STAR_start_date,_STAR_return_date,_STAR_errors,_,___$1,___$2,with_let21502))
)):(with_let21502[(7)]));
var book = ((init21503)?(with_let21502[(8)] = ((function (init21503,_STAR_flight_type,_STAR_start_date,_STAR_return_date,_STAR_errors,_,___$1,___$2,___$3,with_let21502){
return (function clojurescript_reagent$flight$main_$_book(){
var time_strings = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"1","1",-521621649),[" for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_start_date))].join(''),new cljs.core.Keyword(null,"2","2",-1645882217),[" from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_start_date))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_return_date))].join('')], null);
var index = cljs.core.keyword.call(null,cljs.core.deref.call(null,_STAR_flight_type));
return alert(["You have booked a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index.call(null,clojurescript_reagent.flight.flight_map)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index.call(null,time_strings))].join(''));
});})(init21503,_STAR_flight_type,_STAR_start_date,_STAR_return_date,_STAR_errors,_,___$1,___$2,___$3,with_let21502))
):(with_let21502[(8)]));
var res__21088__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.components.card.main,"Flight Booker",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,_STAR_flight_type),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init21503,_STAR_flight_type,_STAR_start_date,_STAR_return_date,_STAR_errors,_,___$1,___$2,___$3,book,with_let21502){
return (function (e){
return cljs.core.reset_BANG_.call(null,_STAR_flight_type,e.target.value);
});})(init21503,_STAR_flight_type,_STAR_start_date,_STAR_return_date,_STAR_errors,_,___$1,___$2,___$3,book,with_let21502))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"1","1",-521621649)], null),new cljs.core.Keyword(null,"1","1",-521621649).cljs$core$IFn$_invoke$arity$1(clojurescript_reagent.flight.flight_map)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"2","2",-1645882217)], null),new cljs.core.Keyword(null,"2","2",-1645882217).cljs$core$IFn$_invoke$arity$1(clojurescript_reagent.flight.flight_map)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,_STAR_start_date),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,_STAR_errors).call(null,new cljs.core.Keyword(null,"1","1",-521621649)))?"error":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init21503,_STAR_flight_type,_STAR_start_date,_STAR_return_date,_STAR_errors,_,___$1,___$2,___$3,book,with_let21502){
return (function (e){
return cljs.core.reset_BANG_.call(null,_STAR_start_date,e.target.value);
});})(init21503,_STAR_flight_type,_STAR_start_date,_STAR_return_date,_STAR_errors,_,___$1,___$2,___$3,book,with_let21502))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,_STAR_return_date),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,_STAR_errors).call(null,new cljs.core.Keyword(null,"2","2",-1645882217)))?"error":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init21503,_STAR_flight_type,_STAR_start_date,_STAR_return_date,_STAR_errors,_,___$1,___$2,___$3,book,with_let21502){
return (function (e){
return cljs.core.reset_BANG_.call(null,_STAR_return_date,e.target.value);
});})(init21503,_STAR_flight_type,_STAR_start_date,_STAR_return_date,_STAR_errors,_,___$1,___$2,___$3,book,with_let21502))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.call(null,cljs.core.deref.call(null,_STAR_flight_type),new cljs.core.Keyword(null,"1","1",-521621649))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),book,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__4131__auto__ = cljs.core.deref.call(null,_STAR_errors).call(null,new cljs.core.Keyword(null,"1","1",-521621649));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.deref.call(null,_STAR_errors).call(null,new cljs.core.Keyword(null,"2","2",-1645882217));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.deref.call(null,_STAR_errors).call(null,new cljs.core.Keyword(null,"3","3",2097825370));
}
}
})()], null),"Book"], null)], null)], null);

return res__21088__auto__;
});

//# sourceMappingURL=flight.js.map?rel=1620419387001
