// Compiled by ClojureScript 1.9.93 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(53),(1)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.53);
}
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.call(null,false);
}
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__36756 = x;
var ev_id = cljs.core.nth.call(null,vec__36756,(0),null);
var _ = cljs.core.nth.call(null,vec__36756,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4657__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var _QMARK_err = temp__4657__auto__;
var err_msg = [cljs.core.str((function (){var G__36760 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__36760) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: "),cljs.core.str(x)].join('');
throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__27855__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__27855__auto__){
var and__27855__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__27855__auto____$1)){
var map__36764 = x;
var map__36764__$1 = ((((!((map__36764 == null)))?((((map__36764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36764):map__36764);
var ch_recv = cljs.core.get.call(null,map__36764__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__36764__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__36764__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__36764__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__27855__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__27855__auto____$2){
var and__27855__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__27855__auto____$3){
var and__27855__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__27855__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__27855__auto____$4;
}
} else {
return and__27855__auto____$3;
}
} else {
return and__27855__auto____$2;
}
} else {
return and__27855__auto____$1;
}
} else {
return and__27855__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__27855__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__27855__auto__){
var and__27855__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__27855__auto____$1)){
var map__36768 = x;
var map__36768__$1 = ((((!((map__36768 == null)))?((((map__36768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36768):map__36768);
var ch_recv = cljs.core.get.call(null,map__36768__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__36768__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__36768__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__36768__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__36768__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__36768__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__36768__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__27855__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__27855__auto____$2){
var and__27855__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__27855__auto____$3){
var and__27855__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__27855__auto____$4){
var and__27855__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__27855__auto____$5){
var and__27855__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__27855__auto____$6){
var and__27855__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__27855__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__27855__auto____$7;
}
} else {
return and__27855__auto____$6;
}
} else {
return and__27855__auto____$5;
}
} else {
return and__27855__auto____$4;
}
} else {
return and__27855__auto____$3;
}
} else {
return and__27855__auto____$2;
}
} else {
return and__27855__auto____$1;
}
} else {
return and__27855__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__36770){
var map__36776 = p__36770;
var map__36776__$1 = ((((!((map__36776 == null)))?((((map__36776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36776):map__36776);
var ev_msg = map__36776__$1;
var event = cljs.core.get.call(null,map__36776__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__36776__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__36778 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__36778,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__36778,(1),null);
var valid_event = vec__36778;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3806387547664455334.clj",160,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36778,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__36776,map__36776__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__36778,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__36776,map__36776__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,-1318210079);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,prefixed_pstr,"+");
var pstr = cljs.core.subs.call(null,prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e36788){var t = e36788;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init3806387547664455334.clj",181,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-1652189032);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__36785 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__36785,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__36785,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__36785,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__36785,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,1521019555);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args36789 = [];
var len__28942__auto___36792 = arguments.length;
var i__28943__auto___36793 = (0);
while(true){
if((i__28943__auto___36793 < len__28942__auto___36792)){
args36789.push((arguments[i__28943__auto___36793]));

var G__36794 = (i__28943__auto___36793 + (1));
i__28943__auto___36793 = G__36794;
continue;
} else {
}
break;
}

var G__36791 = args36789.length;
switch (G__36791) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36789.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",197,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,1370965235);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",207,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-1780588546);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
})
taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = true;

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.call(null,x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.call(null,s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__36796_SHARP_){
if(!((p1__36796_SHARP_ == null))){
if((false) || (p1__36796_SHARP_.taoensso$sente$interfaces$IPacker$)){
return true;
} else {
if((!p1__36796_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__36796_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__36796_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36799){if((e36799 instanceof Error)){
var e = e36799;
return e;
} else {
throw e36799;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36796#] (satisfies? interfaces/IPacker p1__36796#)) x)",x,e,null);
}
}
});


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__28949__auto__ = [];
var len__28942__auto___37107 = arguments.length;
var i__28943__auto___37108 = (0);
while(true){
if((i__28943__auto___37108 < len__28942__auto___37107)){
args__28949__auto__.push((arguments[i__28943__auto___37108]));

var G__37109 = (i__28943__auto___37108 + (1));
i__28943__auto___37108 = G__37109;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__36804){
var vec__36805 = p__36804;
var map__36808 = cljs.core.nth.call(null,vec__36805,(0),null);
var map__36808__$1 = ((((!((map__36808 == null)))?((((map__36808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36808):map__36808);
var recv_buf_or_n = cljs.core.get.call(null,map__36808__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__36808__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__36808__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__36808__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__36808__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__36808__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__36808__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__27867__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
var or__27867__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__27867__auto____$1)){
return or__27867__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__36808__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__36808__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36810){if((e36810 instanceof Error)){
var e = e36810;
return e;
} else {
throw e36810;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36811){if((e36811 instanceof Error)){
var e = e36811;
return e;
} else {
throw e36811;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_37110 = (function (){try{if(((function (vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__36801_SHARP_){
if(!((p1__36801_SHARP_ == null))){
if((false) || (p1__36801_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__36801_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__36801_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__36801_SHARP_);
}
});})(vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36812){if((e36812 instanceof Error)){
var e = e36812;
return e;
} else {
throw e36812;

}
}})();
if((e_37110 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36801#] (satisfies? interfaces/IServerChanAdapter p1__36801#)) web-server-ch-adapter)",web_server_ch_adapter,e_37110,null);
}

var max_ms_37111 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_37111)){
throw cljs.core.ex_info.call(null,[cljs.core.str(":lp-timeout-ms must be < "),cljs.core.str(max_ms_37111)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_37111], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__27867__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__37112 = null;
var G__37112__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__36814 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__36814,(0),null);
var _udt = cljs.core.nth.call(null,vec__36814,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__37112__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__37112 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__37112__3.call(this,conn_type,uid,client_id);
case 4:
return G__37112__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37112.cljs$core$IFn$_invoke$arity$3 = G__37112__3;
G__37112.cljs$core$IFn$_invoke$arity$4 = G__37112__4;
return G__37112;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,uid))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36817){if((e36817 instanceof Error)){
var e = e36817;
return e;
} else {
throw e36817;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__36818){
var map__36819 = p__36818;
var map__36819__$1 = ((((!((map__36819 == null)))?((((map__36819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36819):map__36819);
var old_m = map__36819__$1;
var ws = cljs.core.get.call(null,map__36819__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__36819__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__36819__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__36821 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__36821) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,uid))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e36822){if((e36822 instanceof Error)){
var e = e36822;
return e;
} else {
throw e36822;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__36823){
var map__36824 = p__36823;
var map__36824__$1 = ((((!((map__36824 == null)))?((((map__36824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36824):map__36824);
var old_m = map__36824__$1;
var ws = cljs.core.get.call(null,map__36824__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__36824__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__36824__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__37114__delegate = function (user_id,ev,p__36826){
var vec__36827 = p__36826;
var map__36830 = cljs.core.nth.call(null,vec__36827,(0),null);
var map__36830__$1 = ((((!((map__36830 == null)))?((((map__36830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36830):map__36830);
var opts = map__36830__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__36830__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_37115 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __37116 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",376,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_37115,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_37115,ev], null);
});})(uid_37115,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1973406309);
var __37117__$1 = (cljs.core.truth_(uid_37115)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __37118__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_37119 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__37120 = ((function (uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__36832 = cljs.core.get.call(null,m,uid_37115);
var ___$3 = cljs.core.nth.call(null,vec__36832,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__36832,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_37119)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_37115),cljs.core.get.call(null,m,uid_37115));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__36835 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__36835,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__36835,(1),null);
if(cljs.core.vector_QMARK_.call(null,buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_.call(null,ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",ev_uuids,null,null);
}

var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",412,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__36835,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__36835,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-907935464);

var G__36838 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__36838) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_37115,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_37115,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init3806387547664455334.clj",423,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_37115], null);
});})(uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1321248704);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__37120.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__37120.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__36839_37122 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_37115], null))));
var chunk__36840_37123 = null;
var count__36841_37124 = (0);
var i__36842_37125 = (0);
while(true){
if((i__36842_37125 < count__36841_37124)){
var vec__36843_37126 = cljs.core._nth.call(null,chunk__36840_37123,i__36842_37125);
var _QMARK_sch_37127 = cljs.core.nth.call(null,vec__36843_37126,(0),null);
var _udt_37128 = cljs.core.nth.call(null,vec__36843_37126,(1),null);
var temp__4657__auto___37129 = _QMARK_sch_37127;
if(cljs.core.truth_(temp__4657__auto___37129)){
var sch_37130 = temp__4657__auto___37129;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_37130);
} else {
}

var G__37131 = seq__36839_37122;
var G__37132 = chunk__36840_37123;
var G__37133 = count__36841_37124;
var G__37134 = (i__36842_37125 + (1));
seq__36839_37122 = G__37131;
chunk__36840_37123 = G__37132;
count__36841_37124 = G__37133;
i__36842_37125 = G__37134;
continue;
} else {
var temp__4657__auto___37135 = cljs.core.seq.call(null,seq__36839_37122);
if(temp__4657__auto___37135){
var seq__36839_37136__$1 = temp__4657__auto___37135;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36839_37136__$1)){
var c__28678__auto___37137 = cljs.core.chunk_first.call(null,seq__36839_37136__$1);
var G__37138 = cljs.core.chunk_rest.call(null,seq__36839_37136__$1);
var G__37139 = c__28678__auto___37137;
var G__37140 = cljs.core.count.call(null,c__28678__auto___37137);
var G__37141 = (0);
seq__36839_37122 = G__37138;
chunk__36840_37123 = G__37139;
count__36841_37124 = G__37140;
i__36842_37125 = G__37141;
continue;
} else {
var vec__36846_37142 = cljs.core.first.call(null,seq__36839_37136__$1);
var _QMARK_sch_37143 = cljs.core.nth.call(null,vec__36846_37142,(0),null);
var _udt_37144 = cljs.core.nth.call(null,vec__36846_37142,(1),null);
var temp__4657__auto___37145__$1 = _QMARK_sch_37143;
if(cljs.core.truth_(temp__4657__auto___37145__$1)){
var sch_37146 = temp__4657__auto___37145__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_37146);
} else {
}

var G__37147 = cljs.core.next.call(null,seq__36839_37136__$1);
var G__37148 = null;
var G__37149 = (0);
var G__37150 = (0);
seq__36839_37122 = G__37147;
chunk__36840_37123 = G__37148;
count__36841_37124 = G__37149;
i__36842_37125 = G__37150;
continue;
}
} else {
}
}
break;
}

var seq__36849_37151 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_37115], null))));
var chunk__36850_37152 = null;
var count__36851_37153 = (0);
var i__36852_37154 = (0);
while(true){
if((i__36852_37154 < count__36851_37153)){
var vec__36853_37155 = cljs.core._nth.call(null,chunk__36850_37152,i__36852_37154);
var _QMARK_sch_37156 = cljs.core.nth.call(null,vec__36853_37155,(0),null);
var _udt_37157 = cljs.core.nth.call(null,vec__36853_37155,(1),null);
var temp__4657__auto___37158 = _QMARK_sch_37156;
if(cljs.core.truth_(temp__4657__auto___37158)){
var sch_37159 = temp__4657__auto___37158;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_37159);
} else {
}

var G__37160 = seq__36849_37151;
var G__37161 = chunk__36850_37152;
var G__37162 = count__36851_37153;
var G__37163 = (i__36852_37154 + (1));
seq__36849_37151 = G__37160;
chunk__36850_37152 = G__37161;
count__36851_37153 = G__37162;
i__36852_37154 = G__37163;
continue;
} else {
var temp__4657__auto___37164 = cljs.core.seq.call(null,seq__36849_37151);
if(temp__4657__auto___37164){
var seq__36849_37165__$1 = temp__4657__auto___37164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36849_37165__$1)){
var c__28678__auto___37166 = cljs.core.chunk_first.call(null,seq__36849_37165__$1);
var G__37167 = cljs.core.chunk_rest.call(null,seq__36849_37165__$1);
var G__37168 = c__28678__auto___37166;
var G__37169 = cljs.core.count.call(null,c__28678__auto___37166);
var G__37170 = (0);
seq__36849_37151 = G__37167;
chunk__36850_37152 = G__37168;
count__36851_37153 = G__37169;
i__36852_37154 = G__37170;
continue;
} else {
var vec__36856_37171 = cljs.core.first.call(null,seq__36849_37165__$1);
var _QMARK_sch_37172 = cljs.core.nth.call(null,vec__36856_37171,(0),null);
var _udt_37173 = cljs.core.nth.call(null,vec__36856_37171,(1),null);
var temp__4657__auto___37174__$1 = _QMARK_sch_37172;
if(cljs.core.truth_(temp__4657__auto___37174__$1)){
var sch_37175 = temp__4657__auto___37174__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_37175);
} else {
}

var G__37176 = cljs.core.next.call(null,seq__36849_37165__$1);
var G__37177 = null;
var G__37178 = (0);
var G__37179 = (0);
seq__36849_37151 = G__37176;
chunk__36850_37152 = G__37177;
count__36851_37153 = G__37178;
i__36852_37154 = G__37179;
continue;
}
} else {
}
}
break;
}
} else {
var seq__36859_37180 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__36860_37181 = null;
var count__36861_37182 = (0);
var i__36862_37183 = (0);
while(true){
if((i__36862_37183 < count__36861_37182)){
var conn_type_37184 = cljs.core._nth.call(null,chunk__36860_37181,i__36862_37183);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_37184,uid_37115], null),((function (seq__36859_37180,chunk__36860_37181,count__36861_37182,i__36862_37183,conn_type_37184,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_37119], true)], null);
} else {
var vec__36863 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__36863,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__36863,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_37119)], null);
}
});})(seq__36859_37180,chunk__36860_37181,count__36861_37182,i__36862_37183,conn_type_37184,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__37185 = seq__36859_37180;
var G__37186 = chunk__36860_37181;
var G__37187 = count__36861_37182;
var G__37188 = (i__36862_37183 + (1));
seq__36859_37180 = G__37185;
chunk__36860_37181 = G__37186;
count__36861_37182 = G__37187;
i__36862_37183 = G__37188;
continue;
} else {
var temp__4657__auto___37189 = cljs.core.seq.call(null,seq__36859_37180);
if(temp__4657__auto___37189){
var seq__36859_37190__$1 = temp__4657__auto___37189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36859_37190__$1)){
var c__28678__auto___37191 = cljs.core.chunk_first.call(null,seq__36859_37190__$1);
var G__37192 = cljs.core.chunk_rest.call(null,seq__36859_37190__$1);
var G__37193 = c__28678__auto___37191;
var G__37194 = cljs.core.count.call(null,c__28678__auto___37191);
var G__37195 = (0);
seq__36859_37180 = G__37192;
chunk__36860_37181 = G__37193;
count__36861_37182 = G__37194;
i__36862_37183 = G__37195;
continue;
} else {
var conn_type_37196 = cljs.core.first.call(null,seq__36859_37190__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_37196,uid_37115], null),((function (seq__36859_37180,chunk__36860_37181,count__36861_37182,i__36862_37183,conn_type_37196,seq__36859_37190__$1,temp__4657__auto___37189,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_37119], true)], null);
} else {
var vec__36866 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__36866,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__36866,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_37119)], null);
}
});})(seq__36859_37180,chunk__36860_37181,count__36861_37182,i__36862_37183,conn_type_37196,seq__36859_37190__$1,temp__4657__auto___37189,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__37197 = cljs.core.next.call(null,seq__36859_37190__$1);
var G__37198 = null;
var G__37199 = (0);
var G__37200 = (0);
seq__36859_37180 = G__37197;
chunk__36860_37181 = G__37198;
count__36861_37182 = G__37199;
i__36862_37183 = G__37200;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__37120.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__37120.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_37201 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_37202 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__33856__auto___37203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___37203,ws_timeout_37201,ajax_timeout_37202,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___37203,ws_timeout_37201,ajax_timeout_37202,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_36873){
var state_val_36874 = (state_36873[(1)]);
if((state_val_36874 === (1))){
var state_36873__$1 = state_36873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36873__$1,(2),ws_timeout_37201);
} else {
if((state_val_36874 === (2))){
var inst_36870 = (state_36873[(2)]);
var inst_36871 = flush_buffer_BANG__37120.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_36873__$1 = (function (){var statearr_36875 = state_36873;
(statearr_36875[(7)] = inst_36870);

return statearr_36875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36873__$1,inst_36871);
} else {
return null;
}
}
});})(c__33856__auto___37203,ws_timeout_37201,ajax_timeout_37202,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__33744__auto__,c__33856__auto___37203,ws_timeout_37201,ajax_timeout_37202,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__33745__auto__ = null;
var taoensso$sente$state_machine__33745__auto____0 = (function (){
var statearr_36879 = [null,null,null,null,null,null,null,null];
(statearr_36879[(0)] = taoensso$sente$state_machine__33745__auto__);

(statearr_36879[(1)] = (1));

return statearr_36879;
});
var taoensso$sente$state_machine__33745__auto____1 = (function (state_36873){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_36873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e36880){if((e36880 instanceof Object)){
var ex__33748__auto__ = e36880;
var statearr_36881_37204 = state_36873;
(statearr_36881_37204[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37205 = state_36873;
state_36873 = G__37205;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
taoensso$sente$state_machine__33745__auto__ = function(state_36873){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__33745__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__33745__auto____1.call(this,state_36873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__33745__auto____0;
taoensso$sente$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__33745__auto____1;
return taoensso$sente$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___37203,ws_timeout_37201,ajax_timeout_37202,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__33858__auto__ = (function (){var statearr_36882 = f__33857__auto__.call(null);
(statearr_36882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___37203);

return statearr_36882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___37203,ws_timeout_37201,ajax_timeout_37202,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__33856__auto___37206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___37206,ws_timeout_37201,ajax_timeout_37202,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___37206,ws_timeout_37201,ajax_timeout_37202,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_36887){
var state_val_36888 = (state_36887[(1)]);
if((state_val_36888 === (1))){
var state_36887__$1 = state_36887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36887__$1,(2),ajax_timeout_37202);
} else {
if((state_val_36888 === (2))){
var inst_36884 = (state_36887[(2)]);
var inst_36885 = flush_buffer_BANG__37120.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_36887__$1 = (function (){var statearr_36889 = state_36887;
(statearr_36889[(7)] = inst_36884);

return statearr_36889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36887__$1,inst_36885);
} else {
return null;
}
}
});})(c__33856__auto___37206,ws_timeout_37201,ajax_timeout_37202,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__33744__auto__,c__33856__auto___37206,ws_timeout_37201,ajax_timeout_37202,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__33745__auto__ = null;
var taoensso$sente$state_machine__33745__auto____0 = (function (){
var statearr_36893 = [null,null,null,null,null,null,null,null];
(statearr_36893[(0)] = taoensso$sente$state_machine__33745__auto__);

(statearr_36893[(1)] = (1));

return statearr_36893;
});
var taoensso$sente$state_machine__33745__auto____1 = (function (state_36887){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_36887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e36894){if((e36894 instanceof Object)){
var ex__33748__auto__ = e36894;
var statearr_36895_37207 = state_36887;
(statearr_36895_37207[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37208 = state_36887;
state_36887 = G__37208;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
taoensso$sente$state_machine__33745__auto__ = function(state_36887){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__33745__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__33745__auto____1.call(this,state_36887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__33745__auto____0;
taoensso$sente$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__33745__auto____1;
return taoensso$sente$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___37206,ws_timeout_37201,ajax_timeout_37202,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__33858__auto__ = (function (){var statearr_36896 = f__33857__auto__.call(null);
(statearr_36896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___37206);

return statearr_36896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___37206,ws_timeout_37201,ajax_timeout_37202,uid_37115,__37116,__37117__$1,__37118__$2,ev_uuid_37119,flush_buffer_BANG__37120,vec__36827,map__36830,map__36830__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__37114 = function (user_id,ev,var_args){
var p__36826 = null;
if (arguments.length > 2) {
var G__37209__i = 0, G__37209__a = new Array(arguments.length -  2);
while (G__37209__i < G__37209__a.length) {G__37209__a[G__37209__i] = arguments[G__37209__i + 2]; ++G__37209__i;}
  p__36826 = new cljs.core.IndexedSeq(G__37209__a,0);
} 
return G__37114__delegate.call(this,user_id,ev,p__36826);};
G__37114.cljs$lang$maxFixedArity = 2;
G__37114.cljs$lang$applyTo = (function (arglist__37210){
var user_id = cljs.core.first(arglist__37210);
arglist__37210 = cljs.core.next(arglist__37210);
var ev = cljs.core.first(arglist__37210);
var p__36826 = cljs.core.rest(arglist__37210);
return G__37114__delegate(user_id,ev,p__36826);
});
G__37114.cljs$core$IFn$_invoke$arity$variadic = G__37114__delegate;
return G__37114;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__36897 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__36897,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__36897,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__36897,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",492,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__36897,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__36897,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-386392939);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__36897,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__33856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__36897,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__36897,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_36905){
var state_val_36906 = (state_36905[(1)]);
if((state_val_36906 === (1))){
var inst_36900 = cljs.core.async.timeout.call(null,ms);
var state_36905__$1 = state_36905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36905__$1,(2),inst_36900);
} else {
if((state_val_36906 === (2))){
var inst_36902 = (state_36905[(2)]);
var inst_36903 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_36905__$1 = (function (){var statearr_36907 = state_36905;
(statearr_36907[(7)] = inst_36902);

return statearr_36907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36905__$1,inst_36903);
} else {
return null;
}
}
});})(c__33856__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__36897,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__33744__auto__,c__33856__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__36897,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__33745__auto__ = null;
var taoensso$sente$state_machine__33745__auto____0 = (function (){
var statearr_36911 = [null,null,null,null,null,null,null,null];
(statearr_36911[(0)] = taoensso$sente$state_machine__33745__auto__);

(statearr_36911[(1)] = (1));

return statearr_36911;
});
var taoensso$sente$state_machine__33745__auto____1 = (function (state_36905){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_36905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e36912){if((e36912 instanceof Object)){
var ex__33748__auto__ = e36912;
var statearr_36913_37211 = state_36905;
(statearr_36913_37211[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37212 = state_36905;
state_36905 = G__37212;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
taoensso$sente$state_machine__33745__auto__ = function(state_36905){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__33745__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__33745__auto____1.call(this,state_36905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__33745__auto____0;
taoensso$sente$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__33745__auto____1;
return taoensso$sente$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__36897,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__33858__auto__ = (function (){var statearr_36914 = f__33857__auto__.call(null);
(statearr_36914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto__);

return statearr_36914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__36897,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__33856__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.call(null,event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",537,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,2102600487);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init3806387547664455334.clj",548,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1437513690);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",557,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1546080374);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);

var temp__4657__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__33856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_36950){
var state_val_36951 = (state_36950[(1)]);
if((state_val_36951 === (7))){
var inst_36946 = (state_36950[(2)]);
var state_36950__$1 = state_36950;
var statearr_36952_37213 = state_36950__$1;
(statearr_36952_37213[(2)] = inst_36946);

(statearr_36952_37213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (1))){
var inst_36915 = udt_open;
var state_36950__$1 = (function (){var statearr_36953 = state_36950;
(statearr_36953[(7)] = inst_36915);

return statearr_36953;
})();
var statearr_36954_37214 = state_36950__$1;
(statearr_36954_37214[(2)] = null);

(statearr_36954_37214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (4))){
var inst_36924 = (state_36950[(8)]);
var inst_36919 = (state_36950[(2)]);
var inst_36920 = cljs.core.deref.call(null,conns_);
var inst_36921 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36922 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_36923 = (new cljs.core.PersistentVector(null,3,(5),inst_36921,inst_36922,null));
var inst_36924__$1 = cljs.core.get_in.call(null,inst_36920,inst_36923);
var state_36950__$1 = (function (){var statearr_36955 = state_36950;
(statearr_36955[(9)] = inst_36919);

(statearr_36955[(8)] = inst_36924__$1);

return statearr_36955;
})();
if(cljs.core.truth_(inst_36924__$1)){
var statearr_36956_37215 = state_36950__$1;
(statearr_36956_37215[(1)] = (5));

} else {
var statearr_36957_37216 = state_36950__$1;
(statearr_36957_37216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (13))){
var inst_36930 = (state_36950[(10)]);
var inst_36939 = (state_36950[(2)]);
var inst_36915 = inst_36930;
var state_36950__$1 = (function (){var statearr_36958 = state_36950;
(statearr_36958[(7)] = inst_36915);

(statearr_36958[(11)] = inst_36939);

return statearr_36958;
})();
var statearr_36959_37217 = state_36950__$1;
(statearr_36959_37217[(2)] = null);

(statearr_36959_37217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (6))){
var state_36950__$1 = state_36950;
var statearr_36960_37218 = state_36950__$1;
(statearr_36960_37218[(2)] = null);

(statearr_36960_37218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (3))){
var inst_36948 = (state_36950[(2)]);
var state_36950__$1 = state_36950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36950__$1,inst_36948);
} else {
if((state_val_36951 === (12))){
var state_36950__$1 = state_36950;
var statearr_36961_37219 = state_36950__$1;
(statearr_36961_37219[(2)] = null);

(statearr_36961_37219[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (2))){
var inst_36917 = cljs.core.async.timeout.call(null,ms);
var state_36950__$1 = state_36950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36950__$1,(4),inst_36917);
} else {
if((state_val_36951 === (11))){
var inst_36935 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_36936 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_36935);
var state_36950__$1 = state_36950;
var statearr_36962_37220 = state_36950__$1;
(statearr_36962_37220[(2)] = inst_36936);

(statearr_36962_37220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (9))){
var state_36950__$1 = state_36950;
var statearr_36963_37221 = state_36950__$1;
(statearr_36963_37221[(2)] = null);

(statearr_36963_37221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (5))){
var inst_36924 = (state_36950[(8)]);
var inst_36929 = cljs.core.nth.call(null,inst_36924,(0),null);
var inst_36930 = cljs.core.nth.call(null,inst_36924,(1),null);
var inst_36931 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_36950__$1 = (function (){var statearr_36964 = state_36950;
(statearr_36964[(10)] = inst_36930);

(statearr_36964[(12)] = inst_36929);

return statearr_36964;
})();
if(cljs.core.truth_(inst_36931)){
var statearr_36965_37222 = state_36950__$1;
(statearr_36965_37222[(1)] = (8));

} else {
var statearr_36966_37223 = state_36950__$1;
(statearr_36966_37223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (10))){
var inst_36943 = (state_36950[(2)]);
var state_36950__$1 = state_36950;
var statearr_36967_37224 = state_36950__$1;
(statearr_36967_37224[(2)] = inst_36943);

(statearr_36967_37224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (8))){
var inst_36930 = (state_36950[(10)]);
var inst_36915 = (state_36950[(7)]);
var inst_36933 = cljs.core._EQ_.call(null,inst_36930,inst_36915);
var state_36950__$1 = state_36950;
if(inst_36933){
var statearr_36968_37225 = state_36950__$1;
(statearr_36968_37225[(1)] = (11));

} else {
var statearr_36969_37226 = state_36950__$1;
(statearr_36969_37226[(1)] = (12));

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
});})(c__33856__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__33744__auto__,c__33856__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__33745__auto__ = null;
var taoensso$sente$state_machine__33745__auto____0 = (function (){
var statearr_36973 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36973[(0)] = taoensso$sente$state_machine__33745__auto__);

(statearr_36973[(1)] = (1));

return statearr_36973;
});
var taoensso$sente$state_machine__33745__auto____1 = (function (state_36950){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_36950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e36974){if((e36974 instanceof Object)){
var ex__33748__auto__ = e36974;
var statearr_36975_37227 = state_36950;
(statearr_36975_37227[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37228 = state_36950;
state_36950 = G__37228;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
taoensso$sente$state_machine__33745__auto__ = function(state_36950){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__33745__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__33745__auto____1.call(this,state_36950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__33745__auto____0;
taoensso$sente$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__33745__auto____1;
return taoensso$sente$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__33858__auto__ = (function (){var statearr_36976 = f__33857__auto__.call(null);
(statearr_36976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto__);

return statearr_36976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__33856__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",585,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1771988516);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__27867__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);
} else {
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__33856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_37002){
var state_val_37003 = (state_37002[(1)]);
if((state_val_37003 === (1))){
var inst_36977 = cljs.core.async.timeout.call(null,ms);
var state_37002__$1 = state_37002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37002__$1,(2),inst_36977);
} else {
if((state_val_37003 === (2))){
var inst_36984 = (state_37002[(7)]);
var inst_36979 = (state_37002[(2)]);
var inst_36980 = cljs.core.deref.call(null,conns_);
var inst_36981 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36982 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_36983 = (new cljs.core.PersistentVector(null,3,(5),inst_36981,inst_36982,null));
var inst_36984__$1 = cljs.core.get_in.call(null,inst_36980,inst_36983);
var state_37002__$1 = (function (){var statearr_37004 = state_37002;
(statearr_37004[(7)] = inst_36984__$1);

(statearr_37004[(8)] = inst_36979);

return statearr_37004;
})();
if(cljs.core.truth_(inst_36984__$1)){
var statearr_37005_37229 = state_37002__$1;
(statearr_37005_37229[(1)] = (3));

} else {
var statearr_37006_37230 = state_37002__$1;
(statearr_37006_37230[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37003 === (3))){
var inst_36984 = (state_37002[(7)]);
var inst_36989 = cljs.core.nth.call(null,inst_36984,(0),null);
var inst_36990 = cljs.core.nth.call(null,inst_36984,(1),null);
var inst_36991 = cljs.core._EQ_.call(null,inst_36990,udt_open);
var state_37002__$1 = (function (){var statearr_37007 = state_37002;
(statearr_37007[(9)] = inst_36989);

return statearr_37007;
})();
if(inst_36991){
var statearr_37008_37231 = state_37002__$1;
(statearr_37008_37231[(1)] = (6));

} else {
var statearr_37009_37232 = state_37002__$1;
(statearr_37009_37232[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37003 === (4))){
var state_37002__$1 = state_37002;
var statearr_37010_37233 = state_37002__$1;
(statearr_37010_37233[(2)] = null);

(statearr_37010_37233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37003 === (5))){
var inst_37000 = (state_37002[(2)]);
var state_37002__$1 = state_37002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37002__$1,inst_37000);
} else {
if((state_val_37003 === (6))){
var inst_36993 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_36994 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_36993);
var state_37002__$1 = state_37002;
var statearr_37011_37234 = state_37002__$1;
(statearr_37011_37234[(2)] = inst_36994);

(statearr_37011_37234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37003 === (7))){
var state_37002__$1 = state_37002;
var statearr_37012_37235 = state_37002__$1;
(statearr_37012_37235[(2)] = null);

(statearr_37012_37235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37003 === (8))){
var inst_36997 = (state_37002[(2)]);
var state_37002__$1 = state_37002;
var statearr_37013_37236 = state_37002__$1;
(statearr_37013_37236[(2)] = inst_36997);

(statearr_37013_37236[(1)] = (5));


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
});})(c__33856__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__33744__auto__,c__33856__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__33745__auto__ = null;
var taoensso$sente$state_machine__33745__auto____0 = (function (){
var statearr_37017 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37017[(0)] = taoensso$sente$state_machine__33745__auto__);

(statearr_37017[(1)] = (1));

return statearr_37017;
});
var taoensso$sente$state_machine__33745__auto____1 = (function (state_37002){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_37002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e37018){if((e37018 instanceof Object)){
var ex__33748__auto__ = e37018;
var statearr_37019_37237 = state_37002;
(statearr_37019_37237[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37238 = state_37002;
state_37002 = G__37238;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
taoensso$sente$state_machine__33745__auto__ = function(state_37002){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__33745__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__33745__auto____1.call(this,state_37002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__33745__auto____0;
taoensso$sente$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__33745__auto____1;
return taoensso$sente$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__33858__auto__ = (function (){var statearr_37020 = f__33857__auto__.call(null);
(statearr_37020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto__);

return statearr_37020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__33856__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__37021 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__37021,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__37021,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__37021,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",615,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__37021,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__37021,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-14359036);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__37021,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",624,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,171472979);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__33856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_37075){
var state_val_37076 = (state_37075[(1)]);
if((state_val_37076 === (7))){
var state_37075__$1 = state_37075;
var statearr_37077_37239 = state_37075__$1;
(statearr_37077_37239[(2)] = null);

(statearr_37077_37239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (1))){
var inst_37024 = cljs.core.async.timeout.call(null,(5000));
var state_37075__$1 = state_37075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37075__$1,(2),inst_37024);
} else {
if((state_val_37076 === (4))){
var state_37075__$1 = state_37075;
var statearr_37078_37240 = state_37075__$1;
(statearr_37078_37240[(2)] = null);

(statearr_37078_37240[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (13))){
var state_37075__$1 = state_37075;
var statearr_37079_37241 = state_37075__$1;
(statearr_37079_37241[(2)] = null);

(statearr_37079_37241[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (6))){
var inst_37052 = (state_37075[(7)]);
var inst_37036 = (state_37075[(8)]);
var inst_37034 = (state_37075[(9)]);
var inst_37035 = (state_37075[(10)]);
var inst_37047 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37048 = [conn_type,uid,client_id];
var inst_37049 = (new cljs.core.PersistentVector(null,3,(5),inst_37047,inst_37048,null));
var inst_37051 = (function (){var vec__37027 = inst_37034;
var __QMARK_sch = inst_37035;
var udt_t1 = inst_37036;
return ((function (vec__37027,__QMARK_sch,udt_t1,inst_37052,inst_37036,inst_37034,inst_37035,inst_37047,inst_37048,inst_37049,state_val_37076,c__33856__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__37050){
var vec__37080 = p__37050;
var _sch = cljs.core.nth.call(null,vec__37080,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__37080,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__37027,__QMARK_sch,udt_t1,inst_37052,inst_37036,inst_37034,inst_37035,inst_37047,inst_37048,inst_37049,state_val_37076,c__33856__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_37052__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_37049,inst_37051);
var state_37075__$1 = (function (){var statearr_37083 = state_37075;
(statearr_37083[(7)] = inst_37052__$1);

return statearr_37083;
})();
if(cljs.core.truth_(inst_37052__$1)){
var statearr_37084_37242 = state_37075__$1;
(statearr_37084_37242[(1)] = (9));

} else {
var statearr_37085_37243 = state_37075__$1;
(statearr_37085_37243[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (3))){
var inst_37036 = (state_37075[(8)]);
var inst_37034 = (state_37075[(9)]);
var inst_37035 = (state_37075[(10)]);
var inst_37039 = (function (){var vec__37027 = inst_37034;
var __QMARK_sch = inst_37035;
var udt_t1 = inst_37036;
return ((function (vec__37027,__QMARK_sch,udt_t1,inst_37036,inst_37034,inst_37035,state_val_37076,c__33856__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__37027,__QMARK_sch,udt_t1,inst_37036,inst_37034,inst_37035,state_val_37076,c__33856__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_37040 = (new cljs.core.Delay(inst_37039,null));
var inst_37041 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init3806387547664455334.clj",638,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37040,null,-1433618717);
var state_37075__$1 = state_37075;
var statearr_37086_37244 = state_37075__$1;
(statearr_37086_37244[(2)] = inst_37041);

(statearr_37086_37244[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (12))){
var inst_37061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37062 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_37063 = (new cljs.core.PersistentVector(null,2,(5),inst_37061,inst_37062,null));
var inst_37064 = receive_event_msg_BANG_.call(null,inst_37063);
var state_37075__$1 = state_37075;
var statearr_37087_37245 = state_37075__$1;
(statearr_37087_37245[(2)] = inst_37064);

(statearr_37087_37245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (2))){
var inst_37034 = (state_37075[(9)]);
var inst_37026 = (state_37075[(2)]);
var inst_37030 = cljs.core.deref.call(null,conns_);
var inst_37031 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37032 = [conn_type,uid,client_id];
var inst_37033 = (new cljs.core.PersistentVector(null,3,(5),inst_37031,inst_37032,null));
var inst_37034__$1 = cljs.core.get_in.call(null,inst_37030,inst_37033);
var inst_37035 = cljs.core.nth.call(null,inst_37034__$1,(0),null);
var inst_37036 = cljs.core.nth.call(null,inst_37034__$1,(1),null);
var inst_37037 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_37075__$1 = (function (){var statearr_37088 = state_37075;
(statearr_37088[(8)] = inst_37036);

(statearr_37088[(9)] = inst_37034__$1);

(statearr_37088[(11)] = inst_37026);

(statearr_37088[(10)] = inst_37035);

return statearr_37088;
})();
if(cljs.core.truth_(inst_37037)){
var statearr_37089_37246 = state_37075__$1;
(statearr_37089_37246[(1)] = (3));

} else {
var statearr_37090_37247 = state_37075__$1;
(statearr_37090_37247[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (11))){
var inst_37070 = (state_37075[(2)]);
var state_37075__$1 = state_37075;
var statearr_37091_37248 = state_37075__$1;
(statearr_37091_37248[(2)] = inst_37070);

(statearr_37091_37248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (9))){
var inst_37052 = (state_37075[(7)]);
var inst_37036 = (state_37075[(8)]);
var inst_37034 = (state_37075[(9)]);
var inst_37035 = (state_37075[(10)]);
var inst_37054 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37055 = [conn_type,uid];
var inst_37056 = (new cljs.core.PersistentVector(null,2,(5),inst_37054,inst_37055,null));
var inst_37057 = (function (){var vec__37027 = inst_37034;
var __QMARK_sch = inst_37035;
var udt_t1 = inst_37036;
var disconnect_QMARK_ = inst_37052;
return ((function (vec__37027,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_37052,inst_37036,inst_37034,inst_37035,inst_37054,inst_37055,inst_37056,state_val_37076,c__33856__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__37027,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_37052,inst_37036,inst_37034,inst_37035,inst_37054,inst_37055,inst_37056,state_val_37076,c__33856__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_37058 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_37056,inst_37057);
var inst_37059 = upd_connected_uid_BANG_.call(null,uid);
var state_37075__$1 = (function (){var statearr_37092 = state_37075;
(statearr_37092[(12)] = inst_37058);

return statearr_37092;
})();
if(cljs.core.truth_(inst_37059)){
var statearr_37093_37249 = state_37075__$1;
(statearr_37093_37249[(1)] = (12));

} else {
var statearr_37094_37250 = state_37075__$1;
(statearr_37094_37250[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (5))){
var inst_37036 = (state_37075[(8)]);
var inst_37044 = (state_37075[(2)]);
var inst_37045 = cljs.core._EQ_.call(null,inst_37036,udt_close);
var state_37075__$1 = (function (){var statearr_37095 = state_37075;
(statearr_37095[(13)] = inst_37044);

return statearr_37095;
})();
if(inst_37045){
var statearr_37096_37251 = state_37075__$1;
(statearr_37096_37251[(1)] = (6));

} else {
var statearr_37097_37252 = state_37075__$1;
(statearr_37097_37252[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (14))){
var inst_37067 = (state_37075[(2)]);
var state_37075__$1 = state_37075;
var statearr_37098_37253 = state_37075__$1;
(statearr_37098_37253[(2)] = inst_37067);

(statearr_37098_37253[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (10))){
var state_37075__$1 = state_37075;
var statearr_37099_37254 = state_37075__$1;
(statearr_37099_37254[(2)] = null);

(statearr_37099_37254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (8))){
var inst_37073 = (state_37075[(2)]);
var state_37075__$1 = state_37075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37075__$1,inst_37073);
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
});})(c__33856__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__33744__auto__,c__33856__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__33745__auto__ = null;
var taoensso$sente$state_machine__33745__auto____0 = (function (){
var statearr_37103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37103[(0)] = taoensso$sente$state_machine__33745__auto__);

(statearr_37103[(1)] = (1));

return statearr_37103;
});
var taoensso$sente$state_machine__33745__auto____1 = (function (state_37075){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_37075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e37104){if((e37104 instanceof Object)){
var ex__33748__auto__ = e37104;
var statearr_37105_37255 = state_37075;
(statearr_37105_37255[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37256 = state_37075;
state_37075 = G__37256;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
taoensso$sente$state_machine__33745__auto__ = function(state_37075){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__33745__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__33745__auto____1.call(this,state_37075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__33745__auto____0;
taoensso$sente$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__33745__auto____1;
return taoensso$sente$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__33858__auto__ = (function (){var statearr_37106 = f__33857__auto__.call(null);
(statearr_37106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto__);

return statearr_37106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__33856__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init3806387547664455334.clj",660,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,2077344942);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36805,map__36808,map__36808__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq36802){
var G__36803 = cljs.core.first.call(null,seq36802);
var seq36802__$1 = cljs.core.next.call(null,seq36802);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36803,seq36802__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",666,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1027384242);

var seq__37273 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__37274 = null;
var count__37275 = (0);
var i__37276 = (0);
while(true){
if((i__37276 < count__37275)){
var vec__37277 = cljs.core._nth.call(null,chunk__37274,i__37276);
var client_id = cljs.core.nth.call(null,vec__37277,(0),null);
var vec__37280 = cljs.core.nth.call(null,vec__37277,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__37280,(0),null);
var _udt = cljs.core.nth.call(null,vec__37280,(1),null);
var temp__4657__auto___37289 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___37289)){
var sch_37290 = temp__4657__auto___37289;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_37290,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__37291 = seq__37273;
var G__37292 = chunk__37274;
var G__37293 = count__37275;
var G__37294 = (i__37276 + (1));
seq__37273 = G__37291;
chunk__37274 = G__37292;
count__37275 = G__37293;
i__37276 = G__37294;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37273);
if(temp__4657__auto__){
var seq__37273__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37273__$1)){
var c__28678__auto__ = cljs.core.chunk_first.call(null,seq__37273__$1);
var G__37295 = cljs.core.chunk_rest.call(null,seq__37273__$1);
var G__37296 = c__28678__auto__;
var G__37297 = cljs.core.count.call(null,c__28678__auto__);
var G__37298 = (0);
seq__37273 = G__37295;
chunk__37274 = G__37296;
count__37275 = G__37297;
i__37276 = G__37298;
continue;
} else {
var vec__37283 = cljs.core.first.call(null,seq__37273__$1);
var client_id = cljs.core.nth.call(null,vec__37283,(0),null);
var vec__37286 = cljs.core.nth.call(null,vec__37283,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__37286,(0),null);
var _udt = cljs.core.nth.call(null,vec__37286,(1),null);
var temp__4657__auto___37299__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___37299__$1)){
var sch_37300 = temp__4657__auto___37299__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_37300,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__37301 = cljs.core.next.call(null,seq__37273__$1);
var G__37302 = null;
var G__37303 = (0);
var G__37304 = (0);
seq__37273 = G__37301;
chunk__37274 = G__37302;
count__37275 = G__37303;
i__37276 = G__37304;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",676,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-1959208813);

var nmax_attempts = (7);
var ms_base = (90);
var ms_rand = (90);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__33856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (state_37435){
var state_val_37436 = (state_37435[(1)]);
if((state_val_37436 === (7))){
var inst_37390 = (state_37435[(7)]);
var inst_37391 = (state_37435[(8)]);
var inst_37397 = (state_37435[(9)]);
var inst_37407 = (function (){var n = inst_37390;
var client_ids_satisfied = inst_37391;
var _QMARK_pulled = inst_37397;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_37390,inst_37391,inst_37397,state_val_37436,c__33856__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (s,client_id,p__37406){
var vec__37437 = p__37406;
var _QMARK_sch = cljs.core.nth.call(null,vec__37437,(0),null);
var _udt = cljs.core.nth.call(null,vec__37437,(1),null);
var sent_QMARK_ = (function (){var temp__4657__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto__)){
var sch = temp__4657__auto__;
return taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_sch,cljs.core.not.call(null,new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.call(null,s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_37390,inst_37391,inst_37397,state_val_37436,c__33856__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
})();
var inst_37408 = cljs.core.PersistentHashSet.EMPTY;
var inst_37409 = cljs.core.reduce_kv.call(null,inst_37407,inst_37408,inst_37397);
var state_37435__$1 = state_37435;
var statearr_37440_37473 = state_37435__$1;
(statearr_37440_37473[(2)] = inst_37409);

(statearr_37440_37473[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (1))){
var inst_37389 = cljs.core.PersistentHashSet.EMPTY;
var inst_37390 = (0);
var inst_37391 = inst_37389;
var state_37435__$1 = (function (){var statearr_37441 = state_37435;
(statearr_37441[(7)] = inst_37390);

(statearr_37441[(8)] = inst_37391);

return statearr_37441;
})();
var statearr_37442_37474 = state_37435__$1;
(statearr_37442_37474[(2)] = null);

(statearr_37442_37474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (4))){
var state_37435__$1 = state_37435;
var statearr_37443_37475 = state_37435__$1;
(statearr_37443_37475[(2)] = true);

(statearr_37443_37475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (15))){
var inst_37431 = (state_37435[(2)]);
var state_37435__$1 = state_37435;
var statearr_37444_37476 = state_37435__$1;
(statearr_37444_37476[(2)] = inst_37431);

(statearr_37444_37476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (13))){
var inst_37422 = cljs.core.rand_int.call(null,ms_rand);
var inst_37423 = (ms_base + inst_37422);
var inst_37424 = cljs.core.async.timeout.call(null,inst_37423);
var state_37435__$1 = state_37435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37435__$1,(16),inst_37424);
} else {
if((state_val_37436 === (6))){
var inst_37397 = (state_37435[(9)]);
var inst_37404 = (state_37435[(2)]);
var state_37435__$1 = (function (){var statearr_37445 = state_37435;
(statearr_37445[(10)] = inst_37404);

return statearr_37445;
})();
if(cljs.core.truth_(inst_37397)){
var statearr_37446_37477 = state_37435__$1;
(statearr_37446_37477[(1)] = (7));

} else {
var statearr_37447_37478 = state_37435__$1;
(statearr_37447_37478[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (3))){
var inst_37433 = (state_37435[(2)]);
var state_37435__$1 = state_37435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37435__$1,inst_37433);
} else {
if((state_val_37436 === (12))){
var inst_37420 = (state_37435[(2)]);
var state_37435__$1 = state_37435;
if(cljs.core.truth_(inst_37420)){
var statearr_37448_37479 = state_37435__$1;
(statearr_37448_37479[(1)] = (13));

} else {
var statearr_37449_37480 = state_37435__$1;
(statearr_37449_37480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (2))){
var inst_37390 = (state_37435[(7)]);
var inst_37391 = (state_37435[(8)]);
var inst_37397 = (state_37435[(9)]);
var inst_37393 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37394 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_37395 = (new cljs.core.PersistentVector(null,2,(5),inst_37393,inst_37394,null));
var inst_37396 = (function (){var n = inst_37390;
var client_ids_satisfied = inst_37391;
return ((function (n,client_ids_satisfied,inst_37390,inst_37391,inst_37397,inst_37393,inst_37394,inst_37395,state_val_37436,c__33856__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_37390,inst_37391,inst_37397,inst_37393,inst_37394,inst_37395,state_val_37436,c__33856__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__37450 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__37450,(0),null);
var udt = cljs.core.nth.call(null,vec__37450,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_37390,inst_37391,inst_37397,inst_37393,inst_37394,inst_37395,state_val_37436,c__33856__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_37390,inst_37391,inst_37397,inst_37393,inst_37394,inst_37395,state_val_37436,c__33856__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
})();
var inst_37397__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_37395,inst_37396);
var inst_37398 = (function (){var n = inst_37390;
var client_ids_satisfied = inst_37391;
var _QMARK_pulled = inst_37397__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_37390,inst_37391,inst_37397,inst_37393,inst_37394,inst_37395,inst_37396,inst_37397__$1,state_val_37436,c__33856__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (x){
var or__27867__auto__ = (x == null);
if(or__27867__auto__){
return or__27867__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_37390,inst_37391,inst_37397,inst_37393,inst_37394,inst_37395,inst_37396,inst_37397__$1,state_val_37436,c__33856__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
})();
var inst_37399 = inst_37398.call(null,inst_37397__$1);
var state_37435__$1 = (function (){var statearr_37453 = state_37435;
(statearr_37453[(9)] = inst_37397__$1);

return statearr_37453;
})();
if(cljs.core.truth_(inst_37399)){
var statearr_37454_37481 = state_37435__$1;
(statearr_37454_37481[(1)] = (4));

} else {
var statearr_37455_37482 = state_37435__$1;
(statearr_37455_37482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (11))){
var inst_37414 = (state_37435[(11)]);
var state_37435__$1 = state_37435;
var statearr_37456_37483 = state_37435__$1;
(statearr_37456_37483[(2)] = inst_37414);

(statearr_37456_37483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (9))){
var inst_37390 = (state_37435[(7)]);
var inst_37414 = (state_37435[(11)]);
var inst_37391 = (state_37435[(8)]);
var inst_37412 = (state_37435[(2)]);
var inst_37413 = cljs.core.into.call(null,inst_37391,inst_37412);
var inst_37414__$1 = (inst_37390 < nmax_attempts);
var state_37435__$1 = (function (){var statearr_37457 = state_37435;
(statearr_37457[(11)] = inst_37414__$1);

(statearr_37457[(12)] = inst_37413);

return statearr_37457;
})();
if(cljs.core.truth_(inst_37414__$1)){
var statearr_37458_37484 = state_37435__$1;
(statearr_37458_37484[(1)] = (10));

} else {
var statearr_37459_37485 = state_37435__$1;
(statearr_37459_37485[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (5))){
var inst_37397 = (state_37435[(9)]);
var inst_37402 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:or nil? map?] ?pulled)",inst_37397,null,null);
var state_37435__$1 = state_37435;
var statearr_37460_37486 = state_37435__$1;
(statearr_37460_37486[(2)] = inst_37402);

(statearr_37460_37486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (14))){
var state_37435__$1 = state_37435;
var statearr_37461_37487 = state_37435__$1;
(statearr_37461_37487[(2)] = null);

(statearr_37461_37487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (16))){
var inst_37390 = (state_37435[(7)]);
var inst_37413 = (state_37435[(12)]);
var inst_37426 = (state_37435[(2)]);
var inst_37427 = (inst_37390 + (1));
var inst_37390__$1 = inst_37427;
var inst_37391 = inst_37413;
var state_37435__$1 = (function (){var statearr_37462 = state_37435;
(statearr_37462[(7)] = inst_37390__$1);

(statearr_37462[(8)] = inst_37391);

(statearr_37462[(13)] = inst_37426);

return statearr_37462;
})();
var statearr_37463_37488 = state_37435__$1;
(statearr_37463_37488[(2)] = null);

(statearr_37463_37488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (10))){
var inst_37413 = (state_37435[(12)]);
var inst_37416 = cljs.core.complement.call(null,inst_37413);
var inst_37417 = cljs.core.some.call(null,inst_37416,client_ids_unsatisfied);
var state_37435__$1 = state_37435;
var statearr_37464_37489 = state_37435__$1;
(statearr_37464_37489[(2)] = inst_37417);

(statearr_37464_37489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37436 === (8))){
var state_37435__$1 = state_37435;
var statearr_37465_37490 = state_37435__$1;
(statearr_37465_37490[(2)] = null);

(statearr_37465_37490[(1)] = (9));


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
});})(c__33856__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
;
return ((function (switch__33744__auto__,c__33856__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33745__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33745__auto____0 = (function (){
var statearr_37469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37469[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33745__auto__);

(statearr_37469[(1)] = (1));

return statearr_37469;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33745__auto____1 = (function (state_37435){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_37435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e37470){if((e37470 instanceof Object)){
var ex__33748__auto__ = e37470;
var statearr_37471_37491 = state_37435;
(statearr_37471_37491[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37492 = state_37435;
state_37435 = G__37492;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33745__auto__ = function(state_37435){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33745__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33745__auto____1.call(this,state_37435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33745__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33745__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
})();
var state__33858__auto__ = (function (){var statearr_37472 = f__33857__auto__.call(null);
(statearr_37472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto__);

return statearr_37472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
);

return c__33856__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__28530__auto__ = (((chsk == null))?null:chsk);
var m__28531__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,chsk);
} else {
var m__28531__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reconn_QMARK_){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reconn_QMARK_);
} else {
var x__28530__auto__ = (((chsk == null))?null:chsk);
var m__28531__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,chsk,reconn_QMARK_);
} else {
var m__28531__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,chsk,reconn_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__28530__auto__ = (((chsk == null))?null:chsk);
var m__28531__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,chsk);
} else {
var m__28531__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__28530__auto__ = (((chsk == null))?null:chsk);
var m__28531__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,chsk,ev,opts);
} else {
var m__28531__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_.call(null,chsk);
});
/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,false);
});
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,false);
});
/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_.call(null,chsk);
});
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args37493 = [];
var len__28942__auto___37496 = arguments.length;
var i__28943__auto___37497 = (0);
while(true){
if((i__28943__auto___37497 < len__28942__auto___37496)){
args37493.push((arguments[i__28943__auto___37497]));

var G__37498 = (i__28943__auto___37497 + (1));
i__28943__auto___37497 = G__37498;
continue;
} else {
}
break;
}

var G__37495 = args37493.length;
switch (G__37495) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37493.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",755,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,-250826960);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3806387547664455334.clj",760,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-221990280);

if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__27867__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__27867__auto__){
return or__27867__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb requires a timeout; timeout-ms should be a +ive integer: "),cljs.core.str(_QMARK_timeout_ms)].join('')),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))")].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cb should be nil, an ifn, or a channel: "),cljs.core.str(cljs.core.type.call(null,_QMARK_cb))].join('')),cljs.core.str("\n"),cljs.core.str("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4657__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__37500,merge_state){
var map__37506 = p__37500;
var map__37506__$1 = ((((!((map__37506 == null)))?((((map__37506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37506):map__37506);
var chsk = map__37506__$1;
var chs = cljs.core.get.call(null,map__37506__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__37506__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__37508 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__37506,map__37506__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var requested_reconnect_QMARK_ = (function (){var and__27855__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__27855__auto__)){
var and__27855__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__27855__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__27855__auto____$1;
}
} else {
return and__27855__auto__;
}
})();
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(requested_reconnect_QMARK_)?cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true):cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666)));
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
});})(map__37506,map__37506__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__37508,(0),null);
var new_state = cljs.core.nth.call(null,vec__37508,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var e_37519 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e37515){if((e37515 instanceof Error)){
var e = e37515;
return e;
} else {
throw e37515;

}
}})();
if((e_37519 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",_QMARK_cb,e_37519,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__37516 = ev;
var ev_id = cljs.core.nth.call(null,vec__37516,(0),null);
var _ = cljs.core.nth.call(null,vec__37516,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__37516,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__37516,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",834,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-112985014);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",clj,null,null));
var seq__37530 = cljs.core.seq.call(null,buffered_evs);
var chunk__37531 = null;
var count__37532 = (0);
var i__37533 = (0);
while(true){
if((i__37533 < count__37532)){
var ev = cljs.core._nth.call(null,chunk__37531,i__37533);
taoensso.sente.assert_event.call(null,ev);

var vec__37534_37540 = ev;
var id_37541 = cljs.core.nth.call(null,vec__37534_37540,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_37541),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__37542 = seq__37530;
var G__37543 = chunk__37531;
var G__37544 = count__37532;
var G__37545 = (i__37533 + (1));
seq__37530 = G__37542;
chunk__37531 = G__37543;
count__37532 = G__37544;
i__37533 = G__37545;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37530);
if(temp__4657__auto__){
var seq__37530__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37530__$1)){
var c__28678__auto__ = cljs.core.chunk_first.call(null,seq__37530__$1);
var G__37546 = cljs.core.chunk_rest.call(null,seq__37530__$1);
var G__37547 = c__28678__auto__;
var G__37548 = cljs.core.count.call(null,c__28678__auto__);
var G__37549 = (0);
seq__37530 = G__37546;
chunk__37531 = G__37547;
count__37532 = G__37548;
i__37533 = G__37549;
continue;
} else {
var ev = cljs.core.first.call(null,seq__37530__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__37537_37550 = ev;
var id_37551 = cljs.core.nth.call(null,vec__37537_37550,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_37551),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__37552 = cljs.core.next.call(null,seq__37530__$1);
var G__37553 = null;
var G__37554 = (0);
var G__37555 = (0);
seq__37530 = G__37552;
chunk__37531 = G__37553;
count__37532 = G__37554;
i__37533 = G__37555;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__27855__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__27855__auto__){
var vec__37565 = x;
var x1 = cljs.core.nth.call(null,vec__37565,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__27855__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_37588 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e37578){if((e37578 instanceof Error)){
var e = e37578;
return e;
} else {
throw e37578;

}
}})();
if((e_37588 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_37588,null);
}

var e_37589 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e37579){if((e37579 instanceof Error)){
var e = e37579;
return e;
} else {
throw e37579;

}
}})();
if((e_37589 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(handshake? clj)",clj,e_37589,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",851,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,2050917151);

var vec__37580 = clj;
var _ = cljs.core.nth.call(null,vec__37580,(0),null);
var vec__37583 = cljs.core.nth.call(null,vec__37580,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__37583,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__37583,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__37583,(2),null);
var map__37586 = chsk;
var map__37586__$1 = ((((!((map__37586 == null)))?((((map__37586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37586):map__37586);
var chs = cljs.core.get.call(null,map__37586__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__37586__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3806387547664455334.clj",870,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__37580,_,vec__37583,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__37586,map__37586__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__37580,_,vec__37583,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__37586,map__37586__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,-1081825276);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new_state);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,state_,active_retry_id_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.active_retry_id_ = active_retry_id_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28489__auto__,k__28490__auto__){
var self__ = this;
var this__28489__auto____$1 = this;
return cljs.core._lookup.call(null,this__28489__auto____$1,k__28490__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28491__auto__,k37591,else__28492__auto__){
var self__ = this;
var this__28491__auto____$1 = this;
var G__37593 = (((k37591 instanceof cljs.core.Keyword))?k37591.fqn:null);
switch (G__37593) {
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37591,else__28492__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28503__auto__,writer__28504__auto__,opts__28505__auto__){
var self__ = this;
var this__28503__auto____$1 = this;
var pr_pair__28506__auto__ = ((function (this__28503__auto____$1){
return (function (keyval__28507__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28504__auto__,cljs.core.pr_writer,""," ","",opts__28505__auto__,keyval__28507__auto__);
});})(this__28503__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28504__auto__,pr_pair__28506__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__28505__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37590){
var self__ = this;
var G__37590__$1 = this;
return (new cljs.core.RecordIter((0),G__37590__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28487__auto__){
var self__ = this;
var this__28487__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28483__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return (12 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28484__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28485__auto__,other__28486__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28498__auto__,k__28499__auto__){
var self__ = this;
var this__28498__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__28499__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28498__auto____$1),self__.__meta),k__28499__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28499__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28496__auto__,k__28497__auto__,G__37590){
var self__ = this;
var this__28496__auto____$1 = this;
var pred__37594 = cljs.core.keyword_identical_QMARK_;
var expr__37595 = k__28497__auto__;
if(cljs.core.truth_(pred__37594.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__37595))){
return (new taoensso.sente.ChWebSocket(G__37590,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37594.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__37595))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__37590,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37594.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__37595))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__37590,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37594.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__37595))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__37590,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37594.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__37595))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__37590,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37594.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__37595))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__37590,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37594.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__37595))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__37590,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37594.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__37595))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,G__37590,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37594.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__37595))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,G__37590,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37594.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__37595))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,G__37590,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37594.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__37595))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__37590,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37594.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__37595))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__37590,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28497__auto__,G__37590),null));
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
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28501__auto__){
var self__ = this;
var this__28501__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28488__auto__,G__37590){
var self__ = this;
var this__28488__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__37590,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28494__auto__,entry__28495__auto__){
var self__ = this;
var this__28494__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28495__auto__)){
return cljs.core._assoc.call(null,this__28494__auto____$1,cljs.core._nth.call(null,entry__28495__auto__,(0)),cljs.core._nth.call(null,entry__28495__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28494__auto____$1,entry__28495__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reconn_QMARK_){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"_disable-auto-retry");

if(cljs.core.truth_(reconn_QMARK_)){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
}

var temp__4657__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente._chsk_disconnect_BANG_.call(null,chsk__$1,new cljs.core.Keyword(null,"reconn","reconn",-807347633));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__37597 = opts;
var map__37597__$1 = ((((!((map__37597 == null)))?((((map__37597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37597):map__37597);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__37597__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__37597__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__37597__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___37639 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___37639)){
var cb_uuid_37640 = temp__4657__auto___37639;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_37640], null),(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,_QMARK_cb_fn))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e37599){if((e37599 instanceof Error)){
var e = e37599;
return e;
} else {
throw e37599;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___37641__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___37641__$1)){
var timeout_ms_37642 = temp__4657__auto___37641__$1;
var c__33856__auto___37643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___37643,timeout_ms_37642,temp__4657__auto___37641__$1,cb_uuid_37640,temp__4657__auto___37639,_QMARK_cb_uuid,ppstr,map__37597,map__37597__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___37643,timeout_ms_37642,temp__4657__auto___37641__$1,cb_uuid_37640,temp__4657__auto___37639,_QMARK_cb_uuid,ppstr,map__37597,map__37597__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_37610){
var state_val_37611 = (state_37610[(1)]);
if((state_val_37611 === (1))){
var inst_37600 = cljs.core.async.timeout.call(null,timeout_ms_37642);
var state_37610__$1 = state_37610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37610__$1,(2),inst_37600);
} else {
if((state_val_37611 === (2))){
var inst_37603 = (state_37610[(7)]);
var inst_37602 = (state_37610[(2)]);
var inst_37603__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_37610__$1 = (function (){var statearr_37612 = state_37610;
(statearr_37612[(7)] = inst_37603__$1);

(statearr_37612[(8)] = inst_37602);

return statearr_37612;
})();
if(cljs.core.truth_(inst_37603__$1)){
var statearr_37613_37644 = state_37610__$1;
(statearr_37613_37644[(1)] = (3));

} else {
var statearr_37614_37645 = state_37610__$1;
(statearr_37614_37645[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (3))){
var inst_37603 = (state_37610[(7)]);
var inst_37605 = inst_37603.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_37610__$1 = state_37610;
var statearr_37615_37646 = state_37610__$1;
(statearr_37615_37646[(2)] = inst_37605);

(statearr_37615_37646[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (4))){
var state_37610__$1 = state_37610;
var statearr_37616_37647 = state_37610__$1;
(statearr_37616_37647[(2)] = null);

(statearr_37616_37647[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (5))){
var inst_37608 = (state_37610[(2)]);
var state_37610__$1 = state_37610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37610__$1,inst_37608);
} else {
return null;
}
}
}
}
}
});})(c__33856__auto___37643,timeout_ms_37642,temp__4657__auto___37641__$1,cb_uuid_37640,temp__4657__auto___37639,_QMARK_cb_uuid,ppstr,map__37597,map__37597__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__33744__auto__,c__33856__auto___37643,timeout_ms_37642,temp__4657__auto___37641__$1,cb_uuid_37640,temp__4657__auto___37639,_QMARK_cb_uuid,ppstr,map__37597,map__37597__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__33745__auto__ = null;
var taoensso$sente$state_machine__33745__auto____0 = (function (){
var statearr_37620 = [null,null,null,null,null,null,null,null,null];
(statearr_37620[(0)] = taoensso$sente$state_machine__33745__auto__);

(statearr_37620[(1)] = (1));

return statearr_37620;
});
var taoensso$sente$state_machine__33745__auto____1 = (function (state_37610){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_37610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e37621){if((e37621 instanceof Object)){
var ex__33748__auto__ = e37621;
var statearr_37622_37648 = state_37610;
(statearr_37622_37648[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37649 = state_37610;
state_37610 = G__37649;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
taoensso$sente$state_machine__33745__auto__ = function(state_37610){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__33745__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__33745__auto____1.call(this,state_37610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__33745__auto____0;
taoensso$sente$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__33745__auto____1;
return taoensso$sente$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___37643,timeout_ms_37642,temp__4657__auto___37641__$1,cb_uuid_37640,temp__4657__auto___37639,_QMARK_cb_uuid,ppstr,map__37597,map__37597__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__33858__auto__ = (function (){var statearr_37623 = f__33857__auto__.call(null);
(statearr_37623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___37643);

return statearr_37623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___37643,timeout_ms_37642,temp__4657__auto___37641__$1,cb_uuid_37640,temp__4657__auto___37639,_QMARK_cb_uuid,ppstr,map__37597,map__37597__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e37624){if((e37624 instanceof Error)){
var e = e37624;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init3806387547664455334.clj",923,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__37597,map__37597__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__37597,map__37597__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-567061176);

var temp__4657__auto___37650 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___37650)){
var cb_uuid_37651 = temp__4657__auto___37650;
var cb_fn_STAR__37652 = (function (){var or__27867__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_37651);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
var e__$1 = (function (){try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,_QMARK_cb_fn))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e37625){if((e37625 instanceof Error)){
var e__$1 = e37625;
return e__$1;
} else {
throw e37625;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__37652.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e37624;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__27867__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore.oget.call(null,window,"MozWebSocket");
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var retry_id = taoensso.encore.uuid_str.call(null);
var connect_fn = ((function (retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
var retry_fn = ((function (retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3806387547664455334.clj",941,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1232213137);

return window.setTimeout(taoensso$sente$connect_fn,backoff_ms);
} else {
return null;
}
});})(retry_id,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e37632){if((e37632 instanceof Error)){
var e = e37632;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init3806387547664455334.clj",951,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1119145394);

return null;
} else {
throw e37632;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__37633 = _QMARK_socket;
(G__37633["onerror"] = ((function (G__37633,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init3806387547664455334.clj",961,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__37633,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e37634){var _ = e37634;
return ws_ev;
}})()], null);
});})(G__37633,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1505746253);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),taoensso.encore.uuid_str.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error], null));
});})(G__37633,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__37633["onmessage"] = ((function (G__37633,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__37635 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__37635,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__37635,(1),null);
var or__27867__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
})()
:null);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
var or__27867__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","ws-ping","debug/ws-ping",-168903566)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__27867__auto____$1)){
return or__27867__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3806387547664455334.clj",998,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__27867__auto____$1,or__27867__auto__,ppstr,vec__37635,clj,_QMARK_cb_uuid,G__37633,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__27867__auto____$1,or__27867__auto__,ppstr,vec__37635,clj,_QMARK_cb_uuid,G__37633,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1952800300);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__37633,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__37633["onclose"] = ((function (G__37633,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),taoensso.encore.uuid_str.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init3806387547664455334.clj",1026,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__37633,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__37633,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-276717223);

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close], null));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close,new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
}
});})(G__37633,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__37633;
})());
}
});})(retry_id,WebSocket,temp__4657__auto__,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__28523__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__28523__auto__,writer__28524__auto__){
return cljs.core._write.call(null,writer__28524__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,active_retry_id_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,active_retry_id_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__37592){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__37592),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__37592),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__37592),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__37592),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__37592),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__37592),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__37592),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__37592),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__37592),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__37592),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__37592),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__37592),null,cljs.core.dissoc.call(null,G__37592,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908)),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null)),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),cljs.core.atom.call(null,"_pending"),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.call(null,null)], null),opts));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(60));

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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,active_retry_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.active_retry_id_ = active_retry_id_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28489__auto__,k__28490__auto__){
var self__ = this;
var this__28489__auto____$1 = this;
return cljs.core._lookup.call(null,this__28489__auto____$1,k__28490__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28491__auto__,k37654,else__28492__auto__){
var self__ = this;
var this__28491__auto____$1 = this;
var G__37656 = (((k37654 instanceof cljs.core.Keyword))?k37654.fqn:null);
switch (G__37656) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37654,else__28492__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28503__auto__,writer__28504__auto__,opts__28505__auto__){
var self__ = this;
var this__28503__auto____$1 = this;
var pr_pair__28506__auto__ = ((function (this__28503__auto____$1){
return (function (keyval__28507__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28504__auto__,cljs.core.pr_writer,""," ","",opts__28505__auto__,keyval__28507__auto__);
});})(this__28503__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28504__auto__,pr_pair__28506__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__28505__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37653){
var self__ = this;
var G__37653__$1 = this;
return (new cljs.core.RecordIter((0),G__37653__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28487__auto__){
var self__ = this;
var this__28487__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28483__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28484__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28485__auto__,other__28486__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28498__auto__,k__28499__auto__){
var self__ = this;
var this__28498__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__28499__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28498__auto____$1),self__.__meta),k__28499__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28499__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28496__auto__,k__28497__auto__,G__37653){
var self__ = this;
var this__28496__auto____$1 = this;
var pred__37657 = cljs.core.keyword_identical_QMARK_;
var expr__37658 = k__28497__auto__;
if(cljs.core.truth_(pred__37657.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__37658))){
return (new taoensso.sente.ChAjaxSocket(G__37653,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37657.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__37658))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__37653,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37657.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__37658))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__37653,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37657.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__37658))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__37653,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37657.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__37658))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__37653,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37657.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__37658))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__37653,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37657.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__37658))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__37653,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37657.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__37658))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,G__37653,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37657.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__37658))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,G__37653,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37657.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__37658))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__37653,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37657.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__37658))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__37653,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28497__auto__,G__37653),null));
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
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28501__auto__){
var self__ = this;
var this__28501__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28488__auto__,G__37653){
var self__ = this;
var this__28488__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__37653,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28494__auto__,entry__28495__auto__){
var self__ = this;
var this__28494__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28495__auto__)){
return cljs.core._assoc.call(null,this__28494__auto____$1,cljs.core._nth.call(null,entry__28495__auto__,(0)),cljs.core._nth.call(null,entry__28495__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28494__auto____$1,entry__28495__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reconn_QMARK_){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"_disable-auto-retry");

if(cljs.core.truth_(reconn_QMARK_)){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
}

var temp__4657__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente._chsk_disconnect_BANG_.call(null,chsk__$1,new cljs.core.Keyword(null,"reconn","reconn",-807347633));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__37660 = opts;
var map__37660__$1 = ((((!((map__37660 == null)))?((((map__37660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37660):map__37660);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__37660__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__37660__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__37660__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__27867__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
var or__27867__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__27867__auto____$1)){
return or__27867__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__37660,map__37660__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__37662){
var map__37668 = p__37662;
var map__37668__$1 = ((((!((map__37668 == null)))?((((map__37668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37668):map__37668);
var _QMARK_error = cljs.core.get.call(null,map__37668__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__37668__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__37670 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__37670,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__37670,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3806387547664455334.clj",1124,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__37670,resp_clj,___$1,map__37668,map__37668__$1,_QMARK_error,_QMARK_content,csrf_token,map__37660,map__37660__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__37670,resp_clj,___$1,map__37668,map__37668__$1,_QMARK_error,_QMARK_content,csrf_token,map__37660,map__37660__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-889260234);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,map__37660,map__37660__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var retry_id = taoensso.encore.uuid_str.call(null);
var poll_fn = ((function (retry_id,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",1133,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null,1354296224);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3806387547664455334.clj",1139,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,null)),null,-1589979497);

return window.setTimeout(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,backoff_ms);
} else {
return null;
}
});})(retry_id,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__27867__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,retry_id,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__37684){
var map__37690 = p__37684;
var map__37690__$1 = ((((!((map__37690 == null)))?((((map__37690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37690):map__37690);
var _QMARK_error = cljs.core.get.call(null,map__37690__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__37690__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__37692 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__37692,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__27867__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(retry_fn,retry_id,chsk__$1))
));
});})(retry_id,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__28523__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__28523__auto__,writer__28524__auto__){
return cljs.core._write.call(null,writer__28524__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,active_retry_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,active_retry_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__37655){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__37655),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__37655),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__37655),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__37655),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__37655),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__37655),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__37655),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__37655),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__37655),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__37655),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__37655),null,cljs.core.dissoc.call(null,G__37655,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null)),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),cljs.core.atom.call(null,"_pending"),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null)], null),opts));
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28489__auto__,k__28490__auto__){
var self__ = this;
var this__28489__auto____$1 = this;
return cljs.core._lookup.call(null,this__28489__auto____$1,k__28490__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28491__auto__,k37697,else__28492__auto__){
var self__ = this;
var this__28491__auto____$1 = this;
var G__37699 = (((k37697 instanceof cljs.core.Keyword))?k37697.fqn:null);
switch (G__37699) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37697,else__28492__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28503__auto__,writer__28504__auto__,opts__28505__auto__){
var self__ = this;
var this__28503__auto____$1 = this;
var pr_pair__28506__auto__ = ((function (this__28503__auto____$1){
return (function (keyval__28507__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28504__auto__,cljs.core.pr_writer,""," ","",opts__28505__auto__,keyval__28507__auto__);
});})(this__28503__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28504__auto__,pr_pair__28506__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__28505__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37696){
var self__ = this;
var G__37696__$1 = this;
return (new cljs.core.RecordIter((0),G__37696__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28487__auto__){
var self__ = this;
var this__28487__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28483__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28484__auto__){
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28485__auto__,other__28486__auto__){
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28498__auto__,k__28499__auto__){
var self__ = this;
var this__28498__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__28499__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28498__auto____$1),self__.__meta),k__28499__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28499__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28496__auto__,k__28497__auto__,G__37696){
var self__ = this;
var this__28496__auto____$1 = this;
var pred__37700 = cljs.core.keyword_identical_QMARK_;
var expr__37701 = k__28497__auto__;
if(cljs.core.truth_(pred__37700.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__37701))){
return (new taoensso.sente.ChAutoSocket(G__37696,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37700.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__37701))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__37696,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37700.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__37701))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__37696,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37700.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__37701))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__37696,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28497__auto__,G__37696),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28501__auto__){
var self__ = this;
var this__28501__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28488__auto__,G__37696){
var self__ = this;
var this__28488__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__37696,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28494__auto__,entry__28495__auto__){
var self__ = this;
var this__28494__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28495__auto__)){
return cljs.core._assoc.call(null,this__28494__auto____$1,cljs.core._nth.call(null,entry__28495__auto__,(0)),cljs.core._nth.call(null,entry__28495__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28494__auto____$1,entry__28495__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reconn_QMARK_){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
return taoensso.sente._chsk_disconnect_BANG_.call(null,impl,reconn_QMARK_);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"reconn","reconn",-807347633));

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__4655__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4655__auto__)){
var impl = temp__4655__auto__;
return taoensso.sente._chsk_send_BANG_.call(null,impl,ev,opts);
} else {
var map__37703 = opts;
var map__37703__$1 = ((((!((map__37703 == null)))?((((map__37703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37703):map__37703);
var _QMARK_cb = cljs.core.get.call(null,map__37703__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___37706 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___37706,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
var temp__4657__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ever_opened_QMARK__ = temp__4657__auto____$1;
if(cljs.core.truth_(cljs.core.deref.call(null,ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-error","last-error",1848699973).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___37706,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3806387547664455334.clj",1260,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___37706,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___37706,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,587129168);

taoensso.sente._chsk_disconnect_BANG_.call(null,impl,false);

return cljs.core.reset_BANG_.call(null,self__.impl_,ajax_conn_BANG_.call(null));
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(downgraded_QMARK___37706,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__27867__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return ajax_conn_BANG_.call(null);
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__28523__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__28523__auto__,writer__28524__auto__){
return cljs.core._write.call(null,writer__28524__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__37698){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__37698),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__37698),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__37698),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__37698),null,cljs.core.dissoc.call(null,G__37698,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__37708 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37708) {
case "ajax":
return protocol;

break;
case "ws":
if(cljs.core._EQ_.call(null,protocol,"https:")){
return "wss:";
} else {
return "ws:";
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,host,path))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *           ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *  :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *  :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *  :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *  :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *  :host           ; Server host (defaults to current page's host).
 *  :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                  ; for application-level auth, etc.).
 *  :packer         ; :edn (default), or an IPacker implementation.
 *  :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *  :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__28949__auto__ = [];
var len__28942__auto___37730 = arguments.length;
var i__28943__auto___37731 = (0);
while(true){
if((i__28943__auto___37731 < len__28942__auto___37730)){
args__28949__auto__.push((arguments[i__28943__auto___37731]));

var G__37732 = (i__28943__auto___37731 + (1));
i__28943__auto___37731 = G__37732;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__37712){
var vec__37713 = p__37712;
var map__37716 = cljs.core.nth.call(null,vec__37713,(0),null);
var map__37716__$1 = ((((!((map__37716 == null)))?((((map__37716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37716):map__37716);
var opts = map__37716__$1;
var type = cljs.core.get.call(null,map__37716__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__37716__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var params = cljs.core.get.call(null,map__37716__$1,new cljs.core.Keyword(null,"params","params",710516235));
var recv_buf_or_n = cljs.core.get.call(null,map__37716__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var packer = cljs.core.get.call(null,map__37716__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var client_id = cljs.core.get.call(null,map__37716__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__27867__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var ajax_opts = cljs.core.get.call(null,map__37716__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__37716__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var backoff_ms_fn = cljs.core.get.call(null,map__37716__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__37713,(1),null);
var e_37733 = (function (){try{if(((function (vec__37713,map__37716,map__37716__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__37713,map__37716,map__37716__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e37718){if((e37718 instanceof Error)){
var e = e37718;
return e;
} else {
throw e37718;

}
}})();
if((e_37733 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",type,e_37733,null);
}

var e_37734 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e37719){if((e37719 instanceof Error)){
var e = e37719;
return e;
} else {
throw e37719;

}
}})();
if((e_37734 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",client_id,e_37734,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3806387547664455334.clj",1323,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__37713,map__37716,map__37716__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__37713,map__37716,map__37716__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
,null)),null,2050770359);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3806387547664455334.clj",1324,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__37713,map__37716,map__37716__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__37713,map__37716,map__37716__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
,null)),null,-1143898526);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var win_loc = taoensso.encore.get_win_loc.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
var host__$1 = (function (){var or__27867__auto__ = host;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var path__$1 = (function (){var or__27867__auto__ = path;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var vec__37720 = (function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__37720,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__37720,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(512)))], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__37723 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37723) {
case "ws":
return taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket.call(null,auto_chsk_opts);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})());
var temp__4655__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__4655__auto__)){
var chsk = temp__4655__auto__;
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,send_fn,chsk,temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__37720,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__37713,map__37716,map__37716__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,send_fn,chsk,temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__37720,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__37713,map__37716,map__37716__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
,_LT_server_ch);
} else {
return _LT_server_ch;
}
})()], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.map_LT_.call(null,((function (send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__37720,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__37713,map__37716,map__37716__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__37727 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__37727,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__37727,(1),null);
var ev__$1 = vec__37727;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__37720,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__37713,map__37716,map__37716__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
,ev_ch);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3806387547664455334.clj",1407,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__37720,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__37713,map__37716,map__37716__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,win_loc,win_protocol,host__$1,path__$1,vec__37720,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__37713,map__37716,map__37716__$1,opts,type,host,params,recv_buf_or_n,packer,client_id,ajax_opts,wrap_recv_evs_QMARK_,backoff_ms_fn,_deprecated_more_opts))
,null)),null,-196112387);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq37710){
var G__37711 = cljs.core.first.call(null,seq37710);
var seq37710__$1 = cljs.core.next.call(null,seq37710);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37711,seq37710__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__37964 = opts;
var map__37964__$1 = ((((!((map__37964 == null)))?((((map__37964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37964):map__37964);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__37964__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__37964__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__33856__auto___38192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___38192,map__37964,map__37964__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___38192,map__37964,map__37964__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_38107){
var state_val_38108 = (state_38107[(1)]);
if((state_val_38108 === (7))){
var inst_38103 = (state_38107[(2)]);
var state_38107__$1 = state_38107;
var statearr_38109_38193 = state_38107__$1;
(statearr_38109_38193[(2)] = inst_38103);

(statearr_38109_38193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (20))){
var inst_37975 = (state_38107[(7)]);
var inst_37977 = (state_38107[(8)]);
var inst_37974 = (state_38107[(9)]);
var inst_38003 = (state_38107[(10)]);
var inst_37976 = (state_38107[(11)]);
var inst_38004 = (state_38107[(12)]);
var inst_38014 = (function (){var vec__37967 = inst_37974;
var v = inst_37975;
var p = inst_37976;
var stop_QMARK_ = inst_37977;
var map__37980 = inst_38003;
var event_msg = inst_38003;
var event = inst_38004;
return ((function (vec__37967,v,p,stop_QMARK_,map__37980,event_msg,event,inst_37975,inst_37977,inst_37974,inst_38003,inst_37976,inst_38004,state_val_38108,c__33856__auto___38192,map__37964,map__37964__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__37967,v,p,stop_QMARK_,map__37980,event_msg,event,inst_37975,inst_37977,inst_37974,inst_38003,inst_37976,inst_38004,state_val_38108,c__33856__auto___38192,map__37964,map__37964__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_38015 = (new cljs.core.Delay(inst_38014,null));
var inst_38016 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3806387547664455334.clj",1424,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_38015,null,-1330918017);
var state_38107__$1 = state_38107;
var statearr_38110_38194 = state_38107__$1;
(statearr_38110_38194[(2)] = inst_38016);

(statearr_38110_38194[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (27))){
var inst_38021 = (state_38107[(2)]);
var state_38107__$1 = state_38107;
var statearr_38111_38195 = state_38107__$1;
(statearr_38111_38195[(2)] = inst_38021);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38107__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (1))){
var state_38107__$1 = state_38107;
var statearr_38112_38196 = state_38107__$1;
(statearr_38112_38196[(2)] = null);

(statearr_38112_38196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (24))){
var state_38107__$1 = state_38107;
var statearr_38113_38197 = state_38107__$1;
(statearr_38113_38197[(2)] = null);

(statearr_38113_38197[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (55))){
var inst_38097 = (state_38107[(2)]);
var state_38107__$1 = state_38107;
var statearr_38114_38198 = state_38107__$1;
(statearr_38114_38198[(2)] = inst_38097);

(statearr_38114_38198[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (39))){
var state_38107__$1 = state_38107;
var statearr_38115_38199 = state_38107__$1;
(statearr_38115_38199[(2)] = taoensso.truss.impl._dummy_error);

(statearr_38115_38199[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (46))){
var inst_38100 = (state_38107[(2)]);
var state_38107__$1 = (function (){var statearr_38116 = state_38107;
(statearr_38116[(13)] = inst_38100);

return statearr_38116;
})();
var statearr_38117_38200 = state_38107__$1;
(statearr_38117_38200[(2)] = null);

(statearr_38117_38200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (4))){
var inst_37977 = (state_38107[(8)]);
var inst_37974 = (state_38107[(9)]);
var inst_37976 = (state_38107[(11)]);
var inst_37974__$1 = (state_38107[(2)]);
var inst_37975 = cljs.core.nth.call(null,inst_37974__$1,(0),null);
var inst_37976__$1 = cljs.core.nth.call(null,inst_37974__$1,(1),null);
var inst_37977__$1 = cljs.core._EQ_.call(null,inst_37976__$1,ch_ctrl);
var state_38107__$1 = (function (){var statearr_38118 = state_38107;
(statearr_38118[(7)] = inst_37975);

(statearr_38118[(8)] = inst_37977__$1);

(statearr_38118[(9)] = inst_37974__$1);

(statearr_38118[(11)] = inst_37976__$1);

return statearr_38118;
})();
if(inst_37977__$1){
var statearr_38119_38201 = state_38107__$1;
(statearr_38119_38201[(1)] = (5));

} else {
var statearr_38120_38202 = state_38107__$1;
(statearr_38120_38202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (54))){
var state_38107__$1 = state_38107;
var statearr_38121_38203 = state_38107__$1;
(statearr_38121_38203[(2)] = null);

(statearr_38121_38203[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (15))){
var inst_37975 = (state_38107[(7)]);
var state_38107__$1 = state_38107;
var statearr_38122_38204 = state_38107__$1;
(statearr_38122_38204[(2)] = inst_37975);

(statearr_38122_38204[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (48))){
var inst_38069 = (state_38107[(2)]);
var inst_38070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38071 = [null,inst_38069];
var inst_38072 = (new cljs.core.PersistentVector(null,2,(5),inst_38070,inst_38071,null));
var state_38107__$1 = state_38107;
var statearr_38123_38205 = state_38107__$1;
(statearr_38123_38205[(2)] = inst_38072);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38107__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (50))){
var inst_38003 = (state_38107[(10)]);
var inst_38064 = (state_38107[(14)]);
var inst_38078 = error_handler.call(null,inst_38064,inst_38003);
var state_38107__$1 = state_38107;
var statearr_38124_38206 = state_38107__$1;
(statearr_38124_38206[(2)] = inst_38078);

(statearr_38124_38206[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (21))){
var state_38107__$1 = state_38107;
var statearr_38125_38207 = state_38107__$1;
(statearr_38125_38207[(2)] = null);

(statearr_38125_38207[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (31))){
var inst_38029 = (state_38107[(2)]);
var state_38107__$1 = state_38107;
var statearr_38126_38208 = state_38107__$1;
(statearr_38126_38208[(2)] = inst_38029);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38107__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (32))){
var inst_38003 = (state_38107[(10)]);
var state_38107__$1 = state_38107;
var statearr_38127_38209 = state_38107__$1;
(statearr_38127_38209[(2)] = inst_38003);

(statearr_38127_38209[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (40))){
var inst_38047 = (state_38107[(2)]);
var state_38107__$1 = state_38107;
var statearr_38128_38210 = state_38107__$1;
(statearr_38128_38210[(2)] = inst_38047);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38107__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (33))){
var inst_38003 = (state_38107[(10)]);
var inst_38031 = (state_38107[(15)]);
var inst_38035 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(server-event-msg? event-msg)",inst_38003,inst_38031,null);
var state_38107__$1 = state_38107;
var statearr_38129_38211 = state_38107__$1;
(statearr_38129_38211[(2)] = inst_38035);

(statearr_38129_38211[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (13))){
var inst_37995 = (state_38107[(2)]);
var state_38107__$1 = state_38107;
var statearr_38130_38212 = state_38107__$1;
(statearr_38130_38212[(2)] = inst_37995);

(statearr_38130_38212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (22))){
var inst_38019 = (state_38107[(2)]);
var state_38107__$1 = (function (){var statearr_38131 = state_38107;
(statearr_38131[(16)] = inst_38019);

return statearr_38131;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_38132_38213 = state_38107__$1;
(statearr_38132_38213[(1)] = (23));

} else {
var statearr_38133_38214 = state_38107__$1;
(statearr_38133_38214[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (36))){
var inst_38039 = (state_38107[(2)]);
var state_38107__$1 = state_38107;
var statearr_38134_38215 = state_38107__$1;
(statearr_38134_38215[(2)] = inst_38039);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38107__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (41))){
var inst_38003 = (state_38107[(10)]);
var state_38107__$1 = state_38107;
var statearr_38135_38216 = state_38107__$1;
(statearr_38135_38216[(2)] = inst_38003);

(statearr_38135_38216[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (43))){
var inst_38055 = (state_38107[(2)]);
var state_38107__$1 = state_38107;
var statearr_38136_38217 = state_38107__$1;
(statearr_38136_38217[(2)] = inst_38055);

(statearr_38136_38217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (29))){
var state_38107__$1 = state_38107;
var statearr_38137_38218 = state_38107__$1;
(statearr_38137_38218[(2)] = null);

(statearr_38137_38218[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (44))){
var state_38107__$1 = state_38107;
var statearr_38138_38219 = state_38107__$1;
(statearr_38138_38219[(2)] = null);

(statearr_38138_38219[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (6))){
var inst_37975 = (state_38107[(7)]);
var inst_37985 = (inst_37975 == null);
var inst_37986 = cljs.core.not.call(null,inst_37985);
var state_38107__$1 = state_38107;
if(inst_37986){
var statearr_38139_38220 = state_38107__$1;
(statearr_38139_38220[(1)] = (8));

} else {
var statearr_38140_38221 = state_38107__$1;
(statearr_38140_38221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (28))){
var inst_38003 = (state_38107[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38107,(27),Error,null,(26));
var inst_38025 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_38003);
var state_38107__$1 = state_38107;
if(cljs.core.truth_(inst_38025)){
var statearr_38141_38222 = state_38107__$1;
(statearr_38141_38222[(1)] = (29));

} else {
var statearr_38142_38223 = state_38107__$1;
(statearr_38142_38223[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (51))){
var inst_37975 = (state_38107[(7)]);
var inst_37977 = (state_38107[(8)]);
var inst_37974 = (state_38107[(9)]);
var inst_38003 = (state_38107[(10)]);
var inst_37976 = (state_38107[(11)]);
var inst_38063 = (state_38107[(17)]);
var inst_38004 = (state_38107[(12)]);
var inst_38064 = (state_38107[(14)]);
var inst_38062 = (state_38107[(18)]);
var inst_38080 = (function (){var vec__37981 = inst_38062;
var p = inst_37976;
var _QMARK_error = inst_38064;
var vec__37967 = inst_37974;
var v = inst_37975;
var temp__4655__auto__ = error_handler;
var _ = inst_38063;
var event_msg = inst_38003;
var e = inst_38064;
var temp__4657__auto__ = inst_38064;
var event = inst_38004;
var map__37980 = inst_38003;
var stop_QMARK_ = inst_37977;
return ((function (vec__37981,p,_QMARK_error,vec__37967,v,temp__4655__auto__,_,event_msg,e,temp__4657__auto__,event,map__37980,stop_QMARK_,inst_37975,inst_37977,inst_37974,inst_38003,inst_37976,inst_38063,inst_38004,inst_38064,inst_38062,state_val_38108,c__33856__auto___38192,map__37964,map__37964__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(vec__37981,p,_QMARK_error,vec__37967,v,temp__4655__auto__,_,event_msg,e,temp__4657__auto__,event,map__37980,stop_QMARK_,inst_37975,inst_37977,inst_37974,inst_38003,inst_37976,inst_38063,inst_38004,inst_38064,inst_38062,state_val_38108,c__33856__auto___38192,map__37964,map__37964__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_38081 = (new cljs.core.Delay(inst_38080,null));
var inst_38082 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init3806387547664455334.clj",1435,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_38081,null,1192130801);
var state_38107__$1 = state_38107;
var statearr_38143_38224 = state_38107__$1;
(statearr_38143_38224[(2)] = inst_38082);

(statearr_38143_38224[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (25))){
var inst_38012 = (state_38107[(19)]);
var inst_38057 = (state_38107[(2)]);
var inst_38058 = event_msg_handler.call(null,inst_38057);
var inst_38059 = [inst_38058,null];
var inst_38060 = (new cljs.core.PersistentVector(null,2,(5),inst_38012,inst_38059,null));
var state_38107__$1 = state_38107;
var statearr_38144_38225 = state_38107__$1;
(statearr_38144_38225[(2)] = inst_38060);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38107__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (34))){
var inst_38037 = (state_38107[(2)]);
var state_38107__$1 = state_38107;
var statearr_38145_38226 = state_38107__$1;
(statearr_38145_38226[(2)] = inst_38037);

(statearr_38145_38226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (17))){
var inst_38064 = (state_38107[(14)]);
var inst_38062 = (state_38107[(18)]);
var inst_38062__$1 = (state_38107[(2)]);
var inst_38063 = cljs.core.nth.call(null,inst_38062__$1,(0),null);
var inst_38064__$1 = cljs.core.nth.call(null,inst_38062__$1,(1),null);
var state_38107__$1 = (function (){var statearr_38146 = state_38107;
(statearr_38146[(17)] = inst_38063);

(statearr_38146[(14)] = inst_38064__$1);

(statearr_38146[(18)] = inst_38062__$1);

return statearr_38146;
})();
if(cljs.core.truth_(inst_38064__$1)){
var statearr_38147_38227 = state_38107__$1;
(statearr_38147_38227[(1)] = (44));

} else {
var statearr_38148_38228 = state_38107__$1;
(statearr_38148_38228[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (3))){
var inst_38105 = (state_38107[(2)]);
var state_38107__$1 = state_38107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38107__$1,inst_38105);
} else {
if((state_val_38108 === (12))){
var state_38107__$1 = state_38107;
var statearr_38149_38229 = state_38107__$1;
(statearr_38149_38229[(2)] = false);

(statearr_38149_38229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (2))){
var inst_37970 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37971 = [ch_recv,ch_ctrl];
var inst_37972 = (new cljs.core.PersistentVector(null,2,(5),inst_37970,inst_37971,null));
var state_38107__$1 = state_38107;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38107__$1,(4),inst_37972);
} else {
if((state_val_38108 === (23))){
var state_38107__$1 = state_38107;
var statearr_38150_38230 = state_38107__$1;
(statearr_38150_38230[(2)] = null);

(statearr_38150_38230[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (47))){
var inst_38090 = (state_38107[(20)]);
var inst_38088 = (state_38107[(21)]);
var inst_38088__$1 = (state_38107[(2)]);
var inst_38089 = cljs.core.nth.call(null,inst_38088__$1,(0),null);
var inst_38090__$1 = cljs.core.nth.call(null,inst_38088__$1,(1),null);
var state_38107__$1 = (function (){var statearr_38151 = state_38107;
(statearr_38151[(20)] = inst_38090__$1);

(statearr_38151[(22)] = inst_38089);

(statearr_38151[(21)] = inst_38088__$1);

return statearr_38151;
})();
if(cljs.core.truth_(inst_38090__$1)){
var statearr_38152_38231 = state_38107__$1;
(statearr_38152_38231[(1)] = (53));

} else {
var statearr_38153_38232 = state_38107__$1;
(statearr_38153_38232[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (35))){
var inst_38049 = (state_38107[(23)]);
var inst_38049__$1 = (state_38107[(2)]);
var inst_38050 = (inst_38049__$1 == null);
var state_38107__$1 = (function (){var statearr_38154 = state_38107;
(statearr_38154[(23)] = inst_38049__$1);

return statearr_38154;
})();
if(cljs.core.truth_(inst_38050)){
var statearr_38155_38233 = state_38107__$1;
(statearr_38155_38233[(1)] = (41));

} else {
var statearr_38156_38234 = state_38107__$1;
(statearr_38156_38234[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38107,(18),Error,null,(17));
var inst_38012 = cljs.core.PersistentVector.EMPTY_NODE;
var state_38107__$1 = (function (){var statearr_38157 = state_38107;
(statearr_38157[(19)] = inst_38012);

return statearr_38157;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_38158_38235 = state_38107__$1;
(statearr_38158_38235[(1)] = (20));

} else {
var statearr_38159_38236 = state_38107__$1;
(statearr_38159_38236[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (11))){
var state_38107__$1 = state_38107;
var statearr_38160_38237 = state_38107__$1;
(statearr_38160_38237[(2)] = true);

(statearr_38160_38237[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (9))){
var state_38107__$1 = state_38107;
var statearr_38161_38238 = state_38107__$1;
(statearr_38161_38238[(2)] = false);

(statearr_38161_38238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (5))){
var state_38107__$1 = state_38107;
var statearr_38162_38239 = state_38107__$1;
(statearr_38162_38239[(2)] = null);

(statearr_38162_38239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (14))){
var inst_37975 = (state_38107[(7)]);
var inst_38000 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37975);
var state_38107__$1 = state_38107;
var statearr_38163_38240 = state_38107__$1;
(statearr_38163_38240[(2)] = inst_38000);

(statearr_38163_38240[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (45))){
var state_38107__$1 = state_38107;
var statearr_38164_38241 = state_38107__$1;
(statearr_38164_38241[(2)] = null);

(statearr_38164_38241[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (53))){
var inst_37975 = (state_38107[(7)]);
var inst_37977 = (state_38107[(8)]);
var inst_38090 = (state_38107[(20)]);
var inst_37974 = (state_38107[(9)]);
var inst_38003 = (state_38107[(10)]);
var inst_38089 = (state_38107[(22)]);
var inst_37976 = (state_38107[(11)]);
var inst_38004 = (state_38107[(12)]);
var inst_38064 = (state_38107[(14)]);
var inst_38088 = (state_38107[(21)]);
var inst_38062 = (state_38107[(18)]);
var inst_38092 = (function (){var vec__37981 = inst_38062;
var p = inst_37976;
var _QMARK_error = inst_38064;
var vec__37967 = inst_37974;
var v = inst_37975;
var _ = inst_38089;
var e2 = inst_38090;
var vec__38066 = inst_38088;
var _QMARK_error2 = inst_38090;
var event_msg = inst_38003;
var e = inst_38064;
var temp__4657__auto__ = inst_38090;
var event = inst_38004;
var map__37980 = inst_38003;
var stop_QMARK_ = inst_37977;
return ((function (vec__37981,p,_QMARK_error,vec__37967,v,_,e2,vec__38066,_QMARK_error2,event_msg,e,temp__4657__auto__,event,map__37980,stop_QMARK_,inst_37975,inst_37977,inst_38090,inst_37974,inst_38003,inst_38089,inst_37976,inst_38004,inst_38064,inst_38088,inst_38062,state_val_38108,c__33856__auto___38192,map__37964,map__37964__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(vec__37981,p,_QMARK_error,vec__37967,v,_,e2,vec__38066,_QMARK_error2,event_msg,e,temp__4657__auto__,event,map__37980,stop_QMARK_,inst_37975,inst_37977,inst_38090,inst_37974,inst_38003,inst_38089,inst_37976,inst_38004,inst_38064,inst_38088,inst_38062,state_val_38108,c__33856__auto___38192,map__37964,map__37964__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_38093 = (new cljs.core.Delay(inst_38092,null));
var inst_38094 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init3806387547664455334.clj",1437,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_38093,null,-1622238267);
var state_38107__$1 = state_38107;
var statearr_38165_38242 = state_38107__$1;
(statearr_38165_38242[(2)] = inst_38094);

(statearr_38165_38242[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (26))){
var inst_38031 = (state_38107[(15)]);
var inst_38031__$1 = (state_38107[(2)]);
var inst_38032 = (inst_38031__$1 == null);
var state_38107__$1 = (function (){var statearr_38166 = state_38107;
(statearr_38166[(15)] = inst_38031__$1);

return statearr_38166;
})();
if(cljs.core.truth_(inst_38032)){
var statearr_38167_38243 = state_38107__$1;
(statearr_38167_38243[(1)] = (32));

} else {
var statearr_38168_38244 = state_38107__$1;
(statearr_38168_38244[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (16))){
var inst_38003 = (state_38107[(10)]);
var inst_38003__$1 = (state_38107[(2)]);
var inst_38004 = cljs.core.get.call(null,inst_38003__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_38107__$1 = (function (){var statearr_38169 = state_38107;
(statearr_38169[(10)] = inst_38003__$1);

(statearr_38169[(12)] = inst_38004);

return statearr_38169;
})();
var statearr_38170_38245 = state_38107__$1;
(statearr_38170_38245[(2)] = null);

(statearr_38170_38245[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (38))){
var state_38107__$1 = state_38107;
var statearr_38171_38246 = state_38107__$1;
(statearr_38171_38246[(2)] = null);

(statearr_38171_38246[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (30))){
var state_38107__$1 = state_38107;
var statearr_38172_38247 = state_38107__$1;
(statearr_38172_38247[(2)] = taoensso.truss.impl._dummy_error);

(statearr_38172_38247[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (10))){
var inst_37998 = (state_38107[(2)]);
var state_38107__$1 = state_38107;
if(cljs.core.truth_(inst_37998)){
var statearr_38173_38248 = state_38107__$1;
(statearr_38173_38248[(1)] = (14));

} else {
var statearr_38174_38249 = state_38107__$1;
(statearr_38174_38249[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (18))){
var inst_38005 = (state_38107[(2)]);
var inst_38006 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38007 = [null,inst_38005];
var inst_38008 = (new cljs.core.PersistentVector(null,2,(5),inst_38006,inst_38007,null));
var state_38107__$1 = state_38107;
var statearr_38175_38250 = state_38107__$1;
(statearr_38175_38250[(2)] = inst_38008);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38107__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (52))){
var inst_38076 = (state_38107[(24)]);
var inst_38084 = (state_38107[(2)]);
var inst_38085 = [inst_38084,null];
var inst_38086 = (new cljs.core.PersistentVector(null,2,(5),inst_38076,inst_38085,null));
var state_38107__$1 = state_38107;
var statearr_38176_38251 = state_38107__$1;
(statearr_38176_38251[(2)] = inst_38086);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38107__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (42))){
var inst_38049 = (state_38107[(23)]);
var inst_38003 = (state_38107[(10)]);
var inst_38053 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,"(client-event-msg? event-msg)",inst_38003,inst_38049,null);
var state_38107__$1 = state_38107;
var statearr_38177_38252 = state_38107__$1;
(statearr_38177_38252[(2)] = inst_38053);

(statearr_38177_38252[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (37))){
var inst_38003 = (state_38107[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38107,(36),Error,null,(35));
var inst_38043 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_38003);
var state_38107__$1 = state_38107;
if(cljs.core.truth_(inst_38043)){
var statearr_38178_38253 = state_38107__$1;
(statearr_38178_38253[(1)] = (38));

} else {
var statearr_38179_38254 = state_38107__$1;
(statearr_38179_38254[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (8))){
var inst_37975 = (state_38107[(7)]);
var inst_37988 = inst_37975.cljs$lang$protocol_mask$partition0$;
var inst_37989 = (inst_37988 & (64));
var inst_37990 = inst_37975.cljs$core$ISeq$;
var inst_37991 = (inst_37989) || (inst_37990);
var state_38107__$1 = state_38107;
if(cljs.core.truth_(inst_37991)){
var statearr_38180_38255 = state_38107__$1;
(statearr_38180_38255[(1)] = (11));

} else {
var statearr_38181_38256 = state_38107__$1;
(statearr_38181_38256[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (49))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38107,(48),Error,null,(47));
var inst_38076 = cljs.core.PersistentVector.EMPTY_NODE;
var state_38107__$1 = (function (){var statearr_38182 = state_38107;
(statearr_38182[(24)] = inst_38076);

return statearr_38182;
})();
if(cljs.core.truth_(error_handler)){
var statearr_38183_38257 = state_38107__$1;
(statearr_38183_38257[(1)] = (50));

} else {
var statearr_38184_38258 = state_38107__$1;
(statearr_38184_38258[(1)] = (51));

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
}
}
}
}
}
}
}
}
}
});})(c__33856__auto___38192,map__37964,map__37964__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__33744__auto__,c__33856__auto___38192,map__37964,map__37964__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__33745__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__33745__auto____0 = (function (){
var statearr_38188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38188[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__33745__auto__);

(statearr_38188[(1)] = (1));

return statearr_38188;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__33745__auto____1 = (function (state_38107){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_38107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e38189){if((e38189 instanceof Object)){
var ex__33748__auto__ = e38189;
var statearr_38190_38259 = state_38107;
(statearr_38190_38259[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38260 = state_38107;
state_38107 = G__38260;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__33745__auto__ = function(state_38107){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__33745__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__33745__auto____1.call(this,state_38107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__33745__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__33745__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___38192,map__37964,map__37964__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__33858__auto__ = (function (){var statearr_38191 = f__33857__auto__.call(null);
(statearr_38191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___38192);

return statearr_38191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___38192,map__37964,map__37964__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__37964,map__37964__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__37964,map__37964__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   log any errors. Returns a `(fn stop! [])`.
 * 
 *   For performance, you'll likely want your `event-msg-handler` fn to be
 *   non-blocking (at least for slow handling operations). Clojure offers
 *   a rich variety of tools here including futures, agents, core.async,
 *   etc.
 * 
 *   Advanced users may also prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__28949__auto__ = [];
var len__28942__auto___38270 = arguments.length;
var i__28943__auto___38271 = (0);
while(true){
if((i__28943__auto___38271 < len__28942__auto___38270)){
args__28949__auto__.push((arguments[i__28943__auto___38271]));

var G__38272 = (i__28943__auto___38271 + (1));
i__28943__auto___38271 = G__38272;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((2) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28950__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__38264){
var vec__38265 = p__38264;
var map__38268 = cljs.core.nth.call(null,vec__38265,(0),null);
var map__38268__$1 = ((((!((map__38268 == null)))?((((map__38268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38268):map__38268);
var opts = map__38268__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__38268__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__38268__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq38261){
var G__38262 = cljs.core.first.call(null,seq38261);
var seq38261__$1 = cljs.core.next.call(null,seq38261);
var G__38263 = cljs.core.first.call(null,seq38261__$1);
var seq38261__$2 = cljs.core.next.call(null,seq38261__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38262,G__38263,seq38261__$2);
});

/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   log any errors. Returns a `(fn stop! [])`.
 * 
 *   For performance, you'll likely want your `event-msg-handler` fn to be
 *   non-blocking (at least for slow handling operations). Clojure offers
 *   a rich variety of tools here including futures, agents, core.async,
 *   etc.
 * 
 *   Advanced users may also prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__28949__auto__ = [];
var len__28942__auto___38282 = arguments.length;
var i__28943__auto___38283 = (0);
while(true){
if((i__28943__auto___38283 < len__28942__auto___38282)){
args__28949__auto__.push((arguments[i__28943__auto___38283]));

var G__38284 = (i__28943__auto___38283 + (1));
i__28943__auto___38283 = G__38284;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((2) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28950__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__38276){
var vec__38277 = p__38276;
var map__38280 = cljs.core.nth.call(null,vec__38277,(0),null);
var map__38280__$1 = ((((!((map__38280 == null)))?((((map__38280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38280):map__38280);
var opts = map__38280__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__38280__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__38280__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq38273){
var G__38274 = cljs.core.first.call(null,seq38273);
var seq38273__$1 = cljs.core.next.call(null,seq38273);
var G__38275 = cljs.core.first.call(null,seq38273__$1);
var seq38273__$2 = cljs.core.next.call(null,seq38273__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38274,G__38275,seq38273__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});
/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;
/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__38285,websocket_QMARK_){
var map__38288 = p__38285;
var map__38288__$1 = ((((!((map__38288 == null)))?((((map__38288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38288):map__38288);
var location = map__38288__$1;
var protocol = cljs.core.get.call(null,map__38288__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__38288__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__38288__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__27867__auto__ = path;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map