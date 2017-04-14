// Compiled by ClojureScript 1.9.93 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args41782 = [];
var len__28942__auto___41785 = arguments.length;
var i__28943__auto___41786 = (0);
while(true){
if((i__28943__auto___41786 < len__28942__auto___41785)){
args41782.push((arguments[i__28943__auto___41786]));

var G__41787 = (i__28943__auto___41786 + (1));
i__28943__auto___41786 = G__41787;
continue;
} else {
}
break;
}

var G__41784 = args41782.length;
switch (G__41784) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41782.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28949__auto__ = [];
var len__28942__auto___41790 = arguments.length;
var i__28943__auto___41791 = (0);
while(true){
if((i__28943__auto___41791 < len__28942__auto___41790)){
args__28949__auto__.push((arguments[i__28943__auto___41791]));

var G__41792 = (i__28943__auto___41791 + (1));
i__28943__auto___41791 = G__41792;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41789){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41789));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28949__auto__ = [];
var len__28942__auto___41794 = arguments.length;
var i__28943__auto___41795 = (0);
while(true){
if((i__28943__auto___41795 < len__28942__auto___41794)){
args__28949__auto__.push((arguments[i__28943__auto___41795]));

var G__41796 = (i__28943__auto___41795 + (1));
i__28943__auto___41795 = G__41796;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41793){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41793));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__41797 = cljs.core._EQ_;
var expr__41798 = (function (){var or__27867__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e41801){if((e41801 instanceof Error)){
var e = e41801;
return false;
} else {
throw e41801;

}
}})();
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__41797.call(null,"true",expr__41798))){
return true;
} else {
if(cljs.core.truth_(pred__41797.call(null,"false",expr__41798))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__41798)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e41803){if((e41803 instanceof Error)){
var e = e41803;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e41803;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41804){
var map__41807 = p__41804;
var map__41807__$1 = ((((!((map__41807 == null)))?((((map__41807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41807):map__41807);
var message = cljs.core.get.call(null,map__41807__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41807__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27867__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27855__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27855__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27855__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33856__auto___41969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___41969,ch){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___41969,ch){
return (function (state_41938){
var state_val_41939 = (state_41938[(1)]);
if((state_val_41939 === (7))){
var inst_41934 = (state_41938[(2)]);
var state_41938__$1 = state_41938;
var statearr_41940_41970 = state_41938__$1;
(statearr_41940_41970[(2)] = inst_41934);

(statearr_41940_41970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (1))){
var state_41938__$1 = state_41938;
var statearr_41941_41971 = state_41938__$1;
(statearr_41941_41971[(2)] = null);

(statearr_41941_41971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (4))){
var inst_41891 = (state_41938[(7)]);
var inst_41891__$1 = (state_41938[(2)]);
var state_41938__$1 = (function (){var statearr_41942 = state_41938;
(statearr_41942[(7)] = inst_41891__$1);

return statearr_41942;
})();
if(cljs.core.truth_(inst_41891__$1)){
var statearr_41943_41972 = state_41938__$1;
(statearr_41943_41972[(1)] = (5));

} else {
var statearr_41944_41973 = state_41938__$1;
(statearr_41944_41973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (15))){
var inst_41898 = (state_41938[(8)]);
var inst_41913 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41898);
var inst_41914 = cljs.core.first.call(null,inst_41913);
var inst_41915 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41914);
var inst_41916 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_41915)].join('');
var inst_41917 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41916);
var state_41938__$1 = state_41938;
var statearr_41945_41974 = state_41938__$1;
(statearr_41945_41974[(2)] = inst_41917);

(statearr_41945_41974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (13))){
var inst_41922 = (state_41938[(2)]);
var state_41938__$1 = state_41938;
var statearr_41946_41975 = state_41938__$1;
(statearr_41946_41975[(2)] = inst_41922);

(statearr_41946_41975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (6))){
var state_41938__$1 = state_41938;
var statearr_41947_41976 = state_41938__$1;
(statearr_41947_41976[(2)] = null);

(statearr_41947_41976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (17))){
var inst_41920 = (state_41938[(2)]);
var state_41938__$1 = state_41938;
var statearr_41948_41977 = state_41938__$1;
(statearr_41948_41977[(2)] = inst_41920);

(statearr_41948_41977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (3))){
var inst_41936 = (state_41938[(2)]);
var state_41938__$1 = state_41938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41938__$1,inst_41936);
} else {
if((state_val_41939 === (12))){
var inst_41897 = (state_41938[(9)]);
var inst_41911 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41897,opts);
var state_41938__$1 = state_41938;
if(cljs.core.truth_(inst_41911)){
var statearr_41949_41978 = state_41938__$1;
(statearr_41949_41978[(1)] = (15));

} else {
var statearr_41950_41979 = state_41938__$1;
(statearr_41950_41979[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (2))){
var state_41938__$1 = state_41938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41938__$1,(4),ch);
} else {
if((state_val_41939 === (11))){
var inst_41898 = (state_41938[(8)]);
var inst_41903 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41904 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41898);
var inst_41905 = cljs.core.async.timeout.call(null,(1000));
var inst_41906 = [inst_41904,inst_41905];
var inst_41907 = (new cljs.core.PersistentVector(null,2,(5),inst_41903,inst_41906,null));
var state_41938__$1 = state_41938;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41938__$1,(14),inst_41907);
} else {
if((state_val_41939 === (9))){
var inst_41898 = (state_41938[(8)]);
var inst_41924 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41925 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41898);
var inst_41926 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41925);
var inst_41927 = [cljs.core.str("Not loading: "),cljs.core.str(inst_41926)].join('');
var inst_41928 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41927);
var state_41938__$1 = (function (){var statearr_41951 = state_41938;
(statearr_41951[(10)] = inst_41924);

return statearr_41951;
})();
var statearr_41952_41980 = state_41938__$1;
(statearr_41952_41980[(2)] = inst_41928);

(statearr_41952_41980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (5))){
var inst_41891 = (state_41938[(7)]);
var inst_41893 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41894 = (new cljs.core.PersistentArrayMap(null,2,inst_41893,null));
var inst_41895 = (new cljs.core.PersistentHashSet(null,inst_41894,null));
var inst_41896 = figwheel.client.focus_msgs.call(null,inst_41895,inst_41891);
var inst_41897 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41896);
var inst_41898 = cljs.core.first.call(null,inst_41896);
var inst_41899 = figwheel.client.autoload_QMARK_.call(null);
var state_41938__$1 = (function (){var statearr_41953 = state_41938;
(statearr_41953[(9)] = inst_41897);

(statearr_41953[(8)] = inst_41898);

return statearr_41953;
})();
if(cljs.core.truth_(inst_41899)){
var statearr_41954_41981 = state_41938__$1;
(statearr_41954_41981[(1)] = (8));

} else {
var statearr_41955_41982 = state_41938__$1;
(statearr_41955_41982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (14))){
var inst_41909 = (state_41938[(2)]);
var state_41938__$1 = state_41938;
var statearr_41956_41983 = state_41938__$1;
(statearr_41956_41983[(2)] = inst_41909);

(statearr_41956_41983[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (16))){
var state_41938__$1 = state_41938;
var statearr_41957_41984 = state_41938__$1;
(statearr_41957_41984[(2)] = null);

(statearr_41957_41984[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (10))){
var inst_41930 = (state_41938[(2)]);
var state_41938__$1 = (function (){var statearr_41958 = state_41938;
(statearr_41958[(11)] = inst_41930);

return statearr_41958;
})();
var statearr_41959_41985 = state_41938__$1;
(statearr_41959_41985[(2)] = null);

(statearr_41959_41985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41939 === (8))){
var inst_41897 = (state_41938[(9)]);
var inst_41901 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41897,opts);
var state_41938__$1 = state_41938;
if(cljs.core.truth_(inst_41901)){
var statearr_41960_41986 = state_41938__$1;
(statearr_41960_41986[(1)] = (11));

} else {
var statearr_41961_41987 = state_41938__$1;
(statearr_41961_41987[(1)] = (12));

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
});})(c__33856__auto___41969,ch))
;
return ((function (switch__33744__auto__,c__33856__auto___41969,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33745__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33745__auto____0 = (function (){
var statearr_41965 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41965[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33745__auto__);

(statearr_41965[(1)] = (1));

return statearr_41965;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33745__auto____1 = (function (state_41938){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_41938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e41966){if((e41966 instanceof Object)){
var ex__33748__auto__ = e41966;
var statearr_41967_41988 = state_41938;
(statearr_41967_41988[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41989 = state_41938;
state_41938 = G__41989;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33745__auto__ = function(state_41938){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33745__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33745__auto____1.call(this,state_41938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33745__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33745__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___41969,ch))
})();
var state__33858__auto__ = (function (){var statearr_41968 = f__33857__auto__.call(null);
(statearr_41968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___41969);

return statearr_41968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___41969,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41990_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41990_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_41993 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41993){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e41992){if((e41992 instanceof Error)){
var e = e41992;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41993], null));
} else {
var e = e41992;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_41993))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41994){
var map__42003 = p__41994;
var map__42003__$1 = ((((!((map__42003 == null)))?((((map__42003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42003):map__42003);
var opts = map__42003__$1;
var build_id = cljs.core.get.call(null,map__42003__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42003,map__42003__$1,opts,build_id){
return (function (p__42005){
var vec__42006 = p__42005;
var seq__42007 = cljs.core.seq.call(null,vec__42006);
var first__42008 = cljs.core.first.call(null,seq__42007);
var seq__42007__$1 = cljs.core.next.call(null,seq__42007);
var map__42009 = first__42008;
var map__42009__$1 = ((((!((map__42009 == null)))?((((map__42009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42009):map__42009);
var msg = map__42009__$1;
var msg_name = cljs.core.get.call(null,map__42009__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42007__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42006,seq__42007,first__42008,seq__42007__$1,map__42009,map__42009__$1,msg,msg_name,_,map__42003,map__42003__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42006,seq__42007,first__42008,seq__42007__$1,map__42009,map__42009__$1,msg,msg_name,_,map__42003,map__42003__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42003,map__42003__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42017){
var vec__42018 = p__42017;
var seq__42019 = cljs.core.seq.call(null,vec__42018);
var first__42020 = cljs.core.first.call(null,seq__42019);
var seq__42019__$1 = cljs.core.next.call(null,seq__42019);
var map__42021 = first__42020;
var map__42021__$1 = ((((!((map__42021 == null)))?((((map__42021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42021):map__42021);
var msg = map__42021__$1;
var msg_name = cljs.core.get.call(null,map__42021__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42019__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42023){
var map__42035 = p__42023;
var map__42035__$1 = ((((!((map__42035 == null)))?((((map__42035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42035):map__42035);
var on_compile_warning = cljs.core.get.call(null,map__42035__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42035__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42035,map__42035__$1,on_compile_warning,on_compile_fail){
return (function (p__42037){
var vec__42038 = p__42037;
var seq__42039 = cljs.core.seq.call(null,vec__42038);
var first__42040 = cljs.core.first.call(null,seq__42039);
var seq__42039__$1 = cljs.core.next.call(null,seq__42039);
var map__42041 = first__42040;
var map__42041__$1 = ((((!((map__42041 == null)))?((((map__42041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42041):map__42041);
var msg = map__42041__$1;
var msg_name = cljs.core.get.call(null,map__42041__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42039__$1;
var pred__42043 = cljs.core._EQ_;
var expr__42044 = msg_name;
if(cljs.core.truth_(pred__42043.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42044))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42043.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42044))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42035,map__42035__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto__,msg_hist,msg_names,msg){
return (function (state_42252){
var state_val_42253 = (state_42252[(1)]);
if((state_val_42253 === (7))){
var inst_42180 = (state_42252[(2)]);
var state_42252__$1 = state_42252;
if(cljs.core.truth_(inst_42180)){
var statearr_42254_42300 = state_42252__$1;
(statearr_42254_42300[(1)] = (8));

} else {
var statearr_42255_42301 = state_42252__$1;
(statearr_42255_42301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (20))){
var inst_42246 = (state_42252[(2)]);
var state_42252__$1 = state_42252;
var statearr_42256_42302 = state_42252__$1;
(statearr_42256_42302[(2)] = inst_42246);

(statearr_42256_42302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (27))){
var inst_42242 = (state_42252[(2)]);
var state_42252__$1 = state_42252;
var statearr_42257_42303 = state_42252__$1;
(statearr_42257_42303[(2)] = inst_42242);

(statearr_42257_42303[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (1))){
var inst_42173 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42252__$1 = state_42252;
if(cljs.core.truth_(inst_42173)){
var statearr_42258_42304 = state_42252__$1;
(statearr_42258_42304[(1)] = (2));

} else {
var statearr_42259_42305 = state_42252__$1;
(statearr_42259_42305[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (24))){
var inst_42244 = (state_42252[(2)]);
var state_42252__$1 = state_42252;
var statearr_42260_42306 = state_42252__$1;
(statearr_42260_42306[(2)] = inst_42244);

(statearr_42260_42306[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (4))){
var inst_42250 = (state_42252[(2)]);
var state_42252__$1 = state_42252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42252__$1,inst_42250);
} else {
if((state_val_42253 === (15))){
var inst_42248 = (state_42252[(2)]);
var state_42252__$1 = state_42252;
var statearr_42261_42307 = state_42252__$1;
(statearr_42261_42307[(2)] = inst_42248);

(statearr_42261_42307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (21))){
var inst_42207 = (state_42252[(2)]);
var state_42252__$1 = state_42252;
var statearr_42262_42308 = state_42252__$1;
(statearr_42262_42308[(2)] = inst_42207);

(statearr_42262_42308[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (31))){
var inst_42231 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42252__$1 = state_42252;
if(cljs.core.truth_(inst_42231)){
var statearr_42263_42309 = state_42252__$1;
(statearr_42263_42309[(1)] = (34));

} else {
var statearr_42264_42310 = state_42252__$1;
(statearr_42264_42310[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (32))){
var inst_42240 = (state_42252[(2)]);
var state_42252__$1 = state_42252;
var statearr_42265_42311 = state_42252__$1;
(statearr_42265_42311[(2)] = inst_42240);

(statearr_42265_42311[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (33))){
var inst_42229 = (state_42252[(2)]);
var state_42252__$1 = state_42252;
var statearr_42266_42312 = state_42252__$1;
(statearr_42266_42312[(2)] = inst_42229);

(statearr_42266_42312[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (13))){
var inst_42194 = figwheel.client.heads_up.clear.call(null);
var state_42252__$1 = state_42252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42252__$1,(16),inst_42194);
} else {
if((state_val_42253 === (22))){
var inst_42211 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42212 = figwheel.client.heads_up.append_warning_message.call(null,inst_42211);
var state_42252__$1 = state_42252;
var statearr_42267_42313 = state_42252__$1;
(statearr_42267_42313[(2)] = inst_42212);

(statearr_42267_42313[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (36))){
var inst_42238 = (state_42252[(2)]);
var state_42252__$1 = state_42252;
var statearr_42268_42314 = state_42252__$1;
(statearr_42268_42314[(2)] = inst_42238);

(statearr_42268_42314[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (29))){
var inst_42222 = (state_42252[(2)]);
var state_42252__$1 = state_42252;
var statearr_42269_42315 = state_42252__$1;
(statearr_42269_42315[(2)] = inst_42222);

(statearr_42269_42315[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (6))){
var inst_42175 = (state_42252[(7)]);
var state_42252__$1 = state_42252;
var statearr_42270_42316 = state_42252__$1;
(statearr_42270_42316[(2)] = inst_42175);

(statearr_42270_42316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (28))){
var inst_42218 = (state_42252[(2)]);
var inst_42219 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42220 = figwheel.client.heads_up.display_warning.call(null,inst_42219);
var state_42252__$1 = (function (){var statearr_42271 = state_42252;
(statearr_42271[(8)] = inst_42218);

return statearr_42271;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42252__$1,(29),inst_42220);
} else {
if((state_val_42253 === (25))){
var inst_42216 = figwheel.client.heads_up.clear.call(null);
var state_42252__$1 = state_42252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42252__$1,(28),inst_42216);
} else {
if((state_val_42253 === (34))){
var inst_42233 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42252__$1 = state_42252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42252__$1,(37),inst_42233);
} else {
if((state_val_42253 === (17))){
var inst_42200 = (state_42252[(2)]);
var state_42252__$1 = state_42252;
var statearr_42272_42317 = state_42252__$1;
(statearr_42272_42317[(2)] = inst_42200);

(statearr_42272_42317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (3))){
var inst_42192 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42252__$1 = state_42252;
if(cljs.core.truth_(inst_42192)){
var statearr_42273_42318 = state_42252__$1;
(statearr_42273_42318[(1)] = (13));

} else {
var statearr_42274_42319 = state_42252__$1;
(statearr_42274_42319[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (12))){
var inst_42188 = (state_42252[(2)]);
var state_42252__$1 = state_42252;
var statearr_42275_42320 = state_42252__$1;
(statearr_42275_42320[(2)] = inst_42188);

(statearr_42275_42320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (2))){
var inst_42175 = (state_42252[(7)]);
var inst_42175__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42252__$1 = (function (){var statearr_42276 = state_42252;
(statearr_42276[(7)] = inst_42175__$1);

return statearr_42276;
})();
if(cljs.core.truth_(inst_42175__$1)){
var statearr_42277_42321 = state_42252__$1;
(statearr_42277_42321[(1)] = (5));

} else {
var statearr_42278_42322 = state_42252__$1;
(statearr_42278_42322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (23))){
var inst_42214 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42252__$1 = state_42252;
if(cljs.core.truth_(inst_42214)){
var statearr_42279_42323 = state_42252__$1;
(statearr_42279_42323[(1)] = (25));

} else {
var statearr_42280_42324 = state_42252__$1;
(statearr_42280_42324[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (35))){
var state_42252__$1 = state_42252;
var statearr_42281_42325 = state_42252__$1;
(statearr_42281_42325[(2)] = null);

(statearr_42281_42325[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (19))){
var inst_42209 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42252__$1 = state_42252;
if(cljs.core.truth_(inst_42209)){
var statearr_42282_42326 = state_42252__$1;
(statearr_42282_42326[(1)] = (22));

} else {
var statearr_42283_42327 = state_42252__$1;
(statearr_42283_42327[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (11))){
var inst_42184 = (state_42252[(2)]);
var state_42252__$1 = state_42252;
var statearr_42284_42328 = state_42252__$1;
(statearr_42284_42328[(2)] = inst_42184);

(statearr_42284_42328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (9))){
var inst_42186 = figwheel.client.heads_up.clear.call(null);
var state_42252__$1 = state_42252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42252__$1,(12),inst_42186);
} else {
if((state_val_42253 === (5))){
var inst_42177 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42252__$1 = state_42252;
var statearr_42285_42329 = state_42252__$1;
(statearr_42285_42329[(2)] = inst_42177);

(statearr_42285_42329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (14))){
var inst_42202 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42252__$1 = state_42252;
if(cljs.core.truth_(inst_42202)){
var statearr_42286_42330 = state_42252__$1;
(statearr_42286_42330[(1)] = (18));

} else {
var statearr_42287_42331 = state_42252__$1;
(statearr_42287_42331[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (26))){
var inst_42224 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42252__$1 = state_42252;
if(cljs.core.truth_(inst_42224)){
var statearr_42288_42332 = state_42252__$1;
(statearr_42288_42332[(1)] = (30));

} else {
var statearr_42289_42333 = state_42252__$1;
(statearr_42289_42333[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (16))){
var inst_42196 = (state_42252[(2)]);
var inst_42197 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42198 = figwheel.client.heads_up.display_exception.call(null,inst_42197);
var state_42252__$1 = (function (){var statearr_42290 = state_42252;
(statearr_42290[(9)] = inst_42196);

return statearr_42290;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42252__$1,(17),inst_42198);
} else {
if((state_val_42253 === (30))){
var inst_42226 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42227 = figwheel.client.heads_up.display_warning.call(null,inst_42226);
var state_42252__$1 = state_42252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42252__$1,(33),inst_42227);
} else {
if((state_val_42253 === (10))){
var inst_42190 = (state_42252[(2)]);
var state_42252__$1 = state_42252;
var statearr_42291_42334 = state_42252__$1;
(statearr_42291_42334[(2)] = inst_42190);

(statearr_42291_42334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (18))){
var inst_42204 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42205 = figwheel.client.heads_up.display_exception.call(null,inst_42204);
var state_42252__$1 = state_42252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42252__$1,(21),inst_42205);
} else {
if((state_val_42253 === (37))){
var inst_42235 = (state_42252[(2)]);
var state_42252__$1 = state_42252;
var statearr_42292_42335 = state_42252__$1;
(statearr_42292_42335[(2)] = inst_42235);

(statearr_42292_42335[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42253 === (8))){
var inst_42182 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42252__$1 = state_42252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42252__$1,(11),inst_42182);
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
});})(c__33856__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33744__auto__,c__33856__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33745__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33745__auto____0 = (function (){
var statearr_42296 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42296[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33745__auto__);

(statearr_42296[(1)] = (1));

return statearr_42296;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33745__auto____1 = (function (state_42252){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_42252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e42297){if((e42297 instanceof Object)){
var ex__33748__auto__ = e42297;
var statearr_42298_42336 = state_42252;
(statearr_42298_42336[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42337 = state_42252;
state_42252 = G__42337;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33745__auto__ = function(state_42252){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33745__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33745__auto____1.call(this,state_42252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33745__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33745__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto__,msg_hist,msg_names,msg))
})();
var state__33858__auto__ = (function (){var statearr_42299 = f__33857__auto__.call(null);
(statearr_42299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto__);

return statearr_42299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto__,msg_hist,msg_names,msg))
);

return c__33856__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33856__auto___42400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto___42400,ch){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto___42400,ch){
return (function (state_42383){
var state_val_42384 = (state_42383[(1)]);
if((state_val_42384 === (1))){
var state_42383__$1 = state_42383;
var statearr_42385_42401 = state_42383__$1;
(statearr_42385_42401[(2)] = null);

(statearr_42385_42401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42384 === (2))){
var state_42383__$1 = state_42383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42383__$1,(4),ch);
} else {
if((state_val_42384 === (3))){
var inst_42381 = (state_42383[(2)]);
var state_42383__$1 = state_42383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42383__$1,inst_42381);
} else {
if((state_val_42384 === (4))){
var inst_42371 = (state_42383[(7)]);
var inst_42371__$1 = (state_42383[(2)]);
var state_42383__$1 = (function (){var statearr_42386 = state_42383;
(statearr_42386[(7)] = inst_42371__$1);

return statearr_42386;
})();
if(cljs.core.truth_(inst_42371__$1)){
var statearr_42387_42402 = state_42383__$1;
(statearr_42387_42402[(1)] = (5));

} else {
var statearr_42388_42403 = state_42383__$1;
(statearr_42388_42403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42384 === (5))){
var inst_42371 = (state_42383[(7)]);
var inst_42373 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42371);
var state_42383__$1 = state_42383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42383__$1,(8),inst_42373);
} else {
if((state_val_42384 === (6))){
var state_42383__$1 = state_42383;
var statearr_42389_42404 = state_42383__$1;
(statearr_42389_42404[(2)] = null);

(statearr_42389_42404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42384 === (7))){
var inst_42379 = (state_42383[(2)]);
var state_42383__$1 = state_42383;
var statearr_42390_42405 = state_42383__$1;
(statearr_42390_42405[(2)] = inst_42379);

(statearr_42390_42405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42384 === (8))){
var inst_42375 = (state_42383[(2)]);
var state_42383__$1 = (function (){var statearr_42391 = state_42383;
(statearr_42391[(8)] = inst_42375);

return statearr_42391;
})();
var statearr_42392_42406 = state_42383__$1;
(statearr_42392_42406[(2)] = null);

(statearr_42392_42406[(1)] = (2));


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
});})(c__33856__auto___42400,ch))
;
return ((function (switch__33744__auto__,c__33856__auto___42400,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33745__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33745__auto____0 = (function (){
var statearr_42396 = [null,null,null,null,null,null,null,null,null];
(statearr_42396[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33745__auto__);

(statearr_42396[(1)] = (1));

return statearr_42396;
});
var figwheel$client$heads_up_plugin_$_state_machine__33745__auto____1 = (function (state_42383){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_42383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e42397){if((e42397 instanceof Object)){
var ex__33748__auto__ = e42397;
var statearr_42398_42407 = state_42383;
(statearr_42398_42407[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42408 = state_42383;
state_42383 = G__42408;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33745__auto__ = function(state_42383){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33745__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33745__auto____1.call(this,state_42383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33745__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33745__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto___42400,ch))
})();
var state__33858__auto__ = (function (){var statearr_42399 = f__33857__auto__.call(null);
(statearr_42399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto___42400);

return statearr_42399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto___42400,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto__){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto__){
return (function (state_42429){
var state_val_42430 = (state_42429[(1)]);
if((state_val_42430 === (1))){
var inst_42424 = cljs.core.async.timeout.call(null,(3000));
var state_42429__$1 = state_42429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42429__$1,(2),inst_42424);
} else {
if((state_val_42430 === (2))){
var inst_42426 = (state_42429[(2)]);
var inst_42427 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42429__$1 = (function (){var statearr_42431 = state_42429;
(statearr_42431[(7)] = inst_42426);

return statearr_42431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42429__$1,inst_42427);
} else {
return null;
}
}
});})(c__33856__auto__))
;
return ((function (switch__33744__auto__,c__33856__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33745__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33745__auto____0 = (function (){
var statearr_42435 = [null,null,null,null,null,null,null,null];
(statearr_42435[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33745__auto__);

(statearr_42435[(1)] = (1));

return statearr_42435;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33745__auto____1 = (function (state_42429){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_42429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e42436){if((e42436 instanceof Object)){
var ex__33748__auto__ = e42436;
var statearr_42437_42439 = state_42429;
(statearr_42437_42439[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42440 = state_42429;
state_42429 = G__42440;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33745__auto__ = function(state_42429){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33745__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33745__auto____1.call(this,state_42429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33745__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33745__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto__))
})();
var state__33858__auto__ = (function (){var statearr_42438 = f__33857__auto__.call(null);
(statearr_42438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto__);

return statearr_42438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto__))
);

return c__33856__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33856__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33857__auto__ = (function (){var switch__33744__auto__ = ((function (c__33856__auto__,figwheel_version,temp__4657__auto__){
return (function (state_42463){
var state_val_42464 = (state_42463[(1)]);
if((state_val_42464 === (1))){
var inst_42457 = cljs.core.async.timeout.call(null,(2000));
var state_42463__$1 = state_42463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42463__$1,(2),inst_42457);
} else {
if((state_val_42464 === (2))){
var inst_42459 = (state_42463[(2)]);
var inst_42460 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_42461 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42460);
var state_42463__$1 = (function (){var statearr_42465 = state_42463;
(statearr_42465[(7)] = inst_42459);

return statearr_42465;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42463__$1,inst_42461);
} else {
return null;
}
}
});})(c__33856__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33744__auto__,c__33856__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33745__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33745__auto____0 = (function (){
var statearr_42469 = [null,null,null,null,null,null,null,null];
(statearr_42469[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33745__auto__);

(statearr_42469[(1)] = (1));

return statearr_42469;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33745__auto____1 = (function (state_42463){
while(true){
var ret_value__33746__auto__ = (function (){try{while(true){
var result__33747__auto__ = switch__33744__auto__.call(null,state_42463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33747__auto__;
}
break;
}
}catch (e42470){if((e42470 instanceof Object)){
var ex__33748__auto__ = e42470;
var statearr_42471_42473 = state_42463;
(statearr_42471_42473[(5)] = ex__33748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42474 = state_42463;
state_42463 = G__42474;
continue;
} else {
return ret_value__33746__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33745__auto__ = function(state_42463){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33745__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33745__auto____1.call(this,state_42463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33745__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33745__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33745__auto__;
})()
;})(switch__33744__auto__,c__33856__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33858__auto__ = (function (){var statearr_42472 = f__33857__auto__.call(null);
(statearr_42472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33856__auto__);

return statearr_42472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33858__auto__);
});})(c__33856__auto__,figwheel_version,temp__4657__auto__))
);

return c__33856__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42475){
var map__42479 = p__42475;
var map__42479__$1 = ((((!((map__42479 == null)))?((((map__42479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42479):map__42479);
var file = cljs.core.get.call(null,map__42479__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42479__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42479__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42481 = "";
var G__42481__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__42481),cljs.core.str("file "),cljs.core.str(file)].join(''):G__42481);
var G__42481__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__42481__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__42481__$1);
if(cljs.core.truth_((function (){var and__27855__auto__ = line;
if(cljs.core.truth_(and__27855__auto__)){
return column;
} else {
return and__27855__auto__;
}
})())){
return [cljs.core.str(G__42481__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__42481__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42482){
var map__42489 = p__42482;
var map__42489__$1 = ((((!((map__42489 == null)))?((((map__42489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42489):map__42489);
var ed = map__42489__$1;
var formatted_exception = cljs.core.get.call(null,map__42489__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42489__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42489__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42491_42495 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42492_42496 = null;
var count__42493_42497 = (0);
var i__42494_42498 = (0);
while(true){
if((i__42494_42498 < count__42493_42497)){
var msg_42499 = cljs.core._nth.call(null,chunk__42492_42496,i__42494_42498);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42499);

var G__42500 = seq__42491_42495;
var G__42501 = chunk__42492_42496;
var G__42502 = count__42493_42497;
var G__42503 = (i__42494_42498 + (1));
seq__42491_42495 = G__42500;
chunk__42492_42496 = G__42501;
count__42493_42497 = G__42502;
i__42494_42498 = G__42503;
continue;
} else {
var temp__4657__auto___42504 = cljs.core.seq.call(null,seq__42491_42495);
if(temp__4657__auto___42504){
var seq__42491_42505__$1 = temp__4657__auto___42504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42491_42505__$1)){
var c__28678__auto___42506 = cljs.core.chunk_first.call(null,seq__42491_42505__$1);
var G__42507 = cljs.core.chunk_rest.call(null,seq__42491_42505__$1);
var G__42508 = c__28678__auto___42506;
var G__42509 = cljs.core.count.call(null,c__28678__auto___42506);
var G__42510 = (0);
seq__42491_42495 = G__42507;
chunk__42492_42496 = G__42508;
count__42493_42497 = G__42509;
i__42494_42498 = G__42510;
continue;
} else {
var msg_42511 = cljs.core.first.call(null,seq__42491_42505__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42511);

var G__42512 = cljs.core.next.call(null,seq__42491_42505__$1);
var G__42513 = null;
var G__42514 = (0);
var G__42515 = (0);
seq__42491_42495 = G__42512;
chunk__42492_42496 = G__42513;
count__42493_42497 = G__42514;
i__42494_42498 = G__42515;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42516){
var map__42519 = p__42516;
var map__42519__$1 = ((((!((map__42519 == null)))?((((map__42519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42519):map__42519);
var w = map__42519__$1;
var message = cljs.core.get.call(null,map__42519__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"dev-resources/public/js/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"dev-resources/public/js/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27855__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27855__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27855__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__42531 = cljs.core.seq.call(null,plugins);
var chunk__42532 = null;
var count__42533 = (0);
var i__42534 = (0);
while(true){
if((i__42534 < count__42533)){
var vec__42535 = cljs.core._nth.call(null,chunk__42532,i__42534);
var k = cljs.core.nth.call(null,vec__42535,(0),null);
var plugin = cljs.core.nth.call(null,vec__42535,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42541 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42531,chunk__42532,count__42533,i__42534,pl_42541,vec__42535,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42541.call(null,msg_hist);
});})(seq__42531,chunk__42532,count__42533,i__42534,pl_42541,vec__42535,k,plugin))
);
} else {
}

var G__42542 = seq__42531;
var G__42543 = chunk__42532;
var G__42544 = count__42533;
var G__42545 = (i__42534 + (1));
seq__42531 = G__42542;
chunk__42532 = G__42543;
count__42533 = G__42544;
i__42534 = G__42545;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42531);
if(temp__4657__auto__){
var seq__42531__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42531__$1)){
var c__28678__auto__ = cljs.core.chunk_first.call(null,seq__42531__$1);
var G__42546 = cljs.core.chunk_rest.call(null,seq__42531__$1);
var G__42547 = c__28678__auto__;
var G__42548 = cljs.core.count.call(null,c__28678__auto__);
var G__42549 = (0);
seq__42531 = G__42546;
chunk__42532 = G__42547;
count__42533 = G__42548;
i__42534 = G__42549;
continue;
} else {
var vec__42538 = cljs.core.first.call(null,seq__42531__$1);
var k = cljs.core.nth.call(null,vec__42538,(0),null);
var plugin = cljs.core.nth.call(null,vec__42538,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42550 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42531,chunk__42532,count__42533,i__42534,pl_42550,vec__42538,k,plugin,seq__42531__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42550.call(null,msg_hist);
});})(seq__42531,chunk__42532,count__42533,i__42534,pl_42550,vec__42538,k,plugin,seq__42531__$1,temp__4657__auto__))
);
} else {
}

var G__42551 = cljs.core.next.call(null,seq__42531__$1);
var G__42552 = null;
var G__42553 = (0);
var G__42554 = (0);
seq__42531 = G__42551;
chunk__42532 = G__42552;
count__42533 = G__42553;
i__42534 = G__42554;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args42555 = [];
var len__28942__auto___42562 = arguments.length;
var i__28943__auto___42563 = (0);
while(true){
if((i__28943__auto___42563 < len__28942__auto___42562)){
args42555.push((arguments[i__28943__auto___42563]));

var G__42564 = (i__28943__auto___42563 + (1));
i__28943__auto___42563 = G__42564;
continue;
} else {
}
break;
}

var G__42557 = args42555.length;
switch (G__42557) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42555.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__42558_42566 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42559_42567 = null;
var count__42560_42568 = (0);
var i__42561_42569 = (0);
while(true){
if((i__42561_42569 < count__42560_42568)){
var msg_42570 = cljs.core._nth.call(null,chunk__42559_42567,i__42561_42569);
figwheel.client.socket.handle_incoming_message.call(null,msg_42570);

var G__42571 = seq__42558_42566;
var G__42572 = chunk__42559_42567;
var G__42573 = count__42560_42568;
var G__42574 = (i__42561_42569 + (1));
seq__42558_42566 = G__42571;
chunk__42559_42567 = G__42572;
count__42560_42568 = G__42573;
i__42561_42569 = G__42574;
continue;
} else {
var temp__4657__auto___42575 = cljs.core.seq.call(null,seq__42558_42566);
if(temp__4657__auto___42575){
var seq__42558_42576__$1 = temp__4657__auto___42575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42558_42576__$1)){
var c__28678__auto___42577 = cljs.core.chunk_first.call(null,seq__42558_42576__$1);
var G__42578 = cljs.core.chunk_rest.call(null,seq__42558_42576__$1);
var G__42579 = c__28678__auto___42577;
var G__42580 = cljs.core.count.call(null,c__28678__auto___42577);
var G__42581 = (0);
seq__42558_42566 = G__42578;
chunk__42559_42567 = G__42579;
count__42560_42568 = G__42580;
i__42561_42569 = G__42581;
continue;
} else {
var msg_42582 = cljs.core.first.call(null,seq__42558_42576__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42582);

var G__42583 = cljs.core.next.call(null,seq__42558_42576__$1);
var G__42584 = null;
var G__42585 = (0);
var G__42586 = (0);
seq__42558_42566 = G__42583;
chunk__42559_42567 = G__42584;
count__42560_42568 = G__42585;
i__42561_42569 = G__42586;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28949__auto__ = [];
var len__28942__auto___42591 = arguments.length;
var i__28943__auto___42592 = (0);
while(true){
if((i__28943__auto___42592 < len__28942__auto___42591)){
args__28949__auto__.push((arguments[i__28943__auto___42592]));

var G__42593 = (i__28943__auto___42592 + (1));
i__28943__auto___42592 = G__42593;
continue;
} else {
}
break;
}

var argseq__28950__auto__ = ((((0) < args__28949__auto__.length))?(new cljs.core.IndexedSeq(args__28949__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28950__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42588){
var map__42589 = p__42588;
var map__42589__$1 = ((((!((map__42589 == null)))?((((map__42589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42589):map__42589);
var opts = map__42589__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42587){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42587));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42595){if((e42595 instanceof Error)){
var e = e42595;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e42595;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__42599){
var map__42600 = p__42599;
var map__42600__$1 = ((((!((map__42600 == null)))?((((map__42600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42600):map__42600);
var msg_name = cljs.core.get.call(null,map__42600__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map