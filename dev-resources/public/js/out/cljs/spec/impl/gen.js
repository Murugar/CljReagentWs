// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40086 = arguments.length;
var i__28943__auto___40087 = (0);
while(true){
if((i__28943__auto___40087 < len__28942__auto___40086)){
args__28949__auto__.push((arguments[i__28943__auto___40087]));

var G__40088 = (i__28943__auto___40087 + (1));
i__28943__auto___40087 = G__40088;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq40085){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40085));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40090 = arguments.length;
var i__28943__auto___40091 = (0);
while(true){
if((i__28943__auto___40091 < len__28942__auto___40090)){
args__28949__auto__.push((arguments[i__28943__auto___40091]));

var G__40092 = (i__28943__auto___40091 + (1));
i__28943__auto___40091 = G__40092;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq40089){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40089));
});

var g_QMARK__40093 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_40094 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__40093){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__40093))
,null));
var mkg_40095 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__40093,g_40094){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__40093,g_40094))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__40093,g_40094,mkg_40095){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__40093).call(null,x);
});})(g_QMARK__40093,g_40094,mkg_40095))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__40093,g_40094,mkg_40095){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_40095).call(null,gfn);
});})(g_QMARK__40093,g_40094,mkg_40095))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__40093,g_40094,mkg_40095){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_40094).call(null,generator);
});})(g_QMARK__40093,g_40094,mkg_40095))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__40057__auto___40113 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__40057__auto___40113){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40114 = arguments.length;
var i__28943__auto___40115 = (0);
while(true){
if((i__28943__auto___40115 < len__28942__auto___40114)){
args__28949__auto__.push((arguments[i__28943__auto___40115]));

var G__40116 = (i__28943__auto___40115 + (1));
i__28943__auto___40115 = G__40116;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40113))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40113){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40113),args);
});})(g__40057__auto___40113))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__40057__auto___40113){
return (function (seq40096){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40096));
});})(g__40057__auto___40113))
;


var g__40057__auto___40117 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__40057__auto___40117){
return (function cljs$spec$impl$gen$list(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40118 = arguments.length;
var i__28943__auto___40119 = (0);
while(true){
if((i__28943__auto___40119 < len__28942__auto___40118)){
args__28949__auto__.push((arguments[i__28943__auto___40119]));

var G__40120 = (i__28943__auto___40119 + (1));
i__28943__auto___40119 = G__40120;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40117))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40117){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40117),args);
});})(g__40057__auto___40117))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__40057__auto___40117){
return (function (seq40097){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40097));
});})(g__40057__auto___40117))
;


var g__40057__auto___40121 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__40057__auto___40121){
return (function cljs$spec$impl$gen$map(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40122 = arguments.length;
var i__28943__auto___40123 = (0);
while(true){
if((i__28943__auto___40123 < len__28942__auto___40122)){
args__28949__auto__.push((arguments[i__28943__auto___40123]));

var G__40124 = (i__28943__auto___40123 + (1));
i__28943__auto___40123 = G__40124;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40121))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40121){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40121),args);
});})(g__40057__auto___40121))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__40057__auto___40121){
return (function (seq40098){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40098));
});})(g__40057__auto___40121))
;


var g__40057__auto___40125 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__40057__auto___40125){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40126 = arguments.length;
var i__28943__auto___40127 = (0);
while(true){
if((i__28943__auto___40127 < len__28942__auto___40126)){
args__28949__auto__.push((arguments[i__28943__auto___40127]));

var G__40128 = (i__28943__auto___40127 + (1));
i__28943__auto___40127 = G__40128;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40125))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40125){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40125),args);
});})(g__40057__auto___40125))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__40057__auto___40125){
return (function (seq40099){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40099));
});})(g__40057__auto___40125))
;


