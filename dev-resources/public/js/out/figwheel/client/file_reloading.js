// Compiled by ClojureScript 1.9.93 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27867__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27867__auto__){
return or__27867__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27867__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38985_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38985_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
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
var seq__38990 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38991 = null;
var count__38992 = (0);
var i__38993 = (0);
while(true){
if((i__38993 < count__38992)){
var n = cljs.core._nth.call(null,chunk__38991,i__38993);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38994 = seq__38990;
var G__38995 = chunk__38991;
var G__38996 = count__38992;
var G__38997 = (i__38993 + (1));
seq__38990 = G__38994;
chunk__38991 = G__38995;
count__38992 = G__38996;
i__38993 = G__38997;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38990);
if(temp__4657__auto__){
var seq__38990__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38990__$1)){
var c__28678__auto__ = cljs.core.chunk_first.call(null,seq__38990__$1);
var G__38998 = cljs.core.chunk_rest.call(null,seq__38990__$1);
var G__38999 = c__28678__auto__;
var G__39000 = cljs.core.count.call(null,c__28678__auto__);
var G__39001 = (0);
seq__38990 = G__38998;
chunk__38991 = G__38999;
count__38992 = G__39000;
i__38993 = G__39001;
continue;
} else {
var n = cljs.core.first.call(null,seq__38990__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39002 = cljs.core.next.call(null,seq__38990__$1);
var G__39003 = null;
var G__39004 = (0);
var G__39005 = (0);
seq__38990 = G__39002;
chunk__38991 = G__39003;
count__38992 = G__39004;
i__38993 = G__39005;
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

var seq__39056_39067 = cljs.core.seq.call(null,deps);
var chunk__39057_39068 = null;
var count__39058_39069 = (0);
var i__39059_39070 = (0);
while(true){
if((i__39059_39070 < count__39058_39069)){
var dep_39071 = cljs.core._nth.call(null,chunk__39057_39068,i__39059_39070);
topo_sort_helper_STAR_.call(null,dep_39071,(depth + (1)),state);

var G__39072 = seq__39056_39067;
var G__39073 = chunk__39057_39068;
var G__39074 = count__39058_39069;
var G__39075 = (i__39059_39070 + (1));
seq__39056_39067 = G__39072;
chunk__39057_39068 = G__39073;
count__39058_39069 = G__39074;
i__39059_39070 = G__39075;
continue;
} else {
var temp__4657__auto___39076 = cljs.core.seq.call(null,seq__39056_39067);
if(temp__4657__auto___39076){
var seq__39056_39077__$1 = temp__4657__auto___39076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39056_39077__$1)){
var c__28678__auto___39078 = cljs.core.chunk_first.call(null,seq__39056_39077__$1);
var G__39079 = cljs.core.chunk_rest.call(null,seq__39056_39077__$1);
var G__39080 = c__28678__auto___39078;
var G__39081 = cljs.core.count.call(null,c__28678__auto___39078);
var G__39082 = (0);
seq__39056_39067 = G__39079;
chunk__39057_39068 = G__39080;
count__39058_39069 = G__39081;
i__39059_39070 = G__39082;
continue;
} else {
var dep_39083 = cljs.core.first.call(null,seq__39056_39077__$1);
topo_sort_helper_STAR_.call(null,dep_39083,(depth + (1)),state);

var G__39084 = cljs.core.next.call(null,seq__39056_39077__$1);
var G__39085 = null;
var G__39086 = (0);
var G__39087 = (0);
seq__39056_39067 = G__39084;
chunk__39057_39068 = G__39085;
count__39058_39069 = G__39086;
i__39059_39070 = G__39087;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39060){
var vec__39064 = p__39060;
var seq__39065 = cljs.core.seq.call(null,vec__39064);
var first__39066 = cljs.core.first.call(null,seq__39065);
var seq__39065__$1 = cljs.core.next.call(null,seq__39065);
var x = first__39066;
var xs = seq__39065__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39064,seq__39065,first__39066,seq__39065__$1,x,xs,get_deps__$1){
return (function (p1__39006_SHARP_){
return clojure.set.difference.call(null,p1__39006_SHARP_,x);
});})(vec__39064,seq__39065,first__39066,seq__39065__$1,x,xs,get_deps__$1))
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
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__39100 = cljs.core.seq.call(null,provides);
var chunk__39101 = null;
var count__39102 = (0);
var i__39103 = (0);
while(true){
if((i__39103 < count__39102)){
var prov = cljs.core._nth.call(null,chunk__39101,i__39103);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39104_39112 = cljs.core.seq.call(null,requires);
var chunk__39105_39113 = null;
var count__39106_39114 = (0);
var i__39107_39115 = (0);
while(true){
if((i__39107_39115 < count__39106_39114)){
var req_39116 = cljs.core._nth.call(null,chunk__39105_39113,i__39107_39115);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39116,prov);

var G__39117 = seq__39104_39112;
var G__39118 = chunk__39105_39113;
var G__39119 = count__39106_39114;
var G__39120 = (i__39107_39115 + (1));
seq__39104_39112 = G__39117;
chunk__39105_39113 = G__39118;
count__39106_39114 = G__39119;
i__39107_39115 = G__39120;
continue;
} else {
var temp__4657__auto___39121 = cljs.core.seq.call(null,seq__39104_39112);
if(temp__4657__auto___39121){
var seq__39104_39122__$1 = temp__4657__auto___39121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39104_39122__$1)){
var c__28678__auto___39123 = cljs.core.chunk_first.call(null,seq__39104_39122__$1);
var G__39124 = cljs.core.chunk_rest.call(null,seq__39104_39122__$1);
var G__39125 = c__28678__auto___39123;
var G__39126 = cljs.core.count.call(null,c__28678__auto___39123);
var G__39127 = (0);
seq__39104_39112 = G__39124;
chunk__39105_39113 = G__39125;
count__39106_39114 = G__39126;
i__39107_39115 = G__39127;
continue;
} else {
var req_39128 = cljs.core.first.call(null,seq__39104_39122__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39128,prov);

var G__39129 = cljs.core.next.call(null,seq__39104_39122__$1);
var G__39130 = null;
var G__39131 = (0);
var G__39132 = (0);
seq__39104_39112 = G__39129;
chunk__39105_39113 = G__39130;
count__39106_39114 = G__39131;
i__39107_39115 = G__39132;
continue;
}
} else {
}
}
break;
}

