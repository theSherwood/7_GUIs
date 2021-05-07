// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojurescript_reagent.circle');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojurescript_reagent.components.card');
clojurescript_reagent.circle.BASE_RADIUS = (30);
clojurescript_reagent.circle.overlay = (function clojurescript_reagent$circle$overlay(p__21454){
var map__21455 = p__21454;
var map__21455__$1 = (((((!((map__21455 == null))))?(((((map__21455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21455):map__21455);
var end_resize = cljs.core.get.call(null,map__21455__$1,new cljs.core.Keyword(null,"end-resize","end-resize",-863404732));
var _STAR_resizing = cljs.core.get.call(null,map__21455__$1,new cljs.core.Keyword(null,"*resizing","*resizing",1638765572));
var _STAR_radius = cljs.core.get.call(null,map__21455__$1,new cljs.core.Keyword(null,"*radius","*radius",-638741800));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"overlay",new cljs.core.Keyword(null,"on-click","on-click",1632826543),end_resize], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"resizer"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Adjust radius of circle at ",new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_resizing)),", ",new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_resizing))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref.call(null,_STAR_radius)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,_STAR_radius),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__21455,map__21455__$1,end_resize,_STAR_resizing,_STAR_radius){
return (function (e){
return cljs.core.reset_BANG_.call(null,_STAR_radius,Number(e.target.value));
});})(map__21455,map__21455__$1,end_resize,_STAR_resizing,_STAR_radius))
], null)], null)], null)], null);
});
clojurescript_reagent.circle.circle_svg = (function clojurescript_reagent$circle$circle_svg(cir,handle_right_click){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cir),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cir),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(cir),new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return e.stopPropagation();
}),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),handle_right_click], null)], null);
});
clojurescript_reagent.circle.main = (function clojurescript_reagent$circle$main(){
var with_let21474 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let21474","with-let21474",1738806982));
var temp__5724__auto___21480 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___21480 == null)){
} else {
var c__21087__auto___21481 = temp__5724__auto___21480;
if((with_let21474.generation === c__21087__auto___21481.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let21474.generation = c__21087__auto___21481.ratomGeneration;
}


var init21475 = (with_let21474.length === (0));
var _STAR_step = ((init21475)?(with_let21474[(0)] = reagent.core.atom.call(null,(0))):(with_let21474[(0)]));
var _STAR_snapshots = ((init21475)?(with_let21474[(1)] = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null))):(with_let21474[(1)]));
var _STAR_radius = ((init21475)?(with_let21474[(2)] = reagent.core.atom.call(null,clojurescript_reagent.circle.BASE_RADIUS)):(with_let21474[(2)]));
var _STAR_resizing = ((init21475)?(with_let21474[(3)] = reagent.core.atom.call(null,false)):(with_let21474[(3)]));
var _STAR_present = ((init21475)?(with_let21474[(4)] = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY)):(with_let21474[(4)]));
var handle_resize = ((init21475)?(with_let21474[(5)] = ((function (init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,with_let21474){
return (function clojurescript_reagent$circle$main_$_handle_resize(resizing,radius){
var and__4120__auto__ = resizing;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.reset_BANG_.call(null,_STAR_present,cljs.core.mapv.call(null,((function (and__4120__auto__,init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,with_let21474){
return (function (p1__21457_SHARP_){
if(((cljs.core._EQ_.call(null,p1__21457_SHARP_.call(null,new cljs.core.Keyword(null,"x","x",2099068185)),resizing.call(null,new cljs.core.Keyword(null,"x","x",2099068185)))) && (cljs.core._EQ_.call(null,p1__21457_SHARP_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)),resizing.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)))))){
return cljs.core.assoc.call(null,p1__21457_SHARP_,new cljs.core.Keyword(null,"r","r",-471384190),radius);
} else {
return p1__21457_SHARP_;
}
});})(and__4120__auto__,init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,with_let21474))
,cljs.core.deref.call(null,_STAR_present)));
} else {
return and__4120__auto__;
}
});})(init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,with_let21474))
):(with_let21474[(5)]));
var _ = ((init21475)?(with_let21474[(6)] = cljs.core.add_watch.call(null,_STAR_resizing,new cljs.core.Keyword(null,"resize","resize",297367086),((function (init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,with_let21474){
return (function (p1__21459_SHARP_,p2__21460_SHARP_,p3__21461_SHARP_,p4__21458_SHARP_){
return handle_resize.call(null,p4__21458_SHARP_,cljs.core.deref.call(null,_STAR_radius));
});})(init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,with_let21474))
)):(with_let21474[(6)]));
var ___$1 = ((init21475)?(with_let21474[(7)] = cljs.core.add_watch.call(null,_STAR_radius,new cljs.core.Keyword(null,"resize","resize",297367086),((function (init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,with_let21474){
return (function (p1__21463_SHARP_,p2__21464_SHARP_,p3__21465_SHARP_,p4__21462_SHARP_){
return handle_resize.call(null,cljs.core.deref.call(null,_STAR_resizing),p4__21462_SHARP_);
});})(init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,with_let21474))
)):(with_let21474[(7)]));
var ___$2 = ((init21475)?(with_let21474[(8)] = cljs.core.add_watch.call(null,_STAR_snapshots,new cljs.core.Keyword(null,"update-present","update-present",-205761498),((function (init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,with_let21474){
return (function (p1__21467_SHARP_,p2__21468_SHARP_,p3__21469_SHARP_,p4__21466_SHARP_){
return cljs.core.reset_BANG_.call(null,_STAR_present,p4__21466_SHARP_.call(null,(cljs.core.deref.call(null,_STAR_step) + (1))));
});})(init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,with_let21474))
)):(with_let21474[(8)]));
var ___$3 = ((init21475)?(with_let21474[(9)] = cljs.core.add_watch.call(null,_STAR_step,new cljs.core.Keyword(null,"update-present","update-present",-205761498),((function (init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,with_let21474){
return (function (p1__21471_SHARP_,p2__21472_SHARP_,p3__21473_SHARP_,p4__21470_SHARP_){
return cljs.core.reset_BANG_.call(null,_STAR_present,cljs.core.deref.call(null,_STAR_snapshots).call(null,p4__21470_SHARP_));
});})(init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,with_let21474))
)):(with_let21474[(9)]));
var handle_right_click = ((init21475)?(with_let21474[(10)] = ((function (init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,___$3,with_let21474){
return (function clojurescript_reagent$circle$main_$_handle_right_click(e){
e.preventDefault();

e.stopPropagation();

var circle = e.target;
cljs.core.reset_BANG_.call(null,_STAR_resizing,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),circle.cx.baseVal.value,new cljs.core.Keyword(null,"y","y",-1757859776),circle.cy.baseVal.value,new cljs.core.Keyword(null,"r","r",-471384190),circle.r.baseVal.value], null));

return cljs.core.reset_BANG_.call(null,_STAR_radius,circle.r.baseVal.value);
});})(init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,___$3,with_let21474))
):(with_let21474[(10)]));
var add_snapshot = ((init21475)?(with_let21474[(11)] = ((function (init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,___$3,handle_right_click,with_let21474){
return (function clojurescript_reagent$circle$main_$_add_snapshot(new_snapshot){
cljs.core.reset_BANG_.call(null,_STAR_snapshots,cljs.core.conj.call(null,cljs.core.subvec.call(null,cljs.core.deref.call(null,_STAR_snapshots),(0),(cljs.core.deref.call(null,_STAR_step) + (1))),new_snapshot));

return cljs.core.swap_BANG_.call(null,_STAR_step,cljs.core.inc);
});})(init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,___$3,handle_right_click,with_let21474))
):(with_let21474[(11)]));
var add_circle = ((init21475)?(with_let21474[(12)] = ((function (init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,___$3,handle_right_click,add_snapshot,with_let21474){
return (function clojurescript_reagent$circle$main_$_add_circle(e){
var x = e.nativeEvent.layerX;
var y = e.nativeEvent.layerY;
return add_snapshot.call(null,cljs.core.conj.call(null,cljs.core.deref.call(null,_STAR_snapshots).call(null,cljs.core.deref.call(null,_STAR_step)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),clojurescript_reagent.circle.BASE_RADIUS], null)));
});})(init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,___$3,handle_right_click,add_snapshot,with_let21474))
):(with_let21474[(12)]));
var undo = ((init21475)?(with_let21474[(13)] = ((function (init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,___$3,handle_right_click,add_snapshot,add_circle,with_let21474){
return (function clojurescript_reagent$circle$main_$_undo(){
return cljs.core.reset_BANG_.call(null,_STAR_step,(function (){var x__4219__auto__ = (cljs.core.deref.call(null,_STAR_step) - (1));
var y__4220__auto__ = (0);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
});})(init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,___$3,handle_right_click,add_snapshot,add_circle,with_let21474))
):(with_let21474[(13)]));
var redo = ((init21475)?(with_let21474[(14)] = ((function (init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,___$3,handle_right_click,add_snapshot,add_circle,undo,with_let21474){
return (function clojurescript_reagent$circle$main_$_redo(){
return cljs.core.reset_BANG_.call(null,_STAR_step,(function (){var x__4222__auto__ = (cljs.core.deref.call(null,_STAR_step) + (1));
var y__4223__auto__ = (cljs.core.count.call(null,cljs.core.deref.call(null,_STAR_snapshots)) - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})());
});})(init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,___$3,handle_right_click,add_snapshot,add_circle,undo,with_let21474))
):(with_let21474[(14)]));
var end_resize = ((init21475)?(with_let21474[(15)] = ((function (init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,___$3,handle_right_click,add_snapshot,add_circle,undo,redo,with_let21474){
return (function clojurescript_reagent$circle$main_$_end_resize(){
var and__4120__auto___21482 = cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,_STAR_radius),cljs.core.deref.call(null,_STAR_resizing).call(null,new cljs.core.Keyword(null,"r","r",-471384190)));
if(and__4120__auto___21482){
cljs.core.reset_BANG_.call(null,_STAR_resizing,false);

add_snapshot.call(null,cljs.core.deref.call(null,_STAR_present));

cljs.core.reset_BANG_.call(null,_STAR_radius,clojurescript_reagent.circle.BASE_RADIUS);
} else {
}

return cljs.core.reset_BANG_.call(null,_STAR_resizing,false);
});})(init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,___$3,handle_right_click,add_snapshot,add_circle,undo,redo,with_let21474))
):(with_let21474[(15)]));
var res__21088__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.components.card.main,"Circle Drawer",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"wrapper"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"buttons"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),undo,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.call(null,cljs.core.deref.call(null,_STAR_step),(0))], null),"Undo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),redo,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.call(null,cljs.core.deref.call(null,_STAR_step),(cljs.core.count.call(null,cljs.core.deref.call(null,_STAR_snapshots)) - (1)))], null),"Redo"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"canvas"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),add_circle], null),cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,___$3,handle_right_click,add_snapshot,add_circle,undo,redo,end_resize,with_let21474){
return (function clojurescript_reagent$circle$main_$_iter__21476(s__21477){
return (new cljs.core.LazySeq(null,((function (init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,___$3,handle_right_click,add_snapshot,add_circle,undo,redo,end_resize,with_let21474){
return (function (){
var s__21477__$1 = s__21477;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__21477__$1);
if(temp__5720__auto__){
var s__21477__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21477__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__21477__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__21479 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__21478 = (0);
while(true){
if((i__21478 < size__4522__auto__)){
var cir = cljs.core._nth.call(null,c__4521__auto__,i__21478);
cljs.core.chunk_append.call(null,b__21479,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.circle.circle_svg,cir,handle_right_click], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cir)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cir))].join('')], null)));

var G__21483 = (i__21478 + (1));
i__21478 = G__21483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21479),clojurescript_reagent$circle$main_$_iter__21476.call(null,cljs.core.chunk_rest.call(null,s__21477__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21479),null);
}
} else {
var cir = cljs.core.first.call(null,s__21477__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.circle.circle_svg,cir,handle_right_click], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cir)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cir))].join('')], null)),clojurescript_reagent$circle$main_$_iter__21476.call(null,cljs.core.rest.call(null,s__21477__$2)));
}
} else {
return null;
}
break;
}
});})(init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,___$3,handle_right_click,add_snapshot,add_circle,undo,redo,end_resize,with_let21474))
,null,null));
});})(init21475,_STAR_step,_STAR_snapshots,_STAR_radius,_STAR_resizing,_STAR_present,handle_resize,_,___$1,___$2,___$3,handle_right_click,add_snapshot,add_circle,undo,redo,end_resize,with_let21474))
;
return iter__4523__auto__.call(null,cljs.core.deref.call(null,_STAR_present));
})())], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,_STAR_resizing))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.circle.overlay,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"end-resize","end-resize",-863404732),end_resize,new cljs.core.Keyword(null,"*radius","*radius",-638741800),_STAR_radius,new cljs.core.Keyword(null,"*resizing","*resizing",1638765572),_STAR_resizing], null)], null):null)], null)], null);

return res__21088__auto__;
});

//# sourceMappingURL=circle.js.map?rel=1620419386973
