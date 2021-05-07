// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojurescript_reagent.cells.parse');
goog.require('cljs.core');
goog.require('clojure.string');
clojurescript_reagent.cells.parse.exp = (function clojurescript_reagent$cells$parse$exp(x,n){
return cljs.core.reduce.call(null,cljs.core._STAR_,cljs.core.repeat.call(null,n,x));
});
clojurescript_reagent.cells.parse.operations = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"sum","sum",136986814),cljs.core._PLUS_,new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core._,new cljs.core.Keyword(null,"mul","mul",-354626062),cljs.core._STAR_,new cljs.core.Keyword(null,"div","div",1057191632),cljs.core._SLASH_,new cljs.core.Keyword(null,"mod","mod",-130487320),cljs.core.mod,new cljs.core.Keyword(null,"exp","exp",-261706262),clojurescript_reagent.cells.parse.exp], null);
clojurescript_reagent.cells.parse.includes = (function clojurescript_reagent$cells$parse$includes(coll,x){
return cljs.core.not_EQ_.call(null,coll.indexOf(x),(-1));
});
clojurescript_reagent.cells.parse.cartesian_product = (function clojurescript_reagent$cells$parse$cartesian_product(letters,numbers){
var iter__4523__auto__ = (function clojurescript_reagent$cells$parse$cartesian_product_$_iter__21559(s__21560){
return (new cljs.core.LazySeq(null,(function (){
var s__21560__$1 = s__21560;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__21560__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var c = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__21560__$1,c,xs__6277__auto__,temp__5720__auto__){
return (function clojurescript_reagent$cells$parse$cartesian_product_$_iter__21559_$_iter__21561(s__21562){
return (new cljs.core.LazySeq(null,((function (s__21560__$1,c,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__21562__$1 = s__21562;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__21562__$1);
if(temp__5720__auto____$1){
var s__21562__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21562__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__21562__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__21564 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__21563 = (0);
while(true){
if((i__21563 < size__4522__auto__)){
var r = cljs.core._nth.call(null,c__4521__auto__,i__21563);
cljs.core.chunk_append.call(null,b__21564,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''));

var G__21565 = (i__21563 + (1));
i__21563 = G__21565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21564),clojurescript_reagent$cells$parse$cartesian_product_$_iter__21559_$_iter__21561.call(null,cljs.core.chunk_rest.call(null,s__21562__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21564),null);
}
} else {
var r = cljs.core.first.call(null,s__21562__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''),clojurescript_reagent$cells$parse$cartesian_product_$_iter__21559_$_iter__21561.call(null,cljs.core.rest.call(null,s__21562__$2)));
}
} else {
return null;
}
break;
}
});})(s__21560__$1,c,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__21560__$1,c,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,numbers));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,clojurescript_reagent$cells$parse$cartesian_product_$_iter__21559.call(null,cljs.core.rest.call(null,s__21560__$1)));
} else {
var G__21566 = cljs.core.rest.call(null,s__21560__$1);
s__21560__$1 = G__21566;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,letters);
});
clojurescript_reagent.cells.parse.find_vec_range = (function clojurescript_reagent$cells$parse$find_vec_range(vec,start,end){
var start_idx = vec.indexOf(start);
var end_idx = vec.indexOf(end);
if(((cljs.core._EQ_.call(null,start_idx,(-1))) || (cljs.core._EQ_.call(null,end_idx,(-1))) || ((start_idx > end_idx)))){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,vec,start_idx,(end_idx + (1)));
}
});
clojurescript_reagent.cells.parse.split_operand = (function clojurescript_reagent$cells$parse$split_operand(operand){
var op = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operand);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.re_seq.call(null,/[a-zA-Z]+/,op)),cljs.core.first.call(null,cljs.core.re_seq.call(null,/\d+/,op))], null);
});
clojurescript_reagent.cells.parse.well_formed_QMARK_ = (function clojurescript_reagent$cells$parse$well_formed_QMARK_(operand){
return (!((cljs.core.re_find.call(null,/[a-zA-Z]+\d+/,operand) == null)));
});
clojurescript_reagent.cells.parse.get_range = (function clojurescript_reagent$cells$parse$get_range(start,end,rows,columns){
var start__$1 = clojurescript_reagent.cells.parse.split_operand.call(null,start);
var end__$1 = clojurescript_reagent.cells.parse.split_operand.call(null,end);
var letters = clojurescript_reagent.cells.parse.find_vec_range.call(null,columns,cljs.core.first.call(null,start__$1),cljs.core.first.call(null,end__$1));
var numbers = clojurescript_reagent.cells.parse.find_vec_range.call(null,rows,cljs.core.second.call(null,start__$1),cljs.core.second.call(null,end__$1));
return clojurescript_reagent.cells.parse.cartesian_product.call(null,letters,numbers);
});
clojurescript_reagent.cells.parse.cell_QMARK_ = (function clojurescript_reagent$cells$parse$cell_QMARK_(string,rows,columns){
if(clojurescript_reagent.cells.parse.well_formed_QMARK_.call(null,string)){
var vec__21569 = clojurescript_reagent.cells.parse.split_operand.call(null,string);
var fst = cljs.core.nth.call(null,vec__21569,(0),null);
var snd = cljs.core.nth.call(null,vec__21569,(1),null);
var and__4120__auto__ = cljs.core.some.call(null,((function (vec__21569,fst,snd){
return (function (p1__21567_SHARP_){
return cljs.core._EQ_.call(null,p1__21567_SHARP_,snd);
});})(vec__21569,fst,snd))
,rows);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.some.call(null,((function (and__4120__auto__,vec__21569,fst,snd){
return (function (p1__21568_SHARP_){
return cljs.core._EQ_.call(null,p1__21568_SHARP_,fst);
});})(and__4120__auto__,vec__21569,fst,snd))
,columns);
} else {
return and__4120__auto__;
}
} else {
return false;
}
});
clojurescript_reagent.cells.parse.parse_formula = (function clojurescript_reagent$cells$parse$parse_formula(p__21572){
var map__21573 = p__21572;
var map__21573__$1 = (((((!((map__21573 == null))))?(((((map__21573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21573):map__21573);
var string = cljs.core.get.call(null,map__21573__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var op = cljs.core.get.call(null,map__21573__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var formula = cljs.core.get.call(null,map__21573__$1,new cljs.core.Keyword(null,"formula","formula",-1059725192));
var rows = cljs.core.get.call(null,map__21573__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__21573__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var string_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),string,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586)], null);
if((!(((cljs.core._EQ_.call(null,cljs.core.first.call(null,formula),"(")) && (cljs.core._EQ_.call(null,cljs.core.last.call(null,formula),")")))))){
return string_map;
} else {
var formula__$1 = cljs.core.subs.call(null,formula,(1),(cljs.core.count.call(null,formula) - (1)));
if(clojurescript_reagent.cells.parse.includes.call(null,formula__$1,",")){
var formula_coll = clojure.string.split.call(null,formula__$1,/,/);
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,formula_coll),(2))){
return string_map;
} else {
var fst = cljs.core.first.call(null,formula_coll);
var snd = cljs.core.second.call(null,formula_coll);
if(cljs.core.truth_((function (){var and__4120__auto__ = clojurescript_reagent.cells.parse.cell_QMARK_.call(null,fst,rows,columns);
if(cljs.core.truth_(and__4120__auto__)){
return clojurescript_reagent.cells.parse.cell_QMARK_.call(null,snd,rows,columns);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"string","string",-1989541586),string,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"op","op",-1882987955),clojurescript_reagent.cells.parse.operations.call(null,op),new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fst,snd], null)], null);
} else {
return string_map;
}
}
} else {
if(clojurescript_reagent.cells.parse.includes.call(null,formula__$1,":")){
var formula_coll = clojure.string.split.call(null,formula__$1,/:/);
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,formula_coll),(2))){
return string_map;
} else {
var fst = cljs.core.first.call(null,formula_coll);
var snd = cljs.core.second.call(null,formula_coll);
if(cljs.core.truth_((function (){var and__4120__auto__ = clojurescript_reagent.cells.parse.cell_QMARK_.call(null,fst,rows,columns);
if(cljs.core.truth_(and__4120__auto__)){
return clojurescript_reagent.cells.parse.cell_QMARK_.call(null,snd,rows,columns);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"string","string",-1989541586),string,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"op","op",-1882987955),clojurescript_reagent.cells.parse.operations.call(null,op),new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.vec.call(null,clojurescript_reagent.cells.parse.get_range.call(null,fst,snd,rows,columns))], null);
} else {
return string_map;
}
}
} else {
return string_map;
}
}
}
});
clojurescript_reagent.cells.parse.parse_string = (function clojurescript_reagent$cells$parse$parse_string(string,rows,columns){
if((string == null)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),string], null);
} else {
if(cljs.core.empty_QMARK_.call(null,string)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),string], null);
} else {
if((!(cljs.core._EQ_.call(null,cljs.core.first.call(null,string),"=")))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),string], null);
} else {
var formula = cljs.core.subs.call(null,string,(1));
var fst = cljs.core.keyword.call(null,clojure.string.lower_case.call(null,cljs.core.subs.call(null,formula,(0),(3))));
var snd = clojure.string.upper_case.call(null,cljs.core.subs.call(null,formula,(3)));
if(cljs.core.contains_QMARK_.call(null,clojurescript_reagent.cells.parse.operations,fst)){
return clojurescript_reagent.cells.parse.parse_formula.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"string","string",-1989541586),string,new cljs.core.Keyword(null,"op","op",-1882987955),fst,new cljs.core.Keyword(null,"formula","formula",-1059725192),snd,new cljs.core.Keyword(null,"rows","rows",850049680),rows,new cljs.core.Keyword(null,"columns","columns",1998437288),columns], null));
} else {
if(cljs.core.truth_(clojurescript_reagent.cells.parse.cell_QMARK_.call(null,formula,rows,columns))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"string","string",-1989541586),string,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"cell","cell",764245084),formula], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),string,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586)], null);
}
}

}
}
}
});

//# sourceMappingURL=parse.js.map?rel=1620419387106