var g__40057__auto___40129 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__40057__auto___40129){
return (function cljs$spec$impl$gen$set(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40130 = arguments.length;
var i__28943__auto___40131 = (0);
while(true){
if((i__28943__auto___40131 < len__28942__auto___40130)){
args__28949__auto__.push((arguments[i__28943__auto___40131]));

var G__40132 = (i__28943__auto___40131 + (1));
i__28943__auto___40131 = G__40132;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40129))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40129){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40129),args);
});})(g__40057__auto___40129))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__40057__auto___40129){
return (function (seq40100){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40100));
});})(g__40057__auto___40129))
;


var g__40057__auto___40133 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__40057__auto___40133){
return (function cljs$spec$impl$gen$vector(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40134 = arguments.length;
var i__28943__auto___40135 = (0);
while(true){
if((i__28943__auto___40135 < len__28942__auto___40134)){
args__28949__auto__.push((arguments[i__28943__auto___40135]));

var G__40136 = (i__28943__auto___40135 + (1));
i__28943__auto___40135 = G__40136;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40133))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40133){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40133),args);
});})(g__40057__auto___40133))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__40057__auto___40133){
return (function (seq40101){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40101));
});})(g__40057__auto___40133))
;


var g__40057__auto___40137 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__40057__auto___40137){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40138 = arguments.length;
var i__28943__auto___40139 = (0);
while(true){
if((i__28943__auto___40139 < len__28942__auto___40138)){
args__28949__auto__.push((arguments[i__28943__auto___40139]));

var G__40140 = (i__28943__auto___40139 + (1));
i__28943__auto___40139 = G__40140;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40137))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40137){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40137),args);
});})(g__40057__auto___40137))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__40057__auto___40137){
return (function (seq40102){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40102));
});})(g__40057__auto___40137))
;


var g__40057__auto___40141 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__40057__auto___40141){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40142 = arguments.length;
var i__28943__auto___40143 = (0);
while(true){
if((i__28943__auto___40143 < len__28942__auto___40142)){
args__28949__auto__.push((arguments[i__28943__auto___40143]));

var G__40144 = (i__28943__auto___40143 + (1));
i__28943__auto___40143 = G__40144;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40141))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40141){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40141),args);
});})(g__40057__auto___40141))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__40057__auto___40141){
return (function (seq40103){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40103));
});})(g__40057__auto___40141))
;


var g__40057__auto___40145 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__40057__auto___40145){
return (function cljs$spec$impl$gen$elements(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40146 = arguments.length;
var i__28943__auto___40147 = (0);
while(true){
if((i__28943__auto___40147 < len__28942__auto___40146)){
args__28949__auto__.push((arguments[i__28943__auto___40147]));

var G__40148 = (i__28943__auto___40147 + (1));
i__28943__auto___40147 = G__40148;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40145))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40145){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40145),args);
});})(g__40057__auto___40145))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__40057__auto___40145){
return (function (seq40104){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40104));
});})(g__40057__auto___40145))
;


var g__40057__auto___40149 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__40057__auto___40149){
return (function cljs$spec$impl$gen$bind(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40150 = arguments.length;
var i__28943__auto___40151 = (0);
while(true){
if((i__28943__auto___40151 < len__28942__auto___40150)){
args__28949__auto__.push((arguments[i__28943__auto___40151]));

var G__40152 = (i__28943__auto___40151 + (1));
i__28943__auto___40151 = G__40152;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40149))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40149){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40149),args);
});})(g__40057__auto___40149))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__40057__auto___40149){
return (function (seq40105){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40105));
});})(g__40057__auto___40149))
;


var g__40057__auto___40153 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__40057__auto___40153){
return (function cljs$spec$impl$gen$choose(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40154 = arguments.length;
var i__28943__auto___40155 = (0);
while(true){
if((i__28943__auto___40155 < len__28942__auto___40154)){
args__28949__auto__.push((arguments[i__28943__auto___40155]));

var G__40156 = (i__28943__auto___40155 + (1));
i__28943__auto___40155 = G__40156;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40153))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40153){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40153),args);
});})(g__40057__auto___40153))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__40057__auto___40153){
return (function (seq40106){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40106));
});})(g__40057__auto___40153))
;


