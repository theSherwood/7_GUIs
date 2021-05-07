// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26550 = arguments.length;
switch (G__26550) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26551 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26551 = (function (f,blockable,meta26552){
this.f = f;
this.blockable = blockable;
this.meta26552 = meta26552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26553,meta26552__$1){
var self__ = this;
var _26553__$1 = this;
return (new cljs.core.async.t_cljs$core$async26551(self__.f,self__.blockable,meta26552__$1));
});

cljs.core.async.t_cljs$core$async26551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26553){
var self__ = this;
var _26553__$1 = this;
return self__.meta26552;
});

cljs.core.async.t_cljs$core$async26551.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26551.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26552","meta26552",-786871888,null)], null);
});

cljs.core.async.t_cljs$core$async26551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26551";

cljs.core.async.t_cljs$core$async26551.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26551");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26551.
 */
cljs.core.async.__GT_t_cljs$core$async26551 = (function cljs$core$async$__GT_t_cljs$core$async26551(f__$1,blockable__$1,meta26552){
return (new cljs.core.async.t_cljs$core$async26551(f__$1,blockable__$1,meta26552));
});

}

return (new cljs.core.async.t_cljs$core$async26551(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26557 = arguments.length;
switch (G__26557) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26560 = arguments.length;
switch (G__26560) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26563 = arguments.length;
switch (G__26563) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26565 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26565);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26565,ret){
return (function (){
return fn1.call(null,val_26565);
});})(val_26565,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26567 = arguments.length;
switch (G__26567) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___26569 = n;
var x_26570 = (0);
while(true){
if((x_26570 < n__4607__auto___26569)){
(a[x_26570] = x_26570);

var G__26571 = (x_26570 + (1));
x_26570 = G__26571;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26572 = (function (flag,meta26573){
this.flag = flag;
this.meta26573 = meta26573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26574,meta26573__$1){
var self__ = this;
var _26574__$1 = this;
return (new cljs.core.async.t_cljs$core$async26572(self__.flag,meta26573__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26574){
var self__ = this;
var _26574__$1 = this;
return self__.meta26573;
});})(flag))
;

cljs.core.async.t_cljs$core$async26572.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26572.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26573","meta26573",-37463208,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26572";

cljs.core.async.t_cljs$core$async26572.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26572");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26572.
 */
cljs.core.async.__GT_t_cljs$core$async26572 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26572(flag__$1,meta26573){
return (new cljs.core.async.t_cljs$core$async26572(flag__$1,meta26573));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26572(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26575 = (function (flag,cb,meta26576){
this.flag = flag;
this.cb = cb;
this.meta26576 = meta26576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26577,meta26576__$1){
var self__ = this;
var _26577__$1 = this;
return (new cljs.core.async.t_cljs$core$async26575(self__.flag,self__.cb,meta26576__$1));
});

cljs.core.async.t_cljs$core$async26575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26577){
var self__ = this;
var _26577__$1 = this;
return self__.meta26576;
});

cljs.core.async.t_cljs$core$async26575.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26576","meta26576",-490975060,null)], null);
});

cljs.core.async.t_cljs$core$async26575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26575";

cljs.core.async.t_cljs$core$async26575.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26575");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26575.
 */
cljs.core.async.__GT_t_cljs$core$async26575 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26575(flag__$1,cb__$1,meta26576){
return (new cljs.core.async.t_cljs$core$async26575(flag__$1,cb__$1,meta26576));
});

}

