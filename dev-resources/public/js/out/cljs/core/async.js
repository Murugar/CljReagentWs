// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args33901 = [];
var len__28942__auto___33907 = arguments.length;
var i__28943__auto___33908 = (0);
while(true){
if((i__28943__auto___33908 < len__28942__auto___33907)){
args33901.push((arguments[i__28943__auto___33908]));

var G__33909 = (i__28943__auto___33908 + (1));
i__28943__auto___33908 = G__33909;
continue;
} else {
}
break;
}

var G__33903 = args33901.length;
switch (G__33903) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33901.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33904 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33904 = (function (f,blockable,meta33905){
this.f = f;
this.blockable = blockable;
this.meta33905 = meta33905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33906,meta33905__$1){
var self__ = this;
var _33906__$1 = this;
return (new cljs.core.async.t_cljs$core$async33904(self__.f,self__.blockable,meta33905__$1));
});

cljs.core.async.t_cljs$core$async33904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33906){
var self__ = this;
var _33906__$1 = this;
return self__.meta33905;
});

cljs.core.async.t_cljs$core$async33904.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33904.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33905","meta33905",-1520348298,null)], null);
});

cljs.core.async.t_cljs$core$async33904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33904";

cljs.core.async.t_cljs$core$async33904.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cljs.core.async/t_cljs$core$async33904");
});

cljs.core.async.__GT_t_cljs$core$async33904 = (function cljs$core$async$__GT_t_cljs$core$async33904(f__$1,blockable__$1,meta33905){
return (new cljs.core.async.t_cljs$core$async33904(f__$1,blockable__$1,meta33905));
});

}

return (new cljs.core.async.t_cljs$core$async33904(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args33913 = [];
var len__28942__auto___33916 = arguments.length;
var i__28943__auto___33917 = (0);
while(true){
if((i__28943__auto___33917 < len__28942__auto___33916)){
args33913.push((arguments[i__28943__auto___33917]));

var G__33918 = (i__28943__auto___33917 + (1));
i__28943__auto___33917 = G__33918;
continue;
} else {
}
break;
}

var G__33915 = args33913.length;
switch (G__33915) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33913.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args33920 = [];
var len__28942__auto___33923 = arguments.length;
var i__28943__auto___33924 = (0);
while(true){
if((i__28943__auto___33924 < len__28942__auto___33923)){
args33920.push((arguments[i__28943__auto___33924]));

var G__33925 = (i__28943__auto___33924 + (1));
i__28943__auto___33924 = G__33925;
continue;
} else {
}
break;
}

var G__33922 = args33920.length;
switch (G__33922) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33920.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args33927 = [];
var len__28942__auto___33930 = arguments.length;
var i__28943__auto___33931 = (0);
while(true){
if((i__28943__auto___33931 < len__28942__auto___33930)){
args33927.push((arguments[i__28943__auto___33931]));

var G__33932 = (i__28943__auto___33931 + (1));
i__28943__auto___33931 = G__33932;
continue;
} else {
}
break;
}

var G__33929 = args33927.length;
switch (G__33929) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33927.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33934 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33934);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33934,ret){
return (function (){
return fn1.call(null,val_33934);
});})(val_33934,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args33935 = [];
var len__28942__auto___33938 = arguments.length;
var i__28943__auto___33939 = (0);
while(true){
if((i__28943__auto___33939 < len__28942__auto___33938)){
args33935.push((arguments[i__28943__auto___33939]));

var G__33940 = (i__28943__auto___33939 + (1));
i__28943__auto___33939 = G__33940;
continue;
} else {
}
break;
}

var G__33937 = args33935.length;
switch (G__33937) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33935.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28782__auto___33942 = n;
var x_33943 = (0);
while(true){
if((x_33943 < n__28782__auto___33942)){
(a[x_33943] = (0));

var G__33944 = (x_33943 + (1));
x_33943 = G__33944;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33945 = (i + (1));
i = G__33945;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33949 = (function (alt_flag,flag,meta33950){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta33950 = meta33950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33951,meta33950__$1){
var self__ = this;
var _33951__$1 = this;
return (new cljs.core.async.t_cljs$core$async33949(self__.alt_flag,self__.flag,meta33950__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33951){
var self__ = this;
var _33951__$1 = this;
return self__.meta33950;
});})(flag))
;

cljs.core.async.t_cljs$core$async33949.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33949.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33949.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33949.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33949.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33950","meta33950",-1907341745,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33949";

cljs.core.async.t_cljs$core$async33949.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cljs.core.async/t_cljs$core$async33949");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33949 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33949(alt_flag__$1,flag__$1,meta33950){
return (new cljs.core.async.t_cljs$core$async33949(alt_flag__$1,flag__$1,meta33950));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33949(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33955 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33955 = (function (alt_handler,flag,cb,meta33956){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta33956 = meta33956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33957,meta33956__$1){
var self__ = this;
var _33957__$1 = this;
return (new cljs.core.async.t_cljs$core$async33955(self__.alt_handler,self__.flag,self__.cb,meta33956__$1));
});

cljs.core.async.t_cljs$core$async33955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33957){
var self__ = this;
var _33957__$1 = this;
return self__.meta33956;
});

cljs.core.async.t_cljs$core$async33955.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33955.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33955.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33955.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33956","meta33956",-624631207,null)], null);
});

cljs.core.async.t_cljs$core$async33955.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33955";

cljs.core.async.t_cljs$core$async33955.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cljs.core.async/t_cljs$core$async33955");
});

cljs.core.async.__GT_t_cljs$core$async33955 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33955(alt_handler__$1,flag__$1,cb__$1,meta33956){
return (new cljs.core.async.t_cljs$core$async33955(alt_handler__$1,flag__$1,cb__$1,meta33956));
});

}