var g__40057__auto___40157 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__40057__auto___40157){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40158 = arguments.length;
var i__28943__auto___40159 = (0);
while(true){
if((i__28943__auto___40159 < len__28942__auto___40158)){
args__28949__auto__.push((arguments[i__28943__auto___40159]));

var G__40160 = (i__28943__auto___40159 + (1));
i__28943__auto___40159 = G__40160;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40157))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40157){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40157),args);
});})(g__40057__auto___40157))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__40057__auto___40157){
return (function (seq40107){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40107));
});})(g__40057__auto___40157))
;


var g__40057__auto___40161 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__40057__auto___40161){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40162 = arguments.length;
var i__28943__auto___40163 = (0);
while(true){
if((i__28943__auto___40163 < len__28942__auto___40162)){
args__28949__auto__.push((arguments[i__28943__auto___40163]));

var G__40164 = (i__28943__auto___40163 + (1));
i__28943__auto___40163 = G__40164;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40161))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40161){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40161),args);
});})(g__40057__auto___40161))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__40057__auto___40161){
return (function (seq40108){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40108));
});})(g__40057__auto___40161))
;


var g__40057__auto___40165 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__40057__auto___40165){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40166 = arguments.length;
var i__28943__auto___40167 = (0);
while(true){
if((i__28943__auto___40167 < len__28942__auto___40166)){
args__28949__auto__.push((arguments[i__28943__auto___40167]));

var G__40168 = (i__28943__auto___40167 + (1));
i__28943__auto___40167 = G__40168;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40165))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40165){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40165),args);
});})(g__40057__auto___40165))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__40057__auto___40165){
return (function (seq40109){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40109));
});})(g__40057__auto___40165))
;


var g__40057__auto___40169 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__40057__auto___40169){
return (function cljs$spec$impl$gen$sample(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40170 = arguments.length;
var i__28943__auto___40171 = (0);
while(true){
if((i__28943__auto___40171 < len__28942__auto___40170)){
args__28949__auto__.push((arguments[i__28943__auto___40171]));

var G__40172 = (i__28943__auto___40171 + (1));
i__28943__auto___40171 = G__40172;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40169))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40169){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40169),args);
});})(g__40057__auto___40169))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__40057__auto___40169){
return (function (seq40110){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40110));
});})(g__40057__auto___40169))
;


var g__40057__auto___40173 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__40057__auto___40173){
return (function cljs$spec$impl$gen$return(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40174 = arguments.length;
var i__28943__auto___40175 = (0);
while(true){
if((i__28943__auto___40175 < len__28942__auto___40174)){
args__28949__auto__.push((arguments[i__28943__auto___40175]));

var G__40176 = (i__28943__auto___40175 + (1));
i__28943__auto___40175 = G__40176;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40173))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40173){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40173),args);
});})(g__40057__auto___40173))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__40057__auto___40173){
return (function (seq40111){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40111));
});})(g__40057__auto___40173))
;


var g__40057__auto___40177 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__40057__auto___40177){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40178 = arguments.length;
var i__28943__auto___40179 = (0);
while(true){
if((i__28943__auto___40179 < len__28942__auto___40178)){
args__28949__auto__.push((arguments[i__28943__auto___40179]));

var G__40180 = (i__28943__auto___40179 + (1));
i__28943__auto___40179 = G__40180;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40057__auto___40177))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40057__auto___40177){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40057__auto___40177),args);
});})(g__40057__auto___40177))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__40057__auto___40177){
return (function (seq40112){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40112));
});})(g__40057__auto___40177))
;

var g__40070__auto___40202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__40070__auto___40202){
return (function cljs$spec$impl$gen$any(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40203 = arguments.length;
var i__28943__auto___40204 = (0);
while(true){
if((i__28943__auto___40204 < len__28942__auto___40203)){
args__28949__auto__.push((arguments[i__28943__auto___40204]));

var G__40205 = (i__28943__auto___40204 + (1));
i__28943__auto___40204 = G__40205;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40202))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40202){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40202);
});})(g__40070__auto___40202))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__40070__auto___40202){
return (function (seq40181){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40181));
});})(g__40070__auto___40202))
;


