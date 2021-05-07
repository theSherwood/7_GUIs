// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28604_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28604_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28605 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28606 = null;
var count__28607 = (0);
var i__28608 = (0);
while(true){
if((i__28608 < count__28607)){
var n = cljs.core._nth.call(null,chunk__28606,i__28608);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28609 = seq__28605;
var G__28610 = chunk__28606;
var G__28611 = count__28607;
var G__28612 = (i__28608 + (1));
seq__28605 = G__28609;
chunk__28606 = G__28610;
count__28607 = G__28611;
i__28608 = G__28612;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28605);
if(temp__5720__auto__){
var seq__28605__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28605__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28605__$1);
var G__28613 = cljs.core.chunk_rest.call(null,seq__28605__$1);
var G__28614 = c__4550__auto__;
var G__28615 = cljs.core.count.call(null,c__4550__auto__);
var G__28616 = (0);
seq__28605 = G__28613;
chunk__28606 = G__28614;
count__28607 = G__28615;
i__28608 = G__28616;
continue;
} else {
var n = cljs.core.first.call(null,seq__28605__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28617 = cljs.core.next.call(null,seq__28605__$1);
var G__28618 = null;
var G__28619 = (0);
var G__28620 = (0);
seq__28605 = G__28617;
chunk__28606 = G__28618;
count__28607 = G__28619;
i__28608 = G__28620;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28621){
var vec__28622 = p__28621;
var _ = cljs.core.nth.call(null,vec__28622,(0),null);
var v = cljs.core.nth.call(null,vec__28622,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__28625){
var vec__28626 = p__28625;
var k = cljs.core.nth.call(null,vec__28626,(0),null);
var v = cljs.core.nth.call(null,vec__28626,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28638_28646 = cljs.core.seq.call(null,deps);
var chunk__28639_28647 = null;
var count__28640_28648 = (0);
var i__28641_28649 = (0);
while(true){
if((i__28641_28649 < count__28640_28648)){
var dep_28650 = cljs.core._nth.call(null,chunk__28639_28647,i__28641_28649);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28650;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28650));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28650,(depth + (1)),state);
} else {
}


var G__28651 = seq__28638_28646;
var G__28652 = chunk__28639_28647;
var G__28653 = count__28640_28648;
var G__28654 = (i__28641_28649 + (1));
seq__28638_28646 = G__28651;
chunk__28639_28647 = G__28652;
count__28640_28648 = G__28653;
i__28641_28649 = G__28654;
continue;
} else {
var temp__5720__auto___28655 = cljs.core.seq.call(null,seq__28638_28646);
if(temp__5720__auto___28655){
var seq__28638_28656__$1 = temp__5720__auto___28655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28638_28656__$1)){
var c__4550__auto___28657 = cljs.core.chunk_first.call(null,seq__28638_28656__$1);
var G__28658 = cljs.core.chunk_rest.call(null,seq__28638_28656__$1);
var G__28659 = c__4550__auto___28657;
var G__28660 = cljs.core.count.call(null,c__4550__auto___28657);
var G__28661 = (0);
seq__28638_28646 = G__28658;
chunk__28639_28647 = G__28659;
count__28640_28648 = G__28660;
i__28641_28649 = G__28661;
continue;
} else {
var dep_28662 = cljs.core.first.call(null,seq__28638_28656__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28662;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28662));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28662,(depth + (1)),state);
} else {
}


var G__28663 = cljs.core.next.call(null,seq__28638_28656__$1);
var G__28664 = null;
var G__28665 = (0);
var G__28666 = (0);
seq__28638_28646 = G__28663;
chunk__28639_28647 = G__28664;
count__28640_28648 = G__28665;
i__28641_28649 = G__28666;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28642){
var vec__28643 = p__28642;
var seq__28644 = cljs.core.seq.call(null,vec__28643);
var first__28645 = cljs.core.first.call(null,seq__28644);
var seq__28644__$1 = cljs.core.next.call(null,seq__28644);
var x = first__28645;
var xs = seq__28644__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28643,seq__28644,first__28645,seq__28644__$1,x,xs,get_deps__$1){
return (function (p1__28629_SHARP_){
return clojure.set.difference.call(null,p1__28629_SHARP_,x);
});})(vec__28643,seq__28644,first__28645,seq__28644__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28667 = cljs.core.seq.call(null,provides);
var chunk__28668 = null;
var count__28669 = (0);
var i__28670 = (0);
while(true){
if((i__28670 < count__28669)){
var prov = cljs.core._nth.call(null,chunk__28668,i__28670);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28679_28687 = cljs.core.seq.call(null,requires);
var chunk__28680_28688 = null;
var count__28681_28689 = (0);
var i__28682_28690 = (0);
while(true){
if((i__28682_28690 < count__28681_28689)){
var req_28691 = cljs.core._nth.call(null,chunk__28680_28688,i__28682_28690);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28691,prov);


var G__28692 = seq__28679_28687;
var G__28693 = chunk__28680_28688;
var G__28694 = count__28681_28689;
var G__28695 = (i__28682_28690 + (1));
seq__28679_28687 = G__28692;
chunk__28680_28688 = G__28693;
count__28681_28689 = G__28694;
i__28682_28690 = G__28695;
continue;
} else {
var temp__5720__auto___28696 = cljs.core.seq.call(null,seq__28679_28687);
if(temp__5720__auto___28696){
var seq__28679_28697__$1 = temp__5720__auto___28696;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28679_28697__$1)){
var c__4550__auto___28698 = cljs.core.chunk_first.call(null,seq__28679_28697__$1);
var G__28699 = cljs.core.chunk_rest.call(null,seq__28679_28697__$1);
var G__28700 = c__4550__auto___28698;
var G__28701 = cljs.core.count.call(null,c__4550__auto___28698);
var G__28702 = (0);
seq__28679_28687 = G__28699;
chunk__28680_28688 = G__28700;
count__28681_28689 = G__28701;
i__28682_28690 = G__28702;
continue;
} else {
var req_28703 = cljs.core.first.call(null,seq__28679_28697__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28703,prov);


var G__28704 = cljs.core.next.call(null,seq__28679_28697__$1);
var G__28705 = null;
var G__28706 = (0);
var G__28707 = (0);
seq__28679_28687 = G__28704;
chunk__28680_28688 = G__28705;
count__28681_28689 = G__28706;
i__28682_28690 = G__28707;
continue;
}
} else {
}
}
break;
}


