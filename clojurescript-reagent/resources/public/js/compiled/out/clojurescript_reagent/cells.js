// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojurescript_reagent.cells');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojurescript_reagent.components.card');
goog.require('clojurescript_reagent.cells.parse');
clojurescript_reagent.cells.LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
clojurescript_reagent.cells.as_base_26 = (function clojurescript_reagent$cells$as_base_26(n){
var n__$1 = n;
var result = cljs.core.List.EMPTY;
while(true){
if((n__$1 > (25))){
var G__21577 = (Math.floor((n__$1 / (26))) - (1));
var G__21578 = cljs.core.cons.call(null,cljs.core.mod.call(null,n__$1,(26)),result);
n__$1 = G__21577;
result = G__21578;
continue;
} else {
return cljs.core.cons.call(null,n__$1,result);
}
break;
}
});
clojurescript_reagent.cells.number_as_letters = (function clojurescript_reagent$cells$number_as_letters(n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__21579_SHARP_){
return cljs.core.get.call(null,clojurescript_reagent.cells.LETTERS,p1__21579_SHARP_);
}),clojurescript_reagent.cells.as_base_26.call(null,n)));
});
clojurescript_reagent.cells.letter_range = (function clojurescript_reagent$cells$letter_range(n){
return cljs.core.map.call(null,clojurescript_reagent.cells.number_as_letters,cljs.core.range.call(null,n));
});
clojurescript_reagent.cells.find_adjacent = (function clojurescript_reagent$cells$find_adjacent(vec,value,direction){
var idx = vec.indexOf(value);
if(cljs.core._EQ_.call(null,idx,(-1))){
return null;
} else {
if(cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"before","before",-1633692388))){
return cljs.core.nth.call(null,vec,(idx - (1)),null);
} else {
if(cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"after","after",594996914))){
return cljs.core.nth.call(null,vec,(idx + (1)),null);
} else {
return null;

}
}
}
});
clojurescript_reagent.cells.compute_cell_value = (function clojurescript_reagent$cells$compute_cell_value(cell,cell_data,_STAR_cell_cache){
var temp__5720__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cell);
if(cljs.core.truth_(temp__5720__auto__)){
var type = temp__5720__auto__;
var G__21580 = type;
var G__21580__$1 = (((G__21580 instanceof cljs.core.Keyword))?G__21580.fqn:null);
switch (G__21580__$1) {
case "string":
return new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(cell);

break;
case "cell":
return cljs.core.first.call(null,clojurescript_reagent.cells.resolve_cells.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084).cljs$core$IFn$_invoke$arity$1(cell)], null),cell_data,_STAR_cell_cache));