var g__40070__auto___40206 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__40070__auto___40206){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40207 = arguments.length;
var i__28943__auto___40208 = (0);
while(true){
if((i__28943__auto___40208 < len__28942__auto___40207)){
args__28949__auto__.push((arguments[i__28943__auto___40208]));

var G__40209 = (i__28943__auto___40208 + (1));
i__28943__auto___40208 = G__40209;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40206))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40206){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40206);
});})(g__40070__auto___40206))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__40070__auto___40206){
return (function (seq40182){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40182));
});})(g__40070__auto___40206))
;


var g__40070__auto___40210 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__40070__auto___40210){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40211 = arguments.length;
var i__28943__auto___40212 = (0);
while(true){
if((i__28943__auto___40212 < len__28942__auto___40211)){
args__28949__auto__.push((arguments[i__28943__auto___40212]));

var G__40213 = (i__28943__auto___40212 + (1));
i__28943__auto___40212 = G__40213;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40210))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40210){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40210);
});})(g__40070__auto___40210))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__40070__auto___40210){
return (function (seq40183){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40183));
});})(g__40070__auto___40210))
;


var g__40070__auto___40214 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__40070__auto___40214){
return (function cljs$spec$impl$gen$char(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40215 = arguments.length;
var i__28943__auto___40216 = (0);
while(true){
if((i__28943__auto___40216 < len__28942__auto___40215)){
args__28949__auto__.push((arguments[i__28943__auto___40216]));

var G__40217 = (i__28943__auto___40216 + (1));
i__28943__auto___40216 = G__40217;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40214))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40214){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40214);
});})(g__40070__auto___40214))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__40070__auto___40214){
return (function (seq40184){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40184));
});})(g__40070__auto___40214))
;


var g__40070__auto___40218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__40070__auto___40218){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40219 = arguments.length;
var i__28943__auto___40220 = (0);
while(true){
if((i__28943__auto___40220 < len__28942__auto___40219)){
args__28949__auto__.push((arguments[i__28943__auto___40220]));

var G__40221 = (i__28943__auto___40220 + (1));
i__28943__auto___40220 = G__40221;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40218))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40218){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40218);
});})(g__40070__auto___40218))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__40070__auto___40218){
return (function (seq40185){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40185));
});})(g__40070__auto___40218))
;


var g__40070__auto___40222 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__40070__auto___40222){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40223 = arguments.length;
var i__28943__auto___40224 = (0);
while(true){
if((i__28943__auto___40224 < len__28942__auto___40223)){
args__28949__auto__.push((arguments[i__28943__auto___40224]));

var G__40225 = (i__28943__auto___40224 + (1));
i__28943__auto___40224 = G__40225;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40222))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40222){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40222);
});})(g__40070__auto___40222))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__40070__auto___40222){
return (function (seq40186){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40186));
});})(g__40070__auto___40222))
;


var g__40070__auto___40226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__40070__auto___40226){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40227 = arguments.length;
var i__28943__auto___40228 = (0);
while(true){
if((i__28943__auto___40228 < len__28942__auto___40227)){
args__28949__auto__.push((arguments[i__28943__auto___40228]));

var G__40229 = (i__28943__auto___40228 + (1));
i__28943__auto___40228 = G__40229;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40226))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40226){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40226);
});})(g__40070__auto___40226))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__40070__auto___40226){
return (function (seq40187){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40187));
});})(g__40070__auto___40226))
;


var g__40070__auto___40230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__40070__auto___40230){
return (function cljs$spec$impl$gen$double(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40231 = arguments.length;
var i__28943__auto___40232 = (0);
while(true){
if((i__28943__auto___40232 < len__28942__auto___40231)){
args__28949__auto__.push((arguments[i__28943__auto___40232]));

var G__40233 = (i__28943__auto___40232 + (1));
i__28943__auto___40232 = G__40233;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40230))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40230){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40230);
});})(g__40070__auto___40230))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__40070__auto___40230){
return (function (seq40188){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40188));
});})(g__40070__auto___40230))
;


