// Compiled by ClojureScript 1.9.93 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('cljs.test');
goog.require('cljs.tools.reader.edn');
goog.require('taoensso.truss');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
taoensso.encore.get_dynamic_assertion_data = (function taoensso$encore$get_dynamic_assertion_data(){
return taoensso.truss.get_dynamic_assertion_data.call(null);
});
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(64),(0)], null);
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__31828 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__31828,(0),null);
var yc = cljs.core.nth.call(null,vec__31828,(1),null);
var zc = cljs.core.nth.call(null,vec__31828,(2),null);
var vec__31831 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version.call(null,min_version)));
var xm = cljs.core.nth.call(null,vec__31831,(0),null);
var ym = cljs.core.nth.call(null,vec__31831,(1),null);
var zm = cljs.core.nth.call(null,vec__31831,(2),null);
var vec__31834 = cljs.core.mapv.call(null,((function (vec__31828,xc,yc,zc,vec__31831,xm,ym,zm){
return (function (p1__31818_SHARP_){
var or__27867__auto__ = p1__31818_SHARP_;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return (0);
}
});})(vec__31828,xc,yc,zc,vec__31831,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__31834,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__31834,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__31834,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.call(null,xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.call(null,yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Insufficient `com.taoensso/encore` version. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
/**
 * Given a name symbol and sigs, returns [<name-with-attrs-meta> <args>]
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var args31837 = [];
var len__28942__auto___31846 = arguments.length;
var i__28943__auto___31847 = (0);
while(true){
if((i__28943__auto___31847 < len__28942__auto___31846)){
args31837.push((arguments[i__28943__auto___31847]));

var G__31848 = (i__28943__auto___31847 + (1));
i__28943__auto___31847 = G__31848;
continue;
} else {
}
break;
}

var G__31839 = args31837.length;
switch (G__31839) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31837.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,sigs){
return taoensso.encore.name_with_attrs.call(null,sym,null,sigs);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,attrs_merge,sigs){
var vec__31840 = (((typeof cljs.core.first.call(null,sigs) === 'string') && (cljs.core.next.call(null,sigs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,sigs),cljs.core.next.call(null,sigs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,sigs], null));
var _QMARK_docstring = cljs.core.nth.call(null,vec__31840,(0),null);
var sigs__$1 = cljs.core.nth.call(null,vec__31840,(1),null);
var vec__31843 = (((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,sigs__$1))) && (cljs.core.next.call(null,sigs__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,sigs__$1),cljs.core.next.call(null,sigs__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,sigs__$1], null));
var attrs = cljs.core.nth.call(null,vec__31843,(0),null);
var sigs__$2 = cljs.core.nth.call(null,vec__31843,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"doc","doc",1913296891),_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta.call(null,sym))?cljs.core.conj.call(null,cljs.core.meta.call(null,sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.call(null,attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,sym,attrs__$3),sigs__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var args31850 = [];
var len__28942__auto___31853 = arguments.length;
var i__28943__auto___31854 = (0);
while(true){
if((i__28943__auto___31854 < len__28942__auto___31853)){
args31850.push((arguments[i__28943__auto___31854]));

var G__31855 = (i__28943__auto___31854 + (1));
i__28943__auto___31854 = G__31855;
continue;
} else {
}
break;
}

var G__31852 = args31850.length;
switch (G__31852) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31850.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.call(null,null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?taoensso.encore.map_keys.call(null,cljs.core.symbol,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)):readers);
var default$__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1);
return cljs.tools.reader.edn.read_string.call(null,opts__$1,s);
} else {
throw cljs.core.ex_info.call(null,"`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args31857 = [];
var len__28942__auto___31862 = arguments.length;
var i__28943__auto___31863 = (0);
while(true){
if((i__28943__auto___31863 < len__28942__auto___31862)){
args31857.push((arguments[i__28943__auto___31863]));

var G__31864 = (i__28943__auto___31863 + (1));
i__28943__auto___31863 = G__31864;
continue;
} else {
}
break;
}

var G__31859 = args31857.length;
switch (G__31859) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31857.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_31860 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_31861 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_31861;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_31860;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4657__auto__ = (function (){var or__27867__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var data_map = temp__4657__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
return !((x == null));
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return (x === true) || (x === false);
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16))) || (x.cljs$core$IIndexed$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4))) || (x.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return (taoensso.encore.ident_QMARK_.call(null,x)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__27855__auto__ = taoensso.encore.ident_QMARK_.call(null,x);
if(and__27855__auto__){
var and__27855__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__27855__auto____$1)){
return true;
} else {
return and__27855__auto____$1;
}
} else {
return and__27855__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__27855__auto__ = (x instanceof cljs.core.Symbol);
if(and__27855__auto__){
var and__27855__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__27855__auto____$1)){
return true;
} else {
return and__27855__auto____$1;
}
} else {
return and__27855__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__27855__auto__ = (x instanceof cljs.core.Keyword);
if(and__27855__auto__){
var and__27855__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__27855__auto____$1)){
return true;
} else {
return and__27855__auto____$1;
}
} else {
return and__27855__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return (typeof x === 'string') && (!(cljs.core._EQ_.call(null,x,"")));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_.call(null,x)));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(2)));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(3)));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity)));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && (!((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && ((parseFloat(x) === parseInt(x,(10))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && ((x > (0)));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && ((x < (0)));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && ((x > (0)));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && ((x < (0)));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__27855__auto__ = typeof x === 'number';
if(and__27855__auto__){
var n = x;
return ((n >= 0.0)) && ((n <= 1.0));
} else {
return and__27855__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.kw_identical_QMARK_ = (function taoensso$encore$kw_identical_QMARK_(x,y){
if((x === y)){
return true;
} else {
if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword))){
return (x.fqn === y.fqn);
} else {
return false;
}
}
});
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
var n = cljs.core.name.call(null,x);
var temp__4655__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var ns = temp__4655__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.call(null,x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var temp__4657__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});
taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var temp__4657__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(temp__4657__auto__)){
var email = temp__4657__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});
taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return pred.call(null,x);
}catch (e31877){if((e31877 instanceof Error)){
var _ = e31877;
return false;
} else {
throw e31877;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args31878 = [];
var len__28942__auto___31881 = arguments.length;
var i__28943__auto___31882 = (0);
while(true){
if((i__28943__auto___31882 < len__28942__auto___31881)){
args31878.push((arguments[i__28943__auto___31882]));

var G__31883 = (i__28943__auto___31882 + (1));
i__28943__auto___31882 = G__31883;
continue;
} else {
}
break;
}

var G__31880 = args31878.length;
switch (G__31880) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31878.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("`is!` "),cljs.core.str([cljs.core.str(pred)].join('')),cljs.core.str(" failure against arg: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arg-val","arg-val",1802419280),x,new cljs.core.Keyword(null,"arg-type","arg-type",-2020167363),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"fail-?data","fail-?data",1702764975),fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.call(null,[cljs.core.str("`as-"),cljs.core.str(cljs.core.name.call(null,as_name)),cljs.core.str("` failed against: `"),cljs.core.str(cljs.core.pr_str.call(null,x)),cljs.core.str("`")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__27867__auto__ = taoensso.encore.as__QMARK_nzero.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nzero","nzero",2053173656),x);
}
});
taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__27867__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});
taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__27867__auto__ = taoensso.encore.as__QMARK_nempty_str.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x);
}
});
taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__27867__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});
taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__27867__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});
taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__27867__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});
taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__27867__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});
taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__27867__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});
taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__27867__auto__ = taoensso.encore.as__QMARK_udt.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"udt","udt",2011712751),x);
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__27867__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});
taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__27867__auto__ = taoensso.encore.as__QMARK_nat_int.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x);
}
});
taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__27867__auto__ = taoensso.encore.as__QMARK_pos_int.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x);
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__27867__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});
taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__27867__auto__ = taoensso.encore.as__QMARK_nat_float.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x);
}
});
taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__27867__auto__ = taoensso.encore.as__QMARK_pos_float.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x);
}
});
taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__27867__auto__ = taoensso.encore.as__QMARK_pval.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pval","pval",-274256857),x);
}
});
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool.call(null,x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.as_qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args31885 = [];
var len__28942__auto___31888 = arguments.length;
var i__28943__auto___31889 = (0);
while(true){
if((i__28943__auto___31889 < len__28942__auto___31888)){
args31885.push((arguments[i__28943__auto___31889]));

var G__31890 = (i__28943__auto___31889 + (1));
i__28943__auto___31889 = G__31890;
continue;
} else {
}
break;
}

var G__31887 = args31885.length;
switch (G__31887) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31885.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.call(null,ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,no_slash_QMARK_){
var parts = cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.call(null,acc,taoensso.encore.explode_keyword.call(null,in$));
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq.call(null,parts)){
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.seq.call(null,ppop))?clojure.string.join.call(null,".",ppop):null),cljs.core.peek.call(null,parts));
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * Like `force` for refs
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_.call(null,x)){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta.call(null,x,cljs.core.merge.call(null,cljs.core.meta.call(null,x),m));
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta.call(null,x))){
return cljs.core.with_meta.call(null,x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var args31893 = [];
var len__28942__auto___31899 = arguments.length;
var i__28943__auto___31900 = (0);
while(true){
if((i__28943__auto___31900 < len__28942__auto___31899)){
args31893.push((arguments[i__28943__auto___31900]));

var G__31901 = (i__28943__auto___31900 + (1));
i__28943__auto___31900 = G__31901;
continue;
} else {
}
break;
}

var G__31898 = args31893.length;
switch (G__31898) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28961__auto__ = (new cljs.core.IndexedSeq(args31893.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28961__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (taoensso.encore.some_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,x,y));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__27855__auto__ = taoensso.encore.some_QMARK_.call(null,x);
if(and__27855__auto__){
var and__27855__auto____$1 = cljs.core._EQ_.call(null,x,y);
if(and__27855__auto____$1){
return taoensso.encore.revery_QMARK_.call(null,((function (and__27855__auto____$1,and__27855__auto__){
return (function (p1__31892_SHARP_){
return cljs.core._EQ_.call(null,p1__31892_SHARP_,x);
});})(and__27855__auto____$1,and__27855__auto__))
,more);
} else {
return and__27855__auto____$1;
}
} else {
return and__27855__auto__;
}
});

taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq31894){
var G__31895 = cljs.core.first.call(null,seq31894);
var seq31894__$1 = cljs.core.next.call(null,seq31894);
var G__31896 = cljs.core.first.call(null,seq31894__$1);
var seq31894__$2 = cljs.core.next.call(null,seq31894__$1);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__31895,G__31896,seq31894__$2);
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var args31903 = [];
var len__28942__auto___31910 = arguments.length;
var i__28943__auto___31911 = (0);
while(true){
if((i__28943__auto___31911 < len__28942__auto___31910)){
args31903.push((arguments[i__28943__auto___31911]));

var G__31912 = (i__28943__auto___31911 + (1));
i__28943__auto___31911 = G__31912;
continue;
} else {
}
break;
}

var G__31909 = args31903.length;
switch (G__31909) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__28961__auto__ = (new cljs.core.IndexedSeq(args31903.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28961__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst.call(null,taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$lang$applyTo = (function (seq31904){
var G__31905 = cljs.core.first.call(null,seq31904);
var seq31904__$1 = cljs.core.next.call(null,seq31904);
var G__31906 = cljs.core.first.call(null,seq31904__$1);
var seq31904__$2 = cljs.core.next.call(null,seq31904__$1);
var G__31907 = cljs.core.first.call(null,seq31904__$2);
var seq31904__$3 = cljs.core.next.call(null,seq31904__$2);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic(G__31905,G__31906,G__31907,seq31904__$3);
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_.call(null,x))){
return null;
} else {
return x;
}
});
taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__31919 = clojure.string.split.call(null,[cljs.core.str(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.call(null,vec__31919,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.call(null,vec__31919,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(function (){var temp__4657__auto__ = cljs.core.re_seq.call(null,/\d+/,s_version);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return cljs.core.mapv.call(null,taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),(function (){var temp__4657__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return clojure.string.lower_case.call(null,s);
} else {
return null;
}
})()], null);
});
/**
 * May not be available with Node.js, etc.
 */
taoensso.encore.js__QMARK_win = ((typeof window !== 'undefined')?window:null);
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var args31922 = [];
var len__28942__auto___31925 = arguments.length;
var i__28943__auto___31926 = (0);
while(true){
if((i__28943__auto___31926 < len__28942__auto___31925)){
args31922.push((arguments[i__28943__auto___31926]));

var G__31927 = (i__28943__auto___31926 + (1));
i__28943__auto___31926 = G__31927;
continue;
} else {
}
break;
}

var G__31924 = args31922.length;
switch (G__31924) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31922.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ_.call(null,x,y,0.001);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return (Math.abs((x - y)) < signf);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args31929 = [];
var len__28942__auto___31933 = arguments.length;
var i__28943__auto___31934 = (0);
while(true){
if((i__28943__auto___31934 < len__28942__auto___31933)){
args31929.push((arguments[i__28943__auto___31934]));

var G__31935 = (i__28943__auto___31934 + (1));
i__28943__auto___31934 = G__31935;
continue;
} else {
}
break;
}

var G__31931 = args31929.length;
switch (G__31931) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31929.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.call(null,type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__31932 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31932) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$.call(null,rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args31938 = [];
var len__28942__auto___31944 = arguments.length;
var i__28943__auto___31945 = (0);
while(true){
if((i__28943__auto___31945 < len__28942__auto___31944)){
args31938.push((arguments[i__28943__auto___31945]));

var G__31946 = (i__28943__auto___31945 + (1));
i__28943__auto___31945 = G__31946;
continue;
} else {
}
break;
}

var G__31940 = args31938.length;
switch (G__31940) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31938.length)].join('')));

}
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.call(null,n_attempt,null);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__31941){
var map__31942 = p__31941;
var map__31942__$1 = ((((!((map__31942 == null)))?((((map__31942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31942):map__31942);
var min = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$.call(null,(((b + cljs.core.rand.call(null,b)) * 0.5) * factor));
var t__$1 = cljs.core.long$.call(null,(cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$.call(null,(cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2;

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$.call(null,secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,cljs.core.long$.call(null,ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__28949__auto__ = [];
var len__28942__auto___31964 = arguments.length;
var i__28943__auto___31965 = (0);
while(true){
if((i__28943__auto___31965 < len__28942__auto___31964)){
args__28949__auto__.push((arguments[i__28943__auto___31965]));

var G__31966 = (i__28943__auto___31965 + (1));
i__28943__auto___31965 = G__31966;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__31961){
var map__31962 = p__31961;
var map__31962__$1 = ((((!((map__31962 == null)))?((((map__31962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31962):map__31962);
var opts = map__31962__$1;
var years = cljs.core.get.call(null,map__31962__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__31962__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__31962__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__31962__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__31962__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__31962__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__31962__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__31962__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__31962__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__31962,map__31962__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__in))){
return __in;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
});})(map__31962,map__31962__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error("Assert failed: (have #{:msecs :secs :months :days :mins :hours :years :ms :weeks} :in (keys opts))"));
}

return taoensso.encore.round_STAR_.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq31960){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31960));
});

taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
/**
 * Like `aget` for JS objects, Ref. https://goo.gl/eze8hY.
 *   Unlike `aget`, returns nil for missing keys instead of throwing.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args31971 = [];
var len__28942__auto___31978 = arguments.length;
var i__28943__auto___31979 = (0);
while(true){
if((i__28943__auto___31979 < len__28942__auto___31978)){
args31971.push((arguments[i__28943__auto___31979]));

var G__31980 = (i__28943__auto___31979 + (1));
i__28943__auto___31979 = G__31980;
continue;
} else {
}
break;
}

var G__31977 = args31971.length;
switch (G__31977) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__28961__auto__ = (new cljs.core.IndexedSeq(args31971.slice((3)),(0),null));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28961__auto__);

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if(cljs.core.truth_(o)){
return goog.object.get(o,k,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k1,k2){
var temp__4657__auto__ = taoensso.encore.oget.call(null,o,k1);
if(cljs.core.truth_(temp__4657__auto__)){
var o__$1 = temp__4657__auto__;
return goog.object.get(o__$1,k2,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic = (function (o,k1,k2,ks){
var temp__4657__auto__ = taoensso.encore.oget.call(null,o,k1,k2);
if(cljs.core.truth_(temp__4657__auto__)){
var o__$1 = temp__4657__auto__;
return cljs.core.apply.call(null,taoensso.encore.oget,o__$1,ks);
} else {
return null;
}
});

taoensso.encore.oget.cljs$lang$applyTo = (function (seq31972){
var G__31973 = cljs.core.first.call(null,seq31972);
var seq31972__$1 = cljs.core.next.call(null,seq31972);
var G__31974 = cljs.core.first.call(null,seq31972__$1);
var seq31972__$2 = cljs.core.next.call(null,seq31972__$1);
var G__31975 = cljs.core.first.call(null,seq31972__$2);
var seq31972__$3 = cljs.core.next.call(null,seq31972__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__31973,G__31974,G__31975,seq31972__$3);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = (3);

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});
taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__31985 = coll;
var c1 = cljs.core.nth.call(null,vec__31985,(0),null);
return c1;
} else {
return null;
}
});
taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});
taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return null;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__31991 = v;
var v1 = cljs.core.nth.call(null,vec__31991,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args31994 = [];
var len__28942__auto___32000 = arguments.length;
var i__28943__auto___32001 = (0);
while(true){
if((i__28943__auto___32001 < len__28942__auto___32000)){
args31994.push((arguments[i__28943__auto___32001]));

var G__32002 = (i__28943__auto___32001 + (1));
i__28943__auto___32001 = G__32002;
continue;
} else {
}
break;
}

var G__31999 = args31994.length;
switch (G__31999) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28961__auto__ = (new cljs.core.IndexedSeq(args31994.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28961__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,_QMARK_x){
if(taoensso.encore.some_QMARK_.call(null,_QMARK_x)){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,_QMARK_x,_QMARK_xs){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,_QMARK_x),_QMARK_xs);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq31995){
var G__31996 = cljs.core.first.call(null,seq31995);
var seq31995__$1 = cljs.core.next.call(null,seq31995);
var G__31997 = cljs.core.first.call(null,seq31995__$1);
var seq31995__$2 = cljs.core.next.call(null,seq31995__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__31996,G__31997,seq31995__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);

/**
 * As `clojure.core/preserving-reduced`
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = rf.call(null,acc,in$);
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.reduced.call(null,result);
} else {
return result;
}
});
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.call(null,(function (p1__32005_SHARP_,p2__32004_SHARP_){
return proc.call(null,p2__32004_SHARP_);
}),null,coll);

return null;
});
taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (p1__32008_SHARP_,p2__32006_SHARP_,p3__32007_SHARP_){
return proc.call(null,p2__32006_SHARP_,p3__32007_SHARP_);
}),null,m);

return null;
});
taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs.call(null,(function (p1__32011_SHARP_,p2__32009_SHARP_,p3__32010_SHARP_){
return proc.call(null,p2__32009_SHARP_,p3__32010_SHARP_);
}),null,kvs);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var temp__4657__auto__ = pred.call(null,in$);
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});
taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
var temp__4657__auto__ = pred.call(null,k,v);
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});
taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return cljs.core.reduced.call(null,in$);
} else {
return null;
}
}),null,coll);
});
taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,null);
}
}),true,coll);
});
taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return true;
} else {
return cljs.core.reduced.call(null,null);
}
}),true,coll);
});
taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});
taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__32021){
var vec__32022 = p__32021;
var k = cljs.core.nth.call(null,vec__32022,(0),null);
var v = cljs.core.nth.call(null,vec__32022,(1),null);
return rf.call(null,acc,k,v);
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.call(null,rf,init,cljs.core.range.call(null,n));
});
/**
 * Like `reduce-kv` but for JavaScript objects
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.call(null,(function (acc,k){
return f.call(null,acc,k,goog.object.get(o,k,null));
}),init,cljs.core.js_keys.call(null,o));
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args32029 = [];
var len__28942__auto___32032 = arguments.length;
var i__28943__auto___32033 = (0);
while(true){
if((i__28943__auto___32033 < len__28942__auto___32032)){
args32029.push((arguments[i__28943__auto___32033]));

var G__32034 = (i__28943__auto___32033 + (1));
i__28943__auto___32033 = G__32034;
continue;
} else {
}
break;
}

var G__32031 = args32029.length;
switch (G__32031) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32029.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args32040 = [];
var len__28942__auto___32043 = arguments.length;
var i__28943__auto___32044 = (0);
while(true){
if((i__28943__auto___32044 < len__28942__auto___32043)){
args32040.push((arguments[i__28943__auto___32044]));

var G__32045 = (i__28943__auto___32044 + (1));
i__28943__auto___32044 = G__32045;
continue;
} else {
}
break;
}

var G__32042 = args32040.length;
switch (G__32042) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32040.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__32047 = null;
var G__32047__0 = (function (){
return rf.call(null);
});
var G__32047__1 = (function (acc){
return rf.call(null,acc);
});
var G__32047__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__32047 = function(acc,input){
switch(arguments.length){
case 0:
return G__32047__0.call(this);
case 1:
return G__32047__1.call(this,acc);
case 2:
return G__32047__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32047.cljs$core$IFn$_invoke$arity$0 = G__32047__0;
G__32047.cljs$core$IFn$_invoke$arity$1 = G__32047__1;
G__32047.cljs$core$IFn$_invoke$arity$2 = G__32047__2;
return G__32047;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
var or__27867__auto__ = taoensso.encore._QMARK_subvec_LT_len.call(null,coll,(0),n);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),coll);
}
});
/**
 * Like `into` but supports multiple "from"s
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args32052 = [];
var len__28942__auto___32058 = arguments.length;
var i__28943__auto___32059 = (0);
while(true){
if((i__28943__auto___32059 < len__28942__auto___32058)){
args32052.push((arguments[i__28943__auto___32059]));

var G__32060 = (i__28943__auto___32059 + (1));
i__28943__auto___32059 = G__32060;
continue;
} else {
}
break;
}

var G__32057 = args32052.length;
switch (G__32057) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28961__auto__ = (new cljs.core.IndexedSeq(args32052.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28961__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq32053){
var G__32054 = cljs.core.first.call(null,seq32053);
var seq32053__$1 = cljs.core.next.call(null,seq32053);
var G__32055 = cljs.core.first.call(null,seq32053__$1);
var seq32053__$2 = cljs.core.next.call(null,seq32053__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__32054,G__32055,seq32053__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if(((n > (10))) && (taoensso.encore.editable_QMARK_.call(null,coll))){
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj_BANG_.call(null,acc,f.call(null));
}),cljs.core.transient$.call(null,coll),n));
} else {
return taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj.call(null,acc,f.call(null));
}),coll,n);
}
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,k,f.call(null,v));
}),m,m);
}
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,f.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
return taoensso.encore.filter_vals.call(null,cljs.core.complement.call(null,pred),m);
});
taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
return taoensso.encore.filter_keys.call(null,cljs.core.complement.call(null,pred),m);
});
taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.complement.call(null,pred),m);
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__32062_SHARP_){
return taoensso.encore.some_QMARK_.call(null,cljs.core.get.call(null,m,p1__32062_SHARP_));
}),ks);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous)
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
return f.call(null,m);
} else {
var vec__32066 = ks;
var seq__32067 = cljs.core.seq.call(null,vec__32066);
var first__32068 = cljs.core.first.call(null,seq__32067);
var seq__32067__$1 = cljs.core.next.call(null,seq__32067);
var k = first__32068;
var ks__$1 = seq__32067__$1;
if(ks__$1){
return cljs.core.assoc.call(null,m,k,taoensso$encore$update_in_STAR_.call(null,cljs.core.get.call(null,m,k),ks__$1,f));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
}
});
/**
 * Like `subvec` but:
 *  - Never throws; snaps to valid start and end indexes.
 *  - Returns nil rather than an empty vector.
 */
taoensso.encore._QMARK_subvec_LT_idx = (function taoensso$encore$_QMARK_subvec_LT_idx(var_args){
var args32069 = [];
var len__28942__auto___32072 = arguments.length;
var i__28943__auto___32073 = (0);
while(true){
if((i__28943__auto___32073 < len__28942__auto___32072)){
args32069.push((arguments[i__28943__auto___32073]));

var G__32074 = (i__28943__auto___32073 + (1));
i__28943__auto___32073 = G__32074;
continue;
} else {
}
break;
}

var G__32071 = args32069.length;
switch (G__32071) {
case 2:
return taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32069.length)].join('')));

}
});

taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count.call(null,v);
if((start__$1 >= vlen)){
return null;
} else {
return cljs.core.subvec.call(null,v,start__$1,vlen);
}
});

taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return null;
} else {
return cljs.core.subvec.call(null,v,start__$1,end__$1);
}
});