var G__39133 = seq__39100;
var G__39134 = chunk__39101;
var G__39135 = count__39102;
var G__39136 = (i__39103 + (1));
seq__39100 = G__39133;
chunk__39101 = G__39134;
count__39102 = G__39135;
i__39103 = G__39136;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39100);
if(temp__4657__auto__){
var seq__39100__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39100__$1)){
var c__28678__auto__ = cljs.core.chunk_first.call(null,seq__39100__$1);
var G__39137 = cljs.core.chunk_rest.call(null,seq__39100__$1);
var G__39138 = c__28678__auto__;
var G__39139 = cljs.core.count.call(null,c__28678__auto__);
var G__39140 = (0);
seq__39100 = G__39137;
chunk__39101 = G__39138;
count__39102 = G__39139;
i__39103 = G__39140;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39100__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39108_39141 = cljs.core.seq.call(null,requires);
var chunk__39109_39142 = null;
var count__39110_39143 = (0);
var i__39111_39144 = (0);
while(true){
if((i__39111_39144 < count__39110_39143)){
var req_39145 = cljs.core._nth.call(null,chunk__39109_39142,i__39111_39144);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39145,prov);

var G__39146 = seq__39108_39141;
var G__39147 = chunk__39109_39142;
var G__39148 = count__39110_39143;
var G__39149 = (i__39111_39144 + (1));
seq__39108_39141 = G__39146;
chunk__39109_39142 = G__39147;
count__39110_39143 = G__39148;
i__39111_39144 = G__39149;
continue;
} else {
var temp__4657__auto___39150__$1 = cljs.core.seq.call(null,seq__39108_39141);
if(temp__4657__auto___39150__$1){
var seq__39108_39151__$1 = temp__4657__auto___39150__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39108_39151__$1)){
var c__28678__auto___39152 = cljs.core.chunk_first.call(null,seq__39108_39151__$1);
var G__39153 = cljs.core.chunk_rest.call(null,seq__39108_39151__$1);
var G__39154 = c__28678__auto___39152;
var G__39155 = cljs.core.count.call(null,c__28678__auto___39152);
var G__39156 = (0);
seq__39108_39141 = G__39153;
chunk__39109_39142 = G__39154;
count__39110_39143 = G__39155;
i__39111_39144 = G__39156;
continue;
} else {
var req_39157 = cljs.core.first.call(null,seq__39108_39151__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39157,prov);

var G__39158 = cljs.core.next.call(null,seq__39108_39151__$1);
var G__39159 = null;
var G__39160 = (0);
var G__39161 = (0);
seq__39108_39141 = G__39158;
chunk__39109_39142 = G__39159;
count__39110_39143 = G__39160;
i__39111_39144 = G__39161;
continue;
}
} else {
}
}
break;
}