return (new cljs.core.async.t_cljs$core$async26575(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26578_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26578_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26579_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26579_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26580 = (i + (1));
i = G__26580;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26586 = arguments.length;
var i__4731__auto___26587 = (0);
while(true){
if((i__4731__auto___26587 < len__4730__auto___26586)){
args__4736__auto__.push((arguments[i__4731__auto___26587]));

var G__26588 = (i__4731__auto___26587 + (1));
i__4731__auto___26587 = G__26588;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26583){
var map__26584 = p__26583;
var map__26584__$1 = (((((!((map__26584 == null))))?(((((map__26584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26584):map__26584);
var opts = map__26584__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26581){
var G__26582 = cljs.core.first.call(null,seq26581);
var seq26581__$1 = cljs.core.next.call(null,seq26581);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26582,seq26581__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26590 = arguments.length;
switch (G__26590) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26490__auto___26636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___26636){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___26636){
return (function (state_26614){
var state_val_26615 = (state_26614[(1)]);
if((state_val_26615 === (7))){
var inst_26610 = (state_26614[(2)]);
var state_26614__$1 = state_26614;
var statearr_26616_26637 = state_26614__$1;
(statearr_26616_26637[(2)] = inst_26610);

(statearr_26616_26637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26615 === (1))){
var state_26614__$1 = state_26614;
var statearr_26617_26638 = state_26614__$1;
(statearr_26617_26638[(2)] = null);

(statearr_26617_26638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26615 === (4))){
var inst_26593 = (state_26614[(7)]);
var inst_26593__$1 = (state_26614[(2)]);
var inst_26594 = (inst_26593__$1 == null);
var state_26614__$1 = (function (){var statearr_26618 = state_26614;
(statearr_26618[(7)] = inst_26593__$1);

return statearr_26618;
})();
if(cljs.core.truth_(inst_26594)){
var statearr_26619_26639 = state_26614__$1;
(statearr_26619_26639[(1)] = (5));

} else {
var statearr_26620_26640 = state_26614__$1;
(statearr_26620_26640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26615 === (13))){
var state_26614__$1 = state_26614;
var statearr_26621_26641 = state_26614__$1;
(statearr_26621_26641[(2)] = null);

(statearr_26621_26641[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26615 === (6))){
var inst_26593 = (state_26614[(7)]);
var state_26614__$1 = state_26614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26614__$1,(11),to,inst_26593);
} else {
if((state_val_26615 === (3))){
var inst_26612 = (state_26614[(2)]);
var state_26614__$1 = state_26614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26614__$1,inst_26612);
} else {
if((state_val_26615 === (12))){
var state_26614__$1 = state_26614;
var statearr_26622_26642 = state_26614__$1;
(statearr_26622_26642[(2)] = null);

(statearr_26622_26642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26615 === (2))){
var state_26614__$1 = state_26614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26614__$1,(4),from);
} else {
if((state_val_26615 === (11))){
var inst_26603 = (state_26614[(2)]);
var state_26614__$1 = state_26614;
if(cljs.core.truth_(inst_26603)){
var statearr_26623_26643 = state_26614__$1;
(statearr_26623_26643[(1)] = (12));

} else {
var statearr_26624_26644 = state_26614__$1;
(statearr_26624_26644[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26615 === (9))){
var state_26614__$1 = state_26614;
var statearr_26625_26645 = state_26614__$1;
(statearr_26625_26645[(2)] = null);

(statearr_26625_26645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26615 === (5))){
var state_26614__$1 = state_26614;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26626_26646 = state_26614__$1;
(statearr_26626_26646[(1)] = (8));

} else {
var statearr_26627_26647 = state_26614__$1;
(statearr_26627_26647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26615 === (14))){
var inst_26608 = (state_26614[(2)]);
var state_26614__$1 = state_26614;
var statearr_26628_26648 = state_26614__$1;
(statearr_26628_26648[(2)] = inst_26608);

(statearr_26628_26648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26615 === (10))){
var inst_26600 = (state_26614[(2)]);
var state_26614__$1 = state_26614;
var statearr_26629_26649 = state_26614__$1;
(statearr_26629_26649[(2)] = inst_26600);

(statearr_26629_26649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26615 === (8))){
var inst_26597 = cljs.core.async.close_BANG_.call(null,to);
var state_26614__$1 = state_26614;
var statearr_26630_26650 = state_26614__$1;
(statearr_26630_26650[(2)] = inst_26597);

(statearr_26630_26650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26490__auto___26636))
;
return ((function (switch__26395__auto__,c__26490__auto___26636){
return (function() {
var cljs$core$async$state_machine__26396__auto__ = null;
var cljs$core$async$state_machine__26396__auto____0 = (function (){
var statearr_26631 = [null,null,null,null,null,null,null,null];
(statearr_26631[(0)] = cljs$core$async$state_machine__26396__auto__);

(statearr_26631[(1)] = (1));

return statearr_26631;
});
var cljs$core$async$state_machine__26396__auto____1 = (function (state_26614){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_26614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e26632){if((e26632 instanceof Object)){
var ex__26399__auto__ = e26632;
var statearr_26633_26651 = state_26614;
(statearr_26633_26651[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26652 = state_26614;
state_26614 = G__26652;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$state_machine__26396__auto__ = function(state_26614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26396__auto____1.call(this,state_26614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26396__auto____0;
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26396__auto____1;
return cljs$core$async$state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___26636))
})();
var state__26492__auto__ = (function (){var statearr_26634 = f__26491__auto__.call(null);
(statearr_26634[(6)] = c__26490__auto___26636);

return statearr_26634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___26636))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26653){
var vec__26654 = p__26653;
var v = cljs.core.nth.call(null,vec__26654,(0),null);
var p = cljs.core.nth.call(null,vec__26654,(1),null);
var job = vec__26654;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26490__auto___26825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___26825,res,vec__26654,v,p,job,jobs,results){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___26825,res,vec__26654,v,p,job,jobs,results){
return (function (state_26661){
var state_val_26662 = (state_26661[(1)]);
if((state_val_26662 === (1))){
var state_26661__$1 = state_26661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26661__$1,(2),res,v);
} else {
if((state_val_26662 === (2))){
var inst_26658 = (state_26661[(2)]);
var inst_26659 = cljs.core.async.close_BANG_.call(null,res);
var state_26661__$1 = (function (){var statearr_26663 = state_26661;
(statearr_26663[(7)] = inst_26658);

return statearr_26663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26661__$1,inst_26659);
} else {
return null;
}
}
});})(c__26490__auto___26825,res,vec__26654,v,p,job,jobs,results))
;
return ((function (switch__26395__auto__,c__26490__auto___26825,res,vec__26654,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____0 = (function (){
var statearr_26664 = [null,null,null,null,null,null,null,null];
(statearr_26664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__);

(statearr_26664[(1)] = (1));

return statearr_26664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____1 = (function (state_26661){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_26661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e26665){if((e26665 instanceof Object)){
var ex__26399__auto__ = e26665;
var statearr_26666_26826 = state_26661;
(statearr_26666_26826[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26827 = state_26661;
state_26661 = G__26827;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__ = function(state_26661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____1.call(this,state_26661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___26825,res,vec__26654,v,p,job,jobs,results))
})();
var state__26492__auto__ = (function (){var statearr_26667 = f__26491__auto__.call(null);
(statearr_26667[(6)] = c__26490__auto___26825);

return statearr_26667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___26825,res,vec__26654,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26668){
var vec__26669 = p__26668;
var v = cljs.core.nth.call(null,vec__26669,(0),null);
var p = cljs.core.nth.call(null,vec__26669,(1),null);
var job = vec__26669;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___26828 = n;
var __26829 = (0);
while(true){
if((__26829 < n__4607__auto___26828)){
var G__26672_26830 = type;
var G__26672_26831__$1 = (((G__26672_26830 instanceof cljs.core.Keyword))?G__26672_26830.fqn:null);
switch (G__26672_26831__$1) {
case "compute":
var c__26490__auto___26833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26829,c__26490__auto___26833,G__26672_26830,G__26672_26831__$1,n__4607__auto___26828,jobs,results,process,async){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (__26829,c__26490__auto___26833,G__26672_26830,G__26672_26831__$1,n__4607__auto___26828,jobs,results,process,async){
return (function (state_26685){
var state_val_26686 = (state_26685[(1)]);
if((state_val_26686 === (1))){
var state_26685__$1 = state_26685;
var statearr_26687_26834 = state_26685__$1;
(statearr_26687_26834[(2)] = null);

(statearr_26687_26834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26686 === (2))){
var state_26685__$1 = state_26685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26685__$1,(4),jobs);
} else {
if((state_val_26686 === (3))){
var inst_26683 = (state_26685[(2)]);
var state_26685__$1 = state_26685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26685__$1,inst_26683);
} else {
if((state_val_26686 === (4))){
var inst_26675 = (state_26685[(2)]);
var inst_26676 = process.call(null,inst_26675);
var state_26685__$1 = state_26685;
if(cljs.core.truth_(inst_26676)){
var statearr_26688_26835 = state_26685__$1;
(statearr_26688_26835[(1)] = (5));

} else {
var statearr_26689_26836 = state_26685__$1;
(statearr_26689_26836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26686 === (5))){
var state_26685__$1 = state_26685;
var statearr_26690_26837 = state_26685__$1;
(statearr_26690_26837[(2)] = null);

(statearr_26690_26837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26686 === (6))){
var state_26685__$1 = state_26685;
var statearr_26691_26838 = state_26685__$1;
(statearr_26691_26838[(2)] = null);

(statearr_26691_26838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26686 === (7))){
var inst_26681 = (state_26685[(2)]);
var state_26685__$1 = state_26685;
var statearr_26692_26839 = state_26685__$1;
(statearr_26692_26839[(2)] = inst_26681);

(statearr_26692_26839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26829,c__26490__auto___26833,G__26672_26830,G__26672_26831__$1,n__4607__auto___26828,jobs,results,process,async))
;
return ((function (__26829,switch__26395__auto__,c__26490__auto___26833,G__26672_26830,G__26672_26831__$1,n__4607__auto___26828,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____0 = (function (){
var statearr_26693 = [null,null,null,null,null,null,null];
(statearr_26693[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__);

(statearr_26693[(1)] = (1));

return statearr_26693;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____1 = (function (state_26685){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_26685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e26694){if((e26694 instanceof Object)){
var ex__26399__auto__ = e26694;
var statearr_26695_26840 = state_26685;
(statearr_26695_26840[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26841 = state_26685;
state_26685 = G__26841;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__ = function(state_26685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____1.call(this,state_26685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__;
})()
;})(__26829,switch__26395__auto__,c__26490__auto___26833,G__26672_26830,G__26672_26831__$1,n__4607__auto___26828,jobs,results,process,async))
})();
var state__26492__auto__ = (function (){var statearr_26696 = f__26491__auto__.call(null);
(statearr_26696[(6)] = c__26490__auto___26833);

return statearr_26696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(__26829,c__26490__auto___26833,G__26672_26830,G__26672_26831__$1,n__4607__auto___26828,jobs,results,process,async))
);


break;
case "async":
var c__26490__auto___26842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26829,c__26490__auto___26842,G__26672_26830,G__26672_26831__$1,n__4607__auto___26828,jobs,results,process,async){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (__26829,c__26490__auto___26842,G__26672_26830,G__26672_26831__$1,n__4607__auto___26828,jobs,results,process,async){
return (function (state_26709){
var state_val_26710 = (state_26709[(1)]);
if((state_val_26710 === (1))){
var state_26709__$1 = state_26709;
var statearr_26711_26843 = state_26709__$1;
(statearr_26711_26843[(2)] = null);

(statearr_26711_26843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26710 === (2))){
var state_26709__$1 = state_26709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26709__$1,(4),jobs);
} else {
if((state_val_26710 === (3))){
var inst_26707 = (state_26709[(2)]);
var state_26709__$1 = state_26709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26709__$1,inst_26707);
} else {
if((state_val_26710 === (4))){
var inst_26699 = (state_26709[(2)]);
var inst_26700 = async.call(null,inst_26699);
var state_26709__$1 = state_26709;
if(cljs.core.truth_(inst_26700)){
var statearr_26712_26844 = state_26709__$1;
(statearr_26712_26844[(1)] = (5));

} else {
var statearr_26713_26845 = state_26709__$1;
(statearr_26713_26845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26710 === (5))){
var state_26709__$1 = state_26709;
var statearr_26714_26846 = state_26709__$1;
(statearr_26714_26846[(2)] = null);

(statearr_26714_26846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26710 === (6))){
var state_26709__$1 = state_26709;
var statearr_26715_26847 = state_26709__$1;
(statearr_26715_26847[(2)] = null);

(statearr_26715_26847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26710 === (7))){
var inst_26705 = (state_26709[(2)]);
var state_26709__$1 = state_26709;
var statearr_26716_26848 = state_26709__$1;
(statearr_26716_26848[(2)] = inst_26705);

(statearr_26716_26848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26829,c__26490__auto___26842,G__26672_26830,G__26672_26831__$1,n__4607__auto___26828,jobs,results,process,async))
;
return ((function (__26829,switch__26395__auto__,c__26490__auto___26842,G__26672_26830,G__26672_26831__$1,n__4607__auto___26828,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____0 = (function (){
var statearr_26717 = [null,null,null,null,null,null,null];
(statearr_26717[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__);

(statearr_26717[(1)] = (1));

return statearr_26717;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____1 = (function (state_26709){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_26709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e26718){if((e26718 instanceof Object)){
var ex__26399__auto__ = e26718;
var statearr_26719_26849 = state_26709;
(statearr_26719_26849[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26850 = state_26709;
state_26709 = G__26850;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__ = function(state_26709){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____1.call(this,state_26709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__;
})()
;})(__26829,switch__26395__auto__,c__26490__auto___26842,G__26672_26830,G__26672_26831__$1,n__4607__auto___26828,jobs,results,process,async))
})();
var state__26492__auto__ = (function (){var statearr_26720 = f__26491__auto__.call(null);
(statearr_26720[(6)] = c__26490__auto___26842);

return statearr_26720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(__26829,c__26490__auto___26842,G__26672_26830,G__26672_26831__$1,n__4607__auto___26828,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26672_26831__$1)].join('')));

}

var G__26851 = (__26829 + (1));
__26829 = G__26851;
continue;
} else {
}
break;
}

var c__26490__auto___26852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___26852,jobs,results,process,async){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___26852,jobs,results,process,async){
return (function (state_26742){
var state_val_26743 = (state_26742[(1)]);
if((state_val_26743 === (7))){
var inst_26738 = (state_26742[(2)]);
var state_26742__$1 = state_26742;
var statearr_26744_26853 = state_26742__$1;
(statearr_26744_26853[(2)] = inst_26738);

(statearr_26744_26853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (1))){
var state_26742__$1 = state_26742;
var statearr_26745_26854 = state_26742__$1;
(statearr_26745_26854[(2)] = null);

(statearr_26745_26854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (4))){
var inst_26723 = (state_26742[(7)]);
var inst_26723__$1 = (state_26742[(2)]);
var inst_26724 = (inst_26723__$1 == null);
var state_26742__$1 = (function (){var statearr_26746 = state_26742;
(statearr_26746[(7)] = inst_26723__$1);

return statearr_26746;
})();
if(cljs.core.truth_(inst_26724)){
var statearr_26747_26855 = state_26742__$1;
(statearr_26747_26855[(1)] = (5));

} else {
var statearr_26748_26856 = state_26742__$1;
(statearr_26748_26856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (6))){
var inst_26728 = (state_26742[(8)]);
var inst_26723 = (state_26742[(7)]);
var inst_26728__$1 = cljs.core.async.chan.call(null,(1));
var inst_26729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26730 = [inst_26723,inst_26728__$1];
var inst_26731 = (new cljs.core.PersistentVector(null,2,(5),inst_26729,inst_26730,null));
var state_26742__$1 = (function (){var statearr_26749 = state_26742;
(statearr_26749[(8)] = inst_26728__$1);

return statearr_26749;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26742__$1,(8),jobs,inst_26731);
} else {
if((state_val_26743 === (3))){
var inst_26740 = (state_26742[(2)]);
var state_26742__$1 = state_26742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26742__$1,inst_26740);
} else {
if((state_val_26743 === (2))){
var state_26742__$1 = state_26742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26742__$1,(4),from);
} else {
if((state_val_26743 === (9))){
var inst_26735 = (state_26742[(2)]);
var state_26742__$1 = (function (){var statearr_26750 = state_26742;
(statearr_26750[(9)] = inst_26735);

return statearr_26750;
})();
var statearr_26751_26857 = state_26742__$1;
(statearr_26751_26857[(2)] = null);

(statearr_26751_26857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (5))){
var inst_26726 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26742__$1 = state_26742;
var statearr_26752_26858 = state_26742__$1;
(statearr_26752_26858[(2)] = inst_26726);

(statearr_26752_26858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (8))){
var inst_26728 = (state_26742[(8)]);
var inst_26733 = (state_26742[(2)]);
var state_26742__$1 = (function (){var statearr_26753 = state_26742;
(statearr_26753[(10)] = inst_26733);

return statearr_26753;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26742__$1,(9),results,inst_26728);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__26490__auto___26852,jobs,results,process,async))
;
return ((function (switch__26395__auto__,c__26490__auto___26852,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____0 = (function (){
var statearr_26754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__);

(statearr_26754[(1)] = (1));

return statearr_26754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____1 = (function (state_26742){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_26742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e26755){if((e26755 instanceof Object)){
var ex__26399__auto__ = e26755;
var statearr_26756_26859 = state_26742;
(statearr_26756_26859[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26860 = state_26742;
state_26742 = G__26860;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__ = function(state_26742){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____1.call(this,state_26742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___26852,jobs,results,process,async))
})();
var state__26492__auto__ = (function (){var statearr_26757 = f__26491__auto__.call(null);
(statearr_26757[(6)] = c__26490__auto___26852);

return statearr_26757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___26852,jobs,results,process,async))
);


var c__26490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto__,jobs,results,process,async){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto__,jobs,results,process,async){
return (function (state_26795){
var state_val_26796 = (state_26795[(1)]);
if((state_val_26796 === (7))){
var inst_26791 = (state_26795[(2)]);
var state_26795__$1 = state_26795;
var statearr_26797_26861 = state_26795__$1;
(statearr_26797_26861[(2)] = inst_26791);

(statearr_26797_26861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (20))){
var state_26795__$1 = state_26795;
var statearr_26798_26862 = state_26795__$1;
(statearr_26798_26862[(2)] = null);

(statearr_26798_26862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (1))){
var state_26795__$1 = state_26795;
var statearr_26799_26863 = state_26795__$1;
(statearr_26799_26863[(2)] = null);

(statearr_26799_26863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (4))){
var inst_26760 = (state_26795[(7)]);
var inst_26760__$1 = (state_26795[(2)]);
var inst_26761 = (inst_26760__$1 == null);
var state_26795__$1 = (function (){var statearr_26800 = state_26795;
(statearr_26800[(7)] = inst_26760__$1);

return statearr_26800;
})();
if(cljs.core.truth_(inst_26761)){
var statearr_26801_26864 = state_26795__$1;
(statearr_26801_26864[(1)] = (5));

} else {
var statearr_26802_26865 = state_26795__$1;
(statearr_26802_26865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (15))){
var inst_26773 = (state_26795[(8)]);
var state_26795__$1 = state_26795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26795__$1,(18),to,inst_26773);
} else {
if((state_val_26796 === (21))){
var inst_26786 = (state_26795[(2)]);
var state_26795__$1 = state_26795;
var statearr_26803_26866 = state_26795__$1;
(statearr_26803_26866[(2)] = inst_26786);

(statearr_26803_26866[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (13))){
var inst_26788 = (state_26795[(2)]);
var state_26795__$1 = (function (){var statearr_26804 = state_26795;
(statearr_26804[(9)] = inst_26788);

return statearr_26804;
})();
var statearr_26805_26867 = state_26795__$1;
(statearr_26805_26867[(2)] = null);

(statearr_26805_26867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (6))){
var inst_26760 = (state_26795[(7)]);
var state_26795__$1 = state_26795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26795__$1,(11),inst_26760);
} else {
if((state_val_26796 === (17))){
var inst_26781 = (state_26795[(2)]);
var state_26795__$1 = state_26795;
if(cljs.core.truth_(inst_26781)){
var statearr_26806_26868 = state_26795__$1;
(statearr_26806_26868[(1)] = (19));

} else {
var statearr_26807_26869 = state_26795__$1;
(statearr_26807_26869[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (3))){
var inst_26793 = (state_26795[(2)]);
var state_26795__$1 = state_26795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26795__$1,inst_26793);
} else {
if((state_val_26796 === (12))){
var inst_26770 = (state_26795[(10)]);
var state_26795__$1 = state_26795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26795__$1,(14),inst_26770);
} else {
if((state_val_26796 === (2))){
var state_26795__$1 = state_26795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26795__$1,(4),results);
} else {
if((state_val_26796 === (19))){
var state_26795__$1 = state_26795;
var statearr_26808_26870 = state_26795__$1;
(statearr_26808_26870[(2)] = null);

(statearr_26808_26870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (11))){
var inst_26770 = (state_26795[(2)]);
var state_26795__$1 = (function (){var statearr_26809 = state_26795;
(statearr_26809[(10)] = inst_26770);

return statearr_26809;
})();
var statearr_26810_26871 = state_26795__$1;
(statearr_26810_26871[(2)] = null);

(statearr_26810_26871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (9))){
var state_26795__$1 = state_26795;
var statearr_26811_26872 = state_26795__$1;
(statearr_26811_26872[(2)] = null);

(statearr_26811_26872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (5))){
var state_26795__$1 = state_26795;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26812_26873 = state_26795__$1;
(statearr_26812_26873[(1)] = (8));

} else {
var statearr_26813_26874 = state_26795__$1;
(statearr_26813_26874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (14))){
var inst_26773 = (state_26795[(8)]);
var inst_26775 = (state_26795[(11)]);
var inst_26773__$1 = (state_26795[(2)]);
var inst_26774 = (inst_26773__$1 == null);
var inst_26775__$1 = cljs.core.not.call(null,inst_26774);
var state_26795__$1 = (function (){var statearr_26814 = state_26795;
(statearr_26814[(8)] = inst_26773__$1);

(statearr_26814[(11)] = inst_26775__$1);

return statearr_26814;
})();
if(inst_26775__$1){
var statearr_26815_26875 = state_26795__$1;
(statearr_26815_26875[(1)] = (15));

} else {
var statearr_26816_26876 = state_26795__$1;
(statearr_26816_26876[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (16))){
var inst_26775 = (state_26795[(11)]);
var state_26795__$1 = state_26795;
var statearr_26817_26877 = state_26795__$1;
(statearr_26817_26877[(2)] = inst_26775);

(statearr_26817_26877[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (10))){
var inst_26767 = (state_26795[(2)]);
var state_26795__$1 = state_26795;
var statearr_26818_26878 = state_26795__$1;
(statearr_26818_26878[(2)] = inst_26767);

(statearr_26818_26878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (18))){
var inst_26778 = (state_26795[(2)]);
var state_26795__$1 = state_26795;
var statearr_26819_26879 = state_26795__$1;
(statearr_26819_26879[(2)] = inst_26778);

(statearr_26819_26879[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26796 === (8))){
var inst_26764 = cljs.core.async.close_BANG_.call(null,to);
var state_26795__$1 = state_26795;
var statearr_26820_26880 = state_26795__$1;
(statearr_26820_26880[(2)] = inst_26764);

(statearr_26820_26880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26490__auto__,jobs,results,process,async))
;
return ((function (switch__26395__auto__,c__26490__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____0 = (function (){
var statearr_26821 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26821[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__);

(statearr_26821[(1)] = (1));

return statearr_26821;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____1 = (function (state_26795){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_26795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e26822){if((e26822 instanceof Object)){
var ex__26399__auto__ = e26822;
var statearr_26823_26881 = state_26795;
(statearr_26823_26881[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26882 = state_26795;
state_26795 = G__26882;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__ = function(state_26795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____1.call(this,state_26795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto__,jobs,results,process,async))
})();
var state__26492__auto__ = (function (){var statearr_26824 = f__26491__auto__.call(null);
(statearr_26824[(6)] = c__26490__auto__);

return statearr_26824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto__,jobs,results,process,async))
);

return c__26490__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26884 = arguments.length;
switch (G__26884) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26887 = arguments.length;
switch (G__26887) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26890 = arguments.length;
switch (G__26890) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26490__auto___26939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___26939,tc,fc){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___26939,tc,fc){
return (function (state_26916){
var state_val_26917 = (state_26916[(1)]);
if((state_val_26917 === (7))){
var inst_26912 = (state_26916[(2)]);
var state_26916__$1 = state_26916;
var statearr_26918_26940 = state_26916__$1;
(statearr_26918_26940[(2)] = inst_26912);

(statearr_26918_26940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (1))){
var state_26916__$1 = state_26916;
var statearr_26919_26941 = state_26916__$1;
(statearr_26919_26941[(2)] = null);

(statearr_26919_26941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (4))){
var inst_26893 = (state_26916[(7)]);
var inst_26893__$1 = (state_26916[(2)]);
var inst_26894 = (inst_26893__$1 == null);
var state_26916__$1 = (function (){var statearr_26920 = state_26916;
(statearr_26920[(7)] = inst_26893__$1);

return statearr_26920;
})();
if(cljs.core.truth_(inst_26894)){
var statearr_26921_26942 = state_26916__$1;
(statearr_26921_26942[(1)] = (5));

} else {
var statearr_26922_26943 = state_26916__$1;
(statearr_26922_26943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (13))){
var state_26916__$1 = state_26916;
var statearr_26923_26944 = state_26916__$1;
(statearr_26923_26944[(2)] = null);

(statearr_26923_26944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (6))){
var inst_26893 = (state_26916[(7)]);
var inst_26899 = p.call(null,inst_26893);
var state_26916__$1 = state_26916;
if(cljs.core.truth_(inst_26899)){
var statearr_26924_26945 = state_26916__$1;
(statearr_26924_26945[(1)] = (9));

} else {
var statearr_26925_26946 = state_26916__$1;
(statearr_26925_26946[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (3))){
var inst_26914 = (state_26916[(2)]);
var state_26916__$1 = state_26916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26916__$1,inst_26914);
} else {
if((state_val_26917 === (12))){
var state_26916__$1 = state_26916;
var statearr_26926_26947 = state_26916__$1;
(statearr_26926_26947[(2)] = null);

(statearr_26926_26947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (2))){
var state_26916__$1 = state_26916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26916__$1,(4),ch);
} else {
if((state_val_26917 === (11))){
var inst_26893 = (state_26916[(7)]);
var inst_26903 = (state_26916[(2)]);
var state_26916__$1 = state_26916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26916__$1,(8),inst_26903,inst_26893);
} else {
if((state_val_26917 === (9))){
var state_26916__$1 = state_26916;
var statearr_26927_26948 = state_26916__$1;
(statearr_26927_26948[(2)] = tc);

(statearr_26927_26948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (5))){
var inst_26896 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26897 = cljs.core.async.close_BANG_.call(null,fc);
var state_26916__$1 = (function (){var statearr_26928 = state_26916;
(statearr_26928[(8)] = inst_26896);

return statearr_26928;
})();
var statearr_26929_26949 = state_26916__$1;
(statearr_26929_26949[(2)] = inst_26897);

(statearr_26929_26949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (14))){
var inst_26910 = (state_26916[(2)]);
var state_26916__$1 = state_26916;
var statearr_26930_26950 = state_26916__$1;
(statearr_26930_26950[(2)] = inst_26910);

(statearr_26930_26950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (10))){
var state_26916__$1 = state_26916;
var statearr_26931_26951 = state_26916__$1;
(statearr_26931_26951[(2)] = fc);

(statearr_26931_26951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (8))){
var inst_26905 = (state_26916[(2)]);
var state_26916__$1 = state_26916;
if(cljs.core.truth_(inst_26905)){
var statearr_26932_26952 = state_26916__$1;
(statearr_26932_26952[(1)] = (12));

} else {
var statearr_26933_26953 = state_26916__$1;
(statearr_26933_26953[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26490__auto___26939,tc,fc))
;
return ((function (switch__26395__auto__,c__26490__auto___26939,tc,fc){
return (function() {
var cljs$core$async$state_machine__26396__auto__ = null;
var cljs$core$async$state_machine__26396__auto____0 = (function (){
var statearr_26934 = [null,null,null,null,null,null,null,null,null];
(statearr_26934[(0)] = cljs$core$async$state_machine__26396__auto__);

(statearr_26934[(1)] = (1));

return statearr_26934;
});
var cljs$core$async$state_machine__26396__auto____1 = (function (state_26916){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_26916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e26935){if((e26935 instanceof Object)){
var ex__26399__auto__ = e26935;
var statearr_26936_26954 = state_26916;
(statearr_26936_26954[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26955 = state_26916;
state_26916 = G__26955;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$state_machine__26396__auto__ = function(state_26916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26396__auto____1.call(this,state_26916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26396__auto____0;
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26396__auto____1;
return cljs$core$async$state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___26939,tc,fc))
})();
var state__26492__auto__ = (function (){var statearr_26937 = f__26491__auto__.call(null);
(statearr_26937[(6)] = c__26490__auto___26939);

return statearr_26937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___26939,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto__){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto__){
return (function (state_26976){
var state_val_26977 = (state_26976[(1)]);
if((state_val_26977 === (7))){
var inst_26972 = (state_26976[(2)]);
var state_26976__$1 = state_26976;
var statearr_26978_26996 = state_26976__$1;
(statearr_26978_26996[(2)] = inst_26972);

(statearr_26978_26996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26977 === (1))){
var inst_26956 = init;
var state_26976__$1 = (function (){var statearr_26979 = state_26976;
(statearr_26979[(7)] = inst_26956);

return statearr_26979;
})();
var statearr_26980_26997 = state_26976__$1;
(statearr_26980_26997[(2)] = null);

(statearr_26980_26997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26977 === (4))){
var inst_26959 = (state_26976[(8)]);
var inst_26959__$1 = (state_26976[(2)]);
var inst_26960 = (inst_26959__$1 == null);
var state_26976__$1 = (function (){var statearr_26981 = state_26976;
(statearr_26981[(8)] = inst_26959__$1);

return statearr_26981;
})();
if(cljs.core.truth_(inst_26960)){
var statearr_26982_26998 = state_26976__$1;
(statearr_26982_26998[(1)] = (5));

} else {
var statearr_26983_26999 = state_26976__$1;
(statearr_26983_26999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26977 === (6))){
var inst_26959 = (state_26976[(8)]);
var inst_26956 = (state_26976[(7)]);
var inst_26963 = (state_26976[(9)]);
var inst_26963__$1 = f.call(null,inst_26956,inst_26959);
var inst_26964 = cljs.core.reduced_QMARK_.call(null,inst_26963__$1);
var state_26976__$1 = (function (){var statearr_26984 = state_26976;
(statearr_26984[(9)] = inst_26963__$1);

return statearr_26984;
})();
if(inst_26964){
var statearr_26985_27000 = state_26976__$1;
(statearr_26985_27000[(1)] = (8));

} else {
var statearr_26986_27001 = state_26976__$1;
(statearr_26986_27001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26977 === (3))){
var inst_26974 = (state_26976[(2)]);
var state_26976__$1 = state_26976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26976__$1,inst_26974);
} else {
if((state_val_26977 === (2))){
var state_26976__$1 = state_26976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26976__$1,(4),ch);
} else {
if((state_val_26977 === (9))){
var inst_26963 = (state_26976[(9)]);
var inst_26956 = inst_26963;
var state_26976__$1 = (function (){var statearr_26987 = state_26976;
(statearr_26987[(7)] = inst_26956);

return statearr_26987;
})();
var statearr_26988_27002 = state_26976__$1;
(statearr_26988_27002[(2)] = null);

(statearr_26988_27002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26977 === (5))){
var inst_26956 = (state_26976[(7)]);
var state_26976__$1 = state_26976;
var statearr_26989_27003 = state_26976__$1;
(statearr_26989_27003[(2)] = inst_26956);

(statearr_26989_27003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26977 === (10))){
var inst_26970 = (state_26976[(2)]);
var state_26976__$1 = state_26976;
var statearr_26990_27004 = state_26976__$1;
(statearr_26990_27004[(2)] = inst_26970);

(statearr_26990_27004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26977 === (8))){
var inst_26963 = (state_26976[(9)]);
var inst_26966 = cljs.core.deref.call(null,inst_26963);
var state_26976__$1 = state_26976;
var statearr_26991_27005 = state_26976__$1;
(statearr_26991_27005[(2)] = inst_26966);

(statearr_26991_27005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__26490__auto__))
;
return ((function (switch__26395__auto__,c__26490__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26396__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26396__auto____0 = (function (){
var statearr_26992 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26992[(0)] = cljs$core$async$reduce_$_state_machine__26396__auto__);

(statearr_26992[(1)] = (1));

return statearr_26992;
});
var cljs$core$async$reduce_$_state_machine__26396__auto____1 = (function (state_26976){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_26976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e26993){if((e26993 instanceof Object)){
var ex__26399__auto__ = e26993;
var statearr_26994_27006 = state_26976;
(statearr_26994_27006[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27007 = state_26976;
state_26976 = G__27007;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26396__auto__ = function(state_26976){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26396__auto____1.call(this,state_26976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26396__auto____0;
cljs$core$async$reduce_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26396__auto____1;
return cljs$core$async$reduce_$_state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto__))
})();
var state__26492__auto__ = (function (){var statearr_26995 = f__26491__auto__.call(null);
(statearr_26995[(6)] = c__26490__auto__);

return statearr_26995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto__))
);

return c__26490__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto__,f__$1){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto__,f__$1){
return (function (state_27013){
var state_val_27014 = (state_27013[(1)]);
if((state_val_27014 === (1))){
var inst_27008 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27013__$1 = state_27013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27013__$1,(2),inst_27008);
} else {
if((state_val_27014 === (2))){
var inst_27010 = (state_27013[(2)]);
var inst_27011 = f__$1.call(null,inst_27010);
var state_27013__$1 = state_27013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27013__$1,inst_27011);
} else {
return null;
}
}
});})(c__26490__auto__,f__$1))
;
return ((function (switch__26395__auto__,c__26490__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26396__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26396__auto____0 = (function (){
var statearr_27015 = [null,null,null,null,null,null,null];
(statearr_27015[(0)] = cljs$core$async$transduce_$_state_machine__26396__auto__);

(statearr_27015[(1)] = (1));

return statearr_27015;
});
var cljs$core$async$transduce_$_state_machine__26396__auto____1 = (function (state_27013){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_27013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e27016){if((e27016 instanceof Object)){
var ex__26399__auto__ = e27016;
var statearr_27017_27019 = state_27013;
(statearr_27017_27019[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27020 = state_27013;
state_27013 = G__27020;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26396__auto__ = function(state_27013){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26396__auto____1.call(this,state_27013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26396__auto____0;
cljs$core$async$transduce_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26396__auto____1;
return cljs$core$async$transduce_$_state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto__,f__$1))
})();
var state__26492__auto__ = (function (){var statearr_27018 = f__26491__auto__.call(null);
(statearr_27018[(6)] = c__26490__auto__);

return statearr_27018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto__,f__$1))
);

return c__26490__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27022 = arguments.length;
switch (G__27022) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto__){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto__){
return (function (state_27047){
var state_val_27048 = (state_27047[(1)]);
if((state_val_27048 === (7))){
var inst_27029 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
var statearr_27049_27070 = state_27047__$1;
(statearr_27049_27070[(2)] = inst_27029);

(statearr_27049_27070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (1))){
var inst_27023 = cljs.core.seq.call(null,coll);
var inst_27024 = inst_27023;
var state_27047__$1 = (function (){var statearr_27050 = state_27047;
(statearr_27050[(7)] = inst_27024);

return statearr_27050;
})();
var statearr_27051_27071 = state_27047__$1;
(statearr_27051_27071[(2)] = null);

(statearr_27051_27071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (4))){
var inst_27024 = (state_27047[(7)]);
var inst_27027 = cljs.core.first.call(null,inst_27024);
var state_27047__$1 = state_27047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27047__$1,(7),ch,inst_27027);
} else {
if((state_val_27048 === (13))){
var inst_27041 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
var statearr_27052_27072 = state_27047__$1;
(statearr_27052_27072[(2)] = inst_27041);

(statearr_27052_27072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (6))){
var inst_27032 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
if(cljs.core.truth_(inst_27032)){
var statearr_27053_27073 = state_27047__$1;
(statearr_27053_27073[(1)] = (8));

} else {
var statearr_27054_27074 = state_27047__$1;
(statearr_27054_27074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (3))){
var inst_27045 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27047__$1,inst_27045);
} else {
if((state_val_27048 === (12))){
var state_27047__$1 = state_27047;
var statearr_27055_27075 = state_27047__$1;
(statearr_27055_27075[(2)] = null);

(statearr_27055_27075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (2))){
var inst_27024 = (state_27047[(7)]);
var state_27047__$1 = state_27047;
if(cljs.core.truth_(inst_27024)){
var statearr_27056_27076 = state_27047__$1;
(statearr_27056_27076[(1)] = (4));

} else {
var statearr_27057_27077 = state_27047__$1;
(statearr_27057_27077[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (11))){
var inst_27038 = cljs.core.async.close_BANG_.call(null,ch);
var state_27047__$1 = state_27047;
var statearr_27058_27078 = state_27047__$1;
(statearr_27058_27078[(2)] = inst_27038);

(statearr_27058_27078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (9))){
var state_27047__$1 = state_27047;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27059_27079 = state_27047__$1;
(statearr_27059_27079[(1)] = (11));

} else {
var statearr_27060_27080 = state_27047__$1;
(statearr_27060_27080[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (5))){
var inst_27024 = (state_27047[(7)]);
var state_27047__$1 = state_27047;
var statearr_27061_27081 = state_27047__$1;
(statearr_27061_27081[(2)] = inst_27024);

(statearr_27061_27081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (10))){
var inst_27043 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
var statearr_27062_27082 = state_27047__$1;
(statearr_27062_27082[(2)] = inst_27043);

(statearr_27062_27082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (8))){
var inst_27024 = (state_27047[(7)]);
var inst_27034 = cljs.core.next.call(null,inst_27024);
var inst_27024__$1 = inst_27034;
var state_27047__$1 = (function (){var statearr_27063 = state_27047;
(statearr_27063[(7)] = inst_27024__$1);

return statearr_27063;
})();
var statearr_27064_27083 = state_27047__$1;
(statearr_27064_27083[(2)] = null);

(statearr_27064_27083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26490__auto__))
;
return ((function (switch__26395__auto__,c__26490__auto__){
return (function() {
var cljs$core$async$state_machine__26396__auto__ = null;
var cljs$core$async$state_machine__26396__auto____0 = (function (){
var statearr_27065 = [null,null,null,null,null,null,null,null];
(statearr_27065[(0)] = cljs$core$async$state_machine__26396__auto__);

(statearr_27065[(1)] = (1));

return statearr_27065;
});
var cljs$core$async$state_machine__26396__auto____1 = (function (state_27047){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_27047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e27066){if((e27066 instanceof Object)){
var ex__26399__auto__ = e27066;
var statearr_27067_27084 = state_27047;
(statearr_27067_27084[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27085 = state_27047;
state_27047 = G__27085;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$state_machine__26396__auto__ = function(state_27047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26396__auto____1.call(this,state_27047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26396__auto____0;
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26396__auto____1;
return cljs$core$async$state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto__))
})();
var state__26492__auto__ = (function (){var statearr_27068 = f__26491__auto__.call(null);
(statearr_27068[(6)] = c__26490__auto__);

return statearr_27068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto__))
);

return c__26490__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27086 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27086 = (function (ch,cs,meta27087){
this.ch = ch;
this.cs = cs;
this.meta27087 = meta27087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27088,meta27087__$1){
var self__ = this;
var _27088__$1 = this;
return (new cljs.core.async.t_cljs$core$async27086(self__.ch,self__.cs,meta27087__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27088){
var self__ = this;
var _27088__$1 = this;
return self__.meta27087;
});})(cs))
;

cljs.core.async.t_cljs$core$async27086.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27086.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27086.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27086.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27086.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27086.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27086.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27087","meta27087",-1535738191,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27086";

cljs.core.async.t_cljs$core$async27086.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27086");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27086.
 */
cljs.core.async.__GT_t_cljs$core$async27086 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27086(ch__$1,cs__$1,meta27087){
return (new cljs.core.async.t_cljs$core$async27086(ch__$1,cs__$1,meta27087));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27086(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26490__auto___27308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___27308,cs,m,dchan,dctr,done){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___27308,cs,m,dchan,dctr,done){
return (function (state_27223){
var state_val_27224 = (state_27223[(1)]);
if((state_val_27224 === (7))){
var inst_27219 = (state_27223[(2)]);
var state_27223__$1 = state_27223;
var statearr_27225_27309 = state_27223__$1;
(statearr_27225_27309[(2)] = inst_27219);

(statearr_27225_27309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (20))){
var inst_27122 = (state_27223[(7)]);
var inst_27134 = cljs.core.first.call(null,inst_27122);
var inst_27135 = cljs.core.nth.call(null,inst_27134,(0),null);
var inst_27136 = cljs.core.nth.call(null,inst_27134,(1),null);
var state_27223__$1 = (function (){var statearr_27226 = state_27223;
(statearr_27226[(8)] = inst_27135);

return statearr_27226;
})();
if(cljs.core.truth_(inst_27136)){
var statearr_27227_27310 = state_27223__$1;
(statearr_27227_27310[(1)] = (22));

} else {
var statearr_27228_27311 = state_27223__$1;
(statearr_27228_27311[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (27))){
var inst_27164 = (state_27223[(9)]);
var inst_27171 = (state_27223[(10)]);
var inst_27166 = (state_27223[(11)]);
var inst_27091 = (state_27223[(12)]);
var inst_27171__$1 = cljs.core._nth.call(null,inst_27164,inst_27166);
var inst_27172 = cljs.core.async.put_BANG_.call(null,inst_27171__$1,inst_27091,done);
var state_27223__$1 = (function (){var statearr_27229 = state_27223;
(statearr_27229[(10)] = inst_27171__$1);

return statearr_27229;
})();
if(cljs.core.truth_(inst_27172)){
var statearr_27230_27312 = state_27223__$1;
(statearr_27230_27312[(1)] = (30));

} else {
var statearr_27231_27313 = state_27223__$1;
(statearr_27231_27313[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (1))){
var state_27223__$1 = state_27223;
var statearr_27232_27314 = state_27223__$1;
(statearr_27232_27314[(2)] = null);

(statearr_27232_27314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (24))){
var inst_27122 = (state_27223[(7)]);
var inst_27141 = (state_27223[(2)]);
var inst_27142 = cljs.core.next.call(null,inst_27122);
var inst_27100 = inst_27142;
var inst_27101 = null;
var inst_27102 = (0);
var inst_27103 = (0);
var state_27223__$1 = (function (){var statearr_27233 = state_27223;
(statearr_27233[(13)] = inst_27102);

(statearr_27233[(14)] = inst_27103);

(statearr_27233[(15)] = inst_27100);

(statearr_27233[(16)] = inst_27141);

(statearr_27233[(17)] = inst_27101);

return statearr_27233;
})();
var statearr_27234_27315 = state_27223__$1;
(statearr_27234_27315[(2)] = null);

(statearr_27234_27315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (39))){
var state_27223__$1 = state_27223;
var statearr_27238_27316 = state_27223__$1;
(statearr_27238_27316[(2)] = null);

(statearr_27238_27316[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (4))){
var inst_27091 = (state_27223[(12)]);
var inst_27091__$1 = (state_27223[(2)]);
var inst_27092 = (inst_27091__$1 == null);
var state_27223__$1 = (function (){var statearr_27239 = state_27223;
(statearr_27239[(12)] = inst_27091__$1);

return statearr_27239;
})();
if(cljs.core.truth_(inst_27092)){
var statearr_27240_27317 = state_27223__$1;
(statearr_27240_27317[(1)] = (5));

} else {
var statearr_27241_27318 = state_27223__$1;
(statearr_27241_27318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (15))){
var inst_27102 = (state_27223[(13)]);
var inst_27103 = (state_27223[(14)]);
var inst_27100 = (state_27223[(15)]);
var inst_27101 = (state_27223[(17)]);
var inst_27118 = (state_27223[(2)]);
var inst_27119 = (inst_27103 + (1));
var tmp27235 = inst_27102;
var tmp27236 = inst_27100;
var tmp27237 = inst_27101;
var inst_27100__$1 = tmp27236;
var inst_27101__$1 = tmp27237;
var inst_27102__$1 = tmp27235;
var inst_27103__$1 = inst_27119;
var state_27223__$1 = (function (){var statearr_27242 = state_27223;
(statearr_27242[(13)] = inst_27102__$1);

(statearr_27242[(14)] = inst_27103__$1);

(statearr_27242[(15)] = inst_27100__$1);

(statearr_27242[(18)] = inst_27118);

(statearr_27242[(17)] = inst_27101__$1);

return statearr_27242;
})();
var statearr_27243_27319 = state_27223__$1;
(statearr_27243_27319[(2)] = null);

(statearr_27243_27319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (21))){
var inst_27145 = (state_27223[(2)]);
var state_27223__$1 = state_27223;
var statearr_27247_27320 = state_27223__$1;
(statearr_27247_27320[(2)] = inst_27145);

(statearr_27247_27320[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (31))){
var inst_27171 = (state_27223[(10)]);
var inst_27175 = done.call(null,null);
var inst_27176 = cljs.core.async.untap_STAR_.call(null,m,inst_27171);
var state_27223__$1 = (function (){var statearr_27248 = state_27223;
(statearr_27248[(19)] = inst_27175);

return statearr_27248;
})();
var statearr_27249_27321 = state_27223__$1;
(statearr_27249_27321[(2)] = inst_27176);

(statearr_27249_27321[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (32))){
var inst_27164 = (state_27223[(9)]);
var inst_27163 = (state_27223[(20)]);
var inst_27166 = (state_27223[(11)]);
var inst_27165 = (state_27223[(21)]);
var inst_27178 = (state_27223[(2)]);
var inst_27179 = (inst_27166 + (1));
var tmp27244 = inst_27164;
var tmp27245 = inst_27163;
var tmp27246 = inst_27165;
var inst_27163__$1 = tmp27245;
var inst_27164__$1 = tmp27244;
var inst_27165__$1 = tmp27246;
var inst_27166__$1 = inst_27179;
var state_27223__$1 = (function (){var statearr_27250 = state_27223;
(statearr_27250[(9)] = inst_27164__$1);

(statearr_27250[(22)] = inst_27178);

(statearr_27250[(20)] = inst_27163__$1);

(statearr_27250[(11)] = inst_27166__$1);

(statearr_27250[(21)] = inst_27165__$1);

return statearr_27250;
})();
var statearr_27251_27322 = state_27223__$1;
(statearr_27251_27322[(2)] = null);

(statearr_27251_27322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (40))){
var inst_27191 = (state_27223[(23)]);
var inst_27195 = done.call(null,null);
var inst_27196 = cljs.core.async.untap_STAR_.call(null,m,inst_27191);
var state_27223__$1 = (function (){var statearr_27252 = state_27223;
(statearr_27252[(24)] = inst_27195);

return statearr_27252;
})();
var statearr_27253_27323 = state_27223__$1;
(statearr_27253_27323[(2)] = inst_27196);

(statearr_27253_27323[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (33))){
var inst_27182 = (state_27223[(25)]);
var inst_27184 = cljs.core.chunked_seq_QMARK_.call(null,inst_27182);
var state_27223__$1 = state_27223;
if(inst_27184){
var statearr_27254_27324 = state_27223__$1;
(statearr_27254_27324[(1)] = (36));

} else {
var statearr_27255_27325 = state_27223__$1;
(statearr_27255_27325[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (13))){
var inst_27112 = (state_27223[(26)]);
var inst_27115 = cljs.core.async.close_BANG_.call(null,inst_27112);
var state_27223__$1 = state_27223;
var statearr_27256_27326 = state_27223__$1;
(statearr_27256_27326[(2)] = inst_27115);

(statearr_27256_27326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (22))){
var inst_27135 = (state_27223[(8)]);
var inst_27138 = cljs.core.async.close_BANG_.call(null,inst_27135);
var state_27223__$1 = state_27223;
var statearr_27257_27327 = state_27223__$1;
(statearr_27257_27327[(2)] = inst_27138);

(statearr_27257_27327[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (36))){
var inst_27182 = (state_27223[(25)]);
var inst_27186 = cljs.core.chunk_first.call(null,inst_27182);
var inst_27187 = cljs.core.chunk_rest.call(null,inst_27182);
var inst_27188 = cljs.core.count.call(null,inst_27186);
var inst_27163 = inst_27187;
var inst_27164 = inst_27186;
var inst_27165 = inst_27188;
var inst_27166 = (0);
var state_27223__$1 = (function (){var statearr_27258 = state_27223;
(statearr_27258[(9)] = inst_27164);

(statearr_27258[(20)] = inst_27163);

(statearr_27258[(11)] = inst_27166);

(statearr_27258[(21)] = inst_27165);

return statearr_27258;
})();
var statearr_27259_27328 = state_27223__$1;
(statearr_27259_27328[(2)] = null);

(statearr_27259_27328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (41))){
var inst_27182 = (state_27223[(25)]);
var inst_27198 = (state_27223[(2)]);
var inst_27199 = cljs.core.next.call(null,inst_27182);
var inst_27163 = inst_27199;
var inst_27164 = null;
var inst_27165 = (0);
var inst_27166 = (0);
var state_27223__$1 = (function (){var statearr_27260 = state_27223;
(statearr_27260[(9)] = inst_27164);

(statearr_27260[(20)] = inst_27163);

(statearr_27260[(11)] = inst_27166);

(statearr_27260[(27)] = inst_27198);

(statearr_27260[(21)] = inst_27165);

return statearr_27260;
})();
var statearr_27261_27329 = state_27223__$1;
(statearr_27261_27329[(2)] = null);

(statearr_27261_27329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (43))){
var state_27223__$1 = state_27223;
var statearr_27262_27330 = state_27223__$1;
(statearr_27262_27330[(2)] = null);

(statearr_27262_27330[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (29))){
var inst_27207 = (state_27223[(2)]);
var state_27223__$1 = state_27223;
var statearr_27263_27331 = state_27223__$1;
(statearr_27263_27331[(2)] = inst_27207);

(statearr_27263_27331[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (44))){
var inst_27216 = (state_27223[(2)]);
var state_27223__$1 = (function (){var statearr_27264 = state_27223;
(statearr_27264[(28)] = inst_27216);

return statearr_27264;
})();
var statearr_27265_27332 = state_27223__$1;
(statearr_27265_27332[(2)] = null);

(statearr_27265_27332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (6))){
var inst_27155 = (state_27223[(29)]);
var inst_27154 = cljs.core.deref.call(null,cs);
var inst_27155__$1 = cljs.core.keys.call(null,inst_27154);
var inst_27156 = cljs.core.count.call(null,inst_27155__$1);
var inst_27157 = cljs.core.reset_BANG_.call(null,dctr,inst_27156);
var inst_27162 = cljs.core.seq.call(null,inst_27155__$1);
var inst_27163 = inst_27162;
var inst_27164 = null;
var inst_27165 = (0);
var inst_27166 = (0);
var state_27223__$1 = (function (){var statearr_27266 = state_27223;
(statearr_27266[(9)] = inst_27164);

(statearr_27266[(29)] = inst_27155__$1);

(statearr_27266[(20)] = inst_27163);

(statearr_27266[(11)] = inst_27166);

(statearr_27266[(21)] = inst_27165);

(statearr_27266[(30)] = inst_27157);

return statearr_27266;
})();
var statearr_27267_27333 = state_27223__$1;
(statearr_27267_27333[(2)] = null);

(statearr_27267_27333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (28))){
var inst_27182 = (state_27223[(25)]);
var inst_27163 = (state_27223[(20)]);
var inst_27182__$1 = cljs.core.seq.call(null,inst_27163);
var state_27223__$1 = (function (){var statearr_27268 = state_27223;
(statearr_27268[(25)] = inst_27182__$1);

return statearr_27268;
})();
if(inst_27182__$1){
var statearr_27269_27334 = state_27223__$1;
(statearr_27269_27334[(1)] = (33));

} else {
var statearr_27270_27335 = state_27223__$1;
(statearr_27270_27335[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (25))){
var inst_27166 = (state_27223[(11)]);
var inst_27165 = (state_27223[(21)]);
var inst_27168 = (inst_27166 < inst_27165);
var inst_27169 = inst_27168;
var state_27223__$1 = state_27223;
if(cljs.core.truth_(inst_27169)){
var statearr_27271_27336 = state_27223__$1;
(statearr_27271_27336[(1)] = (27));

} else {
var statearr_27272_27337 = state_27223__$1;
(statearr_27272_27337[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (34))){
var state_27223__$1 = state_27223;
var statearr_27273_27338 = state_27223__$1;
(statearr_27273_27338[(2)] = null);

(statearr_27273_27338[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (17))){
var state_27223__$1 = state_27223;
var statearr_27274_27339 = state_27223__$1;
(statearr_27274_27339[(2)] = null);

(statearr_27274_27339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (3))){
var inst_27221 = (state_27223[(2)]);
var state_27223__$1 = state_27223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27223__$1,inst_27221);
} else {
if((state_val_27224 === (12))){
var inst_27150 = (state_27223[(2)]);
var state_27223__$1 = state_27223;
var statearr_27275_27340 = state_27223__$1;
(statearr_27275_27340[(2)] = inst_27150);

(statearr_27275_27340[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (2))){
var state_27223__$1 = state_27223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27223__$1,(4),ch);
} else {
if((state_val_27224 === (23))){
var state_27223__$1 = state_27223;
var statearr_27276_27341 = state_27223__$1;
(statearr_27276_27341[(2)] = null);

(statearr_27276_27341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (35))){
var inst_27205 = (state_27223[(2)]);
var state_27223__$1 = state_27223;
var statearr_27277_27342 = state_27223__$1;
(statearr_27277_27342[(2)] = inst_27205);

(statearr_27277_27342[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (19))){
var inst_27122 = (state_27223[(7)]);
var inst_27126 = cljs.core.chunk_first.call(null,inst_27122);
var inst_27127 = cljs.core.chunk_rest.call(null,inst_27122);
var inst_27128 = cljs.core.count.call(null,inst_27126);
var inst_27100 = inst_27127;
var inst_27101 = inst_27126;
var inst_27102 = inst_27128;
var inst_27103 = (0);
var state_27223__$1 = (function (){var statearr_27278 = state_27223;
(statearr_27278[(13)] = inst_27102);

(statearr_27278[(14)] = inst_27103);

(statearr_27278[(15)] = inst_27100);

(statearr_27278[(17)] = inst_27101);

return statearr_27278;
})();
var statearr_27279_27343 = state_27223__$1;
(statearr_27279_27343[(2)] = null);

(statearr_27279_27343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (11))){
var inst_27100 = (state_27223[(15)]);
var inst_27122 = (state_27223[(7)]);
var inst_27122__$1 = cljs.core.seq.call(null,inst_27100);
var state_27223__$1 = (function (){var statearr_27280 = state_27223;
(statearr_27280[(7)] = inst_27122__$1);

return statearr_27280;
})();
if(inst_27122__$1){
var statearr_27281_27344 = state_27223__$1;
(statearr_27281_27344[(1)] = (16));

} else {
var statearr_27282_27345 = state_27223__$1;
(statearr_27282_27345[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (9))){
var inst_27152 = (state_27223[(2)]);
var state_27223__$1 = state_27223;
var statearr_27283_27346 = state_27223__$1;
(statearr_27283_27346[(2)] = inst_27152);

(statearr_27283_27346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (5))){
var inst_27098 = cljs.core.deref.call(null,cs);
var inst_27099 = cljs.core.seq.call(null,inst_27098);
var inst_27100 = inst_27099;
var inst_27101 = null;
var inst_27102 = (0);
var inst_27103 = (0);
var state_27223__$1 = (function (){var statearr_27284 = state_27223;
(statearr_27284[(13)] = inst_27102);

(statearr_27284[(14)] = inst_27103);

(statearr_27284[(15)] = inst_27100);

(statearr_27284[(17)] = inst_27101);

return statearr_27284;
})();
var statearr_27285_27347 = state_27223__$1;
(statearr_27285_27347[(2)] = null);

(statearr_27285_27347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (14))){
var state_27223__$1 = state_27223;
var statearr_27286_27348 = state_27223__$1;
(statearr_27286_27348[(2)] = null);

(statearr_27286_27348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (45))){
var inst_27213 = (state_27223[(2)]);
var state_27223__$1 = state_27223;
var statearr_27287_27349 = state_27223__$1;
(statearr_27287_27349[(2)] = inst_27213);

(statearr_27287_27349[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (26))){
var inst_27155 = (state_27223[(29)]);
var inst_27209 = (state_27223[(2)]);
var inst_27210 = cljs.core.seq.call(null,inst_27155);
var state_27223__$1 = (function (){var statearr_27288 = state_27223;
(statearr_27288[(31)] = inst_27209);

return statearr_27288;
})();
if(inst_27210){
var statearr_27289_27350 = state_27223__$1;
(statearr_27289_27350[(1)] = (42));

} else {
var statearr_27290_27351 = state_27223__$1;
(statearr_27290_27351[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (16))){
var inst_27122 = (state_27223[(7)]);
var inst_27124 = cljs.core.chunked_seq_QMARK_.call(null,inst_27122);
var state_27223__$1 = state_27223;
if(inst_27124){
var statearr_27291_27352 = state_27223__$1;
(statearr_27291_27352[(1)] = (19));

} else {
var statearr_27292_27353 = state_27223__$1;
(statearr_27292_27353[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (38))){
var inst_27202 = (state_27223[(2)]);
var state_27223__$1 = state_27223;
var statearr_27293_27354 = state_27223__$1;
(statearr_27293_27354[(2)] = inst_27202);

(statearr_27293_27354[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (30))){
var state_27223__$1 = state_27223;
var statearr_27294_27355 = state_27223__$1;
(statearr_27294_27355[(2)] = null);

(statearr_27294_27355[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (10))){
var inst_27103 = (state_27223[(14)]);
var inst_27101 = (state_27223[(17)]);
var inst_27111 = cljs.core._nth.call(null,inst_27101,inst_27103);
var inst_27112 = cljs.core.nth.call(null,inst_27111,(0),null);
var inst_27113 = cljs.core.nth.call(null,inst_27111,(1),null);
var state_27223__$1 = (function (){var statearr_27295 = state_27223;
(statearr_27295[(26)] = inst_27112);

return statearr_27295;
})();
if(cljs.core.truth_(inst_27113)){
var statearr_27296_27356 = state_27223__$1;
(statearr_27296_27356[(1)] = (13));

} else {
var statearr_27297_27357 = state_27223__$1;
(statearr_27297_27357[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (18))){
var inst_27148 = (state_27223[(2)]);
var state_27223__$1 = state_27223;
var statearr_27298_27358 = state_27223__$1;
(statearr_27298_27358[(2)] = inst_27148);

(statearr_27298_27358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (42))){
var state_27223__$1 = state_27223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27223__$1,(45),dchan);
} else {
if((state_val_27224 === (37))){
var inst_27182 = (state_27223[(25)]);
var inst_27191 = (state_27223[(23)]);
var inst_27091 = (state_27223[(12)]);
var inst_27191__$1 = cljs.core.first.call(null,inst_27182);
var inst_27192 = cljs.core.async.put_BANG_.call(null,inst_27191__$1,inst_27091,done);
var state_27223__$1 = (function (){var statearr_27299 = state_27223;
(statearr_27299[(23)] = inst_27191__$1);

return statearr_27299;
})();
if(cljs.core.truth_(inst_27192)){
var statearr_27300_27359 = state_27223__$1;
(statearr_27300_27359[(1)] = (39));

} else {
var statearr_27301_27360 = state_27223__$1;
(statearr_27301_27360[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (8))){
var inst_27102 = (state_27223[(13)]);
var inst_27103 = (state_27223[(14)]);
var inst_27105 = (inst_27103 < inst_27102);
var inst_27106 = inst_27105;
var state_27223__$1 = state_27223;
if(cljs.core.truth_(inst_27106)){
var statearr_27302_27361 = state_27223__$1;
(statearr_27302_27361[(1)] = (10));

} else {
var statearr_27303_27362 = state_27223__$1;
(statearr_27303_27362[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26490__auto___27308,cs,m,dchan,dctr,done))
;
return ((function (switch__26395__auto__,c__26490__auto___27308,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26396__auto__ = null;
var cljs$core$async$mult_$_state_machine__26396__auto____0 = (function (){
var statearr_27304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27304[(0)] = cljs$core$async$mult_$_state_machine__26396__auto__);

(statearr_27304[(1)] = (1));

return statearr_27304;
});
var cljs$core$async$mult_$_state_machine__26396__auto____1 = (function (state_27223){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_27223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e27305){if((e27305 instanceof Object)){
var ex__26399__auto__ = e27305;
var statearr_27306_27363 = state_27223;
(statearr_27306_27363[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27364 = state_27223;
state_27223 = G__27364;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26396__auto__ = function(state_27223){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26396__auto____1.call(this,state_27223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26396__auto____0;
cljs$core$async$mult_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26396__auto____1;
return cljs$core$async$mult_$_state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___27308,cs,m,dchan,dctr,done))
})();
var state__26492__auto__ = (function (){var statearr_27307 = f__26491__auto__.call(null);
(statearr_27307[(6)] = c__26490__auto___27308);

return statearr_27307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___27308,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27366 = arguments.length;
switch (G__27366) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27378 = arguments.length;
var i__4731__auto___27379 = (0);
while(true){
if((i__4731__auto___27379 < len__4730__auto___27378)){
args__4736__auto__.push((arguments[i__4731__auto___27379]));

var G__27380 = (i__4731__auto___27379 + (1));
i__4731__auto___27379 = G__27380;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27372){
var map__27373 = p__27372;
var map__27373__$1 = (((((!((map__27373 == null))))?(((((map__27373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27373):map__27373);
var opts = map__27373__$1;
var statearr_27375_27381 = state;
(statearr_27375_27381[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__27373,map__27373__$1,opts){
return (function (val){
var statearr_27376_27382 = state;
(statearr_27376_27382[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27373,map__27373__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_27377_27383 = state;
(statearr_27377_27383[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27368){
var G__27369 = cljs.core.first.call(null,seq27368);
var seq27368__$1 = cljs.core.next.call(null,seq27368);
var G__27370 = cljs.core.first.call(null,seq27368__$1);
var seq27368__$2 = cljs.core.next.call(null,seq27368__$1);
var G__27371 = cljs.core.first.call(null,seq27368__$2);
var seq27368__$3 = cljs.core.next.call(null,seq27368__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27369,G__27370,G__27371,seq27368__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27384 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27385){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27385 = meta27385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27386,meta27385__$1){
var self__ = this;
var _27386__$1 = this;
return (new cljs.core.async.t_cljs$core$async27384(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27385__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27386){
var self__ = this;
var _27386__$1 = this;
return self__.meta27385;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27384.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27385","meta27385",66877668,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27384";

cljs.core.async.t_cljs$core$async27384.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27384");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27384.
 */
cljs.core.async.__GT_t_cljs$core$async27384 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27384(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27385){
return (new cljs.core.async.t_cljs$core$async27384(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27385));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27384(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26490__auto___27548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___27548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___27548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27488){
var state_val_27489 = (state_27488[(1)]);
if((state_val_27489 === (7))){
var inst_27403 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27490_27549 = state_27488__$1;
(statearr_27490_27549[(2)] = inst_27403);

(statearr_27490_27549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (20))){
var inst_27415 = (state_27488[(7)]);
var state_27488__$1 = state_27488;
var statearr_27491_27550 = state_27488__$1;
(statearr_27491_27550[(2)] = inst_27415);

(statearr_27491_27550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (27))){
var state_27488__$1 = state_27488;
var statearr_27492_27551 = state_27488__$1;
(statearr_27492_27551[(2)] = null);

(statearr_27492_27551[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (1))){
var inst_27390 = (state_27488[(8)]);
var inst_27390__$1 = calc_state.call(null);
var inst_27392 = (inst_27390__$1 == null);
var inst_27393 = cljs.core.not.call(null,inst_27392);
var state_27488__$1 = (function (){var statearr_27493 = state_27488;
(statearr_27493[(8)] = inst_27390__$1);

return statearr_27493;
})();
if(inst_27393){
var statearr_27494_27552 = state_27488__$1;
(statearr_27494_27552[(1)] = (2));

} else {
var statearr_27495_27553 = state_27488__$1;
(statearr_27495_27553[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (24))){
var inst_27462 = (state_27488[(9)]);
var inst_27448 = (state_27488[(10)]);
var inst_27439 = (state_27488[(11)]);
var inst_27462__$1 = inst_27439.call(null,inst_27448);
var state_27488__$1 = (function (){var statearr_27496 = state_27488;
(statearr_27496[(9)] = inst_27462__$1);

return statearr_27496;
})();
if(cljs.core.truth_(inst_27462__$1)){
var statearr_27497_27554 = state_27488__$1;
(statearr_27497_27554[(1)] = (29));

} else {
var statearr_27498_27555 = state_27488__$1;
(statearr_27498_27555[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (4))){
var inst_27406 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
if(cljs.core.truth_(inst_27406)){
var statearr_27499_27556 = state_27488__$1;
(statearr_27499_27556[(1)] = (8));

} else {
var statearr_27500_27557 = state_27488__$1;
(statearr_27500_27557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (15))){
var inst_27433 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
if(cljs.core.truth_(inst_27433)){
var statearr_27501_27558 = state_27488__$1;
(statearr_27501_27558[(1)] = (19));

} else {
var statearr_27502_27559 = state_27488__$1;
(statearr_27502_27559[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (21))){
var inst_27438 = (state_27488[(12)]);
var inst_27438__$1 = (state_27488[(2)]);
var inst_27439 = cljs.core.get.call(null,inst_27438__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27440 = cljs.core.get.call(null,inst_27438__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27441 = cljs.core.get.call(null,inst_27438__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27488__$1 = (function (){var statearr_27503 = state_27488;
(statearr_27503[(13)] = inst_27440);

(statearr_27503[(12)] = inst_27438__$1);

(statearr_27503[(11)] = inst_27439);

return statearr_27503;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27488__$1,(22),inst_27441);
} else {
if((state_val_27489 === (31))){
var inst_27470 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
if(cljs.core.truth_(inst_27470)){
var statearr_27504_27560 = state_27488__$1;
(statearr_27504_27560[(1)] = (32));

} else {
var statearr_27505_27561 = state_27488__$1;
(statearr_27505_27561[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (32))){
var inst_27447 = (state_27488[(14)]);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27488__$1,(35),out,inst_27447);
} else {
if((state_val_27489 === (33))){
var inst_27438 = (state_27488[(12)]);
var inst_27415 = inst_27438;
var state_27488__$1 = (function (){var statearr_27506 = state_27488;
(statearr_27506[(7)] = inst_27415);

return statearr_27506;
})();
var statearr_27507_27562 = state_27488__$1;
(statearr_27507_27562[(2)] = null);

(statearr_27507_27562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (13))){
var inst_27415 = (state_27488[(7)]);
var inst_27422 = inst_27415.cljs$lang$protocol_mask$partition0$;
var inst_27423 = (inst_27422 & (64));
var inst_27424 = inst_27415.cljs$core$ISeq$;
var inst_27425 = (cljs.core.PROTOCOL_SENTINEL === inst_27424);
var inst_27426 = ((inst_27423) || (inst_27425));
var state_27488__$1 = state_27488;
if(cljs.core.truth_(inst_27426)){
var statearr_27508_27563 = state_27488__$1;
(statearr_27508_27563[(1)] = (16));

} else {
var statearr_27509_27564 = state_27488__$1;
(statearr_27509_27564[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (22))){
var inst_27448 = (state_27488[(10)]);
var inst_27447 = (state_27488[(14)]);
var inst_27446 = (state_27488[(2)]);
var inst_27447__$1 = cljs.core.nth.call(null,inst_27446,(0),null);
var inst_27448__$1 = cljs.core.nth.call(null,inst_27446,(1),null);
var inst_27449 = (inst_27447__$1 == null);
var inst_27450 = cljs.core._EQ_.call(null,inst_27448__$1,change);
var inst_27451 = ((inst_27449) || (inst_27450));
var state_27488__$1 = (function (){var statearr_27510 = state_27488;
(statearr_27510[(10)] = inst_27448__$1);

(statearr_27510[(14)] = inst_27447__$1);

return statearr_27510;
})();
if(cljs.core.truth_(inst_27451)){
var statearr_27511_27565 = state_27488__$1;
(statearr_27511_27565[(1)] = (23));

} else {
var statearr_27512_27566 = state_27488__$1;
(statearr_27512_27566[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (36))){
var inst_27438 = (state_27488[(12)]);
var inst_27415 = inst_27438;
var state_27488__$1 = (function (){var statearr_27513 = state_27488;
(statearr_27513[(7)] = inst_27415);

return statearr_27513;
})();
var statearr_27514_27567 = state_27488__$1;
(statearr_27514_27567[(2)] = null);

(statearr_27514_27567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (29))){
var inst_27462 = (state_27488[(9)]);
var state_27488__$1 = state_27488;
var statearr_27515_27568 = state_27488__$1;
(statearr_27515_27568[(2)] = inst_27462);

(statearr_27515_27568[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (6))){
var state_27488__$1 = state_27488;
var statearr_27516_27569 = state_27488__$1;
(statearr_27516_27569[(2)] = false);

(statearr_27516_27569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (28))){
var inst_27458 = (state_27488[(2)]);
var inst_27459 = calc_state.call(null);
var inst_27415 = inst_27459;
var state_27488__$1 = (function (){var statearr_27517 = state_27488;
(statearr_27517[(7)] = inst_27415);

(statearr_27517[(15)] = inst_27458);

return statearr_27517;
})();
var statearr_27518_27570 = state_27488__$1;
(statearr_27518_27570[(2)] = null);

(statearr_27518_27570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (25))){
var inst_27484 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27519_27571 = state_27488__$1;
(statearr_27519_27571[(2)] = inst_27484);

(statearr_27519_27571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (34))){
var inst_27482 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27520_27572 = state_27488__$1;
(statearr_27520_27572[(2)] = inst_27482);

(statearr_27520_27572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (17))){
var state_27488__$1 = state_27488;
var statearr_27521_27573 = state_27488__$1;
(statearr_27521_27573[(2)] = false);

(statearr_27521_27573[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (3))){
var state_27488__$1 = state_27488;
var statearr_27522_27574 = state_27488__$1;
(statearr_27522_27574[(2)] = false);

(statearr_27522_27574[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (12))){
var inst_27486 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27488__$1,inst_27486);
} else {
if((state_val_27489 === (2))){
var inst_27390 = (state_27488[(8)]);
var inst_27395 = inst_27390.cljs$lang$protocol_mask$partition0$;
var inst_27396 = (inst_27395 & (64));
var inst_27397 = inst_27390.cljs$core$ISeq$;
var inst_27398 = (cljs.core.PROTOCOL_SENTINEL === inst_27397);
var inst_27399 = ((inst_27396) || (inst_27398));
var state_27488__$1 = state_27488;
if(cljs.core.truth_(inst_27399)){
var statearr_27523_27575 = state_27488__$1;
(statearr_27523_27575[(1)] = (5));

} else {
var statearr_27524_27576 = state_27488__$1;
(statearr_27524_27576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (23))){
var inst_27447 = (state_27488[(14)]);
var inst_27453 = (inst_27447 == null);
var state_27488__$1 = state_27488;
if(cljs.core.truth_(inst_27453)){
var statearr_27525_27577 = state_27488__$1;
(statearr_27525_27577[(1)] = (26));

} else {
var statearr_27526_27578 = state_27488__$1;
(statearr_27526_27578[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (35))){
var inst_27473 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
if(cljs.core.truth_(inst_27473)){
var statearr_27527_27579 = state_27488__$1;
(statearr_27527_27579[(1)] = (36));

} else {
var statearr_27528_27580 = state_27488__$1;
(statearr_27528_27580[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (19))){
var inst_27415 = (state_27488[(7)]);
var inst_27435 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27415);
var state_27488__$1 = state_27488;
var statearr_27529_27581 = state_27488__$1;
(statearr_27529_27581[(2)] = inst_27435);

(statearr_27529_27581[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (11))){
var inst_27415 = (state_27488[(7)]);
var inst_27419 = (inst_27415 == null);
var inst_27420 = cljs.core.not.call(null,inst_27419);
var state_27488__$1 = state_27488;
if(inst_27420){
var statearr_27530_27582 = state_27488__$1;
(statearr_27530_27582[(1)] = (13));

} else {
var statearr_27531_27583 = state_27488__$1;
(statearr_27531_27583[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (9))){
var inst_27390 = (state_27488[(8)]);
var state_27488__$1 = state_27488;
var statearr_27532_27584 = state_27488__$1;
(statearr_27532_27584[(2)] = inst_27390);

(statearr_27532_27584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (5))){
var state_27488__$1 = state_27488;
var statearr_27533_27585 = state_27488__$1;
(statearr_27533_27585[(2)] = true);

(statearr_27533_27585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (14))){
var state_27488__$1 = state_27488;
var statearr_27534_27586 = state_27488__$1;
(statearr_27534_27586[(2)] = false);

(statearr_27534_27586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (26))){
var inst_27448 = (state_27488[(10)]);
var inst_27455 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27448);
var state_27488__$1 = state_27488;
var statearr_27535_27587 = state_27488__$1;
(statearr_27535_27587[(2)] = inst_27455);

(statearr_27535_27587[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (16))){
var state_27488__$1 = state_27488;
var statearr_27536_27588 = state_27488__$1;
(statearr_27536_27588[(2)] = true);

(statearr_27536_27588[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (38))){
var inst_27478 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27537_27589 = state_27488__$1;
(statearr_27537_27589[(2)] = inst_27478);

(statearr_27537_27589[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (30))){
var inst_27440 = (state_27488[(13)]);
var inst_27448 = (state_27488[(10)]);
var inst_27439 = (state_27488[(11)]);
var inst_27465 = cljs.core.empty_QMARK_.call(null,inst_27439);
var inst_27466 = inst_27440.call(null,inst_27448);
var inst_27467 = cljs.core.not.call(null,inst_27466);
var inst_27468 = ((inst_27465) && (inst_27467));
var state_27488__$1 = state_27488;
var statearr_27538_27590 = state_27488__$1;
(statearr_27538_27590[(2)] = inst_27468);

(statearr_27538_27590[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (10))){
var inst_27390 = (state_27488[(8)]);
var inst_27411 = (state_27488[(2)]);
var inst_27412 = cljs.core.get.call(null,inst_27411,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27413 = cljs.core.get.call(null,inst_27411,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27414 = cljs.core.get.call(null,inst_27411,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27415 = inst_27390;
var state_27488__$1 = (function (){var statearr_27539 = state_27488;
(statearr_27539[(7)] = inst_27415);

(statearr_27539[(16)] = inst_27414);

(statearr_27539[(17)] = inst_27413);

(statearr_27539[(18)] = inst_27412);

return statearr_27539;
})();
var statearr_27540_27591 = state_27488__$1;
(statearr_27540_27591[(2)] = null);

(statearr_27540_27591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (18))){
var inst_27430 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27541_27592 = state_27488__$1;
(statearr_27541_27592[(2)] = inst_27430);

(statearr_27541_27592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (37))){
var state_27488__$1 = state_27488;
var statearr_27542_27593 = state_27488__$1;
(statearr_27542_27593[(2)] = null);

(statearr_27542_27593[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (8))){
var inst_27390 = (state_27488[(8)]);
var inst_27408 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27390);
var state_27488__$1 = state_27488;
var statearr_27543_27594 = state_27488__$1;
(statearr_27543_27594[(2)] = inst_27408);

(statearr_27543_27594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26490__auto___27548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26395__auto__,c__26490__auto___27548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26396__auto__ = null;
var cljs$core$async$mix_$_state_machine__26396__auto____0 = (function (){
var statearr_27544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27544[(0)] = cljs$core$async$mix_$_state_machine__26396__auto__);

(statearr_27544[(1)] = (1));

return statearr_27544;
});
var cljs$core$async$mix_$_state_machine__26396__auto____1 = (function (state_27488){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_27488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e27545){if((e27545 instanceof Object)){
var ex__26399__auto__ = e27545;
var statearr_27546_27595 = state_27488;
(statearr_27546_27595[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27596 = state_27488;
state_27488 = G__27596;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26396__auto__ = function(state_27488){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26396__auto____1.call(this,state_27488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26396__auto____0;
cljs$core$async$mix_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26396__auto____1;
return cljs$core$async$mix_$_state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___27548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26492__auto__ = (function (){var statearr_27547 = f__26491__auto__.call(null);
(statearr_27547[(6)] = c__26490__auto___27548);

return statearr_27547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___27548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27598 = arguments.length;
switch (G__27598) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27602 = arguments.length;
switch (G__27602) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__27600_SHARP_){
if(cljs.core.truth_(p1__27600_SHARP_.call(null,topic))){
return p1__27600_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27600_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27603 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27604){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27604 = meta27604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27605,meta27604__$1){
var self__ = this;
var _27605__$1 = this;
return (new cljs.core.async.t_cljs$core$async27603(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27604__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27603.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27605){
var self__ = this;
var _27605__$1 = this;
return self__.meta27604;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27603.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27603.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27603.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27603.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27603.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27603.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27603.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27603.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27604","meta27604",1307979326,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27603";

cljs.core.async.t_cljs$core$async27603.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27603");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27603.
 */
cljs.core.async.__GT_t_cljs$core$async27603 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27603(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27604){
return (new cljs.core.async.t_cljs$core$async27603(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27604));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27603(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26490__auto___27723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___27723,mults,ensure_mult,p){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___27723,mults,ensure_mult,p){
return (function (state_27677){
var state_val_27678 = (state_27677[(1)]);
if((state_val_27678 === (7))){
var inst_27673 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
var statearr_27679_27724 = state_27677__$1;
(statearr_27679_27724[(2)] = inst_27673);

(statearr_27679_27724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (20))){
var state_27677__$1 = state_27677;
var statearr_27680_27725 = state_27677__$1;
(statearr_27680_27725[(2)] = null);

(statearr_27680_27725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (1))){
var state_27677__$1 = state_27677;
var statearr_27681_27726 = state_27677__$1;
(statearr_27681_27726[(2)] = null);

(statearr_27681_27726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (24))){
var inst_27656 = (state_27677[(7)]);
var inst_27665 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27656);
var state_27677__$1 = state_27677;
var statearr_27682_27727 = state_27677__$1;
(statearr_27682_27727[(2)] = inst_27665);

(statearr_27682_27727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (4))){
var inst_27608 = (state_27677[(8)]);
var inst_27608__$1 = (state_27677[(2)]);
var inst_27609 = (inst_27608__$1 == null);
var state_27677__$1 = (function (){var statearr_27683 = state_27677;
(statearr_27683[(8)] = inst_27608__$1);

return statearr_27683;
})();
if(cljs.core.truth_(inst_27609)){
var statearr_27684_27728 = state_27677__$1;
(statearr_27684_27728[(1)] = (5));

} else {
var statearr_27685_27729 = state_27677__$1;
(statearr_27685_27729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (15))){
var inst_27650 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
var statearr_27686_27730 = state_27677__$1;
(statearr_27686_27730[(2)] = inst_27650);

(statearr_27686_27730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (21))){
var inst_27670 = (state_27677[(2)]);
var state_27677__$1 = (function (){var statearr_27687 = state_27677;
(statearr_27687[(9)] = inst_27670);

return statearr_27687;
})();
var statearr_27688_27731 = state_27677__$1;
(statearr_27688_27731[(2)] = null);

(statearr_27688_27731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (13))){
var inst_27632 = (state_27677[(10)]);
var inst_27634 = cljs.core.chunked_seq_QMARK_.call(null,inst_27632);
var state_27677__$1 = state_27677;
if(inst_27634){
var statearr_27689_27732 = state_27677__$1;
(statearr_27689_27732[(1)] = (16));

} else {
var statearr_27690_27733 = state_27677__$1;
(statearr_27690_27733[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (22))){
var inst_27662 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
if(cljs.core.truth_(inst_27662)){
var statearr_27691_27734 = state_27677__$1;
(statearr_27691_27734[(1)] = (23));

} else {
var statearr_27692_27735 = state_27677__$1;
(statearr_27692_27735[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (6))){
var inst_27608 = (state_27677[(8)]);
var inst_27658 = (state_27677[(11)]);
var inst_27656 = (state_27677[(7)]);
var inst_27656__$1 = topic_fn.call(null,inst_27608);
var inst_27657 = cljs.core.deref.call(null,mults);
var inst_27658__$1 = cljs.core.get.call(null,inst_27657,inst_27656__$1);
var state_27677__$1 = (function (){var statearr_27693 = state_27677;
(statearr_27693[(11)] = inst_27658__$1);

(statearr_27693[(7)] = inst_27656__$1);

return statearr_27693;
})();
if(cljs.core.truth_(inst_27658__$1)){
var statearr_27694_27736 = state_27677__$1;
(statearr_27694_27736[(1)] = (19));

} else {
var statearr_27695_27737 = state_27677__$1;
(statearr_27695_27737[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (25))){
var inst_27667 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
var statearr_27696_27738 = state_27677__$1;
(statearr_27696_27738[(2)] = inst_27667);

(statearr_27696_27738[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (17))){
var inst_27632 = (state_27677[(10)]);
var inst_27641 = cljs.core.first.call(null,inst_27632);
var inst_27642 = cljs.core.async.muxch_STAR_.call(null,inst_27641);
var inst_27643 = cljs.core.async.close_BANG_.call(null,inst_27642);
var inst_27644 = cljs.core.next.call(null,inst_27632);
var inst_27618 = inst_27644;
var inst_27619 = null;
var inst_27620 = (0);
var inst_27621 = (0);
var state_27677__$1 = (function (){var statearr_27697 = state_27677;
(statearr_27697[(12)] = inst_27619);

(statearr_27697[(13)] = inst_27620);

(statearr_27697[(14)] = inst_27621);

(statearr_27697[(15)] = inst_27618);

(statearr_27697[(16)] = inst_27643);

return statearr_27697;
})();
var statearr_27698_27739 = state_27677__$1;
(statearr_27698_27739[(2)] = null);

(statearr_27698_27739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (3))){
var inst_27675 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27677__$1,inst_27675);
} else {
if((state_val_27678 === (12))){
var inst_27652 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
var statearr_27699_27740 = state_27677__$1;
(statearr_27699_27740[(2)] = inst_27652);

(statearr_27699_27740[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (2))){
var state_27677__$1 = state_27677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27677__$1,(4),ch);
} else {
if((state_val_27678 === (23))){
var state_27677__$1 = state_27677;
var statearr_27700_27741 = state_27677__$1;
(statearr_27700_27741[(2)] = null);

(statearr_27700_27741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (19))){
var inst_27608 = (state_27677[(8)]);
var inst_27658 = (state_27677[(11)]);
var inst_27660 = cljs.core.async.muxch_STAR_.call(null,inst_27658);
var state_27677__$1 = state_27677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27677__$1,(22),inst_27660,inst_27608);
} else {
if((state_val_27678 === (11))){
var inst_27632 = (state_27677[(10)]);
var inst_27618 = (state_27677[(15)]);
var inst_27632__$1 = cljs.core.seq.call(null,inst_27618);
var state_27677__$1 = (function (){var statearr_27701 = state_27677;
(statearr_27701[(10)] = inst_27632__$1);

return statearr_27701;
})();
if(inst_27632__$1){
var statearr_27702_27742 = state_27677__$1;
(statearr_27702_27742[(1)] = (13));

} else {
var statearr_27703_27743 = state_27677__$1;
(statearr_27703_27743[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (9))){
var inst_27654 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
var statearr_27704_27744 = state_27677__$1;
(statearr_27704_27744[(2)] = inst_27654);

(statearr_27704_27744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (5))){
var inst_27615 = cljs.core.deref.call(null,mults);
var inst_27616 = cljs.core.vals.call(null,inst_27615);
var inst_27617 = cljs.core.seq.call(null,inst_27616);
var inst_27618 = inst_27617;
var inst_27619 = null;
var inst_27620 = (0);
var inst_27621 = (0);
var state_27677__$1 = (function (){var statearr_27705 = state_27677;
(statearr_27705[(12)] = inst_27619);

(statearr_27705[(13)] = inst_27620);

(statearr_27705[(14)] = inst_27621);

(statearr_27705[(15)] = inst_27618);

return statearr_27705;
})();
var statearr_27706_27745 = state_27677__$1;
(statearr_27706_27745[(2)] = null);

(statearr_27706_27745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (14))){
var state_27677__$1 = state_27677;
var statearr_27710_27746 = state_27677__$1;
(statearr_27710_27746[(2)] = null);

(statearr_27710_27746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (16))){
var inst_27632 = (state_27677[(10)]);
var inst_27636 = cljs.core.chunk_first.call(null,inst_27632);
var inst_27637 = cljs.core.chunk_rest.call(null,inst_27632);
var inst_27638 = cljs.core.count.call(null,inst_27636);
var inst_27618 = inst_27637;
var inst_27619 = inst_27636;
var inst_27620 = inst_27638;
var inst_27621 = (0);
var state_27677__$1 = (function (){var statearr_27711 = state_27677;
(statearr_27711[(12)] = inst_27619);

(statearr_27711[(13)] = inst_27620);

(statearr_27711[(14)] = inst_27621);

(statearr_27711[(15)] = inst_27618);

return statearr_27711;
})();
var statearr_27712_27747 = state_27677__$1;
(statearr_27712_27747[(2)] = null);

(statearr_27712_27747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (10))){
var inst_27619 = (state_27677[(12)]);
var inst_27620 = (state_27677[(13)]);
var inst_27621 = (state_27677[(14)]);
var inst_27618 = (state_27677[(15)]);
var inst_27626 = cljs.core._nth.call(null,inst_27619,inst_27621);
var inst_27627 = cljs.core.async.muxch_STAR_.call(null,inst_27626);
var inst_27628 = cljs.core.async.close_BANG_.call(null,inst_27627);
var inst_27629 = (inst_27621 + (1));
var tmp27707 = inst_27619;
var tmp27708 = inst_27620;
var tmp27709 = inst_27618;
var inst_27618__$1 = tmp27709;
var inst_27619__$1 = tmp27707;
var inst_27620__$1 = tmp27708;
var inst_27621__$1 = inst_27629;
var state_27677__$1 = (function (){var statearr_27713 = state_27677;
(statearr_27713[(17)] = inst_27628);

(statearr_27713[(12)] = inst_27619__$1);

(statearr_27713[(13)] = inst_27620__$1);

(statearr_27713[(14)] = inst_27621__$1);

(statearr_27713[(15)] = inst_27618__$1);

return statearr_27713;
})();
var statearr_27714_27748 = state_27677__$1;
(statearr_27714_27748[(2)] = null);

(statearr_27714_27748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (18))){
var inst_27647 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
var statearr_27715_27749 = state_27677__$1;
(statearr_27715_27749[(2)] = inst_27647);

(statearr_27715_27749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (8))){
var inst_27620 = (state_27677[(13)]);
var inst_27621 = (state_27677[(14)]);
var inst_27623 = (inst_27621 < inst_27620);
var inst_27624 = inst_27623;
var state_27677__$1 = state_27677;
if(cljs.core.truth_(inst_27624)){
var statearr_27716_27750 = state_27677__$1;
(statearr_27716_27750[(1)] = (10));

} else {
var statearr_27717_27751 = state_27677__$1;
(statearr_27717_27751[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26490__auto___27723,mults,ensure_mult,p))
;
return ((function (switch__26395__auto__,c__26490__auto___27723,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26396__auto__ = null;
var cljs$core$async$state_machine__26396__auto____0 = (function (){
var statearr_27718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27718[(0)] = cljs$core$async$state_machine__26396__auto__);

(statearr_27718[(1)] = (1));

return statearr_27718;
});
var cljs$core$async$state_machine__26396__auto____1 = (function (state_27677){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_27677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e27719){if((e27719 instanceof Object)){
var ex__26399__auto__ = e27719;
var statearr_27720_27752 = state_27677;
(statearr_27720_27752[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27753 = state_27677;
state_27677 = G__27753;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$state_machine__26396__auto__ = function(state_27677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26396__auto____1.call(this,state_27677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26396__auto____0;
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26396__auto____1;
return cljs$core$async$state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___27723,mults,ensure_mult,p))
})();
var state__26492__auto__ = (function (){var statearr_27721 = f__26491__auto__.call(null);
(statearr_27721[(6)] = c__26490__auto___27723);

return statearr_27721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___27723,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27755 = arguments.length;
switch (G__27755) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27758 = arguments.length;
switch (G__27758) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27761 = arguments.length;
switch (G__27761) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26490__auto___27828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___27828,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___27828,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27800){
var state_val_27801 = (state_27800[(1)]);
if((state_val_27801 === (7))){
var state_27800__$1 = state_27800;
var statearr_27802_27829 = state_27800__$1;
(statearr_27802_27829[(2)] = null);

(statearr_27802_27829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (1))){
var state_27800__$1 = state_27800;
var statearr_27803_27830 = state_27800__$1;
(statearr_27803_27830[(2)] = null);

(statearr_27803_27830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (4))){
var inst_27764 = (state_27800[(7)]);
var inst_27766 = (inst_27764 < cnt);
var state_27800__$1 = state_27800;
if(cljs.core.truth_(inst_27766)){
var statearr_27804_27831 = state_27800__$1;
(statearr_27804_27831[(1)] = (6));

} else {
var statearr_27805_27832 = state_27800__$1;
(statearr_27805_27832[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (15))){
var inst_27796 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27806_27833 = state_27800__$1;
(statearr_27806_27833[(2)] = inst_27796);

(statearr_27806_27833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (13))){
var inst_27789 = cljs.core.async.close_BANG_.call(null,out);
var state_27800__$1 = state_27800;
var statearr_27807_27834 = state_27800__$1;
(statearr_27807_27834[(2)] = inst_27789);

(statearr_27807_27834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (6))){
var state_27800__$1 = state_27800;
var statearr_27808_27835 = state_27800__$1;
(statearr_27808_27835[(2)] = null);

(statearr_27808_27835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (3))){
var inst_27798 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27800__$1,inst_27798);
} else {
if((state_val_27801 === (12))){
var inst_27786 = (state_27800[(8)]);
var inst_27786__$1 = (state_27800[(2)]);
var inst_27787 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27786__$1);
var state_27800__$1 = (function (){var statearr_27809 = state_27800;
(statearr_27809[(8)] = inst_27786__$1);

return statearr_27809;
})();
if(cljs.core.truth_(inst_27787)){
var statearr_27810_27836 = state_27800__$1;
(statearr_27810_27836[(1)] = (13));

} else {
var statearr_27811_27837 = state_27800__$1;
(statearr_27811_27837[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (2))){
var inst_27763 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27764 = (0);
var state_27800__$1 = (function (){var statearr_27812 = state_27800;
(statearr_27812[(7)] = inst_27764);

(statearr_27812[(9)] = inst_27763);

return statearr_27812;
})();
var statearr_27813_27838 = state_27800__$1;
(statearr_27813_27838[(2)] = null);

(statearr_27813_27838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (11))){
var inst_27764 = (state_27800[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27800,(10),Object,null,(9));
var inst_27773 = chs__$1.call(null,inst_27764);
var inst_27774 = done.call(null,inst_27764);
var inst_27775 = cljs.core.async.take_BANG_.call(null,inst_27773,inst_27774);
var state_27800__$1 = state_27800;
var statearr_27814_27839 = state_27800__$1;
(statearr_27814_27839[(2)] = inst_27775);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27800__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (9))){
var inst_27764 = (state_27800[(7)]);
var inst_27777 = (state_27800[(2)]);
var inst_27778 = (inst_27764 + (1));
var inst_27764__$1 = inst_27778;
var state_27800__$1 = (function (){var statearr_27815 = state_27800;
(statearr_27815[(7)] = inst_27764__$1);

(statearr_27815[(10)] = inst_27777);

return statearr_27815;
})();
var statearr_27816_27840 = state_27800__$1;
(statearr_27816_27840[(2)] = null);

(statearr_27816_27840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (5))){
var inst_27784 = (state_27800[(2)]);
var state_27800__$1 = (function (){var statearr_27817 = state_27800;
(statearr_27817[(11)] = inst_27784);

return statearr_27817;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27800__$1,(12),dchan);
} else {
if((state_val_27801 === (14))){
var inst_27786 = (state_27800[(8)]);
var inst_27791 = cljs.core.apply.call(null,f,inst_27786);
var state_27800__$1 = state_27800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27800__$1,(16),out,inst_27791);
} else {
if((state_val_27801 === (16))){
var inst_27793 = (state_27800[(2)]);
var state_27800__$1 = (function (){var statearr_27818 = state_27800;
(statearr_27818[(12)] = inst_27793);

return statearr_27818;
})();
var statearr_27819_27841 = state_27800__$1;
(statearr_27819_27841[(2)] = null);

(statearr_27819_27841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (10))){
var inst_27768 = (state_27800[(2)]);
var inst_27769 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27800__$1 = (function (){var statearr_27820 = state_27800;
(statearr_27820[(13)] = inst_27768);

return statearr_27820;
})();
var statearr_27821_27842 = state_27800__$1;
(statearr_27821_27842[(2)] = inst_27769);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27800__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (8))){
var inst_27782 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27822_27843 = state_27800__$1;
(statearr_27822_27843[(2)] = inst_27782);

(statearr_27822_27843[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26490__auto___27828,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26395__auto__,c__26490__auto___27828,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26396__auto__ = null;
var cljs$core$async$state_machine__26396__auto____0 = (function (){
var statearr_27823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27823[(0)] = cljs$core$async$state_machine__26396__auto__);

(statearr_27823[(1)] = (1));

return statearr_27823;
});
var cljs$core$async$state_machine__26396__auto____1 = (function (state_27800){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_27800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e27824){if((e27824 instanceof Object)){
var ex__26399__auto__ = e27824;
var statearr_27825_27844 = state_27800;
(statearr_27825_27844[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27845 = state_27800;
state_27800 = G__27845;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$state_machine__26396__auto__ = function(state_27800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26396__auto____1.call(this,state_27800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26396__auto____0;
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26396__auto____1;
return cljs$core$async$state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___27828,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26492__auto__ = (function (){var statearr_27826 = f__26491__auto__.call(null);
(statearr_27826[(6)] = c__26490__auto___27828);

return statearr_27826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___27828,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27848 = arguments.length;
switch (G__27848) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26490__auto___27902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___27902,out){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___27902,out){
return (function (state_27880){
var state_val_27881 = (state_27880[(1)]);
if((state_val_27881 === (7))){
var inst_27860 = (state_27880[(7)]);
var inst_27859 = (state_27880[(8)]);
var inst_27859__$1 = (state_27880[(2)]);
var inst_27860__$1 = cljs.core.nth.call(null,inst_27859__$1,(0),null);
var inst_27861 = cljs.core.nth.call(null,inst_27859__$1,(1),null);
var inst_27862 = (inst_27860__$1 == null);
var state_27880__$1 = (function (){var statearr_27882 = state_27880;
(statearr_27882[(7)] = inst_27860__$1);

(statearr_27882[(9)] = inst_27861);

(statearr_27882[(8)] = inst_27859__$1);

return statearr_27882;
})();
if(cljs.core.truth_(inst_27862)){
var statearr_27883_27903 = state_27880__$1;
(statearr_27883_27903[(1)] = (8));

} else {
var statearr_27884_27904 = state_27880__$1;
(statearr_27884_27904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (1))){
var inst_27849 = cljs.core.vec.call(null,chs);
var inst_27850 = inst_27849;
var state_27880__$1 = (function (){var statearr_27885 = state_27880;
(statearr_27885[(10)] = inst_27850);

return statearr_27885;
})();
var statearr_27886_27905 = state_27880__$1;
(statearr_27886_27905[(2)] = null);

(statearr_27886_27905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (4))){
var inst_27850 = (state_27880[(10)]);
var state_27880__$1 = state_27880;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27880__$1,(7),inst_27850);
} else {
if((state_val_27881 === (6))){
var inst_27876 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27887_27906 = state_27880__$1;
(statearr_27887_27906[(2)] = inst_27876);

(statearr_27887_27906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (3))){
var inst_27878 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27880__$1,inst_27878);
} else {
if((state_val_27881 === (2))){
var inst_27850 = (state_27880[(10)]);
var inst_27852 = cljs.core.count.call(null,inst_27850);
var inst_27853 = (inst_27852 > (0));
var state_27880__$1 = state_27880;
if(cljs.core.truth_(inst_27853)){
var statearr_27889_27907 = state_27880__$1;
(statearr_27889_27907[(1)] = (4));

} else {
var statearr_27890_27908 = state_27880__$1;
(statearr_27890_27908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (11))){
var inst_27850 = (state_27880[(10)]);
var inst_27869 = (state_27880[(2)]);
var tmp27888 = inst_27850;
var inst_27850__$1 = tmp27888;
var state_27880__$1 = (function (){var statearr_27891 = state_27880;
(statearr_27891[(10)] = inst_27850__$1);

(statearr_27891[(11)] = inst_27869);

return statearr_27891;
})();
var statearr_27892_27909 = state_27880__$1;
(statearr_27892_27909[(2)] = null);

(statearr_27892_27909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (9))){
var inst_27860 = (state_27880[(7)]);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27880__$1,(11),out,inst_27860);
} else {
if((state_val_27881 === (5))){
var inst_27874 = cljs.core.async.close_BANG_.call(null,out);
var state_27880__$1 = state_27880;
var statearr_27893_27910 = state_27880__$1;
(statearr_27893_27910[(2)] = inst_27874);

(statearr_27893_27910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (10))){
var inst_27872 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27894_27911 = state_27880__$1;
(statearr_27894_27911[(2)] = inst_27872);

(statearr_27894_27911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (8))){
var inst_27860 = (state_27880[(7)]);
var inst_27850 = (state_27880[(10)]);
var inst_27861 = (state_27880[(9)]);
var inst_27859 = (state_27880[(8)]);
var inst_27864 = (function (){var cs = inst_27850;
var vec__27855 = inst_27859;
var v = inst_27860;
var c = inst_27861;
return ((function (cs,vec__27855,v,c,inst_27860,inst_27850,inst_27861,inst_27859,state_val_27881,c__26490__auto___27902,out){
return (function (p1__27846_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27846_SHARP_);
});
;})(cs,vec__27855,v,c,inst_27860,inst_27850,inst_27861,inst_27859,state_val_27881,c__26490__auto___27902,out))
})();
var inst_27865 = cljs.core.filterv.call(null,inst_27864,inst_27850);
var inst_27850__$1 = inst_27865;
var state_27880__$1 = (function (){var statearr_27895 = state_27880;
(statearr_27895[(10)] = inst_27850__$1);

return statearr_27895;
})();
var statearr_27896_27912 = state_27880__$1;
(statearr_27896_27912[(2)] = null);

(statearr_27896_27912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26490__auto___27902,out))
;
return ((function (switch__26395__auto__,c__26490__auto___27902,out){
return (function() {
var cljs$core$async$state_machine__26396__auto__ = null;
var cljs$core$async$state_machine__26396__auto____0 = (function (){
var statearr_27897 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27897[(0)] = cljs$core$async$state_machine__26396__auto__);

(statearr_27897[(1)] = (1));

return statearr_27897;
});
var cljs$core$async$state_machine__26396__auto____1 = (function (state_27880){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_27880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e27898){if((e27898 instanceof Object)){
var ex__26399__auto__ = e27898;
var statearr_27899_27913 = state_27880;
(statearr_27899_27913[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27914 = state_27880;
state_27880 = G__27914;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$state_machine__26396__auto__ = function(state_27880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26396__auto____1.call(this,state_27880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26396__auto____0;
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26396__auto____1;
return cljs$core$async$state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___27902,out))
})();
var state__26492__auto__ = (function (){var statearr_27900 = f__26491__auto__.call(null);
(statearr_27900[(6)] = c__26490__auto___27902);

return statearr_27900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___27902,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27916 = arguments.length;
switch (G__27916) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26490__auto___27961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___27961,out){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___27961,out){
return (function (state_27940){
var state_val_27941 = (state_27940[(1)]);
if((state_val_27941 === (7))){
var inst_27922 = (state_27940[(7)]);
var inst_27922__$1 = (state_27940[(2)]);
var inst_27923 = (inst_27922__$1 == null);
var inst_27924 = cljs.core.not.call(null,inst_27923);
var state_27940__$1 = (function (){var statearr_27942 = state_27940;
(statearr_27942[(7)] = inst_27922__$1);

return statearr_27942;
})();
if(inst_27924){
var statearr_27943_27962 = state_27940__$1;
(statearr_27943_27962[(1)] = (8));

} else {
var statearr_27944_27963 = state_27940__$1;
(statearr_27944_27963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (1))){
var inst_27917 = (0);
var state_27940__$1 = (function (){var statearr_27945 = state_27940;
(statearr_27945[(8)] = inst_27917);

return statearr_27945;
})();
var statearr_27946_27964 = state_27940__$1;
(statearr_27946_27964[(2)] = null);

(statearr_27946_27964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (4))){
var state_27940__$1 = state_27940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27940__$1,(7),ch);
} else {
if((state_val_27941 === (6))){
var inst_27935 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
var statearr_27947_27965 = state_27940__$1;
(statearr_27947_27965[(2)] = inst_27935);

(statearr_27947_27965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (3))){
var inst_27937 = (state_27940[(2)]);
var inst_27938 = cljs.core.async.close_BANG_.call(null,out);
var state_27940__$1 = (function (){var statearr_27948 = state_27940;
(statearr_27948[(9)] = inst_27937);

return statearr_27948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27940__$1,inst_27938);
} else {
if((state_val_27941 === (2))){
var inst_27917 = (state_27940[(8)]);
var inst_27919 = (inst_27917 < n);
var state_27940__$1 = state_27940;
if(cljs.core.truth_(inst_27919)){
var statearr_27949_27966 = state_27940__$1;
(statearr_27949_27966[(1)] = (4));

} else {
var statearr_27950_27967 = state_27940__$1;
(statearr_27950_27967[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (11))){
var inst_27917 = (state_27940[(8)]);
var inst_27927 = (state_27940[(2)]);
var inst_27928 = (inst_27917 + (1));
var inst_27917__$1 = inst_27928;
var state_27940__$1 = (function (){var statearr_27951 = state_27940;
(statearr_27951[(8)] = inst_27917__$1);

(statearr_27951[(10)] = inst_27927);

return statearr_27951;
})();
var statearr_27952_27968 = state_27940__$1;
(statearr_27952_27968[(2)] = null);

(statearr_27952_27968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (9))){
var state_27940__$1 = state_27940;
var statearr_27953_27969 = state_27940__$1;
(statearr_27953_27969[(2)] = null);

(statearr_27953_27969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (5))){
var state_27940__$1 = state_27940;
var statearr_27954_27970 = state_27940__$1;
(statearr_27954_27970[(2)] = null);

(statearr_27954_27970[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (10))){
var inst_27932 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
var statearr_27955_27971 = state_27940__$1;
(statearr_27955_27971[(2)] = inst_27932);

(statearr_27955_27971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (8))){
var inst_27922 = (state_27940[(7)]);
var state_27940__$1 = state_27940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27940__$1,(11),out,inst_27922);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26490__auto___27961,out))
;
return ((function (switch__26395__auto__,c__26490__auto___27961,out){
return (function() {
var cljs$core$async$state_machine__26396__auto__ = null;
var cljs$core$async$state_machine__26396__auto____0 = (function (){
var statearr_27956 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27956[(0)] = cljs$core$async$state_machine__26396__auto__);

(statearr_27956[(1)] = (1));

return statearr_27956;
});
var cljs$core$async$state_machine__26396__auto____1 = (function (state_27940){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_27940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e27957){if((e27957 instanceof Object)){
var ex__26399__auto__ = e27957;
var statearr_27958_27972 = state_27940;
(statearr_27958_27972[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27973 = state_27940;
state_27940 = G__27973;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$state_machine__26396__auto__ = function(state_27940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26396__auto____1.call(this,state_27940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26396__auto____0;
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26396__auto____1;
return cljs$core$async$state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___27961,out))
})();
var state__26492__auto__ = (function (){var statearr_27959 = f__26491__auto__.call(null);
(statearr_27959[(6)] = c__26490__auto___27961);

return statearr_27959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___27961,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27975 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27975 = (function (f,ch,meta27976){
this.f = f;
this.ch = ch;
this.meta27976 = meta27976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27977,meta27976__$1){
var self__ = this;
var _27977__$1 = this;
return (new cljs.core.async.t_cljs$core$async27975(self__.f,self__.ch,meta27976__$1));
});

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27977){
var self__ = this;
var _27977__$1 = this;
return self__.meta27976;
});

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27978 = (function (f,ch,meta27976,_,fn1,meta27979){
this.f = f;
this.ch = ch;
this.meta27976 = meta27976;
this._ = _;
this.fn1 = fn1;
this.meta27979 = meta27979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27980,meta27979__$1){
var self__ = this;
var _27980__$1 = this;
return (new cljs.core.async.t_cljs$core$async27978(self__.f,self__.ch,self__.meta27976,self__._,self__.fn1,meta27979__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27978.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27980){
var self__ = this;
var _27980__$1 = this;
return self__.meta27979;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27978.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27978.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27978.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27978.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27974_SHARP_){
return f1.call(null,(((p1__27974_SHARP_ == null))?null:self__.f.call(null,p1__27974_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27978.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27976","meta27976",-930188623,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27975","cljs.core.async/t_cljs$core$async27975",-749134610,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27979","meta27979",-394629800,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27978.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27978";

cljs.core.async.t_cljs$core$async27978.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27978");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27978.
 */
cljs.core.async.__GT_t_cljs$core$async27978 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27978(f__$1,ch__$1,meta27976__$1,___$2,fn1__$1,meta27979){
return (new cljs.core.async.t_cljs$core$async27978(f__$1,ch__$1,meta27976__$1,___$2,fn1__$1,meta27979));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27978(self__.f,self__.ch,self__.meta27976,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27976","meta27976",-930188623,null)], null);
});

cljs.core.async.t_cljs$core$async27975.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27975";

cljs.core.async.t_cljs$core$async27975.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27975");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27975.
 */
cljs.core.async.__GT_t_cljs$core$async27975 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27975(f__$1,ch__$1,meta27976){
return (new cljs.core.async.t_cljs$core$async27975(f__$1,ch__$1,meta27976));
});

}

return (new cljs.core.async.t_cljs$core$async27975(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27981 = (function (f,ch,meta27982){
this.f = f;
this.ch = ch;
this.meta27982 = meta27982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27983,meta27982__$1){
var self__ = this;
var _27983__$1 = this;
return (new cljs.core.async.t_cljs$core$async27981(self__.f,self__.ch,meta27982__$1));
});

cljs.core.async.t_cljs$core$async27981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27983){
var self__ = this;
var _27983__$1 = this;
return self__.meta27982;
});

cljs.core.async.t_cljs$core$async27981.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27981.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27981.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27981.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27981.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27981.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27982","meta27982",269525295,null)], null);
});

cljs.core.async.t_cljs$core$async27981.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27981";

cljs.core.async.t_cljs$core$async27981.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27981");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27981.
 */
cljs.core.async.__GT_t_cljs$core$async27981 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27981(f__$1,ch__$1,meta27982){
return (new cljs.core.async.t_cljs$core$async27981(f__$1,ch__$1,meta27982));
});

}

return (new cljs.core.async.t_cljs$core$async27981(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27984 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27984 = (function (p,ch,meta27985){
this.p = p;
this.ch = ch;
this.meta27985 = meta27985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27986,meta27985__$1){
var self__ = this;
var _27986__$1 = this;
return (new cljs.core.async.t_cljs$core$async27984(self__.p,self__.ch,meta27985__$1));
});

cljs.core.async.t_cljs$core$async27984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27986){
var self__ = this;
var _27986__$1 = this;
return self__.meta27985;
});

cljs.core.async.t_cljs$core$async27984.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27984.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27984.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27984.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27984.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27984.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27984.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27985","meta27985",1348014159,null)], null);
});

cljs.core.async.t_cljs$core$async27984.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27984";

cljs.core.async.t_cljs$core$async27984.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27984");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27984.
 */
cljs.core.async.__GT_t_cljs$core$async27984 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27984(p__$1,ch__$1,meta27985){
return (new cljs.core.async.t_cljs$core$async27984(p__$1,ch__$1,meta27985));
});

}

return (new cljs.core.async.t_cljs$core$async27984(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__27988 = arguments.length;
switch (G__27988) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26490__auto___28028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___28028,out){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___28028,out){
return (function (state_28009){
var state_val_28010 = (state_28009[(1)]);
if((state_val_28010 === (7))){
var inst_28005 = (state_28009[(2)]);
var state_28009__$1 = state_28009;
var statearr_28011_28029 = state_28009__$1;
(statearr_28011_28029[(2)] = inst_28005);

(statearr_28011_28029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28010 === (1))){
var state_28009__$1 = state_28009;
var statearr_28012_28030 = state_28009__$1;
(statearr_28012_28030[(2)] = null);

(statearr_28012_28030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28010 === (4))){
var inst_27991 = (state_28009[(7)]);
var inst_27991__$1 = (state_28009[(2)]);
var inst_27992 = (inst_27991__$1 == null);
var state_28009__$1 = (function (){var statearr_28013 = state_28009;
(statearr_28013[(7)] = inst_27991__$1);

return statearr_28013;
})();
if(cljs.core.truth_(inst_27992)){
var statearr_28014_28031 = state_28009__$1;
(statearr_28014_28031[(1)] = (5));

} else {
var statearr_28015_28032 = state_28009__$1;
(statearr_28015_28032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28010 === (6))){
var inst_27991 = (state_28009[(7)]);
var inst_27996 = p.call(null,inst_27991);
var state_28009__$1 = state_28009;
if(cljs.core.truth_(inst_27996)){
var statearr_28016_28033 = state_28009__$1;
(statearr_28016_28033[(1)] = (8));

} else {
var statearr_28017_28034 = state_28009__$1;
(statearr_28017_28034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28010 === (3))){
var inst_28007 = (state_28009[(2)]);
var state_28009__$1 = state_28009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28009__$1,inst_28007);
} else {
if((state_val_28010 === (2))){
var state_28009__$1 = state_28009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28009__$1,(4),ch);
} else {
if((state_val_28010 === (11))){
var inst_27999 = (state_28009[(2)]);
var state_28009__$1 = state_28009;
var statearr_28018_28035 = state_28009__$1;
(statearr_28018_28035[(2)] = inst_27999);

(statearr_28018_28035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28010 === (9))){
var state_28009__$1 = state_28009;
var statearr_28019_28036 = state_28009__$1;
(statearr_28019_28036[(2)] = null);

(statearr_28019_28036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28010 === (5))){
var inst_27994 = cljs.core.async.close_BANG_.call(null,out);
var state_28009__$1 = state_28009;
var statearr_28020_28037 = state_28009__$1;
(statearr_28020_28037[(2)] = inst_27994);

(statearr_28020_28037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28010 === (10))){
var inst_28002 = (state_28009[(2)]);
var state_28009__$1 = (function (){var statearr_28021 = state_28009;
(statearr_28021[(8)] = inst_28002);

return statearr_28021;
})();
var statearr_28022_28038 = state_28009__$1;
(statearr_28022_28038[(2)] = null);

(statearr_28022_28038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28010 === (8))){
var inst_27991 = (state_28009[(7)]);
var state_28009__$1 = state_28009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28009__$1,(11),out,inst_27991);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26490__auto___28028,out))
;
return ((function (switch__26395__auto__,c__26490__auto___28028,out){
return (function() {
var cljs$core$async$state_machine__26396__auto__ = null;
var cljs$core$async$state_machine__26396__auto____0 = (function (){
var statearr_28023 = [null,null,null,null,null,null,null,null,null];
(statearr_28023[(0)] = cljs$core$async$state_machine__26396__auto__);

(statearr_28023[(1)] = (1));

return statearr_28023;
});
var cljs$core$async$state_machine__26396__auto____1 = (function (state_28009){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_28009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e28024){if((e28024 instanceof Object)){
var ex__26399__auto__ = e28024;
var statearr_28025_28039 = state_28009;
(statearr_28025_28039[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28040 = state_28009;
state_28009 = G__28040;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$state_machine__26396__auto__ = function(state_28009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26396__auto____1.call(this,state_28009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26396__auto____0;
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26396__auto____1;
return cljs$core$async$state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___28028,out))
})();
var state__26492__auto__ = (function (){var statearr_28026 = f__26491__auto__.call(null);
(statearr_28026[(6)] = c__26490__auto___28028);

return statearr_28026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___28028,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28042 = arguments.length;
switch (G__28042) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto__){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto__){
return (function (state_28105){
var state_val_28106 = (state_28105[(1)]);
if((state_val_28106 === (7))){
var inst_28101 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
var statearr_28107_28145 = state_28105__$1;
(statearr_28107_28145[(2)] = inst_28101);

(statearr_28107_28145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (20))){
var inst_28071 = (state_28105[(7)]);
var inst_28082 = (state_28105[(2)]);
var inst_28083 = cljs.core.next.call(null,inst_28071);
var inst_28057 = inst_28083;
var inst_28058 = null;
var inst_28059 = (0);
var inst_28060 = (0);
var state_28105__$1 = (function (){var statearr_28108 = state_28105;
(statearr_28108[(8)] = inst_28057);

(statearr_28108[(9)] = inst_28060);

(statearr_28108[(10)] = inst_28059);

(statearr_28108[(11)] = inst_28082);

(statearr_28108[(12)] = inst_28058);

return statearr_28108;
})();
var statearr_28109_28146 = state_28105__$1;
(statearr_28109_28146[(2)] = null);

(statearr_28109_28146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (1))){
var state_28105__$1 = state_28105;
var statearr_28110_28147 = state_28105__$1;
(statearr_28110_28147[(2)] = null);

(statearr_28110_28147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (4))){
var inst_28046 = (state_28105[(13)]);
var inst_28046__$1 = (state_28105[(2)]);
var inst_28047 = (inst_28046__$1 == null);
var state_28105__$1 = (function (){var statearr_28111 = state_28105;
(statearr_28111[(13)] = inst_28046__$1);

return statearr_28111;
})();
if(cljs.core.truth_(inst_28047)){
var statearr_28112_28148 = state_28105__$1;
(statearr_28112_28148[(1)] = (5));

} else {
var statearr_28113_28149 = state_28105__$1;
(statearr_28113_28149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (15))){
var state_28105__$1 = state_28105;
var statearr_28117_28150 = state_28105__$1;
(statearr_28117_28150[(2)] = null);

(statearr_28117_28150[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (21))){
var state_28105__$1 = state_28105;
var statearr_28118_28151 = state_28105__$1;
(statearr_28118_28151[(2)] = null);

(statearr_28118_28151[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (13))){
var inst_28057 = (state_28105[(8)]);
var inst_28060 = (state_28105[(9)]);
var inst_28059 = (state_28105[(10)]);
var inst_28058 = (state_28105[(12)]);
var inst_28067 = (state_28105[(2)]);
var inst_28068 = (inst_28060 + (1));
var tmp28114 = inst_28057;
var tmp28115 = inst_28059;
var tmp28116 = inst_28058;
var inst_28057__$1 = tmp28114;
var inst_28058__$1 = tmp28116;
var inst_28059__$1 = tmp28115;
var inst_28060__$1 = inst_28068;
var state_28105__$1 = (function (){var statearr_28119 = state_28105;
(statearr_28119[(8)] = inst_28057__$1);

(statearr_28119[(9)] = inst_28060__$1);

(statearr_28119[(10)] = inst_28059__$1);

(statearr_28119[(14)] = inst_28067);

(statearr_28119[(12)] = inst_28058__$1);

return statearr_28119;
})();
var statearr_28120_28152 = state_28105__$1;
(statearr_28120_28152[(2)] = null);

(statearr_28120_28152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (22))){
var state_28105__$1 = state_28105;
var statearr_28121_28153 = state_28105__$1;
(statearr_28121_28153[(2)] = null);

(statearr_28121_28153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (6))){
var inst_28046 = (state_28105[(13)]);
var inst_28055 = f.call(null,inst_28046);
var inst_28056 = cljs.core.seq.call(null,inst_28055);
var inst_28057 = inst_28056;
var inst_28058 = null;
var inst_28059 = (0);
var inst_28060 = (0);
var state_28105__$1 = (function (){var statearr_28122 = state_28105;
(statearr_28122[(8)] = inst_28057);

(statearr_28122[(9)] = inst_28060);

(statearr_28122[(10)] = inst_28059);

(statearr_28122[(12)] = inst_28058);

return statearr_28122;
})();
var statearr_28123_28154 = state_28105__$1;
(statearr_28123_28154[(2)] = null);

(statearr_28123_28154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (17))){
var inst_28071 = (state_28105[(7)]);
var inst_28075 = cljs.core.chunk_first.call(null,inst_28071);
var inst_28076 = cljs.core.chunk_rest.call(null,inst_28071);
var inst_28077 = cljs.core.count.call(null,inst_28075);
var inst_28057 = inst_28076;
var inst_28058 = inst_28075;
var inst_28059 = inst_28077;
var inst_28060 = (0);
var state_28105__$1 = (function (){var statearr_28124 = state_28105;
(statearr_28124[(8)] = inst_28057);

(statearr_28124[(9)] = inst_28060);

(statearr_28124[(10)] = inst_28059);

(statearr_28124[(12)] = inst_28058);

return statearr_28124;
})();
var statearr_28125_28155 = state_28105__$1;
(statearr_28125_28155[(2)] = null);

(statearr_28125_28155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (3))){
var inst_28103 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28105__$1,inst_28103);
} else {
if((state_val_28106 === (12))){
var inst_28091 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
var statearr_28126_28156 = state_28105__$1;
(statearr_28126_28156[(2)] = inst_28091);

(statearr_28126_28156[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (2))){
var state_28105__$1 = state_28105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28105__$1,(4),in$);
} else {
if((state_val_28106 === (23))){
var inst_28099 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
var statearr_28127_28157 = state_28105__$1;
(statearr_28127_28157[(2)] = inst_28099);

(statearr_28127_28157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (19))){
var inst_28086 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
var statearr_28128_28158 = state_28105__$1;
(statearr_28128_28158[(2)] = inst_28086);

(statearr_28128_28158[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (11))){
var inst_28071 = (state_28105[(7)]);
var inst_28057 = (state_28105[(8)]);
var inst_28071__$1 = cljs.core.seq.call(null,inst_28057);
var state_28105__$1 = (function (){var statearr_28129 = state_28105;
(statearr_28129[(7)] = inst_28071__$1);

return statearr_28129;
})();
if(inst_28071__$1){
var statearr_28130_28159 = state_28105__$1;
(statearr_28130_28159[(1)] = (14));

} else {
var statearr_28131_28160 = state_28105__$1;
(statearr_28131_28160[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (9))){
var inst_28093 = (state_28105[(2)]);
var inst_28094 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28105__$1 = (function (){var statearr_28132 = state_28105;
(statearr_28132[(15)] = inst_28093);

return statearr_28132;
})();
if(cljs.core.truth_(inst_28094)){
var statearr_28133_28161 = state_28105__$1;
(statearr_28133_28161[(1)] = (21));

} else {
var statearr_28134_28162 = state_28105__$1;
(statearr_28134_28162[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (5))){
var inst_28049 = cljs.core.async.close_BANG_.call(null,out);
var state_28105__$1 = state_28105;
var statearr_28135_28163 = state_28105__$1;
(statearr_28135_28163[(2)] = inst_28049);

(statearr_28135_28163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (14))){
var inst_28071 = (state_28105[(7)]);
var inst_28073 = cljs.core.chunked_seq_QMARK_.call(null,inst_28071);
var state_28105__$1 = state_28105;
if(inst_28073){
var statearr_28136_28164 = state_28105__$1;
(statearr_28136_28164[(1)] = (17));

} else {
var statearr_28137_28165 = state_28105__$1;
(statearr_28137_28165[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (16))){
var inst_28089 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
var statearr_28138_28166 = state_28105__$1;
(statearr_28138_28166[(2)] = inst_28089);

(statearr_28138_28166[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (10))){
var inst_28060 = (state_28105[(9)]);
var inst_28058 = (state_28105[(12)]);
var inst_28065 = cljs.core._nth.call(null,inst_28058,inst_28060);
var state_28105__$1 = state_28105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28105__$1,(13),out,inst_28065);
} else {
if((state_val_28106 === (18))){
var inst_28071 = (state_28105[(7)]);
var inst_28080 = cljs.core.first.call(null,inst_28071);
var state_28105__$1 = state_28105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28105__$1,(20),out,inst_28080);
} else {
if((state_val_28106 === (8))){
var inst_28060 = (state_28105[(9)]);
var inst_28059 = (state_28105[(10)]);
var inst_28062 = (inst_28060 < inst_28059);
var inst_28063 = inst_28062;
var state_28105__$1 = state_28105;
if(cljs.core.truth_(inst_28063)){
var statearr_28139_28167 = state_28105__$1;
(statearr_28139_28167[(1)] = (10));

} else {
var statearr_28140_28168 = state_28105__$1;
(statearr_28140_28168[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26490__auto__))
;
return ((function (switch__26395__auto__,c__26490__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26396__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26396__auto____0 = (function (){
var statearr_28141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28141[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26396__auto__);

(statearr_28141[(1)] = (1));

return statearr_28141;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26396__auto____1 = (function (state_28105){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_28105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e28142){if((e28142 instanceof Object)){
var ex__26399__auto__ = e28142;
var statearr_28143_28169 = state_28105;
(statearr_28143_28169[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28170 = state_28105;
state_28105 = G__28170;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26396__auto__ = function(state_28105){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26396__auto____1.call(this,state_28105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26396__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26396__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto__))
})();
var state__26492__auto__ = (function (){var statearr_28144 = f__26491__auto__.call(null);
(statearr_28144[(6)] = c__26490__auto__);

return statearr_28144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto__))
);

return c__26490__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28172 = arguments.length;
switch (G__28172) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28175 = arguments.length;
switch (G__28175) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28178 = arguments.length;
switch (G__28178) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26490__auto___28225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___28225,out){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___28225,out){
return (function (state_28202){
var state_val_28203 = (state_28202[(1)]);
if((state_val_28203 === (7))){
var inst_28197 = (state_28202[(2)]);
var state_28202__$1 = state_28202;
var statearr_28204_28226 = state_28202__$1;
(statearr_28204_28226[(2)] = inst_28197);

(statearr_28204_28226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28203 === (1))){
var inst_28179 = null;
var state_28202__$1 = (function (){var statearr_28205 = state_28202;
(statearr_28205[(7)] = inst_28179);

return statearr_28205;
})();
var statearr_28206_28227 = state_28202__$1;
(statearr_28206_28227[(2)] = null);

(statearr_28206_28227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28203 === (4))){
var inst_28182 = (state_28202[(8)]);
var inst_28182__$1 = (state_28202[(2)]);
var inst_28183 = (inst_28182__$1 == null);
var inst_28184 = cljs.core.not.call(null,inst_28183);
var state_28202__$1 = (function (){var statearr_28207 = state_28202;
(statearr_28207[(8)] = inst_28182__$1);

return statearr_28207;
})();
if(inst_28184){
var statearr_28208_28228 = state_28202__$1;
(statearr_28208_28228[(1)] = (5));

} else {
var statearr_28209_28229 = state_28202__$1;
(statearr_28209_28229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28203 === (6))){
var state_28202__$1 = state_28202;
var statearr_28210_28230 = state_28202__$1;
(statearr_28210_28230[(2)] = null);

(statearr_28210_28230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28203 === (3))){
var inst_28199 = (state_28202[(2)]);
var inst_28200 = cljs.core.async.close_BANG_.call(null,out);
var state_28202__$1 = (function (){var statearr_28211 = state_28202;
(statearr_28211[(9)] = inst_28199);

return statearr_28211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28202__$1,inst_28200);
} else {
if((state_val_28203 === (2))){
var state_28202__$1 = state_28202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28202__$1,(4),ch);
} else {
if((state_val_28203 === (11))){
var inst_28182 = (state_28202[(8)]);
var inst_28191 = (state_28202[(2)]);
var inst_28179 = inst_28182;
var state_28202__$1 = (function (){var statearr_28212 = state_28202;
(statearr_28212[(7)] = inst_28179);

(statearr_28212[(10)] = inst_28191);

return statearr_28212;
})();
var statearr_28213_28231 = state_28202__$1;
(statearr_28213_28231[(2)] = null);

(statearr_28213_28231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28203 === (9))){
var inst_28182 = (state_28202[(8)]);
var state_28202__$1 = state_28202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28202__$1,(11),out,inst_28182);
} else {
if((state_val_28203 === (5))){
var inst_28179 = (state_28202[(7)]);
var inst_28182 = (state_28202[(8)]);
var inst_28186 = cljs.core._EQ_.call(null,inst_28182,inst_28179);
var state_28202__$1 = state_28202;
if(inst_28186){
var statearr_28215_28232 = state_28202__$1;
(statearr_28215_28232[(1)] = (8));

} else {
var statearr_28216_28233 = state_28202__$1;
(statearr_28216_28233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28203 === (10))){
var inst_28194 = (state_28202[(2)]);
var state_28202__$1 = state_28202;
var statearr_28217_28234 = state_28202__$1;
(statearr_28217_28234[(2)] = inst_28194);

(statearr_28217_28234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28203 === (8))){
var inst_28179 = (state_28202[(7)]);
var tmp28214 = inst_28179;
var inst_28179__$1 = tmp28214;
var state_28202__$1 = (function (){var statearr_28218 = state_28202;
(statearr_28218[(7)] = inst_28179__$1);

return statearr_28218;
})();
var statearr_28219_28235 = state_28202__$1;
(statearr_28219_28235[(2)] = null);

(statearr_28219_28235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26490__auto___28225,out))
;
return ((function (switch__26395__auto__,c__26490__auto___28225,out){
return (function() {
var cljs$core$async$state_machine__26396__auto__ = null;
var cljs$core$async$state_machine__26396__auto____0 = (function (){
var statearr_28220 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28220[(0)] = cljs$core$async$state_machine__26396__auto__);

(statearr_28220[(1)] = (1));

return statearr_28220;
});
var cljs$core$async$state_machine__26396__auto____1 = (function (state_28202){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_28202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e28221){if((e28221 instanceof Object)){
var ex__26399__auto__ = e28221;
var statearr_28222_28236 = state_28202;
(statearr_28222_28236[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28237 = state_28202;
state_28202 = G__28237;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$state_machine__26396__auto__ = function(state_28202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26396__auto____1.call(this,state_28202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26396__auto____0;
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26396__auto____1;
return cljs$core$async$state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___28225,out))
})();
var state__26492__auto__ = (function (){var statearr_28223 = f__26491__auto__.call(null);
(statearr_28223[(6)] = c__26490__auto___28225);

return statearr_28223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___28225,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28239 = arguments.length;
switch (G__28239) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26490__auto___28305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___28305,out){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___28305,out){
return (function (state_28277){
var state_val_28278 = (state_28277[(1)]);
if((state_val_28278 === (7))){
var inst_28273 = (state_28277[(2)]);
var state_28277__$1 = state_28277;
var statearr_28279_28306 = state_28277__$1;
(statearr_28279_28306[(2)] = inst_28273);

(statearr_28279_28306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (1))){
var inst_28240 = (new Array(n));
var inst_28241 = inst_28240;
var inst_28242 = (0);
var state_28277__$1 = (function (){var statearr_28280 = state_28277;
(statearr_28280[(7)] = inst_28241);

(statearr_28280[(8)] = inst_28242);

return statearr_28280;
})();
var statearr_28281_28307 = state_28277__$1;
(statearr_28281_28307[(2)] = null);

(statearr_28281_28307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (4))){
var inst_28245 = (state_28277[(9)]);
var inst_28245__$1 = (state_28277[(2)]);
var inst_28246 = (inst_28245__$1 == null);
var inst_28247 = cljs.core.not.call(null,inst_28246);
var state_28277__$1 = (function (){var statearr_28282 = state_28277;
(statearr_28282[(9)] = inst_28245__$1);

return statearr_28282;
})();
if(inst_28247){
var statearr_28283_28308 = state_28277__$1;
(statearr_28283_28308[(1)] = (5));

} else {
var statearr_28284_28309 = state_28277__$1;
(statearr_28284_28309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (15))){
var inst_28267 = (state_28277[(2)]);
var state_28277__$1 = state_28277;
var statearr_28285_28310 = state_28277__$1;
(statearr_28285_28310[(2)] = inst_28267);

(statearr_28285_28310[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (13))){
var state_28277__$1 = state_28277;
var statearr_28286_28311 = state_28277__$1;
(statearr_28286_28311[(2)] = null);

(statearr_28286_28311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (6))){
var inst_28242 = (state_28277[(8)]);
var inst_28263 = (inst_28242 > (0));
var state_28277__$1 = state_28277;
if(cljs.core.truth_(inst_28263)){
var statearr_28287_28312 = state_28277__$1;
(statearr_28287_28312[(1)] = (12));

} else {
var statearr_28288_28313 = state_28277__$1;
(statearr_28288_28313[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (3))){
var inst_28275 = (state_28277[(2)]);
var state_28277__$1 = state_28277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28277__$1,inst_28275);
} else {
if((state_val_28278 === (12))){
var inst_28241 = (state_28277[(7)]);
var inst_28265 = cljs.core.vec.call(null,inst_28241);
var state_28277__$1 = state_28277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28277__$1,(15),out,inst_28265);
} else {
if((state_val_28278 === (2))){
var state_28277__$1 = state_28277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28277__$1,(4),ch);
} else {
if((state_val_28278 === (11))){
var inst_28257 = (state_28277[(2)]);
var inst_28258 = (new Array(n));
var inst_28241 = inst_28258;
var inst_28242 = (0);
var state_28277__$1 = (function (){var statearr_28289 = state_28277;
(statearr_28289[(10)] = inst_28257);

(statearr_28289[(7)] = inst_28241);

(statearr_28289[(8)] = inst_28242);

return statearr_28289;
})();
var statearr_28290_28314 = state_28277__$1;
(statearr_28290_28314[(2)] = null);

(statearr_28290_28314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (9))){
var inst_28241 = (state_28277[(7)]);
var inst_28255 = cljs.core.vec.call(null,inst_28241);
var state_28277__$1 = state_28277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28277__$1,(11),out,inst_28255);
} else {
if((state_val_28278 === (5))){
var inst_28241 = (state_28277[(7)]);
var inst_28250 = (state_28277[(11)]);
var inst_28245 = (state_28277[(9)]);
var inst_28242 = (state_28277[(8)]);
var inst_28249 = (inst_28241[inst_28242] = inst_28245);
var inst_28250__$1 = (inst_28242 + (1));
var inst_28251 = (inst_28250__$1 < n);
var state_28277__$1 = (function (){var statearr_28291 = state_28277;
(statearr_28291[(11)] = inst_28250__$1);

(statearr_28291[(12)] = inst_28249);

return statearr_28291;
})();
if(cljs.core.truth_(inst_28251)){
var statearr_28292_28315 = state_28277__$1;
(statearr_28292_28315[(1)] = (8));

} else {
var statearr_28293_28316 = state_28277__$1;
(statearr_28293_28316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (14))){
var inst_28270 = (state_28277[(2)]);
var inst_28271 = cljs.core.async.close_BANG_.call(null,out);
var state_28277__$1 = (function (){var statearr_28295 = state_28277;
(statearr_28295[(13)] = inst_28270);

return statearr_28295;
})();
var statearr_28296_28317 = state_28277__$1;
(statearr_28296_28317[(2)] = inst_28271);

(statearr_28296_28317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (10))){
var inst_28261 = (state_28277[(2)]);
var state_28277__$1 = state_28277;
var statearr_28297_28318 = state_28277__$1;
(statearr_28297_28318[(2)] = inst_28261);

(statearr_28297_28318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (8))){
var inst_28241 = (state_28277[(7)]);
var inst_28250 = (state_28277[(11)]);
var tmp28294 = inst_28241;
var inst_28241__$1 = tmp28294;
var inst_28242 = inst_28250;
var state_28277__$1 = (function (){var statearr_28298 = state_28277;
(statearr_28298[(7)] = inst_28241__$1);

(statearr_28298[(8)] = inst_28242);

return statearr_28298;
})();
var statearr_28299_28319 = state_28277__$1;
(statearr_28299_28319[(2)] = null);

(statearr_28299_28319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26490__auto___28305,out))
;
return ((function (switch__26395__auto__,c__26490__auto___28305,out){
return (function() {
var cljs$core$async$state_machine__26396__auto__ = null;
var cljs$core$async$state_machine__26396__auto____0 = (function (){
var statearr_28300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28300[(0)] = cljs$core$async$state_machine__26396__auto__);

(statearr_28300[(1)] = (1));

return statearr_28300;
});
var cljs$core$async$state_machine__26396__auto____1 = (function (state_28277){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_28277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e28301){if((e28301 instanceof Object)){
var ex__26399__auto__ = e28301;
var statearr_28302_28320 = state_28277;
(statearr_28302_28320[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28321 = state_28277;
state_28277 = G__28321;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$state_machine__26396__auto__ = function(state_28277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26396__auto____1.call(this,state_28277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26396__auto____0;
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26396__auto____1;
return cljs$core$async$state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___28305,out))
})();
var state__26492__auto__ = (function (){var statearr_28303 = f__26491__auto__.call(null);
(statearr_28303[(6)] = c__26490__auto___28305);

return statearr_28303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___28305,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28323 = arguments.length;
switch (G__28323) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26490__auto___28393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___28393,out){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___28393,out){
return (function (state_28365){
var state_val_28366 = (state_28365[(1)]);
if((state_val_28366 === (7))){
var inst_28361 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28367_28394 = state_28365__$1;
(statearr_28367_28394[(2)] = inst_28361);

(statearr_28367_28394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (1))){
var inst_28324 = [];
var inst_28325 = inst_28324;
var inst_28326 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28365__$1 = (function (){var statearr_28368 = state_28365;
(statearr_28368[(7)] = inst_28326);

(statearr_28368[(8)] = inst_28325);

return statearr_28368;
})();
var statearr_28369_28395 = state_28365__$1;
(statearr_28369_28395[(2)] = null);

(statearr_28369_28395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (4))){
var inst_28329 = (state_28365[(9)]);
var inst_28329__$1 = (state_28365[(2)]);
var inst_28330 = (inst_28329__$1 == null);
var inst_28331 = cljs.core.not.call(null,inst_28330);
var state_28365__$1 = (function (){var statearr_28370 = state_28365;
(statearr_28370[(9)] = inst_28329__$1);

return statearr_28370;
})();
if(inst_28331){
var statearr_28371_28396 = state_28365__$1;
(statearr_28371_28396[(1)] = (5));

} else {
var statearr_28372_28397 = state_28365__$1;
(statearr_28372_28397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (15))){
var inst_28355 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28373_28398 = state_28365__$1;
(statearr_28373_28398[(2)] = inst_28355);

(statearr_28373_28398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (13))){
var state_28365__$1 = state_28365;
var statearr_28374_28399 = state_28365__$1;
(statearr_28374_28399[(2)] = null);

(statearr_28374_28399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (6))){
var inst_28325 = (state_28365[(8)]);
var inst_28350 = inst_28325.length;
var inst_28351 = (inst_28350 > (0));
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28351)){
var statearr_28375_28400 = state_28365__$1;
(statearr_28375_28400[(1)] = (12));

} else {
var statearr_28376_28401 = state_28365__$1;
(statearr_28376_28401[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (3))){
var inst_28363 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28365__$1,inst_28363);
} else {
if((state_val_28366 === (12))){
var inst_28325 = (state_28365[(8)]);
var inst_28353 = cljs.core.vec.call(null,inst_28325);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28365__$1,(15),out,inst_28353);
} else {
if((state_val_28366 === (2))){
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28365__$1,(4),ch);
} else {
if((state_val_28366 === (11))){
var inst_28329 = (state_28365[(9)]);
var inst_28333 = (state_28365[(10)]);
var inst_28343 = (state_28365[(2)]);
var inst_28344 = [];
var inst_28345 = inst_28344.push(inst_28329);
var inst_28325 = inst_28344;
var inst_28326 = inst_28333;
var state_28365__$1 = (function (){var statearr_28377 = state_28365;
(statearr_28377[(11)] = inst_28345);

(statearr_28377[(7)] = inst_28326);

(statearr_28377[(8)] = inst_28325);

(statearr_28377[(12)] = inst_28343);

return statearr_28377;
})();
var statearr_28378_28402 = state_28365__$1;
(statearr_28378_28402[(2)] = null);

(statearr_28378_28402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (9))){
var inst_28325 = (state_28365[(8)]);
var inst_28341 = cljs.core.vec.call(null,inst_28325);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28365__$1,(11),out,inst_28341);
} else {
if((state_val_28366 === (5))){
var inst_28329 = (state_28365[(9)]);
var inst_28326 = (state_28365[(7)]);
var inst_28333 = (state_28365[(10)]);
var inst_28333__$1 = f.call(null,inst_28329);
var inst_28334 = cljs.core._EQ_.call(null,inst_28333__$1,inst_28326);
var inst_28335 = cljs.core.keyword_identical_QMARK_.call(null,inst_28326,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28336 = ((inst_28334) || (inst_28335));
var state_28365__$1 = (function (){var statearr_28379 = state_28365;
(statearr_28379[(10)] = inst_28333__$1);

return statearr_28379;
})();
if(cljs.core.truth_(inst_28336)){
var statearr_28380_28403 = state_28365__$1;
(statearr_28380_28403[(1)] = (8));

} else {
var statearr_28381_28404 = state_28365__$1;
(statearr_28381_28404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (14))){
var inst_28358 = (state_28365[(2)]);
var inst_28359 = cljs.core.async.close_BANG_.call(null,out);
var state_28365__$1 = (function (){var statearr_28383 = state_28365;
(statearr_28383[(13)] = inst_28358);

return statearr_28383;
})();
var statearr_28384_28405 = state_28365__$1;
(statearr_28384_28405[(2)] = inst_28359);

(statearr_28384_28405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (10))){
var inst_28348 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28385_28406 = state_28365__$1;
(statearr_28385_28406[(2)] = inst_28348);

(statearr_28385_28406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (8))){
var inst_28329 = (state_28365[(9)]);
var inst_28333 = (state_28365[(10)]);
var inst_28325 = (state_28365[(8)]);
var inst_28338 = inst_28325.push(inst_28329);
var tmp28382 = inst_28325;
var inst_28325__$1 = tmp28382;
var inst_28326 = inst_28333;
var state_28365__$1 = (function (){var statearr_28386 = state_28365;
(statearr_28386[(7)] = inst_28326);

(statearr_28386[(14)] = inst_28338);

(statearr_28386[(8)] = inst_28325__$1);

return statearr_28386;
})();
var statearr_28387_28407 = state_28365__$1;
(statearr_28387_28407[(2)] = null);

(statearr_28387_28407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26490__auto___28393,out))
;
return ((function (switch__26395__auto__,c__26490__auto___28393,out){
return (function() {
var cljs$core$async$state_machine__26396__auto__ = null;
var cljs$core$async$state_machine__26396__auto____0 = (function (){
var statearr_28388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28388[(0)] = cljs$core$async$state_machine__26396__auto__);

(statearr_28388[(1)] = (1));

return statearr_28388;
});
var cljs$core$async$state_machine__26396__auto____1 = (function (state_28365){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_28365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e28389){if((e28389 instanceof Object)){
var ex__26399__auto__ = e28389;
var statearr_28390_28408 = state_28365;
(statearr_28390_28408[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28409 = state_28365;
state_28365 = G__28409;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
cljs$core$async$state_machine__26396__auto__ = function(state_28365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26396__auto____1.call(this,state_28365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26396__auto____0;
cljs$core$async$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26396__auto____1;
return cljs$core$async$state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___28393,out))
})();
var state__26492__auto__ = (function (){var statearr_28391 = f__26491__auto__.call(null);
(statearr_28391[(6)] = c__26490__auto___28393);

return statearr_28391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___28393,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1620419391741
