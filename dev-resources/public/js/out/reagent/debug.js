// Compiled by ClojureScript 1.9.93 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__29228__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29229__i = 0, G__29229__a = new Array(arguments.length -  0);
while (G__29229__i < G__29229__a.length) {G__29229__a[G__29229__i] = arguments[G__29229__i + 0]; ++G__29229__i;}
  args = new cljs.core.IndexedSeq(G__29229__a,0);
} 
return G__29228__delegate.call(this,args);};
G__29228.cljs$lang$maxFixedArity = 0;
G__29228.cljs$lang$applyTo = (function (arglist__29230){
var args = cljs.core.seq(arglist__29230);
return G__29228__delegate(args);
});
G__29228.cljs$core$IFn$_invoke$arity$variadic = G__29228__delegate;
return G__29228;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29231__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29232__i = 0, G__29232__a = new Array(arguments.length -  0);
while (G__29232__i < G__29232__a.length) {G__29232__a[G__29232__i] = arguments[G__29232__i + 0]; ++G__29232__i;}
  args = new cljs.core.IndexedSeq(G__29232__a,0);
} 
return G__29231__delegate.call(this,args);};
G__29231.cljs$lang$maxFixedArity = 0;
G__29231.cljs$lang$applyTo = (function (arglist__29233){
var args = cljs.core.seq(arglist__29233);
return G__29231__delegate(args);
});
G__29231.cljs$core$IFn$_invoke$arity$variadic = G__29231__delegate;
return G__29231;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map