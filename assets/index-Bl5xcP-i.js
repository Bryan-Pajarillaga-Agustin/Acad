(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Op={exports:{}},tu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function Nb(){if(Uv)return tu;Uv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:s,type:r,key:f,ref:o!==void 0?o:null,props:u}}return tu.Fragment=e,tu.jsx=t,tu.jsxs=t,tu}var jv;function Ob(){return jv||(jv=1,Op.exports=Nb()),Op.exports}var S=Ob(),Dp={exports:{}},Ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function Db(){if(Bv)return Ie;Bv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.iterator;function O(D){return D===null||typeof D!="object"?null:(D=A&&D[A]||D["@@iterator"],typeof D=="function"?D:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,Q={};function W(D,q,ue){this.props=D,this.context=q,this.refs=Q,this.updater=ue||z}W.prototype.isReactComponent={},W.prototype.setState=function(D,q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,q,"setState")},W.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Y(){}Y.prototype=W.prototype;function ee(D,q,ue){this.props=D,this.context=q,this.refs=Q,this.updater=ue||z}var te=ee.prototype=new Y;te.constructor=ee,F(te,W.prototype),te.isPureReactComponent=!0;var se=Array.isArray,oe={H:null,A:null,T:null,S:null},me=Object.prototype.hasOwnProperty;function x(D,q,ue,le,re,ve){return ue=ve.ref,{$$typeof:s,type:D,key:q,ref:ue!==void 0?ue:null,props:ve}}function R(D,q){return x(D.type,q,void 0,void 0,void 0,D.props)}function b(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function C(D){var q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ue){return q[ue]})}var k=/\/+/g;function L(D,q){return typeof D=="object"&&D!==null&&D.key!=null?C(""+D.key):q.toString(36)}function N(){}function $e(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(N,N):(D.status="pending",D.then(function(q){D.status==="pending"&&(D.status="fulfilled",D.value=q)},function(q){D.status==="pending"&&(D.status="rejected",D.reason=q)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function we(D,q,ue,le,re){var ve=typeof D;(ve==="undefined"||ve==="boolean")&&(D=null);var Ce=!1;if(D===null)Ce=!0;else switch(ve){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(D.$$typeof){case s:case e:Ce=!0;break;case E:return Ce=D._init,we(Ce(D._payload),q,ue,le,re)}}if(Ce)return re=re(D),Ce=le===""?"."+L(D,0):le,se(re)?(ue="",Ce!=null&&(ue=Ce.replace(k,"$&/")+"/"),we(re,q,ue,"",function(st){return st})):re!=null&&(b(re)&&(re=R(re,ue+(re.key==null||D&&D.key===re.key?"":(""+re.key).replace(k,"$&/")+"/")+Ce)),q.push(re)),1;Ce=0;var ft=le===""?".":le+":";if(se(D))for(var Be=0;Be<D.length;Be++)le=D[Be],ve=ft+L(le,Be),Ce+=we(le,q,ue,ve,re);else if(Be=O(D),typeof Be=="function")for(D=Be.call(D),Be=0;!(le=D.next()).done;)le=le.value,ve=ft+L(le,Be++),Ce+=we(le,q,ue,ve,re);else if(ve==="object"){if(typeof D.then=="function")return we($e(D),q,ue,le,re);throw q=String(D),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function ie(D,q,ue){if(D==null)return D;var le=[],re=0;return we(D,le,"","",function(ve){return q.call(ue,ve,re++)}),le}function fe(D){if(D._status===-1){var q=D._result;q=q(),q.then(function(ue){(D._status===0||D._status===-1)&&(D._status=1,D._result=ue)},function(ue){(D._status===0||D._status===-1)&&(D._status=2,D._result=ue)}),D._status===-1&&(D._status=0,D._result=q)}if(D._status===1)return D._result.default;throw D._result}var de=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Ee(){}return Ie.Children={map:ie,forEach:function(D,q,ue){ie(D,function(){q.apply(this,arguments)},ue)},count:function(D){var q=0;return ie(D,function(){q++}),q},toArray:function(D){return ie(D,function(q){return q})||[]},only:function(D){if(!b(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ie.Component=W,Ie.Fragment=t,Ie.Profiler=o,Ie.PureComponent=ee,Ie.StrictMode=r,Ie.Suspense=m,Ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=oe,Ie.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ie.cache=function(D){return function(){return D.apply(null,arguments)}},Ie.cloneElement=function(D,q,ue){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var le=F({},D.props),re=D.key,ve=void 0;if(q!=null)for(Ce in q.ref!==void 0&&(ve=void 0),q.key!==void 0&&(re=""+q.key),q)!me.call(q,Ce)||Ce==="key"||Ce==="__self"||Ce==="__source"||Ce==="ref"&&q.ref===void 0||(le[Ce]=q[Ce]);var Ce=arguments.length-2;if(Ce===1)le.children=ue;else if(1<Ce){for(var ft=Array(Ce),Be=0;Be<Ce;Be++)ft[Be]=arguments[Be+2];le.children=ft}return x(D.type,re,void 0,void 0,ve,le)},Ie.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},Ie.createElement=function(D,q,ue){var le,re={},ve=null;if(q!=null)for(le in q.key!==void 0&&(ve=""+q.key),q)me.call(q,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(re[le]=q[le]);var Ce=arguments.length-2;if(Ce===1)re.children=ue;else if(1<Ce){for(var ft=Array(Ce),Be=0;Be<Ce;Be++)ft[Be]=arguments[Be+2];re.children=ft}if(D&&D.defaultProps)for(le in Ce=D.defaultProps,Ce)re[le]===void 0&&(re[le]=Ce[le]);return x(D,ve,void 0,void 0,null,re)},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(D){return{$$typeof:p,render:D}},Ie.isValidElement=b,Ie.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:fe}},Ie.memo=function(D,q){return{$$typeof:g,type:D,compare:q===void 0?null:q}},Ie.startTransition=function(D){var q=oe.T,ue={};oe.T=ue;try{var le=D(),re=oe.S;re!==null&&re(ue,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(Ee,de)}catch(ve){de(ve)}finally{oe.T=q}},Ie.unstable_useCacheRefresh=function(){return oe.H.useCacheRefresh()},Ie.use=function(D){return oe.H.use(D)},Ie.useActionState=function(D,q,ue){return oe.H.useActionState(D,q,ue)},Ie.useCallback=function(D,q){return oe.H.useCallback(D,q)},Ie.useContext=function(D){return oe.H.useContext(D)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(D,q){return oe.H.useDeferredValue(D,q)},Ie.useEffect=function(D,q){return oe.H.useEffect(D,q)},Ie.useId=function(){return oe.H.useId()},Ie.useImperativeHandle=function(D,q,ue){return oe.H.useImperativeHandle(D,q,ue)},Ie.useInsertionEffect=function(D,q){return oe.H.useInsertionEffect(D,q)},Ie.useLayoutEffect=function(D,q){return oe.H.useLayoutEffect(D,q)},Ie.useMemo=function(D,q){return oe.H.useMemo(D,q)},Ie.useOptimistic=function(D,q){return oe.H.useOptimistic(D,q)},Ie.useReducer=function(D,q,ue){return oe.H.useReducer(D,q,ue)},Ie.useRef=function(D){return oe.H.useRef(D)},Ie.useState=function(D){return oe.H.useState(D)},Ie.useSyncExternalStore=function(D,q,ue){return oe.H.useSyncExternalStore(D,q,ue)},Ie.useTransition=function(){return oe.H.useTransition()},Ie.version="19.0.0",Ie}var zv;function km(){return zv||(zv=1,Dp.exports=Db()),Dp.exports}var ce=km(),xp={exports:{}},nu={},kp={exports:{}},Mp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function xb(){return Hv||(Hv=1,function(s){function e(ie,fe){var de=ie.length;ie.push(fe);e:for(;0<de;){var Ee=de-1>>>1,D=ie[Ee];if(0<o(D,fe))ie[Ee]=fe,ie[de]=D,de=Ee;else break e}}function t(ie){return ie.length===0?null:ie[0]}function r(ie){if(ie.length===0)return null;var fe=ie[0],de=ie.pop();if(de!==fe){ie[0]=de;e:for(var Ee=0,D=ie.length,q=D>>>1;Ee<q;){var ue=2*(Ee+1)-1,le=ie[ue],re=ue+1,ve=ie[re];if(0>o(le,de))re<D&&0>o(ve,le)?(ie[Ee]=ve,ie[re]=de,Ee=re):(ie[Ee]=le,ie[ue]=de,Ee=ue);else if(re<D&&0>o(ve,de))ie[Ee]=ve,ie[re]=de,Ee=re;else break e}}return fe}function o(ie,fe){var de=ie.sortIndex-fe.sortIndex;return de!==0?de:ie.id-fe.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();s.unstable_now=function(){return f.now()-p}}var m=[],g=[],E=1,A=null,O=3,z=!1,F=!1,Q=!1,W=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function te(ie){for(var fe=t(g);fe!==null;){if(fe.callback===null)r(g);else if(fe.startTime<=ie)r(g),fe.sortIndex=fe.expirationTime,e(m,fe);else break;fe=t(g)}}function se(ie){if(Q=!1,te(ie),!F)if(t(m)!==null)F=!0,$e();else{var fe=t(g);fe!==null&&we(se,fe.startTime-ie)}}var oe=!1,me=-1,x=5,R=-1;function b(){return!(s.unstable_now()-R<x)}function C(){if(oe){var ie=s.unstable_now();R=ie;var fe=!0;try{e:{F=!1,Q&&(Q=!1,Y(me),me=-1),z=!0;var de=O;try{t:{for(te(ie),A=t(m);A!==null&&!(A.expirationTime>ie&&b());){var Ee=A.callback;if(typeof Ee=="function"){A.callback=null,O=A.priorityLevel;var D=Ee(A.expirationTime<=ie);if(ie=s.unstable_now(),typeof D=="function"){A.callback=D,te(ie),fe=!0;break t}A===t(m)&&r(m),te(ie)}else r(m);A=t(m)}if(A!==null)fe=!0;else{var q=t(g);q!==null&&we(se,q.startTime-ie),fe=!1}}break e}finally{A=null,O=de,z=!1}fe=void 0}}finally{fe?k():oe=!1}}}var k;if(typeof ee=="function")k=function(){ee(C)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,N=L.port2;L.port1.onmessage=C,k=function(){N.postMessage(null)}}else k=function(){W(C,0)};function $e(){oe||(oe=!0,k())}function we(ie,fe){me=W(function(){ie(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ie){ie.callback=null},s.unstable_continueExecution=function(){F||z||(F=!0,$e())},s.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<ie?Math.floor(1e3/ie):5},s.unstable_getCurrentPriorityLevel=function(){return O},s.unstable_getFirstCallbackNode=function(){return t(m)},s.unstable_next=function(ie){switch(O){case 1:case 2:case 3:var fe=3;break;default:fe=O}var de=O;O=fe;try{return ie()}finally{O=de}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ie,fe){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var de=O;O=ie;try{return fe()}finally{O=de}},s.unstable_scheduleCallback=function(ie,fe,de){var Ee=s.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?Ee+de:Ee):de=Ee,ie){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=de+D,ie={id:E++,callback:fe,priorityLevel:ie,startTime:de,expirationTime:D,sortIndex:-1},de>Ee?(ie.sortIndex=de,e(g,ie),t(m)===null&&ie===t(g)&&(Q?(Y(me),me=-1):Q=!0,we(se,de-Ee))):(ie.sortIndex=D,e(m,ie),F||z||(F=!0,$e())),ie},s.unstable_shouldYield=b,s.unstable_wrapCallback=function(ie){var fe=O;return function(){var de=O;O=fe;try{return ie.apply(this,arguments)}finally{O=de}}}}(Mp)),Mp}var Fv;function kb(){return Fv||(Fv=1,kp.exports=xb()),kp.exports}var Pp={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function Mb(){if(qv)return on;qv=1;var s=km();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,E){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:A==null?null:""+A,children:m,containerInfo:g,implementation:E}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,on.createPortal=function(m,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(m,g,null,E)},on.flushSync=function(m){var g=f.T,E=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=g,r.p=E,r.d.f()}},on.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(m,g))},on.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},on.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var E=g.as,A=p(E,g.crossOrigin),O=typeof g.integrity=="string"?g.integrity:void 0,z=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?r.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:A,integrity:O,fetchPriority:z}):E==="script"&&r.d.X(m,{crossOrigin:A,integrity:O,fetchPriority:z,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},on.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=p(g.as,g.crossOrigin);r.d.M(m,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(m)},on.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,A=p(E,g.crossOrigin);r.d.L(m,E,{crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},on.preloadModule=function(m,g){if(typeof m=="string")if(g){var E=p(g.as,g.crossOrigin);r.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(m)},on.requestFormReset=function(m){r.d.r(m)},on.unstable_batchedUpdates=function(m,g){return m(g)},on.useFormState=function(m,g,E){return f.H.useFormState(m,g,E)},on.useFormStatus=function(){return f.H.useHostTransitionStatus()},on.version="19.0.0",on}var Gv;function Pb(){if(Gv)return Pp.exports;Gv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pp.exports=Mb(),Pp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv;function Lb(){if(Kv)return nu;Kv=1;var s=kb(),e=km(),t=Pb();function r(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),z=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),se=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=oe&&n[oe]||n["@@iterator"],typeof n=="function"?n:null)}var x=Symbol.for("react.client.reference");function R(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===x?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case m:return"Fragment";case p:return"Portal";case E:return"Profiler";case g:return"StrictMode";case Q:return"Suspense";case W:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Provider";case O:return(n._context.displayName||"Context")+".Consumer";case F:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return i=n.displayName||null,i!==null?i:R(n.type)||"Memo";case ee:i=n._payload,n=n._init;try{return R(n(i))}catch{}}return null}var b=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=Object.assign,k,L;function N(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||"",L=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+k+n+L}var $e=!1;function we(n,i){if(!n||$e)return"";$e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(G){var B=G}Reflect.construct(n,[],J)}else{try{J.call()}catch(G){B=G}n.call(J.prototype)}}else{try{throw Error()}catch(G){B=G}(J=n())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(G){if(G&&B&&typeof G.stack=="string")return[G.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var I=v.split(`
`),P=T.split(`
`);for(h=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;h<P.length&&!P[h].includes("DetermineComponentFrameRoot");)h++;if(l===I.length||h===P.length)for(l=I.length-1,h=P.length-1;1<=l&&0<=h&&I[l]!==P[h];)h--;for(;1<=l&&0<=h;l--,h--)if(I[l]!==P[h]){if(l!==1||h!==1)do if(l--,h--,0>h||I[l]!==P[h]){var K=`
`+I[l].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=l&&0<=h);break}}}finally{$e=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?N(a):""}function ie(n){switch(n.tag){case 26:case 27:case 5:return N(n.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function fe(n){try{var i="";do i+=ie(n),n=n.return;while(n);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function de(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ee(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function D(n){if(de(n)!==n)throw Error(r(188))}function q(n){var i=n.alternate;if(!i){if(i=de(n),i===null)throw Error(r(188));return i!==n?null:n}for(var a=n,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return D(h),n;if(d===l)return D(h),i;d=d.sibling}throw Error(r(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?n:i}function ue(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=ue(n),i!==null)return i;n=n.sibling}return null}var le=Array.isArray,re=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ve={pending:!1,data:null,method:null,action:null},Ce=[],ft=-1;function Be(n){return{current:n}}function st(n){0>ft||(n.current=Ce[ft],Ce[ft]=null,ft--)}function $(n,i){ft++,Ce[ft]=n.current,n.current=i}var Ne=Be(null),Mt=Be(null),Pt=Be(null),gi=Be(null);function ni(n,i){switch($(Pt,i),$(Mt,n),$(Ne,null),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?dv(i):0;break;default:if(n=n===8?i.parentNode:i,i=n.tagName,n=n.namespaceURI)n=dv(n),i=pv(n,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}st(Ne),$(Ne,i)}function ii(){st(Ne),st(Mt),st(Pt)}function $o(n){n.memoizedState!==null&&$(gi,n);var i=Ne.current,a=pv(i,n.type);i!==a&&($(Mt,n),$(Ne,a))}function Ia(n){Mt.current===n&&(st(Ne),st(Mt)),gi.current===n&&(st(gi),$l._currentValue=ve)}var Na=Object.prototype.hasOwnProperty,br=s.unstable_scheduleCallback,Oa=s.unstable_cancelCallback,xf=s.unstable_shouldYield,Xo=s.unstable_requestPaint,Tn=s.unstable_now,Ju=s.unstable_getCurrentPriorityLevel,It=s.unstable_ImmediatePriority,Lt=s.unstable_UserBlockingPriority,Hi=s.unstable_NormalPriority,ec=s.unstable_LowPriority,Zo=s.unstable_IdlePriority,kf=s.log,Cr=s.unstable_setDisableYieldValue,Cs=null,rn=null;function Jo(n){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Cs,n,void 0,(n.current.flags&128)===128)}catch{}}function yi(n){if(typeof kf=="function"&&Cr(n),rn&&typeof rn.setStrictMode=="function")try{rn.setStrictMode(Cs,n)}catch{}}var _n=Math.clz32?Math.clz32:nc,el=Math.log,tc=Math.LN2;function nc(n){return n>>>=0,n===0?32:31-(el(n)/tc|0)|0}var vi=128,Rs=4194304;function si(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Un(n,i){var a=n.pendingLanes;if(a===0)return 0;var l=0,h=n.suspendedLanes,d=n.pingedLanes,v=n.warmLanes;n=n.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~h,a!==0?l=si(a):(d&=T,d!==0?l=si(d):n||(v=T&~v,v!==0&&(l=si(v))))):(T=a&~h,T!==0?l=si(T):d!==0?l=si(d):n||(v=a&~v,v!==0&&(l=si(v)))),l===0?0:i!==0&&i!==l&&(i&h)===0&&(h=l&-l,v=i&-i,h>=v||h===32&&(v&4194176)!==0)?i:l}function Is(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function Da(n,i){switch(n){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tl(){var n=vi;return vi<<=1,(vi&4194176)===0&&(vi=128),n}function Ns(){var n=Rs;return Rs<<=1,(Rs&62914560)===0&&(Rs=4194304),n}function xa(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Tt(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function ic(n,i,a,l,h,d){var v=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var T=n.entanglements,I=n.expirationTimes,P=n.hiddenUpdates;for(a=v&~a;0<a;){var K=31-_n(a),J=1<<K;T[K]=0,I[K]=-1;var B=P[K];if(B!==null)for(P[K]=null,K=0;K<B.length;K++){var G=B[K];G!==null&&(G.lane&=-536870913)}a&=~J}l!==0&&Os(n,l,0),d!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=d&~(v&~i))}function Os(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-_n(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194218}function Ds(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var l=31-_n(a),h=1<<l;h&i|n[l]&i&&(n[l]|=i),a&=~h}}function sc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function rc(){var n=re.p;return n!==0?n:(n=window.event,n===void 0?32:xv(n.type))}function xs(n,i){var a=re.p;try{return re.p=n,i()}finally{re.p=a}}var Ei=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Ei,Nt="__reactProps$"+Ei,Fi="__reactContainer$"+Ei,Rr="__reactEvents$"+Ei,ka="__reactListeners$"+Ei,Ti="__reactHandles$"+Ei,nl="__reactResources$"+Ei,ks="__reactMarker$"+Ei;function Ir(n){delete n[Vt],delete n[Nt],delete n[Rr],delete n[ka],delete n[Ti]}function ri(n){var i=n[Vt];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Fi]||a[Vt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=gv(n);n!==null;){if(a=n[Vt])return a;n=gv(n)}return i}n=a,a=n.parentNode}return null}function qi(n){if(n=n[Vt]||n[Fi]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function Ms(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(r(33))}function Ps(n){var i=n[nl];return i||(i=n[nl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function dt(n){n[ks]=!0}var il=new Set,Ma={};function In(n,i){Sn(n,i),Sn(n+"Capture",i)}function Sn(n,i){for(Ma[n]=i,n=0;n<i.length;n++)il.add(i[n])}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sl={},rl={};function ac(n){return Na.call(rl,n)?!0:Na.call(sl,n)?!1:Mf.test(n)?rl[n]=!0:(sl[n]=!0,!1)}function Ls(n,i,a){if(ac(i))if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+a)}}function Vs(n,i,a){if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+a)}}function jn(n,i,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(i,a,""+l)}}function gn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function oc(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Pf(n){var i=oc(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Nr(n){n._valueTracker||(n._valueTracker=Pf(n))}function al(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return n&&(l=oc(n)?n.checked?"true":"false":n.value),n=l,n!==a?(i.setValue(n),!0):!1}function Pa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Gi=/[\n"\\]/g;function _t(n){return n.replace(Gi,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Us(n,i,a,l,h,d,v,T){n.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.type=v:n.removeAttribute("type"),i!=null?v==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+gn(i)):n.value!==""+gn(i)&&(n.value=""+gn(i)):v!=="submit"&&v!=="reset"||n.removeAttribute("value"),i!=null?La(n,v,gn(i)):a!=null?La(n,v,gn(a)):l!=null&&n.removeAttribute("value"),h==null&&d!=null&&(n.defaultChecked=!!d),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+gn(T):n.removeAttribute("name")}function Or(n,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+gn(a):"",i=i!=null?""+gn(i):a,T||i===n.value||(n.value=i),n.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=T?n.checked:!!l,n.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(n.name=v)}function La(n,i,a){i==="number"&&Pa(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function We(n,i,a,l){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&l&&(n[a].defaultSelected=!0)}else{for(a=""+gn(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,l&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Dr(n,i,a){if(i!=null&&(i=""+gn(i),i!==n.value&&(n.value=i),a==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=a!=null?""+gn(a):""}function js(n,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(r(92));if(le(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=gn(i),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function Bn(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Lf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ol(n,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":l?n.setProperty(i,a):typeof a!="number"||a===0||Lf.has(i)?i==="float"?n.cssFloat=a:n[i]=(""+a).trim():n[i]=a+"px"}function lc(n,i,a){if(i!=null&&typeof i!="object")throw Error(r(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&ol(n,h,l)}else for(var d in i)i.hasOwnProperty(d)&&ol(n,d,i[d])}function ll(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Si(n){return Uf.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var zn=null;function Va(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ki=null,Wi=null;function Yi(n){var i=qi(n);if(i&&(n=i.stateNode)){var a=n[Nt]||null;e:switch(n=i.stateNode,i.type){case"input":if(Us(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_t(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==n&&l.form===n.form){var h=l[Nt]||null;if(!h)throw Error(r(90));Us(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===n.form&&al(l)}break e;case"textarea":Dr(n,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&We(n,!!a.multiple,i,!1)}}}var ul=!1;function uc(n,i,a){if(ul)return n(i,a);ul=!0;try{var l=n(i);return l}finally{if(ul=!1,(Ki!==null||Wi!==null)&&(eh(),Ki&&(i=Ki,n=Wi,Wi=Ki=null,Yi(i),n)))for(i=0;i<n.length;i++)Yi(n[i])}}function xr(n,i){var a=n.stateNode;if(a===null)return null;var l=a[Nt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(r(231,i,typeof a));return a}var Hn=!1;if(Nn)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Hn=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Hn=!1}var Ai=null,Bs=null,Qi=null;function cl(){if(Qi)return Qi;var n,i=Bs,a=i.length,l,h="value"in Ai?Ai.value:Ai.textContent,d=h.length;for(n=0;n<a&&i[n]===h[n];n++);var v=a-n;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Qi=h.slice(n,1<l?1-l:void 0)}function wi(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function bi(){return!0}function hl(){return!1}function Ut(n){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?bi:hl,this.isPropagationStopped=hl,this}return C(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bi)},persist:function(){},isPersistent:bi}),i}var Xe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ua=Ut(Xe),Mr=C({},Xe,{view:0,detail:0}),cc=Ut(Mr),ja,Ba,Ci,Pr=C({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ur,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ci&&(Ci&&n.type==="mousemove"?(ja=n.screenX-Ci.screenX,Ba=n.screenY-Ci.screenY):Ba=ja=0,Ci=n),ja)},movementY:function(n){return"movementY"in n?n.movementY:Ba}}),Fn=Ut(Pr),hc=C({},Pr,{dataTransfer:0}),jf=Ut(hc),Lr=C({},Mr,{relatedTarget:0}),za=Ut(Lr),fl=C({},Xe,{animationName:0,elapsedTime:0,pseudoElement:0}),Ha=Ut(fl),fc=C({},Xe,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Fa=Ut(fc),Bf=C({},Xe,{data:0}),dl=Ut(Bf),Vr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=pc[n])?!!i[n]:!1}function Ur(){return pl}var mc=C({},Mr,{key:function(n){if(n.key){var i=Vr[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=wi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ur,charCode:function(n){return n.type==="keypress"?wi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),qa=Ut(mc),_c=C({},Pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ml=Ut(_c),$i=C({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ur}),gc=Ut($i),yc=C({},Xe,{propertyName:0,elapsedTime:0,pseudoElement:0}),vc=Ut(yc),Ec=C({},Pr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ga=Ut(Ec),yn=C({},Xe,{newState:0,oldState:0}),Tc=Ut(yn),Sc=[9,13,27,32],Ri=Nn&&"CompositionEvent"in window,c=null;Nn&&"documentMode"in document&&(c=document.documentMode);var _=Nn&&"TextEvent"in window&&!c,y=Nn&&(!Ri||c&&8<c&&11>=c),w=" ",U=!1;function H(n,i){switch(n){case"keyup":return Sc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ae(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ze=!1;function Ot(n,i){switch(n){case"compositionend":return ae(i);case"keypress":return i.which!==32?null:(U=!0,w);case"textInput":return n=i.data,n===w&&U?null:n;default:return null}}function He(n,i){if(ze)return n==="compositionend"||!Ri&&H(n,i)?(n=cl(),Qi=Bs=Ai=null,ze=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return y&&i.locale!=="ko"?null:i.data;default:return null}}var jt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dt(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!jt[n.type]:i==="textarea"}function Xi(n,i,a,l){Ki?Wi?Wi.push(l):Wi=[l]:Ki=l,i=rh(i,"onChange"),0<i.length&&(a=new Ua("onChange","change",null,a,l),n.push({event:a,listeners:i}))}var Yt=null,Ii=null;function _l(n){lv(n,0)}function Ac(n){var i=Ms(n);if(al(i))return n}function V_(n,i){if(n==="change")return i}var U_=!1;if(Nn){var zf;if(Nn){var Hf="oninput"in document;if(!Hf){var j_=document.createElement("div");j_.setAttribute("oninput","return;"),Hf=typeof j_.oninput=="function"}zf=Hf}else zf=!1;U_=zf&&(!document.documentMode||9<document.documentMode)}function B_(){Yt&&(Yt.detachEvent("onpropertychange",z_),Ii=Yt=null)}function z_(n){if(n.propertyName==="value"&&Ac(Ii)){var i=[];Xi(i,Ii,n,Va(n)),uc(_l,i)}}function rw(n,i,a){n==="focusin"?(B_(),Yt=i,Ii=a,Yt.attachEvent("onpropertychange",z_)):n==="focusout"&&B_()}function aw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ac(Ii)}function ow(n,i){if(n==="click")return Ac(i)}function lw(n,i){if(n==="input"||n==="change")return Ac(i)}function uw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var On=typeof Object.is=="function"?Object.is:uw;function gl(n,i){if(On(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Na.call(i,h)||!On(n[h],i[h]))return!1}return!0}function H_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function F_(n,i){var a=H_(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=i&&l>=i)return{node:a,offset:i-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=H_(a)}}function q_(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?q_(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function G_(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=Pa(n.document);i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Pa(n.document)}return i}function Ff(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function cw(n,i){var a=G_(i);i=n.focusedElem;var l=n.selectionRange;if(a!==i&&i&&i.ownerDocument&&q_(i.ownerDocument.documentElement,i)){if(l!==null&&Ff(i)){if(n=l.start,a=l.end,a===void 0&&(a=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(a,i.value.length);else if(a=(n=i.ownerDocument||document)&&n.defaultView||window,a.getSelection){a=a.getSelection();var h=i.textContent.length,d=Math.min(l.start,h);l=l.end===void 0?d:Math.min(l.end,h),!a.extend&&d>l&&(h=l,l=d,d=h),h=F_(i,d);var v=F_(i,l);h&&v&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(h.node,h.offset),a.removeAllRanges(),d>l?(a.addRange(n),a.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),a.addRange(n)))}}for(n=[],a=i;a=a.parentNode;)a.nodeType===1&&n.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)a=n[i],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var hw=Nn&&"documentMode"in document&&11>=document.documentMode,Ka=null,qf=null,yl=null,Gf=!1;function K_(n,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gf||Ka==null||Ka!==Pa(l)||(l=Ka,"selectionStart"in l&&Ff(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),yl&&gl(yl,l)||(yl=l,l=rh(qf,"onSelect"),0<l.length&&(i=new Ua("onSelect","select",null,i,a),n.push({event:i,listeners:l}),i.target=Ka)))}function jr(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Wa={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionrun:jr("Transition","TransitionRun"),transitionstart:jr("Transition","TransitionStart"),transitioncancel:jr("Transition","TransitionCancel"),transitionend:jr("Transition","TransitionEnd")},Kf={},W_={};Nn&&(W_=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function Br(n){if(Kf[n])return Kf[n];if(!Wa[n])return n;var i=Wa[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in W_)return Kf[n]=i[a];return n}var Y_=Br("animationend"),Q_=Br("animationiteration"),$_=Br("animationstart"),fw=Br("transitionrun"),dw=Br("transitionstart"),pw=Br("transitioncancel"),X_=Br("transitionend"),Z_=new Map,J_="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ai(n,i){Z_.set(n,i),In(i,[n])}var qn=[],Ya=0,Wf=0;function wc(){for(var n=Ya,i=Wf=Ya=0;i<n;){var a=qn[i];qn[i++]=null;var l=qn[i];qn[i++]=null;var h=qn[i];qn[i++]=null;var d=qn[i];if(qn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&eg(a,h,d)}}function bc(n,i,a,l){qn[Ya++]=n,qn[Ya++]=i,qn[Ya++]=a,qn[Ya++]=l,Wf|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Yf(n,i,a,l){return bc(n,i,a,l),Cc(n)}function zs(n,i){return bc(n,null,null,i),Cc(n)}function eg(n,i,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=n.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(h=!0)),n=d,d=d.return;h&&i!==null&&n.tag===3&&(d=n.stateNode,h=31-_n(a),d=d.hiddenUpdates,n=d[h],n===null?d[h]=[i]:n.push(i),i.lane=a|536870912)}function Cc(n){if(50<Fl)throw Fl=0,ep=null,Error(r(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Qa={},tg=new WeakMap;function Gn(n,i){if(typeof n=="object"&&n!==null){var a=tg.get(n);return a!==void 0?a:(i={value:n,source:i,stack:fe(i)},tg.set(n,i),i)}return{value:n,source:i,stack:fe(i)}}var $a=[],Xa=0,Rc=null,Ic=0,Kn=[],Wn=0,zr=null,Zi=1,Ji="";function Hr(n,i){$a[Xa++]=Ic,$a[Xa++]=Rc,Rc=n,Ic=i}function ng(n,i,a){Kn[Wn++]=Zi,Kn[Wn++]=Ji,Kn[Wn++]=zr,zr=n;var l=Zi;n=Ji;var h=32-_n(l)-1;l&=~(1<<h),a+=1;var d=32-_n(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Zi=1<<32-_n(i)+h|a<<h|l,Ji=d+n}else Zi=1<<d|a<<h|l,Ji=n}function Qf(n){n.return!==null&&(Hr(n,1),ng(n,1,0))}function $f(n){for(;n===Rc;)Rc=$a[--Xa],$a[Xa]=null,Ic=$a[--Xa],$a[Xa]=null;for(;n===zr;)zr=Kn[--Wn],Kn[Wn]=null,Ji=Kn[--Wn],Kn[Wn]=null,Zi=Kn[--Wn],Kn[Wn]=null}var vn=null,Qt=null,Ye=!1,oi=null,Ni=!1,Xf=Error(r(519));function Fr(n){var i=Error(r(418,""));throw Tl(Gn(i,n)),Xf}function ig(n){var i=n.stateNode,a=n.type,l=n.memoizedProps;switch(i[Vt]=n,i[Nt]=l,a){case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":case"embed":Ve("load",i);break;case"video":case"audio":for(a=0;a<Gl.length;a++)Ve(Gl[a],i);break;case"source":Ve("error",i);break;case"img":case"image":case"link":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"input":Ve("invalid",i),Or(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Nr(i);break;case"select":Ve("invalid",i);break;case"textarea":Ve("invalid",i),js(i,l.value,l.defaultValue,l.children),Nr(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||fv(i.textContent,a)?(l.popover!=null&&(Ve("beforetoggle",i),Ve("toggle",i)),l.onScroll!=null&&Ve("scroll",i),l.onScrollEnd!=null&&Ve("scrollend",i),l.onClick!=null&&(i.onclick=ah),i=!0):i=!1,i||Fr(n)}function sg(n){for(vn=n.return;vn;)switch(vn.tag){case 3:case 27:Ni=!0;return;case 5:case 13:Ni=!1;return;default:vn=vn.return}}function vl(n){if(n!==vn)return!1;if(!Ye)return sg(n),Ye=!0,!1;var i=!1,a;if((a=n.tag!==3&&n.tag!==27)&&((a=n.tag===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||gp(n.type,n.memoizedProps)),a=!a),a&&(i=!0),i&&Qt&&Fr(n),sg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(i===0){Qt=ui(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;n=n.nextSibling}Qt=null}}else Qt=vn?ui(n.stateNode.nextSibling):null;return!0}function El(){Qt=vn=null,Ye=!1}function Tl(n){oi===null?oi=[n]:oi.push(n)}var Sl=Error(r(460)),rg=Error(r(474)),Zf={then:function(){}};function ag(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Nc(){}function og(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then(Nc,Nc),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,n===Sl?Error(r(483)):n;default:if(typeof i.status=="string")i.then(Nc,Nc);else{if(n=rt,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,n===Sl?Error(r(483)):n}throw Al=i,Sl}}var Al=null;function lg(){if(Al===null)throw Error(r(459));var n=Al;return Al=null,n}var Za=null,wl=0;function Oc(n){var i=wl;return wl+=1,Za===null&&(Za=[]),og(Za,n,i)}function bl(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function Dc(n,i){throw i.$$typeof===u?Error(r(525)):(n=Object.prototype.toString.call(i),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function ug(n){var i=n._init;return i(n._payload)}function cg(n){function i(V,M){if(n){var j=V.deletions;j===null?(V.deletions=[M],V.flags|=16):j.push(M)}}function a(V,M){if(!n)return null;for(;M!==null;)i(V,M),M=M.sibling;return null}function l(V){for(var M=new Map;V!==null;)V.key!==null?M.set(V.key,V):M.set(V.index,V),V=V.sibling;return M}function h(V,M){return V=Js(V,M),V.index=0,V.sibling=null,V}function d(V,M,j){return V.index=j,n?(j=V.alternate,j!==null?(j=j.index,j<M?(V.flags|=33554434,M):j):(V.flags|=33554434,M)):(V.flags|=1048576,M)}function v(V){return n&&V.alternate===null&&(V.flags|=33554434),V}function T(V,M,j,X){return M===null||M.tag!==6?(M=Kd(j,V.mode,X),M.return=V,M):(M=h(M,j),M.return=V,M)}function I(V,M,j,X){var pe=j.type;return pe===m?K(V,M,j.props.children,X,j.key):M!==null&&(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===ee&&ug(pe)===M.type)?(M=h(M,j.props),bl(M,j),M.return=V,M):(M=Qc(j.type,j.key,j.props,null,V.mode,X),bl(M,j),M.return=V,M)}function P(V,M,j,X){return M===null||M.tag!==4||M.stateNode.containerInfo!==j.containerInfo||M.stateNode.implementation!==j.implementation?(M=Wd(j,V.mode,X),M.return=V,M):(M=h(M,j.children||[]),M.return=V,M)}function K(V,M,j,X,pe){return M===null||M.tag!==7?(M=Jr(j,V.mode,X,pe),M.return=V,M):(M=h(M,j),M.return=V,M)}function J(V,M,j){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Kd(""+M,V.mode,j),M.return=V,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case f:return j=Qc(M.type,M.key,M.props,null,V.mode,j),bl(j,M),j.return=V,j;case p:return M=Wd(M,V.mode,j),M.return=V,M;case ee:var X=M._init;return M=X(M._payload),J(V,M,j)}if(le(M)||me(M))return M=Jr(M,V.mode,j,null),M.return=V,M;if(typeof M.then=="function")return J(V,Oc(M),j);if(M.$$typeof===z)return J(V,Kc(V,M),j);Dc(V,M)}return null}function B(V,M,j,X){var pe=M!==null?M.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return pe!==null?null:T(V,M,""+j,X);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case f:return j.key===pe?I(V,M,j,X):null;case p:return j.key===pe?P(V,M,j,X):null;case ee:return pe=j._init,j=pe(j._payload),B(V,M,j,X)}if(le(j)||me(j))return pe!==null?null:K(V,M,j,X,null);if(typeof j.then=="function")return B(V,M,Oc(j),X);if(j.$$typeof===z)return B(V,M,Kc(V,j),X);Dc(V,j)}return null}function G(V,M,j,X,pe){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return V=V.get(j)||null,T(M,V,""+X,pe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case f:return V=V.get(X.key===null?j:X.key)||null,I(M,V,X,pe);case p:return V=V.get(X.key===null?j:X.key)||null,P(M,V,X,pe);case ee:var ke=X._init;return X=ke(X._payload),G(V,M,j,X,pe)}if(le(X)||me(X))return V=V.get(j)||null,K(M,V,X,pe,null);if(typeof X.then=="function")return G(V,M,j,Oc(X),pe);if(X.$$typeof===z)return G(V,M,j,Kc(M,X),pe);Dc(M,X)}return null}function ge(V,M,j,X){for(var pe=null,ke=null,ye=M,Se=M=0,Ht=null;ye!==null&&Se<j.length;Se++){ye.index>Se?(Ht=ye,ye=null):Ht=ye.sibling;var Qe=B(V,ye,j[Se],X);if(Qe===null){ye===null&&(ye=Ht);break}n&&ye&&Qe.alternate===null&&i(V,ye),M=d(Qe,M,Se),ke===null?pe=Qe:ke.sibling=Qe,ke=Qe,ye=Ht}if(Se===j.length)return a(V,ye),Ye&&Hr(V,Se),pe;if(ye===null){for(;Se<j.length;Se++)ye=J(V,j[Se],X),ye!==null&&(M=d(ye,M,Se),ke===null?pe=ye:ke.sibling=ye,ke=ye);return Ye&&Hr(V,Se),pe}for(ye=l(ye);Se<j.length;Se++)Ht=G(ye,V,Se,j[Se],X),Ht!==null&&(n&&Ht.alternate!==null&&ye.delete(Ht.key===null?Se:Ht.key),M=d(Ht,M,Se),ke===null?pe=Ht:ke.sibling=Ht,ke=Ht);return n&&ye.forEach(function(ar){return i(V,ar)}),Ye&&Hr(V,Se),pe}function Re(V,M,j,X){if(j==null)throw Error(r(151));for(var pe=null,ke=null,ye=M,Se=M=0,Ht=null,Qe=j.next();ye!==null&&!Qe.done;Se++,Qe=j.next()){ye.index>Se?(Ht=ye,ye=null):Ht=ye.sibling;var ar=B(V,ye,Qe.value,X);if(ar===null){ye===null&&(ye=Ht);break}n&&ye&&ar.alternate===null&&i(V,ye),M=d(ar,M,Se),ke===null?pe=ar:ke.sibling=ar,ke=ar,ye=Ht}if(Qe.done)return a(V,ye),Ye&&Hr(V,Se),pe;if(ye===null){for(;!Qe.done;Se++,Qe=j.next())Qe=J(V,Qe.value,X),Qe!==null&&(M=d(Qe,M,Se),ke===null?pe=Qe:ke.sibling=Qe,ke=Qe);return Ye&&Hr(V,Se),pe}for(ye=l(ye);!Qe.done;Se++,Qe=j.next())Qe=G(ye,V,Se,Qe.value,X),Qe!==null&&(n&&Qe.alternate!==null&&ye.delete(Qe.key===null?Se:Qe.key),M=d(Qe,M,Se),ke===null?pe=Qe:ke.sibling=Qe,ke=Qe);return n&&ye.forEach(function(Ib){return i(V,Ib)}),Ye&&Hr(V,Se),pe}function vt(V,M,j,X){if(typeof j=="object"&&j!==null&&j.type===m&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case f:e:{for(var pe=j.key;M!==null;){if(M.key===pe){if(pe=j.type,pe===m){if(M.tag===7){a(V,M.sibling),X=h(M,j.props.children),X.return=V,V=X;break e}}else if(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===ee&&ug(pe)===M.type){a(V,M.sibling),X=h(M,j.props),bl(X,j),X.return=V,V=X;break e}a(V,M);break}else i(V,M);M=M.sibling}j.type===m?(X=Jr(j.props.children,V.mode,X,j.key),X.return=V,V=X):(X=Qc(j.type,j.key,j.props,null,V.mode,X),bl(X,j),X.return=V,V=X)}return v(V);case p:e:{for(pe=j.key;M!==null;){if(M.key===pe)if(M.tag===4&&M.stateNode.containerInfo===j.containerInfo&&M.stateNode.implementation===j.implementation){a(V,M.sibling),X=h(M,j.children||[]),X.return=V,V=X;break e}else{a(V,M);break}else i(V,M);M=M.sibling}X=Wd(j,V.mode,X),X.return=V,V=X}return v(V);case ee:return pe=j._init,j=pe(j._payload),vt(V,M,j,X)}if(le(j))return ge(V,M,j,X);if(me(j)){if(pe=me(j),typeof pe!="function")throw Error(r(150));return j=pe.call(j),Re(V,M,j,X)}if(typeof j.then=="function")return vt(V,M,Oc(j),X);if(j.$$typeof===z)return vt(V,M,Kc(V,j),X);Dc(V,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,M!==null&&M.tag===6?(a(V,M.sibling),X=h(M,j),X.return=V,V=X):(a(V,M),X=Kd(j,V.mode,X),X.return=V,V=X),v(V)):a(V,M)}return function(V,M,j,X){try{wl=0;var pe=vt(V,M,j,X);return Za=null,pe}catch(ye){if(ye===Sl)throw ye;var ke=Xn(29,ye,null,V.mode);return ke.lanes=X,ke.return=V,ke}finally{}}}var qr=cg(!0),hg=cg(!1),Ja=Be(null),xc=Be(0);function fg(n,i){n=cs,$(xc,n),$(Ja,i),cs=n|i.baseLanes}function Jf(){$(xc,cs),$(Ja,Ja.current)}function ed(){cs=xc.current,st(Ja),st(xc)}var Yn=Be(null),Oi=null;function Hs(n){var i=n.alternate;$(xt,xt.current&1),$(Yn,n),Oi===null&&(i===null||Ja.current!==null||i.memoizedState!==null)&&(Oi=n)}function dg(n){if(n.tag===22){if($(xt,xt.current),$(Yn,n),Oi===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(Oi=n)}}else Fs()}function Fs(){$(xt,xt.current),$(Yn,Yn.current)}function es(n){st(Yn),Oi===n&&(Oi=null),st(xt)}var xt=Be(0);function kc(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var mw=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},_w=s.unstable_scheduleCallback,gw=s.unstable_NormalPriority,kt={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function td(){return{controller:new mw,data:new Map,refCount:0}}function Cl(n){n.refCount--,n.refCount===0&&_w(gw,function(){n.controller.abort()})}var Rl=null,nd=0,eo=0,to=null;function yw(n,i){if(Rl===null){var a=Rl=[];nd=0,eo=lp(),to={status:"pending",value:void 0,then:function(l){a.push(l)}}}return nd++,i.then(pg,pg),i}function pg(){if(--nd===0&&Rl!==null){to!==null&&(to.status="fulfilled");var n=Rl;Rl=null,eo=0,to=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function vw(n,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var mg=b.S;b.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&yw(n,i),mg!==null&&mg(n,i)};var Gr=Be(null);function id(){var n=Gr.current;return n!==null?n:rt.pooledCache}function Mc(n,i){i===null?$(Gr,Gr.current):$(Gr,i.pool)}function _g(){var n=id();return n===null?null:{parent:kt._currentValue,pool:n}}var qs=0,Oe=null,et=null,At=null,Pc=!1,no=!1,Kr=!1,Lc=0,Il=0,io=null,Ew=0;function St(){throw Error(r(321))}function sd(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!On(n[a],i[a]))return!1;return!0}function rd(n,i,a,l,h,d){return qs=d,Oe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,b.H=n===null||n.memoizedState===null?Wr:Gs,Kr=!1,d=a(l,h),Kr=!1,no&&(d=yg(i,a,l,h)),gg(n),d}function gg(n){b.H=Di;var i=et!==null&&et.next!==null;if(qs=0,At=et=Oe=null,Pc=!1,Il=0,io=null,i)throw Error(r(300));n===null||Bt||(n=n.dependencies,n!==null&&Gc(n)&&(Bt=!0))}function yg(n,i,a,l){Oe=n;var h=0;do{if(no&&(io=null),Il=0,no=!1,25<=h)throw Error(r(301));if(h+=1,At=et=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}b.H=Yr,d=i(a,l)}while(no);return d}function Tw(){var n=b.H,i=n.useState()[0];return i=typeof i.then=="function"?Nl(i):i,n=n.useState()[0],(et!==null?et.memoizedState:null)!==n&&(Oe.flags|=1024),i}function ad(){var n=Lc!==0;return Lc=0,n}function od(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function ld(n){if(Pc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Pc=!1}qs=0,At=et=Oe=null,no=!1,Il=Lc=0,io=null}function An(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?Oe.memoizedState=At=n:At=At.next=n,At}function wt(){if(et===null){var n=Oe.alternate;n=n!==null?n.memoizedState:null}else n=et.next;var i=At===null?Oe.memoizedState:At.next;if(i!==null)At=i,et=n;else{if(n===null)throw Oe.alternate===null?Error(r(467)):Error(r(310));et=n,n={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},At===null?Oe.memoizedState=At=n:At=At.next=n}return At}var Vc;Vc=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Nl(n){var i=Il;return Il+=1,io===null&&(io=[]),n=og(io,n,i),i=Oe,(At===null?i.memoizedState:At.next)===null&&(i=i.alternate,b.H=i===null||i.memoizedState===null?Wr:Gs),n}function Uc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Nl(n);if(n.$$typeof===z)return an(n)}throw Error(r(438,String(n)))}function ud(n){var i=null,a=Oe.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Vc(),Oe.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),l=0;l<n;l++)a[l]=se;return i.index++,a}function ts(n,i){return typeof i=="function"?i(n):i}function jc(n){var i=wt();return cd(i,et,n)}function cd(n,i,a){var l=n.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var h=n.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=n.baseState,h===null)n.memoizedState=d;else{i=h.next;var T=v=null,I=null,P=i,K=!1;do{var J=P.lane&-536870913;if(J!==P.lane?(Fe&J)===J:(qs&J)===J){var B=P.revertLane;if(B===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),J===eo&&(K=!0);else if((qs&B)===B){P=P.next,B===eo&&(K=!0);continue}else J={lane:0,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},I===null?(T=I=J,v=d):I=I.next=J,Oe.lanes|=B,er|=B;J=P.action,Kr&&a(d,J),d=P.hasEagerState?P.eagerState:a(d,J)}else B={lane:J,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},I===null?(T=I=B,v=d):I=I.next=B,Oe.lanes|=J,er|=J;P=P.next}while(P!==null&&P!==i);if(I===null?v=d:I.next=T,!On(d,n.memoizedState)&&(Bt=!0,K&&(a=to,a!==null)))throw a;n.memoizedState=d,n.baseState=v,n.baseQueue=I,l.lastRenderedState=d}return h===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function hd(n){var i=wt(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=n;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=n(d,v.action),v=v.next;while(v!==h);On(d,i.memoizedState)||(Bt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function vg(n,i,a){var l=Oe,h=wt(),d=Ye;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=i();var v=!On((et||h).memoizedState,a);if(v&&(h.memoizedState=a,Bt=!0),h=h.queue,pd(Sg.bind(null,l,h,n),[n]),h.getSnapshot!==i||v||At!==null&&At.memoizedState.tag&1){if(l.flags|=2048,so(9,Tg.bind(null,l,h,a,i),{destroy:void 0},null),rt===null)throw Error(r(349));d||(qs&60)!==0||Eg(l,i,a)}return a}function Eg(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Oe.updateQueue,i===null?(i=Vc(),Oe.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Tg(n,i,a,l){i.value=a,i.getSnapshot=l,Ag(i)&&wg(n)}function Sg(n,i,a){return a(function(){Ag(i)&&wg(n)})}function Ag(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!On(n,a)}catch{return!0}}function wg(n){var i=zs(n,2);i!==null&&En(i,n,2)}function fd(n){var i=An();if(typeof n=="function"){var a=n;if(n=a(),Kr){yi(!0);try{a()}finally{yi(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:n},i}function bg(n,i,a,l){return n.baseState=a,cd(n,et,typeof l=="function"?l:ts)}function Sw(n,i,a,l,h){if(Hc(n))throw Error(r(485));if(n=i.action,n!==null){var d={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};b.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Cg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Cg(n,i){var a=i.action,l=i.payload,h=n.state;if(i.isTransition){var d=b.T,v={};b.T=v;try{var T=a(h,l),I=b.S;I!==null&&I(v,T),Rg(n,i,T)}catch(P){dd(n,i,P)}finally{b.T=d}}else try{d=a(h,l),Rg(n,i,d)}catch(P){dd(n,i,P)}}function Rg(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ig(n,i,l)},function(l){return dd(n,i,l)}):Ig(n,i,a)}function Ig(n,i,a){i.status="fulfilled",i.value=a,Ng(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,Cg(n,a)))}function dd(n,i,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Ng(i),i=i.next;while(i!==l)}n.action=null}function Ng(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Og(n,i){return i}function Dg(n,i){if(Ye){var a=rt.formState;if(a!==null){e:{var l=Oe;if(Ye){if(Qt){t:{for(var h=Qt,d=Ni;h.nodeType!==8;){if(!d){h=null;break t}if(h=ui(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){Qt=ui(h.nextSibling),l=h.data==="F!";break e}}Fr(l)}l=!1}l&&(i=a[0])}}return a=An(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Og,lastRenderedState:i},a.queue=l,a=Qg.bind(null,Oe,l),l.dispatch=a,l=fd(!1),d=vd.bind(null,Oe,!1,l.queue),l=An(),h={state:i,dispatch:null,action:n,pending:null},l.queue=h,a=Sw.bind(null,Oe,h,d,a),h.dispatch=a,l.memoizedState=n,[i,a,!1]}function xg(n){var i=wt();return kg(i,et,n)}function kg(n,i,a){i=cd(n,i,Og)[0],n=jc(ts)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?Nl(i):i;var l=wt(),h=l.queue,d=h.dispatch;return a!==l.memoizedState&&(Oe.flags|=2048,so(9,Aw.bind(null,h,a),{destroy:void 0},null)),[i,d,n]}function Aw(n,i){n.action=i}function Mg(n){var i=wt(),a=et;if(a!==null)return kg(i,a,n);wt(),i=i.memoizedState,a=wt();var l=a.queue.dispatch;return a.memoizedState=n,[i,l,!1]}function so(n,i,a,l){return n={tag:n,create:i,inst:a,deps:l,next:null},i=Oe.updateQueue,i===null&&(i=Vc(),Oe.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,i.lastEffect=n),n}function Pg(){return wt().memoizedState}function Bc(n,i,a,l){var h=An();Oe.flags|=n,h.memoizedState=so(1|i,a,{destroy:void 0},l===void 0?null:l)}function zc(n,i,a,l){var h=wt();l=l===void 0?null:l;var d=h.memoizedState.inst;et!==null&&l!==null&&sd(l,et.memoizedState.deps)?h.memoizedState=so(i,a,d,l):(Oe.flags|=n,h.memoizedState=so(1|i,a,d,l))}function Lg(n,i){Bc(8390656,8,n,i)}function pd(n,i){zc(2048,8,n,i)}function Vg(n,i){return zc(4,2,n,i)}function Ug(n,i){return zc(4,4,n,i)}function jg(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Bg(n,i,a){a=a!=null?a.concat([n]):null,zc(4,4,jg.bind(null,i,n),a)}function md(){}function zg(n,i){var a=wt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&sd(i,l[1])?l[0]:(a.memoizedState=[n,i],n)}function Hg(n,i){var a=wt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&sd(i,l[1]))return l[0];if(l=n(),Kr){yi(!0);try{n()}finally{yi(!1)}}return a.memoizedState=[l,i],l}function _d(n,i,a){return a===void 0||(qs&1073741824)!==0?n.memoizedState=i:(n.memoizedState=a,n=qy(),Oe.lanes|=n,er|=n,a)}function Fg(n,i,a,l){return On(a,i)?a:Ja.current!==null?(n=_d(n,a,l),On(n,i)||(Bt=!0),n):(qs&42)===0?(Bt=!0,n.memoizedState=a):(n=qy(),Oe.lanes|=n,er|=n,i)}function qg(n,i,a,l,h){var d=re.p;re.p=d!==0&&8>d?d:8;var v=b.T,T={};b.T=T,vd(n,!1,i,a);try{var I=h(),P=b.S;if(P!==null&&P(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var K=vw(I,l);Ol(n,i,K,Mn(n))}else Ol(n,i,l,Mn(n))}catch(J){Ol(n,i,{then:function(){},status:"rejected",reason:J},Mn())}finally{re.p=d,b.T=v}}function ww(){}function gd(n,i,a,l){if(n.tag!==5)throw Error(r(476));var h=Gg(n).queue;qg(n,h,i,ve,a===null?ww:function(){return Kg(n),a(l)})}function Gg(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:ve,baseState:ve,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:ve},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Kg(n){var i=Gg(n).next.queue;Ol(n,i,{},Mn())}function yd(){return an($l)}function Wg(){return wt().memoizedState}function Yg(){return wt().memoizedState}function bw(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=Mn();n=Ys(a);var l=Qs(i,n,a);l!==null&&(En(l,i,a),kl(l,i,a)),i={cache:td()},n.payload=i;return}i=i.return}}function Cw(n,i,a){var l=Mn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Hc(n)?$g(i,a):(a=Yf(n,i,a,l),a!==null&&(En(a,n,l),Xg(a,i,l)))}function Qg(n,i,a){var l=Mn();Ol(n,i,a,l)}function Ol(n,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hc(n))$g(i,h);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,On(T,v))return bc(n,i,h,0),rt===null&&wc(),!1}catch{}finally{}if(a=Yf(n,i,h,l),a!==null)return En(a,n,l),Xg(a,i,l),!0}return!1}function vd(n,i,a,l){if(l={lane:2,revertLane:lp(),action:l,hasEagerState:!1,eagerState:null,next:null},Hc(n)){if(i)throw Error(r(479))}else i=Yf(n,a,l,2),i!==null&&En(i,n,2)}function Hc(n){var i=n.alternate;return n===Oe||i!==null&&i===Oe}function $g(n,i){no=Pc=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Xg(n,i,a){if((a&4194176)!==0){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,Ds(n,a)}}var Di={readContext:an,use:Uc,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St};Di.useCacheRefresh=St,Di.useMemoCache=St,Di.useHostTransitionStatus=St,Di.useFormState=St,Di.useActionState=St,Di.useOptimistic=St;var Wr={readContext:an,use:Uc,useCallback:function(n,i){return An().memoizedState=[n,i===void 0?null:i],n},useContext:an,useEffect:Lg,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,Bc(4194308,4,jg.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Bc(4194308,4,n,i)},useInsertionEffect:function(n,i){Bc(4,2,n,i)},useMemo:function(n,i){var a=An();i=i===void 0?null:i;var l=n();if(Kr){yi(!0);try{n()}finally{yi(!1)}}return a.memoizedState=[l,i],l},useReducer:function(n,i,a){var l=An();if(a!==void 0){var h=a(i);if(Kr){yi(!0);try{a(i)}finally{yi(!1)}}}else h=i;return l.memoizedState=l.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},l.queue=n,n=n.dispatch=Cw.bind(null,Oe,n),[l.memoizedState,n]},useRef:function(n){var i=An();return n={current:n},i.memoizedState=n},useState:function(n){n=fd(n);var i=n.queue,a=Qg.bind(null,Oe,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:md,useDeferredValue:function(n,i){var a=An();return _d(a,n,i)},useTransition:function(){var n=fd(!1);return n=qg.bind(null,Oe,n.queue,!0,!1),An().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var l=Oe,h=An();if(Ye){if(a===void 0)throw Error(r(407));a=a()}else{if(a=i(),rt===null)throw Error(r(349));(Fe&60)!==0||Eg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Lg(Sg.bind(null,l,d,n),[n]),l.flags|=2048,so(9,Tg.bind(null,l,d,a,i),{destroy:void 0},null),a},useId:function(){var n=An(),i=rt.identifierPrefix;if(Ye){var a=Ji,l=Zi;a=(l&~(1<<32-_n(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Lc++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ew++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},useCacheRefresh:function(){return An().memoizedState=bw.bind(null,Oe)}};Wr.useMemoCache=ud,Wr.useHostTransitionStatus=yd,Wr.useFormState=Dg,Wr.useActionState=Dg,Wr.useOptimistic=function(n){var i=An();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=vd.bind(null,Oe,!0,a),a.dispatch=i,[n,i]};var Gs={readContext:an,use:Uc,useCallback:zg,useContext:an,useEffect:pd,useImperativeHandle:Bg,useInsertionEffect:Vg,useLayoutEffect:Ug,useMemo:Hg,useReducer:jc,useRef:Pg,useState:function(){return jc(ts)},useDebugValue:md,useDeferredValue:function(n,i){var a=wt();return Fg(a,et.memoizedState,n,i)},useTransition:function(){var n=jc(ts)[0],i=wt().memoizedState;return[typeof n=="boolean"?n:Nl(n),i]},useSyncExternalStore:vg,useId:Wg};Gs.useCacheRefresh=Yg,Gs.useMemoCache=ud,Gs.useHostTransitionStatus=yd,Gs.useFormState=xg,Gs.useActionState=xg,Gs.useOptimistic=function(n,i){var a=wt();return bg(a,et,n,i)};var Yr={readContext:an,use:Uc,useCallback:zg,useContext:an,useEffect:pd,useImperativeHandle:Bg,useInsertionEffect:Vg,useLayoutEffect:Ug,useMemo:Hg,useReducer:hd,useRef:Pg,useState:function(){return hd(ts)},useDebugValue:md,useDeferredValue:function(n,i){var a=wt();return et===null?_d(a,n,i):Fg(a,et.memoizedState,n,i)},useTransition:function(){var n=hd(ts)[0],i=wt().memoizedState;return[typeof n=="boolean"?n:Nl(n),i]},useSyncExternalStore:vg,useId:Wg};Yr.useCacheRefresh=Yg,Yr.useMemoCache=ud,Yr.useHostTransitionStatus=yd,Yr.useFormState=Mg,Yr.useActionState=Mg,Yr.useOptimistic=function(n,i){var a=wt();return et!==null?bg(a,et,n,i):(a.baseState=n,[n,a.queue.dispatch])};function Ed(n,i,a,l){i=n.memoizedState,a=a(l,i),a=a==null?i:C({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Td={isMounted:function(n){return(n=n._reactInternals)?de(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var l=Mn(),h=Ys(l);h.payload=i,a!=null&&(h.callback=a),i=Qs(n,h,l),i!==null&&(En(i,n,l),kl(i,n,l))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var l=Mn(),h=Ys(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Qs(n,h,l),i!==null&&(En(i,n,l),kl(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Mn(),l=Ys(a);l.tag=2,i!=null&&(l.callback=i),i=Qs(n,l,a),i!==null&&(En(i,n,a),kl(i,n,a))}};function Zg(n,i,a,l,h,d,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!gl(a,l)||!gl(h,d):!0}function Jg(n,i,a,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==n&&Td.enqueueReplaceState(i,i.state,null)}function Qr(n,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(n=n.defaultProps){a===i&&(a=C({},a));for(var h in n)a[h]===void 0&&(a[h]=n[h])}return a}var Fc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function ey(n){Fc(n)}function ty(n){console.error(n)}function ny(n){Fc(n)}function qc(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function iy(n,i,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Sd(n,i,a){return a=Ys(a),a.tag=3,a.payload={element:null},a.callback=function(){qc(n,i)},a}function sy(n){return n=Ys(n),n.tag=3,n}function ry(n,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;n.payload=function(){return h(d)},n.callback=function(){iy(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(n.callback=function(){iy(i,a,l),typeof h!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function Rw(n,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&xl(i,a,h,!0),a=Yn.current,a!==null){switch(a.tag){case 13:return Oi===null?ip():a.alternate===null&&yt===0&&(yt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Zf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),rp(n,l,h)),!1;case 22:return a.flags|=65536,l===Zf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),rp(n,l,h)),!1}throw Error(r(435,a.tag))}return rp(n,l,h),ip(),!1}if(Ye)return i=Yn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Xf&&(n=Error(r(422),{cause:l}),Tl(Gn(n,a)))):(l!==Xf&&(i=Error(r(423),{cause:l}),Tl(Gn(i,a))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,l=Gn(l,a),h=Sd(n.stateNode,l,h),Vd(n,h),yt!==4&&(yt=2)),!1;var d=Error(r(520),{cause:l});if(d=Gn(d,a),zl===null?zl=[d]:zl.push(d),yt!==4&&(yt=2),i===null)return!0;l=Gn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=h&-h,a.lanes|=n,n=Sd(a.stateNode,l,n),Vd(a,n),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(tr===null||!tr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=sy(h),ry(h,n,a,l),Vd(a,h),!1}a=a.return}while(a!==null);return!1}var ay=Error(r(461)),Bt=!1;function $t(n,i,a,l){i.child=n===null?hg(i,null,a,l):qr(i,n.child,a,l)}function oy(n,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Xr(i),l=rd(n,i,a,v,d,h),T=ad(),n!==null&&!Bt?(od(n,i,h),ns(n,i,h)):(Ye&&T&&Qf(i),i.flags|=1,$t(n,i,l,h),i.child)}function ly(n,i,a,l,h){if(n===null){var d=a.type;return typeof d=="function"&&!Gd(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,uy(n,i,d,l,h)):(n=Qc(a.type,null,l,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(d=n.child,!Dd(n,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:gl,a(v,l)&&n.ref===i.ref)return ns(n,i,h)}return i.flags|=1,n=Js(d,l),n.ref=i.ref,n.return=i,i.child=n}function uy(n,i,a,l,h){if(n!==null){var d=n.memoizedProps;if(gl(d,l)&&n.ref===i.ref)if(Bt=!1,i.pendingProps=l=d,Dd(n,h))(n.flags&131072)!==0&&(Bt=!0);else return i.lanes=n.lanes,ns(n,i,h)}return Ad(n,i,a,l,h)}function cy(n,i,a){var l=i.pendingProps,h=l.children,d=(i.stateNode._pendingVisibility&2)!==0,v=n!==null?n.memoizedState:null;if(Dl(n,i),l.mode==="hidden"||d){if((i.flags&128)!==0){if(l=v!==null?v.baseLanes|a:a,n!==null){for(h=i.child=n.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return hy(n,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Mc(i,v!==null?v.cachePool:null),v!==null?fg(i,v):Jf(),dg(i);else return i.lanes=i.childLanes=536870912,hy(n,i,v!==null?v.baseLanes|a:a,a)}else v!==null?(Mc(i,v.cachePool),fg(i,v),Fs(),i.memoizedState=null):(n!==null&&Mc(i,null),Jf(),Fs());return $t(n,i,h,a),i.child}function hy(n,i,a,l){var h=id();return h=h===null?null:{parent:kt._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},n!==null&&Mc(i,null),Jf(),dg(i),n!==null&&xl(n,i,l,!0),null}function Dl(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(n===null||n.ref!==a)&&(i.flags|=2097664)}}function Ad(n,i,a,l,h){return Xr(i),a=rd(n,i,a,l,void 0,h),l=ad(),n!==null&&!Bt?(od(n,i,h),ns(n,i,h)):(Ye&&l&&Qf(i),i.flags|=1,$t(n,i,a,h),i.child)}function fy(n,i,a,l,h,d){return Xr(i),i.updateQueue=null,a=yg(i,l,a,h),gg(n),l=ad(),n!==null&&!Bt?(od(n,i,d),ns(n,i,d)):(Ye&&l&&Qf(i),i.flags|=1,$t(n,i,a,d),i.child)}function dy(n,i,a,l,h){if(Xr(i),i.stateNode===null){var d=Qa,v=a.contextType;typeof v=="object"&&v!==null&&(d=an(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Td,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Pd(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?an(v):Qa,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Ed(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Td.enqueueReplaceState(d,d.state,null),Pl(i,l,d,h),Ml(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){d=i.stateNode;var T=i.memoizedProps,I=Qr(a,T);d.props=I;var P=d.context,K=a.contextType;v=Qa,typeof K=="object"&&K!==null&&(v=an(K));var J=a.getDerivedStateFromProps;K=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||P!==v)&&Jg(i,d,l,v),Ws=!1;var B=i.memoizedState;d.state=B,Pl(i,l,d,h),Ml(),P=i.memoizedState,T||B!==P||Ws?(typeof J=="function"&&(Ed(i,a,J,l),P=i.memoizedState),(I=Ws||Zg(i,a,I,l,B,P,v))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=P),d.props=l,d.state=P,d.context=v,l=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Ld(n,i),v=i.memoizedProps,K=Qr(a,v),d.props=K,J=i.pendingProps,B=d.context,P=a.contextType,I=Qa,typeof P=="object"&&P!==null&&(I=an(P)),T=a.getDerivedStateFromProps,(P=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==J||B!==I)&&Jg(i,d,l,I),Ws=!1,B=i.memoizedState,d.state=B,Pl(i,l,d,h),Ml();var G=i.memoizedState;v!==J||B!==G||Ws||n!==null&&n.dependencies!==null&&Gc(n.dependencies)?(typeof T=="function"&&(Ed(i,a,T,l),G=i.memoizedState),(K=Ws||Zg(i,a,K,l,B,G,I)||n!==null&&n.dependencies!==null&&Gc(n.dependencies))?(P||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,G,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,G,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===n.memoizedProps&&B===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&B===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=G),d.props=l,d.state=G,d.context=I,l=K):(typeof d.componentDidUpdate!="function"||v===n.memoizedProps&&B===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&B===n.memoizedState||(i.flags|=1024),l=!1)}return d=l,Dl(n,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,n!==null&&l?(i.child=qr(i,n.child,null,h),i.child=qr(i,null,a,h)):$t(n,i,a,h),i.memoizedState=d.state,n=i.child):n=ns(n,i,h),n}function py(n,i,a,l){return El(),i.flags|=256,$t(n,i,a,l),i.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function bd(n){return{baseLanes:n,cachePool:_g()}}function Cd(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=Zn),n}function my(n,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=n!==null&&n.memoizedState===null?!1:(xt.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,n===null){if(Ye){if(h?Hs(i):Fs(),Ye){var T=Qt,I;if(I=T){e:{for(I=T,T=Ni;I.nodeType!==8;){if(!T){T=null;break e}if(I=ui(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(i.memoizedState={dehydrated:T,treeContext:zr!==null?{id:Zi,overflow:Ji}:null,retryLane:536870912},I=Xn(18,null,null,0),I.stateNode=T,I.return=i,i.child=I,vn=i,Qt=null,I=!0):I=!1}I||Fr(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?i.lanes=16:i.lanes=536870912,null;es(i)}return T=l.children,l=l.fallback,h?(Fs(),h=i.mode,T=Id({mode:"hidden",children:T},h),l=Jr(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=bd(a),h.childLanes=Cd(n,v,a),i.memoizedState=wd,l):(Hs(i),Rd(i,T))}if(I=n.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(d)i.flags&256?(Hs(i),i.flags&=-257,i=Nd(n,i,a)):i.memoizedState!==null?(Fs(),i.child=n.child,i.flags|=128,i=null):(Fs(),h=l.fallback,T=i.mode,l=Id({mode:"visible",children:l.children},T),h=Jr(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,qr(i,n.child,null,a),l=i.child,l.memoizedState=bd(a),l.childLanes=Cd(n,v,a),i.memoizedState=wd,i=h);else if(Hs(i),T.data==="$!"){if(v=T.nextSibling&&T.nextSibling.dataset,v)var P=v.dgst;v=P,l=Error(r(419)),l.stack="",l.digest=v,Tl({value:l,source:null,stack:null}),i=Nd(n,i,a)}else if(Bt||xl(n,i,a,!1),v=(a&n.childLanes)!==0,Bt||v){if(v=rt,v!==null){if(l=a&-a,(l&42)!==0)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==I.retryLane)throw I.retryLane=l,zs(n,l),En(v,n,l),ay}T.data==="$?"||ip(),i=Nd(n,i,a)}else T.data==="$?"?(i.flags|=128,i.child=n.child,i=Hw.bind(null,n),T._reactRetry=i,i=null):(n=I.treeContext,Qt=ui(T.nextSibling),vn=i,Ye=!0,oi=null,Ni=!1,n!==null&&(Kn[Wn++]=Zi,Kn[Wn++]=Ji,Kn[Wn++]=zr,Zi=n.id,Ji=n.overflow,zr=i),i=Rd(i,l.children),i.flags|=4096);return i}return h?(Fs(),h=l.fallback,T=i.mode,I=n.child,P=I.sibling,l=Js(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&31457280,P!==null?h=Js(P,h):(h=Jr(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=n.child.memoizedState,T===null?T=bd(a):(I=T.cachePool,I!==null?(P=kt._currentValue,I=I.parent!==P?{parent:P,pool:P}:I):I=_g(),T={baseLanes:T.baseLanes|a,cachePool:I}),h.memoizedState=T,h.childLanes=Cd(n,v,a),i.memoizedState=wd,l):(Hs(i),a=n.child,n=a.sibling,a=Js(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,n!==null&&(v=i.deletions,v===null?(i.deletions=[n],i.flags|=16):v.push(n)),i.child=a,i.memoizedState=null,a)}function Rd(n,i){return i=Id({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Id(n,i){return zy(n,i,0,null)}function Nd(n,i,a){return qr(i,n.child,null,a),n=Rd(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function _y(n,i,a){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),kd(n.return,i,a)}function Od(n,i,a,l,h){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function gy(n,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if($t(n,i,l.children,a),l=xt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&_y(n,a,i);else if(n.tag===19)_y(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch($(xt,l),h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&kc(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Od(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&kc(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Od(i,!0,a,null,d);break;case"together":Od(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ns(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),er|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(xl(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(r(153));if(i.child!==null){for(n=i.child,a=Js(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Js(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Dd(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Gc(n)))}function Iw(n,i,a){switch(i.tag){case 3:ni(i,i.stateNode.containerInfo),Ks(i,kt,n.memoizedState.cache),El();break;case 27:case 5:$o(i);break;case 4:ni(i,i.stateNode.containerInfo);break;case 10:Ks(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Hs(i),i.flags|=128,null):(a&i.child.childLanes)!==0?my(n,i,a):(Hs(i),n=ns(n,i,a),n!==null?n.sibling:null);Hs(i);break;case 19:var h=(n.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(xl(n,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return gy(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),$(xt,xt.current),l)break;return null;case 22:case 23:return i.lanes=0,cy(n,i,a);case 24:Ks(i,kt,n.memoizedState.cache)}return ns(n,i,a)}function yy(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)Bt=!0;else{if(!Dd(n,a)&&(i.flags&128)===0)return Bt=!1,Iw(n,i,a);Bt=(n.flags&131072)!==0}else Bt=!1,Ye&&(i.flags&1048576)!==0&&ng(i,Ic,i.index);switch(i.lanes=0,i.tag){case 16:e:{n=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Gd(l)?(n=Qr(l,n),i.tag=1,i=dy(null,i,l,n,a)):(i.tag=0,i=Ad(null,i,l,n,a));else{if(l!=null){if(h=l.$$typeof,h===F){i.tag=11,i=oy(null,i,l,n,a);break e}else if(h===Y){i.tag=14,i=ly(null,i,l,n,a);break e}}throw i=R(l)||l,Error(r(306,i,""))}}return i;case 0:return Ad(n,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Qr(l,i.pendingProps),dy(n,i,l,h,a);case 3:e:{if(ni(i,i.stateNode.containerInfo),n===null)throw Error(r(387));var d=i.pendingProps;h=i.memoizedState,l=h.element,Ld(n,i),Pl(i,d,null,a);var v=i.memoizedState;if(d=v.cache,Ks(i,kt,d),d!==h.cache&&Md(i,[kt],a,!0),Ml(),d=v.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=py(n,i,d,a);break e}else if(d!==l){l=Gn(Error(r(424)),i),Tl(l),i=py(n,i,d,a);break e}else for(Qt=ui(i.stateNode.containerInfo.firstChild),vn=i,Ye=!0,oi=null,Ni=!0,a=hg(i,null,d,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(El(),d===l){i=ns(n,i,a);break e}$t(n,i,d,a)}i=i.child}return i;case 26:return Dl(n,i),n===null?(a=Tv(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ye||(a=i.type,n=i.pendingProps,l=oh(Pt.current).createElement(a),l[Vt]=i,l[Nt]=n,Xt(l,a,n),dt(l),i.stateNode=l):i.memoizedState=Tv(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return $o(i),n===null&&Ye&&(l=i.stateNode=yv(i.type,i.pendingProps,Pt.current),vn=i,Ni=!0,Qt=ui(l.firstChild)),l=i.pendingProps.children,n!==null||Ye?$t(n,i,l,a):i.child=qr(i,null,l,a),Dl(n,i),i.child;case 5:return n===null&&Ye&&((h=l=Qt)&&(l=sb(l,i.type,i.pendingProps,Ni),l!==null?(i.stateNode=l,vn=i,Qt=ui(l.firstChild),Ni=!1,h=!0):h=!1),h||Fr(i)),$o(i),h=i.type,d=i.pendingProps,v=n!==null?n.memoizedProps:null,l=d.children,gp(h,d)?l=null:v!==null&&gp(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=rd(n,i,Tw,null,null,a),$l._currentValue=h),Dl(n,i),$t(n,i,l,a),i.child;case 6:return n===null&&Ye&&((n=a=Qt)&&(a=rb(a,i.pendingProps,Ni),a!==null?(i.stateNode=a,vn=i,Qt=null,n=!0):n=!1),n||Fr(i)),null;case 13:return my(n,i,a);case 4:return ni(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=qr(i,null,l,a):$t(n,i,l,a),i.child;case 11:return oy(n,i,i.type,i.pendingProps,a);case 7:return $t(n,i,i.pendingProps,a),i.child;case 8:return $t(n,i,i.pendingProps.children,a),i.child;case 12:return $t(n,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Ks(i,i.type,l.value),$t(n,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Xr(i),h=an(h),l=l(h),i.flags|=1,$t(n,i,l,a),i.child;case 14:return ly(n,i,i.type,i.pendingProps,a);case 15:return uy(n,i,i.type,i.pendingProps,a);case 19:return gy(n,i,a);case 22:return cy(n,i,a);case 24:return Xr(i),l=an(kt),n===null?(h=id(),h===null&&(h=rt,d=td(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Pd(i),Ks(i,kt,h)):((n.lanes&a)!==0&&(Ld(n,i),Pl(i,null,null,a),Ml()),h=n.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ks(i,kt,l)):(l=d.cache,Ks(i,kt,l),l!==h.cache&&Md(i,[kt],a,!0))),$t(n,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}var xd=Be(null),$r=null,is=null;function Ks(n,i,a){$(xd,i._currentValue),i._currentValue=a}function ss(n){n._currentValue=xd.current,st(xd)}function kd(n,i,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===a)break;n=n.return}}function Md(n,i,a,l){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var I=0;I<i.length;I++)if(T.context===i[I]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),kd(d.return,a,n),l||(v=null);break e}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(r(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),kd(v,a,n),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===n){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function xl(n,i,a,l){n=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=h.type;On(h.pendingProps.value,v.value)||(n!==null?n.push(T):n=[T])}}else if(h===gi.current){if(v=h.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push($l):n=[$l])}h=h.return}n!==null&&Md(i,n,a,l),i.flags|=262144}function Gc(n){for(n=n.firstContext;n!==null;){if(!On(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Xr(n){$r=n,is=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function an(n){return vy($r,n)}function Kc(n,i){return $r===null&&Xr(n),vy(n,i)}function vy(n,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},is===null){if(n===null)throw Error(r(308));is=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else is=is.next=i;return a}var Ws=!1;function Pd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ld(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ys(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Qs(n,i,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(mt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Cc(n),eg(n,null,a),i}return bc(n,l,i,a),Cc(n)}function kl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194176)!==0)){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,Ds(n,a)}}function Vd(n,i){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}var Ud=!1;function Ml(){if(Ud){var n=to;if(n!==null)throw n}}function Pl(n,i,a,l){Ud=!1;var h=n.updateQueue;Ws=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var I=T,P=I.next;I.next=null,v===null?d=P:v.next=P,v=I;var K=n.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==v&&(T===null?K.firstBaseUpdate=P:T.next=P,K.lastBaseUpdate=I))}if(d!==null){var J=h.baseState;v=0,K=P=I=null,T=d;do{var B=T.lane&-536870913,G=B!==T.lane;if(G?(Fe&B)===B:(l&B)===B){B!==0&&B===eo&&(Ud=!0),K!==null&&(K=K.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ge=n,Re=T;B=i;var vt=a;switch(Re.tag){case 1:if(ge=Re.payload,typeof ge=="function"){J=ge.call(vt,J,B);break e}J=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=Re.payload,B=typeof ge=="function"?ge.call(vt,J,B):ge,B==null)break e;J=C({},J,B);break e;case 2:Ws=!0}}B=T.callback,B!==null&&(n.flags|=64,G&&(n.flags|=8192),G=h.callbacks,G===null?h.callbacks=[B]:G.push(B))}else G={lane:B,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(P=K=G,I=J):K=K.next=G,v|=B;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;G=T,T=G.next,G.next=null,h.lastBaseUpdate=G,h.shared.pending=null}}while(!0);K===null&&(I=J),h.baseState=I,h.firstBaseUpdate=P,h.lastBaseUpdate=K,d===null&&(h.shared.lanes=0),er|=v,n.lanes=v,n.memoizedState=J}}function Ey(n,i){if(typeof n!="function")throw Error(r(191,n));n.call(i)}function Ty(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)Ey(a[n],i)}function Ll(n,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&n)===n){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){it(i,i.return,T)}}function $s(n,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&n)===n){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var I=a;try{T()}catch(P){it(h,I,P)}}}l=l.next}while(l!==d)}}catch(P){it(i,i.return,P)}}function Sy(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{Ty(i,a)}catch(l){it(n,n.return,l)}}}function Ay(n,i,a){a.props=Qr(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){it(n,i,l)}}function Zr(n,i){try{var a=n.ref;if(a!==null){var l=n.stateNode;switch(n.tag){case 26:case 27:case 5:var h=l;break;default:h=l}typeof a=="function"?n.refCleanup=a(h):a.current=h}}catch(d){it(n,i,d)}}function Dn(n,i){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){it(n,i,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){it(n,i,h)}else a.current=null}function wy(n){var i=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){it(n,n.return,h)}}function by(n,i,a){try{var l=n.stateNode;Jw(l,n.type,a,i),l[Nt]=i}catch(h){it(n,n.return,h)}}function Cy(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function jd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Cy(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bd(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ah));else if(l!==4&&l!==27&&(n=n.child,n!==null))for(Bd(n,i,a),n=n.sibling;n!==null;)Bd(n,i,a),n=n.sibling}function Wc(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(l!==4&&l!==27&&(n=n.child,n!==null))for(Wc(n,i,a),n=n.sibling;n!==null;)Wc(n,i,a),n=n.sibling}var rs=!1,gt=!1,zd=!1,Ry=typeof WeakSet=="function"?WeakSet:Set,zt=null,Iy=!1;function Nw(n,i){if(n=n.containerInfo,mp=dh,n=G_(n),Ff(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,T=-1,I=-1,P=0,K=0,J=n,B=null;t:for(;;){for(var G;J!==a||h!==0&&J.nodeType!==3||(T=v+h),J!==d||l!==0&&J.nodeType!==3||(I=v+l),J.nodeType===3&&(v+=J.nodeValue.length),(G=J.firstChild)!==null;)B=J,J=G;for(;;){if(J===n)break t;if(B===a&&++P===h&&(T=v),B===d&&++K===l&&(I=v),(G=J.nextSibling)!==null)break;J=B,B=J.parentNode}J=G}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(_p={focusedElem:n,selectionRange:a},dh=!1,zt=i;zt!==null;)if(i=zt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,zt=n;else for(;zt!==null;){switch(i=zt,d=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var ge=Qr(a.type,h,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(ge,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(Re){it(a,a.return,Re)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,a=n.nodeType,a===9)Ep(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Ep(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=i.sibling,n!==null){n.return=i.return,zt=n;break}zt=i.return}return ge=Iy,Iy=!1,ge}function Ny(n,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:os(n,a),l&4&&Ll(5,a);break;case 1:if(os(n,a),l&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(T){it(a,a.return,T)}else{var h=Qr(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(h,i,n.__reactInternalSnapshotBeforeUpdate)}catch(T){it(a,a.return,T)}}l&64&&Sy(a),l&512&&Zr(a,a.return);break;case 3:if(os(n,a),l&64&&(l=a.updateQueue,l!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ty(l,n)}catch(T){it(a,a.return,T)}}break;case 26:os(n,a),l&512&&Zr(a,a.return);break;case 27:case 5:os(n,a),i===null&&l&4&&wy(a),l&512&&Zr(a,a.return);break;case 12:os(n,a);break;case 13:os(n,a),l&4&&xy(n,a);break;case 22:if(h=a.memoizedState!==null||rs,!h){i=i!==null&&i.memoizedState!==null||gt;var d=rs,v=gt;rs=h,(gt=i)&&!v?Xs(n,a,(a.subtreeFlags&8772)!==0):os(n,a),rs=d,gt=v}l&512&&(a.memoizedProps.mode==="manual"?Zr(a,a.return):Dn(a,a.return));break;default:os(n,a)}}function Oy(n){var i=n.alternate;i!==null&&(n.alternate=null,Oy(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Ir(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var bt=null,xn=!1;function as(n,i,a){for(a=a.child;a!==null;)Dy(n,i,a),a=a.sibling}function Dy(n,i,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Cs,a)}catch{}switch(a.tag){case 26:gt||Dn(a,i),as(n,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gt||Dn(a,i);var l=bt,h=xn;for(bt=a.stateNode,as(n,i,a),a=a.stateNode,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);Ir(a),bt=l,xn=h;break;case 5:gt||Dn(a,i);case 6:h=bt;var d=xn;if(bt=null,as(n,i,a),bt=h,xn=d,bt!==null)if(xn)try{n=bt,l=a.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)}catch(v){it(a,i,v)}else try{bt.removeChild(a.stateNode)}catch(v){it(a,i,v)}break;case 18:bt!==null&&(xn?(i=bt,a=a.stateNode,i.nodeType===8?vp(i.parentNode,a):i.nodeType===1&&vp(i,a),eu(i)):vp(bt,a.stateNode));break;case 4:l=bt,h=xn,bt=a.stateNode.containerInfo,xn=!0,as(n,i,a),bt=l,xn=h;break;case 0:case 11:case 14:case 15:gt||$s(2,a,i),gt||$s(4,a,i),as(n,i,a);break;case 1:gt||(Dn(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ay(a,i,l)),as(n,i,a);break;case 21:as(n,i,a);break;case 22:gt||Dn(a,i),gt=(l=gt)||a.memoizedState!==null,as(n,i,a),gt=l;break;default:as(n,i,a)}}function xy(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{eu(n)}catch(a){it(i,i.return,a)}}function Ow(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new Ry),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new Ry),i;default:throw Error(r(435,n.tag))}}function Hd(n,i){var a=Ow(n);i.forEach(function(l){var h=Fw.bind(null,n,l);a.has(l)||(a.add(l),l.then(h,h))})}function Qn(n,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=n,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 27:case 5:bt=T.stateNode,xn=!1;break e;case 3:bt=T.stateNode.containerInfo,xn=!0;break e;case 4:bt=T.stateNode.containerInfo,xn=!0;break e}T=T.return}if(bt===null)throw Error(r(160));Dy(d,v,h),bt=null,xn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)ky(i,n),i=i.sibling}var li=null;function ky(n,i){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Qn(i,n),$n(n),l&4&&($s(3,n,n.return),Ll(3,n),$s(5,n,n.return));break;case 1:Qn(i,n),$n(n),l&512&&(gt||a===null||Dn(a,a.return)),l&64&&rs&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=li;if(Qn(i,n),$n(n),l&512&&(gt||a===null||Dn(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ks]||d[Vt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Xt(d,l,a),d[Vt]=n,dt(d),l=d;break e;case"link":var v=wv("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}d=h.createElement(l),Xt(d,l,a),h.head.appendChild(d);break;case"meta":if(v=wv("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}d=h.createElement(l),Xt(d,l,a),h.head.appendChild(d);break;default:throw Error(r(468,l))}d[Vt]=n,dt(d),l=d}n.stateNode=l}else bv(h,n.type,n.stateNode);else n.stateNode=Av(h,l,n.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?bv(h,n.type,n.stateNode):Av(h,l,n.memoizedProps)):l===null&&n.stateNode!==null&&by(n,n.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&n.alternate===null){h=n.stateNode,d=n.memoizedProps;try{for(var I=h.firstChild;I;){var P=I.nextSibling,K=I.nodeName;I[ks]||K==="HEAD"||K==="BODY"||K==="SCRIPT"||K==="STYLE"||K==="LINK"&&I.rel.toLowerCase()==="stylesheet"||h.removeChild(I),I=P}for(var J=n.type,B=h.attributes;B.length;)h.removeAttributeNode(B[0]);Xt(h,J,d),h[Vt]=n,h[Nt]=d}catch(ge){it(n,n.return,ge)}}case 5:if(Qn(i,n),$n(n),l&512&&(gt||a===null||Dn(a,a.return)),n.flags&32){h=n.stateNode;try{Bn(h,"")}catch(ge){it(n,n.return,ge)}}l&4&&n.stateNode!=null&&(h=n.memoizedProps,by(n,h,a!==null?a.memoizedProps:h)),l&1024&&(zd=!0);break;case 6:if(Qn(i,n),$n(n),l&4){if(n.stateNode===null)throw Error(r(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(ge){it(n,n.return,ge)}}break;case 3:if(ch=null,h=li,li=lh(i.containerInfo),Qn(i,n),li=h,$n(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{eu(i.containerInfo)}catch(ge){it(n,n.return,ge)}zd&&(zd=!1,My(n));break;case 4:l=li,li=lh(n.stateNode.containerInfo),Qn(i,n),$n(n),li=l;break;case 12:Qn(i,n),$n(n);break;case 13:Qn(i,n),$n(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xd=Tn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Hd(n,l)));break;case 22:if(l&512&&(gt||a===null||Dn(a,a.return)),I=n.memoizedState!==null,P=a!==null&&a.memoizedState!==null,K=rs,J=gt,rs=K||I,gt=J||P,Qn(i,n),gt=J,rs=K,$n(n),i=n.stateNode,i._current=n,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,l&8192&&(i._visibility=I?i._visibility&-2:i._visibility|1,I&&(i=rs||gt,a===null||P||i||ro(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))e:for(a=null,i=n;;){if(i.tag===5||i.tag===26||i.tag===27){if(a===null){P=a=i;try{if(h=P.stateNode,I)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=P.stateNode,T=P.memoizedProps.style;var G=T!=null&&T.hasOwnProperty("display")?T.display:null;v.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(ge){it(P,P.return,ge)}}}else if(i.tag===6){if(a===null){P=i;try{P.stateNode.nodeValue=I?"":P.memoizedProps}catch(ge){it(P,P.return,ge)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Hd(n,a))));break;case 19:Qn(i,n),$n(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Hd(n,l)));break;case 21:break;default:Qn(i,n),$n(n)}}function $n(n){var i=n.flags;if(i&2){try{if(n.tag!==27){e:{for(var a=n.return;a!==null;){if(Cy(a)){var l=a;break e}a=a.return}throw Error(r(160))}switch(l.tag){case 27:var h=l.stateNode,d=jd(n);Wc(n,d,h);break;case 5:var v=l.stateNode;l.flags&32&&(Bn(v,""),l.flags&=-33);var T=jd(n);Wc(n,T,v);break;case 3:case 4:var I=l.stateNode.containerInfo,P=jd(n);Bd(n,P,I);break;default:throw Error(r(161))}}}catch(K){it(n,n.return,K)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function My(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;My(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function os(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ny(n,i.alternate,i),i=i.sibling}function ro(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:$s(4,i,i.return),ro(i);break;case 1:Dn(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Ay(i,i.return,a),ro(i);break;case 26:case 27:case 5:Dn(i,i.return),ro(i);break;case 22:Dn(i,i.return),i.memoizedState===null&&ro(i);break;default:ro(i)}n=n.sibling}}function Xs(n,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=n,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:Xs(h,d,a),Ll(4,d);break;case 1:if(Xs(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(P){it(l,l.return,P)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)Ey(I[h],T)}catch(P){it(l,l.return,P)}}a&&v&64&&Sy(d),Zr(d,d.return);break;case 26:case 27:case 5:Xs(h,d,a),a&&l===null&&v&4&&wy(d),Zr(d,d.return);break;case 12:Xs(h,d,a);break;case 13:Xs(h,d,a),a&&v&4&&xy(h,d);break;case 22:d.memoizedState===null&&Xs(h,d,a),Zr(d,d.return);break;default:Xs(h,d,a)}i=i.sibling}}function Fd(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Cl(a))}function qd(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Cl(n))}function Zs(n,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Py(n,i,a,l),i=i.sibling}function Py(n,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Zs(n,i,a,l),h&2048&&Ll(9,i);break;case 3:Zs(n,i,a,l),h&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Cl(n)));break;case 12:if(h&2048){Zs(n,i,a,l),n=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(I){it(i,i.return,I)}}else Zs(n,i,a,l);break;case 23:break;case 22:d=i.stateNode,i.memoizedState!==null?d._visibility&4?Zs(n,i,a,l):Vl(n,i):d._visibility&4?Zs(n,i,a,l):(d._visibility|=4,ao(n,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Fd(i.alternate,i);break;case 24:Zs(n,i,a,l),h&2048&&qd(i.alternate,i);break;default:Zs(n,i,a,l)}}function ao(n,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=n,v=i,T=a,I=l,P=v.flags;switch(v.tag){case 0:case 11:case 15:ao(d,v,T,I,h),Ll(8,v);break;case 23:break;case 22:var K=v.stateNode;v.memoizedState!==null?K._visibility&4?ao(d,v,T,I,h):Vl(d,v):(K._visibility|=4,ao(d,v,T,I,h)),h&&P&2048&&Fd(v.alternate,v);break;case 24:ao(d,v,T,I,h),h&&P&2048&&qd(v.alternate,v);break;default:ao(d,v,T,I,h)}i=i.sibling}}function Vl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,l=i,h=l.flags;switch(l.tag){case 22:Vl(a,l),h&2048&&Fd(l.alternate,l);break;case 24:Vl(a,l),h&2048&&qd(l.alternate,l);break;default:Vl(a,l)}i=i.sibling}}var Ul=8192;function oo(n){if(n.subtreeFlags&Ul)for(n=n.child;n!==null;)Ly(n),n=n.sibling}function Ly(n){switch(n.tag){case 26:oo(n),n.flags&Ul&&n.memoizedState!==null&&yb(li,n.memoizedState,n.memoizedProps);break;case 5:oo(n);break;case 3:case 4:var i=li;li=lh(n.stateNode.containerInfo),oo(n),li=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Ul,Ul=16777216,oo(n),Ul=i):oo(n));break;default:oo(n)}}function Vy(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function jl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];zt=l,jy(l,n)}Vy(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Uy(n),n=n.sibling}function Uy(n){switch(n.tag){case 0:case 11:case 15:jl(n),n.flags&2048&&$s(9,n,n.return);break;case 3:jl(n);break;case 12:jl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&4&&(n.return===null||n.return.tag!==13)?(i._visibility&=-5,Yc(n)):jl(n);break;default:jl(n)}}function Yc(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];zt=l,jy(l,n)}Vy(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:$s(8,i,i.return),Yc(i);break;case 22:a=i.stateNode,a._visibility&4&&(a._visibility&=-5,Yc(i));break;default:Yc(i)}n=n.sibling}}function jy(n,i){for(;zt!==null;){var a=zt;switch(a.tag){case 0:case 11:case 15:$s(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Cl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,zt=l;else e:for(a=n;zt!==null;){l=zt;var h=l.sibling,d=l.return;if(Oy(l),l===a){zt=null;break e}if(h!==null){h.return=d,zt=h;break e}zt=d}}}function Dw(n,i,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(n,i,a,l){return new Dw(n,i,a,l)}function Gd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Js(n,i){var a=n.alternate;return a===null?(a=Xn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&31457280,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function By(n,i){n.flags&=31457282;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Qc(n,i,a,l,h,d){var v=0;if(l=n,typeof n=="function")Gd(n)&&(v=1);else if(typeof n=="string")v=_b(n,a,Ne.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case m:return Jr(a.children,h,d,i);case g:v=8,h|=24;break;case E:return n=Xn(12,a,i,h|2),n.elementType=E,n.lanes=d,n;case Q:return n=Xn(13,a,i,h),n.elementType=Q,n.lanes=d,n;case W:return n=Xn(19,a,i,h),n.elementType=W,n.lanes=d,n;case te:return zy(a,h,d,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:case z:v=10;break e;case O:v=9;break e;case F:v=11;break e;case Y:v=14;break e;case ee:v=16,l=null;break e}v=29,a=Error(r(130,n===null?"null":typeof n,"")),l=null}return i=Xn(v,a,i,h),i.elementType=n,i.type=l,i.lanes=d,i}function Jr(n,i,a,l){return n=Xn(7,n,l,i),n.lanes=a,n}function zy(n,i,a,l){n=Xn(22,n,l,i),n.elementType=te,n.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(r(456));if((h._pendingVisibility&2)===0){var v=zs(d,2);v!==null&&(h._pendingVisibility|=2,En(v,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(r(456));if((h._pendingVisibility&2)!==0){var v=zs(d,2);v!==null&&(h._pendingVisibility&=-3,En(v,d,2))}}};return n.stateNode=h,n}function Kd(n,i,a){return n=Xn(6,n,null,i),n.lanes=a,n}function Wd(n,i,a){return i=Xn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function ls(n){n.flags|=4}function Hy(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Cv(i)){if(i=Yn.current,i!==null&&((Fe&4194176)===Fe?Oi!==null:(Fe&62914560)!==Fe&&(Fe&536870912)===0||i!==Oi))throw Al=Zf,rg;n.flags|=8192}}function $c(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Ns():536870912,n.lanes|=i,uo|=i)}function Bl(n,i){if(!Ye)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function pt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&31457280,l|=h.flags&31457280,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=l,n.childLanes=a,i}function xw(n,i,a){var l=i.pendingProps;switch($f(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(i),null;case 1:return pt(i),null;case 3:return a=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ss(kt),ii(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(vl(i)?ls(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,oi!==null&&(tp(oi),oi=null))),pt(i),null;case 26:return a=i.memoizedState,n===null?(ls(i),a!==null?(pt(i),Hy(i,a)):(pt(i),i.flags&=-16777217)):a?a!==n.memoizedState?(ls(i),pt(i),Hy(i,a)):(pt(i),i.flags&=-16777217):(n.memoizedProps!==l&&ls(i),pt(i),i.flags&=-16777217),null;case 27:Ia(i),a=Pt.current;var h=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==l&&ls(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return pt(i),null}n=Ne.current,vl(i)?ig(i):(n=yv(h,l,a),i.stateNode=n,ls(i))}return pt(i),null;case 5:if(Ia(i),a=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&ls(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return pt(i),null}if(n=Ne.current,vl(i))ig(i);else{switch(h=oh(Pt.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}n[Vt]=i,n[Nt]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=n;e:switch(Xt(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ls(i)}}return pt(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==l&&ls(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(n=Pt.current,vl(i)){if(n=i.stateNode,a=i.memoizedProps,l=null,h=vn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}n[Vt]=i,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||fv(n.nodeValue,a)),n||Fr(i)}else n=oh(n).createTextNode(l),n[Vt]=i,i.stateNode=n}return pt(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=vl(i),l!==null&&l.dehydrated!==null){if(n===null){if(!h)throw Error(r(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[Vt]=i}else El(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pt(i),h=!1}else oi!==null&&(tp(oi),oi=null),h=!0;if(!h)return i.flags&256?(es(i),i):(es(i),null)}if(es(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==n&&a&&(i.child.flags|=8192),$c(i,i.updateQueue),pt(i),null;case 4:return ii(),n===null&&fp(i.stateNode.containerInfo),pt(i),null;case 10:return ss(i.type),pt(i),null;case 19:if(st(xt),h=i.memoizedState,h===null)return pt(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Bl(h,!1);else{if(yt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(d=kc(n),d!==null){for(i.flags|=128,Bl(h,!1),n=d.updateQueue,i.updateQueue=n,$c(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)By(a,n),a=a.sibling;return $(xt,xt.current&1|2),i.child}n=n.sibling}h.tail!==null&&Tn()>Xc&&(i.flags|=128,l=!0,Bl(h,!1),i.lanes=4194304)}else{if(!l)if(n=kc(d),n!==null){if(i.flags|=128,l=!0,n=n.updateQueue,i.updateQueue=n,$c(i,n),Bl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Ye)return pt(i),null}else 2*Tn()-h.renderingStartTime>Xc&&a!==536870912&&(i.flags|=128,l=!0,Bl(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(n=h.last,n!==null?n.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Tn(),i.sibling=null,n=xt.current,$(xt,l?n&1|2:n&1),i):(pt(i),null);case 22:case 23:return es(i),ed(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(pt(i),i.subtreeFlags&6&&(i.flags|=8192)):pt(i),a=i.updateQueue,a!==null&&$c(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),n!==null&&st(Gr),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ss(kt),pt(i),null;case 25:return null}throw Error(r(156,i.tag))}function kw(n,i){switch($f(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ss(kt),ii(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return Ia(i),null;case 13:if(es(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(r(340));El()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return st(xt),null;case 4:return ii(),null;case 10:return ss(i.type),null;case 22:case 23:return es(i),ed(),n!==null&&st(Gr),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return ss(kt),null;case 25:return null;default:return null}}function Fy(n,i){switch($f(i),i.tag){case 3:ss(kt),ii();break;case 26:case 27:case 5:Ia(i);break;case 4:ii();break;case 13:es(i);break;case 19:st(xt);break;case 10:ss(i.type);break;case 22:case 23:es(i),ed(),n!==null&&st(Gr);break;case 24:ss(kt)}}var Mw={getCacheForType:function(n){var i=an(kt),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a}},Pw=typeof WeakMap=="function"?WeakMap:Map,mt=0,rt=null,Me=null,Fe=0,at=0,kn=null,us=!1,lo=!1,Yd=!1,cs=0,yt=0,er=0,ea=0,Qd=0,Zn=0,uo=0,zl=null,xi=null,$d=!1,Xd=0,Xc=1/0,Zc=null,tr=null,Jc=!1,ta=null,Hl=0,Zd=0,Jd=null,Fl=0,ep=null;function Mn(){if((mt&2)!==0&&Fe!==0)return Fe&-Fe;if(b.T!==null){var n=eo;return n!==0?n:lp()}return rc()}function qy(){Zn===0&&(Zn=(Fe&536870912)===0||Ye?tl():536870912);var n=Yn.current;return n!==null&&(n.flags|=32),Zn}function En(n,i,a){(n===rt&&at===2||n.cancelPendingCommit!==null)&&(co(n,0),hs(n,Fe,Zn,!1)),Tt(n,a),((mt&2)===0||n!==rt)&&(n===rt&&((mt&2)===0&&(ea|=a),yt===4&&hs(n,Fe,Zn,!1)),ki(n))}function Gy(n,i,a){if((mt&6)!==0)throw Error(r(327));var l=!a&&(i&60)===0&&(i&n.expiredLanes)===0||Is(n,i),h=l?Uw(n,i):sp(n,i,!0),d=l;do{if(h===0){lo&&!l&&hs(n,i,0,!1);break}else if(h===6)hs(n,i,0,!us);else{if(a=n.current.alternate,d&&!Lw(a)){h=sp(n,i,!1),d=!1;continue}if(h===2){if(d=i,n.errorRecoveryDisabledLanes&d)var v=0;else v=n.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var T=n;h=zl;var I=T.current.memoizedState.isDehydrated;if(I&&(co(T,v).flags|=256),v=sp(T,v,!1),v!==2){if(Yd&&!I){T.errorRecoveryDisabledLanes|=d,ea|=d,h=4;break e}d=xi,xi=h,d!==null&&tp(d)}h=v}if(d=!1,h!==2)continue}}if(h===1){co(n,0),hs(n,i,0,!0);break}e:{switch(l=n,h){case 0:case 1:throw Error(r(345));case 4:if((i&4194176)===i){hs(l,i,Zn,!us);break e}break;case 2:xi=null;break;case 3:case 5:break;default:throw Error(r(329))}if(l.finishedWork=a,l.finishedLanes=i,(i&62914560)===i&&(d=Xd+300-Tn(),10<d)){if(hs(l,i,Zn,!us),Un(l,0)!==0)break e;l.timeoutHandle=mv(Ky.bind(null,l,a,xi,Zc,$d,i,Zn,ea,uo,us,2,-0,0),d);break e}Ky(l,a,xi,Zc,$d,i,Zn,ea,uo,us,0,-0,0)}}break}while(!0);ki(n)}function tp(n){xi===null?xi=n:xi.push.apply(xi,n)}function Ky(n,i,a,l,h,d,v,T,I,P,K,J,B){var G=i.subtreeFlags;if((G&8192||(G&16785408)===16785408)&&(Ql={stylesheets:null,count:0,unsuspend:gb},Ly(i),i=vb(),i!==null)){n.cancelPendingCommit=i(Jy.bind(null,n,a,l,h,v,T,I,1,J,B)),hs(n,d,v,!P);return}Jy(n,a,l,h,v,T,I,K,J,B)}function Lw(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!On(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hs(n,i,a,l){i&=~Qd,i&=~ea,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var h=i;0<h;){var d=31-_n(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Os(n,a,i)}function eh(){return(mt&6)===0?(ql(0),!1):!0}function np(){if(Me!==null){if(at===0)var n=Me.return;else n=Me,is=$r=null,ld(n),Za=null,wl=0,n=Me;for(;n!==null;)Fy(n.alternate,n),n=n.return;Me=null}}function co(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,tb(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),np(),rt=n,Me=a=Js(n.current,null),Fe=i,at=0,kn=null,us=!1,lo=Is(n,i),Yd=!1,uo=Zn=Qd=ea=er=yt=0,xi=zl=null,$d=!1,(i&8)!==0&&(i|=i&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=i;0<l;){var h=31-_n(l),d=1<<h;i|=n[h],l&=~d}return cs=i,wc(),a}function Wy(n,i){Oe=null,b.H=Di,i===Sl?(i=lg(),at=3):i===rg?(i=lg(),at=4):at=i===ay?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,kn=i,Me===null&&(yt=1,qc(n,Gn(i,n.current)))}function Yy(){var n=b.H;return b.H=Di,n===null?Di:n}function Qy(){var n=b.A;return b.A=Mw,n}function ip(){yt=4,us||(Fe&4194176)!==Fe&&Yn.current!==null||(lo=!0),(er&134217727)===0&&(ea&134217727)===0||rt===null||hs(rt,Fe,Zn,!1)}function sp(n,i,a){var l=mt;mt|=2;var h=Yy(),d=Qy();(rt!==n||Fe!==i)&&(Zc=null,co(n,i)),i=!1;var v=yt;e:do try{if(at!==0&&Me!==null){var T=Me,I=kn;switch(at){case 8:np(),v=6;break e;case 3:case 2:case 6:Yn.current===null&&(i=!0);var P=at;if(at=0,kn=null,ho(n,T,I,P),a&&lo){v=0;break e}break;default:P=at,at=0,kn=null,ho(n,T,I,P)}}Vw(),v=yt;break}catch(K){Wy(n,K)}while(!0);return i&&n.shellSuspendCounter++,is=$r=null,mt=l,b.H=h,b.A=d,Me===null&&(rt=null,Fe=0,wc()),v}function Vw(){for(;Me!==null;)$y(Me)}function Uw(n,i){var a=mt;mt|=2;var l=Yy(),h=Qy();rt!==n||Fe!==i?(Zc=null,Xc=Tn()+500,co(n,i)):lo=Is(n,i);e:do try{if(at!==0&&Me!==null){i=Me;var d=kn;t:switch(at){case 1:at=0,kn=null,ho(n,i,d,1);break;case 2:if(ag(d)){at=0,kn=null,Xy(i);break}i=function(){at===2&&rt===n&&(at=7),ki(n)},d.then(i,i);break e;case 3:at=7;break e;case 4:at=5;break e;case 7:ag(d)?(at=0,kn=null,Xy(i)):(at=0,kn=null,ho(n,i,d,7));break;case 5:var v=null;switch(Me.tag){case 26:v=Me.memoizedState;case 5:case 27:var T=Me;if(!v||Cv(v)){at=0,kn=null;var I=T.sibling;if(I!==null)Me=I;else{var P=T.return;P!==null?(Me=P,th(P)):Me=null}break t}}at=0,kn=null,ho(n,i,d,5);break;case 6:at=0,kn=null,ho(n,i,d,6);break;case 8:np(),yt=6;break e;default:throw Error(r(462))}}jw();break}catch(K){Wy(n,K)}while(!0);return is=$r=null,b.H=l,b.A=h,mt=a,Me!==null?0:(rt=null,Fe=0,wc(),yt)}function jw(){for(;Me!==null&&!xf();)$y(Me)}function $y(n){var i=yy(n.alternate,n,cs);n.memoizedProps=n.pendingProps,i===null?th(n):Me=i}function Xy(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=fy(a,i,i.pendingProps,i.type,void 0,Fe);break;case 11:i=fy(a,i,i.pendingProps,i.type.render,i.ref,Fe);break;case 5:ld(i);default:Fy(a,i),i=Me=By(i,cs),i=yy(a,i,cs)}n.memoizedProps=n.pendingProps,i===null?th(n):Me=i}function ho(n,i,a,l){is=$r=null,ld(i),Za=null,wl=0;var h=i.return;try{if(Rw(n,h,i,a,Fe)){yt=1,qc(n,Gn(a,n.current)),Me=null;return}}catch(d){if(h!==null)throw Me=h,d;yt=1,qc(n,Gn(a,n.current)),Me=null;return}i.flags&32768?(Ye||l===1?n=!0:lo||(Fe&536870912)!==0?n=!1:(us=n=!0,(l===2||l===3||l===6)&&(l=Yn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Zy(i,n)):th(i)}function th(n){var i=n;do{if((i.flags&32768)!==0){Zy(i,us);return}n=i.return;var a=xw(i.alternate,i,cs);if(a!==null){Me=a;return}if(i=i.sibling,i!==null){Me=i;return}Me=i=n}while(i!==null);yt===0&&(yt=5)}function Zy(n,i){do{var a=kw(n.alternate,n);if(a!==null){a.flags&=32767,Me=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){Me=n;return}Me=n=a}while(n!==null);yt=6,Me=null}function Jy(n,i,a,l,h,d,v,T,I,P){var K=b.T,J=re.p;try{re.p=2,b.T=null,Bw(n,i,a,l,J,h,d,v,T,I,P)}finally{b.T=K,re.p=J}}function Bw(n,i,a,l,h,d,v,T){do fo();while(ta!==null);if((mt&6)!==0)throw Error(r(327));var I=n.finishedWork;if(l=n.finishedLanes,I===null)return null;if(n.finishedWork=null,n.finishedLanes=0,I===n.current)throw Error(r(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var P=I.lanes|I.childLanes;if(P|=Wf,ic(n,l,P,d,v,T),n===rt&&(Me=rt=null,Fe=0),(I.subtreeFlags&10256)===0&&(I.flags&10256)===0||Jc||(Jc=!0,Zd=P,Jd=a,qw(Hi,function(){return fo(),null})),a=(I.flags&15990)!==0,(I.subtreeFlags&15990)!==0||a?(a=b.T,b.T=null,d=re.p,re.p=2,v=mt,mt|=4,Nw(n,I),ky(I,n),cw(_p,n.containerInfo),dh=!!mp,_p=mp=null,n.current=I,Ny(n,I.alternate,I),Xo(),mt=v,re.p=d,b.T=a):n.current=I,Jc?(Jc=!1,ta=n,Hl=l):ev(n,P),P=n.pendingLanes,P===0&&(tr=null),Jo(I.stateNode),ki(n),i!==null)for(h=n.onRecoverableError,I=0;I<i.length;I++)P=i[I],h(P.value,{componentStack:P.stack});return(Hl&3)!==0&&fo(),P=n.pendingLanes,(l&4194218)!==0&&(P&42)!==0?n===ep?Fl++:(Fl=0,ep=n):Fl=0,ql(0),null}function ev(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Cl(i)))}function fo(){if(ta!==null){var n=ta,i=Zd;Zd=0;var a=sc(Hl),l=b.T,h=re.p;try{if(re.p=32>a?32:a,b.T=null,ta===null)var d=!1;else{a=Jd,Jd=null;var v=ta,T=Hl;if(ta=null,Hl=0,(mt&6)!==0)throw Error(r(331));var I=mt;if(mt|=4,Uy(v.current),Py(v,v.current,T,a),mt=I,ql(0,!1),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Cs,v)}catch{}d=!0}return d}finally{re.p=h,b.T=l,ev(n,i)}}return!1}function tv(n,i,a){i=Gn(a,i),i=Sd(n.stateNode,i,2),n=Qs(n,i,2),n!==null&&(Tt(n,2),ki(n))}function it(n,i,a){if(n.tag===3)tv(n,n,a);else for(;i!==null;){if(i.tag===3){tv(i,n,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tr===null||!tr.has(l))){n=Gn(a,n),a=sy(2),l=Qs(i,a,2),l!==null&&(ry(a,l,i,n),Tt(l,2),ki(l));break}}i=i.return}}function rp(n,i,a){var l=n.pingCache;if(l===null){l=n.pingCache=new Pw;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Yd=!0,h.add(a),n=zw.bind(null,n,i,a),i.then(n,n))}function zw(n,i,a){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,rt===n&&(Fe&a)===a&&(yt===4||yt===3&&(Fe&62914560)===Fe&&300>Tn()-Xd?(mt&2)===0&&co(n,0):Qd|=a,uo===Fe&&(uo=0)),ki(n)}function nv(n,i){i===0&&(i=Ns()),n=zs(n,i),n!==null&&(Tt(n,i),ki(n))}function Hw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),nv(n,a)}function Fw(n,i){var a=0;switch(n.tag){case 13:var l=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),nv(n,a)}function qw(n,i){return br(n,i)}var nh=null,po=null,ap=!1,ih=!1,op=!1,na=0;function ki(n){n!==po&&n.next===null&&(po===null?nh=po=n:po=po.next=n),ih=!0,ap||(ap=!0,Kw(Gw))}function ql(n,i){if(!op&&ih){op=!0;do for(var a=!1,l=nh;l!==null;){if(n!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-_n(42|n)+1)-1,d&=h&~(v&~T),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,rv(l,d))}else d=Fe,d=Un(l,l===rt?d:0),(d&3)===0||Is(l,d)||(a=!0,rv(l,d));l=l.next}while(a);op=!1}}function Gw(){ih=ap=!1;var n=0;na!==0&&(eb()&&(n=na),na=0);for(var i=Tn(),a=null,l=nh;l!==null;){var h=l.next,d=iv(l,i);d===0?(l.next=null,a===null?nh=h:a.next=h,h===null&&(po=a)):(a=l,(n!==0||(d&3)!==0)&&(ih=!0)),l=h}ql(n)}function iv(n,i){for(var a=n.suspendedLanes,l=n.pingedLanes,h=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var v=31-_n(d),T=1<<v,I=h[v];I===-1?((T&a)===0||(T&l)!==0)&&(h[v]=Da(T,i)):I<=i&&(n.expiredLanes|=T),d&=~T}if(i=rt,a=Fe,a=Un(n,n===i?a:0),l=n.callbackNode,a===0||n===i&&at===2||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Oa(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||Is(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(l!==null&&Oa(l),sc(a)){case 2:case 8:a=Lt;break;case 32:a=Hi;break;case 268435456:a=Zo;break;default:a=Hi}return l=sv.bind(null,n),a=br(a,l),n.callbackPriority=i,n.callbackNode=a,i}return l!==null&&l!==null&&Oa(l),n.callbackPriority=2,n.callbackNode=null,2}function sv(n,i){var a=n.callbackNode;if(fo()&&n.callbackNode!==a)return null;var l=Fe;return l=Un(n,n===rt?l:0),l===0?null:(Gy(n,l,i),iv(n,Tn()),n.callbackNode!=null&&n.callbackNode===a?sv.bind(null,n):null)}function rv(n,i){if(fo())return null;Gy(n,i,!0)}function Kw(n){nb(function(){(mt&6)!==0?br(It,n):n()})}function lp(){return na===0&&(na=tl()),na}function av(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Si(""+n)}function ov(n,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,n.id&&a.setAttribute("form",n.id),i.parentNode.insertBefore(a,i),n=new FormData(n),a.parentNode.removeChild(a),n}function Ww(n,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=av((h[Nt]||null).action),v=l.submitter;v&&(i=(i=v[Nt]||null)?av(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new Ua("action","action",null,l,h);n.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(na!==0){var I=v?ov(h,v):new FormData(h);gd(a,{pending:!0,data:I,method:h.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=v?ov(h,v):new FormData(h),gd(a,{pending:!0,data:I,method:h.method,action:d},d,I))},currentTarget:h}]})}}for(var up=0;up<J_.length;up++){var cp=J_[up],Yw=cp.toLowerCase(),Qw=cp[0].toUpperCase()+cp.slice(1);ai(Yw,"on"+Qw)}ai(Y_,"onAnimationEnd"),ai(Q_,"onAnimationIteration"),ai($_,"onAnimationStart"),ai("dblclick","onDoubleClick"),ai("focusin","onFocus"),ai("focusout","onBlur"),ai(fw,"onTransitionRun"),ai(dw,"onTransitionStart"),ai(pw,"onTransitionCancel"),ai(X_,"onTransitionEnd"),Sn("onMouseEnter",["mouseout","mouseover"]),Sn("onMouseLeave",["mouseout","mouseover"]),Sn("onPointerEnter",["pointerout","pointerover"]),Sn("onPointerLeave",["pointerout","pointerover"]),In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),In("onBeforeInput",["compositionend","keypress","textInput","paste"]),In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$w=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gl));function lv(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],I=T.instance,P=T.currentTarget;if(T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=P;try{d(h)}catch(K){Fc(K)}h.currentTarget=null,d=I}else for(v=0;v<l.length;v++){if(T=l[v],I=T.instance,P=T.currentTarget,T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=P;try{d(h)}catch(K){Fc(K)}h.currentTarget=null,d=I}}}}function Ve(n,i){var a=i[Rr];a===void 0&&(a=i[Rr]=new Set);var l=n+"__bubble";a.has(l)||(uv(i,n,2,!1),a.add(l))}function hp(n,i,a){var l=0;i&&(l|=4),uv(a,n,l,i)}var sh="_reactListening"+Math.random().toString(36).slice(2);function fp(n){if(!n[sh]){n[sh]=!0,il.forEach(function(a){a!=="selectionchange"&&($w.has(a)||hp(a,!1,n),hp(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[sh]||(i[sh]=!0,hp("selectionchange",!1,i))}}function uv(n,i,a,l){switch(xv(i)){case 2:var h=Sb;break;case 8:h=Ab;break;default:h=bp}a=h.bind(null,i,a,n),h=void 0,!Hn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function dp(n,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h||T.nodeType===8&&T.parentNode===h)break;if(v===4)for(v=l.return;v!==null;){var I=v.tag;if((I===3||I===4)&&(I=v.stateNode.containerInfo,I===h||I.nodeType===8&&I.parentNode===h))return;v=v.return}for(;T!==null;){if(v=ri(T),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){l=d=v;continue e}T=T.parentNode}}l=l.return}uc(function(){var P=d,K=Va(a),J=[];e:{var B=Z_.get(n);if(B!==void 0){var G=Ua,ge=n;switch(n){case"keypress":if(wi(a)===0)break e;case"keydown":case"keyup":G=qa;break;case"focusin":ge="focus",G=za;break;case"focusout":ge="blur",G=za;break;case"beforeblur":case"afterblur":G=za;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=jf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=gc;break;case Y_:case Q_:case $_:G=Ha;break;case X_:G=vc;break;case"scroll":case"scrollend":G=cc;break;case"wheel":G=Ga;break;case"copy":case"cut":case"paste":G=Fa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=ml;break;case"toggle":case"beforetoggle":G=Tc}var Re=(i&4)!==0,vt=!Re&&(n==="scroll"||n==="scrollend"),V=Re?B!==null?B+"Capture":null:B;Re=[];for(var M=P,j;M!==null;){var X=M;if(j=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||j===null||V===null||(X=xr(M,V),X!=null&&Re.push(Kl(M,X,j))),vt)break;M=M.return}0<Re.length&&(B=new G(B,ge,null,a,K),J.push({event:B,listeners:Re}))}}if((i&7)===0){e:{if(B=n==="mouseover"||n==="pointerover",G=n==="mouseout"||n==="pointerout",B&&a!==zn&&(ge=a.relatedTarget||a.fromElement)&&(ri(ge)||ge[Fi]))break e;if((G||B)&&(B=K.window===K?K:(B=K.ownerDocument)?B.defaultView||B.parentWindow:window,G?(ge=a.relatedTarget||a.toElement,G=P,ge=ge?ri(ge):null,ge!==null&&(vt=de(ge),Re=ge.tag,ge!==vt||Re!==5&&Re!==27&&Re!==6)&&(ge=null)):(G=null,ge=P),G!==ge)){if(Re=Fn,X="onMouseLeave",V="onMouseEnter",M="mouse",(n==="pointerout"||n==="pointerover")&&(Re=ml,X="onPointerLeave",V="onPointerEnter",M="pointer"),vt=G==null?B:Ms(G),j=ge==null?B:Ms(ge),B=new Re(X,M+"leave",G,a,K),B.target=vt,B.relatedTarget=j,X=null,ri(K)===P&&(Re=new Re(V,M+"enter",ge,a,K),Re.target=j,Re.relatedTarget=vt,X=Re),vt=X,G&&ge)t:{for(Re=G,V=ge,M=0,j=Re;j;j=mo(j))M++;for(j=0,X=V;X;X=mo(X))j++;for(;0<M-j;)Re=mo(Re),M--;for(;0<j-M;)V=mo(V),j--;for(;M--;){if(Re===V||V!==null&&Re===V.alternate)break t;Re=mo(Re),V=mo(V)}Re=null}else Re=null;G!==null&&cv(J,B,G,Re,!1),ge!==null&&vt!==null&&cv(J,vt,ge,Re,!0)}}e:{if(B=P?Ms(P):window,G=B.nodeName&&B.nodeName.toLowerCase(),G==="select"||G==="input"&&B.type==="file")var pe=V_;else if(Dt(B))if(U_)pe=lw;else{pe=aw;var ke=rw}else G=B.nodeName,!G||G.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?P&&ll(P.elementType)&&(pe=V_):pe=ow;if(pe&&(pe=pe(n,P))){Xi(J,pe,a,K);break e}ke&&ke(n,B,P),n==="focusout"&&P&&B.type==="number"&&P.memoizedProps.value!=null&&La(B,"number",B.value)}switch(ke=P?Ms(P):window,n){case"focusin":(Dt(ke)||ke.contentEditable==="true")&&(Ka=ke,qf=P,yl=null);break;case"focusout":yl=qf=Ka=null;break;case"mousedown":Gf=!0;break;case"contextmenu":case"mouseup":case"dragend":Gf=!1,K_(J,a,K);break;case"selectionchange":if(hw)break;case"keydown":case"keyup":K_(J,a,K)}var ye;if(Ri)e:{switch(n){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else ze?H(n,a)&&(Se="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(y&&a.locale!=="ko"&&(ze||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&ze&&(ye=cl()):(Ai=K,Bs="value"in Ai?Ai.value:Ai.textContent,ze=!0)),ke=rh(P,Se),0<ke.length&&(Se=new dl(Se,n,null,a,K),J.push({event:Se,listeners:ke}),ye?Se.data=ye:(ye=ae(a),ye!==null&&(Se.data=ye)))),(ye=_?Ot(n,a):He(n,a))&&(Se=rh(P,"onBeforeInput"),0<Se.length&&(ke=new dl("onBeforeInput","beforeinput",null,a,K),J.push({event:ke,listeners:Se}),ke.data=ye)),Ww(J,n,P,a,K)}lv(J,i)})}function Kl(n,i,a){return{instance:n,listener:i,currentTarget:a}}function rh(n,i){for(var a=i+"Capture",l=[];n!==null;){var h=n,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=xr(n,a),h!=null&&l.unshift(Kl(n,h,d)),h=xr(n,i),h!=null&&l.push(Kl(n,h,d))),n=n.return}return l}function mo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function cv(n,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,I=T.alternate,P=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||P===null||(I=P,h?(P=xr(a,d),P!=null&&v.unshift(Kl(a,P,I))):h||(P=xr(a,d),P!=null&&v.push(Kl(a,P,I)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var Xw=/\r\n?/g,Zw=/\u0000|\uFFFD/g;function hv(n){return(typeof n=="string"?n:""+n).replace(Xw,`
`).replace(Zw,"")}function fv(n,i){return i=hv(i),hv(n)===i}function ah(){}function tt(n,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Bn(n,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Bn(n,""+l);break;case"className":Vs(n,"class",l);break;case"tabIndex":Vs(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Vs(n,a,l);break;case"style":lc(n,l,d);break;case"data":if(i!=="object"){Vs(n,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Si(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&tt(n,i,"name",h.name,h,null),tt(n,i,"formEncType",h.formEncType,h,null),tt(n,i,"formMethod",h.formMethod,h,null),tt(n,i,"formTarget",h.formTarget,h,null)):(tt(n,i,"encType",h.encType,h,null),tt(n,i,"method",h.method,h,null),tt(n,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Si(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=ah);break;case"onScroll":l!=null&&Ve("scroll",n);break;case"onScrollEnd":l!=null&&Ve("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(r(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=Si(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":Ve("beforetoggle",n),Ve("toggle",n),Ls(n,"popover",l);break;case"xlinkActuate":jn(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":jn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":jn(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":jn(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":jn(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":jn(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":jn(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":jn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":jn(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ls(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vf.get(a)||a,Ls(n,a,l))}}function pp(n,i,a,l,h,d){switch(a){case"style":lc(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(r(60));n.innerHTML=a}}break;case"children":typeof l=="string"?Bn(n,l):(typeof l=="number"||typeof l=="bigint")&&Bn(n,""+l);break;case"onScroll":l!=null&&Ve("scroll",n);break;case"onScrollEnd":l!=null&&Ve("scrollend",n);break;case"onClick":l!=null&&(n.onclick=ah);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ma.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=n[Nt]||null,d=d!=null?d[a]:null,typeof d=="function"&&n.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(i,l,h);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):Ls(n,a,l)}}}function Xt(n,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",n),Ve("load",n);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:tt(n,i,d,v,a,null)}}h&&tt(n,i,"srcSet",a.srcSet,a,null),l&&tt(n,i,"src",a.src,a,null);return;case"input":Ve("invalid",n);var T=d=v=h=null,I=null,P=null;for(l in a)if(a.hasOwnProperty(l)){var K=a[l];if(K!=null)switch(l){case"name":h=K;break;case"type":v=K;break;case"checked":I=K;break;case"defaultChecked":P=K;break;case"value":d=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(r(137,i));break;default:tt(n,i,l,K,a,null)}}Or(n,d,T,I,P,v,h,!1),Nr(n);return;case"select":Ve("invalid",n),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:tt(n,i,h,T,a,null)}i=d,a=v,n.multiple=!!l,i!=null?We(n,!!l,i,!1):a!=null&&We(n,!!l,a,!0);return;case"textarea":Ve("invalid",n),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:tt(n,i,v,T,a,null)}js(n,l,h,d),Nr(n);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:tt(n,i,I,l,a,null)}return;case"dialog":Ve("cancel",n),Ve("close",n);break;case"iframe":case"object":Ve("load",n);break;case"video":case"audio":for(l=0;l<Gl.length;l++)Ve(Gl[l],n);break;case"image":Ve("error",n),Ve("load",n);break;case"details":Ve("toggle",n);break;case"embed":case"source":case"link":Ve("error",n),Ve("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in a)if(a.hasOwnProperty(P)&&(l=a[P],l!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:tt(n,i,P,l,a,null)}return;default:if(ll(i)){for(K in a)a.hasOwnProperty(K)&&(l=a[K],l!==void 0&&pp(n,i,K,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&tt(n,i,T,l,a,null))}function Jw(n,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,I=null,P=null,K=null;for(G in a){var J=a[G];if(a.hasOwnProperty(G)&&J!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":I=J;default:l.hasOwnProperty(G)||tt(n,i,G,null,l,J)}}for(var B in l){var G=l[B];if(J=a[B],l.hasOwnProperty(B)&&(G!=null||J!=null))switch(B){case"type":d=G;break;case"name":h=G;break;case"checked":P=G;break;case"defaultChecked":K=G;break;case"value":v=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(r(137,i));break;default:G!==J&&tt(n,i,B,G,l,J)}}Us(n,v,T,I,P,K,d,h);return;case"select":G=v=T=B=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":G=I;default:l.hasOwnProperty(d)||tt(n,i,d,null,l,I)}for(h in l)if(d=l[h],I=a[h],l.hasOwnProperty(h)&&(d!=null||I!=null))switch(h){case"value":B=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==I&&tt(n,i,h,d,l,I)}i=T,a=v,l=G,B!=null?We(n,!!a,B,!1):!!l!=!!a&&(i!=null?We(n,!!a,i,!0):We(n,!!a,a?[]:"",!1));return;case"textarea":G=B=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:tt(n,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":B=h;break;case"defaultValue":G=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:h!==d&&tt(n,i,v,h,l,d)}Dr(n,B,G);return;case"option":for(var ge in a)if(B=a[ge],a.hasOwnProperty(ge)&&B!=null&&!l.hasOwnProperty(ge))switch(ge){case"selected":n.selected=!1;break;default:tt(n,i,ge,null,l,B)}for(I in l)if(B=l[I],G=a[I],l.hasOwnProperty(I)&&B!==G&&(B!=null||G!=null))switch(I){case"selected":n.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:tt(n,i,I,B,l,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Re in a)B=a[Re],a.hasOwnProperty(Re)&&B!=null&&!l.hasOwnProperty(Re)&&tt(n,i,Re,null,l,B);for(P in l)if(B=l[P],G=a[P],l.hasOwnProperty(P)&&B!==G&&(B!=null||G!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(r(137,i));break;default:tt(n,i,P,B,l,G)}return;default:if(ll(i)){for(var vt in a)B=a[vt],a.hasOwnProperty(vt)&&B!==void 0&&!l.hasOwnProperty(vt)&&pp(n,i,vt,void 0,l,B);for(K in l)B=l[K],G=a[K],!l.hasOwnProperty(K)||B===G||B===void 0&&G===void 0||pp(n,i,K,B,l,G);return}}for(var V in a)B=a[V],a.hasOwnProperty(V)&&B!=null&&!l.hasOwnProperty(V)&&tt(n,i,V,null,l,B);for(J in l)B=l[J],G=a[J],!l.hasOwnProperty(J)||B===G||B==null&&G==null||tt(n,i,J,B,l,G)}var mp=null,_p=null;function oh(n){return n.nodeType===9?n:n.ownerDocument}function dv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pv(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function gp(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var yp=null;function eb(){var n=window.event;return n&&n.type==="popstate"?n===yp?!1:(yp=n,!0):(yp=null,!1)}var mv=typeof setTimeout=="function"?setTimeout:void 0,tb=typeof clearTimeout=="function"?clearTimeout:void 0,_v=typeof Promise=="function"?Promise:void 0,nb=typeof queueMicrotask=="function"?queueMicrotask:typeof _v<"u"?function(n){return _v.resolve(null).then(n).catch(ib)}:mv;function ib(n){setTimeout(function(){throw n})}function vp(n,i){var a=i,l=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(l===0){n.removeChild(h),eu(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=h}while(a);eu(i)}function Ep(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ep(a),Ir(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function sb(n,i,a,l){for(;n.nodeType===1;){var h=a;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[ks])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==h.rel||n.getAttribute("href")!==(h.href==null?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=ui(n.nextSibling),n===null)break}return null}function rb(n,i,a){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=ui(n.nextSibling),n===null))return null;return n}function ui(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}function gv(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}function yv(n,i,a){switch(i=oh(a),n){case"html":if(n=i.documentElement,!n)throw Error(r(452));return n;case"head":if(n=i.head,!n)throw Error(r(453));return n;case"body":if(n=i.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}var Jn=new Map,vv=new Set;function lh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var fs=re.d;re.d={f:ab,r:ob,D:lb,C:ub,L:cb,m:hb,X:db,S:fb,M:pb};function ab(){var n=fs.f(),i=eh();return n||i}function ob(n){var i=qi(n);i!==null&&i.tag===5&&i.type==="form"?Kg(i):fs.r(n)}var _o=typeof document>"u"?null:document;function Ev(n,i,a){var l=_o;if(l&&typeof i=="string"&&i){var h=_t(i);h='link[rel="'+n+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),vv.has(h)||(vv.add(h),n={rel:n,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Xt(i,"link",n),dt(i),l.head.appendChild(i)))}}function lb(n){fs.D(n),Ev("dns-prefetch",n,null)}function ub(n,i){fs.C(n,i),Ev("preconnect",n,i)}function cb(n,i,a){fs.L(n,i,a);var l=_o;if(l&&n&&i){var h='link[rel="preload"][as="'+_t(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+_t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+_t(a.imageSizes)+'"]')):h+='[href="'+_t(n)+'"]';var d=h;switch(i){case"style":d=go(n);break;case"script":d=yo(n)}Jn.has(d)||(n=C({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:n,as:i},a),Jn.set(d,n),l.querySelector(h)!==null||i==="style"&&l.querySelector(Wl(d))||i==="script"&&l.querySelector(Yl(d))||(i=l.createElement("link"),Xt(i,"link",n),dt(i),l.head.appendChild(i)))}}function hb(n,i){fs.m(n,i);var a=_o;if(a&&n){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+_t(l)+'"][href="'+_t(n)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=yo(n)}if(!Jn.has(d)&&(n=C({rel:"modulepreload",href:n},i),Jn.set(d,n),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Yl(d)))return}l=a.createElement("link"),Xt(l,"link",n),dt(l),a.head.appendChild(l)}}}function fb(n,i,a){fs.S(n,i,a);var l=_o;if(l&&n){var h=Ps(l).hoistableStyles,d=go(n);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(Wl(d)))T.loading=5;else{n=C({rel:"stylesheet",href:n,"data-precedence":i},a),(a=Jn.get(d))&&Tp(n,a);var I=v=l.createElement("link");dt(I),Xt(I,"link",n),I._p=new Promise(function(P,K){I.onload=P,I.onerror=K}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,uh(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function db(n,i){fs.X(n,i);var a=_o;if(a&&n){var l=Ps(a).hoistableScripts,h=yo(n),d=l.get(h);d||(d=a.querySelector(Yl(h)),d||(n=C({src:n,async:!0},i),(i=Jn.get(h))&&Sp(n,i),d=a.createElement("script"),dt(d),Xt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function pb(n,i){fs.M(n,i);var a=_o;if(a&&n){var l=Ps(a).hoistableScripts,h=yo(n),d=l.get(h);d||(d=a.querySelector(Yl(h)),d||(n=C({src:n,async:!0,type:"module"},i),(i=Jn.get(h))&&Sp(n,i),d=a.createElement("script"),dt(d),Xt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Tv(n,i,a,l){var h=(h=Pt.current)?lh(h):null;if(!h)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=go(a.href),a=Ps(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=go(a.href);var d=Ps(h).hoistableStyles,v=d.get(n);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,v),(d=h.querySelector(Wl(n)))&&!d._p&&(v.instance=d,v.state.loading=5),Jn.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Jn.set(n,a),d||mb(h,n,a,v.state))),i&&l===null)throw Error(r(528,""));return v}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=yo(a),a=Ps(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function go(n){return'href="'+_t(n)+'"'}function Wl(n){return'link[rel="stylesheet"]['+n+"]"}function Sv(n){return C({},n,{"data-precedence":n.precedence,precedence:null})}function mb(n,i,a,l){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=n.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Xt(i,"link",a),dt(i),n.head.appendChild(i))}function yo(n){return'[src="'+_t(n)+'"]'}function Yl(n){return"script[async]"+n}function Av(n,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=n.querySelector('style[data-href~="'+_t(a.href)+'"]');if(l)return i.instance=l,dt(l),l;var h=C({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),dt(l),Xt(l,"style",h),uh(l,a.precedence,n),i.instance=l;case"stylesheet":h=go(a.href);var d=n.querySelector(Wl(h));if(d)return i.state.loading|=4,i.instance=d,dt(d),d;l=Sv(a),(h=Jn.get(h))&&Tp(l,h),d=(n.ownerDocument||n).createElement("link"),dt(d);var v=d;return v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),Xt(d,"link",l),i.state.loading|=4,uh(d,a.precedence,n),i.instance=d;case"script":return d=yo(a.src),(h=n.querySelector(Yl(d)))?(i.instance=h,dt(h),h):(l=a,(h=Jn.get(d))&&(l=C({},a),Sp(l,h)),n=n.ownerDocument||n,h=n.createElement("script"),dt(h),Xt(h,"link",l),n.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,uh(l,a.precedence,n));return i.instance}function uh(n,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(n,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(n,i.firstChild))}function Tp(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Sp(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var ch=null;function wv(n,i,a){if(ch===null){var l=new Map,h=ch=new Map;h.set(a,l)}else h=ch,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),h=0;h<a.length;h++){var d=a[h];if(!(d[ks]||d[Vt]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=n+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function bv(n,i,a){n=n.ownerDocument||n,n.head.insertBefore(a,i==="title"?n.querySelector("head > title"):null)}function _b(n,i,a){if(a===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Cv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Ql=null;function gb(){}function yb(n,i,a){if(Ql===null)throw Error(r(475));var l=Ql;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=go(a.href),d=n.querySelector(Wl(h));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=hh.bind(l),n.then(l,l)),i.state.loading|=4,i.instance=d,dt(d);return}d=n.ownerDocument||n,a=Sv(a),(h=Jn.get(h))&&Tp(a,h),d=d.createElement("link"),dt(d);var v=d;v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),Xt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=hh.bind(l),n.addEventListener("load",i),n.addEventListener("error",i))}}function vb(){if(Ql===null)throw Error(r(475));var n=Ql;return n.stylesheets&&n.count===0&&Ap(n,n.stylesheets),0<n.count?function(i){var a=setTimeout(function(){if(n.stylesheets&&Ap(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(a)}}:null}function hh(){if(this.count--,this.count===0){if(this.stylesheets)Ap(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var fh=null;function Ap(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,fh=new Map,i.forEach(Eb,n),fh=null,hh.call(n))}function Eb(n,i){if(!(i.state.loading&4)){var a=fh.get(n);if(a)var l=a.get(null);else{a=new Map,fh.set(n,a);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=hh.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),i.state.loading|=4}}var $l={$$typeof:z,Provider:null,Consumer:null,_currentValue:ve,_currentValue2:ve,_threadCount:0};function Tb(n,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xa(0),this.hiddenUpdates=xa(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Rv(n,i,a,l,h,d,v,T,I,P,K,J){return n=new Tb(n,i,a,v,T,I,P,J),i=1,d===!0&&(i|=24),d=Xn(3,null,null,i),n.current=d,d.stateNode=n,i=td(),i.refCount++,n.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Pd(d),n}function Iv(n){return n?(n=Qa,n):Qa}function Nv(n,i,a,l,h,d){h=Iv(h),l.context===null?l.context=h:l.pendingContext=h,l=Ys(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Qs(n,l,i),a!==null&&(En(a,n,i),kl(a,n,i))}function Ov(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function wp(n,i){Ov(n,i),(n=n.alternate)&&Ov(n,i)}function Dv(n){if(n.tag===13){var i=zs(n,67108864);i!==null&&En(i,n,67108864),wp(n,67108864)}}var dh=!0;function Sb(n,i,a,l){var h=b.T;b.T=null;var d=re.p;try{re.p=2,bp(n,i,a,l)}finally{re.p=d,b.T=h}}function Ab(n,i,a,l){var h=b.T;b.T=null;var d=re.p;try{re.p=8,bp(n,i,a,l)}finally{re.p=d,b.T=h}}function bp(n,i,a,l){if(dh){var h=Cp(l);if(h===null)dp(n,i,l,ph,a),kv(n,l);else if(bb(h,n,i,a,l))l.stopPropagation();else if(kv(n,l),i&4&&-1<wb.indexOf(n)){for(;h!==null;){var d=qi(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=si(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var I=1<<31-_n(v);T.entanglements[1]|=I,v&=~I}ki(d),(mt&6)===0&&(Xc=Tn()+500,ql(0))}}break;case 13:T=zs(d,2),T!==null&&En(T,d,2),eh(),wp(d,2)}if(d=Cp(l),d===null&&dp(n,i,l,ph,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else dp(n,i,l,null,a)}}function Cp(n){return n=Va(n),Rp(n)}var ph=null;function Rp(n){if(ph=null,n=ri(n),n!==null){var i=de(n);if(i===null)n=null;else{var a=i.tag;if(a===13){if(n=Ee(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return ph=n,null}function xv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ju()){case It:return 2;case Lt:return 8;case Hi:case ec:return 32;case Zo:return 268435456;default:return 32}default:return 32}}var Ip=!1,nr=null,ir=null,sr=null,Xl=new Map,Zl=new Map,rr=[],wb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kv(n,i){switch(n){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Xl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(i.pointerId)}}function Jl(n,i,a,l,h,d){return n===null||n.nativeEvent!==d?(n={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=qi(i),i!==null&&Dv(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function bb(n,i,a,l,h){switch(i){case"focusin":return nr=Jl(nr,n,i,a,l,h),!0;case"dragenter":return ir=Jl(ir,n,i,a,l,h),!0;case"mouseover":return sr=Jl(sr,n,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Xl.set(d,Jl(Xl.get(d)||null,n,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Zl.set(d,Jl(Zl.get(d)||null,n,i,a,l,h)),!0}return!1}function Mv(n){var i=ri(n.target);if(i!==null){var a=de(i);if(a!==null){if(i=a.tag,i===13){if(i=Ee(a),i!==null){n.blockedOn=i,xs(n.priority,function(){if(a.tag===13){var l=Mn(),h=zs(a,l);h!==null&&En(h,a,l),wp(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function mh(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Cp(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);zn=l,a.target.dispatchEvent(l),zn=null}else return i=qi(a),i!==null&&Dv(i),n.blockedOn=a,!1;i.shift()}return!0}function Pv(n,i,a){mh(n)&&a.delete(i)}function Cb(){Ip=!1,nr!==null&&mh(nr)&&(nr=null),ir!==null&&mh(ir)&&(ir=null),sr!==null&&mh(sr)&&(sr=null),Xl.forEach(Pv),Zl.forEach(Pv)}function _h(n,i){n.blockedOn===i&&(n.blockedOn=null,Ip||(Ip=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Cb)))}var gh=null;function Lv(n){gh!==n&&(gh=n,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){gh===n&&(gh=null);for(var i=0;i<n.length;i+=3){var a=n[i],l=n[i+1],h=n[i+2];if(typeof l!="function"){if(Rp(l||a)===null)continue;break}var d=qi(a);d!==null&&(n.splice(i,3),i-=3,gd(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function eu(n){function i(I){return _h(I,n)}nr!==null&&_h(nr,n),ir!==null&&_h(ir,n),sr!==null&&_h(sr,n),Xl.forEach(i),Zl.forEach(i);for(var a=0;a<rr.length;a++){var l=rr[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<rr.length&&(a=rr[0],a.blockedOn===null);)Mv(a),a.blockedOn===null&&rr.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[Nt]||null;if(typeof d=="function")v||Lv(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[Nt]||null)T=v.formAction;else if(Rp(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),Lv(a)}}}function Np(n){this._internalRoot=n}yh.prototype.render=Np.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(r(409));var a=i.current,l=Mn();Nv(a,l,n,i,null,null)},yh.prototype.unmount=Np.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;n.tag===0&&fo(),Nv(n.current,2,null,n,null,null),eh(),i[Fi]=null}};function yh(n){this._internalRoot=n}yh.prototype.unstable_scheduleHydration=function(n){if(n){var i=rc();n={blockedOn:null,target:n,priority:i};for(var a=0;a<rr.length&&i!==0&&i<rr[a].priority;a++);rr.splice(a,0,n),a===0&&Mv(n)}};var Vv=e.version;if(Vv!=="19.0.0")throw Error(r(527,Vv,"19.0.0"));re.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=q(i),n=n!==null?ue(n):null,n=n===null?null:n.stateNode,n};var Rb={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:b,findFiberByHostInstance:ri,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vh.isDisabled&&vh.supportsFiber)try{Cs=vh.inject(Rb),rn=vh}catch{}}return nu.createRoot=function(n,i){if(!o(n))throw Error(r(299));var a=!1,l="",h=ey,d=ty,v=ny,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=Rv(n,1,!1,null,null,a,l,h,d,v,T,null),n[Fi]=i.current,fp(n.nodeType===8?n.parentNode:n),new Np(i)},nu.hydrateRoot=function(n,i,a){if(!o(n))throw Error(r(299));var l=!1,h="",d=ey,v=ty,T=ny,I=null,P=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(P=a.formState)),i=Rv(n,1,!0,i,a??null,l,h,d,v,T,I,P),i.context=Iv(null),a=i.current,l=Mn(),h=Ys(l),h.callback=null,Qs(a,h,l),i.current.lanes=l,Tt(i,l),ki(i),n[Fi]=i.current,fp(n),new yh(i)},nu.version="19.0.0",nu}var Wv;function Vb(){if(Wv)return xp.exports;Wv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),xp.exports=Lb(),xp.exports}var Ub=Vb();const jb="_hideHome_1637z_19",Bb="_home_wrapper_1637z_27",zb="_left_1637z_43",Hb="_wrapTop_1637z_61",Fb="_wrapBottom_1637z_127",qb="_orange_1637z_157",Gb="_purple_1637z_163",Kb="_blue_1637z_169",Wb="_right_1637z_179",ds={hideHome:jb,home_wrapper:Bb,left:zb,wrapTop:Hb,wrapBottom:Fb,orange:qb,purple:Gb,blue:Kb,right:Wb},Te=({className:s,content:e,func:t,submit:r,icon:o,change:u,element:f})=>S.jsxs("button",{className:`${s}`,onChange:()=>{u()},onSubmit:p=>{r(p)},onClick:()=>{t()},children:[o,e,f]}),Yb="_nav_11pvi_45",Qb="_hideNav_11pvi_53",$b="_left_11pvi_99",Xb="_middle_11pvi_127",Zb="_NavLinks_11pvi_127",Jb="_indicated_11pvi_173",eC="_indication_11pvi_183",tC="_right_11pvi_201",nC="_HamburgerButt_11pvi_231",iC="_SignInButt_11pvi_247",sC="_SignUpButt_11pvi_281",rC="_sidebar_11pvi_313",aC="_hideSideBar_11pvi_323",oC="_User_Button_11pvi_541",De={nav:Yb,hideNav:Qb,left:$b,middle:Xb,NavLinks:Zb,indicated:Jb,indication:eC,right:tC,HamburgerButt:nC,SignInButt:iC,SignUpButt:sC,sidebar:rC,hideSideBar:aC,User_Button:oC},lC=()=>{};var Yv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=function(s,e){if(!s)throw Ho(e)},Ho=function(s){return new Error("Firebase Database ("+KT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=function(s){const e=[];let t=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},uC=function(s){const e=[];let t=0,r=0;for(;t<s.length;){const o=s[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const u=s[t++];e[r++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=s[t++],f=s[t++],p=s[t++],m=((o&7)<<18|(u&63)<<12|(f&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(m>>10)),e[r++]=String.fromCharCode(56320+(m&1023))}else{const u=s[t++],f=s[t++];e[r++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},Mm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<s.length;o+=3){const u=s[o],f=o+1<s.length,p=f?s[o+1]:0,m=o+2<s.length,g=m?s[o+2]:0,E=u>>2,A=(u&3)<<4|p>>4;let O=(p&15)<<2|g>>6,z=g&63;m||(z=64,f||(O=64)),r.push(t[E],t[A],t[O],t[z])}return r.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(WT(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):uC(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<s.length;){const u=t[s.charAt(o++)],p=o<s.length?t[s.charAt(o)]:0;++o;const g=o<s.length?t[s.charAt(o)]:64;++o;const A=o<s.length?t[s.charAt(o)]:64;if(++o,u==null||p==null||g==null||A==null)throw new cC;const O=u<<2|p>>4;if(r.push(O),g!==64){const z=p<<4&240|g>>2;if(r.push(z),A!==64){const F=g<<6&192|A;r.push(F)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class cC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YT=function(s){const e=WT(s);return Mm.encodeByteArray(e,!0)},Vh=function(s){return YT(s).replace(/\./g,"")},Uh=function(s){try{return Mm.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(s){return QT(void 0,s)}function QT(s,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!fC(t)||(s[t]=QT(s[t],e[t]));return s}function fC(s){return s!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=()=>dC().__FIREBASE_DEFAULTS__,mC=()=>{if(typeof process>"u"||typeof Yv>"u")return;const s=Yv.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},_C=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Uh(s[1]);return e&&JSON.parse(e)},df=()=>{try{return lC()||pC()||mC()||_C()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},$T=s=>{var e,t;return(t=(e=df())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[s]},gC=s=>{const e=$T(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},XT=()=>{var s;return(s=df())===null||s===void 0?void 0:s.config},ZT=s=>{var e;return(e=df())===null||e===void 0?void 0:e[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=s.iat||0,u=s.sub||s.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},s);return[Vh(JSON.stringify(t)),Vh(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mn())}function vC(){var s;const e=(s=df())===null||s===void 0?void 0:s.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function EC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function TC(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function JT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function SC(){const s=mn();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function AC(){return KT.NODE_ADMIN===!0}function wC(){return!vC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bC(){try{return typeof indexedDB=="object"}catch{return!1}}function CC(){return new Promise((s,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),s(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="FirebaseError";class ws extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=RC,Object.setPrototypeOf(this,ws.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uu.prototype.create)}}class Uu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?IC(u,r):"Error",p=`${this.serviceName}: ${f} (${o}).`;return new ws(o,p,r)}}function IC(s,e){return s.replace(NC,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const NC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(s){return JSON.parse(s)}function tn(s){return JSON.stringify(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=function(s){let e={},t={},r={},o="";try{const u=s.split(".");e=Cu(Uh(u[0])||""),t=Cu(Uh(u[1])||""),o=u[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:o}},OC=function(s){const e=e0(s),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},DC=function(s){const e=e0(s).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function Mo(s,e){if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}function Jp(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function jh(s,e,t){const r={};for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&(r[o]=e.call(t,s[o],o,s));return r}function ca(s,e){if(s===e)return!0;const t=Object.keys(s),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const u=s[o],f=e[o];if(Qv(u)&&Qv(f)){if(!ca(u,f))return!1}else if(u!==f)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function Qv(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(s){const e=[];for(const[t,r]of Object.entries(s))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function du(s){const e={};return s.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,u]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function pu(s){const e=s.indexOf("?");if(!e)return"";const t=s.indexOf("#",e);return s.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let A=0;A<16;A++)r[A]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let A=0;A<16;A++)r[A]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let A=16;A<80;A++){const O=r[A-3]^r[A-8]^r[A-14]^r[A-16];r[A]=(O<<1|O>>>31)&4294967295}let o=this.chain_[0],u=this.chain_[1],f=this.chain_[2],p=this.chain_[3],m=this.chain_[4],g,E;for(let A=0;A<80;A++){A<40?A<20?(g=p^u&(f^p),E=1518500249):(g=u^f^p,E=1859775393):A<60?(g=u&f|p&(u|f),E=2400959708):(g=u^f^p,E=3395469782);const O=(o<<5|o>>>27)+g+m+E+r[A]&4294967295;m=p,p=f,f=(u<<30|u>>>2)&4294967295,u=o,o=O}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+f&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let o=0;const u=this.buf_;let f=this.inbuf_;for(;o<t;){if(f===0)for(;o<=r;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(u[f]=e.charCodeAt(o),++f,++o,f===this.blockSize){this.compress_(u),f=0;break}}else for(;o<t;)if(u[f]=e[o],++f,++o,f===this.blockSize){this.compress_(u),f=0;break}}this.inbuf_=f,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let u=24;u>=0;u-=8)e[r]=this.chain_[o]>>u&255,++r;return e}}function kC(s,e){const t=new MC(s,e);return t.subscribe.bind(t)}class MC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");PC(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=Lp),o.error===void 0&&(o.error=Lp),o.complete===void 0&&(o.complete=Lp);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PC(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function Lp(){}function LC(s,e){return`${s} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=function(s){const e=[];let t=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);if(o>=55296&&o<=56319){const u=o-55296;r++,he(r<s.length,"Surrogate pair missing trail surrogate.");const f=s.charCodeAt(r)-56320;o=65536+(u<<10)+f}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},pf=function(s){let e=0;for(let t=0;t<s.length;t++){const r=s.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(s){return s&&s._delegate?s._delegate:s}class gr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Pm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BC(e))try{this.getOrInitializeService({instanceIdentifier:sa})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});r.resolve(u)}catch{}}}}clearInstance(e=sa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sa){return this.instances.has(e)}getOptions(e=sa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[u,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);r===p&&f.resolve(o)}return o}onInit(e,t){var r;const o=this.normalizeInstanceIdentifier(t),u=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;u.add(e),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&e(f,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jC(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=sa){return this.component?this.component.multipleInstances?e:sa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jC(s){return s===sa?void 0:s}function BC(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new UC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Pe||(Pe={}));const HC={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},FC=Pe.INFO,qC={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},GC=(s,e,...t)=>{if(e<s.logLevel)return;const r=new Date().toISOString(),o=qC[e];if(o)console[o](`[${r}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mf{constructor(e){this.name=e,this._logLevel=FC,this._logHandler=GC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const KC=(s,e)=>e.some(t=>s instanceof t);let $v,Xv;function WC(){return $v||($v=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YC(){return Xv||(Xv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t0=new WeakMap,em=new WeakMap,n0=new WeakMap,Vp=new WeakMap,Vm=new WeakMap;function QC(s){const e=new Promise((t,r)=>{const o=()=>{s.removeEventListener("success",u),s.removeEventListener("error",f)},u=()=>{t(pr(s.result)),o()},f=()=>{r(s.error),o()};s.addEventListener("success",u),s.addEventListener("error",f)});return e.then(t=>{t instanceof IDBCursor&&t0.set(t,s)}).catch(()=>{}),Vm.set(e,s),e}function $C(s){if(em.has(s))return;const e=new Promise((t,r)=>{const o=()=>{s.removeEventListener("complete",u),s.removeEventListener("error",f),s.removeEventListener("abort",f)},u=()=>{t(),o()},f=()=>{r(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",u),s.addEventListener("error",f),s.addEventListener("abort",f)});em.set(s,e)}let tm={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return em.get(s);if(e==="objectStoreNames")return s.objectStoreNames||n0.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pr(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function XC(s){tm=s(tm)}function ZC(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=s.call(Up(this),e,...t);return n0.set(r,e.sort?e.sort():[e]),pr(r)}:YC().includes(s)?function(...e){return s.apply(Up(this),e),pr(t0.get(this))}:function(...e){return pr(s.apply(Up(this),e))}}function JC(s){return typeof s=="function"?ZC(s):(s instanceof IDBTransaction&&$C(s),KC(s,WC())?new Proxy(s,tm):s)}function pr(s){if(s instanceof IDBRequest)return QC(s);if(Vp.has(s))return Vp.get(s);const e=JC(s);return e!==s&&(Vp.set(s,e),Vm.set(e,s)),e}const Up=s=>Vm.get(s);function eR(s,e,{blocked:t,upgrade:r,blocking:o,terminated:u}={}){const f=indexedDB.open(s,e),p=pr(f);return r&&f.addEventListener("upgradeneeded",m=>{r(pr(f.result),m.oldVersion,m.newVersion,pr(f.transaction),m)}),t&&f.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const tR=["get","getKey","getAll","getAllKeys","count"],nR=["put","add","delete","clear"],jp=new Map;function Zv(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(jp.get(e))return jp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=nR.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||tR.includes(t)))return;const u=async function(f,...p){const m=this.transaction(f,o?"readwrite":"readonly");let g=m.store;return r&&(g=g.index(p.shift())),(await Promise.all([g[t](...p),o&&m.done]))[0]};return jp.set(e,u),u}XC(s=>({...s,get:(e,t,r)=>Zv(e,t)||s.get(e,t,r),has:(e,t)=>!!Zv(e,t)||s.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sR(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function sR(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nm="@firebase/app",Jv="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new mf("@firebase/app"),rR="@firebase/app-compat",aR="@firebase/analytics-compat",oR="@firebase/analytics",lR="@firebase/app-check-compat",uR="@firebase/app-check",cR="@firebase/auth",hR="@firebase/auth-compat",fR="@firebase/database",dR="@firebase/data-connect",pR="@firebase/database-compat",mR="@firebase/functions",_R="@firebase/functions-compat",gR="@firebase/installations",yR="@firebase/installations-compat",vR="@firebase/messaging",ER="@firebase/messaging-compat",TR="@firebase/performance",SR="@firebase/performance-compat",AR="@firebase/remote-config",wR="@firebase/remote-config-compat",bR="@firebase/storage",CR="@firebase/storage-compat",RR="@firebase/firestore",IR="@firebase/vertexai",NR="@firebase/firestore-compat",OR="firebase",DR="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="[DEFAULT]",xR={[nm]:"fire-core",[rR]:"fire-core-compat",[oR]:"fire-analytics",[aR]:"fire-analytics-compat",[uR]:"fire-app-check",[lR]:"fire-app-check-compat",[cR]:"fire-auth",[hR]:"fire-auth-compat",[fR]:"fire-rtdb",[dR]:"fire-data-connect",[pR]:"fire-rtdb-compat",[mR]:"fire-fn",[_R]:"fire-fn-compat",[gR]:"fire-iid",[yR]:"fire-iid-compat",[vR]:"fire-fcm",[ER]:"fire-fcm-compat",[TR]:"fire-perf",[SR]:"fire-perf-compat",[AR]:"fire-rc",[wR]:"fire-rc-compat",[bR]:"fire-gcs",[CR]:"fire-gcs-compat",[RR]:"fire-fst",[NR]:"fire-fst-compat",[IR]:"fire-vertex","fire-js":"fire-js",[OR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=new Map,kR=new Map,sm=new Map;function eE(s,e){try{s.container.addComponent(e)}catch(t){Ss.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function ha(s){const e=s.name;if(sm.has(e))return Ss.debug(`There were multiple attempts to register component ${e}.`),!1;sm.set(e,s);for(const t of Bh.values())eE(t,s);for(const t of kR.values())eE(t,s);return!0}function Um(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function Ln(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mr=new Uu("app","Firebase",MR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=DR;function i0(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const r=Object.assign({name:im,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw mr.create("bad-app-name",{appName:String(o)});if(t||(t=XT()),!t)throw mr.create("no-options");const u=Bh.get(o);if(u){if(ca(t,u.options)&&ca(r,u.config))return u;throw mr.create("duplicate-app",{appName:o})}const f=new zC(o);for(const m of sm.values())f.addComponent(m);const p=new PR(t,r,f);return Bh.set(o,p),p}function s0(s=im){const e=Bh.get(s);if(!e&&s===im&&XT())return i0();if(!e)throw mr.create("no-app",{appName:s});return e}function Vi(s,e,t){var r;let o=(r=xR[s])!==null&&r!==void 0?r:s;t&&(o+=`-${t}`);const u=o.match(/\s|\//),f=e.match(/\s|\//);if(u||f){const p=[`Unable to register library "${o}" with version "${e}":`];u&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&p.push("and"),f&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ss.warn(p.join(" "));return}ha(new gr(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="firebase-heartbeat-database",VR=1,Ru="firebase-heartbeat-store";let Bp=null;function r0(){return Bp||(Bp=eR(LR,VR,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Ru)}catch(t){console.warn(t)}}}}).catch(s=>{throw mr.create("idb-open",{originalErrorMessage:s.message})})),Bp}async function UR(s){try{const t=(await r0()).transaction(Ru),r=await t.objectStore(Ru).get(a0(s));return await t.done,r}catch(e){if(e instanceof ws)Ss.warn(e.message);else{const t=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ss.warn(t.message)}}}async function tE(s,e){try{const r=(await r0()).transaction(Ru,"readwrite");await r.objectStore(Ru).put(e,a0(s)),await r.done}catch(t){if(t instanceof ws)Ss.warn(t.message);else{const r=mr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ss.warn(r.message)}}}function a0(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=1024,BR=30;class zR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new FR(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=nE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>BR){const f=qR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ss.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nE(),{heartbeatsToSend:r,unsentEntries:o}=HR(this._heartbeatsCache.heartbeats),u=Vh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ss.warn(t),""}}}function nE(){return new Date().toISOString().substring(0,10)}function HR(s,e=jR){const t=[];let r=s.slice();for(const o of s){const u=t.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),iE(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),iE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class FR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bC()?CC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await UR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return tE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return tE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function iE(s){return Vh(JSON.stringify({version:2,heartbeats:s})).length}function qR(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let r=1;r<s.length;r++)s[r].date<t&&(t=s[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(s){ha(new gr("platform-logger",e=>new iR(e),"PRIVATE")),ha(new gr("heartbeat",e=>new zR(e),"PRIVATE")),Vi(nm,Jv,s),Vi(nm,Jv,"esm2017"),Vi("fire-js","")}GR("");function jm(s,e){var t={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&e.indexOf(r)<0&&(t[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(s);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(s,r[o])&&(t[r[o]]=s[r[o]]);return t}function o0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KR=o0,l0=new Uu("auth","Firebase",o0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=new mf("@firebase/auth");function WR(s,...e){zh.logLevel<=Pe.WARN&&zh.warn(`Auth (${Sa}): ${s}`,...e)}function Ih(s,...e){zh.logLevel<=Pe.ERROR&&zh.error(`Auth (${Sa}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(s,...e){throw Bm(s,...e)}function Ui(s,...e){return Bm(s,...e)}function u0(s,e,t){const r=Object.assign(Object.assign({},KR()),{[e]:t});return new Uu("auth","Firebase",r).create(e,{appName:s.name})}function ys(s){return u0(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bm(s,...e){if(typeof s!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(t,...r)}return l0.create(s,...e)}function Ae(s,e,...t){if(!s)throw Bm(e,...t)}function ps(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Ih(e),new Error(e)}function As(s,e){s||ps(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function YR(){return sE()==="http:"||sE()==="https:"}function sE(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YR()||TC()||"connection"in navigator)?navigator.onLine:!0}function $R(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t){this.shortDelay=e,this.longDelay=t,As(t>e,"Short delay should be less than long delay!"),this.isMobile=Lm()||JT()}get(){return QR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(s,e){As(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ps("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ps("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ps("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=new ju(3e4,6e4);function Ar(s,e){return s.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:s.tenantId}):e}async function wr(s,e,t,r,o={}){return h0(s,o,async()=>{let u={},f={};r&&(e==="GET"?f=r:u={body:JSON.stringify(r)});const p=Fo(Object.assign({key:s.config.apiKey},f)).slice(1),m=await s._getAdditionalHeaders();m["Content-Type"]="application/json",s.languageCode&&(m["X-Firebase-Locale"]=s.languageCode);const g=Object.assign({method:e,headers:m},u);return EC()||(g.referrerPolicy="no-referrer"),c0.fetch()(f0(s,s.config.apiHost,t,p),g)})}async function h0(s,e,t){s._canInitEmulator=!1;const r=Object.assign(Object.assign({},XR),e);try{const o=new e1(s),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Eh(s,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const p=u.ok?f.errorMessage:f.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eh(s,"credential-already-in-use",f);if(m==="EMAIL_EXISTS")throw Eh(s,"email-already-in-use",f);if(m==="USER_DISABLED")throw Eh(s,"user-disabled",f);const E=r[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw u0(s,E,g);_i(s,E)}}catch(o){if(o instanceof ws)throw o;_i(s,"network-request-failed",{message:String(o)})}}async function Bu(s,e,t,r,o={}){const u=await wr(s,e,t,r,o);return"mfaPendingCredential"in u&&_i(s,"multi-factor-auth-required",{_serverResponse:u}),u}function f0(s,e,t,r){const o=`${e}${t}?${r}`;return s.config.emulator?zm(s.config,o):`${s.config.apiScheme}://${o}`}function JR(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class e1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ui(this.auth,"network-request-failed")),ZR.get())})}}function Eh(s,e,t){const r={appName:s.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=Ui(s,e,r);return o.customData._tokenResponse=t,o}function rE(s){return s!==void 0&&s.enterprise!==void 0}class t1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return JR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function n1(s,e){return wr(s,"GET","/v2/recaptchaConfig",Ar(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(s,e){return wr(s,"POST","/v1/accounts:delete",e)}async function d0(s,e){return wr(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function s1(s,e=!1){const t=Cn(s),r=await t.getIdToken(e),o=Hm(r);Ae(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:r,authTime:gu(zp(o.auth_time)),issuedAtTime:gu(zp(o.iat)),expirationTime:gu(zp(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function zp(s){return Number(s)*1e3}function Hm(s){const[e,t,r]=s.split(".");if(e===void 0||t===void 0||r===void 0)return Ih("JWT malformed, contained fewer than 3 sections"),null;try{const o=Uh(t);return o?JSON.parse(o):(Ih("Failed to decode base64 JWT payload"),null)}catch(o){return Ih("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function aE(s){const e=Hm(s);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iu(s,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ws&&r1(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function r1({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gu(this.lastLoginAt),this.creationTime=gu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(s){var e;const t=s.auth,r=await s.getIdToken(),o=await Iu(s,d0(t,{idToken:r}));Ae(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];s._notifyReloadListener(u);const f=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?p0(u.providerUserInfo):[],p=l1(s.providerData,f),m=s.isAnonymous,g=!(s.email&&u.passwordHash)&&!(p!=null&&p.length),E=m?g:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new am(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(s,A)}async function o1(s){const e=Cn(s);await Hh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function l1(s,e){return[...s.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function p0(s){return s.map(e=>{var{providerId:t}=e,r=jm(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(s,e){const t=await h0(s,{},async()=>{const r=Fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=s.config,f=f0(s,o,"/v1/token",`key=${u}`),p=await s._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",c0.fetch()(f,{method:"POST",headers:p,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function c1(s,e){return wr(s,"POST","/v2/accounts:revokeToken",Ar(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const t=aE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:u}=await u1(e,t);this.updateTokensAndExpiration(r,o,Number(u))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:u}=t,f=new Ro;return r&&(Ae(typeof r=="string","internal-error",{appName:e}),f.refreshToken=r),o&&(Ae(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(Ae(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ro,this.toJSON())}_performRefresh(){return ps("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(s,e){Ae(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class ms{constructor(e){var{uid:t,auth:r,stsTokenManager:o}=e,u=jm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new a1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new am(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Iu(this,this.stsTokenManager.getToken(this.auth,e));return Ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return s1(this,e)}reload(){return o1(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ms(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Hh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(ys(this.auth));const e=await this.getIdToken();return await Iu(this,i1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,o,u,f,p,m,g,E;const A=(r=t.displayName)!==null&&r!==void 0?r:void 0,O=(o=t.email)!==null&&o!==void 0?o:void 0,z=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,F=(f=t.photoURL)!==null&&f!==void 0?f:void 0,Q=(p=t.tenantId)!==null&&p!==void 0?p:void 0,W=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,Y=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ee=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:te,emailVerified:se,isAnonymous:oe,providerData:me,stsTokenManager:x}=t;Ae(te&&x,e,"internal-error");const R=Ro.fromJSON(this.name,x);Ae(typeof te=="string",e,"internal-error"),or(A,e.name),or(O,e.name),Ae(typeof se=="boolean",e,"internal-error"),Ae(typeof oe=="boolean",e,"internal-error"),or(z,e.name),or(F,e.name),or(Q,e.name),or(W,e.name),or(Y,e.name),or(ee,e.name);const b=new ms({uid:te,auth:e,email:O,emailVerified:se,displayName:A,isAnonymous:oe,photoURL:F,phoneNumber:z,tenantId:Q,stsTokenManager:R,createdAt:Y,lastLoginAt:ee});return me&&Array.isArray(me)&&(b.providerData=me.map(C=>Object.assign({},C))),W&&(b._redirectEventId=W),b}static async _fromIdTokenResponse(e,t,r=!1){const o=new Ro;o.updateFromServerResponse(t);const u=new ms({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await Hh(u),u}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];Ae(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?p0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new Ro;p.updateFromIdToken(r);const m=new ms({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:f}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new am(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=new Map;function _s(s){As(s instanceof Function,"Expected a class definition");let e=oE.get(s);return e?(As(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,oE.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}m0.type="NONE";const lE=m0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(s,e,t){return`firebase:${s}:${e}:${t}`}class Io{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:u}=this.auth;this.fullUserKey=Nh(this.userKey,o.apiKey,u),this.fullPersistenceKey=Nh("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ms._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Io(_s(lE),e,r);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||_s(lE);const f=Nh(r,e.config.apiKey,e.name);let p=null;for(const g of t)try{const E=await g._get(f);if(E){const A=ms._fromJSON(e,E);g!==u&&(p=A),u=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new Io(u,e,r):(u=m[0],p&&await u._set(f,p.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(f)}catch{}})),new Io(u,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(T0(e))return"Blackberry";if(S0(e))return"Webos";if(g0(e))return"Safari";if((e.includes("chrome/")||y0(e))&&!e.includes("edge/"))return"Chrome";if(E0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _0(s=mn()){return/firefox\//i.test(s)}function g0(s=mn()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y0(s=mn()){return/crios\//i.test(s)}function v0(s=mn()){return/iemobile/i.test(s)}function E0(s=mn()){return/android/i.test(s)}function T0(s=mn()){return/blackberry/i.test(s)}function S0(s=mn()){return/webos/i.test(s)}function Fm(s=mn()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function h1(s=mn()){var e;return Fm(s)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function f1(){return SC()&&document.documentMode===10}function A0(s=mn()){return Fm(s)||E0(s)||S0(s)||T0(s)||/windows phone/i.test(s)||v0(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(s,e=[]){let t;switch(s){case"Browser":t=uE(mn());break;case"Worker":t=`${uE(mn())}-${s}`;break;default:t=s}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Sa}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=u=>new Promise((f,p)=>{try{const m=e(u);f(m)}catch(m){p(m)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(s,e={}){return wr(s,"GET","/v2/passwordPolicy",Ar(s,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=6;class _1{constructor(e){var t,r,o,u;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=f.minPasswordLength)!==null&&t!==void 0?t:m1,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,o,u,f,p;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(r=m.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),m.isValid&&(m.isValid=(o=m.containsLowercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(u=m.containsUppercaseLetter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(f=m.containsNumericCharacter)!==null&&f!==void 0?f:!0),m.isValid&&(m.isValid=(p=m.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),m}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cE(this),this.idTokenSubscription=new cE(this),this.beforeStateQueue=new d1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_s(t)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await Io.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await d0(this,{idToken:e}),r=await ms._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ln(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(p,p))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=o==null?void 0:o._redirectEventId,m=await this.tryRedirectSignIn(e);(!f||f===p)&&(m!=null&&m.user)&&(o=m.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$R()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(ys(this));const t=e?Cn(e):null;return t&&Ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(ys(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(ys(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_s(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await p1(this),t=new _1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Uu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await c1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_s(e)||this._popupRedirectResolver;Ae(t,this,"argument-error"),this.redirectPersistenceManager=await Io.create(this,[_s(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(p,this,"internal-error"),p.then(()=>{f||u(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,r,o);return()=>{f=!0,m()}}else{const m=e.addObserver(t);return()=>{f=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=w0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&WR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Aa(s){return Cn(s)}class cE{constructor(e){this.auth=e,this.observer=null,this.addObserver=kC(t=>this.observer=t)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _f={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function y1(s){_f=s}function b0(s){return _f.loadJS(s)}function v1(){return _f.recaptchaEnterpriseScript}function E1(){return _f.gapiScript}function T1(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class S1{constructor(){this.enterprise=new A1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class A1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const w1="recaptcha-enterprise",C0="NO_RECAPTCHA";class b1{constructor(e){this.type=w1,this.auth=Aa(e)}async verify(e="verify",t=!1){async function r(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,p)=>{n1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new t1(m);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,f(g.siteKey)}}).catch(m=>{p(m)})})}function o(u,f,p){const m=window.grecaptcha;rE(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(g=>{f(g)}).catch(()=>{f(C0)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new S1().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{r(this.auth).then(p=>{if(!t&&rE(window.grecaptcha))o(p,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let m=v1();m.length!==0&&(m+=p),b0(m).then(()=>{o(p,u,f)}).catch(g=>{f(g)})}}).catch(p=>{f(p)})})}}async function hE(s,e,t,r=!1,o=!1){const u=new b1(s);let f;if(o)f=C0;else try{f=await u.verify(t)}catch{f=await u.verify(t,!0)}const p=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return r?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function om(s,e,t,r,o){var u;if(!((u=s._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await hE(s,e,t,t==="getOobCode");return r(s,f)}else return r(s,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await hE(s,e,t,t==="getOobCode");return r(s,p)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(s,e){const t=Um(s,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ca(u,e??{}))return o;_i(o,"already-initialized")}return t.initialize({options:e})}function R1(s,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_s);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function I1(s,e,t){const r=Aa(s);Ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,u=R0(e),{host:f,port:p}=N1(e),m=p===null?"":`:${p}`,g={url:`${u}//${f}${m}/`},E=Object.freeze({host:f,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){Ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ae(ca(g,r.config.emulator)&&ca(E,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=E,r.settings.appVerificationDisabledForTesting=!0,O1()}function R0(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function N1(s){const e=R0(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const u=o[1];return{host:u,port:fE(r.substr(u.length+1))}}else{const[u,f]=r.split(":");return{host:u,port:fE(f)}}}function fE(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function O1(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ps("not implemented")}_getIdTokenResponse(e){return ps("not implemented")}_linkToIdToken(e,t){return ps("not implemented")}_getReauthenticationResolver(e){return ps("not implemented")}}async function D1(s,e){return wr(s,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(s,e){return Bu(s,"POST","/v1/accounts:signInWithPassword",Ar(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k1(s,e){return Bu(s,"POST","/v1/accounts:signInWithEmailLink",Ar(s,e))}async function M1(s,e){return Bu(s,"POST","/v1/accounts:signInWithEmailLink",Ar(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu extends qm{constructor(e,t,r,o=null){super("password",r),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Nu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Nu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return om(e,t,"signInWithPassword",x1);case"emailLink":return k1(e,{email:this._email,oobCode:this._password});default:_i(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return om(e,r,"signUpPassword",D1);case"emailLink":return M1(e,{idToken:t,email:this._email,oobCode:this._password});default:_i(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(s,e){return Bu(s,"POST","/v1/accounts:signInWithIdp",Ar(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="http://localhost";class fa extends qm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_i("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=t,u=jm(t,["providerId","signInMethod"]);if(!r||!o)return null;const f=new fa(r,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const t=this.buildRequest();return No(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,No(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,No(e,t)}buildRequest(){const e={requestUri:P1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fo(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function V1(s){const e=du(pu(s)).link,t=e?du(pu(e)).deep_link_id:null,r=du(pu(s)).deep_link_id;return(r?du(pu(r)).link:null)||r||t||e||s}class Gm{constructor(e){var t,r,o,u,f,p;const m=du(pu(e)),g=(t=m.apiKey)!==null&&t!==void 0?t:null,E=(r=m.oobCode)!==null&&r!==void 0?r:null,A=L1((o=m.mode)!==null&&o!==void 0?o:null);Ae(g&&E&&A,"argument-error"),this.apiKey=g,this.operation=A,this.code=E,this.continueUrl=(u=m.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=m.languageCode)!==null&&f!==void 0?f:null,this.tenantId=(p=m.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const t=V1(e);try{return new Gm(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.providerId=qo.PROVIDER_ID}static credential(e,t){return Nu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Gm.parseLink(t);return Ae(r,"argument-error"),Nu._fromEmailAndCode(e,r.code,r.tenantId)}}qo.PROVIDER_ID="password";qo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends I0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends zu{constructor(){super("facebook.com")}static credential(e){return fa._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends zu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fa._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return hr.credential(t,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends zu{constructor(){super("github.com")}static credential(e){return fa._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends zu{constructor(){super("twitter.com")}static credential(e,t){return fa._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return dr.credential(t,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(s,e){return Bu(s,"POST","/v1/accounts:signUp",Ar(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const u=await ms._fromIdTokenResponse(e,r,o),f=dE(r);return new da({user:u,providerId:f,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=dE(r);return new da({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function dE(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends ws{constructor(e,t,r,o){var u;super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Fh.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new Fh(e,t,r,o)}}function N0(s,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Fh._fromErrorAndOperation(s,u,e,r):u})}async function j1(s,e,t=!1){const r=await Iu(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return da._forOperation(s,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(s,e,t=!1){const{auth:r}=s;if(Ln(r.app))return Promise.reject(ys(r));const o="reauthenticate";try{const u=await Iu(s,N0(r,o,e,s),t);Ae(u.idToken,r,"internal-error");const f=Hm(u.idToken);Ae(f,r,"internal-error");const{sub:p}=f;return Ae(s.uid===p,r,"user-mismatch"),da._forOperation(s,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&_i(r,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O0(s,e,t=!1){if(Ln(s.app))return Promise.reject(ys(s));const r="signIn",o=await N0(s,r,e),u=await da._fromIdTokenResponse(s,r,o);return t||await s._updateCurrentUser(u.user),u}async function z1(s,e){return O0(Aa(s),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D0(s){const e=Aa(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function H1(s,e,t){if(Ln(s.app))return Promise.reject(ys(s));const r=Aa(s),f=await om(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",U1).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&D0(s),m}),p=await da._fromIdTokenResponse(r,"signIn",f);return await r._updateCurrentUser(p.user),p}function F1(s,e,t){return Ln(s.app)?Promise.reject(ys(s)):z1(Cn(s),qo.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&D0(s),r})}function q1(s,e,t,r){return Cn(s).onIdTokenChanged(e,t,r)}function G1(s,e,t){return Cn(s).beforeAuthStateChanged(e,t)}function K1(s,e,t,r){return Cn(s).onAuthStateChanged(e,t,r)}function W1(s){return Cn(s).signOut()}const qh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qh,"1"),this.storage.removeItem(qh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=1e3,Q1=10;class k0 extends x0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=A0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((f,p,m)=>{this.notifyListeners(f,m)});return}const r=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(r);!t&&this.localCache[r]===f||this.notifyListeners(r,f)},u=this.storage.getItem(r);f1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Q1):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Y1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}k0.type="LOCAL";const $1=k0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0 extends x0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}M0.type="SESSION";const P0=M0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new gf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:u}=t.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const p=Array.from(f).map(async g=>g(t.origin,u)),m=await X1(p);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(s="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return s+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((p,m)=>{const g=Km("",20);o.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},r);f={messageChannel:o,onMessage(A){const O=A;if(O.data.eventId===g)switch(O.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(O.data.response);break;default:clearTimeout(E),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(){return window}function J1(s){ji().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(){return typeof ji().WorkerGlobalScope<"u"&&typeof ji().importScripts=="function"}async function eI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tI(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function nI(){return L0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0="firebaseLocalStorageDb",iI=1,Gh="firebaseLocalStorage",U0="fbase_key";class Hu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yf(s,e){return s.transaction([Gh],e?"readwrite":"readonly").objectStore(Gh)}function sI(){const s=indexedDB.deleteDatabase(V0);return new Hu(s).toPromise()}function lm(){const s=indexedDB.open(V0,iI);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(Gh,{keyPath:U0})}catch(o){t(o)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(Gh)?e(r):(r.close(),await sI(),e(await lm()))})})}async function pE(s,e,t){const r=yf(s,!0).put({[U0]:e,value:t});return new Hu(r).toPromise()}async function rI(s,e){const t=yf(s,!1).get(e),r=await new Hu(t).toPromise();return r===void 0?null:r.value}function mE(s,e){const t=yf(s,!0).delete(e);return new Hu(t).toPromise()}const aI=800,oI=3;class j0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>oI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return L0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gf._getInstance(nI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await eI(),!this.activeServiceWorker)return;this.sender=new Z1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lm();return await pE(e,qh,"1"),await mE(e,qh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>pE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>rI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>mE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=yf(o,!1).getAll();return new Hu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j0.type="LOCAL";const lI=j0;new ju(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(s,e){return e?_s(e):(Ae(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm extends qm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return No(e,this._buildIdpRequest())}_linkToIdToken(e,t){return No(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return No(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cI(s){return O0(s.auth,new Wm(s),s.bypassAuthState)}function hI(s){const{auth:e,user:t}=s;return Ae(t,e,"internal-error"),B1(t,new Wm(s),s.bypassAuthState)}async function fI(s){const{auth:e,user:t}=s;return Ae(t,e,"internal-error"),j1(t,new Wm(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,t,r,o,u=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:u,error:f,type:p}=e;if(f){this.reject(f);return}const m={auth:this.auth,requestUri:t,sessionId:r,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cI;case"linkViaPopup":case"linkViaRedirect":return fI;case"reauthViaPopup":case"reauthViaRedirect":return hI;default:_i(this.auth,"internal-error")}}resolve(e){As(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){As(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=new ju(2e3,1e4);class wo extends B0{constructor(e,t,r,o,u){super(e,t,o,u),this.provider=r,this.authWindow=null,this.pollId=null,wo.currentPopupAction&&wo.currentPopupAction.cancel(),wo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){As(this.filter.length===1,"Popup operations only handle one event");const e=Km();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ui(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ui(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ui(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dI.get())};e()}}wo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI="pendingRedirect",Oh=new Map;class mI extends B0{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Oh.get(this.auth._key());if(!e){try{const r=await _I(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Oh.set(this.auth._key(),e)}return this.bypassAuthState||Oh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _I(s,e){const t=vI(e),r=yI(s);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function gI(s,e){Oh.set(s._key(),e)}function yI(s){return _s(s._redirectPersistence)}function vI(s){return Nh(pI,s.config.apiKey,s.name)}async function EI(s,e,t=!1){if(Ln(s.app))return Promise.reject(ys(s));const r=Aa(s),o=uI(r,e),f=await new mI(r,o,t).execute();return f&&!t&&(delete f.user._redirectEventId,await r._persistUserIfCurrent(f.user),await r._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=10*60*1e3;class SI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!z0(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ui(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TI&&this.cachedEventUids.clear(),this.cachedEventUids.has(_E(e))}saveEventToCache(e){this.cachedEventUids.add(_E(e)),this.lastProcessedEventTime=Date.now()}}function _E(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function z0({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AI(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return z0(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wI(s,e={}){return wr(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CI=/^https?/;async function RI(s){if(s.config.emulator)return;const{authorizedDomains:e}=await wI(s);for(const t of e)try{if(II(t))return}catch{}_i(s,"unauthorized-domain")}function II(s){const e=rm(),{protocol:t,hostname:r}=new URL(e);if(s.startsWith("chrome-extension://")){const f=new URL(s);return f.hostname===""&&r===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&f.hostname===r}if(!CI.test(t))return!1;if(bI.test(s))return r===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=new ju(3e4,6e4);function gE(){const s=ji().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function OI(s){return new Promise((e,t)=>{var r,o,u;function f(){gE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gE(),t(Ui(s,"network-request-failed"))},timeout:NI.get()})}if(!((o=(r=ji().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=ji().gapi)===null||u===void 0)&&u.load)f();else{const p=T1("iframefcb");return ji()[p]=()=>{gapi.load?f():t(Ui(s,"network-request-failed"))},b0(`${E1()}?onload=${p}`).catch(m=>t(m))}}).catch(e=>{throw Dh=null,e})}let Dh=null;function DI(s){return Dh=Dh||OI(s),Dh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=new ju(5e3,15e3),kI="__/auth/iframe",MI="emulator/auth/iframe",PI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VI(s){const e=s.config;Ae(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?zm(e,MI):`https://${s.config.authDomain}/${kI}`,r={apiKey:e.apiKey,appName:s.name,v:Sa},o=LI.get(s.config.apiHost);o&&(r.eid=o);const u=s._getFrameworks();return u.length&&(r.fw=u.join(",")),`${t}?${Fo(r).slice(1)}`}async function UI(s){const e=await DI(s),t=ji().gapi;return Ae(t,s,"internal-error"),e.open({where:document.body,url:VI(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PI,dontclear:!0},r=>new Promise(async(o,u)=>{await r.restyle({setHideOnLeave:!1});const f=Ui(s,"network-request-failed"),p=ji().setTimeout(()=>{u(f)},xI.get());function m(){ji().clearTimeout(p),o(r)}r.ping(m).then(m,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BI=500,zI=600,HI="_blank",FI="http://localhost";class yE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qI(s,e,t,r=BI,o=zI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const m=Object.assign(Object.assign({},jI),{width:r.toString(),height:o.toString(),top:u,left:f}),g=mn().toLowerCase();t&&(p=y0(g)?HI:t),_0(g)&&(e=e||FI,m.scrollbars="yes");const E=Object.entries(m).reduce((O,[z,F])=>`${O}${z}=${F},`,"");if(h1(g)&&p!=="_self")return GI(e||"",p),new yE(null);const A=window.open(e||"",p,E);Ae(A,s,"popup-blocked");try{A.focus()}catch{}return new yE(A)}function GI(s,e){const t=document.createElement("a");t.href=s,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="__/auth/handler",WI="emulator/auth/handler",YI=encodeURIComponent("fac");async function vE(s,e,t,r,o,u){Ae(s.config.authDomain,s,"auth-domain-config-required"),Ae(s.config.apiKey,s,"invalid-api-key");const f={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:r,v:Sa,eventId:o};if(e instanceof I0){e.setDefaultLanguage(s.languageCode),f.providerId=e.providerId||"",Jp(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,A]of Object.entries({}))f[E]=A}if(e instanceof zu){const E=e.getScopes().filter(A=>A!=="");E.length>0&&(f.scopes=E.join(","))}s.tenantId&&(f.tid=s.tenantId);const p=f;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const m=await s._getAppCheckToken(),g=m?`#${YI}=${encodeURIComponent(m)}`:"";return`${QI(s)}?${Fo(p).slice(1)}${g}`}function QI({config:s}){return s.emulator?zm(s,WI):`https://${s.authDomain}/${KI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="webStorageSupport";class $I{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=P0,this._completeRedirectFn=EI,this._overrideRedirectResult=gI}async _openPopup(e,t,r,o){var u;As((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await vE(e,t,r,rm(),o);return qI(e,f,Km())}async _openRedirect(e,t,r,o){await this._originValidation(e);const u=await vE(e,t,r,rm(),o);return J1(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(As(u,"If manager is not set, promise should be"),u)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await UI(e),r=new SI(e);return t.register("authEvent",o=>(Ae(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Hp,{type:Hp},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Hp];f!==void 0&&t(!!f),_i(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=RI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return A0()||g0()||Fm()}}const XI=$I;var EE="@firebase/auth",TE="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eN(s){ha(new gr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=r.options;Ae(f&&!f.includes(":"),"invalid-api-key",{appName:r.name});const m={apiKey:f,authDomain:p,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w0(s)},g=new g1(r,o,u,m);return R1(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ha(new gr("auth-internal",e=>{const t=Aa(e.getProvider("auth").getImmediate());return(r=>new ZI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vi(EE,TE,JI(s)),Vi(EE,TE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=5*60,nN=ZT("authIdTokenMaxAge")||tN;let SE=null;const iN=s=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>nN)return;const o=t==null?void 0:t.token;SE!==o&&(SE=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function sN(s=s0()){const e=Um(s,"auth");if(e.isInitialized())return e.getImmediate();const t=C1(s,{popupRedirectResolver:XI,persistence:[lI,$1,P0]}),r=ZT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(r,location.origin);if(location.origin===u.origin){const f=iN(u.toString());G1(t,f,()=>f(t.currentUser)),q1(t,p=>f(p))}}const o=$T("auth");return o&&I1(t,`http://${o}`),t}function rN(){var s,e;return(e=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&e!==void 0?e:document}y1({loadJS(s){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=e,r.onerror=o=>{const u=Ui("internal-error");u.customData=o,t(u)},r.type="text/javascript",r.charset="UTF-8",rN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eN("Browser");var aN="firebase",oN="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vi(aN,oN,"app");var AE={};const wE="@firebase/database",bE="1.0.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H0="";function lN(s){H0=s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Cu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return bs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const e=window[s];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uN(e)}}catch{}return new cN},aa=F0("localStorage"),hN=F0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new mf("@firebase/database"),fN=function(){let s=1;return function(){return s++}}(),q0=function(s){const e=VC(s),t=new xC;t.update(e);const r=t.digest();return Mm.encodeByteArray(r)},Fu=function(...s){let e="";for(let t=0;t<s.length;t++){const r=s[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Fu.apply(null,r):typeof r=="object"?e+=tn(r):e+=r,e+=" "}return e};let yu=null,CE=!0;const dN=function(s,e){he(!0,"Can't turn on custom loggers persistently."),Oo.logLevel=Pe.VERBOSE,yu=Oo.log.bind(Oo)},hn=function(...s){if(CE===!0&&(CE=!1,yu===null&&hN.get("logging_enabled")===!0&&dN()),yu){const e=Fu.apply(null,s);yu(e)}},qu=function(s){return function(...e){hn(s,...e)}},um=function(...s){const e="FIREBASE INTERNAL ERROR: "+Fu(...s);Oo.error(e)},pa=function(...s){const e=`FIREBASE FATAL ERROR: ${Fu(...s)}`;throw Oo.error(e),new Error(e)},Vn=function(...s){const e="FIREBASE WARNING: "+Fu(...s);Oo.warn(e)},pN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},G0=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},mN=function(s){if(document.readyState==="complete")s();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Po="[MIN_NAME]",ma="[MAX_NAME]",Go=function(s,e){if(s===e)return 0;if(s===Po||e===ma)return-1;if(e===Po||s===ma)return 1;{const t=RE(s),r=RE(e);return t!==null?r!==null?t-r===0?s.length-e.length:t-r:-1:r!==null?1:s<e?-1:1}},_N=function(s,e){return s===e?0:s<e?-1:1},iu=function(s,e){if(e&&s in e)return e[s];throw new Error("Missing required key ("+s+") in object: "+tn(e))},Ym=function(s){if(typeof s!="object"||s===null)return tn(s);const e=[];for(const r in s)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=tn(e[r]),t+=":",t+=Ym(s[e[r]]);return t+="}",t},K0=function(s,e){const t=s.length;if(t<=e)return[s];const r=[];for(let o=0;o<t;o+=e)o+e>t?r.push(s.substring(o,t)):r.push(s.substring(o,o+e));return r};function ti(s,e){for(const t in s)s.hasOwnProperty(t)&&e(t,s[t])}const W0=function(s){he(!G0(s),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let o,u,f,p,m;s===0?(u=0,f=0,o=1/s===-1/0?1:0):(o=s<0,s=Math.abs(s),s>=Math.pow(2,1-r)?(p=Math.min(Math.floor(Math.log(s)/Math.LN2),r),u=p+r,f=Math.round(s*Math.pow(2,t-p)-Math.pow(2,t))):(u=0,f=Math.round(s/Math.pow(2,1-r-t))));const g=[];for(m=t;m;m-=1)g.push(f%2?1:0),f=Math.floor(f/2);for(m=e;m;m-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(o?1:0),g.reverse();const E=g.join("");let A="";for(m=0;m<64;m+=8){let O=parseInt(E.substr(m,8),2).toString(16);O.length===1&&(O="0"+O),A=A+O}return A.toLowerCase()},gN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},vN=new RegExp("^-?(0*)\\d{1,10}$"),EN=-2147483648,TN=2147483647,RE=function(s){if(vN.test(s)){const e=Number(s);if(e>=EN&&e<=TN)return e}return null},Gu=function(s){try{s()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Vn("Exception was thrown by user callback.",t),e},Math.floor(0))}},SN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vu=function(s,e){const t=setTimeout(s,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Ln(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Vn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(hn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="5",Y0="v",Q0="s",$0="r",X0="f",Z0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,J0="ls",eS="p",cm="ac",tS="websocket",nS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,t,r,o,u=!1,f="",p=!1,m=!1,g=null){this.secure=t,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=u,this.persistenceKey=f,this.includeNamespaceInQueryParams=p,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=aa.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&aa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function CN(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function iS(s,e,t){he(typeof e=="string","typeof type must == string"),he(typeof t=="object","typeof params must == object");let r;if(e===tS)r=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(e===nS)r=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);CN(s)&&(t.ns=s.namespace);const o=[];return ti(t,(u,f)=>{o.push(u+"="+f)}),r+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(){this.counters_={}}incrementCounter(e,t=1){bs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return hC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp={},qp={};function $m(s){const e=s.toString();return Fp[e]||(Fp[e]=new RN),Fp[e]}function IN(s,e){const t=s.toString();return qp[t]||(qp[t]=e()),qp[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&Gu(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="start",ON="close",DN="pLPCommand",xN="pRTLPCB",sS="id",rS="pw",aS="ser",kN="cb",MN="seg",PN="ts",LN="d",VN="dframe",oS=1870,lS=30,UN=oS-lS,jN=25e3,BN=3e4;class bo{constructor(e,t,r,o,u,f,p){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=o,this.authToken=u,this.transportSessionId=f,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qu(e),this.stats_=$m(t),this.urlFn=m=>(this.appCheckToken&&(m[cm]=this.appCheckToken),iS(t,nS,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new NN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(BN)),mN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xm((...u)=>{const[f,p,m,g,E]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,f===IE)this.id=p,this.password=m;else if(f===ON)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+f)},(...u)=>{const[f,p]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(f,p)},()=>{this.onClosed_()},this.urlFn);const r={};r[IE]="t",r[aS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[kN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Y0]=Qm,this.transportSessionId&&(r[Q0]=this.transportSessionId),this.lastSessionId&&(r[J0]=this.lastSessionId),this.applicationId&&(r[eS]=this.applicationId),this.appCheckToken&&(r[cm]=this.appCheckToken),typeof location<"u"&&location.hostname&&Z0.test(location.hostname)&&(r[$0]=X0);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bo.forceAllow_=!0}static forceDisallow(){bo.forceDisallow_=!0}static isAvailable(){return bo.forceAllow_?!0:!bo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gN()&&!yN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=tn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=YT(t),o=K0(r,UN);for(let u=0;u<o.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[u]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[VN]="t",r[sS]=e,r[rS]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=tn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Xm{constructor(e,t,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fN(),window[DN+this.uniqueCallbackIdentifier]=e,window[xN+this.uniqueCallbackIdentifier]=t,this.myIFrame=Xm.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const f="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(f),this.myIFrame.doc.close()}catch(p){hn("frame writing exception"),p.stack&&hn(p.stack),hn(p)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||hn("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sS]=this.myID,e[rS]=this.myPW,e[aS]=this.currentSerial;let t=this.urlFn(e),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lS+r.length<=oS;){const f=this.pendingSegs.shift();r=r+"&"+MN+o+"="+f.seg+"&"+PN+o+"="+f.ts+"&"+LN+o+"="+f.d,o++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(r,Math.floor(jN)),u=()=>{clearTimeout(o),r()};this.addTag(e,u)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{hn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN=16384,HN=45e3;let Kh=null;typeof MozWebSocket<"u"?Kh=MozWebSocket:typeof WebSocket<"u"&&(Kh=WebSocket);class hi{constructor(e,t,r,o,u,f,p){this.connId=e,this.applicationId=r,this.appCheckToken=o,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qu(this.connId),this.stats_=$m(t),this.connURL=hi.connectionURL_(t,f,p,o,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,o,u){const f={};return f[Y0]=Qm,typeof location<"u"&&location.hostname&&Z0.test(location.hostname)&&(f[$0]=X0),t&&(f[Q0]=t),r&&(f[J0]=r),o&&(f[cm]=o),u&&(f[eS]=u),iS(e,tS,f)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,aa.set("previous_websocket_failure",!0);try{let r;AC(),this.mySock=new Kh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){hi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Kh!==null&&!hi.forceDisallow_}static previouslyFailed(){return aa.isInMemoryStorage||aa.get("previous_websocket_failure")===!0}markConnectionHealthy(){aa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Cu(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(he(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=tn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=K0(t,zN);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(HN))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hi.responsesRequiredToBeHealthy=2;hi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{static get ALL_TRANSPORTS(){return[bo,hi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=hi&&hi.isAvailable();let r=t&&!hi.previouslyFailed();if(e.webSocketOnly&&(t||Vn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[hi];else{const o=this.transports_=[];for(const u of Ou.ALL_TRANSPORTS)u&&u.isAvailable()&&o.push(u);Ou.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ou.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=6e4,qN=5e3,GN=10*1024,KN=100*1024,Gp="t",NE="d",WN="s",OE="r",YN="e",DE="o",xE="a",kE="n",ME="p",QN="h";class $N{constructor(e,t,r,o,u,f,p,m,g,E){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=u,this.onMessage_=f,this.onReady_=p,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qu("c:"+this.id+":"),this.transportManager_=new Ou(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=vu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>KN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gp in e){const t=e[Gp];t===xE?this.upgradeIfSecondaryHealthy_():t===OE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===DE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=iu("t",e),r=iu("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ME,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=iu("t",e),r=iu("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=iu(Gp,e);if(NE in e){const r=e[NE];if(t===QN){const o=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===kE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===WN?this.onConnectionShutdown_(r):t===OE?this.onReset_(r):t===YN?um("Server Error: "+r):t===DE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):um("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Qm!==r&&Vn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),vu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(FN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ME,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(aa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{put(e,t,r,o){}merge(e,t,r,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e){this.allowedEvents_=e,this.listeners_={},he(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const o=this.getInitialEvent(e);o&&t.apply(r,o)}off(e,t,r){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let u=0;u<o.length;u++)if(o[u].callback===t&&(!r||r===o[u].context)){o.splice(u,1);return}}validateEventType_(e){he(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh extends cS{static getInstance(){return new Wh}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Lm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return he(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=32,LE=768;class ct{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function nt(){return new ct("")}function Ge(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function yr(s){return s.pieces_.length-s.pieceNum_}function ut(s){let e=s.pieceNum_;return e<s.pieces_.length&&e++,new ct(s.pieces_,e)}function hS(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function XN(s){let e="";for(let t=s.pieceNum_;t<s.pieces_.length;t++)s.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(s.pieces_[t])));return e||"/"}function fS(s,e=0){return s.pieces_.slice(s.pieceNum_+e)}function dS(s){if(s.pieceNum_>=s.pieces_.length)return null;const e=[];for(let t=s.pieceNum_;t<s.pieces_.length-1;t++)e.push(s.pieces_[t]);return new ct(e,0)}function Gt(s,e){const t=[];for(let r=s.pieceNum_;r<s.pieces_.length;r++)t.push(s.pieces_[r]);if(e instanceof ct)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&t.push(r[o])}return new ct(t,0)}function je(s){return s.pieceNum_>=s.pieces_.length}function ei(s,e){const t=Ge(s),r=Ge(e);if(t===null)return e;if(t===r)return ei(ut(s),ut(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+s+")")}function pS(s,e){if(yr(s)!==yr(e))return!1;for(let t=s.pieceNum_,r=e.pieceNum_;t<=s.pieces_.length;t++,r++)if(s.pieces_[t]!==e.pieces_[r])return!1;return!0}function di(s,e){let t=s.pieceNum_,r=e.pieceNum_;if(yr(s)>yr(e))return!1;for(;t<s.pieces_.length;){if(s.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class ZN{constructor(e,t){this.errorPrefix_=t,this.parts_=fS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=pf(this.parts_[r]);mS(this)}}function JN(s,e){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(e),s.byteLength_+=pf(e),mS(s)}function eO(s){const e=s.parts_.pop();s.byteLength_-=pf(e),s.parts_.length>0&&(s.byteLength_-=1)}function mS(s){if(s.byteLength_>LE)throw new Error(s.errorPrefix_+"has a key path longer than "+LE+" bytes ("+s.byteLength_+").");if(s.parts_.length>PE)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+PE+") or object contains a cycle "+ra(s))}function ra(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm extends cS{static getInstance(){return new Zm}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return he(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=1e3,tO=60*5*1e3,VE=30*1e3,nO=1.3,iO=3e4,sO="server_kill",UE=3;class vs extends uS{constructor(e,t,r,o,u,f,p,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=u,this.authTokenProvider_=f,this.appCheckTokenProvider_=p,this.authOverride_=m,this.id=vs.nextPersistentConnectionId_++,this.log_=qu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=su,this.maxReconnectDelay_=tO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const o=++this.requestNumber_,u={r:o,a:e,b:t};this.log_(tn(u)),he(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),r&&(this.requestCBHash_[o]=r)}get(e){this.initConnection_();const t=new Pm,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:f=>{const p=f.d;f.s==="ok"?t.resolve(p):t.reject(p)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),t.promise}listen(e,t,r,o){this.initConnection_();const u=e._queryIdentifier,f=e._path.toString();this.log_("Listen called for "+f+" "+u),this.listens.has(f)||this.listens.set(f,new Map),he(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),he(!this.listens.get(f).has(u),"listen() called twice for same path/queryId.");const p={onComplete:o,hashFn:t,query:e,tag:r};this.listens.get(f).set(u,p),this.connected_&&this.sendListen_(p)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+r+" for "+o);const u={p:r},f="q";e.tag&&(u.q=t._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(f,u,p=>{const m=p.d,g=p.s;vs.warnOnListenWarnings_(m,t),(this.listens.get(r)&&this.listens.get(r).get(o))===e&&(this.log_("listen response",p),g!=="ok"&&this.removeListen_(r,o),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&bs(e,"w")){const r=Mo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',u=t._path.toString();Vn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||DC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=VE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=OC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,o=>{const u=o.s,f=o.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,f))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),he(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,e._queryObject,t)}sendUnlisten_(e,t,r,o){this.log_("Unlisten on "+e+" for "+t);const u={p:e},f="n";o&&(u.q=r,u.t=o),this.sendRequest(f,u)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,o){const u={p:t,d:r};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,f=>{o&&setTimeout(()=>{o(f.s,f.d)},Math.floor(0))})}put(e,t,r,o){this.putInternal("p",e,t,r,o)}merge(e,t,r,o){this.putInternal("m",e,t,r,o)}putInternal(e,t,r,o,u){this.initConnection_();const f={p:t,d:r};u!==void 0&&(f.h=u),this.outstandingPuts_.push({action:e,request:f,onComplete:o}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,u=>{this.log_(t+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(u.s,u.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const u=r.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tn(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):um("Unrecognized action received from server: "+tn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){he(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=su,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=su,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>iO&&(this.reconnectDelay_=su),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+vs.nextConnectionId_++,u=this.lastSessionId;let f=!1,p=null;const m=function(){p?p.close():(f=!0,r())},g=function(A){he(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(A)};this.realtime_={close:m,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[A,O]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);f?hn("getToken() completed but was canceled"):(hn("getToken() completed. Creating connection."),this.authToken_=A&&A.accessToken,this.appCheckToken_=O&&O.token,p=new $N(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,z=>{Vn(z+" ("+this.repoInfo_.toString()+")"),this.interrupt(sO)},u))}catch(A){this.log_("Failed to get token: "+A),f||(this.repoInfo_.nodeAdmin&&Vn(A),m())}}}interrupt(e){hn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){hn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jp(this.interruptReasons_)&&(this.reconnectDelay_=su,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(u=>Ym(u)).join("$"):r="default";const o=this.removeListen_(e,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const r=new ct(e).toString();let o;if(this.listens.has(r)){const u=this.listens.get(r);o=u.get(t),u.delete(t),u.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(e,t){hn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=UE&&(this.reconnectDelay_=VE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){hn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=UE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+H0.replace(/\./g,"-")]=1,Lm()?e["framework.cordova"]=1:JT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wh.getInstance().currentlyOnline();return Jp(this.interruptReasons_)&&e}}vs.nextPersistentConnectionId_=0;vs.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ke(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Ke(Po,e),o=new Ke(Po,t);return this.compare(r,o)!==0}minPost(){return Ke.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Th;class _S extends vf{static get __EMPTY_NODE(){return Th}static set __EMPTY_NODE(e){Th=e}compare(e,t){return Go(e.name,t.name)}isDefinedOn(e){throw Ho("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ke.MIN}maxPost(){return new Ke(ma,Th)}makePost(e,t){return he(typeof e=="string","KeyIndex indexValue must always be a string."),new Ke(e,Th)}toString(){return".key"}}const Do=new _S;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sh=class{constructor(e,t,r,o,u=null){this.isReverse_=o,this.resultGenerator_=u,this.nodeStack_=[];let f=1;for(;!e.isEmpty();)if(e=e,f=t?r(e.key,t):1,o&&(f*=-1),f<0)this.isReverse_?e=e.left:e=e.right;else if(f===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Pn=class mu{constructor(e,t,r,o,u){this.key=e,this.value=t,this.color=r??mu.RED,this.left=o??Pi.EMPTY_NODE,this.right=u??Pi.EMPTY_NODE}copy(e,t,r,o,u){return new mu(e??this.key,t??this.value,r??this.color,o??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const u=r(e,o.key);return u<0?o=o.copy(null,null,null,o.left.insert(e,t,r),null):u===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pi.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,o;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Pi.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,mu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,mu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Pn.RED=!0;Pn.BLACK=!1;class rO{copy(e,t,r,o,u){return this}insert(e,t,r){return new Pn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Pi=class xh{constructor(e,t=xh.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new xh(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Pn.BLACK,null,null))}remove(e){return new xh(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pn.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,o=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Sh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Sh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Sh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Sh(this.root_,null,this.comparator_,!0,e)}};Pi.EMPTY_NODE=new rO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(s,e){return Go(s.name,e.name)}function Jm(s,e){return Go(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hm;function oO(s){hm=s}const gS=function(s){return typeof s=="number"?"number:"+W0(s):"string:"+s},yS=function(s){if(s.isLeafNode()){const e=s.val();he(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bs(e,".sv"),"Priority must be a string or number.")}else he(s===hm||s.isEmpty(),"priority of unexpected type.");he(s===hm||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jE;class Ft{static set __childrenNodeConstructor(e){jE=e}static get __childrenNodeConstructor(){return jE}constructor(e,t=Ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,he(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),yS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ft(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return je(e)?this:Ge(e)===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Ge(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(he(r!==".priority"||yr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(ut(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+gS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=W0(this.value_):e+=this.value_,this.lazyHash_=q0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ft.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ft.__childrenNodeConstructor?-1:(he(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,o=Ft.VALUE_TYPE_ORDER.indexOf(t),u=Ft.VALUE_TYPE_ORDER.indexOf(r);return he(o>=0,"Unknown leaf type: "+t),he(u>=0,"Unknown leaf type: "+r),o===u?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vS,ES;function lO(s){vS=s}function uO(s){ES=s}class cO extends vf{compare(e,t){const r=e.node.getPriority(),o=t.node.getPriority(),u=r.compareTo(o);return u===0?Go(e.name,t.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ke.MIN}maxPost(){return new Ke(ma,new Ft("[PRIORITY-POST]",ES))}makePost(e,t){const r=vS(e);return new Ke(t,new Ft("[PRIORITY-POST]",r))}toString(){return".priority"}}const pn=new cO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO=Math.log(2);class fO{constructor(e){const t=u=>parseInt(Math.log(u)/hO,10),r=u=>parseInt(Array(u+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=r(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Yh=function(s,e,t,r){s.sort(e);const o=function(m,g){const E=g-m;let A,O;if(E===0)return null;if(E===1)return A=s[m],O=t?t(A):A,new Pn(O,A.node,Pn.BLACK,null,null);{const z=parseInt(E/2,10)+m,F=o(m,z),Q=o(z+1,g);return A=s[z],O=t?t(A):A,new Pn(O,A.node,Pn.BLACK,F,Q)}},u=function(m){let g=null,E=null,A=s.length;const O=function(F,Q){const W=A-F,Y=A;A-=F;const ee=o(W+1,Y),te=s[W],se=t?t(te):te;z(new Pn(se,te.node,Q,null,ee))},z=function(F){g?(g.left=F,g=F):(E=F,g=F)};for(let F=0;F<m.count;++F){const Q=m.nextBitIsOne(),W=Math.pow(2,m.count-(F+1));Q?O(W,Pn.BLACK):(O(W,Pn.BLACK),O(W,Pn.RED))}return E},f=new fO(s.length),p=u(f);return new Pi(r||e,p)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kp;const vo={};class gs{static get Default(){return he(vo&&pn,"ChildrenNode.ts has not been loaded"),Kp=Kp||new gs({".priority":vo},{".priority":pn}),Kp}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Mo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Pi?t:null}hasIndex(e){return bs(this.indexSet_,e.toString())}addIndex(e,t){he(e!==Do,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const u=t.getIterator(Ke.Wrap);let f=u.getNext();for(;f;)o=o||e.isDefinedOn(f.node),r.push(f),f=u.getNext();let p;o?p=Yh(r,e.getCompare()):p=vo;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const E=Object.assign({},this.indexes_);return E[m]=p,new gs(E,g)}addToIndexes(e,t){const r=jh(this.indexes_,(o,u)=>{const f=Mo(this.indexSet_,u);if(he(f,"Missing index implementation for "+u),o===vo)if(f.isDefinedOn(e.node)){const p=[],m=t.getIterator(Ke.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&p.push(g),g=m.getNext();return p.push(e),Yh(p,f.getCompare())}else return vo;else{const p=t.get(e.name);let m=o;return p&&(m=m.remove(new Ke(e.name,p))),m.insert(e,e.node)}});return new gs(r,this.indexSet_)}removeFromIndexes(e,t){const r=jh(this.indexes_,o=>{if(o===vo)return o;{const u=t.get(e.name);return u?o.remove(new Ke(e.name,u)):o}});return new gs(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru;class Ze{static get EMPTY_NODE(){return ru||(ru=new Ze(new Pi(Jm),null,gs.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&yS(this.priorityNode_),this.children_.isEmpty()&&he(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ru}updatePriority(e){return this.children_.isEmpty()?this:new Ze(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ru:t}}getChild(e){const t=Ge(e);return t===null?this:this.getImmediateChild(t).getChild(ut(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(he(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Ke(e,t);let o,u;t.isEmpty()?(o=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(e,t),u=this.indexMap_.addToIndexes(r,this.children_));const f=o.isEmpty()?ru:this.priorityNode_;return new Ze(o,f,u)}}updateChild(e,t){const r=Ge(e);if(r===null)return t;{he(Ge(e)!==".priority"||yr(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(ut(e),t);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,o=0,u=!0;if(this.forEachChild(pn,(f,p)=>{t[f]=p.val(e),r++,u&&Ze.INTEGER_REGEXP_.test(f)?o=Math.max(o,Number(f)):u=!1}),!e&&u&&o<2*r){const f=[];for(const p in t)f[p]=t[p];return f}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+gS(this.getPriority().val())+":"),this.forEachChild(pn,(t,r)=>{const o=r.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":q0(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const o=this.resolveIndex_(r);if(o){const u=o.getPredecessorKey(new Ke(e,t));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ke(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ke(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,Ke.Wrap);let u=o.peek();for(;u!=null&&t.compare(u,e)<0;)o.getNext(),u=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,Ke.Wrap);let u=o.peek();for(;u!=null&&t.compare(u,e)>0;)o.getNext(),u=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ku?-1:0}withIndex(e){if(e===Do||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ze(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Do||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(pn),o=t.getIterator(pn);let u=r.getNext(),f=o.getNext();for(;u&&f;){if(u.name!==f.name||!u.node.equals(f.node))return!1;u=r.getNext(),f=o.getNext()}return u===null&&f===null}else return!1;else return!1}}resolveIndex_(e){return e===Do?null:this.indexMap_.get(e.toString())}}Ze.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dO extends Ze{constructor(){super(new Pi(Jm),Ze.EMPTY_NODE,gs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ze.EMPTY_NODE}isEmpty(){return!1}}const Ku=new dO;Object.defineProperties(Ke,{MIN:{value:new Ke(Po,Ze.EMPTY_NODE)},MAX:{value:new Ke(ma,Ku)}});_S.__EMPTY_NODE=Ze.EMPTY_NODE;Ft.__childrenNodeConstructor=Ze;oO(Ku);uO(Ku);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=!0;function fn(s,e=null){if(s===null)return Ze.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(e=s[".priority"]),he(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const t=s;return new Ft(t,fn(e))}if(!(s instanceof Array)&&pO){const t=[];let r=!1;if(ti(s,(f,p)=>{if(f.substring(0,1)!=="."){const m=fn(p);m.isEmpty()||(r=r||!m.getPriority().isEmpty(),t.push(new Ke(f,m)))}}),t.length===0)return Ze.EMPTY_NODE;const u=Yh(t,aO,f=>f.name,Jm);if(r){const f=Yh(t,pn.getCompare());return new Ze(u,fn(e),new gs({".priority":f},{".priority":pn}))}else return new Ze(u,fn(e),gs.Default)}else{let t=Ze.EMPTY_NODE;return ti(s,(r,o)=>{if(bs(s,r)&&r.substring(0,1)!=="."){const u=fn(o);(u.isLeafNode()||!u.isEmpty())&&(t=t.updateImmediateChild(r,u))}}),t.updatePriority(fn(e))}}lO(fn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO extends vf{constructor(e){super(),this.indexPath_=e,he(!je(e)&&Ge(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),o=this.extractChild(t.node),u=r.compareTo(o);return u===0?Go(e.name,t.name):u}makePost(e,t){const r=fn(e),o=Ze.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ke(t,o)}maxPost(){const e=Ze.EMPTY_NODE.updateChild(this.indexPath_,Ku);return new Ke(ma,e)}toString(){return fS(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O extends vf{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Go(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ke.MIN}maxPost(){return Ke.MAX}makePost(e,t){const r=fn(e);return new Ke(t,r)}toString(){return".value"}}const gO=new _O;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(s){return{type:"value",snapshotNode:s}}function vO(s,e){return{type:"child_added",snapshotNode:e,childName:s}}function EO(s,e){return{type:"child_removed",snapshotNode:e,childName:s}}function BE(s,e,t){return{type:"child_changed",snapshotNode:e,childName:s,oldSnap:t}}function TO(s,e){return{type:"child_moved",snapshotNode:e,childName:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return he(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return he(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Po}hasEnd(){return this.endSet_}getIndexEndValue(){return he(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return he(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ma}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return he(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pn}copy(){const e=new e_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zE(s){const e={};if(s.isDefault())return e;let t;if(s.index_===pn?t="$priority":s.index_===gO?t="$value":s.index_===Do?t="$key":(he(s.index_ instanceof mO,"Unrecognized index type!"),t=s.index_.toString()),e.orderBy=tn(t),s.startSet_){const r=s.startAfterSet_?"startAfter":"startAt";e[r]=tn(s.indexStartValue_),s.startNameSet_&&(e[r]+=","+tn(s.indexStartName_))}if(s.endSet_){const r=s.endBeforeSet_?"endBefore":"endAt";e[r]=tn(s.indexEndValue_),s.endNameSet_&&(e[r]+=","+tn(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?e.limitToFirst=s.limit_:e.limitToLast=s.limit_),e}function HE(s){const e={};if(s.startSet_&&(e.sp=s.indexStartValue_,s.startNameSet_&&(e.sn=s.indexStartName_),e.sin=!s.startAfterSet_),s.endSet_&&(e.ep=s.indexEndValue_,s.endNameSet_&&(e.en=s.indexEndName_),e.ein=!s.endBeforeSet_),s.limitSet_){e.l=s.limit_;let t=s.viewFrom_;t===""&&(s.isViewFromLeft()?t="l":t="r"),e.vf=t}return s.index_!==pn&&(e.i=s.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh extends uS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(he(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=qu("p:rest:"),this.listens_={}}listen(e,t,r,o){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const f=Qh.getListenId_(e,r),p={};this.listens_[f]=p;const m=zE(e._queryParams);this.restRequest_(u+".json",m,(g,E)=>{let A=E;if(g===404&&(A=null,g=null),g===null&&this.onDataUpdate_(u,A,!1,r),Mo(this.listens_,f)===p){let O;g?g===401?O="permission_denied":O="rest_error:"+g:O="ok",o(O,null)}})}unlisten(e,t){const r=Qh.getListenId_(e,t);delete this.listens_[r]}get(e){const t=zE(e._queryParams),r=e._path.toString(),o=new Pm;return this.restRequest_(r+".json",t,(u,f)=>{let p=f;u===404&&(p=null,u=null),u===null?(this.onDataUpdate_(r,p,!1,null),o.resolve(p)):o.reject(new Error(p))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,u])=>{o&&o.accessToken&&(t.auth=o.accessToken),u&&u.token&&(t.ac=u.token);const f=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fo(t);this.log_("Sending REST request for "+f);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(r&&p.readyState===4){this.log_("REST Response for "+f+" received. status:",p.status,"response:",p.responseText);let m=null;if(p.status>=200&&p.status<300){try{m=Cu(p.responseText)}catch{Vn("Failed to parse JSON response for "+f+": "+p.responseText)}r(null,m)}else p.status!==401&&p.status!==404&&Vn("Got unsuccessful REST response for "+f+" Status: "+p.status),r(p.status);r=null}},p.open("GET",f,!0),p.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(){this.rootNode_=Ze.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(){return{value:null,children:new Map}}function TS(s,e,t){if(je(e))s.value=t,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(e,t);else{const r=Ge(e);s.children.has(r)||s.children.set(r,$h());const o=s.children.get(r);e=ut(e),TS(o,e,t)}}function fm(s,e,t){s.value!==null?t(e,s.value):AO(s,(r,o)=>{const u=new ct(e.toString()+"/"+r);fm(o,u,t)})}function AO(s,e){s.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ti(this.last_,(r,o)=>{t[r]=t[r]-o}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=10*1e3,bO=30*1e3,CO=5*60*1e3;class RO{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new wO(e);const r=FE+(bO-FE)*Math.random();vu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;ti(e,(o,u)=>{u>0&&bs(this.statsToReport_,o)&&(t[o]=u,r=!0)}),r&&this.server_.reportStats(t),vu(this.reportStats_.bind(this),Math.floor(Math.random()*2*CO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Li;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Li||(Li={}));function SS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function AS(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wS(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Li.ACK_USER_WRITE,this.source=SS()}operationForChild(e){if(je(this.path)){if(this.affectedTree.value!=null)return he(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new Xh(nt(),t,this.revert)}}else return he(Ge(this.path)===e,"operationForChild called for unrelated child."),new Xh(ut(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Li.OVERWRITE}operationForChild(e){return je(this.path)?new _a(this.source,nt(),this.snap.getImmediateChild(e)):new _a(this.source,ut(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Li.MERGE}operationForChild(e){if(je(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new _a(this.source,nt(),t.value):new Du(this.source,nt(),t)}else return he(Ge(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Du(this.source,ut(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(je(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ge(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function IO(s,e,t,r){const o=[],u=[];return e.forEach(f=>{f.type==="child_changed"&&s.index_.indexedValueChanged(f.oldSnap,f.snapshotNode)&&u.push(TO(f.childName,f.snapshotNode))}),au(s,o,"child_removed",e,r,t),au(s,o,"child_added",e,r,t),au(s,o,"child_moved",u,r,t),au(s,o,"child_changed",e,r,t),au(s,o,"value",e,r,t),o}function au(s,e,t,r,o,u){const f=r.filter(p=>p.type===t);f.sort((p,m)=>OO(s,p,m)),f.forEach(p=>{const m=NO(s,p,u);o.forEach(g=>{g.respondsTo(p.type)&&e.push(g.createEvent(m,s.query_))})})}function NO(s,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,s.index_)),e}function OO(s,e,t){if(e.childName==null||t.childName==null)throw Ho("Should only compare child_ events.");const r=new Ke(e.childName,e.snapshotNode),o=new Ke(t.childName,t.snapshotNode);return s.index_.compare(r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(s,e){return{eventCache:s,serverCache:e}}function Eu(s,e,t,r){return bS(new t_(e,t,r),s.serverCache)}function CS(s,e,t,r){return bS(s.eventCache,new t_(e,t,r))}function dm(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function ga(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wp;const DO=()=>(Wp||(Wp=new Pi(_N)),Wp);class lt{static fromObject(e){let t=new lt(null);return ti(e,(r,o)=>{t=t.set(new ct(r),o)}),t}constructor(e,t=DO()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:nt(),value:this.value};if(je(e))return null;{const r=Ge(e),o=this.children.get(r);if(o!==null){const u=o.findRootMostMatchingPathAndValue(ut(e),t);return u!=null?{path:Gt(new ct(r),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(je(e))return this;{const t=Ge(e),r=this.children.get(t);return r!==null?r.subtree(ut(e)):new lt(null)}}set(e,t){if(je(e))return new lt(t,this.children);{const r=Ge(e),u=(this.children.get(r)||new lt(null)).set(ut(e),t),f=this.children.insert(r,u);return new lt(this.value,f)}}remove(e){if(je(e))return this.children.isEmpty()?new lt(null):new lt(null,this.children);{const t=Ge(e),r=this.children.get(t);if(r){const o=r.remove(ut(e));let u;return o.isEmpty()?u=this.children.remove(t):u=this.children.insert(t,o),this.value===null&&u.isEmpty()?new lt(null):new lt(this.value,u)}else return this}}get(e){if(je(e))return this.value;{const t=Ge(e),r=this.children.get(t);return r?r.get(ut(e)):null}}setTree(e,t){if(je(e))return t;{const r=Ge(e),u=(this.children.get(r)||new lt(null)).setTree(ut(e),t);let f;return u.isEmpty()?f=this.children.remove(r):f=this.children.insert(r,u),new lt(this.value,f)}}fold(e){return this.fold_(nt(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((o,u)=>{r[o]=u.fold_(Gt(e,o),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,nt(),t)}findOnPath_(e,t,r){const o=this.value?r(t,this.value):!1;if(o)return o;if(je(e))return null;{const u=Ge(e),f=this.children.get(u);return f?f.findOnPath_(ut(e),Gt(t,u),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,nt(),t)}foreachOnPath_(e,t,r){if(je(e))return this;{this.value&&r(t,this.value);const o=Ge(e),u=this.children.get(o);return u?u.foreachOnPath_(ut(e),Gt(t,o),r):new lt(null)}}foreach(e){this.foreach_(nt(),e)}foreach_(e,t){this.children.inorderTraversal((r,o)=>{o.foreach_(Gt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.writeTree_=e}static empty(){return new mi(new lt(null))}}function Tu(s,e,t){if(je(e))return new mi(new lt(t));{const r=s.writeTree_.findRootMostValueAndPath(e);if(r!=null){const o=r.path;let u=r.value;const f=ei(o,e);return u=u.updateChild(f,t),new mi(s.writeTree_.set(o,u))}else{const o=new lt(t),u=s.writeTree_.setTree(e,o);return new mi(u)}}}function qE(s,e,t){let r=s;return ti(t,(o,u)=>{r=Tu(r,Gt(e,o),u)}),r}function GE(s,e){if(je(e))return mi.empty();{const t=s.writeTree_.setTree(e,new lt(null));return new mi(t)}}function pm(s,e){return wa(s,e)!=null}function wa(s,e){const t=s.writeTree_.findRootMostValueAndPath(e);return t!=null?s.writeTree_.get(t.path).getChild(ei(t.path,e)):null}function KE(s){const e=[],t=s.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(pn,(r,o)=>{e.push(new Ke(r,o))}):s.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&e.push(new Ke(r,o.value))}),e}function _r(s,e){if(je(e))return s;{const t=wa(s,e);return t!=null?new mi(new lt(t)):new mi(s.writeTree_.subtree(e))}}function mm(s){return s.writeTree_.isEmpty()}function Lo(s,e){return RS(nt(),s.writeTree_,e)}function RS(s,e,t){if(e.value!=null)return t.updateChild(s,e.value);{let r=null;return e.children.inorderTraversal((o,u)=>{o===".priority"?(he(u.value!==null,"Priority writes must always be leaf nodes"),r=u.value):t=RS(Gt(s,o),u,t)}),!t.getChild(s).isEmpty()&&r!==null&&(t=t.updateChild(Gt(s,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(s,e){return kS(e,s)}function xO(s,e,t,r,o){he(r>s.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),s.allWrites.push({path:e,snap:t,writeId:r,visible:o}),o&&(s.visibleWrites=Tu(s.visibleWrites,e,t)),s.lastWriteId=r}function kO(s,e){for(let t=0;t<s.allWrites.length;t++){const r=s.allWrites[t];if(r.writeId===e)return r}return null}function MO(s,e){const t=s.allWrites.findIndex(p=>p.writeId===e);he(t>=0,"removeWrite called with nonexistent writeId.");const r=s.allWrites[t];s.allWrites.splice(t,1);let o=r.visible,u=!1,f=s.allWrites.length-1;for(;o&&f>=0;){const p=s.allWrites[f];p.visible&&(f>=t&&PO(p,r.path)?o=!1:di(r.path,p.path)&&(u=!0)),f--}if(o){if(u)return LO(s),!0;if(r.snap)s.visibleWrites=GE(s.visibleWrites,r.path);else{const p=r.children;ti(p,m=>{s.visibleWrites=GE(s.visibleWrites,Gt(r.path,m))})}return!0}else return!1}function PO(s,e){if(s.snap)return di(s.path,e);for(const t in s.children)if(s.children.hasOwnProperty(t)&&di(Gt(s.path,t),e))return!0;return!1}function LO(s){s.visibleWrites=NS(s.allWrites,VO,nt()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function VO(s){return s.visible}function NS(s,e,t){let r=mi.empty();for(let o=0;o<s.length;++o){const u=s[o];if(e(u)){const f=u.path;let p;if(u.snap)di(t,f)?(p=ei(t,f),r=Tu(r,p,u.snap)):di(f,t)&&(p=ei(f,t),r=Tu(r,nt(),u.snap.getChild(p)));else if(u.children){if(di(t,f))p=ei(t,f),r=qE(r,p,u.children);else if(di(f,t))if(p=ei(f,t),je(p))r=qE(r,nt(),u.children);else{const m=Mo(u.children,Ge(p));if(m){const g=m.getChild(ut(p));r=Tu(r,nt(),g)}}}else throw Ho("WriteRecord should have .snap or .children")}}return r}function OS(s,e,t,r,o){if(!r&&!o){const u=wa(s.visibleWrites,e);if(u!=null)return u;{const f=_r(s.visibleWrites,e);if(mm(f))return t;if(t==null&&!pm(f,nt()))return null;{const p=t||Ze.EMPTY_NODE;return Lo(f,p)}}}else{const u=_r(s.visibleWrites,e);if(!o&&mm(u))return t;if(!o&&t==null&&!pm(u,nt()))return null;{const f=function(g){return(g.visible||o)&&(!r||!~r.indexOf(g.writeId))&&(di(g.path,e)||di(e,g.path))},p=NS(s.allWrites,f,e),m=t||Ze.EMPTY_NODE;return Lo(p,m)}}}function UO(s,e,t){let r=Ze.EMPTY_NODE;const o=wa(s.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(pn,(u,f)=>{r=r.updateImmediateChild(u,f)}),r;if(t){const u=_r(s.visibleWrites,e);return t.forEachChild(pn,(f,p)=>{const m=Lo(_r(u,new ct(f)),p);r=r.updateImmediateChild(f,m)}),KE(u).forEach(f=>{r=r.updateImmediateChild(f.name,f.node)}),r}else{const u=_r(s.visibleWrites,e);return KE(u).forEach(f=>{r=r.updateImmediateChild(f.name,f.node)}),r}}function jO(s,e,t,r,o){he(r||o,"Either existingEventSnap or existingServerSnap must exist");const u=Gt(e,t);if(pm(s.visibleWrites,u))return null;{const f=_r(s.visibleWrites,u);return mm(f)?o.getChild(t):Lo(f,o.getChild(t))}}function BO(s,e,t,r){const o=Gt(e,t),u=wa(s.visibleWrites,o);if(u!=null)return u;if(r.isCompleteForChild(t)){const f=_r(s.visibleWrites,o);return Lo(f,r.getNode().getImmediateChild(t))}else return null}function zO(s,e){return wa(s.visibleWrites,e)}function HO(s,e,t,r,o,u,f){let p;const m=_r(s.visibleWrites,e),g=wa(m,nt());if(g!=null)p=g;else if(t!=null)p=Lo(m,t);else return[];if(p=p.withIndex(f),!p.isEmpty()&&!p.isLeafNode()){const E=[],A=f.getCompare(),O=u?p.getReverseIteratorFrom(r,f):p.getIteratorFrom(r,f);let z=O.getNext();for(;z&&E.length<o;)A(z,r)!==0&&E.push(z),z=O.getNext();return E}else return[]}function FO(){return{visibleWrites:mi.empty(),allWrites:[],lastWriteId:-1}}function _m(s,e,t,r){return OS(s.writeTree,s.treePath,e,t,r)}function DS(s,e){return UO(s.writeTree,s.treePath,e)}function WE(s,e,t,r){return jO(s.writeTree,s.treePath,e,t,r)}function Zh(s,e){return zO(s.writeTree,Gt(s.treePath,e))}function qO(s,e,t,r,o,u){return HO(s.writeTree,s.treePath,e,t,r,o,u)}function n_(s,e,t){return BO(s.writeTree,s.treePath,e,t)}function xS(s,e){return kS(Gt(s.treePath,e),s.writeTree)}function kS(s,e){return{treePath:s,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;he(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),he(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const u=o.type;if(t==="child_added"&&u==="child_removed")this.changeMap.set(r,BE(r,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&u==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&u==="child_changed")this.changeMap.set(r,EO(r,o.oldSnap));else if(t==="child_changed"&&u==="child_added")this.changeMap.set(r,vO(r,e.snapshotNode));else if(t==="child_changed"&&u==="child_changed")this.changeMap.set(r,BE(r,e.snapshotNode,o.oldSnap));else throw Ho("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const MS=new KO;class i_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new t_(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return n_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ga(this.viewCache_),u=qO(this.writes_,o,t,1,r,e);return u.length===0?null:u[0]}}function WO(s,e){he(e.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),he(e.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function YO(s,e,t,r,o){const u=new GO;let f,p;if(t.type===Li.OVERWRITE){const g=t;g.source.fromUser?f=gm(s,e,g.path,g.snap,r,o,u):(he(g.source.fromServer,"Unknown source."),p=g.source.tagged||e.serverCache.isFiltered()&&!je(g.path),f=Jh(s,e,g.path,g.snap,r,o,p,u))}else if(t.type===Li.MERGE){const g=t;g.source.fromUser?f=$O(s,e,g.path,g.children,r,o,u):(he(g.source.fromServer,"Unknown source."),p=g.source.tagged||e.serverCache.isFiltered(),f=ym(s,e,g.path,g.children,r,o,p,u))}else if(t.type===Li.ACK_USER_WRITE){const g=t;g.revert?f=JO(s,e,g.path,r,o,u):f=XO(s,e,g.path,g.affectedTree,r,o,u)}else if(t.type===Li.LISTEN_COMPLETE)f=ZO(s,e,t.path,r,u);else throw Ho("Unknown operation type: "+t.type);const m=u.getChanges();return QO(e,f,m),{viewCache:f,changes:m}}function QO(s,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),u=dm(s);(t.length>0||!s.eventCache.isFullyInitialized()||o&&!r.getNode().equals(u)||!r.getNode().getPriority().equals(u.getPriority()))&&t.push(yO(dm(e)))}}function PS(s,e,t,r,o,u){const f=e.eventCache;if(Zh(r,t)!=null)return e;{let p,m;if(je(t))if(he(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=ga(e),E=g instanceof Ze?g:Ze.EMPTY_NODE,A=DS(r,E);p=s.filter.updateFullNode(e.eventCache.getNode(),A,u)}else{const g=_m(r,ga(e));p=s.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=Ge(t);if(g===".priority"){he(yr(t)===1,"Can't have a priority with additional path components");const E=f.getNode();m=e.serverCache.getNode();const A=WE(r,t,E,m);A!=null?p=s.filter.updatePriority(E,A):p=f.getNode()}else{const E=ut(t);let A;if(f.isCompleteForChild(g)){m=e.serverCache.getNode();const O=WE(r,t,f.getNode(),m);O!=null?A=f.getNode().getImmediateChild(g).updateChild(E,O):A=f.getNode().getImmediateChild(g)}else A=n_(r,g,e.serverCache);A!=null?p=s.filter.updateChild(f.getNode(),g,A,E,o,u):p=f.getNode()}}return Eu(e,p,f.isFullyInitialized()||je(t),s.filter.filtersNodes())}}function Jh(s,e,t,r,o,u,f,p){const m=e.serverCache;let g;const E=f?s.filter:s.filter.getIndexedFilter();if(je(t))g=E.updateFullNode(m.getNode(),r,null);else if(E.filtersNodes()&&!m.isFiltered()){const z=m.getNode().updateChild(t,r);g=E.updateFullNode(m.getNode(),z,null)}else{const z=Ge(t);if(!m.isCompleteForPath(t)&&yr(t)>1)return e;const F=ut(t),W=m.getNode().getImmediateChild(z).updateChild(F,r);z===".priority"?g=E.updatePriority(m.getNode(),W):g=E.updateChild(m.getNode(),z,W,F,MS,null)}const A=CS(e,g,m.isFullyInitialized()||je(t),E.filtersNodes()),O=new i_(o,A,u);return PS(s,A,t,o,O,p)}function gm(s,e,t,r,o,u,f){const p=e.eventCache;let m,g;const E=new i_(o,e,u);if(je(t))g=s.filter.updateFullNode(e.eventCache.getNode(),r,f),m=Eu(e,g,!0,s.filter.filtersNodes());else{const A=Ge(t);if(A===".priority")g=s.filter.updatePriority(e.eventCache.getNode(),r),m=Eu(e,g,p.isFullyInitialized(),p.isFiltered());else{const O=ut(t),z=p.getNode().getImmediateChild(A);let F;if(je(O))F=r;else{const Q=E.getCompleteChild(A);Q!=null?hS(O)===".priority"&&Q.getChild(dS(O)).isEmpty()?F=Q:F=Q.updateChild(O,r):F=Ze.EMPTY_NODE}if(z.equals(F))m=e;else{const Q=s.filter.updateChild(p.getNode(),A,F,O,E,f);m=Eu(e,Q,p.isFullyInitialized(),s.filter.filtersNodes())}}}return m}function YE(s,e){return s.eventCache.isCompleteForChild(e)}function $O(s,e,t,r,o,u,f){let p=e;return r.foreach((m,g)=>{const E=Gt(t,m);YE(e,Ge(E))&&(p=gm(s,p,E,g,o,u,f))}),r.foreach((m,g)=>{const E=Gt(t,m);YE(e,Ge(E))||(p=gm(s,p,E,g,o,u,f))}),p}function QE(s,e,t){return t.foreach((r,o)=>{e=e.updateChild(r,o)}),e}function ym(s,e,t,r,o,u,f,p){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;je(t)?g=r:g=new lt(null).setTree(t,r);const E=e.serverCache.getNode();return g.children.inorderTraversal((A,O)=>{if(E.hasChild(A)){const z=e.serverCache.getNode().getImmediateChild(A),F=QE(s,z,O);m=Jh(s,m,new ct(A),F,o,u,f,p)}}),g.children.inorderTraversal((A,O)=>{const z=!e.serverCache.isCompleteForChild(A)&&O.value===null;if(!E.hasChild(A)&&!z){const F=e.serverCache.getNode().getImmediateChild(A),Q=QE(s,F,O);m=Jh(s,m,new ct(A),Q,o,u,f,p)}}),m}function XO(s,e,t,r,o,u,f){if(Zh(o,t)!=null)return e;const p=e.serverCache.isFiltered(),m=e.serverCache;if(r.value!=null){if(je(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return Jh(s,e,t,m.getNode().getChild(t),o,u,p,f);if(je(t)){let g=new lt(null);return m.getNode().forEachChild(Do,(E,A)=>{g=g.set(new ct(E),A)}),ym(s,e,t,g,o,u,p,f)}else return e}else{let g=new lt(null);return r.foreach((E,A)=>{const O=Gt(t,E);m.isCompleteForPath(O)&&(g=g.set(E,m.getNode().getChild(O)))}),ym(s,e,t,g,o,u,p,f)}}function ZO(s,e,t,r,o){const u=e.serverCache,f=CS(e,u.getNode(),u.isFullyInitialized()||je(t),u.isFiltered());return PS(s,f,t,r,MS,o)}function JO(s,e,t,r,o,u){let f;if(Zh(r,t)!=null)return e;{const p=new i_(r,e,o),m=e.eventCache.getNode();let g;if(je(t)||Ge(t)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=_m(r,ga(e));else{const A=e.serverCache.getNode();he(A instanceof Ze,"serverChildren would be complete if leaf node"),E=DS(r,A)}E=E,g=s.filter.updateFullNode(m,E,u)}else{const E=Ge(t);let A=n_(r,E,e.serverCache);A==null&&e.serverCache.isCompleteForChild(E)&&(A=m.getImmediateChild(E)),A!=null?g=s.filter.updateChild(m,E,A,ut(t),p,u):e.eventCache.getNode().hasChild(E)?g=s.filter.updateChild(m,E,Ze.EMPTY_NODE,ut(t),p,u):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(f=_m(r,ga(e)),f.isLeafNode()&&(g=s.filter.updateFullNode(g,f,u)))}return f=e.serverCache.isFullyInitialized()||Zh(r,nt())!=null,Eu(e,g,f,s.filter.filtersNodes())}}function eD(s,e){const t=ga(s.viewCache_);return t&&(s.query._queryParams.loadsAllData()||!je(e)&&!t.getImmediateChild(Ge(e)).isEmpty())?t.getChild(e):null}function $E(s,e,t,r){e.type===Li.MERGE&&e.source.queryId!==null&&(he(ga(s.viewCache_),"We should always have a full cache before handling merges"),he(dm(s.viewCache_),"Missing event cache, even though we have a server cache"));const o=s.viewCache_,u=YO(s.processor_,o,e,t,r);return WO(s.processor_,u.viewCache),he(u.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=u.viewCache,tD(s,u.changes,u.viewCache.eventCache.getNode())}function tD(s,e,t,r){const o=s.eventRegistrations_;return IO(s.eventGenerator_,e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let XE;function nD(s){he(!XE,"__referenceConstructor has already been defined"),XE=s}function s_(s,e,t,r){const o=e.source.queryId;if(o!==null){const u=s.views.get(o);return he(u!=null,"SyncTree gave us an op for an invalid query."),$E(u,e,t,r)}else{let u=[];for(const f of s.views.values())u=u.concat($E(f,e,t,r));return u}}function r_(s,e){let t=null;for(const r of s.views.values())t=t||eD(r,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ZE;function iD(s){he(!ZE,"__referenceConstructor has already been defined"),ZE=s}class JE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new lt(null),this.pendingWriteTree_=FO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sD(s,e,t,r,o){return xO(s.pendingWriteTree_,e,t,r,o),o?Tf(s,new _a(SS(),e,t)):[]}function Co(s,e,t=!1){const r=kO(s.pendingWriteTree_,e);if(MO(s.pendingWriteTree_,e)){let u=new lt(null);return r.snap!=null?u=u.set(nt(),!0):ti(r.children,f=>{u=u.set(new ct(f),!0)}),Tf(s,new Xh(r.path,u,t))}else return[]}function Ef(s,e,t){return Tf(s,new _a(AS(),e,t))}function rD(s,e,t){const r=lt.fromObject(t);return Tf(s,new Du(AS(),e,r))}function aD(s,e,t,r){const o=jS(s,r);if(o!=null){const u=BS(o),f=u.path,p=u.queryId,m=ei(f,e),g=new _a(wS(p),m,t);return zS(s,f,g)}else return[]}function oD(s,e,t,r){const o=jS(s,r);if(o){const u=BS(o),f=u.path,p=u.queryId,m=ei(f,e),g=lt.fromObject(t),E=new Du(wS(p),m,g);return zS(s,f,E)}else return[]}function LS(s,e,t){const o=s.pendingWriteTree_,u=s.syncPointTree_.findOnPath(e,(f,p)=>{const m=ei(f,e),g=r_(p,m);if(g)return g});return OS(o,e,u,t,!0)}function Tf(s,e){return VS(e,s.syncPointTree_,null,IS(s.pendingWriteTree_,nt()))}function VS(s,e,t,r){if(je(s.path))return US(s,e,t,r);{const o=e.get(nt());t==null&&o!=null&&(t=r_(o,nt()));let u=[];const f=Ge(s.path),p=s.operationForChild(f),m=e.children.get(f);if(m&&p){const g=t?t.getImmediateChild(f):null,E=xS(r,f);u=u.concat(VS(p,m,g,E))}return o&&(u=u.concat(s_(o,s,r,t))),u}}function US(s,e,t,r){const o=e.get(nt());t==null&&o!=null&&(t=r_(o,nt()));let u=[];return e.children.inorderTraversal((f,p)=>{const m=t?t.getImmediateChild(f):null,g=xS(r,f),E=s.operationForChild(f);E&&(u=u.concat(US(E,p,m,g)))}),o&&(u=u.concat(s_(o,s,r,t))),u}function jS(s,e){return s.tagToQueryMap.get(e)}function BS(s){const e=s.indexOf("$");return he(e!==-1&&e<s.length-1,"Bad queryKey."),{queryId:s.substr(e+1),path:new ct(s.substr(0,e))}}function zS(s,e,t){const r=s.syncPointTree_.get(e);he(r,"Missing sync point for query tag that we're tracking");const o=IS(s.pendingWriteTree_,e);return s_(r,t,o,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new a_(t)}node(){return this.node_}}class o_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Gt(this.path_,e);return new o_(this.syncTree_,t)}node(){return LS(this.syncTree_,this.path_)}}const lD=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},eT=function(s,e,t){if(!s||typeof s!="object")return s;if(he(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return uD(s[".sv"],e,t);if(typeof s[".sv"]=="object")return cD(s[".sv"],e);he(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},uD=function(s,e,t){switch(s){case"timestamp":return t.timestamp;default:he(!1,"Unexpected server value: "+s)}},cD=function(s,e,t){s.hasOwnProperty("increment")||he(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const r=s.increment;typeof r!="number"&&he(!1,"Unexpected increment value: "+r);const o=e.node();if(he(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const f=o.getValue();return typeof f!="number"?r:f+r},hD=function(s,e,t,r){return l_(e,new o_(t,s),r)},fD=function(s,e,t){return l_(s,new a_(e),t)};function l_(s,e,t){const r=s.getPriority().val(),o=eT(r,e.getImmediateChild(".priority"),t);let u;if(s.isLeafNode()){const f=s,p=eT(f.getValue(),e,t);return p!==f.getValue()||o!==f.getPriority().val()?new Ft(p,fn(o)):s}else{const f=s;return u=f,o!==f.getPriority().val()&&(u=u.updatePriority(new Ft(o))),f.forEachChild(pn,(p,m)=>{const g=l_(m,e.getImmediateChild(p),t);g!==m&&(u=u.updateImmediateChild(p,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function c_(s,e){let t=e instanceof ct?e:new ct(e),r=s,o=Ge(t);for(;o!==null;){const u=Mo(r.node.children,o)||{children:{},childCount:0};r=new u_(o,r,u),t=ut(t),o=Ge(t)}return r}function Ko(s){return s.node.value}function HS(s,e){s.node.value=e,vm(s)}function FS(s){return s.node.childCount>0}function dD(s){return Ko(s)===void 0&&!FS(s)}function Sf(s,e){ti(s.node.children,(t,r)=>{e(new u_(t,s,r))})}function qS(s,e,t,r){t&&e(s),Sf(s,o=>{qS(o,e,!0)})}function pD(s,e,t){let r=s.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Wu(s){return new ct(s.parent===null?s.name:Wu(s.parent)+"/"+s.name)}function vm(s){s.parent!==null&&mD(s.parent,s.name,s)}function mD(s,e,t){const r=dD(t),o=bs(s.node.children,e);r&&o?(delete s.node.children[e],s.node.childCount--,vm(s)):!r&&!o&&(s.node.children[e]=t.node,s.node.childCount++,vm(s))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=/[\[\].#$\/\u0000-\u001F\u007F]/,gD=/[\[\].#$\u0000-\u001F\u007F]/,Yp=10*1024*1024,GS=function(s){return typeof s=="string"&&s.length!==0&&!_D.test(s)},yD=function(s){return typeof s=="string"&&s.length!==0&&!gD.test(s)},vD=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),yD(s)},KS=function(s,e,t){const r=t instanceof ct?new ZN(t,s):t;if(e===void 0)throw new Error(s+"contains undefined "+ra(r));if(typeof e=="function")throw new Error(s+"contains a function "+ra(r)+" with contents = "+e.toString());if(G0(e))throw new Error(s+"contains "+e.toString()+" "+ra(r));if(typeof e=="string"&&e.length>Yp/3&&pf(e)>Yp)throw new Error(s+"contains a string greater than "+Yp+" utf8 bytes "+ra(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,u=!1;if(ti(e,(f,p)=>{if(f===".value")o=!0;else if(f!==".priority"&&f!==".sv"&&(u=!0,!GS(f)))throw new Error(s+" contains an invalid key ("+f+") "+ra(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);JN(r,f),KS(s,p,r),eO(r)}),o&&u)throw new Error(s+' contains ".value" child '+ra(r)+" in addition to actual children.")}},ED=function(s,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!GS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!vD(t))throw new Error(LC(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function SD(s,e){let t=null;for(let r=0;r<e.length;r++){const o=e[r],u=o.getPath();t!==null&&!pS(u,t.path)&&(s.eventLists_.push(t),t=null),t===null&&(t={events:[],path:u}),t.events.push(o)}t&&s.eventLists_.push(t)}function ba(s,e,t){SD(s,t),AD(s,r=>di(r,e)||di(e,r))}function AD(s,e){s.recursionDepth_++;let t=!0;for(let r=0;r<s.eventLists_.length;r++){const o=s.eventLists_[r];if(o){const u=o.path;e(u)?(wD(s.eventLists_[r]),s.eventLists_[r]=null):t=!1}}t&&(s.eventLists_=[]),s.recursionDepth_--}function wD(s){for(let e=0;e<s.events.length;e++){const t=s.events[e];if(t!==null){s.events[e]=null;const r=t.getEventRunner();yu&&hn("event: "+t.toString()),Gu(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD="repo_interrupt",CD=25;class RD{constructor(e,t,r,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$h(),this.transactionQueueTree_=new u_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ID(s,e,t){if(s.stats_=$m(s.repoInfo_),s.forceRestClient_||SN())s.server_=new Qh(s.repoInfo_,(r,o,u,f)=>{tT(s,r,o,u,f)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>nT(s,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tn(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}s.persistentConnection_=new vs(s.repoInfo_,e,(r,o,u,f)=>{tT(s,r,o,u,f)},r=>{nT(s,r)},r=>{OD(s,r)},s.authTokenProvider_,s.appCheckProvider_,t),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(r=>{s.server_.refreshAuthToken(r)}),s.appCheckProvider_.addTokenChangeListener(r=>{s.server_.refreshAppCheckToken(r.token)}),s.statsReporter_=IN(s.repoInfo_,()=>new RO(s.stats_,s.server_)),s.infoData_=new SO,s.infoSyncTree_=new JE({startListening:(r,o,u,f)=>{let p=[];const m=s.infoData_.getNode(r._path);return m.isEmpty()||(p=Ef(s.infoSyncTree_,r._path,m),setTimeout(()=>{f("ok")},0)),p},stopListening:()=>{}}),h_(s,"connected",!1),s.serverSyncTree_=new JE({startListening:(r,o,u,f)=>(s.server_.listen(r,u,o,(p,m)=>{const g=f(p,m);ba(s.eventQueue_,r._path,g)}),[]),stopListening:(r,o)=>{s.server_.unlisten(r,o)}})}function ND(s){const t=s.infoData_.getNode(new ct(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function WS(s){return lD({timestamp:ND(s)})}function tT(s,e,t,r,o){s.dataUpdateCount++;const u=new ct(e);t=s.interceptServerDataCallback_?s.interceptServerDataCallback_(e,t):t;let f=[];if(o)if(r){const m=jh(t,g=>fn(g));f=oD(s.serverSyncTree_,u,m,o)}else{const m=fn(t);f=aD(s.serverSyncTree_,u,m,o)}else if(r){const m=jh(t,g=>fn(g));f=rD(s.serverSyncTree_,u,m)}else{const m=fn(t);f=Ef(s.serverSyncTree_,u,m)}let p=u;f.length>0&&(p=d_(s,u)),ba(s.eventQueue_,p,f)}function nT(s,e){h_(s,"connected",e),e===!1&&xD(s)}function OD(s,e){ti(e,(t,r)=>{h_(s,t,r)})}function h_(s,e,t){const r=new ct("/.info/"+e),o=fn(t);s.infoData_.updateSnapshot(r,o);const u=Ef(s.infoSyncTree_,r,o);ba(s.eventQueue_,r,u)}function DD(s){return s.nextWriteId_++}function xD(s){YS(s,"onDisconnectEvents");const e=WS(s),t=$h();fm(s.onDisconnect_,nt(),(o,u)=>{const f=hD(o,u,s.serverSyncTree_,e);TS(t,o,f)});let r=[];fm(t,nt(),(o,u)=>{r=r.concat(Ef(s.serverSyncTree_,o,u));const f=LD(s,o);d_(s,f)}),s.onDisconnect_=$h(),ba(s.eventQueue_,nt(),r)}function kD(s){s.persistentConnection_&&s.persistentConnection_.interrupt(bD)}function YS(s,...e){let t="";s.persistentConnection_&&(t=s.persistentConnection_.id+":"),hn(t,...e)}function QS(s,e,t){return LS(s.serverSyncTree_,e,t)||Ze.EMPTY_NODE}function f_(s,e=s.transactionQueueTree_){if(e||Af(s,e),Ko(e)){const t=XS(s,e);he(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&MD(s,Wu(e),t)}else FS(e)&&Sf(e,t=>{f_(s,t)})}function MD(s,e,t){const r=t.map(g=>g.currentWriteId),o=QS(s,e,r);let u=o;const f=o.hash();for(let g=0;g<t.length;g++){const E=t[g];he(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const A=ei(e,E.path);u=u.updateChild(A,E.currentOutputSnapshotRaw)}const p=u.val(!0),m=e;s.server_.put(m.toString(),p,g=>{YS(s,"transaction put response",{path:m.toString(),status:g});let E=[];if(g==="ok"){const A=[];for(let O=0;O<t.length;O++)t[O].status=2,E=E.concat(Co(s.serverSyncTree_,t[O].currentWriteId)),t[O].onComplete&&A.push(()=>t[O].onComplete(null,!0,t[O].currentOutputSnapshotResolved)),t[O].unwatcher();Af(s,c_(s.transactionQueueTree_,e)),f_(s,s.transactionQueueTree_),ba(s.eventQueue_,e,E);for(let O=0;O<A.length;O++)Gu(A[O])}else{if(g==="datastale")for(let A=0;A<t.length;A++)t[A].status===3?t[A].status=4:t[A].status=0;else{Vn("transaction at "+m.toString()+" failed: "+g);for(let A=0;A<t.length;A++)t[A].status=4,t[A].abortReason=g}d_(s,e)}},f)}function d_(s,e){const t=$S(s,e),r=Wu(t),o=XS(s,t);return PD(s,o,r),r}function PD(s,e,t){if(e.length===0)return;const r=[];let o=[];const f=e.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<e.length;p++){const m=e[p],g=ei(t,m.path);let E=!1,A;if(he(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)E=!0,A=m.abortReason,o=o.concat(Co(s.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=CD)E=!0,A="maxretry",o=o.concat(Co(s.serverSyncTree_,m.currentWriteId,!0));else{const O=QS(s,m.path,f);m.currentInputSnapshot=O;const z=e[p].update(O.val());if(z!==void 0){KS("transaction failed: Data returned ",z,m.path);let F=fn(z);typeof z=="object"&&z!=null&&bs(z,".priority")||(F=F.updatePriority(O.getPriority()));const W=m.currentWriteId,Y=WS(s),ee=fD(F,O,Y);m.currentOutputSnapshotRaw=F,m.currentOutputSnapshotResolved=ee,m.currentWriteId=DD(s),f.splice(f.indexOf(W),1),o=o.concat(sD(s.serverSyncTree_,m.path,ee,m.currentWriteId,m.applyLocally)),o=o.concat(Co(s.serverSyncTree_,W,!0))}else E=!0,A="nodata",o=o.concat(Co(s.serverSyncTree_,m.currentWriteId,!0))}ba(s.eventQueue_,t,o),o=[],E&&(e[p].status=2,function(O){setTimeout(O,Math.floor(0))}(e[p].unwatcher),e[p].onComplete&&(A==="nodata"?r.push(()=>e[p].onComplete(null,!1,e[p].currentInputSnapshot)):r.push(()=>e[p].onComplete(new Error(A),!1,null))))}Af(s,s.transactionQueueTree_);for(let p=0;p<r.length;p++)Gu(r[p]);f_(s,s.transactionQueueTree_)}function $S(s,e){let t,r=s.transactionQueueTree_;for(t=Ge(e);t!==null&&Ko(r)===void 0;)r=c_(r,t),e=ut(e),t=Ge(e);return r}function XS(s,e){const t=[];return ZS(s,e,t),t.sort((r,o)=>r.order-o.order),t}function ZS(s,e,t){const r=Ko(e);if(r)for(let o=0;o<r.length;o++)t.push(r[o]);Sf(e,o=>{ZS(s,o,t)})}function Af(s,e){const t=Ko(e);if(t){let r=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[r]=t[o],r++);t.length=r,HS(e,t.length>0?t:void 0)}Sf(e,r=>{Af(s,r)})}function LD(s,e){const t=Wu($S(s,e)),r=c_(s.transactionQueueTree_,e);return pD(r,o=>{Qp(s,o)}),Qp(s,r),qS(r,o=>{Qp(s,o)}),t}function Qp(s,e){const t=Ko(e);if(t){const r=[];let o=[],u=-1;for(let f=0;f<t.length;f++)t[f].status===3||(t[f].status===1?(he(u===f-1,"All SENT items should be at beginning of queue."),u=f,t[f].status=3,t[f].abortReason="set"):(he(t[f].status===0,"Unexpected transaction status in abort"),t[f].unwatcher(),o=o.concat(Co(s.serverSyncTree_,t[f].currentWriteId,!0)),t[f].onComplete&&r.push(t[f].onComplete.bind(null,new Error("set"),!1,null))));u===-1?HS(e,void 0):t.length=u+1,ba(s.eventQueue_,Wu(e),o);for(let f=0;f<r.length;f++)Gu(r[f])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(s){let e="";const t=s.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let o=t[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function UD(s){const e={};s.charAt(0)==="?"&&(s=s.substring(1));for(const t of s.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Vn(`Invalid query segment '${t}' in query '${s}'`)}return e}const iT=function(s,e){const t=jD(s),r=t.namespace;t.domain==="firebase.com"&&pa(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&pa("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||pN();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new bN(t.host,t.secure,r,o,e,"",r!==t.subdomain),path:new ct(t.pathString)}},jD=function(s){let e="",t="",r="",o="",u="",f=!0,p="https",m=443;if(typeof s=="string"){let g=s.indexOf("//");g>=0&&(p=s.substring(0,g-1),s=s.substring(g+2));let E=s.indexOf("/");E===-1&&(E=s.length);let A=s.indexOf("?");A===-1&&(A=s.length),e=s.substring(0,Math.min(E,A)),E<A&&(o=VD(s.substring(E,A)));const O=UD(s.substring(Math.min(s.length,A)));g=e.indexOf(":"),g>=0?(f=p==="https"||p==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const z=e.slice(0,g);if(z.toLowerCase()==="localhost")t="localhost";else if(z.split(".").length<=2)t=z;else{const F=e.indexOf(".");r=e.substring(0,F).toLowerCase(),t=e.substring(F+1),u=r}"ns"in O&&(u=O.ns)}return{host:e,port:m,domain:t,subdomain:r,secure:f,scheme:p,pathString:o,namespace:u}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,t,r,o){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=o}get key(){return je(this._path)?null:hS(this._path)}get ref(){return new Wo(this._repo,this._path)}get _queryIdentifier(){const e=HE(this._queryParams),t=Ym(e);return t==="{}"?"default":t}get _queryObject(){return HE(this._queryParams)}isEqual(e){if(e=Cn(e),!(e instanceof p_))return!1;const t=this._repo===e._repo,r=pS(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+XN(this._path)}}class Wo extends p_{constructor(e,t){super(e,t,new e_,!1)}get parent(){const e=dS(this._path);return e===null?null:new Wo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}nD(Wo);iD(Wo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD="FIREBASE_DATABASE_EMULATOR_HOST",Em={};let zD=!1;function HD(s,e,t,r,o){let u=r||s.options.databaseURL;u===void 0&&(s.options.projectId||pa("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),hn("Using default host for project ",s.options.projectId),u=`${s.options.projectId}-default-rtdb.firebaseio.com`);let f=iT(u,o),p=f.repoInfo,m;typeof process<"u"&&AE&&(m=AE[BD]),m?(u=`http://${m}?ns=${p.namespace}`,f=iT(u,o),p=f.repoInfo):f.repoInfo.secure;const g=new wN(s.name,s.options,e);ED("Invalid Firebase Database URL",f),je(f.path)||pa("Database URL must point to the root of a Firebase Database (not including a child path).");const E=qD(p,s,g,new AN(s,t));return new GD(E,s)}function FD(s,e){const t=Em[e];(!t||t[s.key]!==s)&&pa(`Database ${e}(${s.repoInfo_}) has already been deleted.`),kD(s),delete t[s.key]}function qD(s,e,t,r){let o=Em[e.name];o||(o={},Em[e.name]=o);let u=o[s.toURLString()];return u&&pa("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new RD(s,zD,t,r),o[s.toURLString()]=u,u}class GD{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ID(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wo(this._repo,nt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(FD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&pa("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(s){lN(Sa),ha(new gr("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return HD(r,o,u,t)},"PUBLIC").setMultipleInstances(!0)),Vi(wE,bE,s),Vi(wE,bE,"esm2017")}vs.prototype.simpleListen=function(s,e){this.sendRequest("q",{p:s},e)};vs.prototype.echo=function(s,e){this.sendRequest("echo",{d:s},e)};KD();var sT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var m_;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,R){function b(){}b.prototype=R.prototype,x.D=R.prototype,x.prototype=new b,x.prototype.constructor=x,x.C=function(C,k,L){for(var N=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)N[$e-2]=arguments[$e];return R.prototype[k].apply(C,N)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,R,b){b||(b=0);var C=Array(16);if(typeof R=="string")for(var k=0;16>k;++k)C[k]=R.charCodeAt(b++)|R.charCodeAt(b++)<<8|R.charCodeAt(b++)<<16|R.charCodeAt(b++)<<24;else for(k=0;16>k;++k)C[k]=R[b++]|R[b++]<<8|R[b++]<<16|R[b++]<<24;R=x.g[0],b=x.g[1],k=x.g[2];var L=x.g[3],N=R+(L^b&(k^L))+C[0]+3614090360&4294967295;R=b+(N<<7&4294967295|N>>>25),N=L+(k^R&(b^k))+C[1]+3905402710&4294967295,L=R+(N<<12&4294967295|N>>>20),N=k+(b^L&(R^b))+C[2]+606105819&4294967295,k=L+(N<<17&4294967295|N>>>15),N=b+(R^k&(L^R))+C[3]+3250441966&4294967295,b=k+(N<<22&4294967295|N>>>10),N=R+(L^b&(k^L))+C[4]+4118548399&4294967295,R=b+(N<<7&4294967295|N>>>25),N=L+(k^R&(b^k))+C[5]+1200080426&4294967295,L=R+(N<<12&4294967295|N>>>20),N=k+(b^L&(R^b))+C[6]+2821735955&4294967295,k=L+(N<<17&4294967295|N>>>15),N=b+(R^k&(L^R))+C[7]+4249261313&4294967295,b=k+(N<<22&4294967295|N>>>10),N=R+(L^b&(k^L))+C[8]+1770035416&4294967295,R=b+(N<<7&4294967295|N>>>25),N=L+(k^R&(b^k))+C[9]+2336552879&4294967295,L=R+(N<<12&4294967295|N>>>20),N=k+(b^L&(R^b))+C[10]+4294925233&4294967295,k=L+(N<<17&4294967295|N>>>15),N=b+(R^k&(L^R))+C[11]+2304563134&4294967295,b=k+(N<<22&4294967295|N>>>10),N=R+(L^b&(k^L))+C[12]+1804603682&4294967295,R=b+(N<<7&4294967295|N>>>25),N=L+(k^R&(b^k))+C[13]+4254626195&4294967295,L=R+(N<<12&4294967295|N>>>20),N=k+(b^L&(R^b))+C[14]+2792965006&4294967295,k=L+(N<<17&4294967295|N>>>15),N=b+(R^k&(L^R))+C[15]+1236535329&4294967295,b=k+(N<<22&4294967295|N>>>10),N=R+(k^L&(b^k))+C[1]+4129170786&4294967295,R=b+(N<<5&4294967295|N>>>27),N=L+(b^k&(R^b))+C[6]+3225465664&4294967295,L=R+(N<<9&4294967295|N>>>23),N=k+(R^b&(L^R))+C[11]+643717713&4294967295,k=L+(N<<14&4294967295|N>>>18),N=b+(L^R&(k^L))+C[0]+3921069994&4294967295,b=k+(N<<20&4294967295|N>>>12),N=R+(k^L&(b^k))+C[5]+3593408605&4294967295,R=b+(N<<5&4294967295|N>>>27),N=L+(b^k&(R^b))+C[10]+38016083&4294967295,L=R+(N<<9&4294967295|N>>>23),N=k+(R^b&(L^R))+C[15]+3634488961&4294967295,k=L+(N<<14&4294967295|N>>>18),N=b+(L^R&(k^L))+C[4]+3889429448&4294967295,b=k+(N<<20&4294967295|N>>>12),N=R+(k^L&(b^k))+C[9]+568446438&4294967295,R=b+(N<<5&4294967295|N>>>27),N=L+(b^k&(R^b))+C[14]+3275163606&4294967295,L=R+(N<<9&4294967295|N>>>23),N=k+(R^b&(L^R))+C[3]+4107603335&4294967295,k=L+(N<<14&4294967295|N>>>18),N=b+(L^R&(k^L))+C[8]+1163531501&4294967295,b=k+(N<<20&4294967295|N>>>12),N=R+(k^L&(b^k))+C[13]+2850285829&4294967295,R=b+(N<<5&4294967295|N>>>27),N=L+(b^k&(R^b))+C[2]+4243563512&4294967295,L=R+(N<<9&4294967295|N>>>23),N=k+(R^b&(L^R))+C[7]+1735328473&4294967295,k=L+(N<<14&4294967295|N>>>18),N=b+(L^R&(k^L))+C[12]+2368359562&4294967295,b=k+(N<<20&4294967295|N>>>12),N=R+(b^k^L)+C[5]+4294588738&4294967295,R=b+(N<<4&4294967295|N>>>28),N=L+(R^b^k)+C[8]+2272392833&4294967295,L=R+(N<<11&4294967295|N>>>21),N=k+(L^R^b)+C[11]+1839030562&4294967295,k=L+(N<<16&4294967295|N>>>16),N=b+(k^L^R)+C[14]+4259657740&4294967295,b=k+(N<<23&4294967295|N>>>9),N=R+(b^k^L)+C[1]+2763975236&4294967295,R=b+(N<<4&4294967295|N>>>28),N=L+(R^b^k)+C[4]+1272893353&4294967295,L=R+(N<<11&4294967295|N>>>21),N=k+(L^R^b)+C[7]+4139469664&4294967295,k=L+(N<<16&4294967295|N>>>16),N=b+(k^L^R)+C[10]+3200236656&4294967295,b=k+(N<<23&4294967295|N>>>9),N=R+(b^k^L)+C[13]+681279174&4294967295,R=b+(N<<4&4294967295|N>>>28),N=L+(R^b^k)+C[0]+3936430074&4294967295,L=R+(N<<11&4294967295|N>>>21),N=k+(L^R^b)+C[3]+3572445317&4294967295,k=L+(N<<16&4294967295|N>>>16),N=b+(k^L^R)+C[6]+76029189&4294967295,b=k+(N<<23&4294967295|N>>>9),N=R+(b^k^L)+C[9]+3654602809&4294967295,R=b+(N<<4&4294967295|N>>>28),N=L+(R^b^k)+C[12]+3873151461&4294967295,L=R+(N<<11&4294967295|N>>>21),N=k+(L^R^b)+C[15]+530742520&4294967295,k=L+(N<<16&4294967295|N>>>16),N=b+(k^L^R)+C[2]+3299628645&4294967295,b=k+(N<<23&4294967295|N>>>9),N=R+(k^(b|~L))+C[0]+4096336452&4294967295,R=b+(N<<6&4294967295|N>>>26),N=L+(b^(R|~k))+C[7]+1126891415&4294967295,L=R+(N<<10&4294967295|N>>>22),N=k+(R^(L|~b))+C[14]+2878612391&4294967295,k=L+(N<<15&4294967295|N>>>17),N=b+(L^(k|~R))+C[5]+4237533241&4294967295,b=k+(N<<21&4294967295|N>>>11),N=R+(k^(b|~L))+C[12]+1700485571&4294967295,R=b+(N<<6&4294967295|N>>>26),N=L+(b^(R|~k))+C[3]+2399980690&4294967295,L=R+(N<<10&4294967295|N>>>22),N=k+(R^(L|~b))+C[10]+4293915773&4294967295,k=L+(N<<15&4294967295|N>>>17),N=b+(L^(k|~R))+C[1]+2240044497&4294967295,b=k+(N<<21&4294967295|N>>>11),N=R+(k^(b|~L))+C[8]+1873313359&4294967295,R=b+(N<<6&4294967295|N>>>26),N=L+(b^(R|~k))+C[15]+4264355552&4294967295,L=R+(N<<10&4294967295|N>>>22),N=k+(R^(L|~b))+C[6]+2734768916&4294967295,k=L+(N<<15&4294967295|N>>>17),N=b+(L^(k|~R))+C[13]+1309151649&4294967295,b=k+(N<<21&4294967295|N>>>11),N=R+(k^(b|~L))+C[4]+4149444226&4294967295,R=b+(N<<6&4294967295|N>>>26),N=L+(b^(R|~k))+C[11]+3174756917&4294967295,L=R+(N<<10&4294967295|N>>>22),N=k+(R^(L|~b))+C[2]+718787259&4294967295,k=L+(N<<15&4294967295|N>>>17),N=b+(L^(k|~R))+C[9]+3951481745&4294967295,x.g[0]=x.g[0]+R&4294967295,x.g[1]=x.g[1]+(k+(N<<21&4294967295|N>>>11))&4294967295,x.g[2]=x.g[2]+k&4294967295,x.g[3]=x.g[3]+L&4294967295}r.prototype.u=function(x,R){R===void 0&&(R=x.length);for(var b=R-this.blockSize,C=this.B,k=this.h,L=0;L<R;){if(k==0)for(;L<=b;)o(this,x,L),L+=this.blockSize;if(typeof x=="string"){for(;L<R;)if(C[k++]=x.charCodeAt(L++),k==this.blockSize){o(this,C),k=0;break}}else for(;L<R;)if(C[k++]=x[L++],k==this.blockSize){o(this,C),k=0;break}}this.h=k,this.o+=R},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var R=1;R<x.length-8;++R)x[R]=0;var b=8*this.o;for(R=x.length-8;R<x.length;++R)x[R]=b&255,b/=256;for(this.u(x),x=Array(16),R=b=0;4>R;++R)for(var C=0;32>C;C+=8)x[b++]=this.g[R]>>>C&255;return x};function u(x,R){var b=p;return Object.prototype.hasOwnProperty.call(b,x)?b[x]:b[x]=R(x)}function f(x,R){this.h=R;for(var b=[],C=!0,k=x.length-1;0<=k;k--){var L=x[k]|0;C&&L==R||(b[k]=L,C=!1)}this.g=b}var p={};function m(x){return-128<=x&&128>x?u(x,function(R){return new f([R|0],0>R?-1:0)}):new f([x|0],0>x?-1:0)}function g(x){if(isNaN(x)||!isFinite(x))return A;if(0>x)return W(g(-x));for(var R=[],b=1,C=0;x>=b;C++)R[C]=x/b|0,b*=4294967296;return new f(R,0)}function E(x,R){if(x.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(x.charAt(0)=="-")return W(E(x.substring(1),R));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=g(Math.pow(R,8)),C=A,k=0;k<x.length;k+=8){var L=Math.min(8,x.length-k),N=parseInt(x.substring(k,k+L),R);8>L?(L=g(Math.pow(R,L)),C=C.j(L).add(g(N))):(C=C.j(b),C=C.add(g(N)))}return C}var A=m(0),O=m(1),z=m(16777216);s=f.prototype,s.m=function(){if(Q(this))return-W(this).m();for(var x=0,R=1,b=0;b<this.g.length;b++){var C=this.i(b);x+=(0<=C?C:4294967296+C)*R,R*=4294967296}return x},s.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(F(this))return"0";if(Q(this))return"-"+W(this).toString(x);for(var R=g(Math.pow(x,6)),b=this,C="";;){var k=se(b,R).g;b=Y(b,k.j(R));var L=((0<b.g.length?b.g[0]:b.h)>>>0).toString(x);if(b=k,F(b))return L+C;for(;6>L.length;)L="0"+L;C=L+C}},s.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function F(x){if(x.h!=0)return!1;for(var R=0;R<x.g.length;R++)if(x.g[R]!=0)return!1;return!0}function Q(x){return x.h==-1}s.l=function(x){return x=Y(this,x),Q(x)?-1:F(x)?0:1};function W(x){for(var R=x.g.length,b=[],C=0;C<R;C++)b[C]=~x.g[C];return new f(b,~x.h).add(O)}s.abs=function(){return Q(this)?W(this):this},s.add=function(x){for(var R=Math.max(this.g.length,x.g.length),b=[],C=0,k=0;k<=R;k++){var L=C+(this.i(k)&65535)+(x.i(k)&65535),N=(L>>>16)+(this.i(k)>>>16)+(x.i(k)>>>16);C=N>>>16,L&=65535,N&=65535,b[k]=N<<16|L}return new f(b,b[b.length-1]&-2147483648?-1:0)};function Y(x,R){return x.add(W(R))}s.j=function(x){if(F(this)||F(x))return A;if(Q(this))return Q(x)?W(this).j(W(x)):W(W(this).j(x));if(Q(x))return W(this.j(W(x)));if(0>this.l(z)&&0>x.l(z))return g(this.m()*x.m());for(var R=this.g.length+x.g.length,b=[],C=0;C<2*R;C++)b[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<x.g.length;k++){var L=this.i(C)>>>16,N=this.i(C)&65535,$e=x.i(k)>>>16,we=x.i(k)&65535;b[2*C+2*k]+=N*we,ee(b,2*C+2*k),b[2*C+2*k+1]+=L*we,ee(b,2*C+2*k+1),b[2*C+2*k+1]+=N*$e,ee(b,2*C+2*k+1),b[2*C+2*k+2]+=L*$e,ee(b,2*C+2*k+2)}for(C=0;C<R;C++)b[C]=b[2*C+1]<<16|b[2*C];for(C=R;C<2*R;C++)b[C]=0;return new f(b,0)};function ee(x,R){for(;(x[R]&65535)!=x[R];)x[R+1]+=x[R]>>>16,x[R]&=65535,R++}function te(x,R){this.g=x,this.h=R}function se(x,R){if(F(R))throw Error("division by zero");if(F(x))return new te(A,A);if(Q(x))return R=se(W(x),R),new te(W(R.g),W(R.h));if(Q(R))return R=se(x,W(R)),new te(W(R.g),R.h);if(30<x.g.length){if(Q(x)||Q(R))throw Error("slowDivide_ only works with positive integers.");for(var b=O,C=R;0>=C.l(x);)b=oe(b),C=oe(C);var k=me(b,1),L=me(C,1);for(C=me(C,2),b=me(b,2);!F(C);){var N=L.add(C);0>=N.l(x)&&(k=k.add(b),L=N),C=me(C,1),b=me(b,1)}return R=Y(x,k.j(R)),new te(k,R)}for(k=A;0<=x.l(R);){for(b=Math.max(1,Math.floor(x.m()/R.m())),C=Math.ceil(Math.log(b)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),L=g(b),N=L.j(R);Q(N)||0<N.l(x);)b-=C,L=g(b),N=L.j(R);F(L)&&(L=O),k=k.add(L),x=Y(x,N)}return new te(k,x)}s.A=function(x){return se(this,x).h},s.and=function(x){for(var R=Math.max(this.g.length,x.g.length),b=[],C=0;C<R;C++)b[C]=this.i(C)&x.i(C);return new f(b,this.h&x.h)},s.or=function(x){for(var R=Math.max(this.g.length,x.g.length),b=[],C=0;C<R;C++)b[C]=this.i(C)|x.i(C);return new f(b,this.h|x.h)},s.xor=function(x){for(var R=Math.max(this.g.length,x.g.length),b=[],C=0;C<R;C++)b[C]=this.i(C)^x.i(C);return new f(b,this.h^x.h)};function oe(x){for(var R=x.g.length+1,b=[],C=0;C<R;C++)b[C]=x.i(C)<<1|x.i(C-1)>>>31;return new f(b,x.h)}function me(x,R){var b=R>>5;R%=32;for(var C=x.g.length-b,k=[],L=0;L<C;L++)k[L]=0<R?x.i(L+b)>>>R|x.i(L+b+1)<<32-R:x.i(L+b);return new f(k,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=g,f.fromString=E,m_=f}).apply(typeof sT<"u"?sT:typeof self<"u"?self:typeof window<"u"?window:{});var Ah=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var JS,_u,eA,kh,Tm,tA,nA,iA;(function(){var s,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,_,y){return c==Array.prototype||c==Object.prototype||(c[_]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ah=="object"&&Ah];for(var _=0;_<c.length;++_){var y=c[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function o(c,_){if(_)e:{var y=r;c=c.split(".");for(var w=0;w<c.length-1;w++){var U=c[w];if(!(U in y))break e;y=y[U]}c=c[c.length-1],w=y[c],_=_(w),_!=w&&_!=null&&e(y,c,{configurable:!0,writable:!0,value:_})}}function u(c,_){c instanceof String&&(c+="");var y=0,w=!1,U={next:function(){if(!w&&y<c.length){var H=y++;return{value:_(H,c[H]),done:!1}}return w=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(_,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},p=this||self;function m(c){var _=typeof c;return _=_!="object"?_:c?Array.isArray(c)?"array":_:"null",_=="array"||_=="object"&&typeof c.length=="number"}function g(c){var _=typeof c;return _=="object"&&c!=null||_=="function"}function E(c,_,y){return c.call.apply(c.bind,arguments)}function A(c,_,y){if(!c)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,w),c.apply(_,U)}}return function(){return c.apply(_,arguments)}}function O(c,_,y){return O=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:A,O.apply(null,arguments)}function z(c,_){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),c.apply(this,w)}}function F(c,_){function y(){}y.prototype=_.prototype,c.aa=_.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(w,U,H){for(var ae=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)ae[ze-2]=arguments[ze];return _.prototype[U].apply(w,ae)}}function Q(c){const _=c.length;if(0<_){const y=Array(_);for(let w=0;w<_;w++)y[w]=c[w];return y}return[]}function W(c,_){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(m(w)){const U=c.length||0,H=w.length||0;c.length=U+H;for(let ae=0;ae<H;ae++)c[U+ae]=w[ae]}else c.push(w)}}class Y{constructor(_,y){this.i=_,this.j=y,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ee(c){return/^[\s\xa0]*$/.test(c)}function te(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function se(c){return se[" "](c),c}se[" "]=function(){};var oe=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function me(c,_,y){for(const w in c)_.call(y,c[w],w,c)}function x(c,_){for(const y in c)_.call(void 0,c[y],y,c)}function R(c){const _={};for(const y in c)_[y]=c[y];return _}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(c,_){let y,w;for(let U=1;U<arguments.length;U++){w=arguments[U];for(y in w)c[y]=w[y];for(let H=0;H<b.length;H++)y=b[H],Object.prototype.hasOwnProperty.call(w,y)&&(c[y]=w[y])}}function k(c){var _=1;c=c.split(":");const y=[];for(;0<_&&c.length;)y.push(c.shift()),_--;return c.length&&y.push(c.join(":")),y}function L(c){p.setTimeout(()=>{throw c},0)}function N(){var c=Ee;let _=null;return c.g&&(_=c.g,c.g=c.g.next,c.g||(c.h=null),_.next=null),_}class $e{constructor(){this.h=this.g=null}add(_,y){const w=we.get();w.set(_,y),this.h?this.h.next=w:this.g=w,this.h=w}}var we=new Y(()=>new ie,c=>c.reset());class ie{constructor(){this.next=this.g=this.h=null}set(_,y){this.h=_,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,de=!1,Ee=new $e,D=()=>{const c=p.Promise.resolve(void 0);fe=()=>{c.then(q)}};var q=()=>{for(var c;c=N();){try{c.h.call(c.g)}catch(y){L(y)}var _=we;_.j(c),100>_.h&&(_.h++,c.next=_.g,_.g=c)}de=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(c,_){this.type=c,this.g=this.target=_,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var re=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,_=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};p.addEventListener("test",y,_),p.removeEventListener("test",y,_)}catch{}return c}();function ve(c,_){if(le.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,w=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=_,_=c.relatedTarget){if(oe){e:{try{se(_.nodeName);var U=!0;break e}catch{}U=!1}U||(_=null)}}else y=="mouseover"?_=c.fromElement:y=="mouseout"&&(_=c.toElement);this.relatedTarget=_,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ce[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&ve.aa.h.call(this)}}F(ve,le);var Ce={2:"touch",3:"pen",4:"mouse"};ve.prototype.h=function(){ve.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ft="closure_listenable_"+(1e6*Math.random()|0),Be=0;function st(c,_,y,w,U){this.listener=c,this.proxy=null,this.src=_,this.type=y,this.capture=!!w,this.ha=U,this.key=++Be,this.da=this.fa=!1}function $(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ne(c){this.src=c,this.g={},this.h=0}Ne.prototype.add=function(c,_,y,w,U){var H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);var ae=Pt(c,_,w,U);return-1<ae?(_=c[ae],y||(_.fa=!1)):(_=new st(_,this.src,H,!!w,U),_.fa=y,c.push(_)),_};function Mt(c,_){var y=_.type;if(y in c.g){var w=c.g[y],U=Array.prototype.indexOf.call(w,_,void 0),H;(H=0<=U)&&Array.prototype.splice.call(w,U,1),H&&($(_),c.g[y].length==0&&(delete c.g[y],c.h--))}}function Pt(c,_,y,w){for(var U=0;U<c.length;++U){var H=c[U];if(!H.da&&H.listener==_&&H.capture==!!y&&H.ha==w)return U}return-1}var gi="closure_lm_"+(1e6*Math.random()|0),ni={};function ii(c,_,y,w,U){if(Array.isArray(_)){for(var H=0;H<_.length;H++)ii(c,_[H],y,w,U);return null}return y=Ju(y),c&&c[ft]?c.K(_,y,g(w)?!!w.capture:!1,U):$o(c,_,y,!1,w,U)}function $o(c,_,y,w,U,H){if(!_)throw Error("Invalid event type");var ae=g(U)?!!U.capture:!!U,ze=Xo(c);if(ze||(c[gi]=ze=new Ne(c)),y=ze.add(_,y,w,ae,H),y.proxy)return y;if(w=Ia(),y.proxy=w,w.src=c,w.listener=y,c.addEventListener)re||(U=ae),U===void 0&&(U=!1),c.addEventListener(_.toString(),w,U);else if(c.attachEvent)c.attachEvent(Oa(_.toString()),w);else if(c.addListener&&c.removeListener)c.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ia(){function c(y){return _.call(c.src,c.listener,y)}const _=xf;return c}function Na(c,_,y,w,U){if(Array.isArray(_))for(var H=0;H<_.length;H++)Na(c,_[H],y,w,U);else w=g(w)?!!w.capture:!!w,y=Ju(y),c&&c[ft]?(c=c.i,_=String(_).toString(),_ in c.g&&(H=c.g[_],y=Pt(H,y,w,U),-1<y&&($(H[y]),Array.prototype.splice.call(H,y,1),H.length==0&&(delete c.g[_],c.h--)))):c&&(c=Xo(c))&&(_=c.g[_.toString()],c=-1,_&&(c=Pt(_,y,w,U)),(y=-1<c?_[c]:null)&&br(y))}function br(c){if(typeof c!="number"&&c&&!c.da){var _=c.src;if(_&&_[ft])Mt(_.i,c);else{var y=c.type,w=c.proxy;_.removeEventListener?_.removeEventListener(y,w,c.capture):_.detachEvent?_.detachEvent(Oa(y),w):_.addListener&&_.removeListener&&_.removeListener(w),(y=Xo(_))?(Mt(y,c),y.h==0&&(y.src=null,_[gi]=null)):$(c)}}}function Oa(c){return c in ni?ni[c]:ni[c]="on"+c}function xf(c,_){if(c.da)c=!0;else{_=new ve(_,this);var y=c.listener,w=c.ha||c.src;c.fa&&br(c),c=y.call(w,_)}return c}function Xo(c){return c=c[gi],c instanceof Ne?c:null}var Tn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ju(c){return typeof c=="function"?c:(c[Tn]||(c[Tn]=function(_){return c.handleEvent(_)}),c[Tn])}function It(){ue.call(this),this.i=new Ne(this),this.M=this,this.F=null}F(It,ue),It.prototype[ft]=!0,It.prototype.removeEventListener=function(c,_,y,w){Na(this,c,_,y,w)};function Lt(c,_){var y,w=c.F;if(w)for(y=[];w;w=w.F)y.push(w);if(c=c.M,w=_.type||_,typeof _=="string")_=new le(_,c);else if(_ instanceof le)_.target=_.target||c;else{var U=_;_=new le(w,c),C(_,U)}if(U=!0,y)for(var H=y.length-1;0<=H;H--){var ae=_.g=y[H];U=Hi(ae,w,!0,_)&&U}if(ae=_.g=c,U=Hi(ae,w,!0,_)&&U,U=Hi(ae,w,!1,_)&&U,y)for(H=0;H<y.length;H++)ae=_.g=y[H],U=Hi(ae,w,!1,_)&&U}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var c=this.i,_;for(_ in c.g){for(var y=c.g[_],w=0;w<y.length;w++)$(y[w]);delete c.g[_],c.h--}}this.F=null},It.prototype.K=function(c,_,y,w){return this.i.add(String(c),_,!1,y,w)},It.prototype.L=function(c,_,y,w){return this.i.add(String(c),_,!0,y,w)};function Hi(c,_,y,w){if(_=c.i.g[String(_)],!_)return!0;_=_.concat();for(var U=!0,H=0;H<_.length;++H){var ae=_[H];if(ae&&!ae.da&&ae.capture==y){var ze=ae.listener,Ot=ae.ha||ae.src;ae.fa&&Mt(c.i,ae),U=ze.call(Ot,w)!==!1&&U}}return U&&!w.defaultPrevented}function ec(c,_,y){if(typeof c=="function")y&&(c=O(c,y));else if(c&&typeof c.handleEvent=="function")c=O(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:p.setTimeout(c,_||0)}function Zo(c){c.g=ec(()=>{c.g=null,c.i&&(c.i=!1,Zo(c))},c.l);const _=c.h;c.h=null,c.m.apply(null,_)}class kf extends ue{constructor(_,y){super(),this.m=_,this.l=y,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Zo(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cr(c){ue.call(this),this.h=c,this.g={}}F(Cr,ue);var Cs=[];function rn(c){me(c.g,function(_,y){this.g.hasOwnProperty(y)&&br(_)},c),c.g={}}Cr.prototype.N=function(){Cr.aa.N.call(this),rn(this)},Cr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jo=p.JSON.stringify,yi=p.JSON.parse,_n=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function el(){}el.prototype.h=null;function tc(c){return c.h||(c.h=c.i())}function nc(){}var vi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rs(){le.call(this,"d")}F(Rs,le);function si(){le.call(this,"c")}F(si,le);var Un={},Is=null;function Da(){return Is=Is||new It}Un.La="serverreachability";function tl(c){le.call(this,Un.La,c)}F(tl,le);function Ns(c){const _=Da();Lt(_,new tl(_))}Un.STAT_EVENT="statevent";function xa(c,_){le.call(this,Un.STAT_EVENT,c),this.stat=_}F(xa,le);function Tt(c){const _=Da();Lt(_,new xa(_,c))}Un.Ma="timingevent";function ic(c,_){le.call(this,Un.Ma,c),this.size=_}F(ic,le);function Os(c,_){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},_)}function Ds(){this.g=!0}Ds.prototype.xa=function(){this.g=!1};function sc(c,_,y,w,U,H){c.info(function(){if(c.g)if(H)for(var ae="",ze=H.split("&"),Ot=0;Ot<ze.length;Ot++){var He=ze[Ot].split("=");if(1<He.length){var jt=He[0];He=He[1];var Dt=jt.split("_");ae=2<=Dt.length&&Dt[1]=="type"?ae+(jt+"="+He+"&"):ae+(jt+"=redacted&")}}else ae=null;else ae=H;return"XMLHTTP REQ ("+w+") [attempt "+U+"]: "+_+`
`+y+`
`+ae})}function rc(c,_,y,w,U,H,ae){c.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+U+"]: "+_+`
`+y+`
`+H+" "+ae})}function xs(c,_,y,w){c.info(function(){return"XMLHTTP TEXT ("+_+"): "+Vt(c,y)+(w?" "+w:"")})}function Ei(c,_){c.info(function(){return"TIMEOUT: "+_})}Ds.prototype.info=function(){};function Vt(c,_){if(!c.g)return _;if(!_)return null;try{var y=JSON.parse(_);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var w=y[c];if(!(2>w.length)){var U=w[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ae=1;ae<U.length;ae++)U[ae]=""}}}}return Jo(y)}catch{return _}}var Nt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Rr;function ka(){}F(ka,el),ka.prototype.g=function(){return new XMLHttpRequest},ka.prototype.i=function(){return{}},Rr=new ka;function Ti(c,_,y,w){this.j=c,this.i=_,this.l=y,this.R=w||1,this.U=new Cr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nl}function nl(){this.i=null,this.g="",this.h=!1}var ks={},Ir={};function ri(c,_,y){c.L=1,c.v=Dr(_t(_)),c.m=y,c.P=!0,qi(c,null)}function qi(c,_){c.F=Date.now(),dt(c),c.A=_t(c.v);var y=c.A,w=c.R;Array.isArray(w)||(w=[String(w)]),Wi(y.i,"t",w),c.C=0,y=c.j.J,c.h=new nl,c.g=vc(c.j,y?_:null,!c.m),0<c.O&&(c.M=new kf(O(c.Y,c,c.g),c.O)),_=c.U,y=c.g,w=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(Cs[0]=U.toString()),U=Cs);for(var H=0;H<U.length;H++){var ae=ii(y,U[H],w||_.handleEvent,!1,_.h||_);if(!ae)break;_.g[ae.key]=ae}_=c.H?R(c.H):{},c.m?(c.u||(c.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,_)):(c.u="GET",c.g.ea(c.A,c.u,null,_)),Ns(),sc(c.i,c.u,c.A,c.l,c.R,c.m)}Ti.prototype.ca=function(c){c=c.target;const _=this.M;_&&Fn(c)==3?_.j():this.Y(c)},Ti.prototype.Y=function(c){try{if(c==this.g)e:{const Dt=Fn(this.g);var _=this.g.Ba();const Xi=this.g.Z();if(!(3>Dt)&&(Dt!=3||this.g&&(this.h.h||this.g.oa()||hc(this.g)))){this.J||Dt!=4||_==7||(_==8||0>=Xi?Ns(3):Ns(2)),Ma(this);var y=this.g.Z();this.X=y;t:if(Ms(this)){var w=hc(this.g);c="";var U=w.length,H=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sn(this),In(this);var ae="";break t}this.h.i=new p.TextDecoder}for(_=0;_<U;_++)this.h.h=!0,c+=this.h.i.decode(w[_],{stream:!(H&&_==U-1)});w.length=0,this.h.g+=c,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=y==200,rc(this.i,this.u,this.A,this.l,this.R,Dt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,Ot=this.g;if((ze=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(ze)){var He=ze;break t}}He=null}if(y=He)xs(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nn(this,y);else{this.o=!1,this.s=3,Tt(12),Sn(this),In(this);break e}}if(this.P){y=!0;let Yt;for(;!this.J&&this.C<ae.length;)if(Yt=Ps(this,ae),Yt==Ir){Dt==4&&(this.s=4,Tt(14),y=!1),xs(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==ks){this.s=4,Tt(15),xs(this.i,this.l,ae,"[Invalid Chunk]"),y=!1;break}else xs(this.i,this.l,Yt,null),Nn(this,Yt);if(Ms(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Dt!=4||ae.length!=0||this.h.h||(this.s=1,Tt(16),y=!1),this.o=this.o&&y,!y)xs(this.i,this.l,ae,"[Invalid Chunked Response]"),Sn(this),In(this);else if(0<ae.length&&!this.W){this.W=!0;var jt=this.j;jt.g==this&&jt.ba&&!jt.M&&(jt.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),Ur(jt),jt.M=!0,Tt(11))}}else xs(this.i,this.l,ae,null),Nn(this,ae);Dt==4&&Sn(this),this.o&&!this.J&&(Dt==4?_c(this.j,this):(this.o=!1,dt(this)))}else jf(this.g),y==400&&0<ae.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),Sn(this),In(this)}}}catch{}finally{}};function Ms(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Ps(c,_){var y=c.C,w=_.indexOf(`
`,y);return w==-1?Ir:(y=Number(_.substring(y,w)),isNaN(y)?ks:(w+=1,w+y>_.length?Ir:(_=_.slice(w,w+y),c.C=w+y,_)))}Ti.prototype.cancel=function(){this.J=!0,Sn(this)};function dt(c){c.S=Date.now()+c.I,il(c,c.I)}function il(c,_){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Os(O(c.ba,c),_)}function Ma(c){c.B&&(p.clearTimeout(c.B),c.B=null)}Ti.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Ei(this.i,this.A),this.L!=2&&(Ns(),Tt(17)),Sn(this),this.s=2,In(this)):il(this,this.S-c)};function In(c){c.j.G==0||c.J||_c(c.j,c)}function Sn(c){Ma(c);var _=c.M;_&&typeof _.ma=="function"&&_.ma(),c.M=null,rn(c.U),c.g&&(_=c.g,c.g=null,_.abort(),_.ma())}function Nn(c,_){try{var y=c.j;if(y.G!=0&&(y.g==c||Ls(y.h,c))){if(!c.K&&Ls(y.h,c)&&y.G==3){try{var w=y.Da.g.parse(_)}catch{w=null}if(Array.isArray(w)&&w.length==3){var U=w;if(U[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)qa(y),Ha(y);else break e;pl(y),Tt(18)}}else y.za=U[1],0<y.za-y.T&&37500>U[2]&&y.F&&y.v==0&&!y.C&&(y.C=Os(O(y.Za,y),6e3));if(1>=ac(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else $i(y,11)}else if((c.K||y.g==c)&&qa(y),!ee(_))for(U=y.Da.g.parse(_),_=0;_<U.length;_++){let He=U[_];if(y.T=He[0],He=He[1],y.G==2)if(He[0]=="c"){y.K=He[1],y.ia=He[2];const jt=He[3];jt!=null&&(y.la=jt,y.j.info("VER="+y.la));const Dt=He[4];Dt!=null&&(y.Aa=Dt,y.j.info("SVER="+y.Aa));const Xi=He[5];Xi!=null&&typeof Xi=="number"&&0<Xi&&(w=1.5*Xi,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const Yt=c.g;if(Yt){const Ii=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ii){var H=w.h;H.g||Ii.indexOf("spdy")==-1&&Ii.indexOf("quic")==-1&&Ii.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Vs(H,H.h),H.h=null))}if(w.D){const _l=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;_l&&(w.ya=_l,We(w.I,w.D,_l))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var ae=c;if(w.qa=yc(w,w.J?w.ia:null,w.W),ae.K){jn(w.h,ae);var ze=ae,Ot=w.L;Ot&&(ze.I=Ot),ze.B&&(Ma(ze),dt(ze)),w.g=ae}else pc(w);0<y.i.length&&Fa(y)}else He[0]!="stop"&&He[0]!="close"||$i(y,7);else y.G==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?$i(y,7):fl(y):He[0]!="noop"&&y.l&&y.l.ta(He),y.v=0)}}Ns(4)}catch{}}var Mf=class{constructor(c,_){this.g=c,this.map=_}};function sl(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rl(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ac(c){return c.h?1:c.g?c.g.size:0}function Ls(c,_){return c.h?c.h==_:c.g?c.g.has(_):!1}function Vs(c,_){c.g?c.g.add(_):c.h=_}function jn(c,_){c.h&&c.h==_?c.h=null:c.g&&c.g.has(_)&&c.g.delete(_)}sl.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function gn(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let _=c.i;for(const y of c.g.values())_=_.concat(y.D);return _}return Q(c.i)}function oc(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var _=[],y=c.length,w=0;w<y;w++)_.push(c[w]);return _}_=[],y=0;for(w in c)_[y++]=c[w];return _}function Pf(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var _=[];c=c.length;for(var y=0;y<c;y++)_.push(y);return _}_=[],y=0;for(const w in c)_[y++]=w;return _}}}function Nr(c,_){if(c.forEach&&typeof c.forEach=="function")c.forEach(_,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,_,void 0);else for(var y=Pf(c),w=oc(c),U=w.length,H=0;H<U;H++)_.call(void 0,w[H],y&&y[H],c)}var al=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pa(c,_){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var w=c[y].indexOf("="),U=null;if(0<=w){var H=c[y].substring(0,w);U=c[y].substring(w+1)}else H=c[y];_(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Gi(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Gi){this.h=c.h,Us(this,c.j),this.o=c.o,this.g=c.g,Or(this,c.s),this.l=c.l;var _=c.i,y=new Si;y.i=_.i,_.g&&(y.g=new Map(_.g),y.h=_.h),La(this,y),this.m=c.m}else c&&(_=String(c).match(al))?(this.h=!1,Us(this,_[1]||"",!0),this.o=js(_[2]||""),this.g=js(_[3]||"",!0),Or(this,_[4]),this.l=js(_[5]||"",!0),La(this,_[6]||"",!0),this.m=js(_[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}Gi.prototype.toString=function(){var c=[],_=this.j;_&&c.push(Bn(_,ol,!0),":");var y=this.g;return(y||_=="file")&&(c.push("//"),(_=this.o)&&c.push(Bn(_,ol,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(Bn(y,y.charAt(0)=="/"?ll:lc,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",Bn(y,Uf)),c.join("")};function _t(c){return new Gi(c)}function Us(c,_,y){c.j=y?js(_,!0):_,c.j&&(c.j=c.j.replace(/:$/,""))}function Or(c,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);c.s=_}else c.s=null}function La(c,_,y){_ instanceof Si?(c.i=_,ul(c.i,c.h)):(y||(_=Bn(_,Vf)),c.i=new Si(_,c.h))}function We(c,_,y){c.i.set(_,y)}function Dr(c){return We(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function js(c,_){return c?_?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Bn(c,_,y){return typeof c=="string"?(c=encodeURI(c).replace(_,Lf),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Lf(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ol=/[#\/\?@]/g,lc=/[#\?:]/g,ll=/[#\?]/g,Vf=/[#\?@]/g,Uf=/#/g;function Si(c,_){this.h=this.g=null,this.i=c||null,this.j=!!_}function zn(c){c.g||(c.g=new Map,c.h=0,c.i&&Pa(c.i,function(_,y){c.add(decodeURIComponent(_.replace(/\+/g," ")),y)}))}s=Si.prototype,s.add=function(c,_){zn(this),this.i=null,c=Yi(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(_),this.h+=1,this};function Va(c,_){zn(c),_=Yi(c,_),c.g.has(_)&&(c.i=null,c.h-=c.g.get(_).length,c.g.delete(_))}function Ki(c,_){return zn(c),_=Yi(c,_),c.g.has(_)}s.forEach=function(c,_){zn(this),this.g.forEach(function(y,w){y.forEach(function(U){c.call(_,U,w,this)},this)},this)},s.na=function(){zn(this);const c=Array.from(this.g.values()),_=Array.from(this.g.keys()),y=[];for(let w=0;w<_.length;w++){const U=c[w];for(let H=0;H<U.length;H++)y.push(_[w])}return y},s.V=function(c){zn(this);let _=[];if(typeof c=="string")Ki(this,c)&&(_=_.concat(this.g.get(Yi(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)_=_.concat(c[y])}return _},s.set=function(c,_){return zn(this),this.i=null,c=Yi(this,c),Ki(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[_]),this.h+=1,this},s.get=function(c,_){return c?(c=this.V(c),0<c.length?String(c[0]):_):_};function Wi(c,_,y){Va(c,_),0<y.length&&(c.i=null,c.g.set(Yi(c,_),Q(y)),c.h+=y.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],_=Array.from(this.g.keys());for(var y=0;y<_.length;y++){var w=_[y];const H=encodeURIComponent(String(w)),ae=this.V(w);for(w=0;w<ae.length;w++){var U=H;ae[w]!==""&&(U+="="+encodeURIComponent(String(ae[w]))),c.push(U)}}return this.i=c.join("&")};function Yi(c,_){return _=String(_),c.j&&(_=_.toLowerCase()),_}function ul(c,_){_&&!c.j&&(zn(c),c.i=null,c.g.forEach(function(y,w){var U=w.toLowerCase();w!=U&&(Va(this,w),Wi(this,U,y))},c)),c.j=_}function uc(c,_){const y=new Ds;if(p.Image){const w=new Image;w.onload=z(Hn,y,"TestLoadImage: loaded",!0,_,w),w.onerror=z(Hn,y,"TestLoadImage: error",!1,_,w),w.onabort=z(Hn,y,"TestLoadImage: abort",!1,_,w),w.ontimeout=z(Hn,y,"TestLoadImage: timeout",!1,_,w),p.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=c}else _(!1)}function xr(c,_){const y=new Ds,w=new AbortController,U=setTimeout(()=>{w.abort(),Hn(y,"TestPingServer: timeout",!1,_)},1e4);fetch(c,{signal:w.signal}).then(H=>{clearTimeout(U),H.ok?Hn(y,"TestPingServer: ok",!0,_):Hn(y,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(U),Hn(y,"TestPingServer: error",!1,_)})}function Hn(c,_,y,w,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),w(y)}catch{}}function kr(){this.g=new _n}function Ai(c,_,y){const w=y||"";try{Nr(c,function(U,H){let ae=U;g(U)&&(ae=Jo(U)),_.push(w+H+"="+encodeURIComponent(ae))})}catch(U){throw _.push(w+"type="+encodeURIComponent("_badmap")),U}}function Bs(c){this.l=c.Ub||null,this.j=c.eb||!1}F(Bs,el),Bs.prototype.g=function(){return new Qi(this.l,this.j)},Bs.prototype.i=function(c){return function(){return c}}({});function Qi(c,_){It.call(this),this.D=c,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(Qi,It),s=Qi.prototype,s.open=function(c,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=_,this.readyState=1,bi(this)},s.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(_.body=c),(this.D||p).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wi(this)),this.readyState=0},s.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cl(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function cl(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}s.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var _=c.value?c.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!c.done}))&&(this.response=this.responseText+=_)}c.done?wi(this):bi(this),this.readyState==3&&cl(this)}},s.Ra=function(c){this.g&&(this.response=this.responseText=c,wi(this))},s.Qa=function(c){this.g&&(this.response=c,wi(this))},s.ga=function(){this.g&&wi(this)};function wi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,bi(c)}s.setRequestHeader=function(c,_){this.u.append(c,_)},s.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],_=this.h.entries();for(var y=_.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=_.next();return c.join(`\r
`)};function bi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function hl(c){let _="";return me(c,function(y,w){_+=w,_+=":",_+=y,_+=`\r
`}),_}function Ut(c,_,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=hl(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):We(c,_,y))}function Xe(c){It.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(Xe,It);var Ua=/^https?$/i,Mr=["POST","PUT"];s=Xe.prototype,s.Ha=function(c){this.J=c},s.ea=function(c,_,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);_=_?_.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Rr.g(),this.v=this.o?tc(this.o):tc(Rr),this.g.onreadystatechange=O(this.Ea,this);try{this.B=!0,this.g.open(_,String(c),!0),this.B=!1}catch(H){cc(this,H);return}if(c=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var U in w)y.set(U,w[U]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const H of w.keys())y.set(H,w.get(H));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(H=>H.toLowerCase()=="content-type"),U=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Mr,_,void 0))||w||U||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ae]of y)this.g.setRequestHeader(H,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pr(this),this.u=!0,this.g.send(c),this.u=!1}catch(H){cc(this,H)}};function cc(c,_){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=_,c.m=5,ja(c),Ci(c)}function ja(c){c.A||(c.A=!0,Lt(c,"complete"),Lt(c,"error"))}s.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Lt(this,"complete"),Lt(this,"abort"),Ci(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ci(this,!0)),Xe.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?Ba(this):this.bb())},s.bb=function(){Ba(this)};function Ba(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Fn(c)!=4||c.Z()!=2)){if(c.u&&Fn(c)==4)ec(c.Ea,0,c);else if(Lt(c,"readystatechange"),Fn(c)==4){c.h=!1;try{const ae=c.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var y;if(!(y=_)){var w;if(w=ae===0){var U=String(c.D).match(al)[1]||null;!U&&p.self&&p.self.location&&(U=p.self.location.protocol.slice(0,-1)),w=!Ua.test(U?U.toLowerCase():"")}y=w}if(y)Lt(c,"complete"),Lt(c,"success");else{c.m=6;try{var H=2<Fn(c)?c.g.statusText:""}catch{H=""}c.l=H+" ["+c.Z()+"]",ja(c)}}finally{Ci(c)}}}}function Ci(c,_){if(c.g){Pr(c);const y=c.g,w=c.v[0]?()=>{}:null;c.g=null,c.v=null,_||Lt(c,"ready");try{y.onreadystatechange=w}catch{}}}function Pr(c){c.I&&(p.clearTimeout(c.I),c.I=null)}s.isActive=function(){return!!this.g};function Fn(c){return c.g?c.g.readyState:0}s.Z=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(c){if(this.g){var _=this.g.responseText;return c&&_.indexOf(c)==0&&(_=_.substring(c.length)),yi(_)}};function hc(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function jf(c){const _={};c=(c.g&&2<=Fn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<c.length;w++){if(ee(c[w]))continue;var y=k(c[w]);const U=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const H=_[U]||[];_[U]=H,H.push(y)}x(_,function(w){return w.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Lr(c,_,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||_}function za(c){this.Aa=0,this.i=[],this.j=new Ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Lr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Lr("baseRetryDelayMs",5e3,c),this.cb=Lr("retryDelaySeedMs",1e4,c),this.Wa=Lr("forwardChannelMaxRetries",2,c),this.wa=Lr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new sl(c&&c.concurrentRequestLimit),this.Da=new kr,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=za.prototype,s.la=8,s.G=1,s.connect=function(c,_,y,w){Tt(0),this.W=c,this.H=_||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=yc(this,null,this.W),Fa(this)};function fl(c){if(fc(c),c.G==3){var _=c.U++,y=_t(c.I);if(We(y,"SID",c.K),We(y,"RID",_),We(y,"TYPE","terminate"),Vr(c,y),_=new Ti(c,c.j,_),_.L=2,_.v=Dr(_t(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(_.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=_.v,y=!0),y||(_.g=vc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),dt(_)}gc(c)}function Ha(c){c.g&&(Ur(c),c.g.cancel(),c.g=null)}function fc(c){Ha(c),c.u&&(p.clearTimeout(c.u),c.u=null),qa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function Fa(c){if(!rl(c.h)&&!c.s){c.s=!0;var _=c.Ga;fe||D(),de||(fe(),de=!0),Ee.add(_,c),c.B=0}}function Bf(c,_){return ac(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=_.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Os(O(c.Ga,c,_),ml(c,c.B)),c.B++,!0)}s.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new Ti(this,this.j,c);let H=this.o;if(this.S&&(H?(H=R(H),C(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var _=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(_+=w,4096<_){_=y;break e}if(_===4096||y===this.i.length-1){_=y+1;break e}}_=1e3}else _=1e3;_=dc(this,U,_),y=_t(this.I),We(y,"RID",c),We(y,"CVER",22),this.D&&We(y,"X-HTTP-Session-Id",this.D),Vr(this,y),H&&(this.O?_="headers="+encodeURIComponent(String(hl(H)))+"&"+_:this.m&&Ut(y,this.m,H)),Vs(this.h,U),this.Ua&&We(y,"TYPE","init"),this.P?(We(y,"$req",_),We(y,"SID","null"),U.T=!0,ri(U,y,null)):ri(U,y,_),this.G=2}}else this.G==3&&(c?dl(this,c):this.i.length==0||rl(this.h)||dl(this))};function dl(c,_){var y;_?y=_.l:y=c.U++;const w=_t(c.I);We(w,"SID",c.K),We(w,"RID",y),We(w,"AID",c.T),Vr(c,w),c.m&&c.o&&Ut(w,c.m,c.o),y=new Ti(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),_&&(c.i=_.D.concat(c.i)),_=dc(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Vs(c.h,y),ri(y,w,_)}function Vr(c,_){c.H&&me(c.H,function(y,w){We(_,w,y)}),c.l&&Nr({},function(y,w){We(_,w,y)})}function dc(c,_,y){y=Math.min(c.i.length,y);var w=c.l?O(c.l.Na,c.l,c):null;e:{var U=c.i;let H=-1;for(;;){const ae=["count="+y];H==-1?0<y?(H=U[0].g,ae.push("ofs="+H)):H=0:ae.push("ofs="+H);let ze=!0;for(let Ot=0;Ot<y;Ot++){let He=U[Ot].g;const jt=U[Ot].map;if(He-=H,0>He)H=Math.max(0,U[Ot].g-100),ze=!1;else try{Ai(jt,ae,"req"+He+"_")}catch{w&&w(jt)}}if(ze){w=ae.join("&");break e}}}return c=c.i.splice(0,y),_.D=c,w}function pc(c){if(!c.g&&!c.u){c.Y=1;var _=c.Fa;fe||D(),de||(fe(),de=!0),Ee.add(_,c),c.v=0}}function pl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Os(O(c.Fa,c),ml(c,c.v)),c.v++,!0)}s.Fa=function(){if(this.u=null,mc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Os(O(this.ab,this),c)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Ha(this),mc(this))};function Ur(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function mc(c){c.g=new Ti(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var _=_t(c.qa);We(_,"RID","rpc"),We(_,"SID",c.K),We(_,"AID",c.T),We(_,"CI",c.F?"0":"1"),!c.F&&c.ja&&We(_,"TO",c.ja),We(_,"TYPE","xmlhttp"),Vr(c,_),c.m&&c.o&&Ut(_,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=Dr(_t(_)),y.m=null,y.P=!0,qi(y,c)}s.Za=function(){this.C!=null&&(this.C=null,Ha(this),pl(this),Tt(19))};function qa(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function _c(c,_){var y=null;if(c.g==_){qa(c),Ur(c),c.g=null;var w=2}else if(Ls(c.h,_))y=_.D,jn(c.h,_),w=1;else return;if(c.G!=0){if(_.o)if(w==1){y=_.m?_.m.length:0,_=Date.now()-_.F;var U=c.B;w=Da(),Lt(w,new ic(w,y)),Fa(c)}else pc(c);else if(U=_.s,U==3||U==0&&0<_.X||!(w==1&&Bf(c,_)||w==2&&pl(c)))switch(y&&0<y.length&&(_=c.h,_.i=_.i.concat(y)),U){case 1:$i(c,5);break;case 4:$i(c,10);break;case 3:$i(c,6);break;default:$i(c,2)}}}function ml(c,_){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*_}function $i(c,_){if(c.j.info("Error code "+_),_==2){var y=O(c.fb,c),w=c.Xa;const U=!w;w=new Gi(w||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Us(w,"https"),Dr(w),U?uc(w.toString(),y):xr(w.toString(),y)}else Tt(2);c.G=0,c.l&&c.l.sa(_),gc(c),fc(c)}s.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function gc(c){if(c.G=0,c.ka=[],c.l){const _=gn(c.h);(_.length!=0||c.i.length!=0)&&(W(c.ka,_),W(c.ka,c.i),c.h.i.length=0,Q(c.i),c.i.length=0),c.l.ra()}}function yc(c,_,y){var w=y instanceof Gi?_t(y):new Gi(y);if(w.g!="")_&&(w.g=_+"."+w.g),Or(w,w.s);else{var U=p.location;w=U.protocol,_=_?_+"."+U.hostname:U.hostname,U=+U.port;var H=new Gi(null);w&&Us(H,w),_&&(H.g=_),U&&Or(H,U),y&&(H.l=y),w=H}return y=c.D,_=c.ya,y&&_&&We(w,y,_),We(w,"VER",c.la),Vr(c,w),w}function vc(c,_,y){if(_&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=c.Ca&&!c.pa?new Xe(new Bs({eb:y})):new Xe(c.pa),_.Ha(c.J),_}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ec(){}s=Ec.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function Ga(){}Ga.prototype.g=function(c,_){return new yn(c,_)};function yn(c,_){It.call(this),this.g=new za(_),this.l=c,this.h=_&&_.messageUrlParams||null,c=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(c?c["X-WebChannel-Content-Type"]=_.messageContentType:c={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(c?c["X-WebChannel-Client-Profile"]=_.va:c={"X-WebChannel-Client-Profile":_.va}),this.g.S=c,(c=_&&_.Sb)&&!ee(c)&&(this.g.m=c),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ee(_)&&(this.g.D=_,c=this.h,c!==null&&_ in c&&(c=this.h,_ in c&&delete c[_])),this.j=new Ri(this)}F(yn,It),yn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yn.prototype.close=function(){fl(this.g)},yn.prototype.o=function(c){var _=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=Jo(c),c=y);_.i.push(new Mf(_.Ya++,c)),_.G==3&&Fa(_)},yn.prototype.N=function(){this.g.l=null,delete this.j,fl(this.g),delete this.g,yn.aa.N.call(this)};function Tc(c){Rs.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var _=c.__sm__;if(_){e:{for(const y in _){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,_=_!==null&&c in _?_[c]:void 0),this.data=_}else this.data=c}F(Tc,Rs);function Sc(){si.call(this),this.status=1}F(Sc,si);function Ri(c){this.g=c}F(Ri,Ec),Ri.prototype.ua=function(){Lt(this.g,"a")},Ri.prototype.ta=function(c){Lt(this.g,new Tc(c))},Ri.prototype.sa=function(c){Lt(this.g,new Sc)},Ri.prototype.ra=function(){Lt(this.g,"b")},Ga.prototype.createWebChannel=Ga.prototype.g,yn.prototype.send=yn.prototype.o,yn.prototype.open=yn.prototype.m,yn.prototype.close=yn.prototype.close,iA=function(){return new Ga},nA=function(){return Da()},tA=Un,Tm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nt.NO_ERROR=0,Nt.TIMEOUT=8,Nt.HTTP_ERROR=6,kh=Nt,Fi.COMPLETE="complete",eA=Fi,nc.EventType=vi,vi.OPEN="a",vi.CLOSE="b",vi.ERROR="c",vi.MESSAGE="d",It.prototype.listen=It.prototype.K,_u=nc,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,JS=Xe}).apply(typeof Ah<"u"?Ah:typeof self<"u"?self:typeof window<"u"?window:{});const rT="@firebase/firestore",aT="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new mf("@firebase/firestore");function So(){return ya.logLevel}function _e(s,...e){if(ya.logLevel<=Pe.DEBUG){const t=e.map(__);ya.debug(`Firestore (${Yo}): ${s}`,...t)}}function va(s,...e){if(ya.logLevel<=Pe.ERROR){const t=e.map(__);ya.error(`Firestore (${Yo}): ${s}`,...t)}}function wf(s,...e){if(ya.logLevel<=Pe.WARN){const t=e.map(__);ya.warn(`Firestore (${Yo}): ${s}`,...t)}}function __(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(s="Unexpected state"){const e=`FIRESTORE (${Yo}) INTERNAL ASSERTION FAILED: `+s;throw va(e),new Error(e)}function Et(s,e){s||Le()}function ot(s,e){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class be extends ws{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(cn.UNAUTHENTICATED))}shutdown(){}}class YD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class QD{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Et(this.o===void 0);let r=this.i;const o=m=>this.i!==r?(r=this.i,t(m)):Promise.resolve();let u=new la;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new la,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const m=u;e.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},p=m=>{_e("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(_e("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new la)}},0),f()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(_e("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Et(typeof r.accessToken=="string"),new sA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Et(e===null||typeof e=="string"),new cn(e)}}class $D{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class XD{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new $D(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZD{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ln(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Et(this.o===void 0);const r=u=>{u.error!=null&&_e("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.R;return this.R=u.token,_e("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>r(u))};const o=u=>{_e("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):_e("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new oT(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Et(typeof t.token=="string"),this.R=t.token,new oT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JD(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<s;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=JD(40);for(let u=0;u<o.length;++u)r.length<20&&o[u]<t&&(r+=e.charAt(o[u]%62))}return r}}function Je(s,e){return s<e?-1:s>e?1:0}function Vo(s,e,t){return s.length===e.length&&s.every((r,o)=>t(r,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=-62135596800,uT=1e6;class Wt{static now(){return Wt.fromMillis(Date.now())}static fromDate(e){return Wt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*uT);return new Wt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new be(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new be(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<lT)throw new be(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new be(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uT}_compareTo(e){return this.seconds===e.seconds?Je(this.nanoseconds,e.nanoseconds):Je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-lT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{static fromTimestamp(e){return new ht(e)}static min(){return new ht(new Wt(0,0))}static max(){return new ht(new Wt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="__name__";class Mi{constructor(e,t,r){t===void 0?t=0:t>e.length&&Le(),r===void 0?r=e.length-t:r>e.length-t&&Le(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Mi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const u=Mi.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=Mi.isNumericId(e),o=Mi.isNumericId(t);return r&&!o?-1:!r&&o?1:r&&o?Mi.extractNumericId(e).compare(Mi.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return m_.fromString(e.substring(4,e.length-2))}}class Rt extends Mi{construct(e,t,r){return new Rt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new be(ne.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(o=>o.length>0))}return new Rt(t)}static emptyPath(){return new Rt([])}}const e2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nn extends Mi{construct(e,t,r){return new nn(e,t,r)}static isValidIdentifier(e){return e2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cT}static keyField(){return new nn([cT])}static fromServerFormat(e){const t=[];let r="",o=0;const u=()=>{if(r.length===0)throw new be(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let f=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new be(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new be(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=m,o+=2}else p==="`"?(f=!f,o++):p!=="."||f?(r+=p,o++):(u(),o++)}if(u(),f)throw new be(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nn(t)}static emptyPath(){return new nn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.path=e}static fromPath(e){return new xe(Rt.fromString(e))}static fromName(e){return new xe(Rt.fromString(e).popFirst(5))}static empty(){return new xe(Rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Rt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new xe(new Rt(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=-1;function t2(s,e){const t=s.toTimestamp().seconds,r=s.toTimestamp().nanoseconds+1,o=ht.fromTimestamp(r===1e9?new Wt(t+1,0):new Wt(t,r));return new vr(o,xe.empty(),e)}function n2(s){return new vr(s.readTime,s.key,xu)}class vr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new vr(ht.min(),xe.empty(),xu)}static max(){return new vr(ht.max(),xe.empty(),xu)}}function i2(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=xe.comparator(s.documentKey,e.documentKey),t!==0?t:Je(s.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class r2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g_(s){if(s.code!==ne.FAILED_PRECONDITION||s.message!==s2)throw s;_e("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((r,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(r,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(r,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,r)=>{t(e)})}static reject(e){return new Z((t,r)=>{r(e)})}static waitFor(e){return new Z((t,r)=>{let o=0,u=0,f=!1;e.forEach(p=>{++o,p.next(()=>{++u,f&&u===o&&t()},m=>r(m))}),f=!0,u===o&&t()})}static or(e){let t=Z.resolve(!1);for(const r of e)t=t.next(o=>o?Z.resolve(o):r());return t}static forEach(e,t){const r=[];return e.forEach((o,u)=>{r.push(t.call(this,o,u))}),this.waitFor(r)}static mapArray(e,t){return new Z((r,o)=>{const u=e.length,f=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;t(e[g]).next(E=>{f[g]=E,++p,p===u&&r(f)},E=>o(E))}})}static doWhile(e,t){return new Z((r,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):r()};u()})}}function a2(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Yu(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}y_.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=-1;function E_(s){return s==null}function ef(s){return s===0&&1/s==-1/0}function o2(s){return typeof s=="number"&&Number.isInteger(s)&&!ef(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="";function l2(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=hT(e)),e=u2(s.get(t),e);return hT(e)}function u2(s,e){let t=e;const r=s.length;for(let o=0;o<r;o++){const u=s.charAt(o);switch(u){case"\0":t+="";break;case aA:t+="";break;default:t+=u}}return t}function hT(s){return s+aA+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function Qo(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function oA(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t){this.comparator=e,this.root=t||Jt.EMPTY}insert(e,t){return new Rn(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Jt.BLACK,null,null))}remove(e){return new Rn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wh(this.root,e,this.comparator,!1)}getReverseIterator(){return new wh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wh(this.root,e,this.comparator,!0)}}class wh{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?r(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jt{constructor(e,t,r,o,u){this.key=e,this.value=t,this.color=r??Jt.RED,this.left=o??Jt.EMPTY,this.right=u??Jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,u){return new Jt(e??this.key,t??this.value,r??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const u=r(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,r),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Jt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Le();const e=this.left.check();if(e!==this.right.check())throw Le();return e+(this.isRed()?0:1)}}Jt.EMPTY=null,Jt.RED=!0,Jt.BLACK=!1;Jt.EMPTY=new class{constructor(){this.size=0}get key(){throw Le()}get value(){throw Le()}get color(){throw Le()}get left(){throw Le()}get right(){throw Le()}copy(e,t,r,o,u){return this}insert(e,t,r){return new Jt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.comparator=e,this.data=new Rn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new dT(this.data.getIterator())}getIteratorFrom(e){return new dT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof sn)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=r.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new sn(this.comparator);return t.data=e,t}}class dT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.fields=e,e.sort(nn.comparator)}static empty(){return new pi([])}unionWith(e){let t=new sn(nn.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new pi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vo(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new c2("Invalid base64 string: "+u):u}}(e);return new Bi(t)}static fromUint8Array(e){const t=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new Bi(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bi.EMPTY_BYTE_STRING=new Bi("");const h2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ea(s){if(Et(!!s),typeof s=="string"){let e=0;const t=h2.exec(s);if(Et(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(s);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:en(s.seconds),nanos:en(s.nanos)}}function en(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Uo(s){return typeof s=="string"?Bi.fromBase64String(s):Bi.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA="server_timestamp",uA="__type__",cA="__previous_value__",hA="__local_write_time__";function T_(s){var e,t;return((t=(((e=s==null?void 0:s.mapValue)===null||e===void 0?void 0:e.fields)||{})[uA])===null||t===void 0?void 0:t.stringValue)===lA}function S_(s){const e=s.mapValue.fields[cA];return T_(e)?S_(e):e}function tf(s){const e=Ea(s.mapValue.fields[hA].timestampValue);return new Wt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,t,r,o,u,f,p,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g}}const nf="(default)";class sf{constructor(e,t){this.projectId=e,this.database=t||nf}static empty(){return new sf("","")}get isDefaultDatabase(){return this.database===nf}isEqual(e){return e instanceof sf&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="__type__",d2="__max__",bh={mapValue:{}},dA="__vector__",Sm="value";function Ta(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?T_(s)?4:m2(s)?9007199254740991:p2(s)?10:11:Le()}function zi(s,e){if(s===e)return!0;const t=Ta(s);if(t!==Ta(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return tf(s).isEqual(tf(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Ea(o.timestampValue),p=Ea(u.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos}(s,e);case 5:return s.stringValue===e.stringValue;case 6:return function(o,u){return Uo(o.bytesValue).isEqual(Uo(u.bytesValue))}(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return function(o,u){return en(o.geoPointValue.latitude)===en(u.geoPointValue.latitude)&&en(o.geoPointValue.longitude)===en(u.geoPointValue.longitude)}(s,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return en(o.integerValue)===en(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=en(o.doubleValue),p=en(u.doubleValue);return f===p?ef(f)===ef(p):isNaN(f)&&isNaN(p)}return!1}(s,e);case 9:return Vo(s.arrayValue.values||[],e.arrayValue.values||[],zi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},p=u.mapValue.fields||{};if(fT(f)!==fT(p))return!1;for(const m in f)if(f.hasOwnProperty(m)&&(p[m]===void 0||!zi(f[m],p[m])))return!1;return!0}(s,e);default:return Le()}}function ku(s,e){return(s.values||[]).find(t=>zi(t,e))!==void 0}function jo(s,e){if(s===e)return 0;const t=Ta(s),r=Ta(e);if(t!==r)return Je(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Je(s.booleanValue,e.booleanValue);case 2:return function(u,f){const p=en(u.integerValue||u.doubleValue),m=en(f.integerValue||f.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(s,e);case 3:return pT(s.timestampValue,e.timestampValue);case 4:return pT(tf(s),tf(e));case 5:return Je(s.stringValue,e.stringValue);case 6:return function(u,f){const p=Uo(u),m=Uo(f);return p.compareTo(m)}(s.bytesValue,e.bytesValue);case 7:return function(u,f){const p=u.split("/"),m=f.split("/");for(let g=0;g<p.length&&g<m.length;g++){const E=Je(p[g],m[g]);if(E!==0)return E}return Je(p.length,m.length)}(s.referenceValue,e.referenceValue);case 8:return function(u,f){const p=Je(en(u.latitude),en(f.latitude));return p!==0?p:Je(en(u.longitude),en(f.longitude))}(s.geoPointValue,e.geoPointValue);case 9:return mT(s.arrayValue,e.arrayValue);case 10:return function(u,f){var p,m,g,E;const A=u.fields||{},O=f.fields||{},z=(p=A[Sm])===null||p===void 0?void 0:p.arrayValue,F=(m=O[Sm])===null||m===void 0?void 0:m.arrayValue,Q=Je(((g=z==null?void 0:z.values)===null||g===void 0?void 0:g.length)||0,((E=F==null?void 0:F.values)===null||E===void 0?void 0:E.length)||0);return Q!==0?Q:mT(z,F)}(s.mapValue,e.mapValue);case 11:return function(u,f){if(u===bh.mapValue&&f===bh.mapValue)return 0;if(u===bh.mapValue)return 1;if(f===bh.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=f.fields||{},E=Object.keys(g);m.sort(),E.sort();for(let A=0;A<m.length&&A<E.length;++A){const O=Je(m[A],E[A]);if(O!==0)return O;const z=jo(p[m[A]],g[E[A]]);if(z!==0)return z}return Je(m.length,E.length)}(s.mapValue,e.mapValue);default:throw Le()}}function pT(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return Je(s,e);const t=Ea(s),r=Ea(e),o=Je(t.seconds,r.seconds);return o!==0?o:Je(t.nanos,r.nanos)}function mT(s,e){const t=s.values||[],r=e.values||[];for(let o=0;o<t.length&&o<r.length;++o){const u=jo(t[o],r[o]);if(u)return u}return Je(t.length,r.length)}function Bo(s){return Am(s)}function Am(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?function(t){const r=Ea(t);return`time(${r.seconds},${r.nanos})`}(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?function(t){return Uo(t).toBase64()}(s.bytesValue):"referenceValue"in s?function(t){return xe.fromName(t).toString()}(s.referenceValue):"geoPointValue"in s?function(t){return`geo(${t.latitude},${t.longitude})`}(s.geoPointValue):"arrayValue"in s?function(t){let r="[",o=!0;for(const u of t.values||[])o?o=!1:r+=",",r+=Am(u);return r+"]"}(s.arrayValue):"mapValue"in s?function(t){const r=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const f of r)u?u=!1:o+=",",o+=`${f}:${Am(t.fields[f])}`;return o+"}"}(s.mapValue):Le()}function Mh(s){switch(Ta(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=S_(s);return e?16+Mh(e):16;case 5:return 2*s.stringValue.length;case 6:return Uo(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((o,u)=>o+Mh(u),0)}(s.arrayValue);case 10:case 11:return function(r){let o=0;return Qo(r.fields,(u,f)=>{o+=u.length+Mh(f)}),o}(s.mapValue);default:throw Le()}}function wm(s){return!!s&&"integerValue"in s}function A_(s){return!!s&&"arrayValue"in s}function Ph(s){return!!s&&"mapValue"in s}function p2(s){var e,t;return((t=(((e=s==null?void 0:s.mapValue)===null||e===void 0?void 0:e.fields)||{})[fA])===null||t===void 0?void 0:t.stringValue)===dA}function Su(s){if(s.geoPointValue)return{geoPointValue:Object.assign({},s.geoPointValue)};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:Object.assign({},s.timestampValue)};if(s.mapValue){const e={mapValue:{fields:{}}};return Qo(s.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Su(r)),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Su(s.arrayValue.values[t]);return e}return Object.assign({},s)}function m2(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===d2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.value=e}static empty(){return new fi({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ph(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Su(t)}setAll(e){let t=nn.emptyPath(),r={},o=[];e.forEach((f,p)=>{if(!t.isImmediateParentOf(p)){const m=this.getFieldsMap(t);this.applyChanges(m,r,o),r={},o=[],t=p.popLast()}f?r[p.lastSegment()]=Su(f):o.push(p.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,r,o)}delete(e){const t=this.field(e.popLast());Ph(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return zi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];Ph(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){Qo(t,(o,u)=>e[o]=u);for(const o of r)delete e[o]}clone(){return new fi(Su(this.value))}}function pA(s){const e=[];return Qo(s.fields,(t,r)=>{const o=new nn([t]);if(Ph(r)){const u=pA(r.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)}),new pi(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t,r,o,u,f,p){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=u,this.data=f,this.documentState=p}static newInvalidDocument(e){return new ci(e,0,ht.min(),ht.min(),ht.min(),fi.empty(),0)}static newFoundDocument(e,t,r,o){return new ci(e,1,t,ht.min(),r,o,0)}static newNoDocument(e,t){return new ci(e,2,t,ht.min(),ht.min(),fi.empty(),0)}static newUnknownDocument(e,t){return new ci(e,3,t,ht.min(),ht.min(),fi.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ht.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fi.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ht.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ci&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ci(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t){this.position=e,this.inclusive=t}}function _T(s,e,t){let r=0;for(let o=0;o<s.position.length;o++){const u=e[o],f=s.position[o];if(u.field.isKeyField()?r=xe.comparator(xe.fromName(f.referenceValue),t.key):r=jo(f,t.data.field(u.field)),u.dir==="desc"&&(r*=-1),r!==0)break}return r}function gT(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!zi(s.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,t="asc"){this.field=e,this.dir=t}}function _2(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{}class Kt extends mA{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new y2(e,t,r):t==="array-contains"?new T2(e,r):t==="in"?new S2(e,r):t==="not-in"?new A2(e,r):t==="array-contains-any"?new w2(e,r):new Kt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new v2(e,r):new E2(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(jo(t,this.value)):t!==null&&Ta(this.value)===Ta(t)&&this.matchesComparison(jo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Er extends mA{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Er(e,t)}matches(e){return _A(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function _A(s){return s.op==="and"}function gA(s){return g2(s)&&_A(s)}function g2(s){for(const e of s.filters)if(e instanceof Er)return!1;return!0}function bm(s){if(s instanceof Kt)return s.field.canonicalString()+s.op.toString()+Bo(s.value);if(gA(s))return s.filters.map(e=>bm(e)).join(",");{const e=s.filters.map(t=>bm(t)).join(",");return`${s.op}(${e})`}}function yA(s,e){return s instanceof Kt?function(r,o){return o instanceof Kt&&r.op===o.op&&r.field.isEqual(o.field)&&zi(r.value,o.value)}(s,e):s instanceof Er?function(r,o){return o instanceof Er&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce((u,f,p)=>u&&yA(f,o.filters[p]),!0):!1}(s,e):void Le()}function vA(s){return s instanceof Kt?function(t){return`${t.field.canonicalString()} ${t.op} ${Bo(t.value)}`}(s):s instanceof Er?function(t){return t.op.toString()+" {"+t.getFilters().map(vA).join(" ,")+"}"}(s):"Filter"}class y2 extends Kt{constructor(e,t,r){super(e,t,r),this.key=xe.fromName(r.referenceValue)}matches(e){const t=xe.comparator(e.key,this.key);return this.matchesComparison(t)}}class v2 extends Kt{constructor(e,t){super(e,"in",t),this.keys=EA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class E2 extends Kt{constructor(e,t){super(e,"not-in",t),this.keys=EA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function EA(s,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>xe.fromName(r.referenceValue))}class T2 extends Kt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return A_(t)&&ku(t.arrayValue,this.value)}}class S2 extends Kt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ku(this.value.arrayValue,t)}}class A2 extends Kt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ku(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ku(this.value.arrayValue,t)}}class w2 extends Kt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!A_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ku(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e,t=null,r=[],o=[],u=null,f=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=u,this.startAt=f,this.endAt=p,this.le=null}}function yT(s,e=null,t=[],r=[],o=null,u=null,f=null){return new b2(s,e,t,r,o,u,f)}function w_(s){const e=ot(s);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>bm(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(u){return u.field.canonicalString()+u.dir}(r)).join(","),E_(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Bo(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Bo(r)).join(",")),e.le=t}return e.le}function b_(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!_2(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!yA(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!gT(s.startAt,e.startAt)&&gT(s.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t=null,r=[],o=[],u=null,f="F",p=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=u,this.limitType=f,this.startAt=p,this.endAt=m,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function C2(s,e,t,r,o,u,f,p){return new bf(s,e,t,r,o,u,f,p)}function R2(s){return new bf(s)}function vT(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function I2(s){return s.collectionGroup!==null}function Au(s){const e=ot(s);if(e.he===null){e.he=[];const t=new Set;for(const u of e.explicitOrderBy)e.he.push(u),t.add(u.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new sn(nn.comparator);return f.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(p=p.add(g.field))})}),p})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.he.push(new af(u,r))}),t.has(nn.keyField().canonicalString())||e.he.push(new af(nn.keyField(),r))}return e.he}function ua(s){const e=ot(s);return e.Pe||(e.Pe=N2(e,Au(s))),e.Pe}function N2(s,e){if(s.limitType==="F")return yT(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new af(o.field,u)});const t=s.endAt?new rf(s.endAt.position,s.endAt.inclusive):null,r=s.startAt?new rf(s.startAt.position,s.startAt.inclusive):null;return yT(s.path,s.collectionGroup,e,s.filters,s.limit,t,r)}}function Cm(s,e,t){return new bf(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function TA(s,e){return b_(ua(s),ua(e))&&s.limitType===e.limitType}function SA(s){return`${w_(ua(s))}|lt:${s.limitType}`}function ou(s){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(o=>vA(o)).join(", ")}]`),E_(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(o=>Bo(o)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(o=>Bo(o)).join(",")),`Target(${r})`}(ua(s))}; limitType=${s.limitType})`}function C_(s,e){return e.isFoundDocument()&&function(r,o){const u=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(u):xe.isDocumentKey(r.path)?r.path.isEqual(u):r.path.isImmediateParentOf(u)}(s,e)&&function(r,o){for(const u of Au(r))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(s,e)&&function(r,o){for(const u of r.filters)if(!u.matches(o))return!1;return!0}(s,e)&&function(r,o){return!(r.startAt&&!function(f,p,m){const g=_T(f,p,m);return f.inclusive?g<=0:g<0}(r.startAt,Au(r),o)||r.endAt&&!function(f,p,m){const g=_T(f,p,m);return f.inclusive?g>=0:g>0}(r.endAt,Au(r),o))}(s,e)}function O2(s){return(e,t)=>{let r=!1;for(const o of Au(s)){const u=D2(o,e,t);if(u!==0)return u;r=r||o.field.isKeyField()}return 0}}function D2(s,e,t){const r=s.field.isKeyField()?xe.comparator(e.key,t.key):function(u,f,p){const m=f.data.field(u),g=p.data.field(u);return m!==null&&g!==null?jo(m,g):Le()}(s.field,e,t);switch(s.dir){case"asc":return r;case"desc":return-1*r;default:return Le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[o,u]of r)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[t]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Qo(this.inner,(t,r)=>{for(const[o,u]of r)e(o,u)})}isEmpty(){return oA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=new Rn(xe.comparator);function of(){return x2}const AA=new Rn(xe.comparator);function Ch(...s){let e=AA;for(const t of s)e=e.insert(t.key,t);return e}function wA(s){let e=AA;return s.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function oa(){return wu()}function bA(){return wu()}function wu(){return new Ca(s=>s.toString(),(s,e)=>s.isEqual(e))}const k2=new Rn(xe.comparator),M2=new sn(xe.comparator);function dn(...s){let e=M2;for(const t of s)e=e.add(t);return e}const P2=new sn(Je);function L2(){return P2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ef(e)?"-0":e}}function CA(s){return{integerValue:""+s}}function V2(s,e){return o2(e)?CA(e):R_(s,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this._=void 0}}function U2(s,e,t){return s instanceof lf?function(o,u){const f={fields:{[uA]:{stringValue:lA},[hA]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&T_(u)&&(u=S_(u)),u&&(f.fields[cA]=u),{mapValue:f}}(t,e):s instanceof Mu?IA(s,e):s instanceof Pu?NA(s,e):function(o,u){const f=RA(o,u),p=ET(f)+ET(o.Ie);return wm(f)&&wm(o.Ie)?CA(p):R_(o.serializer,p)}(s,e)}function j2(s,e,t){return s instanceof Mu?IA(s,e):s instanceof Pu?NA(s,e):t}function RA(s,e){return s instanceof uf?function(r){return wm(r)||function(u){return!!u&&"doubleValue"in u}(r)}(e)?e:{integerValue:0}:null}class lf extends Cf{}class Mu extends Cf{constructor(e){super(),this.elements=e}}function IA(s,e){const t=OA(e);for(const r of s.elements)t.some(o=>zi(o,r))||t.push(r);return{arrayValue:{values:t}}}class Pu extends Cf{constructor(e){super(),this.elements=e}}function NA(s,e){let t=OA(e);for(const r of s.elements)t=t.filter(o=>!zi(o,r));return{arrayValue:{values:t}}}class uf extends Cf{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function ET(s){return en(s.integerValue||s.doubleValue)}function OA(s){return A_(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function B2(s,e){return s.field.isEqual(e.field)&&function(r,o){return r instanceof Mu&&o instanceof Mu||r instanceof Pu&&o instanceof Pu?Vo(r.elements,o.elements,zi):r instanceof uf&&o instanceof uf?zi(r.Ie,o.Ie):r instanceof lf&&o instanceof lf}(s.transform,e.transform)}class z2{constructor(e,t){this.version=e,this.transformResults=t}}class Es{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Es}static exists(e){return new Es(void 0,e)}static updateTime(e){return new Es(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lh(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class Rf{}function DA(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new kA(s.key,Es.none()):new Qu(s.key,s.data,Es.none());{const t=s.data,r=fi.empty();let o=new sn(nn.comparator);for(let u of e.fields)if(!o.has(u)){let f=t.field(u);f===null&&u.length>1&&(u=u.popLast(),f=t.field(u)),f===null?r.delete(u):r.set(u,f),o=o.add(u)}return new Ra(s.key,r,new pi(o.toArray()),Es.none())}}function H2(s,e,t){s instanceof Qu?function(o,u,f){const p=o.value.clone(),m=ST(o.fieldTransforms,u,f.transformResults);p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(s,e,t):s instanceof Ra?function(o,u,f){if(!Lh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const p=ST(o.fieldTransforms,u,f.transformResults),m=u.data;m.setAll(xA(o)),m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(s,e,t):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,t)}function bu(s,e,t,r){return s instanceof Qu?function(u,f,p,m){if(!Lh(u.precondition,f))return p;const g=u.value.clone(),E=AT(u.fieldTransforms,m,f);return g.setAll(E),f.convertToFoundDocument(f.version,g).setHasLocalMutations(),null}(s,e,t,r):s instanceof Ra?function(u,f,p,m){if(!Lh(u.precondition,f))return p;const g=AT(u.fieldTransforms,m,f),E=f.data;return E.setAll(xA(u)),E.setAll(g),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(A=>A.field))}(s,e,t,r):function(u,f,p){return Lh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p}(s,e,t)}function F2(s,e){let t=null;for(const r of s.fieldTransforms){const o=e.data.field(r.field),u=RA(r.transform,o||null);u!=null&&(t===null&&(t=fi.empty()),t.set(r.field,u))}return t||null}function TT(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&Vo(r,o,(u,f)=>B2(u,f))}(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class Qu extends Rf{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ra extends Rf{constructor(e,t,r,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function xA(s){const e=new Map;return s.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=s.data.field(t);e.set(t,r)}}),e}function ST(s,e,t){const r=new Map;Et(s.length===t.length);for(let o=0;o<t.length;o++){const u=s[o],f=u.transform,p=e.data.field(u.field);r.set(u.field,j2(f,p,t[o]))}return r}function AT(s,e,t){const r=new Map;for(const o of s){const u=o.transform,f=t.data.field(o.field);r.set(o.field,U2(u,f,e))}return r}class kA extends Rf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class q2 extends Rf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e,t,r,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&H2(u,e,r[o])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=bu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=bu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=bA();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let p=this.applyToLocalView(f,u.mutatedFields);p=t.has(o.key)?null:p;const m=DA(f,p);m!==null&&r.set(o.key,m),f.isValidDocument()||f.convertToNoDocument(ht.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),dn())}isEqual(e){return this.batchId===e.batchId&&Vo(this.mutations,e.mutations,(t,r)=>TT(t,r))&&Vo(this.baseMutations,e.baseMutations,(t,r)=>TT(t,r))}}class I_{constructor(e,t,r,o){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=o}static from(e,t,r){Et(e.mutations.length===r.length);let o=function(){return k2}();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,r[f].version);return new I_(e,t,r,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct,qe;function W2(s){switch(s){case ne.OK:return Le();case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0;default:return Le()}}function Y2(s){if(s===void 0)return va("GRPC error has no .code"),ne.UNKNOWN;switch(s){case Ct.OK:return ne.OK;case Ct.CANCELLED:return ne.CANCELLED;case Ct.UNKNOWN:return ne.UNKNOWN;case Ct.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case Ct.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case Ct.INTERNAL:return ne.INTERNAL;case Ct.UNAVAILABLE:return ne.UNAVAILABLE;case Ct.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case Ct.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case Ct.NOT_FOUND:return ne.NOT_FOUND;case Ct.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case Ct.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case Ct.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case Ct.ABORTED:return ne.ABORTED;case Ct.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case Ct.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case Ct.DATA_LOSS:return ne.DATA_LOSS;default:return Le()}}(qe=Ct||(Ct={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new m_([4294967295,4294967295],0);class Q2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Rm(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $2(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function X2(s,e){return Rm(s,e.toTimestamp())}function xo(s){return Et(!!s),ht.fromTimestamp(function(t){const r=Ea(t);return new Wt(r.seconds,r.nanos)}(s))}function MA(s,e){return Im(s,e).canonicalString()}function Im(s,e){const t=function(o){return new Rt(["projects",o.projectId,"databases",o.database])}(s).child("documents");return e===void 0?t:t.child(e)}function Z2(s){const e=Rt.fromString(s);return Et(ax(e)),e}function Nm(s,e){return MA(s.databaseId,e.path)}function J2(s){const e=Z2(s);return e.length===4?Rt.emptyPath():tx(e)}function ex(s){return new Rt(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function tx(s){return Et(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}function wT(s,e,t){return{name:Nm(s,e),fields:t.value.mapValue.fields}}function nx(s,e){let t;if(e instanceof Qu)t={update:wT(s,e.key,e.value)};else if(e instanceof kA)t={delete:Nm(s,e.key)};else if(e instanceof Ra)t={update:wT(s,e.key,e.data),updateMask:rx(e.fieldMask)};else{if(!(e instanceof q2))return Le();t={verify:Nm(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(u,f){const p=f.transform;if(p instanceof lf)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Mu)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Pu)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof uf)return{fieldPath:f.field.canonicalString(),increment:p.Ie};throw Le()}(0,r))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:X2(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Le()}(s,e.precondition)),t}function ix(s,e){return s&&s.length>0?(Et(e!==void 0),s.map(t=>function(o,u){let f=o.updateTime?xo(o.updateTime):xo(u);return f.isEqual(ht.min())&&(f=xo(u)),new z2(f,o.transformResults||[])}(t,e))):[]}function sx(s){let e=J2(s.parent);const t=s.structuredQuery,r=t.from?t.from.length:0;let o=null;if(r>0){Et(r===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(A){const O=PA(A);return O instanceof Er&&gA(O)?O.getFilters():[O]}(t.where));let f=[];t.orderBy&&(f=function(A){return A.map(O=>function(F){return new af(Ao(F.field),function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(O))}(t.orderBy));let p=null;t.limit&&(p=function(A){let O;return O=typeof A=="object"?A.value:A,E_(O)?null:O}(t.limit));let m=null;t.startAt&&(m=function(A){const O=!!A.before,z=A.values||[];return new rf(z,O)}(t.startAt));let g=null;return t.endAt&&(g=function(A){const O=!A.before,z=A.values||[];return new rf(z,O)}(t.endAt)),C2(e,o,f,u,p,"F",m,g)}function PA(s){return s.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ao(t.unaryFilter.field);return Kt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=Ao(t.unaryFilter.field);return Kt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ao(t.unaryFilter.field);return Kt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ao(t.unaryFilter.field);return Kt.create(f,"!=",{nullValue:"NULL_VALUE"});default:return Le()}}(s):s.fieldFilter!==void 0?function(t){return Kt.create(Ao(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Le()}}(t.fieldFilter.op),t.fieldFilter.value)}(s):s.compositeFilter!==void 0?function(t){return Er.create(t.compositeFilter.filters.map(r=>PA(r)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Le()}}(t.compositeFilter.op))}(s):Le()}function Ao(s){return nn.fromServerFormat(s.fieldPath)}function rx(s){const e=[];return s.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ax(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.Tt=e}}function lx(s){const e=sx({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?Cm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(){this.Tn=new cx}addToCollectionParentIndex(e,t){return this.Tn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(vr.min())}updateCollectionGroup(e,t,r){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class cx{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t]||new sn(Rt.comparator),u=!o.has(r);return this.index[t]=o.add(r),u}has(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t];return o&&o.has(r)}getEntries(e){return(this.index[e]||new sn(Rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},LA=41943040;class bn{static withCacheSize(e){return new bn(e,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn.DEFAULT_COLLECTION_PERCENTILE=10,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bn.DEFAULT=new bn(LA,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bn.DISABLED=new bn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new zo(0)}static Un(){return new zo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="LruGarbageCollector",hx=1048576;function RT([s,e],[t,r]){const o=Je(s,t);return o===0?Je(e,r):o}class fx{constructor(e){this.Hn=e,this.buffer=new sn(RT),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();RT(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class dx{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){_e(CT,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Yu(t)?_e(CT,"Ignoring IndexedDB error during garbage collection: ",t):await g_(t)}await this.er(3e5)})}}class px{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(y_.ae);const r=new fx(t);return this.tr.forEachTarget(e,o=>r.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>r.Zn(o))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_e("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(bT)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(_e("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bT):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,o,u,f,p,m,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(_e("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,f=Date.now(),this.nthSequenceNumber(e,o))).next(A=>(r=A,p=Date.now(),this.removeTargets(e,r,t))).next(A=>(u=A,m=Date.now(),this.removeOrphanedDocuments(e,r))).next(A=>(g=Date.now(),So()<=Pe.DEBUG&&_e("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(p-f)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${A} documents in `+(g-m)+`ms
Total Duration: ${g-E}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A})))}}function mx(s,e){return new px(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.changes=new Ca(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ci.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?Z.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,t,r,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(r=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(r!==null&&bu(r.mutation,o,pi.empty(),Wt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,dn()).next(()=>r))}getLocalViewOfDocuments(e,t,r=dn()){const o=oa();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,r).next(u=>{let f=Ch();return u.forEach((p,m)=>{f=f.insert(p,m.overlayedDocument)}),f}))}getOverlayedDocuments(e,t){const r=oa();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,dn()))}populateOverlays(e,t,r){const o=[];return r.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,p)=>{t.set(f,p)})})}computeViews(e,t,r,o){let u=of();const f=wu(),p=function(){return wu()}();return t.forEach((m,g)=>{const E=r.get(g.key);o.has(g.key)&&(E===void 0||E.mutation instanceof Ra)?u=u.insert(g.key,g):E!==void 0?(f.set(g.key,E.mutation.getFieldMask()),bu(E.mutation,g,E.mutation.getFieldMask(),Wt.now())):f.set(g.key,pi.empty())}),this.recalculateAndSaveOverlays(e,u).next(m=>(m.forEach((g,E)=>f.set(g,E)),t.forEach((g,E)=>{var A;return p.set(g,new gx(E,(A=f.get(g))!==null&&A!==void 0?A:null))}),p))}recalculateAndSaveOverlays(e,t){const r=wu();let o=new Rn((f,p)=>f-p),u=dn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(f=>{for(const p of f)p.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let E=r.get(m)||pi.empty();E=p.applyToLocalView(g,E),r.set(m,E);const A=(o.get(p.batchId)||dn()).add(m);o=o.insert(p.batchId,A)})}).next(()=>{const f=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,E=m.value,A=bA();E.forEach(O=>{if(!u.has(O)){const z=DA(t.get(O),r.get(O));z!==null&&A.set(O,z),u=u.add(O)}}),f.push(this.documentOverlayCache.saveOverlays(e,g,A))}return Z.waitFor(f)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,o){return function(f){return xe.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):I2(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,o):this.getDocumentsMatchingCollectionQuery(e,t,r,o)}getNextDocuments(e,t,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,o-u.size):Z.resolve(oa());let p=xu,m=u;return f.next(g=>Z.forEach(g,(E,A)=>(p<A.largestBatchId&&(p=A.largestBatchId),u.get(E)?Z.resolve():this.remoteDocumentCache.getEntry(e,E).next(O=>{m=m.insert(E,O)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,m,g,dn())).next(E=>({batchId:p,changes:wA(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new xe(t)).next(r=>{let o=Ch();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,r,o){const u=t.collectionGroup;let f=Ch();return this.indexManager.getCollectionParents(e,u).next(p=>Z.forEach(p,m=>{const g=function(A,O){return new bf(O,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(t,m.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,r,o).next(E=>{E.forEach((A,O)=>{f=f.insert(A,O)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,t,r,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,u,o))).next(f=>{u.forEach((m,g)=>{const E=g.getKey();f.get(E)===null&&(f=f.insert(E,ci.newInvalidDocument(E)))});let p=Ch();return f.forEach((m,g)=>{const E=u.get(m);E!==void 0&&bu(E.mutation,g,pi.empty(),Wt.now()),C_(t,g)&&(p=p.insert(m,g))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return Z.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:xo(o.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:lx(o.bundledQuery),readTime:xo(o.readTime)}}(t)),Z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(){this.overlays=new Rn(xe.comparator),this.Rr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const r=oa();return Z.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&r.set(o,u)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((o,u)=>{this.Et(e,t,u)}),Z.resolve()}removeOverlaysForBatchId(e,t,r){const o=this.Rr.get(r);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(r)),Z.resolve()}getOverlaysForCollection(e,t,r){const o=oa(),u=t.length+1,f=new xe(t.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>r&&o.set(m.getKey(),m)}return Z.resolve(o)}getOverlaysForCollectionGroup(e,t,r,o){let u=new Rn((g,E)=>g-E);const f=this.overlays.getIterator();for(;f.hasNext();){const g=f.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let E=u.get(g.largestBatchId);E===null&&(E=oa(),u=u.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const p=oa(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,E)=>p.set(g,E)),!(p.size()>=o)););return Z.resolve(p)}Et(e,t,r){const o=this.overlays.get(r.key);if(o!==null){const f=this.Rr.get(o.largestBatchId).delete(r.key);this.Rr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(r.key,new K2(t,r));let u=this.Rr.get(t);u===void 0&&(u=dn(),this.Rr.set(t,u)),this.Rr.set(t,u.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(){this.sessionToken=Bi.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.Vr=new sn(qt.mr),this.gr=new sn(qt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new qt(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new qt(e,t))}br(e,t){e.forEach(r=>this.removeReference(r,t))}Sr(e){const t=new xe(new Rt([])),r=new qt(t,e),o=new qt(t,e+1),u=[];return this.gr.forEachInRange([r,o],f=>{this.wr(f),u.push(f.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new xe(new Rt([])),r=new qt(t,e),o=new qt(t,e+1);let u=dn();return this.gr.forEachInRange([r,o],f=>{u=u.add(f.key)}),u}containsKey(e){const t=new qt(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class qt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return xe.comparator(e.key,t.key)||Je(e.Cr,t.Cr)}static pr(e,t){return Je(e.Cr,t.Cr)||xe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new sn(qt.mr)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new G2(u,t,r,o);this.mutationQueue.push(f);for(const p of o)this.Mr=this.Mr.add(new qt(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return Z.resolve(f)}lookupMutationBatch(e,t){return Z.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=this.Nr(r),u=o<0?0:o;return Z.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?v_:this.Fr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new qt(t,0),o=new qt(t,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([r,o],f=>{const p=this.Or(f.Cr);u.push(p)}),Z.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new sn(Je);return t.forEach(o=>{const u=new qt(o,0),f=new qt(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,f],p=>{r=r.add(p.Cr)})}),Z.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1;let u=r;xe.isDocumentKey(u)||(u=u.child(""));const f=new qt(new xe(u),0);let p=new sn(Je);return this.Mr.forEachWhile(m=>{const g=m.key.path;return!!r.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Cr)),!0)},f),Z.resolve(this.Br(p))}Br(e){const t=[];return e.forEach(r=>{const o=this.Or(r);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Et(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return Z.forEach(t.mutations,o=>{const u=new qt(o.key,t.batchId);return r=r.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new qt(t,0),o=this.Mr.firstAfterOrEqual(r);return Z.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e){this.kr=e,this.docs=function(){return new Rn(xe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,o=this.docs.get(r),u=o?o.size:0,f=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return Z.resolve(r?r.document.mutableCopy():ci.newInvalidDocument(t))}getEntries(e,t){let r=of();return t.forEach(o=>{const u=this.docs.get(o);r=r.insert(o,u?u.document.mutableCopy():ci.newInvalidDocument(o))}),Z.resolve(r)}getDocumentsMatchingQuery(e,t,r,o){let u=of();const f=t.path,p=new xe(f.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:E}}=m.getNext();if(!f.isPrefixOf(g.path))break;g.path.length>f.length+1||i2(n2(E),r)<=0||(o.has(E.key)||C_(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return Z.resolve(u)}getAllFromCollectionGroup(e,t,r,o){Le()}qr(e,t){return Z.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new wx(this)}getSize(e){return Z.resolve(this.size)}}class wx extends _x{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(r)}),Z.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.persistence=e,this.Qr=new Ca(t=>w_(t),b_),this.lastRemoteSnapshotVersion=ht.min(),this.highestTargetId=0,this.$r=0,this.Kr=new N_,this.targetCount=0,this.Ur=zo.Kn()}forEachTarget(e,t){return this.Qr.forEach((r,o)=>t(o)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),Z.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new zo(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.zn(t),Z.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,r){let o=0;const u=[];return this.Qr.forEach((f,p)=>{p.sequenceNumber<=t&&r.get(p.targetId)===null&&(this.Qr.delete(f),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),Z.waitFor(u).next(()=>o)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return Z.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),Z.resolve()}removeMatchingKeys(e,t,r){this.Kr.br(t,r);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),Z.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Kr.vr(t);return Z.resolve(r)}containsKey(e,t){return Z.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new y_(0),this.zr=!1,this.zr=!0,this.jr=new Tx,this.referenceDelegate=e(this),this.Hr=new bx(this),this.indexManager=new ux,this.remoteDocumentCache=function(o){return new Ax(o)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new ox(t),this.Yr=new vx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ex,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new Sx(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){_e("MemoryPersistence","Starting transaction:",e);const o=new Cx(this.Gr.next());return this.referenceDelegate.Zr(),r(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(e,t){return Z.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class Cx extends r2{constructor(e){super(),this.currentSequenceNumber=e}}class O_{constructor(e){this.persistence=e,this.ti=new N_,this.ni=null}static ri(e){return new O_(e)}get ii(){if(this.ni)return this.ni;throw Le()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),Z.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),Z.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(o=>this.ii.add(o.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.ii,r=>{const o=xe.fromPath(r);return this.si(e,o).next(u=>{u||t.removeEntry(o,ht.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return Z.or([()=>Z.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class cf{constructor(e,t){this.persistence=e,this.oi=new Ca(r=>l2(r.path),(r,o)=>r.isEqual(o)),this.garbageCollector=mx(this,t)}static ri(e,t){return new cf(e,t)}Zr(){}Xr(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(o=>r+o))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return Z.forEach(this.oi,(r,o)=>this.ar(e,r,o).next(u=>u?Z.resolve():t(o)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(e,f=>this.ar(e,f,t).next(p=>{p||(r++,u.removeEntry(f,ht.min()))})).next(()=>u.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),Z.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Mh(e.data.value)),t}ar(e,t,r){return Z.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return Z.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,t,r,o){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=o}static Yi(e,t){let r=dn(),o=dn();for(const u of t.docChanges)switch(u.type){case 0:r=r.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new D_(e,t.fromCache,r,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return wC()?8:a2(mn())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,o){const u={result:null};return this.rs(e,t).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ss(e,t,o,r).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new Rx;return this._s(e,t,f).next(p=>{if(u.result=p,this.Xi)return this.us(e,t,f,p.size)})}).next(()=>u.result)}us(e,t,r,o){return r.documentReadCount<this.es?(So()<=Pe.DEBUG&&_e("QueryEngine","SDK will not create cache indexes for query:",ou(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),Z.resolve()):(So()<=Pe.DEBUG&&_e("QueryEngine","Query:",ou(t),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.ts*o?(So()<=Pe.DEBUG&&_e("QueryEngine","The SDK decides to create cache indexes for query:",ou(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ua(t))):Z.resolve())}rs(e,t){if(vT(t))return Z.resolve(null);let r=ua(t);return this.indexManager.getIndexType(e,r).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Cm(t,null,"F"),r=ua(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(u=>{const f=dn(...u);return this.ns.getDocuments(e,f).next(p=>this.indexManager.getMinOffset(e,r).next(m=>{const g=this.cs(t,p);return this.ls(t,g,f,m.readTime)?this.rs(e,Cm(t,null,"F")):this.hs(e,g,t,m)}))})))}ss(e,t,r,o){return vT(t)||o.isEqual(ht.min())?Z.resolve(null):this.ns.getDocuments(e,r).next(u=>{const f=this.cs(t,u);return this.ls(t,f,r,o)?Z.resolve(null):(So()<=Pe.DEBUG&&_e("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ou(t)),this.hs(e,f,t,t2(o,xu)).next(p=>p))})}cs(e,t){let r=new sn(O2(e));return t.forEach((o,u)=>{C_(e,u)&&(r=r.add(u))}),r}ls(e,t,r,o){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(e,t,r){return So()<=Pe.DEBUG&&_e("QueryEngine","Using full collection scan to execute query:",ou(t)),this.ns.getDocumentsMatchingQuery(e,t,vr.min(),r)}hs(e,t,r,o){return this.ns.getDocumentsMatchingQuery(e,r,o).next(u=>(t.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx="LocalStore";class Ox{constructor(e,t,r,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new Rn(Je),this.Is=new Ca(u=>w_(u),b_),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yx(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function Dx(s,e,t,r){return new Ox(s,e,t,r)}async function UA(s,e){const t=ot(s);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let o;return t.mutationQueue.getAllMutationBatches(r).next(u=>(o=u,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(u=>{const f=[],p=[];let m=dn();for(const g of o){f.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}for(const g of u){p.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}return t.localDocuments.getDocuments(r,m).next(g=>({Rs:g,removedBatchIds:f,addedBatchIds:p}))})})}function xx(s,e){const t=ot(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const o=e.batch.keys(),u=t.ds.newChangeBuffer({trackRemovals:!0});return function(p,m,g,E){const A=g.batch,O=A.keys();let z=Z.resolve();return O.forEach(F=>{z=z.next(()=>E.getEntry(m,F)).next(Q=>{const W=g.docVersions.get(F);Et(W!==null),Q.version.compareTo(W)<0&&(A.applyToRemoteDocument(Q,g),Q.isValidDocument()&&(Q.setReadTime(g.commitVersion),E.addEntry(Q)))})}),z.next(()=>p.mutationQueue.removeMutationBatch(m,A))}(t,r,e,u).next(()=>u.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(p){let m=dn();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(r,o))})}function kx(s){const e=ot(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function Mx(s,e){const t=ot(s);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=v_),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class IT{constructor(){this.activeTargetIds=L2()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Px{constructor(){this.ho=new IT,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new IT,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="ConnectivityMonitor";class OT{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){_e(NT,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){_e(NT,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rh=null;function Om(){return Rh===null?Rh=function(){return 268435456+Math.round(2147483648*Math.random())}():Rh++,"0x"+Rh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="RestConnection",Vx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ux{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${o}`,this.wo=this.databaseId.database===nf?`project_id=${r}`:`project_id=${r}&database_id=${o}`}bo(e,t,r,o,u){const f=Om(),p=this.So(e,t.toUriEncodedString());_e($p,`Sending RPC '${e}' ${f}:`,p,r);const m={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(m,o,u),this.vo(e,p,m,r).then(g=>(_e($p,`Received RPC '${e}' ${f}: `,g),g),g=>{throw wf($p,`RPC '${e}' ${f} failed with error: `,g,"url: ",p,"request:",r),g})}Co(e,t,r,o,u,f){return this.bo(e,t,r,o,u)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),r&&r.headers.forEach((o,u)=>e[u]=o)}So(e,t){const r=Vx[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="WebChannelConnection";class Bx extends Ux{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,o){const u=Om();return new Promise((f,p)=>{const m=new JS;m.setWithCredentials(!0),m.listenOnce(eA.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case kh.NO_ERROR:const E=m.getResponseJson();_e(ln,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),f(E);break;case kh.TIMEOUT:_e(ln,`RPC '${e}' ${u} timed out`),p(new be(ne.DEADLINE_EXCEEDED,"Request time out"));break;case kh.HTTP_ERROR:const A=m.getStatus();if(_e(ln,`RPC '${e}' ${u} failed with status:`,A,"response text:",m.getResponseText()),A>0){let O=m.getResponseJson();Array.isArray(O)&&(O=O[0]);const z=O==null?void 0:O.error;if(z&&z.status&&z.message){const F=function(W){const Y=W.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(Y)>=0?Y:ne.UNKNOWN}(z.status);p(new be(F,z.message))}else p(new be(ne.UNKNOWN,"Server responded with status "+m.getStatus()))}else p(new be(ne.UNAVAILABLE,"Connection failed."));break;default:Le()}}finally{_e(ln,`RPC '${e}' ${u} completed.`)}});const g=JSON.stringify(o);_e(ln,`RPC '${e}' ${u} sending request:`,o),m.send(t,"POST",g,r,15)})}Wo(e,t,r){const o=Om(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=iA(),p=nA(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Do(m.initMessageHeaders,t,r),m.encodeInitMessageHeaders=!0;const E=u.join("");_e(ln,`Creating RPC '${e}' stream ${o}: ${E}`,m);const A=f.createWebChannel(E,m);let O=!1,z=!1;const F=new jx({Fo:W=>{z?_e(ln,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(O||(_e(ln,`Opening RPC '${e}' stream ${o} transport.`),A.open(),O=!0),_e(ln,`RPC '${e}' stream ${o} sending:`,W),A.send(W))},Mo:()=>A.close()}),Q=(W,Y,ee)=>{W.listen(Y,te=>{try{ee(te)}catch(se){setTimeout(()=>{throw se},0)}})};return Q(A,_u.EventType.OPEN,()=>{z||(_e(ln,`RPC '${e}' stream ${o} transport opened.`),F.Qo())}),Q(A,_u.EventType.CLOSE,()=>{z||(z=!0,_e(ln,`RPC '${e}' stream ${o} transport closed`),F.Ko())}),Q(A,_u.EventType.ERROR,W=>{z||(z=!0,wf(ln,`RPC '${e}' stream ${o} transport errored:`,W),F.Ko(new be(ne.UNAVAILABLE,"The operation could not be completed")))}),Q(A,_u.EventType.MESSAGE,W=>{var Y;if(!z){const ee=W.data[0];Et(!!ee);const te=ee,se=(te==null?void 0:te.error)||((Y=te[0])===null||Y===void 0?void 0:Y.error);if(se){_e(ln,`RPC '${e}' stream ${o} received error:`,se);const oe=se.status;let me=function(b){const C=Ct[b];if(C!==void 0)return Y2(C)}(oe),x=se.message;me===void 0&&(me=ne.INTERNAL,x="Unknown error status: "+oe+" with message "+se.message),z=!0,F.Ko(new be(me,x)),A.close()}else _e(ln,`RPC '${e}' stream ${o} received:`,ee),F.Uo(ee)}}),Q(p,tA.STAT_EVENT,W=>{W.stat===Tm.PROXY?_e(ln,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===Tm.NOPROXY&&_e(ln,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{F.$o()},0),F}}function Xp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(s){return new Q2(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e,t,r=1e3,o=1.5,u=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-r);o>0&&_e("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="PersistentStream";class zx{constructor(e,t,r,o,u,f,p,m){this.Ti=e,this.n_=r,this.r_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new jA(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===ne.RESOURCE_EXHAUSTED?(va(t.toString()),va("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,o])=>{this.i_===t&&this.V_(r,o)},r=>{e(()=>{const o=new be(ne.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(o)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{r(()=>this.m_(o))}),this.stream.onMessage(o=>{r(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return _e(DT,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(_e(DT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hx extends zx{constructor(e,t,r,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,o,f),this.serializer=u}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Et(!!e.streamToken),this.lastStreamToken=e.streamToken,Et(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Et(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=ix(e.writeResults,e.commitTime),r=xo(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=ex(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>nx(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{}class qx extends Fx{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new be(ne.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,r,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.bo(e,Im(t,r),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new be(ne.UNKNOWN,u.toString())})}Co(e,t,r,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,p])=>this.connection.Co(e,Im(t,r),o,f,p,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new be(ne.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Gx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(va(t),this.N_=!1):_e("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="RemoteStore";class Kx{constructor(e,t,r,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(f=>{r.enqueueAndForget(async()=>{Zu(this)&&(_e($u,"Restarting streams for network reachability change."),await async function(m){const g=ot(m);g.W_.add(4),await Xu(g),g.j_.set("Unknown"),g.W_.delete(4),await Nf(g)}(this))})}),this.j_=new Gx(r,o)}}async function Nf(s){if(Zu(s))for(const e of s.G_)await e(!0)}async function Xu(s){for(const e of s.G_)await e(!1)}function Zu(s){return ot(s).W_.size===0}async function BA(s,e,t){if(!Yu(e))throw e;s.W_.add(1),await Xu(s),s.j_.set("Offline"),t||(t=()=>kx(s.localStore)),s.asyncQueue.enqueueRetryable(async()=>{_e($u,"Retrying IndexedDB access"),await t(),s.W_.delete(1),await Nf(s)})}function zA(s,e){return e().catch(t=>BA(s,t,e))}async function Of(s){const e=ot(s),t=Tr(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:v_;for(;Wx(e);)try{const o=await Mx(e.localStore,r);if(o===null){e.K_.length===0&&t.P_();break}r=o.batchId,Yx(e,o)}catch(o){await BA(e,o)}HA(e)&&FA(e)}function Wx(s){return Zu(s)&&s.K_.length<10}function Yx(s,e){s.K_.push(e);const t=Tr(s);t.c_()&&t.b_&&t.S_(e.mutations)}function HA(s){return Zu(s)&&!Tr(s).u_()&&s.K_.length>0}function FA(s){Tr(s).start()}async function Qx(s){Tr(s).C_()}async function $x(s){const e=Tr(s);for(const t of s.K_)e.S_(t.mutations)}async function Xx(s,e,t){const r=s.K_.shift(),o=I_.from(r,e,t);await zA(s,()=>s.remoteSyncer.applySuccessfulWrite(o)),await Of(s)}async function Zx(s,e){e&&Tr(s).b_&&await async function(r,o){if(function(f){return W2(f)&&f!==ne.ABORTED}(o.code)){const u=r.K_.shift();Tr(r).h_(),await zA(r,()=>r.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Of(r)}}(s,e),HA(s)&&FA(s)}async function xT(s,e){const t=ot(s);t.asyncQueue.verifyOperationInProgress(),_e($u,"RemoteStore received new credentials");const r=Zu(t);t.W_.add(3),await Xu(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Nf(t)}async function Jx(s,e){const t=ot(s);e?(t.W_.delete(2),await Nf(t)):e||(t.W_.add(2),await Xu(t),t.j_.set("Unknown"))}function Tr(s){return s.Y_||(s.Y_=function(t,r,o){const u=ot(t);return u.M_(),new Hx(r,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(s.datastore,s.asyncQueue,{xo:()=>Promise.resolve(),No:Qx.bind(null,s),Lo:Zx.bind(null,s),D_:$x.bind(null,s),v_:Xx.bind(null,s)}),s.G_.push(async e=>{e?(s.Y_.h_(),await Of(s)):(await s.Y_.stop(),s.K_.length>0&&(_e($u,`Stopping write stream with ${s.K_.length} pending writes`),s.K_=[]))})),s.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,t,r,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=o,this.removalCallback=u,this.deferred=new la,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,o,u){const f=Date.now()+r,p=new x_(e,t,f,o,u);return p.start(r),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new be(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qA(s,e){if(va("AsyncQueue",`${e}: ${s}`),Yu(s))return new be(ne.UNAVAILABLE,`${e}: ${s}`);throw s}class ek{constructor(){this.queries=kT(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const o=ot(t),u=o.queries;o.queries=kT(),u.forEach((f,p)=>{for(const m of p.ta)m.onError(r)})})(this,new be(ne.ABORTED,"Firestore shutting down"))}}function kT(){return new Ca(s=>SA(s),TA)}function tk(s){s.ia.forEach(e=>{e.next()})}var MT,PT;(PT=MT||(MT={}))._a="default",PT.Cache="cache";const nk="SyncEngine";class ik{constructor(e,t,r,o,u,f){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new Ca(p=>SA(p),TA),this.qa=new Map,this.Qa=new Set,this.$a=new Rn(xe.comparator),this.Ka=new Map,this.Ua=new N_,this.Wa={},this.Ga=new Map,this.za=zo.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function sk(s,e,t){const r=lk(s);try{const o=await function(f,p){const m=ot(f),g=Wt.now(),E=p.reduce((z,F)=>z.add(F.key),dn());let A,O;return m.persistence.runTransaction("Locally write mutations","readwrite",z=>{let F=of(),Q=dn();return m.ds.getEntries(z,E).next(W=>{F=W,F.forEach((Y,ee)=>{ee.isValidDocument()||(Q=Q.add(Y))})}).next(()=>m.localDocuments.getOverlayedDocuments(z,F)).next(W=>{A=W;const Y=[];for(const ee of p){const te=F2(ee,A.get(ee.key).overlayedDocument);te!=null&&Y.push(new Ra(ee.key,te,pA(te.value.mapValue),Es.exists(!0)))}return m.mutationQueue.addMutationBatch(z,g,Y,p)}).next(W=>{O=W;const Y=W.applyToLocalDocumentSet(A,Q);return m.documentOverlayCache.saveOverlays(z,W.batchId,Y)})}).then(()=>({batchId:O.batchId,changes:wA(A)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),function(f,p,m){let g=f.Wa[f.currentUser.toKey()];g||(g=new Rn(Je)),g=g.insert(p,m),f.Wa[f.currentUser.toKey()]=g}(r,o.batchId,t),await Df(r,o.changes),await Of(r.remoteStore)}catch(o){const u=qA(o,"Failed to persist write");t.reject(u)}}function LT(s,e,t){const r=ot(s);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const o=[];r.ka.forEach((u,f)=>{const p=f.view.sa(e);p.snapshot&&o.push(p.snapshot)}),function(f,p){const m=ot(f);m.onlineState=p;let g=!1;m.queries.forEach((E,A)=>{for(const O of A.ta)O.sa(p)&&(g=!0)}),g&&tk(m)}(r.eventManager,e),o.length&&r.La.p_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rk(s,e){const t=ot(s),r=e.batch.batchId;try{const o=await xx(t.localStore,e);KA(t,r,null),GA(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Df(t,o)}catch(o){await g_(o)}}async function ak(s,e,t){const r=ot(s);try{const o=await function(f,p){const m=ot(f);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let E;return m.mutationQueue.lookupMutationBatch(g,p).next(A=>(Et(A!==null),E=A.keys(),m.mutationQueue.removeMutationBatch(g,A))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,E,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E)).next(()=>m.localDocuments.getDocuments(g,E))})}(r.localStore,e);KA(r,e,t),GA(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Df(r,o)}catch(o){await g_(o)}}function GA(s,e){(s.Ga.get(e)||[]).forEach(t=>{t.resolve()}),s.Ga.delete(e)}function KA(s,e,t){const r=ot(s);let o=r.Wa[r.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),r.Wa[r.currentUser.toKey()]=o}}async function Df(s,e,t){const r=ot(s),o=[],u=[],f=[];r.ka.isEmpty()||(r.ka.forEach((p,m)=>{f.push(r.Ha(m,e,t).then(g=>{var E;if((g||t)&&r.isPrimaryClient){const A=g?!g.fromCache:(E=void 0)===null||E===void 0?void 0:E.current;r.sharedClientState.updateQueryState(m.targetId,A?"current":"not-current")}if(g){o.push(g);const A=D_.Yi(m.targetId,g);u.push(A)}}))}),await Promise.all(f),r.La.p_(o),await async function(m,g){const E=ot(m);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>Z.forEach(g,O=>Z.forEach(O.Hi,z=>E.persistence.referenceDelegate.addReference(A,O.targetId,z)).next(()=>Z.forEach(O.Ji,z=>E.persistence.referenceDelegate.removeReference(A,O.targetId,z)))))}catch(A){if(!Yu(A))throw A;_e(Nx,"Failed to update sequence numbers: "+A)}for(const A of g){const O=A.targetId;if(!A.fromCache){const z=E.Ts.get(O),F=z.snapshotVersion,Q=z.withLastLimboFreeSnapshotVersion(F);E.Ts=E.Ts.insert(O,Q)}}}(r.localStore,u))}async function ok(s,e){const t=ot(s);if(!t.currentUser.isEqual(e)){_e(nk,"User change. New user:",e.toKey());const r=await UA(t.localStore,e);t.currentUser=e,function(u,f){u.Ga.forEach(p=>{p.forEach(m=>{m.reject(new be(ne.CANCELLED,f))})}),u.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Df(t,r.Rs)}}function lk(s){const e=ot(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ak.bind(null,e),e}class hf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=If(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return Dx(this.persistence,new Ix,e.initialUser,this.serializer)}Xa(e){return new VA(O_.ri,this.serializer)}Za(e){return new Px}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hf.provider={build:()=>new hf};class uk extends hf{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Et(this.persistence.referenceDelegate instanceof cf);const r=this.persistence.referenceDelegate.garbageCollector;return new dx(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?bn.withCacheSize(this.cacheSizeBytes):bn.DEFAULT;return new VA(r=>cf.ri(r,t),this.serializer)}}class Dm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>LT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ok.bind(null,this.syncEngine),await Jx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ek}()}createDatastore(e){const t=If(e.databaseInfo.databaseId),r=function(u){return new Bx(u)}(e.databaseInfo);return function(u,f,p,m){return new qx(u,f,p,m)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,o,u,f,p){return new Kx(r,o,u,f,p)}(this.localStore,this.datastore,e.asyncQueue,t=>LT(this.syncEngine,t,0),function(){return OT.D()?new OT:new Lx}())}createSyncEngine(e,t){return function(o,u,f,p,m,g,E){const A=new ik(o,u,f,p,m,g);return E&&(A.ja=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=ot(o);_e($u,"RemoteStore shutting down."),u.W_.add(5),await Xu(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Dm.provider={build:()=>new Dm};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="FirestoreClient";class ck{constructor(e,t,r,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=o,this.user=cn.UNAUTHENTICATED,this.clientId=rA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(r,async f=>{_e(Sr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(r,f=>(_e(Sr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new la;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=qA(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zp(s,e){s.asyncQueue.verifyOperationInProgress(),_e(Sr,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let r=t.initialUser;s.setCredentialChangeListener(async o=>{r.isEqual(o)||(await UA(e.localStore,o),r=o)}),e.persistence.setDatabaseDeletedListener(()=>s.terminate()),s._offlineComponents=e}async function VT(s,e){s.asyncQueue.verifyOperationInProgress();const t=await hk(s);_e(Sr,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener(r=>xT(e.remoteStore,r)),s.setAppCheckTokenChangeListener((r,o)=>xT(e.remoteStore,o)),s._onlineComponents=e}async function hk(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){_e(Sr,"Using user provided OfflineComponentProvider");try{await Zp(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===ne.FAILED_PRECONDITION||o.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;wf("Error using user provided cache. Falling back to memory cache: "+t),await Zp(s,new hf)}}else _e(Sr,"Using default OfflineComponentProvider"),await Zp(s,new uk(void 0));return s._offlineComponents}async function fk(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(_e(Sr,"Using user provided OnlineComponentProvider"),await VT(s,s._uninitializedComponentsProvider._online)):(_e(Sr,"Using default OnlineComponentProvider"),await VT(s,new Dm))),s._onlineComponents}function dk(s){return fk(s).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(s,e,t){if(!t)throw new be(ne.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function mk(s,e,t,r){if(e===!0&&r===!0)throw new be(ne.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function jT(s){if(!xe.isDocumentKey(s))throw new be(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function k_(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":Le()}function xm(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new be(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=k_(s);throw new be(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA="firestore.googleapis.com",BT=!0;class zT{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new be(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=YA,this.ssl=BT}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:BT;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=LA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hx)throw new be(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=WA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new be(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new be(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new be(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class M_{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new be(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new be(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new WD;switch(r.type){case"firstParty":return new XD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new be(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=UT.get(t);r&&(_e("ComponentProvider","Removing Datastore"),UT.delete(t),r.terminate())}(this),Promise.resolve()}}function _k(s,e,t,r={}){var o;const u=(s=xm(s,M_))._getSettings(),f=Object.assign(Object.assign({},u),{emulatorOptions:s._getEmulatorOptions()}),p=`${e}:${t}`;u.host!==YA&&u.host!==p&&wf("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:p,ssl:!1,emulatorOptions:r});if(!ca(m,f)&&(s._setSettings(m),r.mockUserToken)){let g,E;if(typeof r.mockUserToken=="string")g=r.mockUserToken,E=cn.MOCK_USER;else{g=yC(r.mockUserToken,(o=s._app)===null||o===void 0?void 0:o.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new be(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new cn(A)}s._authCredentials=new YD(new sA(g,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new P_(this.firestore,e,this._query)}}class Ts{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ts(this.firestore,e,this._key)}}class Lu extends P_{constructor(e,t,r){super(e,t,R2(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ts(this.firestore,null,new xe(e))}withConverter(e){return new Lu(this.firestore,e,this._path)}}function gk(s,e,...t){if(s=Cn(s),arguments.length===1&&(e=rA.newId()),pk("doc","path",e),s instanceof M_){const r=Rt.fromString(e,...t);return jT(r),new Ts(s,null,new xe(r))}{if(!(s instanceof Ts||s instanceof Lu))throw new be(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=s._path.child(Rt.fromString(e,...t));return jT(r),new Ts(s.firestore,s instanceof Lu?s.converter:null,new xe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="AsyncQueue";class FT{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new jA(this,"async_queue_retry"),this.bu=()=>{const r=Xp();r&&_e(HT,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const t=Xp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Xp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new la;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Yu(e))throw e;_e(HT,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const o=function(f){let p=f.message||"";return f.stack&&(p=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),p}(r);throw va("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.pu=!1,r))));return this.Su=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=x_.createAndSchedule(this,e,t,r,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&Le()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class QA extends M_{constructor(e,t,r,o){super(e,t,r,o),this.type="firestore",this._queue=new FT,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new FT(e),this._firestoreClient=void 0,await e}}}function yk(s,e){const t=s0(),r=nf,o=Um(t,"firestore").getImmediate({identifier:r});if(!o._initialized){const u=gC("firestore");u&&_k(o,...u)}return o}function vk(s){if(s._terminated)throw new be(ne.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||Ek(s),s._firestoreClient}function Ek(s){var e,t,r;const o=s._freezeSettings(),u=function(p,m,g,E){return new f2(p,m,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,WA(E.experimentalLongPollingOptions),E.useFetchStreams)}(s._databaseId,((e=s._app)===null||e===void 0?void 0:e.options.appId)||"",s._persistenceKey,o);s._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(s._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),s._firestoreClient=new ck(s._authCredentials,s._appCheckCredentials,s._queue,u,s._componentsProvider&&function(p){const m=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(m),_online:m}}(s._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vu(Bi.fromBase64String(e))}catch(t){throw new be(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vu(Bi.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new be(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new be(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new be(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Je(this._lat,e._lat)||Je(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,o){if(r.length!==o.length)return!1;for(let u=0;u<r.length;++u)if(r[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=/^__.*__$/;class Sk{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ra(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qu(e,this.data,t,this.fieldTransforms)}}function ew(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Le()}}class L_{constructor(e,t,r,o,u,f){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new L_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:r,Qu:!1});return o.$u(e),o}Ku(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:r,Qu:!1});return o.Bu(),o}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return ff(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(ew(this.Lu)&&Tk.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Ak{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||If(e)}ju(e,t,r,o=!1){return new L_({Lu:e,methodName:t,zu:r,path:nn.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wk(s){const e=s._freezeSettings(),t=If(s._databaseId);return new Ak(s._databaseId,!!e.ignoreUndefinedProperties,t)}function bk(s,e,t,r,o,u={}){const f=s.ju(u.merge||u.mergeFields?2:0,e,t,o);sw("Data must be an object, but it was:",f,r);const p=nw(r,f);let m,g;if(u.merge)m=new pi(f.fieldMask),g=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const A of u.mergeFields){const O=Ck(e,A,t);if(!f.contains(O))throw new be(ne.INVALID_ARGUMENT,`Field '${O}' is specified in your field mask but missing from your input data.`);Nk(E,O)||E.push(O)}m=new pi(E),g=f.fieldTransforms.filter(A=>m.covers(A.field))}else m=null,g=f.fieldTransforms;return new Sk(new fi(p),m,g)}function tw(s,e){if(iw(s=Cn(s)))return sw("Unsupported field value:",e,s),nw(s,e);if(s instanceof XA)return function(r,o){if(!ew(o.Lu))throw o.Wu(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${r._methodName}() is not currently supported inside arrays`);const u=r._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,o){const u=[];let f=0;for(const p of r){let m=tw(p,o.Uu(f));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),f++}return{arrayValue:{values:u}}}(s,e)}return function(r,o){if((r=Cn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return V2(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const u=Wt.fromDate(r);return{timestampValue:Rm(o.serializer,u)}}if(r instanceof Wt){const u=new Wt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rm(o.serializer,u)}}if(r instanceof ZA)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vu)return{bytesValue:$2(o.serializer,r._byteString)};if(r instanceof Ts){const u=o.databaseId,f=r.firestore._databaseId;if(!f.isEqual(u))throw o.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:MA(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof JA)return function(f,p){return{mapValue:{fields:{[fA]:{stringValue:dA},[Sm]:{arrayValue:{values:f.toArray().map(g=>{if(typeof g!="number")throw p.Wu("VectorValues must only contain numeric values.");return R_(p.serializer,g)})}}}}}}(r,o);throw o.Wu(`Unsupported field value: ${k_(r)}`)}(s,e)}function nw(s,e){const t={};return oA(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qo(s,(r,o)=>{const u=tw(o,e.qu(r));u!=null&&(t[r]=u)}),{mapValue:{fields:t}}}function iw(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof Wt||s instanceof ZA||s instanceof Vu||s instanceof Ts||s instanceof XA||s instanceof JA)}function sw(s,e,t){if(!iw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const r=k_(t);throw r==="an object"?e.Wu(s+" a custom object"):e.Wu(s+" "+r)}}function Ck(s,e,t){if((e=Cn(e))instanceof $A)return e._internalPath;if(typeof e=="string")return Ik(s,e);throw ff("Field path arguments must be of type string or ",s,!1,void 0,t)}const Rk=new RegExp("[~\\*/\\[\\]]");function Ik(s,e,t){if(e.search(Rk)>=0)throw ff(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new $A(...e.split("."))._internalPath}catch{throw ff(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function ff(s,e,t,r,o){const u=r&&!r.isEmpty(),f=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||f)&&(m+=" (found",u&&(m+=` in field ${r}`),f&&(m+=` in document ${o}`),m+=")"),new be(ne.INVALID_ARGUMENT,p+s+m)}function Nk(s,e){return s.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(s,e,t){let r;return r=s?s.toFirestore(e):e,r}function Dk(s,e,t){s=xm(s,Ts);const r=xm(s.firestore,QA),o=Ok(s.converter,e);return xk(r,[bk(wk(r),"setDoc",s._key,o,s.converter!==null,t).toMutation(s._key,Es.none())])}function xk(s,e){return function(r,o){const u=new la;return r.asyncQueue.enqueueAndForget(async()=>sk(await dk(r),o,u)),u.promise}(vk(s),e)}(function(e,t=!0){(function(o){Yo=o})(Sa),ha(new gr("firestore",(r,{instanceIdentifier:o,options:u})=>{const f=r.getProvider("app").getImmediate(),p=new QA(new QD(r.getProvider("auth-internal")),new ZD(f,r.getProvider("app-check-internal")),function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new be(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sf(g.options.projectId,E)}(f,o),f);return u=Object.assign({useFetchStreams:t},u),p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),Vi(rT,aT,e),Vi(rT,aT,"esm2017")})();const kk={apiKey:"AIzaSyDWN5GCnrhUqKZlOt8Rxb0n748lhPf9B58",authDomain:"to-do-list-9cf11.firebaseapp.com",databaseURL:"https://to-do-list-9cf11-default-rtdb.firebaseio.com",projectId:"to-do-list-9cf11",storageBucket:"to-do-list-9cf11.firebasestorage.app",messagingSenderId:"44862500438",appId:"1:44862500438:web:ccb0f012d9c8e7cfe215f7",measurementId:"G-HB8NT8L1FD"};i0(kk);const Mk=yk(),ko=sN(),Pk=({editing:s,setPage:e,indicated:t,setIndicated:r,showTaskPrompt:o,url:u,setUrl:f,showSignInPrompt:p,showSignUpPrompt:m,setShowSignInPrompt:g,setShowSignUpPrompt:E,showSortPrompt:A,user:O,setUser:z,setShowPersonalInformation:F,setLoading:Q})=>{const[W,Y]=ce.useState(!1),ee=se=>{let oe=window.location.href;oe.toLowerCase();let me=oe.search("/Acad/");oe=oe.slice(0,me+6),console.log(oe.concat(se)),f(oe.concat(se))},te=async()=>{Q(!0);try{await W1(ko),z({}),Q(!1)}catch(se){console.log(se)}};return ce.useEffect(()=>{u.includes("#Home")?r(0):u.includes("#Tasks")?r(1):u.includes("#About")?r(2):u.includes("#Contacts")&&r(3)},[u]),S.jsxs(S.Fragment,{children:[S.jsxs("nav",{className:!p&&!m&&!o&&!s&&!A?De.nav:De.hideNav,children:[S.jsxs("div",{className:De.left,children:[S.jsx("img",{src:"./web-icon.png",className:De.icon}),S.jsx("h1",{children:"ACAD"})]}),S.jsx("div",{className:De.middle,children:S.jsxs("ul",{className:De.NavLinks,children:[S.jsx("li",{onClick:()=>{r(0),e(1),ee("#Home")},className:t===0?De.indicated:De.notIndicated,children:S.jsxs("a",{href:"#Home",children:[S.jsx("img",{src:"./icons/house.svg"})," ",S.jsxs("span",{children:["Home",S.jsx("span",{className:De.indication})]})]})}),S.jsxs("li",{onClick:()=>{r(1),e(2),ee("#Tasks")},className:t===1?De.indicated:De.notIndicated,children:[S.jsxs("a",{href:"#Tasks",children:[S.jsx("img",{src:"./icons/book-solid.svg"})," ",S.jsxs("span",{children:["Tasks",S.jsx("span",{className:De.indication})]})]})," "]}),S.jsx("li",{onClick:()=>{r(2),e(3),ee()},className:t===2?De.indicated:De.notIndicated,children:S.jsxs("a",{href:"",children:[S.jsx("img",{src:"./icons/circle-info-solid.svg"}),S.jsxs("span",{children:["Help",S.jsx("span",{className:De.indication})]})]})})]})}),O?S.jsxs("div",{className:`${De.right} ${De.LoggedIn}`,children:[S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-user"}),className:`${De.User_Button}`,content:"Account",func:()=>F(!0)}),S.jsx(Te,{content:"Sign Out",func:()=>{te()},className:De.SignUpButt}),S.jsx(Te,{className:De.HamburgerButt,func:()=>{Y(!0)},content:S.jsx("i",{className:"fa fa-list-ul"})})]}):S.jsxs("div",{className:`${De.right} ${De.notLoggedIn}`,children:[S.jsx(Te,{content:"Sign In",func:()=>{g(!0)},className:De.SignInButt}),S.jsx(Te,{content:"Sign Up",func:()=>{E(!0)},className:De.SignUpButt}),S.jsx(Te,{className:De.HamburgerButt,func:()=>{Y(!0)},content:S.jsx("i",{className:"fa fa-list-ul"})})]})]}),S.jsx("div",{className:W?De.sidebar:De.hideSideBar,children:S.jsxs("ul",{className:W?De.NavLinks:De.hideNavLinks,children:[S.jsx(Te,{className:De.HamburgerButt,func:()=>{Y(!W)},content:S.jsx("i",{className:"fa fa-list-ul"})}),S.jsxs("li",{onClick:()=>{r(0),e(1)},className:t===0?De.indicated:De.notIndicated,children:[" ",S.jsxs("a",{href:"#Home",children:[S.jsx("img",{src:"./icons/house.svg"})," ",S.jsxs("span",{children:["Home",S.jsx("span",{className:De.indication})]})]})," "]}),S.jsxs("li",{onClick:()=>{r(1),e(2)},className:t===1?De.indicated:De.notIndicated,children:[" ",S.jsxs("a",{href:"#Tasks",children:[S.jsx("img",{src:"./icons/book-solid.svg"})," ",S.jsxs("span",{children:["Tasks",S.jsx("span",{className:De.indication})]})]})," "]}),S.jsxs("li",{onClick:()=>{r(2),e(3)},className:t===2?De.indicated:De.notIndicated,children:[" ",S.jsxs("a",{href:"",children:[S.jsx("img",{src:"./icons/circle-info-solid.svg"}),S.jsxs("span",{children:["Help",S.jsx("span",{className:De.indication})]})]})]})]})})]})},Lk=({page:s,setPage:e,setIndicated:t,indicated:r})=>S.jsxs("div",{className:s==1?ds.home_wrapper:ds.hideHome,id:"Home",children:[S.jsxs("div",{className:ds.left,children:[S.jsxs("div",{className:ds.wrapTop,children:[S.jsx("h1",{children:"Welcome User"}),S.jsxs("p",{children:["Write, read and document your work ",S.jsx("br",{})," and studies"]}),S.jsx("a",{href:"#Tasks",children:S.jsx(Te,{content:"Get Started",func:()=>{e(2),t(1)}})})]}),S.jsxs("div",{className:ds.wrapBottom,children:[S.jsx(Te,{className:ds.orange}),S.jsx(Te,{className:ds.purple}),S.jsx(Te,{className:ds.blue})]})]}),S.jsx("div",{className:ds.right,children:S.jsx("img",{src:"./StartingPage/Working.png"})})]}),Vk="_Task_Container_jr2xj_1",Uk="_tasks_jr2xj_45",jk="_Finished_jr2xj_69",Bk="_unchecked_jr2xj_93",zk="_checked_jr2xj_101",Hk="_col_jr2xj_109",Fk="_br_jr2xj_117",qk="_fs_jr2xj_125",Gk="_bgC_jr2xj_133",Kk="_fW_jr2xj_141",wn={Task_Container:Vk,tasks:Uk,Finished:jk,unchecked:Bk,checked:zk,col:Hk,br:Fk,fs:qk,bgC:Gk,fW:Kk},Wk=({handleSelectedTasks:s,selectTask:e,tasks:t,setTasks:r,searching:o,filteredTask:u,setFilteredTask:f,setOpenedTask:p,setEditing:m,type:g,sorting:E,sortOptions:A})=>{const[O,z]=ce.useState(t.map(Y=>({...Y,isChecked:!1})));function F(Y){let ee=t,te=[];ee=ee.map(se=>se.id===Y?{...se,isChecked:!se.isChecked}:se);for(let se=0;se<ee.length;se++)ee[se].isChecked&&te.push({id:ee[se].id,index:se}),se==ee.length-1&&(console.log(ee),s(te),te=[]);r(se=>se.map(oe=>oe.id===Y?{...oe,isChecked:!oe.isChecked}:oe)),o&&f(se=>se.map(oe=>oe.id===Y?{...oe,isChecked:!oe.isChecked}:oe))}ce.useEffect(()=>{z([...t])},[t]);const Q=()=>{if(o&&u!=null)return S.jsx("div",{className:wn.Task_Container,children:u.map((Y,ee)=>{if(Y.type==="pending"&&g==="Pending")return S.jsx(W,{task:Y,i:ee},Y.id);if(Y.type==="finished"&&g==="Finished")return S.jsx(W,{task:Y,i:ee},Y.id);if(g==="All Tasks")return S.jsx(W,{task:Y,i:ee},Y.id)})},"Task_Container");if(E&&!o){let Y=O;return S.jsx("div",{className:wn.Task_Container,children:A.map((ee,te)=>{if(te==0&&A[te].state==!0)return Y=Y.sort((se,oe)=>oe.dateCreated.time-se.dateCreated.time),Y.map((se,oe)=>S.jsx(W,{task:se,i:oe},se.id));if(te==1&&A[te].state==!0)return Y=Y.sort((se,oe)=>se.dateCreated.time-oe.dateCreated.time),Y.map((se,oe)=>S.jsx(W,{task:se,i:oe},se.id));if(te==2&&A[te].state==!0)return Y=Y.sort((se,oe)=>se.task.localeCompare(oe.task)),Y.map((se,oe)=>S.jsx(W,{task:se,i:oe},se.id));if(te==3&&A[te].state==!0)return Y=Y.sort((se,oe)=>oe.task.localeCompare(se.task)),Y.map((se,oe)=>S.jsx(W,{task:se,i:oe},se.id))})})}else if(!E&&!o)return S.jsx("div",{className:wn.Task_Container,children:O.map((Y,ee)=>{if(Y.type==="pending"&&g==="Pending")return S.jsx(W,{task:Y,i:ee},Y.id);if(Y.type==="finished"&&g==="Finished")return S.jsx(W,{task:Y,i:ee},Y.id);if(g==="All Tasks")return S.jsx(W,{task:Y,i:ee},Y.id)})})},W=({task:Y,i:ee})=>S.jsxs("label",{htmlFor:"task"+Y.id,style:Y.style!="default"?{...Y.style}:null,className:Y.type=="pending"?`${wn.Pending} ${Y.cName.map(te=>JSON.parse(te)).join(" ")} ${wn.tasks}`:`${wn.Finished} ${Y.cName.map(te=>JSON.parse(te)).join(" ")} ${wn.tasks}`,onDoubleClick:()=>{m(!0),p({id:Y.id,isOpened:!0})},children:[S.jsx("i",{style:e==!1?{display:"none"}:{display:"block"},className:`fa fa-check-square ${Y.isChecked===!0?wn.checked:wn.unchecked}`}),S.jsx("input",{style:{display:"none"},type:"checkbox",id:"task"+Y.id,onChange:()=>{e&&F(Y.id)}}),Y.task]},Y.id);if(O!=null)return S.jsx(Q,{})},Yk="_Bottom_Options_14lht_1",Qk="_toLeft_14lht_31",$k="_toRight_14lht_31",Xk="_Unchecked_14lht_57",Zk="_hide_14lht_105",lr={Bottom_Options:Yk,toLeft:Qk,toRight:$k,Unchecked:Xk,hide:Zk},Jk=({handleSelectedTasks:s,selectedTask:e,selectTask:t,setSelectTask:r,unselectAll:o,tasks:u,setTasks:f,searching:p,updateTasks:m,setUpdateTasks:g,filteredTasks:E,setFilteredTasks:A})=>{ce.useEffect(()=>{m&&console.log(m)},[m]);const O=()=>{let Q=u,W=E,Y=[],ee=[];if(p){W=W.map(te=>({...te,isChecked:!0}));for(let te=0;te<W.length;te++)W[te].isChecked&&ee.push({id:W[te].id,index:te});s([...ee])}else{Q=Q.map(te=>({...te,isChecked:!0}));for(let te=0;te<Q.length;te++)Q[te].isChecked&&Y.push({id:Q[te].id,index:te});s([...Y])}p?A([...W]):g(te=>te.map(se=>({...se,isChecked:!0})))};function z(){let Q=u,W=E;for(let Y in W)for(let ee in e)W[Y].id===e[ee].id&&W.splice(Y,1);for(let Y in u)for(let ee in e)Q[Y].id===e[ee].id&&Q.splice(Y,1);localStorage.setItem("dataTask",JSON.stringify(Q)),f([...Q]),p&&A([...W]),s(null)}const F=()=>t==!0?S.jsx(S.Fragment,{children:S.jsxs("div",{className:lr.toLeft,children:[S.jsx(Te,{content:S.jsx("span",{children:" Select All"}),icon:S.jsx("i",{className:"fa fa-check"}),className:lr.SelectAllButton,func:()=>{O()}}),S.jsx(Te,{content:S.jsx("span",{children:" Unselect All"}),icon:S.jsx("i",{className:`fas fa fa-check ${lr.Unchecked}`}),className:lr.UnselectAllButton,func:()=>{o()}})]})}):S.jsx(S.Fragment,{children:S.jsx(Te,{content:"Select",icon:S.jsx("i",{className:"fa fa-hand-o-up"}),className:lr.SelectButton,func:()=>r(!0)})});return S.jsx(S.Fragment,{children:S.jsxs("div",{className:lr.Bottom_Options,children:[S.jsx(F,{}),S.jsxs("div",{className:t==!0?lr.toRight:lr.hide,children:[S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-trash"}),content:" Delete",func:Q=>{t?z():console.log("No update")}}),S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-close"}),content:" Cancel",func:()=>{r(!1),o()}})]})]})})},eM="_DropDown_Body_1fdho_1",tM="_Hide_DropDown_Body_1fdho_1",nM="_Dropdown_Wrapper_1fdho_27",iM="_Not_Indicated_1fdho_59",sM="_Indicated_1fdho_69",lu={DropDown_Body:eM,Hide_DropDown_Body:tM,Dropdown_Wrapper:nM,Not_Indicated:iM,Indicated:sM},rM=({setSorting:s,setSortOptions:e,setType:t,showDropDown:r,handleType:o,unselectAll:u})=>{const f=["Pending","Finished","All Tasks"],[p,m]=ce.useState(0);function g(){s(!1),e(E=>E.map(A=>A.state?{...A,state:!1}:{...A}))}return S.jsx(S.Fragment,{children:S.jsx("div",{className:r?lu.DropDown_Body:lu.Hide_DropDown_Body,onClick:()=>{o()},children:S.jsx("ul",{className:lu.Dropdown_Wrapper,children:f.map((E,A)=>S.jsx("li",{className:p==A?lu.Indicated:lu.Not_Indicated,onClick:()=>{t(f[A]),m(A),u(),g()},children:E},f[A]))})})})},aM="_Options_tab_1uynk_1",oM="_Color_Wrapper_1uynk_23",lM="_Close_Button_1uynk_53",uM="_colorPicker_1uynk_143",cM="_Hide_BG_Color_Prompt_1uynk_175",hM="_Hide_Color_Prompt_1uynk_177",fM="_Hide_Border_Color_Prompt_1uynk_179",dM="_Hide_Font_Weight_Prompt_1uynk_181",pM="_Hide_Italic_Prompt_1uynk_183",mM="_BG_Color_Prompt_1uynk_191",_M="_Color_Prompt_1uynk_193",gM="_Border_Color_Prompt_1uynk_195",yM="_Wrap_Options_Tab_1uynk_203",vM="_createTask_1uynk_297",Ue={Options_tab:aM,Color_Wrapper:oM,Close_Button:lM,colorPicker:uM,Hide_BG_Color_Prompt:cM,Hide_Color_Prompt:hM,Hide_Border_Color_Prompt:fM,Hide_Font_Weight_Prompt:dM,Hide_Italic_Prompt:pM,BG_Color_Prompt:mM,Color_Prompt:_M,Border_Color_Prompt:gM,Wrap_Options_Tab:yM,createTask:vM},EM=({selectedTask:s,filteredTasks:e,updateTasks:t,searching:r,optionTabNumber:o,handleMarking:u,unselectAll:f,setShowTaskPrompt:p,setShowSortPrompt:m})=>{const[g,E]=ce.useState(o),[A,O]=ce.useState(!1),[z,F]=ce.useState(!1),[Q,W]=ce.useState(!1),[Y,ee]=ce.useState(!1),[te,se]=ce.useState(!1),[oe,me]=ce.useState(!1);function x(R,b,C,k,L,N){let $e=t,we=e,ie=[];for(let fe in s)if(r)for(let de in we)de==s[fe].index?(we[de].isChecked=!0,R!=!1&&(we[s[fe].index].type=R,ie.push(we[s[fe].index])),R==!1&&((we[s[fe].index].style=="default"||we[s[fe].index].style==null)&&(we[s[fe].index].style={color:"default",border:"default",fontStyle:"default",backgroundColor:"default",fontWeight:"default"}),b&&(we[s[fe].index].style.color=b,ie.push(we[s[fe].index])),C&&(we[s[fe].index].style.backgroundColor=C,ie.push(we[s[fe].index])),k&&(we[s[fe].index].style.fontWeight=k,ie.push(we[s[fe].index])),L&&(we[s[fe].index].style.fontStyle=L,ie.push(we[s[fe].index])),N&&(we[s[fe].index].style.borderColor=N,ie.push(we[s[fe].index])))):ie.push(we[s[fe].index]);for(let fe in s)$e=$e.map(de=>{if(s[fe].id==de.id){let Ee={...de};return Ee.style=Ee.style==="default"?{color:"default",border:"default",fontStyle:"default",backgroundColor:"default",fontWeight:"default"}:{...Ee.style},R!==!1&&(Ee.type=R),b&&(Ee.style={...Ee.style,color:b}),C&&(Ee.style={...Ee.style,backgroundColor:C}),k&&(Ee.style={...Ee.style,fontWeight:k}),L&&(Ee.style={...Ee.style,fontStyle:L}),N&&(Ee.style={...Ee.style,borderColor:N}),Ee.isChecked=!0,Ee}else return{...de}});r?u([...we],[...$e]):u(we,[...$e])}return ce.useEffect(()=>{E(o)},[o]),ce.useEffect(()=>{console.log(r,e)},[r,e]),S.jsxs("div",{className:Ue.Options_tab,children:[S.jsxs("div",{className:z?`${Ue.BG_Color_Prompt} ${Ue.Color_Wrapper}`:`${Ue.Hide_BG_Color_Prompt} ${Ue.Color_Wrapper}`,children:[S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Ue.Close_Button}`,func:()=>{F(!1)}}),S.jsx("h1",{children:"Change BG Color"}),S.jsxs("label",{htmlFor:"colorPicker",className:Ue.colorPicker,children:[S.jsx("input",{type:"color",id:"colorPicker",onBlur:R=>{x(!1,!1,R.target.value,!1,!1)}}),S.jsx("span",{children:"Choose BG Color"})]}),S.jsx(Te,{content:"Default",func:()=>{x(!1,!1,"#f09c2e",!1,!1)}})]}),S.jsxs("div",{className:Q?`${Ue.Color_Prompt} ${Ue.Color_Wrapper}`:`${Ue.Hide_Color_Prompt} ${Ue.Color_Wrapper}`,children:[S.jsx("h1",{children:"Change Font Color"}),S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Ue.Close_Button}`,func:()=>{W(!1)}}),S.jsxs("label",{htmlFor:"bgColorPicker",className:`${Ue.bgColorPicker} ${Ue.colorPicker}`,children:[S.jsx("input",{type:"color",id:"bgColorPicker",onBlur:R=>{x(!1,R.target.value,!1,!1,!1)}}),S.jsx("span",{children:"Choose Font Color"})]}),S.jsx(Te,{content:"Default",func:()=>{x(!1,"white",!1,!1,!1)}})]}),S.jsxs("div",{className:Y?`${Ue.Border_Color_Prompt} ${Ue.Color_Wrapper}`:`${Ue.Hide_Border_Color_Prompt} ${Ue.Color_Wrapper}`,children:[S.jsx("h1",{children:"Change Border Color"}),S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Ue.Close_Button}`,func:()=>{ee(!1)}}),S.jsxs("label",{htmlFor:"borderColorPicker",className:`${Ue.borderColorPicker} ${Ue.colorPicker}`,children:[S.jsx("input",{type:"color",id:"borderColorPicker",onBlur:R=>{x(!1,!1,!1,!1,!1,R.target.value)}}),S.jsx("span",{children:"Choose Border Color"})]}),S.jsx(Te,{content:"Default",func:()=>{x(!1,!1,!1,!1,!1,"#d16c06")}})]}),S.jsxs("div",{className:te?`${Ue.Font_Weight_Prompt} ${Ue.Color_Wrapper}`:`${Ue.Hide_Font_Weight_Prompt} ${Ue.Color_Wrapper}`,children:[S.jsx("h1",{children:"Change Font Weight"}),S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Ue.Close_Button}`,func:()=>{se(!1)}}),S.jsx(Te,{content:"Normal",func:()=>{x(!1,!1,!1,"Normal",!1,!1)}}),S.jsx(Te,{content:"Bold",func:()=>{x(!1,!1,!1,"Bold",!1,!1)}}),S.jsx(Te,{content:"Bolder",func:()=>{x(!1,!1,!1,"Bolder",!1,!1)}})]}),S.jsxs("div",{className:oe?`${Ue.Italic_Prompt} ${Ue.Color_Wrapper}`:`${Ue.Hide_Italic_Prompt} ${Ue.Color_Wrapper}`,children:[S.jsx("h1",{children:"Change Italization"}),S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Ue.Close_Button}`,func:()=>{me(!1)}}),S.jsx(Te,{content:"Normal",func:()=>{x(!1,!1,!1,!1,"Normal",!1)}}),S.jsx(Te,{content:"Italic",func:()=>{x(!1,!1,!1,!1,"Italic",!1)}})]}),S.jsxs("div",{className:Ue.Wrap_Options_Tab,children:[S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-plus"}),content:S.jsx("span",{children:" Create New Task"}),className:Ue.createTask,func:()=>p(!0)}),S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-edit"}),content:S.jsx("span",{children:" Mark As Finished"}),func:()=>{x("finished",!1,!1,!1,!1),f()}}),S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-edit"}),content:S.jsx("span",{children:" Mark As Pending"}),func:()=>{x("pending",!1,!1,!1,!1),f()}}),S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-sort"}),content:S.jsx("span",{children:" Sort"}),func:()=>{m(!0)}}),S.jsx(Te,{icon:S.jsx("i",{className:"material-icons",children:"format_color_fill"}),content:S.jsx("span",{children:" BG Color "}),func:()=>{F(!0),W(!1),ee(!1),se(!1),me(!1)}}),S.jsx(Te,{icon:S.jsx("i",{className:"material-icons",children:"format_color_text"}),content:S.jsx("span",{children:" Font Color"}),func:()=>{W(!0),F(!1),ee(!1),se(!1,me(!1))}}),S.jsx(Te,{icon:S.jsx("i",{className:"material-icons",children:"border_color"}),content:S.jsx("span",{children:" Border Color"}),func:()=>{ee(!0),F(!1),W(!1),se(!1),me(!1)}}),S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-bold"}),content:" Bold",className:`${Ue.green} ${Ue.black}`,func:()=>{ee(!1),F(!1),W(!1),se(!0),me(!1)}}),S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-italic"}),content:" Italic",func:()=>{ee(!1),F(!1),W(!1),se(!1),me(!0)}})]})]})},TM="_Task_View_19nr4_1",SM="_Hide_Task_View_19nr4_19",AM="_nav_19nr4_57",wM="_content_19nr4_127",bM="_submitButton_19nr4_173",uu={Task_View:TM,Hide_Task_View:SM,nav:AM,content:wM,submitButton:bM},CM=({openedTask:s,setOpenedTask:e,filteredTask:t,searching:r,tasks:o,taskEditingP:u,saveChanges:f,handleEditing:p,setEditing:m,editing:g})=>S.jsxs("div",{className:g?uu.Task_View:uu.Hide_Task_View,children:[S.jsxs("div",{className:uu.nav,children:[S.jsxs("h3",{children:[S.jsx("i",{className:"fa fa-edit"})," ",S.jsx("span",{children:"Edit Task"})]}),S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-times"}),func:()=>{e({index:null,isOpened:!1}),m(!1)}})]}),S.jsx("div",{className:uu.content,children:S.jsx("p",{ref:u,onInput:E=>{p(E)},contentEditable:g,children:o.map((E,A)=>{if(E.id===s.id)return E.task})})}),S.jsx(Te,{content:"Save Changes",className:uu.submitButton,func:()=>{f(s.index),m(!1)}})]}),RM="_Task_prompt_wrapper_hoxzz_1",IM="_Hide_task_prompt_wrapper_hoxzz_1",NM="_nav_hoxzz_41",OM="_content_hoxzz_111",DM="_submitButton_hoxzz_157",cu={Task_prompt_wrapper:RM,Hide_task_prompt_wrapper:IM,nav:NM,content:OM,submitButton:DM},xM=({showTaskPrompt:s,setShowTaskPrompt:e,writeTask:t})=>{const r=ce.useRef(null),o=ce.useRef(null),[u,f]=ce.useState(!1);function p(){f(Math.random()*1)}function m(){t(o.current.innerText)}function g(){o.current.innerHTML="<br>",E()}function E(){o.current.innerText==`
`||o.current.innerHTML=="<br>"?r.current.style.display="block":r.current.style.display="none"}return ce.useEffect(()=>{},[u]),S.jsx(S.Fragment,{children:S.jsxs("div",{className:s?cu.Task_prompt_wrapper:cu.Hide_task_prompt_wrapper,children:[S.jsxs("div",{className:cu.nav,children:[S.jsxs("h3",{children:[S.jsx("i",{className:"fa fa-edit"})," ",S.jsx("span",{children:"Task Prompt"})]}),S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-times"}),func:()=>{e(!1),g()}})]}),S.jsxs("div",{className:cu.content,children:[S.jsx("span",{ref:r,children:"Type Any Task..."}),S.jsx("p",{ref:o,contentEditable:"true",onInput:()=>{p(),E()}})]}),S.jsx(Te,{content:"Submit",className:cu.submitButton,func:()=>{m(),e(!1),g()}})]})})},kM="_Sort_Wrapper_1nnq2_17",MM="_Hide_Sort_Wrapper_1nnq2_19",PM="_Sort_Box_1nnq2_51",LM="_Hide_Sort_Box_Button_1nnq2_75",VM="_Sort_Options_1nnq2_105",UM="_checked_1nnq2_153",jM="_unchecked_1nnq2_153",ur={Sort_Wrapper:kM,Hide_Sort_Wrapper:MM,Sort_Box:PM,Hide_Sort_Box_Button:LM,Sort_Options:VM,checked:UM,unchecked:jM},BM=({setShowSortPrompt:s,showSortPrompt:e,sortOptions:t,setSortOptions:r,setSorting:o,sorting:u})=>{function f(p){let m=t;m=m.map((g,E)=>m[E]===m[p]?{...g,state:!g.state}:{...g,state:!1});for(let g in m){if(m[g].state==!0){o(!0);break}g==m.length-1&&!m[g].state&&o(!1)}r([...m])}return S.jsx("div",{className:e?ur.Sort_Wrapper:ur.Hide_Sort_Wrapper,children:S.jsxs("div",{className:e?ur.Sort_Box:ur.Hide_Sort_Box,children:[S.jsx("h2",{children:"Sort Settings"}),S.jsx(Te,{icon:S.jsx("i",{className:"fa fa-close"}),className:ur.Hide_Sort_Box_Button,func:()=>{s(!1)}}),S.jsx("div",{className:ur.Sort_Options,children:t.map((p,m)=>S.jsx(Te,{icon:S.jsx("i",{className:`fa fa-check-square ${p.state==!0?ur.checked:ur.unchecked}`}),content:p.description,func:()=>{f(m)}},p.description))})]})})},zM="_Hide_Task_Wrapper_1r76k_5",HM="_Task_Wrapper_1r76k_13",FM="_Tasks_Editor_1r76k_33",qM="_Search_wrapper_1r76k_103",Eo={Hide_Task_Wrapper:zM,Task_Wrapper:HM,Tasks_Editor:FM,Search_wrapper:qM},GM=({page:s,showTaskPrompt:e,setShowTaskPrompt:t,setEditing:r,editing:o,showSortPrompt:u,setShowSortPrompt:f,user:p})=>{const m=ce.useRef(null),g=ce.useRef(null),[E,A]=ce.useState(!1),[O,z]=ce.useState(!1),[F,Q]=ce.useState(!1),[W,Y]=ce.useState(!0),[ee,te]=ce.useState([]),[se,oe]=ce.useState(1),[me,x]=ce.useState("Pending"),[R,b]=ce.useState(JSON.parse(localStorage.getItem("dataTask"))!=null?JSON.parse(localStorage.getItem("dataTask")):[]),[C,k]=ce.useState(R.map($=>({...$,isChecked:!1}))),[L,N]=ce.useState(null),[$e,we]=ce.useState({index:null,isOpened:!1}),[ie,fe]=ce.useState(null),[de,Ee]=ce.useState([{description:"Newest to Oldest",state:!0},{description:"Oldest to Newest",state:!1},{description:"From A-Z",state:!1},{description:"From Z-A",state:!1}]);function D(){Q(!1)}function q($){let Ne=R,Mt="qwertyuiopasdfghjklzxcvbnm",Pt="";for(let ni=0;ni<10;ni++){let ii=Math.floor(Math.random()*(Mt.length-1));Pt=Pt.concat(Mt[ii])}let gi={id:Pt,task:$,dateCreated:{fullDate:new Date,time:Date.now()},selected:!1,style:"default",cName:[JSON.stringify(wn.col),JSON.stringify(wn.br),JSON.stringify(wn.fs),JSON.stringify(wn.bgC),JSON.stringify(wn.fW)],isChecked:!1,type:"pending"};Ne.unshift(gi),localStorage.setItem("dataTask",JSON.stringify(Ne)),k([...Ne])}function ue($,Ne){ee.length>=1&&(O&&N([...$]),k([...Ne]))}function le($){fe($.target.innerText)}const re=$=>{m.current.value==""?z(!1):(z(!0),N(R.filter(Ne=>Ne.task.toLowerCase().includes(m.current.value.toLowerCase()))),Y(!1))};function ve($){te($==null?[]:[...$])}function Ce($){we($)}function ft(){let $=de;for(let Ne=0;Ne<de.length;Ne++)if($[Ne].state==!0){Y(!0);break}else Ne==de.length-1&&de[Ne].state==!1&&Y(!1)}function Be($){let Ne=R;Ne[$].task=ie,k([...Ne])}const st=()=>{let $=R,Ne=L;O?(Ne=Ne.map(Mt=>({...Mt,isChecked:!1})),ve(null)):($=$.map(Mt=>({...Mt,isChecked:!1})),ve(null)),O?N([...Ne]):k(Mt=>Mt.map(Pt=>({...Pt,isChecked:!1})))};return ce.useEffect(()=>{b([...C]),localStorage.setItem("dataTask",JSON.stringify(C))},[L,C]),ce.useEffect(()=>{},[p]),S.jsx(S.Fragment,{children:S.jsxs("div",{className:s==2?Eo.Task_Wrapper:Eo.Hide_Task_Wrapper,id:"Tasks",children:[S.jsx(xM,{showTaskPrompt:e,setShowTaskPrompt:t,writeTask:$=>{q($)}}),S.jsxs("div",{className:Eo.Tasks_Editor,children:[S.jsxs("h2",{className:Eo.Title_wrapper,children:["Tasks",S.jsx("i",{className:"fa fa-bars",onClick:()=>{Q(!F)}}),S.jsx(rM,{type:me,setType:$=>{x($)},showDropDown:F,handleType:$=>{D()},unselectAll:$=>{st()},setSortOptions:$=>{Ee($)},setSorting:$=>{Y($)}})]}),S.jsx(EM,{optionTabNumber:se,updateTasks:C,filteredTasks:L,setShowTaskPrompt:$=>{t($)},searching:O,setSearching:$=>z($),handleSearch:()=>{re()},selectedTask:ee,handleMarking:($,Ne)=>{ue($,Ne)},markAsPending:$=>{markAsPending($)},unselectAll:()=>st(),setBgColor:$=>setBgColor($),setColor:$=>setColor($),setShowSortPrompt:$=>{f($)}}),S.jsx("div",{className:Eo.Search_wrapper,children:S.jsxs("div",{children:[S.jsx("label",{htmlFor:"search-bar",children:S.jsx("i",{className:"fa fa-search"})}),S.jsx("input",{ref:m,id:"search-bar",type:"text",placeholder:"Type Task...",onChange:()=>{m.current.value==""&&(ft(),re())}}),S.jsx(Te,{content:"Search",className:Eo.Search_button,func:()=>{re(),ft()}})]})}),S.jsx(Jk,{selectedTask:ee,handleSelectedTasks:$=>ve($),selectTask:E,setSelectTask:A,unselectAll:()=>{st()},tasks:R,setTasks:$=>{k($)},filteredTasks:L,setFilteredTasks:$=>{N($)},searching:O,setUpdateTasks:$=>k($),updateTasks:C}),S.jsx(Wk,{selectedTasks:ee,setSelectedTasks:()=>te(),selectTask:E,tasks:R,setTasks:$=>{b($)},del:$=>{del($)},handleSelectedTasks:$=>ve($),filteredTask:L,setFilteredTask:$=>{N($)},searching:O,handleOpenedTask:$=>{Ce($)},openedTask:$e,setShowTaskPrompt:$=>{t($)},editing:o,setEditing:$=>{r($)},setOpenedTask:$=>{we($)},type:me,setSorting:$=>{Y($)},sorting:W,sortOptions:de}),S.jsx(CM,{openedTask:$e,setOpenedTask:$=>{we($)},tasks:R,taskEditingP:g,saveChanges:($,Ne)=>{Be($)},editing:o,filteredTask:L,searching:O,setEditing:$=>{r($)},handleEditing:$=>{le($)},editedValue:ie}),S.jsx(BM,{showSortPrompt:u,setShowSortPrompt:$=>{f($)},sortOptions:de,setSortOptions:$=>{Ee($)},setSorting:$=>{Y($)},sorting:W})]})]})})},KM="_sign_up_container_mvskv_19",WM="_goToStartingPage_mvskv_41",YM="_top_arc_mvskv_65",QM="_form_mvskv_91",$M="_username_con_mvskv_105",XM="_password_con_mvskv_107",ZM="_more_actions_mvskv_121",JM="_sign_in_button_mvskv_219",eP="_other_platforms_container_mvskv_251",tP="_icon_wrapper_mvskv_273",nP="_wrapper_mvskv_285",Zt={sign_up_container:KM,goToStartingPage:WM,top_arc:YM,form:QM,username_con:$M,password_con:XM,more_actions:ZM,sign_in_button:JM,other_platforms_container:eP,icon_wrapper:tP,wrapper:nP};function iP({user:s,setUser:e,showSignInPrompt:t,setShowSignInPrompt:r,setShowSignUpPrompt:o,setLoading:u}){const[f,p]=ce.useState(!1),m=ce.useRef(null),g=ce.useRef(null),E=ce.useRef(null),A=ce.useRef(null);K1(ko,Q=>{e(Q)});const O=Q=>{(Q.target.value==null||Q.target.value!=null)&&(m.current.textContent="")},z=Q=>{(Q.target.value==null||Q.target.value!=null)&&(g.current.textContent="")},F=async()=>{u(!0);try{await F1(ko,E.current.value,A.current.value),e(ko.currentUser),u(!1),r(!1)}catch(Q){console.log(Q)}};if(ce.useEffect(()=>{s&&console.log(s)},[s]),t==!0)return S.jsx(S.Fragment,{children:S.jsxs("div",{className:Zt.sign_up_container,children:[S.jsx(Te,{func:()=>{r(!1)},content:"X",className:Zt.goToStartingPage}),S.jsx("div",{className:Zt.top_arc,children:"SIGN IN"}),S.jsxs("div",{className:Zt.form,children:[S.jsxs("div",{className:Zt.username_con,children:[S.jsx("h3",{children:"Username :"}),S.jsx("input",{className:"emailInput",ref:E,onInput:Q=>{O(Q)}}),S.jsx("span",{ref:m})]}),S.jsxs("div",{className:Zt.password_con,children:[S.jsx("h3",{children:"Password :"}),S.jsx("input",{type:f?"text":"password",ref:A,onInput:Q=>{z(Q)},className:Zt.Password}),S.jsx("span",{ref:g}),S.jsx("img",{src:f?"./password/visible.png":"./password/unsee.png",className:Zt.see_password,onClick:()=>{p(!f)}})]}),S.jsxs("div",{className:Zt.more_actions,children:[S.jsx("span",{className:Zt.forgot_pass,children:"Forgot Password"}),S.jsx("span",{className:Zt.create_acc,onClick:()=>{r(!1),o(!0)},children:"Doesn't Have An Account?"})]}),S.jsx(Te,{className:Zt.sign_in_button,func:()=>{F()},content:"SIGN IN"})]}),S.jsxs("div",{className:Zt.other_platforms_container,children:[S.jsxs("div",{className:Zt.icon_wrapper,children:[S.jsx("div",{className:Zt.wrapper,children:S.jsx("img",{src:"./platforms/GG.png "})}),S.jsx("div",{className:Zt.wrapper,children:S.jsx("img",{src:"./platforms/facebook.png"})}),S.jsx("div",{className:Zt.wrapper,children:S.jsx("img",{src:"./platforms/Instagram.png"})})]}),S.jsx("h3",{children:"SIGN IN WITH DIFFERENT PLATFORMS"})]})]})})}const sP="_hide_fc9cy_1",rP="_inputs_1_fc9cy_7",ia={hide:sP,inputs_1:rP},aP=({show:s,indicated:e,showConfirm:t,setShow:r,setShowConfirm:o,passwordInput:u,confirmPasswordInput:f,emailInput:p,passWarning:m,confirmWarning:g,emailWarning:E})=>S.jsxs("div",{className:e==0?ia.inputs_1:ia.hide,children:[S.jsxs("div",{className:ia.email,children:[S.jsx("h4",{children:"Email"}),S.jsx("input",{type:"text",ref:p}),S.jsx("span",{ref:E})]}),S.jsxs("div",{className:ia.password,children:[S.jsx("h4",{children:"Password"}),S.jsx("input",{type:s?"text":"password",ref:u}),S.jsx("img",{src:s?"./password/visible.png":"./password/unsee.png",className:ia.see_password,onClick:()=>{r(!s)}}),S.jsx("span",{ref:m})]}),S.jsxs("div",{className:ia.confirm,children:[S.jsx("h4",{children:"Confirm Password"}),S.jsx("input",{type:t?"text":"password",ref:f}),S.jsx("img",{src:t?"./password/visible.png":"./password/unsee.png",className:ia.see_confirm,onClick:()=>{o(!t)}}),S.jsx("span",{ref:g})]})]}),oP="_hide_6obhl_1",lP="_inputs_2_6obhl_11",uP="_top_6obhl_31",cP="_notIndicated_6obhl_71",hP="_indicated_6obhl_81",hu={hide:oP,inputs_2:lP,top:uP,notIndicated:cP,indicated:hP},fP=({indicated:s,usingAsInput:e,usageOptions:t,handleUsageOptions:r})=>S.jsxs("div",{className:s==1?hu.inputs_2:hu.hide,children:[S.jsx("h3",{children:"Why am I using the To-Do List Web App?"}),S.jsx("div",{children:S.jsxs("div",{className:hu.top,children:[t.map((o,u)=>S.jsx(Te,{content:o.content,className:o.isIndicated?hu.indicated:hu.notIndicated,func:()=>{r(u)}},o.content)),S.jsx("input",{type:"text",placeholder:"Other reason...",ref:e})]})})]}),dP="_hide_r58tk_1",pP="_inputs_3_r58tk_9",fu={hide:dP,inputs_3:pP},mP=({show:s,indicated:e,showConfirm:t,nickNameInput:r,schoolInput:o,grSecInput:u,nameWarning:f,schoolWarning:p,grSecWarning:m})=>S.jsxs("div",{className:e==2?fu.inputs_3:fu.hide,children:[S.jsxs("div",{className:fu.username,children:[S.jsx("h4",{children:"Name"}),S.jsx("input",{type:"text",ref:r}),S.jsx("span",{ref:f})]}),S.jsxs("div",{className:fu.password,children:[S.jsx("h4",{children:"School"}),S.jsx("input",{type:"text",ref:o}),S.jsx("span",{ref:p})]}),S.jsxs("div",{className:fu.confirm,children:[S.jsx("h4",{children:"Grade & Section"}),S.jsx("input",{type:"text",ref:u}),S.jsx("span",{ref:m})]})]}),_P="_hide_j48mp_15",gP="_inputs_4_j48mp_23",yP="_wrapper_j48mp_85",vP="_IndicatedButt_j48mp_125",EP="_notIndicatedButt_j48mp_145",To={hide:_P,inputs_4:gP,wrapper:yP,IndicatedButt:vP,notIndicatedButt:EP},TP=({indicated:s,subjects:e,handleSubjects:t})=>{if(e!=null)return S.jsx("div",{className:s==3?To.inputs_4:To.hide,children:S.jsxs("div",{className:To.wrapper,children:[S.jsx("h4",{children:"What is your favorite subject?"}),S.jsx("div",{className:To.buttons,children:e.map((r,o)=>S.jsx(Te,{func:()=>{t(o)},className:r.testClass==!0?To.IndicatedButt:To.notIndicatedButt,content:e[o].content},r+o.toString()))})]})})},SP="_sign_up_wrapper_6gch2_23",AP="_form_1_6gch2_53",wP="_to_bottom_6gch2_75",bP="_bottom_6gch2_113",CP="_buttons_6gch2_125",RP="_indicator_6gch2_169",IP="_indicated_6gch2_197",NP="_not_indicated_6gch2_205",OP="_goToStartingPage_6gch2_259",un={sign_up_wrapper:SP,form_1:AP,to_bottom:wP,bottom:bP,buttons:CP,indicator:RP,indicated:IP,not_indicated:NP,goToStartingPage:OP},DP=({setUsers:s,setShowSignInPrompt:e,showSignUpPrompt:t,setShowSignUpPrompt:r,setLoading:o})=>{ce.useRef(null),ce.useRef(null);const u=ce.useRef(null),f=ce.useRef(null),p=ce.useRef(null),m=ce.useRef(null),g=ce.useRef(null),E=ce.useRef(null),A=ce.useRef(null),O=ce.useRef(null),z=ce.useRef(null),F=ce.useRef(null),Q=ce.useRef(null),W=ce.useRef(null),Y=ce.useRef(null),[ee,te]=ce.useState(!1),[se,oe]=ce.useState(!1),[me,x]=ce.useState(0),[R,b]=ce.useState(),[C,k]=ce.useState([]),[L,N]=ce.useState([{content:"For Studies",isIndicated:!1},{content:"For Teaching Purposes",isIndicated:!1},{content:"For My Job",isIndicated:!1},{content:"Just for Fun",isIndicated:!1}]),[$e,we]=ce.useState([{content:"TLE",testClass:!1},{content:"Mathematics",testClass:!1},{content:"Science",testClass:!1},{content:"English",testClass:!1},{content:"Colloquium",testClass:!1},{content:"Filipino",testClass:!1},{content:"Mapeh",testClass:!1},{content:"AP",testClass:!1},{content:"ESP",testClass:!1}]),ie=q=>{q=="next"&&me!=3?x(me+1):q=="back"&&me!=0&&x(me-1)};function fe(q){let ue=L;for(let le in ue)if(le==q){ue=ue[q].content;break}b(ue),N(le=>le.map((re,ve)=>q==ve?{...re,isIndicated:!0}:{...re,isIndicated:!1}))}function de(q){let ue=$e,le=[];ue=ue.map((re,ve)=>q==ve?{...re,testClass:re.testClass!=!0}:{...re});for(let re in ue)ue[re].testClass==!0&&le.push(ue[re]);k([...le]),we(re=>re.map((ve,Ce)=>q==Ce?{...ve,testClass:ve.testClass!=!0}:{...ve}))}const Ee=async()=>{const q={password:u.current.value,email:p.current.value,school:z.current.value,grSec:Q.current.value,favSubjects:C};try{await H1(ko,p.current.value,u.current.value);const ue=ko.currentUser;ue&&await Dk(gk(Mk,"Users",ue.uid),{password:u.current.value,email:p.current.value,school:z.current.value,grSec:Q.current.value,favSubjects:C,usingAs:Y==null?void 0:Y.current.value,purpose:R}),s(le=>[...le,q]),r(!1),o(!1)}catch(ue){console.log(ue)}};function D(){u.current.value="",f.current.value="",p.current.value="",m.current.value="",g.current.value="",E.current.value="",A.current.value="",O.current.value="",z.current.value="",F.current.value="",Q.current.value="",W.current.value="",Y.current.value="",we(q=>q.map((ue,le)=>({...ue,testClass:!1}))),N(q=>q.map((ue,le)=>({...ue,isIndicated:!1}))),b(null),k([])}if(t==!0)return S.jsx(S.Fragment,{children:S.jsxs("div",{className:un.sign_up_wrapper,children:[S.jsx(Te,{func:()=>{r(!1),D()},content:"X",className:un.goToStartingPage}),S.jsxs("form",{onSubmit:q=>{q.preventDefault()},className:un.form_1,children:[S.jsx("header",{children:"SIGN UP"}),S.jsxs("div",{className:un.to_bottom,children:[S.jsx(aP,{indicated:me,show:ee,showConfirm:se,setShowConfirm:q=>{oe(q)},setShow:q=>{te(q)},passwordInput:u,confirmPasswordInput:g,emailInput:p,passWarning:f,confirmWarning:E,emailWarning:m}),S.jsx(fP,{indicated:me,usageOptions:L,setUsageOptions:q=>{N(q)},handleUsageOptions:q=>{fe(q)},usingAsInput:Y}),S.jsx(mP,{indicated:me,schoolInput:z,schoolWarning:F,grSecInput:Q,grSecWarning:W,nickNameInput:A,nameWarning:O}),S.jsx(TP,{indicated:me,subjects:$e,handleSubjects:q=>{de(q)}}),S.jsxs("div",{className:un.bottom,children:[S.jsxs("div",{className:un.buttons,children:[S.jsx(Te,{content:"BACK",func:()=>{ie("back")}}),S.jsx(Te,{content:me==3?"SUBMIT":"NEXT",func:()=>{me==3?Ee():ie("next")}})]}),S.jsxs("div",{className:un.indicator,children:[S.jsx("div",{className:me==0?un.indicated:un.not_indicated}),S.jsx("div",{className:me==1?un.indicated:un.not_indicated}),S.jsx("div",{className:me==2?un.indicated:un.not_indicated}),S.jsx("div",{className:me==3?un.indicated:un.not_indicated})]}),S.jsxs("h4",{id:un.SignUp,onClick:()=>{e(!0),r(!1),D()},children:[" ",S.jsx("a",{children:"Already Have an Account?"})," "]})]})]})]})]})})},xP="_Loading_Wrapper_fw8ew_25",kP="_Loading_Bar_fw8ew_59",qT={Loading_Wrapper:xP,Loading_Bar:kP},MP=({loading:s})=>{if(s)return S.jsxs("div",{className:qT.Loading_Wrapper,children:[S.jsx("div",{className:qT.Loading_Bar}),"Loading..."]})},PP="_Pages_1x53v_25",LP="_Hide_Pages_1x53v_31",GT={Pages:PP,Hide_Pages:LP};function VP(){const[s,e]=ce.useState(!1),[t,r]=ce.useState(!1),[o,u]=ce.useState(!1),[f,p]=ce.useState(window.location.href),[m,g]=ce.useState(!1),[E,A]=ce.useState(!1),[O,z]=ce.useState(!1),[F,Q]=ce.useState(!1),[W,Y]=ce.useState(0),[ee,te]=ce.useState(1),[se,oe]=ce.useState(0),[me,x]=ce.useState(JSON.parse(localStorage.getItem("Users"))!=null?JSON.parse(localStorage.getItem("Users")):[]),[R,b]=ce.useState({});return ce.useEffect(()=>{f.includes("#Home")?te(1):f.includes("#Tasks")?te(2):f.includes("#About")?te(3):f.includes("#Contacts")&&te(4)},[f]),S.jsx(S.Fragment,{children:S.jsxs("div",{children:[S.jsx(Pk,{setPage:C=>{te(C)},page:ee,setIndicated:C=>{oe(C)},indicated:se,showTaskPrompt:s,editing:o,url:f,setUrl:C=>{p(C)},showSignInPrompt:m,setShowSignInPrompt:C=>{g(C)},showSignUpPrompt:E,setShowSignUpPrompt:C=>{A(C)},showSortPrompt:t,user:R,setUser:C=>{b(C)},setLoading:C=>{z(C)}}),S.jsxs("div",{className:!m&&!E?GT.Pages:GT.Hide_Pages,children:[S.jsx(Lk,{page:ee,setPage:C=>{te(C)},setIndicated:C=>{oe(C)},indicated:se,user:R}),S.jsx(GM,{page:ee,setShowTaskPrompt:C=>{e(C)},showTaskPrompt:s,editing:o,setEditing:C=>{u(C)},showSortPrompt:t,setShowSortPrompt:C=>r(C),user:R,setUser:C=>{b(C)}})]}),S.jsx(iP,{page:ee,setPage:C=>te(C),showSignInPrompt:m,setShowSignUpPrompt:C=>{A(C)},setShowSignInPrompt:C=>{g(C)},user:R,setUser:C=>{b(C)},setLoading:C=>z(C)}),S.jsx(DP,{page:ee,setPage:C=>te(C),showSignUpPrompt:E,setShowSignInPrompt:C=>{g(C)},setShowSignUpPrompt:C=>{A(C)},users:me,setUsers:C=>{x(C)},user:R,setUser:C=>{b(C)},setLoading:C=>z(C)}),S.jsx(MP,{loading:O})]})})}Ub.createRoot(document.getElementById("root")).render(S.jsx(ce.StrictMode,{children:S.jsx(VP,{})}));
