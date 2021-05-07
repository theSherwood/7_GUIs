// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e30481){if((e30481 instanceof Error)){
var e = e30481;
return "Error: Unable to stringify";
} else {
throw e30481;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30484 = arguments.length;
switch (G__30484) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30482_SHARP_){
if(typeof p1__30482_SHARP_ === 'string'){
return p1__30482_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30482_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30487 = arguments.length;
var i__4731__auto___30488 = (0);
while(true){
if((i__4731__auto___30488 < len__4730__auto___30487)){
args__4736__auto__.push((arguments[i__4731__auto___30488]));

var G__30489 = (i__4731__auto___30488 + (1));
i__4731__auto___30488 = G__30489;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30486){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30486));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30491 = arguments.length;
var i__4731__auto___30492 = (0);
while(true){
if((i__4731__auto___30492 < len__4730__auto___30491)){
args__4736__auto__.push((arguments[i__4731__auto___30492]));

var G__30493 = (i__4731__auto___30492 + (1));
i__4731__auto___30492 = G__30493;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30490){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30490));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30494){
var map__30495 = p__30494;
var map__30495__$1 = (((((!((map__30495 == null))))?(((((map__30495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30495):map__30495);
var message = cljs.core.get.call(null,map__30495__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30495__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26490__auto___30574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___30574,ch){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___30574,ch){
return (function (state_30546){
var state_val_30547 = (state_30546[(1)]);
if((state_val_30547 === (7))){
var inst_30542 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30548_30575 = state_30546__$1;
(statearr_30548_30575[(2)] = inst_30542);

(statearr_30548_30575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (1))){
var state_30546__$1 = state_30546;
var statearr_30549_30576 = state_30546__$1;
(statearr_30549_30576[(2)] = null);

(statearr_30549_30576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (4))){
var inst_30499 = (state_30546[(7)]);
var inst_30499__$1 = (state_30546[(2)]);
var state_30546__$1 = (function (){var statearr_30550 = state_30546;
(statearr_30550[(7)] = inst_30499__$1);

return statearr_30550;
})();
if(cljs.core.truth_(inst_30499__$1)){
var statearr_30551_30577 = state_30546__$1;
(statearr_30551_30577[(1)] = (5));

} else {
var statearr_30552_30578 = state_30546__$1;
(statearr_30552_30578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (15))){
var inst_30506 = (state_30546[(8)]);
var inst_30521 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30506);
var inst_30522 = cljs.core.first.call(null,inst_30521);
var inst_30523 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30522);
var inst_30524 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30523)].join('');
var inst_30525 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30524);
var state_30546__$1 = state_30546;
var statearr_30553_30579 = state_30546__$1;
(statearr_30553_30579[(2)] = inst_30525);

(statearr_30553_30579[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (13))){
var inst_30530 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30554_30580 = state_30546__$1;
(statearr_30554_30580[(2)] = inst_30530);

(statearr_30554_30580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (6))){
var state_30546__$1 = state_30546;
var statearr_30555_30581 = state_30546__$1;
(statearr_30555_30581[(2)] = null);

(statearr_30555_30581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (17))){
var inst_30528 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30556_30582 = state_30546__$1;
(statearr_30556_30582[(2)] = inst_30528);

(statearr_30556_30582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (3))){
var inst_30544 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30546__$1,inst_30544);
} else {
if((state_val_30547 === (12))){
var inst_30505 = (state_30546[(9)]);
var inst_30519 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30505,opts);
var state_30546__$1 = state_30546;
if(inst_30519){
var statearr_30557_30583 = state_30546__$1;
(statearr_30557_30583[(1)] = (15));

} else {
var statearr_30558_30584 = state_30546__$1;
(statearr_30558_30584[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (2))){
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30546__$1,(4),ch);
} else {
if((state_val_30547 === (11))){
var inst_30506 = (state_30546[(8)]);
var inst_30511 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30512 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30506);
var inst_30513 = cljs.core.async.timeout.call(null,(1000));
var inst_30514 = [inst_30512,inst_30513];
var inst_30515 = (new cljs.core.PersistentVector(null,2,(5),inst_30511,inst_30514,null));
var state_30546__$1 = state_30546;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30546__$1,(14),inst_30515);
} else {
if((state_val_30547 === (9))){
var inst_30506 = (state_30546[(8)]);
var inst_30532 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30533 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30506);
var inst_30534 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30533);
var inst_30535 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30534)].join('');
var inst_30536 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30535);
var state_30546__$1 = (function (){var statearr_30559 = state_30546;
(statearr_30559[(10)] = inst_30532);

return statearr_30559;
})();
var statearr_30560_30585 = state_30546__$1;
(statearr_30560_30585[(2)] = inst_30536);

(statearr_30560_30585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (5))){
var inst_30499 = (state_30546[(7)]);
var inst_30501 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30502 = (new cljs.core.PersistentArrayMap(null,2,inst_30501,null));
var inst_30503 = (new cljs.core.PersistentHashSet(null,inst_30502,null));
var inst_30504 = figwheel.client.focus_msgs.call(null,inst_30503,inst_30499);
var inst_30505 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30504);
var inst_30506 = cljs.core.first.call(null,inst_30504);
var inst_30507 = figwheel.client.autoload_QMARK_.call(null);
var state_30546__$1 = (function (){var statearr_30561 = state_30546;
(statearr_30561[(9)] = inst_30505);

(statearr_30561[(8)] = inst_30506);

return statearr_30561;
})();
if(cljs.core.truth_(inst_30507)){
var statearr_30562_30586 = state_30546__$1;
(statearr_30562_30586[(1)] = (8));

} else {
var statearr_30563_30587 = state_30546__$1;
(statearr_30563_30587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (14))){
var inst_30517 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30564_30588 = state_30546__$1;
(statearr_30564_30588[(2)] = inst_30517);

(statearr_30564_30588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (16))){
var state_30546__$1 = state_30546;
var statearr_30565_30589 = state_30546__$1;
(statearr_30565_30589[(2)] = null);

(statearr_30565_30589[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (10))){
var inst_30538 = (state_30546[(2)]);
var state_30546__$1 = (function (){var statearr_30566 = state_30546;
(statearr_30566[(11)] = inst_30538);

return statearr_30566;
})();
var statearr_30567_30590 = state_30546__$1;
(statearr_30567_30590[(2)] = null);

(statearr_30567_30590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (8))){
var inst_30505 = (state_30546[(9)]);
var inst_30509 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30505,opts);
var state_30546__$1 = state_30546;
if(cljs.core.truth_(inst_30509)){
var statearr_30568_30591 = state_30546__$1;
(statearr_30568_30591[(1)] = (11));

} else {
var statearr_30569_30592 = state_30546__$1;
(statearr_30569_30592[(1)] = (12));

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
});})(c__26490__auto___30574,ch))
;
return ((function (switch__26395__auto__,c__26490__auto___30574,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26396__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26396__auto____0 = (function (){
var statearr_30570 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30570[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26396__auto__);

(statearr_30570[(1)] = (1));

return statearr_30570;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26396__auto____1 = (function (state_30546){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_30546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e30571){if((e30571 instanceof Object)){
var ex__26399__auto__ = e30571;
var statearr_30572_30593 = state_30546;
(statearr_30572_30593[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30594 = state_30546;
state_30546 = G__30594;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26396__auto__ = function(state_30546){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26396__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26396__auto____1.call(this,state_30546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26396__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26396__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___30574,ch))
})();
var state__26492__auto__ = (function (){var statearr_30573 = f__26491__auto__.call(null);
(statearr_30573[(6)] = c__26490__auto___30574);

return statearr_30573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___30574,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30595_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30595_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30601 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30601){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30597 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30598 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30599 = true;
var _STAR_print_fn_STAR__temp_val__30600 = ((function (_STAR_print_newline_STAR__orig_val__30597,_STAR_print_fn_STAR__orig_val__30598,_STAR_print_newline_STAR__temp_val__30599,sb,base_path_30601){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__30597,_STAR_print_fn_STAR__orig_val__30598,_STAR_print_newline_STAR__temp_val__30599,sb,base_path_30601))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30599;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30600;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30598;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30597;
}}catch (e30596){if((e30596 instanceof Error)){
var e = e30596;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30601], null));
} else {
var e = e30596;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30601))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30602){
var map__30603 = p__30602;
var map__30603__$1 = (((((!((map__30603 == null))))?(((((map__30603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30603):map__30603);
var opts = map__30603__$1;
var build_id = cljs.core.get.call(null,map__30603__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30603,map__30603__$1,opts,build_id){
return (function (p__30605){
var vec__30606 = p__30605;
var seq__30607 = cljs.core.seq.call(null,vec__30606);
var first__30608 = cljs.core.first.call(null,seq__30607);
var seq__30607__$1 = cljs.core.next.call(null,seq__30607);
var map__30609 = first__30608;
var map__30609__$1 = (((((!((map__30609 == null))))?(((((map__30609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30609):map__30609);
var msg = map__30609__$1;
var msg_name = cljs.core.get.call(null,map__30609__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30607__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30606,seq__30607,first__30608,seq__30607__$1,map__30609,map__30609__$1,msg,msg_name,_,map__30603,map__30603__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30606,seq__30607,first__30608,seq__30607__$1,map__30609,map__30609__$1,msg,msg_name,_,map__30603,map__30603__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30603,map__30603__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30611){
var vec__30612 = p__30611;
var seq__30613 = cljs.core.seq.call(null,vec__30612);
var first__30614 = cljs.core.first.call(null,seq__30613);
var seq__30613__$1 = cljs.core.next.call(null,seq__30613);
var map__30615 = first__30614;
var map__30615__$1 = (((((!((map__30615 == null))))?(((((map__30615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30615):map__30615);
var msg = map__30615__$1;
var msg_name = cljs.core.get.call(null,map__30615__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30613__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30617){
var map__30618 = p__30617;
var map__30618__$1 = (((((!((map__30618 == null))))?(((((map__30618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30618):map__30618);
var on_compile_warning = cljs.core.get.call(null,map__30618__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30618__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30618,map__30618__$1,on_compile_warning,on_compile_fail){
return (function (p__30620){
var vec__30621 = p__30620;
var seq__30622 = cljs.core.seq.call(null,vec__30621);
var first__30623 = cljs.core.first.call(null,seq__30622);
var seq__30622__$1 = cljs.core.next.call(null,seq__30622);
var map__30624 = first__30623;
var map__30624__$1 = (((((!((map__30624 == null))))?(((((map__30624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30624):map__30624);
var msg = map__30624__$1;
var msg_name = cljs.core.get.call(null,map__30624__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30622__$1;
var pred__30626 = cljs.core._EQ_;
var expr__30627 = msg_name;
if(cljs.core.truth_(pred__30626.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30627))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30626.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30627))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30618,map__30618__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto__,msg_hist,msg_names,msg){
return (function (state_30716){
var state_val_30717 = (state_30716[(1)]);
if((state_val_30717 === (7))){
var inst_30636 = (state_30716[(2)]);
var state_30716__$1 = state_30716;
if(cljs.core.truth_(inst_30636)){
var statearr_30718_30765 = state_30716__$1;
(statearr_30718_30765[(1)] = (8));

} else {
var statearr_30719_30766 = state_30716__$1;
(statearr_30719_30766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (20))){
var inst_30710 = (state_30716[(2)]);
var state_30716__$1 = state_30716;
var statearr_30720_30767 = state_30716__$1;
(statearr_30720_30767[(2)] = inst_30710);

(statearr_30720_30767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (27))){
var inst_30706 = (state_30716[(2)]);
var state_30716__$1 = state_30716;
var statearr_30721_30768 = state_30716__$1;
(statearr_30721_30768[(2)] = inst_30706);

(statearr_30721_30768[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (1))){
var inst_30629 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30716__$1 = state_30716;
if(cljs.core.truth_(inst_30629)){
var statearr_30722_30769 = state_30716__$1;
(statearr_30722_30769[(1)] = (2));

} else {
var statearr_30723_30770 = state_30716__$1;
(statearr_30723_30770[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (24))){
var inst_30708 = (state_30716[(2)]);
var state_30716__$1 = state_30716;
var statearr_30724_30771 = state_30716__$1;
(statearr_30724_30771[(2)] = inst_30708);

(statearr_30724_30771[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (4))){
var inst_30714 = (state_30716[(2)]);
var state_30716__$1 = state_30716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30716__$1,inst_30714);
} else {
if((state_val_30717 === (15))){
var inst_30712 = (state_30716[(2)]);
var state_30716__$1 = state_30716;
var statearr_30725_30772 = state_30716__$1;
(statearr_30725_30772[(2)] = inst_30712);

(statearr_30725_30772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (21))){
var inst_30665 = (state_30716[(2)]);
var inst_30666 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30667 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30666);
var state_30716__$1 = (function (){var statearr_30726 = state_30716;
(statearr_30726[(7)] = inst_30665);

return statearr_30726;
})();
var statearr_30727_30773 = state_30716__$1;
(statearr_30727_30773[(2)] = inst_30667);

(statearr_30727_30773[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (31))){
var inst_30695 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30716__$1 = state_30716;
if(inst_30695){
var statearr_30728_30774 = state_30716__$1;
(statearr_30728_30774[(1)] = (34));

} else {
var statearr_30729_30775 = state_30716__$1;
(statearr_30729_30775[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (32))){
var inst_30704 = (state_30716[(2)]);
var state_30716__$1 = state_30716;
var statearr_30730_30776 = state_30716__$1;
(statearr_30730_30776[(2)] = inst_30704);

(statearr_30730_30776[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (33))){
var inst_30691 = (state_30716[(2)]);
var inst_30692 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30693 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30692);
var state_30716__$1 = (function (){var statearr_30731 = state_30716;
(statearr_30731[(8)] = inst_30691);

return statearr_30731;
})();
var statearr_30732_30777 = state_30716__$1;
(statearr_30732_30777[(2)] = inst_30693);

(statearr_30732_30777[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (13))){
var inst_30650 = figwheel.client.heads_up.clear.call(null);
var state_30716__$1 = state_30716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30716__$1,(16),inst_30650);
} else {
if((state_val_30717 === (22))){
var inst_30671 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30672 = figwheel.client.heads_up.append_warning_message.call(null,inst_30671);
var state_30716__$1 = state_30716;
var statearr_30733_30778 = state_30716__$1;
(statearr_30733_30778[(2)] = inst_30672);

(statearr_30733_30778[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (36))){
var inst_30702 = (state_30716[(2)]);
var state_30716__$1 = state_30716;
var statearr_30734_30779 = state_30716__$1;
(statearr_30734_30779[(2)] = inst_30702);

(statearr_30734_30779[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (29))){
var inst_30682 = (state_30716[(2)]);
var inst_30683 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30684 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30683);
var state_30716__$1 = (function (){var statearr_30735 = state_30716;
(statearr_30735[(9)] = inst_30682);

return statearr_30735;
})();
var statearr_30736_30780 = state_30716__$1;
(statearr_30736_30780[(2)] = inst_30684);

(statearr_30736_30780[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (6))){
var inst_30631 = (state_30716[(10)]);
var state_30716__$1 = state_30716;
var statearr_30737_30781 = state_30716__$1;
(statearr_30737_30781[(2)] = inst_30631);

(statearr_30737_30781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (28))){
var inst_30678 = (state_30716[(2)]);
var inst_30679 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30680 = figwheel.client.heads_up.display_warning.call(null,inst_30679);
var state_30716__$1 = (function (){var statearr_30738 = state_30716;
(statearr_30738[(11)] = inst_30678);

return statearr_30738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30716__$1,(29),inst_30680);
} else {
if((state_val_30717 === (25))){
var inst_30676 = figwheel.client.heads_up.clear.call(null);
var state_30716__$1 = state_30716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30716__$1,(28),inst_30676);
} else {
if((state_val_30717 === (34))){
var inst_30697 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30716__$1 = state_30716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30716__$1,(37),inst_30697);
} else {
if((state_val_30717 === (17))){
var inst_30656 = (state_30716[(2)]);
var inst_30657 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30658 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30657);
var state_30716__$1 = (function (){var statearr_30739 = state_30716;
(statearr_30739[(12)] = inst_30656);

return statearr_30739;
})();
var statearr_30740_30782 = state_30716__$1;
(statearr_30740_30782[(2)] = inst_30658);

(statearr_30740_30782[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (3))){
var inst_30648 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30716__$1 = state_30716;
if(inst_30648){
var statearr_30741_30783 = state_30716__$1;
(statearr_30741_30783[(1)] = (13));

} else {
var statearr_30742_30784 = state_30716__$1;
(statearr_30742_30784[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (12))){
var inst_30644 = (state_30716[(2)]);
var state_30716__$1 = state_30716;
var statearr_30743_30785 = state_30716__$1;
(statearr_30743_30785[(2)] = inst_30644);

(statearr_30743_30785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (2))){
var inst_30631 = (state_30716[(10)]);
var inst_30631__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30716__$1 = (function (){var statearr_30744 = state_30716;
(statearr_30744[(10)] = inst_30631__$1);

return statearr_30744;
})();
if(cljs.core.truth_(inst_30631__$1)){
var statearr_30745_30786 = state_30716__$1;
(statearr_30745_30786[(1)] = (5));

} else {
var statearr_30746_30787 = state_30716__$1;
(statearr_30746_30787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (23))){
var inst_30674 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30716__$1 = state_30716;
if(inst_30674){
var statearr_30747_30788 = state_30716__$1;
(statearr_30747_30788[(1)] = (25));

} else {
var statearr_30748_30789 = state_30716__$1;
(statearr_30748_30789[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (35))){
var state_30716__$1 = state_30716;
var statearr_30749_30790 = state_30716__$1;
(statearr_30749_30790[(2)] = null);

(statearr_30749_30790[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (19))){
var inst_30669 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30716__$1 = state_30716;
if(inst_30669){
var statearr_30750_30791 = state_30716__$1;
(statearr_30750_30791[(1)] = (22));

} else {
var statearr_30751_30792 = state_30716__$1;
(statearr_30751_30792[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (11))){
var inst_30640 = (state_30716[(2)]);
var state_30716__$1 = state_30716;
var statearr_30752_30793 = state_30716__$1;
(statearr_30752_30793[(2)] = inst_30640);

(statearr_30752_30793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (9))){
var inst_30642 = figwheel.client.heads_up.clear.call(null);
var state_30716__$1 = state_30716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30716__$1,(12),inst_30642);
} else {
if((state_val_30717 === (5))){
var inst_30633 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30716__$1 = state_30716;
var statearr_30753_30794 = state_30716__$1;
(statearr_30753_30794[(2)] = inst_30633);

(statearr_30753_30794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (14))){
var inst_30660 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30716__$1 = state_30716;
if(inst_30660){
var statearr_30754_30795 = state_30716__$1;
(statearr_30754_30795[(1)] = (18));

} else {
var statearr_30755_30796 = state_30716__$1;
(statearr_30755_30796[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (26))){
var inst_30686 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30716__$1 = state_30716;
if(inst_30686){
var statearr_30756_30797 = state_30716__$1;
(statearr_30756_30797[(1)] = (30));

} else {
var statearr_30757_30798 = state_30716__$1;
(statearr_30757_30798[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (16))){
var inst_30652 = (state_30716[(2)]);
var inst_30653 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30654 = figwheel.client.heads_up.display_exception.call(null,inst_30653);
var state_30716__$1 = (function (){var statearr_30758 = state_30716;
(statearr_30758[(13)] = inst_30652);

return statearr_30758;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30716__$1,(17),inst_30654);
} else {
if((state_val_30717 === (30))){
var inst_30688 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30689 = figwheel.client.heads_up.display_warning.call(null,inst_30688);
var state_30716__$1 = state_30716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30716__$1,(33),inst_30689);
} else {
if((state_val_30717 === (10))){
var inst_30646 = (state_30716[(2)]);
var state_30716__$1 = state_30716;
var statearr_30759_30799 = state_30716__$1;
(statearr_30759_30799[(2)] = inst_30646);

(statearr_30759_30799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (18))){
var inst_30662 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30663 = figwheel.client.heads_up.display_exception.call(null,inst_30662);
var state_30716__$1 = state_30716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30716__$1,(21),inst_30663);
} else {
if((state_val_30717 === (37))){
var inst_30699 = (state_30716[(2)]);
var state_30716__$1 = state_30716;
var statearr_30760_30800 = state_30716__$1;
(statearr_30760_30800[(2)] = inst_30699);

(statearr_30760_30800[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (8))){
var inst_30638 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30716__$1 = state_30716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30716__$1,(11),inst_30638);
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
});})(c__26490__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26395__auto__,c__26490__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26396__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26396__auto____0 = (function (){
var statearr_30761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30761[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26396__auto__);

(statearr_30761[(1)] = (1));

return statearr_30761;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26396__auto____1 = (function (state_30716){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_30716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e30762){if((e30762 instanceof Object)){
var ex__26399__auto__ = e30762;
var statearr_30763_30801 = state_30716;
(statearr_30763_30801[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30802 = state_30716;
state_30716 = G__30802;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26396__auto__ = function(state_30716){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26396__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26396__auto____1.call(this,state_30716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26396__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26396__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto__,msg_hist,msg_names,msg))
})();
var state__26492__auto__ = (function (){var statearr_30764 = f__26491__auto__.call(null);
(statearr_30764[(6)] = c__26490__auto__);

return statearr_30764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto__,msg_hist,msg_names,msg))
);

return c__26490__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26490__auto___30831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___30831,ch){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___30831,ch){
return (function (state_30817){
var state_val_30818 = (state_30817[(1)]);
if((state_val_30818 === (1))){
var state_30817__$1 = state_30817;
var statearr_30819_30832 = state_30817__$1;
(statearr_30819_30832[(2)] = null);

(statearr_30819_30832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30818 === (2))){
var state_30817__$1 = state_30817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30817__$1,(4),ch);
} else {
if((state_val_30818 === (3))){
var inst_30815 = (state_30817[(2)]);
var state_30817__$1 = state_30817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30817__$1,inst_30815);
} else {
if((state_val_30818 === (4))){
var inst_30805 = (state_30817[(7)]);
var inst_30805__$1 = (state_30817[(2)]);
var state_30817__$1 = (function (){var statearr_30820 = state_30817;
(statearr_30820[(7)] = inst_30805__$1);

return statearr_30820;
})();
if(cljs.core.truth_(inst_30805__$1)){
var statearr_30821_30833 = state_30817__$1;
(statearr_30821_30833[(1)] = (5));

} else {
var statearr_30822_30834 = state_30817__$1;
(statearr_30822_30834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30818 === (5))){
var inst_30805 = (state_30817[(7)]);
var inst_30807 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30805);
var state_30817__$1 = state_30817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30817__$1,(8),inst_30807);
} else {
if((state_val_30818 === (6))){
var state_30817__$1 = state_30817;
var statearr_30823_30835 = state_30817__$1;
(statearr_30823_30835[(2)] = null);

(statearr_30823_30835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30818 === (7))){
var inst_30813 = (state_30817[(2)]);
var state_30817__$1 = state_30817;
var statearr_30824_30836 = state_30817__$1;
(statearr_30824_30836[(2)] = inst_30813);

(statearr_30824_30836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30818 === (8))){
var inst_30809 = (state_30817[(2)]);
var state_30817__$1 = (function (){var statearr_30825 = state_30817;
(statearr_30825[(8)] = inst_30809);

return statearr_30825;
})();
var statearr_30826_30837 = state_30817__$1;
(statearr_30826_30837[(2)] = null);

(statearr_30826_30837[(1)] = (2));


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
});})(c__26490__auto___30831,ch))
;
return ((function (switch__26395__auto__,c__26490__auto___30831,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26396__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26396__auto____0 = (function (){
var statearr_30827 = [null,null,null,null,null,null,null,null,null];
(statearr_30827[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26396__auto__);

(statearr_30827[(1)] = (1));

return statearr_30827;
});
var figwheel$client$heads_up_plugin_$_state_machine__26396__auto____1 = (function (state_30817){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_30817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e30828){if((e30828 instanceof Object)){
var ex__26399__auto__ = e30828;
var statearr_30829_30838 = state_30817;
(statearr_30829_30838[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30839 = state_30817;
state_30817 = G__30839;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26396__auto__ = function(state_30817){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26396__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26396__auto____1.call(this,state_30817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26396__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26396__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___30831,ch))
})();
var state__26492__auto__ = (function (){var statearr_30830 = f__26491__auto__.call(null);
(statearr_30830[(6)] = c__26490__auto___30831);

return statearr_30830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___30831,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto__){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto__){
return (function (state_30845){
var state_val_30846 = (state_30845[(1)]);
if((state_val_30846 === (1))){
var inst_30840 = cljs.core.async.timeout.call(null,(3000));
var state_30845__$1 = state_30845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30845__$1,(2),inst_30840);
} else {
if((state_val_30846 === (2))){
var inst_30842 = (state_30845[(2)]);
var inst_30843 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30845__$1 = (function (){var statearr_30847 = state_30845;
(statearr_30847[(7)] = inst_30842);

return statearr_30847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30845__$1,inst_30843);
} else {
return null;
}
}
});})(c__26490__auto__))
;
return ((function (switch__26395__auto__,c__26490__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26396__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26396__auto____0 = (function (){
var statearr_30848 = [null,null,null,null,null,null,null,null];
(statearr_30848[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26396__auto__);

(statearr_30848[(1)] = (1));

return statearr_30848;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26396__auto____1 = (function (state_30845){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_30845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e30849){if((e30849 instanceof Object)){
var ex__26399__auto__ = e30849;
var statearr_30850_30852 = state_30845;
(statearr_30850_30852[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30853 = state_30845;
state_30845 = G__30853;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26396__auto__ = function(state_30845){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26396__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26396__auto____1.call(this,state_30845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26396__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26396__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto__))
})();
var state__26492__auto__ = (function (){var statearr_30851 = f__26491__auto__.call(null);
(statearr_30851[(6)] = c__26490__auto__);

return statearr_30851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto__))
);

return c__26490__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto__,figwheel_version,temp__5720__auto__){
return (function (state_30860){
var state_val_30861 = (state_30860[(1)]);
if((state_val_30861 === (1))){
var inst_30854 = cljs.core.async.timeout.call(null,(2000));
var state_30860__$1 = state_30860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30860__$1,(2),inst_30854);
} else {
if((state_val_30861 === (2))){
var inst_30856 = (state_30860[(2)]);
var inst_30857 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30858 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30857);
var state_30860__$1 = (function (){var statearr_30862 = state_30860;
(statearr_30862[(7)] = inst_30856);

return statearr_30862;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30860__$1,inst_30858);
} else {
return null;
}
}
});})(c__26490__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__26395__auto__,c__26490__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26396__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26396__auto____0 = (function (){
var statearr_30863 = [null,null,null,null,null,null,null,null];
(statearr_30863[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26396__auto__);

(statearr_30863[(1)] = (1));

return statearr_30863;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26396__auto____1 = (function (state_30860){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_30860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e30864){if((e30864 instanceof Object)){
var ex__26399__auto__ = e30864;
var statearr_30865_30867 = state_30860;
(statearr_30865_30867[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30868 = state_30860;
state_30860 = G__30868;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26396__auto__ = function(state_30860){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26396__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26396__auto____1.call(this,state_30860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26396__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26396__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto__,figwheel_version,temp__5720__auto__))
})();
var state__26492__auto__ = (function (){var statearr_30866 = f__26491__auto__.call(null);
(statearr_30866[(6)] = c__26490__auto__);

return statearr_30866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto__,figwheel_version,temp__5720__auto__))
);

return c__26490__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30869){
var map__30870 = p__30869;
var map__30870__$1 = (((((!((map__30870 == null))))?(((((map__30870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30870):map__30870);
var file = cljs.core.get.call(null,map__30870__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30870__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30870__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30872 = "";
var G__30872__$1 = (cljs.core.truth_(file)?[G__30872,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30872);
var G__30872__$2 = (cljs.core.truth_(line)?[G__30872__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30872__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__30872__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30872__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30873){
var map__30874 = p__30873;
var map__30874__$1 = (((((!((map__30874 == null))))?(((((map__30874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30874):map__30874);
var ed = map__30874__$1;
var exception_data = cljs.core.get.call(null,map__30874__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30874__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30877 = (function (){var G__30876 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30876)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30876;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30877);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30878){
var map__30879 = p__30878;
var map__30879__$1 = (((((!((map__30879 == null))))?(((((map__30879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30879):map__30879);
var w = map__30879__$1;
var message = cljs.core.get.call(null,map__30879__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30881 = cljs.core.seq.call(null,plugins);
var chunk__30882 = null;
var count__30883 = (0);
var i__30884 = (0);
while(true){
if((i__30884 < count__30883)){
var vec__30891 = cljs.core._nth.call(null,chunk__30882,i__30884);
var k = cljs.core.nth.call(null,vec__30891,(0),null);
var plugin = cljs.core.nth.call(null,vec__30891,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30897 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30881,chunk__30882,count__30883,i__30884,pl_30897,vec__30891,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30897.call(null,msg_hist);
});})(seq__30881,chunk__30882,count__30883,i__30884,pl_30897,vec__30891,k,plugin))
);
} else {
}


var G__30898 = seq__30881;
var G__30899 = chunk__30882;
var G__30900 = count__30883;
var G__30901 = (i__30884 + (1));
seq__30881 = G__30898;
chunk__30882 = G__30899;
count__30883 = G__30900;
i__30884 = G__30901;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30881);
if(temp__5720__auto__){
var seq__30881__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30881__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30881__$1);
var G__30902 = cljs.core.chunk_rest.call(null,seq__30881__$1);
var G__30903 = c__4550__auto__;
var G__30904 = cljs.core.count.call(null,c__4550__auto__);
var G__30905 = (0);
seq__30881 = G__30902;
chunk__30882 = G__30903;
count__30883 = G__30904;
i__30884 = G__30905;
continue;
} else {
var vec__30894 = cljs.core.first.call(null,seq__30881__$1);
var k = cljs.core.nth.call(null,vec__30894,(0),null);
var plugin = cljs.core.nth.call(null,vec__30894,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30906 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30881,chunk__30882,count__30883,i__30884,pl_30906,vec__30894,k,plugin,seq__30881__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30906.call(null,msg_hist);
});})(seq__30881,chunk__30882,count__30883,i__30884,pl_30906,vec__30894,k,plugin,seq__30881__$1,temp__5720__auto__))
);
} else {
}


var G__30907 = cljs.core.next.call(null,seq__30881__$1);
var G__30908 = null;
var G__30909 = (0);
var G__30910 = (0);
seq__30881 = G__30907;
chunk__30882 = G__30908;
count__30883 = G__30909;
i__30884 = G__30910;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30912 = arguments.length;
switch (G__30912) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30913_30918 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30914_30919 = null;
var count__30915_30920 = (0);
var i__30916_30921 = (0);
while(true){
if((i__30916_30921 < count__30915_30920)){
var msg_30922 = cljs.core._nth.call(null,chunk__30914_30919,i__30916_30921);
figwheel.client.socket.handle_incoming_message.call(null,msg_30922);


var G__30923 = seq__30913_30918;
var G__30924 = chunk__30914_30919;
var G__30925 = count__30915_30920;
var G__30926 = (i__30916_30921 + (1));
seq__30913_30918 = G__30923;
chunk__30914_30919 = G__30924;
count__30915_30920 = G__30925;
i__30916_30921 = G__30926;
continue;
} else {
var temp__5720__auto___30927 = cljs.core.seq.call(null,seq__30913_30918);
if(temp__5720__auto___30927){
var seq__30913_30928__$1 = temp__5720__auto___30927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30913_30928__$1)){
var c__4550__auto___30929 = cljs.core.chunk_first.call(null,seq__30913_30928__$1);
var G__30930 = cljs.core.chunk_rest.call(null,seq__30913_30928__$1);
var G__30931 = c__4550__auto___30929;
var G__30932 = cljs.core.count.call(null,c__4550__auto___30929);
var G__30933 = (0);
seq__30913_30918 = G__30930;
chunk__30914_30919 = G__30931;
count__30915_30920 = G__30932;
i__30916_30921 = G__30933;
continue;
} else {
var msg_30934 = cljs.core.first.call(null,seq__30913_30928__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30934);


var G__30935 = cljs.core.next.call(null,seq__30913_30928__$1);
var G__30936 = null;
var G__30937 = (0);
var G__30938 = (0);
seq__30913_30918 = G__30935;
chunk__30914_30919 = G__30936;
count__30915_30920 = G__30937;
i__30916_30921 = G__30938;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30943 = arguments.length;
var i__4731__auto___30944 = (0);
while(true){
if((i__4731__auto___30944 < len__4730__auto___30943)){
args__4736__auto__.push((arguments[i__4731__auto___30944]));

var G__30945 = (i__4731__auto___30944 + (1));
i__4731__auto___30944 = G__30945;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30940){
var map__30941 = p__30940;
var map__30941__$1 = (((((!((map__30941 == null))))?(((((map__30941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30941):map__30941);
var opts = map__30941__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30939){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30939));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30946){if((e30946 instanceof Error)){
var e = e30946;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30946;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30947){
var map__30948 = p__30947;
var map__30948__$1 = (((((!((map__30948 == null))))?(((((map__30948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30948):map__30948);
var msg_name = cljs.core.get.call(null,map__30948__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1620419393664
