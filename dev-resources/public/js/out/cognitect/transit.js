// Compiled by ClojureScript 1.9.93 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__38296_38300 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__38297_38301 = null;
var count__38298_38302 = (0);
var i__38299_38303 = (0);
while(true){
if((i__38299_38303 < count__38298_38302)){
var k_38304 = cljs.core._nth.call(null,chunk__38297_38301,i__38299_38303);
var v_38305 = (b[k_38304]);
(a[k_38304] = v_38305);

var G__38306 = seq__38296_38300;
var G__38307 = chunk__38297_38301;
var G__38308 = count__38298_38302;
var G__38309 = (i__38299_38303 + (1));
seq__38296_38300 = G__38306;
chunk__38297_38301 = G__38307;
count__38298_38302 = G__38308;
i__38299_38303 = G__38309;
continue;
} else {
var temp__4657__auto___38310 = cljs.core.seq.call(null,seq__38296_38300);
if(temp__4657__auto___38310){
var seq__38296_38311__$1 = temp__4657__auto___38310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38296_38311__$1)){
var c__28678__auto___38312 = cljs.core.chunk_first.call(null,seq__38296_38311__$1);
var G__38313 = cljs.core.chunk_rest.call(null,seq__38296_38311__$1);
var G__38314 = c__28678__auto___38312;
var G__38315 = cljs.core.count.call(null,c__28678__auto___38312);
var G__38316 = (0);
seq__38296_38300 = G__38313;
chunk__38297_38301 = G__38314;
count__38298_38302 = G__38315;
i__38299_38303 = G__38316;
continue;
} else {
var k_38317 = cljs.core.first.call(null,seq__38296_38311__$1);
var v_38318 = (b[k_38317]);
(a[k_38317] = v_38318);

var G__38319 = cljs.core.next.call(null,seq__38296_38311__$1);
var G__38320 = null;
var G__38321 = (0);
var G__38322 = (0);
seq__38296_38300 = G__38319;
chunk__38297_38301 = G__38320;
count__38298_38302 = G__38321;
i__38299_38303 = G__38322;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args38323 = [];
var len__28942__auto___38326 = arguments.length;
var i__28943__auto___38327 = (0);
while(true){
if((i__28943__auto___38327 < len__28942__auto___38326)){
args38323.push((arguments[i__28943__auto___38327]));

var G__38328 = (i__28943__auto___38327 + (1));
i__28943__auto___38327 = G__38328;
continue;
} else {
}
break;
}

var G__38325 = args38323.length;
switch (G__38325) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38323.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__38330 = (i + (2));
var G__38331 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__38330;
ret = G__38331;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__38332_38336 = cljs.core.seq.call(null,v);
var chunk__38333_38337 = null;
var count__38334_38338 = (0);
var i__38335_38339 = (0);
while(true){
if((i__38335_38339 < count__38334_38338)){
var x_38340 = cljs.core._nth.call(null,chunk__38333_38337,i__38335_38339);
ret.push(x_38340);

var G__38341 = seq__38332_38336;
var G__38342 = chunk__38333_38337;
var G__38343 = count__38334_38338;
var G__38344 = (i__38335_38339 + (1));
seq__38332_38336 = G__38341;
chunk__38333_38337 = G__38342;
count__38334_38338 = G__38343;
i__38335_38339 = G__38344;
continue;
} else {
var temp__4657__auto___38345 = cljs.core.seq.call(null,seq__38332_38336);
if(temp__4657__auto___38345){
var seq__38332_38346__$1 = temp__4657__auto___38345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38332_38346__$1)){
var c__28678__auto___38347 = cljs.core.chunk_first.call(null,seq__38332_38346__$1);
var G__38348 = cljs.core.chunk_rest.call(null,seq__38332_38346__$1);
var G__38349 = c__28678__auto___38347;
var G__38350 = cljs.core.count.call(null,c__28678__auto___38347);
var G__38351 = (0);
seq__38332_38336 = G__38348;
chunk__38333_38337 = G__38349;
count__38334_38338 = G__38350;
i__38335_38339 = G__38351;
continue;
} else {
var x_38352 = cljs.core.first.call(null,seq__38332_38346__$1);
ret.push(x_38352);

var G__38353 = cljs.core.next.call(null,seq__38332_38346__$1);
var G__38354 = null;
var G__38355 = (0);
var G__38356 = (0);
seq__38332_38336 = G__38353;
chunk__38333_38337 = G__38354;
count__38334_38338 = G__38355;
i__38335_38339 = G__38356;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__38357_38361 = cljs.core.seq.call(null,v);
var chunk__38358_38362 = null;
var count__38359_38363 = (0);
var i__38360_38364 = (0);
while(true){
if((i__38360_38364 < count__38359_38363)){
var x_38365 = cljs.core._nth.call(null,chunk__38358_38362,i__38360_38364);
ret.push(x_38365);

var G__38366 = seq__38357_38361;
var G__38367 = chunk__38358_38362;
var G__38368 = count__38359_38363;
var G__38369 = (i__38360_38364 + (1));
seq__38357_38361 = G__38366;
chunk__38358_38362 = G__38367;
count__38359_38363 = G__38368;
i__38360_38364 = G__38369;
continue;
} else {
var temp__4657__auto___38370 = cljs.core.seq.call(null,seq__38357_38361);
if(temp__4657__auto___38370){
var seq__38357_38371__$1 = temp__4657__auto___38370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38357_38371__$1)){
var c__28678__auto___38372 = cljs.core.chunk_first.call(null,seq__38357_38371__$1);
var G__38373 = cljs.core.chunk_rest.call(null,seq__38357_38371__$1);
var G__38374 = c__28678__auto___38372;
var G__38375 = cljs.core.count.call(null,c__28678__auto___38372);
var G__38376 = (0);
seq__38357_38361 = G__38373;
chunk__38358_38362 = G__38374;
count__38359_38363 = G__38375;
i__38360_38364 = G__38376;
continue;
} else {
var x_38377 = cljs.core.first.call(null,seq__38357_38371__$1);
ret.push(x_38377);

var G__38378 = cljs.core.next.call(null,seq__38357_38371__$1);
var G__38379 = null;
var G__38380 = (0);
var G__38381 = (0);
seq__38357_38361 = G__38378;
chunk__38358_38362 = G__38379;
count__38359_38363 = G__38380;
i__38360_38364 = G__38381;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__38382_38386 = cljs.core.seq.call(null,v);
var chunk__38383_38387 = null;
var count__38384_38388 = (0);
var i__38385_38389 = (0);
while(true){
if((i__38385_38389 < count__38384_38388)){
var x_38390 = cljs.core._nth.call(null,chunk__38383_38387,i__38385_38389);
ret.push(x_38390);

var G__38391 = seq__38382_38386;
var G__38392 = chunk__38383_38387;
var G__38393 = count__38384_38388;
var G__38394 = (i__38385_38389 + (1));
seq__38382_38386 = G__38391;
chunk__38383_38387 = G__38392;
count__38384_38388 = G__38393;
i__38385_38389 = G__38394;
continue;
} else {
var temp__4657__auto___38395 = cljs.core.seq.call(null,seq__38382_38386);
if(temp__4657__auto___38395){
var seq__38382_38396__$1 = temp__4657__auto___38395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38382_38396__$1)){
var c__28678__auto___38397 = cljs.core.chunk_first.call(null,seq__38382_38396__$1);
var G__38398 = cljs.core.chunk_rest.call(null,seq__38382_38396__$1);
var G__38399 = c__28678__auto___38397;
var G__38400 = cljs.core.count.call(null,c__28678__auto___38397);
var G__38401 = (0);
seq__38382_38386 = G__38398;
chunk__38383_38387 = G__38399;
count__38384_38388 = G__38400;
i__38385_38389 = G__38401;
continue;
} else {
var x_38402 = cljs.core.first.call(null,seq__38382_38396__$1);
ret.push(x_38402);

var G__38403 = cljs.core.next.call(null,seq__38382_38396__$1);
var G__38404 = null;
var G__38405 = (0);
var G__38406 = (0);
seq__38382_38386 = G__38403;
chunk__38383_38387 = G__38404;
count__38384_38388 = G__38405;
i__38385_38389 = G__38406;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args38407 = [];
var len__28942__auto___38422 = arguments.length;
var i__28943__auto___38423 = (0);
while(true){
if((i__28943__auto___38423 < len__28942__auto___38422)){
args38407.push((arguments[i__28943__auto___38423]));

var G__38424 = (i__28943__auto___38423 + (1));
i__28943__auto___38423 = G__38424;
continue;
} else {
}
break;
}

var G__38409 = args38407.length;
switch (G__38409) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38407.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__38410 = obj;
G__38410.push(kfn.call(null,k),vfn.call(null,v));

return G__38410;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x38411 = cljs.core.clone.call(null,handlers);
x38411.forEach = ((function (x38411,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__38412 = cljs.core.seq.call(null,coll);
var chunk__38413 = null;
var count__38414 = (0);
var i__38415 = (0);
while(true){
if((i__38415 < count__38414)){
var vec__38416 = cljs.core._nth.call(null,chunk__38413,i__38415);
var k = cljs.core.nth.call(null,vec__38416,(0),null);
var v = cljs.core.nth.call(null,vec__38416,(1),null);
f.call(null,v,k);

var G__38426 = seq__38412;
var G__38427 = chunk__38413;
var G__38428 = count__38414;
var G__38429 = (i__38415 + (1));
seq__38412 = G__38426;
chunk__38413 = G__38427;
count__38414 = G__38428;
i__38415 = G__38429;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38412);
if(temp__4657__auto__){
var seq__38412__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38412__$1)){
var c__28678__auto__ = cljs.core.chunk_first.call(null,seq__38412__$1);
var G__38430 = cljs.core.chunk_rest.call(null,seq__38412__$1);
var G__38431 = c__28678__auto__;
var G__38432 = cljs.core.count.call(null,c__28678__auto__);
var G__38433 = (0);
seq__38412 = G__38430;
chunk__38413 = G__38431;
count__38414 = G__38432;
i__38415 = G__38433;
continue;
} else {
var vec__38419 = cljs.core.first.call(null,seq__38412__$1);
var k = cljs.core.nth.call(null,vec__38419,(0),null);
var v = cljs.core.nth.call(null,vec__38419,(1),null);
f.call(null,v,k);

var G__38434 = cljs.core.next.call(null,seq__38412__$1);
var G__38435 = null;
var G__38436 = (0);
var G__38437 = (0);
seq__38412 = G__38434;
chunk__38413 = G__38435;
count__38414 = G__38436;
i__38415 = G__38437;
continue;
}
} else {
return null;
}
}
break;
}
});})(x38411,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x38411;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args38438 = [];
var len__28942__auto___38444 = arguments.length;
var i__28943__auto___38445 = (0);
while(true){
if((i__28943__auto___38445 < len__28942__auto___38444)){
args38438.push((arguments[i__28943__auto___38445]));

var G__38446 = (i__28943__auto___38445 + (1));
i__28943__auto___38445 = G__38446;
continue;
} else {
}
break;
}

var G__38440 = args38438.length;
switch (G__38440) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38438.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit38441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit38441 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta38442){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta38442 = meta38442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit38441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38443,meta38442__$1){
var self__ = this;
var _38443__$1 = this;
return (new cognitect.transit.t_cognitect$transit38441(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta38442__$1));
});

cognitect.transit.t_cognitect$transit38441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38443){
var self__ = this;
var _38443__$1 = this;
return self__.meta38442;
});

cognitect.transit.t_cognitect$transit38441.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit38441.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit38441.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit38441.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit38441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta38442","meta38442",-1975874117,null)], null);
});

cognitect.transit.t_cognitect$transit38441.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit38441.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit38441";

cognitect.transit.t_cognitect$transit38441.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cognitect.transit/t_cognitect$transit38441");
});

cognitect.transit.__GT_t_cognitect$transit38441 = (function cognitect$transit$__GT_t_cognitect$transit38441(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta38442){
return (new cognitect.transit.t_cognitect$transit38441(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta38442));
});

}

return (new cognitect.transit.t_cognitect$transit38441(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__27867__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map