var G__39162 = cljs.core.next.call(null,seq__39100__$1);
var G__39163 = null;
var G__39164 = (0);
var G__39165 = (0);
seq__39100 = G__39162;
chunk__39101 = G__39163;
count__39102 = G__39164;
i__39103 = G__39165;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__39170_39174 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39171_39175 = null;
var count__39172_39176 = (0);
var i__39173_39177 = (0);
while(true){
if((i__39173_39177 < count__39172_39176)){
var ns_39178 = cljs.core._nth.call(null,chunk__39171_39175,i__39173_39177);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39178);

var G__39179 = seq__39170_39174;
var G__39180 = chunk__39171_39175;
var G__39181 = count__39172_39176;
var G__39182 = (i__39173_39177 + (1));
seq__39170_39174 = G__39179;
chunk__39171_39175 = G__39180;
count__39172_39176 = G__39181;
i__39173_39177 = G__39182;
continue;
} else {
var temp__4657__auto___39183 = cljs.core.seq.call(null,seq__39170_39174);
if(temp__4657__auto___39183){
var seq__39170_39184__$1 = temp__4657__auto___39183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39170_39184__$1)){
var c__28678__auto___39185 = cljs.core.chunk_first.call(null,seq__39170_39184__$1);
var G__39186 = cljs.core.chunk_rest.call(null,seq__39170_39184__$1);
var G__39187 = c__28678__auto___39185;
var G__39188 = cljs.core.count.call(null,c__28678__auto___39185);
var G__39189 = (0);
seq__39170_39174 = G__39186;
chunk__39171_39175 = G__39187;
count__39172_39176 = G__39188;
i__39173_39177 = G__39189;
continue;
} else {
var ns_39190 = cljs.core.first.call(null,seq__39170_39184__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39190);

var G__39191 = cljs.core.next.call(null,seq__39170_39184__$1);
var G__39192 = null;
var G__39193 = (0);
var G__39194 = (0);
seq__39170_39174 = G__39191;
chunk__39171_39175 = G__39192;
count__39172_39176 = G__39193;
i__39173_39177 = G__39194;
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
goog.require_figwheel_backup_ = (function (){var or__27867__auto__ = goog.require__;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
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
var G__39195__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39196__i = 0, G__39196__a = new Array(arguments.length -  0);
while (G__39196__i < G__39196__a.length) {G__39196__a[G__39196__i] = arguments[G__39196__i + 0]; ++G__39196__i;}
  args = new cljs.core.IndexedSeq(G__39196__a,0);
} 
return G__39195__delegate.call(this,args);};
G__39195.cljs$lang$maxFixedArity = 0;
G__39195.cljs$lang$applyTo = (function (arglist__39197){
var args = cljs.core.seq(arglist__39197);
return G__39195__delegate(args);
});
G__39195.cljs$core$IFn$_invoke$arity$variadic = G__39195__delegate;
return G__39195;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39199 = cljs.core._EQ_;
var expr__39200 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39199.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39200))){
var path_parts = ((function (pred__39199,expr__39200){
return (function (p1__39198_SHARP_){
return clojure.string.split.call(null,p1__39198_SHARP_,/[\/\\]/);
});})(pred__39199,expr__39200))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__39199,expr__39200){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39202){if((e39202 instanceof Error)){
var e = e39202;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39202;

}
}})());
});
;})(path_parts,sep,root,pred__39199,expr__39200))
} else {
if(cljs.core.truth_(pred__39199.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39200))){
return ((function (pred__39199,expr__39200){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__39199,expr__39200){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__39199,expr__39200))
);

return deferred.addErrback(((function (deferred,pred__39199,expr__39200){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__39199,expr__39200))
);
});
;})(pred__39199,expr__39200))
} else {
return ((function (pred__39199,expr__39200){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39199,expr__39200))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39203,callback){
var map__39206 = p__39203;
var map__39206__$1 = ((((!((map__39206 == null)))?((((map__39206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39206):map__39206);
var file_msg = map__39206__$1;
var request_url = cljs.core.get.call(null,map__39206__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39206,map__39206__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39206,map__39206__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
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
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto__){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto__){
return (function (state_39230){
var state_val_39231 = (state_39230[(1)]);
if((state_val_39231 === (7))){
var inst_39226 = (state_39230[(2)]);
var state_39230__$1 = state_39230;
var statearr_39232_39252 = state_39230__$1;
(statearr_39232_39252[(2)] = inst_39226);

(statearr_39232_39252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39231 === (1))){
var state_39230__$1 = state_39230;
var statearr_39233_39253 = state_39230__$1;
(statearr_39233_39253[(2)] = null);

(statearr_39233_39253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39231 === (4))){
var inst_39210 = (state_39230[(7)]);
var inst_39210__$1 = (state_39230[(2)]);
var state_39230__$1 = (function (){var statearr_39234 = state_39230;
(statearr_39234[(7)] = inst_39210__$1);

return statearr_39234;
})();
if(cljs.core.truth_(inst_39210__$1)){
var statearr_39235_39254 = state_39230__$1;
(statearr_39235_39254[(1)] = (5));

} else {
var statearr_39236_39255 = state_39230__$1;
(statearr_39236_39255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39231 === (6))){
var state_39230__$1 = state_39230;
var statearr_39237_39256 = state_39230__$1;
(statearr_39237_39256[(2)] = null);

(statearr_39237_39256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39231 === (3))){
var inst_39228 = (state_39230[(2)]);
var state_39230__$1 = state_39230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39230__$1,inst_39228);
} else {
if((state_val_39231 === (2))){
var state_39230__$1 = state_39230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39230__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39231 === (11))){
var inst_39222 = (state_39230[(2)]);
var state_39230__$1 = (function (){var statearr_39238 = state_39230;
(statearr_39238[(8)] = inst_39222);

return statearr_39238;
})();
var statearr_39239_39257 = state_39230__$1;
(statearr_39239_39257[(2)] = null);

(statearr_39239_39257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39231 === (9))){
var inst_39216 = (state_39230[(9)]);
var inst_39214 = (state_39230[(10)]);
var inst_39218 = inst_39216.call(null,inst_39214);
var state_39230__$1 = state_39230;
var statearr_39240_39258 = state_39230__$1;
(statearr_39240_39258[(2)] = inst_39218);

(statearr_39240_39258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39231 === (5))){
var inst_39210 = (state_39230[(7)]);
var inst_39212 = figwheel.client.file_reloading.blocking_load.call(null,inst_39210);
var state_39230__$1 = state_39230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39230__$1,(8),inst_39212);
} else {
if((state_val_39231 === (10))){
var inst_39214 = (state_39230[(10)]);
var inst_39220 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39214);
var state_39230__$1 = state_39230;
var statearr_39241_39259 = state_39230__$1;
(statearr_39241_39259[(2)] = inst_39220);

(statearr_39241_39259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39231 === (8))){
var inst_39216 = (state_39230[(9)]);
var inst_39210 = (state_39230[(7)]);
var inst_39214 = (state_39230[(2)]);
var inst_39215 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39216__$1 = cljs.core.get.call(null,inst_39215,inst_39210);
var state_39230__$1 = (function (){var statearr_39242 = state_39230;
(statearr_39242[(9)] = inst_39216__$1);

(statearr_39242[(10)] = inst_39214);

return statearr_39242;
})();
if(cljs.core.truth_(inst_39216__$1)){
var statearr_39243_39260 = state_39230__$1;
(statearr_39243_39260[(1)] = (9));

} else {
var statearr_39244_39261 = state_39230__$1;
(statearr_39244_39261[(1)] = (10));

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
});})(c__33856__auto__))
;
return ((function (switch__33744__auto__,c__33856__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33745__auto__ = null;
var figwheel$client$file_reloading$state_machine__33745__auto____0 = (function (){
var statearr_39248 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39248[(0)] = figwheel$client$file_reloading$state_machine__33745__auto__);

(statearr_39248[(1)] = (1));

return statearr_39248;
});
var figwheel$client$file_reloading$state_machine__33745__auto____1 = (function (state_39230){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_39230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e39249){if((e39249 instanceof Object)){
var ex__33748__auto__ = e39249;
var statearr_39250_39262 = state_39230;
(statearr_39250_39262[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39263 = state_39230;
state_39230 = G__39263;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33745__auto__ = function(state_39230){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33745__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33745__auto____1.call(this,state_39230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33745__auto____0;
figwheel$client$file_reloading$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33745__auto____1;
return figwheel$client$file_reloading$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto__))
})();
var state__33858__auto__ = (function (){var statearr_39251 = f__33857__auto__.call(null);
(statearr_39251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto__);

return statearr_39251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto__))
);

return c__33856__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39264,callback){
var map__39267 = p__39264;
var map__39267__$1 = ((((!((map__39267 == null)))?((((map__39267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39267):map__39267);
var file_msg = map__39267__$1;
var namespace = cljs.core.get.call(null,map__39267__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39267,map__39267__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39267,map__39267__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39269){
var map__39272 = p__39269;
var map__39272__$1 = ((((!((map__39272 == null)))?((((map__39272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39272):map__39272);
var file_msg = map__39272__$1;
var namespace = cljs.core.get.call(null,map__39272__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27855__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__27855__auto__){
var or__27867__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
var or__27867__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27867__auto____$1)){
return or__27867__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27855__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39274,callback){
var map__39277 = p__39274;
var map__39277__$1 = ((((!((map__39277 == null)))?((((map__39277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39277):map__39277);
var file_msg = map__39277__$1;
var request_url = cljs.core.get.call(null,map__39277__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39277__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

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
var c__33856__auto___39381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___39381,out){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___39381,out){
return (function (state_39363){
var state_val_39364 = (state_39363[(1)]);
if((state_val_39364 === (1))){
var inst_39337 = cljs.core.seq.call(null,files);
var inst_39338 = cljs.core.first.call(null,inst_39337);
var inst_39339 = cljs.core.next.call(null,inst_39337);
var inst_39340 = files;
var state_39363__$1 = (function (){var statearr_39365 = state_39363;
(statearr_39365[(7)] = inst_39340);

(statearr_39365[(8)] = inst_39338);

(statearr_39365[(9)] = inst_39339);

return statearr_39365;
})();
var statearr_39366_39382 = state_39363__$1;
(statearr_39366_39382[(2)] = null);

(statearr_39366_39382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (2))){
var inst_39340 = (state_39363[(7)]);
var inst_39346 = (state_39363[(10)]);
var inst_39345 = cljs.core.seq.call(null,inst_39340);
var inst_39346__$1 = cljs.core.first.call(null,inst_39345);
var inst_39347 = cljs.core.next.call(null,inst_39345);
var inst_39348 = (inst_39346__$1 == null);
var inst_39349 = cljs.core.not.call(null,inst_39348);
var state_39363__$1 = (function (){var statearr_39367 = state_39363;
(statearr_39367[(11)] = inst_39347);

(statearr_39367[(10)] = inst_39346__$1);

return statearr_39367;
})();
if(inst_39349){
var statearr_39368_39383 = state_39363__$1;
(statearr_39368_39383[(1)] = (4));

} else {
var statearr_39369_39384 = state_39363__$1;
(statearr_39369_39384[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (3))){
var inst_39361 = (state_39363[(2)]);
var state_39363__$1 = state_39363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39363__$1,inst_39361);
} else {
if((state_val_39364 === (4))){
var inst_39346 = (state_39363[(10)]);
var inst_39351 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39346);
var state_39363__$1 = state_39363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39363__$1,(7),inst_39351);
} else {
if((state_val_39364 === (5))){
var inst_39357 = cljs.core.async.close_BANG_.call(null,out);
var state_39363__$1 = state_39363;
var statearr_39370_39385 = state_39363__$1;
(statearr_39370_39385[(2)] = inst_39357);

(statearr_39370_39385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (6))){
var inst_39359 = (state_39363[(2)]);
var state_39363__$1 = state_39363;
var statearr_39371_39386 = state_39363__$1;
(statearr_39371_39386[(2)] = inst_39359);

(statearr_39371_39386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (7))){
var inst_39347 = (state_39363[(11)]);
var inst_39353 = (state_39363[(2)]);
var inst_39354 = cljs.core.async.put_BANG_.call(null,out,inst_39353);
var inst_39340 = inst_39347;
var state_39363__$1 = (function (){var statearr_39372 = state_39363;
(statearr_39372[(7)] = inst_39340);

(statearr_39372[(12)] = inst_39354);

return statearr_39372;
})();
var statearr_39373_39387 = state_39363__$1;
(statearr_39373_39387[(2)] = null);

(statearr_39373_39387[(1)] = (2));


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
});})(c__33856__auto___39381,out))
;
return ((function (switch__33744__auto__,c__33856__auto___39381,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33745__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33745__auto____0 = (function (){
var statearr_39377 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39377[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33745__auto__);

(statearr_39377[(1)] = (1));

return statearr_39377;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33745__auto____1 = (function (state_39363){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_39363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e39378){if((e39378 instanceof Object)){
var ex__33748__auto__ = e39378;
var statearr_39379_39388 = state_39363;
(statearr_39379_39388[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39389 = state_39363;
state_39363 = G__39389;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33745__auto__ = function(state_39363){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33745__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33745__auto____1.call(this,state_39363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33745__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33745__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___39381,out))
})();
var state__33858__auto__ = (function (){var statearr_39380 = f__33857__auto__.call(null);
(statearr_39380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___39381);

return statearr_39380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___39381,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39390,opts){
var map__39394 = p__39390;
var map__39394__$1 = ((((!((map__39394 == null)))?((((map__39394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39394):map__39394);
var eval_body__$1 = cljs.core.get.call(null,map__39394__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39394__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27855__auto__ = eval_body__$1;
if(cljs.core.truth_(and__27855__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__27855__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39396){var e = e39396;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__39397_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39397_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.call(null,(function (p__39406){
var vec__39407 = p__39406;
var k = cljs.core.nth.call(null,vec__39407,(0),null);
var v = cljs.core.nth.call(null,vec__39407,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39410){
var vec__39411 = p__39410;
var k = cljs.core.nth.call(null,vec__39411,(0),null);
var v = cljs.core.nth.call(null,vec__39411,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39417,p__39418){
var map__39665 = p__39417;
var map__39665__$1 = ((((!((map__39665 == null)))?((((map__39665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39665):map__39665);
var opts = map__39665__$1;
var before_jsload = cljs.core.get.call(null,map__39665__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39665__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39665__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39666 = p__39418;
var map__39666__$1 = ((((!((map__39666 == null)))?((((map__39666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39666):map__39666);
var msg = map__39666__$1;
var files = cljs.core.get.call(null,map__39666__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39666__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39666__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39819){
var state_val_39820 = (state_39819[(1)]);
if((state_val_39820 === (7))){
var inst_39681 = (state_39819[(7)]);
var inst_39683 = (state_39819[(8)]);
var inst_39682 = (state_39819[(9)]);
var inst_39680 = (state_39819[(10)]);
var inst_39688 = cljs.core._nth.call(null,inst_39681,inst_39683);
var inst_39689 = figwheel.client.file_reloading.eval_body.call(null,inst_39688,opts);
var inst_39690 = (inst_39683 + (1));
var tmp39821 = inst_39681;
var tmp39822 = inst_39682;
var tmp39823 = inst_39680;
var inst_39680__$1 = tmp39823;
var inst_39681__$1 = tmp39821;
var inst_39682__$1 = tmp39822;
var inst_39683__$1 = inst_39690;
var state_39819__$1 = (function (){var statearr_39824 = state_39819;
(statearr_39824[(7)] = inst_39681__$1);

(statearr_39824[(8)] = inst_39683__$1);

(statearr_39824[(9)] = inst_39682__$1);

(statearr_39824[(10)] = inst_39680__$1);

(statearr_39824[(11)] = inst_39689);

return statearr_39824;
})();
var statearr_39825_39911 = state_39819__$1;
(statearr_39825_39911[(2)] = null);

(statearr_39825_39911[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (20))){
var inst_39723 = (state_39819[(12)]);
var inst_39731 = figwheel.client.file_reloading.sort_files.call(null,inst_39723);
var state_39819__$1 = state_39819;
var statearr_39826_39912 = state_39819__$1;
(statearr_39826_39912[(2)] = inst_39731);

(statearr_39826_39912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (27))){
var state_39819__$1 = state_39819;
var statearr_39827_39913 = state_39819__$1;
(statearr_39827_39913[(2)] = null);

(statearr_39827_39913[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (1))){
var inst_39672 = (state_39819[(13)]);
var inst_39669 = before_jsload.call(null,files);
var inst_39670 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39671 = (function (){return ((function (inst_39672,inst_39669,inst_39670,state_val_39820,c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39414_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39414_SHARP_);
});
;})(inst_39672,inst_39669,inst_39670,state_val_39820,c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39672__$1 = cljs.core.filter.call(null,inst_39671,files);
var inst_39673 = cljs.core.not_empty.call(null,inst_39672__$1);
var state_39819__$1 = (function (){var statearr_39828 = state_39819;
(statearr_39828[(14)] = inst_39670);

(statearr_39828[(13)] = inst_39672__$1);

(statearr_39828[(15)] = inst_39669);

return statearr_39828;
})();
if(cljs.core.truth_(inst_39673)){
var statearr_39829_39914 = state_39819__$1;
(statearr_39829_39914[(1)] = (2));

} else {
var statearr_39830_39915 = state_39819__$1;
(statearr_39830_39915[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (24))){
var state_39819__$1 = state_39819;
var statearr_39831_39916 = state_39819__$1;
(statearr_39831_39916[(2)] = null);

(statearr_39831_39916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (39))){
var inst_39773 = (state_39819[(16)]);
var state_39819__$1 = state_39819;
var statearr_39832_39917 = state_39819__$1;
(statearr_39832_39917[(2)] = inst_39773);

(statearr_39832_39917[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (46))){
var inst_39814 = (state_39819[(2)]);
var state_39819__$1 = state_39819;
var statearr_39833_39918 = state_39819__$1;
(statearr_39833_39918[(2)] = inst_39814);

(statearr_39833_39918[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (4))){
var inst_39717 = (state_39819[(2)]);
var inst_39718 = cljs.core.List.EMPTY;
var inst_39719 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39718);
var inst_39720 = (function (){return ((function (inst_39717,inst_39718,inst_39719,state_val_39820,c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39415_SHARP_){
var and__27855__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39415_SHARP_);
if(cljs.core.truth_(and__27855__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39415_SHARP_));
} else {
return and__27855__auto__;
}
});
;})(inst_39717,inst_39718,inst_39719,state_val_39820,c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39721 = cljs.core.filter.call(null,inst_39720,files);
var inst_39722 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39723 = cljs.core.concat.call(null,inst_39721,inst_39722);
var state_39819__$1 = (function (){var statearr_39834 = state_39819;
(statearr_39834[(17)] = inst_39717);

(statearr_39834[(18)] = inst_39719);

(statearr_39834[(12)] = inst_39723);

return statearr_39834;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39835_39919 = state_39819__$1;
(statearr_39835_39919[(1)] = (16));

} else {
var statearr_39836_39920 = state_39819__$1;
(statearr_39836_39920[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (15))){
var inst_39707 = (state_39819[(2)]);
var state_39819__$1 = state_39819;
var statearr_39837_39921 = state_39819__$1;
(statearr_39837_39921[(2)] = inst_39707);

(statearr_39837_39921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (21))){
var inst_39733 = (state_39819[(19)]);
var inst_39733__$1 = (state_39819[(2)]);
var inst_39734 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39733__$1);
var state_39819__$1 = (function (){var statearr_39838 = state_39819;
(statearr_39838[(19)] = inst_39733__$1);

return statearr_39838;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39819__$1,(22),inst_39734);
} else {
if((state_val_39820 === (31))){
var inst_39817 = (state_39819[(2)]);
var state_39819__$1 = state_39819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39819__$1,inst_39817);
} else {
if((state_val_39820 === (32))){
var inst_39773 = (state_39819[(16)]);
var inst_39778 = inst_39773.cljs$lang$protocol_mask$partition0$;
var inst_39779 = (inst_39778 & (64));
var inst_39780 = inst_39773.cljs$core$ISeq$;
var inst_39781 = (inst_39779) || (inst_39780);
var state_39819__$1 = state_39819;
if(cljs.core.truth_(inst_39781)){
var statearr_39839_39922 = state_39819__$1;
(statearr_39839_39922[(1)] = (35));

} else {
var statearr_39840_39923 = state_39819__$1;
(statearr_39840_39923[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (40))){
var inst_39794 = (state_39819[(20)]);
var inst_39793 = (state_39819[(2)]);
var inst_39794__$1 = cljs.core.get.call(null,inst_39793,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39795 = cljs.core.get.call(null,inst_39793,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39796 = cljs.core.not_empty.call(null,inst_39794__$1);
var state_39819__$1 = (function (){var statearr_39841 = state_39819;
(statearr_39841[(20)] = inst_39794__$1);

(statearr_39841[(21)] = inst_39795);

return statearr_39841;
})();
if(cljs.core.truth_(inst_39796)){
var statearr_39842_39924 = state_39819__$1;
(statearr_39842_39924[(1)] = (41));

} else {
var statearr_39843_39925 = state_39819__$1;
(statearr_39843_39925[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (33))){
var state_39819__$1 = state_39819;
var statearr_39844_39926 = state_39819__$1;
(statearr_39844_39926[(2)] = false);

(statearr_39844_39926[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (13))){
var inst_39693 = (state_39819[(22)]);
var inst_39697 = cljs.core.chunk_first.call(null,inst_39693);
var inst_39698 = cljs.core.chunk_rest.call(null,inst_39693);
var inst_39699 = cljs.core.count.call(null,inst_39697);
var inst_39680 = inst_39698;
var inst_39681 = inst_39697;
var inst_39682 = inst_39699;
var inst_39683 = (0);
var state_39819__$1 = (function (){var statearr_39845 = state_39819;
(statearr_39845[(7)] = inst_39681);

(statearr_39845[(8)] = inst_39683);

(statearr_39845[(9)] = inst_39682);

(statearr_39845[(10)] = inst_39680);

return statearr_39845;
})();
var statearr_39846_39927 = state_39819__$1;
(statearr_39846_39927[(2)] = null);

(statearr_39846_39927[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (22))){
var inst_39741 = (state_39819[(23)]);
var inst_39737 = (state_39819[(24)]);
var inst_39733 = (state_39819[(19)]);
var inst_39736 = (state_39819[(25)]);
var inst_39736__$1 = (state_39819[(2)]);
var inst_39737__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39736__$1);
var inst_39738 = (function (){var all_files = inst_39733;
var res_SINGLEQUOTE_ = inst_39736__$1;
var res = inst_39737__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39741,inst_39737,inst_39733,inst_39736,inst_39736__$1,inst_39737__$1,state_val_39820,c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39416_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39416_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39741,inst_39737,inst_39733,inst_39736,inst_39736__$1,inst_39737__$1,state_val_39820,c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39739 = cljs.core.filter.call(null,inst_39738,inst_39736__$1);
var inst_39740 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39741__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39740);
var inst_39742 = cljs.core.not_empty.call(null,inst_39741__$1);
var state_39819__$1 = (function (){var statearr_39847 = state_39819;
(statearr_39847[(23)] = inst_39741__$1);

(statearr_39847[(24)] = inst_39737__$1);

(statearr_39847[(26)] = inst_39739);

(statearr_39847[(25)] = inst_39736__$1);

return statearr_39847;
})();
if(cljs.core.truth_(inst_39742)){
var statearr_39848_39928 = state_39819__$1;
(statearr_39848_39928[(1)] = (23));

} else {
var statearr_39849_39929 = state_39819__$1;
(statearr_39849_39929[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (36))){
var state_39819__$1 = state_39819;
var statearr_39850_39930 = state_39819__$1;
(statearr_39850_39930[(2)] = false);

(statearr_39850_39930[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (41))){
var inst_39794 = (state_39819[(20)]);
var inst_39798 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39799 = cljs.core.map.call(null,inst_39798,inst_39794);
var inst_39800 = cljs.core.pr_str.call(null,inst_39799);
var inst_39801 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39800)].join('');
var inst_39802 = figwheel.client.utils.log.call(null,inst_39801);
var state_39819__$1 = state_39819;
var statearr_39851_39931 = state_39819__$1;
(statearr_39851_39931[(2)] = inst_39802);

(statearr_39851_39931[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (43))){
var inst_39795 = (state_39819[(21)]);
var inst_39805 = (state_39819[(2)]);
var inst_39806 = cljs.core.not_empty.call(null,inst_39795);
var state_39819__$1 = (function (){var statearr_39852 = state_39819;
(statearr_39852[(27)] = inst_39805);

return statearr_39852;
})();
if(cljs.core.truth_(inst_39806)){
var statearr_39853_39932 = state_39819__$1;
(statearr_39853_39932[(1)] = (44));

} else {
var statearr_39854_39933 = state_39819__$1;
(statearr_39854_39933[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (29))){
var inst_39741 = (state_39819[(23)]);
var inst_39737 = (state_39819[(24)]);
var inst_39733 = (state_39819[(19)]);
var inst_39739 = (state_39819[(26)]);
var inst_39773 = (state_39819[(16)]);
var inst_39736 = (state_39819[(25)]);
var inst_39769 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39772 = (function (){var all_files = inst_39733;
var res_SINGLEQUOTE_ = inst_39736;
var res = inst_39737;
var files_not_loaded = inst_39739;
var dependencies_that_loaded = inst_39741;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39741,inst_39737,inst_39733,inst_39739,inst_39773,inst_39736,inst_39769,state_val_39820,c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39771){
var map__39855 = p__39771;
var map__39855__$1 = ((((!((map__39855 == null)))?((((map__39855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39855):map__39855);
var namespace = cljs.core.get.call(null,map__39855__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39741,inst_39737,inst_39733,inst_39739,inst_39773,inst_39736,inst_39769,state_val_39820,c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39773__$1 = cljs.core.group_by.call(null,inst_39772,inst_39739);
var inst_39775 = (inst_39773__$1 == null);
var inst_39776 = cljs.core.not.call(null,inst_39775);
var state_39819__$1 = (function (){var statearr_39857 = state_39819;
(statearr_39857[(28)] = inst_39769);

(statearr_39857[(16)] = inst_39773__$1);

return statearr_39857;
})();
if(inst_39776){
var statearr_39858_39934 = state_39819__$1;
(statearr_39858_39934[(1)] = (32));

} else {
var statearr_39859_39935 = state_39819__$1;
(statearr_39859_39935[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (44))){
var inst_39795 = (state_39819[(21)]);
var inst_39808 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39795);
var inst_39809 = cljs.core.pr_str.call(null,inst_39808);
var inst_39810 = [cljs.core.str("not required: "),cljs.core.str(inst_39809)].join('');
var inst_39811 = figwheel.client.utils.log.call(null,inst_39810);
var state_39819__$1 = state_39819;
var statearr_39860_39936 = state_39819__$1;
(statearr_39860_39936[(2)] = inst_39811);

(statearr_39860_39936[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (6))){
var inst_39714 = (state_39819[(2)]);
var state_39819__$1 = state_39819;
var statearr_39861_39937 = state_39819__$1;
(statearr_39861_39937[(2)] = inst_39714);

(statearr_39861_39937[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (28))){
var inst_39739 = (state_39819[(26)]);
var inst_39766 = (state_39819[(2)]);
var inst_39767 = cljs.core.not_empty.call(null,inst_39739);
var state_39819__$1 = (function (){var statearr_39862 = state_39819;
(statearr_39862[(29)] = inst_39766);

return statearr_39862;
})();
if(cljs.core.truth_(inst_39767)){
var statearr_39863_39938 = state_39819__$1;
(statearr_39863_39938[(1)] = (29));

} else {
var statearr_39864_39939 = state_39819__$1;
(statearr_39864_39939[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (25))){
var inst_39737 = (state_39819[(24)]);
var inst_39753 = (state_39819[(2)]);
var inst_39754 = cljs.core.not_empty.call(null,inst_39737);
var state_39819__$1 = (function (){var statearr_39865 = state_39819;
(statearr_39865[(30)] = inst_39753);

return statearr_39865;
})();
if(cljs.core.truth_(inst_39754)){
var statearr_39866_39940 = state_39819__$1;
(statearr_39866_39940[(1)] = (26));

} else {
var statearr_39867_39941 = state_39819__$1;
(statearr_39867_39941[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (34))){
var inst_39788 = (state_39819[(2)]);
var state_39819__$1 = state_39819;
if(cljs.core.truth_(inst_39788)){
var statearr_39868_39942 = state_39819__$1;
(statearr_39868_39942[(1)] = (38));

} else {
var statearr_39869_39943 = state_39819__$1;
(statearr_39869_39943[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (17))){
var state_39819__$1 = state_39819;
var statearr_39870_39944 = state_39819__$1;
(statearr_39870_39944[(2)] = recompile_dependents);

(statearr_39870_39944[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (3))){
var state_39819__$1 = state_39819;
var statearr_39871_39945 = state_39819__$1;
(statearr_39871_39945[(2)] = null);

(statearr_39871_39945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (12))){
var inst_39710 = (state_39819[(2)]);
var state_39819__$1 = state_39819;
var statearr_39872_39946 = state_39819__$1;
(statearr_39872_39946[(2)] = inst_39710);

(statearr_39872_39946[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (2))){
var inst_39672 = (state_39819[(13)]);
var inst_39679 = cljs.core.seq.call(null,inst_39672);
var inst_39680 = inst_39679;
var inst_39681 = null;
var inst_39682 = (0);
var inst_39683 = (0);
var state_39819__$1 = (function (){var statearr_39873 = state_39819;
(statearr_39873[(7)] = inst_39681);

(statearr_39873[(8)] = inst_39683);

(statearr_39873[(9)] = inst_39682);

(statearr_39873[(10)] = inst_39680);

return statearr_39873;
})();
var statearr_39874_39947 = state_39819__$1;
(statearr_39874_39947[(2)] = null);

(statearr_39874_39947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (23))){
var inst_39741 = (state_39819[(23)]);
var inst_39737 = (state_39819[(24)]);
var inst_39733 = (state_39819[(19)]);
var inst_39739 = (state_39819[(26)]);
var inst_39736 = (state_39819[(25)]);
var inst_39744 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39746 = (function (){var all_files = inst_39733;
var res_SINGLEQUOTE_ = inst_39736;
var res = inst_39737;
var files_not_loaded = inst_39739;
var dependencies_that_loaded = inst_39741;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39741,inst_39737,inst_39733,inst_39739,inst_39736,inst_39744,state_val_39820,c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39745){
var map__39875 = p__39745;
var map__39875__$1 = ((((!((map__39875 == null)))?((((map__39875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39875):map__39875);
var request_url = cljs.core.get.call(null,map__39875__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39741,inst_39737,inst_39733,inst_39739,inst_39736,inst_39744,state_val_39820,c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39747 = cljs.core.reverse.call(null,inst_39741);
var inst_39748 = cljs.core.map.call(null,inst_39746,inst_39747);
var inst_39749 = cljs.core.pr_str.call(null,inst_39748);
var inst_39750 = figwheel.client.utils.log.call(null,inst_39749);
var state_39819__$1 = (function (){var statearr_39877 = state_39819;
(statearr_39877[(31)] = inst_39744);

return statearr_39877;
})();
var statearr_39878_39948 = state_39819__$1;
(statearr_39878_39948[(2)] = inst_39750);

(statearr_39878_39948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (35))){
var state_39819__$1 = state_39819;
var statearr_39879_39949 = state_39819__$1;
(statearr_39879_39949[(2)] = true);

(statearr_39879_39949[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (19))){
var inst_39723 = (state_39819[(12)]);
var inst_39729 = figwheel.client.file_reloading.expand_files.call(null,inst_39723);
var state_39819__$1 = state_39819;
var statearr_39880_39950 = state_39819__$1;
(statearr_39880_39950[(2)] = inst_39729);

(statearr_39880_39950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (11))){
var state_39819__$1 = state_39819;
var statearr_39881_39951 = state_39819__$1;
(statearr_39881_39951[(2)] = null);

(statearr_39881_39951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (9))){
var inst_39712 = (state_39819[(2)]);
var state_39819__$1 = state_39819;
var statearr_39882_39952 = state_39819__$1;
(statearr_39882_39952[(2)] = inst_39712);

(statearr_39882_39952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (5))){
var inst_39683 = (state_39819[(8)]);
var inst_39682 = (state_39819[(9)]);
var inst_39685 = (inst_39683 < inst_39682);
var inst_39686 = inst_39685;
var state_39819__$1 = state_39819;
if(cljs.core.truth_(inst_39686)){
var statearr_39883_39953 = state_39819__$1;
(statearr_39883_39953[(1)] = (7));

} else {
var statearr_39884_39954 = state_39819__$1;
(statearr_39884_39954[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (14))){
var inst_39693 = (state_39819[(22)]);
var inst_39702 = cljs.core.first.call(null,inst_39693);
var inst_39703 = figwheel.client.file_reloading.eval_body.call(null,inst_39702,opts);
var inst_39704 = cljs.core.next.call(null,inst_39693);
var inst_39680 = inst_39704;
var inst_39681 = null;
var inst_39682 = (0);
var inst_39683 = (0);
var state_39819__$1 = (function (){var statearr_39885 = state_39819;
(statearr_39885[(32)] = inst_39703);

(statearr_39885[(7)] = inst_39681);

(statearr_39885[(8)] = inst_39683);

(statearr_39885[(9)] = inst_39682);

(statearr_39885[(10)] = inst_39680);

return statearr_39885;
})();
var statearr_39886_39955 = state_39819__$1;
(statearr_39886_39955[(2)] = null);

(statearr_39886_39955[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (45))){
var state_39819__$1 = state_39819;
var statearr_39887_39956 = state_39819__$1;
(statearr_39887_39956[(2)] = null);

(statearr_39887_39956[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (26))){
var inst_39741 = (state_39819[(23)]);
var inst_39737 = (state_39819[(24)]);
var inst_39733 = (state_39819[(19)]);
var inst_39739 = (state_39819[(26)]);
var inst_39736 = (state_39819[(25)]);
var inst_39756 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39758 = (function (){var all_files = inst_39733;
var res_SINGLEQUOTE_ = inst_39736;
var res = inst_39737;
var files_not_loaded = inst_39739;
var dependencies_that_loaded = inst_39741;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39741,inst_39737,inst_39733,inst_39739,inst_39736,inst_39756,state_val_39820,c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39757){
var map__39888 = p__39757;
var map__39888__$1 = ((((!((map__39888 == null)))?((((map__39888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39888):map__39888);
var namespace = cljs.core.get.call(null,map__39888__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39888__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39741,inst_39737,inst_39733,inst_39739,inst_39736,inst_39756,state_val_39820,c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39759 = cljs.core.map.call(null,inst_39758,inst_39737);
var inst_39760 = cljs.core.pr_str.call(null,inst_39759);
var inst_39761 = figwheel.client.utils.log.call(null,inst_39760);
var inst_39762 = (function (){var all_files = inst_39733;
var res_SINGLEQUOTE_ = inst_39736;
var res = inst_39737;
var files_not_loaded = inst_39739;
var dependencies_that_loaded = inst_39741;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39741,inst_39737,inst_39733,inst_39739,inst_39736,inst_39756,inst_39758,inst_39759,inst_39760,inst_39761,state_val_39820,c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39741,inst_39737,inst_39733,inst_39739,inst_39736,inst_39756,inst_39758,inst_39759,inst_39760,inst_39761,state_val_39820,c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39763 = setTimeout(inst_39762,(10));
var state_39819__$1 = (function (){var statearr_39890 = state_39819;
(statearr_39890[(33)] = inst_39761);

(statearr_39890[(34)] = inst_39756);

return statearr_39890;
})();
var statearr_39891_39957 = state_39819__$1;
(statearr_39891_39957[(2)] = inst_39763);

(statearr_39891_39957[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (16))){
var state_39819__$1 = state_39819;
var statearr_39892_39958 = state_39819__$1;
(statearr_39892_39958[(2)] = reload_dependents);

(statearr_39892_39958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (38))){
var inst_39773 = (state_39819[(16)]);
var inst_39790 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39773);
var state_39819__$1 = state_39819;
var statearr_39893_39959 = state_39819__$1;
(statearr_39893_39959[(2)] = inst_39790);

(statearr_39893_39959[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (30))){
var state_39819__$1 = state_39819;
var statearr_39894_39960 = state_39819__$1;
(statearr_39894_39960[(2)] = null);

(statearr_39894_39960[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (10))){
var inst_39693 = (state_39819[(22)]);
var inst_39695 = cljs.core.chunked_seq_QMARK_.call(null,inst_39693);
var state_39819__$1 = state_39819;
if(inst_39695){
var statearr_39895_39961 = state_39819__$1;
(statearr_39895_39961[(1)] = (13));

} else {
var statearr_39896_39962 = state_39819__$1;
(statearr_39896_39962[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (18))){
var inst_39727 = (state_39819[(2)]);
var state_39819__$1 = state_39819;
if(cljs.core.truth_(inst_39727)){
var statearr_39897_39963 = state_39819__$1;
(statearr_39897_39963[(1)] = (19));

} else {
var statearr_39898_39964 = state_39819__$1;
(statearr_39898_39964[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (42))){
var state_39819__$1 = state_39819;
var statearr_39899_39965 = state_39819__$1;
(statearr_39899_39965[(2)] = null);

(statearr_39899_39965[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (37))){
var inst_39785 = (state_39819[(2)]);
var state_39819__$1 = state_39819;
var statearr_39900_39966 = state_39819__$1;
(statearr_39900_39966[(2)] = inst_39785);

(statearr_39900_39966[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39820 === (8))){
var inst_39693 = (state_39819[(22)]);
var inst_39680 = (state_39819[(10)]);
var inst_39693__$1 = cljs.core.seq.call(null,inst_39680);
var state_39819__$1 = (function (){var statearr_39901 = state_39819;
(statearr_39901[(22)] = inst_39693__$1);

return statearr_39901;
})();
if(inst_39693__$1){
var statearr_39902_39967 = state_39819__$1;
(statearr_39902_39967[(1)] = (10));

} else {
var statearr_39903_39968 = state_39819__$1;
(statearr_39903_39968[(1)] = (11));

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
});})(c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33744__auto__,c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33745__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33745__auto____0 = (function (){
var statearr_39907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39907[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33745__auto__);

(statearr_39907[(1)] = (1));

return statearr_39907;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33745__auto____1 = (function (state_39819){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_39819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e39908){if((e39908 instanceof Object)){
var ex__33748__auto__ = e39908;
var statearr_39909_39969 = state_39819;
(statearr_39909_39969[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39970 = state_39819;
state_39819 = G__39970;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33745__auto__ = function(state_39819){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33745__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33745__auto____1.call(this,state_39819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33745__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33745__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33858__auto__ = (function (){var statearr_39910 = f__33857__auto__.call(null);
(statearr_39910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto__);

return statearr_39910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto__,map__39665,map__39665__$1,opts,before_jsload,on_jsload,reload_dependents,map__39666,map__39666__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33856__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39973,link){
var map__39976 = p__39973;
var map__39976__$1 = ((((!((map__39976 == null)))?((((map__39976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39976):map__39976);
var file = cljs.core.get.call(null,map__39976__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__39976,map__39976__$1,file){
return (function (p1__39971_SHARP_,p2__39972_SHARP_){
if(cljs.core._EQ_.call(null,p1__39971_SHARP_,p2__39972_SHARP_)){
return p1__39971_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__39976,map__39976__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39982){
var map__39983 = p__39982;
var map__39983__$1 = ((((!((map__39983 == null)))?((((map__39983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39983):map__39983);
var match_length = cljs.core.get.call(null,map__39983__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39983__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39978_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39978_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args39985 = [];
var len__28942__auto___39988 = arguments.length;
var i__28943__auto___39989 = (0);
while(true){
if((i__28943__auto___39989 < len__28942__auto___39988)){
args39985.push((arguments[i__28943__auto___39989]));

var G__39990 = (i__28943__auto___39989 + (1));
i__28943__auto___39989 = G__39990;
continue;
} else {
}
break;
}

var G__39987 = args39985.length;
switch (G__39987) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39985.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39992_SHARP_,p2__39993_SHARP_){
return cljs.core.assoc.call(null,p1__39992_SHARP_,cljs.core.get.call(null,p2__39993_SHARP_,key),p2__39993_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39994){
var map__39997 = p__39994;
var map__39997__$1 = ((((!((map__39997 == null)))?((((map__39997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39997):map__39997);
var f_data = map__39997__$1;
var file = cljs.core.get.call(null,map__39997__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39999,files_msg){
var map__40006 = p__39999;
var map__40006__$1 = ((((!((map__40006 == null)))?((((map__40006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40006):map__40006);
var opts = map__40006__$1;
var on_cssload = cljs.core.get.call(null,map__40006__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__40008_40012 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__40009_40013 = null;
var count__40010_40014 = (0);
var i__40011_40015 = (0);
while(true){
if((i__40011_40015 < count__40010_40014)){
var f_40016 = cljs.core._nth.call(null,chunk__40009_40013,i__40011_40015);
figwheel.client.file_reloading.reload_css_file.call(null,f_40016);

var G__40017 = seq__40008_40012;
var G__40018 = chunk__40009_40013;
var G__40019 = count__40010_40014;
var G__40020 = (i__40011_40015 + (1));
seq__40008_40012 = G__40017;
chunk__40009_40013 = G__40018;
count__40010_40014 = G__40019;
i__40011_40015 = G__40020;
continue;
} else {
var temp__4657__auto___40021 = cljs.core.seq.call(null,seq__40008_40012);
if(temp__4657__auto___40021){
var seq__40008_40022__$1 = temp__4657__auto___40021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40008_40022__$1)){
var c__28678__auto___40023 = cljs.core.chunk_first.call(null,seq__40008_40022__$1);
var G__40024 = cljs.core.chunk_rest.call(null,seq__40008_40022__$1);
var G__40025 = c__28678__auto___40023;
var G__40026 = cljs.core.count.call(null,c__28678__auto___40023);
var G__40027 = (0);
seq__40008_40012 = G__40024;
chunk__40009_40013 = G__40025;
count__40010_40014 = G__40026;
i__40011_40015 = G__40027;
continue;
} else {
var f_40028 = cljs.core.first.call(null,seq__40008_40022__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_40028);

var G__40029 = cljs.core.next.call(null,seq__40008_40022__$1);
var G__40030 = null;
var G__40031 = (0);
var G__40032 = (0);
seq__40008_40012 = G__40029;
chunk__40009_40013 = G__40030;
count__40010_40014 = G__40031;
i__40011_40015 = G__40032;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__40006,map__40006__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__40006,map__40006__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map