taoensso.encore._QMARK_subvec_LT_idx.cljs$lang$maxFixedArity = 3;

/**
 * Like `?subvec<idx` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore._QMARK_subvec_LT_len = (function taoensso$encore$_QMARK_subvec_LT_len(var_args){
var args32076 = [];
var len__28942__auto___32079 = arguments.length;
var i__28943__auto___32080 = (0);
while(true){
if((i__28943__auto___32080 < len__28942__auto___32079)){
args32076.push((arguments[i__28943__auto___32080]));

var G__32081 = (i__28943__auto___32080 + (1));
i__28943__auto___32080 = G__32081;
continue;
} else {
}
break;
}

var G__32078 = args32076.length;
switch (G__32078) {
case 2:
return taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32076.length)].join('')));

}
});

taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count.call(null,v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.call(null,v,start__$2,vlen);
} else {
if((start >= vlen)){
return null;
} else {
return cljs.core.subvec.call(null,v,start,vlen);
}
}
});

taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return null;
} else {
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.call(null,v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return null;
} else {
return cljs.core.subvec.call(null,v,start,end__$1);
}
}
}
});

taoensso.encore._QMARK_subvec_LT_len.cljs$lang$maxFixedArity = 3;

/**
 * Returns a sorted vector of the top n items from coll of N items in O(N.logn)
 *   time. (take n (sort-by ...)) is O(N.logN) time, so much slower when n << N.
 *   Ref. http://stevehanov.ca/blog/index.php?id=122
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var args32083 = [];
var len__28942__auto___32086 = arguments.length;
var i__28943__auto___32087 = (0);
while(true){
if((i__28943__auto___32087 < len__28942__auto___32086)){
args32083.push((arguments[i__28943__auto___32087]));

var G__32088 = (i__28943__auto___32087 + (1));
i__28943__auto___32087 = G__32088;
continue;
} else {
}
break;
}

var G__32085 = args32083.length;
switch (G__32085) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32083.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top.call(null,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top.call(null,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),cljs.core.sort_by.call(null,keyfn,cmp,coll));
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args32090 = [];
var len__28942__auto___32097 = arguments.length;
var i__28943__auto___32098 = (0);
while(true){
if((i__28943__auto___32098 < len__28942__auto___32097)){
args32090.push((arguments[i__28943__auto___32098]));

var G__32099 = (i__28943__auto___32098 + (1));
i__28943__auto___32098 = G__32099;
continue;
} else {
}
break;
}

var G__32096 = args32090.length;
switch (G__32096) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__28961__auto__ = (new cljs.core.IndexedSeq(args32090.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28961__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.dissoc.call(null,m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq32091){
var G__32092 = cljs.core.first.call(null,seq32091);
var seq32091__$1 = cljs.core.next.call(null,seq32091);
var G__32093 = cljs.core.first.call(null,seq32091__$1);
var seq32091__$2 = cljs.core.next.call(null,seq32091__$1);
var G__32094 = cljs.core.first.call(null,seq32091__$2);
var seq32091__$3 = cljs.core.next.call(null,seq32091__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__32092,G__32093,G__32094,seq32091__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Assocs each kv iff its value is not nil
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args32101 = [];
var len__28942__auto___32108 = arguments.length;
var i__28943__auto___32109 = (0);
while(true){
if((i__28943__auto___32109 < len__28942__auto___32108)){
args32101.push((arguments[i__28943__auto___32109]));

var G__32110 = (i__28943__auto___32109 + (1));
i__28943__auto___32109 = G__32110;
continue;
} else {
}
break;
}

var G__32107 = args32101.length;
switch (G__32107) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__28961__auto__ = (new cljs.core.IndexedSeq(args32101.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28961__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (acc,k__$1,v__$1){
return taoensso.encore.assoc_some.call(null,acc,k__$1,v__$1);
}),taoensso.encore.assoc_some.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq32102){
var G__32103 = cljs.core.first.call(null,seq32102);
var seq32102__$1 = cljs.core.next.call(null,seq32102);
var G__32104 = cljs.core.first.call(null,seq32102__$1);
var seq32102__$2 = cljs.core.next.call(null,seq32102__$1);
var G__32105 = cljs.core.first.call(null,seq32102__$2);
var seq32102__$3 = cljs.core.next.call(null,seq32102__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__32103,G__32104,G__32105,seq32102__$3);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);

/**
 * Assocs each kv iff its val is truthy
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args32112 = [];
var len__28942__auto___32119 = arguments.length;
var i__28943__auto___32120 = (0);
while(true){
if((i__28943__auto___32120 < len__28942__auto___32119)){
args32112.push((arguments[i__28943__auto___32120]));

var G__32121 = (i__28943__auto___32120 + (1));
i__28943__auto___32120 = G__32121;
continue;
} else {
}
break;
}

var G__32118 = args32112.length;
switch (G__32118) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__28961__auto__ = (new cljs.core.IndexedSeq(args32112.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28961__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (acc,k__$1,v__$1){
return taoensso.encore.assoc_when.call(null,acc,k__$1,v__$1);
}),taoensso.encore.assoc_when.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq32113){
var G__32114 = cljs.core.first.call(null,seq32113);
var seq32113__$1 = cljs.core.next.call(null,seq32113);
var G__32115 = cljs.core.first.call(null,seq32113__$1);
var seq32113__$2 = cljs.core.next.call(null,seq32113__$1);
var G__32116 = cljs.core.first.call(null,seq32113__$2);
var seq32113__$3 = cljs.core.next.call(null,seq32113__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__32114,G__32115,G__32116,seq32113__$3);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);

taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args32123 = [];
var len__28942__auto___32126 = arguments.length;
var i__28943__auto___32127 = (0);
while(true){
if((i__28943__auto___32127 < len__28942__auto___32126)){
args32123.push((arguments[i__28943__auto___32127]));

var G__32128 = (i__28943__auto___32127 + (1));
i__28943__auto___32127 = G__32128;
continue;
} else {
}
break;
}

var G__32125 = args32123.length;
switch (G__32125) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32123.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32131 = arguments.length;
var i__28943__auto___32132 = (0);
while(true){
if((i__28943__auto___32132 < len__28942__auto___32131)){
args__28949__auto__.push((arguments[i__28943__auto___32132]));

var G__32133 = (i__28943__auto___32132 + (1));
i__28943__auto___32132 = G__32133;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq32130){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32130));
});

/**
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32136 = arguments.length;
var i__28943__auto___32137 = (0);
while(true){
if((i__28943__auto___32137 < len__28942__auto___32136)){
args__28949__auto__.push((arguments[i__28943__auto___32137]));

var G__32138 = (i__28943__auto___32137 + (1));
i__28943__auto___32137 = G__32138;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq32134){
var G__32135 = cljs.core.first.call(null,seq32134);
var seq32134__$1 = cljs.core.next.call(null,seq32134);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__32135,seq32134__$1);
});

/**
 * Faster `zipmap` using transients
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if((ks__$1) && (vs__$1)){
var G__32139 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__32140 = cljs.core.next.call(null,ks__$1);
var G__32141 = cljs.core.next.call(null,vs__$1);
m = G__32139;
ks__$1 = G__32140;
vs__$1 = G__32141;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,m);
}
break;
}
});
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args32142 = [];
var len__28942__auto___32148 = arguments.length;
var i__28943__auto___32149 = (0);
while(true){
if((i__28943__auto___32149 < len__28942__auto___32148)){
args32142.push((arguments[i__28943__auto___32149]));

var G__32150 = (i__28943__auto___32149 + (1));
i__28943__auto___32149 = G__32150;
continue;
} else {
}
break;
}

var G__32147 = args32142.length;
switch (G__32147) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28961__auto__ = (new cljs.core.IndexedSeq(args32142.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28961__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq32143){
var G__32144 = cljs.core.first.call(null,seq32143);
var seq32143__$1 = cljs.core.next.call(null,seq32143);
var G__32145 = cljs.core.first.call(null,seq32143__$1);
var seq32143__$2 = cljs.core.next.call(null,seq32143__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__32144,G__32145,seq32143__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
while(true){
if((s1) && (s2)){
var G__32152 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,v,cljs.core.first.call(null,s1)),cljs.core.first.call(null,s2));
var G__32153 = cljs.core.next.call(null,s1);
var G__32154 = cljs.core.next.call(null,s2);
v = G__32152;
s1 = G__32153;
s2 = G__32154;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_.call(null,v);
}
}
}
break;
}
});
/**
 * Reverse comparator
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
taoensso.encore._nested_merge_with = (function taoensso$encore$_nested_merge_with(f,maps){
if(cljs.core.truth_(taoensso.encore.rsome.call(null,cljs.core.identity,maps))){
return cljs.core.reduce.call(null,(function (acc,in$){
return cljs.core.reduce_kv.call(null,(function taoensso$encore$_nested_merge_with_$_rf2(acc__$1,k,rv){
if(cljs.core.contains_QMARK_.call(null,acc__$1,k)){
var lv = cljs.core.get.call(null,acc__$1,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,acc__$1,k,cljs.core.reduce_kv.call(null,taoensso$encore$_nested_merge_with_$_rf2,lv,rv));
} else {
if(taoensso.encore.kw_identical_QMARK_.call(null,rv,new cljs.core.Keyword("merge","dissoc","merge/dissoc",-706655261))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
var new_rv = f.call(null,lv,rv);
if(taoensso.encore.kw_identical_QMARK_.call(null,new_rv,new cljs.core.Keyword("merge","dissoc","merge/dissoc",-706655261))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
return cljs.core.assoc.call(null,acc__$1,k,new_rv);
}
}
}
} else {
return cljs.core.assoc.call(null,acc__$1,k,rv);
}
}),acc,in$);
}),cljs.core.PersistentArrayMap.EMPTY,maps);
} else {
return null;
}
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32157 = arguments.length;
var i__28943__auto___32158 = (0);
while(true){
if((i__28943__auto___32158 < len__28942__auto___32157)){
args__28949__auto__.push((arguments[i__28943__auto___32158]));

var G__32159 = (i__28943__auto___32158 + (1));
i__28943__auto___32158 = G__32159;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._nested_merge_with.call(null,f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq32155){
var G__32156 = cljs.core.first.call(null,seq32155);
var seq32155__$1 = cljs.core.next.call(null,seq32155);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__32156,seq32155__$1);
});

taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32161 = arguments.length;
var i__28943__auto___32162 = (0);
while(true){
if((i__28943__auto___32162 < len__28942__auto___32161)){
args__28949__auto__.push((arguments[i__28943__auto___32162]));

var G__32163 = (i__28943__auto___32162 + (1));
i__28943__auto___32162 = G__32163;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._nested_merge_with.call(null,(function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq32160){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32160));
});

/**
 * Minor optimization for single-threaded Cljs
 */
