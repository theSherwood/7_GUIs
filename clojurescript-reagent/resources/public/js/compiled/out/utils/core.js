// Compiled by ClojureScript 1.10.520 {}
goog.provide('utils.core');
goog.require('cljs.core');
utils.core.log = (function utils$core$log(var_args){
var G__21632 = arguments.length;
switch (G__21632) {
case 1:
return utils.core.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___21634 = arguments.length;
var i__4731__auto___21635 = (0);
while(true){
if((i__4731__auto___21635 < len__4730__auto___21634)){
args_arr__4751__auto__.push((arguments[i__4731__auto___21635]));

var G__21636 = (i__4731__auto___21635 + (1));
i__4731__auto___21635 = G__21636;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return utils.core.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

utils.core.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return console.log(cljs.core.clj__GT_js.call(null,x));
});

utils.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (x,args){
return cljs.core.apply.call(null,console.log,cljs.core.cons.call(null,x,cljs.core.map.call(null,cljs.core.clj__GT_js,args)));
});

/** @this {Function} */
utils.core.log.cljs$lang$applyTo = (function (seq21630){
var G__21631 = cljs.core.first.call(null,seq21630);
var seq21630__$1 = cljs.core.next.call(null,seq21630);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21631,seq21630__$1);
});

utils.core.log.cljs$lang$maxFixedArity = (1);


//# sourceMappingURL=core.js.map?rel=1620419387205
