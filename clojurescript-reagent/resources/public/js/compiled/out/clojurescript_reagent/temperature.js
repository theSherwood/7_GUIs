// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojurescript_reagent.temperature');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('clojurescript_reagent.components.card');
clojurescript_reagent.temperature.is_valid_QMARK_ = (function clojurescript_reagent$temperature$is_valid_QMARK_(n){
var and__4120__auto__ = (cljs.core.count.call(null,n) < (15));
if(and__4120__auto__){
if(cljs.core.truth_(cljs.core.re_find.call(null,/^-?\d*$/,n))){
return true;
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/^-?\d+[.]?\d*$/,n))){
return true;
} else {
return false;

}
}
} else {
return and__4120__auto__;
}
});
clojurescript_reagent.temperature.get_f = (function clojurescript_reagent$temperature$get_f(c){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((9) / (5)) * c) + (32)).toFixed((2)));
});
clojurescript_reagent.temperature.get_c = (function clojurescript_reagent$temperature$get_c(f){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((((5) / (9)) * (f - (32))).toFixed((2)));
});
clojurescript_reagent.temperature.remove_0 = (function clojurescript_reagent$temperature$remove_0(n){
if(cljs.core.truth_(cljs.core.re_find.call(null,/^0\d+/,n))){
return clojure.string.join.call(null,cljs.core.rest.call(null,n));
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/^-0\d+/,n))){
return ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,n))))].join('');
} else {
return n;

}
}
});
clojurescript_reagent.temperature.main = (function clojurescript_reagent$temperature$main(){
var with_let21516 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let21516","with-let21516",1927136831));
var temp__5724__auto___21518 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___21518 == null)){
} else {
var c__21087__auto___21519 = temp__5724__auto___21518;
if((with_let21516.generation === c__21087__auto___21519.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let21516.generation = c__21087__auto___21519.ratomGeneration;
}


var init21517 = (with_let21516.length === (0));
var _STAR_c = ((init21517)?(with_let21516[(0)] = reagent.core.atom.call(null,"0")):(with_let21516[(0)]));
var _STAR_f = ((init21517)?(with_let21516[(1)] = reagent.core.atom.call(null,"32")):(with_let21516[(1)]));
var _ = ((init21517)?(with_let21516[(2)] = cljs.core.set_validator_BANG_.call(null,_STAR_c,((function (init21517,_STAR_c,_STAR_f,with_let21516){
return (function (p1__21514_SHARP_){
return clojurescript_reagent.temperature.is_valid_QMARK_.call(null,p1__21514_SHARP_);
});})(init21517,_STAR_c,_STAR_f,with_let21516))
)):(with_let21516[(2)]));
var ___$1 = ((init21517)?(with_let21516[(3)] = cljs.core.set_validator_BANG_.call(null,_STAR_f,((function (init21517,_STAR_c,_STAR_f,_,with_let21516){
return (function (p1__21515_SHARP_){
return clojurescript_reagent.temperature.is_valid_QMARK_.call(null,p1__21515_SHARP_);
});})(init21517,_STAR_c,_STAR_f,_,with_let21516))
)):(with_let21516[(3)]));
var update_c_BANG_ = ((init21517)?(with_let21516[(4)] = ((function (init21517,_STAR_c,_STAR_f,_,___$1,with_let21516){
return (function clojurescript_reagent$temperature$main_$_update_c_BANG_(e){
var val = clojurescript_reagent.temperature.remove_0.call(null,e.target.value);
cljs.core.reset_BANG_.call(null,_STAR_c,val);

return cljs.core.reset_BANG_.call(null,_STAR_f,clojurescript_reagent.temperature.get_f.call(null,val));
});})(init21517,_STAR_c,_STAR_f,_,___$1,with_let21516))
):(with_let21516[(4)]));
var update_f_BANG_ = ((init21517)?(with_let21516[(5)] = ((function (init21517,_STAR_c,_STAR_f,_,___$1,update_c_BANG_,with_let21516){
return (function clojurescript_reagent$temperature$main_$_update_f_BANG_(e){
var val = clojurescript_reagent.temperature.remove_0.call(null,e.target.value);
cljs.core.reset_BANG_.call(null,_STAR_f,val);

return cljs.core.reset_BANG_.call(null,_STAR_c,clojurescript_reagent.temperature.get_c.call(null,val));
});})(init21517,_STAR_c,_STAR_f,_,___$1,update_c_BANG_,with_let21516))
):(with_let21516[(5)]));
var res__21088__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.components.card.main,"Temperature Converter",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,_STAR_c),new cljs.core.Keyword(null,"on-change","on-change",-732046149),update_c_BANG_], null)], null)," Celsius"], null),"=",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,_STAR_f),new cljs.core.Keyword(null,"on-change","on-change",-732046149),update_f_BANG_], null)], null)," Fahrenheit"], null)], null)], null);

return res__21088__auto__;
});

//# sourceMappingURL=temperature.js.map?rel=1620419387033
