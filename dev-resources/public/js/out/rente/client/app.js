// Compiled by ClojureScript 1.9.93 {}
goog.provide('rente.client.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('rente.client.views');
goog.require('rente.client.ws');
if(typeof rente.client.app.state !== 'undefined'){
} else {
rente.client.app.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Clojure Reagent Web Socket",new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"re-render-flip","re-render-flip",1682025136),false], null));
}
if(typeof rente.client.app.handle_event !== 'undefined'){
} else {
rente.client.app.handle_event = (function (){var method_table__28792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"rente.client.app","handle-event"),((function (method_table__28792__auto__,prefer_table__28793__auto__,method_cache__28794__auto__,cached_hierarchy__28795__auto__,hierarchy__28796__auto__){
return (function (data,p__31233){
var vec__31234 = p__31233;
var ev_id = cljs.core.nth.call(null,vec__31234,(0),null);
var ev_data = cljs.core.nth.call(null,vec__31234,(1),null);
return ev_id;
});})(method_table__28792__auto__,prefer_table__28793__auto__,method_cache__28794__auto__,cached_hierarchy__28795__auto__,hierarchy__28796__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28796__auto__,method_table__28792__auto__,prefer_table__28793__auto__,method_cache__28794__auto__,cached_hierarchy__28795__auto__));
})();
}
cljs.core._add_method.call(null,rente.client.app.handle_event,new cljs.core.Keyword(null,"default","default",-1987822328),(function (data,p__31238){
var vec__31239 = p__31238;
var _ = cljs.core.nth.call(null,vec__31239,(0),null);
var msg = cljs.core.nth.call(null,vec__31239,(1),null);
return cljs.core.swap_BANG_.call(null,data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482)], null),((function (vec__31239,_,msg){
return (function (p1__31237_SHARP_){
return cljs.core.conj.call(null,p1__31237_SHARP_,msg);
});})(vec__31239,_,msg))
);
}));
rente.client.app.app = (function rente$client$app$app(data){
new cljs.core.Keyword(null,"re-render-flip","re-render-flip",1682025136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.views.main,data], null);
});
rente.client.app.main = (function rente$client$app$main(){
var temp__4657__auto__ = document.getElementById("app");
if(cljs.core.truth_(temp__4657__auto__)){
var root = temp__4657__auto__;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rente.client.app.app,rente.client.app.state], null),root);
} else {
return null;
}
});
goog.exportSymbol('rente.client.app.main', rente.client.app.main);

//# sourceMappingURL=app.js.map