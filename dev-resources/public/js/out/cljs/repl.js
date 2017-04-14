// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41349){
var map__41374 = p__41349;
var map__41374__$1 = ((((!((map__41374 == null)))?((((map__41374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41374):map__41374);
var m = map__41374__$1;
var n = cljs.core.get.call(null,map__41374__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41374__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41376_41398 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41377_41399 = null;
var count__41378_41400 = (0);
var i__41379_41401 = (0);
while(true){
if((i__41379_41401 < count__41378_41400)){
var f_41402 = cljs.core._nth.call(null,chunk__41377_41399,i__41379_41401);
cljs.core.println.call(null,"  ",f_41402);

var G__41403 = seq__41376_41398;
var G__41404 = chunk__41377_41399;
var G__41405 = count__41378_41400;
var G__41406 = (i__41379_41401 + (1));
seq__41376_41398 = G__41403;
chunk__41377_41399 = G__41404;
count__41378_41400 = G__41405;
i__41379_41401 = G__41406;
continue;
} else {
var temp__4657__auto___41407 = cljs.core.seq.call(null,seq__41376_41398);
if(temp__4657__auto___41407){
var seq__41376_41408__$1 = temp__4657__auto___41407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41376_41408__$1)){
var c__28678__auto___41409 = cljs.core.chunk_first.call(null,seq__41376_41408__$1);
var G__41410 = cljs.core.chunk_rest.call(null,seq__41376_41408__$1);
var G__41411 = c__28678__auto___41409;
var G__41412 = cljs.core.count.call(null,c__28678__auto___41409);
var G__41413 = (0);
seq__41376_41398 = G__41410;
chunk__41377_41399 = G__41411;
count__41378_41400 = G__41412;
i__41379_41401 = G__41413;
continue;
} else {
var f_41414 = cljs.core.first.call(null,seq__41376_41408__$1);
cljs.core.println.call(null,"  ",f_41414);

var G__41415 = cljs.core.next.call(null,seq__41376_41408__$1);
var G__41416 = null;
var G__41417 = (0);
var G__41418 = (0);
seq__41376_41398 = G__41415;
chunk__41377_41399 = G__41416;
count__41378_41400 = G__41417;
i__41379_41401 = G__41418;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41419 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27867__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27867__auto__)){
return or__27867__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41419);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41419)))?cljs.core.second.call(null,arglists_41419):arglists_41419));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41380_41420 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41381_41421 = null;
var count__41382_41422 = (0);
var i__41383_41423 = (0);
while(true){
if((i__41383_41423 < count__41382_41422)){
var vec__41384_41424 = cljs.core._nth.call(null,chunk__41381_41421,i__41383_41423);
var name_41425 = cljs.core.nth.call(null,vec__41384_41424,(0),null);
var map__41387_41426 = cljs.core.nth.call(null,vec__41384_41424,(1),null);
var map__41387_41427__$1 = ((((!((map__41387_41426 == null)))?((((map__41387_41426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41387_41426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41387_41426):map__41387_41426);
var doc_41428 = cljs.core.get.call(null,map__41387_41427__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41429 = cljs.core.get.call(null,map__41387_41427__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41425);

cljs.core.println.call(null," ",arglists_41429);

if(cljs.core.truth_(doc_41428)){
cljs.core.println.call(null," ",doc_41428);
} else {
}

var G__41430 = seq__41380_41420;
var G__41431 = chunk__41381_41421;
var G__41432 = count__41382_41422;
var G__41433 = (i__41383_41423 + (1));
seq__41380_41420 = G__41430;
chunk__41381_41421 = G__41431;
count__41382_41422 = G__41432;
i__41383_41423 = G__41433;
continue;
} else {
var temp__4657__auto___41434 = cljs.core.seq.call(null,seq__41380_41420);
if(temp__4657__auto___41434){
var seq__41380_41435__$1 = temp__4657__auto___41434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41380_41435__$1)){
var c__28678__auto___41436 = cljs.core.chunk_first.call(null,seq__41380_41435__$1);
var G__41437 = cljs.core.chunk_rest.call(null,seq__41380_41435__$1);
var G__41438 = c__28678__auto___41436;
var G__41439 = cljs.core.count.call(null,c__28678__auto___41436);
var G__41440 = (0);
seq__41380_41420 = G__41437;
chunk__41381_41421 = G__41438;
count__41382_41422 = G__41439;
i__41383_41423 = G__41440;
continue;
} else {
var vec__41389_41441 = cljs.core.first.call(null,seq__41380_41435__$1);
var name_41442 = cljs.core.nth.call(null,vec__41389_41441,(0),null);
var map__41392_41443 = cljs.core.nth.call(null,vec__41389_41441,(1),null);
var map__41392_41444__$1 = ((((!((map__41392_41443 == null)))?((((map__41392_41443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41392_41443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41392_41443):map__41392_41443);
var doc_41445 = cljs.core.get.call(null,map__41392_41444__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41446 = cljs.core.get.call(null,map__41392_41444__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41442);

cljs.core.println.call(null," ",arglists_41446);

if(cljs.core.truth_(doc_41445)){
cljs.core.println.call(null," ",doc_41445);
} else {
}

var G__41447 = cljs.core.next.call(null,seq__41380_41435__$1);
var G__41448 = null;
var G__41449 = (0);
var G__41450 = (0);
seq__41380_41420 = G__41447;
chunk__41381_41421 = G__41448;
count__41382_41422 = G__41449;
i__41383_41423 = G__41450;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__41394 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41395 = null;
var count__41396 = (0);
var i__41397 = (0);
while(true){
if((i__41397 < count__41396)){
var role = cljs.core._nth.call(null,chunk__41395,i__41397);
var temp__4657__auto___41451__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41451__$1)){
var spec_41452 = temp__4657__auto___41451__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_41452));
} else {
}

var G__41453 = seq__41394;
var G__41454 = chunk__41395;
var G__41455 = count__41396;
var G__41456 = (i__41397 + (1));
seq__41394 = G__41453;
chunk__41395 = G__41454;
count__41396 = G__41455;
i__41397 = G__41456;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41394);
if(temp__4657__auto____$1){
var seq__41394__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41394__$1)){
var c__28678__auto__ = cljs.core.chunk_first.call(null,seq__41394__$1);
var G__41457 = cljs.core.chunk_rest.call(null,seq__41394__$1);
var G__41458 = c__28678__auto__;
var G__41459 = cljs.core.count.call(null,c__28678__auto__);
var G__41460 = (0);
seq__41394 = G__41457;
chunk__41395 = G__41458;
count__41396 = G__41459;
i__41397 = G__41460;
continue;
} else {
var role = cljs.core.first.call(null,seq__41394__$1);
var temp__4657__auto___41461__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41461__$2)){
var spec_41462 = temp__4657__auto___41461__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_41462));
} else {
}

var G__41463 = cljs.core.next.call(null,seq__41394__$1);
var G__41464 = null;
var G__41465 = (0);
var G__41466 = (0);
seq__41394 = G__41463;
chunk__41395 = G__41464;
count__41396 = G__41465;
i__41397 = G__41466;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map