var g__40070__auto___40234 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__40070__auto___40234){
return (function cljs$spec$impl$gen$int(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40235 = arguments.length;
var i__28943__auto___40236 = (0);
while(true){
if((i__28943__auto___40236 < len__28942__auto___40235)){
args__28949__auto__.push((arguments[i__28943__auto___40236]));

var G__40237 = (i__28943__auto___40236 + (1));
i__28943__auto___40236 = G__40237;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40234))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40234){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40234);
});})(g__40070__auto___40234))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__40070__auto___40234){
return (function (seq40189){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40189));
});})(g__40070__auto___40234))
;


var g__40070__auto___40238 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__40070__auto___40238){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40239 = arguments.length;
var i__28943__auto___40240 = (0);
while(true){
if((i__28943__auto___40240 < len__28942__auto___40239)){
args__28949__auto__.push((arguments[i__28943__auto___40240]));

var G__40241 = (i__28943__auto___40240 + (1));
i__28943__auto___40240 = G__40241;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40238))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40238){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40238);
});})(g__40070__auto___40238))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__40070__auto___40238){
return (function (seq40190){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40190));
});})(g__40070__auto___40238))
;


var g__40070__auto___40242 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__40070__auto___40242){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40243 = arguments.length;
var i__28943__auto___40244 = (0);
while(true){
if((i__28943__auto___40244 < len__28942__auto___40243)){
args__28949__auto__.push((arguments[i__28943__auto___40244]));

var G__40245 = (i__28943__auto___40244 + (1));
i__28943__auto___40244 = G__40245;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40242))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40242){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40242);
});})(g__40070__auto___40242))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__40070__auto___40242){
return (function (seq40191){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40191));
});})(g__40070__auto___40242))
;


var g__40070__auto___40246 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__40070__auto___40246){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40247 = arguments.length;
var i__28943__auto___40248 = (0);
while(true){
if((i__28943__auto___40248 < len__28942__auto___40247)){
args__28949__auto__.push((arguments[i__28943__auto___40248]));

var G__40249 = (i__28943__auto___40248 + (1));
i__28943__auto___40248 = G__40249;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40246))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40246){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40246);
});})(g__40070__auto___40246))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__40070__auto___40246){
return (function (seq40192){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40192));
});})(g__40070__auto___40246))
;


var g__40070__auto___40250 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__40070__auto___40250){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40251 = arguments.length;
var i__28943__auto___40252 = (0);
while(true){
if((i__28943__auto___40252 < len__28942__auto___40251)){
args__28949__auto__.push((arguments[i__28943__auto___40252]));

var G__40253 = (i__28943__auto___40252 + (1));
i__28943__auto___40252 = G__40253;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40250))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40250){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40250);
});})(g__40070__auto___40250))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__40070__auto___40250){
return (function (seq40193){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40193));
});})(g__40070__auto___40250))
;


var g__40070__auto___40254 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__40070__auto___40254){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40255 = arguments.length;
var i__28943__auto___40256 = (0);
while(true){
if((i__28943__auto___40256 < len__28942__auto___40255)){
args__28949__auto__.push((arguments[i__28943__auto___40256]));

var G__40257 = (i__28943__auto___40256 + (1));
i__28943__auto___40256 = G__40257;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40254))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40254){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40254);
});})(g__40070__auto___40254))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__40070__auto___40254){
return (function (seq40194){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40194));
});})(g__40070__auto___40254))
;


var g__40070__auto___40258 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__40070__auto___40258){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40259 = arguments.length;
var i__28943__auto___40260 = (0);
while(true){
if((i__28943__auto___40260 < len__28942__auto___40259)){
args__28949__auto__.push((arguments[i__28943__auto___40260]));

var G__40261 = (i__28943__auto___40260 + (1));
i__28943__auto___40260 = G__40261;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40258))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40258){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40258);
});})(g__40070__auto___40258))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__40070__auto___40258){
return (function (seq40195){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40195));
});})(g__40070__auto___40258))
;