break;
case "op":
var op = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cell);
return cljs.core.reduce.call(null,op,cljs.core.map.call(null,Number,clojurescript_reagent.cells.resolve_cells.call(null,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(cell),cell_data,_STAR_cell_cache)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21580__$1)].join('')));

}
} else {
return null;
}
});
clojurescript_reagent.cells.resolve_cells = (function clojurescript_reagent$cells$resolve_cells(cell_ids,cell_data,_STAR_cell_cache){
var cell_cache = cljs.core.deref.call(null,_STAR_cell_cache);
return cljs.core.reduce.call(null,((function (cell_cache){
return (function (acc,cell_id){
var temp__5718__auto__ = cell_cache.call(null,cell_id);
if(cljs.core.truth_(temp__5718__auto__)){
var cell_value = temp__5718__auto__;
return cljs.core.conj.call(null,acc,cell_value);
} else {
var cell_value = clojurescript_reagent.cells.compute_cell_value.call(null,cell_data.call(null,cell_id),cell_data,_STAR_cell_cache);
cljs.core.swap_BANG_.call(null,_STAR_cell_cache,cljs.core.assoc,cell_id,cell_value);

return cljs.core.conj.call(null,acc,cell_value);
}
});})(cell_cache))
,cljs.core.PersistentVector.EMPTY,cell_ids);
});
clojurescript_reagent.cells.head = (function clojurescript_reagent$cells$head(columns){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row-key"], null)], null)], null),cljs.core.map.call(null,(function (column){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column-key"], null),column], null);
}),columns))], null);
});
clojurescript_reagent.cells.input = (function clojurescript_reagent$cells$input(p__21584){
var map__21585 = p__21584;
var map__21585__$1 = (((((!((map__21585 == null))))?(((((map__21585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21585):map__21585);
var c = cljs.core.get.call(null,map__21585__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var r = cljs.core.get.call(null,map__21585__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var _STAR_focused = cljs.core.get.call(null,map__21585__$1,new cljs.core.Keyword(null,"*focused","*focused",-419124886));
var _STAR_cell = cljs.core.get.call(null,map__21585__$1,new cljs.core.Keyword(null,"*cell","*cell",1996278553));
var handle_change = cljs.core.get.call(null,map__21585__$1,new cljs.core.Keyword(null,"handle-change","handle-change",741134083));
var handle_key_down = cljs.core.get.call(null,map__21585__$1,new cljs.core.Keyword(null,"handle-key-down","handle-key-down",-1169062771));
var cell = cljs.core.deref.call(null,_STAR_cell);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(cell);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (cell,map__21585,map__21585__$1,c,r,_STAR_focused,_STAR_cell,handle_change,handle_key_down){
return (function (p1__21582_SHARP_){
return handle_change.call(null,p1__21582_SHARP_,_STAR_cell);
});})(cell,map__21585,map__21585__$1,c,r,_STAR_focused,_STAR_cell,handle_change,handle_key_down))
,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (cell,map__21585,map__21585__$1,c,r,_STAR_focused,_STAR_cell,handle_change,handle_key_down){
return (function (){
return cljs.core.reset_BANG_.call(null,_STAR_focused,true);
});})(cell,map__21585,map__21585__$1,c,r,_STAR_focused,_STAR_cell,handle_change,handle_key_down))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (cell,map__21585,map__21585__$1,c,r,_STAR_focused,_STAR_cell,handle_change,handle_key_down){
return (function (p1__21583_SHARP_){
return handle_key_down.call(null,p1__21583_SHARP_,c,r);
});})(cell,map__21585,map__21585__$1,c,r,_STAR_focused,_STAR_cell,handle_change,handle_key_down))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (cell,map__21585,map__21585__$1,c,r,_STAR_focused,_STAR_cell,handle_change,handle_key_down){
return (function (){
return cljs.core.reset_BANG_.call(null,_STAR_focused,false);
});})(cell,map__21585,map__21585__$1,c,r,_STAR_focused,_STAR_cell,handle_change,handle_key_down))
], null)], null);
});
clojurescript_reagent.cells.computed_string = (function clojurescript_reagent$cells$computed_string(cell,_STAR_cell_data,_STAR_cell_cache){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojurescript_reagent.cells.compute_cell_value.call(null,cell,cljs.core.deref.call(null,_STAR_cell_data),_STAR_cell_cache));
});
clojurescript_reagent.cells.cell_view = (function clojurescript_reagent$cells$cell_view(p__21587){
var map__21588 = p__21587;
var map__21588__$1 = (((((!((map__21588 == null))))?(((((map__21588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21588):map__21588);
var props = map__21588__$1;
var c = cljs.core.get.call(null,map__21588__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var r = cljs.core.get.call(null,map__21588__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var _STAR_cell_data = cljs.core.get.call(null,map__21588__$1,new cljs.core.Keyword(null,"*cell-data","*cell-data",368605562));
var _STAR_cell_cache = cljs.core.get.call(null,map__21588__$1,new cljs.core.Keyword(null,"*cell-cache","*cell-cache",1674045906));
var _STAR_t_body = cljs.core.get.call(null,map__21588__$1,new cljs.core.Keyword(null,"*t-body","*t-body",1738653109));
var with_let21590 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let21590","with-let21590",-1979860237));
var temp__5724__auto___21592 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___21592 == null)){
} else {
var c__21087__auto___21593 = temp__5724__auto___21592;
if((with_let21590.generation === c__21087__auto___21593.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let21590.generation = c__21087__auto___21593.ratomGeneration;
}


var init21591 = (with_let21590.length === (0));
var cell_id = ((init21591)?(with_let21590[(0)] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('')):(with_let21590[(0)]));
var input_id = ((init21591)?(with_let21590[(1)] = ["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('')):(with_let21590[(1)]));
var _STAR_focused = ((init21591)?(with_let21590[(2)] = reagent.core.atom.call(null,false)):(with_let21590[(2)]));
var _ = ((init21591)?(with_let21590[(3)] = cljs.core.add_watch.call(null,_STAR_focused,new cljs.core.Keyword(null,"set-selection","set-selection",674035524),((function (init21591,cell_id,input_id,_STAR_focused,with_let21590,map__21588,map__21588__$1,props,c,r,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body){
return (function (_,___$1,o,n){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,o);
if(and__4120__auto__){
return n;
} else {
return and__4120__auto__;
}
})())){
return setTimeout(((function (init21591,cell_id,input_id,_STAR_focused,with_let21590,map__21588,map__21588__$1,props,c,r,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body){
return (function (){
var temp__5720__auto__ = cljs.core.deref.call(null,_STAR_t_body).querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_id)].join(''));
if(cljs.core.truth_(temp__5720__auto__)){
var target_input = temp__5720__auto__;
return target_input.setSelectionRange((0),(99999));
} else {
return null;
}
});})(init21591,cell_id,input_id,_STAR_focused,with_let21590,map__21588,map__21588__$1,props,c,r,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body))
,(20));
} else {
return null;
}
});})(init21591,cell_id,input_id,_STAR_focused,with_let21590,map__21588,map__21588__$1,props,c,r,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body))
)):(with_let21590[(3)]));
var _STAR_cell = ((init21591)?(with_let21590[(4)] = reagent.core.cursor.call(null,_STAR_cell_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_id], null))):(with_let21590[(4)]));
var res__21088__auto__ = (function (){var cell = cljs.core.deref.call(null,_STAR_cell);
var string_type_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$2(cell,new cljs.core.Keyword(null,"string","string",-1989541586)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cell_id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cell,string_type_QMARK_,init21591,cell_id,input_id,_STAR_focused,_,_STAR_cell,with_let21590,map__21588,map__21588__$1,props,c,r,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body){
return (function (){
return cljs.core.reset_BANG_.call(null,_STAR_focused,true);
});})(cell,string_type_QMARK_,init21591,cell_id,input_id,_STAR_focused,_,_STAR_cell,with_let21590,map__21588,map__21588__$1,props,c,r,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body))
], null),(cljs.core.truth_(cljs.core.deref.call(null,_STAR_focused))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.cells.input,cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"*cell","*cell",1996278553),_STAR_cell,new cljs.core.Keyword(null,"*focused","*focused",-419124886),_STAR_focused], null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),input_id,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (cell,string_type_QMARK_,init21591,cell_id,input_id,_STAR_focused,_,_STAR_cell,with_let21590,map__21588,map__21588__$1,props,c,r,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body){
return (function (){
return cljs.core.reset_BANG_.call(null,_STAR_focused,true);
});})(cell,string_type_QMARK_,init21591,cell_id,input_id,_STAR_focused,_,_STAR_cell,with_let21590,map__21588,map__21588__$1,props,c,r,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body))
], null),((string_type_QMARK_)?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(cell):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.cells.computed_string,cell,_STAR_cell_data,_STAR_cell_cache], null))], null))], null);
})();

