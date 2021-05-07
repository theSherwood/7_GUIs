// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojurescript_reagent.crud');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('clojure.string');
goog.require('clojurescript_reagent.components.card');
clojurescript_reagent.crud.filter_entries = (function clojurescript_reagent$crud$filter_entries(entries,prefix){
return cljs.core.filterv.call(null,(function (p1__21528_SHARP_){
return clojure.string.starts_with_QMARK_.call(null,clojure.string.lower_case.call(null,cljs.core.second.call(null,p1__21528_SHARP_)),clojure.string.lower_case.call(null,prefix));
}),entries);
});
clojurescript_reagent.crud.find_index_of = (function clojurescript_reagent$crud$find_index_of(pred,items){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__21530_SHARP_,p2__21529_SHARP_){
if(cljs.core.truth_(pred.call(null,p2__21529_SHARP_))){
return p1__21530_SHARP_;
} else {
return null;
}
}),items));
});
clojurescript_reagent.crud.main = (function clojurescript_reagent$crud$main(entries){
var with_let21538 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let21538","with-let21538",1586269075));
var temp__5724__auto___21554 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___21554 == null)){
} else {
var c__21087__auto___21555 = temp__5724__auto___21554;
if((with_let21538.generation === c__21087__auto___21555.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let21538.generation = c__21087__auto___21555.ratomGeneration;
}


var init21539 = (with_let21538.length === (0));
var _STAR_prefix = ((init21539)?(with_let21538[(0)] = reagent.core.atom.call(null,"")):(with_let21538[(0)]));
var _STAR_entries = ((init21539)?(with_let21538[(1)] = reagent.core.atom.call(null,cljs.core.mapv.call(null,((function (init21539,_STAR_prefix,with_let21538){
return (function (p__21540){
var vec__21541 = p__21540;
var fst = cljs.core.nth.call(null,vec__21541,(0),null);
var snd = cljs.core.nth.call(null,vec__21541,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fst,snd,cljs.core.random_uuid.call(null)], null);
});})(init21539,_STAR_prefix,with_let21538))
,entries))):(with_let21538[(1)]));
var _STAR_filtered_entries = ((init21539)?(with_let21538[(2)] = reagent.ratom.make_reaction.call(null,((function (init21539,_STAR_prefix,_STAR_entries,with_let21538){
return (function (){
return clojurescript_reagent.crud.filter_entries.call(null,cljs.core.deref.call(null,_STAR_entries),cljs.core.deref.call(null,_STAR_prefix));
});})(init21539,_STAR_prefix,_STAR_entries,with_let21538))
)):(with_let21538[(2)]));
var _STAR_first_name = ((init21539)?(with_let21538[(3)] = reagent.core.atom.call(null,"")):(with_let21538[(3)]));
var _STAR_surname = ((init21539)?(with_let21538[(4)] = reagent.core.atom.call(null,"")):(with_let21538[(4)]));
var _STAR_selected = ((init21539)?(with_let21538[(5)] = reagent.core.atom.call(null,null)):(with_let21538[(5)]));
var resolve_selected = ((init21539)?(with_let21538[(6)] = ((function (init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,with_let21538){
return (function (){
var or__4131__auto__ = cljs.core.deref.call(null,_STAR_selected);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.nth.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,_STAR_filtered_entries)),(2),null);
}
});})(init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,with_let21538))
):(with_let21538[(6)]));
var _ = ((init21539)?(with_let21538[(7)] = cljs.core.add_watch.call(null,_STAR_prefix,new cljs.core.Keyword(null,"set-selected","set-selected",-767510843),((function (init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,with_let21538){
return (function (p1__21532_SHARP_,p2__21533_SHARP_,p3__21534_SHARP_,p4__21531_SHARP_){
return cljs.core.reset_BANG_.call(null,_STAR_selected,cljs.core.nth.call(null,cljs.core.first.call(null,clojurescript_reagent.crud.filter_entries.call(null,cljs.core.deref.call(null,_STAR_entries),p4__21531_SHARP_)),(2)));
});})(init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,with_let21538))
)):(with_let21538[(7)]));
var add_entry_BANG_ = ((init21539)?(with_let21538[(8)] = ((function (init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,with_let21538){
return (function clojurescript_reagent$crud$main_$_add_entry_BANG_(){
var id = cljs.core.random_uuid.call(null);
cljs.core.swap_BANG_.call(null,_STAR_entries,cljs.core.conj,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.deref.call(null,_STAR_first_name),cljs.core.deref.call(null,_STAR_surname),id],null)));

return cljs.core.reset_BANG_.call(null,_STAR_selected,id);
});})(init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,with_let21538))
):(with_let21538[(8)]));
var update_entry_BANG_ = ((init21539)?(with_let21538[(9)] = ((function (init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,with_let21538){
return (function clojurescript_reagent$crud$main_$_update_entry_BANG_(){
var selected = resolve_selected.call(null);
var idx = clojurescript_reagent.crud.find_index_of.call(null,((function (selected,init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,with_let21538){
return (function (p1__21535_SHARP_){
return cljs.core._EQ_.call(null,selected,cljs.core.nth.call(null,p1__21535_SHARP_,(2)));
});})(selected,init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,with_let21538))
,cljs.core.deref.call(null,_STAR_entries));
return cljs.core.swap_BANG_.call(null,_STAR_entries,cljs.core.assoc,idx,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.deref.call(null,_STAR_first_name),cljs.core.deref.call(null,_STAR_surname),selected],null)));
});})(init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,with_let21538))
):(with_let21538[(9)]));
var delete_entry_BANG_ = ((init21539)?(with_let21538[(10)] = ((function (init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,with_let21538){
return (function clojurescript_reagent$crud$main_$_delete_entry_BANG_(){
var selected = resolve_selected.call(null);
var entries__$1 = cljs.core.deref.call(null,_STAR_entries);
var filtered_entries = cljs.core.deref.call(null,_STAR_filtered_entries);
var entries_idx = clojurescript_reagent.crud.find_index_of.call(null,((function (selected,entries__$1,filtered_entries,init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,with_let21538){
return (function (p1__21536_SHARP_){
return cljs.core._EQ_.call(null,selected,cljs.core.nth.call(null,p1__21536_SHARP_,(2)));
});})(selected,entries__$1,filtered_entries,init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,with_let21538))
,entries__$1);
var filtered_idx = clojurescript_reagent.crud.find_index_of.call(null,((function (selected,entries__$1,filtered_entries,entries_idx,init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,with_let21538){
return (function (p1__21537_SHARP_){
return cljs.core._EQ_.call(null,selected,cljs.core.nth.call(null,p1__21537_SHARP_,(2)));
});})(selected,entries__$1,filtered_entries,entries_idx,init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,with_let21538))
,filtered_entries);
cljs.core.reset_BANG_.call(null,_STAR_entries,cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,entries__$1,(0),entries_idx),cljs.core.subvec.call(null,entries__$1,(entries_idx + (1))))));

if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.last.call(null,filtered_entries),(2)),selected)){
return cljs.core.reset_BANG_.call(null,_STAR_selected,cljs.core.nth.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,filtered_entries)),(2)));
} else {
return cljs.core.reset_BANG_.call(null,_STAR_selected,cljs.core.nth.call(null,cljs.core.nth.call(null,filtered_entries,(filtered_idx + (1))),(2)));
}
});})(init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,with_let21538))
):(with_let21538[(10)]));
var res__21088__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurescript_reagent.components.card.main,"CRUD",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"wrapper"], null),"Filter prefix: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,_STAR_prefix),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,delete_entry_BANG_,with_let21538){
return (function (e){
return cljs.core.reset_BANG_.call(null,_STAR_prefix,e.target.value);
});})(init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,delete_entry_BANG_,with_let21538))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),"4",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,_STAR_selected)], null),cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,delete_entry_BANG_,with_let21538){
return (function clojurescript_reagent$crud$main_$_iter__21544(s__21545){
return (new cljs.core.LazySeq(null,((function (init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,delete_entry_BANG_,with_let21538){
return (function (){
var s__21545__$1 = s__21545;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__21545__$1);
if(temp__5720__auto__){
var s__21545__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21545__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__21545__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__21547 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__21546 = (0);
while(true){
if((i__21546 < size__4522__auto__)){
var vec__21548 = cljs.core._nth.call(null,c__4521__auto__,i__21546);
var fst = cljs.core.nth.call(null,vec__21548,(0),null);
var lst = cljs.core.nth.call(null,vec__21548,(1),null);
var id = cljs.core.nth.call(null,vec__21548,(2),null);
cljs.core.chunk_append.call(null,b__21547,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__21546,vec__21548,fst,lst,id,c__4521__auto__,size__4522__auto__,b__21547,s__21545__$2,temp__5720__auto__,init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,delete_entry_BANG_,with_let21538){
return (function (){
return cljs.core.reset_BANG_.call(null,_STAR_selected,id);
});})(i__21546,vec__21548,fst,lst,id,c__4521__auto__,size__4522__auto__,b__21547,s__21545__$2,temp__5720__auto__,init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,delete_entry_BANG_,with_let21538))
], null),lst,", ",fst], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__21556 = (i__21546 + (1));
i__21546 = G__21556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21547),clojurescript_reagent$crud$main_$_iter__21544.call(null,cljs.core.chunk_rest.call(null,s__21545__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21547),null);
}
} else {
var vec__21551 = cljs.core.first.call(null,s__21545__$2);
var fst = cljs.core.nth.call(null,vec__21551,(0),null);
var lst = cljs.core.nth.call(null,vec__21551,(1),null);
var id = cljs.core.nth.call(null,vec__21551,(2),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__21551,fst,lst,id,s__21545__$2,temp__5720__auto__,init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,delete_entry_BANG_,with_let21538){
return (function (){
return cljs.core.reset_BANG_.call(null,_STAR_selected,id);
});})(vec__21551,fst,lst,id,s__21545__$2,temp__5720__auto__,init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,delete_entry_BANG_,with_let21538))
], null),lst,", ",fst], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),clojurescript_reagent$crud$main_$_iter__21544.call(null,cljs.core.rest.call(null,s__21545__$2)));
}
} else {
return null;
}
break;
}
});})(init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,delete_entry_BANG_,with_let21538))
,null,null));
});})(init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,delete_entry_BANG_,with_let21538))
;
return iter__4523__auto__.call(null,cljs.core.deref.call(null,_STAR_filtered_entries));
})())], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Name: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,_STAR_first_name),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,delete_entry_BANG_,with_let21538){
return (function (e){
return cljs.core.reset_BANG_.call(null,_STAR_first_name,e.target.value);
});})(init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,delete_entry_BANG_,with_let21538))
], null)], null),"Surname: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,_STAR_surname),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,delete_entry_BANG_,with_let21538){
return (function (e){
return cljs.core.reset_BANG_.call(null,_STAR_surname,e.target.value);
});})(init21539,_STAR_prefix,_STAR_entries,_STAR_filtered_entries,_STAR_first_name,_STAR_surname,_STAR_selected,resolve_selected,_,add_entry_BANG_,update_entry_BANG_,delete_entry_BANG_,with_let21538))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"buttons"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),add_entry_BANG_], null),"Create"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),update_entry_BANG_], null),"Update"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),delete_entry_BANG_], null),"Delete"], null)], null)], null)], null);

return res__21088__auto__;
});

//# sourceMappingURL=crud.js.map?rel=1620419387073