taoensso.encore._platform_cas_BANG_ = (function taoensso$encore$_platform_cas_BANG_(atom_,old_val,new_val){
cljs.core.reset_BANG_.call(null,atom_,new_val);

return true;
});
/**
 * Returns [<old-val> <new-val>]
 */
taoensso.encore.dswap_BANG_ = (function taoensso$encore$dswap_BANG_(atom_,f){
var ov = cljs.core.deref.call(null,atom_);
var nv = f.call(null,ov);
cljs.core.reset_BANG_.call(null,atom_,nv);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ov,nv], null);
});
/**
 * Used by memoization utils
 */
taoensso.encore._swap_cache_BANG_ = (function taoensso$encore$_swap_cache_BANG_(atom_,k,f){
var om = cljs.core.deref.call(null,atom_);
var nv = f.call(null,cljs.core.get.call(null,om,k));
var nm = cljs.core.assoc.call(null,om,k,nv);
cljs.core.reset_BANG_.call(null,atom_,nm);

return nv;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28489__auto__,k__28490__auto__){
var self__ = this;
var this__28489__auto____$1 = this;
return cljs.core._lookup.call(null,this__28489__auto____$1,k__28490__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28491__auto__,k32165,else__28492__auto__){
var self__ = this;
var this__28491__auto____$1 = this;
var G__32167 = (((k32165 instanceof cljs.core.Keyword))?k32165.fqn:null);
switch (G__32167) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32165,else__28492__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28503__auto__,writer__28504__auto__,opts__28505__auto__){
var self__ = this;
var this__28503__auto____$1 = this;
var pr_pair__28506__auto__ = ((function (this__28503__auto____$1){
return (function (keyval__28507__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28504__auto__,cljs.core.pr_writer,""," ","",opts__28505__auto__,keyval__28507__auto__);
});})(this__28503__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28504__auto__,pr_pair__28506__auto__,"#taoensso.encore.Swapped{",", ","}",opts__28505__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32164){
var self__ = this;
var G__32164__$1 = this;
return (new cljs.core.RecordIter((0),G__32164__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28487__auto__){
var self__ = this;
var this__28487__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28483__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28484__auto__){
var self__ = this;
var this__28484__auto____$1 = this;
var h__28302__auto__ = self__.__hash;
if(!((h__28302__auto__ == null))){
return h__28302__auto__;
} else {
var h__28302__auto____$1 = cljs.core.hash_imap.call(null,this__28484__auto____$1);
self__.__hash = h__28302__auto____$1;

return h__28302__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28485__auto__,other__28486__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27855__auto__ = other__28486__auto__;
if(cljs.core.truth_(and__27855__auto__)){
var and__27855__auto____$1 = (this__28485__auto____$1.constructor === other__28486__auto__.constructor);
if(and__27855__auto____$1){
return cljs.core.equiv_map.call(null,this__28485__auto____$1,other__28486__auto__);
} else {
return and__27855__auto____$1;
}
} else {
return and__27855__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28498__auto__,k__28499__auto__){
var self__ = this;
var this__28498__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__28499__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28498__auto____$1),self__.__meta),k__28499__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28499__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28496__auto__,k__28497__auto__,G__32164){
var self__ = this;
var this__28496__auto____$1 = this;
var pred__32168 = cljs.core.keyword_identical_QMARK_;
var expr__32169 = k__28497__auto__;
if(cljs.core.truth_(pred__32168.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__32169))){
return (new taoensso.encore.Swapped(G__32164,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32168.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__32169))){
return (new taoensso.encore.Swapped(self__.new_val,G__32164,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28497__auto__,G__32164),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28501__auto__){
var self__ = this;
var this__28501__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28488__auto__,G__32164){
var self__ = this;
var this__28488__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__32164,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28494__auto__,entry__28495__auto__){
var self__ = this;
var this__28494__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28495__auto__)){
return cljs.core._assoc.call(null,this__28494__auto____$1,cljs.core._nth.call(null,entry__28495__auto__,(0)),cljs.core._nth.call(null,entry__28495__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28494__auto____$1,entry__28495__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__28523__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__28523__auto__,writer__28524__auto__){
return cljs.core._write.call(null,writer__28524__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__32166){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__32166),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__32166),null,cljs.core.dissoc.call(null,G__32166,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
/**
 * Returns [<new-val> <return-val>]
 */
taoensso.encore._swapped = (function taoensso$encore$_swapped(var_args){
var args32172 = [];
var len__28942__auto___32184 = arguments.length;
var i__28943__auto___32185 = (0);
while(true){
if((i__28943__auto___32185 < len__28942__auto___32184)){
args32172.push((arguments[i__28943__auto___32185]));

var G__32186 = (i__28943__auto___32185 + (1));
i__28943__auto___32185 = G__32186;
continue;
} else {
}
break;
}

var G__32174 = args32172.length;
switch (G__32174) {
case 1:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32172.length)].join('')));

}
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(taoensso.encore.swapped_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$2 = (function (old_val,f){
return taoensso.encore._swapped.call(null,f.call(null,old_val));
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$3 = (function (old_val,ks,f){
var vec__32175 = ks;
var seq__32176 = cljs.core.seq.call(null,vec__32175);
var first__32177 = cljs.core.first.call(null,seq__32176);
var seq__32176__$1 = cljs.core.next.call(null,seq__32176);
var k1 = first__32177;
var kn = seq__32176__$1;
var m = old_val;
if(kn){
if(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))){
return taoensso.encore._swapped.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__32178 = taoensso.encore._swapped.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__32178,(0),null);
var return_val = cljs.core.nth.call(null,vec__32178,(1),null);
var new_val = ((taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
} else {
if(((k1 == null)) && (cljs.core.empty_QMARK_.call(null,ks))){
return taoensso.encore._swapped.call(null,f.call(null,old_val));
} else {
if(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))){
return taoensso.encore._swapped.call(null,cljs.core.dissoc.call(null,m,k1));
} else {
var old_val_in = cljs.core.get.call(null,m,k1);
var vec__32181 = taoensso.encore._swapped.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__32181,(0),null);
var return_val = cljs.core.nth.call(null,vec__32181,(1),null);
var new_val = ((taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?cljs.core.dissoc.call(null,m,k1):cljs.core.assoc.call(null,m,k1,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
}
}
});

taoensso.encore._swapped.cljs$lang$maxFixedArity = 3;

/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops
 */
taoensso.encore._replace_in = (function taoensso$encore$_replace_in(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (acc,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__32192 = (cljs.core.truth_(_QMARK_vf_type)?cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op):_QMARK_op);
var vf_type = cljs.core.nth.call(null,vec__32192,(0),null);
var ks = cljs.core.nth.call(null,vec__32192,(1),null);
var valf = cljs.core.nth.call(null,vec__32192,(2),null);
var G__32195 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__32195) {
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,acc,ks,valf);
}

break;
case "swap":
if((valf == null)){
return acc;
} else {
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,acc);
} else {
return cljs.core.nth.call(null,taoensso.encore._swapped.call(null,acc,ks,valf),(0));
}
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
} else {
return acc;
}
}),m,ops);
});
/**
 * For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32199 = arguments.length;
var i__28943__auto___32200 = (0);
while(true){
if((i__28943__auto___32200 < len__28942__auto___32199)){
args__28949__auto__.push((arguments[i__28943__auto___32200]));

var G__32201 = (i__28943__auto___32200 + (1));
i__28943__auto___32200 = G__32201;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore._replace_in.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq32197){
var G__32198 = cljs.core.first.call(null,seq32197);
var seq32197__$1 = cljs.core.next.call(null,seq32197);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__32198,seq32197__$1);
});

taoensso.encore.pairs_into = (function taoensso$encore$pairs_into(to,from){
return cljs.core.into.call(null,to,cljs.core.partition_all.call(null,(2)),from);
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args32206 = [];
var len__28942__auto___32221 = arguments.length;
var i__28943__auto___32222 = (0);
while(true){
if((i__28943__auto___32222 < len__28942__auto___32221)){
args32206.push((arguments[i__28943__auto___32222]));

var G__32223 = (i__28943__auto___32222 + (1));
i__28943__auto___32222 = G__32223;
continue;
} else {
}
break;
}

var G__32212 = args32206.length;
switch (G__32212) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__28961__auto__ = (new cljs.core.IndexedSeq(args32206.slice((3)),(0),null));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28961__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__32213 = taoensso.encore._swapped.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__32213,(0),null);
var return_val = cljs.core.nth.call(null,vec__32213,(1),null);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__32216 = taoensso.encore._swapped.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__32216,(0),null);
var return_val = cljs.core.nth.call(null,vec__32216,(1),null);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if(cljs.core.truth_((function (){var z = (function (){try{return cljs.core.count.call(null,more);
}catch (e32219){if((e32219 instanceof Error)){
var e = e32219;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e32219;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(cljs.core.even_QMARK_.call(null,z)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e32220){if((e32220 instanceof Error)){
var e = e32220;
return e;
} else {
throw e32220;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",z,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var op_pairs = taoensso.encore.pairs_into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),more);
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore._replace_in.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,op_pairs);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq32207){
var G__32208 = cljs.core.first.call(null,seq32207);
var seq32207__$1 = cljs.core.next.call(null,seq32207);
var G__32209 = cljs.core.first.call(null,seq32207__$1);
var seq32207__$2 = cljs.core.next.call(null,seq32207__$1);
var G__32210 = cljs.core.first.call(null,seq32207__$2);
var seq32207__$3 = cljs.core.next.call(null,seq32207__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32208,G__32209,G__32210,seq32207__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Is to `reset!` as `swap-in!` is to `swap!`
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args32225 = [];
var len__28942__auto___32234 = arguments.length;
var i__28943__auto___32235 = (0);
while(true){
if((i__28943__auto___32235 < len__28942__auto___32234)){
args32225.push((arguments[i__28943__auto___32235]));

var G__32236 = (i__28943__auto___32235 + (1));
i__28943__auto___32235 = G__32236;
continue;
} else {
}
break;
}

var G__32231 = args32225.length;
switch (G__32231) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__28961__auto__ = (new cljs.core.IndexedSeq(args32225.slice((3)),(0),null));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28961__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if(cljs.core.truth_((function (){var z = (function (){try{return cljs.core.count.call(null,more);
}catch (e32232){if((e32232 instanceof Error)){
var e = e32232;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e32232;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(cljs.core.even_QMARK_.call(null,z)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e32233){if((e32233 instanceof Error)){
var e = e32233;
return e;
} else {
throw e32233;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",z,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var op_pairs = taoensso.encore.pairs_into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),more);
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore._replace_in.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,op_pairs);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_.call(null,atom_,old_val,new_val__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val__$1], null);
} else {
continue;
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq32226){
var G__32227 = cljs.core.first.call(null,seq32226);
var seq32226__$1 = cljs.core.next.call(null,seq32226);
var G__32228 = cljs.core.first.call(null,seq32226__$1);
var seq32226__$2 = cljs.core.next.call(null,seq32226__$1);
var G__32229 = cljs.core.first.call(null,seq32226__$2);
var seq32226__$3 = cljs.core.next.call(null,seq32226__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32227,G__32228,G__32229,seq32226__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var args32238 = [];
var len__28942__auto___32244 = arguments.length;
var i__28943__auto___32245 = (0);
while(true){
if((i__28943__auto___32245 < len__28942__auto___32244)){
args32238.push((arguments[i__28943__auto___32245]));

var G__32246 = (i__28943__auto___32245 + (1));
i__28943__auto___32245 = G__32246;
continue;
} else {
}
break;
}

var G__32243 = args32238.length;
switch (G__32243) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__28961__auto__ = (new cljs.core.IndexedSeq(args32238.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28961__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.call(null,str_builder,s);

return cljs.core.reduce.call(null,(function (acc,in$){
return taoensso.encore.sb_append.call(null,acc,in$);
}),str_builder,more);
});

taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq32239){
var G__32240 = cljs.core.first.call(null,seq32239);
var seq32239__$1 = cljs.core.next.call(null,seq32239);
var G__32241 = cljs.core.first.call(null,seq32239__$1);
var seq32239__$2 = cljs.core.next.call(null,seq32239__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__32240,G__32241,seq32239__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.call(null);
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_.call(null,acc)){
return acc;
} else {
return taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.call(null,((taoensso.encore.str_builder_QMARK_.call(null,acc))?acc:taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''))),[cljs.core.str(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var args32252 = [];
var len__28942__auto___32255 = arguments.length;
var i__28943__auto___32256 = (0);
while(true){
if((i__28943__auto___32256 < len__28942__auto___32255)){
args32252.push((arguments[i__28943__auto___32256]));

var G__32257 = (i__28943__auto___32256 + (1));
i__28943__auto___32256 = G__32257;
continue;
} else {
}
break;
}

var G__32254 = args32252.length;
switch (G__32254) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32252.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__27855__auto__ = separator;
if(cljs.core.truth_(and__27855__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__27855__auto__;
}
})())){
var sep_xform = cljs.core.interpose.call(null,separator);
var str_rf_STAR_ = cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.call(null,sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str(cljs.core.reduce.call(null,taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__27867__auto__ = fmt;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});
/**
 * Like `core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE
 *  * Formats nil as "nil" rather than "null"
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options than Clojure's `format`!)
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32261 = arguments.length;
var i__28943__auto___32262 = (0);
while(true){
if((i__28943__auto___32262 < len__28942__auto___32261)){
args__28949__auto__.push((arguments[i__28943__auto___32262]));

var G__32263 = (i__28943__auto___32262 + (1));
i__28943__auto___32262 = G__32263;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq32259){
var G__32260 = cljs.core.first.call(null,seq32259);
var seq32259__$1 = cljs.core.next.call(null,seq32259);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__32260,seq32259__$1);
});

/**
 * Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *                http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 technically introduced a breaking "fix" for
 *   CLJS-911 (Ref. https://goo.gl/bk5hcT) but it's a mess in an attempt to keep
 *   some compatibility with the previous broken behaviour. The merged CLJS-911 fix
 *   provides only inconsistent (single-match) and error-prone compatibility with
 *   Clojure's `str/replace`. CLJS-794 is also still unresolved.
 * 
 *   This util provides behaviour consistent between Clojure/Script.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__32264__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__32264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32265__i = 0, G__32265__a = new Array(arguments.length -  0);
while (G__32265__i < G__32265__a.length) {G__32265__a[G__32265__i] = arguments[G__32265__i + 0]; ++G__32265__i;}
  args = new cljs.core.IndexedSeq(G__32265__a,0);
} 
return G__32264__delegate.call(this,args);};
G__32264.cljs$lang$maxFixedArity = 0;
G__32264.cljs$lang$applyTo = (function (arglist__32266){
var args = cljs.core.seq(arglist__32266);
return G__32264__delegate(args);
});
G__32264.cljs$core$IFn$_invoke$arity$variadic = G__32264__delegate;
return G__32264;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');
}
}
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args32267 = [];
var len__28942__auto___32270 = arguments.length;
var i__28943__auto___32271 = (0);
while(true){
if((i__28943__auto___32271 < len__28942__auto___32270)){
args32267.push((arguments[i__28943__auto___32271]));

var G__32272 = (i__28943__auto___32271 + (1));
i__28943__auto___32271 = G__32272;
continue;
} else {
}
break;
}

var G__32269 = args32267.length;
switch (G__32269) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32267.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.call(null,s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.call(null,s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour:
 *  - Never throws; snaps to valid start and end indexes.
 *  - Returns nil rather than an empty string.
 */
taoensso.encore._QMARK_substr_LT_idx = (function taoensso$encore$_QMARK_substr_LT_idx(var_args){
var args32274 = [];
var len__28942__auto___32277 = arguments.length;
var i__28943__auto___32278 = (0);
while(true){
if((i__28943__auto___32278 < len__28942__auto___32277)){
args32274.push((arguments[i__28943__auto___32278]));

var G__32279 = (i__28943__auto___32278 + (1));
i__28943__auto___32278 = G__32279;
continue;
} else {
}
break;
}

var G__32276 = args32274.length;
switch (G__32276) {
case 2:
return taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32274.length)].join('')));

}
});

taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substring(start));
});

taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return null;
} else {
return s.substring(start,end);
}
});

taoensso.encore._QMARK_substr_LT_idx.cljs$lang$maxFixedArity = 3;

/**
 * Like `?substr<idx` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore._QMARK_substr_LT_len = (function taoensso$encore$_QMARK_substr_LT_len(var_args){
var args32281 = [];
var len__28942__auto___32284 = arguments.length;
var i__28943__auto___32285 = (0);
while(true){
if((i__28943__auto___32285 < len__28942__auto___32284)){
args32281.push((arguments[i__28943__auto___32285]));

var G__32286 = (i__28943__auto___32285 + (1));
i__28943__auto___32285 = G__32286;
continue;
} else {
}
break;
}

var G__32283 = args32281.length;
switch (G__32283) {
case 2:
return taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32281.length)].join('')));

}
});

taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start));
});

taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start,length));
});

taoensso.encore._QMARK_substr_LT_len.cljs$lang$maxFixedArity = 3;

/**
 * Like `string/join` but skips duplicate separators
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_.call(null,sep)){
return [cljs.core.str(cljs.core.reduce.call(null,taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_.call(null,false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_.call(null,true);
return [cljs.core.str(cljs.core.reduce.call(null,((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.call(null,in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_.call(null,in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref.call(null,acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref.call(null,acc_empty_QMARK__);
cljs.core.vreset_BANG_.call(null,acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_.call(null,acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.call(null,acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
} else {
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__27867__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
taoensso.encore.sb_append.call(null,acc,sep);

return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.call(null),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32291 = arguments.length;
var i__28943__auto___32292 = (0);
while(true){
if((i__28943__auto___32292 < len__28942__auto___32291)){
args__28949__auto__.push((arguments[i__28943__auto___32292]));

var G__32293 = (i__28943__auto___32292 + (1));
i__28943__auto___32292 = G__32293;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once.call(null,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq32290){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32290));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args32294 = [];
var len__28942__auto___32297 = arguments.length;
var i__28943__auto___32298 = (0);
while(true){
if((i__28943__auto___32298 < len__28942__auto___32297)){
args32294.push((arguments[i__28943__auto___32298]));

var G__32299 = (i__28943__auto___32298 + (1));
i__28943__auto___32298 = G__32299;
continue;
} else {
}
break;
}

var G__32296 = args32294.length;
switch (G__32296) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32294.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore._QMARK_substr_LT_len.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return [cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Like `core/memoize` but avoids write races, supports invalidation
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__32305__delegate = function (xs){
var get_sentinel = {};
var x1 = cljs.core.first.call(null,xs);
if(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","del","mem/del",574870667))){
var xn = cljs.core.next.call(null,xs);
var x2 = cljs.core.first.call(null,xn);
if(taoensso.encore.kw_identical_QMARK_.call(null,x2,new cljs.core.Keyword("mem","all","mem/all",892075139))){
cljs.core.vreset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.dissoc.call(null,cljs.core._deref.call(null,cache_),xn));
}

return null;
} else {
if(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133))){
var xn = cljs.core.next.call(null,xs);
var v = cljs.core.apply.call(null,f,xn);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xn,v));

return v;
} else {
var v = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.call(null,f,xs);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__32305 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__32306__i = 0, G__32306__a = new Array(arguments.length -  0);
while (G__32306__i < G__32306__a.length) {G__32306__a[G__32306__i] = arguments[G__32306__i + 0]; ++G__32306__i;}
  xs = new cljs.core.IndexedSeq(G__32306__a,0);
} 
return G__32305__delegate.call(this,xs);};
G__32305.cljs$lang$maxFixedArity = 0;
G__32305.cljs$lang$applyTo = (function (arglist__32307){
var xs = cljs.core.seq(arglist__32307);
return G__32305__delegate(xs);
});
G__32305.cljs$core$IFn$_invoke$arity$variadic = G__32305__delegate;
return G__32305;
})()
;
;})(cache_))
});
/**
 * Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__32308__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__27867__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__27867__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__27867__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__27867__auto__,cache_))
,null))], true, false);
}
});})(or__27867__auto__,cache_))
),args);
}
})());
};
var G__32308 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32309__i = 0, G__32309__a = new Array(arguments.length -  0);
while (G__32309__i < G__32309__a.length) {G__32309__a[G__32309__i] = arguments[G__32309__i + 0]; ++G__32309__i;}
  args = new cljs.core.IndexedSeq(G__32309__a,0);
} 
return G__32308__delegate.call(this,args);};
G__32308.cljs$lang$maxFixedArity = 0;
G__32308.cljs$lang$applyTo = (function (arglist__32310){
var args = cljs.core.seq(arglist__32310);
return G__32308__delegate(args);
});
G__32308.cljs$core$IFn$_invoke$arity$variadic = G__32308__delegate;
return G__32308;
})()
;
;})(cache_))
});
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
 * Like `core/memoize` but:
 *  * Often faster, depends on opts
 *  * Prevents race conditions on writes
 *  * Supports auto invalidation & gc with `ttl-ms` opt
 *  * Supports cache size limit & gc with `cache-size` opt
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args32311 = [];
var len__28942__auto___32348 = arguments.length;
var i__28943__auto___32349 = (0);
while(true){
if((i__28943__auto___32349 < len__28942__auto___32348)){
args32311.push((arguments[i__28943__auto___32349]));

var G__32350 = (i__28943__auto___32349 + (1));
i__28943__auto___32349 = G__32350;
continue;
} else {
}
break;
}

var G__32313 = args32311.length;
switch (G__32313) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32311.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_.call(null,f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_32352 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32314){if((e32314 instanceof Error)){
var e = e32314;
return e;
} else {
throw e32314;

}
}})();
if((e_32352 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? ttl-ms)",ttl_ms,e_32352,null);
}

var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
var gc_fn = ((function (cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (){
if(cljs.core.truth_((function (){var and__27855__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__27855__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__27855__auto__,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__27855__auto__,cache_,gc_running_QMARK__,ttl_ms__$1))
);
} else {
return and__27855__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
var snapshot = cljs.core.deref.call(null,cache_);
var ks_to_gc = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,k,p__32315){
var vec__32316 = p__32315;
var dv = cljs.core.nth.call(null,vec__32316,(0),null);
var udt = cljs.core.nth.call(null,vec__32316,(1),null);
var cv = vec__32316;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot));
cljs.core.swap_BANG_.call(null,cache_,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,m),ks_to_gc));
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
);

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(cache_,gc_running_QMARK__,ttl_ms__$1))
;
return ((function (cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function() { 
var G__32353__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = ((fresh_QMARK_)?cljs.core.next.call(null,args):args);
var instant = taoensso.encore.now_udt.call(null);
var vec__32319 = taoensso.encore._swap_cache_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__27855__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__27855__auto__)){
var and__27855__auto____$1 = !(fresh_QMARK_);
if(and__27855__auto____$1){
var vec__32325 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__32325,(0),null);
var udt = cljs.core.nth.call(null,vec__32325,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__27855__auto____$1;
}
} else {
return and__27855__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
);
var dv = cljs.core.nth.call(null,vec__32319,(0),null);
return cljs.core.deref.call(null,dv);
}
};
var G__32353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32354__i = 0, G__32354__a = new Array(arguments.length -  0);
while (G__32354__i < G__32354__a.length) {G__32354__a[G__32354__i] = arguments[G__32354__i + 0]; ++G__32354__i;}
  args = new cljs.core.IndexedSeq(G__32354__a,0);
} 
return G__32353__delegate.call(this,args);};
G__32353.cljs$lang$maxFixedArity = 0;
G__32353.cljs$lang$applyTo = (function (arglist__32355){
var args = cljs.core.seq(arglist__32355);
return G__32353__delegate(args);
});
G__32353.cljs$core$IFn$_invoke$arity$variadic = G__32353__delegate;
return G__32353;
})()
;
;})(cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (x){
var or__27867__auto__ = (x == null);
if(or__27867__auto__){
return or__27867__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.pos_int_QMARK_).call(null,x);
}
}).call(null,ttl_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_32356 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32328){if((e32328 instanceof Error)){
var e = e32328;
return e;
} else {
throw e32328;

}
}})();
if((e_32356 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? cache-size)",cache_size,e_32356,null);
}

var state_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms_QMARK_ = !((ttl_ms == null));
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__27867__auto__ = ttl_ms;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return (0);
}
})());
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
var gc_fn = ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (){
if(cljs.core.truth_((function (){var and__27855__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__27855__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__27855__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__27855__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
return and__27855__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
if(ttl_ms_QMARK_){
var snapshot_32357 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var ks_to_gc_32358 = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (snapshot_32357,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,k,p__32329){
var vec__32330 = p__32329;
var dv = cljs.core.nth.call(null,vec__32330,(0),null);
var udt = cljs.core.nth.call(null,vec__32330,(1),null);
var _ = cljs.core.nth.call(null,vec__32330,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__32330,(3),null);
var cv = vec__32330;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(snapshot_32357,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot_32357));
cljs.core.swap_BANG_.call(null,state_,((function (snapshot_32357,ks_to_gc_32358,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (snapshot_32357,ks_to_gc_32358,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(snapshot_32357,ks_to_gc_32358,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_32358));
});})(snapshot_32357,ks_to_gc_32358,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

var snapshot_32359 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var n_to_gc_32360 = (cljs.core.count.call(null,snapshot_32359) - cache_size__$1);
if((n_to_gc_32360 > (64))){
var ks_to_gc_32361 = taoensso.encore.top.call(null,n_to_gc_32360,((function (snapshot_32359,n_to_gc_32360,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (k){
var vec__32333 = snapshot_32359.call(null,k);
var _ = cljs.core.nth.call(null,vec__32333,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__32333,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__32333,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__32333,(3),null);
return (tick_lru + tick_lfu);
});})(snapshot_32359,n_to_gc_32360,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.keys.call(null,snapshot_32359));
cljs.core.swap_BANG_.call(null,state_,((function (ks_to_gc_32361,snapshot_32359,n_to_gc_32360,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_32361,snapshot_32359,n_to_gc_32360,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_32361,snapshot_32359,n_to_gc_32360,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_32361));
});})(ks_to_gc_32361,snapshot_32359,n_to_gc_32360,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
;
var cv_fn = ((ttl_ms_QMARK_)?((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
var instant = taoensso.encore.now_udt.call(null);
return taoensso.encore._swap_cache_BANG_.call(null,state_,args,((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__27855__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__27855__auto__)){
var and__27855__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__27855__auto____$1){
var vec__32339 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__32339,(0),null);
var udt = cljs.core.nth.call(null,vec__32339,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__27855__auto____$1;
}
} else {
return and__27855__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),instant,tick,(1)], null);
}
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
:((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
return taoensso.encore._swap_cache_BANG_.call(null,state_,args,((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__27855__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__27855__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__27855__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),null,tick,(1)], null);
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
return ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function() { 
var G__32362__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139))){
cljs.core.reset_BANG_.call(null,state_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = ((fresh_QMARK_)?cljs.core.next.call(null,args):args);
var tick = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_));
var vec__32342 = cv_fn.call(null,args__$1,fresh_QMARK_,tick);
var dv = cljs.core.nth.call(null,vec__32342,(0),null);
cljs.core.swap_BANG_.call(null,state_,((function (fresh_QMARK_,args__$1,tick,vec__32342,dv,a1,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function (m){
var temp__4655__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__32345 = temp__4655__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__32345,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__32345,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__32345,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__32345,(3),null);
var cv = vec__32345;
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick,(tick_lfu + (1))], null));
} else {
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)));
}
});})(fresh_QMARK_,args__$1,tick,vec__32342,dv,a1,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
);

return cljs.core.deref.call(null,dv);
}
};
var G__32362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32363__i = 0, G__32363__a = new Array(arguments.length -  0);
while (G__32363__i < G__32363__a.length) {G__32363__a[G__32363__i] = arguments[G__32363__i + 0]; ++G__32363__i;}
  args = new cljs.core.IndexedSeq(G__32363__a,0);
} 
return G__32362__delegate.call(this,args);};
G__32362.cljs$lang$maxFixedArity = 0;
G__32362.cljs$lang$applyTo = (function (arglist__32364){
var args = cljs.core.seq(arglist__32364);
return G__32362__delegate(args);
});
G__32362.cljs$core$IFn$_invoke$arity$variadic = G__32362__delegate;
return G__32362;
})()
;
;})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return cljs.core.constantly.call(null,null);
} else {
var vspecs = cljs.core.vec.call(null,specs);
var vstates_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var max_win_ms = cljs.core.long$.call(null,cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.mapv.call(null,((function (vspecs,vstates_){
return (function (p__32452){
var vec__32453 = p__32452;
var _ = cljs.core.nth.call(null,vec__32453,(0),null);
var win_ms = cljs.core.nth.call(null,vec__32453,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__32453,(2),null);
var spec = vec__32453;
return win_ms;
});})(vspecs,vstates_))
,vspecs)));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__32456){
var vec__32457 = p__32456;
var _ = cljs.core.nth.call(null,vec__32457,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__32457,(1),null);
var id = cljs.core.nth.call(null,vec__32457,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error("Assert failed: (or (zero? nid-specs) (= nid-specs nspecs))"))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__32460){
var vec__32500 = p__32460;
var _QMARK_a1 = cljs.core.nth.call(null,vec__32500,(0),null);
var _QMARK_a2 = cljs.core.nth.call(null,vec__32500,(1),null);
if(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","debug","rl/debug",-1608167914))){
return vstates_;
} else {
if(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","reset","rl/reset",-800926172))){
if(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a2,new cljs.core.Keyword("rl","all","rl/all",892118056))){
cljs.core.reset_BANG_.call(null,vstates_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,vstates_,cljs.core.dissoc,_QMARK_a2);
}

return null;
} else {
var peek_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","peek","rl/peek",-291391771));
var req_id = ((peek_QMARK_)?_QMARK_a2:_QMARK_a1);
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__27855__auto__ = req_id;
if(cljs.core.truth_(and__27855__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__27855__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (peek_QMARK_,req_id,instant,vec__32500,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
return cljs.core.reduce_kv.call(null,((function (peek_QMARK_,req_id,instant,vec__32500,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (peek_QMARK_,req_id,instant,vec__32500,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__32507){
var vec__32508 = p__32507;
var ___$1 = cljs.core.nth.call(null,vec__32508,(0),null);
var udt = cljs.core.nth.call(null,vec__32508,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__32508,(2),null);
var x__28198__auto__ = acc;
var y__28199__auto__ = udt;
return ((x__28198__auto__ > y__28199__auto__) ? x__28198__auto__ : y__28199__auto__);
});})(peek_QMARK_,req_id,instant,vec__32500,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(peek_QMARK_,req_id,instant,vec__32500,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m,m);
});})(peek_QMARK_,req_id,instant,vec__32500,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (peek_QMARK_,req_id,instant,vec__32500,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.truth_(_QMARK_vstate)){
var vec__32511 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__32514 = in_vspecs;
var seq__32515 = cljs.core.seq.call(null,vec__32514);
var first__32516 = cljs.core.first.call(null,seq__32515);
var seq__32515__$1 = cljs.core.next.call(null,seq__32515);
var vec__32517 = first__32516;
var ncalls_limit = cljs.core.nth.call(null,vec__32517,(0),null);
var win_ms = cljs.core.nth.call(null,vec__32517,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__32517,(2),null);
var next_in_vspecs = seq__32515__$1;
var vec__32520 = in_vstate;
var seq__32521 = cljs.core.seq.call(null,vec__32520);
var first__32522 = cljs.core.first.call(null,seq__32521);
var seq__32521__$1 = cljs.core.next.call(null,seq__32521);
var vec__32523 = first__32522;
var ncalls = cljs.core.nth.call(null,vec__32523,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__32523,(1),null);
var next_in_vstate = seq__32521__$1;
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((rate_limited_QMARK_)?(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__27867__auto__ = (_QMARK_worst_limit_offence == null);
if(or__27867__auto__){
return or__27867__auto__;
} else {
var vec__32529 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__32529,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__32529,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})():_QMARK_worst_limit_offence);
if(next_in_vspecs){
var G__32539 = next_in_vspecs;
var G__32540 = next_in_vstate;
var G__32541 = new_out_vstate;
var G__32542 = new__QMARK_worst_limit_offence;
in_vspecs = G__32539;
in_vstate = G__32540;
out_vstate = G__32541;
_QMARK_worst_limit_offence = G__32542;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__32511,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__32511,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = ((peek_QMARK_)?_QMARK_vstate:((all_limits_pass_QMARK_)?cljs.core.mapv.call(null,((function (vec__32511,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__32500,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__32532){
var vec__32533 = p__32532;
var ncalls = cljs.core.nth.call(null,vec__32533,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__32533,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__32511,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__32500,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets):vstate_with_resets));
var result = (function (){var temp__4657__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4657__auto__)){
var wlo = temp__4657__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__32536 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__32536,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__32536,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
} else {
if(peek_QMARK_){
return taoensso.encore.swapped.call(null,_QMARK_vstate,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
}
}
});})(peek_QMARK_,req_id,instant,vec__32500,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
}
}
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__32460 = null;
if (arguments.length > 0) {
var G__32543__i = 0, G__32543__a = new Array(arguments.length -  0);
while (G__32543__i < G__32543__a.length) {G__32543__a[G__32543__i] = arguments[G__32543__i + 0]; ++G__32543__i;}
  p__32460 = new cljs.core.IndexedSeq(G__32543__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__32460);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__32544){
var p__32460 = cljs.core.seq(arglist__32544);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__32460);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__32545__delegate = function (args){
var temp__4655__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var backoff = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__32545 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32546__i = 0, G__32546__a = new Array(arguments.length -  0);
while (G__32546__i < G__32546__a.length) {G__32546__a[G__32546__i] = arguments[G__32546__i + 0]; ++G__32546__i;}
  args = new cljs.core.IndexedSeq(G__32546__a,0);
} 
return G__32545__delegate.call(this,args);};
G__32545.cljs$lang$maxFixedArity = 0;
G__32545.cljs$lang$applyTo = (function (arglist__32547){
var args = cljs.core.seq(arglist__32547);
return G__32545__delegate(args);
});
G__32545.cljs$core$IFn$_invoke$arity$variadic = G__32545__delegate;
return G__32545;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4655__auto__ = taoensso.encore.oget.call(null,taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(temp__4655__auto__)){
var perf = temp__4655__auto__;
var temp__4655__auto____$1 = (function (){var or__27867__auto__ = taoensso.encore.oget.call(null,perf,"now");
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
var or__27867__auto____$1 = taoensso.encore.oget.call(null,perf,"mozNow");
if(cljs.core.truth_(or__27867__auto____$1)){
return or__27867__auto____$1;
} else {
var or__27867__auto____$2 = taoensso.encore.oget.call(null,perf,"msNow");
if(cljs.core.truth_(or__27867__auto____$2)){
return or__27867__auto____$2;
} else {
var or__27867__auto____$3 = taoensso.encore.oget.call(null,perf,"oNow");
if(cljs.core.truth_(or__27867__auto____$3)){
return or__27867__auto____$3;
} else {
return taoensso.encore.oget.call(null,perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(temp__4655__auto____$1)){
var f = temp__4655__auto____$1;
return ((function (f,temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__4655__auto____$1,perf,temp__4655__auto__))
} else {
return ((function (temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4655__auto____$1,perf,temp__4655__auto__))
}
} else {
return ((function (temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4655__auto__))
}
})();

taoensso.encore.console_log = (function (){var temp__4655__auto__ = (function (){var and__27855__auto__ = typeof console !== 'undefined';
if(and__27855__auto__){
return console.log;
} else {
return and__27855__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return ((function (f,temp__4655__auto__){
return (function (xs){
return f.apply(console,cljs.core.into_array.call(null,xs));
});
;})(f,temp__4655__auto__))
} else {
return ((function (temp__4655__auto__){
return (function (xs){
return null;
});
;})(temp__4655__auto__))
}
})();

taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32555 = arguments.length;
var i__28943__auto___32556 = (0);
while(true){
if((i__28943__auto___32556 < len__28942__auto___32555)){
args__28949__auto__.push((arguments[i__28943__auto___32556]));

var G__32557 = (i__28943__auto___32556 + (1));
i__28943__auto___32556 = G__32557;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq32548){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32548));
});


taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32558 = arguments.length;
var i__28943__auto___32559 = (0);
while(true){
if((i__28943__auto___32559 < len__28942__auto___32558)){
args__28949__auto__.push((arguments[i__28943__auto___32559]));

var G__32560 = (i__28943__auto___32559 + (1));
i__28943__auto___32559 = G__32560;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.spaced_str_with_nils.call(null,xs)], null));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq32549){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32549));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32561 = arguments.length;
var i__28943__auto___32562 = (0);
while(true){
if((i__28943__auto___32562 < len__28942__auto___32561)){
args__28949__auto__.push((arguments[i__28943__auto___32562]));

var G__32563 = (i__28943__auto___32562 + (1));
i__28943__auto___32562 = G__32563;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_.call(null,fmt,xs)], null));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq32550){
var G__32551 = cljs.core.first.call(null,seq32550);
var seq32550__$1 = cljs.core.next.call(null,seq32550);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__32551,seq32550__$1);
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32564 = arguments.length;
var i__28943__auto___32565 = (0);
while(true){
if((i__28943__auto___32565 < len__28942__auto___32564)){
args__28949__auto__.push((arguments[i__28943__auto___32565]));

var G__32566 = (i__28943__auto___32565 + (1));
i__28943__auto___32565 = G__32566;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str_with_nils.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq32552){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32552));
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32567 = arguments.length;
var i__28943__auto___32568 = (0);
while(true){
if((i__28943__auto___32568 < len__28942__auto___32567)){
args__28949__auto__.push((arguments[i__28943__auto___32568]));

var G__32569 = (i__28943__auto___32568 + (1));
i__28943__auto___32568 = G__32569;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq32553){
var G__32554 = cljs.core.first.call(null,seq32553);
var seq32553__$1 = cljs.core.next.call(null,seq32553);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__32554,seq32553__$1);
});

/**
 * Returns `js/window`'s current location as a map
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var temp__4657__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(temp__4657__auto__)){
var js_win = temp__4657__auto__;
var temp__4657__auto____$1 = js_win.location;
if(cljs.core.truth_(temp__4657__auto____$1)){
var loc = temp__4657__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if(cljs.core.truth_((cljs.core.truth_((function (x){
var or__27867__auto__ = (x == null);
if(or__27867__auto__){
return or__27867__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
}).call(null,params))?true:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? map?] params)",params,null,null)))){
} else {
throw (new Error("Assert failed: (have? [:or nil? map?] params)"));
}

var _QMARK_pstr = ((cljs.core.seq.call(null,params))?(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
})():null);
var G__32571 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__32571) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__32575,callback){
var map__32595 = p__32575;
var map__32595__$1 = ((((!((map__32595 == null)))?((((map__32595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32595):map__32595);
var opts = map__32595__$1;
var method = cljs.core.get.call(null,map__32595__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__32595__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__32595__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__32595__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__32595__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__32595__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var progress_fn = cljs.core.get.call(null,map__32595__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var errorf = cljs.core.get.call(null,map__32595__$1,new cljs.core.Keyword(null,"errorf","errorf",-620376044),taoensso.encore.logf);
if(cljs.core.truth_((cljs.core.truth_(((function (map__32595,map__32595__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (x){
var or__27867__auto__ = (x == null);
if(or__27867__auto__){
return or__27867__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nat_int_QMARK_).call(null,x);
}
});})(map__32595,map__32595__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
.call(null,timeout_ms))?true:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null)))){
} else {
throw (new Error("Assert failed: (have? [:or nil? nat-int?] timeout-ms)"));
}

var temp__4655__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var xhr = temp__4655__auto__;
try{var timeout_ms__$1 = (function (){var or__27867__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__32601 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__32601) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__32598 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__32598,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__32598,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,(cljs.core.truth_(post_content_STAR_)?cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8"):headers__$1));
var G__32602_32615 = xhr;
goog.events.listenOnce(G__32602_32615,goog.net.EventType.READY,((function (G__32602_32615,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__32598,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__32595,map__32595__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__32602_32615,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__32598,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__32595,map__32595__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);

goog.events.listenOnce(G__32602_32615,goog.net.EventType.COMPLETE,((function (G__32602_32615,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__32598,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__32595,map__32595__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492)))?(function (){var pred__32608 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__32602_32615,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__32598,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__32595,map__32595__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__32574_SHARP_,p2__32573_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__32573_SHARP_,p1__32574_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__32602_32615,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__32598,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__32595,map__32595__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__32609 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__32608.call(null,"/edn",expr__32609))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__32608.call(null,"/json",expr__32609))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__32608.call(null,"/xml",expr__32609))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__32608.call(null,"/html",expr__32609))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})():resp_type);
try{var G__32612 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__32612) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return taoensso.encore.read_edn.call(null,xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e32611){if((e32611 instanceof Error)){
var e = e32611;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e32611;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__27867__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__32602_32615,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__32598,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__32595,map__32595__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);


var temp__4657__auto___32617 = progress_fn;
if(cljs.core.truth_(temp__4657__auto___32617)){
var pf_32618 = temp__4657__auto___32617;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_32618,temp__4657__auto___32617,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__32598,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__32595,map__32595__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__27855__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__27855__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__27855__auto__;
}
})())?(loaded / total):null);
return pf_32618.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_32618,temp__4657__auto___32617,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__32598,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__32595,map__32595__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);
} else {
}

var G__32613_32619 = xhr;
var temp__4657__auto___32620 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4657__auto___32620)){
var x_32621 = temp__4657__auto___32620;
G__32613_32619.setTimeoutInterval((function (){var or__27867__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4657__auto___32622 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4657__auto___32622)){
var x_32623 = temp__4657__auto___32622;
G__32613_32619.setWithCredentials(true);
} else {
}

var temp__4657__auto___32624 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4657__auto___32624)){
var x_32625 = temp__4657__auto___32624;
G__32613_32619.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e32597){if((e32597 instanceof Error)){
var e = e32597;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e32597;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32632 = arguments.length;
var i__28943__auto___32633 = (0);
while(true){
if((i__28943__auto___32633 < len__28942__auto___32632)){
args__28949__auto__.push((arguments[i__28943__auto___32633]));

var G__32634 = (i__28943__auto___32633 + (1));
i__28943__auto___32633 = G__32634;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__32628){
var vec__32629 = p__32628;
var encoding = cljs.core.nth.call(null,vec__32629,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq32626){
var G__32627 = cljs.core.first.call(null,seq32626);
var seq32626__$1 = cljs.core.next.call(null,seq32626);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__32627,seq32626__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,taoensso.encore.as_qname.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,(function (){var or__27867__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return [cljs.core.str(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return "";
} else {
return join.call(null,(function (){var iter__28647__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__32651(s__32652){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__32652__$1 = s__32652;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32652__$1);
if(temp__4657__auto__){
var s__32652__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32652__$2)){
var c__28645__auto__ = cljs.core.chunk_first.call(null,s__32652__$2);
var size__28646__auto__ = cljs.core.count.call(null,c__28645__auto__);
var b__32654 = cljs.core.chunk_buffer.call(null,size__28646__auto__);
if((function (){var i__32653 = (0);
while(true){
if((i__32653 < size__28646__auto__)){
var vec__32661 = cljs.core._nth.call(null,c__28645__auto__,i__32653);
var k = cljs.core.nth.call(null,vec__32661,(0),null);
var v = cljs.core.nth.call(null,vec__32661,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
cljs.core.chunk_append.call(null,b__32654,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__27867__auto__ = cljs.core.seq.call(null,v);
if(or__27867__auto__){
return or__27867__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__32667 = (i__32653 + (1));
i__32653 = G__32667;
continue;
} else {
var G__32668 = (i__32653 + (1));
i__32653 = G__32668;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32654),taoensso$encore$format_query_string_$_iter__32651.call(null,cljs.core.chunk_rest.call(null,s__32652__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32654),null);
}
} else {
var vec__32664 = cljs.core.first.call(null,s__32652__$2);
var k = cljs.core.nth.call(null,vec__32664,(0),null);
var v = cljs.core.nth.call(null,vec__32664,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__27867__auto__ = cljs.core.seq.call(null,v);
if(or__27867__auto__){
return or__27867__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__32651.call(null,cljs.core.rest.call(null,s__32652__$2)));
} else {
var G__32669 = cljs.core.rest.call(null,s__32652__$2);
s__32652__$1 = G__32669;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__28647__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var cur = temp__4655__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32680 = arguments.length;
var i__28943__auto___32681 = (0);
while(true){
if((i__28943__auto___32681 < len__28942__auto___32680)){
args__28949__auto__.push((arguments[i__28943__auto___32681]));

var G__32682 = (i__28943__auto___32681 + (1));
i__28943__auto___32681 = G__32682;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__32672){
var vec__32673 = p__32672;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__32673,(0),null);
var encoding = cljs.core.nth.call(null,vec__32673,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?cljs.core.subs.call(null,s,(1)):s);
if(cljs.core.truth_(taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
var m = cljs.core.reduce.call(null,((function (s__$1,vec__32673,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4655__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__32676 = temp__4655__auto__;
var k = cljs.core.nth.call(null,vec__32676,(0),null);
var v = cljs.core.nth.call(null,vec__32676,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__32673,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
} else {
return m;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
if(cljs.core.truth_((function (){var e = (function (){try{if(cljs.core.map_QMARK_.call(null,_PERCENT_)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32679){if((e32679 instanceof Error)){
var e = e32679;
return e;
} else {
throw e32679;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(map? %)",_PERCENT_,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? map? %)"));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq32670){
var G__32671 = cljs.core.first.call(null,seq32670);
var seq32670__$1 = cljs.core.next.call(null,seq32670);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__32671,seq32670__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__32686 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__32686,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__32686,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys.call(null,cljs.core.keyword,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.map_keys.call(null,cljs.core.keyword,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var temp__4655__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(temp__4655__auto__)){
var qstr = temp__4655__auto__;
return [cljs.core.str(url__$1),cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stub_ = (function taoensso$encore$_new_stub_(sfn_name){
return cljs.core.volatile_BANG_.call(null,(function() { 
var G__32689__delegate = function (args){
throw cljs.core.ex_info.call(null,[cljs.core.str("No stubfn implementation for: "),cljs.core.str(sfn_name)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sfn-name","sfn-name",-968697222),sfn_name,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
};
var G__32689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32690__i = 0, G__32690__a = new Array(arguments.length -  0);
while (G__32690__i < G__32690__a.length) {G__32690__a[G__32690__i] = arguments[G__32690__i + 0]; ++G__32690__i;}
  args = new cljs.core.IndexedSeq(G__32690__a,0);
} 
return G__32689__delegate.call(this,args);};
G__32689.cljs$lang$maxFixedArity = 0;
G__32689.cljs$lang$applyTo = (function (arglist__32691){
var args = cljs.core.seq(arglist__32691);
return G__32689__delegate(args);
});
G__32689.cljs$core$IFn$_invoke$arity$variadic = G__32689__delegate;
return G__32689;
})()
);
});
taoensso.encore.fixture_map__GT_fn = (function taoensso$encore$fixture_map__GT_fn(p__32693){
var map__32696 = p__32693;
var map__32696__$1 = ((((!((map__32696 == null)))?((((map__32696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32696):map__32696);
var before = cljs.core.get.call(null,map__32696__$1,new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Symbol(null,"do","do",1686842252,null));
var after = cljs.core.get.call(null,map__32696__$1,new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Symbol(null,"do","do",1686842252,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__28701__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__32692__auto__","f__32692__auto__",981127765,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28701__auto__);
})(),(function (){var x__28701__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28701__auto__ = before;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28701__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28701__auto__);
})(),(function (){var x__28701__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__32692__auto__","f__32692__auto__",981127765,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28701__auto__);
})(),(function (){var x__28701__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28701__auto__ = after;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28701__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28701__auto__);
})())));
});
taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore._swapped;

taoensso.encore.swap_val_BANG_ = taoensso.encore._swap_cache_BANG_;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32800 = arguments.length;
var i__28943__auto___32801 = (0);
while(true){
if((i__28943__auto___32801 < len__28942__auto___32800)){
args__28949__auto__.push((arguments[i__28943__auto___32801]));

var G__32802 = (i__28943__auto___32801 + (1));
i__28943__auto___32801 = G__32802;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__32704){
var vec__32705 = p__32704;
var type = cljs.core.nth.call(null,vec__32705,(0),null);
var nplaces = cljs.core.nth.call(null,vec__32705,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__27867__auto__ = type;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq32702){
var G__32703 = cljs.core.first.call(null,seq32702);
var seq32702__$1 = cljs.core.next.call(null,seq32702);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__32703,seq32702__$1);
});


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32803 = arguments.length;
var i__28943__auto___32804 = (0);
while(true){
if((i__28943__auto___32804 < len__28942__auto___32803)){
args__28949__auto__.push((arguments[i__28943__auto___32804]));

var G__32805 = (i__28943__auto___32804 + (1));
i__28943__auto___32804 = G__32805;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once.call(null,sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq32708){
var G__32709 = cljs.core.first.call(null,seq32708);
var seq32708__$1 = cljs.core.next.call(null,seq32708);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__32709,seq32708__$1);
});


taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__32806__delegate = function (args){
var temp__4655__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var backoff_ms = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__32806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32807__i = 0, G__32807__a = new Array(arguments.length -  0);
while (G__32807__i < G__32807__a.length) {G__32807__a[G__32807__i] = arguments[G__32807__i + 0]; ++G__32807__i;}
  args = new cljs.core.IndexedSeq(G__32807__a,0);
} 
return G__32806__delegate.call(this,args);};
G__32806.cljs$lang$maxFixedArity = 0;
G__32806.cljs$lang$applyTo = (function (arglist__32808){
var args = cljs.core.seq(arglist__32808);
return G__32806__delegate(args);
});
G__32806.cljs$core$IFn$_invoke$arity$variadic = G__32806__delegate;
return G__32806;
})()
;
;})(rl))
});

taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32809 = arguments.length;
var i__28943__auto___32810 = (0);
while(true){
if((i__28943__auto___32810 < len__28942__auto___32809)){
args__28949__auto__.push((arguments[i__28943__auto___32810]));

var G__32811 = (i__28943__auto___32810 + (1));
i__28943__auto___32810 = G__32811;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__32712){
var vec__32713 = p__32712;
var nattempt = cljs.core.nth.call(null,vec__32713,(0),null);
var temp__4657__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(temp__4657__auto__)){
var js_win = temp__4657__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__27867__auto__ = nattempt;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq32710){
var G__32711 = cljs.core.first.call(null,seq32710);
var seq32710__$1 = cljs.core.next.call(null,seq32710);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32711,seq32710__$1);
});


if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32812 = arguments.length;
var i__28943__auto___32813 = (0);
while(true){
if((i__28943__auto___32813 < len__28942__auto___32812)){
args__28949__auto__.push((arguments[i__28943__auto___32813]));

var G__32814 = (i__28943__auto___32813 + (1));
i__28943__auto___32813 = G__32814;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq32716){
var G__32717 = cljs.core.first.call(null,seq32716);
var seq32716__$1 = cljs.core.next.call(null,seq32716);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__32717,seq32716__$1);
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32815 = arguments.length;
var i__28943__auto___32816 = (0);
while(true){
if((i__28943__auto___32816 < len__28942__auto___32815)){
args__28949__auto__.push((arguments[i__28943__auto___32816]));

var G__32817 = (i__28943__auto___32816 + (1));
i__28943__auto___32816 = G__32817;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq32718){
var G__32719 = cljs.core.first.call(null,seq32718);
var seq32718__$1 = cljs.core.next.call(null,seq32718);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__32719,seq32718__$1);
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32818 = arguments.length;
var i__28943__auto___32819 = (0);
while(true){
if((i__28943__auto___32819 < len__28942__auto___32818)){
args__28949__auto__.push((arguments[i__28943__auto___32819]));

var G__32820 = (i__28943__auto___32819 + (1));
i__28943__auto___32819 = G__32820;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq32720){
var G__32721 = cljs.core.first.call(null,seq32720);
var seq32720__$1 = cljs.core.next.call(null,seq32720);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__32721,seq32720__$1);
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32821 = arguments.length;
var i__28943__auto___32822 = (0);
while(true){
if((i__28943__auto___32822 < len__28942__auto___32821)){
args__28949__auto__.push((arguments[i__28943__auto___32822]));

var G__32823 = (i__28943__auto___32822 + (1));
i__28943__auto___32822 = G__32823;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq32722){
var G__32723 = cljs.core.first.call(null,seq32722);
var seq32722__$1 = cljs.core.next.call(null,seq32722);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__32723,seq32722__$1);
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32824 = arguments.length;
var i__28943__auto___32825 = (0);
while(true){
if((i__28943__auto___32825 < len__28942__auto___32824)){
args__28949__auto__.push((arguments[i__28943__auto___32825]));

var G__32826 = (i__28943__auto___32825 + (1));
i__28943__auto___32825 = G__32826;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq32724){
var G__32725 = cljs.core.first.call(null,seq32724);
var seq32724__$1 = cljs.core.next.call(null,seq32724);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__32725,seq32724__$1);
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32827 = arguments.length;
var i__28943__auto___32828 = (0);
while(true){
if((i__28943__auto___32828 < len__28942__auto___32827)){
args__28949__auto__.push((arguments[i__28943__auto___32828]));

var G__32829 = (i__28943__auto___32828 + (1));
i__28943__auto___32828 = G__32829;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq32726){
var G__32727 = cljs.core.first.call(null,seq32726);
var seq32726__$1 = cljs.core.next.call(null,seq32726);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__32727,seq32726__$1);
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32830 = arguments.length;
var i__28943__auto___32831 = (0);
while(true){
if((i__28943__auto___32831 < len__28942__auto___32830)){
args__28949__auto__.push((arguments[i__28943__auto___32831]));

var G__32832 = (i__28943__auto___32831 + (1));
i__28943__auto___32831 = G__32832;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq32728){
var G__32729 = cljs.core.first.call(null,seq32728);
var seq32728__$1 = cljs.core.next.call(null,seq32728);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__32729,seq32728__$1);
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32833 = arguments.length;
var i__28943__auto___32834 = (0);
while(true){
if((i__28943__auto___32834 < len__28942__auto___32833)){
args__28949__auto__.push((arguments[i__28943__auto___32834]));

var G__32835 = (i__28943__auto___32834 + (1));
i__28943__auto___32834 = G__32835;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__32732){
var vec__32733 = p__32732;
var _QMARK_comparator = cljs.core.nth.call(null,vec__32733,(0),null);
var comparator = (function (){var or__27867__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__32733,_QMARK_comparator){
return (function (p1__32698_SHARP_,p2__32699_SHARP_){
if((comparator.call(null,p1__32698_SHARP_,p2__32699_SHARP_) > (0))){
return p2__32699_SHARP_;
} else {
return p1__32698_SHARP_;
}
});})(comparator,vec__32733,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq32730){
var G__32731 = cljs.core.first.call(null,seq32730);
var seq32730__$1 = cljs.core.next.call(null,seq32730);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__32731,seq32730__$1);
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32836 = arguments.length;
var i__28943__auto___32837 = (0);
while(true){
if((i__28943__auto___32837 < len__28942__auto___32836)){
args__28949__auto__.push((arguments[i__28943__auto___32837]));

var G__32838 = (i__28943__auto___32837 + (1));
i__28943__auto___32837 = G__32838;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__32738){
var vec__32739 = p__32738;
var _QMARK_comparator = cljs.core.nth.call(null,vec__32739,(0),null);
var comparator = (function (){var or__27867__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__32739,_QMARK_comparator){
return (function (p1__32700_SHARP_,p2__32701_SHARP_){
if((comparator.call(null,p1__32700_SHARP_,p2__32701_SHARP_) < (0))){
return p2__32701_SHARP_;
} else {
return p1__32700_SHARP_;
}
});})(comparator,vec__32739,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq32736){
var G__32737 = cljs.core.first.call(null,seq32736);
var seq32736__$1 = cljs.core.next.call(null,seq32736);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__32737,seq32736__$1);
});



/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__27867__auto__ = x;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__32754,seen__$1){
while(true){
var vec__32755 = p__32754;
var v = cljs.core.nth.call(null,vec__32755,(0),null);
var xs__$1 = vec__32755;
var temp__4657__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4657__auto__){
var s = temp__4657__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__32839 = cljs.core.rest.call(null,s);
var G__32840 = seen__$1;
p__32754 = G__32839;
seen__$1 = G__32840;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args32758 = [];
var len__28942__auto___32841 = arguments.length;
var i__28943__auto___32842 = (0);
while(true){
if((i__28943__auto___32842 < len__28942__auto___32841)){
args32758.push((arguments[i__28943__auto___32842]));

var G__32843 = (i__28943__auto___32842 + (1));
i__28943__auto___32842 = G__32843;
continue;
} else {
}
break;
}

var G__32760 = args32758.length;
switch (G__32760) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32758.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__32761,in$){
var vec__32762 = p__32761;
var v = cljs.core.nth.call(null,vec__32762,(0),null);
var seen = cljs.core.nth.call(null,vec__32762,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(cljs.core.contains_QMARK_.call(null,seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:((taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32845 = arguments.length;
var i__28943__auto___32846 = (0);
while(true){
if((i__28943__auto___32846 < len__28942__auto___32845)){
args__28949__auto__.push((arguments[i__28943__auto___32846]));

var G__32847 = (i__28943__auto___32846 + (1));
i__28943__auto___32846 = G__32847;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__32767){
var vec__32768 = p__32767;
var kf = cljs.core.nth.call(null,vec__32768,(0),null);
var vf = cljs.core.nth.call(null,vec__32768,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__32768,kf,vf){
return (function (_,v){
return v;
});})(vec__32768,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__32768,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__32768,kf,vf))
:((taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__32768,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__32768,kf,vf))
:kf));
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_kvs.call(null,((function (vf__$1,kf__$1,vec__32768,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.call(null,m,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1,vec__32768,kf,vf))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq32765){
var G__32766 = cljs.core.first.call(null,seq32765);
var seq32765__$1 = cljs.core.next.call(null,seq32765);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__32766,seq32765__$1);
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32848 = arguments.length;
var i__28943__auto___32849 = (0);
while(true){
if((i__28943__auto___32849 < len__28942__auto___32848)){
args__28949__auto__.push((arguments[i__28943__auto___32849]));

var G__32850 = (i__28943__auto___32849 + (1));
i__28943__auto___32849 = G__32850;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((2) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28950__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref.call(null,taoensso.encore._swap_cache_BANG_.call(null,cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
} else {
return cljs.core.apply.call(null,f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq32771){
var G__32772 = cljs.core.first.call(null,seq32771);
var seq32771__$1 = cljs.core.next.call(null,seq32771);
var G__32773 = cljs.core.first.call(null,seq32771__$1);
var seq32771__$2 = cljs.core.next.call(null,seq32771__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__32772,G__32773,seq32771__$2);
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__28205__auto__ = signed_idx;
var y__28206__auto__ = max_idx;
return ((x__28205__auto__ < y__28206__auto__) ? x__28205__auto__ : y__28206__auto__);
} else {
var x__28198__auto__ = (0);
var y__28199__auto__ = (signed_idx + max_idx);
return ((x__28198__auto__ > y__28199__auto__) ? x__28198__auto__ : y__28199__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32851 = arguments.length;
var i__28943__auto___32852 = (0);
while(true){
if((i__28943__auto___32852 < len__28942__auto___32851)){
args__28949__auto__.push((arguments[i__28943__auto___32852]));

var G__32853 = (i__28943__auto___32852 + (1));
i__28943__auto___32852 = G__32853;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((2) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28950__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__32777){
var map__32778 = p__32777;
var map__32778__$1 = ((((!((map__32778 == null)))?((((map__32778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32778):map__32778);
var max_len = cljs.core.get.call(null,map__32778__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__32778__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__9304__auto__ = (start_idx_STAR_ + max_len);
var n2__9305__auto__ = xlen;
if((n1__9304__auto__ > n2__9305__auto__)){
return n2__9305__auto__;
} else {
return n1__9304__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq32774){
var G__32775 = cljs.core.first.call(null,seq32774);
var seq32774__$1 = cljs.core.next.call(null,seq32774);
var G__32776 = cljs.core.first.call(null,seq32774__$1);
var seq32774__$2 = cljs.core.next.call(null,seq32774__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__32775,G__32776,seq32774__$2);
});


/**
 * Deprecated, prefer `?substr<idx` or `?substr<len`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32854 = arguments.length;
var i__28943__auto___32855 = (0);
while(true){
if((i__28943__auto___32855 < len__28942__auto___32854)){
args__28949__auto__.push((arguments[i__28943__auto___32855]));

var G__32856 = (i__28943__auto___32855 + (1));
i__28943__auto___32855 = G__32856;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((2) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28950__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__32783){
var vec__32784 = p__32783;
var _QMARK_max_len = cljs.core.nth.call(null,vec__32784,(0),null);
var vec__32787 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__32787,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__32787,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq32780){
var G__32781 = cljs.core.first.call(null,seq32780);
var seq32780__$1 = cljs.core.next.call(null,seq32780);
var G__32782 = cljs.core.first.call(null,seq32780__$1);
var seq32780__$2 = cljs.core.next.call(null,seq32780__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__32781,G__32782,seq32780__$2);
});



/**
 * Deprecated, prefer `?subvec<idx` or `?subvec<len`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__28949__auto__ = [];
var len__28942__auto___32857 = arguments.length;
var i__28943__auto___32858 = (0);
while(true){
if((i__28943__auto___32858 < len__28942__auto___32857)){
args__28949__auto__.push((arguments[i__28943__auto___32858]));

var G__32859 = (i__28943__auto___32858 + (1));
i__28943__auto___32858 = G__32859;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((2) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28950__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__32793){
var vec__32794 = p__32793;
var _QMARK_max_len = cljs.core.nth.call(null,vec__32794,(0),null);
var vec__32797 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__32797,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__32797,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq32790){
var G__32791 = cljs.core.first.call(null,seq32790);
var seq32790__$1 = cljs.core.next.call(null,seq32790);
var G__32792 = cljs.core.first.call(null,seq32790__$1);
var seq32790__$2 = cljs.core.next.call(null,seq32790__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__32791,G__32792,seq32790__$2);
});



//# sourceMappingURL=encore.js.map