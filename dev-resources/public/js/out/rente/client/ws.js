// Compiled by ClojureScript 1.9.93 {}
goog.provide('rente.client.ws');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.sente.packers.transit');
if(typeof rente.client.ws.push_msg_handler !== 'undefined'){
} else {
rente.client.ws.push_msg_handler = (function (){var method_table__28792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"rente.client.ws","push-msg-handler"),((function (method_table__28792__auto__,prefer_table__28793__auto__,method_cache__28794__auto__,cached_hierarchy__28795__auto__,hierarchy__28796__auto__){
return (function (p__30807){
var vec__30808 = p__30807;
var id = cljs.core.nth.call(null,vec__30808,(0),null);
var _ = cljs.core.nth.call(null,vec__30808,(1),null);
return id;
});})(method_table__28792__auto__,prefer_table__28793__auto__,method_cache__28794__auto__,cached_hierarchy__28795__auto__,hierarchy__28796__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28796__auto__,method_table__28792__auto__,prefer_table__28793__auto__,method_cache__28794__auto__,cached_hierarchy__28795__auto__));
})();
}
cljs.core._add_method.call(null,rente.client.ws.push_msg_handler,new cljs.core.Keyword("rente","testevent","rente/testevent",2124003394),(function (p__30811){
var vec__30812 = p__30811;
var _ = cljs.core.nth.call(null,vec__30812,(0),null);
var event = cljs.core.nth.call(null,vec__30812,(1),null);
return console.log("PUSHed :rente/testevent from server: %s ",cljs.core.pr_str.call(null,event));
}));
if(typeof rente.client.ws.event_msg_handler !== 'undefined'){
} else {
rente.client.ws.event_msg_handler = (function (){var method_table__28792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"rente.client.ws","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28796__auto__,method_table__28792__auto__,prefer_table__28793__auto__,method_cache__28794__auto__,cached_hierarchy__28795__auto__));
})();
}
cljs.core._add_method.call(null,rente.client.ws.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30815){
var map__30816 = p__30815;
var map__30816__$1 = ((((!((map__30816 == null)))?((((map__30816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30816):map__30816);
var ev_msg = map__30816__$1;
var event = cljs.core.get.call(null,map__30816__$1,new cljs.core.Keyword(null,"event","event",301435442));
return console.log("Unhandled event: %s",cljs.core.pr_str.call(null,event));
}));
cljs.core._add_method.call(null,rente.client.ws.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (old_ev_msg,new_ev_msg){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"?data","?data",-9471433).cljs$core$IFn$_invoke$arity$1(new_ev_msg),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true], null))){
return console.log("Channel Web Socket Successfully established!");
} else {
return console.log("Channel Web Socket State Change: %s",cljs.core.pr_str.call(null,new_ev_msg));
}
}));
cljs.core._add_method.call(null,rente.client.ws.event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__30818){
var map__30819 = p__30818;
var map__30819__$1 = ((((!((map__30819 == null)))?((((map__30819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30819):map__30819);
var ev_msg = map__30819__$1;
var _QMARK_data = cljs.core.get.call(null,map__30819__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return rente.client.ws.push_msg_handler.call(null,_QMARK_data);
}));
rente.client.ws.event_msg_handler_STAR_ = (function rente$client$ws$event_msg_handler_STAR_(p__30821){
var map__30824 = p__30821;
var map__30824__$1 = ((((!((map__30824 == null)))?((((map__30824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30824):map__30824);
var ev_msg = map__30824__$1;
var id = cljs.core.get.call(null,map__30824__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__30824__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__30824__$1,new cljs.core.Keyword(null,"event","event",301435442));
return rente.client.ws.event_msg_handler.call(null,ev_msg);
});
var packer_30828 = new cljs.core.Keyword(null,"edn","edn",1317840885);
var map__30826_30829 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"packer","packer",66077544),packer_30828], null));
var map__30826_30830__$1 = ((((!((map__30826_30829 == null)))?((((map__30826_30829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30826_30829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30826_30829):map__30826_30829);
var chsk_30831 = cljs.core.get.call(null,map__30826_30830__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_30832 = cljs.core.get.call(null,map__30826_30830__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_30833 = cljs.core.get.call(null,map__30826_30830__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_30834 = cljs.core.get.call(null,map__30826_30830__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rente.client.ws.chsk = chsk_30831;

rente.client.ws.ch_chsk = ch_recv_30832;

rente.client.ws.chsk_send_BANG_ = send_fn_30833;

rente.client.ws.chsk_state = state_30834;
taoensso.sente.start_chsk_router_BANG_.call(null,rente.client.ws.ch_chsk,rente.client.ws.event_msg_handler_STAR_);
rente.client.ws.test_socket_callback = (function rente$client$ws$test_socket_callback(){
return rente.client.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rente","testevent","rente/testevent",2124003394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello Web Socket Callback!"], null)], null),(2000),(function (p1__30835_SHARP_){
return console.log("CALLBACK from server: ",cljs.core.pr_str.call(null,p1__30835_SHARP_));
}));
});
rente.client.ws.test_socket_event = (function rente$client$ws$test_socket_event(){
return rente.client.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rente","testevent","rente/testevent",2124003394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello Web Socket Event!"], null)], null));
});

//# sourceMappingURL=ws.js.map