return res__21088__auto__;
});
clojurescript_reagent.cells.main = (function clojurescript_reagent$cells$main(p__21595){
var map__21596 = p__21595;
var map__21596__$1 = (((((!((map__21596 == null))))?(((((map__21596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21596):map__21596);
var shape = cljs.core.get.call(null,map__21596__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null));
var cell_data = cljs.core.get.call(null,map__21596__$1,new cljs.core.Keyword(null,"cell-data","cell-data",-141183646),cljs.core.PersistentArrayMap.EMPTY);
var with_let21598 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let21598","with-let21598",-1893281748));
var temp__5724__auto___21616 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___21616 == null)){
} else {
var c__21087__auto___21617 = temp__5724__auto___21616;
if((with_let21598.generation === c__21087__auto___21617.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let21598.generation = c__21087__auto___21617.ratomGeneration;
}


var init21599 = (with_let21598.length === (0));
var rows = ((init21599)?(with_let21598[(0)] = cljs.core.mapv.call(null,cljs.core.str,cljs.core.range.call(null,cljs.core.first.call(null,shape)))):(with_let21598[(0)]));
var columns = ((init21599)?(with_let21598[(1)] = cljs.core.vec.call(null,clojurescript_reagent.cells.letter_range.call(null,cljs.core.second.call(null,shape)))):(with_let21598[(1)]));
var _STAR_cell_data = ((init21599)?(with_let21598[(2)] = reagent.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (init21599,rows,columns,with_let21598,map__21596,map__21596__$1,shape,cell_data){
return (function (p__21600){
var vec__21601 = p__21600;
var k = cljs.core.nth.call(null,vec__21601,(0),null);
var v = cljs.core.nth.call(null,vec__21601,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clojurescript_reagent.cells.parse.parse_string.call(null,v,rows,columns)], null);
});})(init21599,rows,columns,with_let21598,map__21596,map__21596__$1,shape,cell_data))
,cell_data)))):(with_let21598[(2)]));
var _STAR_cell_cache = ((init21599)?(with_let21598[(3)] = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)):(with_let21598[(3)]));
var _STAR_t_body = ((init21599)?(with_let21598[(4)] = cljs.core.atom.call(null,null)):(with_let21598[(4)]));
var handle_change = ((init21599)?(with_let21598[(5)] = ((function (init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,with_let21598,map__21596,map__21596__$1,shape,cell_data){
return (function clojurescript_reagent$cells$main_$_handle_change(e,_STAR_cell){
cljs.core.reset_BANG_.call(null,_STAR_cell_cache,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.reset_BANG_.call(null,_STAR_cell,clojurescript_reagent.cells.parse.parse_string.call(null,e.target.value,rows,columns));
});})(init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,with_let21598,map__21596,map__21596__$1,shape,cell_data))
):(with_let21598[(5)]));
var handle_key_down = ((init21599)?(with_let21598[(6)] = ((function (init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,with_let21598,map__21596,map__21596__$1,shape,cell_data){
return (function clojurescript_reagent$cells$main_$_handle_key_down(e,c,r){
var selector = ((cljs.core._EQ_.call(null,e.key,"ArrowUp"))?(function (){var new_row = clojurescript_reagent.cells.find_adjacent.call(null,rows,r,new cljs.core.Keyword(null,"before","before",-1633692388));
if((new_row == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_row)].join('');
}
})():((cljs.core.not_EQ_.call(null,(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ArrowDown","Enter"], null).indexOf(e.key)))?(function (){var new_row = clojurescript_reagent.cells.find_adjacent.call(null,rows,r,new cljs.core.Keyword(null,"after","after",594996914));
if((new_row == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_row)].join('');
}
})():(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,e.key,"ArrowLeft");
if(and__4120__auto__){
return e.altKey;
} else {
return and__4120__auto__;
}
})())?(function (){var new_column = clojurescript_reagent.cells.find_adjacent.call(null,columns,c,new cljs.core.Keyword(null,"before","before",-1633692388));
if((new_column == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_column),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
}
})():(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,e.key,"ArrowRight");
if(and__4120__auto__){
return e.altKey;
} else {
return and__4120__auto__;
}
})())?(function (){var new_column = clojurescript_reagent.cells.find_adjacent.call(null,columns,c,new cljs.core.Keyword(null,"after","after",594996914));
if((new_column == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_column),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
}
})():null))));
if(cljs.core.truth_(selector)){
e.preventDefault();

return cljs.core.deref.call(null,_STAR_t_body).querySelector(["#cell-",selector].join('')).focus();
} else {
return null;
}
});})(init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,with_let21598,map__21596,map__21596__$1,shape,cell_data))
):(with_let21598[(6)]));
var clear = ((init21599)?(with_let21598[(7)] = ((function (init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,handle_key_down,with_let21598,map__21596,map__21596__$1,shape,cell_data){
return (function clojurescript_reagent$cells$main_$_clear(){
return cljs.core.reset_BANG_.call(null,_STAR_cell_data,cljs.core.PersistentArrayMap.EMPTY);
});})(init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,handle_key_down,with_let21598,map__21596,map__21596__$1,shape,cell_data))
):(with_let21598[(7)]));
var res__21088__auto__ = (function (){var props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"handle-change","handle-change",741134083),handle_change,new cljs.core.Keyword(null,"handle-key-down","handle-key-down",-1169062771),handle_key_down,new cljs.core.Keyword(null,"*cell-data","*cell-data",368605562),_STAR_cell_data,new cljs.core.Keyword(null,"*cell-cache","*cell-cache",1674045906),_STAR_cell_cache,new cljs.core.Keyword(null,"*t-body","*t-body",1738653109),_STAR_t_body], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.components.card.main,"Cells",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"wrapper"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.cells.head,columns], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (props,init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,handle_key_down,clear,with_let21598,map__21596,map__21596__$1,shape,cell_data){
return (function (p1__21594_SHARP_){
return cljs.core.reset_BANG_.call(null,_STAR_t_body,p1__21594_SHARP_);
});})(props,init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,handle_key_down,clear,with_let21598,map__21596,map__21596__$1,shape,cell_data))
], null),cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (props,init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,handle_key_down,clear,with_let21598,map__21596,map__21596__$1,shape,cell_data){
return (function clojurescript_reagent$cells$main_$_iter__21604(s__21605){
return (new cljs.core.LazySeq(null,((function (props,init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,handle_key_down,clear,with_let21598,map__21596,map__21596__$1,shape,cell_data){
return (function (){
var s__21605__$1 = s__21605;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__21605__$1);
if(temp__5720__auto__){
var s__21605__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21605__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__21605__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__21607 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__21606 = (0);
while(true){
if((i__21606 < size__4522__auto__)){
var r = cljs.core._nth.call(null,c__4521__auto__,i__21606);
cljs.core.chunk_append.call(null,b__21607,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row-key"], null),r], null),cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (i__21606,r,c__4521__auto__,size__4522__auto__,b__21607,s__21605__$2,temp__5720__auto__,props,init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,handle_key_down,clear,with_let21598,map__21596,map__21596__$1,shape,cell_data){
return (function clojurescript_reagent$cells$main_$_iter__21604_$_iter__21608(s__21609){
return (new cljs.core.LazySeq(null,((function (i__21606,r,c__4521__auto__,size__4522__auto__,b__21607,s__21605__$2,temp__5720__auto__,props,init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,handle_key_down,clear,with_let21598,map__21596,map__21596__$1,shape,cell_data){
return (function (){
var s__21609__$1 = s__21609;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__21609__$1);
if(temp__5720__auto____$1){
var s__21609__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21609__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__21609__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__21611 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__21610 = (0);
while(true){
if((i__21610 < size__4522__auto____$1)){
var c = cljs.core._nth.call(null,c__4521__auto____$1,i__21610);
cljs.core.chunk_append.call(null,b__21611,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.cells.cell_view,cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"c","c",-1763192079),c,new cljs.core.Keyword(null,"r","r",-471384190),r], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('')], null)));

var G__21618 = (i__21610 + (1));
i__21610 = G__21618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21611),clojurescript_reagent$cells$main_$_iter__21604_$_iter__21608.call(null,cljs.core.chunk_rest.call(null,s__21609__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21611),null);
}
} else {
var c = cljs.core.first.call(null,s__21609__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.cells.cell_view,cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"c","c",-1763192079),c,new cljs.core.Keyword(null,"r","r",-471384190),r], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('')], null)),clojurescript_reagent$cells$main_$_iter__21604_$_iter__21608.call(null,cljs.core.rest.call(null,s__21609__$2)));
}
} else {
return null;
}
break;
}
});})(i__21606,r,c__4521__auto__,size__4522__auto__,b__21607,s__21605__$2,temp__5720__auto__,props,init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,handle_key_down,clear,with_let21598,map__21596,map__21596__$1,shape,cell_data))
,null,null));
});})(i__21606,r,c__4521__auto__,size__4522__auto__,b__21607,s__21605__$2,temp__5720__auto__,props,init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,handle_key_down,clear,with_let21598,map__21596,map__21596__$1,shape,cell_data))
;
return iter__4523__auto__.call(null,columns);
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)));

