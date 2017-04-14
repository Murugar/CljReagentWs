// Compiled by ClojureScript 1.9.93 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__27867__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_38804 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_38804){
return (function (){
var _STAR_always_update_STAR_38805 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_38805;
}});})(_STAR_always_update_STAR_38804))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_38804;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args38806 = [];
var len__28942__auto___38809 = arguments.length;
var i__28943__auto___38810 = (0);
while(true){
if((i__28943__auto___38810 < len__28942__auto___38809)){
args38806.push((arguments[i__28943__auto___38810]));

var G__38811 = (i__28943__auto___38810 + (1));
i__28943__auto___38810 = G__38811;
continue;
} else {
}
break;
}

var G__38808 = args38806.length;
switch (G__38808) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38806.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__38817_38821 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__38818_38822 = null;
var count__38819_38823 = (0);
var i__38820_38824 = (0);
while(true){
if((i__38820_38824 < count__38819_38823)){
var v_38825 = cljs.core._nth.call(null,chunk__38818_38822,i__38820_38824);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_38825);

var G__38826 = seq__38817_38821;
var G__38827 = chunk__38818_38822;
var G__38828 = count__38819_38823;
var G__38829 = (i__38820_38824 + (1));
seq__38817_38821 = G__38826;
chunk__38818_38822 = G__38827;
count__38819_38823 = G__38828;
i__38820_38824 = G__38829;
continue;
} else {
var temp__4657__auto___38830 = cljs.core.seq.call(null,seq__38817_38821);
if(temp__4657__auto___38830){
var seq__38817_38831__$1 = temp__4657__auto___38830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38817_38831__$1)){
var c__28678__auto___38832 = cljs.core.chunk_first.call(null,seq__38817_38831__$1);
var G__38833 = cljs.core.chunk_rest.call(null,seq__38817_38831__$1);
var G__38834 = c__28678__auto___38832;
var G__38835 = cljs.core.count.call(null,c__28678__auto___38832);
var G__38836 = (0);
seq__38817_38821 = G__38833;
chunk__38818_38822 = G__38834;
count__38819_38823 = G__38835;
i__38820_38824 = G__38836;
continue;
} else {
var v_38837 = cljs.core.first.call(null,seq__38817_38831__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_38837);

var G__38838 = cljs.core.next.call(null,seq__38817_38831__$1);
var G__38839 = null;
var G__38840 = (0);
var G__38841 = (0);
seq__38817_38821 = G__38838;
chunk__38818_38822 = G__38839;
count__38819_38823 = G__38840;
i__38820_38824 = G__38841;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map