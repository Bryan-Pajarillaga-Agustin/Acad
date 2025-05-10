(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var c_={exports:{}},Au={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LE;function rR(){if(LE)return Au;LE=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:s,type:r,key:h,ref:o!==void 0?o:null,props:u}}return Au.Fragment=e,Au.jsx=t,Au.jsxs=t,Au}var UE;function aR(){return UE||(UE=1,c_.exports=rR()),c_.exports}var A=aR(),h_={exports:{}},Ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jE;function oR(){if(jE)return Ve;jE=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),S=Symbol.iterator;function I(x){return x===null||typeof x!="object"?null:(x=S&&x[S]||x["@@iterator"],typeof x=="function"?x:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,J={};function G(x,Z,ge){this.props=x,this.context=Z,this.refs=J,this.updater=ge||V}G.prototype.isReactComponent={},G.prototype.setState=function(x,Z){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,Z,"setState")},G.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Y(){}Y.prototype=G.prototype;function ne(x,Z,ge){this.props=x,this.context=Z,this.refs=J,this.updater=ge||V}var X=ne.prototype=new Y;X.constructor=ne,F(X,G.prototype),X.isPureReactComponent=!0;var re=Array.isArray,fe={H:null,A:null,T:null,S:null},Ee=Object.prototype.hasOwnProperty;function M(x,Z,ge,de,pe,oe){return ge=oe.ref,{$$typeof:s,type:x,key:Z,ref:ge!==void 0?ge:null,props:oe}}function R(x,Z){return M(x.type,Z,void 0,void 0,void 0,x.props)}function C(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function N(x){var Z={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ge){return Z[ge]})}var k=/\/+/g;function P(x,Z){return typeof x=="object"&&x!==null&&x.key!=null?N(""+x.key):Z.toString(36)}function D(){}function at(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(D,D):(x.status="pending",x.then(function(Z){x.status==="pending"&&(x.status="fulfilled",x.value=Z)},function(Z){x.status==="pending"&&(x.status="rejected",x.reason=Z)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function nt(x,Z,ge,de,pe){var oe=typeof x;(oe==="undefined"||oe==="boolean")&&(x=null);var ie=!1;if(x===null)ie=!0;else switch(oe){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(x.$$typeof){case s:case e:ie=!0;break;case T:return ie=x._init,nt(ie(x._payload),Z,ge,de,pe)}}if(ie)return pe=pe(x),ie=de===""?"."+P(x,0):de,re(pe)?(ge="",ie!=null&&(ge=ie.replace(k,"$&/")+"/"),nt(pe,Z,ge,"",function(_e){return _e})):pe!=null&&(C(pe)&&(pe=R(pe,ge+(pe.key==null||x&&x.key===pe.key?"":(""+pe.key).replace(k,"$&/")+"/")+ie)),Z.push(pe)),1;ie=0;var Oe=de===""?".":de+":";if(re(x))for(var ye=0;ye<x.length;ye++)de=x[ye],oe=Oe+P(de,ye),ie+=nt(de,Z,ge,oe,pe);else if(ye=I(x),typeof ye=="function")for(x=ye.call(x),ye=0;!(de=x.next()).done;)de=de.value,oe=Oe+P(de,ye++),ie+=nt(de,Z,ge,oe,pe);else if(oe==="object"){if(typeof x.then=="function")return nt(at(x),Z,ge,de,pe);throw Z=String(x),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ie}function le(x,Z,ge){if(x==null)return x;var de=[],pe=0;return nt(x,de,"","",function(oe){return Z.call(ge,oe,pe++)}),de}function Ae(x){if(x._status===-1){var Z=x._result;Z=Z(),Z.then(function(ge){(x._status===0||x._status===-1)&&(x._status=1,x._result=ge)},function(ge){(x._status===0||x._status===-1)&&(x._status=2,x._result=ge)}),x._status===-1&&(x._status=0,x._result=Z)}if(x._status===1)return x._result.default;throw x._result}var ue=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function z(){}return Ve.Children={map:le,forEach:function(x,Z,ge){le(x,function(){Z.apply(this,arguments)},ge)},count:function(x){var Z=0;return le(x,function(){Z++}),Z},toArray:function(x){return le(x,function(Z){return Z})||[]},only:function(x){if(!C(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Ve.Component=G,Ve.Fragment=t,Ve.Profiler=o,Ve.PureComponent=ne,Ve.StrictMode=r,Ve.Suspense=m,Ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=fe,Ve.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ve.cache=function(x){return function(){return x.apply(null,arguments)}},Ve.cloneElement=function(x,Z,ge){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var de=F({},x.props),pe=x.key,oe=void 0;if(Z!=null)for(ie in Z.ref!==void 0&&(oe=void 0),Z.key!==void 0&&(pe=""+Z.key),Z)!Ee.call(Z,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&Z.ref===void 0||(de[ie]=Z[ie]);var ie=arguments.length-2;if(ie===1)de.children=ge;else if(1<ie){for(var Oe=Array(ie),ye=0;ye<ie;ye++)Oe[ye]=arguments[ye+2];de.children=Oe}return M(x.type,pe,void 0,void 0,oe,de)},Ve.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:u,_context:x},x},Ve.createElement=function(x,Z,ge){var de,pe={},oe=null;if(Z!=null)for(de in Z.key!==void 0&&(oe=""+Z.key),Z)Ee.call(Z,de)&&de!=="key"&&de!=="__self"&&de!=="__source"&&(pe[de]=Z[de]);var ie=arguments.length-2;if(ie===1)pe.children=ge;else if(1<ie){for(var Oe=Array(ie),ye=0;ye<ie;ye++)Oe[ye]=arguments[ye+2];pe.children=Oe}if(x&&x.defaultProps)for(de in ie=x.defaultProps,ie)pe[de]===void 0&&(pe[de]=ie[de]);return M(x,oe,void 0,void 0,null,pe)},Ve.createRef=function(){return{current:null}},Ve.forwardRef=function(x){return{$$typeof:p,render:x}},Ve.isValidElement=C,Ve.lazy=function(x){return{$$typeof:T,_payload:{_status:-1,_result:x},_init:Ae}},Ve.memo=function(x,Z){return{$$typeof:g,type:x,compare:Z===void 0?null:Z}},Ve.startTransition=function(x){var Z=fe.T,ge={};fe.T=ge;try{var de=x(),pe=fe.S;pe!==null&&pe(ge,de),typeof de=="object"&&de!==null&&typeof de.then=="function"&&de.then(z,ue)}catch(oe){ue(oe)}finally{fe.T=Z}},Ve.unstable_useCacheRefresh=function(){return fe.H.useCacheRefresh()},Ve.use=function(x){return fe.H.use(x)},Ve.useActionState=function(x,Z,ge){return fe.H.useActionState(x,Z,ge)},Ve.useCallback=function(x,Z){return fe.H.useCallback(x,Z)},Ve.useContext=function(x){return fe.H.useContext(x)},Ve.useDebugValue=function(){},Ve.useDeferredValue=function(x,Z){return fe.H.useDeferredValue(x,Z)},Ve.useEffect=function(x,Z){return fe.H.useEffect(x,Z)},Ve.useId=function(){return fe.H.useId()},Ve.useImperativeHandle=function(x,Z,ge){return fe.H.useImperativeHandle(x,Z,ge)},Ve.useInsertionEffect=function(x,Z){return fe.H.useInsertionEffect(x,Z)},Ve.useLayoutEffect=function(x,Z){return fe.H.useLayoutEffect(x,Z)},Ve.useMemo=function(x,Z){return fe.H.useMemo(x,Z)},Ve.useOptimistic=function(x,Z){return fe.H.useOptimistic(x,Z)},Ve.useReducer=function(x,Z,ge){return fe.H.useReducer(x,Z,ge)},Ve.useRef=function(x){return fe.H.useRef(x)},Ve.useState=function(x){return fe.H.useState(x)},Ve.useSyncExternalStore=function(x,Z,ge){return fe.H.useSyncExternalStore(x,Z,ge)},Ve.useTransition=function(){return fe.H.useTransition()},Ve.version="19.0.0",Ve}var BE;function ym(){return BE||(BE=1,h_.exports=oR()),h_.exports}var ce=ym(),f_={exports:{}},wu={},d_={exports:{}},p_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zE;function lR(){return zE||(zE=1,function(s){function e(le,Ae){var ue=le.length;le.push(Ae);e:for(;0<ue;){var z=ue-1>>>1,x=le[z];if(0<o(x,Ae))le[z]=Ae,le[ue]=x,ue=z;else break e}}function t(le){return le.length===0?null:le[0]}function r(le){if(le.length===0)return null;var Ae=le[0],ue=le.pop();if(ue!==Ae){le[0]=ue;e:for(var z=0,x=le.length,Z=x>>>1;z<Z;){var ge=2*(z+1)-1,de=le[ge],pe=ge+1,oe=le[pe];if(0>o(de,ue))pe<x&&0>o(oe,de)?(le[z]=oe,le[pe]=ue,z=pe):(le[z]=de,le[ge]=ue,z=ge);else if(pe<x&&0>o(oe,ue))le[z]=oe,le[pe]=ue,z=pe;else break e}}return Ae}function o(le,Ae){var ue=le.sortIndex-Ae.sortIndex;return ue!==0?ue:le.id-Ae.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();s.unstable_now=function(){return h.now()-p}}var m=[],g=[],T=1,S=null,I=3,V=!1,F=!1,J=!1,G=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function X(le){for(var Ae=t(g);Ae!==null;){if(Ae.callback===null)r(g);else if(Ae.startTime<=le)r(g),Ae.sortIndex=Ae.expirationTime,e(m,Ae);else break;Ae=t(g)}}function re(le){if(J=!1,X(le),!F)if(t(m)!==null)F=!0,at();else{var Ae=t(g);Ae!==null&&nt(re,Ae.startTime-le)}}var fe=!1,Ee=-1,M=5,R=-1;function C(){return!(s.unstable_now()-R<M)}function N(){if(fe){var le=s.unstable_now();R=le;var Ae=!0;try{e:{F=!1,J&&(J=!1,Y(Ee),Ee=-1),V=!0;var ue=I;try{t:{for(X(le),S=t(m);S!==null&&!(S.expirationTime>le&&C());){var z=S.callback;if(typeof z=="function"){S.callback=null,I=S.priorityLevel;var x=z(S.expirationTime<=le);if(le=s.unstable_now(),typeof x=="function"){S.callback=x,X(le),Ae=!0;break t}S===t(m)&&r(m),X(le)}else r(m);S=t(m)}if(S!==null)Ae=!0;else{var Z=t(g);Z!==null&&nt(re,Z.startTime-le),Ae=!1}}break e}finally{S=null,I=ue,V=!1}Ae=void 0}}finally{Ae?k():fe=!1}}}var k;if(typeof ne=="function")k=function(){ne(N)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,D=P.port2;P.port1.onmessage=N,k=function(){D.postMessage(null)}}else k=function(){G(N,0)};function at(){fe||(fe=!0,k())}function nt(le,Ae){Ee=G(function(){le(s.unstable_now())},Ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(le){le.callback=null},s.unstable_continueExecution=function(){F||V||(F=!0,at())},s.unstable_forceFrameRate=function(le){0>le||125<le?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<le?Math.floor(1e3/le):5},s.unstable_getCurrentPriorityLevel=function(){return I},s.unstable_getFirstCallbackNode=function(){return t(m)},s.unstable_next=function(le){switch(I){case 1:case 2:case 3:var Ae=3;break;default:Ae=I}var ue=I;I=Ae;try{return le()}finally{I=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(le,Ae){switch(le){case 1:case 2:case 3:case 4:case 5:break;default:le=3}var ue=I;I=le;try{return Ae()}finally{I=ue}},s.unstable_scheduleCallback=function(le,Ae,ue){var z=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?z+ue:z):ue=z,le){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=ue+x,le={id:T++,callback:Ae,priorityLevel:le,startTime:ue,expirationTime:x,sortIndex:-1},ue>z?(le.sortIndex=ue,e(g,le),t(m)===null&&le===t(g)&&(J?(Y(Ee),Ee=-1):J=!0,nt(re,ue-z))):(le.sortIndex=x,e(m,le),F||V||(F=!0,at())),le},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(le){var Ae=I;return function(){var ue=I;I=Ae;try{return le.apply(this,arguments)}finally{I=ue}}}}(p_)),p_}var HE;function uR(){return HE||(HE=1,d_.exports=lR()),d_.exports}var __={exports:{}},mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FE;function cR(){if(FE)return mn;FE=1;var s=ym();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)g+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,T){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:m,containerInfo:g,implementation:T}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,mn.createPortal=function(m,g){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(m,g,null,T)},mn.flushSync=function(m){var g=h.T,T=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=g,r.p=T,r.d.f()}},mn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(m,g))},mn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},mn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var T=g.as,S=p(T,g.crossOrigin),I=typeof g.integrity=="string"?g.integrity:void 0,V=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;T==="style"?r.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:I,fetchPriority:V}):T==="script"&&r.d.X(m,{crossOrigin:S,integrity:I,fetchPriority:V,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},mn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var T=p(g.as,g.crossOrigin);r.d.M(m,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(m)},mn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var T=g.as,S=p(T,g.crossOrigin);r.d.L(m,T,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},mn.preloadModule=function(m,g){if(typeof m=="string")if(g){var T=p(g.as,g.crossOrigin);r.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(m)},mn.requestFormReset=function(m){r.d.r(m)},mn.unstable_batchedUpdates=function(m,g){return m(g)},mn.useFormState=function(m,g,T){return h.H.useFormState(m,g,T)},mn.useFormStatus=function(){return h.H.useHostTransitionStatus()},mn.version="19.0.0",mn}var qE;function hR(){if(qE)return __.exports;qE=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),__.exports=cR(),__.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GE;function fR(){if(GE)return wu;GE=1;var s=uR(),e=ym(),t=hR();function r(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),V=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),re=Symbol.for("react.memo_cache_sentinel"),fe=Symbol.iterator;function Ee(n){return n===null||typeof n!="object"?null:(n=fe&&n[fe]||n["@@iterator"],typeof n=="function"?n:null)}var M=Symbol.for("react.client.reference");function R(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===M?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case m:return"Fragment";case p:return"Portal";case T:return"Profiler";case g:return"StrictMode";case J:return"Suspense";case G:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Provider";case I:return(n._context.displayName||"Context")+".Consumer";case F:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return a=n.displayName||null,a!==null?a:R(n.type)||"Memo";case ne:a=n._payload,n=n._init;try{return R(n(a))}catch{}}return null}var C=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=Object.assign,k,P;function D(n){if(k===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);k=a&&a[1]||"",P=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+k+n+P}var at=!1;function nt(n,a){if(!n||at)return"";at=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var se=function(){throw Error()};if(Object.defineProperty(se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(se,[])}catch(Q){var q=Q}Reflect.construct(n,[],se)}else{try{se.call()}catch(Q){q=Q}n.call(se.prototype)}}else{try{throw Error()}catch(Q){q=Q}(se=n())&&typeof se.catch=="function"&&se.catch(function(){})}}catch(Q){if(Q&&q&&typeof Q.stack=="string")return[Q.stack,q.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var _=c.DetermineComponentFrameRoot(),E=_[0],w=_[1];if(E&&w){var O=E.split(`
`),U=w.split(`
`);for(d=c=0;c<O.length&&!O[c].includes("DetermineComponentFrameRoot");)c++;for(;d<U.length&&!U[d].includes("DetermineComponentFrameRoot");)d++;if(c===O.length||d===U.length)for(c=O.length-1,d=U.length-1;1<=c&&0<=d&&O[c]!==U[d];)d--;for(;1<=c&&0<=d;c--,d--)if(O[c]!==U[d]){if(c!==1||d!==1)do if(c--,d--,0>d||O[c]!==U[d]){var $=`
`+O[c].replace(" at new "," at ");return n.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",n.displayName)),$}while(1<=c&&0<=d);break}}}finally{at=!1,Error.prepareStackTrace=l}return(l=n?n.displayName||n.name:"")?D(l):""}function le(n){switch(n.tag){case 26:case 27:case 5:return D(n.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 15:return n=nt(n.type,!1),n;case 11:return n=nt(n.type.render,!1),n;case 1:return n=nt(n.type,!0),n;default:return""}}function Ae(n){try{var a="";do a+=le(n),n=n.return;while(n);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function ue(n){var a=n,l=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(l=a.return),n=a.return;while(n)}return a.tag===3?l:null}function z(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function x(n){if(ue(n)!==n)throw Error(r(188))}function Z(n){var a=n.alternate;if(!a){if(a=ue(n),a===null)throw Error(r(188));return a!==n?null:n}for(var l=n,c=a;;){var d=l.return;if(d===null)break;var _=d.alternate;if(_===null){if(c=d.return,c!==null){l=c;continue}break}if(d.child===_.child){for(_=d.child;_;){if(_===l)return x(d),n;if(_===c)return x(d),a;_=_.sibling}throw Error(r(188))}if(l.return!==c.return)l=d,c=_;else{for(var E=!1,w=d.child;w;){if(w===l){E=!0,l=d,c=_;break}if(w===c){E=!0,c=d,l=_;break}w=w.sibling}if(!E){for(w=_.child;w;){if(w===l){E=!0,l=_,c=d;break}if(w===c){E=!0,c=_,l=d;break}w=w.sibling}if(!E)throw Error(r(189))}}if(l.alternate!==c)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?n:a}function ge(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=ge(n),a!==null)return a;n=n.sibling}return null}var de=Array.isArray,pe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},ie=[],Oe=-1;function ye(n){return{current:n}}function _e(n){0>Oe||(n.current=ie[Oe],ie[Oe]=null,Oe--)}function Ce(n,a){Oe++,ie[Oe]=n.current,n.current=a}var Lt=ye(null),bn=ye(null),Wt=ye(null),Cn=ye(null);function $n(n,a){switch(Ce(Wt,a),Ce(bn,n),Ce(Lt,null),n=a.nodeType,n){case 9:case 11:a=(a=a.documentElement)&&(a=a.namespaceURI)?fE(a):0;break;default:if(n=n===8?a.parentNode:a,a=n.tagName,n=n.namespaceURI)n=fE(n),a=dE(n,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}_e(Lt),Ce(Lt,a)}function xn(){_e(Lt),_e(bn),_e(Wt)}function Ii(n){n.memoizedState!==null&&Ce(Cn,n);var a=Lt.current,l=dE(a,n.type);a!==l&&(Ce(bn,n),Ce(Lt,l))}function K(n){bn.current===n&&(_e(Lt),_e(bn)),Cn.current===n&&(_e(Cn),yu._currentValue=oe)}var He=Object.prototype.hasOwnProperty,Rt=s.unstable_scheduleCallback,Ot=s.unstable_cancelCallback,ts=s.unstable_shouldYield,Xn=s.unstable_requestPaint,nn=s.unstable_now,$r=s.unstable_getCurrentPriorityLevel,gt=s.unstable_ImmediatePriority,xt=s.unstable_UserBlockingPriority,ns=s.unstable_NormalPriority,Ac=s.unstable_LowPriority,El=s.unstable_IdlePriority,dd=s.log,Xr=s.unstable_setDisableYieldValue,zs=null,pn=null;function Tl(n){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(zs,n,void 0,(n.current.flags&128)===128)}catch{}}function Ni(n){if(typeof dd=="function"&&Xr(n),pn&&typeof pn.setStrictMode=="function")try{pn.setStrictMode(zs,n)}catch{}}var Rn=Math.clz32?Math.clz32:bc,Sl=Math.log,wc=Math.LN2;function bc(n){return n>>>=0,n===0?32:31-(Sl(n)/wc|0)|0}var Di=128,Hs=4194304;function gi(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Zn(n,a){var l=n.pendingLanes;if(l===0)return 0;var c=0,d=n.suspendedLanes,_=n.pingedLanes,E=n.warmLanes;n=n.finishedLanes!==0;var w=l&134217727;return w!==0?(l=w&~d,l!==0?c=gi(l):(_&=w,_!==0?c=gi(_):n||(E=w&~E,E!==0&&(c=gi(E))))):(w=l&~d,w!==0?c=gi(w):_!==0?c=gi(_):n||(E=l&~E,E!==0&&(c=gi(E)))),c===0?0:a!==0&&a!==c&&(a&d)===0&&(d=c&-c,E=a&-a,d>=E||d===32&&(E&4194176)!==0)?a:c}function Fs(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function Ya(n,a){switch(n){case 1:case 2:case 4:case 8:return a+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Al(){var n=Di;return Di<<=1,(Di&4194176)===0&&(Di=128),n}function qs(){var n=Hs;return Hs<<=1,(Hs&62914560)===0&&(Hs=4194304),n}function $a(n){for(var a=[],l=0;31>l;l++)a.push(n);return a}function It(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Cc(n,a,l,c,d,_){var E=n.pendingLanes;n.pendingLanes=l,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=l,n.entangledLanes&=l,n.errorRecoveryDisabledLanes&=l,n.shellSuspendCounter=0;var w=n.entanglements,O=n.expirationTimes,U=n.hiddenUpdates;for(l=E&~l;0<l;){var $=31-Rn(l),se=1<<$;w[$]=0,O[$]=-1;var q=U[$];if(q!==null)for(U[$]=null,$=0;$<q.length;$++){var Q=q[$];Q!==null&&(Q.lane&=-536870913)}l&=~se}c!==0&&Gs(n,c,0),_!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=_&~(E&~a))}function Gs(n,a,l){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-Rn(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|l&4194218}function Ws(n,a){var l=n.entangledLanes|=a;for(n=n.entanglements;l;){var c=31-Rn(l),d=1<<c;d&a|n[c]&a&&(n[c]|=a),l&=~d}}function Rc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Ic(){var n=pe.p;return n!==0?n:(n=window.event,n===void 0?32:OE(n.type))}function Ks(n,a){var l=pe.p;try{return pe.p=n,a()}finally{pe.p=l}}var Oi=Math.random().toString(36).slice(2),Kt="__reactFiber$"+Oi,Ut="__reactProps$"+Oi,is="__reactContainer$"+Oi,Zr="__reactEvents$"+Oi,Xa="__reactListeners$"+Oi,xi="__reactHandles$"+Oi,wl="__reactResources$"+Oi,Qs="__reactMarker$"+Oi;function Jr(n){delete n[Kt],delete n[Ut],delete n[Zr],delete n[Xa],delete n[xi]}function yi(n){var a=n[Kt];if(a)return a;for(var l=n.parentNode;l;){if(a=l[is]||l[Kt]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(n=mE(n);n!==null;){if(l=n[Kt])return l;n=mE(n)}return a}n=l,l=n.parentNode}return null}function ss(n){if(n=n[Kt]||n[is]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function Ys(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(r(33))}function $s(n){var a=n[wl];return a||(a=n[wl]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function yt(n){n[Qs]=!0}var bl=new Set,Za={};function jn(n,a){kn(n,a),kn(n+"Capture",a)}function kn(n,a){for(Za[n]=a,n=0;n<a.length;n++)bl.add(a[n])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cl={},Rl={};function Nc(n){return He.call(Rl,n)?!0:He.call(Cl,n)?!1:pd.test(n)?Rl[n]=!0:(Cl[n]=!0,!1)}function Xs(n,a,l){if(Nc(a))if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+l)}}function Zs(n,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+l)}}function Jn(n,a,l,c){if(c===null)n.removeAttribute(l);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(l);return}n.setAttributeNS(a,l,""+c)}}function In(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Dc(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function _d(n){var a=Dc(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,_=l.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,_.call(this,E)}}),Object.defineProperty(n,a,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function ea(n){n._valueTracker||(n._valueTracker=_d(n))}function Il(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var l=a.getValue(),c="";return n&&(c=Dc(n)?n.checked?"true":"false":n.value),n=c,n!==l?(a.setValue(n),!0):!1}function Ja(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var rs=/[\n"\\]/g;function St(n){return n.replace(rs,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Js(n,a,l,c,d,_,E,w){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),a!=null?E==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+In(a)):n.value!==""+In(a)&&(n.value=""+In(a)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),a!=null?eo(n,E,In(a)):l!=null?eo(n,E,In(l)):c!=null&&n.removeAttribute("value"),d==null&&_!=null&&(n.defaultChecked=!!_),d!=null&&(n.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.name=""+In(w):n.removeAttribute("name")}function ta(n,a,l,c,d,_,E,w){if(_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.type=_),a!=null||l!=null){if(!(_!=="submit"&&_!=="reset"||a!=null))return;l=l!=null?""+In(l):"",a=a!=null?""+In(a):l,w||a===n.value||(n.value=a),n.defaultValue=a}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=w?n.checked:!!c,n.defaultChecked=!!c,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function eo(n,a,l){a==="number"&&Ja(n.ownerDocument)===n||n.defaultValue===""+l||(n.defaultValue=""+l)}function Je(n,a,l,c){if(n=n.options,a){a={};for(var d=0;d<l.length;d++)a["$"+l[d]]=!0;for(l=0;l<n.length;l++)d=a.hasOwnProperty("$"+n[l].value),n[l].selected!==d&&(n[l].selected=d),d&&c&&(n[l].defaultSelected=!0)}else{for(l=""+In(l),a=null,d=0;d<n.length;d++){if(n[d].value===l){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}a!==null||n[d].disabled||(a=n[d])}a!==null&&(a.selected=!0)}}function na(n,a,l){if(a!=null&&(a=""+In(a),a!==n.value&&(n.value=a),l==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=l!=null?""+In(l):""}function er(n,a,l,c){if(a==null){if(c!=null){if(l!=null)throw Error(r(92));if(de(c)){if(1<c.length)throw Error(r(93));c=c[0]}l=c}l==null&&(l=""),a=l}l=In(a),n.defaultValue=l,c=n.textContent,c===l&&c!==""&&c!==null&&(n.value=c)}function ei(n,a){if(a){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=a;return}}n.textContent=a}var md=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nl(n,a,l){var c=a.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,l):typeof l!="number"||l===0||md.has(a)?a==="float"?n.cssFloat=l:n[a]=(""+l).trim():n[a]=l+"px"}function Oc(n,a,l){if(a!=null&&typeof a!="object")throw Error(r(62));if(n=n.style,l!=null){for(var c in l)!l.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var d in a)c=a[d],a.hasOwnProperty(d)&&l[d]!==c&&Nl(n,d,c)}else for(var _ in a)a.hasOwnProperty(_)&&Nl(n,_,a[_])}function Dl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ki(n){return yd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var ti=null;function to(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var as=null,os=null;function ls(n){var a=ss(n);if(a&&(n=a.stateNode)){var l=n[Ut]||null;e:switch(n=a.stateNode,a.type){case"input":if(Js(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),a=l.name,l.type==="radio"&&a!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+St(""+a)+'"][type="radio"]'),a=0;a<l.length;a++){var c=l[a];if(c!==n&&c.form===n.form){var d=c[Ut]||null;if(!d)throw Error(r(90));Js(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(a=0;a<l.length;a++)c=l[a],c.form===n.form&&Il(c)}break e;case"textarea":na(n,l.value,l.defaultValue);break e;case"select":a=l.value,a!=null&&Je(n,!!l.multiple,a,!1)}}}var Ol=!1;function xc(n,a,l){if(Ol)return n(a,l);Ol=!0;try{var c=n(a);return c}finally{if(Ol=!1,(as!==null||os!==null)&&(Ah(),as&&(a=as,n=os,os=as=null,ls(a),n)))for(a=0;a<n.length;a++)ls(n[a])}}function ia(n,a){var l=n.stateNode;if(l===null)return null;var c=l[Ut]||null;if(c===null)return null;l=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(r(231,a,typeof l));return l}var ni=!1;if(Bn)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){ni=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{ni=!1}var Mi=null,tr=null,us=null;function xl(){if(us)return us;var n,a=tr,l=a.length,c,d="value"in Mi?Mi.value:Mi.textContent,_=d.length;for(n=0;n<l&&a[n]===d[n];n++);var E=l-n;for(c=1;c<=E&&a[l-c]===d[_-c];c++);return us=d.slice(n,1<c?1-c:void 0)}function Pi(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function Vi(){return!0}function kl(){return!1}function Qt(n){function a(l,c,d,_,E){this._reactName=l,this._targetInst=d,this.type=c,this.nativeEvent=_,this.target=E,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(l=n[w],this[w]=l?l(_):_[w]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Vi:kl,this.isPropagationStopped=kl,this}return N(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),a}var it={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},no=Qt(it),ra=N({},it,{view:0,detail:0}),kc=Qt(ra),io,so,Li,aa=N({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ua,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Li&&(Li&&n.type==="mousemove"?(io=n.screenX-Li.screenX,so=n.screenY-Li.screenY):so=io=0,Li=n),io)},movementY:function(n){return"movementY"in n?n.movementY:so}}),ii=Qt(aa),Mc=N({},aa,{dataTransfer:0}),vd=Qt(Mc),oa=N({},ra,{relatedTarget:0}),ro=Qt(oa),Ml=N({},it,{animationName:0,elapsedTime:0,pseudoElement:0}),ao=Qt(Ml),Pc=N({},it,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),oo=Qt(Pc),Ed=N({},it,{data:0}),Pl=Qt(Ed),la={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vl(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=Lc[n])?!!a[n]:!1}function ua(){return Vl}var Uc=N({},ra,{key:function(n){if(n.key){var a=la[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Pi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Vc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ua,charCode:function(n){return n.type==="keypress"?Pi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Pi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),lo=Qt(Uc),jc=N({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ll=Qt(jc),cs=N({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ua}),Bc=Qt(cs),zc=N({},it,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hc=Qt(zc),Fc=N({},aa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),uo=Qt(Fc),Nn=N({},it,{newState:0,oldState:0}),qc=Qt(Nn),Gc=[9,13,27,32],Ui=Bn&&"CompositionEvent"in window,f=null;Bn&&"documentMode"in document&&(f=document.documentMode);var y=Bn&&"TextEvent"in window&&!f,v=Bn&&(!Ui||f&&8<f&&11>=f),b=" ",B=!1;function W(n,a){switch(n){case"keyup":return Gc.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ke=!1;function jt(n,a){switch(n){case"compositionend":return he(a);case"keypress":return a.which!==32?null:(B=!0,b);case"textInput":return n=a.data,n===b&&B?null:n;default:return null}}function Qe(n,a){if(Ke)return n==="compositionend"||!Ui&&W(n,a)?(n=xl(),us=tr=Mi=null,Ke=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return v&&a.locale!=="ko"?null:a.data;default:return null}}var Yt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bt(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!Yt[n.type]:a==="textarea"}function hs(n,a,l,c){as?os?os.push(c):os=[c]:as=c,a=Ih(a,"onChange"),0<a.length&&(l=new no("onChange","change",null,l,c),n.push({event:l,listeners:a}))}var sn=null,ji=null;function Ul(n){oE(n,0)}function Wc(n){var a=Ys(n);if(Il(a))return n}function Vg(n,a){if(n==="change")return a}var Lg=!1;if(Bn){var Td;if(Bn){var Sd="oninput"in document;if(!Sd){var Ug=document.createElement("div");Ug.setAttribute("oninput","return;"),Sd=typeof Ug.oninput=="function"}Td=Sd}else Td=!1;Lg=Td&&(!document.documentMode||9<document.documentMode)}function jg(){sn&&(sn.detachEvent("onpropertychange",Bg),ji=sn=null)}function Bg(n){if(n.propertyName==="value"&&Wc(ji)){var a=[];hs(a,ji,n,to(n)),xc(Ul,a)}}function Pb(n,a,l){n==="focusin"?(jg(),sn=a,ji=l,sn.attachEvent("onpropertychange",Bg)):n==="focusout"&&jg()}function Vb(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Wc(ji)}function Lb(n,a){if(n==="click")return Wc(a)}function Ub(n,a){if(n==="input"||n==="change")return Wc(a)}function jb(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var zn=typeof Object.is=="function"?Object.is:jb;function jl(n,a){if(zn(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var l=Object.keys(n),c=Object.keys(a);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var d=l[c];if(!He.call(a,d)||!zn(n[d],a[d]))return!1}return!0}function zg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Hg(n,a){var l=zg(n);n=0;for(var c;l;){if(l.nodeType===3){if(c=n+l.textContent.length,n<=a&&c>=a)return{node:l,offset:a-n};n=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=zg(l)}}function Fg(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?Fg(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function qg(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Ja(n.document);a instanceof n.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)n=a.contentWindow;else break;a=Ja(n.document)}return a}function Ad(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}function Bb(n,a){var l=qg(a);a=n.focusedElem;var c=n.selectionRange;if(l!==a&&a&&a.ownerDocument&&Fg(a.ownerDocument.documentElement,a)){if(c!==null&&Ad(a)){if(n=c.start,l=c.end,l===void 0&&(l=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(l,a.value.length);else if(l=(n=a.ownerDocument||document)&&n.defaultView||window,l.getSelection){l=l.getSelection();var d=a.textContent.length,_=Math.min(c.start,d);c=c.end===void 0?_:Math.min(c.end,d),!l.extend&&_>c&&(d=c,c=_,_=d),d=Hg(a,_);var E=Hg(a,c);d&&E&&(l.rangeCount!==1||l.anchorNode!==d.node||l.anchorOffset!==d.offset||l.focusNode!==E.node||l.focusOffset!==E.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),l.removeAllRanges(),_>c?(l.addRange(n),l.extend(E.node,E.offset)):(n.setEnd(E.node,E.offset),l.addRange(n)))}}for(n=[],l=a;l=l.parentNode;)l.nodeType===1&&n.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)l=n[a],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var zb=Bn&&"documentMode"in document&&11>=document.documentMode,co=null,wd=null,Bl=null,bd=!1;function Gg(n,a,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;bd||co==null||co!==Ja(c)||(c=co,"selectionStart"in c&&Ad(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Bl&&jl(Bl,c)||(Bl=c,c=Ih(wd,"onSelect"),0<c.length&&(a=new no("onSelect","select",null,a,l),n.push({event:a,listeners:c}),a.target=co)))}function ca(n,a){var l={};return l[n.toLowerCase()]=a.toLowerCase(),l["Webkit"+n]="webkit"+a,l["Moz"+n]="moz"+a,l}var ho={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionrun:ca("Transition","TransitionRun"),transitionstart:ca("Transition","TransitionStart"),transitioncancel:ca("Transition","TransitionCancel"),transitionend:ca("Transition","TransitionEnd")},Cd={},Wg={};Bn&&(Wg=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function ha(n){if(Cd[n])return Cd[n];if(!ho[n])return n;var a=ho[n],l;for(l in a)if(a.hasOwnProperty(l)&&l in Wg)return Cd[n]=a[l];return n}var Kg=ha("animationend"),Qg=ha("animationiteration"),Yg=ha("animationstart"),Hb=ha("transitionrun"),Fb=ha("transitionstart"),qb=ha("transitioncancel"),$g=ha("transitionend"),Xg=new Map,Zg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function vi(n,a){Xg.set(n,a),jn(a,[n])}var si=[],fo=0,Rd=0;function Kc(){for(var n=fo,a=Rd=fo=0;a<n;){var l=si[a];si[a++]=null;var c=si[a];si[a++]=null;var d=si[a];si[a++]=null;var _=si[a];if(si[a++]=null,c!==null&&d!==null){var E=c.pending;E===null?d.next=d:(d.next=E.next,E.next=d),c.pending=d}_!==0&&Jg(l,d,_)}}function Qc(n,a,l,c){si[fo++]=n,si[fo++]=a,si[fo++]=l,si[fo++]=c,Rd|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Id(n,a,l,c){return Qc(n,a,l,c),Yc(n)}function nr(n,a){return Qc(n,null,null,a),Yc(n)}function Jg(n,a,l){n.lanes|=l;var c=n.alternate;c!==null&&(c.lanes|=l);for(var d=!1,_=n.return;_!==null;)_.childLanes|=l,c=_.alternate,c!==null&&(c.childLanes|=l),_.tag===22&&(n=_.stateNode,n===null||n._visibility&1||(d=!0)),n=_,_=_.return;d&&a!==null&&n.tag===3&&(_=n.stateNode,d=31-Rn(l),_=_.hiddenUpdates,n=_[d],n===null?_[d]=[a]:n.push(a),a.lane=l|536870912)}function Yc(n){if(50<hu)throw hu=0,Mp=null,Error(r(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var po={},ey=new WeakMap;function ri(n,a){if(typeof n=="object"&&n!==null){var l=ey.get(n);return l!==void 0?l:(a={value:n,source:a,stack:Ae(a)},ey.set(n,a),a)}return{value:n,source:a,stack:Ae(a)}}var _o=[],mo=0,$c=null,Xc=0,ai=[],oi=0,fa=null,fs=1,ds="";function da(n,a){_o[mo++]=Xc,_o[mo++]=$c,$c=n,Xc=a}function ty(n,a,l){ai[oi++]=fs,ai[oi++]=ds,ai[oi++]=fa,fa=n;var c=fs;n=ds;var d=32-Rn(c)-1;c&=~(1<<d),l+=1;var _=32-Rn(a)+d;if(30<_){var E=d-d%5;_=(c&(1<<E)-1).toString(32),c>>=E,d-=E,fs=1<<32-Rn(a)+d|l<<d|c,ds=_+n}else fs=1<<_|l<<d|c,ds=n}function Nd(n){n.return!==null&&(da(n,1),ty(n,1,0))}function Dd(n){for(;n===$c;)$c=_o[--mo],_o[mo]=null,Xc=_o[--mo],_o[mo]=null;for(;n===fa;)fa=ai[--oi],ai[oi]=null,ds=ai[--oi],ai[oi]=null,fs=ai[--oi],ai[oi]=null}var Dn=null,rn=null,et=!1,Ei=null,Bi=!1,Od=Error(r(519));function pa(n){var a=Error(r(418,""));throw Fl(ri(a,n)),Od}function ny(n){var a=n.stateNode,l=n.type,c=n.memoizedProps;switch(a[Kt]=n,a[Ut]=c,l){case"dialog":qe("cancel",a),qe("close",a);break;case"iframe":case"object":case"embed":qe("load",a);break;case"video":case"audio":for(l=0;l<du.length;l++)qe(du[l],a);break;case"source":qe("error",a);break;case"img":case"image":case"link":qe("error",a),qe("load",a);break;case"details":qe("toggle",a);break;case"input":qe("invalid",a),ta(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),ea(a);break;case"select":qe("invalid",a);break;case"textarea":qe("invalid",a),er(a,c.value,c.defaultValue,c.children),ea(a)}l=c.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||a.textContent===""+l||c.suppressHydrationWarning===!0||hE(a.textContent,l)?(c.popover!=null&&(qe("beforetoggle",a),qe("toggle",a)),c.onScroll!=null&&qe("scroll",a),c.onScrollEnd!=null&&qe("scrollend",a),c.onClick!=null&&(a.onclick=Nh),a=!0):a=!1,a||pa(n)}function iy(n){for(Dn=n.return;Dn;)switch(Dn.tag){case 3:case 27:Bi=!0;return;case 5:case 13:Bi=!1;return;default:Dn=Dn.return}}function zl(n){if(n!==Dn)return!1;if(!et)return iy(n),et=!0,!1;var a=!1,l;if((l=n.tag!==3&&n.tag!==27)&&((l=n.tag===5)&&(l=n.type,l=!(l!=="form"&&l!=="button")||Xp(n.type,n.memoizedProps)),l=!l),l&&(a=!0),a&&rn&&pa(n),iy(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(l=n.data,l==="/$"){if(a===0){rn=Si(n.nextSibling);break e}a--}else l!=="$"&&l!=="$!"&&l!=="$?"||a++;n=n.nextSibling}rn=null}}else rn=Dn?Si(n.stateNode.nextSibling):null;return!0}function Hl(){rn=Dn=null,et=!1}function Fl(n){Ei===null?Ei=[n]:Ei.push(n)}var ql=Error(r(460)),sy=Error(r(474)),xd={then:function(){}};function ry(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Zc(){}function ay(n,a,l){switch(l=n[l],l===void 0?n.push(a):l!==a&&(a.then(Zc,Zc),a=l),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,n===ql?Error(r(483)):n;default:if(typeof a.status=="string")a.then(Zc,Zc);else{if(n=ft,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var d=a;d.status="fulfilled",d.value=c}},function(c){if(a.status==="pending"){var d=a;d.status="rejected",d.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,n===ql?Error(r(483)):n}throw Gl=a,ql}}var Gl=null;function oy(){if(Gl===null)throw Error(r(459));var n=Gl;return Gl=null,n}var go=null,Wl=0;function Jc(n){var a=Wl;return Wl+=1,go===null&&(go=[]),ay(go,n,a)}function Kl(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function eh(n,a){throw a.$$typeof===u?Error(r(525)):(n=Object.prototype.toString.call(a),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function ly(n){var a=n._init;return a(n._payload)}function uy(n){function a(j,L){if(n){var H=j.deletions;H===null?(j.deletions=[L],j.flags|=16):H.push(L)}}function l(j,L){if(!n)return null;for(;L!==null;)a(j,L),L=L.sibling;return null}function c(j){for(var L=new Map;j!==null;)j.key!==null?L.set(j.key,j):L.set(j.index,j),j=j.sibling;return L}function d(j,L){return j=pr(j,L),j.index=0,j.sibling=null,j}function _(j,L,H){return j.index=H,n?(H=j.alternate,H!==null?(H=H.index,H<L?(j.flags|=33554434,L):H):(j.flags|=33554434,L)):(j.flags|=1048576,L)}function E(j){return n&&j.alternate===null&&(j.flags|=33554434),j}function w(j,L,H,ee){return L===null||L.tag!==6?(L=Cp(H,j.mode,ee),L.return=j,L):(L=d(L,H),L.return=j,L)}function O(j,L,H,ee){var Te=H.type;return Te===m?$(j,L,H.props.children,ee,H.key):L!==null&&(L.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===ne&&ly(Te)===L.type)?(L=d(L,H.props),Kl(L,H),L.return=j,L):(L=yh(H.type,H.key,H.props,null,j.mode,ee),Kl(L,H),L.return=j,L)}function U(j,L,H,ee){return L===null||L.tag!==4||L.stateNode.containerInfo!==H.containerInfo||L.stateNode.implementation!==H.implementation?(L=Rp(H,j.mode,ee),L.return=j,L):(L=d(L,H.children||[]),L.return=j,L)}function $(j,L,H,ee,Te){return L===null||L.tag!==7?(L=wa(H,j.mode,ee,Te),L.return=j,L):(L=d(L,H),L.return=j,L)}function se(j,L,H){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Cp(""+L,j.mode,H),L.return=j,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case h:return H=yh(L.type,L.key,L.props,null,j.mode,H),Kl(H,L),H.return=j,H;case p:return L=Rp(L,j.mode,H),L.return=j,L;case ne:var ee=L._init;return L=ee(L._payload),se(j,L,H)}if(de(L)||Ee(L))return L=wa(L,j.mode,H,null),L.return=j,L;if(typeof L.then=="function")return se(j,Jc(L),H);if(L.$$typeof===V)return se(j,_h(j,L),H);eh(j,L)}return null}function q(j,L,H,ee){var Te=L!==null?L.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return Te!==null?null:w(j,L,""+H,ee);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case h:return H.key===Te?O(j,L,H,ee):null;case p:return H.key===Te?U(j,L,H,ee):null;case ne:return Te=H._init,H=Te(H._payload),q(j,L,H,ee)}if(de(H)||Ee(H))return Te!==null?null:$(j,L,H,ee,null);if(typeof H.then=="function")return q(j,L,Jc(H),ee);if(H.$$typeof===V)return q(j,L,_h(j,H),ee);eh(j,H)}return null}function Q(j,L,H,ee,Te){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return j=j.get(H)||null,w(L,j,""+ee,Te);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case h:return j=j.get(ee.key===null?H:ee.key)||null,O(L,j,ee,Te);case p:return j=j.get(ee.key===null?H:ee.key)||null,U(L,j,ee,Te);case ne:var Ue=ee._init;return ee=Ue(ee._payload),Q(j,L,H,ee,Te)}if(de(ee)||Ee(ee))return j=j.get(H)||null,$(L,j,ee,Te,null);if(typeof ee.then=="function")return Q(j,L,H,Jc(ee),Te);if(ee.$$typeof===V)return Q(j,L,H,_h(L,ee),Te);eh(L,ee)}return null}function we(j,L,H,ee){for(var Te=null,Ue=null,be=L,Ne=L=0,Zt=null;be!==null&&Ne<H.length;Ne++){be.index>Ne?(Zt=be,be=null):Zt=be.sibling;var tt=q(j,be,H[Ne],ee);if(tt===null){be===null&&(be=Zt);break}n&&be&&tt.alternate===null&&a(j,be),L=_(tt,L,Ne),Ue===null?Te=tt:Ue.sibling=tt,Ue=tt,be=Zt}if(Ne===H.length)return l(j,be),et&&da(j,Ne),Te;if(be===null){for(;Ne<H.length;Ne++)be=se(j,H[Ne],ee),be!==null&&(L=_(be,L,Ne),Ue===null?Te=be:Ue.sibling=be,Ue=be);return et&&da(j,Ne),Te}for(be=c(be);Ne<H.length;Ne++)Zt=Q(be,j,Ne,H[Ne],ee),Zt!==null&&(n&&Zt.alternate!==null&&be.delete(Zt.key===null?Ne:Zt.key),L=_(Zt,L,Ne),Ue===null?Te=Zt:Ue.sibling=Zt,Ue=Zt);return n&&be.forEach(function(Tr){return a(j,Tr)}),et&&da(j,Ne),Te}function Me(j,L,H,ee){if(H==null)throw Error(r(151));for(var Te=null,Ue=null,be=L,Ne=L=0,Zt=null,tt=H.next();be!==null&&!tt.done;Ne++,tt=H.next()){be.index>Ne?(Zt=be,be=null):Zt=be.sibling;var Tr=q(j,be,tt.value,ee);if(Tr===null){be===null&&(be=Zt);break}n&&be&&Tr.alternate===null&&a(j,be),L=_(Tr,L,Ne),Ue===null?Te=Tr:Ue.sibling=Tr,Ue=Tr,be=Zt}if(tt.done)return l(j,be),et&&da(j,Ne),Te;if(be===null){for(;!tt.done;Ne++,tt=H.next())tt=se(j,tt.value,ee),tt!==null&&(L=_(tt,L,Ne),Ue===null?Te=tt:Ue.sibling=tt,Ue=tt);return et&&da(j,Ne),Te}for(be=c(be);!tt.done;Ne++,tt=H.next())tt=Q(be,j,Ne,tt.value,ee),tt!==null&&(n&&tt.alternate!==null&&be.delete(tt.key===null?Ne:tt.key),L=_(tt,L,Ne),Ue===null?Te=tt:Ue.sibling=tt,Ue=tt);return n&&be.forEach(function(sR){return a(j,sR)}),et&&da(j,Ne),Te}function bt(j,L,H,ee){if(typeof H=="object"&&H!==null&&H.type===m&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case h:e:{for(var Te=H.key;L!==null;){if(L.key===Te){if(Te=H.type,Te===m){if(L.tag===7){l(j,L.sibling),ee=d(L,H.props.children),ee.return=j,j=ee;break e}}else if(L.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===ne&&ly(Te)===L.type){l(j,L.sibling),ee=d(L,H.props),Kl(ee,H),ee.return=j,j=ee;break e}l(j,L);break}else a(j,L);L=L.sibling}H.type===m?(ee=wa(H.props.children,j.mode,ee,H.key),ee.return=j,j=ee):(ee=yh(H.type,H.key,H.props,null,j.mode,ee),Kl(ee,H),ee.return=j,j=ee)}return E(j);case p:e:{for(Te=H.key;L!==null;){if(L.key===Te)if(L.tag===4&&L.stateNode.containerInfo===H.containerInfo&&L.stateNode.implementation===H.implementation){l(j,L.sibling),ee=d(L,H.children||[]),ee.return=j,j=ee;break e}else{l(j,L);break}else a(j,L);L=L.sibling}ee=Rp(H,j.mode,ee),ee.return=j,j=ee}return E(j);case ne:return Te=H._init,H=Te(H._payload),bt(j,L,H,ee)}if(de(H))return we(j,L,H,ee);if(Ee(H)){if(Te=Ee(H),typeof Te!="function")throw Error(r(150));return H=Te.call(H),Me(j,L,H,ee)}if(typeof H.then=="function")return bt(j,L,Jc(H),ee);if(H.$$typeof===V)return bt(j,L,_h(j,H),ee);eh(j,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,L!==null&&L.tag===6?(l(j,L.sibling),ee=d(L,H),ee.return=j,j=ee):(l(j,L),ee=Cp(H,j.mode,ee),ee.return=j,j=ee),E(j)):l(j,L)}return function(j,L,H,ee){try{Wl=0;var Te=bt(j,L,H,ee);return go=null,Te}catch(be){if(be===ql)throw be;var Ue=hi(29,be,null,j.mode);return Ue.lanes=ee,Ue.return=j,Ue}finally{}}}var _a=uy(!0),cy=uy(!1),yo=ye(null),th=ye(0);function hy(n,a){n=ws,Ce(th,n),Ce(yo,a),ws=n|a.baseLanes}function kd(){Ce(th,ws),Ce(yo,yo.current)}function Md(){ws=th.current,_e(yo),_e(th)}var li=ye(null),zi=null;function ir(n){var a=n.alternate;Ce(zt,zt.current&1),Ce(li,n),zi===null&&(a===null||yo.current!==null||a.memoizedState!==null)&&(zi=n)}function fy(n){if(n.tag===22){if(Ce(zt,zt.current),Ce(li,n),zi===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(zi=n)}}else sr()}function sr(){Ce(zt,zt.current),Ce(li,li.current)}function ps(n){_e(li),zi===n&&(zi=null),_e(zt)}var zt=ye(0);function nh(n){for(var a=n;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Gb=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(l,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(l){return l()})}},Wb=s.unstable_scheduleCallback,Kb=s.unstable_NormalPriority,Ht={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pd(){return{controller:new Gb,data:new Map,refCount:0}}function Ql(n){n.refCount--,n.refCount===0&&Wb(Kb,function(){n.controller.abort()})}var Yl=null,Vd=0,vo=0,Eo=null;function Qb(n,a){if(Yl===null){var l=Yl=[];Vd=0,vo=Hp(),Eo={status:"pending",value:void 0,then:function(c){l.push(c)}}}return Vd++,a.then(dy,dy),a}function dy(){if(--Vd===0&&Yl!==null){Eo!==null&&(Eo.status="fulfilled");var n=Yl;Yl=null,vo=0,Eo=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function Yb(n,a){var l=[],c={status:"pending",value:null,reason:null,then:function(d){l.push(d)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var d=0;d<l.length;d++)(0,l[d])(a)},function(d){for(c.status="rejected",c.reason=d,d=0;d<l.length;d++)(0,l[d])(void 0)}),c}var py=C.S;C.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&Qb(n,a),py!==null&&py(n,a)};var ma=ye(null);function Ld(){var n=ma.current;return n!==null?n:ft.pooledCache}function ih(n,a){a===null?Ce(ma,ma.current):Ce(ma,a.pool)}function _y(){var n=Ld();return n===null?null:{parent:Ht._currentValue,pool:n}}var rr=0,Le=null,ot=null,kt=null,sh=!1,To=!1,ga=!1,rh=0,$l=0,So=null,$b=0;function Nt(){throw Error(r(321))}function Ud(n,a){if(a===null)return!1;for(var l=0;l<a.length&&l<n.length;l++)if(!zn(n[l],a[l]))return!1;return!0}function jd(n,a,l,c,d,_){return rr=_,Le=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,C.H=n===null||n.memoizedState===null?ya:ar,ga=!1,_=l(c,d),ga=!1,To&&(_=gy(a,l,c,d)),my(n),_}function my(n){C.H=Hi;var a=ot!==null&&ot.next!==null;if(rr=0,kt=ot=Le=null,sh=!1,$l=0,So=null,a)throw Error(r(300));n===null||$t||(n=n.dependencies,n!==null&&ph(n)&&($t=!0))}function gy(n,a,l,c){Le=n;var d=0;do{if(To&&(So=null),$l=0,To=!1,25<=d)throw Error(r(301));if(d+=1,kt=ot=null,n.updateQueue!=null){var _=n.updateQueue;_.lastEffect=null,_.events=null,_.stores=null,_.memoCache!=null&&(_.memoCache.index=0)}C.H=va,_=a(l,c)}while(To);return _}function Xb(){var n=C.H,a=n.useState()[0];return a=typeof a.then=="function"?Xl(a):a,n=n.useState()[0],(ot!==null?ot.memoizedState:null)!==n&&(Le.flags|=1024),a}function Bd(){var n=rh!==0;return rh=0,n}function zd(n,a,l){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~l}function Hd(n){if(sh){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}sh=!1}rr=0,kt=ot=Le=null,To=!1,$l=rh=0,So=null}function Mn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Le.memoizedState=kt=n:kt=kt.next=n,kt}function Mt(){if(ot===null){var n=Le.alternate;n=n!==null?n.memoizedState:null}else n=ot.next;var a=kt===null?Le.memoizedState:kt.next;if(a!==null)kt=a,ot=n;else{if(n===null)throw Le.alternate===null?Error(r(467)):Error(r(310));ot=n,n={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},kt===null?Le.memoizedState=kt=n:kt=kt.next=n}return kt}var ah;ah=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Xl(n){var a=$l;return $l+=1,So===null&&(So=[]),n=ay(So,n,a),a=Le,(kt===null?a.memoizedState:kt.next)===null&&(a=a.alternate,C.H=a===null||a.memoizedState===null?ya:ar),n}function oh(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Xl(n);if(n.$$typeof===V)return _n(n)}throw Error(r(438,String(n)))}function Fd(n){var a=null,l=Le.updateQueue;if(l!==null&&(a=l.memoCache),a==null){var c=Le.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(d){return d.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),l===null&&(l=ah(),Le.updateQueue=l),l.memoCache=a,l=a.data[a.index],l===void 0)for(l=a.data[a.index]=Array(n),c=0;c<n;c++)l[c]=re;return a.index++,l}function _s(n,a){return typeof a=="function"?a(n):a}function lh(n){var a=Mt();return qd(a,ot,n)}function qd(n,a,l){var c=n.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=l;var d=n.baseQueue,_=c.pending;if(_!==null){if(d!==null){var E=d.next;d.next=_.next,_.next=E}a.baseQueue=d=_,c.pending=null}if(_=n.baseState,d===null)n.memoizedState=_;else{a=d.next;var w=E=null,O=null,U=a,$=!1;do{var se=U.lane&-536870913;if(se!==U.lane?(Ye&se)===se:(rr&se)===se){var q=U.revertLane;if(q===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),se===vo&&($=!0);else if((rr&q)===q){U=U.next,q===vo&&($=!0);continue}else se={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},O===null?(w=O=se,E=_):O=O.next=se,Le.lanes|=q,_r|=q;se=U.action,ga&&l(_,se),_=U.hasEagerState?U.eagerState:l(_,se)}else q={lane:se,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},O===null?(w=O=q,E=_):O=O.next=q,Le.lanes|=se,_r|=se;U=U.next}while(U!==null&&U!==a);if(O===null?E=_:O.next=w,!zn(_,n.memoizedState)&&($t=!0,$&&(l=Eo,l!==null)))throw l;n.memoizedState=_,n.baseState=E,n.baseQueue=O,c.lastRenderedState=_}return d===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function Gd(n){var a=Mt(),l=a.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=n;var c=l.dispatch,d=l.pending,_=a.memoizedState;if(d!==null){l.pending=null;var E=d=d.next;do _=n(_,E.action),E=E.next;while(E!==d);zn(_,a.memoizedState)||($t=!0),a.memoizedState=_,a.baseQueue===null&&(a.baseState=_),l.lastRenderedState=_}return[_,c]}function yy(n,a,l){var c=Le,d=Mt(),_=et;if(_){if(l===void 0)throw Error(r(407));l=l()}else l=a();var E=!zn((ot||d).memoizedState,l);if(E&&(d.memoizedState=l,$t=!0),d=d.queue,Qd(Ty.bind(null,c,d,n),[n]),d.getSnapshot!==a||E||kt!==null&&kt.memoizedState.tag&1){if(c.flags|=2048,Ao(9,Ey.bind(null,c,d,l,a),{destroy:void 0},null),ft===null)throw Error(r(349));_||(rr&60)!==0||vy(c,a,l)}return l}function vy(n,a,l){n.flags|=16384,n={getSnapshot:a,value:l},a=Le.updateQueue,a===null?(a=ah(),Le.updateQueue=a,a.stores=[n]):(l=a.stores,l===null?a.stores=[n]:l.push(n))}function Ey(n,a,l,c){a.value=l,a.getSnapshot=c,Sy(a)&&Ay(n)}function Ty(n,a,l){return l(function(){Sy(a)&&Ay(n)})}function Sy(n){var a=n.getSnapshot;n=n.value;try{var l=a();return!zn(n,l)}catch{return!0}}function Ay(n){var a=nr(n,2);a!==null&&On(a,n,2)}function Wd(n){var a=Mn();if(typeof n=="function"){var l=n;if(n=l(),ga){Ni(!0);try{l()}finally{Ni(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_s,lastRenderedState:n},a}function wy(n,a,l,c){return n.baseState=l,qd(n,ot,typeof c=="function"?c:_s)}function Zb(n,a,l,c,d){if(hh(n))throw Error(r(485));if(n=a.action,n!==null){var _={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){_.listeners.push(E)}};C.T!==null?l(!0):_.isTransition=!1,c(_),l=a.pending,l===null?(_.next=a.pending=_,by(a,_)):(_.next=l.next,a.pending=l.next=_)}}function by(n,a){var l=a.action,c=a.payload,d=n.state;if(a.isTransition){var _=C.T,E={};C.T=E;try{var w=l(d,c),O=C.S;O!==null&&O(E,w),Cy(n,a,w)}catch(U){Kd(n,a,U)}finally{C.T=_}}else try{_=l(d,c),Cy(n,a,_)}catch(U){Kd(n,a,U)}}function Cy(n,a,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(c){Ry(n,a,c)},function(c){return Kd(n,a,c)}):Ry(n,a,l)}function Ry(n,a,l){a.status="fulfilled",a.value=l,Iy(a),n.state=l,a=n.pending,a!==null&&(l=a.next,l===a?n.pending=null:(l=l.next,a.next=l,by(n,l)))}function Kd(n,a,l){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=l,Iy(a),a=a.next;while(a!==c)}n.action=null}function Iy(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function Ny(n,a){return a}function Dy(n,a){if(et){var l=ft.formState;if(l!==null){e:{var c=Le;if(et){if(rn){t:{for(var d=rn,_=Bi;d.nodeType!==8;){if(!_){d=null;break t}if(d=Si(d.nextSibling),d===null){d=null;break t}}_=d.data,d=_==="F!"||_==="F"?d:null}if(d){rn=Si(d.nextSibling),c=d.data==="F!";break e}}pa(c)}c=!1}c&&(a=l[0])}}return l=Mn(),l.memoizedState=l.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ny,lastRenderedState:a},l.queue=c,l=Qy.bind(null,Le,c),c.dispatch=l,c=Wd(!1),_=Jd.bind(null,Le,!1,c.queue),c=Mn(),d={state:a,dispatch:null,action:n,pending:null},c.queue=d,l=Zb.bind(null,Le,d,_,l),d.dispatch=l,c.memoizedState=n,[a,l,!1]}function Oy(n){var a=Mt();return xy(a,ot,n)}function xy(n,a,l){a=qd(n,a,Ny)[0],n=lh(_s)[0],a=typeof a=="object"&&a!==null&&typeof a.then=="function"?Xl(a):a;var c=Mt(),d=c.queue,_=d.dispatch;return l!==c.memoizedState&&(Le.flags|=2048,Ao(9,Jb.bind(null,d,l),{destroy:void 0},null)),[a,_,n]}function Jb(n,a){n.action=a}function ky(n){var a=Mt(),l=ot;if(l!==null)return xy(a,l,n);Mt(),a=a.memoizedState,l=Mt();var c=l.queue.dispatch;return l.memoizedState=n,[a,c,!1]}function Ao(n,a,l,c){return n={tag:n,create:a,inst:l,deps:c,next:null},a=Le.updateQueue,a===null&&(a=ah(),Le.updateQueue=a),l=a.lastEffect,l===null?a.lastEffect=n.next=n:(c=l.next,l.next=n,n.next=c,a.lastEffect=n),n}function My(){return Mt().memoizedState}function uh(n,a,l,c){var d=Mn();Le.flags|=n,d.memoizedState=Ao(1|a,l,{destroy:void 0},c===void 0?null:c)}function ch(n,a,l,c){var d=Mt();c=c===void 0?null:c;var _=d.memoizedState.inst;ot!==null&&c!==null&&Ud(c,ot.memoizedState.deps)?d.memoizedState=Ao(a,l,_,c):(Le.flags|=n,d.memoizedState=Ao(1|a,l,_,c))}function Py(n,a){uh(8390656,8,n,a)}function Qd(n,a){ch(2048,8,n,a)}function Vy(n,a){return ch(4,2,n,a)}function Ly(n,a){return ch(4,4,n,a)}function Uy(n,a){if(typeof a=="function"){n=n();var l=a(n);return function(){typeof l=="function"?l():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function jy(n,a,l){l=l!=null?l.concat([n]):null,ch(4,4,Uy.bind(null,a,n),l)}function Yd(){}function By(n,a){var l=Mt();a=a===void 0?null:a;var c=l.memoizedState;return a!==null&&Ud(a,c[1])?c[0]:(l.memoizedState=[n,a],n)}function zy(n,a){var l=Mt();a=a===void 0?null:a;var c=l.memoizedState;if(a!==null&&Ud(a,c[1]))return c[0];if(c=n(),ga){Ni(!0);try{n()}finally{Ni(!1)}}return l.memoizedState=[c,a],c}function $d(n,a,l){return l===void 0||(rr&1073741824)!==0?n.memoizedState=a:(n.memoizedState=l,n=Fv(),Le.lanes|=n,_r|=n,l)}function Hy(n,a,l,c){return zn(l,a)?l:yo.current!==null?(n=$d(n,l,c),zn(n,a)||($t=!0),n):(rr&42)===0?($t=!0,n.memoizedState=l):(n=Fv(),Le.lanes|=n,_r|=n,a)}function Fy(n,a,l,c,d){var _=pe.p;pe.p=_!==0&&8>_?_:8;var E=C.T,w={};C.T=w,Jd(n,!1,a,l);try{var O=d(),U=C.S;if(U!==null&&U(w,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var $=Yb(O,c);Zl(n,a,$,Gn(n))}else Zl(n,a,c,Gn(n))}catch(se){Zl(n,a,{then:function(){},status:"rejected",reason:se},Gn())}finally{pe.p=_,C.T=E}}function eC(){}function Xd(n,a,l,c){if(n.tag!==5)throw Error(r(476));var d=qy(n).queue;Fy(n,d,a,oe,l===null?eC:function(){return Gy(n),l(c)})}function qy(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_s,lastRenderedState:oe},next:null};var l={};return a.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_s,lastRenderedState:l},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function Gy(n){var a=qy(n).next.queue;Zl(n,a,{},Gn())}function Zd(){return _n(yu)}function Wy(){return Mt().memoizedState}function Ky(){return Mt().memoizedState}function tC(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var l=Gn();n=ur(l);var c=cr(a,n,l);c!==null&&(On(c,a,l),tu(c,a,l)),a={cache:Pd()},n.payload=a;return}a=a.return}}function nC(n,a,l){var c=Gn();l={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},hh(n)?Yy(a,l):(l=Id(n,a,l,c),l!==null&&(On(l,n,c),$y(l,a,c)))}function Qy(n,a,l){var c=Gn();Zl(n,a,l,c)}function Zl(n,a,l,c){var d={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(hh(n))Yy(a,d);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=a.lastRenderedReducer,_!==null))try{var E=a.lastRenderedState,w=_(E,l);if(d.hasEagerState=!0,d.eagerState=w,zn(w,E))return Qc(n,a,d,0),ft===null&&Kc(),!1}catch{}finally{}if(l=Id(n,a,d,c),l!==null)return On(l,n,c),$y(l,a,c),!0}return!1}function Jd(n,a,l,c){if(c={lane:2,revertLane:Hp(),action:c,hasEagerState:!1,eagerState:null,next:null},hh(n)){if(a)throw Error(r(479))}else a=Id(n,l,c,2),a!==null&&On(a,n,2)}function hh(n){var a=n.alternate;return n===Le||a!==null&&a===Le}function Yy(n,a){To=sh=!0;var l=n.pending;l===null?a.next=a:(a.next=l.next,l.next=a),n.pending=a}function $y(n,a,l){if((l&4194176)!==0){var c=a.lanes;c&=n.pendingLanes,l|=c,a.lanes=l,Ws(n,l)}}var Hi={readContext:_n,use:oh,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useLayoutEffect:Nt,useInsertionEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useSyncExternalStore:Nt,useId:Nt};Hi.useCacheRefresh=Nt,Hi.useMemoCache=Nt,Hi.useHostTransitionStatus=Nt,Hi.useFormState=Nt,Hi.useActionState=Nt,Hi.useOptimistic=Nt;var ya={readContext:_n,use:oh,useCallback:function(n,a){return Mn().memoizedState=[n,a===void 0?null:a],n},useContext:_n,useEffect:Py,useImperativeHandle:function(n,a,l){l=l!=null?l.concat([n]):null,uh(4194308,4,Uy.bind(null,a,n),l)},useLayoutEffect:function(n,a){return uh(4194308,4,n,a)},useInsertionEffect:function(n,a){uh(4,2,n,a)},useMemo:function(n,a){var l=Mn();a=a===void 0?null:a;var c=n();if(ga){Ni(!0);try{n()}finally{Ni(!1)}}return l.memoizedState=[c,a],c},useReducer:function(n,a,l){var c=Mn();if(l!==void 0){var d=l(a);if(ga){Ni(!0);try{l(a)}finally{Ni(!1)}}}else d=a;return c.memoizedState=c.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},c.queue=n,n=n.dispatch=nC.bind(null,Le,n),[c.memoizedState,n]},useRef:function(n){var a=Mn();return n={current:n},a.memoizedState=n},useState:function(n){n=Wd(n);var a=n.queue,l=Qy.bind(null,Le,a);return a.dispatch=l,[n.memoizedState,l]},useDebugValue:Yd,useDeferredValue:function(n,a){var l=Mn();return $d(l,n,a)},useTransition:function(){var n=Wd(!1);return n=Fy.bind(null,Le,n.queue,!0,!1),Mn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,l){var c=Le,d=Mn();if(et){if(l===void 0)throw Error(r(407));l=l()}else{if(l=a(),ft===null)throw Error(r(349));(Ye&60)!==0||vy(c,a,l)}d.memoizedState=l;var _={value:l,getSnapshot:a};return d.queue=_,Py(Ty.bind(null,c,_,n),[n]),c.flags|=2048,Ao(9,Ey.bind(null,c,_,l,a),{destroy:void 0},null),l},useId:function(){var n=Mn(),a=ft.identifierPrefix;if(et){var l=ds,c=fs;l=(c&~(1<<32-Rn(c)-1)).toString(32)+l,a=":"+a+"R"+l,l=rh++,0<l&&(a+="H"+l.toString(32)),a+=":"}else l=$b++,a=":"+a+"r"+l.toString(32)+":";return n.memoizedState=a},useCacheRefresh:function(){return Mn().memoizedState=tC.bind(null,Le)}};ya.useMemoCache=Fd,ya.useHostTransitionStatus=Zd,ya.useFormState=Dy,ya.useActionState=Dy,ya.useOptimistic=function(n){var a=Mn();a.memoizedState=a.baseState=n;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=l,a=Jd.bind(null,Le,!0,l),l.dispatch=a,[n,a]};var ar={readContext:_n,use:oh,useCallback:By,useContext:_n,useEffect:Qd,useImperativeHandle:jy,useInsertionEffect:Vy,useLayoutEffect:Ly,useMemo:zy,useReducer:lh,useRef:My,useState:function(){return lh(_s)},useDebugValue:Yd,useDeferredValue:function(n,a){var l=Mt();return Hy(l,ot.memoizedState,n,a)},useTransition:function(){var n=lh(_s)[0],a=Mt().memoizedState;return[typeof n=="boolean"?n:Xl(n),a]},useSyncExternalStore:yy,useId:Wy};ar.useCacheRefresh=Ky,ar.useMemoCache=Fd,ar.useHostTransitionStatus=Zd,ar.useFormState=Oy,ar.useActionState=Oy,ar.useOptimistic=function(n,a){var l=Mt();return wy(l,ot,n,a)};var va={readContext:_n,use:oh,useCallback:By,useContext:_n,useEffect:Qd,useImperativeHandle:jy,useInsertionEffect:Vy,useLayoutEffect:Ly,useMemo:zy,useReducer:Gd,useRef:My,useState:function(){return Gd(_s)},useDebugValue:Yd,useDeferredValue:function(n,a){var l=Mt();return ot===null?$d(l,n,a):Hy(l,ot.memoizedState,n,a)},useTransition:function(){var n=Gd(_s)[0],a=Mt().memoizedState;return[typeof n=="boolean"?n:Xl(n),a]},useSyncExternalStore:yy,useId:Wy};va.useCacheRefresh=Ky,va.useMemoCache=Fd,va.useHostTransitionStatus=Zd,va.useFormState=ky,va.useActionState=ky,va.useOptimistic=function(n,a){var l=Mt();return ot!==null?wy(l,ot,n,a):(l.baseState=n,[n,l.queue.dispatch])};function ep(n,a,l,c){a=n.memoizedState,l=l(c,a),l=l==null?a:N({},a,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var tp={isMounted:function(n){return(n=n._reactInternals)?ue(n)===n:!1},enqueueSetState:function(n,a,l){n=n._reactInternals;var c=Gn(),d=ur(c);d.payload=a,l!=null&&(d.callback=l),a=cr(n,d,c),a!==null&&(On(a,n,c),tu(a,n,c))},enqueueReplaceState:function(n,a,l){n=n._reactInternals;var c=Gn(),d=ur(c);d.tag=1,d.payload=a,l!=null&&(d.callback=l),a=cr(n,d,c),a!==null&&(On(a,n,c),tu(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var l=Gn(),c=ur(l);c.tag=2,a!=null&&(c.callback=a),a=cr(n,c,l),a!==null&&(On(a,n,l),tu(a,n,l))}};function Xy(n,a,l,c,d,_,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,_,E):a.prototype&&a.prototype.isPureReactComponent?!jl(l,c)||!jl(d,_):!0}function Zy(n,a,l,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,c),a.state!==n&&tp.enqueueReplaceState(a,a.state,null)}function Ea(n,a){var l=a;if("ref"in a){l={};for(var c in a)c!=="ref"&&(l[c]=a[c])}if(n=n.defaultProps){l===a&&(l=N({},l));for(var d in n)l[d]===void 0&&(l[d]=n[d])}return l}var fh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Jy(n){fh(n)}function ev(n){console.error(n)}function tv(n){fh(n)}function dh(n,a){try{var l=n.onUncaughtError;l(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function nv(n,a,l){try{var c=n.onCaughtError;c(l.value,{componentStack:l.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function np(n,a,l){return l=ur(l),l.tag=3,l.payload={element:null},l.callback=function(){dh(n,a)},l}function iv(n){return n=ur(n),n.tag=3,n}function sv(n,a,l,c){var d=l.type.getDerivedStateFromError;if(typeof d=="function"){var _=c.value;n.payload=function(){return d(_)},n.callback=function(){nv(a,l,c)}}var E=l.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){nv(a,l,c),typeof d!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var w=c.stack;this.componentDidCatch(c.value,{componentStack:w!==null?w:""})})}function iC(n,a,l,c,d){if(l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=l.alternate,a!==null&&eu(a,l,d,!0),l=li.current,l!==null){switch(l.tag){case 13:return zi===null?Lp():l.alternate===null&&wt===0&&(wt=3),l.flags&=-257,l.flags|=65536,l.lanes=d,c===xd?l.flags|=16384:(a=l.updateQueue,a===null?l.updateQueue=new Set([c]):a.add(c),jp(n,c,d)),!1;case 22:return l.flags|=65536,c===xd?l.flags|=16384:(a=l.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},l.updateQueue=a):(l=a.retryQueue,l===null?a.retryQueue=new Set([c]):l.add(c)),jp(n,c,d)),!1}throw Error(r(435,l.tag))}return jp(n,c,d),Lp(),!1}if(et)return a=li.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=d,c!==Od&&(n=Error(r(422),{cause:c}),Fl(ri(n,l)))):(c!==Od&&(a=Error(r(423),{cause:c}),Fl(ri(a,l))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,c=ri(c,l),d=np(n.stateNode,c,d),gp(n,d),wt!==4&&(wt=2)),!1;var _=Error(r(520),{cause:c});if(_=ri(_,l),uu===null?uu=[_]:uu.push(_),wt!==4&&(wt=2),a===null)return!0;c=ri(c,l),l=a;do{switch(l.tag){case 3:return l.flags|=65536,n=d&-d,l.lanes|=n,n=np(l.stateNode,c,n),gp(l,n),!1;case 1:if(a=l.type,_=l.stateNode,(l.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(mr===null||!mr.has(_))))return l.flags|=65536,d&=-d,l.lanes|=d,d=iv(d),sv(d,n,l,c),gp(l,d),!1}l=l.return}while(l!==null);return!1}var rv=Error(r(461)),$t=!1;function an(n,a,l,c){a.child=n===null?cy(a,null,l,c):_a(a,n.child,l,c)}function av(n,a,l,c,d){l=l.render;var _=a.ref;if("ref"in c){var E={};for(var w in c)w!=="ref"&&(E[w]=c[w])}else E=c;return Sa(a),c=jd(n,a,l,E,_,d),w=Bd(),n!==null&&!$t?(zd(n,a,d),ms(n,a,d)):(et&&w&&Nd(a),a.flags|=1,an(n,a,c,d),a.child)}function ov(n,a,l,c,d){if(n===null){var _=l.type;return typeof _=="function"&&!bp(_)&&_.defaultProps===void 0&&l.compare===null?(a.tag=15,a.type=_,lv(n,a,_,c,d)):(n=yh(l.type,null,c,a,a.mode,d),n.ref=a.ref,n.return=a,a.child=n)}if(_=n.child,!hp(n,d)){var E=_.memoizedProps;if(l=l.compare,l=l!==null?l:jl,l(E,c)&&n.ref===a.ref)return ms(n,a,d)}return a.flags|=1,n=pr(_,c),n.ref=a.ref,n.return=a,a.child=n}function lv(n,a,l,c,d){if(n!==null){var _=n.memoizedProps;if(jl(_,c)&&n.ref===a.ref)if($t=!1,a.pendingProps=c=_,hp(n,d))(n.flags&131072)!==0&&($t=!0);else return a.lanes=n.lanes,ms(n,a,d)}return ip(n,a,l,c,d)}function uv(n,a,l){var c=a.pendingProps,d=c.children,_=(a.stateNode._pendingVisibility&2)!==0,E=n!==null?n.memoizedState:null;if(Jl(n,a),c.mode==="hidden"||_){if((a.flags&128)!==0){if(c=E!==null?E.baseLanes|l:l,n!==null){for(d=a.child=n.child,_=0;d!==null;)_=_|d.lanes|d.childLanes,d=d.sibling;a.childLanes=_&~c}else a.childLanes=0,a.child=null;return cv(n,a,c,l)}if((l&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&ih(a,E!==null?E.cachePool:null),E!==null?hy(a,E):kd(),fy(a);else return a.lanes=a.childLanes=536870912,cv(n,a,E!==null?E.baseLanes|l:l,l)}else E!==null?(ih(a,E.cachePool),hy(a,E),sr(),a.memoizedState=null):(n!==null&&ih(a,null),kd(),sr());return an(n,a,d,l),a.child}function cv(n,a,l,c){var d=Ld();return d=d===null?null:{parent:Ht._currentValue,pool:d},a.memoizedState={baseLanes:l,cachePool:d},n!==null&&ih(a,null),kd(),fy(a),n!==null&&eu(n,a,c,!0),null}function Jl(n,a){var l=a.ref;if(l===null)n!==null&&n.ref!==null&&(a.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(n===null||n.ref!==l)&&(a.flags|=2097664)}}function ip(n,a,l,c,d){return Sa(a),l=jd(n,a,l,c,void 0,d),c=Bd(),n!==null&&!$t?(zd(n,a,d),ms(n,a,d)):(et&&c&&Nd(a),a.flags|=1,an(n,a,l,d),a.child)}function hv(n,a,l,c,d,_){return Sa(a),a.updateQueue=null,l=gy(a,c,l,d),my(n),c=Bd(),n!==null&&!$t?(zd(n,a,_),ms(n,a,_)):(et&&c&&Nd(a),a.flags|=1,an(n,a,l,_),a.child)}function fv(n,a,l,c,d){if(Sa(a),a.stateNode===null){var _=po,E=l.contextType;typeof E=="object"&&E!==null&&(_=_n(E)),_=new l(c,_),a.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,_.updater=tp,a.stateNode=_,_._reactInternals=a,_=a.stateNode,_.props=c,_.state=a.memoizedState,_.refs={},_p(a),E=l.contextType,_.context=typeof E=="object"&&E!==null?_n(E):po,_.state=a.memoizedState,E=l.getDerivedStateFromProps,typeof E=="function"&&(ep(a,l,E,c),_.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(E=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),E!==_.state&&tp.enqueueReplaceState(_,_.state,null),iu(a,c,_,d),nu(),_.state=a.memoizedState),typeof _.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){_=a.stateNode;var w=a.memoizedProps,O=Ea(l,w);_.props=O;var U=_.context,$=l.contextType;E=po,typeof $=="object"&&$!==null&&(E=_n($));var se=l.getDerivedStateFromProps;$=typeof se=="function"||typeof _.getSnapshotBeforeUpdate=="function",w=a.pendingProps!==w,$||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(w||U!==E)&&Zy(a,_,c,E),lr=!1;var q=a.memoizedState;_.state=q,iu(a,c,_,d),nu(),U=a.memoizedState,w||q!==U||lr?(typeof se=="function"&&(ep(a,l,se,c),U=a.memoizedState),(O=lr||Xy(a,l,O,c,q,U,E))?($||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(a.flags|=4194308)):(typeof _.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=U),_.props=c,_.state=U,_.context=E,c=O):(typeof _.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{_=a.stateNode,mp(n,a),E=a.memoizedProps,$=Ea(l,E),_.props=$,se=a.pendingProps,q=_.context,U=l.contextType,O=po,typeof U=="object"&&U!==null&&(O=_n(U)),w=l.getDerivedStateFromProps,(U=typeof w=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(E!==se||q!==O)&&Zy(a,_,c,O),lr=!1,q=a.memoizedState,_.state=q,iu(a,c,_,d),nu();var Q=a.memoizedState;E!==se||q!==Q||lr||n!==null&&n.dependencies!==null&&ph(n.dependencies)?(typeof w=="function"&&(ep(a,l,w,c),Q=a.memoizedState),($=lr||Xy(a,l,$,c,q,Q,O)||n!==null&&n.dependencies!==null&&ph(n.dependencies))?(U||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,Q,O),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,Q,O)),typeof _.componentDidUpdate=="function"&&(a.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof _.componentDidUpdate!="function"||E===n.memoizedProps&&q===n.memoizedState||(a.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&q===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=Q),_.props=c,_.state=Q,_.context=O,c=$):(typeof _.componentDidUpdate!="function"||E===n.memoizedProps&&q===n.memoizedState||(a.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&q===n.memoizedState||(a.flags|=1024),c=!1)}return _=c,Jl(n,a),c=(a.flags&128)!==0,_||c?(_=a.stateNode,l=c&&typeof l.getDerivedStateFromError!="function"?null:_.render(),a.flags|=1,n!==null&&c?(a.child=_a(a,n.child,null,d),a.child=_a(a,null,l,d)):an(n,a,l,d),a.memoizedState=_.state,n=a.child):n=ms(n,a,d),n}function dv(n,a,l,c){return Hl(),a.flags|=256,an(n,a,l,c),a.child}var sp={dehydrated:null,treeContext:null,retryLane:0};function rp(n){return{baseLanes:n,cachePool:_y()}}function ap(n,a,l){return n=n!==null?n.childLanes&~l:0,a&&(n|=fi),n}function pv(n,a,l){var c=a.pendingProps,d=!1,_=(a.flags&128)!==0,E;if((E=_)||(E=n!==null&&n.memoizedState===null?!1:(zt.current&2)!==0),E&&(d=!0,a.flags&=-129),E=(a.flags&32)!==0,a.flags&=-33,n===null){if(et){if(d?ir(a):sr(),et){var w=rn,O;if(O=w){e:{for(O=w,w=Bi;O.nodeType!==8;){if(!w){w=null;break e}if(O=Si(O.nextSibling),O===null){w=null;break e}}w=O}w!==null?(a.memoizedState={dehydrated:w,treeContext:fa!==null?{id:fs,overflow:ds}:null,retryLane:536870912},O=hi(18,null,null,0),O.stateNode=w,O.return=a,a.child=O,Dn=a,rn=null,O=!0):O=!1}O||pa(a)}if(w=a.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?a.lanes=16:a.lanes=536870912,null;ps(a)}return w=c.children,c=c.fallback,d?(sr(),d=a.mode,w=lp({mode:"hidden",children:w},d),c=wa(c,d,l,null),w.return=a,c.return=a,w.sibling=c,a.child=w,d=a.child,d.memoizedState=rp(l),d.childLanes=ap(n,E,l),a.memoizedState=sp,c):(ir(a),op(a,w))}if(O=n.memoizedState,O!==null&&(w=O.dehydrated,w!==null)){if(_)a.flags&256?(ir(a),a.flags&=-257,a=up(n,a,l)):a.memoizedState!==null?(sr(),a.child=n.child,a.flags|=128,a=null):(sr(),d=c.fallback,w=a.mode,c=lp({mode:"visible",children:c.children},w),d=wa(d,w,l,null),d.flags|=2,c.return=a,d.return=a,c.sibling=d,a.child=c,_a(a,n.child,null,l),c=a.child,c.memoizedState=rp(l),c.childLanes=ap(n,E,l),a.memoizedState=sp,a=d);else if(ir(a),w.data==="$!"){if(E=w.nextSibling&&w.nextSibling.dataset,E)var U=E.dgst;E=U,c=Error(r(419)),c.stack="",c.digest=E,Fl({value:c,source:null,stack:null}),a=up(n,a,l)}else if($t||eu(n,a,l,!1),E=(l&n.childLanes)!==0,$t||E){if(E=ft,E!==null){if(c=l&-l,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(E.suspendedLanes|l))!==0?0:c,c!==0&&c!==O.retryLane)throw O.retryLane=c,nr(n,c),On(E,n,c),rv}w.data==="$?"||Lp(),a=up(n,a,l)}else w.data==="$?"?(a.flags|=128,a.child=n.child,a=yC.bind(null,n),w._reactRetry=a,a=null):(n=O.treeContext,rn=Si(w.nextSibling),Dn=a,et=!0,Ei=null,Bi=!1,n!==null&&(ai[oi++]=fs,ai[oi++]=ds,ai[oi++]=fa,fs=n.id,ds=n.overflow,fa=a),a=op(a,c.children),a.flags|=4096);return a}return d?(sr(),d=c.fallback,w=a.mode,O=n.child,U=O.sibling,c=pr(O,{mode:"hidden",children:c.children}),c.subtreeFlags=O.subtreeFlags&31457280,U!==null?d=pr(U,d):(d=wa(d,w,l,null),d.flags|=2),d.return=a,c.return=a,c.sibling=d,a.child=c,c=d,d=a.child,w=n.child.memoizedState,w===null?w=rp(l):(O=w.cachePool,O!==null?(U=Ht._currentValue,O=O.parent!==U?{parent:U,pool:U}:O):O=_y(),w={baseLanes:w.baseLanes|l,cachePool:O}),d.memoizedState=w,d.childLanes=ap(n,E,l),a.memoizedState=sp,c):(ir(a),l=n.child,n=l.sibling,l=pr(l,{mode:"visible",children:c.children}),l.return=a,l.sibling=null,n!==null&&(E=a.deletions,E===null?(a.deletions=[n],a.flags|=16):E.push(n)),a.child=l,a.memoizedState=null,l)}function op(n,a){return a=lp({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function lp(n,a){return Bv(n,a,0,null)}function up(n,a,l){return _a(a,n.child,null,l),n=op(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function _v(n,a,l){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),dp(n.return,a,l)}function cp(n,a,l,c,d){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:d}:(_.isBackwards=a,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=l,_.tailMode=d)}function mv(n,a,l){var c=a.pendingProps,d=c.revealOrder,_=c.tail;if(an(n,a,c.children,l),c=zt.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&_v(n,l,a);else if(n.tag===19)_v(n,l,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(Ce(zt,c),d){case"forwards":for(l=a.child,d=null;l!==null;)n=l.alternate,n!==null&&nh(n)===null&&(d=l),l=l.sibling;l=d,l===null?(d=a.child,a.child=null):(d=l.sibling,l.sibling=null),cp(a,!1,d,l,_);break;case"backwards":for(l=null,d=a.child,a.child=null;d!==null;){if(n=d.alternate,n!==null&&nh(n)===null){a.child=d;break}n=d.sibling,d.sibling=l,l=d,d=n}cp(a,!0,l,null,_);break;case"together":cp(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ms(n,a,l){if(n!==null&&(a.dependencies=n.dependencies),_r|=a.lanes,(l&a.childLanes)===0)if(n!==null){if(eu(n,a,l,!1),(l&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(r(153));if(a.child!==null){for(n=a.child,l=pr(n,n.pendingProps),a.child=l,l.return=a;n.sibling!==null;)n=n.sibling,l=l.sibling=pr(n,n.pendingProps),l.return=a;l.sibling=null}return a.child}function hp(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&ph(n)))}function sC(n,a,l){switch(a.tag){case 3:$n(a,a.stateNode.containerInfo),or(a,Ht,n.memoizedState.cache),Hl();break;case 27:case 5:Ii(a);break;case 4:$n(a,a.stateNode.containerInfo);break;case 10:or(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(ir(a),a.flags|=128,null):(l&a.child.childLanes)!==0?pv(n,a,l):(ir(a),n=ms(n,a,l),n!==null?n.sibling:null);ir(a);break;case 19:var d=(n.flags&128)!==0;if(c=(l&a.childLanes)!==0,c||(eu(n,a,l,!1),c=(l&a.childLanes)!==0),d){if(c)return mv(n,a,l);a.flags|=128}if(d=a.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ce(zt,zt.current),c)break;return null;case 22:case 23:return a.lanes=0,uv(n,a,l);case 24:or(a,Ht,n.memoizedState.cache)}return ms(n,a,l)}function gv(n,a,l){if(n!==null)if(n.memoizedProps!==a.pendingProps)$t=!0;else{if(!hp(n,l)&&(a.flags&128)===0)return $t=!1,sC(n,a,l);$t=(n.flags&131072)!==0}else $t=!1,et&&(a.flags&1048576)!==0&&ty(a,Xc,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var c=a.elementType,d=c._init;if(c=d(c._payload),a.type=c,typeof c=="function")bp(c)?(n=Ea(c,n),a.tag=1,a=fv(null,a,c,n,l)):(a.tag=0,a=ip(null,a,c,n,l));else{if(c!=null){if(d=c.$$typeof,d===F){a.tag=11,a=av(null,a,c,n,l);break e}else if(d===Y){a.tag=14,a=ov(null,a,c,n,l);break e}}throw a=R(c)||c,Error(r(306,a,""))}}return a;case 0:return ip(n,a,a.type,a.pendingProps,l);case 1:return c=a.type,d=Ea(c,a.pendingProps),fv(n,a,c,d,l);case 3:e:{if($n(a,a.stateNode.containerInfo),n===null)throw Error(r(387));var _=a.pendingProps;d=a.memoizedState,c=d.element,mp(n,a),iu(a,_,null,l);var E=a.memoizedState;if(_=E.cache,or(a,Ht,_),_!==d.cache&&pp(a,[Ht],l,!0),nu(),_=E.element,d.isDehydrated)if(d={element:_,isDehydrated:!1,cache:E.cache},a.updateQueue.baseState=d,a.memoizedState=d,a.flags&256){a=dv(n,a,_,l);break e}else if(_!==c){c=ri(Error(r(424)),a),Fl(c),a=dv(n,a,_,l);break e}else for(rn=Si(a.stateNode.containerInfo.firstChild),Dn=a,et=!0,Ei=null,Bi=!0,l=cy(a,null,_,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Hl(),_===c){a=ms(n,a,l);break e}an(n,a,_,l)}a=a.child}return a;case 26:return Jl(n,a),n===null?(l=EE(a.type,null,a.pendingProps,null))?a.memoizedState=l:et||(l=a.type,n=a.pendingProps,c=Dh(Wt.current).createElement(l),c[Kt]=a,c[Ut]=n,on(c,l,n),yt(c),a.stateNode=c):a.memoizedState=EE(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return Ii(a),n===null&&et&&(c=a.stateNode=gE(a.type,a.pendingProps,Wt.current),Dn=a,Bi=!0,rn=Si(c.firstChild)),c=a.pendingProps.children,n!==null||et?an(n,a,c,l):a.child=_a(a,null,c,l),Jl(n,a),a.child;case 5:return n===null&&et&&((d=c=rn)&&(c=MC(c,a.type,a.pendingProps,Bi),c!==null?(a.stateNode=c,Dn=a,rn=Si(c.firstChild),Bi=!1,d=!0):d=!1),d||pa(a)),Ii(a),d=a.type,_=a.pendingProps,E=n!==null?n.memoizedProps:null,c=_.children,Xp(d,_)?c=null:E!==null&&Xp(d,E)&&(a.flags|=32),a.memoizedState!==null&&(d=jd(n,a,Xb,null,null,l),yu._currentValue=d),Jl(n,a),an(n,a,c,l),a.child;case 6:return n===null&&et&&((n=l=rn)&&(l=PC(l,a.pendingProps,Bi),l!==null?(a.stateNode=l,Dn=a,rn=null,n=!0):n=!1),n||pa(a)),null;case 13:return pv(n,a,l);case 4:return $n(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=_a(a,null,c,l):an(n,a,c,l),a.child;case 11:return av(n,a,a.type,a.pendingProps,l);case 7:return an(n,a,a.pendingProps,l),a.child;case 8:return an(n,a,a.pendingProps.children,l),a.child;case 12:return an(n,a,a.pendingProps.children,l),a.child;case 10:return c=a.pendingProps,or(a,a.type,c.value),an(n,a,c.children,l),a.child;case 9:return d=a.type._context,c=a.pendingProps.children,Sa(a),d=_n(d),c=c(d),a.flags|=1,an(n,a,c,l),a.child;case 14:return ov(n,a,a.type,a.pendingProps,l);case 15:return lv(n,a,a.type,a.pendingProps,l);case 19:return mv(n,a,l);case 22:return uv(n,a,l);case 24:return Sa(a),c=_n(Ht),n===null?(d=Ld(),d===null&&(d=ft,_=Pd(),d.pooledCache=_,_.refCount++,_!==null&&(d.pooledCacheLanes|=l),d=_),a.memoizedState={parent:c,cache:d},_p(a),or(a,Ht,d)):((n.lanes&l)!==0&&(mp(n,a),iu(a,null,null,l),nu()),d=n.memoizedState,_=a.memoizedState,d.parent!==c?(d={parent:c,cache:c},a.memoizedState=d,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=d),or(a,Ht,c)):(c=_.cache,or(a,Ht,c),c!==d.cache&&pp(a,[Ht],l,!0))),an(n,a,a.pendingProps.children,l),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}var fp=ye(null),Ta=null,gs=null;function or(n,a,l){Ce(fp,a._currentValue),a._currentValue=l}function ys(n){n._currentValue=fp.current,_e(fp)}function dp(n,a,l){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===l)break;n=n.return}}function pp(n,a,l,c){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var _=d.dependencies;if(_!==null){var E=d.child;_=_.firstContext;e:for(;_!==null;){var w=_;_=d;for(var O=0;O<a.length;O++)if(w.context===a[O]){_.lanes|=l,w=_.alternate,w!==null&&(w.lanes|=l),dp(_.return,l,n),c||(E=null);break e}_=w.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(r(341));E.lanes|=l,_=E.alternate,_!==null&&(_.lanes|=l),dp(E,l,n),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===n){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function eu(n,a,l,c){n=null;for(var d=a,_=!1;d!==null;){if(!_){if((d.flags&524288)!==0)_=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var w=d.type;zn(d.pendingProps.value,E.value)||(n!==null?n.push(w):n=[w])}}else if(d===Cn.current){if(E=d.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(yu):n=[yu])}d=d.return}n!==null&&pp(a,n,l,c),a.flags|=262144}function ph(n){for(n=n.firstContext;n!==null;){if(!zn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Sa(n){Ta=n,gs=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function _n(n){return yv(Ta,n)}function _h(n,a){return Ta===null&&Sa(n),yv(n,a)}function yv(n,a){var l=a._currentValue;if(a={context:a,memoizedValue:l,next:null},gs===null){if(n===null)throw Error(r(308));gs=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else gs=gs.next=a;return l}var lr=!1;function _p(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mp(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ur(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function cr(n,a,l){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var d=c.pending;return d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a,a=Yc(n),Jg(n,null,l),a}return Qc(n,c,a,l),Yc(n)}function tu(n,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194176)!==0)){var c=a.lanes;c&=n.pendingLanes,l|=c,a.lanes=l,Ws(n,l)}}function gp(n,a){var l=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var d=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var E={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};_===null?d=_=E:_=_.next=E,l=l.next}while(l!==null);_===null?d=_=a:_=_.next=a}else d=_=a;l={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:_,shared:c.shared,callbacks:c.callbacks},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=a:n.next=a,l.lastBaseUpdate=a}var yp=!1;function nu(){if(yp){var n=Eo;if(n!==null)throw n}}function iu(n,a,l,c){yp=!1;var d=n.updateQueue;lr=!1;var _=d.firstBaseUpdate,E=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var O=w,U=O.next;O.next=null,E===null?_=U:E.next=U,E=O;var $=n.alternate;$!==null&&($=$.updateQueue,w=$.lastBaseUpdate,w!==E&&(w===null?$.firstBaseUpdate=U:w.next=U,$.lastBaseUpdate=O))}if(_!==null){var se=d.baseState;E=0,$=U=O=null,w=_;do{var q=w.lane&-536870913,Q=q!==w.lane;if(Q?(Ye&q)===q:(c&q)===q){q!==0&&q===vo&&(yp=!0),$!==null&&($=$.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var we=n,Me=w;q=a;var bt=l;switch(Me.tag){case 1:if(we=Me.payload,typeof we=="function"){se=we.call(bt,se,q);break e}se=we;break e;case 3:we.flags=we.flags&-65537|128;case 0:if(we=Me.payload,q=typeof we=="function"?we.call(bt,se,q):we,q==null)break e;se=N({},se,q);break e;case 2:lr=!0}}q=w.callback,q!==null&&(n.flags|=64,Q&&(n.flags|=8192),Q=d.callbacks,Q===null?d.callbacks=[q]:Q.push(q))}else Q={lane:q,tag:w.tag,payload:w.payload,callback:w.callback,next:null},$===null?(U=$=Q,O=se):$=$.next=Q,E|=q;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;Q=w,w=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);$===null&&(O=se),d.baseState=O,d.firstBaseUpdate=U,d.lastBaseUpdate=$,_===null&&(d.shared.lanes=0),_r|=E,n.lanes=E,n.memoizedState=se}}function vv(n,a){if(typeof n!="function")throw Error(r(191,n));n.call(a)}function Ev(n,a){var l=n.callbacks;if(l!==null)for(n.callbacks=null,n=0;n<l.length;n++)vv(l[n],a)}function su(n,a){try{var l=a.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var d=c.next;l=d;do{if((l.tag&n)===n){c=void 0;var _=l.create,E=l.inst;c=_(),E.destroy=c}l=l.next}while(l!==d)}}catch(w){ct(a,a.return,w)}}function hr(n,a,l){try{var c=a.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var _=d.next;c=_;do{if((c.tag&n)===n){var E=c.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,d=a;var O=l;try{w()}catch(U){ct(d,O,U)}}}c=c.next}while(c!==_)}}catch(U){ct(a,a.return,U)}}function Tv(n){var a=n.updateQueue;if(a!==null){var l=n.stateNode;try{Ev(a,l)}catch(c){ct(n,n.return,c)}}}function Sv(n,a,l){l.props=Ea(n.type,n.memoizedProps),l.state=n.memoizedState;try{l.componentWillUnmount()}catch(c){ct(n,a,c)}}function Aa(n,a){try{var l=n.ref;if(l!==null){var c=n.stateNode;switch(n.tag){case 26:case 27:case 5:var d=c;break;default:d=c}typeof l=="function"?n.refCleanup=l(d):l.current=d}}catch(_){ct(n,a,_)}}function Hn(n,a){var l=n.ref,c=n.refCleanup;if(l!==null)if(typeof c=="function")try{c()}catch(d){ct(n,a,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(d){ct(n,a,d)}else l.current=null}function Av(n){var a=n.type,l=n.memoizedProps,c=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":l.autoFocus&&c.focus();break e;case"img":l.src?c.src=l.src:l.srcSet&&(c.srcset=l.srcSet)}}catch(d){ct(n,n.return,d)}}function wv(n,a,l){try{var c=n.stateNode;NC(c,n.type,l,a),c[Ut]=a}catch(d){ct(n,n.return,d)}}function bv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function vp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ep(n,a,l){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?l.nodeType===8?l.parentNode.insertBefore(n,a):l.insertBefore(n,a):(l.nodeType===8?(a=l.parentNode,a.insertBefore(n,l)):(a=l,a.appendChild(n)),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=Nh));else if(c!==4&&c!==27&&(n=n.child,n!==null))for(Ep(n,a,l),n=n.sibling;n!==null;)Ep(n,a,l),n=n.sibling}function mh(n,a,l){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?l.insertBefore(n,a):l.appendChild(n);else if(c!==4&&c!==27&&(n=n.child,n!==null))for(mh(n,a,l),n=n.sibling;n!==null;)mh(n,a,l),n=n.sibling}var vs=!1,At=!1,Tp=!1,Cv=typeof WeakSet=="function"?WeakSet:Set,Xt=null,Rv=!1;function rC(n,a){if(n=n.containerInfo,Yp=Vh,n=qg(n),Ad(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var d=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var E=0,w=-1,O=-1,U=0,$=0,se=n,q=null;t:for(;;){for(var Q;se!==l||d!==0&&se.nodeType!==3||(w=E+d),se!==_||c!==0&&se.nodeType!==3||(O=E+c),se.nodeType===3&&(E+=se.nodeValue.length),(Q=se.firstChild)!==null;)q=se,se=Q;for(;;){if(se===n)break t;if(q===l&&++U===d&&(w=E),q===_&&++$===c&&(O=E),(Q=se.nextSibling)!==null)break;se=q,q=se.parentNode}se=Q}l=w===-1||O===-1?null:{start:w,end:O}}else l=null}l=l||{start:0,end:0}}else l=null;for($p={focusedElem:n,selectionRange:l},Vh=!1,Xt=a;Xt!==null;)if(a=Xt,n=a.child,(a.subtreeFlags&1028)!==0&&n!==null)n.return=a,Xt=n;else for(;Xt!==null;){switch(a=Xt,_=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&_!==null){n=void 0,l=a,d=_.memoizedProps,_=_.memoizedState,c=l.stateNode;try{var we=Ea(l.type,d,l.elementType===l.type);n=c.getSnapshotBeforeUpdate(we,_),c.__reactInternalSnapshotBeforeUpdate=n}catch(Me){ct(l,l.return,Me)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,l=n.nodeType,l===9)e_(n);else if(l===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":e_(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=a.sibling,n!==null){n.return=a.return,Xt=n;break}Xt=a.return}return we=Rv,Rv=!1,we}function Iv(n,a,l){var c=l.flags;switch(l.tag){case 0:case 11:case 15:Ts(n,l),c&4&&su(5,l);break;case 1:if(Ts(n,l),c&4)if(n=l.stateNode,a===null)try{n.componentDidMount()}catch(w){ct(l,l.return,w)}else{var d=Ea(l.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(d,a,n.__reactInternalSnapshotBeforeUpdate)}catch(w){ct(l,l.return,w)}}c&64&&Tv(l),c&512&&Aa(l,l.return);break;case 3:if(Ts(n,l),c&64&&(c=l.updateQueue,c!==null)){if(n=null,l.child!==null)switch(l.child.tag){case 27:case 5:n=l.child.stateNode;break;case 1:n=l.child.stateNode}try{Ev(c,n)}catch(w){ct(l,l.return,w)}}break;case 26:Ts(n,l),c&512&&Aa(l,l.return);break;case 27:case 5:Ts(n,l),a===null&&c&4&&Av(l),c&512&&Aa(l,l.return);break;case 12:Ts(n,l);break;case 13:Ts(n,l),c&4&&Ov(n,l);break;case 22:if(d=l.memoizedState!==null||vs,!d){a=a!==null&&a.memoizedState!==null||At;var _=vs,E=At;vs=d,(At=a)&&!E?fr(n,l,(l.subtreeFlags&8772)!==0):Ts(n,l),vs=_,At=E}c&512&&(l.memoizedProps.mode==="manual"?Aa(l,l.return):Hn(l,l.return));break;default:Ts(n,l)}}function Nv(n){var a=n.alternate;a!==null&&(n.alternate=null,Nv(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&Jr(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Pt=null,Fn=!1;function Es(n,a,l){for(l=l.child;l!==null;)Dv(n,a,l),l=l.sibling}function Dv(n,a,l){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(zs,l)}catch{}switch(l.tag){case 26:At||Hn(l,a),Es(n,a,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:At||Hn(l,a);var c=Pt,d=Fn;for(Pt=l.stateNode,Es(n,a,l),l=l.stateNode,a=l.attributes;a.length;)l.removeAttributeNode(a[0]);Jr(l),Pt=c,Fn=d;break;case 5:At||Hn(l,a);case 6:d=Pt;var _=Fn;if(Pt=null,Es(n,a,l),Pt=d,Fn=_,Pt!==null)if(Fn)try{n=Pt,c=l.stateNode,n.nodeType===8?n.parentNode.removeChild(c):n.removeChild(c)}catch(E){ct(l,a,E)}else try{Pt.removeChild(l.stateNode)}catch(E){ct(l,a,E)}break;case 18:Pt!==null&&(Fn?(a=Pt,l=l.stateNode,a.nodeType===8?Jp(a.parentNode,l):a.nodeType===1&&Jp(a,l),Su(a)):Jp(Pt,l.stateNode));break;case 4:c=Pt,d=Fn,Pt=l.stateNode.containerInfo,Fn=!0,Es(n,a,l),Pt=c,Fn=d;break;case 0:case 11:case 14:case 15:At||hr(2,l,a),At||hr(4,l,a),Es(n,a,l);break;case 1:At||(Hn(l,a),c=l.stateNode,typeof c.componentWillUnmount=="function"&&Sv(l,a,c)),Es(n,a,l);break;case 21:Es(n,a,l);break;case 22:At||Hn(l,a),At=(c=At)||l.memoizedState!==null,Es(n,a,l),At=c;break;default:Es(n,a,l)}}function Ov(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Su(n)}catch(l){ct(a,a.return,l)}}function aC(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Cv),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Cv),a;default:throw Error(r(435,n.tag))}}function Sp(n,a){var l=aC(n);a.forEach(function(c){var d=vC.bind(null,n,c);l.has(c)||(l.add(c),c.then(d,d))})}function ui(n,a){var l=a.deletions;if(l!==null)for(var c=0;c<l.length;c++){var d=l[c],_=n,E=a,w=E;e:for(;w!==null;){switch(w.tag){case 27:case 5:Pt=w.stateNode,Fn=!1;break e;case 3:Pt=w.stateNode.containerInfo,Fn=!0;break e;case 4:Pt=w.stateNode.containerInfo,Fn=!0;break e}w=w.return}if(Pt===null)throw Error(r(160));Dv(_,E,d),Pt=null,Fn=!1,_=d.alternate,_!==null&&(_.return=null),d.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)xv(a,n),a=a.sibling}var Ti=null;function xv(n,a){var l=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ui(a,n),ci(n),c&4&&(hr(3,n,n.return),su(3,n),hr(5,n,n.return));break;case 1:ui(a,n),ci(n),c&512&&(At||l===null||Hn(l,l.return)),c&64&&vs&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(l=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=l===null?c:l.concat(c))));break;case 26:var d=Ti;if(ui(a,n),ci(n),c&512&&(At||l===null||Hn(l,l.return)),c&4){var _=l!==null?l.memoizedState:null;if(c=n.memoizedState,l===null)if(c===null)if(n.stateNode===null){e:{c=n.type,l=n.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":_=d.getElementsByTagName("title")[0],(!_||_[Qs]||_[Kt]||_.namespaceURI==="http://www.w3.org/2000/svg"||_.hasAttribute("itemprop"))&&(_=d.createElement(c),d.head.insertBefore(_,d.querySelector("head > title"))),on(_,c,l),_[Kt]=n,yt(_),c=_;break e;case"link":var E=AE("link","href",d).get(c+(l.href||""));if(E){for(var w=0;w<E.length;w++)if(_=E[w],_.getAttribute("href")===(l.href==null?null:l.href)&&_.getAttribute("rel")===(l.rel==null?null:l.rel)&&_.getAttribute("title")===(l.title==null?null:l.title)&&_.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){E.splice(w,1);break t}}_=d.createElement(c),on(_,c,l),d.head.appendChild(_);break;case"meta":if(E=AE("meta","content",d).get(c+(l.content||""))){for(w=0;w<E.length;w++)if(_=E[w],_.getAttribute("content")===(l.content==null?null:""+l.content)&&_.getAttribute("name")===(l.name==null?null:l.name)&&_.getAttribute("property")===(l.property==null?null:l.property)&&_.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&_.getAttribute("charset")===(l.charSet==null?null:l.charSet)){E.splice(w,1);break t}}_=d.createElement(c),on(_,c,l),d.head.appendChild(_);break;default:throw Error(r(468,c))}_[Kt]=n,yt(_),c=_}n.stateNode=c}else wE(d,n.type,n.stateNode);else n.stateNode=SE(d,c,n.memoizedProps);else _!==c?(_===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):_.count--,c===null?wE(d,n.type,n.stateNode):SE(d,c,n.memoizedProps)):c===null&&n.stateNode!==null&&wv(n,n.memoizedProps,l.memoizedProps)}break;case 27:if(c&4&&n.alternate===null){d=n.stateNode,_=n.memoizedProps;try{for(var O=d.firstChild;O;){var U=O.nextSibling,$=O.nodeName;O[Qs]||$==="HEAD"||$==="BODY"||$==="SCRIPT"||$==="STYLE"||$==="LINK"&&O.rel.toLowerCase()==="stylesheet"||d.removeChild(O),O=U}for(var se=n.type,q=d.attributes;q.length;)d.removeAttributeNode(q[0]);on(d,se,_),d[Kt]=n,d[Ut]=_}catch(we){ct(n,n.return,we)}}case 5:if(ui(a,n),ci(n),c&512&&(At||l===null||Hn(l,l.return)),n.flags&32){d=n.stateNode;try{ei(d,"")}catch(we){ct(n,n.return,we)}}c&4&&n.stateNode!=null&&(d=n.memoizedProps,wv(n,d,l!==null?l.memoizedProps:d)),c&1024&&(Tp=!0);break;case 6:if(ui(a,n),ci(n),c&4){if(n.stateNode===null)throw Error(r(162));c=n.memoizedProps,l=n.stateNode;try{l.nodeValue=c}catch(we){ct(n,n.return,we)}}break;case 3:if(kh=null,d=Ti,Ti=Oh(a.containerInfo),ui(a,n),Ti=d,ci(n),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Su(a.containerInfo)}catch(we){ct(n,n.return,we)}Tp&&(Tp=!1,kv(n));break;case 4:c=Ti,Ti=Oh(n.stateNode.containerInfo),ui(a,n),ci(n),Ti=c;break;case 12:ui(a,n),ci(n);break;case 13:ui(a,n),ci(n),n.child.flags&8192&&n.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Op=nn()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Sp(n,c)));break;case 22:if(c&512&&(At||l===null||Hn(l,l.return)),O=n.memoizedState!==null,U=l!==null&&l.memoizedState!==null,$=vs,se=At,vs=$||O,At=se||U,ui(a,n),At=se,vs=$,ci(n),a=n.stateNode,a._current=n,a._visibility&=-3,a._visibility|=a._pendingVisibility&2,c&8192&&(a._visibility=O?a._visibility&-2:a._visibility|1,O&&(a=vs||At,l===null||U||a||wo(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))e:for(l=null,a=n;;){if(a.tag===5||a.tag===26||a.tag===27){if(l===null){U=l=a;try{if(d=U.stateNode,O)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=U.stateNode,w=U.memoizedProps.style;var Q=w!=null&&w.hasOwnProperty("display")?w.display:null;E.style.display=Q==null||typeof Q=="boolean"?"":(""+Q).trim()}}catch(we){ct(U,U.return,we)}}}else if(a.tag===6){if(l===null){U=a;try{U.stateNode.nodeValue=O?"":U.memoizedProps}catch(we){ct(U,U.return,we)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;l===a&&(l=null),a=a.return}l===a&&(l=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(l=c.retryQueue,l!==null&&(c.retryQueue=null,Sp(n,l))));break;case 19:ui(a,n),ci(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Sp(n,c)));break;case 21:break;default:ui(a,n),ci(n)}}function ci(n){var a=n.flags;if(a&2){try{if(n.tag!==27){e:{for(var l=n.return;l!==null;){if(bv(l)){var c=l;break e}l=l.return}throw Error(r(160))}switch(c.tag){case 27:var d=c.stateNode,_=vp(n);mh(n,_,d);break;case 5:var E=c.stateNode;c.flags&32&&(ei(E,""),c.flags&=-33);var w=vp(n);mh(n,w,E);break;case 3:case 4:var O=c.stateNode.containerInfo,U=vp(n);Ep(n,U,O);break;default:throw Error(r(161))}}}catch($){ct(n,n.return,$)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function kv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;kv(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Ts(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Iv(n,a.alternate,a),a=a.sibling}function wo(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:hr(4,a,a.return),wo(a);break;case 1:Hn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Sv(a,a.return,l),wo(a);break;case 26:case 27:case 5:Hn(a,a.return),wo(a);break;case 22:Hn(a,a.return),a.memoizedState===null&&wo(a);break;default:wo(a)}n=n.sibling}}function fr(n,a,l){for(l=l&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,d=n,_=a,E=_.flags;switch(_.tag){case 0:case 11:case 15:fr(d,_,l),su(4,_);break;case 1:if(fr(d,_,l),c=_,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(U){ct(c,c.return,U)}if(c=_,d=c.updateQueue,d!==null){var w=c.stateNode;try{var O=d.shared.hiddenCallbacks;if(O!==null)for(d.shared.hiddenCallbacks=null,d=0;d<O.length;d++)vv(O[d],w)}catch(U){ct(c,c.return,U)}}l&&E&64&&Tv(_),Aa(_,_.return);break;case 26:case 27:case 5:fr(d,_,l),l&&c===null&&E&4&&Av(_),Aa(_,_.return);break;case 12:fr(d,_,l);break;case 13:fr(d,_,l),l&&E&4&&Ov(d,_);break;case 22:_.memoizedState===null&&fr(d,_,l),Aa(_,_.return);break;default:fr(d,_,l)}a=a.sibling}}function Ap(n,a){var l=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==l&&(n!=null&&n.refCount++,l!=null&&Ql(l))}function wp(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Ql(n))}function dr(n,a,l,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Mv(n,a,l,c),a=a.sibling}function Mv(n,a,l,c){var d=a.flags;switch(a.tag){case 0:case 11:case 15:dr(n,a,l,c),d&2048&&su(9,a);break;case 3:dr(n,a,l,c),d&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Ql(n)));break;case 12:if(d&2048){dr(n,a,l,c),n=a.stateNode;try{var _=a.memoizedProps,E=_.id,w=_.onPostCommit;typeof w=="function"&&w(E,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(O){ct(a,a.return,O)}}else dr(n,a,l,c);break;case 23:break;case 22:_=a.stateNode,a.memoizedState!==null?_._visibility&4?dr(n,a,l,c):ru(n,a):_._visibility&4?dr(n,a,l,c):(_._visibility|=4,bo(n,a,l,c,(a.subtreeFlags&10256)!==0)),d&2048&&Ap(a.alternate,a);break;case 24:dr(n,a,l,c),d&2048&&wp(a.alternate,a);break;default:dr(n,a,l,c)}}function bo(n,a,l,c,d){for(d=d&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var _=n,E=a,w=l,O=c,U=E.flags;switch(E.tag){case 0:case 11:case 15:bo(_,E,w,O,d),su(8,E);break;case 23:break;case 22:var $=E.stateNode;E.memoizedState!==null?$._visibility&4?bo(_,E,w,O,d):ru(_,E):($._visibility|=4,bo(_,E,w,O,d)),d&&U&2048&&Ap(E.alternate,E);break;case 24:bo(_,E,w,O,d),d&&U&2048&&wp(E.alternate,E);break;default:bo(_,E,w,O,d)}a=a.sibling}}function ru(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var l=n,c=a,d=c.flags;switch(c.tag){case 22:ru(l,c),d&2048&&Ap(c.alternate,c);break;case 24:ru(l,c),d&2048&&wp(c.alternate,c);break;default:ru(l,c)}a=a.sibling}}var au=8192;function Co(n){if(n.subtreeFlags&au)for(n=n.child;n!==null;)Pv(n),n=n.sibling}function Pv(n){switch(n.tag){case 26:Co(n),n.flags&au&&n.memoizedState!==null&&QC(Ti,n.memoizedState,n.memoizedProps);break;case 5:Co(n);break;case 3:case 4:var a=Ti;Ti=Oh(n.stateNode.containerInfo),Co(n),Ti=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=au,au=16777216,Co(n),au=a):Co(n));break;default:Co(n)}}function Vv(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function ou(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var c=a[l];Xt=c,Uv(c,n)}Vv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Lv(n),n=n.sibling}function Lv(n){switch(n.tag){case 0:case 11:case 15:ou(n),n.flags&2048&&hr(9,n,n.return);break;case 3:ou(n);break;case 12:ou(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&4&&(n.return===null||n.return.tag!==13)?(a._visibility&=-5,gh(n)):ou(n);break;default:ou(n)}}function gh(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var c=a[l];Xt=c,Uv(c,n)}Vv(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:hr(8,a,a.return),gh(a);break;case 22:l=a.stateNode,l._visibility&4&&(l._visibility&=-5,gh(a));break;default:gh(a)}n=n.sibling}}function Uv(n,a){for(;Xt!==null;){var l=Xt;switch(l.tag){case 0:case 11:case 15:hr(8,l,a);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var c=l.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Ql(l.memoizedState.cache)}if(c=l.child,c!==null)c.return=l,Xt=c;else e:for(l=n;Xt!==null;){c=Xt;var d=c.sibling,_=c.return;if(Nv(c),c===l){Xt=null;break e}if(d!==null){d.return=_,Xt=d;break e}Xt=_}}}function oC(n,a,l,c){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(n,a,l,c){return new oC(n,a,l,c)}function bp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function pr(n,a){var l=n.alternate;return l===null?(l=hi(n.tag,a,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=a,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&31457280,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,a=n.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l.refCleanup=n.refCleanup,l}function jv(n,a){n.flags&=31457282;var l=n.alternate;return l===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=l.childLanes,n.lanes=l.lanes,n.child=l.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=l.memoizedProps,n.memoizedState=l.memoizedState,n.updateQueue=l.updateQueue,n.type=l.type,a=l.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function yh(n,a,l,c,d,_){var E=0;if(c=n,typeof n=="function")bp(n)&&(E=1);else if(typeof n=="string")E=WC(n,l,Lt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case m:return wa(l.children,d,_,a);case g:E=8,d|=24;break;case T:return n=hi(12,l,a,d|2),n.elementType=T,n.lanes=_,n;case J:return n=hi(13,l,a,d),n.elementType=J,n.lanes=_,n;case G:return n=hi(19,l,a,d),n.elementType=G,n.lanes=_,n;case X:return Bv(l,d,_,a);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case S:case V:E=10;break e;case I:E=9;break e;case F:E=11;break e;case Y:E=14;break e;case ne:E=16,c=null;break e}E=29,l=Error(r(130,n===null?"null":typeof n,"")),c=null}return a=hi(E,l,a,d),a.elementType=n,a.type=c,a.lanes=_,a}function wa(n,a,l,c){return n=hi(7,n,c,a),n.lanes=l,n}function Bv(n,a,l,c){n=hi(22,n,c,a),n.elementType=X,n.lanes=l;var d={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var _=d._current;if(_===null)throw Error(r(456));if((d._pendingVisibility&2)===0){var E=nr(_,2);E!==null&&(d._pendingVisibility|=2,On(E,_,2))}},attach:function(){var _=d._current;if(_===null)throw Error(r(456));if((d._pendingVisibility&2)!==0){var E=nr(_,2);E!==null&&(d._pendingVisibility&=-3,On(E,_,2))}}};return n.stateNode=d,n}function Cp(n,a,l){return n=hi(6,n,null,a),n.lanes=l,n}function Rp(n,a,l){return a=hi(4,n.children!==null?n.children:[],n.key,a),a.lanes=l,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}function Ss(n){n.flags|=4}function zv(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!bE(a)){if(a=li.current,a!==null&&((Ye&4194176)===Ye?zi!==null:(Ye&62914560)!==Ye&&(Ye&536870912)===0||a!==zi))throw Gl=xd,sy;n.flags|=8192}}function vh(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?qs():536870912,n.lanes|=a,Io|=a)}function lu(n,a){if(!et)switch(n.tailMode){case"hidden":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function vt(n){var a=n.alternate!==null&&n.alternate.child===n.child,l=0,c=0;if(a)for(var d=n.child;d!==null;)l|=d.lanes|d.childLanes,c|=d.subtreeFlags&31457280,c|=d.flags&31457280,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)l|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=l,a}function lC(n,a,l){var c=a.pendingProps;switch(Dd(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(a),null;case 1:return vt(a),null;case 3:return l=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),ys(Ht),xn(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(n===null||n.child===null)&&(zl(a)?Ss(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Ei!==null&&(Pp(Ei),Ei=null))),vt(a),null;case 26:return l=a.memoizedState,n===null?(Ss(a),l!==null?(vt(a),zv(a,l)):(vt(a),a.flags&=-16777217)):l?l!==n.memoizedState?(Ss(a),vt(a),zv(a,l)):(vt(a),a.flags&=-16777217):(n.memoizedProps!==c&&Ss(a),vt(a),a.flags&=-16777217),null;case 27:K(a),l=Wt.current;var d=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Ss(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return vt(a),null}n=Lt.current,zl(a)?ny(a):(n=gE(d,c,l),a.stateNode=n,Ss(a))}return vt(a),null;case 5:if(K(a),l=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Ss(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return vt(a),null}if(n=Lt.current,zl(a))ny(a);else{switch(d=Dh(Wt.current),n){case 1:n=d.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:n=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":n=d.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":n=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":n=d.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?d.createElement(l,{is:c.is}):d.createElement(l)}}n[Kt]=a,n[Ut]=c;e:for(d=a.child;d!==null;){if(d.tag===5||d.tag===6)n.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break e;for(;d.sibling===null;){if(d.return===null||d.return===a)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}a.stateNode=n;e:switch(on(n,l,c),l){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Ss(a)}}return vt(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&Ss(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(r(166));if(n=Wt.current,zl(a)){if(n=a.stateNode,l=a.memoizedProps,c=null,d=Dn,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}n[Kt]=a,n=!!(n.nodeValue===l||c!==null&&c.suppressHydrationWarning===!0||hE(n.nodeValue,l)),n||pa(a)}else n=Dh(n).createTextNode(c),n[Kt]=a,a.stateNode=n}return vt(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=zl(a),c!==null&&c.dehydrated!==null){if(n===null){if(!d)throw Error(r(318));if(d=a.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(r(317));d[Kt]=a}else Hl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;vt(a),d=!1}else Ei!==null&&(Pp(Ei),Ei=null),d=!0;if(!d)return a.flags&256?(ps(a),a):(ps(a),null)}if(ps(a),(a.flags&128)!==0)return a.lanes=l,a;if(l=c!==null,n=n!==null&&n.memoizedState!==null,l){c=a.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var _=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(_=c.memoizedState.cachePool.pool),_!==d&&(c.flags|=2048)}return l!==n&&l&&(a.child.flags|=8192),vh(a,a.updateQueue),vt(a),null;case 4:return xn(),n===null&&Wp(a.stateNode.containerInfo),vt(a),null;case 10:return ys(a.type),vt(a),null;case 19:if(_e(zt),d=a.memoizedState,d===null)return vt(a),null;if(c=(a.flags&128)!==0,_=d.rendering,_===null)if(c)lu(d,!1);else{if(wt!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(_=nh(n),_!==null){for(a.flags|=128,lu(d,!1),n=_.updateQueue,a.updateQueue=n,vh(a,n),a.subtreeFlags=0,n=l,l=a.child;l!==null;)jv(l,n),l=l.sibling;return Ce(zt,zt.current&1|2),a.child}n=n.sibling}d.tail!==null&&nn()>Eh&&(a.flags|=128,c=!0,lu(d,!1),a.lanes=4194304)}else{if(!c)if(n=nh(_),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,vh(a,n),lu(d,!0),d.tail===null&&d.tailMode==="hidden"&&!_.alternate&&!et)return vt(a),null}else 2*nn()-d.renderingStartTime>Eh&&l!==536870912&&(a.flags|=128,c=!0,lu(d,!1),a.lanes=4194304);d.isBackwards?(_.sibling=a.child,a.child=_):(n=d.last,n!==null?n.sibling=_:a.child=_,d.last=_)}return d.tail!==null?(a=d.tail,d.rendering=a,d.tail=a.sibling,d.renderingStartTime=nn(),a.sibling=null,n=zt.current,Ce(zt,c?n&1|2:n&1),a):(vt(a),null);case 22:case 23:return ps(a),Md(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(l&536870912)!==0&&(a.flags&128)===0&&(vt(a),a.subtreeFlags&6&&(a.flags|=8192)):vt(a),l=a.updateQueue,l!==null&&vh(a,l.retryQueue),l=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==l&&(a.flags|=2048),n!==null&&_e(ma),null;case 24:return l=null,n!==null&&(l=n.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),ys(Ht),vt(a),null;case 25:return null}throw Error(r(156,a.tag))}function uC(n,a){switch(Dd(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return ys(Ht),xn(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return K(a),null;case 13:if(ps(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(r(340));Hl()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return _e(zt),null;case 4:return xn(),null;case 10:return ys(a.type),null;case 22:case 23:return ps(a),Md(),n!==null&&_e(ma),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return ys(Ht),null;case 25:return null;default:return null}}function Hv(n,a){switch(Dd(a),a.tag){case 3:ys(Ht),xn();break;case 26:case 27:case 5:K(a);break;case 4:xn();break;case 13:ps(a);break;case 19:_e(zt);break;case 10:ys(a.type);break;case 22:case 23:ps(a),Md(),n!==null&&_e(ma);break;case 24:ys(Ht)}}var cC={getCacheForType:function(n){var a=_n(Ht),l=a.data.get(n);return l===void 0&&(l=n(),a.data.set(n,l)),l}},hC=typeof WeakMap=="function"?WeakMap:Map,Et=0,ft=null,Be=null,Ye=0,dt=0,qn=null,As=!1,Ro=!1,Ip=!1,ws=0,wt=0,_r=0,ba=0,Np=0,fi=0,Io=0,uu=null,Fi=null,Dp=!1,Op=0,Eh=1/0,Th=null,mr=null,Sh=!1,Ca=null,cu=0,xp=0,kp=null,hu=0,Mp=null;function Gn(){if((Et&2)!==0&&Ye!==0)return Ye&-Ye;if(C.T!==null){var n=vo;return n!==0?n:Hp()}return Ic()}function Fv(){fi===0&&(fi=(Ye&536870912)===0||et?Al():536870912);var n=li.current;return n!==null&&(n.flags|=32),fi}function On(n,a,l){(n===ft&&dt===2||n.cancelPendingCommit!==null)&&(No(n,0),bs(n,Ye,fi,!1)),It(n,l),((Et&2)===0||n!==ft)&&(n===ft&&((Et&2)===0&&(ba|=l),wt===4&&bs(n,Ye,fi,!1)),qi(n))}function qv(n,a,l){if((Et&6)!==0)throw Error(r(327));var c=!l&&(a&60)===0&&(a&n.expiredLanes)===0||Fs(n,a),d=c?pC(n,a):Up(n,a,!0),_=c;do{if(d===0){Ro&&!c&&bs(n,a,0,!1);break}else if(d===6)bs(n,a,0,!As);else{if(l=n.current.alternate,_&&!fC(l)){d=Up(n,a,!1),_=!1;continue}if(d===2){if(_=a,n.errorRecoveryDisabledLanes&_)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){a=E;e:{var w=n;d=uu;var O=w.current.memoizedState.isDehydrated;if(O&&(No(w,E).flags|=256),E=Up(w,E,!1),E!==2){if(Ip&&!O){w.errorRecoveryDisabledLanes|=_,ba|=_,d=4;break e}_=Fi,Fi=d,_!==null&&Pp(_)}d=E}if(_=!1,d!==2)continue}}if(d===1){No(n,0),bs(n,a,0,!0);break}e:{switch(c=n,d){case 0:case 1:throw Error(r(345));case 4:if((a&4194176)===a){bs(c,a,fi,!As);break e}break;case 2:Fi=null;break;case 3:case 5:break;default:throw Error(r(329))}if(c.finishedWork=l,c.finishedLanes=a,(a&62914560)===a&&(_=Op+300-nn(),10<_)){if(bs(c,a,fi,!As),Zn(c,0)!==0)break e;c.timeoutHandle=pE(Gv.bind(null,c,l,Fi,Th,Dp,a,fi,ba,Io,As,2,-0,0),_);break e}Gv(c,l,Fi,Th,Dp,a,fi,ba,Io,As,0,-0,0)}}break}while(!0);qi(n)}function Pp(n){Fi===null?Fi=n:Fi.push.apply(Fi,n)}function Gv(n,a,l,c,d,_,E,w,O,U,$,se,q){var Q=a.subtreeFlags;if((Q&8192||(Q&16785408)===16785408)&&(gu={stylesheets:null,count:0,unsuspend:KC},Pv(a),a=YC(),a!==null)){n.cancelPendingCommit=a(Zv.bind(null,n,l,c,d,E,w,O,1,se,q)),bs(n,_,E,!U);return}Zv(n,l,c,d,E,w,O,$,se,q)}function fC(n){for(var a=n;;){var l=a.tag;if((l===0||l===11||l===15)&&a.flags&16384&&(l=a.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var c=0;c<l.length;c++){var d=l[c],_=d.getSnapshot;d=d.value;try{if(!zn(_(),d))return!1}catch{return!1}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function bs(n,a,l,c){a&=~Np,a&=~ba,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var d=a;0<d;){var _=31-Rn(d),E=1<<_;c[_]=-1,d&=~E}l!==0&&Gs(n,l,a)}function Ah(){return(Et&6)===0?(fu(0),!1):!0}function Vp(){if(Be!==null){if(dt===0)var n=Be.return;else n=Be,gs=Ta=null,Hd(n),go=null,Wl=0,n=Be;for(;n!==null;)Hv(n.alternate,n),n=n.return;Be=null}}function No(n,a){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;l!==-1&&(n.timeoutHandle=-1,OC(l)),l=n.cancelPendingCommit,l!==null&&(n.cancelPendingCommit=null,l()),Vp(),ft=n,Be=l=pr(n.current,null),Ye=a,dt=0,qn=null,As=!1,Ro=Fs(n,a),Ip=!1,Io=fi=Np=ba=_r=wt=0,Fi=uu=null,Dp=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var d=31-Rn(c),_=1<<d;a|=n[d],c&=~_}return ws=a,Kc(),l}function Wv(n,a){Le=null,C.H=Hi,a===ql?(a=oy(),dt=3):a===sy?(a=oy(),dt=4):dt=a===rv?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,qn=a,Be===null&&(wt=1,dh(n,ri(a,n.current)))}function Kv(){var n=C.H;return C.H=Hi,n===null?Hi:n}function Qv(){var n=C.A;return C.A=cC,n}function Lp(){wt=4,As||(Ye&4194176)!==Ye&&li.current!==null||(Ro=!0),(_r&134217727)===0&&(ba&134217727)===0||ft===null||bs(ft,Ye,fi,!1)}function Up(n,a,l){var c=Et;Et|=2;var d=Kv(),_=Qv();(ft!==n||Ye!==a)&&(Th=null,No(n,a)),a=!1;var E=wt;e:do try{if(dt!==0&&Be!==null){var w=Be,O=qn;switch(dt){case 8:Vp(),E=6;break e;case 3:case 2:case 6:li.current===null&&(a=!0);var U=dt;if(dt=0,qn=null,Do(n,w,O,U),l&&Ro){E=0;break e}break;default:U=dt,dt=0,qn=null,Do(n,w,O,U)}}dC(),E=wt;break}catch($){Wv(n,$)}while(!0);return a&&n.shellSuspendCounter++,gs=Ta=null,Et=c,C.H=d,C.A=_,Be===null&&(ft=null,Ye=0,Kc()),E}function dC(){for(;Be!==null;)Yv(Be)}function pC(n,a){var l=Et;Et|=2;var c=Kv(),d=Qv();ft!==n||Ye!==a?(Th=null,Eh=nn()+500,No(n,a)):Ro=Fs(n,a);e:do try{if(dt!==0&&Be!==null){a=Be;var _=qn;t:switch(dt){case 1:dt=0,qn=null,Do(n,a,_,1);break;case 2:if(ry(_)){dt=0,qn=null,$v(a);break}a=function(){dt===2&&ft===n&&(dt=7),qi(n)},_.then(a,a);break e;case 3:dt=7;break e;case 4:dt=5;break e;case 7:ry(_)?(dt=0,qn=null,$v(a)):(dt=0,qn=null,Do(n,a,_,7));break;case 5:var E=null;switch(Be.tag){case 26:E=Be.memoizedState;case 5:case 27:var w=Be;if(!E||bE(E)){dt=0,qn=null;var O=w.sibling;if(O!==null)Be=O;else{var U=w.return;U!==null?(Be=U,wh(U)):Be=null}break t}}dt=0,qn=null,Do(n,a,_,5);break;case 6:dt=0,qn=null,Do(n,a,_,6);break;case 8:Vp(),wt=6;break e;default:throw Error(r(462))}}_C();break}catch($){Wv(n,$)}while(!0);return gs=Ta=null,C.H=c,C.A=d,Et=l,Be!==null?0:(ft=null,Ye=0,Kc(),wt)}function _C(){for(;Be!==null&&!ts();)Yv(Be)}function Yv(n){var a=gv(n.alternate,n,ws);n.memoizedProps=n.pendingProps,a===null?wh(n):Be=a}function $v(n){var a=n,l=a.alternate;switch(a.tag){case 15:case 0:a=hv(l,a,a.pendingProps,a.type,void 0,Ye);break;case 11:a=hv(l,a,a.pendingProps,a.type.render,a.ref,Ye);break;case 5:Hd(a);default:Hv(l,a),a=Be=jv(a,ws),a=gv(l,a,ws)}n.memoizedProps=n.pendingProps,a===null?wh(n):Be=a}function Do(n,a,l,c){gs=Ta=null,Hd(a),go=null,Wl=0;var d=a.return;try{if(iC(n,d,a,l,Ye)){wt=1,dh(n,ri(l,n.current)),Be=null;return}}catch(_){if(d!==null)throw Be=d,_;wt=1,dh(n,ri(l,n.current)),Be=null;return}a.flags&32768?(et||c===1?n=!0:Ro||(Ye&536870912)!==0?n=!1:(As=n=!0,(c===2||c===3||c===6)&&(c=li.current,c!==null&&c.tag===13&&(c.flags|=16384))),Xv(a,n)):wh(a)}function wh(n){var a=n;do{if((a.flags&32768)!==0){Xv(a,As);return}n=a.return;var l=lC(a.alternate,a,ws);if(l!==null){Be=l;return}if(a=a.sibling,a!==null){Be=a;return}Be=a=n}while(a!==null);wt===0&&(wt=5)}function Xv(n,a){do{var l=uC(n.alternate,n);if(l!==null){l.flags&=32767,Be=l;return}if(l=n.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!a&&(n=n.sibling,n!==null)){Be=n;return}Be=n=l}while(n!==null);wt=6,Be=null}function Zv(n,a,l,c,d,_,E,w,O,U){var $=C.T,se=pe.p;try{pe.p=2,C.T=null,mC(n,a,l,c,se,d,_,E,w,O,U)}finally{C.T=$,pe.p=se}}function mC(n,a,l,c,d,_,E,w){do Oo();while(Ca!==null);if((Et&6)!==0)throw Error(r(327));var O=n.finishedWork;if(c=n.finishedLanes,O===null)return null;if(n.finishedWork=null,n.finishedLanes=0,O===n.current)throw Error(r(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var U=O.lanes|O.childLanes;if(U|=Rd,Cc(n,c,U,_,E,w),n===ft&&(Be=ft=null,Ye=0),(O.subtreeFlags&10256)===0&&(O.flags&10256)===0||Sh||(Sh=!0,xp=U,kp=l,EC(ns,function(){return Oo(),null})),l=(O.flags&15990)!==0,(O.subtreeFlags&15990)!==0||l?(l=C.T,C.T=null,_=pe.p,pe.p=2,E=Et,Et|=4,rC(n,O),xv(O,n),Bb($p,n.containerInfo),Vh=!!Yp,$p=Yp=null,n.current=O,Iv(n,O.alternate,O),Xn(),Et=E,pe.p=_,C.T=l):n.current=O,Sh?(Sh=!1,Ca=n,cu=c):Jv(n,U),U=n.pendingLanes,U===0&&(mr=null),Tl(O.stateNode),qi(n),a!==null)for(d=n.onRecoverableError,O=0;O<a.length;O++)U=a[O],d(U.value,{componentStack:U.stack});return(cu&3)!==0&&Oo(),U=n.pendingLanes,(c&4194218)!==0&&(U&42)!==0?n===Mp?hu++:(hu=0,Mp=n):hu=0,fu(0),null}function Jv(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,Ql(a)))}function Oo(){if(Ca!==null){var n=Ca,a=xp;xp=0;var l=Rc(cu),c=C.T,d=pe.p;try{if(pe.p=32>l?32:l,C.T=null,Ca===null)var _=!1;else{l=kp,kp=null;var E=Ca,w=cu;if(Ca=null,cu=0,(Et&6)!==0)throw Error(r(331));var O=Et;if(Et|=4,Lv(E.current),Mv(E,E.current,w,l),Et=O,fu(0,!1),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(zs,E)}catch{}_=!0}return _}finally{pe.p=d,C.T=c,Jv(n,a)}}return!1}function eE(n,a,l){a=ri(l,a),a=np(n.stateNode,a,2),n=cr(n,a,2),n!==null&&(It(n,2),qi(n))}function ct(n,a,l){if(n.tag===3)eE(n,n,l);else for(;a!==null;){if(a.tag===3){eE(a,n,l);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(mr===null||!mr.has(c))){n=ri(l,n),l=iv(2),c=cr(a,l,2),c!==null&&(sv(l,c,a,n),It(c,2),qi(c));break}}a=a.return}}function jp(n,a,l){var c=n.pingCache;if(c===null){c=n.pingCache=new hC;var d=new Set;c.set(a,d)}else d=c.get(a),d===void 0&&(d=new Set,c.set(a,d));d.has(l)||(Ip=!0,d.add(l),n=gC.bind(null,n,a,l),a.then(n,n))}function gC(n,a,l){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&l,n.warmLanes&=~l,ft===n&&(Ye&l)===l&&(wt===4||wt===3&&(Ye&62914560)===Ye&&300>nn()-Op?(Et&2)===0&&No(n,0):Np|=l,Io===Ye&&(Io=0)),qi(n)}function tE(n,a){a===0&&(a=qs()),n=nr(n,a),n!==null&&(It(n,a),qi(n))}function yC(n){var a=n.memoizedState,l=0;a!==null&&(l=a.retryLane),tE(n,l)}function vC(n,a){var l=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(l=d.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(a),tE(n,l)}function EC(n,a){return Rt(n,a)}var bh=null,xo=null,Bp=!1,Ch=!1,zp=!1,Ra=0;function qi(n){n!==xo&&n.next===null&&(xo===null?bh=xo=n:xo=xo.next=n),Ch=!0,Bp||(Bp=!0,SC(TC))}function fu(n,a){if(!zp&&Ch){zp=!0;do for(var l=!1,c=bh;c!==null;){if(n!==0){var d=c.pendingLanes;if(d===0)var _=0;else{var E=c.suspendedLanes,w=c.pingedLanes;_=(1<<31-Rn(42|n)+1)-1,_&=d&~(E&~w),_=_&201326677?_&201326677|1:_?_|2:0}_!==0&&(l=!0,sE(c,_))}else _=Ye,_=Zn(c,c===ft?_:0),(_&3)===0||Fs(c,_)||(l=!0,sE(c,_));c=c.next}while(l);zp=!1}}function TC(){Ch=Bp=!1;var n=0;Ra!==0&&(DC()&&(n=Ra),Ra=0);for(var a=nn(),l=null,c=bh;c!==null;){var d=c.next,_=nE(c,a);_===0?(c.next=null,l===null?bh=d:l.next=d,d===null&&(xo=l)):(l=c,(n!==0||(_&3)!==0)&&(Ch=!0)),c=d}fu(n)}function nE(n,a){for(var l=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,_=n.pendingLanes&-62914561;0<_;){var E=31-Rn(_),w=1<<E,O=d[E];O===-1?((w&l)===0||(w&c)!==0)&&(d[E]=Ya(w,a)):O<=a&&(n.expiredLanes|=w),_&=~w}if(a=ft,l=Ye,l=Zn(n,n===a?l:0),c=n.callbackNode,l===0||n===a&&dt===2||n.cancelPendingCommit!==null)return c!==null&&c!==null&&Ot(c),n.callbackNode=null,n.callbackPriority=0;if((l&3)===0||Fs(n,l)){if(a=l&-l,a===n.callbackPriority)return a;switch(c!==null&&Ot(c),Rc(l)){case 2:case 8:l=xt;break;case 32:l=ns;break;case 268435456:l=El;break;default:l=ns}return c=iE.bind(null,n),l=Rt(l,c),n.callbackPriority=a,n.callbackNode=l,a}return c!==null&&c!==null&&Ot(c),n.callbackPriority=2,n.callbackNode=null,2}function iE(n,a){var l=n.callbackNode;if(Oo()&&n.callbackNode!==l)return null;var c=Ye;return c=Zn(n,n===ft?c:0),c===0?null:(qv(n,c,a),nE(n,nn()),n.callbackNode!=null&&n.callbackNode===l?iE.bind(null,n):null)}function sE(n,a){if(Oo())return null;qv(n,a,!0)}function SC(n){xC(function(){(Et&6)!==0?Rt(gt,n):n()})}function Hp(){return Ra===0&&(Ra=Al()),Ra}function rE(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:ki(""+n)}function aE(n,a){var l=a.ownerDocument.createElement("input");return l.name=a.name,l.value=a.value,n.id&&l.setAttribute("form",n.id),a.parentNode.insertBefore(l,a),n=new FormData(n),l.parentNode.removeChild(l),n}function AC(n,a,l,c,d){if(a==="submit"&&l&&l.stateNode===d){var _=rE((d[Ut]||null).action),E=c.submitter;E&&(a=(a=E[Ut]||null)?rE(a.formAction):E.getAttribute("formAction"),a!==null&&(_=a,E=null));var w=new no("action","action",null,c,d);n.push({event:w,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ra!==0){var O=E?aE(d,E):new FormData(d);Xd(l,{pending:!0,data:O,method:d.method,action:_},null,O)}}else typeof _=="function"&&(w.preventDefault(),O=E?aE(d,E):new FormData(d),Xd(l,{pending:!0,data:O,method:d.method,action:_},_,O))},currentTarget:d}]})}}for(var Fp=0;Fp<Zg.length;Fp++){var qp=Zg[Fp],wC=qp.toLowerCase(),bC=qp[0].toUpperCase()+qp.slice(1);vi(wC,"on"+bC)}vi(Kg,"onAnimationEnd"),vi(Qg,"onAnimationIteration"),vi(Yg,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(Hb,"onTransitionRun"),vi(Fb,"onTransitionStart"),vi(qb,"onTransitionCancel"),vi($g,"onTransitionEnd"),kn("onMouseEnter",["mouseout","mouseover"]),kn("onMouseLeave",["mouseout","mouseover"]),kn("onPointerEnter",["pointerout","pointerover"]),kn("onPointerLeave",["pointerout","pointerover"]),jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(du));function oE(n,a){a=(a&4)!==0;for(var l=0;l<n.length;l++){var c=n[l],d=c.event;c=c.listeners;e:{var _=void 0;if(a)for(var E=c.length-1;0<=E;E--){var w=c[E],O=w.instance,U=w.currentTarget;if(w=w.listener,O!==_&&d.isPropagationStopped())break e;_=w,d.currentTarget=U;try{_(d)}catch($){fh($)}d.currentTarget=null,_=O}else for(E=0;E<c.length;E++){if(w=c[E],O=w.instance,U=w.currentTarget,w=w.listener,O!==_&&d.isPropagationStopped())break e;_=w,d.currentTarget=U;try{_(d)}catch($){fh($)}d.currentTarget=null,_=O}}}}function qe(n,a){var l=a[Zr];l===void 0&&(l=a[Zr]=new Set);var c=n+"__bubble";l.has(c)||(lE(a,n,2,!1),l.add(c))}function Gp(n,a,l){var c=0;a&&(c|=4),lE(l,n,c,a)}var Rh="_reactListening"+Math.random().toString(36).slice(2);function Wp(n){if(!n[Rh]){n[Rh]=!0,bl.forEach(function(l){l!=="selectionchange"&&(CC.has(l)||Gp(l,!1,n),Gp(l,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Rh]||(a[Rh]=!0,Gp("selectionchange",!1,a))}}function lE(n,a,l,c){switch(OE(a)){case 2:var d=ZC;break;case 8:d=JC;break;default:d=r_}l=d.bind(null,a,l,n),d=void 0,!ni||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(a,l,{capture:!0,passive:d}):n.addEventListener(a,l,!0):d!==void 0?n.addEventListener(a,l,{passive:d}):n.addEventListener(a,l,!1)}function Kp(n,a,l,c,d){var _=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var w=c.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===d||O.nodeType===8&&O.parentNode===d))return;E=E.return}for(;w!==null;){if(E=yi(w),E===null)return;if(O=E.tag,O===5||O===6||O===26||O===27){c=_=E;continue e}w=w.parentNode}}c=c.return}xc(function(){var U=_,$=to(l),se=[];e:{var q=Xg.get(n);if(q!==void 0){var Q=no,we=n;switch(n){case"keypress":if(Pi(l)===0)break e;case"keydown":case"keyup":Q=lo;break;case"focusin":we="focus",Q=ro;break;case"focusout":we="blur",Q=ro;break;case"beforeblur":case"afterblur":Q=ro;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=ii;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=Bc;break;case Kg:case Qg:case Yg:Q=ao;break;case $g:Q=Hc;break;case"scroll":case"scrollend":Q=kc;break;case"wheel":Q=uo;break;case"copy":case"cut":case"paste":Q=oo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Ll;break;case"toggle":case"beforetoggle":Q=qc}var Me=(a&4)!==0,bt=!Me&&(n==="scroll"||n==="scrollend"),j=Me?q!==null?q+"Capture":null:q;Me=[];for(var L=U,H;L!==null;){var ee=L;if(H=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||H===null||j===null||(ee=ia(L,j),ee!=null&&Me.push(pu(L,ee,H))),bt)break;L=L.return}0<Me.length&&(q=new Q(q,we,null,l,$),se.push({event:q,listeners:Me}))}}if((a&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",Q=n==="mouseout"||n==="pointerout",q&&l!==ti&&(we=l.relatedTarget||l.fromElement)&&(yi(we)||we[is]))break e;if((Q||q)&&(q=$.window===$?$:(q=$.ownerDocument)?q.defaultView||q.parentWindow:window,Q?(we=l.relatedTarget||l.toElement,Q=U,we=we?yi(we):null,we!==null&&(bt=ue(we),Me=we.tag,we!==bt||Me!==5&&Me!==27&&Me!==6)&&(we=null)):(Q=null,we=U),Q!==we)){if(Me=ii,ee="onMouseLeave",j="onMouseEnter",L="mouse",(n==="pointerout"||n==="pointerover")&&(Me=Ll,ee="onPointerLeave",j="onPointerEnter",L="pointer"),bt=Q==null?q:Ys(Q),H=we==null?q:Ys(we),q=new Me(ee,L+"leave",Q,l,$),q.target=bt,q.relatedTarget=H,ee=null,yi($)===U&&(Me=new Me(j,L+"enter",we,l,$),Me.target=H,Me.relatedTarget=bt,ee=Me),bt=ee,Q&&we)t:{for(Me=Q,j=we,L=0,H=Me;H;H=ko(H))L++;for(H=0,ee=j;ee;ee=ko(ee))H++;for(;0<L-H;)Me=ko(Me),L--;for(;0<H-L;)j=ko(j),H--;for(;L--;){if(Me===j||j!==null&&Me===j.alternate)break t;Me=ko(Me),j=ko(j)}Me=null}else Me=null;Q!==null&&uE(se,q,Q,Me,!1),we!==null&&bt!==null&&uE(se,bt,we,Me,!0)}}e:{if(q=U?Ys(U):window,Q=q.nodeName&&q.nodeName.toLowerCase(),Q==="select"||Q==="input"&&q.type==="file")var Te=Vg;else if(Bt(q))if(Lg)Te=Ub;else{Te=Vb;var Ue=Pb}else Q=q.nodeName,!Q||Q.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?U&&Dl(U.elementType)&&(Te=Vg):Te=Lb;if(Te&&(Te=Te(n,U))){hs(se,Te,l,$);break e}Ue&&Ue(n,q,U),n==="focusout"&&U&&q.type==="number"&&U.memoizedProps.value!=null&&eo(q,"number",q.value)}switch(Ue=U?Ys(U):window,n){case"focusin":(Bt(Ue)||Ue.contentEditable==="true")&&(co=Ue,wd=U,Bl=null);break;case"focusout":Bl=wd=co=null;break;case"mousedown":bd=!0;break;case"contextmenu":case"mouseup":case"dragend":bd=!1,Gg(se,l,$);break;case"selectionchange":if(zb)break;case"keydown":case"keyup":Gg(se,l,$)}var be;if(Ui)e:{switch(n){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else Ke?W(n,l)&&(Ne="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(Ne="onCompositionStart");Ne&&(v&&l.locale!=="ko"&&(Ke||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&Ke&&(be=xl()):(Mi=$,tr="value"in Mi?Mi.value:Mi.textContent,Ke=!0)),Ue=Ih(U,Ne),0<Ue.length&&(Ne=new Pl(Ne,n,null,l,$),se.push({event:Ne,listeners:Ue}),be?Ne.data=be:(be=he(l),be!==null&&(Ne.data=be)))),(be=y?jt(n,l):Qe(n,l))&&(Ne=Ih(U,"onBeforeInput"),0<Ne.length&&(Ue=new Pl("onBeforeInput","beforeinput",null,l,$),se.push({event:Ue,listeners:Ne}),Ue.data=be)),AC(se,n,U,l,$)}oE(se,a)})}function pu(n,a,l){return{instance:n,listener:a,currentTarget:l}}function Ih(n,a){for(var l=a+"Capture",c=[];n!==null;){var d=n,_=d.stateNode;d=d.tag,d!==5&&d!==26&&d!==27||_===null||(d=ia(n,l),d!=null&&c.unshift(pu(n,d,_)),d=ia(n,a),d!=null&&c.push(pu(n,d,_))),n=n.return}return c}function ko(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function uE(n,a,l,c,d){for(var _=a._reactName,E=[];l!==null&&l!==c;){var w=l,O=w.alternate,U=w.stateNode;if(w=w.tag,O!==null&&O===c)break;w!==5&&w!==26&&w!==27||U===null||(O=U,d?(U=ia(l,_),U!=null&&E.unshift(pu(l,U,O))):d||(U=ia(l,_),U!=null&&E.push(pu(l,U,O)))),l=l.return}E.length!==0&&n.push({event:a,listeners:E})}var RC=/\r\n?/g,IC=/\u0000|\uFFFD/g;function cE(n){return(typeof n=="string"?n:""+n).replace(RC,`
`).replace(IC,"")}function hE(n,a){return a=cE(a),cE(n)===a}function Nh(){}function lt(n,a,l,c,d,_){switch(l){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||ei(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&ei(n,""+c);break;case"className":Zs(n,"class",c);break;case"tabIndex":Zs(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Zs(n,l,c);break;case"style":Oc(n,c,_);break;case"data":if(a!=="object"){Zs(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||l!=="href")){n.removeAttribute(l);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(l);break}c=ki(""+c),n.setAttribute(l,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof _=="function"&&(l==="formAction"?(a!=="input"&&lt(n,a,"name",d.name,d,null),lt(n,a,"formEncType",d.formEncType,d,null),lt(n,a,"formMethod",d.formMethod,d,null),lt(n,a,"formTarget",d.formTarget,d,null)):(lt(n,a,"encType",d.encType,d,null),lt(n,a,"method",d.method,d,null),lt(n,a,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(l);break}c=ki(""+c),n.setAttribute(l,c);break;case"onClick":c!=null&&(n.onclick=Nh);break;case"onScroll":c!=null&&qe("scroll",n);break;case"onScrollEnd":c!=null&&qe("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(d.children!=null)throw Error(r(60));n.innerHTML=l}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}l=ki(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(l,""+c):n.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(l,""):n.removeAttribute(l);break;case"capture":case"download":c===!0?n.setAttribute(l,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(l,c):n.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(l,c):n.removeAttribute(l);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(l):n.setAttribute(l,c);break;case"popover":qe("beforetoggle",n),qe("toggle",n),Xs(n,"popover",c);break;case"xlinkActuate":Jn(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Jn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Jn(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Jn(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Jn(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Jn(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Jn(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Jn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Jn(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Xs(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=gd.get(l)||l,Xs(n,l,c))}}function Qp(n,a,l,c,d,_){switch(l){case"style":Oc(n,c,_);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(d.children!=null)throw Error(r(60));n.innerHTML=l}}break;case"children":typeof c=="string"?ei(n,c):(typeof c=="number"||typeof c=="bigint")&&ei(n,""+c);break;case"onScroll":c!=null&&qe("scroll",n);break;case"onScrollEnd":c!=null&&qe("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Nh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Za.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(d=l.endsWith("Capture"),a=l.slice(2,d?l.length-7:void 0),_=n[Ut]||null,_=_!=null?_[l]:null,typeof _=="function"&&n.removeEventListener(a,_,d),typeof c=="function")){typeof _!="function"&&_!==null&&(l in n?n[l]=null:n.hasAttribute(l)&&n.removeAttribute(l)),n.addEventListener(a,c,d);break e}l in n?n[l]=c:c===!0?n.setAttribute(l,""):Xs(n,l,c)}}}function on(n,a,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qe("error",n),qe("load",n);var c=!1,d=!1,_;for(_ in l)if(l.hasOwnProperty(_)){var E=l[_];if(E!=null)switch(_){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:lt(n,a,_,E,l,null)}}d&&lt(n,a,"srcSet",l.srcSet,l,null),c&&lt(n,a,"src",l.src,l,null);return;case"input":qe("invalid",n);var w=_=E=d=null,O=null,U=null;for(c in l)if(l.hasOwnProperty(c)){var $=l[c];if($!=null)switch(c){case"name":d=$;break;case"type":E=$;break;case"checked":O=$;break;case"defaultChecked":U=$;break;case"value":_=$;break;case"defaultValue":w=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,a));break;default:lt(n,a,c,$,l,null)}}ta(n,_,w,O,U,E,d,!1),ea(n);return;case"select":qe("invalid",n),c=E=_=null;for(d in l)if(l.hasOwnProperty(d)&&(w=l[d],w!=null))switch(d){case"value":_=w;break;case"defaultValue":E=w;break;case"multiple":c=w;default:lt(n,a,d,w,l,null)}a=_,l=E,n.multiple=!!c,a!=null?Je(n,!!c,a,!1):l!=null&&Je(n,!!c,l,!0);return;case"textarea":qe("invalid",n),_=d=c=null;for(E in l)if(l.hasOwnProperty(E)&&(w=l[E],w!=null))switch(E){case"value":c=w;break;case"defaultValue":d=w;break;case"children":_=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:lt(n,a,E,w,l,null)}er(n,c,d,_),ea(n);return;case"option":for(O in l)if(l.hasOwnProperty(O)&&(c=l[O],c!=null))switch(O){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:lt(n,a,O,c,l,null)}return;case"dialog":qe("cancel",n),qe("close",n);break;case"iframe":case"object":qe("load",n);break;case"video":case"audio":for(c=0;c<du.length;c++)qe(du[c],n);break;case"image":qe("error",n),qe("load",n);break;case"details":qe("toggle",n);break;case"embed":case"source":case"link":qe("error",n),qe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in l)if(l.hasOwnProperty(U)&&(c=l[U],c!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:lt(n,a,U,c,l,null)}return;default:if(Dl(a)){for($ in l)l.hasOwnProperty($)&&(c=l[$],c!==void 0&&Qp(n,a,$,c,l,void 0));return}}for(w in l)l.hasOwnProperty(w)&&(c=l[w],c!=null&&lt(n,a,w,c,l,null))}function NC(n,a,l,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,_=null,E=null,w=null,O=null,U=null,$=null;for(Q in l){var se=l[Q];if(l.hasOwnProperty(Q)&&se!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":O=se;default:c.hasOwnProperty(Q)||lt(n,a,Q,null,c,se)}}for(var q in c){var Q=c[q];if(se=l[q],c.hasOwnProperty(q)&&(Q!=null||se!=null))switch(q){case"type":_=Q;break;case"name":d=Q;break;case"checked":U=Q;break;case"defaultChecked":$=Q;break;case"value":E=Q;break;case"defaultValue":w=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(r(137,a));break;default:Q!==se&&lt(n,a,q,Q,c,se)}}Js(n,E,w,O,U,$,_,d);return;case"select":Q=E=w=q=null;for(_ in l)if(O=l[_],l.hasOwnProperty(_)&&O!=null)switch(_){case"value":break;case"multiple":Q=O;default:c.hasOwnProperty(_)||lt(n,a,_,null,c,O)}for(d in c)if(_=c[d],O=l[d],c.hasOwnProperty(d)&&(_!=null||O!=null))switch(d){case"value":q=_;break;case"defaultValue":w=_;break;case"multiple":E=_;default:_!==O&&lt(n,a,d,_,c,O)}a=w,l=E,c=Q,q!=null?Je(n,!!l,q,!1):!!c!=!!l&&(a!=null?Je(n,!!l,a,!0):Je(n,!!l,l?[]:"",!1));return;case"textarea":Q=q=null;for(w in l)if(d=l[w],l.hasOwnProperty(w)&&d!=null&&!c.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:lt(n,a,w,null,c,d)}for(E in c)if(d=c[E],_=l[E],c.hasOwnProperty(E)&&(d!=null||_!=null))switch(E){case"value":q=d;break;case"defaultValue":Q=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(r(91));break;default:d!==_&&lt(n,a,E,d,c,_)}na(n,q,Q);return;case"option":for(var we in l)if(q=l[we],l.hasOwnProperty(we)&&q!=null&&!c.hasOwnProperty(we))switch(we){case"selected":n.selected=!1;break;default:lt(n,a,we,null,c,q)}for(O in c)if(q=c[O],Q=l[O],c.hasOwnProperty(O)&&q!==Q&&(q!=null||Q!=null))switch(O){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:lt(n,a,O,q,c,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Me in l)q=l[Me],l.hasOwnProperty(Me)&&q!=null&&!c.hasOwnProperty(Me)&&lt(n,a,Me,null,c,q);for(U in c)if(q=c[U],Q=l[U],c.hasOwnProperty(U)&&q!==Q&&(q!=null||Q!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,a));break;default:lt(n,a,U,q,c,Q)}return;default:if(Dl(a)){for(var bt in l)q=l[bt],l.hasOwnProperty(bt)&&q!==void 0&&!c.hasOwnProperty(bt)&&Qp(n,a,bt,void 0,c,q);for($ in c)q=c[$],Q=l[$],!c.hasOwnProperty($)||q===Q||q===void 0&&Q===void 0||Qp(n,a,$,q,c,Q);return}}for(var j in l)q=l[j],l.hasOwnProperty(j)&&q!=null&&!c.hasOwnProperty(j)&&lt(n,a,j,null,c,q);for(se in c)q=c[se],Q=l[se],!c.hasOwnProperty(se)||q===Q||q==null&&Q==null||lt(n,a,se,q,c,Q)}var Yp=null,$p=null;function Dh(n){return n.nodeType===9?n:n.ownerDocument}function fE(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dE(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function Xp(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Zp=null;function DC(){var n=window.event;return n&&n.type==="popstate"?n===Zp?!1:(Zp=n,!0):(Zp=null,!1)}var pE=typeof setTimeout=="function"?setTimeout:void 0,OC=typeof clearTimeout=="function"?clearTimeout:void 0,_E=typeof Promise=="function"?Promise:void 0,xC=typeof queueMicrotask=="function"?queueMicrotask:typeof _E<"u"?function(n){return _E.resolve(null).then(n).catch(kC)}:pE;function kC(n){setTimeout(function(){throw n})}function Jp(n,a){var l=a,c=0;do{var d=l.nextSibling;if(n.removeChild(l),d&&d.nodeType===8)if(l=d.data,l==="/$"){if(c===0){n.removeChild(d),Su(a);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=d}while(l);Su(a)}function e_(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var l=a;switch(a=a.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":e_(l),Jr(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}n.removeChild(l)}}function MC(n,a,l,c){for(;n.nodeType===1;){var d=l;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Qs])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(_=n.getAttribute("rel"),_==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(_!==d.rel||n.getAttribute("href")!==(d.href==null?null:d.href)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||n.getAttribute("title")!==(d.title==null?null:d.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(_=n.getAttribute("src"),(_!==(d.src==null?null:d.src)||n.getAttribute("type")!==(d.type==null?null:d.type)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&_&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var _=d.name==null?null:""+d.name;if(d.type==="hidden"&&n.getAttribute("name")===_)return n}else return n;if(n=Si(n.nextSibling),n===null)break}return null}function PC(n,a,l){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!l||(n=Si(n.nextSibling),n===null))return null;return n}function Si(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}function mE(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(a===0)return n;a--}else l==="/$"&&a++}n=n.previousSibling}return null}function gE(n,a,l){switch(a=Dh(l),n){case"html":if(n=a.documentElement,!n)throw Error(r(452));return n;case"head":if(n=a.head,!n)throw Error(r(453));return n;case"body":if(n=a.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}var di=new Map,yE=new Set;function Oh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var Cs=pe.d;pe.d={f:VC,r:LC,D:UC,C:jC,L:BC,m:zC,X:FC,S:HC,M:qC};function VC(){var n=Cs.f(),a=Ah();return n||a}function LC(n){var a=ss(n);a!==null&&a.tag===5&&a.type==="form"?Gy(a):Cs.r(n)}var Mo=typeof document>"u"?null:document;function vE(n,a,l){var c=Mo;if(c&&typeof a=="string"&&a){var d=St(a);d='link[rel="'+n+'"][href="'+d+'"]',typeof l=="string"&&(d+='[crossorigin="'+l+'"]'),yE.has(d)||(yE.add(d),n={rel:n,crossOrigin:l,href:a},c.querySelector(d)===null&&(a=c.createElement("link"),on(a,"link",n),yt(a),c.head.appendChild(a)))}}function UC(n){Cs.D(n),vE("dns-prefetch",n,null)}function jC(n,a){Cs.C(n,a),vE("preconnect",n,a)}function BC(n,a,l){Cs.L(n,a,l);var c=Mo;if(c&&n&&a){var d='link[rel="preload"][as="'+St(a)+'"]';a==="image"&&l&&l.imageSrcSet?(d+='[imagesrcset="'+St(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(d+='[imagesizes="'+St(l.imageSizes)+'"]')):d+='[href="'+St(n)+'"]';var _=d;switch(a){case"style":_=Po(n);break;case"script":_=Vo(n)}di.has(_)||(n=N({rel:"preload",href:a==="image"&&l&&l.imageSrcSet?void 0:n,as:a},l),di.set(_,n),c.querySelector(d)!==null||a==="style"&&c.querySelector(_u(_))||a==="script"&&c.querySelector(mu(_))||(a=c.createElement("link"),on(a,"link",n),yt(a),c.head.appendChild(a)))}}function zC(n,a){Cs.m(n,a);var l=Mo;if(l&&n){var c=a&&typeof a.as=="string"?a.as:"script",d='link[rel="modulepreload"][as="'+St(c)+'"][href="'+St(n)+'"]',_=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":_=Vo(n)}if(!di.has(_)&&(n=N({rel:"modulepreload",href:n},a),di.set(_,n),l.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(mu(_)))return}c=l.createElement("link"),on(c,"link",n),yt(c),l.head.appendChild(c)}}}function HC(n,a,l){Cs.S(n,a,l);var c=Mo;if(c&&n){var d=$s(c).hoistableStyles,_=Po(n);a=a||"default";var E=d.get(_);if(!E){var w={loading:0,preload:null};if(E=c.querySelector(_u(_)))w.loading=5;else{n=N({rel:"stylesheet",href:n,"data-precedence":a},l),(l=di.get(_))&&t_(n,l);var O=E=c.createElement("link");yt(O),on(O,"link",n),O._p=new Promise(function(U,$){O.onload=U,O.onerror=$}),O.addEventListener("load",function(){w.loading|=1}),O.addEventListener("error",function(){w.loading|=2}),w.loading|=4,xh(E,a,c)}E={type:"stylesheet",instance:E,count:1,state:w},d.set(_,E)}}}function FC(n,a){Cs.X(n,a);var l=Mo;if(l&&n){var c=$s(l).hoistableScripts,d=Vo(n),_=c.get(d);_||(_=l.querySelector(mu(d)),_||(n=N({src:n,async:!0},a),(a=di.get(d))&&n_(n,a),_=l.createElement("script"),yt(_),on(_,"link",n),l.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},c.set(d,_))}}function qC(n,a){Cs.M(n,a);var l=Mo;if(l&&n){var c=$s(l).hoistableScripts,d=Vo(n),_=c.get(d);_||(_=l.querySelector(mu(d)),_||(n=N({src:n,async:!0,type:"module"},a),(a=di.get(d))&&n_(n,a),_=l.createElement("script"),yt(_),on(_,"link",n),l.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},c.set(d,_))}}function EE(n,a,l,c){var d=(d=Wt.current)?Oh(d):null;if(!d)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(a=Po(l.href),l=$s(d).hoistableStyles,c=l.get(a),c||(c={type:"style",instance:null,count:0,state:null},l.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){n=Po(l.href);var _=$s(d).hoistableStyles,E=_.get(n);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},_.set(n,E),(_=d.querySelector(_u(n)))&&!_._p&&(E.instance=_,E.state.loading=5),di.has(n)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},di.set(n,l),_||GC(d,n,l,E.state))),a&&c===null)throw Error(r(528,""));return E}if(a&&c!==null)throw Error(r(529,""));return null;case"script":return a=l.async,l=l.src,typeof l=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Vo(l),l=$s(d).hoistableScripts,c=l.get(a),c||(c={type:"script",instance:null,count:0,state:null},l.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function Po(n){return'href="'+St(n)+'"'}function _u(n){return'link[rel="stylesheet"]['+n+"]"}function TE(n){return N({},n,{"data-precedence":n.precedence,precedence:null})}function GC(n,a,l,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),on(a,"link",l),yt(a),n.head.appendChild(a))}function Vo(n){return'[src="'+St(n)+'"]'}function mu(n){return"script[async]"+n}function SE(n,a,l){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+St(l.href)+'"]');if(c)return a.instance=c,yt(c),c;var d=N({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),yt(c),on(c,"style",d),xh(c,l.precedence,n),a.instance=c;case"stylesheet":d=Po(l.href);var _=n.querySelector(_u(d));if(_)return a.state.loading|=4,a.instance=_,yt(_),_;c=TE(l),(d=di.get(d))&&t_(c,d),_=(n.ownerDocument||n).createElement("link"),yt(_);var E=_;return E._p=new Promise(function(w,O){E.onload=w,E.onerror=O}),on(_,"link",c),a.state.loading|=4,xh(_,l.precedence,n),a.instance=_;case"script":return _=Vo(l.src),(d=n.querySelector(mu(_)))?(a.instance=d,yt(d),d):(c=l,(d=di.get(_))&&(c=N({},l),n_(c,d)),n=n.ownerDocument||n,d=n.createElement("script"),yt(d),on(d,"link",c),n.head.appendChild(d),a.instance=d);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,xh(c,l.precedence,n));return a.instance}function xh(n,a,l){for(var c=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,_=d,E=0;E<c.length;E++){var w=c[E];if(w.dataset.precedence===a)_=w;else if(_!==d)break}_?_.parentNode.insertBefore(n,_.nextSibling):(a=l.nodeType===9?l.head:l,a.insertBefore(n,a.firstChild))}function t_(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function n_(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var kh=null;function AE(n,a,l){if(kh===null){var c=new Map,d=kh=new Map;d.set(l,c)}else d=kh,c=d.get(l),c||(c=new Map,d.set(l,c));if(c.has(n))return c;for(c.set(n,null),l=l.getElementsByTagName(n),d=0;d<l.length;d++){var _=l[d];if(!(_[Qs]||_[Kt]||n==="link"&&_.getAttribute("rel")==="stylesheet")&&_.namespaceURI!=="http://www.w3.org/2000/svg"){var E=_.getAttribute(a)||"";E=n+E;var w=c.get(E);w?w.push(_):c.set(E,[_])}}return c}function wE(n,a,l){n=n.ownerDocument||n,n.head.insertBefore(l,a==="title"?n.querySelector("head > title"):null)}function WC(n,a,l){if(l===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function bE(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var gu=null;function KC(){}function QC(n,a,l){if(gu===null)throw Error(r(475));var c=gu;if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var d=Po(l.href),_=n.querySelector(_u(d));if(_){n=_._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Mh.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=_,yt(_);return}_=n.ownerDocument||n,l=TE(l),(d=di.get(d))&&t_(l,d),_=_.createElement("link"),yt(_);var E=_;E._p=new Promise(function(w,O){E.onload=w,E.onerror=O}),on(_,"link",l),a.instance=_}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=Mh.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function YC(){if(gu===null)throw Error(r(475));var n=gu;return n.stylesheets&&n.count===0&&i_(n,n.stylesheets),0<n.count?function(a){var l=setTimeout(function(){if(n.stylesheets&&i_(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(l)}}:null}function Mh(){if(this.count--,this.count===0){if(this.stylesheets)i_(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Ph=null;function i_(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Ph=new Map,a.forEach($C,n),Ph=null,Mh.call(n))}function $C(n,a){if(!(a.state.loading&4)){var l=Ph.get(n);if(l)var c=l.get(null);else{l=new Map,Ph.set(n,l);for(var d=n.querySelectorAll("link[data-precedence],style[data-precedence]"),_=0;_<d.length;_++){var E=d[_];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(l.set(E.dataset.precedence,E),c=E)}c&&l.set(null,c)}d=a.instance,E=d.getAttribute("data-precedence"),_=l.get(E)||c,_===c&&l.set(null,d),l.set(E,d),this.count++,c=Mh.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),_?_.parentNode.insertBefore(d,_.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(d,n.firstChild)),a.state.loading|=4}}var yu={$$typeof:V,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function XC(n,a,l,c,d,_,E,w){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$a(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$a(0),this.hiddenUpdates=$a(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=_,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function CE(n,a,l,c,d,_,E,w,O,U,$,se){return n=new XC(n,a,l,E,w,O,U,se),a=1,_===!0&&(a|=24),_=hi(3,null,null,a),n.current=_,_.stateNode=n,a=Pd(),a.refCount++,n.pooledCache=a,a.refCount++,_.memoizedState={element:c,isDehydrated:l,cache:a},_p(_),n}function RE(n){return n?(n=po,n):po}function IE(n,a,l,c,d,_){d=RE(d),c.context===null?c.context=d:c.pendingContext=d,c=ur(a),c.payload={element:l},_=_===void 0?null:_,_!==null&&(c.callback=_),l=cr(n,c,a),l!==null&&(On(l,n,a),tu(l,n,a))}function NE(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<a?l:a}}function s_(n,a){NE(n,a),(n=n.alternate)&&NE(n,a)}function DE(n){if(n.tag===13){var a=nr(n,67108864);a!==null&&On(a,n,67108864),s_(n,67108864)}}var Vh=!0;function ZC(n,a,l,c){var d=C.T;C.T=null;var _=pe.p;try{pe.p=2,r_(n,a,l,c)}finally{pe.p=_,C.T=d}}function JC(n,a,l,c){var d=C.T;C.T=null;var _=pe.p;try{pe.p=8,r_(n,a,l,c)}finally{pe.p=_,C.T=d}}function r_(n,a,l,c){if(Vh){var d=a_(c);if(d===null)Kp(n,a,c,Lh,l),xE(n,c);else if(tR(d,n,a,l,c))c.stopPropagation();else if(xE(n,c),a&4&&-1<eR.indexOf(n)){for(;d!==null;){var _=ss(d);if(_!==null)switch(_.tag){case 3:if(_=_.stateNode,_.current.memoizedState.isDehydrated){var E=gi(_.pendingLanes);if(E!==0){var w=_;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var O=1<<31-Rn(E);w.entanglements[1]|=O,E&=~O}qi(_),(Et&6)===0&&(Eh=nn()+500,fu(0))}}break;case 13:w=nr(_,2),w!==null&&On(w,_,2),Ah(),s_(_,2)}if(_=a_(c),_===null&&Kp(n,a,c,Lh,l),_===d)break;d=_}d!==null&&c.stopPropagation()}else Kp(n,a,c,null,l)}}function a_(n){return n=to(n),o_(n)}var Lh=null;function o_(n){if(Lh=null,n=yi(n),n!==null){var a=ue(n);if(a===null)n=null;else{var l=a.tag;if(l===13){if(n=z(a),n!==null)return n;n=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Lh=n,null}function OE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($r()){case gt:return 2;case xt:return 8;case ns:case Ac:return 32;case El:return 268435456;default:return 32}default:return 32}}var l_=!1,gr=null,yr=null,vr=null,vu=new Map,Eu=new Map,Er=[],eR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xE(n,a){switch(n){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":vu.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eu.delete(a.pointerId)}}function Tu(n,a,l,c,d,_){return n===null||n.nativeEvent!==_?(n={blockedOn:a,domEventName:l,eventSystemFlags:c,nativeEvent:_,targetContainers:[d]},a!==null&&(a=ss(a),a!==null&&DE(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,d!==null&&a.indexOf(d)===-1&&a.push(d),n)}function tR(n,a,l,c,d){switch(a){case"focusin":return gr=Tu(gr,n,a,l,c,d),!0;case"dragenter":return yr=Tu(yr,n,a,l,c,d),!0;case"mouseover":return vr=Tu(vr,n,a,l,c,d),!0;case"pointerover":var _=d.pointerId;return vu.set(_,Tu(vu.get(_)||null,n,a,l,c,d)),!0;case"gotpointercapture":return _=d.pointerId,Eu.set(_,Tu(Eu.get(_)||null,n,a,l,c,d)),!0}return!1}function kE(n){var a=yi(n.target);if(a!==null){var l=ue(a);if(l!==null){if(a=l.tag,a===13){if(a=z(l),a!==null){n.blockedOn=a,Ks(n.priority,function(){if(l.tag===13){var c=Gn(),d=nr(l,c);d!==null&&On(d,l,c),s_(l,c)}});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Uh(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var l=a_(n.nativeEvent);if(l===null){l=n.nativeEvent;var c=new l.constructor(l.type,l);ti=c,l.target.dispatchEvent(c),ti=null}else return a=ss(l),a!==null&&DE(a),n.blockedOn=l,!1;a.shift()}return!0}function ME(n,a,l){Uh(n)&&l.delete(a)}function nR(){l_=!1,gr!==null&&Uh(gr)&&(gr=null),yr!==null&&Uh(yr)&&(yr=null),vr!==null&&Uh(vr)&&(vr=null),vu.forEach(ME),Eu.forEach(ME)}function jh(n,a){n.blockedOn===a&&(n.blockedOn=null,l_||(l_=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,nR)))}var Bh=null;function PE(n){Bh!==n&&(Bh=n,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Bh===n&&(Bh=null);for(var a=0;a<n.length;a+=3){var l=n[a],c=n[a+1],d=n[a+2];if(typeof c!="function"){if(o_(c||l)===null)continue;break}var _=ss(l);_!==null&&(n.splice(a,3),a-=3,Xd(_,{pending:!0,data:d,method:l.method,action:c},c,d))}}))}function Su(n){function a(O){return jh(O,n)}gr!==null&&jh(gr,n),yr!==null&&jh(yr,n),vr!==null&&jh(vr,n),vu.forEach(a),Eu.forEach(a);for(var l=0;l<Er.length;l++){var c=Er[l];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Er.length&&(l=Er[0],l.blockedOn===null);)kE(l),l.blockedOn===null&&Er.shift();if(l=(n.ownerDocument||n).$$reactFormReplay,l!=null)for(c=0;c<l.length;c+=3){var d=l[c],_=l[c+1],E=d[Ut]||null;if(typeof _=="function")E||PE(l);else if(E){var w=null;if(_&&_.hasAttribute("formAction")){if(d=_,E=_[Ut]||null)w=E.formAction;else if(o_(d)!==null)continue}else w=E.action;typeof w=="function"?l[c+1]=w:(l.splice(c,3),c-=3),PE(l)}}}function u_(n){this._internalRoot=n}zh.prototype.render=u_.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(r(409));var l=a.current,c=Gn();IE(l,c,n,a,null,null)},zh.prototype.unmount=u_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;n.tag===0&&Oo(),IE(n.current,2,null,n,null,null),Ah(),a[is]=null}};function zh(n){this._internalRoot=n}zh.prototype.unstable_scheduleHydration=function(n){if(n){var a=Ic();n={blockedOn:null,target:n,priority:a};for(var l=0;l<Er.length&&a!==0&&a<Er[l].priority;l++);Er.splice(l,0,n),l===0&&kE(n)}};var VE=e.version;if(VE!=="19.0.0")throw Error(r(527,VE,"19.0.0"));pe.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=Z(a),n=n!==null?ge(n):null,n=n===null?null:n.stateNode,n};var iR={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:C,findFiberByHostInstance:yi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hh.isDisabled&&Hh.supportsFiber)try{zs=Hh.inject(iR),pn=Hh}catch{}}return wu.createRoot=function(n,a){if(!o(n))throw Error(r(299));var l=!1,c="",d=Jy,_=ev,E=tv,w=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks)),a=CE(n,1,!1,null,null,l,c,d,_,E,w,null),n[is]=a.current,Wp(n.nodeType===8?n.parentNode:n),new u_(a)},wu.hydrateRoot=function(n,a,l){if(!o(n))throw Error(r(299));var c=!1,d="",_=Jy,E=ev,w=tv,O=null,U=null;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(d=l.identifierPrefix),l.onUncaughtError!==void 0&&(_=l.onUncaughtError),l.onCaughtError!==void 0&&(E=l.onCaughtError),l.onRecoverableError!==void 0&&(w=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(O=l.unstable_transitionCallbacks),l.formState!==void 0&&(U=l.formState)),a=CE(n,1,!0,a,l??null,c,d,_,E,w,O,U),a.context=RE(null),l=a.current,c=Gn(),d=ur(c),d.callback=null,cr(l,d,c),a.current.lanes=c,It(a,c),qi(a),n[is]=a.current,Wp(n),new zh(a)},wu.version="19.0.0",wu}var WE;function dR(){if(WE)return f_.exports;WE=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),f_.exports=fR(),f_.exports}var pR=dR();const _R="_hideHome_1sau2_19",mR="_home_wrapper_1sau2_27",gR="_left_1sau2_43",yR="_wrapTop_1sau2_61",vR="_wrapBottom_1sau2_141",ER="_orange_1sau2_171",TR="_purple_1sau2_177",SR="_blue_1sau2_183",AR="_right_1sau2_193",Rs={hideHome:_R,home_wrapper:mR,left:gR,wrapTop:yR,wrapBottom:vR,orange:ER,purple:TR,blue:SR,right:AR},wR="_animateLeft_1cea5_1",bR="_animateImg_1cea5_11",KE={animateLeft:wR,animateImg:bR},Se=({className:s,content:e,func:t,submit:r,icon:o,change:u,element:h})=>A.jsxs("button",{className:`${s}`,onChange:()=>{u()},onSubmit:p=>{r(p)},onClick:()=>{t()},children:[o,e,h]}),CR="_nav_1n3x3_47",RR="_hideNav_1n3x3_55",IR="_left_1n3x3_101",NR="_middle_1n3x3_129",DR="_NavLinks_1n3x3_129",OR="_indicated_1n3x3_167",xR="_indication_1n3x3_177",kR="_right_1n3x3_195",MR="_HamburgerButt_1n3x3_207",PR="_SignInButt_1n3x3_253",VR="_SignUpButt_1n3x3_287",LR="_sidebar_1n3x3_319",UR="_hideSideBar_1n3x3_329",jR="_User_Button_1n3x3_547",ht={nav:CR,hideNav:RR,left:IR,middle:NR,NavLinks:DR,indicated:OR,indication:xR,right:kR,HamburgerButt:MR,SignInButt:PR,SignUpButt:VR,sidebar:LR,hideSideBar:UR,User_Button:jR},BR=()=>{};var QE={};/**
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
 */const t0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const me=function(s,e){if(!s)throw cl(e)},cl=function(s){return new Error("Firebase Database ("+t0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
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
 */const n0=function(s){const e=[];let t=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},zR=function(s){const e=[];let t=0,r=0;for(;t<s.length;){const o=s[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const u=s[t++];e[r++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=s[t++],h=s[t++],p=s[t++],m=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(m>>10)),e[r++]=String.fromCharCode(56320+(m&1023))}else{const u=s[t++],h=s[t++];e[r++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},vm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<s.length;o+=3){const u=s[o],h=o+1<s.length,p=h?s[o+1]:0,m=o+2<s.length,g=m?s[o+2]:0,T=u>>2,S=(u&3)<<4|p>>4;let I=(p&15)<<2|g>>6,V=g&63;m||(V=64,h||(I=64)),r.push(t[T],t[S],t[I],t[V])}return r.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(n0(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):zR(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<s.length;){const u=t[s.charAt(o++)],p=o<s.length?t[s.charAt(o)]:0;++o;const g=o<s.length?t[s.charAt(o)]:64;++o;const S=o<s.length?t[s.charAt(o)]:64;if(++o,u==null||p==null||g==null||S==null)throw new HR;const I=u<<2|p>>4;if(r.push(I),g!==64){const V=p<<4&240|g>>2;if(r.push(V),S!==64){const F=g<<6&192|S;r.push(F)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class HR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i0=function(s){const e=n0(s);return vm.encodeByteArray(e,!0)},cf=function(s){return i0(s).replace(/\./g,"")},hf=function(s){try{return vm.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function FR(s){return s0(void 0,s)}function s0(s,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!qR(t)||(s[t]=s0(s[t],e[t]));return s}function qR(s){return s!=="__proto__"}/**
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
 */function GR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WR=()=>GR().__FIREBASE_DEFAULTS__,KR=()=>{if(typeof process>"u"||typeof QE>"u")return;const s=QE.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},QR=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&hf(s[1]);return e&&JSON.parse(e)},jf=()=>{try{return BR()||WR()||KR()||QR()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},r0=s=>{var e,t;return(t=(e=jf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[s]},YR=s=>{const e=r0(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},a0=()=>{var s;return(s=jf())===null||s===void 0?void 0:s.config},o0=s=>{var e;return(e=jf())===null||e===void 0?void 0:e[`_${s}`]};/**
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
 */class Em{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function $R(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=s.iat||0,u=s.sub||s.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},s);return[cf(JSON.stringify(t)),cf(JSON.stringify(h)),""].join(".")}/**
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
 */function wn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wn())}function XR(){var s;const e=(s=jf())===null||s===void 0?void 0:s.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JR(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function l0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eI(){const s=wn();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function tI(){return t0.NODE_ADMIN===!0}function nI(){return!XR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iI(){try{return typeof indexedDB=="object"}catch{return!1}}function sI(){return new Promise((s,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),s(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const rI="FirebaseError";class js extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=rI,Object.setPrototypeOf(this,js.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lc.prototype.create)}}class lc{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?aI(u,r):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new js(o,p,r)}}function aI(s,e){return s.replace(oI,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const oI=/\{\$([^}]+)}/g;/**
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
 */function $u(s){return JSON.parse(s)}function cn(s){return JSON.stringify(s)}/**
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
 */const u0=function(s){let e={},t={},r={},o="";try{const u=s.split(".");e=$u(hf(u[0])||""),t=$u(hf(u[1])||""),o=u[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:o}},lI=function(s){const e=u0(s),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},uI=function(s){const e=u0(s).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Bs(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function Jo(s,e){if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}function M_(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function ff(s,e,t){const r={};for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&(r[o]=e.call(t,s[o],o,s));return r}function Mr(s,e){if(s===e)return!0;const t=Object.keys(s),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const u=s[o],h=e[o];if(YE(u)&&YE(h)){if(!Mr(u,h))return!1}else if(u!==h)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function YE(s){return s!==null&&typeof s=="object"}/**
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
 */function hl(s){const e=[];for(const[t,r]of Object.entries(s))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pu(s){const e={};return s.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,u]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Vu(s){const e=s.indexOf("?");if(!e)return"";const t=s.indexOf("#",e);return s.substring(e,t>0?t:void 0)}/**
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
 */class cI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let S=0;S<16;S++)r[S]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let S=0;S<16;S++)r[S]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let S=16;S<80;S++){const I=r[S-3]^r[S-8]^r[S-14]^r[S-16];r[S]=(I<<1|I>>>31)&4294967295}let o=this.chain_[0],u=this.chain_[1],h=this.chain_[2],p=this.chain_[3],m=this.chain_[4],g,T;for(let S=0;S<80;S++){S<40?S<20?(g=p^u&(h^p),T=1518500249):(g=u^h^p,T=1859775393):S<60?(g=u&h|p&(u|h),T=2400959708):(g=u^h^p,T=3395469782);const I=(o<<5|o>>>27)+g+m+T+r[S]&4294967295;m=p,p=h,h=(u<<30|u>>>2)&4294967295,u=o,o=I}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let o=0;const u=this.buf_;let h=this.inbuf_;for(;o<t;){if(h===0)for(;o<=r;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(u[h]=e.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(u),h=0;break}}else for(;o<t;)if(u[h]=e[o],++h,++o,h===this.blockSize){this.compress_(u),h=0;break}}this.inbuf_=h,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let u=24;u>=0;u-=8)e[r]=this.chain_[o]>>u&255,++r;return e}}function hI(s,e){const t=new fI(s,e);return t.subscribe.bind(t)}class fI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");dI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=m_),o.error===void 0&&(o.error=m_),o.complete===void 0&&(o.complete=m_);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dI(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function m_(){}function pI(s,e){return`${s} failed: ${e} argument `}/**
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
 */const _I=function(s){const e=[];let t=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);if(o>=55296&&o<=56319){const u=o-55296;r++,me(r<s.length,"Surrogate pair missing trail surrogate.");const h=s.charCodeAt(r)-56320;o=65536+(u<<10)+h}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Bf=function(s){let e=0;for(let t=0;t<s.length;t++){const r=s.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function fn(s){return s&&s._delegate?s._delegate:s}class Pr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Na="[DEFAULT]";/**
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
 */class mI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Em;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yI(e))try{this.getOrInitializeService({instanceIdentifier:Na})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});r.resolve(u)}catch{}}}}clearInstance(e=Na){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Na){return this.instances.has(e)}getOptions(e=Na){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);r===p&&h.resolve(o)}return o}onInit(e,t){var r;const o=this.normalizeInstanceIdentifier(t),u=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gI(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Na){return this.component?this.component.multipleInstances?e:Na:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gI(s){return s===Na?void 0:s}function yI(s){return s.instantiationMode==="EAGER"}/**
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
 */class vI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ze;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(ze||(ze={}));const EI={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},TI=ze.INFO,SI={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},AI=(s,e,...t)=>{if(e<s.logLevel)return;const r=new Date().toISOString(),o=SI[e];if(o)console[o](`[${r}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zf{constructor(e){this.name=e,this._logLevel=TI,this._logHandler=AI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?EI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const wI=(s,e)=>e.some(t=>s instanceof t);let $E,XE;function bI(){return $E||($E=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CI(){return XE||(XE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c0=new WeakMap,P_=new WeakMap,h0=new WeakMap,g_=new WeakMap,Sm=new WeakMap;function RI(s){const e=new Promise((t,r)=>{const o=()=>{s.removeEventListener("success",u),s.removeEventListener("error",h)},u=()=>{t(Nr(s.result)),o()},h=()=>{r(s.error),o()};s.addEventListener("success",u),s.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&c0.set(t,s)}).catch(()=>{}),Sm.set(e,s),e}function II(s){if(P_.has(s))return;const e=new Promise((t,r)=>{const o=()=>{s.removeEventListener("complete",u),s.removeEventListener("error",h),s.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{r(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",u),s.addEventListener("error",h),s.addEventListener("abort",h)});P_.set(s,e)}let V_={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return P_.get(s);if(e==="objectStoreNames")return s.objectStoreNames||h0.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nr(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function NI(s){V_=s(V_)}function DI(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=s.call(y_(this),e,...t);return h0.set(r,e.sort?e.sort():[e]),Nr(r)}:CI().includes(s)?function(...e){return s.apply(y_(this),e),Nr(c0.get(this))}:function(...e){return Nr(s.apply(y_(this),e))}}function OI(s){return typeof s=="function"?DI(s):(s instanceof IDBTransaction&&II(s),wI(s,bI())?new Proxy(s,V_):s)}function Nr(s){if(s instanceof IDBRequest)return RI(s);if(g_.has(s))return g_.get(s);const e=OI(s);return e!==s&&(g_.set(s,e),Sm.set(e,s)),e}const y_=s=>Sm.get(s);function xI(s,e,{blocked:t,upgrade:r,blocking:o,terminated:u}={}){const h=indexedDB.open(s,e),p=Nr(h);return r&&h.addEventListener("upgradeneeded",m=>{r(Nr(h.result),m.oldVersion,m.newVersion,Nr(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const kI=["get","getKey","getAll","getAllKeys","count"],MI=["put","add","delete","clear"],v_=new Map;function ZE(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(v_.get(e))return v_.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=MI.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||kI.includes(t)))return;const u=async function(h,...p){const m=this.transaction(h,o?"readwrite":"readonly");let g=m.store;return r&&(g=g.index(p.shift())),(await Promise.all([g[t](...p),o&&m.done]))[0]};return v_.set(e,u),u}NI(s=>({...s,get:(e,t,r)=>ZE(e,t)||s.get(e,t,r),has:(e,t)=>!!ZE(e,t)||s.has(e,t)}));/**
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
 */class PI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(VI(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function VI(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const L_="@firebase/app",JE="0.11.2";/**
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
 */const Ps=new zf("@firebase/app"),LI="@firebase/app-compat",UI="@firebase/analytics-compat",jI="@firebase/analytics",BI="@firebase/app-check-compat",zI="@firebase/app-check",HI="@firebase/auth",FI="@firebase/auth-compat",qI="@firebase/database",GI="@firebase/data-connect",WI="@firebase/database-compat",KI="@firebase/functions",QI="@firebase/functions-compat",YI="@firebase/installations",$I="@firebase/installations-compat",XI="@firebase/messaging",ZI="@firebase/messaging-compat",JI="@firebase/performance",e1="@firebase/performance-compat",t1="@firebase/remote-config",n1="@firebase/remote-config-compat",i1="@firebase/storage",s1="@firebase/storage-compat",r1="@firebase/firestore",a1="@firebase/vertexai",o1="@firebase/firestore-compat",l1="firebase",u1="11.4.0";/**
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
 */const U_="[DEFAULT]",c1={[L_]:"fire-core",[LI]:"fire-core-compat",[jI]:"fire-analytics",[UI]:"fire-analytics-compat",[zI]:"fire-app-check",[BI]:"fire-app-check-compat",[HI]:"fire-auth",[FI]:"fire-auth-compat",[qI]:"fire-rtdb",[GI]:"fire-data-connect",[WI]:"fire-rtdb-compat",[KI]:"fire-fn",[QI]:"fire-fn-compat",[YI]:"fire-iid",[$I]:"fire-iid-compat",[XI]:"fire-fcm",[ZI]:"fire-fcm-compat",[JI]:"fire-perf",[e1]:"fire-perf-compat",[t1]:"fire-rc",[n1]:"fire-rc-compat",[i1]:"fire-gcs",[s1]:"fire-gcs-compat",[r1]:"fire-fst",[o1]:"fire-fst-compat",[a1]:"fire-vertex","fire-js":"fire-js",[l1]:"fire-js-all"};/**
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
 */const df=new Map,h1=new Map,j_=new Map;function eT(s,e){try{s.container.addComponent(e)}catch(t){Ps.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function Ma(s){const e=s.name;if(j_.has(e))return Ps.debug(`There were multiple attempts to register component ${e}.`),!1;j_.set(e,s);for(const t of df.values())eT(t,s);for(const t of h1.values())eT(t,s);return!0}function Am(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function Ln(s){return s==null?!1:s.settings!==void 0}/**
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
 */const f1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dr=new lc("app","Firebase",f1);/**
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
 */class d1{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dr.create("app-deleted",{appName:this._name})}}/**
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
 */const qa=u1;function f0(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const r=Object.assign({name:U_,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw Dr.create("bad-app-name",{appName:String(o)});if(t||(t=a0()),!t)throw Dr.create("no-options");const u=df.get(o);if(u){if(Mr(t,u.options)&&Mr(r,u.config))return u;throw Dr.create("duplicate-app",{appName:o})}const h=new vI(o);for(const m of j_.values())h.addComponent(m);const p=new d1(t,r,h);return df.set(o,p),p}function d0(s=U_){const e=df.get(s);if(!e&&s===U_&&a0())return f0();if(!e)throw Dr.create("no-app",{appName:s});return e}function Qi(s,e,t){var r;let o=(r=c1[s])!==null&&r!==void 0?r:s;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const p=[`Unable to register library "${o}" with version "${e}":`];u&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ps.warn(p.join(" "));return}Ma(new Pr(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const p1="firebase-heartbeat-database",_1=1,Xu="firebase-heartbeat-store";let E_=null;function p0(){return E_||(E_=xI(p1,_1,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Xu)}catch(t){console.warn(t)}}}}).catch(s=>{throw Dr.create("idb-open",{originalErrorMessage:s.message})})),E_}async function m1(s){try{const t=(await p0()).transaction(Xu),r=await t.objectStore(Xu).get(_0(s));return await t.done,r}catch(e){if(e instanceof js)Ps.warn(e.message);else{const t=Dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ps.warn(t.message)}}}async function tT(s,e){try{const r=(await p0()).transaction(Xu,"readwrite");await r.objectStore(Xu).put(e,_0(s)),await r.done}catch(t){if(t instanceof js)Ps.warn(t.message);else{const r=Dr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ps.warn(r.message)}}}function _0(s){return`${s.name}!${s.options.appId}`}/**
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
 */const g1=1024,y1=30;class v1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new T1(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=nT();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>y1){const h=S1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ps.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nT(),{heartbeatsToSend:r,unsentEntries:o}=E1(this._heartbeatsCache.heartbeats),u=cf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ps.warn(t),""}}}function nT(){return new Date().toISOString().substring(0,10)}function E1(s,e=g1){const t=[];let r=s.slice();for(const o of s){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),iT(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),iT(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class T1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iI()?sI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await m1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return tT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return tT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function iT(s){return cf(JSON.stringify({version:2,heartbeats:s})).length}function S1(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let r=1;r<s.length;r++)s[r].date<t&&(t=s[r].date,e=r);return e}/**
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
 */function A1(s){Ma(new Pr("platform-logger",e=>new PI(e),"PRIVATE")),Ma(new Pr("heartbeat",e=>new v1(e),"PRIVATE")),Qi(L_,JE,s),Qi(L_,JE,"esm2017"),Qi("fire-js","")}A1("");function wm(s,e){var t={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&e.indexOf(r)<0&&(t[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(s);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(s,r[o])&&(t[r[o]]=s[r[o]]);return t}function m0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const w1=m0,g0=new lc("auth","Firebase",m0());/**
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
 */const pf=new zf("@firebase/auth");function b1(s,...e){pf.logLevel<=ze.WARN&&pf.warn(`Auth (${qa}): ${s}`,...e)}function Jh(s,...e){pf.logLevel<=ze.ERROR&&pf.error(`Auth (${qa}): ${s}`,...e)}/**
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
 */function _i(s,...e){throw Cm(s,...e)}function Ci(s,...e){return Cm(s,...e)}function bm(s,e,t){const r=Object.assign(Object.assign({},w1()),{[e]:t});return new lc("auth","Firebase",r).create(e,{appName:s.name})}function ks(s){return bm(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function C1(s,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&_i(s,"argument-error"),bm(s,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cm(s,...e){if(typeof s!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(t,...r)}return g0.create(s,...e)}function De(s,e,...t){if(!s)throw Cm(e,...t)}function Ns(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Jh(e),new Error(e)}function Vs(s,e){s||Ns(e)}/**
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
 */function B_(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function R1(){return sT()==="http:"||sT()==="https:"}function sT(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
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
 */function I1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(R1()||JR()||"connection"in navigator)?navigator.onLine:!0}function N1(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class uc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vs(t>e,"Short delay should be less than long delay!"),this.isMobile=Tm()||l0()}get(){return I1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rm(s,e){Vs(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class y0{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ns("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ns("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ns("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const D1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const O1=new uc(3e4,6e4);function Gr(s,e){return s.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:s.tenantId}):e}async function Wr(s,e,t,r,o={}){return v0(s,o,async()=>{let u={},h={};r&&(e==="GET"?h=r:u={body:JSON.stringify(r)});const p=hl(Object.assign({key:s.config.apiKey},h)).slice(1),m=await s._getAdditionalHeaders();m["Content-Type"]="application/json",s.languageCode&&(m["X-Firebase-Locale"]=s.languageCode);const g=Object.assign({method:e,headers:m},u);return ZR()||(g.referrerPolicy="no-referrer"),y0.fetch()(E0(s,s.config.apiHost,t,p),g)})}async function v0(s,e,t){s._canInitEmulator=!1;const r=Object.assign(Object.assign({},D1),e);try{const o=new k1(s),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Fh(s,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fh(s,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Fh(s,"email-already-in-use",h);if(m==="USER_DISABLED")throw Fh(s,"user-disabled",h);const T=r[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw bm(s,T,g);_i(s,T)}}catch(o){if(o instanceof js)throw o;_i(s,"network-request-failed",{message:String(o)})}}async function cc(s,e,t,r,o={}){const u=await Wr(s,e,t,r,o);return"mfaPendingCredential"in u&&_i(s,"multi-factor-auth-required",{_serverResponse:u}),u}function E0(s,e,t,r){const o=`${e}${t}?${r}`;return s.config.emulator?Rm(s.config,o):`${s.config.apiScheme}://${o}`}function x1(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class k1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ci(this.auth,"network-request-failed")),O1.get())})}}function Fh(s,e,t){const r={appName:s.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=Ci(s,e,r);return o.customData._tokenResponse=t,o}function rT(s){return s!==void 0&&s.enterprise!==void 0}class M1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return x1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function P1(s,e){return Wr(s,"GET","/v2/recaptchaConfig",Gr(s,e))}/**
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
 */async function V1(s,e){return Wr(s,"POST","/v1/accounts:delete",e)}async function T0(s,e){return Wr(s,"POST","/v1/accounts:lookup",e)}/**
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
 */function zu(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function L1(s,e=!1){const t=fn(s),r=await t.getIdToken(e),o=Im(r);De(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:r,authTime:zu(T_(o.auth_time)),issuedAtTime:zu(T_(o.iat)),expirationTime:zu(T_(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function T_(s){return Number(s)*1e3}function Im(s){const[e,t,r]=s.split(".");if(e===void 0||t===void 0||r===void 0)return Jh("JWT malformed, contained fewer than 3 sections"),null;try{const o=hf(t);return o?JSON.parse(o):(Jh("Failed to decode base64 JWT payload"),null)}catch(o){return Jh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function aT(s){const e=Im(s);return De(e,"internal-error"),De(typeof e.exp<"u","internal-error"),De(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zu(s,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof js&&U1(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function U1({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class j1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class z_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zu(this.lastLoginAt),this.creationTime=zu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _f(s){var e;const t=s.auth,r=await s.getIdToken(),o=await Zu(s,T0(t,{idToken:r}));De(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];s._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?S0(u.providerUserInfo):[],p=z1(s.providerData,h),m=s.isAnonymous,g=!(s.email&&u.passwordHash)&&!(p!=null&&p.length),T=m?g:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new z_(u.createdAt,u.lastLoginAt),isAnonymous:T};Object.assign(s,S)}async function B1(s){const e=fn(s);await _f(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function z1(s,e){return[...s.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function S0(s){return s.map(e=>{var{providerId:t}=e,r=wm(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function H1(s,e){const t=await v0(s,{},async()=>{const r=hl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=s.config,h=E0(s,o,"/v1/token",`key=${u}`),p=await s._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",y0.fetch()(h,{method:"POST",headers:p,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function F1(s,e){return Wr(s,"POST","/v2/accounts:revokeToken",Gr(s,e))}/**
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
 */class Ko{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){De(e.idToken,"internal-error"),De(typeof e.idToken<"u","internal-error"),De(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){De(e.length!==0,"internal-error");const t=aT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(De(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:u}=await H1(e,t);this.updateTokensAndExpiration(r,o,Number(u))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:u}=t,h=new Ko;return r&&(De(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),o&&(De(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(De(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ko,this.toJSON())}_performRefresh(){return Ns("not implemented")}}/**
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
 */function Sr(s,e){De(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class Ds{constructor(e){var{uid:t,auth:r,stsTokenManager:o}=e,u=wm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new j1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new z_(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Zu(this,this.stsTokenManager.getToken(this.auth,e));return De(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return L1(this,e)}reload(){return B1(this)}_assign(e){this!==e&&(De(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ds(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){De(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await _f(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(ks(this.auth));const e=await this.getIdToken();return await Zu(this,V1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,o,u,h,p,m,g,T;const S=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,V=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,F=(h=t.photoURL)!==null&&h!==void 0?h:void 0,J=(p=t.tenantId)!==null&&p!==void 0?p:void 0,G=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,Y=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ne=(T=t.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:X,emailVerified:re,isAnonymous:fe,providerData:Ee,stsTokenManager:M}=t;De(X&&M,e,"internal-error");const R=Ko.fromJSON(this.name,M);De(typeof X=="string",e,"internal-error"),Sr(S,e.name),Sr(I,e.name),De(typeof re=="boolean",e,"internal-error"),De(typeof fe=="boolean",e,"internal-error"),Sr(V,e.name),Sr(F,e.name),Sr(J,e.name),Sr(G,e.name),Sr(Y,e.name),Sr(ne,e.name);const C=new Ds({uid:X,auth:e,email:I,emailVerified:re,displayName:S,isAnonymous:fe,photoURL:F,phoneNumber:V,tenantId:J,stsTokenManager:R,createdAt:Y,lastLoginAt:ne});return Ee&&Array.isArray(Ee)&&(C.providerData=Ee.map(N=>Object.assign({},N))),G&&(C._redirectEventId=G),C}static async _fromIdTokenResponse(e,t,r=!1){const o=new Ko;o.updateFromServerResponse(t);const u=new Ds({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await _f(u),u}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];De(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?S0(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new Ko;p.updateFromIdToken(r);const m=new Ds({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new z_(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
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
 */const oT=new Map;function Os(s){Vs(s instanceof Function,"Expected a class definition");let e=oT.get(s);return e?(Vs(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,oT.set(s,e),e)}/**
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
 */class A0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}A0.type="NONE";const lT=A0;/**
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
 */function ef(s,e,t){return`firebase:${s}:${e}:${t}`}class Qo{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:u}=this.auth;this.fullUserKey=ef(this.userKey,o.apiKey,u),this.fullPersistenceKey=ef("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ds._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Qo(Os(lT),e,r);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||Os(lT);const h=ef(r,e.config.apiKey,e.name);let p=null;for(const g of t)try{const T=await g._get(h);if(T){const S=Ds._fromJSON(e,T);g!==u&&(p=S),u=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new Qo(u,e,r):(u=m[0],p&&await u._set(h,p.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(h)}catch{}})),new Qo(u,e,r))}}/**
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
 */function uT(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(R0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(w0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(N0(e))return"Blackberry";if(D0(e))return"Webos";if(b0(e))return"Safari";if((e.includes("chrome/")||C0(e))&&!e.includes("edge/"))return"Chrome";if(I0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function w0(s=wn()){return/firefox\//i.test(s)}function b0(s=wn()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function C0(s=wn()){return/crios\//i.test(s)}function R0(s=wn()){return/iemobile/i.test(s)}function I0(s=wn()){return/android/i.test(s)}function N0(s=wn()){return/blackberry/i.test(s)}function D0(s=wn()){return/webos/i.test(s)}function Nm(s=wn()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function q1(s=wn()){var e;return Nm(s)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function G1(){return eI()&&document.documentMode===10}function O0(s=wn()){return Nm(s)||I0(s)||D0(s)||N0(s)||/windows phone/i.test(s)||R0(s)}/**
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
 */function x0(s,e=[]){let t;switch(s){case"Browser":t=uT(wn());break;case"Worker":t=`${uT(wn())}-${s}`;break;default:t=s}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qa}/${r}`}/**
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
 */class W1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=u=>new Promise((h,p)=>{try{const m=e(u);h(m)}catch(m){p(m)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function K1(s,e={}){return Wr(s,"GET","/v2/passwordPolicy",Gr(s,e))}/**
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
 */const Q1=6;class Y1{constructor(e){var t,r,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:Q1,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,o,u,h,p;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(r=m.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),m.isValid&&(m.isValid=(o=m.containsLowercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(u=m.containsUppercaseLetter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(p=m.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),m}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class $1{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cT(this),this.idTokenSubscription=new cT(this),this.beforeStateQueue=new W1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=g0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Os(t)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await Qo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await T0(this,{idToken:e}),r=await Ds._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ln(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=o==null?void 0:o._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===p)&&(m!=null&&m.user)&&(o=m.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return De(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _f(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(ks(this));const t=e?fn(e):null;return t&&De(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&De(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(ks(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(ks(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Os(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await K1(this),t=new Y1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lc("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await F1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Os(e)||this._popupRedirectResolver;De(t,this,"argument-error"),this.redirectPersistenceManager=await Qo.create(this,[Os(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(De(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,r,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return De(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=x0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&b1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Kr(s){return fn(s)}class cT{constructor(e){this.auth=e,this.observer=null,this.addObserver=hI(t=>this.observer=t)}get next(){return De(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function X1(s){Hf=s}function k0(s){return Hf.loadJS(s)}function Z1(){return Hf.recaptchaEnterpriseScript}function J1(){return Hf.gapiScript}function eN(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class tN{constructor(){this.enterprise=new nN}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class nN{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const iN="recaptcha-enterprise",M0="NO_RECAPTCHA";class sN{constructor(e){this.type=iN,this.auth=Kr(e)}async verify(e="verify",t=!1){async function r(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{P1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new M1(m);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,h(g.siteKey)}}).catch(m=>{p(m)})})}function o(u,h,p){const m=window.grecaptcha;rT(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(g=>{h(g)}).catch(()=>{h(M0)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new tN().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{r(this.auth).then(p=>{if(!t&&rT(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=Z1();m.length!==0&&(m+=p),k0(m).then(()=>{o(p,u,h)}).catch(g=>{h(g)})}}).catch(p=>{h(p)})})}}async function hT(s,e,t,r=!1,o=!1){const u=new sN(s);let h;if(o)h=M0;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const p=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return r?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function H_(s,e,t,r,o){var u;if(!((u=s._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await hT(s,e,t,t==="getOobCode");return r(s,h)}else return r(s,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await hT(s,e,t,t==="getOobCode");return r(s,p)}else return Promise.reject(h)})}/**
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
 */function rN(s,e){const t=Am(s,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Mr(u,e??{}))return o;_i(o,"already-initialized")}return t.initialize({options:e})}function aN(s,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Os);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oN(s,e,t){const r=Kr(s);De(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,u=P0(e),{host:h,port:p}=lN(e),m=p===null?"":`:${p}`,g={url:`${u}//${h}${m}/`},T=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){De(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),De(Mr(g,r.config.emulator)&&Mr(T,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=T,r.settings.appVerificationDisabledForTesting=!0,uN()}function P0(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function lN(s){const e=P0(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const u=o[1];return{host:u,port:fT(r.substr(u.length+1))}}else{const[u,h]=r.split(":");return{host:u,port:fT(h)}}}function fT(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function uN(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class Dm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ns("not implemented")}_getIdTokenResponse(e){return Ns("not implemented")}_linkToIdToken(e,t){return Ns("not implemented")}_getReauthenticationResolver(e){return Ns("not implemented")}}async function cN(s,e){return Wr(s,"POST","/v1/accounts:signUp",e)}/**
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
 */async function hN(s,e){return cc(s,"POST","/v1/accounts:signInWithPassword",Gr(s,e))}/**
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
 */async function fN(s,e){return cc(s,"POST","/v1/accounts:signInWithEmailLink",Gr(s,e))}async function dN(s,e){return cc(s,"POST","/v1/accounts:signInWithEmailLink",Gr(s,e))}/**
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
 */class Ju extends Dm{constructor(e,t,r,o=null){super("password",r),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ju(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ju(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return H_(e,t,"signInWithPassword",hN);case"emailLink":return fN(e,{email:this._email,oobCode:this._password});default:_i(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return H_(e,r,"signUpPassword",cN);case"emailLink":return dN(e,{idToken:t,email:this._email,oobCode:this._password});default:_i(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Yo(s,e){return cc(s,"POST","/v1/accounts:signInWithIdp",Gr(s,e))}/**
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
 */const pN="http://localhost";class Pa extends Dm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_i("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=t,u=wm(t,["providerId","signInMethod"]);if(!r||!o)return null;const h=new Pa(r,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Yo(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Yo(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yo(e,t)}buildRequest(){const e={requestUri:pN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hl(t)}return e}}/**
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
 */function _N(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mN(s){const e=Pu(Vu(s)).link,t=e?Pu(Vu(e)).deep_link_id:null,r=Pu(Vu(s)).deep_link_id;return(r?Pu(Vu(r)).link:null)||r||t||e||s}class Om{constructor(e){var t,r,o,u,h,p;const m=Pu(Vu(e)),g=(t=m.apiKey)!==null&&t!==void 0?t:null,T=(r=m.oobCode)!==null&&r!==void 0?r:null,S=_N((o=m.mode)!==null&&o!==void 0?o:null);De(g&&T&&S,"argument-error"),this.apiKey=g,this.operation=S,this.code=T,this.continueUrl=(u=m.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=m.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(p=m.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const t=mN(e);try{return new Om(t)}catch{return null}}}/**
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
 */class fl{constructor(){this.providerId=fl.PROVIDER_ID}static credential(e,t){return Ju._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Om.parseLink(t);return De(r,"argument-error"),Ju._fromEmailAndCode(e,r.code,r.tenantId)}}fl.PROVIDER_ID="password";fl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hc extends xm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class br extends hc{constructor(){super("facebook.com")}static credential(e){return Pa._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return br.credential(e.oauthAccessToken)}catch{return null}}}br.FACEBOOK_SIGN_IN_METHOD="facebook.com";br.PROVIDER_ID="facebook.com";/**
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
 */class Is extends hc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pa._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Is.credential(t,r)}catch{return null}}}Is.GOOGLE_SIGN_IN_METHOD="google.com";Is.PROVIDER_ID="google.com";/**
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
 */class Cr extends hc{constructor(){super("github.com")}static credential(e){return Pa._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
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
 */class Rr extends hc{constructor(){super("twitter.com")}static credential(e,t){return Pa._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Rr.credential(t,r)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
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
 */async function gN(s,e){return cc(s,"POST","/v1/accounts:signUp",Gr(s,e))}/**
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
 */class Va{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const u=await Ds._fromIdTokenResponse(e,r,o),h=dT(r);return new Va({user:u,providerId:h,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=dT(r);return new Va({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function dT(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class mf extends js{constructor(e,t,r,o){var u;super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,mf.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new mf(e,t,r,o)}}function V0(s,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?mf._fromErrorAndOperation(s,u,e,r):u})}async function yN(s,e,t=!1){const r=await Zu(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return Va._forOperation(s,"link",r)}/**
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
 */async function vN(s,e,t=!1){const{auth:r}=s;if(Ln(r.app))return Promise.reject(ks(r));const o="reauthenticate";try{const u=await Zu(s,V0(r,o,e,s),t);De(u.idToken,r,"internal-error");const h=Im(u.idToken);De(h,r,"internal-error");const{sub:p}=h;return De(s.uid===p,r,"user-mismatch"),Va._forOperation(s,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&_i(r,"user-mismatch"),u}}/**
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
 */async function L0(s,e,t=!1){if(Ln(s.app))return Promise.reject(ks(s));const r="signIn",o=await V0(s,r,e),u=await Va._fromIdTokenResponse(s,r,o);return t||await s._updateCurrentUser(u.user),u}async function EN(s,e){return L0(Kr(s),e)}/**
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
 */async function U0(s){const e=Kr(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function TN(s,e,t){if(Ln(s.app))return Promise.reject(ks(s));const r=Kr(s),h=await H_(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gN).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&U0(s),m}),p=await Va._fromIdTokenResponse(r,"signIn",h);return await r._updateCurrentUser(p.user),p}function SN(s,e,t){return Ln(s.app)?Promise.reject(ks(s)):EN(fn(s),fl.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&U0(s),r})}function AN(s,e,t,r){return fn(s).onIdTokenChanged(e,t,r)}function wN(s,e,t){return fn(s).beforeAuthStateChanged(e,t)}function bN(s,e,t,r){return fn(s).onAuthStateChanged(e,t,r)}function j0(s){return fn(s).signOut()}const gf="__sak";/**
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
 */class B0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gf,"1"),this.storage.removeItem(gf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const CN=1e3,RN=10;class z0 extends B0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=O0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,m)=>{this.notifyListeners(h,m)});return}const r=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!t&&this.localCache[r]===h||this.notifyListeners(r,h)},u=this.storage.getItem(r);G1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,RN):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},CN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}z0.type="LOCAL";const IN=z0;/**
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
 */class H0 extends B0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}H0.type="SESSION";const F0=H0;/**
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
 */function NN(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ff{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new Ff(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const p=Array.from(h).map(async g=>g(t.origin,u)),m=await NN(p);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ff.receivers=[];/**
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
 */function km(s="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return s+t}/**
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
 */class DN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,m)=>{const g=km("",20);o.port1.start();const T=setTimeout(()=>{m(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(S){const I=S;if(I.data.eventId===g)switch(I.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(I.data.response);break;default:clearTimeout(T),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Yi(){return window}function ON(s){Yi().location.href=s}/**
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
 */function q0(){return typeof Yi().WorkerGlobalScope<"u"&&typeof Yi().importScripts=="function"}async function xN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kN(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function MN(){return q0()?self:null}/**
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
 */const G0="firebaseLocalStorageDb",PN=1,yf="firebaseLocalStorage",W0="fbase_key";class fc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qf(s,e){return s.transaction([yf],e?"readwrite":"readonly").objectStore(yf)}function VN(){const s=indexedDB.deleteDatabase(G0);return new fc(s).toPromise()}function F_(){const s=indexedDB.open(G0,PN);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(yf,{keyPath:W0})}catch(o){t(o)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(yf)?e(r):(r.close(),await VN(),e(await F_()))})})}async function pT(s,e,t){const r=qf(s,!0).put({[W0]:e,value:t});return new fc(r).toPromise()}async function LN(s,e){const t=qf(s,!1).get(e),r=await new fc(t).toPromise();return r===void 0?null:r.value}function _T(s,e){const t=qf(s,!0).delete(e);return new fc(t).toPromise()}const UN=800,jN=3;class K0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await F_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>jN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return q0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ff._getInstance(MN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xN(),!this.activeServiceWorker)return;this.sender=new DN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await F_();return await pT(e,gf,"1"),await _T(e,gf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>pT(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>LN(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_T(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=qf(o,!1).getAll();return new fc(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}K0.type="LOCAL";const BN=K0;new uc(3e4,6e4);/**
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
 */function Q0(s,e){return e?Os(e):(De(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class Mm extends Dm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zN(s){return L0(s.auth,new Mm(s),s.bypassAuthState)}function HN(s){const{auth:e,user:t}=s;return De(t,e,"internal-error"),vN(t,new Mm(s),s.bypassAuthState)}async function FN(s){const{auth:e,user:t}=s;return De(t,e,"internal-error"),yN(t,new Mm(s),s.bypassAuthState)}/**
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
 */class Y0{constructor(e,t,r,o,u=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:r,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zN;case"linkViaPopup":case"linkViaRedirect":return FN;case"reauthViaPopup":case"reauthViaRedirect":return HN;default:_i(this.auth,"internal-error")}}resolve(e){Vs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qN=new uc(2e3,1e4);async function GN(s,e,t){if(Ln(s.app))return Promise.reject(Ci(s,"operation-not-supported-in-this-environment"));const r=Kr(s);C1(s,e,xm);const o=Q0(r,t);return new Oa(r,"signInViaPopup",e,o).executeNotNull()}class Oa extends Y0{constructor(e,t,r,o,u){super(e,t,o,u),this.provider=r,this.authWindow=null,this.pollId=null,Oa.currentPopupAction&&Oa.currentPopupAction.cancel(),Oa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return De(e,this.auth,"internal-error"),e}async onExecution(){Vs(this.filter.length===1,"Popup operations only handle one event");const e=km();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ci(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ci(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ci(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qN.get())};e()}}Oa.currentPopupAction=null;/**
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
 */const WN="pendingRedirect",tf=new Map;class KN extends Y0{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=tf.get(this.auth._key());if(!e){try{const r=await QN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}tf.set(this.auth._key(),e)}return this.bypassAuthState||tf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QN(s,e){const t=XN(e),r=$N(s);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function YN(s,e){tf.set(s._key(),e)}function $N(s){return Os(s._redirectPersistence)}function XN(s){return ef(WN,s.config.apiKey,s.name)}async function ZN(s,e,t=!1){if(Ln(s.app))return Promise.reject(ks(s));const r=Kr(s),o=Q0(r,e),h=await new KN(r,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
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
 */const JN=10*60*1e3;class eD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!$0(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ci(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JN&&this.cachedEventUids.clear(),this.cachedEventUids.has(mT(e))}saveEventToCache(e){this.cachedEventUids.add(mT(e)),this.lastProcessedEventTime=Date.now()}}function mT(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function $0({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tD(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $0(s);default:return!1}}/**
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
 */async function nD(s,e={}){return Wr(s,"GET","/v1/projects",e)}/**
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
 */const iD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sD=/^https?/;async function rD(s){if(s.config.emulator)return;const{authorizedDomains:e}=await nD(s);for(const t of e)try{if(aD(t))return}catch{}_i(s,"unauthorized-domain")}function aD(s){const e=B_(),{protocol:t,hostname:r}=new URL(e);if(s.startsWith("chrome-extension://")){const h=new URL(s);return h.hostname===""&&r===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===r}if(!sD.test(t))return!1;if(iD.test(s))return r===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const oD=new uc(3e4,6e4);function gT(){const s=Yi().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function lD(s){return new Promise((e,t)=>{var r,o,u;function h(){gT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gT(),t(Ci(s,"network-request-failed"))},timeout:oD.get()})}if(!((o=(r=Yi().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Yi().gapi)===null||u===void 0)&&u.load)h();else{const p=eN("iframefcb");return Yi()[p]=()=>{gapi.load?h():t(Ci(s,"network-request-failed"))},k0(`${J1()}?onload=${p}`).catch(m=>t(m))}}).catch(e=>{throw nf=null,e})}let nf=null;function uD(s){return nf=nf||lD(s),nf}/**
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
 */const cD=new uc(5e3,15e3),hD="__/auth/iframe",fD="emulator/auth/iframe",dD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _D(s){const e=s.config;De(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?Rm(e,fD):`https://${s.config.authDomain}/${hD}`,r={apiKey:e.apiKey,appName:s.name,v:qa},o=pD.get(s.config.apiHost);o&&(r.eid=o);const u=s._getFrameworks();return u.length&&(r.fw=u.join(",")),`${t}?${hl(r).slice(1)}`}async function mD(s){const e=await uD(s),t=Yi().gapi;return De(t,s,"internal-error"),e.open({where:document.body,url:_D(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dD,dontclear:!0},r=>new Promise(async(o,u)=>{await r.restyle({setHideOnLeave:!1});const h=Ci(s,"network-request-failed"),p=Yi().setTimeout(()=>{u(h)},cD.get());function m(){Yi().clearTimeout(p),o(r)}r.ping(m).then(m,()=>{u(h)})}))}/**
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
 */const gD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yD=500,vD=600,ED="_blank",TD="http://localhost";class yT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SD(s,e,t,r=yD,o=vD){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const m=Object.assign(Object.assign({},gD),{width:r.toString(),height:o.toString(),top:u,left:h}),g=wn().toLowerCase();t&&(p=C0(g)?ED:t),w0(g)&&(e=e||TD,m.scrollbars="yes");const T=Object.entries(m).reduce((I,[V,F])=>`${I}${V}=${F},`,"");if(q1(g)&&p!=="_self")return AD(e||"",p),new yT(null);const S=window.open(e||"",p,T);De(S,s,"popup-blocked");try{S.focus()}catch{}return new yT(S)}function AD(s,e){const t=document.createElement("a");t.href=s,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const wD="__/auth/handler",bD="emulator/auth/handler",CD=encodeURIComponent("fac");async function vT(s,e,t,r,o,u){De(s.config.authDomain,s,"auth-domain-config-required"),De(s.config.apiKey,s,"invalid-api-key");const h={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:r,v:qa,eventId:o};if(e instanceof xm){e.setDefaultLanguage(s.languageCode),h.providerId=e.providerId||"",M_(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,S]of Object.entries({}))h[T]=S}if(e instanceof hc){const T=e.getScopes().filter(S=>S!=="");T.length>0&&(h.scopes=T.join(","))}s.tenantId&&(h.tid=s.tenantId);const p=h;for(const T of Object.keys(p))p[T]===void 0&&delete p[T];const m=await s._getAppCheckToken(),g=m?`#${CD}=${encodeURIComponent(m)}`:"";return`${RD(s)}?${hl(p).slice(1)}${g}`}function RD({config:s}){return s.emulator?Rm(s,bD):`https://${s.authDomain}/${wD}`}/**
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
 */const S_="webStorageSupport";class ID{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=F0,this._completeRedirectFn=ZN,this._overrideRedirectResult=YN}async _openPopup(e,t,r,o){var u;Vs((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await vT(e,t,r,B_(),o);return SD(e,h,km())}async _openRedirect(e,t,r,o){await this._originValidation(e);const u=await vT(e,t,r,B_(),o);return ON(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Vs(u,"If manager is not set, promise should be"),u)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await mD(e),r=new eD(e);return t.register("authEvent",o=>(De(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(S_,{type:S_},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[S_];h!==void 0&&t(!!h),_i(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return O0()||b0()||Nm()}}const ND=ID;var ET="@firebase/auth",TT="1.9.1";/**
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
 */class DD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){De(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function OD(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xD(s){Ma(new Pr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=r.options;De(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const m={apiKey:h,authDomain:p,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:x0(s)},g=new $1(r,o,u,m);return aN(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ma(new Pr("auth-internal",e=>{const t=Kr(e.getProvider("auth").getImmediate());return(r=>new DD(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qi(ET,TT,OD(s)),Qi(ET,TT,"esm2017")}/**
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
 */const kD=5*60,MD=o0("authIdTokenMaxAge")||kD;let ST=null;const PD=s=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>MD)return;const o=t==null?void 0:t.token;ST!==o&&(ST=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function VD(s=d0()){const e=Am(s,"auth");if(e.isInitialized())return e.getImmediate();const t=rN(s,{popupRedirectResolver:ND,persistence:[BN,IN,F0]}),r=o0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(r,location.origin);if(location.origin===u.origin){const h=PD(u.toString());wN(t,h,()=>h(t.currentUser)),AN(t,p=>h(p))}}const o=r0("auth");return o&&oN(t,`http://${o}`),t}function LD(){var s,e;return(e=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&e!==void 0?e:document}X1({loadJS(s){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=e,r.onerror=o=>{const u=Ci("internal-error");u.customData=o,t(u)},r.type="text/javascript",r.charset="UTF-8",LD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xD("Browser");var UD="firebase",jD="11.4.0";/**
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
 */Qi(UD,jD,"app");var AT={};const wT="@firebase/database",bT="1.0.13";/**
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
 */let X0="";function BD(s){X0=s}/**
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
 */class zD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),cn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:$u(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class HD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Bs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Z0=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const e=window[s];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zD(e)}}catch{}return new HD},xa=Z0("localStorage"),FD=Z0("sessionStorage");/**
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
 */const $o=new zf("@firebase/database"),qD=function(){let s=1;return function(){return s++}}(),J0=function(s){const e=_I(s),t=new cI;t.update(e);const r=t.digest();return vm.encodeByteArray(r)},dc=function(...s){let e="";for(let t=0;t<s.length;t++){const r=s[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=dc.apply(null,r):typeof r=="object"?e+=cn(r):e+=r,e+=" "}return e};let Hu=null,CT=!0;const GD=function(s,e){me(!0,"Can't turn on custom loggers persistently."),$o.logLevel=ze.VERBOSE,Hu=$o.log.bind($o)},En=function(...s){if(CT===!0&&(CT=!1,Hu===null&&FD.get("logging_enabled")===!0&&GD()),Hu){const e=dc.apply(null,s);Hu(e)}},pc=function(s){return function(...e){En(s,...e)}},q_=function(...s){const e="FIREBASE INTERNAL ERROR: "+dc(...s);$o.error(e)},La=function(...s){const e=`FIREBASE FATAL ERROR: ${dc(...s)}`;throw $o.error(e),new Error(e)},Qn=function(...s){const e="FIREBASE WARNING: "+dc(...s);$o.warn(e)},WD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},eA=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},KD=function(s){if(document.readyState==="complete")s();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},el="[MIN_NAME]",Ua="[MAX_NAME]",dl=function(s,e){if(s===e)return 0;if(s===el||e===Ua)return-1;if(e===el||s===Ua)return 1;{const t=RT(s),r=RT(e);return t!==null?r!==null?t-r===0?s.length-e.length:t-r:-1:r!==null?1:s<e?-1:1}},QD=function(s,e){return s===e?0:s<e?-1:1},bu=function(s,e){if(e&&s in e)return e[s];throw new Error("Missing required key ("+s+") in object: "+cn(e))},Pm=function(s){if(typeof s!="object"||s===null)return cn(s);const e=[];for(const r in s)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=cn(e[r]),t+=":",t+=Pm(s[e[r]]);return t+="}",t},tA=function(s,e){const t=s.length;if(t<=e)return[s];const r=[];for(let o=0;o<t;o+=e)o+e>t?r.push(s.substring(o,t)):r.push(s.substring(o,o+e));return r};function mi(s,e){for(const t in s)s.hasOwnProperty(t)&&e(t,s[t])}const nA=function(s){me(!eA(s),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let o,u,h,p,m;s===0?(u=0,h=0,o=1/s===-1/0?1:0):(o=s<0,s=Math.abs(s),s>=Math.pow(2,1-r)?(p=Math.min(Math.floor(Math.log(s)/Math.LN2),r),u=p+r,h=Math.round(s*Math.pow(2,t-p)-Math.pow(2,t))):(u=0,h=Math.round(s/Math.pow(2,1-r-t))));const g=[];for(m=t;m;m-=1)g.push(h%2?1:0),h=Math.floor(h/2);for(m=e;m;m-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(o?1:0),g.reverse();const T=g.join("");let S="";for(m=0;m<64;m+=8){let I=parseInt(T.substr(m,8),2).toString(16);I.length===1&&(I="0"+I),S=S+I}return S.toLowerCase()},YD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$D=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},XD=new RegExp("^-?(0*)\\d{1,10}$"),ZD=-2147483648,JD=2147483647,RT=function(s){if(XD.test(s)){const e=Number(s);if(e>=ZD&&e<=JD)return e}return null},_c=function(s){try{s()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Qn("Exception was thrown by user callback.",t),e},Math.floor(0))}},eO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fu=function(s,e){const t=setTimeout(s,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class tO{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Ln(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Qn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class nO{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(En("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qn(e)}}/**
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
 */const Vm="5",iA="v",sA="s",rA="r",aA="f",oA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,lA="ls",uA="p",G_="ac",cA="websocket",hA="long_polling";/**
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
 */class iO{constructor(e,t,r,o,u=!1,h="",p=!1,m=!1,g=null){this.secure=t,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=u,this.persistenceKey=h,this.includeNamespaceInQueryParams=p,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xa.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function sO(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function fA(s,e,t){me(typeof e=="string","typeof type must == string"),me(typeof t=="object","typeof params must == object");let r;if(e===cA)r=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(e===hA)r=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sO(s)&&(t.ns=s.namespace);const o=[];return mi(t,(u,h)=>{o.push(u+"="+h)}),r+o.join("&")}/**
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
 */class rO{constructor(){this.counters_={}}incrementCounter(e,t=1){Bs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return FR(this.counters_)}}/**
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
 */const A_={},w_={};function Lm(s){const e=s.toString();return A_[e]||(A_[e]=new rO),A_[e]}function aO(s,e){const t=s.toString();return w_[t]||(w_[t]=e()),w_[t]}/**
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
 */class oO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&_c(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const IT="start",lO="close",uO="pLPCommand",cO="pRTLPCB",dA="id",pA="pw",_A="ser",hO="cb",fO="seg",dO="ts",pO="d",_O="dframe",mA=1870,gA=30,mO=mA-gA,gO=25e3,yO=3e4;class Go{constructor(e,t,r,o,u,h,p){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=o,this.authToken=u,this.transportSessionId=h,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pc(e),this.stats_=Lm(t),this.urlFn=m=>(this.appCheckToken&&(m[G_]=this.appCheckToken),fA(t,hA,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new oO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(yO)),KD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Um((...u)=>{const[h,p,m,g,T]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===IT)this.id=p,this.password=m;else if(h===lO)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...u)=>{const[h,p]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(h,p)},()=>{this.onClosed_()},this.urlFn);const r={};r[IT]="t",r[_A]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[hO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[iA]=Vm,this.transportSessionId&&(r[sA]=this.transportSessionId),this.lastSessionId&&(r[lA]=this.lastSessionId),this.applicationId&&(r[uA]=this.applicationId),this.appCheckToken&&(r[G_]=this.appCheckToken),typeof location<"u"&&location.hostname&&oA.test(location.hostname)&&(r[rA]=aA);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Go.forceAllow_=!0}static forceDisallow(){Go.forceDisallow_=!0}static isAvailable(){return Go.forceAllow_?!0:!Go.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!YD()&&!$D()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=cn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=i0(t),o=tA(r,mO);for(let u=0;u<o.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[u]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[_O]="t",r[dA]=e,r[pA]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=cn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Um{constructor(e,t,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=qD(),window[uO+this.uniqueCallbackIdentifier]=e,window[cO+this.uniqueCallbackIdentifier]=t,this.myIFrame=Um.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(p){En("frame writing exception"),p.stack&&En(p.stack),En(p)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||En("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[dA]=this.myID,e[pA]=this.myPW,e[_A]=this.currentSerial;let t=this.urlFn(e),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gA+r.length<=mA;){const h=this.pendingSegs.shift();r=r+"&"+fO+o+"="+h.seg+"&"+dO+o+"="+h.ts+"&"+pO+o+"="+h.d,o++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(r,Math.floor(gO)),u=()=>{clearTimeout(o),r()};this.addTag(e,u)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{En("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const vO=16384,EO=45e3;let vf=null;typeof MozWebSocket<"u"?vf=MozWebSocket:typeof WebSocket<"u"&&(vf=WebSocket);class Ai{constructor(e,t,r,o,u,h,p){this.connId=e,this.applicationId=r,this.appCheckToken=o,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pc(this.connId),this.stats_=Lm(t),this.connURL=Ai.connectionURL_(t,h,p,o,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,o,u){const h={};return h[iA]=Vm,typeof location<"u"&&location.hostname&&oA.test(location.hostname)&&(h[rA]=aA),t&&(h[sA]=t),r&&(h[lA]=r),o&&(h[G_]=o),u&&(h[uA]=u),fA(e,cA,h)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xa.set("previous_websocket_failure",!0);try{let r;tI(),this.mySock=new vf(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Ai.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&vf!==null&&!Ai.forceDisallow_}static previouslyFailed(){return xa.isInMemoryStorage||xa.get("previous_websocket_failure")===!0}markConnectionHealthy(){xa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=$u(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(me(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=cn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=tA(t,vO);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(EO))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ai.responsesRequiredToBeHealthy=2;Ai.healthyTimeout=3e4;/**
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
 */class ec{static get ALL_TRANSPORTS(){return[Go,Ai]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ai&&Ai.isAvailable();let r=t&&!Ai.previouslyFailed();if(e.webSocketOnly&&(t||Qn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ai];else{const o=this.transports_=[];for(const u of ec.ALL_TRANSPORTS)u&&u.isAvailable()&&o.push(u);ec.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ec.globalTransportInitialized_=!1;/**
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
 */const TO=6e4,SO=5e3,AO=10*1024,wO=100*1024,b_="t",NT="d",bO="s",DT="r",CO="e",OT="o",xT="a",kT="n",MT="p",RO="h";class IO{constructor(e,t,r,o,u,h,p,m,g,T){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=u,this.onMessage_=h,this.onReady_=p,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=T,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pc("c:"+this.id+":"),this.transportManager_=new ec(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Fu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>AO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(b_ in e){const t=e[b_];t===xT?this.upgradeIfSecondaryHealthy_():t===DT?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===OT&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=bu("t",e),r=bu("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:MT,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xT,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kT,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=bu("t",e),r=bu("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=bu(b_,e);if(NT in e){const r=e[NT];if(t===RO){const o=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===kT){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===bO?this.onConnectionShutdown_(r):t===DT?this.onReset_(r):t===CO?q_("Server Error: "+r):t===OT?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):q_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Vm!==r&&Qn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Fu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(TO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(SO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:MT,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class yA{put(e,t,r,o){}merge(e,t,r,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class vA{constructor(e){this.allowedEvents_=e,this.listeners_={},me(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const o=this.getInitialEvent(e);o&&t.apply(r,o)}off(e,t,r){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let u=0;u<o.length;u++)if(o[u].callback===t&&(!r||r===o[u].context)){o.splice(u,1);return}}validateEventType_(e){me(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Ef extends vA{static getInstance(){return new Ef}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Tm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return me(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const PT=32,VT=768;class mt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new mt("")}function Xe(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function Vr(s){return s.pieces_.length-s.pieceNum_}function _t(s){let e=s.pieceNum_;return e<s.pieces_.length&&e++,new mt(s.pieces_,e)}function EA(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function NO(s){let e="";for(let t=s.pieceNum_;t<s.pieces_.length;t++)s.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(s.pieces_[t])));return e||"/"}function TA(s,e=0){return s.pieces_.slice(s.pieceNum_+e)}function SA(s){if(s.pieceNum_>=s.pieces_.length)return null;const e=[];for(let t=s.pieceNum_;t<s.pieces_.length-1;t++)e.push(s.pieces_[t]);return new mt(e,0)}function tn(s,e){const t=[];for(let r=s.pieceNum_;r<s.pieces_.length;r++)t.push(s.pieces_[r]);if(e instanceof mt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&t.push(r[o])}return new mt(t,0)}function We(s){return s.pieceNum_>=s.pieces_.length}function pi(s,e){const t=Xe(s),r=Xe(e);if(t===null)return e;if(t===r)return pi(_t(s),_t(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+s+")")}function AA(s,e){if(Vr(s)!==Vr(e))return!1;for(let t=s.pieceNum_,r=e.pieceNum_;t<=s.pieces_.length;t++,r++)if(s.pieces_[t]!==e.pieces_[r])return!1;return!0}function bi(s,e){let t=s.pieceNum_,r=e.pieceNum_;if(Vr(s)>Vr(e))return!1;for(;t<s.pieces_.length;){if(s.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class DO{constructor(e,t){this.errorPrefix_=t,this.parts_=TA(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Bf(this.parts_[r]);wA(this)}}function OO(s,e){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(e),s.byteLength_+=Bf(e),wA(s)}function xO(s){const e=s.parts_.pop();s.byteLength_-=Bf(e),s.parts_.length>0&&(s.byteLength_-=1)}function wA(s){if(s.byteLength_>VT)throw new Error(s.errorPrefix_+"has a key path longer than "+VT+" bytes ("+s.byteLength_+").");if(s.parts_.length>PT)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+PT+") or object contains a cycle "+Da(s))}function Da(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
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
 */class jm extends vA{static getInstance(){return new jm}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return me(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Cu=1e3,kO=60*5*1e3,LT=30*1e3,MO=1.3,PO=3e4,VO="server_kill",UT=3;class Ms extends yA{constructor(e,t,r,o,u,h,p,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=u,this.authTokenProvider_=h,this.appCheckTokenProvider_=p,this.authOverride_=m,this.id=Ms.nextPersistentConnectionId_++,this.log_=pc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cu,this.maxReconnectDelay_=kO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ef.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const o=++this.requestNumber_,u={r:o,a:e,b:t};this.log_(cn(u)),me(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),r&&(this.requestCBHash_[o]=r)}get(e){this.initConnection_();const t=new Em,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:h=>{const p=h.d;h.s==="ok"?t.resolve(p):t.reject(p)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),t.promise}listen(e,t,r,o){this.initConnection_();const u=e._queryIdentifier,h=e._path.toString();this.log_("Listen called for "+h+" "+u),this.listens.has(h)||this.listens.set(h,new Map),me(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),me(!this.listens.get(h).has(u),"listen() called twice for same path/queryId.");const p={onComplete:o,hashFn:t,query:e,tag:r};this.listens.get(h).set(u,p),this.connected_&&this.sendListen_(p)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+r+" for "+o);const u={p:r},h="q";e.tag&&(u.q=t._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(h,u,p=>{const m=p.d,g=p.s;Ms.warnOnListenWarnings_(m,t),(this.listens.get(r)&&this.listens.get(r).get(o))===e&&(this.log_("listen response",p),g!=="ok"&&this.removeListen_(r,o),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Bs(e,"w")){const r=Jo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',u=t._path.toString();Qn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=LT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=lI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,o=>{const u=o.s,h=o.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),me(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,e._queryObject,t)}sendUnlisten_(e,t,r,o){this.log_("Unlisten on "+e+" for "+t);const u={p:e},h="n";o&&(u.q=r,u.t=o),this.sendRequest(h,u)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,o){const u={p:t,d:r};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(e,t,r,o){this.putInternal("p",e,t,r,o)}merge(e,t,r,o){this.putInternal("m",e,t,r,o)}putInternal(e,t,r,o,u){this.initConnection_();const h={p:t,d:r};u!==void 0&&(h.h=u),this.outstandingPuts_.push({action:e,request:h,onComplete:o}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,u=>{this.log_(t+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(u.s,u.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const u=r.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+cn(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):q_("Unrecognized action received from server: "+cn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){me(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>PO&&(this.reconnectDelay_=Cu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*MO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Ms.nextConnectionId_++,u=this.lastSessionId;let h=!1,p=null;const m=function(){p?p.close():(h=!0,r())},g=function(S){me(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(S)};this.realtime_={close:m,sendRequest:g};const T=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[S,I]=await Promise.all([this.authTokenProvider_.getToken(T),this.appCheckTokenProvider_.getToken(T)]);h?En("getToken() completed but was canceled"):(En("getToken() completed. Creating connection."),this.authToken_=S&&S.accessToken,this.appCheckToken_=I&&I.token,p=new IO(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,V=>{Qn(V+" ("+this.repoInfo_.toString()+")"),this.interrupt(VO)},u))}catch(S){this.log_("Failed to get token: "+S),h||(this.repoInfo_.nodeAdmin&&Qn(S),m())}}}interrupt(e){En("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){En("Resuming connection for reason: "+e),delete this.interruptReasons_[e],M_(this.interruptReasons_)&&(this.reconnectDelay_=Cu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(u=>Pm(u)).join("$"):r="default";const o=this.removeListen_(e,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const r=new mt(e).toString();let o;if(this.listens.has(r)){const u=this.listens.get(r);o=u.get(t),u.delete(t),u.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(e,t){En("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=UT&&(this.reconnectDelay_=LT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){En("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=UT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+X0.replace(/\./g,"-")]=1,Tm()?e["framework.cordova"]=1:l0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ef.getInstance().currentlyOnline();return M_(this.interruptReasons_)&&e}}Ms.nextPersistentConnectionId_=0;Ms.nextConnectionId_=0;/**
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
 */class Ze{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ze(e,t)}}/**
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
 */class Gf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Ze(el,e),o=new Ze(el,t);return this.compare(r,o)!==0}minPost(){return Ze.MIN}}/**
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
 */let qh;class bA extends Gf{static get __EMPTY_NODE(){return qh}static set __EMPTY_NODE(e){qh=e}compare(e,t){return dl(e.name,t.name)}isDefinedOn(e){throw cl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ze.MIN}maxPost(){return new Ze(Ua,qh)}makePost(e,t){return me(typeof e=="string","KeyIndex indexValue must always be a string."),new Ze(e,qh)}toString(){return".key"}}const Xo=new bA;/**
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
 */let Gh=class{constructor(e,t,r,o,u=null){this.isReverse_=o,this.resultGenerator_=u,this.nodeStack_=[];let h=1;for(;!e.isEmpty();)if(e=e,h=t?r(e.key,t):1,o&&(h*=-1),h<0)this.isReverse_?e=e.left:e=e.right;else if(h===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Wn=class Lu{constructor(e,t,r,o,u){this.key=e,this.value=t,this.color=r??Lu.RED,this.left=o??Wi.EMPTY_NODE,this.right=u??Wi.EMPTY_NODE}copy(e,t,r,o,u){return new Lu(e??this.key,t??this.value,r??this.color,o??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const u=r(e,o.key);return u<0?o=o.copy(null,null,null,o.left.insert(e,t,r),null):u===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Wi.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,o;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Wi.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Lu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Lu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Wn.RED=!0;Wn.BLACK=!1;class LO{copy(e,t,r,o,u){return this}insert(e,t,r){return new Wn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Wi=class sf{constructor(e,t=sf.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new sf(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Wn.BLACK,null,null))}remove(e){return new sf(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wn.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,o=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Gh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Gh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Gh(this.root_,null,this.comparator_,!0,e)}};Wi.EMPTY_NODE=new LO;/**
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
 */function UO(s,e){return dl(s.name,e.name)}function Bm(s,e){return dl(s,e)}/**
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
 */let W_;function jO(s){W_=s}const CA=function(s){return typeof s=="number"?"number:"+nA(s):"string:"+s},RA=function(s){if(s.isLeafNode()){const e=s.val();me(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Bs(e,".sv"),"Priority must be a string or number.")}else me(s===W_||s.isEmpty(),"priority of unexpected type.");me(s===W_||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let jT;class Jt{static set __childrenNodeConstructor(e){jT=e}static get __childrenNodeConstructor(){return jT}constructor(e,t=Jt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,me(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),RA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Jt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Jt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return We(e)?this:Xe(e)===".priority"?this.priorityNode_:Jt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Jt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Xe(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(me(r!==".priority"||Vr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Jt.__childrenNodeConstructor.EMPTY_NODE.updateChild(_t(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+CA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=nA(this.value_):e+=this.value_,this.lazyHash_=J0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Jt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Jt.__childrenNodeConstructor?-1:(me(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,o=Jt.VALUE_TYPE_ORDER.indexOf(t),u=Jt.VALUE_TYPE_ORDER.indexOf(r);return me(o>=0,"Unknown leaf type: "+t),me(u>=0,"Unknown leaf type: "+r),o===u?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Jt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let IA,NA;function BO(s){IA=s}function zO(s){NA=s}class HO extends Gf{compare(e,t){const r=e.node.getPriority(),o=t.node.getPriority(),u=r.compareTo(o);return u===0?dl(e.name,t.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ze.MIN}maxPost(){return new Ze(Ua,new Jt("[PRIORITY-POST]",NA))}makePost(e,t){const r=IA(e);return new Ze(t,new Jt("[PRIORITY-POST]",r))}toString(){return".priority"}}const An=new HO;/**
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
 */const FO=Math.log(2);class qO{constructor(e){const t=u=>parseInt(Math.log(u)/FO,10),r=u=>parseInt(Array(u+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=r(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Tf=function(s,e,t,r){s.sort(e);const o=function(m,g){const T=g-m;let S,I;if(T===0)return null;if(T===1)return S=s[m],I=t?t(S):S,new Wn(I,S.node,Wn.BLACK,null,null);{const V=parseInt(T/2,10)+m,F=o(m,V),J=o(V+1,g);return S=s[V],I=t?t(S):S,new Wn(I,S.node,Wn.BLACK,F,J)}},u=function(m){let g=null,T=null,S=s.length;const I=function(F,J){const G=S-F,Y=S;S-=F;const ne=o(G+1,Y),X=s[G],re=t?t(X):X;V(new Wn(re,X.node,J,null,ne))},V=function(F){g?(g.left=F,g=F):(T=F,g=F)};for(let F=0;F<m.count;++F){const J=m.nextBitIsOne(),G=Math.pow(2,m.count-(F+1));J?I(G,Wn.BLACK):(I(G,Wn.BLACK),I(G,Wn.RED))}return T},h=new qO(s.length),p=u(h);return new Wi(r||e,p)};/**
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
 */let C_;const Lo={};class xs{static get Default(){return me(Lo&&An,"ChildrenNode.ts has not been loaded"),C_=C_||new xs({".priority":Lo},{".priority":An}),C_}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Jo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Wi?t:null}hasIndex(e){return Bs(this.indexSet_,e.toString())}addIndex(e,t){me(e!==Xo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const u=t.getIterator(Ze.Wrap);let h=u.getNext();for(;h;)o=o||e.isDefinedOn(h.node),r.push(h),h=u.getNext();let p;o?p=Tf(r,e.getCompare()):p=Lo;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const T=Object.assign({},this.indexes_);return T[m]=p,new xs(T,g)}addToIndexes(e,t){const r=ff(this.indexes_,(o,u)=>{const h=Jo(this.indexSet_,u);if(me(h,"Missing index implementation for "+u),o===Lo)if(h.isDefinedOn(e.node)){const p=[],m=t.getIterator(Ze.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&p.push(g),g=m.getNext();return p.push(e),Tf(p,h.getCompare())}else return Lo;else{const p=t.get(e.name);let m=o;return p&&(m=m.remove(new Ze(e.name,p))),m.insert(e,e.node)}});return new xs(r,this.indexSet_)}removeFromIndexes(e,t){const r=ff(this.indexes_,o=>{if(o===Lo)return o;{const u=t.get(e.name);return u?o.remove(new Ze(e.name,u)):o}});return new xs(r,this.indexSet_)}}/**
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
 */let Ru;class st{static get EMPTY_NODE(){return Ru||(Ru=new st(new Wi(Bm),null,xs.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&RA(this.priorityNode_),this.children_.isEmpty()&&me(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ru}updatePriority(e){return this.children_.isEmpty()?this:new st(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ru:t}}getChild(e){const t=Xe(e);return t===null?this:this.getImmediateChild(t).getChild(_t(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(me(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Ze(e,t);let o,u;t.isEmpty()?(o=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(e,t),u=this.indexMap_.addToIndexes(r,this.children_));const h=o.isEmpty()?Ru:this.priorityNode_;return new st(o,h,u)}}updateChild(e,t){const r=Xe(e);if(r===null)return t;{me(Xe(e)!==".priority"||Vr(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(_t(e),t);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,o=0,u=!0;if(this.forEachChild(An,(h,p)=>{t[h]=p.val(e),r++,u&&st.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):u=!1}),!e&&u&&o<2*r){const h=[];for(const p in t)h[p]=t[p];return h}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+CA(this.getPriority().val())+":"),this.forEachChild(An,(t,r)=>{const o=r.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":J0(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const o=this.resolveIndex_(r);if(o){const u=o.getPredecessorKey(new Ze(e,t));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ze(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ze(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,Ze.Wrap);let u=o.peek();for(;u!=null&&t.compare(u,e)<0;)o.getNext(),u=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,Ze.Wrap);let u=o.peek();for(;u!=null&&t.compare(u,e)>0;)o.getNext(),u=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mc?-1:0}withIndex(e){if(e===Xo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new st(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Xo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(An),o=t.getIterator(An);let u=r.getNext(),h=o.getNext();for(;u&&h;){if(u.name!==h.name||!u.node.equals(h.node))return!1;u=r.getNext(),h=o.getNext()}return u===null&&h===null}else return!1;else return!1}}resolveIndex_(e){return e===Xo?null:this.indexMap_.get(e.toString())}}st.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class GO extends st{constructor(){super(new Wi(Bm),st.EMPTY_NODE,xs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return st.EMPTY_NODE}isEmpty(){return!1}}const mc=new GO;Object.defineProperties(Ze,{MIN:{value:new Ze(el,st.EMPTY_NODE)},MAX:{value:new Ze(Ua,mc)}});bA.__EMPTY_NODE=st.EMPTY_NODE;Jt.__childrenNodeConstructor=st;jO(mc);zO(mc);/**
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
 */const WO=!0;function Tn(s,e=null){if(s===null)return st.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(e=s[".priority"]),me(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const t=s;return new Jt(t,Tn(e))}if(!(s instanceof Array)&&WO){const t=[];let r=!1;if(mi(s,(h,p)=>{if(h.substring(0,1)!=="."){const m=Tn(p);m.isEmpty()||(r=r||!m.getPriority().isEmpty(),t.push(new Ze(h,m)))}}),t.length===0)return st.EMPTY_NODE;const u=Tf(t,UO,h=>h.name,Bm);if(r){const h=Tf(t,An.getCompare());return new st(u,Tn(e),new xs({".priority":h},{".priority":An}))}else return new st(u,Tn(e),xs.Default)}else{let t=st.EMPTY_NODE;return mi(s,(r,o)=>{if(Bs(s,r)&&r.substring(0,1)!=="."){const u=Tn(o);(u.isLeafNode()||!u.isEmpty())&&(t=t.updateImmediateChild(r,u))}}),t.updatePriority(Tn(e))}}BO(Tn);/**
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
 */class KO extends Gf{constructor(e){super(),this.indexPath_=e,me(!We(e)&&Xe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),o=this.extractChild(t.node),u=r.compareTo(o);return u===0?dl(e.name,t.name):u}makePost(e,t){const r=Tn(e),o=st.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ze(t,o)}maxPost(){const e=st.EMPTY_NODE.updateChild(this.indexPath_,mc);return new Ze(Ua,e)}toString(){return TA(this.indexPath_,0).join("/")}}/**
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
 */class QO extends Gf{compare(e,t){const r=e.node.compareTo(t.node);return r===0?dl(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ze.MIN}maxPost(){return Ze.MAX}makePost(e,t){const r=Tn(e);return new Ze(t,r)}toString(){return".value"}}const YO=new QO;/**
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
 */function $O(s){return{type:"value",snapshotNode:s}}function XO(s,e){return{type:"child_added",snapshotNode:e,childName:s}}function ZO(s,e){return{type:"child_removed",snapshotNode:e,childName:s}}function BT(s,e,t){return{type:"child_changed",snapshotNode:e,childName:s,oldSnap:t}}function JO(s,e){return{type:"child_moved",snapshotNode:e,childName:s}}/**
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
 */class zm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=An}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return me(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return me(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:el}hasEnd(){return this.endSet_}getIndexEndValue(){return me(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return me(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ua}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return me(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===An}copy(){const e=new zm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zT(s){const e={};if(s.isDefault())return e;let t;if(s.index_===An?t="$priority":s.index_===YO?t="$value":s.index_===Xo?t="$key":(me(s.index_ instanceof KO,"Unrecognized index type!"),t=s.index_.toString()),e.orderBy=cn(t),s.startSet_){const r=s.startAfterSet_?"startAfter":"startAt";e[r]=cn(s.indexStartValue_),s.startNameSet_&&(e[r]+=","+cn(s.indexStartName_))}if(s.endSet_){const r=s.endBeforeSet_?"endBefore":"endAt";e[r]=cn(s.indexEndValue_),s.endNameSet_&&(e[r]+=","+cn(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?e.limitToFirst=s.limit_:e.limitToLast=s.limit_),e}function HT(s){const e={};if(s.startSet_&&(e.sp=s.indexStartValue_,s.startNameSet_&&(e.sn=s.indexStartName_),e.sin=!s.startAfterSet_),s.endSet_&&(e.ep=s.indexEndValue_,s.endNameSet_&&(e.en=s.indexEndName_),e.ein=!s.endBeforeSet_),s.limitSet_){e.l=s.limit_;let t=s.viewFrom_;t===""&&(s.isViewFromLeft()?t="l":t="r"),e.vf=t}return s.index_!==An&&(e.i=s.index_.toString()),e}/**
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
 */class Sf extends yA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(me(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=pc("p:rest:"),this.listens_={}}listen(e,t,r,o){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const h=Sf.getListenId_(e,r),p={};this.listens_[h]=p;const m=zT(e._queryParams);this.restRequest_(u+".json",m,(g,T)=>{let S=T;if(g===404&&(S=null,g=null),g===null&&this.onDataUpdate_(u,S,!1,r),Jo(this.listens_,h)===p){let I;g?g===401?I="permission_denied":I="rest_error:"+g:I="ok",o(I,null)}})}unlisten(e,t){const r=Sf.getListenId_(e,t);delete this.listens_[r]}get(e){const t=zT(e._queryParams),r=e._path.toString(),o=new Em;return this.restRequest_(r+".json",t,(u,h)=>{let p=h;u===404&&(p=null,u=null),u===null?(this.onDataUpdate_(r,p,!1,null),o.resolve(p)):o.reject(new Error(p))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,u])=>{o&&o.accessToken&&(t.auth=o.accessToken),u&&u.token&&(t.ac=u.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hl(t);this.log_("Sending REST request for "+h);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(r&&p.readyState===4){this.log_("REST Response for "+h+" received. status:",p.status,"response:",p.responseText);let m=null;if(p.status>=200&&p.status<300){try{m=$u(p.responseText)}catch{Qn("Failed to parse JSON response for "+h+": "+p.responseText)}r(null,m)}else p.status!==401&&p.status!==404&&Qn("Got unsuccessful REST response for "+h+" Status: "+p.status),r(p.status);r=null}},p.open("GET",h,!0),p.send()})}}/**
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
 */class ex{constructor(){this.rootNode_=st.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Af(){return{value:null,children:new Map}}function DA(s,e,t){if(We(e))s.value=t,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(e,t);else{const r=Xe(e);s.children.has(r)||s.children.set(r,Af());const o=s.children.get(r);e=_t(e),DA(o,e,t)}}function K_(s,e,t){s.value!==null?t(e,s.value):tx(s,(r,o)=>{const u=new mt(e.toString()+"/"+r);K_(o,u,t)})}function tx(s,e){s.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class nx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&mi(this.last_,(r,o)=>{t[r]=t[r]-o}),this.last_=e,t}}/**
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
 */const FT=10*1e3,ix=30*1e3,sx=5*60*1e3;class rx{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new nx(e);const r=FT+(ix-FT)*Math.random();Fu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;mi(e,(o,u)=>{u>0&&Bs(this.statsToReport_,o)&&(t[o]=u,r=!0)}),r&&this.server_.reportStats(t),Fu(this.reportStats_.bind(this),Math.floor(Math.random()*2*sx))}}/**
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
 */var Ki;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ki||(Ki={}));function OA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kA(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
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
 */class wf{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Ki.ACK_USER_WRITE,this.source=OA()}operationForChild(e){if(We(this.path)){if(this.affectedTree.value!=null)return me(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new mt(e));return new wf(ut(),t,this.revert)}}else return me(Xe(this.path)===e,"operationForChild called for unrelated child."),new wf(_t(this.path),this.affectedTree,this.revert)}}/**
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
 */class ja{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Ki.OVERWRITE}operationForChild(e){return We(this.path)?new ja(this.source,ut(),this.snap.getImmediateChild(e)):new ja(this.source,_t(this.path),this.snap)}}/**
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
 */class tc{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Ki.MERGE}operationForChild(e){if(We(this.path)){const t=this.children.subtree(new mt(e));return t.isEmpty()?null:t.value?new ja(this.source,ut(),t.value):new tc(this.source,ut(),t)}else return me(Xe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tc(this.source,_t(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Hm{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(We(e))return this.isFullyInitialized()&&!this.filtered_;const t=Xe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function ax(s,e,t,r){const o=[],u=[];return e.forEach(h=>{h.type==="child_changed"&&s.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&u.push(JO(h.childName,h.snapshotNode))}),Iu(s,o,"child_removed",e,r,t),Iu(s,o,"child_added",e,r,t),Iu(s,o,"child_moved",u,r,t),Iu(s,o,"child_changed",e,r,t),Iu(s,o,"value",e,r,t),o}function Iu(s,e,t,r,o,u){const h=r.filter(p=>p.type===t);h.sort((p,m)=>lx(s,p,m)),h.forEach(p=>{const m=ox(s,p,u);o.forEach(g=>{g.respondsTo(p.type)&&e.push(g.createEvent(m,s.query_))})})}function ox(s,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,s.index_)),e}function lx(s,e,t){if(e.childName==null||t.childName==null)throw cl("Should only compare child_ events.");const r=new Ze(e.childName,e.snapshotNode),o=new Ze(t.childName,t.snapshotNode);return s.index_.compare(r,o)}/**
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
 */function MA(s,e){return{eventCache:s,serverCache:e}}function qu(s,e,t,r){return MA(new Hm(e,t,r),s.serverCache)}function PA(s,e,t,r){return MA(s.eventCache,new Hm(e,t,r))}function Q_(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function Ba(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
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
 */let R_;const ux=()=>(R_||(R_=new Wi(QD)),R_);class pt{static fromObject(e){let t=new pt(null);return mi(e,(r,o)=>{t=t.set(new mt(r),o)}),t}constructor(e,t=ux()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ut(),value:this.value};if(We(e))return null;{const r=Xe(e),o=this.children.get(r);if(o!==null){const u=o.findRootMostMatchingPathAndValue(_t(e),t);return u!=null?{path:tn(new mt(r),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(We(e))return this;{const t=Xe(e),r=this.children.get(t);return r!==null?r.subtree(_t(e)):new pt(null)}}set(e,t){if(We(e))return new pt(t,this.children);{const r=Xe(e),u=(this.children.get(r)||new pt(null)).set(_t(e),t),h=this.children.insert(r,u);return new pt(this.value,h)}}remove(e){if(We(e))return this.children.isEmpty()?new pt(null):new pt(null,this.children);{const t=Xe(e),r=this.children.get(t);if(r){const o=r.remove(_t(e));let u;return o.isEmpty()?u=this.children.remove(t):u=this.children.insert(t,o),this.value===null&&u.isEmpty()?new pt(null):new pt(this.value,u)}else return this}}get(e){if(We(e))return this.value;{const t=Xe(e),r=this.children.get(t);return r?r.get(_t(e)):null}}setTree(e,t){if(We(e))return t;{const r=Xe(e),u=(this.children.get(r)||new pt(null)).setTree(_t(e),t);let h;return u.isEmpty()?h=this.children.remove(r):h=this.children.insert(r,u),new pt(this.value,h)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((o,u)=>{r[o]=u.fold_(tn(e,o),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,r){const o=this.value?r(t,this.value):!1;if(o)return o;if(We(e))return null;{const u=Xe(e),h=this.children.get(u);return h?h.findOnPath_(_t(e),tn(t,u),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,r){if(We(e))return this;{this.value&&r(t,this.value);const o=Xe(e),u=this.children.get(o);return u?u.foreachOnPath_(_t(e),tn(t,o),r):new pt(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal((r,o)=>{o.foreach_(tn(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class Ri{constructor(e){this.writeTree_=e}static empty(){return new Ri(new pt(null))}}function Gu(s,e,t){if(We(e))return new Ri(new pt(t));{const r=s.writeTree_.findRootMostValueAndPath(e);if(r!=null){const o=r.path;let u=r.value;const h=pi(o,e);return u=u.updateChild(h,t),new Ri(s.writeTree_.set(o,u))}else{const o=new pt(t),u=s.writeTree_.setTree(e,o);return new Ri(u)}}}function qT(s,e,t){let r=s;return mi(t,(o,u)=>{r=Gu(r,tn(e,o),u)}),r}function GT(s,e){if(We(e))return Ri.empty();{const t=s.writeTree_.setTree(e,new pt(null));return new Ri(t)}}function Y_(s,e){return Ga(s,e)!=null}function Ga(s,e){const t=s.writeTree_.findRootMostValueAndPath(e);return t!=null?s.writeTree_.get(t.path).getChild(pi(t.path,e)):null}function WT(s){const e=[],t=s.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(An,(r,o)=>{e.push(new Ze(r,o))}):s.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&e.push(new Ze(r,o.value))}),e}function Or(s,e){if(We(e))return s;{const t=Ga(s,e);return t!=null?new Ri(new pt(t)):new Ri(s.writeTree_.subtree(e))}}function $_(s){return s.writeTree_.isEmpty()}function tl(s,e){return VA(ut(),s.writeTree_,e)}function VA(s,e,t){if(e.value!=null)return t.updateChild(s,e.value);{let r=null;return e.children.inorderTraversal((o,u)=>{o===".priority"?(me(u.value!==null,"Priority writes must always be leaf nodes"),r=u.value):t=VA(tn(s,o),u,t)}),!t.getChild(s).isEmpty()&&r!==null&&(t=t.updateChild(tn(s,".priority"),r)),t}}/**
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
 */function LA(s,e){return HA(e,s)}function cx(s,e,t,r,o){me(r>s.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),s.allWrites.push({path:e,snap:t,writeId:r,visible:o}),o&&(s.visibleWrites=Gu(s.visibleWrites,e,t)),s.lastWriteId=r}function hx(s,e){for(let t=0;t<s.allWrites.length;t++){const r=s.allWrites[t];if(r.writeId===e)return r}return null}function fx(s,e){const t=s.allWrites.findIndex(p=>p.writeId===e);me(t>=0,"removeWrite called with nonexistent writeId.");const r=s.allWrites[t];s.allWrites.splice(t,1);let o=r.visible,u=!1,h=s.allWrites.length-1;for(;o&&h>=0;){const p=s.allWrites[h];p.visible&&(h>=t&&dx(p,r.path)?o=!1:bi(r.path,p.path)&&(u=!0)),h--}if(o){if(u)return px(s),!0;if(r.snap)s.visibleWrites=GT(s.visibleWrites,r.path);else{const p=r.children;mi(p,m=>{s.visibleWrites=GT(s.visibleWrites,tn(r.path,m))})}return!0}else return!1}function dx(s,e){if(s.snap)return bi(s.path,e);for(const t in s.children)if(s.children.hasOwnProperty(t)&&bi(tn(s.path,t),e))return!0;return!1}function px(s){s.visibleWrites=UA(s.allWrites,_x,ut()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function _x(s){return s.visible}function UA(s,e,t){let r=Ri.empty();for(let o=0;o<s.length;++o){const u=s[o];if(e(u)){const h=u.path;let p;if(u.snap)bi(t,h)?(p=pi(t,h),r=Gu(r,p,u.snap)):bi(h,t)&&(p=pi(h,t),r=Gu(r,ut(),u.snap.getChild(p)));else if(u.children){if(bi(t,h))p=pi(t,h),r=qT(r,p,u.children);else if(bi(h,t))if(p=pi(h,t),We(p))r=qT(r,ut(),u.children);else{const m=Jo(u.children,Xe(p));if(m){const g=m.getChild(_t(p));r=Gu(r,ut(),g)}}}else throw cl("WriteRecord should have .snap or .children")}}return r}function jA(s,e,t,r,o){if(!r&&!o){const u=Ga(s.visibleWrites,e);if(u!=null)return u;{const h=Or(s.visibleWrites,e);if($_(h))return t;if(t==null&&!Y_(h,ut()))return null;{const p=t||st.EMPTY_NODE;return tl(h,p)}}}else{const u=Or(s.visibleWrites,e);if(!o&&$_(u))return t;if(!o&&t==null&&!Y_(u,ut()))return null;{const h=function(g){return(g.visible||o)&&(!r||!~r.indexOf(g.writeId))&&(bi(g.path,e)||bi(e,g.path))},p=UA(s.allWrites,h,e),m=t||st.EMPTY_NODE;return tl(p,m)}}}function mx(s,e,t){let r=st.EMPTY_NODE;const o=Ga(s.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(An,(u,h)=>{r=r.updateImmediateChild(u,h)}),r;if(t){const u=Or(s.visibleWrites,e);return t.forEachChild(An,(h,p)=>{const m=tl(Or(u,new mt(h)),p);r=r.updateImmediateChild(h,m)}),WT(u).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}else{const u=Or(s.visibleWrites,e);return WT(u).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}}function gx(s,e,t,r,o){me(r||o,"Either existingEventSnap or existingServerSnap must exist");const u=tn(e,t);if(Y_(s.visibleWrites,u))return null;{const h=Or(s.visibleWrites,u);return $_(h)?o.getChild(t):tl(h,o.getChild(t))}}function yx(s,e,t,r){const o=tn(e,t),u=Ga(s.visibleWrites,o);if(u!=null)return u;if(r.isCompleteForChild(t)){const h=Or(s.visibleWrites,o);return tl(h,r.getNode().getImmediateChild(t))}else return null}function vx(s,e){return Ga(s.visibleWrites,e)}function Ex(s,e,t,r,o,u,h){let p;const m=Or(s.visibleWrites,e),g=Ga(m,ut());if(g!=null)p=g;else if(t!=null)p=tl(m,t);else return[];if(p=p.withIndex(h),!p.isEmpty()&&!p.isLeafNode()){const T=[],S=h.getCompare(),I=u?p.getReverseIteratorFrom(r,h):p.getIteratorFrom(r,h);let V=I.getNext();for(;V&&T.length<o;)S(V,r)!==0&&T.push(V),V=I.getNext();return T}else return[]}function Tx(){return{visibleWrites:Ri.empty(),allWrites:[],lastWriteId:-1}}function X_(s,e,t,r){return jA(s.writeTree,s.treePath,e,t,r)}function BA(s,e){return mx(s.writeTree,s.treePath,e)}function KT(s,e,t,r){return gx(s.writeTree,s.treePath,e,t,r)}function bf(s,e){return vx(s.writeTree,tn(s.treePath,e))}function Sx(s,e,t,r,o,u){return Ex(s.writeTree,s.treePath,e,t,r,o,u)}function Fm(s,e,t){return yx(s.writeTree,s.treePath,e,t)}function zA(s,e){return HA(tn(s.treePath,e),s.writeTree)}function HA(s,e){return{treePath:s,writeTree:e}}/**
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
 */class Ax{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;me(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),me(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const u=o.type;if(t==="child_added"&&u==="child_removed")this.changeMap.set(r,BT(r,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&u==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&u==="child_changed")this.changeMap.set(r,ZO(r,o.oldSnap));else if(t==="child_changed"&&u==="child_added")this.changeMap.set(r,XO(r,e.snapshotNode));else if(t==="child_changed"&&u==="child_changed")this.changeMap.set(r,BT(r,e.snapshotNode,o.oldSnap));else throw cl("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class wx{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const FA=new wx;class qm{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Hm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fm(this.writes_,e,r)}}getChildAfterChild(e,t,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ba(this.viewCache_),u=Sx(this.writes_,o,t,1,r,e);return u.length===0?null:u[0]}}function bx(s,e){me(e.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),me(e.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function Cx(s,e,t,r,o){const u=new Ax;let h,p;if(t.type===Ki.OVERWRITE){const g=t;g.source.fromUser?h=Z_(s,e,g.path,g.snap,r,o,u):(me(g.source.fromServer,"Unknown source."),p=g.source.tagged||e.serverCache.isFiltered()&&!We(g.path),h=Cf(s,e,g.path,g.snap,r,o,p,u))}else if(t.type===Ki.MERGE){const g=t;g.source.fromUser?h=Ix(s,e,g.path,g.children,r,o,u):(me(g.source.fromServer,"Unknown source."),p=g.source.tagged||e.serverCache.isFiltered(),h=J_(s,e,g.path,g.children,r,o,p,u))}else if(t.type===Ki.ACK_USER_WRITE){const g=t;g.revert?h=Ox(s,e,g.path,r,o,u):h=Nx(s,e,g.path,g.affectedTree,r,o,u)}else if(t.type===Ki.LISTEN_COMPLETE)h=Dx(s,e,t.path,r,u);else throw cl("Unknown operation type: "+t.type);const m=u.getChanges();return Rx(e,h,m),{viewCache:h,changes:m}}function Rx(s,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),u=Q_(s);(t.length>0||!s.eventCache.isFullyInitialized()||o&&!r.getNode().equals(u)||!r.getNode().getPriority().equals(u.getPriority()))&&t.push($O(Q_(e)))}}function qA(s,e,t,r,o,u){const h=e.eventCache;if(bf(r,t)!=null)return e;{let p,m;if(We(t))if(me(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ba(e),T=g instanceof st?g:st.EMPTY_NODE,S=BA(r,T);p=s.filter.updateFullNode(e.eventCache.getNode(),S,u)}else{const g=X_(r,Ba(e));p=s.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=Xe(t);if(g===".priority"){me(Vr(t)===1,"Can't have a priority with additional path components");const T=h.getNode();m=e.serverCache.getNode();const S=KT(r,t,T,m);S!=null?p=s.filter.updatePriority(T,S):p=h.getNode()}else{const T=_t(t);let S;if(h.isCompleteForChild(g)){m=e.serverCache.getNode();const I=KT(r,t,h.getNode(),m);I!=null?S=h.getNode().getImmediateChild(g).updateChild(T,I):S=h.getNode().getImmediateChild(g)}else S=Fm(r,g,e.serverCache);S!=null?p=s.filter.updateChild(h.getNode(),g,S,T,o,u):p=h.getNode()}}return qu(e,p,h.isFullyInitialized()||We(t),s.filter.filtersNodes())}}function Cf(s,e,t,r,o,u,h,p){const m=e.serverCache;let g;const T=h?s.filter:s.filter.getIndexedFilter();if(We(t))g=T.updateFullNode(m.getNode(),r,null);else if(T.filtersNodes()&&!m.isFiltered()){const V=m.getNode().updateChild(t,r);g=T.updateFullNode(m.getNode(),V,null)}else{const V=Xe(t);if(!m.isCompleteForPath(t)&&Vr(t)>1)return e;const F=_t(t),G=m.getNode().getImmediateChild(V).updateChild(F,r);V===".priority"?g=T.updatePriority(m.getNode(),G):g=T.updateChild(m.getNode(),V,G,F,FA,null)}const S=PA(e,g,m.isFullyInitialized()||We(t),T.filtersNodes()),I=new qm(o,S,u);return qA(s,S,t,o,I,p)}function Z_(s,e,t,r,o,u,h){const p=e.eventCache;let m,g;const T=new qm(o,e,u);if(We(t))g=s.filter.updateFullNode(e.eventCache.getNode(),r,h),m=qu(e,g,!0,s.filter.filtersNodes());else{const S=Xe(t);if(S===".priority")g=s.filter.updatePriority(e.eventCache.getNode(),r),m=qu(e,g,p.isFullyInitialized(),p.isFiltered());else{const I=_t(t),V=p.getNode().getImmediateChild(S);let F;if(We(I))F=r;else{const J=T.getCompleteChild(S);J!=null?EA(I)===".priority"&&J.getChild(SA(I)).isEmpty()?F=J:F=J.updateChild(I,r):F=st.EMPTY_NODE}if(V.equals(F))m=e;else{const J=s.filter.updateChild(p.getNode(),S,F,I,T,h);m=qu(e,J,p.isFullyInitialized(),s.filter.filtersNodes())}}}return m}function QT(s,e){return s.eventCache.isCompleteForChild(e)}function Ix(s,e,t,r,o,u,h){let p=e;return r.foreach((m,g)=>{const T=tn(t,m);QT(e,Xe(T))&&(p=Z_(s,p,T,g,o,u,h))}),r.foreach((m,g)=>{const T=tn(t,m);QT(e,Xe(T))||(p=Z_(s,p,T,g,o,u,h))}),p}function YT(s,e,t){return t.foreach((r,o)=>{e=e.updateChild(r,o)}),e}function J_(s,e,t,r,o,u,h,p){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;We(t)?g=r:g=new pt(null).setTree(t,r);const T=e.serverCache.getNode();return g.children.inorderTraversal((S,I)=>{if(T.hasChild(S)){const V=e.serverCache.getNode().getImmediateChild(S),F=YT(s,V,I);m=Cf(s,m,new mt(S),F,o,u,h,p)}}),g.children.inorderTraversal((S,I)=>{const V=!e.serverCache.isCompleteForChild(S)&&I.value===null;if(!T.hasChild(S)&&!V){const F=e.serverCache.getNode().getImmediateChild(S),J=YT(s,F,I);m=Cf(s,m,new mt(S),J,o,u,h,p)}}),m}function Nx(s,e,t,r,o,u,h){if(bf(o,t)!=null)return e;const p=e.serverCache.isFiltered(),m=e.serverCache;if(r.value!=null){if(We(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return Cf(s,e,t,m.getNode().getChild(t),o,u,p,h);if(We(t)){let g=new pt(null);return m.getNode().forEachChild(Xo,(T,S)=>{g=g.set(new mt(T),S)}),J_(s,e,t,g,o,u,p,h)}else return e}else{let g=new pt(null);return r.foreach((T,S)=>{const I=tn(t,T);m.isCompleteForPath(I)&&(g=g.set(T,m.getNode().getChild(I)))}),J_(s,e,t,g,o,u,p,h)}}function Dx(s,e,t,r,o){const u=e.serverCache,h=PA(e,u.getNode(),u.isFullyInitialized()||We(t),u.isFiltered());return qA(s,h,t,r,FA,o)}function Ox(s,e,t,r,o,u){let h;if(bf(r,t)!=null)return e;{const p=new qm(r,e,o),m=e.eventCache.getNode();let g;if(We(t)||Xe(t)===".priority"){let T;if(e.serverCache.isFullyInitialized())T=X_(r,Ba(e));else{const S=e.serverCache.getNode();me(S instanceof st,"serverChildren would be complete if leaf node"),T=BA(r,S)}T=T,g=s.filter.updateFullNode(m,T,u)}else{const T=Xe(t);let S=Fm(r,T,e.serverCache);S==null&&e.serverCache.isCompleteForChild(T)&&(S=m.getImmediateChild(T)),S!=null?g=s.filter.updateChild(m,T,S,_t(t),p,u):e.eventCache.getNode().hasChild(T)?g=s.filter.updateChild(m,T,st.EMPTY_NODE,_t(t),p,u):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(h=X_(r,Ba(e)),h.isLeafNode()&&(g=s.filter.updateFullNode(g,h,u)))}return h=e.serverCache.isFullyInitialized()||bf(r,ut())!=null,qu(e,g,h,s.filter.filtersNodes())}}function xx(s,e){const t=Ba(s.viewCache_);return t&&(s.query._queryParams.loadsAllData()||!We(e)&&!t.getImmediateChild(Xe(e)).isEmpty())?t.getChild(e):null}function $T(s,e,t,r){e.type===Ki.MERGE&&e.source.queryId!==null&&(me(Ba(s.viewCache_),"We should always have a full cache before handling merges"),me(Q_(s.viewCache_),"Missing event cache, even though we have a server cache"));const o=s.viewCache_,u=Cx(s.processor_,o,e,t,r);return bx(s.processor_,u.viewCache),me(u.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=u.viewCache,kx(s,u.changes,u.viewCache.eventCache.getNode())}function kx(s,e,t,r){const o=s.eventRegistrations_;return ax(s.eventGenerator_,e,t,o)}/**
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
 */let XT;function Mx(s){me(!XT,"__referenceConstructor has already been defined"),XT=s}function Gm(s,e,t,r){const o=e.source.queryId;if(o!==null){const u=s.views.get(o);return me(u!=null,"SyncTree gave us an op for an invalid query."),$T(u,e,t,r)}else{let u=[];for(const h of s.views.values())u=u.concat($T(h,e,t,r));return u}}function Wm(s,e){let t=null;for(const r of s.views.values())t=t||xx(r,e);return t}/**
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
 */let ZT;function Px(s){me(!ZT,"__referenceConstructor has already been defined"),ZT=s}class JT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pt(null),this.pendingWriteTree_=Tx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vx(s,e,t,r,o){return cx(s.pendingWriteTree_,e,t,r,o),o?Kf(s,new ja(OA(),e,t)):[]}function Wo(s,e,t=!1){const r=hx(s.pendingWriteTree_,e);if(fx(s.pendingWriteTree_,e)){let u=new pt(null);return r.snap!=null?u=u.set(ut(),!0):mi(r.children,h=>{u=u.set(new mt(h),!0)}),Kf(s,new wf(r.path,u,t))}else return[]}function Wf(s,e,t){return Kf(s,new ja(xA(),e,t))}function Lx(s,e,t){const r=pt.fromObject(t);return Kf(s,new tc(xA(),e,r))}function Ux(s,e,t,r){const o=QA(s,r);if(o!=null){const u=YA(o),h=u.path,p=u.queryId,m=pi(h,e),g=new ja(kA(p),m,t);return $A(s,h,g)}else return[]}function jx(s,e,t,r){const o=QA(s,r);if(o){const u=YA(o),h=u.path,p=u.queryId,m=pi(h,e),g=pt.fromObject(t),T=new tc(kA(p),m,g);return $A(s,h,T)}else return[]}function GA(s,e,t){const o=s.pendingWriteTree_,u=s.syncPointTree_.findOnPath(e,(h,p)=>{const m=pi(h,e),g=Wm(p,m);if(g)return g});return jA(o,e,u,t,!0)}function Kf(s,e){return WA(e,s.syncPointTree_,null,LA(s.pendingWriteTree_,ut()))}function WA(s,e,t,r){if(We(s.path))return KA(s,e,t,r);{const o=e.get(ut());t==null&&o!=null&&(t=Wm(o,ut()));let u=[];const h=Xe(s.path),p=s.operationForChild(h),m=e.children.get(h);if(m&&p){const g=t?t.getImmediateChild(h):null,T=zA(r,h);u=u.concat(WA(p,m,g,T))}return o&&(u=u.concat(Gm(o,s,r,t))),u}}function KA(s,e,t,r){const o=e.get(ut());t==null&&o!=null&&(t=Wm(o,ut()));let u=[];return e.children.inorderTraversal((h,p)=>{const m=t?t.getImmediateChild(h):null,g=zA(r,h),T=s.operationForChild(h);T&&(u=u.concat(KA(T,p,m,g)))}),o&&(u=u.concat(Gm(o,s,r,t))),u}function QA(s,e){return s.tagToQueryMap.get(e)}function YA(s){const e=s.indexOf("$");return me(e!==-1&&e<s.length-1,"Bad queryKey."),{queryId:s.substr(e+1),path:new mt(s.substr(0,e))}}function $A(s,e,t){const r=s.syncPointTree_.get(e);me(r,"Missing sync point for query tag that we're tracking");const o=LA(s.pendingWriteTree_,e);return Gm(r,t,o,null)}/**
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
 */class Km{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Km(t)}node(){return this.node_}}class Qm{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=tn(this.path_,e);return new Qm(this.syncTree_,t)}node(){return GA(this.syncTree_,this.path_)}}const Bx=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},eS=function(s,e,t){if(!s||typeof s!="object")return s;if(me(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return zx(s[".sv"],e,t);if(typeof s[".sv"]=="object")return Hx(s[".sv"],e);me(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},zx=function(s,e,t){switch(s){case"timestamp":return t.timestamp;default:me(!1,"Unexpected server value: "+s)}},Hx=function(s,e,t){s.hasOwnProperty("increment")||me(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const r=s.increment;typeof r!="number"&&me(!1,"Unexpected increment value: "+r);const o=e.node();if(me(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const h=o.getValue();return typeof h!="number"?r:h+r},Fx=function(s,e,t,r){return Ym(e,new Qm(t,s),r)},qx=function(s,e,t){return Ym(s,new Km(e),t)};function Ym(s,e,t){const r=s.getPriority().val(),o=eS(r,e.getImmediateChild(".priority"),t);let u;if(s.isLeafNode()){const h=s,p=eS(h.getValue(),e,t);return p!==h.getValue()||o!==h.getPriority().val()?new Jt(p,Tn(o)):s}else{const h=s;return u=h,o!==h.getPriority().val()&&(u=u.updatePriority(new Jt(o))),h.forEachChild(An,(p,m)=>{const g=Ym(m,e.getImmediateChild(p),t);g!==m&&(u=u.updateImmediateChild(p,g))}),u}}/**
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
 */class $m{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Xm(s,e){let t=e instanceof mt?e:new mt(e),r=s,o=Xe(t);for(;o!==null;){const u=Jo(r.node.children,o)||{children:{},childCount:0};r=new $m(o,r,u),t=_t(t),o=Xe(t)}return r}function pl(s){return s.node.value}function XA(s,e){s.node.value=e,em(s)}function ZA(s){return s.node.childCount>0}function Gx(s){return pl(s)===void 0&&!ZA(s)}function Qf(s,e){mi(s.node.children,(t,r)=>{e(new $m(t,s,r))})}function JA(s,e,t,r){t&&e(s),Qf(s,o=>{JA(o,e,!0)})}function Wx(s,e,t){let r=s.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function gc(s){return new mt(s.parent===null?s.name:gc(s.parent)+"/"+s.name)}function em(s){s.parent!==null&&Kx(s.parent,s.name,s)}function Kx(s,e,t){const r=Gx(t),o=Bs(s.node.children,e);r&&o?(delete s.node.children[e],s.node.childCount--,em(s)):!r&&!o&&(s.node.children[e]=t.node,s.node.childCount++,em(s))}/**
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
 */const Qx=/[\[\].#$\/\u0000-\u001F\u007F]/,Yx=/[\[\].#$\u0000-\u001F\u007F]/,I_=10*1024*1024,ew=function(s){return typeof s=="string"&&s.length!==0&&!Qx.test(s)},$x=function(s){return typeof s=="string"&&s.length!==0&&!Yx.test(s)},Xx=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),$x(s)},tw=function(s,e,t){const r=t instanceof mt?new DO(t,s):t;if(e===void 0)throw new Error(s+"contains undefined "+Da(r));if(typeof e=="function")throw new Error(s+"contains a function "+Da(r)+" with contents = "+e.toString());if(eA(e))throw new Error(s+"contains "+e.toString()+" "+Da(r));if(typeof e=="string"&&e.length>I_/3&&Bf(e)>I_)throw new Error(s+"contains a string greater than "+I_+" utf8 bytes "+Da(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,u=!1;if(mi(e,(h,p)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(u=!0,!ew(h)))throw new Error(s+" contains an invalid key ("+h+") "+Da(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);OO(r,h),tw(s,p,r),xO(r)}),o&&u)throw new Error(s+' contains ".value" child '+Da(r)+" in addition to actual children.")}},Zx=function(s,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ew(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Xx(t))throw new Error(pI(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Jx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ek(s,e){let t=null;for(let r=0;r<e.length;r++){const o=e[r],u=o.getPath();t!==null&&!AA(u,t.path)&&(s.eventLists_.push(t),t=null),t===null&&(t={events:[],path:u}),t.events.push(o)}t&&s.eventLists_.push(t)}function Wa(s,e,t){ek(s,t),tk(s,r=>bi(r,e)||bi(e,r))}function tk(s,e){s.recursionDepth_++;let t=!0;for(let r=0;r<s.eventLists_.length;r++){const o=s.eventLists_[r];if(o){const u=o.path;e(u)?(nk(s.eventLists_[r]),s.eventLists_[r]=null):t=!1}}t&&(s.eventLists_=[]),s.recursionDepth_--}function nk(s){for(let e=0;e<s.events.length;e++){const t=s.events[e];if(t!==null){s.events[e]=null;const r=t.getEventRunner();Hu&&En("event: "+t.toString()),_c(r)}}}/**
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
 */const ik="repo_interrupt",sk=25;class rk{constructor(e,t,r,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Jx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Af(),this.transactionQueueTree_=new $m,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ak(s,e,t){if(s.stats_=Lm(s.repoInfo_),s.forceRestClient_||eO())s.server_=new Sf(s.repoInfo_,(r,o,u,h)=>{tS(s,r,o,u,h)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>nS(s,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{cn(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}s.persistentConnection_=new Ms(s.repoInfo_,e,(r,o,u,h)=>{tS(s,r,o,u,h)},r=>{nS(s,r)},r=>{lk(s,r)},s.authTokenProvider_,s.appCheckProvider_,t),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(r=>{s.server_.refreshAuthToken(r)}),s.appCheckProvider_.addTokenChangeListener(r=>{s.server_.refreshAppCheckToken(r.token)}),s.statsReporter_=aO(s.repoInfo_,()=>new rx(s.stats_,s.server_)),s.infoData_=new ex,s.infoSyncTree_=new JT({startListening:(r,o,u,h)=>{let p=[];const m=s.infoData_.getNode(r._path);return m.isEmpty()||(p=Wf(s.infoSyncTree_,r._path,m),setTimeout(()=>{h("ok")},0)),p},stopListening:()=>{}}),Zm(s,"connected",!1),s.serverSyncTree_=new JT({startListening:(r,o,u,h)=>(s.server_.listen(r,u,o,(p,m)=>{const g=h(p,m);Wa(s.eventQueue_,r._path,g)}),[]),stopListening:(r,o)=>{s.server_.unlisten(r,o)}})}function ok(s){const t=s.infoData_.getNode(new mt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function nw(s){return Bx({timestamp:ok(s)})}function tS(s,e,t,r,o){s.dataUpdateCount++;const u=new mt(e);t=s.interceptServerDataCallback_?s.interceptServerDataCallback_(e,t):t;let h=[];if(o)if(r){const m=ff(t,g=>Tn(g));h=jx(s.serverSyncTree_,u,m,o)}else{const m=Tn(t);h=Ux(s.serverSyncTree_,u,m,o)}else if(r){const m=ff(t,g=>Tn(g));h=Lx(s.serverSyncTree_,u,m)}else{const m=Tn(t);h=Wf(s.serverSyncTree_,u,m)}let p=u;h.length>0&&(p=eg(s,u)),Wa(s.eventQueue_,p,h)}function nS(s,e){Zm(s,"connected",e),e===!1&&ck(s)}function lk(s,e){mi(e,(t,r)=>{Zm(s,t,r)})}function Zm(s,e,t){const r=new mt("/.info/"+e),o=Tn(t);s.infoData_.updateSnapshot(r,o);const u=Wf(s.infoSyncTree_,r,o);Wa(s.eventQueue_,r,u)}function uk(s){return s.nextWriteId_++}function ck(s){iw(s,"onDisconnectEvents");const e=nw(s),t=Af();K_(s.onDisconnect_,ut(),(o,u)=>{const h=Fx(o,u,s.serverSyncTree_,e);DA(t,o,h)});let r=[];K_(t,ut(),(o,u)=>{r=r.concat(Wf(s.serverSyncTree_,o,u));const h=pk(s,o);eg(s,h)}),s.onDisconnect_=Af(),Wa(s.eventQueue_,ut(),r)}function hk(s){s.persistentConnection_&&s.persistentConnection_.interrupt(ik)}function iw(s,...e){let t="";s.persistentConnection_&&(t=s.persistentConnection_.id+":"),En(t,...e)}function sw(s,e,t){return GA(s.serverSyncTree_,e,t)||st.EMPTY_NODE}function Jm(s,e=s.transactionQueueTree_){if(e||Yf(s,e),pl(e)){const t=aw(s,e);me(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&fk(s,gc(e),t)}else ZA(e)&&Qf(e,t=>{Jm(s,t)})}function fk(s,e,t){const r=t.map(g=>g.currentWriteId),o=sw(s,e,r);let u=o;const h=o.hash();for(let g=0;g<t.length;g++){const T=t[g];me(T.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),T.status=1,T.retryCount++;const S=pi(e,T.path);u=u.updateChild(S,T.currentOutputSnapshotRaw)}const p=u.val(!0),m=e;s.server_.put(m.toString(),p,g=>{iw(s,"transaction put response",{path:m.toString(),status:g});let T=[];if(g==="ok"){const S=[];for(let I=0;I<t.length;I++)t[I].status=2,T=T.concat(Wo(s.serverSyncTree_,t[I].currentWriteId)),t[I].onComplete&&S.push(()=>t[I].onComplete(null,!0,t[I].currentOutputSnapshotResolved)),t[I].unwatcher();Yf(s,Xm(s.transactionQueueTree_,e)),Jm(s,s.transactionQueueTree_),Wa(s.eventQueue_,e,T);for(let I=0;I<S.length;I++)_c(S[I])}else{if(g==="datastale")for(let S=0;S<t.length;S++)t[S].status===3?t[S].status=4:t[S].status=0;else{Qn("transaction at "+m.toString()+" failed: "+g);for(let S=0;S<t.length;S++)t[S].status=4,t[S].abortReason=g}eg(s,e)}},h)}function eg(s,e){const t=rw(s,e),r=gc(t),o=aw(s,t);return dk(s,o,r),r}function dk(s,e,t){if(e.length===0)return;const r=[];let o=[];const h=e.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<e.length;p++){const m=e[p],g=pi(t,m.path);let T=!1,S;if(me(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)T=!0,S=m.abortReason,o=o.concat(Wo(s.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=sk)T=!0,S="maxretry",o=o.concat(Wo(s.serverSyncTree_,m.currentWriteId,!0));else{const I=sw(s,m.path,h);m.currentInputSnapshot=I;const V=e[p].update(I.val());if(V!==void 0){tw("transaction failed: Data returned ",V,m.path);let F=Tn(V);typeof V=="object"&&V!=null&&Bs(V,".priority")||(F=F.updatePriority(I.getPriority()));const G=m.currentWriteId,Y=nw(s),ne=qx(F,I,Y);m.currentOutputSnapshotRaw=F,m.currentOutputSnapshotResolved=ne,m.currentWriteId=uk(s),h.splice(h.indexOf(G),1),o=o.concat(Vx(s.serverSyncTree_,m.path,ne,m.currentWriteId,m.applyLocally)),o=o.concat(Wo(s.serverSyncTree_,G,!0))}else T=!0,S="nodata",o=o.concat(Wo(s.serverSyncTree_,m.currentWriteId,!0))}Wa(s.eventQueue_,t,o),o=[],T&&(e[p].status=2,function(I){setTimeout(I,Math.floor(0))}(e[p].unwatcher),e[p].onComplete&&(S==="nodata"?r.push(()=>e[p].onComplete(null,!1,e[p].currentInputSnapshot)):r.push(()=>e[p].onComplete(new Error(S),!1,null))))}Yf(s,s.transactionQueueTree_);for(let p=0;p<r.length;p++)_c(r[p]);Jm(s,s.transactionQueueTree_)}function rw(s,e){let t,r=s.transactionQueueTree_;for(t=Xe(e);t!==null&&pl(r)===void 0;)r=Xm(r,t),e=_t(e),t=Xe(e);return r}function aw(s,e){const t=[];return ow(s,e,t),t.sort((r,o)=>r.order-o.order),t}function ow(s,e,t){const r=pl(e);if(r)for(let o=0;o<r.length;o++)t.push(r[o]);Qf(e,o=>{ow(s,o,t)})}function Yf(s,e){const t=pl(e);if(t){let r=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[r]=t[o],r++);t.length=r,XA(e,t.length>0?t:void 0)}Qf(e,r=>{Yf(s,r)})}function pk(s,e){const t=gc(rw(s,e)),r=Xm(s.transactionQueueTree_,e);return Wx(r,o=>{N_(s,o)}),N_(s,r),JA(r,o=>{N_(s,o)}),t}function N_(s,e){const t=pl(e);if(t){const r=[];let o=[],u=-1;for(let h=0;h<t.length;h++)t[h].status===3||(t[h].status===1?(me(u===h-1,"All SENT items should be at beginning of queue."),u=h,t[h].status=3,t[h].abortReason="set"):(me(t[h].status===0,"Unexpected transaction status in abort"),t[h].unwatcher(),o=o.concat(Wo(s.serverSyncTree_,t[h].currentWriteId,!0)),t[h].onComplete&&r.push(t[h].onComplete.bind(null,new Error("set"),!1,null))));u===-1?XA(e,void 0):t.length=u+1,Wa(s.eventQueue_,gc(e),o);for(let h=0;h<r.length;h++)_c(r[h])}}/**
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
 */function _k(s){let e="";const t=s.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let o=t[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function mk(s){const e={};s.charAt(0)==="?"&&(s=s.substring(1));for(const t of s.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Qn(`Invalid query segment '${t}' in query '${s}'`)}return e}const iS=function(s,e){const t=gk(s),r=t.namespace;t.domain==="firebase.com"&&La(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&La("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||WD();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new iO(t.host,t.secure,r,o,e,"",r!==t.subdomain),path:new mt(t.pathString)}},gk=function(s){let e="",t="",r="",o="",u="",h=!0,p="https",m=443;if(typeof s=="string"){let g=s.indexOf("//");g>=0&&(p=s.substring(0,g-1),s=s.substring(g+2));let T=s.indexOf("/");T===-1&&(T=s.length);let S=s.indexOf("?");S===-1&&(S=s.length),e=s.substring(0,Math.min(T,S)),T<S&&(o=_k(s.substring(T,S)));const I=mk(s.substring(Math.min(s.length,S)));g=e.indexOf(":"),g>=0?(h=p==="https"||p==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const V=e.slice(0,g);if(V.toLowerCase()==="localhost")t="localhost";else if(V.split(".").length<=2)t=V;else{const F=e.indexOf(".");r=e.substring(0,F).toLowerCase(),t=e.substring(F+1),u=r}"ns"in I&&(u=I.ns)}return{host:e,port:m,domain:t,subdomain:r,secure:h,scheme:p,pathString:o,namespace:u}};/**
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
 */class tg{constructor(e,t,r,o){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=o}get key(){return We(this._path)?null:EA(this._path)}get ref(){return new _l(this._repo,this._path)}get _queryIdentifier(){const e=HT(this._queryParams),t=Pm(e);return t==="{}"?"default":t}get _queryObject(){return HT(this._queryParams)}isEqual(e){if(e=fn(e),!(e instanceof tg))return!1;const t=this._repo===e._repo,r=AA(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+NO(this._path)}}class _l extends tg{constructor(e,t){super(e,t,new zm,!1)}get parent(){const e=SA(this._path);return e===null?null:new _l(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Mx(_l);Px(_l);/**
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
 */const yk="FIREBASE_DATABASE_EMULATOR_HOST",tm={};let vk=!1;function Ek(s,e,t,r,o){let u=r||s.options.databaseURL;u===void 0&&(s.options.projectId||La("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),En("Using default host for project ",s.options.projectId),u=`${s.options.projectId}-default-rtdb.firebaseio.com`);let h=iS(u,o),p=h.repoInfo,m;typeof process<"u"&&AT&&(m=AT[yk]),m?(u=`http://${m}?ns=${p.namespace}`,h=iS(u,o),p=h.repoInfo):h.repoInfo.secure;const g=new nO(s.name,s.options,e);Zx("Invalid Firebase Database URL",h),We(h.path)||La("Database URL must point to the root of a Firebase Database (not including a child path).");const T=Sk(p,s,g,new tO(s,t));return new Ak(T,s)}function Tk(s,e){const t=tm[e];(!t||t[s.key]!==s)&&La(`Database ${e}(${s.repoInfo_}) has already been deleted.`),hk(s),delete t[s.key]}function Sk(s,e,t,r){let o=tm[e.name];o||(o={},tm[e.name]=o);let u=o[s.toURLString()];return u&&La("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new rk(s,vk,t,r),o[s.toURLString()]=u,u}class Ak{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ak(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _l(this._repo,ut())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Tk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&La("Cannot call "+e+" on a deleted database.")}}/**
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
 */function wk(s){BD(qa),Ma(new Pr("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return Ek(r,o,u,t)},"PUBLIC").setMultipleInstances(!0)),Qi(wT,bT,s),Qi(wT,bT,"esm2017")}Ms.prototype.simpleListen=function(s,e){this.sendRequest("q",{p:s},e)};Ms.prototype.echo=function(s,e){this.sendRequest("echo",{d:s},e)};wk();var sS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xr,lw;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,R){function C(){}C.prototype=R.prototype,M.D=R.prototype,M.prototype=new C,M.prototype.constructor=M,M.C=function(N,k,P){for(var D=Array(arguments.length-2),at=2;at<arguments.length;at++)D[at-2]=arguments[at];return R.prototype[k].apply(N,D)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,R,C){C||(C=0);var N=Array(16);if(typeof R=="string")for(var k=0;16>k;++k)N[k]=R.charCodeAt(C++)|R.charCodeAt(C++)<<8|R.charCodeAt(C++)<<16|R.charCodeAt(C++)<<24;else for(k=0;16>k;++k)N[k]=R[C++]|R[C++]<<8|R[C++]<<16|R[C++]<<24;R=M.g[0],C=M.g[1],k=M.g[2];var P=M.g[3],D=R+(P^C&(k^P))+N[0]+3614090360&4294967295;R=C+(D<<7&4294967295|D>>>25),D=P+(k^R&(C^k))+N[1]+3905402710&4294967295,P=R+(D<<12&4294967295|D>>>20),D=k+(C^P&(R^C))+N[2]+606105819&4294967295,k=P+(D<<17&4294967295|D>>>15),D=C+(R^k&(P^R))+N[3]+3250441966&4294967295,C=k+(D<<22&4294967295|D>>>10),D=R+(P^C&(k^P))+N[4]+4118548399&4294967295,R=C+(D<<7&4294967295|D>>>25),D=P+(k^R&(C^k))+N[5]+1200080426&4294967295,P=R+(D<<12&4294967295|D>>>20),D=k+(C^P&(R^C))+N[6]+2821735955&4294967295,k=P+(D<<17&4294967295|D>>>15),D=C+(R^k&(P^R))+N[7]+4249261313&4294967295,C=k+(D<<22&4294967295|D>>>10),D=R+(P^C&(k^P))+N[8]+1770035416&4294967295,R=C+(D<<7&4294967295|D>>>25),D=P+(k^R&(C^k))+N[9]+2336552879&4294967295,P=R+(D<<12&4294967295|D>>>20),D=k+(C^P&(R^C))+N[10]+4294925233&4294967295,k=P+(D<<17&4294967295|D>>>15),D=C+(R^k&(P^R))+N[11]+2304563134&4294967295,C=k+(D<<22&4294967295|D>>>10),D=R+(P^C&(k^P))+N[12]+1804603682&4294967295,R=C+(D<<7&4294967295|D>>>25),D=P+(k^R&(C^k))+N[13]+4254626195&4294967295,P=R+(D<<12&4294967295|D>>>20),D=k+(C^P&(R^C))+N[14]+2792965006&4294967295,k=P+(D<<17&4294967295|D>>>15),D=C+(R^k&(P^R))+N[15]+1236535329&4294967295,C=k+(D<<22&4294967295|D>>>10),D=R+(k^P&(C^k))+N[1]+4129170786&4294967295,R=C+(D<<5&4294967295|D>>>27),D=P+(C^k&(R^C))+N[6]+3225465664&4294967295,P=R+(D<<9&4294967295|D>>>23),D=k+(R^C&(P^R))+N[11]+643717713&4294967295,k=P+(D<<14&4294967295|D>>>18),D=C+(P^R&(k^P))+N[0]+3921069994&4294967295,C=k+(D<<20&4294967295|D>>>12),D=R+(k^P&(C^k))+N[5]+3593408605&4294967295,R=C+(D<<5&4294967295|D>>>27),D=P+(C^k&(R^C))+N[10]+38016083&4294967295,P=R+(D<<9&4294967295|D>>>23),D=k+(R^C&(P^R))+N[15]+3634488961&4294967295,k=P+(D<<14&4294967295|D>>>18),D=C+(P^R&(k^P))+N[4]+3889429448&4294967295,C=k+(D<<20&4294967295|D>>>12),D=R+(k^P&(C^k))+N[9]+568446438&4294967295,R=C+(D<<5&4294967295|D>>>27),D=P+(C^k&(R^C))+N[14]+3275163606&4294967295,P=R+(D<<9&4294967295|D>>>23),D=k+(R^C&(P^R))+N[3]+4107603335&4294967295,k=P+(D<<14&4294967295|D>>>18),D=C+(P^R&(k^P))+N[8]+1163531501&4294967295,C=k+(D<<20&4294967295|D>>>12),D=R+(k^P&(C^k))+N[13]+2850285829&4294967295,R=C+(D<<5&4294967295|D>>>27),D=P+(C^k&(R^C))+N[2]+4243563512&4294967295,P=R+(D<<9&4294967295|D>>>23),D=k+(R^C&(P^R))+N[7]+1735328473&4294967295,k=P+(D<<14&4294967295|D>>>18),D=C+(P^R&(k^P))+N[12]+2368359562&4294967295,C=k+(D<<20&4294967295|D>>>12),D=R+(C^k^P)+N[5]+4294588738&4294967295,R=C+(D<<4&4294967295|D>>>28),D=P+(R^C^k)+N[8]+2272392833&4294967295,P=R+(D<<11&4294967295|D>>>21),D=k+(P^R^C)+N[11]+1839030562&4294967295,k=P+(D<<16&4294967295|D>>>16),D=C+(k^P^R)+N[14]+4259657740&4294967295,C=k+(D<<23&4294967295|D>>>9),D=R+(C^k^P)+N[1]+2763975236&4294967295,R=C+(D<<4&4294967295|D>>>28),D=P+(R^C^k)+N[4]+1272893353&4294967295,P=R+(D<<11&4294967295|D>>>21),D=k+(P^R^C)+N[7]+4139469664&4294967295,k=P+(D<<16&4294967295|D>>>16),D=C+(k^P^R)+N[10]+3200236656&4294967295,C=k+(D<<23&4294967295|D>>>9),D=R+(C^k^P)+N[13]+681279174&4294967295,R=C+(D<<4&4294967295|D>>>28),D=P+(R^C^k)+N[0]+3936430074&4294967295,P=R+(D<<11&4294967295|D>>>21),D=k+(P^R^C)+N[3]+3572445317&4294967295,k=P+(D<<16&4294967295|D>>>16),D=C+(k^P^R)+N[6]+76029189&4294967295,C=k+(D<<23&4294967295|D>>>9),D=R+(C^k^P)+N[9]+3654602809&4294967295,R=C+(D<<4&4294967295|D>>>28),D=P+(R^C^k)+N[12]+3873151461&4294967295,P=R+(D<<11&4294967295|D>>>21),D=k+(P^R^C)+N[15]+530742520&4294967295,k=P+(D<<16&4294967295|D>>>16),D=C+(k^P^R)+N[2]+3299628645&4294967295,C=k+(D<<23&4294967295|D>>>9),D=R+(k^(C|~P))+N[0]+4096336452&4294967295,R=C+(D<<6&4294967295|D>>>26),D=P+(C^(R|~k))+N[7]+1126891415&4294967295,P=R+(D<<10&4294967295|D>>>22),D=k+(R^(P|~C))+N[14]+2878612391&4294967295,k=P+(D<<15&4294967295|D>>>17),D=C+(P^(k|~R))+N[5]+4237533241&4294967295,C=k+(D<<21&4294967295|D>>>11),D=R+(k^(C|~P))+N[12]+1700485571&4294967295,R=C+(D<<6&4294967295|D>>>26),D=P+(C^(R|~k))+N[3]+2399980690&4294967295,P=R+(D<<10&4294967295|D>>>22),D=k+(R^(P|~C))+N[10]+4293915773&4294967295,k=P+(D<<15&4294967295|D>>>17),D=C+(P^(k|~R))+N[1]+2240044497&4294967295,C=k+(D<<21&4294967295|D>>>11),D=R+(k^(C|~P))+N[8]+1873313359&4294967295,R=C+(D<<6&4294967295|D>>>26),D=P+(C^(R|~k))+N[15]+4264355552&4294967295,P=R+(D<<10&4294967295|D>>>22),D=k+(R^(P|~C))+N[6]+2734768916&4294967295,k=P+(D<<15&4294967295|D>>>17),D=C+(P^(k|~R))+N[13]+1309151649&4294967295,C=k+(D<<21&4294967295|D>>>11),D=R+(k^(C|~P))+N[4]+4149444226&4294967295,R=C+(D<<6&4294967295|D>>>26),D=P+(C^(R|~k))+N[11]+3174756917&4294967295,P=R+(D<<10&4294967295|D>>>22),D=k+(R^(P|~C))+N[2]+718787259&4294967295,k=P+(D<<15&4294967295|D>>>17),D=C+(P^(k|~R))+N[9]+3951481745&4294967295,M.g[0]=M.g[0]+R&4294967295,M.g[1]=M.g[1]+(k+(D<<21&4294967295|D>>>11))&4294967295,M.g[2]=M.g[2]+k&4294967295,M.g[3]=M.g[3]+P&4294967295}r.prototype.u=function(M,R){R===void 0&&(R=M.length);for(var C=R-this.blockSize,N=this.B,k=this.h,P=0;P<R;){if(k==0)for(;P<=C;)o(this,M,P),P+=this.blockSize;if(typeof M=="string"){for(;P<R;)if(N[k++]=M.charCodeAt(P++),k==this.blockSize){o(this,N),k=0;break}}else for(;P<R;)if(N[k++]=M[P++],k==this.blockSize){o(this,N),k=0;break}}this.h=k,this.o+=R},r.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var R=1;R<M.length-8;++R)M[R]=0;var C=8*this.o;for(R=M.length-8;R<M.length;++R)M[R]=C&255,C/=256;for(this.u(M),M=Array(16),R=C=0;4>R;++R)for(var N=0;32>N;N+=8)M[C++]=this.g[R]>>>N&255;return M};function u(M,R){var C=p;return Object.prototype.hasOwnProperty.call(C,M)?C[M]:C[M]=R(M)}function h(M,R){this.h=R;for(var C=[],N=!0,k=M.length-1;0<=k;k--){var P=M[k]|0;N&&P==R||(C[k]=P,N=!1)}this.g=C}var p={};function m(M){return-128<=M&&128>M?u(M,function(R){return new h([R|0],0>R?-1:0)}):new h([M|0],0>M?-1:0)}function g(M){if(isNaN(M)||!isFinite(M))return S;if(0>M)return G(g(-M));for(var R=[],C=1,N=0;M>=C;N++)R[N]=M/C|0,C*=4294967296;return new h(R,0)}function T(M,R){if(M.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(M.charAt(0)=="-")return G(T(M.substring(1),R));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(R,8)),N=S,k=0;k<M.length;k+=8){var P=Math.min(8,M.length-k),D=parseInt(M.substring(k,k+P),R);8>P?(P=g(Math.pow(R,P)),N=N.j(P).add(g(D))):(N=N.j(C),N=N.add(g(D)))}return N}var S=m(0),I=m(1),V=m(16777216);s=h.prototype,s.m=function(){if(J(this))return-G(this).m();for(var M=0,R=1,C=0;C<this.g.length;C++){var N=this.i(C);M+=(0<=N?N:4294967296+N)*R,R*=4294967296}return M},s.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(F(this))return"0";if(J(this))return"-"+G(this).toString(M);for(var R=g(Math.pow(M,6)),C=this,N="";;){var k=re(C,R).g;C=Y(C,k.j(R));var P=((0<C.g.length?C.g[0]:C.h)>>>0).toString(M);if(C=k,F(C))return P+N;for(;6>P.length;)P="0"+P;N=P+N}},s.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function F(M){if(M.h!=0)return!1;for(var R=0;R<M.g.length;R++)if(M.g[R]!=0)return!1;return!0}function J(M){return M.h==-1}s.l=function(M){return M=Y(this,M),J(M)?-1:F(M)?0:1};function G(M){for(var R=M.g.length,C=[],N=0;N<R;N++)C[N]=~M.g[N];return new h(C,~M.h).add(I)}s.abs=function(){return J(this)?G(this):this},s.add=function(M){for(var R=Math.max(this.g.length,M.g.length),C=[],N=0,k=0;k<=R;k++){var P=N+(this.i(k)&65535)+(M.i(k)&65535),D=(P>>>16)+(this.i(k)>>>16)+(M.i(k)>>>16);N=D>>>16,P&=65535,D&=65535,C[k]=D<<16|P}return new h(C,C[C.length-1]&-2147483648?-1:0)};function Y(M,R){return M.add(G(R))}s.j=function(M){if(F(this)||F(M))return S;if(J(this))return J(M)?G(this).j(G(M)):G(G(this).j(M));if(J(M))return G(this.j(G(M)));if(0>this.l(V)&&0>M.l(V))return g(this.m()*M.m());for(var R=this.g.length+M.g.length,C=[],N=0;N<2*R;N++)C[N]=0;for(N=0;N<this.g.length;N++)for(var k=0;k<M.g.length;k++){var P=this.i(N)>>>16,D=this.i(N)&65535,at=M.i(k)>>>16,nt=M.i(k)&65535;C[2*N+2*k]+=D*nt,ne(C,2*N+2*k),C[2*N+2*k+1]+=P*nt,ne(C,2*N+2*k+1),C[2*N+2*k+1]+=D*at,ne(C,2*N+2*k+1),C[2*N+2*k+2]+=P*at,ne(C,2*N+2*k+2)}for(N=0;N<R;N++)C[N]=C[2*N+1]<<16|C[2*N];for(N=R;N<2*R;N++)C[N]=0;return new h(C,0)};function ne(M,R){for(;(M[R]&65535)!=M[R];)M[R+1]+=M[R]>>>16,M[R]&=65535,R++}function X(M,R){this.g=M,this.h=R}function re(M,R){if(F(R))throw Error("division by zero");if(F(M))return new X(S,S);if(J(M))return R=re(G(M),R),new X(G(R.g),G(R.h));if(J(R))return R=re(M,G(R)),new X(G(R.g),R.h);if(30<M.g.length){if(J(M)||J(R))throw Error("slowDivide_ only works with positive integers.");for(var C=I,N=R;0>=N.l(M);)C=fe(C),N=fe(N);var k=Ee(C,1),P=Ee(N,1);for(N=Ee(N,2),C=Ee(C,2);!F(N);){var D=P.add(N);0>=D.l(M)&&(k=k.add(C),P=D),N=Ee(N,1),C=Ee(C,1)}return R=Y(M,k.j(R)),new X(k,R)}for(k=S;0<=M.l(R);){for(C=Math.max(1,Math.floor(M.m()/R.m())),N=Math.ceil(Math.log(C)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),P=g(C),D=P.j(R);J(D)||0<D.l(M);)C-=N,P=g(C),D=P.j(R);F(P)&&(P=I),k=k.add(P),M=Y(M,D)}return new X(k,M)}s.A=function(M){return re(this,M).h},s.and=function(M){for(var R=Math.max(this.g.length,M.g.length),C=[],N=0;N<R;N++)C[N]=this.i(N)&M.i(N);return new h(C,this.h&M.h)},s.or=function(M){for(var R=Math.max(this.g.length,M.g.length),C=[],N=0;N<R;N++)C[N]=this.i(N)|M.i(N);return new h(C,this.h|M.h)},s.xor=function(M){for(var R=Math.max(this.g.length,M.g.length),C=[],N=0;N<R;N++)C[N]=this.i(N)^M.i(N);return new h(C,this.h^M.h)};function fe(M){for(var R=M.g.length+1,C=[],N=0;N<R;N++)C[N]=M.i(N)<<1|M.i(N-1)>>>31;return new h(C,M.h)}function Ee(M,R){var C=R>>5;R%=32;for(var N=M.g.length-C,k=[],P=0;P<N;P++)k[P]=0<R?M.i(P+C)>>>R|M.i(P+C+1)<<32-R:M.i(P+C);return new h(k,M.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lw=r,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=T,xr=h}).apply(typeof sS<"u"?sS:typeof self<"u"?self:typeof window<"u"?window:{});var Wh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uw,Uu,cw,rf,nm,hw,fw,dw;(function(){var s,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,y,v){return f==Array.prototype||f==Object.prototype||(f[y]=v.value),f};function t(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wh=="object"&&Wh];for(var y=0;y<f.length;++y){var v=f[y];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function o(f,y){if(y)e:{var v=r;f=f.split(".");for(var b=0;b<f.length-1;b++){var B=f[b];if(!(B in v))break e;v=v[B]}f=f[f.length-1],b=v[f],y=y(b),y!=b&&y!=null&&e(v,f,{configurable:!0,writable:!0,value:y})}}function u(f,y){f instanceof String&&(f+="");var v=0,b=!1,B={next:function(){if(!b&&v<f.length){var W=v++;return{value:y(W,f[W]),done:!1}}return b=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}o("Array.prototype.values",function(f){return f||function(){return u(this,function(y,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function m(f){var y=typeof f;return y=y!="object"?y:f?Array.isArray(f)?"array":y:"null",y=="array"||y=="object"&&typeof f.length=="number"}function g(f){var y=typeof f;return y=="object"&&f!=null||y=="function"}function T(f,y,v){return f.call.apply(f.bind,arguments)}function S(f,y,v){if(!f)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,b),f.apply(y,B)}}return function(){return f.apply(y,arguments)}}function I(f,y,v){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:S,I.apply(null,arguments)}function V(f,y){var v=Array.prototype.slice.call(arguments,1);return function(){var b=v.slice();return b.push.apply(b,arguments),f.apply(this,b)}}function F(f,y){function v(){}v.prototype=y.prototype,f.aa=y.prototype,f.prototype=new v,f.prototype.constructor=f,f.Qb=function(b,B,W){for(var he=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)he[Ke-2]=arguments[Ke];return y.prototype[B].apply(b,he)}}function J(f){const y=f.length;if(0<y){const v=Array(y);for(let b=0;b<y;b++)v[b]=f[b];return v}return[]}function G(f,y){for(let v=1;v<arguments.length;v++){const b=arguments[v];if(m(b)){const B=f.length||0,W=b.length||0;f.length=B+W;for(let he=0;he<W;he++)f[B+he]=b[he]}else f.push(b)}}class Y{constructor(y,v){this.i=y,this.j=v,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function ne(f){return/^[\s\xa0]*$/.test(f)}function X(){var f=p.navigator;return f&&(f=f.userAgent)?f:""}function re(f){return re[" "](f),f}re[" "]=function(){};var fe=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function Ee(f,y,v){for(const b in f)y.call(v,f[b],b,f)}function M(f,y){for(const v in f)y.call(void 0,f[v],v,f)}function R(f){const y={};for(const v in f)y[v]=f[v];return y}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(f,y){let v,b;for(let B=1;B<arguments.length;B++){b=arguments[B];for(v in b)f[v]=b[v];for(let W=0;W<C.length;W++)v=C[W],Object.prototype.hasOwnProperty.call(b,v)&&(f[v]=b[v])}}function k(f){var y=1;f=f.split(":");const v=[];for(;0<y&&f.length;)v.push(f.shift()),y--;return f.length&&v.push(f.join(":")),v}function P(f){p.setTimeout(()=>{throw f},0)}function D(){var f=z;let y=null;return f.g&&(y=f.g,f.g=f.g.next,f.g||(f.h=null),y.next=null),y}class at{constructor(){this.h=this.g=null}add(y,v){const b=nt.get();b.set(y,v),this.h?this.h.next=b:this.g=b,this.h=b}}var nt=new Y(()=>new le,f=>f.reset());class le{constructor(){this.next=this.g=this.h=null}set(y,v){this.h=y,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,ue=!1,z=new at,x=()=>{const f=p.Promise.resolve(void 0);Ae=()=>{f.then(Z)}};var Z=()=>{for(var f;f=D();){try{f.h.call(f.g)}catch(v){P(v)}var y=nt;y.j(f),100>y.h&&(y.h++,f.next=y.g,y.g=f)}ue=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(f,y){this.type=f,this.g=this.target=y,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var pe=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var f=!1,y=Object.defineProperty({},"passive",{get:function(){f=!0}});try{const v=()=>{};p.addEventListener("test",v,y),p.removeEventListener("test",v,y)}catch{}return f}();function oe(f,y){if(de.call(this,f?f.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,f){var v=this.type=f.type,b=f.changedTouches&&f.changedTouches.length?f.changedTouches[0]:null;if(this.target=f.target||f.srcElement,this.g=y,y=f.relatedTarget){if(fe){e:{try{re(y.nodeName);var B=!0;break e}catch{}B=!1}B||(y=null)}}else v=="mouseover"?y=f.fromElement:v=="mouseout"&&(y=f.toElement);this.relatedTarget=y,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0),this.button=f.button,this.key=f.key||"",this.ctrlKey=f.ctrlKey,this.altKey=f.altKey,this.shiftKey=f.shiftKey,this.metaKey=f.metaKey,this.pointerId=f.pointerId||0,this.pointerType=typeof f.pointerType=="string"?f.pointerType:ie[f.pointerType]||"",this.state=f.state,this.i=f,f.defaultPrevented&&oe.aa.h.call(this)}}F(oe,de);var ie={2:"touch",3:"pen",4:"mouse"};oe.prototype.h=function(){oe.aa.h.call(this);var f=this.i;f.preventDefault?f.preventDefault():f.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),ye=0;function _e(f,y,v,b,B){this.listener=f,this.proxy=null,this.src=y,this.type=v,this.capture=!!b,this.ha=B,this.key=++ye,this.da=this.fa=!1}function Ce(f){f.da=!0,f.listener=null,f.proxy=null,f.src=null,f.ha=null}function Lt(f){this.src=f,this.g={},this.h=0}Lt.prototype.add=function(f,y,v,b,B){var W=f.toString();f=this.g[W],f||(f=this.g[W]=[],this.h++);var he=Wt(f,y,b,B);return-1<he?(y=f[he],v||(y.fa=!1)):(y=new _e(y,this.src,W,!!b,B),y.fa=v,f.push(y)),y};function bn(f,y){var v=y.type;if(v in f.g){var b=f.g[v],B=Array.prototype.indexOf.call(b,y,void 0),W;(W=0<=B)&&Array.prototype.splice.call(b,B,1),W&&(Ce(y),f.g[v].length==0&&(delete f.g[v],f.h--))}}function Wt(f,y,v,b){for(var B=0;B<f.length;++B){var W=f[B];if(!W.da&&W.listener==y&&W.capture==!!v&&W.ha==b)return B}return-1}var Cn="closure_lm_"+(1e6*Math.random()|0),$n={};function xn(f,y,v,b,B){if(Array.isArray(y)){for(var W=0;W<y.length;W++)xn(f,y[W],v,b,B);return null}return v=$r(v),f&&f[Oe]?f.K(y,v,g(b)?!!b.capture:!1,B):Ii(f,y,v,!1,b,B)}function Ii(f,y,v,b,B,W){if(!y)throw Error("Invalid event type");var he=g(B)?!!B.capture:!!B,Ke=Xn(f);if(Ke||(f[Cn]=Ke=new Lt(f)),v=Ke.add(y,v,b,he,W),v.proxy)return v;if(b=K(),v.proxy=b,b.src=f,b.listener=v,f.addEventListener)pe||(B=he),B===void 0&&(B=!1),f.addEventListener(y.toString(),b,B);else if(f.attachEvent)f.attachEvent(Ot(y.toString()),b);else if(f.addListener&&f.removeListener)f.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return v}function K(){function f(v){return y.call(f.src,f.listener,v)}const y=ts;return f}function He(f,y,v,b,B){if(Array.isArray(y))for(var W=0;W<y.length;W++)He(f,y[W],v,b,B);else b=g(b)?!!b.capture:!!b,v=$r(v),f&&f[Oe]?(f=f.i,y=String(y).toString(),y in f.g&&(W=f.g[y],v=Wt(W,v,b,B),-1<v&&(Ce(W[v]),Array.prototype.splice.call(W,v,1),W.length==0&&(delete f.g[y],f.h--)))):f&&(f=Xn(f))&&(y=f.g[y.toString()],f=-1,y&&(f=Wt(y,v,b,B)),(v=-1<f?y[f]:null)&&Rt(v))}function Rt(f){if(typeof f!="number"&&f&&!f.da){var y=f.src;if(y&&y[Oe])bn(y.i,f);else{var v=f.type,b=f.proxy;y.removeEventListener?y.removeEventListener(v,b,f.capture):y.detachEvent?y.detachEvent(Ot(v),b):y.addListener&&y.removeListener&&y.removeListener(b),(v=Xn(y))?(bn(v,f),v.h==0&&(v.src=null,y[Cn]=null)):Ce(f)}}}function Ot(f){return f in $n?$n[f]:$n[f]="on"+f}function ts(f,y){if(f.da)f=!0;else{y=new oe(y,this);var v=f.listener,b=f.ha||f.src;f.fa&&Rt(f),f=v.call(b,y)}return f}function Xn(f){return f=f[Cn],f instanceof Lt?f:null}var nn="__closure_events_fn_"+(1e9*Math.random()>>>0);function $r(f){return typeof f=="function"?f:(f[nn]||(f[nn]=function(y){return f.handleEvent(y)}),f[nn])}function gt(){ge.call(this),this.i=new Lt(this),this.M=this,this.F=null}F(gt,ge),gt.prototype[Oe]=!0,gt.prototype.removeEventListener=function(f,y,v,b){He(this,f,y,v,b)};function xt(f,y){var v,b=f.F;if(b)for(v=[];b;b=b.F)v.push(b);if(f=f.M,b=y.type||y,typeof y=="string")y=new de(y,f);else if(y instanceof de)y.target=y.target||f;else{var B=y;y=new de(b,f),N(y,B)}if(B=!0,v)for(var W=v.length-1;0<=W;W--){var he=y.g=v[W];B=ns(he,b,!0,y)&&B}if(he=y.g=f,B=ns(he,b,!0,y)&&B,B=ns(he,b,!1,y)&&B,v)for(W=0;W<v.length;W++)he=y.g=v[W],B=ns(he,b,!1,y)&&B}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var f=this.i,y;for(y in f.g){for(var v=f.g[y],b=0;b<v.length;b++)Ce(v[b]);delete f.g[y],f.h--}}this.F=null},gt.prototype.K=function(f,y,v,b){return this.i.add(String(f),y,!1,v,b)},gt.prototype.L=function(f,y,v,b){return this.i.add(String(f),y,!0,v,b)};function ns(f,y,v,b){if(y=f.i.g[String(y)],!y)return!0;y=y.concat();for(var B=!0,W=0;W<y.length;++W){var he=y[W];if(he&&!he.da&&he.capture==v){var Ke=he.listener,jt=he.ha||he.src;he.fa&&bn(f.i,he),B=Ke.call(jt,b)!==!1&&B}}return B&&!b.defaultPrevented}function Ac(f,y,v){if(typeof f=="function")v&&(f=I(f,v));else if(f&&typeof f.handleEvent=="function")f=I(f.handleEvent,f);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:p.setTimeout(f,y||0)}function El(f){f.g=Ac(()=>{f.g=null,f.i&&(f.i=!1,El(f))},f.l);const y=f.h;f.h=null,f.m.apply(null,y)}class dd extends ge{constructor(y,v){super(),this.m=y,this.l=v,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:El(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xr(f){ge.call(this),this.h=f,this.g={}}F(Xr,ge);var zs=[];function pn(f){Ee(f.g,function(y,v){this.g.hasOwnProperty(v)&&Rt(y)},f),f.g={}}Xr.prototype.N=function(){Xr.aa.N.call(this),pn(this)},Xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tl=p.JSON.stringify,Ni=p.JSON.parse,Rn=class{stringify(f){return p.JSON.stringify(f,void 0)}parse(f){return p.JSON.parse(f,void 0)}};function Sl(){}Sl.prototype.h=null;function wc(f){return f.h||(f.h=f.i())}function bc(){}var Di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hs(){de.call(this,"d")}F(Hs,de);function gi(){de.call(this,"c")}F(gi,de);var Zn={},Fs=null;function Ya(){return Fs=Fs||new gt}Zn.La="serverreachability";function Al(f){de.call(this,Zn.La,f)}F(Al,de);function qs(f){const y=Ya();xt(y,new Al(y))}Zn.STAT_EVENT="statevent";function $a(f,y){de.call(this,Zn.STAT_EVENT,f),this.stat=y}F($a,de);function It(f){const y=Ya();xt(y,new $a(y,f))}Zn.Ma="timingevent";function Cc(f,y){de.call(this,Zn.Ma,f),this.size=y}F(Cc,de);function Gs(f,y){if(typeof f!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){f()},y)}function Ws(){this.g=!0}Ws.prototype.xa=function(){this.g=!1};function Rc(f,y,v,b,B,W){f.info(function(){if(f.g)if(W)for(var he="",Ke=W.split("&"),jt=0;jt<Ke.length;jt++){var Qe=Ke[jt].split("=");if(1<Qe.length){var Yt=Qe[0];Qe=Qe[1];var Bt=Yt.split("_");he=2<=Bt.length&&Bt[1]=="type"?he+(Yt+"="+Qe+"&"):he+(Yt+"=redacted&")}}else he=null;else he=W;return"XMLHTTP REQ ("+b+") [attempt "+B+"]: "+y+`
`+v+`
`+he})}function Ic(f,y,v,b,B,W,he){f.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+B+"]: "+y+`
`+v+`
`+W+" "+he})}function Ks(f,y,v,b){f.info(function(){return"XMLHTTP TEXT ("+y+"): "+Kt(f,v)+(b?" "+b:"")})}function Oi(f,y){f.info(function(){return"TIMEOUT: "+y})}Ws.prototype.info=function(){};function Kt(f,y){if(!f.g)return y;if(!y)return null;try{var v=JSON.parse(y);if(v){for(f=0;f<v.length;f++)if(Array.isArray(v[f])){var b=v[f];if(!(2>b.length)){var B=b[1];if(Array.isArray(B)&&!(1>B.length)){var W=B[0];if(W!="noop"&&W!="stop"&&W!="close")for(var he=1;he<B.length;he++)B[he]=""}}}}return Tl(v)}catch{return y}}var Ut={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},is={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zr;function Xa(){}F(Xa,Sl),Xa.prototype.g=function(){return new XMLHttpRequest},Xa.prototype.i=function(){return{}},Zr=new Xa;function xi(f,y,v,b){this.j=f,this.i=y,this.l=v,this.R=b||1,this.U=new Xr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wl}function wl(){this.i=null,this.g="",this.h=!1}var Qs={},Jr={};function yi(f,y,v){f.L=1,f.v=na(St(y)),f.m=v,f.P=!0,ss(f,null)}function ss(f,y){f.F=Date.now(),yt(f),f.A=St(f.v);var v=f.A,b=f.R;Array.isArray(b)||(b=[String(b)]),os(v.i,"t",b),f.C=0,v=f.j.J,f.h=new wl,f.g=Hc(f.j,v?y:null,!f.m),0<f.O&&(f.M=new dd(I(f.Y,f,f.g),f.O)),y=f.U,v=f.g,b=f.ca;var B="readystatechange";Array.isArray(B)||(B&&(zs[0]=B.toString()),B=zs);for(var W=0;W<B.length;W++){var he=xn(v,B[W],b||y.handleEvent,!1,y.h||y);if(!he)break;y.g[he.key]=he}y=f.H?R(f.H):{},f.m?(f.u||(f.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",f.g.ea(f.A,f.u,f.m,y)):(f.u="GET",f.g.ea(f.A,f.u,null,y)),qs(),Rc(f.i,f.u,f.A,f.l,f.R,f.m)}xi.prototype.ca=function(f){f=f.target;const y=this.M;y&&ii(f)==3?y.j():this.Y(f)},xi.prototype.Y=function(f){try{if(f==this.g)e:{const Bt=ii(this.g);var y=this.g.Ba();const hs=this.g.Z();if(!(3>Bt)&&(Bt!=3||this.g&&(this.h.h||this.g.oa()||Mc(this.g)))){this.J||Bt!=4||y==7||(y==8||0>=hs?qs(3):qs(2)),Za(this);var v=this.g.Z();this.X=v;t:if(Ys(this)){var b=Mc(this.g);f="";var B=b.length,W=ii(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kn(this),jn(this);var he="";break t}this.h.i=new p.TextDecoder}for(y=0;y<B;y++)this.h.h=!0,f+=this.h.i.decode(b[y],{stream:!(W&&y==B-1)});b.length=0,this.h.g+=f,this.C=0,he=this.h.g}else he=this.g.oa();if(this.o=v==200,Ic(this.i,this.u,this.A,this.l,this.R,Bt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,jt=this.g;if((Ke=jt.g?jt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(Ke)){var Qe=Ke;break t}}Qe=null}if(v=Qe)Ks(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bn(this,v);else{this.o=!1,this.s=3,It(12),kn(this),jn(this);break e}}if(this.P){v=!0;let sn;for(;!this.J&&this.C<he.length;)if(sn=$s(this,he),sn==Jr){Bt==4&&(this.s=4,It(14),v=!1),Ks(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Qs){this.s=4,It(15),Ks(this.i,this.l,he,"[Invalid Chunk]"),v=!1;break}else Ks(this.i,this.l,sn,null),Bn(this,sn);if(Ys(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Bt!=4||he.length!=0||this.h.h||(this.s=1,It(16),v=!1),this.o=this.o&&v,!v)Ks(this.i,this.l,he,"[Invalid Chunked Response]"),kn(this),jn(this);else if(0<he.length&&!this.W){this.W=!0;var Yt=this.j;Yt.g==this&&Yt.ba&&!Yt.M&&(Yt.j.info("Great, no buffering proxy detected. Bytes received: "+he.length),ua(Yt),Yt.M=!0,It(11))}}else Ks(this.i,this.l,he,null),Bn(this,he);Bt==4&&kn(this),this.o&&!this.J&&(Bt==4?jc(this.j,this):(this.o=!1,yt(this)))}else vd(this.g),v==400&&0<he.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),kn(this),jn(this)}}}catch{}finally{}};function Ys(f){return f.g?f.u=="GET"&&f.L!=2&&f.j.Ca:!1}function $s(f,y){var v=f.C,b=y.indexOf(`
`,v);return b==-1?Jr:(v=Number(y.substring(v,b)),isNaN(v)?Qs:(b+=1,b+v>y.length?Jr:(y=y.slice(b,b+v),f.C=b+v,y)))}xi.prototype.cancel=function(){this.J=!0,kn(this)};function yt(f){f.S=Date.now()+f.I,bl(f,f.I)}function bl(f,y){if(f.B!=null)throw Error("WatchDog timer not null");f.B=Gs(I(f.ba,f),y)}function Za(f){f.B&&(p.clearTimeout(f.B),f.B=null)}xi.prototype.ba=function(){this.B=null;const f=Date.now();0<=f-this.S?(Oi(this.i,this.A),this.L!=2&&(qs(),It(17)),kn(this),this.s=2,jn(this)):bl(this,this.S-f)};function jn(f){f.j.G==0||f.J||jc(f.j,f)}function kn(f){Za(f);var y=f.M;y&&typeof y.ma=="function"&&y.ma(),f.M=null,pn(f.U),f.g&&(y=f.g,f.g=null,y.abort(),y.ma())}function Bn(f,y){try{var v=f.j;if(v.G!=0&&(v.g==f||Xs(v.h,f))){if(!f.K&&Xs(v.h,f)&&v.G==3){try{var b=v.Da.g.parse(y)}catch{b=null}if(Array.isArray(b)&&b.length==3){var B=b;if(B[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<f.F)lo(v),ao(v);else break e;Vl(v),It(18)}}else v.za=B[1],0<v.za-v.T&&37500>B[2]&&v.F&&v.v==0&&!v.C&&(v.C=Gs(I(v.Za,v),6e3));if(1>=Nc(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else cs(v,11)}else if((f.K||v.g==f)&&lo(v),!ne(y))for(B=v.Da.g.parse(y),y=0;y<B.length;y++){let Qe=B[y];if(v.T=Qe[0],Qe=Qe[1],v.G==2)if(Qe[0]=="c"){v.K=Qe[1],v.ia=Qe[2];const Yt=Qe[3];Yt!=null&&(v.la=Yt,v.j.info("VER="+v.la));const Bt=Qe[4];Bt!=null&&(v.Aa=Bt,v.j.info("SVER="+v.Aa));const hs=Qe[5];hs!=null&&typeof hs=="number"&&0<hs&&(b=1.5*hs,v.L=b,v.j.info("backChannelRequestTimeoutMs_="+b)),b=v;const sn=f.g;if(sn){const ji=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ji){var W=b.h;W.g||ji.indexOf("spdy")==-1&&ji.indexOf("quic")==-1&&ji.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(Zs(W,W.h),W.h=null))}if(b.D){const Ul=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ul&&(b.ya=Ul,Je(b.I,b.D,Ul))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-f.F,v.j.info("Handshake RTT: "+v.R+"ms")),b=v;var he=f;if(b.qa=zc(b,b.J?b.ia:null,b.W),he.K){Jn(b.h,he);var Ke=he,jt=b.L;jt&&(Ke.I=jt),Ke.B&&(Za(Ke),yt(Ke)),b.g=he}else Lc(b);0<v.i.length&&oo(v)}else Qe[0]!="stop"&&Qe[0]!="close"||cs(v,7);else v.G==3&&(Qe[0]=="stop"||Qe[0]=="close"?Qe[0]=="stop"?cs(v,7):Ml(v):Qe[0]!="noop"&&v.l&&v.l.ta(Qe),v.v=0)}}qs(4)}catch{}}var pd=class{constructor(f,y){this.g=f,this.map=y}};function Cl(f){this.l=f||10,p.PerformanceNavigationTiming?(f=p.performance.getEntriesByType("navigation"),f=0<f.length&&(f[0].nextHopProtocol=="hq"||f[0].nextHopProtocol=="h2")):f=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=f?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rl(f){return f.h?!0:f.g?f.g.size>=f.j:!1}function Nc(f){return f.h?1:f.g?f.g.size:0}function Xs(f,y){return f.h?f.h==y:f.g?f.g.has(y):!1}function Zs(f,y){f.g?f.g.add(y):f.h=y}function Jn(f,y){f.h&&f.h==y?f.h=null:f.g&&f.g.has(y)&&f.g.delete(y)}Cl.prototype.cancel=function(){if(this.i=In(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const f of this.g.values())f.cancel();this.g.clear()}};function In(f){if(f.h!=null)return f.i.concat(f.h.D);if(f.g!=null&&f.g.size!==0){let y=f.i;for(const v of f.g.values())y=y.concat(v.D);return y}return J(f.i)}function Dc(f){if(f.V&&typeof f.V=="function")return f.V();if(typeof Map<"u"&&f instanceof Map||typeof Set<"u"&&f instanceof Set)return Array.from(f.values());if(typeof f=="string")return f.split("");if(m(f)){for(var y=[],v=f.length,b=0;b<v;b++)y.push(f[b]);return y}y=[],v=0;for(b in f)y[v++]=f[b];return y}function _d(f){if(f.na&&typeof f.na=="function")return f.na();if(!f.V||typeof f.V!="function"){if(typeof Map<"u"&&f instanceof Map)return Array.from(f.keys());if(!(typeof Set<"u"&&f instanceof Set)){if(m(f)||typeof f=="string"){var y=[];f=f.length;for(var v=0;v<f;v++)y.push(v);return y}y=[],v=0;for(const b in f)y[v++]=b;return y}}}function ea(f,y){if(f.forEach&&typeof f.forEach=="function")f.forEach(y,void 0);else if(m(f)||typeof f=="string")Array.prototype.forEach.call(f,y,void 0);else for(var v=_d(f),b=Dc(f),B=b.length,W=0;W<B;W++)y.call(void 0,b[W],v&&v[W],f)}var Il=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ja(f,y){if(f){f=f.split("&");for(var v=0;v<f.length;v++){var b=f[v].indexOf("="),B=null;if(0<=b){var W=f[v].substring(0,b);B=f[v].substring(b+1)}else W=f[v];y(W,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function rs(f){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,f instanceof rs){this.h=f.h,Js(this,f.j),this.o=f.o,this.g=f.g,ta(this,f.s),this.l=f.l;var y=f.i,v=new ki;v.i=y.i,y.g&&(v.g=new Map(y.g),v.h=y.h),eo(this,v),this.m=f.m}else f&&(y=String(f).match(Il))?(this.h=!1,Js(this,y[1]||"",!0),this.o=er(y[2]||""),this.g=er(y[3]||"",!0),ta(this,y[4]),this.l=er(y[5]||"",!0),eo(this,y[6]||"",!0),this.m=er(y[7]||"")):(this.h=!1,this.i=new ki(null,this.h))}rs.prototype.toString=function(){var f=[],y=this.j;y&&f.push(ei(y,Nl,!0),":");var v=this.g;return(v||y=="file")&&(f.push("//"),(y=this.o)&&f.push(ei(y,Nl,!0),"@"),f.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&f.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&f.push("/"),f.push(ei(v,v.charAt(0)=="/"?Dl:Oc,!0))),(v=this.i.toString())&&f.push("?",v),(v=this.m)&&f.push("#",ei(v,yd)),f.join("")};function St(f){return new rs(f)}function Js(f,y,v){f.j=v?er(y,!0):y,f.j&&(f.j=f.j.replace(/:$/,""))}function ta(f,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);f.s=y}else f.s=null}function eo(f,y,v){y instanceof ki?(f.i=y,Ol(f.i,f.h)):(v||(y=ei(y,gd)),f.i=new ki(y,f.h))}function Je(f,y,v){f.i.set(y,v)}function na(f){return Je(f,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),f}function er(f,y){return f?y?decodeURI(f.replace(/%25/g,"%2525")):decodeURIComponent(f):""}function ei(f,y,v){return typeof f=="string"?(f=encodeURI(f).replace(y,md),v&&(f=f.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f):null}function md(f){return f=f.charCodeAt(0),"%"+(f>>4&15).toString(16)+(f&15).toString(16)}var Nl=/[#\/\?@]/g,Oc=/[#\?:]/g,Dl=/[#\?]/g,gd=/[#\?@]/g,yd=/#/g;function ki(f,y){this.h=this.g=null,this.i=f||null,this.j=!!y}function ti(f){f.g||(f.g=new Map,f.h=0,f.i&&Ja(f.i,function(y,v){f.add(decodeURIComponent(y.replace(/\+/g," ")),v)}))}s=ki.prototype,s.add=function(f,y){ti(this),this.i=null,f=ls(this,f);var v=this.g.get(f);return v||this.g.set(f,v=[]),v.push(y),this.h+=1,this};function to(f,y){ti(f),y=ls(f,y),f.g.has(y)&&(f.i=null,f.h-=f.g.get(y).length,f.g.delete(y))}function as(f,y){return ti(f),y=ls(f,y),f.g.has(y)}s.forEach=function(f,y){ti(this),this.g.forEach(function(v,b){v.forEach(function(B){f.call(y,B,b,this)},this)},this)},s.na=function(){ti(this);const f=Array.from(this.g.values()),y=Array.from(this.g.keys()),v=[];for(let b=0;b<y.length;b++){const B=f[b];for(let W=0;W<B.length;W++)v.push(y[b])}return v},s.V=function(f){ti(this);let y=[];if(typeof f=="string")as(this,f)&&(y=y.concat(this.g.get(ls(this,f))));else{f=Array.from(this.g.values());for(let v=0;v<f.length;v++)y=y.concat(f[v])}return y},s.set=function(f,y){return ti(this),this.i=null,f=ls(this,f),as(this,f)&&(this.h-=this.g.get(f).length),this.g.set(f,[y]),this.h+=1,this},s.get=function(f,y){return f?(f=this.V(f),0<f.length?String(f[0]):y):y};function os(f,y,v){to(f,y),0<v.length&&(f.i=null,f.g.set(ls(f,y),J(v)),f.h+=v.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const f=[],y=Array.from(this.g.keys());for(var v=0;v<y.length;v++){var b=y[v];const W=encodeURIComponent(String(b)),he=this.V(b);for(b=0;b<he.length;b++){var B=W;he[b]!==""&&(B+="="+encodeURIComponent(String(he[b]))),f.push(B)}}return this.i=f.join("&")};function ls(f,y){return y=String(y),f.j&&(y=y.toLowerCase()),y}function Ol(f,y){y&&!f.j&&(ti(f),f.i=null,f.g.forEach(function(v,b){var B=b.toLowerCase();b!=B&&(to(this,b),os(this,B,v))},f)),f.j=y}function xc(f,y){const v=new Ws;if(p.Image){const b=new Image;b.onload=V(ni,v,"TestLoadImage: loaded",!0,y,b),b.onerror=V(ni,v,"TestLoadImage: error",!1,y,b),b.onabort=V(ni,v,"TestLoadImage: abort",!1,y,b),b.ontimeout=V(ni,v,"TestLoadImage: timeout",!1,y,b),p.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=f}else y(!1)}function ia(f,y){const v=new Ws,b=new AbortController,B=setTimeout(()=>{b.abort(),ni(v,"TestPingServer: timeout",!1,y)},1e4);fetch(f,{signal:b.signal}).then(W=>{clearTimeout(B),W.ok?ni(v,"TestPingServer: ok",!0,y):ni(v,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(B),ni(v,"TestPingServer: error",!1,y)})}function ni(f,y,v,b,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),b(v)}catch{}}function sa(){this.g=new Rn}function Mi(f,y,v){const b=v||"";try{ea(f,function(B,W){let he=B;g(B)&&(he=Tl(B)),y.push(b+W+"="+encodeURIComponent(he))})}catch(B){throw y.push(b+"type="+encodeURIComponent("_badmap")),B}}function tr(f){this.l=f.Ub||null,this.j=f.eb||!1}F(tr,Sl),tr.prototype.g=function(){return new us(this.l,this.j)},tr.prototype.i=function(f){return function(){return f}}({});function us(f,y){gt.call(this),this.D=f,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(us,gt),s=us.prototype,s.open=function(f,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=f,this.A=y,this.readyState=1,Vi(this)},s.send=function(f){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};f&&(y.body=f),(this.D||p).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pi(this)),this.readyState=0},s.Sa=function(f){if(this.g&&(this.l=f,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=f.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")f.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in f){if(this.j=f.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xl(this)}else f.text().then(this.Ra.bind(this),this.ga.bind(this))};function xl(f){f.j.read().then(f.Pa.bind(f)).catch(f.ga.bind(f))}s.Pa=function(f){if(this.g){if(this.o&&f.value)this.response.push(f.value);else if(!this.o){var y=f.value?f.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!f.done}))&&(this.response=this.responseText+=y)}f.done?Pi(this):Vi(this),this.readyState==3&&xl(this)}},s.Ra=function(f){this.g&&(this.response=this.responseText=f,Pi(this))},s.Qa=function(f){this.g&&(this.response=f,Pi(this))},s.ga=function(){this.g&&Pi(this)};function Pi(f){f.readyState=4,f.l=null,f.j=null,f.v=null,Vi(f)}s.setRequestHeader=function(f,y){this.u.append(f,y)},s.getResponseHeader=function(f){return this.h&&this.h.get(f.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const f=[],y=this.h.entries();for(var v=y.next();!v.done;)v=v.value,f.push(v[0]+": "+v[1]),v=y.next();return f.join(`\r
`)};function Vi(f){f.onreadystatechange&&f.onreadystatechange.call(f)}Object.defineProperty(us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(f){this.m=f?"include":"same-origin"}});function kl(f){let y="";return Ee(f,function(v,b){y+=b,y+=":",y+=v,y+=`\r
`}),y}function Qt(f,y,v){e:{for(b in v){var b=!1;break e}b=!0}b||(v=kl(v),typeof f=="string"?v!=null&&encodeURIComponent(String(v)):Je(f,y,v))}function it(f){gt.call(this),this.headers=new Map,this.o=f||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(it,gt);var no=/^https?$/i,ra=["POST","PUT"];s=it.prototype,s.Ha=function(f){this.J=f},s.ea=function(f,y,v,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+f);y=y?y.toUpperCase():"GET",this.D=f,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zr.g(),this.v=this.o?wc(this.o):wc(Zr),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(y,String(f),!0),this.B=!1}catch(W){kc(this,W);return}if(f=v||"",v=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var B in b)v.set(B,b[B]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const W of b.keys())v.set(W,b.get(W));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(v.keys()).find(W=>W.toLowerCase()=="content-type"),B=p.FormData&&f instanceof p.FormData,!(0<=Array.prototype.indexOf.call(ra,y,void 0))||b||B||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,he]of v)this.g.setRequestHeader(W,he);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{aa(this),this.u=!0,this.g.send(f),this.u=!1}catch(W){kc(this,W)}};function kc(f,y){f.h=!1,f.g&&(f.j=!0,f.g.abort(),f.j=!1),f.l=y,f.m=5,io(f),Li(f)}function io(f){f.A||(f.A=!0,xt(f,"complete"),xt(f,"error"))}s.abort=function(f){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=f||7,xt(this,"complete"),xt(this,"abort"),Li(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Li(this,!0)),it.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?so(this):this.bb())},s.bb=function(){so(this)};function so(f){if(f.h&&typeof h<"u"&&(!f.v[1]||ii(f)!=4||f.Z()!=2)){if(f.u&&ii(f)==4)Ac(f.Ea,0,f);else if(xt(f,"readystatechange"),ii(f)==4){f.h=!1;try{const he=f.Z();e:switch(he){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var v;if(!(v=y)){var b;if(b=he===0){var B=String(f.D).match(Il)[1]||null;!B&&p.self&&p.self.location&&(B=p.self.location.protocol.slice(0,-1)),b=!no.test(B?B.toLowerCase():"")}v=b}if(v)xt(f,"complete"),xt(f,"success");else{f.m=6;try{var W=2<ii(f)?f.g.statusText:""}catch{W=""}f.l=W+" ["+f.Z()+"]",io(f)}}finally{Li(f)}}}}function Li(f,y){if(f.g){aa(f);const v=f.g,b=f.v[0]?()=>{}:null;f.g=null,f.v=null,y||xt(f,"ready");try{v.onreadystatechange=b}catch{}}}function aa(f){f.I&&(p.clearTimeout(f.I),f.I=null)}s.isActive=function(){return!!this.g};function ii(f){return f.g?f.g.readyState:0}s.Z=function(){try{return 2<ii(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(f){if(this.g){var y=this.g.responseText;return f&&y.indexOf(f)==0&&(y=y.substring(f.length)),Ni(y)}};function Mc(f){try{if(!f.g)return null;if("response"in f.g)return f.g.response;switch(f.H){case"":case"text":return f.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in f.g)return f.g.mozResponseArrayBuffer}return null}catch{return null}}function vd(f){const y={};f=(f.g&&2<=ii(f)&&f.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<f.length;b++){if(ne(f[b]))continue;var v=k(f[b]);const B=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const W=y[B]||[];y[B]=W,W.push(v)}M(y,function(b){return b.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function oa(f,y,v){return v&&v.internalChannelParams&&v.internalChannelParams[f]||y}function ro(f){this.Aa=0,this.i=[],this.j=new Ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=oa("failFast",!1,f),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=oa("baseRetryDelayMs",5e3,f),this.cb=oa("retryDelaySeedMs",1e4,f),this.Wa=oa("forwardChannelMaxRetries",2,f),this.wa=oa("forwardChannelRequestTimeoutMs",2e4,f),this.pa=f&&f.xmlHttpFactory||void 0,this.Xa=f&&f.Tb||void 0,this.Ca=f&&f.useFetchStreams||!1,this.L=void 0,this.J=f&&f.supportsCrossDomainXhr||!1,this.K="",this.h=new Cl(f&&f.concurrentRequestLimit),this.Da=new sa,this.P=f&&f.fastHandshake||!1,this.O=f&&f.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=f&&f.Rb||!1,f&&f.xa&&this.j.xa(),f&&f.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&f&&f.detectBufferingProxy||!1,this.ja=void 0,f&&f.longPollingTimeout&&0<f.longPollingTimeout&&(this.ja=f.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=ro.prototype,s.la=8,s.G=1,s.connect=function(f,y,v,b){It(0),this.W=f,this.H=y||{},v&&b!==void 0&&(this.H.OSID=v,this.H.OAID=b),this.F=this.X,this.I=zc(this,null,this.W),oo(this)};function Ml(f){if(Pc(f),f.G==3){var y=f.U++,v=St(f.I);if(Je(v,"SID",f.K),Je(v,"RID",y),Je(v,"TYPE","terminate"),la(f,v),y=new xi(f,f.j,y),y.L=2,y.v=na(St(v)),v=!1,p.navigator&&p.navigator.sendBeacon)try{v=p.navigator.sendBeacon(y.v.toString(),"")}catch{}!v&&p.Image&&(new Image().src=y.v,v=!0),v||(y.g=Hc(y.j,null),y.g.ea(y.v)),y.F=Date.now(),yt(y)}Bc(f)}function ao(f){f.g&&(ua(f),f.g.cancel(),f.g=null)}function Pc(f){ao(f),f.u&&(p.clearTimeout(f.u),f.u=null),lo(f),f.h.cancel(),f.s&&(typeof f.s=="number"&&p.clearTimeout(f.s),f.s=null)}function oo(f){if(!Rl(f.h)&&!f.s){f.s=!0;var y=f.Ga;Ae||x(),ue||(Ae(),ue=!0),z.add(y,f),f.B=0}}function Ed(f,y){return Nc(f.h)>=f.h.j-(f.s?1:0)?!1:f.s?(f.i=y.D.concat(f.i),!0):f.G==1||f.G==2||f.B>=(f.Va?0:f.Wa)?!1:(f.s=Gs(I(f.Ga,f,y),Ll(f,f.B)),f.B++,!0)}s.Ga=function(f){if(this.s)if(this.s=null,this.G==1){if(!f){this.U=Math.floor(1e5*Math.random()),f=this.U++;const B=new xi(this,this.j,f);let W=this.o;if(this.S&&(W?(W=R(W),N(W,this.S)):W=this.S),this.m!==null||this.O||(B.H=W,W=null),this.P)e:{for(var y=0,v=0;v<this.i.length;v++){t:{var b=this.i[v];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(y+=b,4096<y){y=v;break e}if(y===4096||v===this.i.length-1){y=v+1;break e}}y=1e3}else y=1e3;y=Vc(this,B,y),v=St(this.I),Je(v,"RID",f),Je(v,"CVER",22),this.D&&Je(v,"X-HTTP-Session-Id",this.D),la(this,v),W&&(this.O?y="headers="+encodeURIComponent(String(kl(W)))+"&"+y:this.m&&Qt(v,this.m,W)),Zs(this.h,B),this.Ua&&Je(v,"TYPE","init"),this.P?(Je(v,"$req",y),Je(v,"SID","null"),B.T=!0,yi(B,v,null)):yi(B,v,y),this.G=2}}else this.G==3&&(f?Pl(this,f):this.i.length==0||Rl(this.h)||Pl(this))};function Pl(f,y){var v;y?v=y.l:v=f.U++;const b=St(f.I);Je(b,"SID",f.K),Je(b,"RID",v),Je(b,"AID",f.T),la(f,b),f.m&&f.o&&Qt(b,f.m,f.o),v=new xi(f,f.j,v,f.B+1),f.m===null&&(v.H=f.o),y&&(f.i=y.D.concat(f.i)),y=Vc(f,v,1e3),v.I=Math.round(.5*f.wa)+Math.round(.5*f.wa*Math.random()),Zs(f.h,v),yi(v,b,y)}function la(f,y){f.H&&Ee(f.H,function(v,b){Je(y,b,v)}),f.l&&ea({},function(v,b){Je(y,b,v)})}function Vc(f,y,v){v=Math.min(f.i.length,v);var b=f.l?I(f.l.Na,f.l,f):null;e:{var B=f.i;let W=-1;for(;;){const he=["count="+v];W==-1?0<v?(W=B[0].g,he.push("ofs="+W)):W=0:he.push("ofs="+W);let Ke=!0;for(let jt=0;jt<v;jt++){let Qe=B[jt].g;const Yt=B[jt].map;if(Qe-=W,0>Qe)W=Math.max(0,B[jt].g-100),Ke=!1;else try{Mi(Yt,he,"req"+Qe+"_")}catch{b&&b(Yt)}}if(Ke){b=he.join("&");break e}}}return f=f.i.splice(0,v),y.D=f,b}function Lc(f){if(!f.g&&!f.u){f.Y=1;var y=f.Fa;Ae||x(),ue||(Ae(),ue=!0),z.add(y,f),f.v=0}}function Vl(f){return f.g||f.u||3<=f.v?!1:(f.Y++,f.u=Gs(I(f.Fa,f),Ll(f,f.v)),f.v++,!0)}s.Fa=function(){if(this.u=null,Uc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var f=2*this.R;this.j.info("BP detection timer enabled: "+f),this.A=Gs(I(this.ab,this),f)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),ao(this),Uc(this))};function ua(f){f.A!=null&&(p.clearTimeout(f.A),f.A=null)}function Uc(f){f.g=new xi(f,f.j,"rpc",f.Y),f.m===null&&(f.g.H=f.o),f.g.O=0;var y=St(f.qa);Je(y,"RID","rpc"),Je(y,"SID",f.K),Je(y,"AID",f.T),Je(y,"CI",f.F?"0":"1"),!f.F&&f.ja&&Je(y,"TO",f.ja),Je(y,"TYPE","xmlhttp"),la(f,y),f.m&&f.o&&Qt(y,f.m,f.o),f.L&&(f.g.I=f.L);var v=f.g;f=f.ia,v.L=1,v.v=na(St(y)),v.m=null,v.P=!0,ss(v,f)}s.Za=function(){this.C!=null&&(this.C=null,ao(this),Vl(this),It(19))};function lo(f){f.C!=null&&(p.clearTimeout(f.C),f.C=null)}function jc(f,y){var v=null;if(f.g==y){lo(f),ua(f),f.g=null;var b=2}else if(Xs(f.h,y))v=y.D,Jn(f.h,y),b=1;else return;if(f.G!=0){if(y.o)if(b==1){v=y.m?y.m.length:0,y=Date.now()-y.F;var B=f.B;b=Ya(),xt(b,new Cc(b,v)),oo(f)}else Lc(f);else if(B=y.s,B==3||B==0&&0<y.X||!(b==1&&Ed(f,y)||b==2&&Vl(f)))switch(v&&0<v.length&&(y=f.h,y.i=y.i.concat(v)),B){case 1:cs(f,5);break;case 4:cs(f,10);break;case 3:cs(f,6);break;default:cs(f,2)}}}function Ll(f,y){let v=f.Ta+Math.floor(Math.random()*f.cb);return f.isActive()||(v*=2),v*y}function cs(f,y){if(f.j.info("Error code "+y),y==2){var v=I(f.fb,f),b=f.Xa;const B=!b;b=new rs(b||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Js(b,"https"),na(b),B?xc(b.toString(),v):ia(b.toString(),v)}else It(2);f.G=0,f.l&&f.l.sa(y),Bc(f),Pc(f)}s.fb=function(f){f?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Bc(f){if(f.G=0,f.ka=[],f.l){const y=In(f.h);(y.length!=0||f.i.length!=0)&&(G(f.ka,y),G(f.ka,f.i),f.h.i.length=0,J(f.i),f.i.length=0),f.l.ra()}}function zc(f,y,v){var b=v instanceof rs?St(v):new rs(v);if(b.g!="")y&&(b.g=y+"."+b.g),ta(b,b.s);else{var B=p.location;b=B.protocol,y=y?y+"."+B.hostname:B.hostname,B=+B.port;var W=new rs(null);b&&Js(W,b),y&&(W.g=y),B&&ta(W,B),v&&(W.l=v),b=W}return v=f.D,y=f.ya,v&&y&&Je(b,v,y),Je(b,"VER",f.la),la(f,b),b}function Hc(f,y,v){if(y&&!f.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=f.Ca&&!f.pa?new it(new tr({eb:v})):new it(f.pa),y.Ha(f.J),y}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fc(){}s=Fc.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function uo(){}uo.prototype.g=function(f,y){return new Nn(f,y)};function Nn(f,y){gt.call(this),this.g=new ro(y),this.l=f,this.h=y&&y.messageUrlParams||null,f=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(f?f["X-Client-Protocol"]="webchannel":f={"X-Client-Protocol":"webchannel"}),this.g.o=f,f=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(f?f["X-WebChannel-Content-Type"]=y.messageContentType:f={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(f?f["X-WebChannel-Client-Profile"]=y.va:f={"X-WebChannel-Client-Profile":y.va}),this.g.S=f,(f=y&&y.Sb)&&!ne(f)&&(this.g.m=f),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!ne(y)&&(this.g.D=y,f=this.h,f!==null&&y in f&&(f=this.h,y in f&&delete f[y])),this.j=new Ui(this)}F(Nn,gt),Nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nn.prototype.close=function(){Ml(this.g)},Nn.prototype.o=function(f){var y=this.g;if(typeof f=="string"){var v={};v.__data__=f,f=v}else this.u&&(v={},v.__data__=Tl(f),f=v);y.i.push(new pd(y.Ya++,f)),y.G==3&&oo(y)},Nn.prototype.N=function(){this.g.l=null,delete this.j,Ml(this.g),delete this.g,Nn.aa.N.call(this)};function qc(f){Hs.call(this),f.__headers__&&(this.headers=f.__headers__,this.statusCode=f.__status__,delete f.__headers__,delete f.__status__);var y=f.__sm__;if(y){e:{for(const v in y){f=v;break e}f=void 0}(this.i=f)&&(f=this.i,y=y!==null&&f in y?y[f]:void 0),this.data=y}else this.data=f}F(qc,Hs);function Gc(){gi.call(this),this.status=1}F(Gc,gi);function Ui(f){this.g=f}F(Ui,Fc),Ui.prototype.ua=function(){xt(this.g,"a")},Ui.prototype.ta=function(f){xt(this.g,new qc(f))},Ui.prototype.sa=function(f){xt(this.g,new Gc)},Ui.prototype.ra=function(){xt(this.g,"b")},uo.prototype.createWebChannel=uo.prototype.g,Nn.prototype.send=Nn.prototype.o,Nn.prototype.open=Nn.prototype.m,Nn.prototype.close=Nn.prototype.close,dw=function(){return new uo},fw=function(){return Ya()},hw=Zn,nm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ut.NO_ERROR=0,Ut.TIMEOUT=8,Ut.HTTP_ERROR=6,rf=Ut,is.COMPLETE="complete",cw=is,bc.EventType=Di,Di.OPEN="a",Di.CLOSE="b",Di.ERROR="c",Di.MESSAGE="d",gt.prototype.listen=gt.prototype.K,Uu=bc,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,uw=it}).apply(typeof Wh<"u"?Wh:typeof self<"u"?self:typeof window<"u"?window:{});const rS="@firebase/firestore",aS="4.7.9";/**
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
 */class vn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vn.UNAUTHENTICATED=new vn(null),vn.GOOGLE_CREDENTIALS=new vn("google-credentials-uid"),vn.FIRST_PARTY=new vn("first-party-uid"),vn.MOCK_USER=new vn("mock-user");/**
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
 */let ml="11.4.0";/**
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
 */const za=new zf("@firebase/firestore");function zo(){return za.logLevel}function ve(s,...e){if(za.logLevel<=ze.DEBUG){const t=e.map(ng);za.debug(`Firestore (${ml}): ${s}`,...t)}}function Ls(s,...e){if(za.logLevel<=ze.ERROR){const t=e.map(ng);za.error(`Firestore (${ml}): ${s}`,...t)}}function nl(s,...e){if(za.logLevel<=ze.WARN){const t=e.map(ng);za.warn(`Firestore (${ml}): ${s}`,...t)}}function ng(s){if(typeof s=="string")return s;try{/**
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
 */function xe(s="Unexpected state"){const e=`FIRESTORE (${ml}) INTERNAL ASSERTION FAILED: `+s;throw Ls(e),new Error(e)}function rt(s,e){s||xe()}function Pe(s,e){return s}/**
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
 */const ae={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Re extends js{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class pw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(vn.UNAUTHENTICATED))}shutdown(){}}class Ck{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Rk{constructor(e){this.t=e,this.currentUser=vn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){rt(this.o===void 0);let r=this.i;const o=m=>this.i!==r?(r=this.i,t(m)):Promise.resolve();let u=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new kr,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const m=u;e.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},p=m=>{ve("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(ve("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new kr)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ve("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(rt(typeof r.accessToken=="string"),new pw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return rt(e===null||typeof e=="string"),new vn(e)}}class Ik{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=vn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Nk{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Ik(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(vn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dk{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ln(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){rt(this.o===void 0);const r=u=>{u.error!=null&&ve("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ve("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>r(u))};const o=u=>{ve("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ve("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new oS(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(rt(typeof t.token=="string"),this.R=t.token,new oS(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ok(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<s;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class _w{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=Ok(40);for(let u=0;u<o.length;++u)r.length<20&&o[u]<t&&(r+=e.charAt(o[u]%62))}return r}}function Ge(s,e){return s<e?-1:s>e?1:0}function il(s,e,t){return s.length===e.length&&s.every((r,o)=>t(r,e[o]))}/**
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
 */const lS=-62135596800,uS=1e6;class qt{static now(){return qt.fromMillis(Date.now())}static fromDate(e){return qt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*uS);return new qt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Re(ae.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Re(ae.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<lS)throw new Re(ae.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Re(ae.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uS}_compareTo(e){return this.seconds===e.seconds?Ge(this.nanoseconds,e.nanoseconds):Ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-lS;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ke{static fromTimestamp(e){return new ke(e)}static min(){return new ke(new qt(0,0))}static max(){return new ke(new qt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const cS="__name__";class Gi{constructor(e,t,r){t===void 0?t=0:t>e.length&&xe(),r===void 0?r=e.length-t:r>e.length-t&&xe(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Gi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const u=Gi.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=Gi.isNumericId(e),o=Gi.isNumericId(t);return r&&!o?-1:!r&&o?1:r&&o?Gi.extractNumericId(e).compare(Gi.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xr.fromString(e.substring(4,e.length-2))}}class Ct extends Gi{construct(e,t,r){return new Ct(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Re(ae.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(o=>o.length>0))}return new Ct(t)}static emptyPath(){return new Ct([])}}const xk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class hn extends Gi{construct(e,t,r){return new hn(e,t,r)}static isValidIdentifier(e){return xk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),hn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cS}static keyField(){return new hn([cS])}static fromServerFormat(e){const t=[];let r="",o=0;const u=()=>{if(r.length===0)throw new Re(ae.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new Re(ae.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new Re(ae.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=m,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(r+=p,o++):(u(),o++)}if(u(),h)throw new Re(ae.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new hn(t)}static emptyPath(){return new hn([])}}/**
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
 */class Ie{constructor(e){this.path=e}static fromPath(e){return new Ie(Ct.fromString(e))}static fromName(e){return new Ie(Ct.fromString(e).popFirst(5))}static empty(){return new Ie(Ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ct.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ct.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ie(new Ct(e.slice()))}}/**
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
 */const nc=-1;function kk(s,e){const t=s.toTimestamp().seconds,r=s.toTimestamp().nanoseconds+1,o=ke.fromTimestamp(r===1e9?new qt(t+1,0):new qt(t,r));return new Lr(o,Ie.empty(),e)}function Mk(s){return new Lr(s.readTime,s.key,nc)}class Lr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Lr(ke.min(),Ie.empty(),nc)}static max(){return new Lr(ke.max(),Ie.empty(),nc)}}function Pk(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=Ie.comparator(s.documentKey,e.documentKey),t!==0?t:Ge(s.largestBatchId,e.largestBatchId))}/**
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
 */const Vk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function gl(s){if(s.code!==ae.FAILED_PRECONDITION||s.message!==Vk)throw s;ve("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class te{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&xe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new te((r,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(r,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(r,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof te?t:te.resolve(t)}catch(t){return te.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):te.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):te.reject(t)}static resolve(e){return new te((t,r)=>{t(e)})}static reject(e){return new te((t,r)=>{r(e)})}static waitFor(e){return new te((t,r)=>{let o=0,u=0,h=!1;e.forEach(p=>{++o,p.next(()=>{++u,h&&u===o&&t()},m=>r(m))}),h=!0,u===o&&t()})}static or(e){let t=te.resolve(!1);for(const r of e)t=t.next(o=>o?te.resolve(o):r());return t}static forEach(e,t){const r=[];return e.forEach((o,u)=>{r.push(t.call(this,o,u))}),this.waitFor(r)}static mapArray(e,t){return new te((r,o)=>{const u=e.length,h=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;t(e[g]).next(T=>{h[g]=T,++p,p===u&&r(h)},T=>o(T))}})}static doWhile(e,t){return new te((r,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):r()};u()})}}function Uk(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function yl(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class $f{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}$f.ae=-1;/**
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
 */const ig=-1;function Xf(s){return s==null}function Rf(s){return s===0&&1/s==-1/0}function jk(s){return typeof s=="number"&&Number.isInteger(s)&&!Rf(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
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
 */const mw="";function Bk(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=hS(e)),e=zk(s.get(t),e);return hS(e)}function zk(s,e){let t=e;const r=s.length;for(let o=0;o<r;o++){const u=s.charAt(o);switch(u){case"\0":t+="";break;case mw:t+="";break;default:t+=u}}return t}function hS(s){return s+mw+""}/**
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
 */function fS(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function Qr(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function gw(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
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
 */class Tt{constructor(e,t){this.comparator=e,this.root=t||un.EMPTY}insert(e,t){return new Tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,un.BLACK,null,null))}remove(e){return new Tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,un.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kh(this.root,e,this.comparator,!0)}}class Kh{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?r(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class un{constructor(e,t,r,o,u){this.key=e,this.value=t,this.color=r??un.RED,this.left=o??un.EMPTY,this.right=u??un.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,u){return new un(e??this.key,t??this.value,r??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const u=r(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,r),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return un.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return un.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,un.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,un.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw xe();const e=this.left.check();if(e!==this.right.check())throw xe();return e+(this.isRed()?0:1)}}un.EMPTY=null,un.RED=!0,un.BLACK=!1;un.EMPTY=new class{constructor(){this.size=0}get key(){throw xe()}get value(){throw xe()}get color(){throw xe()}get left(){throw xe()}get right(){throw xe()}copy(e,t,r,o,u){return this}insert(e,t,r){return new un(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Gt{constructor(e){this.comparator=e,this.data=new Tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new dS(this.data.getIterator())}getIteratorFrom(e){return new dS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Gt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=r.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Gt(this.comparator);return t.data=e,t}}class dS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Kn{constructor(e){this.fields=e,e.sort(hn.comparator)}static empty(){return new Kn([])}unionWith(e){let t=new Gt(hn.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Kn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return il(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class yw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new yw("Invalid base64 string: "+u):u}}(e);return new dn(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new dn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dn.EMPTY_BYTE_STRING=new dn("");const Hk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(s){if(rt(!!s),typeof s=="string"){let e=0;const t=Hk.exec(s);if(rt(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(s);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Dt(s.seconds),nanos:Dt(s.nanos)}}function Dt(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function jr(s){return typeof s=="string"?dn.fromBase64String(s):dn.fromUint8Array(s)}/**
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
 */const vw="server_timestamp",Ew="__type__",Tw="__previous_value__",Sw="__local_write_time__";function sg(s){var e,t;return((t=(((e=s==null?void 0:s.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ew])===null||t===void 0?void 0:t.stringValue)===vw}function Zf(s){const e=s.mapValue.fields[Tw];return sg(e)?Zf(e):e}function ic(s){const e=Ur(s.mapValue.fields[Sw].timestampValue);return new qt(e.seconds,e.nanos)}/**
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
 */class Fk{constructor(e,t,r,o,u,h,p,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g}}const If="(default)";class sc{constructor(e,t){this.projectId=e,this.database=t||If}static empty(){return new sc("","")}get isDefaultDatabase(){return this.database===If}isEqual(e){return e instanceof sc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Aw="__type__",qk="__max__",Qh={mapValue:{}},ww="__vector__",Nf="value";function Br(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?sg(s)?4:Wk(s)?9007199254740991:Gk(s)?10:11:xe()}function Ji(s,e){if(s===e)return!0;const t=Br(s);if(t!==Br(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return ic(s).isEqual(ic(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ur(o.timestampValue),p=Ur(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(s,e);case 5:return s.stringValue===e.stringValue;case 6:return function(o,u){return jr(o.bytesValue).isEqual(jr(u.bytesValue))}(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return function(o,u){return Dt(o.geoPointValue.latitude)===Dt(u.geoPointValue.latitude)&&Dt(o.geoPointValue.longitude)===Dt(u.geoPointValue.longitude)}(s,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Dt(o.integerValue)===Dt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=Dt(o.doubleValue),p=Dt(u.doubleValue);return h===p?Rf(h)===Rf(p):isNaN(h)&&isNaN(p)}return!1}(s,e);case 9:return il(s.arrayValue.values||[],e.arrayValue.values||[],Ji);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(fS(h)!==fS(p))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(p[m]===void 0||!Ji(h[m],p[m])))return!1;return!0}(s,e);default:return xe()}}function rc(s,e){return(s.values||[]).find(t=>Ji(t,e))!==void 0}function sl(s,e){if(s===e)return 0;const t=Br(s),r=Br(e);if(t!==r)return Ge(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ge(s.booleanValue,e.booleanValue);case 2:return function(u,h){const p=Dt(u.integerValue||u.doubleValue),m=Dt(h.integerValue||h.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(s,e);case 3:return pS(s.timestampValue,e.timestampValue);case 4:return pS(ic(s),ic(e));case 5:return Ge(s.stringValue,e.stringValue);case 6:return function(u,h){const p=jr(u),m=jr(h);return p.compareTo(m)}(s.bytesValue,e.bytesValue);case 7:return function(u,h){const p=u.split("/"),m=h.split("/");for(let g=0;g<p.length&&g<m.length;g++){const T=Ge(p[g],m[g]);if(T!==0)return T}return Ge(p.length,m.length)}(s.referenceValue,e.referenceValue);case 8:return function(u,h){const p=Ge(Dt(u.latitude),Dt(h.latitude));return p!==0?p:Ge(Dt(u.longitude),Dt(h.longitude))}(s.geoPointValue,e.geoPointValue);case 9:return _S(s.arrayValue,e.arrayValue);case 10:return function(u,h){var p,m,g,T;const S=u.fields||{},I=h.fields||{},V=(p=S[Nf])===null||p===void 0?void 0:p.arrayValue,F=(m=I[Nf])===null||m===void 0?void 0:m.arrayValue,J=Ge(((g=V==null?void 0:V.values)===null||g===void 0?void 0:g.length)||0,((T=F==null?void 0:F.values)===null||T===void 0?void 0:T.length)||0);return J!==0?J:_S(V,F)}(s.mapValue,e.mapValue);case 11:return function(u,h){if(u===Qh.mapValue&&h===Qh.mapValue)return 0;if(u===Qh.mapValue)return 1;if(h===Qh.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=h.fields||{},T=Object.keys(g);m.sort(),T.sort();for(let S=0;S<m.length&&S<T.length;++S){const I=Ge(m[S],T[S]);if(I!==0)return I;const V=sl(p[m[S]],g[T[S]]);if(V!==0)return V}return Ge(m.length,T.length)}(s.mapValue,e.mapValue);default:throw xe()}}function pS(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return Ge(s,e);const t=Ur(s),r=Ur(e),o=Ge(t.seconds,r.seconds);return o!==0?o:Ge(t.nanos,r.nanos)}function _S(s,e){const t=s.values||[],r=e.values||[];for(let o=0;o<t.length&&o<r.length;++o){const u=sl(t[o],r[o]);if(u)return u}return Ge(t.length,r.length)}function rl(s){return im(s)}function im(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?function(t){const r=Ur(t);return`time(${r.seconds},${r.nanos})`}(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?function(t){return jr(t).toBase64()}(s.bytesValue):"referenceValue"in s?function(t){return Ie.fromName(t).toString()}(s.referenceValue):"geoPointValue"in s?function(t){return`geo(${t.latitude},${t.longitude})`}(s.geoPointValue):"arrayValue"in s?function(t){let r="[",o=!0;for(const u of t.values||[])o?o=!1:r+=",",r+=im(u);return r+"]"}(s.arrayValue):"mapValue"in s?function(t){const r=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of r)u?u=!1:o+=",",o+=`${h}:${im(t.fields[h])}`;return o+"}"}(s.mapValue):xe()}function af(s){switch(Br(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zf(s);return e?16+af(e):16;case 5:return 2*s.stringValue.length;case 6:return jr(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((o,u)=>o+af(u),0)}(s.arrayValue);case 10:case 11:return function(r){let o=0;return Qr(r.fields,(u,h)=>{o+=u.length+af(h)}),o}(s.mapValue);default:throw xe()}}function sm(s){return!!s&&"integerValue"in s}function rg(s){return!!s&&"arrayValue"in s}function mS(s){return!!s&&"nullValue"in s}function gS(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function of(s){return!!s&&"mapValue"in s}function Gk(s){var e,t;return((t=(((e=s==null?void 0:s.mapValue)===null||e===void 0?void 0:e.fields)||{})[Aw])===null||t===void 0?void 0:t.stringValue)===ww}function Wu(s){if(s.geoPointValue)return{geoPointValue:Object.assign({},s.geoPointValue)};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:Object.assign({},s.timestampValue)};if(s.mapValue){const e={mapValue:{fields:{}}};return Qr(s.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Wu(r)),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wu(s.arrayValue.values[t]);return e}return Object.assign({},s)}function Wk(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===qk}/**
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
 */class Un{constructor(e){this.value=e}static empty(){return new Un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!of(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wu(t)}setAll(e){let t=hn.emptyPath(),r={},o=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const m=this.getFieldsMap(t);this.applyChanges(m,r,o),r={},o=[],t=p.popLast()}h?r[p.lastSegment()]=Wu(h):o.push(p.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,r,o)}delete(e){const t=this.field(e.popLast());of(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ji(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];of(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){Qr(t,(o,u)=>e[o]=u);for(const o of r)delete e[o]}clone(){return new Un(Wu(this.value))}}function bw(s){const e=[];return Qr(s.fields,(t,r)=>{const o=new hn([t]);if(of(r)){const u=bw(r.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Kn(e)}/**
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
 */class Sn{constructor(e,t,r,o,u,h,p){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(e){return new Sn(e,0,ke.min(),ke.min(),ke.min(),Un.empty(),0)}static newFoundDocument(e,t,r,o){return new Sn(e,1,t,ke.min(),r,o,0)}static newNoDocument(e,t){return new Sn(e,2,t,ke.min(),ke.min(),Un.empty(),0)}static newUnknownDocument(e,t){return new Sn(e,3,t,ke.min(),ke.min(),Un.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Sn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Sn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Df{constructor(e,t){this.position=e,this.inclusive=t}}function yS(s,e,t){let r=0;for(let o=0;o<s.position.length;o++){const u=e[o],h=s.position[o];if(u.field.isKeyField()?r=Ie.comparator(Ie.fromName(h.referenceValue),t.key):r=sl(h,t.data.field(u.field)),u.dir==="desc"&&(r*=-1),r!==0)break}return r}function vS(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!Ji(s.position[t],e.position[t]))return!1;return!0}/**
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
 */class Of{constructor(e,t="asc"){this.field=e,this.dir=t}}function Kk(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
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
 */class Cw{}class Ft extends Cw{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Yk(e,t,r):t==="array-contains"?new Zk(e,r):t==="in"?new Jk(e,r):t==="not-in"?new e2(e,r):t==="array-contains-any"?new t2(e,r):new Ft(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new $k(e,r):new Xk(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(sl(t,this.value)):t!==null&&Br(this.value)===Br(t)&&this.matchesComparison(sl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return xe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class es extends Cw{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new es(e,t)}matches(e){return Rw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Rw(s){return s.op==="and"}function Iw(s){return Qk(s)&&Rw(s)}function Qk(s){for(const e of s.filters)if(e instanceof es)return!1;return!0}function rm(s){if(s instanceof Ft)return s.field.canonicalString()+s.op.toString()+rl(s.value);if(Iw(s))return s.filters.map(e=>rm(e)).join(",");{const e=s.filters.map(t=>rm(t)).join(",");return`${s.op}(${e})`}}function Nw(s,e){return s instanceof Ft?function(r,o){return o instanceof Ft&&r.op===o.op&&r.field.isEqual(o.field)&&Ji(r.value,o.value)}(s,e):s instanceof es?function(r,o){return o instanceof es&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce((u,h,p)=>u&&Nw(h,o.filters[p]),!0):!1}(s,e):void xe()}function Dw(s){return s instanceof Ft?function(t){return`${t.field.canonicalString()} ${t.op} ${rl(t.value)}`}(s):s instanceof es?function(t){return t.op.toString()+" {"+t.getFilters().map(Dw).join(" ,")+"}"}(s):"Filter"}class Yk extends Ft{constructor(e,t,r){super(e,t,r),this.key=Ie.fromName(r.referenceValue)}matches(e){const t=Ie.comparator(e.key,this.key);return this.matchesComparison(t)}}class $k extends Ft{constructor(e,t){super(e,"in",t),this.keys=Ow("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Xk extends Ft{constructor(e,t){super(e,"not-in",t),this.keys=Ow("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ow(s,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Ie.fromName(r.referenceValue))}class Zk extends Ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return rg(t)&&rc(t.arrayValue,this.value)}}class Jk extends Ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&rc(this.value.arrayValue,t)}}class e2 extends Ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(rc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!rc(this.value.arrayValue,t)}}class t2 extends Ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!rg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>rc(this.value.arrayValue,r))}}/**
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
 */class n2{constructor(e,t=null,r=[],o=[],u=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.le=null}}function ES(s,e=null,t=[],r=[],o=null,u=null,h=null){return new n2(s,e,t,r,o,u,h)}function ag(s){const e=Pe(s);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>rm(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(u){return u.field.canonicalString()+u.dir}(r)).join(","),Xf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>rl(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>rl(r)).join(",")),e.le=t}return e.le}function og(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!Kk(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!Nw(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!vS(s.startAt,e.startAt)&&vS(s.endAt,e.endAt)}function am(s){return Ie.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
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
 */class Jf{constructor(e,t=null,r=[],o=[],u=null,h="F",p=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=m,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function i2(s,e,t,r,o,u,h,p){return new Jf(s,e,t,r,o,u,h,p)}function lg(s){return new Jf(s)}function TS(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function s2(s){return s.collectionGroup!==null}function Ku(s){const e=Pe(s);if(e.he===null){e.he=[];const t=new Set;for(const u of e.explicitOrderBy)e.he.push(u),t.add(u.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Gt(hn.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(p=p.add(g.field))})}),p})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.he.push(new Of(u,r))}),t.has(hn.keyField().canonicalString())||e.he.push(new Of(hn.keyField(),r))}return e.he}function $i(s){const e=Pe(s);return e.Pe||(e.Pe=r2(e,Ku(s))),e.Pe}function r2(s,e){if(s.limitType==="F")return ES(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Of(o.field,u)});const t=s.endAt?new Df(s.endAt.position,s.endAt.inclusive):null,r=s.startAt?new Df(s.startAt.position,s.startAt.inclusive):null;return ES(s.path,s.collectionGroup,e,s.filters,s.limit,t,r)}}function om(s,e,t){return new Jf(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function ed(s,e){return og($i(s),$i(e))&&s.limitType===e.limitType}function xw(s){return`${ag($i(s))}|lt:${s.limitType}`}function Ho(s){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(o=>Dw(o)).join(", ")}]`),Xf(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(o=>rl(o)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(o=>rl(o)).join(",")),`Target(${r})`}($i(s))}; limitType=${s.limitType})`}function td(s,e){return e.isFoundDocument()&&function(r,o){const u=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(u):Ie.isDocumentKey(r.path)?r.path.isEqual(u):r.path.isImmediateParentOf(u)}(s,e)&&function(r,o){for(const u of Ku(r))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(s,e)&&function(r,o){for(const u of r.filters)if(!u.matches(o))return!1;return!0}(s,e)&&function(r,o){return!(r.startAt&&!function(h,p,m){const g=yS(h,p,m);return h.inclusive?g<=0:g<0}(r.startAt,Ku(r),o)||r.endAt&&!function(h,p,m){const g=yS(h,p,m);return h.inclusive?g>=0:g>0}(r.endAt,Ku(r),o))}(s,e)}function a2(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function kw(s){return(e,t)=>{let r=!1;for(const o of Ku(s)){const u=o2(o,e,t);if(u!==0)return u;r=r||o.field.isKeyField()}return 0}}function o2(s,e,t){const r=s.field.isKeyField()?Ie.comparator(e.key,t.key):function(u,h,p){const m=h.data.field(u),g=p.data.field(u);return m!==null&&g!==null?sl(m,g):xe()}(s.field,e,t);switch(s.dir){case"asc":return r;case"desc":return-1*r;default:return xe()}}/**
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
 */class Ka{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[o,u]of r)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[t]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,(t,r)=>{for(const[o,u]of r)e(o,u)})}isEmpty(){return gw(this.inner)}size(){return this.innerSize}}/**
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
 */const l2=new Tt(Ie.comparator);function Us(){return l2}const Mw=new Tt(Ie.comparator);function ju(...s){let e=Mw;for(const t of s)e=e.insert(t.key,t);return e}function Pw(s){let e=Mw;return s.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ka(){return Qu()}function Vw(){return Qu()}function Qu(){return new Ka(s=>s.toString(),(s,e)=>s.isEqual(e))}const u2=new Tt(Ie.comparator),c2=new Gt(Ie.comparator);function Fe(...s){let e=c2;for(const t of s)e=e.add(t);return e}const h2=new Gt(Ge);function f2(){return h2}/**
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
 */function ug(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rf(e)?"-0":e}}function Lw(s){return{integerValue:""+s}}function d2(s,e){return jk(e)?Lw(e):ug(s,e)}/**
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
 */class nd{constructor(){this._=void 0}}function p2(s,e,t){return s instanceof xf?function(o,u){const h={fields:{[Ew]:{stringValue:vw},[Sw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&sg(u)&&(u=Zf(u)),u&&(h.fields[Tw]=u),{mapValue:h}}(t,e):s instanceof al?jw(s,e):s instanceof ac?Bw(s,e):function(o,u){const h=Uw(o,u),p=SS(h)+SS(o.Ie);return sm(h)&&sm(o.Ie)?Lw(p):ug(o.serializer,p)}(s,e)}function _2(s,e,t){return s instanceof al?jw(s,e):s instanceof ac?Bw(s,e):t}function Uw(s,e){return s instanceof kf?function(r){return sm(r)||function(u){return!!u&&"doubleValue"in u}(r)}(e)?e:{integerValue:0}:null}class xf extends nd{}class al extends nd{constructor(e){super(),this.elements=e}}function jw(s,e){const t=zw(e);for(const r of s.elements)t.some(o=>Ji(o,r))||t.push(r);return{arrayValue:{values:t}}}class ac extends nd{constructor(e){super(),this.elements=e}}function Bw(s,e){let t=zw(e);for(const r of s.elements)t=t.filter(o=>!Ji(o,r));return{arrayValue:{values:t}}}class kf extends nd{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function SS(s){return Dt(s.integerValue||s.doubleValue)}function zw(s){return rg(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
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
 */class m2{constructor(e,t){this.field=e,this.transform=t}}function g2(s,e){return s.field.isEqual(e.field)&&function(r,o){return r instanceof al&&o instanceof al||r instanceof ac&&o instanceof ac?il(r.elements,o.elements,Ji):r instanceof kf&&o instanceof kf?Ji(r.Ie,o.Ie):r instanceof xf&&o instanceof xf}(s.transform,e.transform)}class y2{constructor(e,t){this.version=e,this.transformResults=t}}class Xi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xi}static exists(e){return new Xi(void 0,e)}static updateTime(e){return new Xi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lf(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class id{}function Hw(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new qw(s.key,Xi.none()):new yc(s.key,s.data,Xi.none());{const t=s.data,r=Un.empty();let o=new Gt(hn.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?r.delete(u):r.set(u,h),o=o.add(u)}return new Yr(s.key,r,new Kn(o.toArray()),Xi.none())}}function v2(s,e,t){s instanceof yc?function(o,u,h){const p=o.value.clone(),m=wS(o.fieldTransforms,u,h.transformResults);p.setAll(m),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(s,e,t):s instanceof Yr?function(o,u,h){if(!lf(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=wS(o.fieldTransforms,u,h.transformResults),m=u.data;m.setAll(Fw(o)),m.setAll(p),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(s,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Yu(s,e,t,r){return s instanceof yc?function(u,h,p,m){if(!lf(u.precondition,h))return p;const g=u.value.clone(),T=bS(u.fieldTransforms,m,h);return g.setAll(T),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null}(s,e,t,r):s instanceof Yr?function(u,h,p,m){if(!lf(u.precondition,h))return p;const g=bS(u.fieldTransforms,m,h),T=h.data;return T.setAll(Fw(u)),T.setAll(g),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(s,e,t,r):function(u,h,p){return lf(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(s,e,t)}function E2(s,e){let t=null;for(const r of s.fieldTransforms){const o=e.data.field(r.field),u=Uw(r.transform,o||null);u!=null&&(t===null&&(t=Un.empty()),t.set(r.field,u))}return t||null}function AS(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&il(r,o,(u,h)=>g2(u,h))}(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class yc extends id{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Yr extends id{constructor(e,t,r,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Fw(s){const e=new Map;return s.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=s.data.field(t);e.set(t,r)}}),e}function wS(s,e,t){const r=new Map;rt(s.length===t.length);for(let o=0;o<t.length;o++){const u=s[o],h=u.transform,p=e.data.field(u.field);r.set(u.field,_2(h,p,t[o]))}return r}function bS(s,e,t){const r=new Map;for(const o of s){const u=o.transform,h=t.data.field(o.field);r.set(o.field,p2(u,h,e))}return r}class qw extends id{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class T2 extends id{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class S2{constructor(e,t,r,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&v2(u,e,r[o])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Yu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Yu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Vw();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=t.has(o.key)?null:p;const m=Hw(h,p);m!==null&&r.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(ke.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Fe())}isEqual(e){return this.batchId===e.batchId&&il(this.mutations,e.mutations,(t,r)=>AS(t,r))&&il(this.baseMutations,e.baseMutations,(t,r)=>AS(t,r))}}class cg{constructor(e,t,r,o){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=o}static from(e,t,r){rt(e.mutations.length===r.length);let o=function(){return u2}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,r[h].version);return new cg(e,t,r,o)}}/**
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
 */class A2{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class w2{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Vt,$e;function b2(s){switch(s){case ae.OK:return xe();case ae.CANCELLED:case ae.UNKNOWN:case ae.DEADLINE_EXCEEDED:case ae.RESOURCE_EXHAUSTED:case ae.INTERNAL:case ae.UNAVAILABLE:case ae.UNAUTHENTICATED:return!1;case ae.INVALID_ARGUMENT:case ae.NOT_FOUND:case ae.ALREADY_EXISTS:case ae.PERMISSION_DENIED:case ae.FAILED_PRECONDITION:case ae.ABORTED:case ae.OUT_OF_RANGE:case ae.UNIMPLEMENTED:case ae.DATA_LOSS:return!0;default:return xe()}}function Gw(s){if(s===void 0)return Ls("GRPC error has no .code"),ae.UNKNOWN;switch(s){case Vt.OK:return ae.OK;case Vt.CANCELLED:return ae.CANCELLED;case Vt.UNKNOWN:return ae.UNKNOWN;case Vt.DEADLINE_EXCEEDED:return ae.DEADLINE_EXCEEDED;case Vt.RESOURCE_EXHAUSTED:return ae.RESOURCE_EXHAUSTED;case Vt.INTERNAL:return ae.INTERNAL;case Vt.UNAVAILABLE:return ae.UNAVAILABLE;case Vt.UNAUTHENTICATED:return ae.UNAUTHENTICATED;case Vt.INVALID_ARGUMENT:return ae.INVALID_ARGUMENT;case Vt.NOT_FOUND:return ae.NOT_FOUND;case Vt.ALREADY_EXISTS:return ae.ALREADY_EXISTS;case Vt.PERMISSION_DENIED:return ae.PERMISSION_DENIED;case Vt.FAILED_PRECONDITION:return ae.FAILED_PRECONDITION;case Vt.ABORTED:return ae.ABORTED;case Vt.OUT_OF_RANGE:return ae.OUT_OF_RANGE;case Vt.UNIMPLEMENTED:return ae.UNIMPLEMENTED;case Vt.DATA_LOSS:return ae.DATA_LOSS;default:return xe()}}($e=Vt||(Vt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function C2(){return new TextEncoder}/**
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
 */const R2=new xr([4294967295,4294967295],0);function CS(s){const e=C2().encode(s),t=new lw;return t.update(e),new Uint8Array(t.digest())}function RS(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new xr([t,r],0),new xr([o,u],0)]}class hg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Bu(`Invalid padding: ${t}`);if(r<0)throw new Bu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Bu(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=xr.fromNumber(this.Ee)}Ae(e,t,r){let o=e.add(t.multiply(xr.fromNumber(r)));return o.compare(R2)===1&&(o=new xr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=CS(e),[r,o]=RS(t);for(let u=0;u<this.hashCount;u++){const h=this.Ae(r,o,u);if(!this.Re(h))return!1}return!0}static create(e,t,r){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new hg(u,o,t);return r.forEach(p=>h.insert(p)),h}insert(e){if(this.Ee===0)return;const t=CS(e),[r,o]=RS(t);for(let u=0;u<this.hashCount;u++){const h=this.Ae(r,o,u);this.Ve(h)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Bu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class sd{constructor(e,t,r,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const o=new Map;return o.set(e,vc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new sd(ke.min(),o,new Tt(Ge),Us(),Fe())}}class vc{constructor(e,t,r,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new vc(r,t,Fe(),Fe(),Fe())}}/**
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
 */class uf{constructor(e,t,r,o){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=o}}class Ww{constructor(e,t){this.targetId=e,this.ge=t}}class Kw{constructor(e,t,r=dn.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=o}}class IS{constructor(){this.pe=0,this.ye=NS(),this.we=dn.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=Fe(),t=Fe(),r=Fe();return this.ye.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:r=r.add(o);break;default:xe()}}),new vc(this.we,this.be,e,t,r)}Me(){this.Se=!1,this.ye=NS()}xe(e,t){this.Se=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,rt(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class I2{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Us(),this.$e=Yh(),this.Ke=Yh(),this.Ue=new Tt(Ge)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:xe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,o)=>{this.Je(o)&&t(o)})}Ze(e){const t=e.targetId,r=e.ge.count,o=this.Xe(t);if(o){const u=o.target;if(am(u))if(r===0){const h=new Ie(u.path);this.ze(t,h,Sn.newNoDocument(h,ke.min()))}else rt(r===1);else{const h=this.et(t);if(h!==r){const p=this.tt(e),m=p?this.nt(p,e,h):1;if(m!==0){this.Ye(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,g)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:u=0}=t;let h,p;try{h=jr(r).toUint8Array()}catch(m){if(m instanceof yw)return nl("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new hg(h,o,u)}catch(m){return nl(m instanceof Bu?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.Ee===0?null:p}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let o=0;return r.forEach(u=>{const h=this.ke.it(),p=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.ze(t,u,null),o++)}),o}ot(e){const t=new Map;this.qe.forEach((u,h)=>{const p=this.Xe(h);if(p){if(u.current&&am(p.target)){const m=new Ie(p.target.path);this._t(m).has(h)||this.ut(h,m)||this.ze(h,m,Sn.newNoDocument(m,e))}u.ve&&(t.set(h,u.Fe()),u.Me())}});let r=Fe();this.Ke.forEach((u,h)=>{let p=!0;h.forEachWhile(m=>{const g=this.Xe(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(r=r.add(u))}),this.Qe.forEach((u,h)=>h.setReadTime(e));const o=new sd(e,t,this.Ue,this.Qe,r);return this.Qe=Us(),this.$e=Yh(),this.Ke=Yh(),this.Ue=new Tt(Ge),o}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const o=this.He(e);this.ut(e,t)?o.xe(t,1):o.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new IS,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new Gt(Ge),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Gt(Ge),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||ve("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new IS),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Yh(){return new Tt(Ie.comparator)}function NS(){return new Tt(Ie.comparator)}const N2={asc:"ASCENDING",desc:"DESCENDING"},D2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},O2={and:"AND",or:"OR"};class x2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lm(s,e){return s.useProto3Json||Xf(e)?e:{value:e}}function Mf(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qw(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function k2(s,e){return Mf(s,e.toTimestamp())}function Zi(s){return rt(!!s),ke.fromTimestamp(function(t){const r=Ur(t);return new qt(r.seconds,r.nanos)}(s))}function fg(s,e){return um(s,e).canonicalString()}function um(s,e){const t=function(o){return new Ct(["projects",o.projectId,"databases",o.database])}(s).child("documents");return e===void 0?t:t.child(e)}function Yw(s){const e=Ct.fromString(s);return rt(eb(e)),e}function cm(s,e){return fg(s.databaseId,e.path)}function D_(s,e){const t=Yw(e);if(t.get(1)!==s.databaseId.projectId)throw new Re(ae.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new Re(ae.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new Ie(Xw(t))}function $w(s,e){return fg(s.databaseId,e)}function M2(s){const e=Yw(s);return e.length===4?Ct.emptyPath():Xw(e)}function hm(s){return new Ct(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function Xw(s){return rt(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}function DS(s,e,t){return{name:cm(s,e),fields:t.value.mapValue.fields}}function P2(s,e){let t;if("targetChange"in e){e.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:xe()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,T){return g.useProto3Json?(rt(T===void 0||typeof T=="string"),dn.fromBase64String(T||"")):(rt(T===void 0||T instanceof Buffer||T instanceof Uint8Array),dn.fromUint8Array(T||new Uint8Array))}(s,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&function(g){const T=g.code===void 0?ae.UNKNOWN:Gw(g.code);return new Re(T,g.message||"")}(h);t=new Kw(r,o,u,p||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=D_(s,r.document.name),u=Zi(r.document.updateTime),h=r.document.createTime?Zi(r.document.createTime):ke.min(),p=new Un({mapValue:{fields:r.document.fields}}),m=Sn.newFoundDocument(o,u,h,p),g=r.targetIds||[],T=r.removedTargetIds||[];t=new uf(g,T,m.key,m)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=D_(s,r.document),u=r.readTime?Zi(r.readTime):ke.min(),h=Sn.newNoDocument(o,u),p=r.removedTargetIds||[];t=new uf([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=D_(s,r.document),u=r.removedTargetIds||[];t=new uf([],u,o,null)}else{if(!("filter"in e))return xe();{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:u}=r,h=new w2(o,u),p=r.targetId;t=new Ww(p,h)}}return t}function V2(s,e){let t;if(e instanceof yc)t={update:DS(s,e.key,e.value)};else if(e instanceof qw)t={delete:cm(s,e.key)};else if(e instanceof Yr)t={update:DS(s,e.key,e.data),updateMask:G2(e.fieldMask)};else{if(!(e instanceof T2))return xe();t={verify:cm(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(u,h){const p=h.transform;if(p instanceof xf)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof al)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof ac)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof kf)return{fieldPath:h.field.canonicalString(),increment:p.Ie};throw xe()}(0,r))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:k2(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:xe()}(s,e.precondition)),t}function L2(s,e){return s&&s.length>0?(rt(e!==void 0),s.map(t=>function(o,u){let h=o.updateTime?Zi(o.updateTime):Zi(u);return h.isEqual(ke.min())&&(h=Zi(u)),new y2(h,o.transformResults||[])}(t,e))):[]}function U2(s,e){return{documents:[$w(s,e.path)]}}function j2(s,e){const t={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=$w(s,o);const u=function(g){if(g.length!==0)return Jw(es.create(g,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(g){if(g.length!==0)return g.map(T=>function(I){return{field:Fo(I.field),direction:H2(I.dir)}}(T))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=lm(s,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ht:t,parent:o}}function B2(s){let e=M2(s.parent);const t=s.structuredQuery,r=t.from?t.from.length:0;let o=null;if(r>0){rt(r===1);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];t.where&&(u=function(S){const I=Zw(S);return I instanceof es&&Iw(I)?I.getFilters():[I]}(t.where));let h=[];t.orderBy&&(h=function(S){return S.map(I=>function(F){return new Of(qo(F.field),function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(I))}(t.orderBy));let p=null;t.limit&&(p=function(S){let I;return I=typeof S=="object"?S.value:S,Xf(I)?null:I}(t.limit));let m=null;t.startAt&&(m=function(S){const I=!!S.before,V=S.values||[];return new Df(V,I)}(t.startAt));let g=null;return t.endAt&&(g=function(S){const I=!S.before,V=S.values||[];return new Df(V,I)}(t.endAt)),i2(e,o,h,u,p,"F",m,g)}function z2(s,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return xe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zw(s){return s.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=qo(t.unaryFilter.field);return Ft.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=qo(t.unaryFilter.field);return Ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=qo(t.unaryFilter.field);return Ft.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=qo(t.unaryFilter.field);return Ft.create(h,"!=",{nullValue:"NULL_VALUE"});default:return xe()}}(s):s.fieldFilter!==void 0?function(t){return Ft.create(qo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return xe()}}(t.fieldFilter.op),t.fieldFilter.value)}(s):s.compositeFilter!==void 0?function(t){return es.create(t.compositeFilter.filters.map(r=>Zw(r)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return xe()}}(t.compositeFilter.op))}(s):xe()}function H2(s){return N2[s]}function F2(s){return D2[s]}function q2(s){return O2[s]}function Fo(s){return{fieldPath:s.canonicalString()}}function qo(s){return hn.fromServerFormat(s.fieldPath)}function Jw(s){return s instanceof Ft?function(t){if(t.op==="=="){if(gS(t.value))return{unaryFilter:{field:Fo(t.field),op:"IS_NAN"}};if(mS(t.value))return{unaryFilter:{field:Fo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gS(t.value))return{unaryFilter:{field:Fo(t.field),op:"IS_NOT_NAN"}};if(mS(t.value))return{unaryFilter:{field:Fo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fo(t.field),op:F2(t.op),value:t.value}}}(s):s instanceof es?function(t){const r=t.getFilters().map(o=>Jw(o));return r.length===1?r[0]:{compositeFilter:{op:q2(t.op),filters:r}}}(s):xe()}function G2(s){const e=[];return s.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function eb(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
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
 */class Ir{constructor(e,t,r,o,u=ke.min(),h=ke.min(),p=dn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class W2{constructor(e){this.Tt=e}}function K2(s){const e=B2({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?om(e,e.limit,"L"):e}/**
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
 */class Q2{constructor(){this.Tn=new Y2}addToCollectionParentIndex(e,t){return this.Tn.add(t),te.resolve()}getCollectionParents(e,t){return te.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return te.resolve()}deleteFieldIndex(e,t){return te.resolve()}deleteAllFieldIndexes(e){return te.resolve()}createTargetIndexes(e,t){return te.resolve()}getDocumentsMatchingTarget(e,t){return te.resolve(null)}getIndexType(e,t){return te.resolve(0)}getFieldIndexes(e,t){return te.resolve([])}getNextCollectionGroupToUpdate(e){return te.resolve(null)}getMinOffset(e,t){return te.resolve(Lr.min())}getMinOffsetFromCollectionGroup(e,t){return te.resolve(Lr.min())}updateCollectionGroup(e,t,r){return te.resolve()}updateIndexEntries(e,t){return te.resolve()}}class Y2{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t]||new Gt(Ct.comparator),u=!o.has(r);return this.index[t]=o.add(r),u}has(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t];return o&&o.has(r)}getEntries(e){return(this.index[e]||new Gt(Ct.comparator)).toArray()}}/**
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
 */const OS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tb=41943040;class Vn{static withCacheSize(e){return new Vn(e,Vn.DEFAULT_COLLECTION_PERCENTILE,Vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Vn.DEFAULT_COLLECTION_PERCENTILE=10,Vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vn.DEFAULT=new Vn(tb,Vn.DEFAULT_COLLECTION_PERCENTILE,Vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vn.DISABLED=new Vn(-1,0,0);/**
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
 */class ol{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new ol(0)}static Un(){return new ol(-1)}}/**
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
 */const xS="LruGarbageCollector",$2=1048576;function kS([s,e],[t,r]){const o=Ge(s,t);return o===0?Ge(e,r):o}class X2{constructor(e){this.Hn=e,this.buffer=new Gt(kS),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();kS(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Z2{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ve(xS,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yl(t)?ve(xS,"Ignoring IndexedDB error during garbage collection: ",t):await gl(t)}await this.er(3e5)})}}class J2{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return te.resolve($f.ae);const r=new X2(t);return this.tr.forEachTarget(e,o=>r.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>r.Zn(o))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ve("LruGarbageCollector","Garbage collection skipped; disabled"),te.resolve(OS)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ve("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),OS):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,o,u,h,p,m,g;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(ve("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o))).next(S=>(r=S,p=Date.now(),this.removeTargets(e,r,t))).next(S=>(u=S,m=Date.now(),this.removeOrphanedDocuments(e,r))).next(S=>(g=Date.now(),zo()<=ze.DEBUG&&ve("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-T}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${S} documents in `+(g-m)+`ms
Total Duration: ${g-T}ms`),te.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function eM(s,e){return new J2(s,e)}/**
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
 */class tM{constructor(){this.changes=new Ka(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Sn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?te.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class nM{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class iM{constructor(e,t,r,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(r=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(r!==null&&Yu(r.mutation,o,Kn.empty(),qt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Fe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Fe()){const o=ka();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,r).next(u=>{let h=ju();return u.forEach((p,m)=>{h=h.insert(p,m.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const r=ka();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Fe()))}populateOverlays(e,t,r){const o=[];return r.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,r,o){let u=Us();const h=Qu(),p=function(){return Qu()}();return t.forEach((m,g)=>{const T=r.get(g.key);o.has(g.key)&&(T===void 0||T.mutation instanceof Yr)?u=u.insert(g.key,g):T!==void 0?(h.set(g.key,T.mutation.getFieldMask()),Yu(T.mutation,g,T.mutation.getFieldMask(),qt.now())):h.set(g.key,Kn.empty())}),this.recalculateAndSaveOverlays(e,u).next(m=>(m.forEach((g,T)=>h.set(g,T)),t.forEach((g,T)=>{var S;return p.set(g,new nM(T,(S=h.get(g))!==null&&S!==void 0?S:null))}),p))}recalculateAndSaveOverlays(e,t){const r=Qu();let o=new Tt((h,p)=>h-p),u=Fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let T=r.get(m)||Kn.empty();T=p.applyToLocalView(g,T),r.set(m,T);const S=(o.get(p.batchId)||Fe()).add(m);o=o.insert(p.batchId,S)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,T=m.value,S=Vw();T.forEach(I=>{if(!u.has(I)){const V=Hw(t.get(I),r.get(I));V!==null&&S.set(I,V),u=u.add(I)}}),h.push(this.documentOverlayCache.saveOverlays(e,g,S))}return te.waitFor(h)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,o){return function(h){return Ie.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):s2(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,o):this.getDocumentsMatchingCollectionQuery(e,t,r,o)}getNextDocuments(e,t,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,o-u.size):te.resolve(ka());let p=nc,m=u;return h.next(g=>te.forEach(g,(T,S)=>(p<S.largestBatchId&&(p=S.largestBatchId),u.get(T)?te.resolve():this.remoteDocumentCache.getEntry(e,T).next(I=>{m=m.insert(T,I)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,m,g,Fe())).next(T=>({batchId:p,changes:Pw(T)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ie(t)).next(r=>{let o=ju();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,r,o){const u=t.collectionGroup;let h=ju();return this.indexManager.getCollectionParents(e,u).next(p=>te.forEach(p,m=>{const g=function(S,I){return new Jf(I,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(t,m.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,r,o).next(T=>{T.forEach((S,I)=>{h=h.insert(S,I)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,r,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,u,o))).next(h=>{u.forEach((m,g)=>{const T=g.getKey();h.get(T)===null&&(h=h.insert(T,Sn.newInvalidDocument(T)))});let p=ju();return h.forEach((m,g)=>{const T=u.get(m);T!==void 0&&Yu(T.mutation,g,Kn.empty(),qt.now()),td(t,g)&&(p=p.insert(m,g))}),p})}}/**
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
 */class sM{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return te.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Zi(o.createTime)}}(t)),te.resolve()}getNamedQuery(e,t){return te.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:K2(o.bundledQuery),readTime:Zi(o.readTime)}}(t)),te.resolve()}}/**
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
 */class rM{constructor(){this.overlays=new Tt(Ie.comparator),this.Rr=new Map}getOverlay(e,t){return te.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ka();return te.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&r.set(o,u)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((o,u)=>{this.Et(e,t,u)}),te.resolve()}removeOverlaysForBatchId(e,t,r){const o=this.Rr.get(r);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(r)),te.resolve()}getOverlaysForCollection(e,t,r){const o=ka(),u=t.length+1,h=new Ie(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>r&&o.set(m.getKey(),m)}return te.resolve(o)}getOverlaysForCollectionGroup(e,t,r,o){let u=new Tt((g,T)=>g-T);const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let T=u.get(g.largestBatchId);T===null&&(T=ka(),u=u.insert(g.largestBatchId,T)),T.set(g.getKey(),g)}}const p=ka(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,T)=>p.set(g,T)),!(p.size()>=o)););return te.resolve(p)}Et(e,t,r){const o=this.overlays.get(r.key);if(o!==null){const h=this.Rr.get(o.largestBatchId).delete(r.key);this.Rr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(r.key,new A2(t,r));let u=this.Rr.get(t);u===void 0&&(u=Fe(),this.Rr.set(t,u)),this.Rr.set(t,u.add(r.key))}}/**
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
 */class aM{constructor(){this.sessionToken=dn.EMPTY_BYTE_STRING}getSessionToken(e){return te.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,te.resolve()}}/**
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
 */class dg{constructor(){this.Vr=new Gt(en.mr),this.gr=new Gt(en.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new en(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new en(e,t))}br(e,t){e.forEach(r=>this.removeReference(r,t))}Sr(e){const t=new Ie(new Ct([])),r=new en(t,e),o=new en(t,e+1),u=[];return this.gr.forEachInRange([r,o],h=>{this.wr(h),u.push(h.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new Ie(new Ct([])),r=new en(t,e),o=new en(t,e+1);let u=Fe();return this.gr.forEachInRange([r,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new en(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class en{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return Ie.comparator(e.key,t.key)||Ge(e.Cr,t.Cr)}static pr(e,t){return Ge(e.Cr,t.Cr)||Ie.comparator(e.key,t.key)}}/**
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
 */class oM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Gt(en.mr)}checkEmpty(e){return te.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new S2(u,t,r,o);this.mutationQueue.push(h);for(const p of o)this.Mr=this.Mr.add(new en(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return te.resolve(h)}lookupMutationBatch(e,t){return te.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=this.Nr(r),u=o<0?0:o;return te.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return te.resolve(this.mutationQueue.length===0?ig:this.Fr-1)}getAllMutationBatches(e){return te.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new en(t,0),o=new en(t,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([r,o],h=>{const p=this.Or(h.Cr);u.push(p)}),te.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Gt(Ge);return t.forEach(o=>{const u=new en(o,0),h=new en(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,h],p=>{r=r.add(p.Cr)})}),te.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1;let u=r;Ie.isDocumentKey(u)||(u=u.child(""));const h=new en(new Ie(u),0);let p=new Gt(Ge);return this.Mr.forEachWhile(m=>{const g=m.key.path;return!!r.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Cr)),!0)},h),te.resolve(this.Br(p))}Br(e){const t=[];return e.forEach(r=>{const o=this.Or(r);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){rt(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return te.forEach(t.mutations,o=>{const u=new en(o.key,t.batchId);return r=r.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new en(t,0),o=this.Mr.firstAfterOrEqual(r);return te.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,te.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class lM{constructor(e){this.kr=e,this.docs=function(){return new Tt(Ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,o=this.docs.get(r),u=o?o.size:0,h=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return te.resolve(r?r.document.mutableCopy():Sn.newInvalidDocument(t))}getEntries(e,t){let r=Us();return t.forEach(o=>{const u=this.docs.get(o);r=r.insert(o,u?u.document.mutableCopy():Sn.newInvalidDocument(o))}),te.resolve(r)}getDocumentsMatchingQuery(e,t,r,o){let u=Us();const h=t.path,p=new Ie(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:T}}=m.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||Pk(Mk(T),r)<=0||(o.has(T.key)||td(t,T))&&(u=u.insert(T.key,T.mutableCopy()))}return te.resolve(u)}getAllFromCollectionGroup(e,t,r,o){xe()}qr(e,t){return te.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new uM(this)}getSize(e){return te.resolve(this.size)}}class uM extends tM{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(r)}),te.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class cM{constructor(e){this.persistence=e,this.Qr=new Ka(t=>ag(t),og),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.$r=0,this.Kr=new dg,this.targetCount=0,this.Ur=ol.Kn()}forEachTarget(e,t){return this.Qr.forEach((r,o)=>t(o)),te.resolve()}getLastRemoteSnapshotVersion(e){return te.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return te.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),te.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),te.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new ol(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,te.resolve()}updateTargetData(e,t){return this.zn(t),te.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,te.resolve()}removeTargets(e,t,r){let o=0;const u=[];return this.Qr.forEach((h,p)=>{p.sequenceNumber<=t&&r.get(p.targetId)===null&&(this.Qr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),te.waitFor(u).next(()=>o)}getTargetCount(e){return te.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return te.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),te.resolve()}removeMatchingKeys(e,t,r){this.Kr.br(t,r);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),te.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),te.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Kr.vr(t);return te.resolve(r)}containsKey(e,t){return te.resolve(this.Kr.containsKey(t))}}/**
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
 */class nb{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new $f(0),this.zr=!1,this.zr=!0,this.jr=new aM,this.referenceDelegate=e(this),this.Hr=new cM(this),this.indexManager=new Q2,this.remoteDocumentCache=function(o){return new lM(o)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new W2(t),this.Yr=new sM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new oM(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){ve("MemoryPersistence","Starting transaction:",e);const o=new hM(this.Gr.next());return this.referenceDelegate.Zr(),r(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(e,t){return te.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class hM extends Lk{constructor(e){super(),this.currentSequenceNumber=e}}class pg{constructor(e){this.persistence=e,this.ti=new dg,this.ni=null}static ri(e){return new pg(e)}get ii(){if(this.ni)return this.ni;throw xe()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),te.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),te.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),te.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(o=>this.ii.add(o.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return te.forEach(this.ii,r=>{const o=Ie.fromPath(r);return this.si(e,o).next(u=>{u||t.removeEntry(o,ke.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return te.or([()=>te.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Pf{constructor(e,t){this.persistence=e,this.oi=new Ka(r=>Bk(r.path),(r,o)=>r.isEqual(o)),this.garbageCollector=eM(this,t)}static ri(e,t){return new Pf(e,t)}Zr(){}Xr(e){return te.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(o=>r+o))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return te.forEach(this.oi,(r,o)=>this.ar(e,r,o).next(u=>u?te.resolve():t(o)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(e,h=>this.ar(e,h,t).next(p=>{p||(r++,u.removeEntry(h,ke.min()))})).next(()=>u.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),te.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),te.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),te.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),te.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=af(e.data.value)),t}ar(e,t,r){return te.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return te.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class _g{constructor(e,t,r,o){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=o}static Yi(e,t){let r=Fe(),o=Fe();for(const u of t.docChanges)switch(u.type){case 0:r=r.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new _g(e,t.fromCache,r,o)}}/**
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
 */class fM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dM{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return nI()?8:Uk(wn())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,o){const u={result:null};return this.rs(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ss(e,t,o,r).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new fM;return this._s(e,t,h).next(p=>{if(u.result=p,this.Xi)return this.us(e,t,h,p.size)})}).next(()=>u.result)}us(e,t,r,o){return r.documentReadCount<this.es?(zo()<=ze.DEBUG&&ve("QueryEngine","SDK will not create cache indexes for query:",Ho(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),te.resolve()):(zo()<=ze.DEBUG&&ve("QueryEngine","Query:",Ho(t),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.ts*o?(zo()<=ze.DEBUG&&ve("QueryEngine","The SDK decides to create cache indexes for query:",Ho(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$i(t))):te.resolve())}rs(e,t){if(TS(t))return te.resolve(null);let r=$i(t);return this.indexManager.getIndexType(e,r).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=om(t,null,"F"),r=$i(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(u=>{const h=Fe(...u);return this.ns.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,r).next(m=>{const g=this.cs(t,p);return this.ls(t,g,h,m.readTime)?this.rs(e,om(t,null,"F")):this.hs(e,g,t,m)}))})))}ss(e,t,r,o){return TS(t)||o.isEqual(ke.min())?te.resolve(null):this.ns.getDocuments(e,r).next(u=>{const h=this.cs(t,u);return this.ls(t,h,r,o)?te.resolve(null):(zo()<=ze.DEBUG&&ve("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ho(t)),this.hs(e,h,t,kk(o,nc)).next(p=>p))})}cs(e,t){let r=new Gt(kw(e));return t.forEach((o,u)=>{td(e,u)&&(r=r.add(u))}),r}ls(e,t,r,o){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(e,t,r){return zo()<=ze.DEBUG&&ve("QueryEngine","Using full collection scan to execute query:",Ho(t)),this.ns.getDocumentsMatchingQuery(e,t,Lr.min(),r)}hs(e,t,r,o){return this.ns.getDocumentsMatchingQuery(e,r,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const mg="LocalStore",pM=3e8;class _M{constructor(e,t,r,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new Tt(Ge),this.Is=new Ka(u=>ag(u),og),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iM(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function mM(s,e,t,r){return new _M(s,e,t,r)}async function ib(s,e){const t=Pe(s);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let o;return t.mutationQueue.getAllMutationBatches(r).next(u=>(o=u,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(u=>{const h=[],p=[];let m=Fe();for(const g of o){h.push(g.batchId);for(const T of g.mutations)m=m.add(T.key)}for(const g of u){p.push(g.batchId);for(const T of g.mutations)m=m.add(T.key)}return t.localDocuments.getDocuments(r,m).next(g=>({Rs:g,removedBatchIds:h,addedBatchIds:p}))})})}function gM(s,e){const t=Pe(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const o=e.batch.keys(),u=t.ds.newChangeBuffer({trackRemovals:!0});return function(p,m,g,T){const S=g.batch,I=S.keys();let V=te.resolve();return I.forEach(F=>{V=V.next(()=>T.getEntry(m,F)).next(J=>{const G=g.docVersions.get(F);rt(G!==null),J.version.compareTo(G)<0&&(S.applyToRemoteDocument(J,g),J.isValidDocument()&&(J.setReadTime(g.commitVersion),T.addEntry(J)))})}),V.next(()=>p.mutationQueue.removeMutationBatch(m,S))}(t,r,e,u).next(()=>u.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(p){let m=Fe();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(r,o))})}function sb(s){const e=Pe(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function yM(s,e){const t=Pe(s),r=e.snapshotVersion;let o=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.ds.newChangeBuffer({trackRemovals:!0});o=t.Ts;const p=[];e.targetChanges.forEach((T,S)=>{const I=o.get(S);if(!I)return;p.push(t.Hr.removeMatchingKeys(u,T.removedDocuments,S).next(()=>t.Hr.addMatchingKeys(u,T.addedDocuments,S)));let V=I.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?V=V.withResumeToken(dn.EMPTY_BYTE_STRING,ke.min()).withLastLimboFreeSnapshotVersion(ke.min()):T.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(T.resumeToken,r)),o=o.insert(S,V),function(J,G,Y){return J.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=pM?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(I,V,T)&&p.push(t.Hr.updateTargetData(u,V))});let m=Us(),g=Fe();if(e.documentUpdates.forEach(T=>{e.resolvedLimboDocuments.has(T)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(u,T))}),p.push(vM(u,h,e.documentUpdates).next(T=>{m=T.Vs,g=T.fs})),!r.isEqual(ke.min())){const T=t.Hr.getLastRemoteSnapshotVersion(u).next(S=>t.Hr.setTargetsMetadata(u,u.currentSequenceNumber,r));p.push(T)}return te.waitFor(p).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,m,g)).next(()=>m)}).then(u=>(t.Ts=o,u))}function vM(s,e,t){let r=Fe(),o=Fe();return t.forEach(u=>r=r.add(u)),e.getEntries(s,r).next(u=>{let h=Us();return t.forEach((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(ke.min())?(e.removeEntry(p,m.readTime),h=h.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),h=h.insert(p,m)):ve(mg,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)}),{Vs:h,fs:o}})}function EM(s,e){const t=Pe(s);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ig),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function TM(s,e){const t=Pe(s);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let o;return t.Hr.getTargetData(r,e).next(u=>u?(o=u,te.resolve(o)):t.Hr.allocateTargetId(r).next(h=>(o=new Ir(e,h,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,o).next(()=>o))))}).then(r=>{const o=t.Ts.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function fm(s,e,t){const r=Pe(s),o=r.Ts.get(e),u=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",u,h=>r.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!yl(h))throw h;ve(mg,`Failed to update sequence numbers for target ${e}: ${h}`)}r.Ts=r.Ts.remove(e),r.Is.delete(o.target)}function MS(s,e,t){const r=Pe(s);let o=ke.min(),u=Fe();return r.persistence.runTransaction("Execute query","readwrite",h=>function(m,g,T){const S=Pe(m),I=S.Is.get(T);return I!==void 0?te.resolve(S.Ts.get(I)):S.Hr.getTargetData(g,T)}(r,h,$i(e)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(h,p.targetId).next(m=>{u=m})}).next(()=>r.Ps.getDocumentsMatchingQuery(h,e,t?o:ke.min(),t?u:Fe())).next(p=>(SM(r,a2(e),p),{documents:p,gs:u})))}function SM(s,e,t){let r=s.Es.get(e)||ke.min();t.forEach((o,u)=>{u.readTime.compareTo(r)>0&&(r=u.readTime)}),s.Es.set(e,r)}class PS{constructor(){this.activeTargetIds=f2()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AM{constructor(){this.ho=new PS,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new PS,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wM{To(e){}shutdown(){}}/**
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
 */const VS="ConnectivityMonitor";class LS{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ve(VS,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ve(VS,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $h=null;function dm(){return $h===null?$h=function(){return 268435456+Math.round(2147483648*Math.random())}():$h++,"0x"+$h.toString(16)}/**
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
 */const O_="RestConnection",bM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class CM{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${o}`,this.wo=this.databaseId.database===If?`project_id=${r}`:`project_id=${r}&database_id=${o}`}bo(e,t,r,o,u){const h=dm(),p=this.So(e,t.toUriEncodedString());ve(O_,`Sending RPC '${e}' ${h}:`,p,r);const m={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(m,o,u),this.vo(e,p,m,r).then(g=>(ve(O_,`Received RPC '${e}' ${h}: `,g),g),g=>{throw nl(O_,`RPC '${e}' ${h} failed with error: `,g,"url: ",p,"request:",r),g})}Co(e,t,r,o,u,h){return this.bo(e,t,r,o,u)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ml}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),r&&r.headers.forEach((o,u)=>e[u]=o)}So(e,t){const r=bM[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
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
 */class RM{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const gn="WebChannelConnection";class IM extends CM{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,o){const u=dm();return new Promise((h,p)=>{const m=new uw;m.setWithCredentials(!0),m.listenOnce(cw.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case rf.NO_ERROR:const T=m.getResponseJson();ve(gn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(T)),h(T);break;case rf.TIMEOUT:ve(gn,`RPC '${e}' ${u} timed out`),p(new Re(ae.DEADLINE_EXCEEDED,"Request time out"));break;case rf.HTTP_ERROR:const S=m.getStatus();if(ve(gn,`RPC '${e}' ${u} failed with status:`,S,"response text:",m.getResponseText()),S>0){let I=m.getResponseJson();Array.isArray(I)&&(I=I[0]);const V=I==null?void 0:I.error;if(V&&V.status&&V.message){const F=function(G){const Y=G.toLowerCase().replace(/_/g,"-");return Object.values(ae).indexOf(Y)>=0?Y:ae.UNKNOWN}(V.status);p(new Re(F,V.message))}else p(new Re(ae.UNKNOWN,"Server responded with status "+m.getStatus()))}else p(new Re(ae.UNAVAILABLE,"Connection failed."));break;default:xe()}}finally{ve(gn,`RPC '${e}' ${u} completed.`)}});const g=JSON.stringify(o);ve(gn,`RPC '${e}' ${u} sending request:`,o),m.send(t,"POST",g,r,15)})}Wo(e,t,r){const o=dm(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=dw(),p=fw(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Do(m.initMessageHeaders,t,r),m.encodeInitMessageHeaders=!0;const T=u.join("");ve(gn,`Creating RPC '${e}' stream ${o}: ${T}`,m);const S=h.createWebChannel(T,m);let I=!1,V=!1;const F=new RM({Fo:G=>{V?ve(gn,`Not sending because RPC '${e}' stream ${o} is closed:`,G):(I||(ve(gn,`Opening RPC '${e}' stream ${o} transport.`),S.open(),I=!0),ve(gn,`RPC '${e}' stream ${o} sending:`,G),S.send(G))},Mo:()=>S.close()}),J=(G,Y,ne)=>{G.listen(Y,X=>{try{ne(X)}catch(re){setTimeout(()=>{throw re},0)}})};return J(S,Uu.EventType.OPEN,()=>{V||(ve(gn,`RPC '${e}' stream ${o} transport opened.`),F.Qo())}),J(S,Uu.EventType.CLOSE,()=>{V||(V=!0,ve(gn,`RPC '${e}' stream ${o} transport closed`),F.Ko())}),J(S,Uu.EventType.ERROR,G=>{V||(V=!0,nl(gn,`RPC '${e}' stream ${o} transport errored:`,G),F.Ko(new Re(ae.UNAVAILABLE,"The operation could not be completed")))}),J(S,Uu.EventType.MESSAGE,G=>{var Y;if(!V){const ne=G.data[0];rt(!!ne);const X=ne,re=(X==null?void 0:X.error)||((Y=X[0])===null||Y===void 0?void 0:Y.error);if(re){ve(gn,`RPC '${e}' stream ${o} received error:`,re);const fe=re.status;let Ee=function(C){const N=Vt[C];if(N!==void 0)return Gw(N)}(fe),M=re.message;Ee===void 0&&(Ee=ae.INTERNAL,M="Unknown error status: "+fe+" with message "+re.message),V=!0,F.Ko(new Re(Ee,M)),S.close()}else ve(gn,`RPC '${e}' stream ${o} received:`,ne),F.Uo(ne)}}),J(p,hw.STAT_EVENT,G=>{G.stat===nm.PROXY?ve(gn,`RPC '${e}' stream ${o} detected buffering proxy`):G.stat===nm.NOPROXY&&ve(gn,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{F.$o()},0),F}}function x_(){return typeof document<"u"?document:null}/**
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
 */function rd(s){return new x2(s,!0)}/**
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
 */class rb{constructor(e,t,r=1e3,o=1.5,u=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-r);o>0&&ve("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const US="PersistentStream";class ab{constructor(e,t,r,o,u,h,p,m){this.Ti=e,this.n_=r,this.r_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new rb(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===ae.RESOURCE_EXHAUSTED?(Ls(t.toString()),Ls("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===ae.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,o])=>{this.i_===t&&this.V_(r,o)},r=>{e(()=>{const o=new Re(ae.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(o)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{r(()=>this.m_(o))}),this.stream.onMessage(o=>{r(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ve(US,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(ve(US,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NM extends ab{constructor(e,t,r,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,o,h),this.serializer=u}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=P2(this.serializer,e),r=function(u){if(!("targetChange"in u))return ke.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ke.min():h.readTime?Zi(h.readTime):ke.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=hm(this.serializer),t.addTarget=function(u,h){let p;const m=h.target;if(p=am(m)?{documents:U2(u,m)}:{query:j2(u,m).ht},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=Qw(u,h.resumeToken);const g=lm(u,h.expectedCount);g!==null&&(p.expectedCount=g)}else if(h.snapshotVersion.compareTo(ke.min())>0){p.readTime=Mf(u,h.snapshotVersion.toTimestamp());const g=lm(u,h.expectedCount);g!==null&&(p.expectedCount=g)}return p}(this.serializer,e);const r=z2(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=hm(this.serializer),t.removeTarget=e,this.I_(t)}}class DM extends ab{constructor(e,t,r,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,o,h),this.serializer=u}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return rt(!!e.streamToken),this.lastStreamToken=e.streamToken,rt(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){rt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=L2(e.writeResults,e.commitTime),r=Zi(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=hm(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>V2(this.serializer,r))};this.I_(t)}}/**
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
 */class OM{}class xM extends OM{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new Re(ae.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,r,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.bo(e,um(t,r),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ae.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new Re(ae.UNKNOWN,u.toString())})}Co(e,t,r,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.Co(e,um(t,r),o,h,p,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===ae.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new Re(ae.UNKNOWN,h.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class kM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ls(t),this.N_=!1):ve("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Ha="RemoteStore";class MM{constructor(e,t,r,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(h=>{r.enqueueAndForget(async()=>{Qa(this)&&(ve(Ha,"Restarting streams for network reachability change."),await async function(m){const g=Pe(m);g.W_.add(4),await Ec(g),g.j_.set("Unknown"),g.W_.delete(4),await ad(g)}(this))})}),this.j_=new kM(r,o)}}async function ad(s){if(Qa(s))for(const e of s.G_)await e(!0)}async function Ec(s){for(const e of s.G_)await e(!1)}function ob(s,e){const t=Pe(s);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),Eg(t)?vg(t):vl(t).c_()&&yg(t,e))}function gg(s,e){const t=Pe(s),r=vl(t);t.U_.delete(e),r.c_()&&lb(t,e),t.U_.size===0&&(r.c_()?r.P_():Qa(t)&&t.j_.set("Unknown"))}function yg(s,e){if(s.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ke.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}vl(s).y_(e)}function lb(s,e){s.H_.Ne(e),vl(s).w_(e)}function vg(s){s.H_=new I2({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>s.U_.get(e)||null,it:()=>s.datastore.serializer.databaseId}),vl(s).start(),s.j_.B_()}function Eg(s){return Qa(s)&&!vl(s).u_()&&s.U_.size>0}function Qa(s){return Pe(s).W_.size===0}function ub(s){s.H_=void 0}async function PM(s){s.j_.set("Online")}async function VM(s){s.U_.forEach((e,t)=>{yg(s,e)})}async function LM(s,e){ub(s),Eg(s)?(s.j_.q_(e),vg(s)):s.j_.set("Unknown")}async function UM(s,e,t){if(s.j_.set("Online"),e instanceof Kw&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const p of u.targetIds)o.U_.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.U_.delete(p),o.H_.removeTarget(p))}(s,e)}catch(r){ve(Ha,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vf(s,r)}else if(e instanceof uf?s.H_.We(e):e instanceof Ww?s.H_.Ze(e):s.H_.je(e),!t.isEqual(ke.min()))try{const r=await sb(s.localStore);t.compareTo(r)>=0&&await function(u,h){const p=u.H_.ot(h);return p.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const T=u.U_.get(g);T&&u.U_.set(g,T.withResumeToken(m.resumeToken,h))}}),p.targetMismatches.forEach((m,g)=>{const T=u.U_.get(m);if(!T)return;u.U_.set(m,T.withResumeToken(dn.EMPTY_BYTE_STRING,T.snapshotVersion)),lb(u,m);const S=new Ir(T.target,m,g,T.sequenceNumber);yg(u,S)}),u.remoteSyncer.applyRemoteEvent(p)}(s,t)}catch(r){ve(Ha,"Failed to raise snapshot:",r),await Vf(s,r)}}async function Vf(s,e,t){if(!yl(e))throw e;s.W_.add(1),await Ec(s),s.j_.set("Offline"),t||(t=()=>sb(s.localStore)),s.asyncQueue.enqueueRetryable(async()=>{ve(Ha,"Retrying IndexedDB access"),await t(),s.W_.delete(1),await ad(s)})}function cb(s,e){return e().catch(t=>Vf(s,t,e))}async function od(s){const e=Pe(s),t=zr(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:ig;for(;jM(e);)try{const o=await EM(e.localStore,r);if(o===null){e.K_.length===0&&t.P_();break}r=o.batchId,BM(e,o)}catch(o){await Vf(e,o)}hb(e)&&fb(e)}function jM(s){return Qa(s)&&s.K_.length<10}function BM(s,e){s.K_.push(e);const t=zr(s);t.c_()&&t.b_&&t.S_(e.mutations)}function hb(s){return Qa(s)&&!zr(s).u_()&&s.K_.length>0}function fb(s){zr(s).start()}async function zM(s){zr(s).C_()}async function HM(s){const e=zr(s);for(const t of s.K_)e.S_(t.mutations)}async function FM(s,e,t){const r=s.K_.shift(),o=cg.from(r,e,t);await cb(s,()=>s.remoteSyncer.applySuccessfulWrite(o)),await od(s)}async function qM(s,e){e&&zr(s).b_&&await async function(r,o){if(function(h){return b2(h)&&h!==ae.ABORTED}(o.code)){const u=r.K_.shift();zr(r).h_(),await cb(r,()=>r.remoteSyncer.rejectFailedWrite(u.batchId,o)),await od(r)}}(s,e),hb(s)&&fb(s)}async function jS(s,e){const t=Pe(s);t.asyncQueue.verifyOperationInProgress(),ve(Ha,"RemoteStore received new credentials");const r=Qa(t);t.W_.add(3),await Ec(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await ad(t)}async function GM(s,e){const t=Pe(s);e?(t.W_.delete(2),await ad(t)):e||(t.W_.add(2),await Ec(t),t.j_.set("Unknown"))}function vl(s){return s.J_||(s.J_=function(t,r,o){const u=Pe(t);return u.M_(),new NM(r,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(s.datastore,s.asyncQueue,{xo:PM.bind(null,s),No:VM.bind(null,s),Lo:LM.bind(null,s),p_:UM.bind(null,s)}),s.G_.push(async e=>{e?(s.J_.h_(),Eg(s)?vg(s):s.j_.set("Unknown")):(await s.J_.stop(),ub(s))})),s.J_}function zr(s){return s.Y_||(s.Y_=function(t,r,o){const u=Pe(t);return u.M_(),new DM(r,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(s.datastore,s.asyncQueue,{xo:()=>Promise.resolve(),No:zM.bind(null,s),Lo:qM.bind(null,s),D_:HM.bind(null,s),v_:FM.bind(null,s)}),s.G_.push(async e=>{e?(s.Y_.h_(),await od(s)):(await s.Y_.stop(),s.K_.length>0&&(ve(Ha,`Stopping write stream with ${s.K_.length} pending writes`),s.K_=[]))})),s.Y_}/**
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
 */class Tg{constructor(e,t,r,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=o,this.removalCallback=u,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,o,u){const h=Date.now()+r,p=new Tg(e,t,h,o,u);return p.start(r),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Re(ae.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sg(s,e){if(Ls("AsyncQueue",`${e}: ${s}`),yl(s))return new Re(ae.UNAVAILABLE,`${e}: ${s}`);throw s}/**
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
 */class Zo{static emptySet(e){return new Zo(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Ie.comparator(t.key,r.key):(t,r)=>Ie.comparator(t.key,r.key),this.keyedMap=ju(),this.sortedSet=new Tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=r.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Zo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class BS{constructor(){this.Z_=new Tt(Ie.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):xe():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ll{constructor(e,t,r,o,u,h,p,m,g){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,r,o,u){const h=[];return t.forEach(p=>{h.push({type:0,doc:p})}),new ll(e,t,Zo.emptySet(t),h,r,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ed(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==r[o].type||!t[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
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
 */class WM{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class KM{constructor(){this.queries=zS(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const o=Pe(t),u=o.queries;o.queries=zS(),u.forEach((h,p)=>{for(const m of p.ta)m.onError(r)})})(this,new Re(ae.ABORTED,"Firestore shutting down"))}}function zS(){return new Ka(s=>xw(s),ed)}async function QM(s,e){const t=Pe(s);let r=3;const o=e.query;let u=t.queries.get(o);u?!u.na()&&e.ra()&&(r=2):(u=new WM,r=e.ra()?0:1);try{switch(r){case 0:u.ea=await t.onListen(o,!0);break;case 1:u.ea=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=Sg(h,`Initialization of query '${Ho(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,u),u.ta.push(e),e.sa(t.onlineState),u.ea&&e.oa(u.ea)&&Ag(t)}async function YM(s,e){const t=Pe(s),r=e.query;let o=3;const u=t.queries.get(r);if(u){const h=u.ta.indexOf(e);h>=0&&(u.ta.splice(h,1),u.ta.length===0?o=e.ra()?0:1:!u.na()&&e.ra()&&(o=2))}switch(o){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function $M(s,e){const t=Pe(s);let r=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const p of h.ta)p.oa(o)&&(r=!0);h.ea=o}}r&&Ag(t)}function XM(s,e,t){const r=Pe(s),o=r.queries.get(e);if(o)for(const u of o.ta)u.onError(t);r.queries.delete(e)}function Ag(s){s.ia.forEach(e=>{e.next()})}var pm,HS;(HS=pm||(pm={}))._a="default",HS.Cache="cache";class ZM{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new ll(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=ll.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==pm.Cache}}/**
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
 */class db{constructor(e){this.key=e}}class pb{constructor(e){this.key=e}}class JM{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Fe(),this.mutatedKeys=Fe(),this.ya=kw(e),this.wa=new Zo(this.ya)}get ba(){return this.fa}Sa(e,t){const r=t?t.Da:new BS,o=t?t.wa:this.wa;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((T,S)=>{const I=o.get(T),V=td(this.query,S)?S:null,F=!!I&&this.mutatedKeys.has(I.key),J=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let G=!1;I&&V?I.data.isEqual(V.data)?F!==J&&(r.track({type:3,doc:V}),G=!0):this.va(I,V)||(r.track({type:2,doc:V}),G=!0,(m&&this.ya(V,m)>0||g&&this.ya(V,g)<0)&&(p=!0)):!I&&V?(r.track({type:0,doc:V}),G=!0):I&&!V&&(r.track({type:1,doc:I}),G=!0,(m||g)&&(p=!0)),G&&(V?(h=h.add(V),u=J?u.add(T):u.delete(T)):(h=h.delete(T),u=u.delete(T)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),u=u.delete(T.key),r.track({type:1,doc:T})}return{wa:h,Da:r,ls:p,mutatedKeys:u}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,o){const u=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const h=e.Da.X_();h.sort((T,S)=>function(V,F){const J=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return xe()}};return J(V)-J(F)}(T.type,S.type)||this.ya(T.doc,S.doc)),this.Ca(r),o=o!=null&&o;const p=t&&!o?this.Fa():[],m=this.pa.size===0&&this.current&&!o?1:0,g=m!==this.ga;return this.ga=m,h.length!==0||g?{snapshot:new ll(this.query,e.wa,u,h,e.mutatedKeys,m===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:p}:{Ma:p}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new BS,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Fe(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new pb(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new db(r))}),t}Oa(e){this.fa=e.gs,this.pa=Fe();const t=this.Sa(e.documents);return this.applyChanges(t,!0)}Na(){return ll.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const wg="SyncEngine";class eP{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class tP{constructor(e){this.key=e,this.Ba=!1}}class nP{constructor(e,t,r,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.La={},this.ka=new Ka(p=>xw(p),ed),this.qa=new Map,this.Qa=new Set,this.$a=new Tt(Ie.comparator),this.Ka=new Map,this.Ua=new dg,this.Wa={},this.Ga=new Map,this.za=ol.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function iP(s,e,t=!0){const r=Eb(s);let o;const u=r.ka.get(e);return u?(r.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await _b(r,e,t,!0),o}async function sP(s,e){const t=Eb(s);await _b(t,e,!0,!1)}async function _b(s,e,t,r){const o=await TM(s.localStore,$i(e)),u=o.targetId,h=s.sharedClientState.addLocalQueryTarget(u,t);let p;return r&&(p=await rP(s,e,u,h==="current",o.resumeToken)),s.isPrimaryClient&&t&&ob(s.remoteStore,o),p}async function rP(s,e,t,r,o){s.Ha=(S,I,V)=>async function(J,G,Y,ne){let X=G.view.Sa(Y);X.ls&&(X=await MS(J.localStore,G.query,!1).then(({documents:M})=>G.view.Sa(M,X)));const re=ne&&ne.targetChanges.get(G.targetId),fe=ne&&ne.targetMismatches.get(G.targetId)!=null,Ee=G.view.applyChanges(X,J.isPrimaryClient,re,fe);return qS(J,G.targetId,Ee.Ma),Ee.snapshot}(s,S,I,V);const u=await MS(s.localStore,e,!0),h=new JM(e,u.gs),p=h.Sa(u.documents),m=vc.createSynthesizedTargetChangeForCurrentChange(t,r&&s.onlineState!=="Offline",o),g=h.applyChanges(p,s.isPrimaryClient,m);qS(s,t,g.Ma);const T=new eP(e,t,h);return s.ka.set(e,T),s.qa.has(t)?s.qa.get(t).push(e):s.qa.set(t,[e]),g.snapshot}async function aP(s,e,t){const r=Pe(s),o=r.ka.get(e),u=r.qa.get(o.targetId);if(u.length>1)return r.qa.set(o.targetId,u.filter(h=>!ed(h,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await fm(r.localStore,o.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(o.targetId),t&&gg(r.remoteStore,o.targetId),_m(r,o.targetId)}).catch(gl)):(_m(r,o.targetId),await fm(r.localStore,o.targetId,!0))}async function oP(s,e){const t=Pe(s),r=t.ka.get(e),o=t.qa.get(r.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),gg(t.remoteStore,r.targetId))}async function lP(s,e,t){const r=_P(s);try{const o=await function(h,p){const m=Pe(h),g=qt.now(),T=p.reduce((V,F)=>V.add(F.key),Fe());let S,I;return m.persistence.runTransaction("Locally write mutations","readwrite",V=>{let F=Us(),J=Fe();return m.ds.getEntries(V,T).next(G=>{F=G,F.forEach((Y,ne)=>{ne.isValidDocument()||(J=J.add(Y))})}).next(()=>m.localDocuments.getOverlayedDocuments(V,F)).next(G=>{S=G;const Y=[];for(const ne of p){const X=E2(ne,S.get(ne.key).overlayedDocument);X!=null&&Y.push(new Yr(ne.key,X,bw(X.value.mapValue),Xi.exists(!0)))}return m.mutationQueue.addMutationBatch(V,g,Y,p)}).next(G=>{I=G;const Y=G.applyToLocalDocumentSet(S,J);return m.documentOverlayCache.saveOverlays(V,G.batchId,Y)})}).then(()=>({batchId:I.batchId,changes:Pw(S)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),function(h,p,m){let g=h.Wa[h.currentUser.toKey()];g||(g=new Tt(Ge)),g=g.insert(p,m),h.Wa[h.currentUser.toKey()]=g}(r,o.batchId,t),await Tc(r,o.changes),await od(r.remoteStore)}catch(o){const u=Sg(o,"Failed to persist write");t.reject(u)}}async function mb(s,e){const t=Pe(s);try{const r=await yM(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Ka.get(u);h&&(rt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Ba=!0:o.modifiedDocuments.size>0?rt(h.Ba):o.removedDocuments.size>0&&(rt(h.Ba),h.Ba=!1))}),await Tc(t,r,e)}catch(r){await gl(r)}}function FS(s,e,t){const r=Pe(s);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const o=[];r.ka.forEach((u,h)=>{const p=h.view.sa(e);p.snapshot&&o.push(p.snapshot)}),function(h,p){const m=Pe(h);m.onlineState=p;let g=!1;m.queries.forEach((T,S)=>{for(const I of S.ta)I.sa(p)&&(g=!0)}),g&&Ag(m)}(r.eventManager,e),o.length&&r.La.p_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uP(s,e,t){const r=Pe(s);r.sharedClientState.updateQueryState(e,"rejected",t);const o=r.Ka.get(e),u=o&&o.key;if(u){let h=new Tt(Ie.comparator);h=h.insert(u,Sn.newNoDocument(u,ke.min()));const p=Fe().add(u),m=new sd(ke.min(),new Map,new Tt(Ge),h,p);await mb(r,m),r.$a=r.$a.remove(u),r.Ka.delete(e),bg(r)}else await fm(r.localStore,e,!1).then(()=>_m(r,e,t)).catch(gl)}async function cP(s,e){const t=Pe(s),r=e.batch.batchId;try{const o=await gM(t.localStore,e);yb(t,r,null),gb(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Tc(t,o)}catch(o){await gl(o)}}async function hP(s,e,t){const r=Pe(s);try{const o=await function(h,p){const m=Pe(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let T;return m.mutationQueue.lookupMutationBatch(g,p).next(S=>(rt(S!==null),T=S.keys(),m.mutationQueue.removeMutationBatch(g,S))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,T,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,T)).next(()=>m.localDocuments.getDocuments(g,T))})}(r.localStore,e);yb(r,e,t),gb(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Tc(r,o)}catch(o){await gl(o)}}function gb(s,e){(s.Ga.get(e)||[]).forEach(t=>{t.resolve()}),s.Ga.delete(e)}function yb(s,e,t){const r=Pe(s);let o=r.Wa[r.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),r.Wa[r.currentUser.toKey()]=o}}function _m(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const r of s.qa.get(e))s.ka.delete(r),t&&s.La.Ja(r,t);s.qa.delete(e),s.isPrimaryClient&&s.Ua.Sr(e).forEach(r=>{s.Ua.containsKey(r)||vb(s,r)})}function vb(s,e){s.Qa.delete(e.path.canonicalString());const t=s.$a.get(e);t!==null&&(gg(s.remoteStore,t),s.$a=s.$a.remove(e),s.Ka.delete(t),bg(s))}function qS(s,e,t){for(const r of t)r instanceof db?(s.Ua.addReference(r.key,e),fP(s,r)):r instanceof pb?(ve(wg,"Document no longer in limbo: "+r.key),s.Ua.removeReference(r.key,e),s.Ua.containsKey(r.key)||vb(s,r.key)):xe()}function fP(s,e){const t=e.key,r=t.path.canonicalString();s.$a.get(t)||s.Qa.has(r)||(ve(wg,"New document in limbo: "+t),s.Qa.add(r),bg(s))}function bg(s){for(;s.Qa.size>0&&s.$a.size<s.maxConcurrentLimboResolutions;){const e=s.Qa.values().next().value;s.Qa.delete(e);const t=new Ie(Ct.fromString(e)),r=s.za.next();s.Ka.set(r,new tP(t)),s.$a=s.$a.insert(t,r),ob(s.remoteStore,new Ir($i(lg(t.path)),r,"TargetPurposeLimboResolution",$f.ae))}}async function Tc(s,e,t){const r=Pe(s),o=[],u=[],h=[];r.ka.isEmpty()||(r.ka.forEach((p,m)=>{h.push(r.Ha(m,e,t).then(g=>{var T;if((g||t)&&r.isPrimaryClient){const S=g?!g.fromCache:(T=t==null?void 0:t.targetChanges.get(m.targetId))===null||T===void 0?void 0:T.current;r.sharedClientState.updateQueryState(m.targetId,S?"current":"not-current")}if(g){o.push(g);const S=_g.Yi(m.targetId,g);u.push(S)}}))}),await Promise.all(h),r.La.p_(o),await async function(m,g){const T=Pe(m);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>te.forEach(g,I=>te.forEach(I.Hi,V=>T.persistence.referenceDelegate.addReference(S,I.targetId,V)).next(()=>te.forEach(I.Ji,V=>T.persistence.referenceDelegate.removeReference(S,I.targetId,V)))))}catch(S){if(!yl(S))throw S;ve(mg,"Failed to update sequence numbers: "+S)}for(const S of g){const I=S.targetId;if(!S.fromCache){const V=T.Ts.get(I),F=V.snapshotVersion,J=V.withLastLimboFreeSnapshotVersion(F);T.Ts=T.Ts.insert(I,J)}}}(r.localStore,u))}async function dP(s,e){const t=Pe(s);if(!t.currentUser.isEqual(e)){ve(wg,"User change. New user:",e.toKey());const r=await ib(t.localStore,e);t.currentUser=e,function(u,h){u.Ga.forEach(p=>{p.forEach(m=>{m.reject(new Re(ae.CANCELLED,h))})}),u.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Tc(t,r.Rs)}}function pP(s,e){const t=Pe(s),r=t.Ka.get(e);if(r&&r.Ba)return Fe().add(r.key);{let o=Fe();const u=t.qa.get(e);if(!u)return o;for(const h of u){const p=t.ka.get(h);o=o.unionWith(p.view.ba)}return o}}function Eb(s){const e=Pe(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=mb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uP.bind(null,e),e.La.p_=$M.bind(null,e.eventManager),e.La.Ja=XM.bind(null,e.eventManager),e}function _P(s){const e=Pe(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hP.bind(null,e),e}class Lf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rd(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return mM(this.persistence,new dM,e.initialUser,this.serializer)}Xa(e){return new nb(pg.ri,this.serializer)}Za(e){return new AM}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lf.provider={build:()=>new Lf};class mP extends Lf{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){rt(this.persistence.referenceDelegate instanceof Pf);const r=this.persistence.referenceDelegate.garbageCollector;return new Z2(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Vn.withCacheSize(this.cacheSizeBytes):Vn.DEFAULT;return new nb(r=>Pf.ri(r,t),this.serializer)}}class mm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>FS(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dP.bind(null,this.syncEngine),await GM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new KM}()}createDatastore(e){const t=rd(e.databaseInfo.databaseId),r=function(u){return new IM(u)}(e.databaseInfo);return function(u,h,p,m){return new xM(u,h,p,m)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,o,u,h,p){return new MM(r,o,u,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>FS(this.syncEngine,t,0),function(){return LS.D()?new LS:new wM}())}createSyncEngine(e,t){return function(o,u,h,p,m,g,T){const S=new nP(o,u,h,p,m,g);return T&&(S.ja=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Pe(o);ve(Ha,"RemoteStore shutting down."),u.W_.add(5),await Ec(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}mm.provider={build:()=>new mm};/**
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
 *//**
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
 */class gP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Ls("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Hr="FirestoreClient";class yP{constructor(e,t,r,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=o,this.user=vn.UNAUTHENTICATED,this.clientId=_w.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(r,async h=>{ve(Hr,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(r,h=>(ve(Hr,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Sg(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function k_(s,e){s.asyncQueue.verifyOperationInProgress(),ve(Hr,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let r=t.initialUser;s.setCredentialChangeListener(async o=>{r.isEqual(o)||(await ib(e.localStore,o),r=o)}),e.persistence.setDatabaseDeletedListener(()=>s.terminate()),s._offlineComponents=e}async function GS(s,e){s.asyncQueue.verifyOperationInProgress();const t=await vP(s);ve(Hr,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener(r=>jS(e.remoteStore,r)),s.setAppCheckTokenChangeListener((r,o)=>jS(e.remoteStore,o)),s._onlineComponents=e}async function vP(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){ve(Hr,"Using user provided OfflineComponentProvider");try{await k_(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===ae.FAILED_PRECONDITION||o.code===ae.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;nl("Error using user provided cache. Falling back to memory cache: "+t),await k_(s,new Lf)}}else ve(Hr,"Using default OfflineComponentProvider"),await k_(s,new mP(void 0));return s._offlineComponents}async function Tb(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(ve(Hr,"Using user provided OnlineComponentProvider"),await GS(s,s._uninitializedComponentsProvider._online)):(ve(Hr,"Using default OnlineComponentProvider"),await GS(s,new mm))),s._onlineComponents}function EP(s){return Tb(s).then(e=>e.syncEngine)}async function TP(s){const e=await Tb(s),t=e.eventManager;return t.onListen=iP.bind(null,e.syncEngine),t.onUnlisten=aP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=oP.bind(null,e.syncEngine),t}function SP(s,e,t={}){const r=new kr;return s.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const T=new gP({next:I=>{T.su(),h.enqueueAndForget(()=>YM(u,S));const V=I.docs.has(p);!V&&I.fromCache?g.reject(new Re(ae.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&I.fromCache&&m&&m.source==="server"?g.reject(new Re(ae.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(I)},error:I=>g.reject(I)}),S=new ZM(lg(p.path),T,{includeMetadataChanges:!0,Ta:!0});return QM(u,S)}(await TP(s),s.asyncQueue,e,t,r)),r.promise}/**
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
 */function Sb(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
 */const WS=new Map;/**
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
 */function AP(s,e,t){if(!t)throw new Re(ae.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function wP(s,e,t,r){if(e===!0&&r===!0)throw new Re(ae.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function KS(s){if(!Ie.isDocumentKey(s))throw new Re(ae.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Cg(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":xe()}function Fa(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new Re(ae.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Cg(s);throw new Re(ae.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
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
 */const Ab="firestore.googleapis.com",QS=!0;class YS{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Re(ae.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ab,this.ssl=QS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:QS;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=tb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$2)throw new Re(ae.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sb((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new Re(ae.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new Re(ae.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new Re(ae.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rg{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new YS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Re(ae.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Re(ae.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new YS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bk;switch(r.type){case"firstParty":return new Nk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Re(ae.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=WS.get(t);r&&(ve("ComponentProvider","Removing Datastore"),WS.delete(t),r.terminate())}(this),Promise.resolve()}}function bP(s,e,t,r={}){var o;const u=(s=Fa(s,Rg))._getSettings(),h=Object.assign(Object.assign({},u),{emulatorOptions:s._getEmulatorOptions()}),p=`${e}:${t}`;u.host!==Ab&&u.host!==p&&nl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:p,ssl:!1,emulatorOptions:r});if(!Mr(m,h)&&(s._setSettings(m),r.mockUserToken)){let g,T;if(typeof r.mockUserToken=="string")g=r.mockUserToken,T=vn.MOCK_USER;else{g=$R(r.mockUserToken,(o=s._app)===null||o===void 0?void 0:o.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new Re(ae.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new vn(S)}s._authCredentials=new Ck(new pw(g,T))}}/**
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
 */class Ig{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ig(this.firestore,e,this._query)}}class Yn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yn(this.firestore,e,this._key)}}class oc extends Ig{constructor(e,t,r){super(e,t,lg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Yn(this.firestore,null,new Ie(e))}withConverter(e){return new oc(this.firestore,e,this._path)}}function Fr(s,e,...t){if(s=fn(s),arguments.length===1&&(e=_w.newId()),AP("doc","path",e),s instanceof Rg){const r=Ct.fromString(e,...t);return KS(r),new Yn(s,null,new Ie(r))}{if(!(s instanceof Yn||s instanceof oc))throw new Re(ae.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=s._path.child(Ct.fromString(e,...t));return KS(r),new Yn(s.firestore,s instanceof oc?s.converter:null,new Ie(r))}}/**
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
 */const $S="AsyncQueue";class XS{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new rb(this,"async_queue_retry"),this.bu=()=>{const r=x_();r&&ve($S,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const t=x_();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=x_();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new kr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!yl(e))throw e;ve($S,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const o=function(h){let p=h.message||"";return h.stack&&(p=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),p}(r);throw Ls("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.pu=!1,r))));return this.Su=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=Tg.createAndSchedule(this,e,t,r,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&xe()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class ld extends Rg{constructor(e,t,r,o){super(e,t,r,o),this.type="firestore",this._queue=new XS,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new XS(e),this._firestoreClient=void 0,await e}}}function CP(s,e){const t=d0(),r=If,o=Am(t,"firestore").getImmediate({identifier:r});if(!o._initialized){const u=YR("firestore");u&&bP(o,...u)}return o}function wb(s){if(s._terminated)throw new Re(ae.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||RP(s),s._firestoreClient}function RP(s){var e,t,r;const o=s._freezeSettings(),u=function(p,m,g,T){return new Fk(p,m,g,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,Sb(T.experimentalLongPollingOptions),T.useFetchStreams)}(s._databaseId,((e=s._app)===null||e===void 0?void 0:e.options.appId)||"",s._persistenceKey,o);s._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(s._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),s._firestoreClient=new yP(s._authCredentials,s._appCheckCredentials,s._queue,u,s._componentsProvider&&function(p){const m=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(m),_online:m}}(s._componentsProvider))}/**
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
 */class ul{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ul(dn.fromBase64String(e))}catch(t){throw new Re(ae.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ul(dn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ud{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Re(ae.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new hn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class cd{constructor(e){this._methodName=e}}/**
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
 */class Ng{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Re(ae.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Re(ae.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ge(this._lat,e._lat)||Ge(this._long,e._long)}}/**
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
 */class Dg{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,o){if(r.length!==o.length)return!1;for(let u=0;u<r.length;++u)if(r[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
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
 */const IP=/^__.*__$/;class NP{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Yr(e,this.data,this.fieldMask,t,this.fieldTransforms):new yc(e,this.data,t,this.fieldTransforms)}}class bb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Yr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Cb(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw xe()}}class hd{constructor(e,t,r,o,u,h){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new hd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:r,Qu:!1});return o.$u(e),o}Ku(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:r,Qu:!1});return o.Bu(),o}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Uf(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Cb(this.Lu)&&IP.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class DP{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||rd(e)}ju(e,t,r,o=!1){return new hd({Lu:e,methodName:t,zu:r,path:hn.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rb(s){const e=s._freezeSettings(),t=rd(s._databaseId);return new DP(s._databaseId,!!e.ignoreUndefinedProperties,t)}function OP(s,e,t,r,o,u={}){const h=s.ju(u.merge||u.mergeFields?2:0,e,t,o);xg("Data must be an object, but it was:",h,r);const p=Ib(r,h);let m,g;if(u.merge)m=new Kn(h.fieldMask),g=h.fieldTransforms;else if(u.mergeFields){const T=[];for(const S of u.mergeFields){const I=gm(e,S,t);if(!h.contains(I))throw new Re(ae.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Db(T,I)||T.push(I)}m=new Kn(T),g=h.fieldTransforms.filter(S=>m.covers(S.field))}else m=null,g=h.fieldTransforms;return new NP(new Un(p),m,g)}class fd extends cd{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fd}}function xP(s,e,t){return new hd({Lu:3,zu:e.settings.zu,methodName:s._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Og extends cd{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=xP(this,e,!0),r=this.Hu.map(u=>Sc(u,t)),o=new al(r);return new m2(e.path,o)}isEqual(e){return e instanceof Og&&Mr(this.Hu,e.Hu)}}function kP(s,e,t,r){const o=s.ju(1,e,t);xg("Data must be an object, but it was:",o,r);const u=[],h=Un.empty();Qr(r,(m,g)=>{const T=kg(e,m,t);g=fn(g);const S=o.Ku(T);if(g instanceof fd)u.push(T);else{const I=Sc(g,S);I!=null&&(u.push(T),h.set(T,I))}});const p=new Kn(u);return new bb(h,p,o.fieldTransforms)}function MP(s,e,t,r,o,u){const h=s.ju(1,e,t),p=[gm(e,r,t)],m=[o];if(u.length%2!=0)throw new Re(ae.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<u.length;I+=2)p.push(gm(e,u[I])),m.push(u[I+1]);const g=[],T=Un.empty();for(let I=p.length-1;I>=0;--I)if(!Db(g,p[I])){const V=p[I];let F=m[I];F=fn(F);const J=h.Ku(V);if(F instanceof fd)g.push(V);else{const G=Sc(F,J);G!=null&&(g.push(V),T.set(V,G))}}const S=new Kn(g);return new bb(T,S,h.fieldTransforms)}function Sc(s,e){if(Nb(s=fn(s)))return xg("Unsupported field value:",e,s),Ib(s,e);if(s instanceof cd)return function(r,o){if(!Cb(o.Lu))throw o.Wu(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${r._methodName}() is not currently supported inside arrays`);const u=r._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,o){const u=[];let h=0;for(const p of r){let m=Sc(p,o.Uu(h));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),h++}return{arrayValue:{values:u}}}(s,e)}return function(r,o){if((r=fn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return d2(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const u=qt.fromDate(r);return{timestampValue:Mf(o.serializer,u)}}if(r instanceof qt){const u=new qt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mf(o.serializer,u)}}if(r instanceof Ng)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ul)return{bytesValue:Qw(o.serializer,r._byteString)};if(r instanceof Yn){const u=o.databaseId,h=r.firestore._databaseId;if(!h.isEqual(u))throw o.Wu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:fg(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof Dg)return function(h,p){return{mapValue:{fields:{[Aw]:{stringValue:ww},[Nf]:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw p.Wu("VectorValues must only contain numeric values.");return ug(p.serializer,g)})}}}}}}(r,o);throw o.Wu(`Unsupported field value: ${Cg(r)}`)}(s,e)}function Ib(s,e){const t={};return gw(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(s,(r,o)=>{const u=Sc(o,e.qu(r));u!=null&&(t[r]=u)}),{mapValue:{fields:t}}}function Nb(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof qt||s instanceof Ng||s instanceof ul||s instanceof Yn||s instanceof cd||s instanceof Dg)}function xg(s,e,t){if(!Nb(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const r=Cg(t);throw r==="an object"?e.Wu(s+" a custom object"):e.Wu(s+" "+r)}}function gm(s,e,t){if((e=fn(e))instanceof ud)return e._internalPath;if(typeof e=="string")return kg(s,e);throw Uf("Field path arguments must be of type string or ",s,!1,void 0,t)}const PP=new RegExp("[~\\*/\\[\\]]");function kg(s,e,t){if(e.search(PP)>=0)throw Uf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new ud(...e.split("."))._internalPath}catch{throw Uf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function Uf(s,e,t,r,o){const u=r&&!r.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||h)&&(m+=" (found",u&&(m+=` in field ${r}`),h&&(m+=` in document ${o}`),m+=")"),new Re(ae.INVALID_ARGUMENT,p+s+m)}function Db(s,e){return s.some(t=>t.isEqual(e))}/**
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
 */class Ob{constructor(e,t,r,o,u){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Yn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xb("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class VP extends Ob{data(){return super.data()}}function xb(s,e){return typeof e=="string"?kg(s,e):e instanceof ud?e._internalPath:e._delegate._internalPath}class LP{convertValue(e,t="none"){switch(Br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw xe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Qr(e,(o,u)=>{r[o]=this.convertValue(u,t)}),r}convertVectorValue(e){var t,r,o;const u=(o=(r=(t=e.fields)===null||t===void 0?void 0:t[Nf].arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.map(h=>Dt(h.doubleValue));return new Dg(u)}convertGeoPoint(e){return new Ng(Dt(e.latitude),Dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Zf(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ic(e));default:return null}}convertTimestamp(e){const t=Ur(e);return new qt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ct.fromString(e);rt(eb(r));const o=new sc(r.get(1),r.get(3)),u=new Ie(r.popFirst(5));return o.isEqual(t)||Ls(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function UP(s,e,t){let r;return r=s?s.toFirestore(e):e,r}/**
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
 */class jP{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kb extends Ob{constructor(e,t,r,o,u,h){super(e,t,r,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new BP(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(xb("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class BP extends kb{data(e={}){return super.data(e)}}/**
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
 */function Mg(s){s=Fa(s,Yn);const e=Fa(s.firestore,ld);return SP(wb(e),s._key).then(t=>HP(e,s,t))}class zP extends LP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ul(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Yn(this.firestore,null,t)}}function ZS(s,e,t){s=Fa(s,Yn);const r=Fa(s.firestore,ld),o=UP(s.converter,e);return Mb(r,[OP(Rb(r),"setDoc",s._key,o,s.converter!==null,t).toMutation(s._key,Xi.none())])}function Pg(s,e,t,...r){s=Fa(s,Yn);const o=Fa(s.firestore,ld),u=Rb(o);let h;return h=typeof(e=fn(e))=="string"||e instanceof ud?MP(u,"updateDoc",s._key,e,t,r):kP(u,"updateDoc",s._key,e),Mb(o,[h.toMutation(s._key,Xi.exists(!0))])}function Mb(s,e){return function(r,o){const u=new kr;return r.asyncQueue.enqueueAndForget(async()=>lP(await EP(r),o,u)),u.promise}(wb(s),e)}function HP(s,e,t){const r=t.docs.get(e._key),o=new zP(s);return new kb(s,o,e._key,r,new jP(t.hasPendingWrites,t.fromCache),e.converter)}function FP(...s){return new Og("arrayUnion",s)}(function(e,t=!0){(function(o){ml=o})(qa),Ma(new Pr("firestore",(r,{instanceIdentifier:o,options:u})=>{const h=r.getProvider("app").getImmediate(),p=new ld(new Rk(r.getProvider("auth-internal")),new Dk(h,r.getProvider("app-check-internal")),function(g,T){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new Re(ae.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sc(g.options.projectId,T)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),Qi(rS,aS,e),Qi(rS,aS,"esm2017")})();const qP={apiKey:"AIzaSyDWN5GCnrhUqKZlOt8Rxb0n748lhPf9B58",authDomain:"to-do-list-9cf11.firebaseapp.com",databaseURL:"https://to-do-list-9cf11-default-rtdb.firebaseio.com",projectId:"to-do-list-9cf11",storageBucket:"to-do-list-9cf11.firebasestorage.app",messagingSenderId:"44862500438",appId:"1:44862500438:web:ccb0f012d9c8e7cfe215f7",measurementId:"G-HB8NT8L1FD"};f0(qP);const qr=CP(),wi=VD(),GP=({setPaging:s,editing:e,setPage:t,indicated:r,setIndicated:o,showTaskPrompt:u,url:h,setUrl:p,showSignInPrompt:m,showSignUpPrompt:g,setShowSignInPrompt:T,setShowSignUpPrompt:S,user:I,setShowPersonalInformation:V,continueAs:F,setIsSigningOut:J,showNavBar:G,showSaveChanges:Y,setShowSaveChanges:ne,setShowNavbar:X,setShowMakeUserSignIn:re})=>{const[fe,Ee]=ce.useState(!1),M=[{content:"Home",link:"#Home",icon:()=>A.jsx("i",{className:"fa fa-home"}),paging:1},{content:"Tasks",link:"#Tasks",icon:()=>A.jsx("i",{className:"fa fa-book"}),paging:2},{content:"About",link:"#About",icon:()=>A.jsx("i",{className:"fa fa-user"}),paging:3},{content:"Contacts",link:"#Contacts",icon:()=>A.jsx("i",{className:"fa fa-phone"}),paging:4}],R=N=>{let k=window.location.href;k.toLowerCase();let P=k.search("/Acad/");k=k.slice(0,P+6),p(k.concat(N))},C=(N,k)=>{const P=JSON.parse(localStorage.getItem("Changes"));I!=null?P==null?(o(0),t(N.paging),R(N.link)):(ne(!0),X(!1),Ee(!1),s({link:N.link,page:N.paging})):(P==null&&N.paging!=2&&(o(0),t(N.paging),R(N.link)),N.paging==2&&(re(!0),Ee(!1))),console.log(N)};return A.jsxs(A.Fragment,{children:[A.jsxs("nav",{className:!m&&!g&&!u&&!e&&!F&&G?ht.nav:ht.hideNav,children:[A.jsxs("div",{className:ht.left,children:[A.jsx("img",{src:"./web-icon.png",className:ht.icon}),A.jsx("h1",{children:"ACAD"})]}),A.jsx("div",{className:ht.middle,children:A.jsx("ul",{className:ht.NavLinks,children:M.map((N,k)=>A.jsx("li",{onClick:()=>{C(N)},className:r===k?ht.indicated:ht.notIndicated,children:A.jsxs("a",{href:Y?null:N.link,children:[N.icon()," ",A.jsxs("span",{children:[N.content,A.jsx("span",{className:ht.indication})]})]})},N.link))})}),I?A.jsxs("div",{className:`${ht.right} ${ht.LoggedIn}`,children:[A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-user"}),className:`${ht.User_Button}`,content:"Account",func:()=>V(!0)}),A.jsx(Se,{content:"Sign Out",func:()=>{J(!0)},className:ht.SignUpButt}),A.jsx(Se,{className:ht.HamburgerButt,func:()=>{Ee(!0)},content:A.jsx("i",{className:"fa fa-list-ul"})})]}):A.jsxs("div",{className:`${ht.right} ${ht.notLoggedIn}`,children:[A.jsx(Se,{content:"Sign In",func:()=>{T(!0)},className:ht.SignInButt}),A.jsx(Se,{content:"Sign Up",func:()=>{S(!0)},className:ht.SignUpButt}),A.jsx(Se,{className:ht.HamburgerButt,func:()=>{Ee(!0)},content:A.jsx("i",{className:"fa fa-list-ul"})})]})]}),A.jsx("div",{className:fe&&!Y?ht.sidebar:ht.hideSideBar,children:A.jsxs("ul",{className:fe?ht.NavLinks:ht.hideNavLinks,children:[A.jsx(Se,{className:ht.HamburgerButt,func:()=>{Ee(!fe)},content:A.jsx("i",{className:"fa fa-list-ul"})}),M.map((N,k)=>A.jsx("li",{onClick:()=>{C(N)},className:r===k?ht.indicated:ht.notIndicated,children:A.jsxs("a",{href:Y?null:N.link,children:[N.icon()," ",A.jsxs("span",{children:[N.content,A.jsx("span",{className:ht.indication})]})]})},N.link))]})})]})},WP=({page:s,setPage:e,setIndicated:t,indicated:r})=>A.jsxs("div",{className:s==1?Rs.home_wrapper:Rs.hideHome,id:"Home",children:[A.jsxs("div",{className:`${Rs.left} ${KE.animateLeft}`,children:[A.jsxs("div",{className:Rs.wrapTop,children:[A.jsx("h1",{children:"Welcome User !"}),A.jsx("p",{children:"Write, read and document your work and studies using the Acad Web App for free!"}),A.jsx("a",{href:"#Tasks",children:A.jsx(Se,{content:"Get Started",func:()=>{e(2),t(1)}})})]}),A.jsxs("div",{className:Rs.wrapBottom,children:[A.jsx(Se,{className:Rs.orange}),A.jsx(Se,{className:Rs.purple}),A.jsx(Se,{className:Rs.blue})]})]}),A.jsx("div",{className:Rs.right,children:A.jsx("img",{src:"./StartingPage/Working.png",className:KE.animateImg})})]}),KP="_Task_Container_efcfg_1",QP="_tasks_efcfg_47",YP="_Finished_efcfg_71",$P="_unchecked_efcfg_95",XP="_checked_efcfg_103",ZP="_col_efcfg_111",JP="_br_efcfg_119",eV="_fs_efcfg_127",tV="_bgC_efcfg_135",nV="_fW_efcfg_143",Pn={Task_Container:KP,tasks:QP,Finished:YP,unchecked:$P,checked:XP,col:ZP,br:JP,fs:eV,bgC:tV,fW:nV},iV=({handleSelectedTasks:s,selectTask:e,tasks:t,setTasks:r,searching:o,filteredTask:u,setFilteredTask:h,setOpenedTask:p,setEditing:m,type:g,sorting:T,sortOptions:S})=>{const[I,V]=ce.useState(t.map(Y=>({...Y,isChecked:!1})));function F(Y){let ne=t,X=[];ne=ne.map(re=>re.id===Y?{...re,isChecked:!re.isChecked}:re);for(let re=0;re<ne.length;re++)ne[re].isChecked&&X.push({id:ne[re].id,index:re}),re==ne.length-1&&(s(X),X=[]);r(re=>re.map(fe=>fe.id===Y?{...fe,isChecked:!fe.isChecked}:fe)),o&&h(re=>re.map(fe=>fe.id===Y?{...fe,isChecked:!fe.isChecked}:fe))}ce.useEffect(()=>{V([...t])},[t]);const J=()=>{if(o&&u!=null)return A.jsx("div",{className:Pn.Task_Container,children:u.map((Y,ne)=>{if(Y.type==="pending"&&g==="Pending")return A.jsx(G,{task:Y,i:ne},Y.id);if(Y.type==="finished"&&g==="Finished")return A.jsx(G,{task:Y,i:ne},Y.id);if(g==="All Tasks")return A.jsx(G,{task:Y,i:ne},Y.id)})},"Task_Container");if(T&&!o){let Y=I;for(let ne in S)ne==0&&S[ne].state==!0?Y=Y.sort((X,re)=>re.dateCreated.time-X.dateCreated.time):ne==1&&S[ne].state==!0?Y=Y.sort((X,re)=>X.dateCreated.time-re.dateCreated.time):ne==2&&S[ne].state==!0?Y=Y.sort((X,re)=>X.task.localeCompare(re.task)):ne==3&&S[ne].state==!0&&(Y=Y.sort((X,re)=>re.task.localeCompare(X.task)));return A.jsx("div",{className:Pn.Task_Container,children:Y.map((ne,X)=>{if(ne.type==="pending"&&g==="Pending")return A.jsx(G,{task:ne,i:X},ne.id);if(ne.type==="finished"&&g==="Finished")return A.jsx(G,{task:ne,i:X},ne.id);if(g==="All Tasks")return A.jsx(G,{task:ne,i:X},ne.id)})})}else if(!T&&!o)return A.jsx("div",{className:Pn.Task_Container,children:I.map((Y,ne)=>{if(Y.type==="pending"&&g==="Pending")return A.jsx(G,{task:Y,i:ne},Y.id);if(Y.type==="finished"&&g==="Finished")return A.jsx(G,{task:Y,i:ne},Y.id);if(g==="All Tasks")return A.jsx(G,{task:Y,i:ne},Y.id)})})},G=({task:Y,i:ne})=>A.jsxs("label",{htmlFor:"task"+Y.id,style:Y.style!="default"?{...Y.style}:null,className:Y.type=="pending"?`${Pn.Pending} ${Y.cName.map(X=>JSON.parse(X)).join(" ")} ${Pn.tasks}`:`${Pn.Finished} ${Y.cName.map(X=>JSON.parse(X)).join(" ")} ${Pn.tasks}`,onDoubleClick:()=>{m(!0),p({id:Y.id,isOpened:!0})},children:[A.jsx("i",{style:e==!1?{display:"none"}:{display:"block"},className:`fa fa-check-square ${Y.isChecked===!0?Pn.checked:Pn.unchecked}`}),A.jsx("input",{style:{display:"none"},type:"checkbox",id:"task"+Y.id,onChange:()=>{e&&F(Y.id)}}),Y.task]},Y.id);if(I!=null)return A.jsx(A.Fragment,{children:A.jsx(J,{})})},sV="_Bottom_Options_14lht_1",rV="_toLeft_14lht_31",aV="_toRight_14lht_31",oV="_Unchecked_14lht_57",lV="_hide_14lht_105",Ar={Bottom_Options:sV,toLeft:rV,toRight:aV,Unchecked:oV,hide:lV},uV=({handleSelectedTasks:s,selectedTask:e,selectTask:t,setSelectTask:r,unselectAll:o,tasks:u,setTasks:h,searching:p,updateTasks:m,setUpdateTasks:g,filteredTasks:T,setFilteredTasks:S,handleMarking:I})=>{const V=()=>{let G=u,Y=T,ne=[],X=[];if(p){Y=Y.map(re=>({...re,isChecked:!0}));for(let re=0;re<Y.length;re++)Y[re].isChecked&&X.push({id:Y[re].id,index:re});s([...X])}else{G=G.map(re=>({...re,isChecked:!0}));for(let re=0;re<G.length;re++)G[re].isChecked&&ne.push({id:G[re].id,index:re});s([...ne])}p?S([...Y]):g(re=>re.map(fe=>({...fe,isChecked:!0})))};function F(){let G=u,Y=T;for(let ne in Y)for(let X in e)Y[ne].id===e[X].id&&Y.splice(ne,1);for(let ne in u)for(let X in e)G[ne].id===e[X].id&&G.splice(ne,1);I(Y,[...G]),s(null)}const J=()=>t==!0?A.jsx(A.Fragment,{children:A.jsxs("div",{className:Ar.toLeft,children:[A.jsx(Se,{content:A.jsx("span",{children:" Select All"}),icon:A.jsx("i",{className:"fa fa-check"}),className:Ar.SelectAllButton,func:()=>{V()}}),A.jsx(Se,{content:A.jsx("span",{children:" Unselect All"}),icon:A.jsx("i",{className:`fas fa fa-check ${Ar.Unchecked}`}),className:Ar.UnselectAllButton,func:()=>{o()}})]})}):A.jsx(A.Fragment,{children:A.jsx(Se,{content:"Select",icon:A.jsx("i",{className:"fa fa-hand-o-up"}),className:Ar.SelectButton,func:()=>r(!0)})});return A.jsx(A.Fragment,{children:A.jsxs("div",{className:Ar.Bottom_Options,children:[A.jsx(J,{}),A.jsxs("div",{className:t==!0?Ar.toRight:Ar.hide,children:[A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-trash"}),content:" Delete",func:G=>{t?F():console.log("No update")}}),A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-close"}),content:" Cancel",func:()=>{r(!1),o()}})]})]})})},cV="_DropDown_Body_1ouwm_1",hV="_Hide_DropDown_Body_1ouwm_1",fV="_Dropdown_Wrapper_1ouwm_27",dV="_Not_Indicated_1ouwm_59",pV="_Indicated_1ouwm_69",Nu={DropDown_Body:cV,Hide_DropDown_Body:hV,Dropdown_Wrapper:fV,Not_Indicated:dV,Indicated:pV},_V=({setType:s,showDropDown:e,handleType:t,unselectAll:r})=>{const o=["Pending","Finished","All Tasks"],[u,h]=ce.useState(0);return A.jsx(A.Fragment,{children:A.jsx("div",{className:e?Nu.DropDown_Body:Nu.Hide_DropDown_Body,onClick:()=>{t()},children:A.jsx("ul",{className:Nu.Dropdown_Wrapper,children:o.map((p,m)=>A.jsx("li",{className:u==m?Nu.Indicated:Nu.Not_Indicated,onClick:()=>{s(o[m]),h(m),r()},children:p},o[m]))})})})},mV="_Options_tab_yd1ph_1",gV="_Prompt_Box_yd1ph_21",yV="_Close_Button_yd1ph_63",vV="_colorPicker_yd1ph_145",EV="_Hide_BG_Color_Prompt_yd1ph_177",TV="_Hide_Color_Prompt_yd1ph_179",SV="_Hide_Border_Color_Prompt_yd1ph_181",AV="_Hide_Font_Weight_Prompt_yd1ph_183",wV="_Hide_Italic_Prompt_yd1ph_185",bV="_BG_Color_Prompt_yd1ph_193",CV="_Color_Prompt_yd1ph_195",RV="_Border_Color_Prompt_yd1ph_197",IV="_Font_Weight_Prompt_yd1ph_199",NV="_Italic_Prompt_yd1ph_201",DV="_Wrap_Options_Tab_yd1ph_209",OV="_createTask_yd1ph_299",xV="_notWorking_yd1ph_321",je={Options_tab:mV,Prompt_Box:gV,Close_Button:yV,colorPicker:vV,Hide_BG_Color_Prompt:EV,Hide_Color_Prompt:TV,Hide_Border_Color_Prompt:SV,Hide_Font_Weight_Prompt:AV,Hide_Italic_Prompt:wV,BG_Color_Prompt:bV,Color_Prompt:CV,Border_Color_Prompt:RV,Font_Weight_Prompt:IV,Italic_Prompt:NV,Wrap_Options_Tab:DV,createTask:OV,notWorking:xV},kV=({selectedTask:s,filteredTasks:e,updateTasks:t,searching:r,optionTabNumber:o,handleMarking:u,unselectAll:h,setShowTaskPrompt:p,setShowSortPrompt:m,numberOfChanges:g,setNumberOfChanges:T,user:S,setUpdateTask:I,setLoading:V,setShowNavbar:F})=>{var Ae;const[J,G]=ce.useState(o),[Y,ne]=ce.useState(!1),[X,re]=ce.useState(!1),[fe,Ee]=ce.useState(!1),[M,R]=ce.useState(!1),[C,N]=ce.useState(!1),[k,P]=ce.useState(!1);function D(ue,z,x,Z,ge,de){if(s.length>=1){let pe=t,oe=t,ie=e,Oe=[];for(let ye in s)if(r)for(let _e in ie)ie[_e].id==s[ye].id?(ue!=!1&&(ie[s[ye].index].type=ue,Oe.push(ie[s[ye].index])),ue==!1&&((ie[_e].style=="default"||ie[_e].style==null)&&(ie[_e].style={color:"default",border:"default",fontStyle:"default",backgroundColor:"default",fontWeight:"default"}),z&&(ie[_e].style.color=z,Oe.push(ie[_e])),x&&(ie[_e].style.backgroundColor=x,Oe.push(ie[_e])),Z&&(ie[_e].style.fontWeight=Z,Oe.push(ie[_e])),ge&&(ie[_e].style.fontStyle=ge,Oe.push(ie[_e])),de&&(ie[_e].style.borderColor=de,Oe.push(ie[_e])))):Oe.push(ie[s[ye].index]);for(let ye in s)oe=oe.map(_e=>{if(s[ye].id==_e.id){let Ce={..._e};return Ce.style=Ce.style==="default"?{color:"default",border:"default",fontStyle:"default",backgroundColor:"default",fontWeight:"default"}:{...Ce.style},ue!==!1&&(Ce.type=ue),z&&(Ce.style={...Ce.style,color:z}),x&&(Ce.style={...Ce.style,backgroundColor:x}),Z&&(Ce.style={...Ce.style,fontWeight:Z}),ge&&(Ce.style={...Ce.style,fontStyle:ge}),de&&(Ce.style={...Ce.style,borderColor:de}),Ce.isChecked=!0,Ce}else return{..._e}});r?u([...ie],[...oe],pe):u(ie,[...oe],pe)}}function at(){let ue=g+1,z=JSON.parse(localStorage.getItem("Changes"));z=z[ue],I([...z]),T(ue),console.log(JSON.parse(localStorage.getItem("Changes")))}function nt(){let ue=g-1,z=JSON.parse(localStorage.getItem("Changes"));z=z[ue],I([...z]),T(ue),console.log(JSON.parse(localStorage.getItem("Changes")))}const le=async()=>{V(!0),F(!1);let ue=JSON.parse(localStorage.getItem("Changes"));ue=[...ue[g]],ue=ue.map(Z=>({...Z,isChecked:!1}));const z=S==null?void 0:S.uid.toString(),x=Fr(qr,`Users/${z}`);try{await Pg(x,{tasks:ue}),T(null),I([...ue]),localStorage.removeItem("Changes")}catch(Z){alert(Z.message)}F(!0),V(!1)};return ce.useEffect(()=>{G(o)},[o]),ce.useEffect(()=>{console.log(s)},[s]),A.jsxs("div",{className:je.Options_tab,children:[A.jsxs("div",{className:X?`${je.BG_Color_Prompt} ${je.Prompt_Box}`:`${je.Hide_BG_Color_Prompt} ${je.Prompt_Box}`,children:[A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-close"}),className:`${je.Close_Button}`,func:()=>{re(!1)}}),A.jsx("h1",{children:"Change BG Color"}),A.jsxs("label",{htmlFor:"colorPicker",className:je.colorPicker,children:[A.jsx("input",{type:"color",id:"colorPicker",onBlur:ue=>{D(!1,!1,ue.target.value,!1,!1)}}),A.jsx("span",{children:"Choose BG Color"})]}),A.jsx(Se,{content:"Default",func:()=>{D(!1,!1,"#f09c2e",!1,!1)}})]}),A.jsxs("div",{className:fe?`${je.Color_Prompt} ${je.Prompt_Box}`:`${je.Hide_Color_Prompt} ${je.Prompt_Box}`,children:[A.jsx("h1",{children:"Change Font Color"}),A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-close"}),className:`${je.Close_Button}`,func:()=>{Ee(!1)}}),A.jsxs("label",{htmlFor:"bgColorPicker",className:`${je.bgColorPicker} ${je.colorPicker}`,children:[A.jsx("input",{type:"color",id:"bgColorPicker",onBlur:ue=>{D(!1,ue.target.value,!1,!1,!1)}}),A.jsx("span",{children:"Choose Font Color"})]}),A.jsx(Se,{content:"Default",func:()=>{D(!1,"white",!1,!1,!1)}})]}),A.jsxs("div",{className:M?`${je.Border_Color_Prompt} ${je.Prompt_Box}`:`${je.Hide_Border_Color_Prompt} ${je.Prompt_Box}`,children:[A.jsx("h1",{children:"Change Border Color"}),A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-close"}),className:`${je.Close_Button}`,func:()=>{R(!1)}}),A.jsxs("label",{htmlFor:"borderColorPicker",className:`${je.borderColorPicker} ${je.colorPicker}`,children:[A.jsx("input",{type:"color",id:"borderColorPicker",onBlur:ue=>{D(!1,!1,!1,!1,!1,ue.target.value)}}),A.jsx("span",{children:"Choose Border Color"})]}),A.jsx(Se,{content:"Default",func:()=>{D(!1,!1,!1,!1,!1,"#d16c06")}})]}),A.jsxs("div",{className:C?`${je.Font_Weight_Prompt} ${je.Prompt_Box}`:`${je.Hide_Font_Weight_Prompt} ${je.Prompt_Box}`,children:[A.jsx("h1",{children:"Change Font Weight"}),A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-close"}),className:`${je.Close_Button}`,func:()=>{N(!1)}}),A.jsx(Se,{content:"Normal",func:()=>{D(!1,!1,!1,"Normal",!1,!1)}}),A.jsx(Se,{content:"Bold",func:()=>{D(!1,!1,!1,"Bold",!1,!1)}}),A.jsx(Se,{content:"Bolder",func:()=>{D(!1,!1,!1,"Bolder",!1,!1)}})]}),A.jsxs("div",{className:k?`${je.Italic_Prompt} ${je.Prompt_Box}`:`${je.Hide_Italic_Prompt} ${je.Prompt_Box}`,children:[A.jsx("h1",{children:"Change Italization"}),A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-close"}),className:`${je.Close_Button}`,func:()=>{P(!1)}}),A.jsx(Se,{content:"Normal",func:()=>{D(!1,!1,!1,!1,"Normal",!1)}}),A.jsx(Se,{content:"Italic",func:()=>{D(!1,!1,!1,!1,"Italic",!1)}})]}),A.jsxs("div",{className:je.Wrap_Options_Tab,children:[A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-save"}),content:"Save Changes",className:g==null?`${je.notWorking}`:null,func:()=>{g!=null&&le()}}),A.jsx(Se,{icon:A.jsx("i",{className:"material-icons",children:"undo"}),content:"Undo",className:g==null||g==0?`${je.notWorking}`:null,func:()=>{g>0&&nt()}}),A.jsx(Se,{icon:A.jsx("i",{className:"material-icons",children:"redo"}),content:"Redo",className:g<((Ae=JSON.parse(localStorage.getItem("Changes")))==null?void 0:Ae.length)-1&&g!=null?null:`${je.notWorking}`,func:()=>{var ue;g<((ue=JSON.parse(localStorage.getItem("Changes")))==null?void 0:ue.length)-1&&g!=null&&at()}}),A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-plus"}),content:A.jsx("span",{children:" Create New Task"}),className:je.createTask,func:()=>{p(!0),F(!1)}}),A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-edit"}),content:A.jsx("span",{children:" Mark As Finished"}),func:()=>{D("finished","white","#51af0f",!1,!1,"rgb(8, 97, 20)")}}),A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-edit"}),content:A.jsx("span",{children:" Mark As Pending"}),func:()=>{D("pending","white","#f09c2e",!1,!1,"rgb(209, 108, 6)")}}),A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-sort"}),content:A.jsx("span",{children:" Sort"}),func:()=>{m(!0),F(!1)}}),A.jsx(Se,{icon:A.jsx("i",{className:"material-icons",children:"format_color_fill"}),content:A.jsx("span",{children:" BG Color "}),func:()=>{re(!0),Ee(!1),R(!1),N(!1),P(!1)}}),A.jsx(Se,{icon:A.jsx("i",{className:"material-icons",children:"format_color_text"}),content:A.jsx("span",{children:" Font Color"}),func:()=>{Ee(!0),re(!1),R(!1),N(!1,P(!1))}}),A.jsx(Se,{icon:A.jsx("i",{className:"material-icons",children:"border_color"}),content:A.jsx("span",{children:" Border Color"}),func:()=>{R(!0),re(!1),Ee(!1),N(!1),P(!1)}}),A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-bold"}),content:" Bold",className:`${je.green} ${je.black}`,func:()=>{R(!1),re(!1),Ee(!1),N(!0),P(!1)}}),A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-italic"}),content:" Italic",func:()=>{R(!1),re(!1),Ee(!1),N(!1),P(!0)}})]})]})},MV="_Task_View_19nr4_1",PV="_Hide_Task_View_19nr4_19",VV="_nav_19nr4_57",LV="_content_19nr4_127",UV="_submitButton_19nr4_173",Du={Task_View:MV,Hide_Task_View:PV,nav:VV,content:LV,submitButton:UV},jV=({openedTask:s,setOpenedTask:e,tasks:t,filteredTasks:r,setEditing:o,editing:u,user:h,handleMarking:p,setShowNavbar:m,setLoading:g})=>{const T=ce.useRef(null);function S(){let I=[...t],V=r;for(let F in I)I[F].id===s.id&&(I[F].task=T.current.innerText);for(let F in V)V[F].id===s.id&&(V[F].task=T.current.innerText);p(V,[...I]),m(!0)}if(s.id!=null)return A.jsxs("div",{className:u?Du.Task_View:Du.Hide_Task_View,children:[A.jsxs("div",{className:Du.nav,children:[A.jsxs("h3",{children:[A.jsx("i",{className:"fa fa-edit"})," ",A.jsx("span",{children:"Edit Task"})]}),A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-times"}),func:()=>{e({index:null,isOpened:!1}),o(!1),m(!0)}})]}),A.jsx("div",{className:Du.content,children:A.jsx("p",{ref:T,contentEditable:u,children:t.map((I,V)=>{if(I.id===s.id)return I.task})})}),A.jsx(Se,{content:"Save Changes",className:Du.submitButton,func:()=>{S(),o(!1)}})]})},BV="_Task_prompt_wrapper_hoxzz_1",zV="_Hide_task_prompt_wrapper_hoxzz_1",HV="_nav_hoxzz_41",FV="_content_hoxzz_111",qV="_submitButton_hoxzz_157",Ou={Task_prompt_wrapper:BV,Hide_task_prompt_wrapper:zV,nav:HV,content:FV,submitButton:qV},GV=({showTaskPrompt:s,setShowTaskPrompt:e,writeTask:t,setShowNavbar:r})=>{const o=ce.useRef(null),u=ce.useRef(null),[h,p]=ce.useState(!1);function m(){p(Math.random()*1)}function g(){t(u.current.innerText)}function T(){u.current.innerHTML="<br>",S()}function S(){u.current.innerText==`
`||u.current.innerHTML=="<br>"?o.current.style.display="block":o.current.style.display="none"}return ce.useEffect(()=>{},[h]),A.jsx(A.Fragment,{children:A.jsxs("div",{className:s?Ou.Task_prompt_wrapper:Ou.Hide_task_prompt_wrapper,children:[A.jsxs("div",{className:Ou.nav,children:[A.jsxs("h3",{children:[A.jsx("i",{className:"fa fa-edit"})," ",A.jsx("span",{children:"Task Prompt"})]}),A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-times"}),func:()=>{e(!1),T(),r(!0)}})]}),A.jsxs("div",{className:Ou.content,children:[A.jsx("span",{ref:o,children:"Type Any Task..."}),A.jsx("p",{ref:u,contentEditable:"true",onInput:()=>{m(),S()}})]}),A.jsx(Se,{content:"Submit",className:Ou.submitButton,func:()=>{g(),e(!1),T(),r(!0)}})]})})},WV="_Sort_Wrapper_1nnq2_17",KV="_Hide_Sort_Wrapper_1nnq2_19",QV="_Sort_Box_1nnq2_51",YV="_Hide_Sort_Box_Button_1nnq2_75",$V="_Sort_Options_1nnq2_105",XV="_checked_1nnq2_153",ZV="_unchecked_1nnq2_153",wr={Sort_Wrapper:WV,Hide_Sort_Wrapper:KV,Sort_Box:QV,Hide_Sort_Box_Button:YV,Sort_Options:$V,checked:XV,unchecked:ZV},JV=({setShowSortPrompt:s,showSortPrompt:e,sortOptions:t,setSortOptions:r,setSorting:o,setShowNavbar:u,showSaveChanges:h})=>{function p(m){let g=t;g=g.map((T,S)=>g[S]===g[m]?{...T,state:!T.state}:{...T,state:!1});for(let T in g){if(g[T].state==!0){o(!0);break}T==g.length-1&&!g[T].state&&o(!1)}r([...g])}return A.jsx("div",{className:e?wr.Sort_Wrapper:wr.Hide_Sort_Wrapper,children:A.jsxs("div",{className:e?wr.Sort_Box:wr.Hide_Sort_Box,children:[A.jsx("h2",{children:"Sort Settings"}),A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-close"}),className:wr.Hide_Sort_Box_Button,func:()=>{s(!1),u(!0)}}),A.jsx("div",{className:wr.Sort_Options,children:t.map((m,g)=>A.jsx(Se,{icon:A.jsx("i",{className:`fa fa-check-square ${m.state==!0?wr.checked:wr.unchecked}`}),content:m.description,func:()=>{p(g),u(!1)}},m.description))})]})})},eL="_Changes_Wrapper_26idq_1",tL="_Changes_Box_26idq_27",nL="_Top_26idq_55",iL="_Options_26idq_107",Xh={Changes_Wrapper:eL,Changes_Box:tL,Top:nL,Options:iL},sL=({showSaveChanges:s,setShowSaveChanges:e,setUpdateTask:t,setNumberOfChanges:r,numberOfChanges:o,user:u,paging:h,setPage:p,setShowNavbar:m,setLoading:g})=>{const T=async()=>{var F;let S=JSON.parse(localStorage.getItem("Changes"));S=[...S[o]],S=S.map(J=>({...J,isChecked:!1}));const I=(F=u==null?void 0:u.uid)==null?void 0:F.toString(),V=Fr(qr,`Users/${I}`);g(!0);try{if(await Pg(V,{tasks:S}),r(null),t([...S]),localStorage.removeItem("Changes"),h){let J=window.location.href;J.toLowerCase();let G=J.search("/Acad/");J=J.slice(0,G+6),J=J.concat(h==null?void 0:h.link),window.location.href=J,p(h.page),g(fase)}}catch(J){alert("Error Saving Your Changes"),e(!1),console.log("Error writing task:",J),g(!1)}m(!0)};if(s)return A.jsx("div",{className:Xh.Changes_Wrapper,children:A.jsxs("div",{className:Xh.Changes_Box,children:[A.jsxs("div",{className:Xh.Top,children:[A.jsx("i",{className:"fa fa-warning"}),A.jsx("h3",{children:"Would You Save Your Previous Changes?"})]}),A.jsxs("div",{className:Xh.Options,children:[A.jsx(Se,{content:"No",func:()=>{e(!1),localStorage.removeItem("Changes"),window.location.reload()}}),A.jsx(Se,{content:"Yes",func:()=>{e(!1),T()}})]})]})})},rL="_Hide_Task_Wrapper_1397q_5",aL="_Task_Wrapper_1397q_13",oL="_Tasks_Editor_1397q_33",lL="_Search_wrapper_1397q_103",Uo={Hide_Task_Wrapper:rL,Task_Wrapper:aL,Tasks_Editor:oL,Search_wrapper:lL},uL="_Loading_Wrapper_infip_25",cL="_Loading_Bar_infip_59",JS={Loading_Wrapper:uL,Loading_Bar:cL},hL=({loading:s})=>{if(s)return A.jsxs("div",{className:JS.Loading_Wrapper,children:[A.jsx("div",{className:JS.Loading_Bar}),"Loading..."]})},fL=({page:s,paging:e,setPage:t,setPaging:r,setEditing:o,editing:u,user:h,getTask:p,setShowNavbar:m,setShowSaveChanges:g,showSaveChanges:T,setLoading:S})=>{const I=JSON.parse(localStorage.getItem("Changes")),V=ce.useRef(null),[F,J]=ce.useState(!1),[G,Y]=ce.useState(!1),[ne,X]=ce.useState(!1),[re,fe]=ce.useState(!1),[Ee,M]=ce.useState(!1),[R,C]=ce.useState(!1),[N,k]=ce.useState([]),[P,D]=ce.useState(1),[at,nt]=ce.useState("Pending"),[le,Ae]=ce.useState(p),[ue,z]=ce.useState(I?I.length-1:null),[x,Z]=ce.useState(le.map(K=>({...K,isChecked:!1}))),[ge,de]=ce.useState(null),[pe,oe]=ce.useState({index:null,isOpened:!1}),[ie,Oe]=ce.useState(null),[ye,_e]=ce.useState([{description:"Newest to Oldest",state:!1},{description:"Oldest to Newest",state:!1},{description:"From A-Z",state:!1},{description:"From Z-A",state:!1}]);function Ce(){X(!1)}const Lt=async K=>{var $r;let He=[...le];const Rt=($r=h.uid)==null?void 0:$r.toString(),Ot=Fr(qr,"Users",Rt);let ts="qwertyuiopasdfghjklzxcvbnm",Xn="";for(let gt=0;gt<10;gt++){let xt=Math.floor(Math.random()*ts.length);Xn=Xn.concat(ts[xt])}let nn={id:Xn,task:K,dateCreated:{fullDate:new Date,time:Date.now()},selected:!1,style:"default",cName:[JSON.stringify(Pn.col),JSON.stringify(Pn.br),JSON.stringify(Pn.fs),JSON.stringify(Pn.bgC),JSON.stringify(Pn.fW)],isChecked:!1,type:"pending"};He.unshift(nn);try{await Pg(Ot,{tasks:FP(nn)}),C(!1),Z([...He])}catch(gt){console.log("Error writing task:",gt)}};function bn(K,He,Rt){const Ot=JSON.parse(localStorage.getItem("Changes"))!=null?JSON.parse(localStorage.getItem("Changes")):[];Ot.length==0&&Ot.push(x),Ot.length>=1&&Ot.push(He),localStorage.setItem("Changes",JSON.stringify(Ot)),console.log(JSON.parse(localStorage.getItem("Changes"))),z(Ot.length-1),N.length>=1&&(G&&de([...K]),Z([...He]))}function Wt(){V.current.value==""?Y(!1):(Y(!0),de(le.filter(K=>K.task.toLowerCase().includes(V.current.value.toLowerCase()))),fe(!1))}function Cn(K){k(K==null?[]:[...K])}function $n(K){oe(K)}function xn(){let K=ye;for(let He=0;He<ye.length;He++)if(K[He].state==!0){fe(!0);break}else He==ye.length-1&&ye[He].state==!1&&fe(!1)}const Ii=()=>{let K=le,He=ge;G?(He=He.map(Rt=>({...Rt,isChecked:!1})),Cn(null)):(K=K.map(Rt=>({...Rt,isChecked:!1})),Cn(null)),Z(Rt=>Rt.map(Ot=>({...Ot,isChecked:!1}))),G&&de([...He])};if(ce.useEffect(()=>{console.log(x),Ae([...x]),de([...x.filter(K=>{var He;return K.task.toLowerCase().includes((He=V.current)==null?void 0:He.value.toLowerCase())})])},[x]),ce.useEffect(()=>{p!=null&&p.tasks?Z(p.tasks):Z([])},[p]),ce.useEffect(()=>{const K=JSON.parse(localStorage.getItem("Changes"));(K==null?void 0:K.length)>=2&&(g(!0),m(!1))},[]),ce.useEffect(()=>{console.log(N)},[N]),s==2)return A.jsx(A.Fragment,{children:A.jsxs("div",{className:s==2?Uo.Task_Wrapper:Uo.Hide_Task_Wrapper,id:"Tasks",children:[A.jsx(GV,{showTaskPrompt:R,setShowTaskPrompt:C,writeTask:K=>{Lt(K)},setShowNavbar:K=>m(K)}),A.jsxs("div",{className:Uo.Tasks_Editor,children:[A.jsxs("h2",{className:Uo.Title_wrapper,children:["Tasks",A.jsx("i",{className:"fa fa-bars",onClick:()=>{X(!ne)}}),A.jsx(_V,{type:at,setType:K=>{nt(K)},showDropDown:ne,handleType:K=>{Ce()},unselectAll:K=>{Ii()},setSortOptions:K=>{_e(K)},setSorting:K=>{fe(K)}})]}),A.jsx(kV,{optionTabNumber:P,updateTasks:x,filteredTasks:ge,setShowTaskPrompt:K=>{C(K)},searching:G,setSearching:K=>Y(K),handleSearch:()=>{Wt()},selectedTask:N,handleMarking:(K,He,Rt)=>{bn(K,He)},markAsPending:K=>{markAsPending(K)},unselectAll:()=>Ii(),setBgColor:K=>setBgColor(K),setColor:K=>setColor(K),setShowSortPrompt:K=>{M(K)},numberOfChanges:ue,setNumberOfChanges:K=>z(K),user:h,setUpdateTask:K=>{Z(K)},setShowNavbar:K=>m(K),setLoading:K=>S(K)}),A.jsx("div",{className:Uo.Search_wrapper,children:A.jsxs("div",{children:[A.jsx("label",{htmlFor:"search-bar",children:A.jsx("i",{className:"fa fa-search"})}),A.jsx("input",{ref:V,id:"search-bar",type:"text",placeholder:"Type Task...",onChange:()=>{V.current.value==""&&(xn(),Wt())}}),A.jsx(Se,{content:"Search",className:Uo.Search_button,func:()=>{Wt(),xn()}})]})}),A.jsx(uV,{selectedTask:N,handleSelectedTasks:K=>Cn(K),selectTask:F,setSelectTask:J,unselectAll:()=>{Ii()},tasks:le,setTasks:K=>{Z(K)},filteredTasks:ge,setFilteredTasks:K=>{de(K)},searching:G,setUpdateTasks:K=>Z(K),updateTasks:x,handleMarking:(K,He,Rt)=>{bn(K,He)}}),A.jsx(iV,{selectedTasks:N,setSelectedTasks:()=>k(),selectTask:F,tasks:le,setTasks:K=>{Ae(K)},del:K=>{del(K)},handleSelectedTasks:K=>Cn(K),filteredTask:ge,setFilteredTask:K=>{de(K)},searching:G,handleOpenedTask:K=>{$n(K)},openedTask:pe,setShowTaskPrompt:K=>{C(K)},editing:u,setEditing:K=>{o(K)},setOpenedTask:K=>{oe(K)},type:at,setSorting:K=>{fe(K)},sorting:re,sortOptions:ye}),A.jsx(jV,{openedTask:pe,setOpenedTask:K=>{oe(K)},tasks:le,filteredTasks:ge,saveChanges:(K,He)=>{saveChanges(K,He)},editing:u,searching:G,setEditing:K=>{o(K)},editedValue:ie,user:h,setUpdateTask:K=>{Z(K)},setShowNavbar:K=>{m(K)},setLoading:K=>S(K),handleMarking:(K,He)=>bn(K,He)}),A.jsx(JV,{showSortPrompt:Ee,setShowSortPrompt:K=>{M(K)},sortOptions:ye,setSortOptions:K=>{_e(K)},setSorting:K=>{fe(K)},sorting:re,setShowNavbar:K=>{m(K)}}),A.jsx(sL,{showSaveChanges:T,numberOfChanges:ue,setNumberOfChanges:K=>z(K),user:h,setUpdateTask:K=>{Z(K)},setPaging:K=>{r(K)},paging:e,setPage:K=>{t(K)},setShowSaveChanges:K=>{g(K)},setShowNavbar:K=>{m(K)},setLoading:K=>S(K)})]})]})})},dL="_Continue_As_Wrapper_n7qjc_5",pL="_Continue_As_Box_n7qjc_47",_L="_Top_n7qjc_75",mL="_Options_n7qjc_135",Zh={Continue_As_Wrapper:dL,Continue_As_Box:pL,Top:_L,Options:mL},gL=({continueAs:s,setContinueAs:e,user:t,setUser:r,setLoading:o})=>{const[u,h]=ce.useState(null),p=async()=>{o(!0);try{await j0(wi),r(null),o(!1),e(!1)}catch(g){o(!1),e(!1),console.log(g)}},m=async()=>{if((t==null?void 0:t.uid)!=null)try{const g=Fr(qr,"Users",t==null?void 0:t.uid),T=await Mg(g);T.exists&&h(T.data())}catch(g){console.log(g)}};if(ce.useEffect(()=>{t!=null&&m()},[s,t]),s)return A.jsx("div",{className:Zh.Continue_As_Wrapper,children:A.jsxs("div",{className:Zh.Continue_As_Box,children:[A.jsxs("div",{className:Zh.Top,children:[A.jsx("i",{className:"fa fa-user"}),A.jsx("h3",{children:"Continue As: "}),A.jsxs("h3",{children:[u==null?void 0:u.name," ?"]})]}),A.jsxs("div",{className:Zh.Options,children:[A.jsx(Se,{content:"No",func:()=>{p()}}),A.jsx(Se,{content:"Yes",func:()=>{e(!1)}})]})]})})},yL="_sign_up_container_1bwio_19",vL="_goToStartingPage_1bwio_41",EL="_top_arc_1bwio_65",TL="_form_1bwio_91",SL="_username_con_1bwio_105",AL="_password_con_1bwio_107",wL="_more_actions_1bwio_121",bL="_sign_in_button_1bwio_233",CL="_other_platforms_container_1bwio_265",RL="_icon_wrapper_1bwio_287",IL="_wrapper_1bwio_299",ln={sign_up_container:yL,goToStartingPage:vL,top_arc:EL,form:TL,username_con:SL,password_con:AL,more_actions:wL,sign_in_button:bL,other_platforms_container:CL,icon_wrapper:RL,wrapper:IL};function NL({setPage:s,setUser:e,showSignInPrompt:t,setShowSignInPrompt:r,setShowSignUpPrompt:o,setLoading:u,setContinueAs:h}){const[p,m]=ce.useState(!1),g=ce.useRef(null),T=ce.useRef(null),S=ce.useRef(null),I=ce.useRef(null),V=()=>{const X=S==null?void 0:S.current.value,re=I==null?void 0:I.current.value,fe=g.current,Ee=T.current;return{email:X,pass:re,warning1:fe,warning2:Ee}},F=()=>{const X=V();X.email&&(X.email=""),X.pass&&(X.pass=""),X.warning1.innerText="",X.warning2.innerText=""},J=X=>{const re=V();return(X==null?void 0:X.target.value)==""||re.email==""?g.current.textContent="The input field is blank!":g.current.textContent="",!1},G=X=>{const re=V();return(X==null?void 0:X.target.value)==""||re.pass==""?T.current.textContent="The input field is blank!":T.current.textContent="",!1},Y=async()=>{J(),G();{u(!0);try{await SN(wi,S.current.value,I.current.value),F(),e(wi.currentUser),r(!1),h(!0)}catch(X){X.code=="auth/invalid-email"&&(g.current.textContent="Invalid email/Email doesn't exist."),X.code=="auth/invalid-credential"&&(T.current.textContent="Password does not match.")}u(!1)}},ne=async()=>{var re;const X=new Is;u(!0);try{await GN(wi,X),F(),e(wi.currentUser);const fe=Fr(qr,"Users",(re=wi.currentUser)==null?void 0:re.uid);(await Mg(fe)).exists()?r(!1):o(!0),h(!0)}catch(fe){console.log(fe)}u(!1)};if(t==!0)return A.jsx(A.Fragment,{children:A.jsxs("div",{className:ln.sign_up_container,children:[A.jsx(Se,{func:()=>{r(!1),F(),s(1)},content:"X",className:ln.goToStartingPage}),A.jsx("div",{className:ln.top_arc,children:"SIGN IN"}),A.jsxs("div",{className:ln.form,children:[A.jsxs("div",{className:ln.username_con,children:[A.jsx("h3",{children:"Username :"}),A.jsx("input",{className:"emailInput",ref:S,onInput:X=>{J(X)}}),A.jsx("span",{ref:g})]}),A.jsxs("div",{className:ln.password_con,children:[A.jsx("h3",{children:"Password :"}),A.jsx("input",{type:p?"text":"password",ref:I,onInput:X=>{G(X)},className:ln.Password}),A.jsx("span",{ref:T}),A.jsx("img",{src:p?"./password/visible.png":"./password/unsee.png",className:ln.see_password,onClick:()=>{m(!p)}})]}),A.jsxs("div",{className:ln.more_actions,children:[A.jsx("span",{className:ln.forgot_pass,children:"Forgot Password"}),A.jsx("span",{className:ln.create_acc,onClick:()=>{r(!1),o(!0)},children:"Doesn't Have An Account?"})]}),A.jsx(Se,{className:ln.sign_in_button,func:()=>{Y()},content:"SIGN IN"})]}),A.jsxs("div",{className:ln.other_platforms_container,children:[A.jsxs("div",{className:ln.icon_wrapper,children:[A.jsx("div",{className:ln.wrapper,onClick:()=>{ne()},children:A.jsx("img",{src:"./platforms/GG.png "})}),A.jsx("div",{className:ln.wrapper,children:A.jsx("img",{src:"./platforms/facebook.png"})}),A.jsx("div",{className:ln.wrapper,children:A.jsx("img",{src:"./platforms/Instagram.png"})})]}),A.jsx("h3",{children:"SIGN IN WITH DIFFERENT PLATFORMS"})]})]})})}const DL="_hide_1xp6t_1",OL="_inputs_1_1xp6t_7",Ia={hide:DL,inputs_1:OL},xL=({show:s,indicated:e,showConfirm:t,setShow:r,setShowConfirm:o,passwordInput:u,confirmPasswordInput:h,emailInput:p,passWarning:m,confirmWarning:g,emailWarning:T})=>A.jsxs("div",{className:e==0?Ia.inputs_1:Ia.hide,children:[A.jsxs("div",{className:Ia.email,children:[A.jsx("h4",{children:"Email"}),A.jsx("input",{type:"text",ref:p}),A.jsx("span",{ref:T})]}),A.jsxs("div",{className:Ia.password,children:[A.jsx("h4",{children:"Password"}),A.jsx("input",{type:s?"text":"password",ref:u}),A.jsx("img",{src:s?"./password/visible.png":"./password/unsee.png",className:Ia.see_password,onClick:()=>{r(!s)}}),A.jsx("span",{ref:m})]}),A.jsxs("div",{className:Ia.confirm,children:[A.jsx("h4",{children:"Confirm Password"}),A.jsx("input",{type:t?"text":"password",ref:h}),A.jsx("img",{src:t?"./password/visible.png":"./password/unsee.png",className:Ia.see_confirm,onClick:()=>{o(!t)}}),A.jsx("span",{ref:g})]})]}),kL="_hide_6obhl_1",ML="_inputs_2_6obhl_11",PL="_top_6obhl_31",VL="_notIndicated_6obhl_71",LL="_indicated_6obhl_81",xu={hide:kL,inputs_2:ML,top:PL,notIndicated:VL,indicated:LL},UL=({indicated:s,usingAsInput:e,usageOptions:t,handleUsageOptions:r})=>A.jsxs("div",{className:s==1?xu.inputs_2:xu.hide,children:[A.jsx("h3",{children:"Why am I using the To-Do List Web App?"}),A.jsx("div",{children:A.jsxs("div",{className:xu.top,children:[t.map((o,u)=>A.jsx(Se,{content:o.content,className:o.isIndicated?xu.indicated:xu.notIndicated,func:()=>{r(u)}},o.content)),A.jsx("input",{type:"text",placeholder:"Other reason...",ref:e})]})})]}),jL="_hide_1650p_1",BL="_inputs_3_1650p_9",ku={hide:jL,inputs_3:BL},zL=({indicated:s,nickNameInput:e,schoolInput:t,grSecInput:r,nameWarning:o,schoolWarning:u,grSecWarning:h})=>A.jsxs("div",{className:s==2?ku.inputs_3:ku.hide,children:[A.jsxs("div",{className:ku.username,children:[A.jsx("h4",{children:"Name"}),A.jsx("input",{type:"text",ref:e}),A.jsx("span",{ref:o})]}),A.jsxs("div",{className:ku.password,children:[A.jsx("h4",{children:"School"}),A.jsx("input",{type:"text",ref:t}),A.jsx("span",{ref:u})]}),A.jsxs("div",{className:ku.confirm,children:[A.jsx("h4",{children:"Grade & Section"}),A.jsx("input",{type:"text",ref:r}),A.jsx("span",{ref:h})]})]}),HL="_hide_j48mp_15",FL="_inputs_4_j48mp_23",qL="_wrapper_j48mp_85",GL="_IndicatedButt_j48mp_125",WL="_notIndicatedButt_j48mp_145",jo={hide:HL,inputs_4:FL,wrapper:qL,IndicatedButt:GL,notIndicatedButt:WL},KL=({indicated:s,subjects:e,handleSubjects:t})=>{if(e!=null)return A.jsx("div",{className:s==3?jo.inputs_4:jo.hide,children:A.jsxs("div",{className:jo.wrapper,children:[A.jsx("h4",{children:"What is your favorite subject?"}),A.jsx("div",{className:jo.buttons,children:e.map((r,o)=>A.jsx(Se,{func:()=>{t(o)},className:r.testClass==!0?jo.IndicatedButt:jo.notIndicatedButt,content:e[o].content},r+o.toString()))})]})})},QL="_sign_up_wrapper_6gch2_23",YL="_form_1_6gch2_53",$L="_to_bottom_6gch2_75",XL="_bottom_6gch2_113",ZL="_buttons_6gch2_125",JL="_indicator_6gch2_169",eU="_indicated_6gch2_197",tU="_not_indicated_6gch2_205",nU="_goToStartingPage_6gch2_259",yn={sign_up_wrapper:QL,form_1:YL,to_bottom:$L,bottom:XL,buttons:ZL,indicator:JL,indicated:eU,not_indicated:tU,goToStartingPage:nU},iU=({setShowSignInPrompt:s,showSignUpPrompt:e,setShowSignUpPrompt:t,setLoading:r,setContinueAs:o,setUser:u,setPage:h})=>{ce.useRef(null),ce.useRef(null);const p=ce.useRef(null),m=ce.useRef(null),g=ce.useRef(null),T=ce.useRef(null),S=ce.useRef(null),I=ce.useRef(null),V=ce.useRef(null),F=ce.useRef(null),J=ce.useRef(null),G=ce.useRef(null),Y=ce.useRef(null),ne=ce.useRef(null),X=ce.useRef(null),[re,fe]=ce.useState(!1),[Ee,M]=ce.useState(!1),[R,C]=ce.useState(0),[N,k]=ce.useState([]),[P,D]=ce.useState([]),[at,nt]=ce.useState([{content:"For Studies",isIndicated:!1},{content:"For Teaching Purposes",isIndicated:!1},{content:"For My Job",isIndicated:!1},{content:"Just for Fun",isIndicated:!1}]),[le,Ae]=ce.useState([{content:"TLE",testClass:!1},{content:"Mathematics",testClass:!1},{content:"Science",testClass:!1},{content:"English",testClass:!1},{content:"Colloquium",testClass:!1},{content:"Filipino",testClass:!1},{content:"Mapeh",testClass:!1},{content:"AP",testClass:!1},{content:"ESP",testClass:!1}]),ue=()=>{var K,He,Rt,Ot,ts,Xn;const oe=(K=g.current)==null?void 0:K.value,ie=(He=p.current)==null?void 0:He.value,Oe=(Rt=S.current)==null?void 0:Rt.value,ye=(Ot=V.current)==null?void 0:Ot.value,_e=(ts=J.current)==null?void 0:ts.value,Ce=(Xn=Y.current)==null?void 0:Xn.value,Lt=T.current,bn=m.current,Wt=I.current,Cn=F.current,$n=G.current,xn=ne.current;return[[oe,ie,Oe,ye,_e,Ce],[Lt,bn,Wt,Cn,$n,xn]]},z=async oe=>{const ie=ue();let Oe;if(R==0){if(Oe=x(ie[0],ie[1],R),!Oe){r(!0);try{await TN(wi,ie[0][0],ie[0][1]),u(wi.currentUser),await ZS(Fr(qr,"Users",user.uid),{email:ie[0][0]})}catch(ye){console.log(ye),ye.code=="auth/email-already-in-use"&&(arr2[i].innerText="Email is already taken.")}r(!1),C(R+1)}}else R==1||R==2?Oe=x(ie[0],ie[1],R):R==3&&oe=="Submit"&&de(ie[0]);oe=="next"&&R!=3&&!Oe?C(R+1):oe=="back"&&R!=1&&C(R-1)},x=(oe,ie,Oe)=>{let ye=!1;for(let _e in oe)Oe==0&&_e<3?(oe[_e]==""&&(ie[_e].innerText="The input field is blank.",ye=!0),_e==0?oe[_e].includes("@gmail.com")||oe[_e].includes("@email.com")?ie[_e].innerText="":(ie[_e].innerText="This is not an email!",ye=!0):_e==1?oe[_e].length<=7?(ie[_e].innerText="The password is too short(maximum of 8 characters).",ye=!0):ie[_e].innerText="":_e==2&&(oe[_e]!=oe[_e-1]?(ie[_e].innerText="The password isn't match.",ye=!0):ie[_e].innerText="")):Oe==2&&_e>2&&(oe[_e]==""?(ie[_e].innerText="The input field is blank.",ye=!0):(ie[_e].innerText="",ye=!1));return!!ye},Z=oe=>{let ie=at;for(let Oe in ie)if(Oe==oe){ie=ie[oe].content;break}k(ie),nt(Oe=>Oe.map((ye,_e)=>oe==_e?{...ye,isIndicated:!0}:{...ye,isIndicated:!1}))},ge=oe=>{let ie=le,Oe=[];ie=ie.map((ye,_e)=>oe==_e?{...ye,testClass:ye.testClass!=!0}:{...ye});for(let ye in ie)ie[ye].testClass==!0&&Oe.push(ie[ye]);D([...Oe]),Ae(ye=>ye.map((_e,Ce)=>oe==Ce?{..._e,testClass:_e.testClass!=!0}:{..._e}))},de=async oe=>{r(!0);try{const ie=wi.currentUser;await ZS(Fr(qr,"Users",ie.uid),{school:oe[4],name:oe[3],grSec:oe[5],favSubjects:P,usingAs:X==null?void 0:X.current.value,purpose:N}),t(!1),pe(),o(!0)}catch(ie){console.log(ie.message)}r(!1)};function pe(){p.current.value="",m.current.value="",g.current.value="",T.current.value="",S.current.value="",I.current.value="",V.current.value="",F.current.value="",J.current.value="",G.current.value="",Y.current.value="",ne.current.value="",X.current.value="",Ae(oe=>oe.map(ie=>({...ie,testClass:!1}))),nt(oe=>oe.map(ie=>({...ie,isIndicated:!1}))),k(null),D([]),C(0)}if(e==!0)return A.jsx(A.Fragment,{children:A.jsxs("div",{className:yn.sign_up_wrapper,children:[A.jsx(Se,{func:()=>{t(!1),pe(),h(1)},content:"X",className:yn.goToStartingPage}),A.jsxs("form",{onSubmit:oe=>{oe.preventDefault()},className:yn.form_1,children:[A.jsx("header",{children:"SIGN UP"}),A.jsxs("div",{className:yn.to_bottom,children:[A.jsx(xL,{indicated:R,show:re,showConfirm:Ee,setShowConfirm:oe=>{M(oe)},setShow:oe=>{fe(oe)},passwordInput:p,confirmPasswordInput:S,emailInput:g,passWarning:m,confirmWarning:I,emailWarning:T}),A.jsx(UL,{indicated:R,usageOptions:at,setUsageOptions:oe=>{nt(oe)},handleUsageOptions:oe=>{Z(oe)},usingAsInput:X}),A.jsx(zL,{indicated:R,schoolInput:J,schoolWarning:G,grSecInput:Y,grSecWarning:ne,nickNameInput:V,nameWarning:F}),A.jsx(KL,{indicated:R,subjects:le,handleSubjects:oe=>{ge(oe)}}),A.jsxs("div",{className:yn.bottom,children:[A.jsxs("div",{className:yn.buttons,children:[A.jsx(Se,{content:"BACK",func:()=>{z("back")}}),A.jsx(Se,{content:R==3||R==0?"SUBMIT":"NEXT",func:()=>{R==3||R==0?z("Submit"):z("next")}})]}),A.jsxs("div",{className:yn.indicator,children:[A.jsx("div",{className:R==0?yn.indicated:yn.not_indicated}),A.jsx("div",{className:R==1?yn.indicated:yn.not_indicated}),A.jsx("div",{className:R==2?yn.indicated:yn.not_indicated}),A.jsx("div",{className:R==3?yn.indicated:yn.not_indicated})]}),A.jsxs("h4",{id:yn.SignUp,onClick:()=>{s(!0),t(!1),pe()},children:[" ",A.jsx("a",{children:"Already Have an Account?"})," "]})]})]})]})]})})},sU="_Signing_Out_Wrapper_dvflz_5",rU="_Hide_Signing_Out_Wrapper_dvflz_5",aU="_Signing_Out_Box_dvflz_47",oU="_Top_dvflz_75",lU="_Options_dvflz_137",Mu={Signing_Out_Wrapper:sU,Hide_Signing_Out_Wrapper:rU,Signing_Out_Box:aU,Top:oU,Options:lU},uU=({isSigningOut:s,setIsSigningOut:e,setLoading:t,setUser:r})=>{const o=async()=>{t(!0);try{await j0(wi),r(null),t(!1),e(!1)}catch(u){t(!1),e(!1),console.log(u)}};if(s)return A.jsx("div",{className:s?Mu.Signing_Out_Wrapper:Mu.Hide_Signing_Out_Wrapper,children:A.jsxs("div",{className:Mu.Signing_Out_Box,children:[A.jsxs("div",{className:Mu.Top,children:[A.jsx("i",{className:"fa fa-user"}),A.jsx("h3",{children:"Would You Like To Sign Out?"})]}),A.jsxs("div",{className:Mu.Options,children:[A.jsx(Se,{content:"No",func:()=>{e(!1)}}),A.jsx(Se,{content:"Yes",func:()=>{o()}})]})]})})},cU="_Make_User_Sign_In_Wrapper_10wex_1",hU="_Hide_Make_User_Sign_In_Wrapper_10wex_1",fU="_Make_User_Sign_In_Box_10wex_43",dU="_Images_10wex_93",pU="_Buttons_10wex_161",_U="_Hide_Prompt_Button_10wex_205",Bo={Make_User_Sign_In_Wrapper:cU,Hide_Make_User_Sign_In_Wrapper:hU,Make_User_Sign_In_Box:fU,Images:dU,Buttons:pU,Hide_Prompt_Button:_U},mU=({showMakeUserSignIn:s,setShowMakeUserSignIn:e,setPage:t,setShowSignInPrompt:r,setShowSignUpPrompt:o})=>{function u(){e(!1),t(1);let h=window.location.href;h.toLowerCase();let p=h.search("/Acad/");h=h.slice(0,p+6).concat("#Home"),window.location.href=h}return A.jsx(A.Fragment,{children:A.jsx("div",{className:s?Bo.Make_User_Sign_In_Wrapper:Bo.Hide_Make_User_Sign_In_Wrapper,children:A.jsxs("div",{className:Bo.Make_User_Sign_In_Box,children:[A.jsx(Se,{icon:A.jsx("i",{className:"fa fa-close"}),className:Bo.Hide_Prompt_Button,func:()=>{u()}}),A.jsxs("div",{className:Bo.Images,children:[A.jsx("img",{src:"./cat.png"}),A.jsx("img",{src:"./!.png"})]}),A.jsx("h1",{children:"You're not Signed In !"}),A.jsx("p",{children:"Create an account, log in and get free access to the advanced To-Do List Web Application"}),A.jsxs("div",{className:Bo.Buttons,children:[A.jsx(Se,{content:"Sign Up",func:()=>{o(!0),e(!1)}}),A.jsx(Se,{content:"Sign In",func:()=>{r(!0),e(!1)}})]})]})})})},gU="_Pages_1x53v_25",yU="_Hide_Pages_1x53v_31",e0={Pages:gU,Hide_Pages:yU};function vU(){const[s,e]=ce.useState(!0),[t,r]=ce.useState(!1),[o,u]=ce.useState(window.location.href),[h,p]=ce.useState(!1),[m,g]=ce.useState(!1),[T,S]=ce.useState(!1),[I,V]=ce.useState(!1),[F,J]=ce.useState(!1),[G,Y]=ce.useState(!1),[ne,X]=ce.useState(!1),[re,fe]=ce.useState(!1),[Ee,M]=ce.useState(1),[R,C]=ce.useState(0),[N,k]=ce.useState(JSON.parse(localStorage.getItem("Users"))!=null?JSON.parse(localStorage.getItem("Users")):[]),[P,D]=ce.useState(null),[at,nt]=ce.useState(null),[le,Ae]=ce.useState([]),ue=async()=>{if(P){const z=Fr(qr,"Users",P==null?void 0:P.uid);try{const x=await Mg(z);x.exists&&Ae(x.data())}catch(x){console.log(x)}}else Ae(null),fe(!0)};return bN(wi,z=>{(z==null?void 0:z.uid)!=null?D(z):Ae(null)}),ce.useEffect(()=>{ue()},[P]),ce.useEffect(()=>{o.includes("#Home")?M(1):o.includes("#Tasks")?P?M(2):fe(!0):o.includes("#About")?M(3):o.includes("#Contacts")&&M(4)},[]),ce.useEffect(()=>{let z=window.location.href;z.toLowerCase();let x=z.search("/Acad/");switch(z=z.slice(0,x+6),Ee){case 1:z=z.concat("#Home"),u(z),C(0);break;case 2:P?(z=z.concat("#Tasks"),u(z),C(1)):fe(!0);break;case 3:z=z.concat("#About"),u(z),C(2);break;case 4:z=z.concat("#Contacts"),u(z),C(3);break}},[Ee]),A.jsx(A.Fragment,{children:A.jsxs("div",{children:[A.jsx(GP,{setPage:z=>{M(z)},page:Ee,setIndicated:z=>{C(z)},indicated:R,editing:t,url:o,setUrl:z=>{u(z)},showSignInPrompt:h,setShowSignInPrompt:z=>{p(z)},showSignUpPrompt:m,setShowSignUpPrompt:z=>{g(z)},user:P,continueAs:I,setIsSigningOut:z=>{Y(z)},setPaging:z=>{nt(z)},showNavBar:s,setShowNavbar:z=>{e(z)},setShowSaveChanges:z=>{X(z)},setShowMakeUserSignIn:z=>fe(z)}),A.jsxs("div",{className:!h&&!m?e0.Pages:e0.Hide_Pages,children:[A.jsx(WP,{page:Ee,setPage:z=>{M(z)},setIndicated:z=>{C(z)},indicated:R,user:P}),A.jsx(fL,{setPage:z=>M(z),page:Ee,getTask:le,editing:t,setEditing:z=>{r(z)},user:P,setUser:z=>{D(z)},loading:T,setLoading:z=>S(z),paging:at,setPaging:z=>{nt(z)},showNavBar:s,setShowNavbar:z=>{e(z)},showSaveChanges:ne,setShowSaveChanges:z=>X(z)})]}),A.jsx(NL,{page:Ee,setPage:z=>M(z),showSignInPrompt:h,setShowSignUpPrompt:z=>{g(z)},setShowSignInPrompt:z=>{p(z)},user:P,setUser:z=>{D(z)},setLoading:z=>S(z),setContinueAs:z=>V(z),loading:T}),A.jsx(iU,{page:Ee,setPage:z=>M(z),showSignUpPrompt:m,setShowSignInPrompt:z=>{p(z)},setShowSignUpPrompt:z=>{g(z)},user:P,setUser:z=>{D(z)},setLoading:z=>S(z),setContinueAs:z=>V(z),loading:T}),A.jsx(hL,{loading:T}),A.jsx(gL,{continueAs:I,setContinueAs:z=>{V(z)},user:P,setUser:z=>D(z),setLoading:z=>S(z)}),A.jsx(uU,{isSigningOut:G,setIsSigningOut:z=>{Y(z)},setLoading:z=>{S(z)},setUser:z=>{D(z)}}),A.jsx(mU,{showMakeUserSignIn:re,setShowMakeUserSignIn:z=>fe(z),setPage:z=>M(z),setShowSignUpPrompt:z=>{g(z)},setShowSignInPrompt:z=>{p(z)}})]})})}pR.createRoot(document.getElementById("root")).render(A.jsx(ce.StrictMode,{children:A.jsx(vU,{})}));