var G__21619 = (i__21606 + (1));
i__21606 = G__21619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21607),clojurescript_reagent$cells$main_$_iter__21604.call(null,cljs.core.chunk_rest.call(null,s__21605__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21607),null);
}
} else {
var r = cljs.core.first.call(null,s__21605__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row-key"], null),r], null),cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (r,s__21605__$2,temp__5720__auto__,props,init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,handle_key_down,clear,with_let21598,map__21596,map__21596__$1,shape,cell_data){
return (function clojurescript_reagent$cells$main_$_iter__21604_$_iter__21612(s__21613){
return (new cljs.core.LazySeq(null,((function (r,s__21605__$2,temp__5720__auto__,props,init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,handle_key_down,clear,with_let21598,map__21596,map__21596__$1,shape,cell_data){
return (function (){
var s__21613__$1 = s__21613;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__21613__$1);
if(temp__5720__auto____$1){
var s__21613__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21613__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__21613__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__21615 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__21614 = (0);
while(true){
if((i__21614 < size__4522__auto__)){
var c = cljs.core._nth.call(null,c__4521__auto__,i__21614);
cljs.core.chunk_append.call(null,b__21615,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.cells.cell_view,cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"c","c",-1763192079),c,new cljs.core.Keyword(null,"r","r",-471384190),r], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('')], null)));

var G__21620 = (i__21614 + (1));
i__21614 = G__21620;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21615),clojurescript_reagent$cells$main_$_iter__21604_$_iter__21612.call(null,cljs.core.chunk_rest.call(null,s__21613__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21615),null);
}
} else {
var c = cljs.core.first.call(null,s__21613__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.cells.cell_view,cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"c","c",-1763192079),c,new cljs.core.Keyword(null,"r","r",-471384190),r], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('')], null)),clojurescript_reagent$cells$main_$_iter__21604_$_iter__21612.call(null,cljs.core.rest.call(null,s__21613__$2)));
}
} else {
return null;
}
break;
}
});})(r,s__21605__$2,temp__5720__auto__,props,init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,handle_key_down,clear,with_let21598,map__21596,map__21596__$1,shape,cell_data))
,null,null));
});})(r,s__21605__$2,temp__5720__auto__,props,init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,handle_key_down,clear,with_let21598,map__21596,map__21596__$1,shape,cell_data))
;
return iter__4523__auto__.call(null,columns);
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)),clojurescript_reagent$cells$main_$_iter__21604.call(null,cljs.core.rest.call(null,s__21605__$2)));
}
} else {
return null;
}
break;
}
});})(props,init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,handle_key_down,clear,with_let21598,map__21596,map__21596__$1,shape,cell_data))
,null,null));
});})(props,init21599,rows,columns,_STAR_cell_data,_STAR_cell_cache,_STAR_t_body,handle_change,handle_key_down,clear,with_let21598,map__21596,map__21596__$1,shape,cell_data))
;
return iter__4523__auto__.call(null,rows);
})())], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),clear], null),"Clear"], null)], null)], null);
})();

return res__21088__auto__;
});

//# sourceMappingURL=cells.js.map?rel=1620419387174