var G__28708 = seq__28667;
var G__28709 = chunk__28668;
var G__28710 = count__28669;
var G__28711 = (i__28670 + (1));
seq__28667 = G__28708;
chunk__28668 = G__28709;
count__28669 = G__28710;
i__28670 = G__28711;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28667);
if(temp__5720__auto__){
var seq__28667__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28667__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28667__$1);
var G__28712 = cljs.core.chunk_rest.call(null,seq__28667__$1);
var G__28713 = c__4550__auto__;
var G__28714 = cljs.core.count.call(null,c__4550__auto__);
var G__28715 = (0);
seq__28667 = G__28712;
chunk__28668 = G__28713;
count__28669 = G__28714;
i__28670 = G__28715;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28667__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28683_28716 = cljs.core.seq.call(null,requires);
var chunk__28684_28717 = null;
var count__28685_28718 = (0);
var i__28686_28719 = (0);
while(true){
if((i__28686_28719 < count__28685_28718)){
var req_28720 = cljs.core._nth.call(null,chunk__28684_28717,i__28686_28719);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28720,prov);


var G__28721 = seq__28683_28716;
var G__28722 = chunk__28684_28717;
var G__28723 = count__28685_28718;
var G__28724 = (i__28686_28719 + (1));
seq__28683_28716 = G__28721;
chunk__28684_28717 = G__28722;
count__28685_28718 = G__28723;
i__28686_28719 = G__28724;
continue;
} else {
var temp__5720__auto___28725__$1 = cljs.core.seq.call(null,seq__28683_28716);
if(temp__5720__auto___28725__$1){
var seq__28683_28726__$1 = temp__5720__auto___28725__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28683_28726__$1)){
var c__4550__auto___28727 = cljs.core.chunk_first.call(null,seq__28683_28726__$1);
var G__28728 = cljs.core.chunk_rest.call(null,seq__28683_28726__$1);
var G__28729 = c__4550__auto___28727;
var G__28730 = cljs.core.count.call(null,c__4550__auto___28727);
var G__28731 = (0);
seq__28683_28716 = G__28728;
chunk__28684_28717 = G__28729;
count__28685_28718 = G__28730;
i__28686_28719 = G__28731;
continue;
} else {
var req_28732 = cljs.core.first.call(null,seq__28683_28726__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28732,prov);


var G__28733 = cljs.core.next.call(null,seq__28683_28726__$1);
var G__28734 = null;
var G__28735 = (0);
var G__28736 = (0);
seq__28683_28716 = G__28733;
chunk__28684_28717 = G__28734;
count__28685_28718 = G__28735;
i__28686_28719 = G__28736;
continue;
}
} else {
}
}
break;
}


