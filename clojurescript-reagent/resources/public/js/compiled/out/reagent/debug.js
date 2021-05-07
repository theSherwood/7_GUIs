// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__20948__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20949__i = 0, G__20949__a = new Array(arguments.length -  0);
while (G__20949__i < G__20949__a.length) {G__20949__a[G__20949__i] = arguments[G__20949__i + 0]; ++G__20949__i;}
  args = new cljs.core.IndexedSeq(G__20949__a,0,null);
} 
return G__20948__delegate.call(this,args);};
G__20948.cljs$lang$maxFixedArity = 0;
G__20948.cljs$lang$applyTo = (function (arglist__20950){
var args = cljs.core.seq(arglist__20950);
return G__20948__delegate(args);
});
G__20948.cljs$core$IFn$_invoke$arity$variadic = G__20948__delegate;
return G__20948;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__20951__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20952__i = 0, G__20952__a = new Array(arguments.length -  0);
while (G__20952__i < G__20952__a.length) {G__20952__a[G__20952__i] = arguments[G__20952__i + 0]; ++G__20952__i;}
  args = new cljs.core.IndexedSeq(G__20952__a,0,null);
} 
return G__20951__delegate.call(this,args);};
G__20951.cljs$lang$maxFixedArity = 0;
G__20951.cljs$lang$applyTo = (function (arglist__20953){
var args = cljs.core.seq(arglist__20953);
return G__20951__delegate(args);
});
G__20951.cljs$core$IFn$_invoke$arity$variadic = G__20951__delegate;
return G__20951;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1620419385903