var g__40070__auto___40262 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__40070__auto___40262){
return (function cljs$spec$impl$gen$string(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40263 = arguments.length;
var i__28943__auto___40264 = (0);
while(true){
if((i__28943__auto___40264 < len__28942__auto___40263)){
args__28949__auto__.push((arguments[i__28943__auto___40264]));

var G__40265 = (i__28943__auto___40264 + (1));
i__28943__auto___40264 = G__40265;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40262))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40262){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40262);
});})(g__40070__auto___40262))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__40070__auto___40262){
return (function (seq40196){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40196));
});})(g__40070__auto___40262))
;


var g__40070__auto___40266 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__40070__auto___40266){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40267 = arguments.length;
var i__28943__auto___40268 = (0);
while(true){
if((i__28943__auto___40268 < len__28942__auto___40267)){
args__28949__auto__.push((arguments[i__28943__auto___40268]));

var G__40269 = (i__28943__auto___40268 + (1));
i__28943__auto___40268 = G__40269;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40266))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40266){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40266);
});})(g__40070__auto___40266))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__40070__auto___40266){
return (function (seq40197){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40197));
});})(g__40070__auto___40266))
;


var g__40070__auto___40270 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__40070__auto___40270){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40271 = arguments.length;
var i__28943__auto___40272 = (0);
while(true){
if((i__28943__auto___40272 < len__28942__auto___40271)){
args__28949__auto__.push((arguments[i__28943__auto___40272]));

var G__40273 = (i__28943__auto___40272 + (1));
i__28943__auto___40272 = G__40273;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40270))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40270){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40270);
});})(g__40070__auto___40270))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__40070__auto___40270){
return (function (seq40198){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40198));
});})(g__40070__auto___40270))
;


var g__40070__auto___40274 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__40070__auto___40274){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40275 = arguments.length;
var i__28943__auto___40276 = (0);
while(true){
if((i__28943__auto___40276 < len__28942__auto___40275)){
args__28949__auto__.push((arguments[i__28943__auto___40276]));

var G__40277 = (i__28943__auto___40276 + (1));
i__28943__auto___40276 = G__40277;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40274))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40274){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40274);
});})(g__40070__auto___40274))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__40070__auto___40274){
return (function (seq40199){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40199));
});})(g__40070__auto___40274))
;


var g__40070__auto___40278 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__40070__auto___40278){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40279 = arguments.length;
var i__28943__auto___40280 = (0);
while(true){
if((i__28943__auto___40280 < len__28942__auto___40279)){
args__28949__auto__.push((arguments[i__28943__auto___40280]));

var G__40281 = (i__28943__auto___40280 + (1));
i__28943__auto___40280 = G__40281;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40278))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40278){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40278);
});})(g__40070__auto___40278))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__40070__auto___40278){
return (function (seq40200){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40200));
});})(g__40070__auto___40278))
;


var g__40070__auto___40282 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__40070__auto___40282){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40283 = arguments.length;
var i__28943__auto___40284 = (0);
while(true){
if((i__28943__auto___40284 < len__28942__auto___40283)){
args__28949__auto__.push((arguments[i__28943__auto___40284]));

var G__40285 = (i__28943__auto___40284 + (1));
i__28943__auto___40284 = G__40285;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});})(g__40070__auto___40282))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40070__auto___40282){
return (function (args){
return cljs.core.deref.call(null,g__40070__auto___40282);
});})(g__40070__auto___40282))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__40070__auto___40282){
return (function (seq40201){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40201));
});})(g__40070__auto___40282))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__28949__auto__ = [];
var len__28942__auto___40288 = arguments.length;
var i__28943__auto___40289 = (0);
while(true){
if((i__28943__auto___40289 < len__28942__auto___40288)){
args__28949__auto__.push((arguments[i__28943__auto___40289]));

var G__40290 = (i__28943__auto___40289 + (1));
i__28943__auto___40289 = G__40290;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__40286_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__40286_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq40287){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40287));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__40291_SHARP_){
return (new Date(p1__40291_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map