var G__28737 = cljs.core.next.call(null,seq__28667__$1);
var G__28738 = null;
var G__28739 = (0);
var G__28740 = (0);
seq__28667 = G__28737;
chunk__28668 = G__28738;
count__28669 = G__28739;
i__28670 = G__28740;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28741_28745 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28742_28746 = null;
var count__28743_28747 = (0);
var i__28744_28748 = (0);
while(true){
if((i__28744_28748 < count__28743_28747)){
var ns_28749 = cljs.core._nth.call(null,chunk__28742_28746,i__28744_28748);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28749);


var G__28750 = seq__28741_28745;
var G__28751 = chunk__28742_28746;
var G__28752 = count__28743_28747;
var G__28753 = (i__28744_28748 + (1));
seq__28741_28745 = G__28750;
chunk__28742_28746 = G__28751;
count__28743_28747 = G__28752;
i__28744_28748 = G__28753;
continue;
} else {
var temp__5720__auto___28754 = cljs.core.seq.call(null,seq__28741_28745);
if(temp__5720__auto___28754){
var seq__28741_28755__$1 = temp__5720__auto___28754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28741_28755__$1)){
var c__4550__auto___28756 = cljs.core.chunk_first.call(null,seq__28741_28755__$1);
var G__28757 = cljs.core.chunk_rest.call(null,seq__28741_28755__$1);
var G__28758 = c__4550__auto___28756;
var G__28759 = cljs.core.count.call(null,c__4550__auto___28756);
var G__28760 = (0);
seq__28741_28745 = G__28757;
chunk__28742_28746 = G__28758;
count__28743_28747 = G__28759;
i__28744_28748 = G__28760;
continue;
} else {
var ns_28761 = cljs.core.first.call(null,seq__28741_28755__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28761);


var G__28762 = cljs.core.next.call(null,seq__28741_28755__$1);
var G__28763 = null;
var G__28764 = (0);
var G__28765 = (0);
seq__28741_28745 = G__28762;
chunk__28742_28746 = G__28763;
count__28743_28747 = G__28764;
i__28744_28748 = G__28765;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28766__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28766 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28767__i = 0, G__28767__a = new Array(arguments.length -  0);
while (G__28767__i < G__28767__a.length) {G__28767__a[G__28767__i] = arguments[G__28767__i + 0]; ++G__28767__i;}
  args = new cljs.core.IndexedSeq(G__28767__a,0,null);
} 
return G__28766__delegate.call(this,args);};
G__28766.cljs$lang$maxFixedArity = 0;
G__28766.cljs$lang$applyTo = (function (arglist__28768){
var args = cljs.core.seq(arglist__28768);
return G__28766__delegate(args);
});
G__28766.cljs$core$IFn$_invoke$arity$variadic = G__28766__delegate;
return G__28766;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28769_SHARP_,p2__28770_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28769_SHARP_)),p2__28770_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28771_SHARP_,p2__28772_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28771_SHARP_),p2__28772_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28773 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28773.addCallback(((function (G__28773){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28773))
);

G__28773.addErrback(((function (G__28773){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28773))
);

return G__28773;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28774){if((e28774 instanceof Error)){
var e = e28774;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28774;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28775){if((e28775 instanceof Error)){
var e = e28775;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28775;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28776 = cljs.core._EQ_;
var expr__28777 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28776.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28777))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28776.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28777))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28776.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28777))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28776,expr__28777){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28776,expr__28777))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28779,callback){
var map__28780 = p__28779;
var map__28780__$1 = (((((!((map__28780 == null))))?(((((map__28780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28780):map__28780);
var file_msg = map__28780__$1;
var request_url = cljs.core.get.call(null,map__28780__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28780,map__28780__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28780,map__28780__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto__){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto__){
return (function (state_28818){
var state_val_28819 = (state_28818[(1)]);
if((state_val_28819 === (7))){
var inst_28814 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28820_28846 = state_28818__$1;
(statearr_28820_28846[(2)] = inst_28814);

(statearr_28820_28846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (1))){
var state_28818__$1 = state_28818;
var statearr_28821_28847 = state_28818__$1;
(statearr_28821_28847[(2)] = null);

(statearr_28821_28847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (4))){
var inst_28784 = (state_28818[(7)]);
var inst_28784__$1 = (state_28818[(2)]);
var state_28818__$1 = (function (){var statearr_28822 = state_28818;
(statearr_28822[(7)] = inst_28784__$1);

return statearr_28822;
})();
if(cljs.core.truth_(inst_28784__$1)){
var statearr_28823_28848 = state_28818__$1;
(statearr_28823_28848[(1)] = (5));

} else {
var statearr_28824_28849 = state_28818__$1;
(statearr_28824_28849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (15))){
var inst_28799 = (state_28818[(8)]);
var inst_28797 = (state_28818[(9)]);
var inst_28801 = inst_28799.call(null,inst_28797);
var state_28818__$1 = state_28818;
var statearr_28825_28850 = state_28818__$1;
(statearr_28825_28850[(2)] = inst_28801);

(statearr_28825_28850[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (13))){
var inst_28808 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28826_28851 = state_28818__$1;
(statearr_28826_28851[(2)] = inst_28808);

(statearr_28826_28851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (6))){
var state_28818__$1 = state_28818;
var statearr_28827_28852 = state_28818__$1;
(statearr_28827_28852[(2)] = null);

(statearr_28827_28852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (17))){
var inst_28805 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
var statearr_28828_28853 = state_28818__$1;
(statearr_28828_28853[(2)] = inst_28805);

(statearr_28828_28853[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (3))){
var inst_28816 = (state_28818[(2)]);
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28818__$1,inst_28816);
} else {
if((state_val_28819 === (12))){
var state_28818__$1 = state_28818;
var statearr_28829_28854 = state_28818__$1;
(statearr_28829_28854[(2)] = null);

(statearr_28829_28854[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (2))){
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28818__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28819 === (11))){
var inst_28789 = (state_28818[(10)]);
var inst_28795 = figwheel.client.file_reloading.blocking_load.call(null,inst_28789);
var state_28818__$1 = state_28818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28818__$1,(14),inst_28795);
} else {
if((state_val_28819 === (9))){
var inst_28789 = (state_28818[(10)]);
var state_28818__$1 = state_28818;
if(cljs.core.truth_(inst_28789)){
var statearr_28830_28855 = state_28818__$1;
(statearr_28830_28855[(1)] = (11));

} else {
var statearr_28831_28856 = state_28818__$1;
(statearr_28831_28856[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (5))){
var inst_28790 = (state_28818[(11)]);
var inst_28784 = (state_28818[(7)]);
var inst_28789 = cljs.core.nth.call(null,inst_28784,(0),null);
var inst_28790__$1 = cljs.core.nth.call(null,inst_28784,(1),null);
var state_28818__$1 = (function (){var statearr_28832 = state_28818;
(statearr_28832[(11)] = inst_28790__$1);

(statearr_28832[(10)] = inst_28789);

return statearr_28832;
})();
if(cljs.core.truth_(inst_28790__$1)){
var statearr_28833_28857 = state_28818__$1;
(statearr_28833_28857[(1)] = (8));

} else {
var statearr_28834_28858 = state_28818__$1;
(statearr_28834_28858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (14))){
var inst_28799 = (state_28818[(8)]);
var inst_28789 = (state_28818[(10)]);
var inst_28797 = (state_28818[(2)]);
var inst_28798 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28799__$1 = cljs.core.get.call(null,inst_28798,inst_28789);
var state_28818__$1 = (function (){var statearr_28835 = state_28818;
(statearr_28835[(8)] = inst_28799__$1);

(statearr_28835[(9)] = inst_28797);

return statearr_28835;
})();
if(cljs.core.truth_(inst_28799__$1)){
var statearr_28836_28859 = state_28818__$1;
(statearr_28836_28859[(1)] = (15));

} else {
var statearr_28837_28860 = state_28818__$1;
(statearr_28837_28860[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (16))){
var inst_28797 = (state_28818[(9)]);
var inst_28803 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28797);
var state_28818__$1 = state_28818;
var statearr_28838_28861 = state_28818__$1;
(statearr_28838_28861[(2)] = inst_28803);

(statearr_28838_28861[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (10))){
var inst_28810 = (state_28818[(2)]);
var state_28818__$1 = (function (){var statearr_28839 = state_28818;
(statearr_28839[(12)] = inst_28810);

return statearr_28839;
})();
var statearr_28840_28862 = state_28818__$1;
(statearr_28840_28862[(2)] = null);

(statearr_28840_28862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28819 === (8))){
var inst_28790 = (state_28818[(11)]);
var inst_28792 = eval(inst_28790);
var state_28818__$1 = state_28818;
var statearr_28841_28863 = state_28818__$1;
(statearr_28841_28863[(2)] = inst_28792);

(statearr_28841_28863[(1)] = (10));


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
});})(c__26490__auto__))
;
return ((function (switch__26395__auto__,c__26490__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26396__auto__ = null;
var figwheel$client$file_reloading$state_machine__26396__auto____0 = (function (){
var statearr_28842 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28842[(0)] = figwheel$client$file_reloading$state_machine__26396__auto__);

(statearr_28842[(1)] = (1));

return statearr_28842;
});
var figwheel$client$file_reloading$state_machine__26396__auto____1 = (function (state_28818){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_28818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e28843){if((e28843 instanceof Object)){
var ex__26399__auto__ = e28843;
var statearr_28844_28864 = state_28818;
(statearr_28844_28864[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28865 = state_28818;
state_28818 = G__28865;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26396__auto__ = function(state_28818){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26396__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26396__auto____1.call(this,state_28818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26396__auto____0;
figwheel$client$file_reloading$state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26396__auto____1;
return figwheel$client$file_reloading$state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto__))
})();
var state__26492__auto__ = (function (){var statearr_28845 = f__26491__auto__.call(null);
(statearr_28845[(6)] = c__26490__auto__);

return statearr_28845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto__))
);

return c__26490__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28867 = arguments.length;
switch (G__28867) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28869,callback){
var map__28870 = p__28869;
var map__28870__$1 = (((((!((map__28870 == null))))?(((((map__28870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28870):map__28870);
var file_msg = map__28870__$1;
var namespace = cljs.core.get.call(null,map__28870__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28870,map__28870__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28870,map__28870__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28872){
var map__28873 = p__28872;
var map__28873__$1 = (((((!((map__28873 == null))))?(((((map__28873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28873):map__28873);
var file_msg = map__28873__$1;
var namespace = cljs.core.get.call(null,map__28873__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28875){
var map__28876 = p__28875;
var map__28876__$1 = (((((!((map__28876 == null))))?(((((map__28876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28876):map__28876);
var file_msg = map__28876__$1;
var namespace = cljs.core.get.call(null,map__28876__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28878,callback){
var map__28879 = p__28878;
var map__28879__$1 = (((((!((map__28879 == null))))?(((((map__28879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28879):map__28879);
var file_msg = map__28879__$1;
var request_url = cljs.core.get.call(null,map__28879__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28879__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26490__auto___28929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto___28929,out){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto___28929,out){
return (function (state_28914){
var state_val_28915 = (state_28914[(1)]);
if((state_val_28915 === (1))){
var inst_28888 = cljs.core.seq.call(null,files);
var inst_28889 = cljs.core.first.call(null,inst_28888);
var inst_28890 = cljs.core.next.call(null,inst_28888);
var inst_28891 = files;
var state_28914__$1 = (function (){var statearr_28916 = state_28914;
(statearr_28916[(7)] = inst_28890);

(statearr_28916[(8)] = inst_28889);

(statearr_28916[(9)] = inst_28891);

return statearr_28916;
})();
var statearr_28917_28930 = state_28914__$1;
(statearr_28917_28930[(2)] = null);

(statearr_28917_28930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28915 === (2))){
var inst_28897 = (state_28914[(10)]);
var inst_28891 = (state_28914[(9)]);
var inst_28896 = cljs.core.seq.call(null,inst_28891);
var inst_28897__$1 = cljs.core.first.call(null,inst_28896);
var inst_28898 = cljs.core.next.call(null,inst_28896);
var inst_28899 = (inst_28897__$1 == null);
var inst_28900 = cljs.core.not.call(null,inst_28899);
var state_28914__$1 = (function (){var statearr_28918 = state_28914;
(statearr_28918[(10)] = inst_28897__$1);

(statearr_28918[(11)] = inst_28898);

return statearr_28918;
})();
if(inst_28900){
var statearr_28919_28931 = state_28914__$1;
(statearr_28919_28931[(1)] = (4));

} else {
var statearr_28920_28932 = state_28914__$1;
(statearr_28920_28932[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28915 === (3))){
var inst_28912 = (state_28914[(2)]);
var state_28914__$1 = state_28914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28914__$1,inst_28912);
} else {
if((state_val_28915 === (4))){
var inst_28897 = (state_28914[(10)]);
var inst_28902 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28897);
var state_28914__$1 = state_28914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28914__$1,(7),inst_28902);
} else {
if((state_val_28915 === (5))){
var inst_28908 = cljs.core.async.close_BANG_.call(null,out);
var state_28914__$1 = state_28914;
var statearr_28921_28933 = state_28914__$1;
(statearr_28921_28933[(2)] = inst_28908);

(statearr_28921_28933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28915 === (6))){
var inst_28910 = (state_28914[(2)]);
var state_28914__$1 = state_28914;
var statearr_28922_28934 = state_28914__$1;
(statearr_28922_28934[(2)] = inst_28910);

(statearr_28922_28934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28915 === (7))){
var inst_28898 = (state_28914[(11)]);
var inst_28904 = (state_28914[(2)]);
var inst_28905 = cljs.core.async.put_BANG_.call(null,out,inst_28904);
var inst_28891 = inst_28898;
var state_28914__$1 = (function (){var statearr_28923 = state_28914;
(statearr_28923[(12)] = inst_28905);

(statearr_28923[(9)] = inst_28891);

return statearr_28923;
})();
var statearr_28924_28935 = state_28914__$1;
(statearr_28924_28935[(2)] = null);

(statearr_28924_28935[(1)] = (2));


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
});})(c__26490__auto___28929,out))
;
return ((function (switch__26395__auto__,c__26490__auto___28929,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26396__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26396__auto____0 = (function (){
var statearr_28925 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28925[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26396__auto__);

(statearr_28925[(1)] = (1));

return statearr_28925;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26396__auto____1 = (function (state_28914){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_28914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e28926){if((e28926 instanceof Object)){
var ex__26399__auto__ = e28926;
var statearr_28927_28936 = state_28914;
(statearr_28927_28936[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28937 = state_28914;
state_28914 = G__28937;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26396__auto__ = function(state_28914){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26396__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26396__auto____1.call(this,state_28914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26396__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26396__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto___28929,out))
})();
var state__26492__auto__ = (function (){var statearr_28928 = f__26491__auto__.call(null);
(statearr_28928[(6)] = c__26490__auto___28929);

return statearr_28928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto___28929,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28938,opts){
var map__28939 = p__28938;
var map__28939__$1 = (((((!((map__28939 == null))))?(((((map__28939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28939):map__28939);
var eval_body = cljs.core.get.call(null,map__28939__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28939__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28941){var e = e28941;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28942_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28942_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28943){
var vec__28944 = p__28943;
var k = cljs.core.nth.call(null,vec__28944,(0),null);
var v = cljs.core.nth.call(null,vec__28944,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28947){
var vec__28948 = p__28947;
var k = cljs.core.nth.call(null,vec__28948,(0),null);
var v = cljs.core.nth.call(null,vec__28948,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28954,p__28955){
var map__28956 = p__28954;
var map__28956__$1 = (((((!((map__28956 == null))))?(((((map__28956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28956):map__28956);
var opts = map__28956__$1;
var before_jsload = cljs.core.get.call(null,map__28956__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28956__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28956__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28957 = p__28955;
var map__28957__$1 = (((((!((map__28957 == null))))?(((((map__28957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28957):map__28957);
var msg = map__28957__$1;
var files = cljs.core.get.call(null,map__28957__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28957__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28957__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26491__auto__ = (function (){var switch__26395__auto__ = ((function (c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29111){
var state_val_29112 = (state_29111[(1)]);
if((state_val_29112 === (7))){
var inst_28973 = (state_29111[(7)]);
var inst_28974 = (state_29111[(8)]);
var inst_28972 = (state_29111[(9)]);
var inst_28971 = (state_29111[(10)]);
var inst_28979 = cljs.core._nth.call(null,inst_28972,inst_28974);
var inst_28980 = figwheel.client.file_reloading.eval_body.call(null,inst_28979,opts);
var inst_28981 = (inst_28974 + (1));
var tmp29113 = inst_28973;
var tmp29114 = inst_28972;
var tmp29115 = inst_28971;
var inst_28971__$1 = tmp29115;
var inst_28972__$1 = tmp29114;
var inst_28973__$1 = tmp29113;
var inst_28974__$1 = inst_28981;
var state_29111__$1 = (function (){var statearr_29116 = state_29111;
(statearr_29116[(7)] = inst_28973__$1);

(statearr_29116[(8)] = inst_28974__$1);

(statearr_29116[(9)] = inst_28972__$1);

(statearr_29116[(11)] = inst_28980);

(statearr_29116[(10)] = inst_28971__$1);

return statearr_29116;
})();
var statearr_29117_29200 = state_29111__$1;
(statearr_29117_29200[(2)] = null);

(statearr_29117_29200[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (20))){
var inst_29014 = (state_29111[(12)]);
var inst_29022 = figwheel.client.file_reloading.sort_files.call(null,inst_29014);
var state_29111__$1 = state_29111;
var statearr_29118_29201 = state_29111__$1;
(statearr_29118_29201[(2)] = inst_29022);

(statearr_29118_29201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (27))){
var state_29111__$1 = state_29111;
var statearr_29119_29202 = state_29111__$1;
(statearr_29119_29202[(2)] = null);

(statearr_29119_29202[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (1))){
var inst_28963 = (state_29111[(13)]);
var inst_28960 = before_jsload.call(null,files);
var inst_28961 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28962 = (function (){return ((function (inst_28963,inst_28960,inst_28961,state_val_29112,c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28951_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28951_SHARP_);
});
;})(inst_28963,inst_28960,inst_28961,state_val_29112,c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28963__$1 = cljs.core.filter.call(null,inst_28962,files);
var inst_28964 = cljs.core.not_empty.call(null,inst_28963__$1);
var state_29111__$1 = (function (){var statearr_29120 = state_29111;
(statearr_29120[(13)] = inst_28963__$1);

(statearr_29120[(14)] = inst_28960);

(statearr_29120[(15)] = inst_28961);

return statearr_29120;
})();
if(cljs.core.truth_(inst_28964)){
var statearr_29121_29203 = state_29111__$1;
(statearr_29121_29203[(1)] = (2));

} else {
var statearr_29122_29204 = state_29111__$1;
(statearr_29122_29204[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (24))){
var state_29111__$1 = state_29111;
var statearr_29123_29205 = state_29111__$1;
(statearr_29123_29205[(2)] = null);

(statearr_29123_29205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (39))){
var inst_29064 = (state_29111[(16)]);
var state_29111__$1 = state_29111;
var statearr_29124_29206 = state_29111__$1;
(statearr_29124_29206[(2)] = inst_29064);

(statearr_29124_29206[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (46))){
var inst_29106 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29125_29207 = state_29111__$1;
(statearr_29125_29207[(2)] = inst_29106);

(statearr_29125_29207[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (4))){
var inst_29008 = (state_29111[(2)]);
var inst_29009 = cljs.core.List.EMPTY;
var inst_29010 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29009);
var inst_29011 = (function (){return ((function (inst_29008,inst_29009,inst_29010,state_val_29112,c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28952_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28952_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28952_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28952_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_29008,inst_29009,inst_29010,state_val_29112,c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29012 = cljs.core.filter.call(null,inst_29011,files);
var inst_29013 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29014 = cljs.core.concat.call(null,inst_29012,inst_29013);
var state_29111__$1 = (function (){var statearr_29126 = state_29111;
(statearr_29126[(17)] = inst_29008);

(statearr_29126[(12)] = inst_29014);

(statearr_29126[(18)] = inst_29010);

return statearr_29126;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29127_29208 = state_29111__$1;
(statearr_29127_29208[(1)] = (16));

} else {
var statearr_29128_29209 = state_29111__$1;
(statearr_29128_29209[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (15))){
var inst_28998 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29129_29210 = state_29111__$1;
(statearr_29129_29210[(2)] = inst_28998);

(statearr_29129_29210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (21))){
var inst_29024 = (state_29111[(19)]);
var inst_29024__$1 = (state_29111[(2)]);
var inst_29025 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29024__$1);
var state_29111__$1 = (function (){var statearr_29130 = state_29111;
(statearr_29130[(19)] = inst_29024__$1);

return statearr_29130;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29111__$1,(22),inst_29025);
} else {
if((state_val_29112 === (31))){
var inst_29109 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29111__$1,inst_29109);
} else {
if((state_val_29112 === (32))){
var inst_29064 = (state_29111[(16)]);
var inst_29069 = inst_29064.cljs$lang$protocol_mask$partition0$;
var inst_29070 = (inst_29069 & (64));
var inst_29071 = inst_29064.cljs$core$ISeq$;
var inst_29072 = (cljs.core.PROTOCOL_SENTINEL === inst_29071);
var inst_29073 = ((inst_29070) || (inst_29072));
var state_29111__$1 = state_29111;
if(cljs.core.truth_(inst_29073)){
var statearr_29131_29211 = state_29111__$1;
(statearr_29131_29211[(1)] = (35));

} else {
var statearr_29132_29212 = state_29111__$1;
(statearr_29132_29212[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (40))){
var inst_29086 = (state_29111[(20)]);
var inst_29085 = (state_29111[(2)]);
var inst_29086__$1 = cljs.core.get.call(null,inst_29085,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29087 = cljs.core.get.call(null,inst_29085,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29088 = cljs.core.not_empty.call(null,inst_29086__$1);
var state_29111__$1 = (function (){var statearr_29133 = state_29111;
(statearr_29133[(20)] = inst_29086__$1);

(statearr_29133[(21)] = inst_29087);

return statearr_29133;
})();
if(cljs.core.truth_(inst_29088)){
var statearr_29134_29213 = state_29111__$1;
(statearr_29134_29213[(1)] = (41));

} else {
var statearr_29135_29214 = state_29111__$1;
(statearr_29135_29214[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (33))){
var state_29111__$1 = state_29111;
var statearr_29136_29215 = state_29111__$1;
(statearr_29136_29215[(2)] = false);

(statearr_29136_29215[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (13))){
var inst_28984 = (state_29111[(22)]);
var inst_28988 = cljs.core.chunk_first.call(null,inst_28984);
var inst_28989 = cljs.core.chunk_rest.call(null,inst_28984);
var inst_28990 = cljs.core.count.call(null,inst_28988);
var inst_28971 = inst_28989;
var inst_28972 = inst_28988;
var inst_28973 = inst_28990;
var inst_28974 = (0);
var state_29111__$1 = (function (){var statearr_29137 = state_29111;
(statearr_29137[(7)] = inst_28973);

(statearr_29137[(8)] = inst_28974);

(statearr_29137[(9)] = inst_28972);

(statearr_29137[(10)] = inst_28971);

return statearr_29137;
})();
var statearr_29138_29216 = state_29111__$1;
(statearr_29138_29216[(2)] = null);

(statearr_29138_29216[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (22))){
var inst_29024 = (state_29111[(19)]);
var inst_29027 = (state_29111[(23)]);
var inst_29032 = (state_29111[(24)]);
var inst_29028 = (state_29111[(25)]);
var inst_29027__$1 = (state_29111[(2)]);
var inst_29028__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29027__$1);
var inst_29029 = (function (){var all_files = inst_29024;
var res_SINGLEQUOTE_ = inst_29027__$1;
var res = inst_29028__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29024,inst_29027,inst_29032,inst_29028,inst_29027__$1,inst_29028__$1,state_val_29112,c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28953_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28953_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29024,inst_29027,inst_29032,inst_29028,inst_29027__$1,inst_29028__$1,state_val_29112,c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29030 = cljs.core.filter.call(null,inst_29029,inst_29027__$1);
var inst_29031 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29032__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29031);
var inst_29033 = cljs.core.not_empty.call(null,inst_29032__$1);
var state_29111__$1 = (function (){var statearr_29139 = state_29111;
(statearr_29139[(26)] = inst_29030);

(statearr_29139[(23)] = inst_29027__$1);

(statearr_29139[(24)] = inst_29032__$1);

(statearr_29139[(25)] = inst_29028__$1);

return statearr_29139;
})();
if(cljs.core.truth_(inst_29033)){
var statearr_29140_29217 = state_29111__$1;
(statearr_29140_29217[(1)] = (23));

} else {
var statearr_29141_29218 = state_29111__$1;
(statearr_29141_29218[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (36))){
var state_29111__$1 = state_29111;
var statearr_29142_29219 = state_29111__$1;
(statearr_29142_29219[(2)] = false);

(statearr_29142_29219[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (41))){
var inst_29086 = (state_29111[(20)]);
var inst_29090 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29091 = cljs.core.map.call(null,inst_29090,inst_29086);
var inst_29092 = cljs.core.pr_str.call(null,inst_29091);
var inst_29093 = ["figwheel-no-load meta-data: ",inst_29092].join('');
var inst_29094 = figwheel.client.utils.log.call(null,inst_29093);
var state_29111__$1 = state_29111;
var statearr_29143_29220 = state_29111__$1;
(statearr_29143_29220[(2)] = inst_29094);

(statearr_29143_29220[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (43))){
var inst_29087 = (state_29111[(21)]);
var inst_29097 = (state_29111[(2)]);
var inst_29098 = cljs.core.not_empty.call(null,inst_29087);
var state_29111__$1 = (function (){var statearr_29144 = state_29111;
(statearr_29144[(27)] = inst_29097);

return statearr_29144;
})();
if(cljs.core.truth_(inst_29098)){
var statearr_29145_29221 = state_29111__$1;
(statearr_29145_29221[(1)] = (44));

} else {
var statearr_29146_29222 = state_29111__$1;
(statearr_29146_29222[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (29))){
var inst_29024 = (state_29111[(19)]);
var inst_29064 = (state_29111[(16)]);
var inst_29030 = (state_29111[(26)]);
var inst_29027 = (state_29111[(23)]);
var inst_29032 = (state_29111[(24)]);
var inst_29028 = (state_29111[(25)]);
var inst_29060 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29063 = (function (){var all_files = inst_29024;
var res_SINGLEQUOTE_ = inst_29027;
var res = inst_29028;
var files_not_loaded = inst_29030;
var dependencies_that_loaded = inst_29032;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29024,inst_29064,inst_29030,inst_29027,inst_29032,inst_29028,inst_29060,state_val_29112,c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29062){
var map__29147 = p__29062;
var map__29147__$1 = (((((!((map__29147 == null))))?(((((map__29147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29147):map__29147);
var namespace = cljs.core.get.call(null,map__29147__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29024,inst_29064,inst_29030,inst_29027,inst_29032,inst_29028,inst_29060,state_val_29112,c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29064__$1 = cljs.core.group_by.call(null,inst_29063,inst_29030);
var inst_29066 = (inst_29064__$1 == null);
var inst_29067 = cljs.core.not.call(null,inst_29066);
var state_29111__$1 = (function (){var statearr_29149 = state_29111;
(statearr_29149[(16)] = inst_29064__$1);

(statearr_29149[(28)] = inst_29060);

return statearr_29149;
})();
if(inst_29067){
var statearr_29150_29223 = state_29111__$1;
(statearr_29150_29223[(1)] = (32));

} else {
var statearr_29151_29224 = state_29111__$1;
(statearr_29151_29224[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (44))){
var inst_29087 = (state_29111[(21)]);
var inst_29100 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29087);
var inst_29101 = cljs.core.pr_str.call(null,inst_29100);
var inst_29102 = ["not required: ",inst_29101].join('');
var inst_29103 = figwheel.client.utils.log.call(null,inst_29102);
var state_29111__$1 = state_29111;
var statearr_29152_29225 = state_29111__$1;
(statearr_29152_29225[(2)] = inst_29103);

(statearr_29152_29225[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (6))){
var inst_29005 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29153_29226 = state_29111__$1;
(statearr_29153_29226[(2)] = inst_29005);

(statearr_29153_29226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (28))){
var inst_29030 = (state_29111[(26)]);
var inst_29057 = (state_29111[(2)]);
var inst_29058 = cljs.core.not_empty.call(null,inst_29030);
var state_29111__$1 = (function (){var statearr_29154 = state_29111;
(statearr_29154[(29)] = inst_29057);

return statearr_29154;
})();
if(cljs.core.truth_(inst_29058)){
var statearr_29155_29227 = state_29111__$1;
(statearr_29155_29227[(1)] = (29));

} else {
var statearr_29156_29228 = state_29111__$1;
(statearr_29156_29228[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (25))){
var inst_29028 = (state_29111[(25)]);
var inst_29044 = (state_29111[(2)]);
var inst_29045 = cljs.core.not_empty.call(null,inst_29028);
var state_29111__$1 = (function (){var statearr_29157 = state_29111;
(statearr_29157[(30)] = inst_29044);

return statearr_29157;
})();
if(cljs.core.truth_(inst_29045)){
var statearr_29158_29229 = state_29111__$1;
(statearr_29158_29229[(1)] = (26));

} else {
var statearr_29159_29230 = state_29111__$1;
(statearr_29159_29230[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (34))){
var inst_29080 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
if(cljs.core.truth_(inst_29080)){
var statearr_29160_29231 = state_29111__$1;
(statearr_29160_29231[(1)] = (38));

} else {
var statearr_29161_29232 = state_29111__$1;
(statearr_29161_29232[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (17))){
var state_29111__$1 = state_29111;
var statearr_29162_29233 = state_29111__$1;
(statearr_29162_29233[(2)] = recompile_dependents);

(statearr_29162_29233[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (3))){
var state_29111__$1 = state_29111;
var statearr_29163_29234 = state_29111__$1;
(statearr_29163_29234[(2)] = null);

(statearr_29163_29234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (12))){
var inst_29001 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29164_29235 = state_29111__$1;
(statearr_29164_29235[(2)] = inst_29001);

(statearr_29164_29235[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (2))){
var inst_28963 = (state_29111[(13)]);
var inst_28970 = cljs.core.seq.call(null,inst_28963);
var inst_28971 = inst_28970;
var inst_28972 = null;
var inst_28973 = (0);
var inst_28974 = (0);
var state_29111__$1 = (function (){var statearr_29165 = state_29111;
(statearr_29165[(7)] = inst_28973);

(statearr_29165[(8)] = inst_28974);

(statearr_29165[(9)] = inst_28972);

(statearr_29165[(10)] = inst_28971);

return statearr_29165;
})();
var statearr_29166_29236 = state_29111__$1;
(statearr_29166_29236[(2)] = null);

(statearr_29166_29236[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (23))){
var inst_29024 = (state_29111[(19)]);
var inst_29030 = (state_29111[(26)]);
var inst_29027 = (state_29111[(23)]);
var inst_29032 = (state_29111[(24)]);
var inst_29028 = (state_29111[(25)]);
var inst_29035 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29037 = (function (){var all_files = inst_29024;
var res_SINGLEQUOTE_ = inst_29027;
var res = inst_29028;
var files_not_loaded = inst_29030;
var dependencies_that_loaded = inst_29032;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29024,inst_29030,inst_29027,inst_29032,inst_29028,inst_29035,state_val_29112,c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29036){
var map__29167 = p__29036;
var map__29167__$1 = (((((!((map__29167 == null))))?(((((map__29167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29167):map__29167);
var request_url = cljs.core.get.call(null,map__29167__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29024,inst_29030,inst_29027,inst_29032,inst_29028,inst_29035,state_val_29112,c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29038 = cljs.core.reverse.call(null,inst_29032);
var inst_29039 = cljs.core.map.call(null,inst_29037,inst_29038);
var inst_29040 = cljs.core.pr_str.call(null,inst_29039);
var inst_29041 = figwheel.client.utils.log.call(null,inst_29040);
var state_29111__$1 = (function (){var statearr_29169 = state_29111;
(statearr_29169[(31)] = inst_29035);

return statearr_29169;
})();
var statearr_29170_29237 = state_29111__$1;
(statearr_29170_29237[(2)] = inst_29041);

(statearr_29170_29237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (35))){
var state_29111__$1 = state_29111;
var statearr_29171_29238 = state_29111__$1;
(statearr_29171_29238[(2)] = true);

(statearr_29171_29238[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (19))){
var inst_29014 = (state_29111[(12)]);
var inst_29020 = figwheel.client.file_reloading.expand_files.call(null,inst_29014);
var state_29111__$1 = state_29111;
var statearr_29172_29239 = state_29111__$1;
(statearr_29172_29239[(2)] = inst_29020);

(statearr_29172_29239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (11))){
var state_29111__$1 = state_29111;
var statearr_29173_29240 = state_29111__$1;
(statearr_29173_29240[(2)] = null);

(statearr_29173_29240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (9))){
var inst_29003 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29174_29241 = state_29111__$1;
(statearr_29174_29241[(2)] = inst_29003);

(statearr_29174_29241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (5))){
var inst_28973 = (state_29111[(7)]);
var inst_28974 = (state_29111[(8)]);
var inst_28976 = (inst_28974 < inst_28973);
var inst_28977 = inst_28976;
var state_29111__$1 = state_29111;
if(cljs.core.truth_(inst_28977)){
var statearr_29175_29242 = state_29111__$1;
(statearr_29175_29242[(1)] = (7));

} else {
var statearr_29176_29243 = state_29111__$1;
(statearr_29176_29243[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (14))){
var inst_28984 = (state_29111[(22)]);
var inst_28993 = cljs.core.first.call(null,inst_28984);
var inst_28994 = figwheel.client.file_reloading.eval_body.call(null,inst_28993,opts);
var inst_28995 = cljs.core.next.call(null,inst_28984);
var inst_28971 = inst_28995;
var inst_28972 = null;
var inst_28973 = (0);
var inst_28974 = (0);
var state_29111__$1 = (function (){var statearr_29177 = state_29111;
(statearr_29177[(7)] = inst_28973);

(statearr_29177[(32)] = inst_28994);

(statearr_29177[(8)] = inst_28974);

(statearr_29177[(9)] = inst_28972);

(statearr_29177[(10)] = inst_28971);

return statearr_29177;
})();
var statearr_29178_29244 = state_29111__$1;
(statearr_29178_29244[(2)] = null);

(statearr_29178_29244[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (45))){
var state_29111__$1 = state_29111;
var statearr_29179_29245 = state_29111__$1;
(statearr_29179_29245[(2)] = null);

(statearr_29179_29245[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (26))){
var inst_29024 = (state_29111[(19)]);
var inst_29030 = (state_29111[(26)]);
var inst_29027 = (state_29111[(23)]);
var inst_29032 = (state_29111[(24)]);
var inst_29028 = (state_29111[(25)]);
var inst_29047 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29049 = (function (){var all_files = inst_29024;
var res_SINGLEQUOTE_ = inst_29027;
var res = inst_29028;
var files_not_loaded = inst_29030;
var dependencies_that_loaded = inst_29032;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29024,inst_29030,inst_29027,inst_29032,inst_29028,inst_29047,state_val_29112,c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29048){
var map__29180 = p__29048;
var map__29180__$1 = (((((!((map__29180 == null))))?(((((map__29180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29180):map__29180);
var namespace = cljs.core.get.call(null,map__29180__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29180__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29024,inst_29030,inst_29027,inst_29032,inst_29028,inst_29047,state_val_29112,c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29050 = cljs.core.map.call(null,inst_29049,inst_29028);
var inst_29051 = cljs.core.pr_str.call(null,inst_29050);
var inst_29052 = figwheel.client.utils.log.call(null,inst_29051);
var inst_29053 = (function (){var all_files = inst_29024;
var res_SINGLEQUOTE_ = inst_29027;
var res = inst_29028;
var files_not_loaded = inst_29030;
var dependencies_that_loaded = inst_29032;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29024,inst_29030,inst_29027,inst_29032,inst_29028,inst_29047,inst_29049,inst_29050,inst_29051,inst_29052,state_val_29112,c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29024,inst_29030,inst_29027,inst_29032,inst_29028,inst_29047,inst_29049,inst_29050,inst_29051,inst_29052,state_val_29112,c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29054 = setTimeout(inst_29053,(10));
var state_29111__$1 = (function (){var statearr_29182 = state_29111;
(statearr_29182[(33)] = inst_29047);

(statearr_29182[(34)] = inst_29052);

return statearr_29182;
})();
var statearr_29183_29246 = state_29111__$1;
(statearr_29183_29246[(2)] = inst_29054);

(statearr_29183_29246[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (16))){
var state_29111__$1 = state_29111;
var statearr_29184_29247 = state_29111__$1;
(statearr_29184_29247[(2)] = reload_dependents);

(statearr_29184_29247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (38))){
var inst_29064 = (state_29111[(16)]);
var inst_29082 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29064);
var state_29111__$1 = state_29111;
var statearr_29185_29248 = state_29111__$1;
(statearr_29185_29248[(2)] = inst_29082);

(statearr_29185_29248[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (30))){
var state_29111__$1 = state_29111;
var statearr_29186_29249 = state_29111__$1;
(statearr_29186_29249[(2)] = null);

(statearr_29186_29249[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (10))){
var inst_28984 = (state_29111[(22)]);
var inst_28986 = cljs.core.chunked_seq_QMARK_.call(null,inst_28984);
var state_29111__$1 = state_29111;
if(inst_28986){
var statearr_29187_29250 = state_29111__$1;
(statearr_29187_29250[(1)] = (13));

} else {
var statearr_29188_29251 = state_29111__$1;
(statearr_29188_29251[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (18))){
var inst_29018 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
if(cljs.core.truth_(inst_29018)){
var statearr_29189_29252 = state_29111__$1;
(statearr_29189_29252[(1)] = (19));

} else {
var statearr_29190_29253 = state_29111__$1;
(statearr_29190_29253[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (42))){
var state_29111__$1 = state_29111;
var statearr_29191_29254 = state_29111__$1;
(statearr_29191_29254[(2)] = null);

(statearr_29191_29254[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (37))){
var inst_29077 = (state_29111[(2)]);
var state_29111__$1 = state_29111;
var statearr_29192_29255 = state_29111__$1;
(statearr_29192_29255[(2)] = inst_29077);

(statearr_29192_29255[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29112 === (8))){
var inst_28971 = (state_29111[(10)]);
var inst_28984 = (state_29111[(22)]);
var inst_28984__$1 = cljs.core.seq.call(null,inst_28971);
var state_29111__$1 = (function (){var statearr_29193 = state_29111;
(statearr_29193[(22)] = inst_28984__$1);

return statearr_29193;
})();
if(inst_28984__$1){
var statearr_29194_29256 = state_29111__$1;
(statearr_29194_29256[(1)] = (10));

} else {
var statearr_29195_29257 = state_29111__$1;
(statearr_29195_29257[(1)] = (11));

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
}
});})(c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26395__auto__,c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26396__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26396__auto____0 = (function (){
var statearr_29196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29196[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26396__auto__);

(statearr_29196[(1)] = (1));

return statearr_29196;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26396__auto____1 = (function (state_29111){
while(true){
var ret_value__26397__auto__ = (function (){try{while(true){
var result__26398__auto__ = switch__26395__auto__.call(null,state_29111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26398__auto__;
}
break;
}
}catch (e29197){if((e29197 instanceof Object)){
var ex__26399__auto__ = e29197;
var statearr_29198_29258 = state_29111;
(statearr_29198_29258[(5)] = ex__26399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29259 = state_29111;
state_29111 = G__29259;
continue;
} else {
return ret_value__26397__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26396__auto__ = function(state_29111){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26396__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26396__auto____1.call(this,state_29111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26396__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26396__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26396__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26396__auto__;
})()
;})(switch__26395__auto__,c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26492__auto__ = (function (){var statearr_29199 = f__26491__auto__.call(null);
(statearr_29199[(6)] = c__26490__auto__);

return statearr_29199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26492__auto__);
});})(c__26490__auto__,map__28956,map__28956__$1,opts,before_jsload,on_jsload,reload_dependents,map__28957,map__28957__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26490__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29262,link){
var map__29263 = p__29262;
var map__29263__$1 = (((((!((map__29263 == null))))?(((((map__29263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29263):map__29263);
var file = cljs.core.get.call(null,map__29263__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__29263,map__29263__$1,file){
return (function (p1__29260_SHARP_,p2__29261_SHARP_){
if(cljs.core._EQ_.call(null,p1__29260_SHARP_,p2__29261_SHARP_)){
return p1__29260_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__29263,map__29263__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29266){
var map__29267 = p__29266;
var map__29267__$1 = (((((!((map__29267 == null))))?(((((map__29267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29267):map__29267);
var match_length = cljs.core.get.call(null,map__29267__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29267__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29265_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29265_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29269_SHARP_,p2__29270_SHARP_){
return cljs.core.assoc.call(null,p1__29269_SHARP_,cljs.core.get.call(null,p2__29270_SHARP_,key),p2__29270_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29271 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29271);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29271);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29272,p__29273){
var map__29274 = p__29272;
var map__29274__$1 = (((((!((map__29274 == null))))?(((((map__29274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29274):map__29274);
var on_cssload = cljs.core.get.call(null,map__29274__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29275 = p__29273;
var map__29275__$1 = (((((!((map__29275 == null))))?(((((map__29275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29275):map__29275);
var files_msg = map__29275__$1;
var files = cljs.core.get.call(null,map__29275__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1620419392230