return (new cljs.core.async.t_cljs$core$async33955(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33958_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33958_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33959_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33959_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27867__auto__ = wport;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33960 = (i + (1));
i = G__33960;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27867__auto__ = ret;
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27855__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27855__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27855__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__28949__auto__ = [];
var len__28942__auto___33966 = arguments.length;
var i__28943__auto___33967 = (0);
while(true){
if((i__28943__auto___33967 < len__28942__auto___33966)){
args__28949__auto__.push((arguments[i__28943__auto___33967]));

var G__33968 = (i__28943__auto___33967 + (1));
i__28943__auto___33967 = G__33968;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((1) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28950__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33963){
var map__33964 = p__33963;
var map__33964__$1 = ((((!((map__33964 == null)))?((((map__33964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33964):map__33964);
var opts = map__33964__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33961){
var G__33962 = cljs.core.first.call(null,seq33961);
var seq33961__$1 = cljs.core.next.call(null,seq33961);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33962,seq33961__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args33969 = [];
var len__28942__auto___34019 = arguments.length;
var i__28943__auto___34020 = (0);
while(true){
if((i__28943__auto___34020 < len__28942__auto___34019)){
args33969.push((arguments[i__28943__auto___34020]));

var G__34021 = (i__28943__auto___34020 + (1));
i__28943__auto___34020 = G__34021;
continue;
} else {
}
break;
}

var G__33971 = args33969.length;
switch (G__33971) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33969.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33856__auto___34023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___34023){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___34023){
return (function (state_33995){
var state_val_33996 = (state_33995[(1)]);
if((state_val_33996 === (7))){
var inst_33991 = (state_33995[(2)]);
var state_33995__$1 = state_33995;
var statearr_33997_34024 = state_33995__$1;
(statearr_33997_34024[(2)] = inst_33991);

(statearr_33997_34024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (1))){
var state_33995__$1 = state_33995;
var statearr_33998_34025 = state_33995__$1;
(statearr_33998_34025[(2)] = null);

(statearr_33998_34025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (4))){
var inst_33974 = (state_33995[(7)]);
var inst_33974__$1 = (state_33995[(2)]);
var inst_33975 = (inst_33974__$1 == null);
var state_33995__$1 = (function (){var statearr_33999 = state_33995;
(statearr_33999[(7)] = inst_33974__$1);

return statearr_33999;
})();
if(cljs.core.truth_(inst_33975)){
var statearr_34000_34026 = state_33995__$1;
(statearr_34000_34026[(1)] = (5));

} else {
var statearr_34001_34027 = state_33995__$1;
(statearr_34001_34027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (13))){
var state_33995__$1 = state_33995;
var statearr_34002_34028 = state_33995__$1;
(statearr_34002_34028[(2)] = null);

(statearr_34002_34028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (6))){
var inst_33974 = (state_33995[(7)]);
var state_33995__$1 = state_33995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33995__$1,(11),to,inst_33974);
} else {
if((state_val_33996 === (3))){
var inst_33993 = (state_33995[(2)]);
var state_33995__$1 = state_33995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33995__$1,inst_33993);
} else {
if((state_val_33996 === (12))){
var state_33995__$1 = state_33995;
var statearr_34003_34029 = state_33995__$1;
(statearr_34003_34029[(2)] = null);

(statearr_34003_34029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (2))){
var state_33995__$1 = state_33995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33995__$1,(4),from);
} else {
if((state_val_33996 === (11))){
var inst_33984 = (state_33995[(2)]);
var state_33995__$1 = state_33995;
if(cljs.core.truth_(inst_33984)){
var statearr_34004_34030 = state_33995__$1;
(statearr_34004_34030[(1)] = (12));

} else {
var statearr_34005_34031 = state_33995__$1;
(statearr_34005_34031[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (9))){
var state_33995__$1 = state_33995;
var statearr_34006_34032 = state_33995__$1;
(statearr_34006_34032[(2)] = null);

(statearr_34006_34032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (5))){
var state_33995__$1 = state_33995;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34007_34033 = state_33995__$1;
(statearr_34007_34033[(1)] = (8));

} else {
var statearr_34008_34034 = state_33995__$1;
(statearr_34008_34034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (14))){
var inst_33989 = (state_33995[(2)]);
var state_33995__$1 = state_33995;
var statearr_34009_34035 = state_33995__$1;
(statearr_34009_34035[(2)] = inst_33989);

(statearr_34009_34035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (10))){
var inst_33981 = (state_33995[(2)]);
var state_33995__$1 = state_33995;
var statearr_34010_34036 = state_33995__$1;
(statearr_34010_34036[(2)] = inst_33981);

(statearr_34010_34036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (8))){
var inst_33978 = cljs.core.async.close_BANG_.call(null,to);
var state_33995__$1 = state_33995;
var statearr_34011_34037 = state_33995__$1;
(statearr_34011_34037[(2)] = inst_33978);

(statearr_34011_34037[(1)] = (10));


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
});})(c__33856__auto___34023))
;
return ((function (switch__33744__auto__,c__33856__auto___34023){
return (function() {
var cljs$core$async$state_machine__33745__auto__ = null;
var cljs$core$async$state_machine__33745__auto____0 = (function (){
var statearr_34015 = [null,null,null,null,null,null,null,null];
(statearr_34015[(0)] = cljs$core$async$state_machine__33745__auto__);

(statearr_34015[(1)] = (1));

return statearr_34015;
});
var cljs$core$async$state_machine__33745__auto____1 = (function (state_33995){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_33995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e34016){if((e34016 instanceof Object)){
var ex__33748__auto__ = e34016;
var statearr_34017_34038 = state_33995;
(statearr_34017_34038[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34039 = state_33995;
state_33995 = G__34039;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$state_machine__33745__auto__ = function(state_33995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33745__auto____1.call(this,state_33995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33745__auto____0;
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33745__auto____1;
return cljs$core$async$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___34023))
})();
var state__33858__auto__ = (function (){var statearr_34018 = f__33857__auto__.call(null);
(statearr_34018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___34023);

return statearr_34018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___34023))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34227){
var vec__34228 = p__34227;
var v = cljs.core.nth.call(null,vec__34228,(0),null);
var p = cljs.core.nth.call(null,vec__34228,(1),null);
var job = vec__34228;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33856__auto___34414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___34414,res,vec__34228,v,p,job,jobs,results){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___34414,res,vec__34228,v,p,job,jobs,results){
return (function (state_34235){
var state_val_34236 = (state_34235[(1)]);
if((state_val_34236 === (1))){
var state_34235__$1 = state_34235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34235__$1,(2),res,v);
} else {
if((state_val_34236 === (2))){
var inst_34232 = (state_34235[(2)]);
var inst_34233 = cljs.core.async.close_BANG_.call(null,res);
var state_34235__$1 = (function (){var statearr_34237 = state_34235;
(statearr_34237[(7)] = inst_34232);

return statearr_34237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34235__$1,inst_34233);
} else {
return null;
}
}
});})(c__33856__auto___34414,res,vec__34228,v,p,job,jobs,results))
;
return ((function (switch__33744__auto__,c__33856__auto___34414,res,vec__34228,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____0 = (function (){
var statearr_34241 = [null,null,null,null,null,null,null,null];
(statearr_34241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__);

(statearr_34241[(1)] = (1));

return statearr_34241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____1 = (function (state_34235){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_34235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e34242){if((e34242 instanceof Object)){
var ex__33748__auto__ = e34242;
var statearr_34243_34415 = state_34235;
(statearr_34243_34415[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34416 = state_34235;
state_34235 = G__34416;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__ = function(state_34235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____1.call(this,state_34235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___34414,res,vec__34228,v,p,job,jobs,results))
})();
var state__33858__auto__ = (function (){var statearr_34244 = f__33857__auto__.call(null);
(statearr_34244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___34414);

return statearr_34244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___34414,res,vec__34228,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34245){
var vec__34246 = p__34245;
var v = cljs.core.nth.call(null,vec__34246,(0),null);
var p = cljs.core.nth.call(null,vec__34246,(1),null);
var job = vec__34246;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28782__auto___34417 = n;
var __34418 = (0);
while(true){
if((__34418 < n__28782__auto___34417)){
var G__34249_34419 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34249_34419) {
case "compute":
var c__33856__auto___34421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34418,c__33856__auto___34421,G__34249_34419,n__28782__auto___34417,jobs,results,process,async){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (__34418,c__33856__auto___34421,G__34249_34419,n__28782__auto___34417,jobs,results,process,async){
return (function (state_34262){
var state_val_34263 = (state_34262[(1)]);
if((state_val_34263 === (1))){
var state_34262__$1 = state_34262;
var statearr_34264_34422 = state_34262__$1;
(statearr_34264_34422[(2)] = null);

(statearr_34264_34422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34263 === (2))){
var state_34262__$1 = state_34262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34262__$1,(4),jobs);
} else {
if((state_val_34263 === (3))){
var inst_34260 = (state_34262[(2)]);
var state_34262__$1 = state_34262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34262__$1,inst_34260);
} else {
if((state_val_34263 === (4))){
var inst_34252 = (state_34262[(2)]);
var inst_34253 = process.call(null,inst_34252);
var state_34262__$1 = state_34262;
if(cljs.core.truth_(inst_34253)){
var statearr_34265_34423 = state_34262__$1;
(statearr_34265_34423[(1)] = (5));

} else {
var statearr_34266_34424 = state_34262__$1;
(statearr_34266_34424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34263 === (5))){
var state_34262__$1 = state_34262;
var statearr_34267_34425 = state_34262__$1;
(statearr_34267_34425[(2)] = null);

(statearr_34267_34425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34263 === (6))){
var state_34262__$1 = state_34262;
var statearr_34268_34426 = state_34262__$1;
(statearr_34268_34426[(2)] = null);

(statearr_34268_34426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34263 === (7))){
var inst_34258 = (state_34262[(2)]);
var state_34262__$1 = state_34262;
var statearr_34269_34427 = state_34262__$1;
(statearr_34269_34427[(2)] = inst_34258);

(statearr_34269_34427[(1)] = (3));


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
});})(__34418,c__33856__auto___34421,G__34249_34419,n__28782__auto___34417,jobs,results,process,async))
;
return ((function (__34418,switch__33744__auto__,c__33856__auto___34421,G__34249_34419,n__28782__auto___34417,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____0 = (function (){
var statearr_34273 = [null,null,null,null,null,null,null];
(statearr_34273[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__);

(statearr_34273[(1)] = (1));

return statearr_34273;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____1 = (function (state_34262){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_34262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e34274){if((e34274 instanceof Object)){
var ex__33748__auto__ = e34274;
var statearr_34275_34428 = state_34262;
(statearr_34275_34428[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34429 = state_34262;
state_34262 = G__34429;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__ = function(state_34262){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____1.call(this,state_34262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__;
})()
;})(__34418,switch__33744__auto__,c__33856__auto___34421,G__34249_34419,n__28782__auto___34417,jobs,results,process,async))
})();
var state__33858__auto__ = (function (){var statearr_34276 = f__33857__auto__.call(null);
(statearr_34276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___34421);

return statearr_34276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(__34418,c__33856__auto___34421,G__34249_34419,n__28782__auto___34417,jobs,results,process,async))
);


break;
case "async":
var c__33856__auto___34430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34418,c__33856__auto___34430,G__34249_34419,n__28782__auto___34417,jobs,results,process,async){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (__34418,c__33856__auto___34430,G__34249_34419,n__28782__auto___34417,jobs,results,process,async){
return (function (state_34289){
var state_val_34290 = (state_34289[(1)]);
if((state_val_34290 === (1))){
var state_34289__$1 = state_34289;
var statearr_34291_34431 = state_34289__$1;
(statearr_34291_34431[(2)] = null);

(statearr_34291_34431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34290 === (2))){
var state_34289__$1 = state_34289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34289__$1,(4),jobs);
} else {
if((state_val_34290 === (3))){
var inst_34287 = (state_34289[(2)]);
var state_34289__$1 = state_34289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34289__$1,inst_34287);
} else {
if((state_val_34290 === (4))){
var inst_34279 = (state_34289[(2)]);
var inst_34280 = async.call(null,inst_34279);
var state_34289__$1 = state_34289;
if(cljs.core.truth_(inst_34280)){
var statearr_34292_34432 = state_34289__$1;
(statearr_34292_34432[(1)] = (5));

} else {
var statearr_34293_34433 = state_34289__$1;
(statearr_34293_34433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34290 === (5))){
var state_34289__$1 = state_34289;
var statearr_34294_34434 = state_34289__$1;
(statearr_34294_34434[(2)] = null);

(statearr_34294_34434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34290 === (6))){
var state_34289__$1 = state_34289;
var statearr_34295_34435 = state_34289__$1;
(statearr_34295_34435[(2)] = null);

(statearr_34295_34435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34290 === (7))){
var inst_34285 = (state_34289[(2)]);
var state_34289__$1 = state_34289;
var statearr_34296_34436 = state_34289__$1;
(statearr_34296_34436[(2)] = inst_34285);

(statearr_34296_34436[(1)] = (3));


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
});})(__34418,c__33856__auto___34430,G__34249_34419,n__28782__auto___34417,jobs,results,process,async))
;
return ((function (__34418,switch__33744__auto__,c__33856__auto___34430,G__34249_34419,n__28782__auto___34417,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____0 = (function (){
var statearr_34300 = [null,null,null,null,null,null,null];
(statearr_34300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__);

(statearr_34300[(1)] = (1));

return statearr_34300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____1 = (function (state_34289){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_34289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e34301){if((e34301 instanceof Object)){
var ex__33748__auto__ = e34301;
var statearr_34302_34437 = state_34289;
(statearr_34302_34437[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34438 = state_34289;
state_34289 = G__34438;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__ = function(state_34289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____1.call(this,state_34289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__;
})()
;})(__34418,switch__33744__auto__,c__33856__auto___34430,G__34249_34419,n__28782__auto___34417,jobs,results,process,async))
})();
var state__33858__auto__ = (function (){var statearr_34303 = f__33857__auto__.call(null);
(statearr_34303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___34430);

return statearr_34303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(__34418,c__33856__auto___34430,G__34249_34419,n__28782__auto___34417,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34439 = (__34418 + (1));
__34418 = G__34439;
continue;
} else {
}
break;
}

var c__33856__auto___34440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___34440,jobs,results,process,async){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___34440,jobs,results,process,async){
return (function (state_34325){
var state_val_34326 = (state_34325[(1)]);
if((state_val_34326 === (1))){
var state_34325__$1 = state_34325;
var statearr_34327_34441 = state_34325__$1;
(statearr_34327_34441[(2)] = null);

(statearr_34327_34441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (2))){
var state_34325__$1 = state_34325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34325__$1,(4),from);
} else {
if((state_val_34326 === (3))){
var inst_34323 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34325__$1,inst_34323);
} else {
if((state_val_34326 === (4))){
var inst_34306 = (state_34325[(7)]);
var inst_34306__$1 = (state_34325[(2)]);
var inst_34307 = (inst_34306__$1 == null);
var state_34325__$1 = (function (){var statearr_34328 = state_34325;
(statearr_34328[(7)] = inst_34306__$1);

return statearr_34328;
})();
if(cljs.core.truth_(inst_34307)){
var statearr_34329_34442 = state_34325__$1;
(statearr_34329_34442[(1)] = (5));

} else {
var statearr_34330_34443 = state_34325__$1;
(statearr_34330_34443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (5))){
var inst_34309 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34325__$1 = state_34325;
var statearr_34331_34444 = state_34325__$1;
(statearr_34331_34444[(2)] = inst_34309);

(statearr_34331_34444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (6))){
var inst_34306 = (state_34325[(7)]);
var inst_34311 = (state_34325[(8)]);
var inst_34311__$1 = cljs.core.async.chan.call(null,(1));
var inst_34312 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34313 = [inst_34306,inst_34311__$1];
var inst_34314 = (new cljs.core.PersistentVector(null,2,(5),inst_34312,inst_34313,null));
var state_34325__$1 = (function (){var statearr_34332 = state_34325;
(statearr_34332[(8)] = inst_34311__$1);

return statearr_34332;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34325__$1,(8),jobs,inst_34314);
} else {
if((state_val_34326 === (7))){
var inst_34321 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34333_34445 = state_34325__$1;
(statearr_34333_34445[(2)] = inst_34321);

(statearr_34333_34445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (8))){
var inst_34311 = (state_34325[(8)]);
var inst_34316 = (state_34325[(2)]);
var state_34325__$1 = (function (){var statearr_34334 = state_34325;
(statearr_34334[(9)] = inst_34316);

return statearr_34334;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34325__$1,(9),results,inst_34311);
} else {
if((state_val_34326 === (9))){
var inst_34318 = (state_34325[(2)]);
var state_34325__$1 = (function (){var statearr_34335 = state_34325;
(statearr_34335[(10)] = inst_34318);

return statearr_34335;
})();
var statearr_34336_34446 = state_34325__$1;
(statearr_34336_34446[(2)] = null);

(statearr_34336_34446[(1)] = (2));


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
});})(c__33856__auto___34440,jobs,results,process,async))
;
return ((function (switch__33744__auto__,c__33856__auto___34440,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____0 = (function (){
var statearr_34340 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34340[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__);

(statearr_34340[(1)] = (1));

return statearr_34340;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____1 = (function (state_34325){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_34325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e34341){if((e34341 instanceof Object)){
var ex__33748__auto__ = e34341;
var statearr_34342_34447 = state_34325;
(statearr_34342_34447[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34448 = state_34325;
state_34325 = G__34448;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__ = function(state_34325){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____1.call(this,state_34325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___34440,jobs,results,process,async))
})();
var state__33858__auto__ = (function (){var statearr_34343 = f__33857__auto__.call(null);
(statearr_34343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___34440);

return statearr_34343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___34440,jobs,results,process,async))
);


var c__33856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto__,jobs,results,process,async){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto__,jobs,results,process,async){
return (function (state_34381){
var state_val_34382 = (state_34381[(1)]);
if((state_val_34382 === (7))){
var inst_34377 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
var statearr_34383_34449 = state_34381__$1;
(statearr_34383_34449[(2)] = inst_34377);

(statearr_34383_34449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (20))){
var state_34381__$1 = state_34381;
var statearr_34384_34450 = state_34381__$1;
(statearr_34384_34450[(2)] = null);

(statearr_34384_34450[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (1))){
var state_34381__$1 = state_34381;
var statearr_34385_34451 = state_34381__$1;
(statearr_34385_34451[(2)] = null);

(statearr_34385_34451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (4))){
var inst_34346 = (state_34381[(7)]);
var inst_34346__$1 = (state_34381[(2)]);
var inst_34347 = (inst_34346__$1 == null);
var state_34381__$1 = (function (){var statearr_34386 = state_34381;
(statearr_34386[(7)] = inst_34346__$1);

return statearr_34386;
})();
if(cljs.core.truth_(inst_34347)){
var statearr_34387_34452 = state_34381__$1;
(statearr_34387_34452[(1)] = (5));

} else {
var statearr_34388_34453 = state_34381__$1;
(statearr_34388_34453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (15))){
var inst_34359 = (state_34381[(8)]);
var state_34381__$1 = state_34381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34381__$1,(18),to,inst_34359);
} else {
if((state_val_34382 === (21))){
var inst_34372 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
var statearr_34389_34454 = state_34381__$1;
(statearr_34389_34454[(2)] = inst_34372);

(statearr_34389_34454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (13))){
var inst_34374 = (state_34381[(2)]);
var state_34381__$1 = (function (){var statearr_34390 = state_34381;
(statearr_34390[(9)] = inst_34374);

return statearr_34390;
})();
var statearr_34391_34455 = state_34381__$1;
(statearr_34391_34455[(2)] = null);

(statearr_34391_34455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (6))){
var inst_34346 = (state_34381[(7)]);
var state_34381__$1 = state_34381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34381__$1,(11),inst_34346);
} else {
if((state_val_34382 === (17))){
var inst_34367 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
if(cljs.core.truth_(inst_34367)){
var statearr_34392_34456 = state_34381__$1;
(statearr_34392_34456[(1)] = (19));

} else {
var statearr_34393_34457 = state_34381__$1;
(statearr_34393_34457[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (3))){
var inst_34379 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34381__$1,inst_34379);
} else {
if((state_val_34382 === (12))){
var inst_34356 = (state_34381[(10)]);
var state_34381__$1 = state_34381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34381__$1,(14),inst_34356);
} else {
if((state_val_34382 === (2))){
var state_34381__$1 = state_34381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34381__$1,(4),results);
} else {
if((state_val_34382 === (19))){
var state_34381__$1 = state_34381;
var statearr_34394_34458 = state_34381__$1;
(statearr_34394_34458[(2)] = null);

(statearr_34394_34458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (11))){
var inst_34356 = (state_34381[(2)]);
var state_34381__$1 = (function (){var statearr_34395 = state_34381;
(statearr_34395[(10)] = inst_34356);

return statearr_34395;
})();
var statearr_34396_34459 = state_34381__$1;
(statearr_34396_34459[(2)] = null);

(statearr_34396_34459[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (9))){
var state_34381__$1 = state_34381;
var statearr_34397_34460 = state_34381__$1;
(statearr_34397_34460[(2)] = null);

(statearr_34397_34460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (5))){
var state_34381__$1 = state_34381;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34398_34461 = state_34381__$1;
(statearr_34398_34461[(1)] = (8));

} else {
var statearr_34399_34462 = state_34381__$1;
(statearr_34399_34462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (14))){
var inst_34359 = (state_34381[(8)]);
var inst_34361 = (state_34381[(11)]);
var inst_34359__$1 = (state_34381[(2)]);
var inst_34360 = (inst_34359__$1 == null);
var inst_34361__$1 = cljs.core.not.call(null,inst_34360);
var state_34381__$1 = (function (){var statearr_34400 = state_34381;
(statearr_34400[(8)] = inst_34359__$1);

(statearr_34400[(11)] = inst_34361__$1);

return statearr_34400;
})();
if(inst_34361__$1){
var statearr_34401_34463 = state_34381__$1;
(statearr_34401_34463[(1)] = (15));

} else {
var statearr_34402_34464 = state_34381__$1;
(statearr_34402_34464[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (16))){
var inst_34361 = (state_34381[(11)]);
var state_34381__$1 = state_34381;
var statearr_34403_34465 = state_34381__$1;
(statearr_34403_34465[(2)] = inst_34361);

(statearr_34403_34465[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (10))){
var inst_34353 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
var statearr_34404_34466 = state_34381__$1;
(statearr_34404_34466[(2)] = inst_34353);

(statearr_34404_34466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (18))){
var inst_34364 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
var statearr_34405_34467 = state_34381__$1;
(statearr_34405_34467[(2)] = inst_34364);

(statearr_34405_34467[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (8))){
var inst_34350 = cljs.core.async.close_BANG_.call(null,to);
var state_34381__$1 = state_34381;
var statearr_34406_34468 = state_34381__$1;
(statearr_34406_34468[(2)] = inst_34350);

(statearr_34406_34468[(1)] = (10));


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
});})(c__33856__auto__,jobs,results,process,async))
;
return ((function (switch__33744__auto__,c__33856__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____0 = (function (){
var statearr_34410 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34410[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__);

(statearr_34410[(1)] = (1));

return statearr_34410;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____1 = (function (state_34381){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_34381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e34411){if((e34411 instanceof Object)){
var ex__33748__auto__ = e34411;
var statearr_34412_34469 = state_34381;
(statearr_34412_34469[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34470 = state_34381;
state_34381 = G__34470;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__ = function(state_34381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____1.call(this,state_34381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto__,jobs,results,process,async))
})();
var state__33858__auto__ = (function (){var statearr_34413 = f__33857__auto__.call(null);
(statearr_34413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto__);

return statearr_34413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto__,jobs,results,process,async))
);

return c__33856__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args34471 = [];
var len__28942__auto___34474 = arguments.length;
var i__28943__auto___34475 = (0);
while(true){
if((i__28943__auto___34475 < len__28942__auto___34474)){
args34471.push((arguments[i__28943__auto___34475]));

var G__34476 = (i__28943__auto___34475 + (1));
i__28943__auto___34475 = G__34476;
continue;
} else {
}
break;
}

var G__34473 = args34471.length;
switch (G__34473) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34471.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args34478 = [];
var len__28942__auto___34481 = arguments.length;
var i__28943__auto___34482 = (0);
while(true){
if((i__28943__auto___34482 < len__28942__auto___34481)){
args34478.push((arguments[i__28943__auto___34482]));

var G__34483 = (i__28943__auto___34482 + (1));
i__28943__auto___34482 = G__34483;
continue;
} else {
}
break;
}

var G__34480 = args34478.length;
switch (G__34480) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34478.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args34485 = [];
var len__28942__auto___34538 = arguments.length;
var i__28943__auto___34539 = (0);
while(true){
if((i__28943__auto___34539 < len__28942__auto___34538)){
args34485.push((arguments[i__28943__auto___34539]));

var G__34540 = (i__28943__auto___34539 + (1));
i__28943__auto___34539 = G__34540;
continue;
} else {
}
break;
}

var G__34487 = args34485.length;
switch (G__34487) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34485.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33856__auto___34542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___34542,tc,fc){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___34542,tc,fc){
return (function (state_34513){
var state_val_34514 = (state_34513[(1)]);
if((state_val_34514 === (7))){
var inst_34509 = (state_34513[(2)]);
var state_34513__$1 = state_34513;
var statearr_34515_34543 = state_34513__$1;
(statearr_34515_34543[(2)] = inst_34509);

(statearr_34515_34543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (1))){
var state_34513__$1 = state_34513;
var statearr_34516_34544 = state_34513__$1;
(statearr_34516_34544[(2)] = null);

(statearr_34516_34544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (4))){
var inst_34490 = (state_34513[(7)]);
var inst_34490__$1 = (state_34513[(2)]);
var inst_34491 = (inst_34490__$1 == null);
var state_34513__$1 = (function (){var statearr_34517 = state_34513;
(statearr_34517[(7)] = inst_34490__$1);

return statearr_34517;
})();
if(cljs.core.truth_(inst_34491)){
var statearr_34518_34545 = state_34513__$1;
(statearr_34518_34545[(1)] = (5));

} else {
var statearr_34519_34546 = state_34513__$1;
(statearr_34519_34546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (13))){
var state_34513__$1 = state_34513;
var statearr_34520_34547 = state_34513__$1;
(statearr_34520_34547[(2)] = null);

(statearr_34520_34547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (6))){
var inst_34490 = (state_34513[(7)]);
var inst_34496 = p.call(null,inst_34490);
var state_34513__$1 = state_34513;
if(cljs.core.truth_(inst_34496)){
var statearr_34521_34548 = state_34513__$1;
(statearr_34521_34548[(1)] = (9));

} else {
var statearr_34522_34549 = state_34513__$1;
(statearr_34522_34549[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (3))){
var inst_34511 = (state_34513[(2)]);
var state_34513__$1 = state_34513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34513__$1,inst_34511);
} else {
if((state_val_34514 === (12))){
var state_34513__$1 = state_34513;
var statearr_34523_34550 = state_34513__$1;
(statearr_34523_34550[(2)] = null);

(statearr_34523_34550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (2))){
var state_34513__$1 = state_34513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34513__$1,(4),ch);
} else {
if((state_val_34514 === (11))){
var inst_34490 = (state_34513[(7)]);
var inst_34500 = (state_34513[(2)]);
var state_34513__$1 = state_34513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34513__$1,(8),inst_34500,inst_34490);
} else {
if((state_val_34514 === (9))){
var state_34513__$1 = state_34513;
var statearr_34524_34551 = state_34513__$1;
(statearr_34524_34551[(2)] = tc);

(statearr_34524_34551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (5))){
var inst_34493 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34494 = cljs.core.async.close_BANG_.call(null,fc);
var state_34513__$1 = (function (){var statearr_34525 = state_34513;
(statearr_34525[(8)] = inst_34493);

return statearr_34525;
})();
var statearr_34526_34552 = state_34513__$1;
(statearr_34526_34552[(2)] = inst_34494);

(statearr_34526_34552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (14))){
var inst_34507 = (state_34513[(2)]);
var state_34513__$1 = state_34513;
var statearr_34527_34553 = state_34513__$1;
(statearr_34527_34553[(2)] = inst_34507);

(statearr_34527_34553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (10))){
var state_34513__$1 = state_34513;
var statearr_34528_34554 = state_34513__$1;
(statearr_34528_34554[(2)] = fc);

(statearr_34528_34554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (8))){
var inst_34502 = (state_34513[(2)]);
var state_34513__$1 = state_34513;
if(cljs.core.truth_(inst_34502)){
var statearr_34529_34555 = state_34513__$1;
(statearr_34529_34555[(1)] = (12));

} else {
var statearr_34530_34556 = state_34513__$1;
(statearr_34530_34556[(1)] = (13));

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
});})(c__33856__auto___34542,tc,fc))
;
return ((function (switch__33744__auto__,c__33856__auto___34542,tc,fc){
return (function() {
var cljs$core$async$state_machine__33745__auto__ = null;
var cljs$core$async$state_machine__33745__auto____0 = (function (){
var statearr_34534 = [null,null,null,null,null,null,null,null,null];
(statearr_34534[(0)] = cljs$core$async$state_machine__33745__auto__);

(statearr_34534[(1)] = (1));

return statearr_34534;
});
var cljs$core$async$state_machine__33745__auto____1 = (function (state_34513){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_34513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e34535){if((e34535 instanceof Object)){
var ex__33748__auto__ = e34535;
var statearr_34536_34557 = state_34513;
(statearr_34536_34557[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34558 = state_34513;
state_34513 = G__34558;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$state_machine__33745__auto__ = function(state_34513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33745__auto____1.call(this,state_34513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33745__auto____0;
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33745__auto____1;
return cljs$core$async$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___34542,tc,fc))
})();
var state__33858__auto__ = (function (){var statearr_34537 = f__33857__auto__.call(null);
(statearr_34537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___34542);

return statearr_34537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___34542,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto__){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto__){
return (function (state_34622){
var state_val_34623 = (state_34622[(1)]);
if((state_val_34623 === (7))){
var inst_34618 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34624_34645 = state_34622__$1;
(statearr_34624_34645[(2)] = inst_34618);

(statearr_34624_34645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (1))){
var inst_34602 = init;
var state_34622__$1 = (function (){var statearr_34625 = state_34622;
(statearr_34625[(7)] = inst_34602);

return statearr_34625;
})();
var statearr_34626_34646 = state_34622__$1;
(statearr_34626_34646[(2)] = null);

(statearr_34626_34646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (4))){
var inst_34605 = (state_34622[(8)]);
var inst_34605__$1 = (state_34622[(2)]);
var inst_34606 = (inst_34605__$1 == null);
var state_34622__$1 = (function (){var statearr_34627 = state_34622;
(statearr_34627[(8)] = inst_34605__$1);

return statearr_34627;
})();
if(cljs.core.truth_(inst_34606)){
var statearr_34628_34647 = state_34622__$1;
(statearr_34628_34647[(1)] = (5));

} else {
var statearr_34629_34648 = state_34622__$1;
(statearr_34629_34648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (6))){
var inst_34605 = (state_34622[(8)]);
var inst_34602 = (state_34622[(7)]);
var inst_34609 = (state_34622[(9)]);
var inst_34609__$1 = f.call(null,inst_34602,inst_34605);
var inst_34610 = cljs.core.reduced_QMARK_.call(null,inst_34609__$1);
var state_34622__$1 = (function (){var statearr_34630 = state_34622;
(statearr_34630[(9)] = inst_34609__$1);

return statearr_34630;
})();
if(inst_34610){
var statearr_34631_34649 = state_34622__$1;
(statearr_34631_34649[(1)] = (8));

} else {
var statearr_34632_34650 = state_34622__$1;
(statearr_34632_34650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (3))){
var inst_34620 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34622__$1,inst_34620);
} else {
if((state_val_34623 === (2))){
var state_34622__$1 = state_34622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34622__$1,(4),ch);
} else {
if((state_val_34623 === (9))){
var inst_34609 = (state_34622[(9)]);
var inst_34602 = inst_34609;
var state_34622__$1 = (function (){var statearr_34633 = state_34622;
(statearr_34633[(7)] = inst_34602);

return statearr_34633;
})();
var statearr_34634_34651 = state_34622__$1;
(statearr_34634_34651[(2)] = null);

(statearr_34634_34651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (5))){
var inst_34602 = (state_34622[(7)]);
var state_34622__$1 = state_34622;
var statearr_34635_34652 = state_34622__$1;
(statearr_34635_34652[(2)] = inst_34602);

(statearr_34635_34652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (10))){
var inst_34616 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34636_34653 = state_34622__$1;
(statearr_34636_34653[(2)] = inst_34616);

(statearr_34636_34653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (8))){
var inst_34609 = (state_34622[(9)]);
var inst_34612 = cljs.core.deref.call(null,inst_34609);
var state_34622__$1 = state_34622;
var statearr_34637_34654 = state_34622__$1;
(statearr_34637_34654[(2)] = inst_34612);

(statearr_34637_34654[(1)] = (10));


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
});})(c__33856__auto__))
;
return ((function (switch__33744__auto__,c__33856__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33745__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33745__auto____0 = (function (){
var statearr_34641 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34641[(0)] = cljs$core$async$reduce_$_state_machine__33745__auto__);

(statearr_34641[(1)] = (1));

return statearr_34641;
});
var cljs$core$async$reduce_$_state_machine__33745__auto____1 = (function (state_34622){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_34622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e34642){if((e34642 instanceof Object)){
var ex__33748__auto__ = e34642;
var statearr_34643_34655 = state_34622;
(statearr_34643_34655[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34656 = state_34622;
state_34622 = G__34656;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33745__auto__ = function(state_34622){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33745__auto____1.call(this,state_34622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33745__auto____0;
cljs$core$async$reduce_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33745__auto____1;
return cljs$core$async$reduce_$_state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto__))
})();
var state__33858__auto__ = (function (){var statearr_34644 = f__33857__auto__.call(null);
(statearr_34644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto__);

return statearr_34644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto__))
);

return c__33856__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args34657 = [];
var len__28942__auto___34709 = arguments.length;
var i__28943__auto___34710 = (0);
while(true){
if((i__28943__auto___34710 < len__28942__auto___34709)){
args34657.push((arguments[i__28943__auto___34710]));

var G__34711 = (i__28943__auto___34710 + (1));
i__28943__auto___34710 = G__34711;
continue;
} else {
}
break;
}

var G__34659 = args34657.length;
switch (G__34659) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34657.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto__){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto__){
return (function (state_34684){
var state_val_34685 = (state_34684[(1)]);
if((state_val_34685 === (7))){
var inst_34666 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34686_34713 = state_34684__$1;
(statearr_34686_34713[(2)] = inst_34666);

(statearr_34686_34713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (1))){
var inst_34660 = cljs.core.seq.call(null,coll);
var inst_34661 = inst_34660;
var state_34684__$1 = (function (){var statearr_34687 = state_34684;
(statearr_34687[(7)] = inst_34661);

return statearr_34687;
})();
var statearr_34688_34714 = state_34684__$1;
(statearr_34688_34714[(2)] = null);

(statearr_34688_34714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (4))){
var inst_34661 = (state_34684[(7)]);
var inst_34664 = cljs.core.first.call(null,inst_34661);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34684__$1,(7),ch,inst_34664);
} else {
if((state_val_34685 === (13))){
var inst_34678 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34689_34715 = state_34684__$1;
(statearr_34689_34715[(2)] = inst_34678);

(statearr_34689_34715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (6))){
var inst_34669 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34669)){
var statearr_34690_34716 = state_34684__$1;
(statearr_34690_34716[(1)] = (8));

} else {
var statearr_34691_34717 = state_34684__$1;
(statearr_34691_34717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (3))){
var inst_34682 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34684__$1,inst_34682);
} else {
if((state_val_34685 === (12))){
var state_34684__$1 = state_34684;
var statearr_34692_34718 = state_34684__$1;
(statearr_34692_34718[(2)] = null);

(statearr_34692_34718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (2))){
var inst_34661 = (state_34684[(7)]);
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34661)){
var statearr_34693_34719 = state_34684__$1;
(statearr_34693_34719[(1)] = (4));

} else {
var statearr_34694_34720 = state_34684__$1;
(statearr_34694_34720[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (11))){
var inst_34675 = cljs.core.async.close_BANG_.call(null,ch);
var state_34684__$1 = state_34684;
var statearr_34695_34721 = state_34684__$1;
(statearr_34695_34721[(2)] = inst_34675);

(statearr_34695_34721[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (9))){
var state_34684__$1 = state_34684;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34696_34722 = state_34684__$1;
(statearr_34696_34722[(1)] = (11));

} else {
var statearr_34697_34723 = state_34684__$1;
(statearr_34697_34723[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (5))){
var inst_34661 = (state_34684[(7)]);
var state_34684__$1 = state_34684;
var statearr_34698_34724 = state_34684__$1;
(statearr_34698_34724[(2)] = inst_34661);

(statearr_34698_34724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (10))){
var inst_34680 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34699_34725 = state_34684__$1;
(statearr_34699_34725[(2)] = inst_34680);

(statearr_34699_34725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (8))){
var inst_34661 = (state_34684[(7)]);
var inst_34671 = cljs.core.next.call(null,inst_34661);
var inst_34661__$1 = inst_34671;
var state_34684__$1 = (function (){var statearr_34700 = state_34684;
(statearr_34700[(7)] = inst_34661__$1);

return statearr_34700;
})();
var statearr_34701_34726 = state_34684__$1;
(statearr_34701_34726[(2)] = null);

(statearr_34701_34726[(1)] = (2));


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
});})(c__33856__auto__))
;
return ((function (switch__33744__auto__,c__33856__auto__){
return (function() {
var cljs$core$async$state_machine__33745__auto__ = null;
var cljs$core$async$state_machine__33745__auto____0 = (function (){
var statearr_34705 = [null,null,null,null,null,null,null,null];
(statearr_34705[(0)] = cljs$core$async$state_machine__33745__auto__);

(statearr_34705[(1)] = (1));

return statearr_34705;
});
var cljs$core$async$state_machine__33745__auto____1 = (function (state_34684){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_34684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e34706){if((e34706 instanceof Object)){
var ex__33748__auto__ = e34706;
var statearr_34707_34727 = state_34684;
(statearr_34707_34727[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34728 = state_34684;
state_34684 = G__34728;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$state_machine__33745__auto__ = function(state_34684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33745__auto____1.call(this,state_34684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33745__auto____0;
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33745__auto____1;
return cljs$core$async$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto__))
})();
var state__33858__auto__ = (function (){var statearr_34708 = f__33857__auto__.call(null);
(statearr_34708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto__);

return statearr_34708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto__))
);

return c__33856__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28530__auto__ = (((_ == null))?null:_);
var m__28531__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,_);
} else {
var m__28531__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28530__auto__ = (((m == null))?null:m);
var m__28531__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28531__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28530__auto__ = (((m == null))?null:m);
var m__28531__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,m,ch);
} else {
var m__28531__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28530__auto__ = (((m == null))?null:m);
var m__28531__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,m);
} else {
var m__28531__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34954 = (function (mult,ch,cs,meta34955){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta34955 = meta34955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34956,meta34955__$1){
var self__ = this;
var _34956__$1 = this;
return (new cljs.core.async.t_cljs$core$async34954(self__.mult,self__.ch,self__.cs,meta34955__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34956){
var self__ = this;
var _34956__$1 = this;
return self__.meta34955;
});})(cs))
;

cljs.core.async.t_cljs$core$async34954.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34954.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34954.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async34954.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34954.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34954.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34954.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34955","meta34955",-422748298,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34954";

cljs.core.async.t_cljs$core$async34954.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cljs.core.async/t_cljs$core$async34954");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34954 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34954(mult__$1,ch__$1,cs__$1,meta34955){
return (new cljs.core.async.t_cljs$core$async34954(mult__$1,ch__$1,cs__$1,meta34955));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34954(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33856__auto___35179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___35179,cs,m,dchan,dctr,done){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___35179,cs,m,dchan,dctr,done){
return (function (state_35091){
var state_val_35092 = (state_35091[(1)]);
if((state_val_35092 === (7))){
var inst_35087 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35093_35180 = state_35091__$1;
(statearr_35093_35180[(2)] = inst_35087);

(statearr_35093_35180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (20))){
var inst_34990 = (state_35091[(7)]);
var inst_35002 = cljs.core.first.call(null,inst_34990);
var inst_35003 = cljs.core.nth.call(null,inst_35002,(0),null);
var inst_35004 = cljs.core.nth.call(null,inst_35002,(1),null);
var state_35091__$1 = (function (){var statearr_35094 = state_35091;
(statearr_35094[(8)] = inst_35003);

return statearr_35094;
})();
if(cljs.core.truth_(inst_35004)){
var statearr_35095_35181 = state_35091__$1;
(statearr_35095_35181[(1)] = (22));

} else {
var statearr_35096_35182 = state_35091__$1;
(statearr_35096_35182[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (27))){
var inst_35039 = (state_35091[(9)]);
var inst_34959 = (state_35091[(10)]);
var inst_35032 = (state_35091[(11)]);
var inst_35034 = (state_35091[(12)]);
var inst_35039__$1 = cljs.core._nth.call(null,inst_35032,inst_35034);
var inst_35040 = cljs.core.async.put_BANG_.call(null,inst_35039__$1,inst_34959,done);
var state_35091__$1 = (function (){var statearr_35097 = state_35091;
(statearr_35097[(9)] = inst_35039__$1);

return statearr_35097;
})();
if(cljs.core.truth_(inst_35040)){
var statearr_35098_35183 = state_35091__$1;
(statearr_35098_35183[(1)] = (30));

} else {
var statearr_35099_35184 = state_35091__$1;
(statearr_35099_35184[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (1))){
var state_35091__$1 = state_35091;
var statearr_35100_35185 = state_35091__$1;
(statearr_35100_35185[(2)] = null);

(statearr_35100_35185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (24))){
var inst_34990 = (state_35091[(7)]);
var inst_35009 = (state_35091[(2)]);
var inst_35010 = cljs.core.next.call(null,inst_34990);
var inst_34968 = inst_35010;
var inst_34969 = null;
var inst_34970 = (0);
var inst_34971 = (0);
var state_35091__$1 = (function (){var statearr_35101 = state_35091;
(statearr_35101[(13)] = inst_34971);

(statearr_35101[(14)] = inst_34969);

(statearr_35101[(15)] = inst_35009);

(statearr_35101[(16)] = inst_34968);

(statearr_35101[(17)] = inst_34970);

return statearr_35101;
})();
var statearr_35102_35186 = state_35091__$1;
(statearr_35102_35186[(2)] = null);

(statearr_35102_35186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (39))){
var state_35091__$1 = state_35091;
var statearr_35106_35187 = state_35091__$1;
(statearr_35106_35187[(2)] = null);

(statearr_35106_35187[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (4))){
var inst_34959 = (state_35091[(10)]);
var inst_34959__$1 = (state_35091[(2)]);
var inst_34960 = (inst_34959__$1 == null);
var state_35091__$1 = (function (){var statearr_35107 = state_35091;
(statearr_35107[(10)] = inst_34959__$1);

return statearr_35107;
})();
if(cljs.core.truth_(inst_34960)){
var statearr_35108_35188 = state_35091__$1;
(statearr_35108_35188[(1)] = (5));

} else {
var statearr_35109_35189 = state_35091__$1;
(statearr_35109_35189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (15))){
var inst_34971 = (state_35091[(13)]);
var inst_34969 = (state_35091[(14)]);
var inst_34968 = (state_35091[(16)]);
var inst_34970 = (state_35091[(17)]);
var inst_34986 = (state_35091[(2)]);
var inst_34987 = (inst_34971 + (1));
var tmp35103 = inst_34969;
var tmp35104 = inst_34968;
var tmp35105 = inst_34970;
var inst_34968__$1 = tmp35104;
var inst_34969__$1 = tmp35103;
var inst_34970__$1 = tmp35105;
var inst_34971__$1 = inst_34987;
var state_35091__$1 = (function (){var statearr_35110 = state_35091;
(statearr_35110[(13)] = inst_34971__$1);

(statearr_35110[(14)] = inst_34969__$1);

(statearr_35110[(18)] = inst_34986);

(statearr_35110[(16)] = inst_34968__$1);

(statearr_35110[(17)] = inst_34970__$1);

return statearr_35110;
})();
var statearr_35111_35190 = state_35091__$1;
(statearr_35111_35190[(2)] = null);

(statearr_35111_35190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (21))){
var inst_35013 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35115_35191 = state_35091__$1;
(statearr_35115_35191[(2)] = inst_35013);

(statearr_35115_35191[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (31))){
var inst_35039 = (state_35091[(9)]);
var inst_35043 = done.call(null,null);
var inst_35044 = cljs.core.async.untap_STAR_.call(null,m,inst_35039);
var state_35091__$1 = (function (){var statearr_35116 = state_35091;
(statearr_35116[(19)] = inst_35043);

return statearr_35116;
})();
var statearr_35117_35192 = state_35091__$1;
(statearr_35117_35192[(2)] = inst_35044);

(statearr_35117_35192[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (32))){
var inst_35033 = (state_35091[(20)]);
var inst_35032 = (state_35091[(11)]);
var inst_35034 = (state_35091[(12)]);
var inst_35031 = (state_35091[(21)]);
var inst_35046 = (state_35091[(2)]);
var inst_35047 = (inst_35034 + (1));
var tmp35112 = inst_35033;
var tmp35113 = inst_35032;
var tmp35114 = inst_35031;
var inst_35031__$1 = tmp35114;
var inst_35032__$1 = tmp35113;
var inst_35033__$1 = tmp35112;
var inst_35034__$1 = inst_35047;
var state_35091__$1 = (function (){var statearr_35118 = state_35091;
(statearr_35118[(20)] = inst_35033__$1);

(statearr_35118[(11)] = inst_35032__$1);

(statearr_35118[(12)] = inst_35034__$1);

(statearr_35118[(22)] = inst_35046);

(statearr_35118[(21)] = inst_35031__$1);

return statearr_35118;
})();
var statearr_35119_35193 = state_35091__$1;
(statearr_35119_35193[(2)] = null);

(statearr_35119_35193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (40))){
var inst_35059 = (state_35091[(23)]);
var inst_35063 = done.call(null,null);
var inst_35064 = cljs.core.async.untap_STAR_.call(null,m,inst_35059);
var state_35091__$1 = (function (){var statearr_35120 = state_35091;
(statearr_35120[(24)] = inst_35063);

return statearr_35120;
})();
var statearr_35121_35194 = state_35091__$1;
(statearr_35121_35194[(2)] = inst_35064);

(statearr_35121_35194[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (33))){
var inst_35050 = (state_35091[(25)]);
var inst_35052 = cljs.core.chunked_seq_QMARK_.call(null,inst_35050);
var state_35091__$1 = state_35091;
if(inst_35052){
var statearr_35122_35195 = state_35091__$1;
(statearr_35122_35195[(1)] = (36));

} else {
var statearr_35123_35196 = state_35091__$1;
(statearr_35123_35196[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (13))){
var inst_34980 = (state_35091[(26)]);
var inst_34983 = cljs.core.async.close_BANG_.call(null,inst_34980);
var state_35091__$1 = state_35091;
var statearr_35124_35197 = state_35091__$1;
(statearr_35124_35197[(2)] = inst_34983);

(statearr_35124_35197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (22))){
var inst_35003 = (state_35091[(8)]);
var inst_35006 = cljs.core.async.close_BANG_.call(null,inst_35003);
var state_35091__$1 = state_35091;
var statearr_35125_35198 = state_35091__$1;
(statearr_35125_35198[(2)] = inst_35006);

(statearr_35125_35198[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (36))){
var inst_35050 = (state_35091[(25)]);
var inst_35054 = cljs.core.chunk_first.call(null,inst_35050);
var inst_35055 = cljs.core.chunk_rest.call(null,inst_35050);
var inst_35056 = cljs.core.count.call(null,inst_35054);
var inst_35031 = inst_35055;
var inst_35032 = inst_35054;
var inst_35033 = inst_35056;
var inst_35034 = (0);
var state_35091__$1 = (function (){var statearr_35126 = state_35091;
(statearr_35126[(20)] = inst_35033);

(statearr_35126[(11)] = inst_35032);

(statearr_35126[(12)] = inst_35034);

(statearr_35126[(21)] = inst_35031);

return statearr_35126;
})();
var statearr_35127_35199 = state_35091__$1;
(statearr_35127_35199[(2)] = null);

(statearr_35127_35199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (41))){
var inst_35050 = (state_35091[(25)]);
var inst_35066 = (state_35091[(2)]);
var inst_35067 = cljs.core.next.call(null,inst_35050);
var inst_35031 = inst_35067;
var inst_35032 = null;
var inst_35033 = (0);
var inst_35034 = (0);
var state_35091__$1 = (function (){var statearr_35128 = state_35091;
(statearr_35128[(20)] = inst_35033);

(statearr_35128[(11)] = inst_35032);

(statearr_35128[(12)] = inst_35034);

(statearr_35128[(21)] = inst_35031);

(statearr_35128[(27)] = inst_35066);

return statearr_35128;
})();
var statearr_35129_35200 = state_35091__$1;
(statearr_35129_35200[(2)] = null);

(statearr_35129_35200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (43))){
var state_35091__$1 = state_35091;
var statearr_35130_35201 = state_35091__$1;
(statearr_35130_35201[(2)] = null);

(statearr_35130_35201[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (29))){
var inst_35075 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35131_35202 = state_35091__$1;
(statearr_35131_35202[(2)] = inst_35075);

(statearr_35131_35202[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (44))){
var inst_35084 = (state_35091[(2)]);
var state_35091__$1 = (function (){var statearr_35132 = state_35091;
(statearr_35132[(28)] = inst_35084);

return statearr_35132;
})();
var statearr_35133_35203 = state_35091__$1;
(statearr_35133_35203[(2)] = null);

(statearr_35133_35203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (6))){
var inst_35023 = (state_35091[(29)]);
var inst_35022 = cljs.core.deref.call(null,cs);
var inst_35023__$1 = cljs.core.keys.call(null,inst_35022);
var inst_35024 = cljs.core.count.call(null,inst_35023__$1);
var inst_35025 = cljs.core.reset_BANG_.call(null,dctr,inst_35024);
var inst_35030 = cljs.core.seq.call(null,inst_35023__$1);
var inst_35031 = inst_35030;
var inst_35032 = null;
var inst_35033 = (0);
var inst_35034 = (0);
var state_35091__$1 = (function (){var statearr_35134 = state_35091;
(statearr_35134[(20)] = inst_35033);

(statearr_35134[(11)] = inst_35032);

(statearr_35134[(29)] = inst_35023__$1);

(statearr_35134[(12)] = inst_35034);

(statearr_35134[(21)] = inst_35031);

(statearr_35134[(30)] = inst_35025);

return statearr_35134;
})();
var statearr_35135_35204 = state_35091__$1;
(statearr_35135_35204[(2)] = null);

(statearr_35135_35204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (28))){
var inst_35050 = (state_35091[(25)]);
var inst_35031 = (state_35091[(21)]);
var inst_35050__$1 = cljs.core.seq.call(null,inst_35031);
var state_35091__$1 = (function (){var statearr_35136 = state_35091;
(statearr_35136[(25)] = inst_35050__$1);

return statearr_35136;
})();
if(inst_35050__$1){
var statearr_35137_35205 = state_35091__$1;
(statearr_35137_35205[(1)] = (33));

} else {
var statearr_35138_35206 = state_35091__$1;
(statearr_35138_35206[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (25))){
var inst_35033 = (state_35091[(20)]);
var inst_35034 = (state_35091[(12)]);
var inst_35036 = (inst_35034 < inst_35033);
var inst_35037 = inst_35036;
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_35037)){
var statearr_35139_35207 = state_35091__$1;
(statearr_35139_35207[(1)] = (27));

} else {
var statearr_35140_35208 = state_35091__$1;
(statearr_35140_35208[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (34))){
var state_35091__$1 = state_35091;
var statearr_35141_35209 = state_35091__$1;
(statearr_35141_35209[(2)] = null);

(statearr_35141_35209[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (17))){
var state_35091__$1 = state_35091;
var statearr_35142_35210 = state_35091__$1;
(statearr_35142_35210[(2)] = null);

(statearr_35142_35210[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (3))){
var inst_35089 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35091__$1,inst_35089);
} else {
if((state_val_35092 === (12))){
var inst_35018 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35143_35211 = state_35091__$1;
(statearr_35143_35211[(2)] = inst_35018);

(statearr_35143_35211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (2))){
var state_35091__$1 = state_35091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35091__$1,(4),ch);
} else {
if((state_val_35092 === (23))){
var state_35091__$1 = state_35091;
var statearr_35144_35212 = state_35091__$1;
(statearr_35144_35212[(2)] = null);

(statearr_35144_35212[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (35))){
var inst_35073 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35145_35213 = state_35091__$1;
(statearr_35145_35213[(2)] = inst_35073);

(statearr_35145_35213[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (19))){
var inst_34990 = (state_35091[(7)]);
var inst_34994 = cljs.core.chunk_first.call(null,inst_34990);
var inst_34995 = cljs.core.chunk_rest.call(null,inst_34990);
var inst_34996 = cljs.core.count.call(null,inst_34994);
var inst_34968 = inst_34995;
var inst_34969 = inst_34994;
var inst_34970 = inst_34996;
var inst_34971 = (0);
var state_35091__$1 = (function (){var statearr_35146 = state_35091;
(statearr_35146[(13)] = inst_34971);

(statearr_35146[(14)] = inst_34969);

(statearr_35146[(16)] = inst_34968);

(statearr_35146[(17)] = inst_34970);

return statearr_35146;
})();
var statearr_35147_35214 = state_35091__$1;
(statearr_35147_35214[(2)] = null);

(statearr_35147_35214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (11))){
var inst_34990 = (state_35091[(7)]);
var inst_34968 = (state_35091[(16)]);
var inst_34990__$1 = cljs.core.seq.call(null,inst_34968);
var state_35091__$1 = (function (){var statearr_35148 = state_35091;
(statearr_35148[(7)] = inst_34990__$1);

return statearr_35148;
})();
if(inst_34990__$1){
var statearr_35149_35215 = state_35091__$1;
(statearr_35149_35215[(1)] = (16));

} else {
var statearr_35150_35216 = state_35091__$1;
(statearr_35150_35216[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (9))){
var inst_35020 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35151_35217 = state_35091__$1;
(statearr_35151_35217[(2)] = inst_35020);

(statearr_35151_35217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (5))){
var inst_34966 = cljs.core.deref.call(null,cs);
var inst_34967 = cljs.core.seq.call(null,inst_34966);
var inst_34968 = inst_34967;
var inst_34969 = null;
var inst_34970 = (0);
var inst_34971 = (0);
var state_35091__$1 = (function (){var statearr_35152 = state_35091;
(statearr_35152[(13)] = inst_34971);

(statearr_35152[(14)] = inst_34969);

(statearr_35152[(16)] = inst_34968);

(statearr_35152[(17)] = inst_34970);

return statearr_35152;
})();
var statearr_35153_35218 = state_35091__$1;
(statearr_35153_35218[(2)] = null);

(statearr_35153_35218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (14))){
var state_35091__$1 = state_35091;
var statearr_35154_35219 = state_35091__$1;
(statearr_35154_35219[(2)] = null);

(statearr_35154_35219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (45))){
var inst_35081 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35155_35220 = state_35091__$1;
(statearr_35155_35220[(2)] = inst_35081);

(statearr_35155_35220[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (26))){
var inst_35023 = (state_35091[(29)]);
var inst_35077 = (state_35091[(2)]);
var inst_35078 = cljs.core.seq.call(null,inst_35023);
var state_35091__$1 = (function (){var statearr_35156 = state_35091;
(statearr_35156[(31)] = inst_35077);

return statearr_35156;
})();
if(inst_35078){
var statearr_35157_35221 = state_35091__$1;
(statearr_35157_35221[(1)] = (42));

} else {
var statearr_35158_35222 = state_35091__$1;
(statearr_35158_35222[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (16))){
var inst_34990 = (state_35091[(7)]);
var inst_34992 = cljs.core.chunked_seq_QMARK_.call(null,inst_34990);
var state_35091__$1 = state_35091;
if(inst_34992){
var statearr_35159_35223 = state_35091__$1;
(statearr_35159_35223[(1)] = (19));

} else {
var statearr_35160_35224 = state_35091__$1;
(statearr_35160_35224[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (38))){
var inst_35070 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35161_35225 = state_35091__$1;
(statearr_35161_35225[(2)] = inst_35070);

(statearr_35161_35225[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (30))){
var state_35091__$1 = state_35091;
var statearr_35162_35226 = state_35091__$1;
(statearr_35162_35226[(2)] = null);

(statearr_35162_35226[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (10))){
var inst_34971 = (state_35091[(13)]);
var inst_34969 = (state_35091[(14)]);
var inst_34979 = cljs.core._nth.call(null,inst_34969,inst_34971);
var inst_34980 = cljs.core.nth.call(null,inst_34979,(0),null);
var inst_34981 = cljs.core.nth.call(null,inst_34979,(1),null);
var state_35091__$1 = (function (){var statearr_35163 = state_35091;
(statearr_35163[(26)] = inst_34980);

return statearr_35163;
})();
if(cljs.core.truth_(inst_34981)){
var statearr_35164_35227 = state_35091__$1;
(statearr_35164_35227[(1)] = (13));

} else {
var statearr_35165_35228 = state_35091__$1;
(statearr_35165_35228[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (18))){
var inst_35016 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35166_35229 = state_35091__$1;
(statearr_35166_35229[(2)] = inst_35016);

(statearr_35166_35229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (42))){
var state_35091__$1 = state_35091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35091__$1,(45),dchan);
} else {
if((state_val_35092 === (37))){
var inst_34959 = (state_35091[(10)]);
var inst_35050 = (state_35091[(25)]);
var inst_35059 = (state_35091[(23)]);
var inst_35059__$1 = cljs.core.first.call(null,inst_35050);
var inst_35060 = cljs.core.async.put_BANG_.call(null,inst_35059__$1,inst_34959,done);
var state_35091__$1 = (function (){var statearr_35167 = state_35091;
(statearr_35167[(23)] = inst_35059__$1);

return statearr_35167;
})();
if(cljs.core.truth_(inst_35060)){
var statearr_35168_35230 = state_35091__$1;
(statearr_35168_35230[(1)] = (39));

} else {
var statearr_35169_35231 = state_35091__$1;
(statearr_35169_35231[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (8))){
var inst_34971 = (state_35091[(13)]);
var inst_34970 = (state_35091[(17)]);
var inst_34973 = (inst_34971 < inst_34970);
var inst_34974 = inst_34973;
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_34974)){
var statearr_35170_35232 = state_35091__$1;
(statearr_35170_35232[(1)] = (10));

} else {
var statearr_35171_35233 = state_35091__$1;
(statearr_35171_35233[(1)] = (11));

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
});})(c__33856__auto___35179,cs,m,dchan,dctr,done))
;
return ((function (switch__33744__auto__,c__33856__auto___35179,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33745__auto__ = null;
var cljs$core$async$mult_$_state_machine__33745__auto____0 = (function (){
var statearr_35175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35175[(0)] = cljs$core$async$mult_$_state_machine__33745__auto__);

(statearr_35175[(1)] = (1));

return statearr_35175;
});
var cljs$core$async$mult_$_state_machine__33745__auto____1 = (function (state_35091){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_35091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e35176){if((e35176 instanceof Object)){
var ex__33748__auto__ = e35176;
var statearr_35177_35234 = state_35091;
(statearr_35177_35234[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35235 = state_35091;
state_35091 = G__35235;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33745__auto__ = function(state_35091){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33745__auto____1.call(this,state_35091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33745__auto____0;
cljs$core$async$mult_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33745__auto____1;
return cljs$core$async$mult_$_state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___35179,cs,m,dchan,dctr,done))
})();
var state__33858__auto__ = (function (){var statearr_35178 = f__33857__auto__.call(null);
(statearr_35178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___35179);

return statearr_35178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___35179,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args35236 = [];
var len__28942__auto___35239 = arguments.length;
var i__28943__auto___35240 = (0);
while(true){
if((i__28943__auto___35240 < len__28942__auto___35239)){
args35236.push((arguments[i__28943__auto___35240]));

var G__35241 = (i__28943__auto___35240 + (1));
i__28943__auto___35240 = G__35241;
continue;
} else {
}
break;
}

var G__35238 = args35236.length;
switch (G__35238) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35236.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28530__auto__ = (((m == null))?null:m);
var m__28531__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,m,ch);
} else {
var m__28531__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28530__auto__ = (((m == null))?null:m);
var m__28531__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,m,ch);
} else {
var m__28531__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28530__auto__ = (((m == null))?null:m);
var m__28531__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,m);
} else {
var m__28531__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28530__auto__ = (((m == null))?null:m);
var m__28531__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,m,state_map);
} else {
var m__28531__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28530__auto__ = (((m == null))?null:m);
var m__28531__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,m,mode);
} else {
var m__28531__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28949__auto__ = [];
var len__28942__auto___35253 = arguments.length;
var i__28943__auto___35254 = (0);
while(true){
if((i__28943__auto___35254 < len__28942__auto___35253)){
args__28949__auto__.push((arguments[i__28943__auto___35254]));

var G__35255 = (i__28943__auto___35254 + (1));
i__28943__auto___35254 = G__35255;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((3) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28950__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35247){
var map__35248 = p__35247;
var map__35248__$1 = ((((!((map__35248 == null)))?((((map__35248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35248):map__35248);
var opts = map__35248__$1;
var statearr_35250_35256 = state;
(statearr_35250_35256[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__35248,map__35248__$1,opts){
return (function (val){
var statearr_35251_35257 = state;
(statearr_35251_35257[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35248,map__35248__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_35252_35258 = state;
(statearr_35252_35258[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35243){
var G__35244 = cljs.core.first.call(null,seq35243);
var seq35243__$1 = cljs.core.next.call(null,seq35243);
var G__35245 = cljs.core.first.call(null,seq35243__$1);
var seq35243__$2 = cljs.core.next.call(null,seq35243__$1);
var G__35246 = cljs.core.first.call(null,seq35243__$2);
var seq35243__$3 = cljs.core.next.call(null,seq35243__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35244,G__35245,G__35246,seq35243__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35424 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35425){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35425 = meta35425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35426,meta35425__$1){
var self__ = this;
var _35426__$1 = this;
return (new cljs.core.async.t_cljs$core$async35424(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35425__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35426){
var self__ = this;
var _35426__$1 = this;
return self__.meta35425;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35424.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35425","meta35425",1562716440,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35424";

cljs.core.async.t_cljs$core$async35424.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cljs.core.async/t_cljs$core$async35424");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35424 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35424(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35425){
return (new cljs.core.async.t_cljs$core$async35424(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35425));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35424(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33856__auto___35589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___35589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___35589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35526){
var state_val_35527 = (state_35526[(1)]);
if((state_val_35527 === (7))){
var inst_35442 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
var statearr_35528_35590 = state_35526__$1;
(statearr_35528_35590[(2)] = inst_35442);

(statearr_35528_35590[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (20))){
var inst_35454 = (state_35526[(7)]);
var state_35526__$1 = state_35526;
var statearr_35529_35591 = state_35526__$1;
(statearr_35529_35591[(2)] = inst_35454);

(statearr_35529_35591[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (27))){
var state_35526__$1 = state_35526;
var statearr_35530_35592 = state_35526__$1;
(statearr_35530_35592[(2)] = null);

(statearr_35530_35592[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (1))){
var inst_35430 = (state_35526[(8)]);
var inst_35430__$1 = calc_state.call(null);
var inst_35432 = (inst_35430__$1 == null);
var inst_35433 = cljs.core.not.call(null,inst_35432);
var state_35526__$1 = (function (){var statearr_35531 = state_35526;
(statearr_35531[(8)] = inst_35430__$1);

return statearr_35531;
})();
if(inst_35433){
var statearr_35532_35593 = state_35526__$1;
(statearr_35532_35593[(1)] = (2));

} else {
var statearr_35533_35594 = state_35526__$1;
(statearr_35533_35594[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (24))){
var inst_35486 = (state_35526[(9)]);
var inst_35500 = (state_35526[(10)]);
var inst_35477 = (state_35526[(11)]);
var inst_35500__$1 = inst_35477.call(null,inst_35486);
var state_35526__$1 = (function (){var statearr_35534 = state_35526;
(statearr_35534[(10)] = inst_35500__$1);

return statearr_35534;
})();
if(cljs.core.truth_(inst_35500__$1)){
var statearr_35535_35595 = state_35526__$1;
(statearr_35535_35595[(1)] = (29));

} else {
var statearr_35536_35596 = state_35526__$1;
(statearr_35536_35596[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (4))){
var inst_35445 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
if(cljs.core.truth_(inst_35445)){
var statearr_35537_35597 = state_35526__$1;
(statearr_35537_35597[(1)] = (8));

} else {
var statearr_35538_35598 = state_35526__$1;
(statearr_35538_35598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (15))){
var inst_35471 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
if(cljs.core.truth_(inst_35471)){
var statearr_35539_35599 = state_35526__$1;
(statearr_35539_35599[(1)] = (19));

} else {
var statearr_35540_35600 = state_35526__$1;
(statearr_35540_35600[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (21))){
var inst_35476 = (state_35526[(12)]);
var inst_35476__$1 = (state_35526[(2)]);
var inst_35477 = cljs.core.get.call(null,inst_35476__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35478 = cljs.core.get.call(null,inst_35476__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35479 = cljs.core.get.call(null,inst_35476__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35526__$1 = (function (){var statearr_35541 = state_35526;
(statearr_35541[(12)] = inst_35476__$1);

(statearr_35541[(11)] = inst_35477);

(statearr_35541[(13)] = inst_35478);

return statearr_35541;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35526__$1,(22),inst_35479);
} else {
if((state_val_35527 === (31))){
var inst_35508 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
if(cljs.core.truth_(inst_35508)){
var statearr_35542_35601 = state_35526__$1;
(statearr_35542_35601[(1)] = (32));

} else {
var statearr_35543_35602 = state_35526__$1;
(statearr_35543_35602[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (32))){
var inst_35485 = (state_35526[(14)]);
var state_35526__$1 = state_35526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35526__$1,(35),out,inst_35485);
} else {
if((state_val_35527 === (33))){
var inst_35476 = (state_35526[(12)]);
var inst_35454 = inst_35476;
var state_35526__$1 = (function (){var statearr_35544 = state_35526;
(statearr_35544[(7)] = inst_35454);

return statearr_35544;
})();
var statearr_35545_35603 = state_35526__$1;
(statearr_35545_35603[(2)] = null);

(statearr_35545_35603[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (13))){
var inst_35454 = (state_35526[(7)]);
var inst_35461 = inst_35454.cljs$lang$protocol_mask$partition0$;
var inst_35462 = (inst_35461 & (64));
var inst_35463 = inst_35454.cljs$core$ISeq$;
var inst_35464 = (inst_35462) || (inst_35463);
var state_35526__$1 = state_35526;
if(cljs.core.truth_(inst_35464)){
var statearr_35546_35604 = state_35526__$1;
(statearr_35546_35604[(1)] = (16));

} else {
var statearr_35547_35605 = state_35526__$1;
(statearr_35547_35605[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (22))){
var inst_35486 = (state_35526[(9)]);
var inst_35485 = (state_35526[(14)]);
var inst_35484 = (state_35526[(2)]);
var inst_35485__$1 = cljs.core.nth.call(null,inst_35484,(0),null);
var inst_35486__$1 = cljs.core.nth.call(null,inst_35484,(1),null);
var inst_35487 = (inst_35485__$1 == null);
var inst_35488 = cljs.core._EQ_.call(null,inst_35486__$1,change);
var inst_35489 = (inst_35487) || (inst_35488);
var state_35526__$1 = (function (){var statearr_35548 = state_35526;
(statearr_35548[(9)] = inst_35486__$1);

(statearr_35548[(14)] = inst_35485__$1);

return statearr_35548;
})();
if(cljs.core.truth_(inst_35489)){
var statearr_35549_35606 = state_35526__$1;
(statearr_35549_35606[(1)] = (23));

} else {
var statearr_35550_35607 = state_35526__$1;
(statearr_35550_35607[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (36))){
var inst_35476 = (state_35526[(12)]);
var inst_35454 = inst_35476;
var state_35526__$1 = (function (){var statearr_35551 = state_35526;
(statearr_35551[(7)] = inst_35454);

return statearr_35551;
})();
var statearr_35552_35608 = state_35526__$1;
(statearr_35552_35608[(2)] = null);

(statearr_35552_35608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (29))){
var inst_35500 = (state_35526[(10)]);
var state_35526__$1 = state_35526;
var statearr_35553_35609 = state_35526__$1;
(statearr_35553_35609[(2)] = inst_35500);

(statearr_35553_35609[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (6))){
var state_35526__$1 = state_35526;
var statearr_35554_35610 = state_35526__$1;
(statearr_35554_35610[(2)] = false);

(statearr_35554_35610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (28))){
var inst_35496 = (state_35526[(2)]);
var inst_35497 = calc_state.call(null);
var inst_35454 = inst_35497;
var state_35526__$1 = (function (){var statearr_35555 = state_35526;
(statearr_35555[(7)] = inst_35454);

(statearr_35555[(15)] = inst_35496);

return statearr_35555;
})();
var statearr_35556_35611 = state_35526__$1;
(statearr_35556_35611[(2)] = null);

(statearr_35556_35611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (25))){
var inst_35522 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
var statearr_35557_35612 = state_35526__$1;
(statearr_35557_35612[(2)] = inst_35522);

(statearr_35557_35612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (34))){
var inst_35520 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
var statearr_35558_35613 = state_35526__$1;
(statearr_35558_35613[(2)] = inst_35520);

(statearr_35558_35613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (17))){
var state_35526__$1 = state_35526;
var statearr_35559_35614 = state_35526__$1;
(statearr_35559_35614[(2)] = false);

(statearr_35559_35614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (3))){
var state_35526__$1 = state_35526;
var statearr_35560_35615 = state_35526__$1;
(statearr_35560_35615[(2)] = false);

(statearr_35560_35615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (12))){
var inst_35524 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35526__$1,inst_35524);
} else {
if((state_val_35527 === (2))){
var inst_35430 = (state_35526[(8)]);
var inst_35435 = inst_35430.cljs$lang$protocol_mask$partition0$;
var inst_35436 = (inst_35435 & (64));
var inst_35437 = inst_35430.cljs$core$ISeq$;
var inst_35438 = (inst_35436) || (inst_35437);
var state_35526__$1 = state_35526;
if(cljs.core.truth_(inst_35438)){
var statearr_35561_35616 = state_35526__$1;
(statearr_35561_35616[(1)] = (5));

} else {
var statearr_35562_35617 = state_35526__$1;
(statearr_35562_35617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (23))){
var inst_35485 = (state_35526[(14)]);
var inst_35491 = (inst_35485 == null);
var state_35526__$1 = state_35526;
if(cljs.core.truth_(inst_35491)){
var statearr_35563_35618 = state_35526__$1;
(statearr_35563_35618[(1)] = (26));

} else {
var statearr_35564_35619 = state_35526__$1;
(statearr_35564_35619[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (35))){
var inst_35511 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
if(cljs.core.truth_(inst_35511)){
var statearr_35565_35620 = state_35526__$1;
(statearr_35565_35620[(1)] = (36));

} else {
var statearr_35566_35621 = state_35526__$1;
(statearr_35566_35621[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (19))){
var inst_35454 = (state_35526[(7)]);
var inst_35473 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35454);
var state_35526__$1 = state_35526;
var statearr_35567_35622 = state_35526__$1;
(statearr_35567_35622[(2)] = inst_35473);

(statearr_35567_35622[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (11))){
var inst_35454 = (state_35526[(7)]);
var inst_35458 = (inst_35454 == null);
var inst_35459 = cljs.core.not.call(null,inst_35458);
var state_35526__$1 = state_35526;
if(inst_35459){
var statearr_35568_35623 = state_35526__$1;
(statearr_35568_35623[(1)] = (13));

} else {
var statearr_35569_35624 = state_35526__$1;
(statearr_35569_35624[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (9))){
var inst_35430 = (state_35526[(8)]);
var state_35526__$1 = state_35526;
var statearr_35570_35625 = state_35526__$1;
(statearr_35570_35625[(2)] = inst_35430);

(statearr_35570_35625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (5))){
var state_35526__$1 = state_35526;
var statearr_35571_35626 = state_35526__$1;
(statearr_35571_35626[(2)] = true);

(statearr_35571_35626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (14))){
var state_35526__$1 = state_35526;
var statearr_35572_35627 = state_35526__$1;
(statearr_35572_35627[(2)] = false);

(statearr_35572_35627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (26))){
var inst_35486 = (state_35526[(9)]);
var inst_35493 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35486);
var state_35526__$1 = state_35526;
var statearr_35573_35628 = state_35526__$1;
(statearr_35573_35628[(2)] = inst_35493);

(statearr_35573_35628[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (16))){
var state_35526__$1 = state_35526;
var statearr_35574_35629 = state_35526__$1;
(statearr_35574_35629[(2)] = true);

(statearr_35574_35629[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (38))){
var inst_35516 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
var statearr_35575_35630 = state_35526__$1;
(statearr_35575_35630[(2)] = inst_35516);

(statearr_35575_35630[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (30))){
var inst_35486 = (state_35526[(9)]);
var inst_35477 = (state_35526[(11)]);
var inst_35478 = (state_35526[(13)]);
var inst_35503 = cljs.core.empty_QMARK_.call(null,inst_35477);
var inst_35504 = inst_35478.call(null,inst_35486);
var inst_35505 = cljs.core.not.call(null,inst_35504);
var inst_35506 = (inst_35503) && (inst_35505);
var state_35526__$1 = state_35526;
var statearr_35576_35631 = state_35526__$1;
(statearr_35576_35631[(2)] = inst_35506);

(statearr_35576_35631[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (10))){
var inst_35430 = (state_35526[(8)]);
var inst_35450 = (state_35526[(2)]);
var inst_35451 = cljs.core.get.call(null,inst_35450,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35452 = cljs.core.get.call(null,inst_35450,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35453 = cljs.core.get.call(null,inst_35450,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35454 = inst_35430;
var state_35526__$1 = (function (){var statearr_35577 = state_35526;
(statearr_35577[(7)] = inst_35454);

(statearr_35577[(16)] = inst_35452);

(statearr_35577[(17)] = inst_35453);

(statearr_35577[(18)] = inst_35451);

return statearr_35577;
})();
var statearr_35578_35632 = state_35526__$1;
(statearr_35578_35632[(2)] = null);

(statearr_35578_35632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (18))){
var inst_35468 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
var statearr_35579_35633 = state_35526__$1;
(statearr_35579_35633[(2)] = inst_35468);

(statearr_35579_35633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (37))){
var state_35526__$1 = state_35526;
var statearr_35580_35634 = state_35526__$1;
(statearr_35580_35634[(2)] = null);

(statearr_35580_35634[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (8))){
var inst_35430 = (state_35526[(8)]);
var inst_35447 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35430);
var state_35526__$1 = state_35526;
var statearr_35581_35635 = state_35526__$1;
(statearr_35581_35635[(2)] = inst_35447);

(statearr_35581_35635[(1)] = (10));


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
});})(c__33856__auto___35589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33744__auto__,c__33856__auto___35589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33745__auto__ = null;
var cljs$core$async$mix_$_state_machine__33745__auto____0 = (function (){
var statearr_35585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35585[(0)] = cljs$core$async$mix_$_state_machine__33745__auto__);

(statearr_35585[(1)] = (1));

return statearr_35585;
});
var cljs$core$async$mix_$_state_machine__33745__auto____1 = (function (state_35526){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_35526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e35586){if((e35586 instanceof Object)){
var ex__33748__auto__ = e35586;
var statearr_35587_35636 = state_35526;
(statearr_35587_35636[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35637 = state_35526;
state_35526 = G__35637;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33745__auto__ = function(state_35526){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33745__auto____1.call(this,state_35526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33745__auto____0;
cljs$core$async$mix_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33745__auto____1;
return cljs$core$async$mix_$_state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___35589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33858__auto__ = (function (){var statearr_35588 = f__33857__auto__.call(null);
(statearr_35588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___35589);

return statearr_35588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___35589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28530__auto__ = (((p == null))?null:p);
var m__28531__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28531__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28530__auto__ = (((p == null))?null:p);
var m__28531__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,p,v,ch);
} else {
var m__28531__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args35638 = [];
var len__28942__auto___35641 = arguments.length;
var i__28943__auto___35642 = (0);
while(true){
if((i__28943__auto___35642 < len__28942__auto___35641)){
args35638.push((arguments[i__28943__auto___35642]));

var G__35643 = (i__28943__auto___35642 + (1));
i__28943__auto___35642 = G__35643;
continue;
} else {
}
break;
}

var G__35640 = args35638.length;
switch (G__35640) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35638.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28530__auto__ = (((p == null))?null:p);
var m__28531__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,p);
} else {
var m__28531__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28530__auto__ = (((p == null))?null:p);
var m__28531__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28530__auto__)]);
if(!((m__28531__auto__ == null))){
return m__28531__auto__.call(null,p,v);
} else {
var m__28531__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28531__auto____$1 == null))){
return m__28531__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args35646 = [];
var len__28942__auto___35771 = arguments.length;
var i__28943__auto___35772 = (0);
while(true){
if((i__28943__auto___35772 < len__28942__auto___35771)){
args35646.push((arguments[i__28943__auto___35772]));

var G__35773 = (i__28943__auto___35772 + (1));
i__28943__auto___35772 = G__35773;
continue;
} else {
}
break;
}

var G__35648 = args35646.length;
switch (G__35648) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35646.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27867__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27867__auto__,mults){
return (function (p1__35645_SHARP_){
if(cljs.core.truth_(p1__35645_SHARP_.call(null,topic))){
return p1__35645_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35645_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27867__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35649 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35650){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35650 = meta35650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35651,meta35650__$1){
var self__ = this;
var _35651__$1 = this;
return (new cljs.core.async.t_cljs$core$async35649(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35650__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35651){
var self__ = this;
var _35651__$1 = this;
return self__.meta35650;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35649.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35649.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35650","meta35650",435039319,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35649";

cljs.core.async.t_cljs$core$async35649.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cljs.core.async/t_cljs$core$async35649");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35649 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35649(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35650){
return (new cljs.core.async.t_cljs$core$async35649(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35650));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35649(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33856__auto___35775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___35775,mults,ensure_mult,p){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___35775,mults,ensure_mult,p){
return (function (state_35723){
var state_val_35724 = (state_35723[(1)]);
if((state_val_35724 === (7))){
var inst_35719 = (state_35723[(2)]);
var state_35723__$1 = state_35723;
var statearr_35725_35776 = state_35723__$1;
(statearr_35725_35776[(2)] = inst_35719);

(statearr_35725_35776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (20))){
var state_35723__$1 = state_35723;
var statearr_35726_35777 = state_35723__$1;
(statearr_35726_35777[(2)] = null);

(statearr_35726_35777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (1))){
var state_35723__$1 = state_35723;
var statearr_35727_35778 = state_35723__$1;
(statearr_35727_35778[(2)] = null);

(statearr_35727_35778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (24))){
var inst_35702 = (state_35723[(7)]);
var inst_35711 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35702);
var state_35723__$1 = state_35723;
var statearr_35728_35779 = state_35723__$1;
(statearr_35728_35779[(2)] = inst_35711);

(statearr_35728_35779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (4))){
var inst_35654 = (state_35723[(8)]);
var inst_35654__$1 = (state_35723[(2)]);
var inst_35655 = (inst_35654__$1 == null);
var state_35723__$1 = (function (){var statearr_35729 = state_35723;
(statearr_35729[(8)] = inst_35654__$1);

return statearr_35729;
})();
if(cljs.core.truth_(inst_35655)){
var statearr_35730_35780 = state_35723__$1;
(statearr_35730_35780[(1)] = (5));

} else {
var statearr_35731_35781 = state_35723__$1;
(statearr_35731_35781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (15))){
var inst_35696 = (state_35723[(2)]);
var state_35723__$1 = state_35723;
var statearr_35732_35782 = state_35723__$1;
(statearr_35732_35782[(2)] = inst_35696);

(statearr_35732_35782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (21))){
var inst_35716 = (state_35723[(2)]);
var state_35723__$1 = (function (){var statearr_35733 = state_35723;
(statearr_35733[(9)] = inst_35716);

return statearr_35733;
})();
var statearr_35734_35783 = state_35723__$1;
(statearr_35734_35783[(2)] = null);

(statearr_35734_35783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (13))){
var inst_35678 = (state_35723[(10)]);
var inst_35680 = cljs.core.chunked_seq_QMARK_.call(null,inst_35678);
var state_35723__$1 = state_35723;
if(inst_35680){
var statearr_35735_35784 = state_35723__$1;
(statearr_35735_35784[(1)] = (16));

} else {
var statearr_35736_35785 = state_35723__$1;
(statearr_35736_35785[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (22))){
var inst_35708 = (state_35723[(2)]);
var state_35723__$1 = state_35723;
if(cljs.core.truth_(inst_35708)){
var statearr_35737_35786 = state_35723__$1;
(statearr_35737_35786[(1)] = (23));

} else {
var statearr_35738_35787 = state_35723__$1;
(statearr_35738_35787[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (6))){
var inst_35654 = (state_35723[(8)]);
var inst_35702 = (state_35723[(7)]);
var inst_35704 = (state_35723[(11)]);
var inst_35702__$1 = topic_fn.call(null,inst_35654);
var inst_35703 = cljs.core.deref.call(null,mults);
var inst_35704__$1 = cljs.core.get.call(null,inst_35703,inst_35702__$1);
var state_35723__$1 = (function (){var statearr_35739 = state_35723;
(statearr_35739[(7)] = inst_35702__$1);

(statearr_35739[(11)] = inst_35704__$1);

return statearr_35739;
})();
if(cljs.core.truth_(inst_35704__$1)){
var statearr_35740_35788 = state_35723__$1;
(statearr_35740_35788[(1)] = (19));

} else {
var statearr_35741_35789 = state_35723__$1;
(statearr_35741_35789[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (25))){
var inst_35713 = (state_35723[(2)]);
var state_35723__$1 = state_35723;
var statearr_35742_35790 = state_35723__$1;
(statearr_35742_35790[(2)] = inst_35713);

(statearr_35742_35790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (17))){
var inst_35678 = (state_35723[(10)]);
var inst_35687 = cljs.core.first.call(null,inst_35678);
var inst_35688 = cljs.core.async.muxch_STAR_.call(null,inst_35687);
var inst_35689 = cljs.core.async.close_BANG_.call(null,inst_35688);
var inst_35690 = cljs.core.next.call(null,inst_35678);
var inst_35664 = inst_35690;
var inst_35665 = null;
var inst_35666 = (0);
var inst_35667 = (0);
var state_35723__$1 = (function (){var statearr_35743 = state_35723;
(statearr_35743[(12)] = inst_35667);

(statearr_35743[(13)] = inst_35666);

(statearr_35743[(14)] = inst_35689);

(statearr_35743[(15)] = inst_35665);

(statearr_35743[(16)] = inst_35664);

return statearr_35743;
})();
var statearr_35744_35791 = state_35723__$1;
(statearr_35744_35791[(2)] = null);

(statearr_35744_35791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (3))){
var inst_35721 = (state_35723[(2)]);
var state_35723__$1 = state_35723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35723__$1,inst_35721);
} else {
if((state_val_35724 === (12))){
var inst_35698 = (state_35723[(2)]);
var state_35723__$1 = state_35723;
var statearr_35745_35792 = state_35723__$1;
(statearr_35745_35792[(2)] = inst_35698);

(statearr_35745_35792[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (2))){
var state_35723__$1 = state_35723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35723__$1,(4),ch);
} else {
if((state_val_35724 === (23))){
var state_35723__$1 = state_35723;
var statearr_35746_35793 = state_35723__$1;
(statearr_35746_35793[(2)] = null);

(statearr_35746_35793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (19))){
var inst_35654 = (state_35723[(8)]);
var inst_35704 = (state_35723[(11)]);
var inst_35706 = cljs.core.async.muxch_STAR_.call(null,inst_35704);
var state_35723__$1 = state_35723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35723__$1,(22),inst_35706,inst_35654);
} else {
if((state_val_35724 === (11))){
var inst_35678 = (state_35723[(10)]);
var inst_35664 = (state_35723[(16)]);
var inst_35678__$1 = cljs.core.seq.call(null,inst_35664);
var state_35723__$1 = (function (){var statearr_35747 = state_35723;
(statearr_35747[(10)] = inst_35678__$1);

return statearr_35747;
})();
if(inst_35678__$1){
var statearr_35748_35794 = state_35723__$1;
(statearr_35748_35794[(1)] = (13));

} else {
var statearr_35749_35795 = state_35723__$1;
(statearr_35749_35795[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (9))){
var inst_35700 = (state_35723[(2)]);
var state_35723__$1 = state_35723;
var statearr_35750_35796 = state_35723__$1;
(statearr_35750_35796[(2)] = inst_35700);

(statearr_35750_35796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (5))){
var inst_35661 = cljs.core.deref.call(null,mults);
var inst_35662 = cljs.core.vals.call(null,inst_35661);
var inst_35663 = cljs.core.seq.call(null,inst_35662);
var inst_35664 = inst_35663;
var inst_35665 = null;
var inst_35666 = (0);
var inst_35667 = (0);
var state_35723__$1 = (function (){var statearr_35751 = state_35723;
(statearr_35751[(12)] = inst_35667);

(statearr_35751[(13)] = inst_35666);

(statearr_35751[(15)] = inst_35665);

(statearr_35751[(16)] = inst_35664);

return statearr_35751;
})();
var statearr_35752_35797 = state_35723__$1;
(statearr_35752_35797[(2)] = null);

(statearr_35752_35797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (14))){
var state_35723__$1 = state_35723;
var statearr_35756_35798 = state_35723__$1;
(statearr_35756_35798[(2)] = null);

(statearr_35756_35798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (16))){
var inst_35678 = (state_35723[(10)]);
var inst_35682 = cljs.core.chunk_first.call(null,inst_35678);
var inst_35683 = cljs.core.chunk_rest.call(null,inst_35678);
var inst_35684 = cljs.core.count.call(null,inst_35682);
var inst_35664 = inst_35683;
var inst_35665 = inst_35682;
var inst_35666 = inst_35684;
var inst_35667 = (0);
var state_35723__$1 = (function (){var statearr_35757 = state_35723;
(statearr_35757[(12)] = inst_35667);

(statearr_35757[(13)] = inst_35666);

(statearr_35757[(15)] = inst_35665);

(statearr_35757[(16)] = inst_35664);

return statearr_35757;
})();
var statearr_35758_35799 = state_35723__$1;
(statearr_35758_35799[(2)] = null);

(statearr_35758_35799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (10))){
var inst_35667 = (state_35723[(12)]);
var inst_35666 = (state_35723[(13)]);
var inst_35665 = (state_35723[(15)]);
var inst_35664 = (state_35723[(16)]);
var inst_35672 = cljs.core._nth.call(null,inst_35665,inst_35667);
var inst_35673 = cljs.core.async.muxch_STAR_.call(null,inst_35672);
var inst_35674 = cljs.core.async.close_BANG_.call(null,inst_35673);
var inst_35675 = (inst_35667 + (1));
var tmp35753 = inst_35666;
var tmp35754 = inst_35665;
var tmp35755 = inst_35664;
var inst_35664__$1 = tmp35755;
var inst_35665__$1 = tmp35754;
var inst_35666__$1 = tmp35753;
var inst_35667__$1 = inst_35675;
var state_35723__$1 = (function (){var statearr_35759 = state_35723;
(statearr_35759[(12)] = inst_35667__$1);

(statearr_35759[(13)] = inst_35666__$1);

(statearr_35759[(15)] = inst_35665__$1);

(statearr_35759[(17)] = inst_35674);

(statearr_35759[(16)] = inst_35664__$1);

return statearr_35759;
})();
var statearr_35760_35800 = state_35723__$1;
(statearr_35760_35800[(2)] = null);

(statearr_35760_35800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (18))){
var inst_35693 = (state_35723[(2)]);
var state_35723__$1 = state_35723;
var statearr_35761_35801 = state_35723__$1;
(statearr_35761_35801[(2)] = inst_35693);

(statearr_35761_35801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (8))){
var inst_35667 = (state_35723[(12)]);
var inst_35666 = (state_35723[(13)]);
var inst_35669 = (inst_35667 < inst_35666);
var inst_35670 = inst_35669;
var state_35723__$1 = state_35723;
if(cljs.core.truth_(inst_35670)){
var statearr_35762_35802 = state_35723__$1;
(statearr_35762_35802[(1)] = (10));

} else {
var statearr_35763_35803 = state_35723__$1;
(statearr_35763_35803[(1)] = (11));

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
});})(c__33856__auto___35775,mults,ensure_mult,p))
;
return ((function (switch__33744__auto__,c__33856__auto___35775,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33745__auto__ = null;
var cljs$core$async$state_machine__33745__auto____0 = (function (){
var statearr_35767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35767[(0)] = cljs$core$async$state_machine__33745__auto__);

(statearr_35767[(1)] = (1));

return statearr_35767;
});
var cljs$core$async$state_machine__33745__auto____1 = (function (state_35723){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_35723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e35768){if((e35768 instanceof Object)){
var ex__33748__auto__ = e35768;
var statearr_35769_35804 = state_35723;
(statearr_35769_35804[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35805 = state_35723;
state_35723 = G__35805;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$state_machine__33745__auto__ = function(state_35723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33745__auto____1.call(this,state_35723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33745__auto____0;
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33745__auto____1;
return cljs$core$async$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___35775,mults,ensure_mult,p))
})();
var state__33858__auto__ = (function (){var statearr_35770 = f__33857__auto__.call(null);
(statearr_35770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___35775);

return statearr_35770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___35775,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args35806 = [];
var len__28942__auto___35809 = arguments.length;
var i__28943__auto___35810 = (0);
while(true){
if((i__28943__auto___35810 < len__28942__auto___35809)){
args35806.push((arguments[i__28943__auto___35810]));

var G__35811 = (i__28943__auto___35810 + (1));
i__28943__auto___35810 = G__35811;
continue;
} else {
}
break;
}

var G__35808 = args35806.length;
switch (G__35808) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35806.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args35813 = [];
var len__28942__auto___35816 = arguments.length;
var i__28943__auto___35817 = (0);
while(true){
if((i__28943__auto___35817 < len__28942__auto___35816)){
args35813.push((arguments[i__28943__auto___35817]));

var G__35818 = (i__28943__auto___35817 + (1));
i__28943__auto___35817 = G__35818;
continue;
} else {
}
break;
}

var G__35815 = args35813.length;
switch (G__35815) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35813.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args35820 = [];
var len__28942__auto___35891 = arguments.length;
var i__28943__auto___35892 = (0);
while(true){
if((i__28943__auto___35892 < len__28942__auto___35891)){
args35820.push((arguments[i__28943__auto___35892]));

var G__35893 = (i__28943__auto___35892 + (1));
i__28943__auto___35892 = G__35893;
continue;
} else {
}
break;
}

var G__35822 = args35820.length;
switch (G__35822) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35820.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33856__auto___35895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___35895,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___35895,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35861){
var state_val_35862 = (state_35861[(1)]);
if((state_val_35862 === (7))){
var state_35861__$1 = state_35861;
var statearr_35863_35896 = state_35861__$1;
(statearr_35863_35896[(2)] = null);

(statearr_35863_35896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (1))){
var state_35861__$1 = state_35861;
var statearr_35864_35897 = state_35861__$1;
(statearr_35864_35897[(2)] = null);

(statearr_35864_35897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (4))){
var inst_35825 = (state_35861[(7)]);
var inst_35827 = (inst_35825 < cnt);
var state_35861__$1 = state_35861;
if(cljs.core.truth_(inst_35827)){
var statearr_35865_35898 = state_35861__$1;
(statearr_35865_35898[(1)] = (6));

} else {
var statearr_35866_35899 = state_35861__$1;
(statearr_35866_35899[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (15))){
var inst_35857 = (state_35861[(2)]);
var state_35861__$1 = state_35861;
var statearr_35867_35900 = state_35861__$1;
(statearr_35867_35900[(2)] = inst_35857);

(statearr_35867_35900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (13))){
var inst_35850 = cljs.core.async.close_BANG_.call(null,out);
var state_35861__$1 = state_35861;
var statearr_35868_35901 = state_35861__$1;
(statearr_35868_35901[(2)] = inst_35850);

(statearr_35868_35901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (6))){
var state_35861__$1 = state_35861;
var statearr_35869_35902 = state_35861__$1;
(statearr_35869_35902[(2)] = null);

(statearr_35869_35902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (3))){
var inst_35859 = (state_35861[(2)]);
var state_35861__$1 = state_35861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35861__$1,inst_35859);
} else {
if((state_val_35862 === (12))){
var inst_35847 = (state_35861[(8)]);
var inst_35847__$1 = (state_35861[(2)]);
var inst_35848 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35847__$1);
var state_35861__$1 = (function (){var statearr_35870 = state_35861;
(statearr_35870[(8)] = inst_35847__$1);

return statearr_35870;
})();
if(cljs.core.truth_(inst_35848)){
var statearr_35871_35903 = state_35861__$1;
(statearr_35871_35903[(1)] = (13));

} else {
var statearr_35872_35904 = state_35861__$1;
(statearr_35872_35904[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (2))){
var inst_35824 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35825 = (0);
var state_35861__$1 = (function (){var statearr_35873 = state_35861;
(statearr_35873[(7)] = inst_35825);

(statearr_35873[(9)] = inst_35824);

return statearr_35873;
})();
var statearr_35874_35905 = state_35861__$1;
(statearr_35874_35905[(2)] = null);

(statearr_35874_35905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (11))){
var inst_35825 = (state_35861[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35861,(10),Object,null,(9));
var inst_35834 = chs__$1.call(null,inst_35825);
var inst_35835 = done.call(null,inst_35825);
var inst_35836 = cljs.core.async.take_BANG_.call(null,inst_35834,inst_35835);
var state_35861__$1 = state_35861;
var statearr_35875_35906 = state_35861__$1;
(statearr_35875_35906[(2)] = inst_35836);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (9))){
var inst_35825 = (state_35861[(7)]);
var inst_35838 = (state_35861[(2)]);
var inst_35839 = (inst_35825 + (1));
var inst_35825__$1 = inst_35839;
var state_35861__$1 = (function (){var statearr_35876 = state_35861;
(statearr_35876[(10)] = inst_35838);

(statearr_35876[(7)] = inst_35825__$1);

return statearr_35876;
})();
var statearr_35877_35907 = state_35861__$1;
(statearr_35877_35907[(2)] = null);

(statearr_35877_35907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (5))){
var inst_35845 = (state_35861[(2)]);
var state_35861__$1 = (function (){var statearr_35878 = state_35861;
(statearr_35878[(11)] = inst_35845);

return statearr_35878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35861__$1,(12),dchan);
} else {
if((state_val_35862 === (14))){
var inst_35847 = (state_35861[(8)]);
var inst_35852 = cljs.core.apply.call(null,f,inst_35847);
var state_35861__$1 = state_35861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35861__$1,(16),out,inst_35852);
} else {
if((state_val_35862 === (16))){
var inst_35854 = (state_35861[(2)]);
var state_35861__$1 = (function (){var statearr_35879 = state_35861;
(statearr_35879[(12)] = inst_35854);

return statearr_35879;
})();
var statearr_35880_35908 = state_35861__$1;
(statearr_35880_35908[(2)] = null);

(statearr_35880_35908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (10))){
var inst_35829 = (state_35861[(2)]);
var inst_35830 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35861__$1 = (function (){var statearr_35881 = state_35861;
(statearr_35881[(13)] = inst_35829);

return statearr_35881;
})();
var statearr_35882_35909 = state_35861__$1;
(statearr_35882_35909[(2)] = inst_35830);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (8))){
var inst_35843 = (state_35861[(2)]);
var state_35861__$1 = state_35861;
var statearr_35883_35910 = state_35861__$1;
(statearr_35883_35910[(2)] = inst_35843);

(statearr_35883_35910[(1)] = (5));


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
});})(c__33856__auto___35895,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33744__auto__,c__33856__auto___35895,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33745__auto__ = null;
var cljs$core$async$state_machine__33745__auto____0 = (function (){
var statearr_35887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35887[(0)] = cljs$core$async$state_machine__33745__auto__);

(statearr_35887[(1)] = (1));

return statearr_35887;
});
var cljs$core$async$state_machine__33745__auto____1 = (function (state_35861){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_35861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e35888){if((e35888 instanceof Object)){
var ex__33748__auto__ = e35888;
var statearr_35889_35911 = state_35861;
(statearr_35889_35911[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35912 = state_35861;
state_35861 = G__35912;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$state_machine__33745__auto__ = function(state_35861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33745__auto____1.call(this,state_35861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33745__auto____0;
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33745__auto____1;
return cljs$core$async$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___35895,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33858__auto__ = (function (){var statearr_35890 = f__33857__auto__.call(null);
(statearr_35890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___35895);

return statearr_35890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___35895,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args35914 = [];
var len__28942__auto___35972 = arguments.length;
var i__28943__auto___35973 = (0);
while(true){
if((i__28943__auto___35973 < len__28942__auto___35972)){
args35914.push((arguments[i__28943__auto___35973]));

var G__35974 = (i__28943__auto___35973 + (1));
i__28943__auto___35973 = G__35974;
continue;
} else {
}
break;
}

var G__35916 = args35914.length;
switch (G__35916) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35914.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33856__auto___35976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___35976,out){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___35976,out){
return (function (state_35948){
var state_val_35949 = (state_35948[(1)]);
if((state_val_35949 === (7))){
var inst_35928 = (state_35948[(7)]);
var inst_35927 = (state_35948[(8)]);
var inst_35927__$1 = (state_35948[(2)]);
var inst_35928__$1 = cljs.core.nth.call(null,inst_35927__$1,(0),null);
var inst_35929 = cljs.core.nth.call(null,inst_35927__$1,(1),null);
var inst_35930 = (inst_35928__$1 == null);
var state_35948__$1 = (function (){var statearr_35950 = state_35948;
(statearr_35950[(7)] = inst_35928__$1);

(statearr_35950[(9)] = inst_35929);

(statearr_35950[(8)] = inst_35927__$1);

return statearr_35950;
})();
if(cljs.core.truth_(inst_35930)){
var statearr_35951_35977 = state_35948__$1;
(statearr_35951_35977[(1)] = (8));

} else {
var statearr_35952_35978 = state_35948__$1;
(statearr_35952_35978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (1))){
var inst_35917 = cljs.core.vec.call(null,chs);
var inst_35918 = inst_35917;
var state_35948__$1 = (function (){var statearr_35953 = state_35948;
(statearr_35953[(10)] = inst_35918);

return statearr_35953;
})();
var statearr_35954_35979 = state_35948__$1;
(statearr_35954_35979[(2)] = null);

(statearr_35954_35979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (4))){
var inst_35918 = (state_35948[(10)]);
var state_35948__$1 = state_35948;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35948__$1,(7),inst_35918);
} else {
if((state_val_35949 === (6))){
var inst_35944 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
var statearr_35955_35980 = state_35948__$1;
(statearr_35955_35980[(2)] = inst_35944);

(statearr_35955_35980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (3))){
var inst_35946 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35948__$1,inst_35946);
} else {
if((state_val_35949 === (2))){
var inst_35918 = (state_35948[(10)]);
var inst_35920 = cljs.core.count.call(null,inst_35918);
var inst_35921 = (inst_35920 > (0));
var state_35948__$1 = state_35948;
if(cljs.core.truth_(inst_35921)){
var statearr_35957_35981 = state_35948__$1;
(statearr_35957_35981[(1)] = (4));

} else {
var statearr_35958_35982 = state_35948__$1;
(statearr_35958_35982[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (11))){
var inst_35918 = (state_35948[(10)]);
var inst_35937 = (state_35948[(2)]);
var tmp35956 = inst_35918;
var inst_35918__$1 = tmp35956;
var state_35948__$1 = (function (){var statearr_35959 = state_35948;
(statearr_35959[(10)] = inst_35918__$1);

(statearr_35959[(11)] = inst_35937);

return statearr_35959;
})();
var statearr_35960_35983 = state_35948__$1;
(statearr_35960_35983[(2)] = null);

(statearr_35960_35983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (9))){
var inst_35928 = (state_35948[(7)]);
var state_35948__$1 = state_35948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35948__$1,(11),out,inst_35928);
} else {
if((state_val_35949 === (5))){
var inst_35942 = cljs.core.async.close_BANG_.call(null,out);
var state_35948__$1 = state_35948;
var statearr_35961_35984 = state_35948__$1;
(statearr_35961_35984[(2)] = inst_35942);

(statearr_35961_35984[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (10))){
var inst_35940 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
var statearr_35962_35985 = state_35948__$1;
(statearr_35962_35985[(2)] = inst_35940);

(statearr_35962_35985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (8))){
var inst_35928 = (state_35948[(7)]);
var inst_35918 = (state_35948[(10)]);
var inst_35929 = (state_35948[(9)]);
var inst_35927 = (state_35948[(8)]);
var inst_35932 = (function (){var cs = inst_35918;
var vec__35923 = inst_35927;
var v = inst_35928;
var c = inst_35929;
return ((function (cs,vec__35923,v,c,inst_35928,inst_35918,inst_35929,inst_35927,state_val_35949,c__33856__auto___35976,out){
return (function (p1__35913_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35913_SHARP_);
});
;})(cs,vec__35923,v,c,inst_35928,inst_35918,inst_35929,inst_35927,state_val_35949,c__33856__auto___35976,out))
})();
var inst_35933 = cljs.core.filterv.call(null,inst_35932,inst_35918);
var inst_35918__$1 = inst_35933;
var state_35948__$1 = (function (){var statearr_35963 = state_35948;
(statearr_35963[(10)] = inst_35918__$1);

return statearr_35963;
})();
var statearr_35964_35986 = state_35948__$1;
(statearr_35964_35986[(2)] = null);

(statearr_35964_35986[(1)] = (2));


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
});})(c__33856__auto___35976,out))
;
return ((function (switch__33744__auto__,c__33856__auto___35976,out){
return (function() {
var cljs$core$async$state_machine__33745__auto__ = null;
var cljs$core$async$state_machine__33745__auto____0 = (function (){
var statearr_35968 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35968[(0)] = cljs$core$async$state_machine__33745__auto__);

(statearr_35968[(1)] = (1));

return statearr_35968;
});
var cljs$core$async$state_machine__33745__auto____1 = (function (state_35948){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_35948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e35969){if((e35969 instanceof Object)){
var ex__33748__auto__ = e35969;
var statearr_35970_35987 = state_35948;
(statearr_35970_35987[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35988 = state_35948;
state_35948 = G__35988;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$state_machine__33745__auto__ = function(state_35948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33745__auto____1.call(this,state_35948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33745__auto____0;
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33745__auto____1;
return cljs$core$async$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___35976,out))
})();
var state__33858__auto__ = (function (){var statearr_35971 = f__33857__auto__.call(null);
(statearr_35971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___35976);

return statearr_35971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___35976,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args35989 = [];
var len__28942__auto___36038 = arguments.length;
var i__28943__auto___36039 = (0);
while(true){
if((i__28943__auto___36039 < len__28942__auto___36038)){
args35989.push((arguments[i__28943__auto___36039]));

var G__36040 = (i__28943__auto___36039 + (1));
i__28943__auto___36039 = G__36040;
continue;
} else {
}
break;
}

var G__35991 = args35989.length;
switch (G__35991) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35989.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33856__auto___36042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___36042,out){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___36042,out){
return (function (state_36015){
var state_val_36016 = (state_36015[(1)]);
if((state_val_36016 === (7))){
var inst_35997 = (state_36015[(7)]);
var inst_35997__$1 = (state_36015[(2)]);
var inst_35998 = (inst_35997__$1 == null);
var inst_35999 = cljs.core.not.call(null,inst_35998);
var state_36015__$1 = (function (){var statearr_36017 = state_36015;
(statearr_36017[(7)] = inst_35997__$1);

return statearr_36017;
})();
if(inst_35999){
var statearr_36018_36043 = state_36015__$1;
(statearr_36018_36043[(1)] = (8));

} else {
var statearr_36019_36044 = state_36015__$1;
(statearr_36019_36044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36016 === (1))){
var inst_35992 = (0);
var state_36015__$1 = (function (){var statearr_36020 = state_36015;
(statearr_36020[(8)] = inst_35992);

return statearr_36020;
})();
var statearr_36021_36045 = state_36015__$1;
(statearr_36021_36045[(2)] = null);

(statearr_36021_36045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36016 === (4))){
var state_36015__$1 = state_36015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36015__$1,(7),ch);
} else {
if((state_val_36016 === (6))){
var inst_36010 = (state_36015[(2)]);
var state_36015__$1 = state_36015;
var statearr_36022_36046 = state_36015__$1;
(statearr_36022_36046[(2)] = inst_36010);

(statearr_36022_36046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36016 === (3))){
var inst_36012 = (state_36015[(2)]);
var inst_36013 = cljs.core.async.close_BANG_.call(null,out);
var state_36015__$1 = (function (){var statearr_36023 = state_36015;
(statearr_36023[(9)] = inst_36012);

return statearr_36023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36015__$1,inst_36013);
} else {
if((state_val_36016 === (2))){
var inst_35992 = (state_36015[(8)]);
var inst_35994 = (inst_35992 < n);
var state_36015__$1 = state_36015;
if(cljs.core.truth_(inst_35994)){
var statearr_36024_36047 = state_36015__$1;
(statearr_36024_36047[(1)] = (4));

} else {
var statearr_36025_36048 = state_36015__$1;
(statearr_36025_36048[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36016 === (11))){
var inst_35992 = (state_36015[(8)]);
var inst_36002 = (state_36015[(2)]);
var inst_36003 = (inst_35992 + (1));
var inst_35992__$1 = inst_36003;
var state_36015__$1 = (function (){var statearr_36026 = state_36015;
(statearr_36026[(8)] = inst_35992__$1);

(statearr_36026[(10)] = inst_36002);

return statearr_36026;
})();
var statearr_36027_36049 = state_36015__$1;
(statearr_36027_36049[(2)] = null);

(statearr_36027_36049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36016 === (9))){
var state_36015__$1 = state_36015;
var statearr_36028_36050 = state_36015__$1;
(statearr_36028_36050[(2)] = null);

(statearr_36028_36050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36016 === (5))){
var state_36015__$1 = state_36015;
var statearr_36029_36051 = state_36015__$1;
(statearr_36029_36051[(2)] = null);

(statearr_36029_36051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36016 === (10))){
var inst_36007 = (state_36015[(2)]);
var state_36015__$1 = state_36015;
var statearr_36030_36052 = state_36015__$1;
(statearr_36030_36052[(2)] = inst_36007);

(statearr_36030_36052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36016 === (8))){
var inst_35997 = (state_36015[(7)]);
var state_36015__$1 = state_36015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36015__$1,(11),out,inst_35997);
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
});})(c__33856__auto___36042,out))
;
return ((function (switch__33744__auto__,c__33856__auto___36042,out){
return (function() {
var cljs$core$async$state_machine__33745__auto__ = null;
var cljs$core$async$state_machine__33745__auto____0 = (function (){
var statearr_36034 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36034[(0)] = cljs$core$async$state_machine__33745__auto__);

(statearr_36034[(1)] = (1));

return statearr_36034;
});
var cljs$core$async$state_machine__33745__auto____1 = (function (state_36015){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_36015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e36035){if((e36035 instanceof Object)){
var ex__33748__auto__ = e36035;
var statearr_36036_36053 = state_36015;
(statearr_36036_36053[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36054 = state_36015;
state_36015 = G__36054;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$state_machine__33745__auto__ = function(state_36015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33745__auto____1.call(this,state_36015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33745__auto____0;
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33745__auto____1;
return cljs$core$async$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___36042,out))
})();
var state__33858__auto__ = (function (){var statearr_36037 = f__33857__auto__.call(null);
(statearr_36037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___36042);

return statearr_36037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___36042,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36062 = (function (map_LT_,f,ch,meta36063){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36063 = meta36063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36064,meta36063__$1){
var self__ = this;
var _36064__$1 = this;
return (new cljs.core.async.t_cljs$core$async36062(self__.map_LT_,self__.f,self__.ch,meta36063__$1));
});

cljs.core.async.t_cljs$core$async36062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36064){
var self__ = this;
var _36064__$1 = this;
return self__.meta36063;
});

cljs.core.async.t_cljs$core$async36062.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36062.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36062.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36062.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36062.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36065 = (function (map_LT_,f,ch,meta36063,_,fn1,meta36066){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36063 = meta36063;
this._ = _;
this.fn1 = fn1;
this.meta36066 = meta36066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36067,meta36066__$1){
var self__ = this;
var _36067__$1 = this;
return (new cljs.core.async.t_cljs$core$async36065(self__.map_LT_,self__.f,self__.ch,self__.meta36063,self__._,self__.fn1,meta36066__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36067){
var self__ = this;
var _36067__$1 = this;
return self__.meta36066;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36055_SHARP_){
return f1.call(null,(((p1__36055_SHARP_ == null))?null:self__.f.call(null,p1__36055_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36065.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36063","meta36063",37882829,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36062","cljs.core.async/t_cljs$core$async36062",-249448891,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36066","meta36066",159882619,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36065";

cljs.core.async.t_cljs$core$async36065.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cljs.core.async/t_cljs$core$async36065");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36065 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36065(map_LT___$1,f__$1,ch__$1,meta36063__$1,___$2,fn1__$1,meta36066){
return (new cljs.core.async.t_cljs$core$async36065(map_LT___$1,f__$1,ch__$1,meta36063__$1,___$2,fn1__$1,meta36066));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36065(self__.map_LT_,self__.f,self__.ch,self__.meta36063,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27855__auto__ = ret;
if(cljs.core.truth_(and__27855__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27855__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36062.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36062.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36063","meta36063",37882829,null)], null);
});

cljs.core.async.t_cljs$core$async36062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36062";

cljs.core.async.t_cljs$core$async36062.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cljs.core.async/t_cljs$core$async36062");
});

cljs.core.async.__GT_t_cljs$core$async36062 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36062(map_LT___$1,f__$1,ch__$1,meta36063){
return (new cljs.core.async.t_cljs$core$async36062(map_LT___$1,f__$1,ch__$1,meta36063));
});

}

return (new cljs.core.async.t_cljs$core$async36062(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36071 = (function (map_GT_,f,ch,meta36072){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta36072 = meta36072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36073,meta36072__$1){
var self__ = this;
var _36073__$1 = this;
return (new cljs.core.async.t_cljs$core$async36071(self__.map_GT_,self__.f,self__.ch,meta36072__$1));
});

cljs.core.async.t_cljs$core$async36071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36073){
var self__ = this;
var _36073__$1 = this;
return self__.meta36072;
});

cljs.core.async.t_cljs$core$async36071.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36071.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36071.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36071.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36071.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36071.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36072","meta36072",1123307618,null)], null);
});

cljs.core.async.t_cljs$core$async36071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36071";

cljs.core.async.t_cljs$core$async36071.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cljs.core.async/t_cljs$core$async36071");
});

cljs.core.async.__GT_t_cljs$core$async36071 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36071(map_GT___$1,f__$1,ch__$1,meta36072){
return (new cljs.core.async.t_cljs$core$async36071(map_GT___$1,f__$1,ch__$1,meta36072));
});

}

return (new cljs.core.async.t_cljs$core$async36071(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36077 = (function (filter_GT_,p,ch,meta36078){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta36078 = meta36078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36079,meta36078__$1){
var self__ = this;
var _36079__$1 = this;
return (new cljs.core.async.t_cljs$core$async36077(self__.filter_GT_,self__.p,self__.ch,meta36078__$1));
});

cljs.core.async.t_cljs$core$async36077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36079){
var self__ = this;
var _36079__$1 = this;
return self__.meta36078;
});

cljs.core.async.t_cljs$core$async36077.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36077.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36077.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36077.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36077.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36077.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36077.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36078","meta36078",1300500087,null)], null);
});

cljs.core.async.t_cljs$core$async36077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36077";

cljs.core.async.t_cljs$core$async36077.cljs$lang$ctorPrWriter = (function (this__28473__auto__,writer__28474__auto__,opt__28475__auto__){
return cljs.core._write.call(null,writer__28474__auto__,"cljs.core.async/t_cljs$core$async36077");
});

cljs.core.async.__GT_t_cljs$core$async36077 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36077(filter_GT___$1,p__$1,ch__$1,meta36078){
return (new cljs.core.async.t_cljs$core$async36077(filter_GT___$1,p__$1,ch__$1,meta36078));
});

}

return (new cljs.core.async.t_cljs$core$async36077(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args36080 = [];
var len__28942__auto___36124 = arguments.length;
var i__28943__auto___36125 = (0);
while(true){
if((i__28943__auto___36125 < len__28942__auto___36124)){
args36080.push((arguments[i__28943__auto___36125]));

var G__36126 = (i__28943__auto___36125 + (1));
i__28943__auto___36125 = G__36126;
continue;
} else {
}
break;
}

var G__36082 = args36080.length;
switch (G__36082) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36080.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33856__auto___36128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___36128,out){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___36128,out){
return (function (state_36103){
var state_val_36104 = (state_36103[(1)]);
if((state_val_36104 === (7))){
var inst_36099 = (state_36103[(2)]);
var state_36103__$1 = state_36103;
var statearr_36105_36129 = state_36103__$1;
(statearr_36105_36129[(2)] = inst_36099);

(statearr_36105_36129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (1))){
var state_36103__$1 = state_36103;
var statearr_36106_36130 = state_36103__$1;
(statearr_36106_36130[(2)] = null);

(statearr_36106_36130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (4))){
var inst_36085 = (state_36103[(7)]);
var inst_36085__$1 = (state_36103[(2)]);
var inst_36086 = (inst_36085__$1 == null);
var state_36103__$1 = (function (){var statearr_36107 = state_36103;
(statearr_36107[(7)] = inst_36085__$1);

return statearr_36107;
})();
if(cljs.core.truth_(inst_36086)){
var statearr_36108_36131 = state_36103__$1;
(statearr_36108_36131[(1)] = (5));

} else {
var statearr_36109_36132 = state_36103__$1;
(statearr_36109_36132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (6))){
var inst_36085 = (state_36103[(7)]);
var inst_36090 = p.call(null,inst_36085);
var state_36103__$1 = state_36103;
if(cljs.core.truth_(inst_36090)){
var statearr_36110_36133 = state_36103__$1;
(statearr_36110_36133[(1)] = (8));

} else {
var statearr_36111_36134 = state_36103__$1;
(statearr_36111_36134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (3))){
var inst_36101 = (state_36103[(2)]);
var state_36103__$1 = state_36103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36103__$1,inst_36101);
} else {
if((state_val_36104 === (2))){
var state_36103__$1 = state_36103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36103__$1,(4),ch);
} else {
if((state_val_36104 === (11))){
var inst_36093 = (state_36103[(2)]);
var state_36103__$1 = state_36103;
var statearr_36112_36135 = state_36103__$1;
(statearr_36112_36135[(2)] = inst_36093);

(statearr_36112_36135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (9))){
var state_36103__$1 = state_36103;
var statearr_36113_36136 = state_36103__$1;
(statearr_36113_36136[(2)] = null);

(statearr_36113_36136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (5))){
var inst_36088 = cljs.core.async.close_BANG_.call(null,out);
var state_36103__$1 = state_36103;
var statearr_36114_36137 = state_36103__$1;
(statearr_36114_36137[(2)] = inst_36088);

(statearr_36114_36137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (10))){
var inst_36096 = (state_36103[(2)]);
var state_36103__$1 = (function (){var statearr_36115 = state_36103;
(statearr_36115[(8)] = inst_36096);

return statearr_36115;
})();
var statearr_36116_36138 = state_36103__$1;
(statearr_36116_36138[(2)] = null);

(statearr_36116_36138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (8))){
var inst_36085 = (state_36103[(7)]);
var state_36103__$1 = state_36103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36103__$1,(11),out,inst_36085);
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
});})(c__33856__auto___36128,out))
;
return ((function (switch__33744__auto__,c__33856__auto___36128,out){
return (function() {
var cljs$core$async$state_machine__33745__auto__ = null;
var cljs$core$async$state_machine__33745__auto____0 = (function (){
var statearr_36120 = [null,null,null,null,null,null,null,null,null];
(statearr_36120[(0)] = cljs$core$async$state_machine__33745__auto__);

(statearr_36120[(1)] = (1));

return statearr_36120;
});
var cljs$core$async$state_machine__33745__auto____1 = (function (state_36103){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_36103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e36121){if((e36121 instanceof Object)){
var ex__33748__auto__ = e36121;
var statearr_36122_36139 = state_36103;
(statearr_36122_36139[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36140 = state_36103;
state_36103 = G__36140;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$state_machine__33745__auto__ = function(state_36103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33745__auto____1.call(this,state_36103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33745__auto____0;
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33745__auto____1;
return cljs$core$async$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___36128,out))
})();
var state__33858__auto__ = (function (){var statearr_36123 = f__33857__auto__.call(null);
(statearr_36123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___36128);

return statearr_36123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___36128,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args36141 = [];
var len__28942__auto___36144 = arguments.length;
var i__28943__auto___36145 = (0);
while(true){
if((i__28943__auto___36145 < len__28942__auto___36144)){
args36141.push((arguments[i__28943__auto___36145]));

var G__36146 = (i__28943__auto___36145 + (1));
i__28943__auto___36145 = G__36146;
continue;
} else {
}
break;
}

var G__36143 = args36141.length;
switch (G__36143) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36141.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto__){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto__){
return (function (state_36313){
var state_val_36314 = (state_36313[(1)]);
if((state_val_36314 === (7))){
var inst_36309 = (state_36313[(2)]);
var state_36313__$1 = state_36313;
var statearr_36315_36356 = state_36313__$1;
(statearr_36315_36356[(2)] = inst_36309);

(statearr_36315_36356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (20))){
var inst_36279 = (state_36313[(7)]);
var inst_36290 = (state_36313[(2)]);
var inst_36291 = cljs.core.next.call(null,inst_36279);
var inst_36265 = inst_36291;
var inst_36266 = null;
var inst_36267 = (0);
var inst_36268 = (0);
var state_36313__$1 = (function (){var statearr_36316 = state_36313;
(statearr_36316[(8)] = inst_36290);

(statearr_36316[(9)] = inst_36268);

(statearr_36316[(10)] = inst_36266);

(statearr_36316[(11)] = inst_36267);

(statearr_36316[(12)] = inst_36265);

return statearr_36316;
})();
var statearr_36317_36357 = state_36313__$1;
(statearr_36317_36357[(2)] = null);

(statearr_36317_36357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (1))){
var state_36313__$1 = state_36313;
var statearr_36318_36358 = state_36313__$1;
(statearr_36318_36358[(2)] = null);

(statearr_36318_36358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (4))){
var inst_36254 = (state_36313[(13)]);
var inst_36254__$1 = (state_36313[(2)]);
var inst_36255 = (inst_36254__$1 == null);
var state_36313__$1 = (function (){var statearr_36319 = state_36313;
(statearr_36319[(13)] = inst_36254__$1);

return statearr_36319;
})();
if(cljs.core.truth_(inst_36255)){
var statearr_36320_36359 = state_36313__$1;
(statearr_36320_36359[(1)] = (5));

} else {
var statearr_36321_36360 = state_36313__$1;
(statearr_36321_36360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (15))){
var state_36313__$1 = state_36313;
var statearr_36325_36361 = state_36313__$1;
(statearr_36325_36361[(2)] = null);

(statearr_36325_36361[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (21))){
var state_36313__$1 = state_36313;
var statearr_36326_36362 = state_36313__$1;
(statearr_36326_36362[(2)] = null);

(statearr_36326_36362[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (13))){
var inst_36268 = (state_36313[(9)]);
var inst_36266 = (state_36313[(10)]);
var inst_36267 = (state_36313[(11)]);
var inst_36265 = (state_36313[(12)]);
var inst_36275 = (state_36313[(2)]);
var inst_36276 = (inst_36268 + (1));
var tmp36322 = inst_36266;
var tmp36323 = inst_36267;
var tmp36324 = inst_36265;
var inst_36265__$1 = tmp36324;
var inst_36266__$1 = tmp36322;
var inst_36267__$1 = tmp36323;
var inst_36268__$1 = inst_36276;
var state_36313__$1 = (function (){var statearr_36327 = state_36313;
(statearr_36327[(14)] = inst_36275);

(statearr_36327[(9)] = inst_36268__$1);

(statearr_36327[(10)] = inst_36266__$1);

(statearr_36327[(11)] = inst_36267__$1);

(statearr_36327[(12)] = inst_36265__$1);

return statearr_36327;
})();
var statearr_36328_36363 = state_36313__$1;
(statearr_36328_36363[(2)] = null);

(statearr_36328_36363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (22))){
var state_36313__$1 = state_36313;
var statearr_36329_36364 = state_36313__$1;
(statearr_36329_36364[(2)] = null);

(statearr_36329_36364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (6))){
var inst_36254 = (state_36313[(13)]);
var inst_36263 = f.call(null,inst_36254);
var inst_36264 = cljs.core.seq.call(null,inst_36263);
var inst_36265 = inst_36264;
var inst_36266 = null;
var inst_36267 = (0);
var inst_36268 = (0);
var state_36313__$1 = (function (){var statearr_36330 = state_36313;
(statearr_36330[(9)] = inst_36268);

(statearr_36330[(10)] = inst_36266);

(statearr_36330[(11)] = inst_36267);

(statearr_36330[(12)] = inst_36265);

return statearr_36330;
})();
var statearr_36331_36365 = state_36313__$1;
(statearr_36331_36365[(2)] = null);

(statearr_36331_36365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (17))){
var inst_36279 = (state_36313[(7)]);
var inst_36283 = cljs.core.chunk_first.call(null,inst_36279);
var inst_36284 = cljs.core.chunk_rest.call(null,inst_36279);
var inst_36285 = cljs.core.count.call(null,inst_36283);
var inst_36265 = inst_36284;
var inst_36266 = inst_36283;
var inst_36267 = inst_36285;
var inst_36268 = (0);
var state_36313__$1 = (function (){var statearr_36332 = state_36313;
(statearr_36332[(9)] = inst_36268);

(statearr_36332[(10)] = inst_36266);

(statearr_36332[(11)] = inst_36267);

(statearr_36332[(12)] = inst_36265);

return statearr_36332;
})();
var statearr_36333_36366 = state_36313__$1;
(statearr_36333_36366[(2)] = null);

(statearr_36333_36366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (3))){
var inst_36311 = (state_36313[(2)]);
var state_36313__$1 = state_36313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36313__$1,inst_36311);
} else {
if((state_val_36314 === (12))){
var inst_36299 = (state_36313[(2)]);
var state_36313__$1 = state_36313;
var statearr_36334_36367 = state_36313__$1;
(statearr_36334_36367[(2)] = inst_36299);

(statearr_36334_36367[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (2))){
var state_36313__$1 = state_36313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36313__$1,(4),in$);
} else {
if((state_val_36314 === (23))){
var inst_36307 = (state_36313[(2)]);
var state_36313__$1 = state_36313;
var statearr_36335_36368 = state_36313__$1;
(statearr_36335_36368[(2)] = inst_36307);

(statearr_36335_36368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (19))){
var inst_36294 = (state_36313[(2)]);
var state_36313__$1 = state_36313;
var statearr_36336_36369 = state_36313__$1;
(statearr_36336_36369[(2)] = inst_36294);

(statearr_36336_36369[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (11))){
var inst_36279 = (state_36313[(7)]);
var inst_36265 = (state_36313[(12)]);
var inst_36279__$1 = cljs.core.seq.call(null,inst_36265);
var state_36313__$1 = (function (){var statearr_36337 = state_36313;
(statearr_36337[(7)] = inst_36279__$1);

return statearr_36337;
})();
if(inst_36279__$1){
var statearr_36338_36370 = state_36313__$1;
(statearr_36338_36370[(1)] = (14));

} else {
var statearr_36339_36371 = state_36313__$1;
(statearr_36339_36371[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (9))){
var inst_36301 = (state_36313[(2)]);
var inst_36302 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36313__$1 = (function (){var statearr_36340 = state_36313;
(statearr_36340[(15)] = inst_36301);

return statearr_36340;
})();
if(cljs.core.truth_(inst_36302)){
var statearr_36341_36372 = state_36313__$1;
(statearr_36341_36372[(1)] = (21));

} else {
var statearr_36342_36373 = state_36313__$1;
(statearr_36342_36373[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (5))){
var inst_36257 = cljs.core.async.close_BANG_.call(null,out);
var state_36313__$1 = state_36313;
var statearr_36343_36374 = state_36313__$1;
(statearr_36343_36374[(2)] = inst_36257);

(statearr_36343_36374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (14))){
var inst_36279 = (state_36313[(7)]);
var inst_36281 = cljs.core.chunked_seq_QMARK_.call(null,inst_36279);
var state_36313__$1 = state_36313;
if(inst_36281){
var statearr_36344_36375 = state_36313__$1;
(statearr_36344_36375[(1)] = (17));

} else {
var statearr_36345_36376 = state_36313__$1;
(statearr_36345_36376[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (16))){
var inst_36297 = (state_36313[(2)]);
var state_36313__$1 = state_36313;
var statearr_36346_36377 = state_36313__$1;
(statearr_36346_36377[(2)] = inst_36297);

(statearr_36346_36377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (10))){
var inst_36268 = (state_36313[(9)]);
var inst_36266 = (state_36313[(10)]);
var inst_36273 = cljs.core._nth.call(null,inst_36266,inst_36268);
var state_36313__$1 = state_36313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36313__$1,(13),out,inst_36273);
} else {
if((state_val_36314 === (18))){
var inst_36279 = (state_36313[(7)]);
var inst_36288 = cljs.core.first.call(null,inst_36279);
var state_36313__$1 = state_36313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36313__$1,(20),out,inst_36288);
} else {
if((state_val_36314 === (8))){
var inst_36268 = (state_36313[(9)]);
var inst_36267 = (state_36313[(11)]);
var inst_36270 = (inst_36268 < inst_36267);
var inst_36271 = inst_36270;
var state_36313__$1 = state_36313;
if(cljs.core.truth_(inst_36271)){
var statearr_36347_36378 = state_36313__$1;
(statearr_36347_36378[(1)] = (10));

} else {
var statearr_36348_36379 = state_36313__$1;
(statearr_36348_36379[(1)] = (11));

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
});})(c__33856__auto__))
;
return ((function (switch__33744__auto__,c__33856__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33745__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33745__auto____0 = (function (){
var statearr_36352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36352[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33745__auto__);

(statearr_36352[(1)] = (1));

return statearr_36352;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33745__auto____1 = (function (state_36313){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_36313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e36353){if((e36353 instanceof Object)){
var ex__33748__auto__ = e36353;
var statearr_36354_36380 = state_36313;
(statearr_36354_36380[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36381 = state_36313;
state_36313 = G__36381;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33745__auto__ = function(state_36313){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33745__auto____1.call(this,state_36313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33745__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33745__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto__))
})();
var state__33858__auto__ = (function (){var statearr_36355 = f__33857__auto__.call(null);
(statearr_36355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto__);

return statearr_36355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto__))
);

return c__33856__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args36382 = [];
var len__28942__auto___36385 = arguments.length;
var i__28943__auto___36386 = (0);
while(true){
if((i__28943__auto___36386 < len__28942__auto___36385)){
args36382.push((arguments[i__28943__auto___36386]));

var G__36387 = (i__28943__auto___36386 + (1));
i__28943__auto___36386 = G__36387;
continue;
} else {
}
break;
}

var G__36384 = args36382.length;
switch (G__36384) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36382.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args36389 = [];
var len__28942__auto___36392 = arguments.length;
var i__28943__auto___36393 = (0);
while(true){
if((i__28943__auto___36393 < len__28942__auto___36392)){
args36389.push((arguments[i__28943__auto___36393]));

var G__36394 = (i__28943__auto___36393 + (1));
i__28943__auto___36393 = G__36394;
continue;
} else {
}
break;
}

var G__36391 = args36389.length;
switch (G__36391) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36389.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args36396 = [];
var len__28942__auto___36447 = arguments.length;
var i__28943__auto___36448 = (0);
while(true){
if((i__28943__auto___36448 < len__28942__auto___36447)){
args36396.push((arguments[i__28943__auto___36448]));

var G__36449 = (i__28943__auto___36448 + (1));
i__28943__auto___36448 = G__36449;
continue;
} else {
}
break;
}

var G__36398 = args36396.length;
switch (G__36398) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36396.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33856__auto___36451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___36451,out){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___36451,out){
return (function (state_36422){
var state_val_36423 = (state_36422[(1)]);
if((state_val_36423 === (7))){
var inst_36417 = (state_36422[(2)]);
var state_36422__$1 = state_36422;
var statearr_36424_36452 = state_36422__$1;
(statearr_36424_36452[(2)] = inst_36417);

(statearr_36424_36452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36423 === (1))){
var inst_36399 = null;
var state_36422__$1 = (function (){var statearr_36425 = state_36422;
(statearr_36425[(7)] = inst_36399);

return statearr_36425;
})();
var statearr_36426_36453 = state_36422__$1;
(statearr_36426_36453[(2)] = null);

(statearr_36426_36453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36423 === (4))){
var inst_36402 = (state_36422[(8)]);
var inst_36402__$1 = (state_36422[(2)]);
var inst_36403 = (inst_36402__$1 == null);
var inst_36404 = cljs.core.not.call(null,inst_36403);
var state_36422__$1 = (function (){var statearr_36427 = state_36422;
(statearr_36427[(8)] = inst_36402__$1);

return statearr_36427;
})();
if(inst_36404){
var statearr_36428_36454 = state_36422__$1;
(statearr_36428_36454[(1)] = (5));

} else {
var statearr_36429_36455 = state_36422__$1;
(statearr_36429_36455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36423 === (6))){
var state_36422__$1 = state_36422;
var statearr_36430_36456 = state_36422__$1;
(statearr_36430_36456[(2)] = null);

(statearr_36430_36456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36423 === (3))){
var inst_36419 = (state_36422[(2)]);
var inst_36420 = cljs.core.async.close_BANG_.call(null,out);
var state_36422__$1 = (function (){var statearr_36431 = state_36422;
(statearr_36431[(9)] = inst_36419);

return statearr_36431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36422__$1,inst_36420);
} else {
if((state_val_36423 === (2))){
var state_36422__$1 = state_36422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36422__$1,(4),ch);
} else {
if((state_val_36423 === (11))){
var inst_36402 = (state_36422[(8)]);
var inst_36411 = (state_36422[(2)]);
var inst_36399 = inst_36402;
var state_36422__$1 = (function (){var statearr_36432 = state_36422;
(statearr_36432[(7)] = inst_36399);

(statearr_36432[(10)] = inst_36411);

return statearr_36432;
})();
var statearr_36433_36457 = state_36422__$1;
(statearr_36433_36457[(2)] = null);

(statearr_36433_36457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36423 === (9))){
var inst_36402 = (state_36422[(8)]);
var state_36422__$1 = state_36422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36422__$1,(11),out,inst_36402);
} else {
if((state_val_36423 === (5))){
var inst_36399 = (state_36422[(7)]);
var inst_36402 = (state_36422[(8)]);
var inst_36406 = cljs.core._EQ_.call(null,inst_36402,inst_36399);
var state_36422__$1 = state_36422;
if(inst_36406){
var statearr_36435_36458 = state_36422__$1;
(statearr_36435_36458[(1)] = (8));

} else {
var statearr_36436_36459 = state_36422__$1;
(statearr_36436_36459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36423 === (10))){
var inst_36414 = (state_36422[(2)]);
var state_36422__$1 = state_36422;
var statearr_36437_36460 = state_36422__$1;
(statearr_36437_36460[(2)] = inst_36414);

(statearr_36437_36460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36423 === (8))){
var inst_36399 = (state_36422[(7)]);
var tmp36434 = inst_36399;
var inst_36399__$1 = tmp36434;
var state_36422__$1 = (function (){var statearr_36438 = state_36422;
(statearr_36438[(7)] = inst_36399__$1);

return statearr_36438;
})();
var statearr_36439_36461 = state_36422__$1;
(statearr_36439_36461[(2)] = null);

(statearr_36439_36461[(1)] = (2));


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
});})(c__33856__auto___36451,out))
;
return ((function (switch__33744__auto__,c__33856__auto___36451,out){
return (function() {
var cljs$core$async$state_machine__33745__auto__ = null;
var cljs$core$async$state_machine__33745__auto____0 = (function (){
var statearr_36443 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36443[(0)] = cljs$core$async$state_machine__33745__auto__);

(statearr_36443[(1)] = (1));

return statearr_36443;
});
var cljs$core$async$state_machine__33745__auto____1 = (function (state_36422){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_36422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e36444){if((e36444 instanceof Object)){
var ex__33748__auto__ = e36444;
var statearr_36445_36462 = state_36422;
(statearr_36445_36462[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36463 = state_36422;
state_36422 = G__36463;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$state_machine__33745__auto__ = function(state_36422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33745__auto____1.call(this,state_36422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33745__auto____0;
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33745__auto____1;
return cljs$core$async$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___36451,out))
})();
var state__33858__auto__ = (function (){var statearr_36446 = f__33857__auto__.call(null);
(statearr_36446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___36451);

return statearr_36446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___36451,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args36464 = [];
var len__28942__auto___36534 = arguments.length;
var i__28943__auto___36535 = (0);
while(true){
if((i__28943__auto___36535 < len__28942__auto___36534)){
args36464.push((arguments[i__28943__auto___36535]));

var G__36536 = (i__28943__auto___36535 + (1));
i__28943__auto___36535 = G__36536;
continue;
} else {
}
break;
}

var G__36466 = args36464.length;
switch (G__36466) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36464.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33856__auto___36538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___36538,out){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___36538,out){
return (function (state_36504){
var state_val_36505 = (state_36504[(1)]);
if((state_val_36505 === (7))){
var inst_36500 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
var statearr_36506_36539 = state_36504__$1;
(statearr_36506_36539[(2)] = inst_36500);

(statearr_36506_36539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (1))){
var inst_36467 = (new Array(n));
var inst_36468 = inst_36467;
var inst_36469 = (0);
var state_36504__$1 = (function (){var statearr_36507 = state_36504;
(statearr_36507[(7)] = inst_36468);

(statearr_36507[(8)] = inst_36469);

return statearr_36507;
})();
var statearr_36508_36540 = state_36504__$1;
(statearr_36508_36540[(2)] = null);

(statearr_36508_36540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (4))){
var inst_36472 = (state_36504[(9)]);
var inst_36472__$1 = (state_36504[(2)]);
var inst_36473 = (inst_36472__$1 == null);
var inst_36474 = cljs.core.not.call(null,inst_36473);
var state_36504__$1 = (function (){var statearr_36509 = state_36504;
(statearr_36509[(9)] = inst_36472__$1);

return statearr_36509;
})();
if(inst_36474){
var statearr_36510_36541 = state_36504__$1;
(statearr_36510_36541[(1)] = (5));

} else {
var statearr_36511_36542 = state_36504__$1;
(statearr_36511_36542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (15))){
var inst_36494 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
var statearr_36512_36543 = state_36504__$1;
(statearr_36512_36543[(2)] = inst_36494);

(statearr_36512_36543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (13))){
var state_36504__$1 = state_36504;
var statearr_36513_36544 = state_36504__$1;
(statearr_36513_36544[(2)] = null);

(statearr_36513_36544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (6))){
var inst_36469 = (state_36504[(8)]);
var inst_36490 = (inst_36469 > (0));
var state_36504__$1 = state_36504;
if(cljs.core.truth_(inst_36490)){
var statearr_36514_36545 = state_36504__$1;
(statearr_36514_36545[(1)] = (12));

} else {
var statearr_36515_36546 = state_36504__$1;
(statearr_36515_36546[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (3))){
var inst_36502 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36504__$1,inst_36502);
} else {
if((state_val_36505 === (12))){
var inst_36468 = (state_36504[(7)]);
var inst_36492 = cljs.core.vec.call(null,inst_36468);
var state_36504__$1 = state_36504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36504__$1,(15),out,inst_36492);
} else {
if((state_val_36505 === (2))){
var state_36504__$1 = state_36504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36504__$1,(4),ch);
} else {
if((state_val_36505 === (11))){
var inst_36484 = (state_36504[(2)]);
var inst_36485 = (new Array(n));
var inst_36468 = inst_36485;
var inst_36469 = (0);
var state_36504__$1 = (function (){var statearr_36516 = state_36504;
(statearr_36516[(10)] = inst_36484);

(statearr_36516[(7)] = inst_36468);

(statearr_36516[(8)] = inst_36469);

return statearr_36516;
})();
var statearr_36517_36547 = state_36504__$1;
(statearr_36517_36547[(2)] = null);

(statearr_36517_36547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (9))){
var inst_36468 = (state_36504[(7)]);
var inst_36482 = cljs.core.vec.call(null,inst_36468);
var state_36504__$1 = state_36504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36504__$1,(11),out,inst_36482);
} else {
if((state_val_36505 === (5))){
var inst_36477 = (state_36504[(11)]);
var inst_36468 = (state_36504[(7)]);
var inst_36469 = (state_36504[(8)]);
var inst_36472 = (state_36504[(9)]);
var inst_36476 = (inst_36468[inst_36469] = inst_36472);
var inst_36477__$1 = (inst_36469 + (1));
var inst_36478 = (inst_36477__$1 < n);
var state_36504__$1 = (function (){var statearr_36518 = state_36504;
(statearr_36518[(11)] = inst_36477__$1);

(statearr_36518[(12)] = inst_36476);

return statearr_36518;
})();
if(cljs.core.truth_(inst_36478)){
var statearr_36519_36548 = state_36504__$1;
(statearr_36519_36548[(1)] = (8));

} else {
var statearr_36520_36549 = state_36504__$1;
(statearr_36520_36549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (14))){
var inst_36497 = (state_36504[(2)]);
var inst_36498 = cljs.core.async.close_BANG_.call(null,out);
var state_36504__$1 = (function (){var statearr_36522 = state_36504;
(statearr_36522[(13)] = inst_36497);

return statearr_36522;
})();
var statearr_36523_36550 = state_36504__$1;
(statearr_36523_36550[(2)] = inst_36498);

(statearr_36523_36550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (10))){
var inst_36488 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
var statearr_36524_36551 = state_36504__$1;
(statearr_36524_36551[(2)] = inst_36488);

(statearr_36524_36551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (8))){
var inst_36477 = (state_36504[(11)]);
var inst_36468 = (state_36504[(7)]);
var tmp36521 = inst_36468;
var inst_36468__$1 = tmp36521;
var inst_36469 = inst_36477;
var state_36504__$1 = (function (){var statearr_36525 = state_36504;
(statearr_36525[(7)] = inst_36468__$1);

(statearr_36525[(8)] = inst_36469);

return statearr_36525;
})();
var statearr_36526_36552 = state_36504__$1;
(statearr_36526_36552[(2)] = null);

(statearr_36526_36552[(1)] = (2));


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
});})(c__33856__auto___36538,out))
;
return ((function (switch__33744__auto__,c__33856__auto___36538,out){
return (function() {
var cljs$core$async$state_machine__33745__auto__ = null;
var cljs$core$async$state_machine__33745__auto____0 = (function (){
var statearr_36530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36530[(0)] = cljs$core$async$state_machine__33745__auto__);

(statearr_36530[(1)] = (1));

return statearr_36530;
});
var cljs$core$async$state_machine__33745__auto____1 = (function (state_36504){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_36504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e36531){if((e36531 instanceof Object)){
var ex__33748__auto__ = e36531;
var statearr_36532_36553 = state_36504;
(statearr_36532_36553[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36554 = state_36504;
state_36504 = G__36554;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$state_machine__33745__auto__ = function(state_36504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33745__auto____1.call(this,state_36504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33745__auto____0;
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33745__auto____1;
return cljs$core$async$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___36538,out))
})();
var state__33858__auto__ = (function (){var statearr_36533 = f__33857__auto__.call(null);
(statearr_36533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___36538);

return statearr_36533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___36538,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args36555 = [];
var len__28942__auto___36629 = arguments.length;
var i__28943__auto___36630 = (0);
while(true){
if((i__28943__auto___36630 < len__28942__auto___36629)){
args36555.push((arguments[i__28943__auto___36630]));

var G__36631 = (i__28943__auto___36630 + (1));
i__28943__auto___36630 = G__36631;
continue;
} else {
}
break;
}

var G__36557 = args36555.length;
switch (G__36557) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36555.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33856__auto___36633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___36633,out){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___36633,out){
return (function (state_36599){
var state_val_36600 = (state_36599[(1)]);
if((state_val_36600 === (7))){
var inst_36595 = (state_36599[(2)]);
var state_36599__$1 = state_36599;
var statearr_36601_36634 = state_36599__$1;
(statearr_36601_36634[(2)] = inst_36595);

(statearr_36601_36634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36600 === (1))){
var inst_36558 = [];
var inst_36559 = inst_36558;
var inst_36560 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36599__$1 = (function (){var statearr_36602 = state_36599;
(statearr_36602[(7)] = inst_36560);

(statearr_36602[(8)] = inst_36559);

return statearr_36602;
})();
var statearr_36603_36635 = state_36599__$1;
(statearr_36603_36635[(2)] = null);

(statearr_36603_36635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36600 === (4))){
var inst_36563 = (state_36599[(9)]);
var inst_36563__$1 = (state_36599[(2)]);
var inst_36564 = (inst_36563__$1 == null);
var inst_36565 = cljs.core.not.call(null,inst_36564);
var state_36599__$1 = (function (){var statearr_36604 = state_36599;
(statearr_36604[(9)] = inst_36563__$1);

return statearr_36604;
})();
if(inst_36565){
var statearr_36605_36636 = state_36599__$1;
(statearr_36605_36636[(1)] = (5));

} else {
var statearr_36606_36637 = state_36599__$1;
(statearr_36606_36637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36600 === (15))){
var inst_36589 = (state_36599[(2)]);
var state_36599__$1 = state_36599;
var statearr_36607_36638 = state_36599__$1;
(statearr_36607_36638[(2)] = inst_36589);

(statearr_36607_36638[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36600 === (13))){
var state_36599__$1 = state_36599;
var statearr_36608_36639 = state_36599__$1;
(statearr_36608_36639[(2)] = null);

(statearr_36608_36639[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36600 === (6))){
var inst_36559 = (state_36599[(8)]);
var inst_36584 = inst_36559.length;
var inst_36585 = (inst_36584 > (0));
var state_36599__$1 = state_36599;
if(cljs.core.truth_(inst_36585)){
var statearr_36609_36640 = state_36599__$1;
(statearr_36609_36640[(1)] = (12));

} else {
var statearr_36610_36641 = state_36599__$1;
(statearr_36610_36641[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36600 === (3))){
var inst_36597 = (state_36599[(2)]);
var state_36599__$1 = state_36599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36599__$1,inst_36597);
} else {
if((state_val_36600 === (12))){
var inst_36559 = (state_36599[(8)]);
var inst_36587 = cljs.core.vec.call(null,inst_36559);
var state_36599__$1 = state_36599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36599__$1,(15),out,inst_36587);
} else {
if((state_val_36600 === (2))){
var state_36599__$1 = state_36599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36599__$1,(4),ch);
} else {
if((state_val_36600 === (11))){
var inst_36567 = (state_36599[(10)]);
var inst_36563 = (state_36599[(9)]);
var inst_36577 = (state_36599[(2)]);
var inst_36578 = [];
var inst_36579 = inst_36578.push(inst_36563);
var inst_36559 = inst_36578;
var inst_36560 = inst_36567;
var state_36599__$1 = (function (){var statearr_36611 = state_36599;
(statearr_36611[(11)] = inst_36577);

(statearr_36611[(7)] = inst_36560);

(statearr_36611[(12)] = inst_36579);

(statearr_36611[(8)] = inst_36559);

return statearr_36611;
})();
var statearr_36612_36642 = state_36599__$1;
(statearr_36612_36642[(2)] = null);

(statearr_36612_36642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36600 === (9))){
var inst_36559 = (state_36599[(8)]);
var inst_36575 = cljs.core.vec.call(null,inst_36559);
var state_36599__$1 = state_36599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36599__$1,(11),out,inst_36575);
} else {
if((state_val_36600 === (5))){
var inst_36560 = (state_36599[(7)]);
var inst_36567 = (state_36599[(10)]);
var inst_36563 = (state_36599[(9)]);
var inst_36567__$1 = f.call(null,inst_36563);
var inst_36568 = cljs.core._EQ_.call(null,inst_36567__$1,inst_36560);
var inst_36569 = cljs.core.keyword_identical_QMARK_.call(null,inst_36560,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36570 = (inst_36568) || (inst_36569);
var state_36599__$1 = (function (){var statearr_36613 = state_36599;
(statearr_36613[(10)] = inst_36567__$1);

return statearr_36613;
})();
if(cljs.core.truth_(inst_36570)){
var statearr_36614_36643 = state_36599__$1;
(statearr_36614_36643[(1)] = (8));

} else {
var statearr_36615_36644 = state_36599__$1;
(statearr_36615_36644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36600 === (14))){
var inst_36592 = (state_36599[(2)]);
var inst_36593 = cljs.core.async.close_BANG_.call(null,out);
var state_36599__$1 = (function (){var statearr_36617 = state_36599;
(statearr_36617[(13)] = inst_36592);

return statearr_36617;
})();
var statearr_36618_36645 = state_36599__$1;
(statearr_36618_36645[(2)] = inst_36593);

(statearr_36618_36645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36600 === (10))){
var inst_36582 = (state_36599[(2)]);
var state_36599__$1 = state_36599;
var statearr_36619_36646 = state_36599__$1;
(statearr_36619_36646[(2)] = inst_36582);

(statearr_36619_36646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36600 === (8))){
var inst_36559 = (state_36599[(8)]);
var inst_36567 = (state_36599[(10)]);
var inst_36563 = (state_36599[(9)]);
var inst_36572 = inst_36559.push(inst_36563);
var tmp36616 = inst_36559;
var inst_36559__$1 = tmp36616;
var inst_36560 = inst_36567;
var state_36599__$1 = (function (){var statearr_36620 = state_36599;
(statearr_36620[(7)] = inst_36560);

(statearr_36620[(14)] = inst_36572);

(statearr_36620[(8)] = inst_36559__$1);

return statearr_36620;
})();
var statearr_36621_36647 = state_36599__$1;
(statearr_36621_36647[(2)] = null);

(statearr_36621_36647[(1)] = (2));


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
});})(c__33856__auto___36633,out))
;
return ((function (switch__33744__auto__,c__33856__auto___36633,out){
return (function() {
var cljs$core$async$state_machine__33745__auto__ = null;
var cljs$core$async$state_machine__33745__auto____0 = (function (){
var statearr_36625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36625[(0)] = cljs$core$async$state_machine__33745__auto__);

(statearr_36625[(1)] = (1));

return statearr_36625;
});
var cljs$core$async$state_machine__33745__auto____1 = (function (state_36599){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_36599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e36626){if((e36626 instanceof Object)){
var ex__33748__auto__ = e36626;
var statearr_36627_36648 = state_36599;
(statearr_36627_36648[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36649 = state_36599;
state_36599 = G__36649;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
cljs$core$async$state_machine__33745__auto__ = function(state_36599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33745__auto____1.call(this,state_36599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33745__auto____0;
cljs$core$async$state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33745__auto____1;
return cljs$core$async$state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___36633,out))
})();
var state__33858__auto__ = (function (){var statearr_36628 = f__33857__auto__.call(null);
(statearr_36628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___36633);

return statearr_36628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___36633,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map