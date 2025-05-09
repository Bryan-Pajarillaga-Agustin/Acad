(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var u_={exports:{}},Su={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE;function nR(){if(kE)return Su;kE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:i,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Su.Fragment=e,Su.jsx=t,Su.jsxs=t,Su}var ME;function iR(){return ME||(ME=1,u_.exports=nR()),u_.exports}var S=iR(),c_={exports:{}},Me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PE;function sR(){if(PE)return Me;PE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function C(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,X={};function F(O,$,ie){this.props=O,this.context=$,this.refs=X,this.updater=ie||V}F.prototype.isReactComponent={},F.prototype.setState=function(O,$){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,$,"setState")},F.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Y(){}Y.prototype=F.prototype;function ee(O,$,ie){this.props=O,this.context=$,this.refs=X,this.updater=ie||V}var ue=ee.prototype=new Y;ue.constructor=ee,H(ue,F.prototype),ue.isPureReactComponent=!0;var re=Array.isArray,de={H:null,A:null,T:null,S:null},ye=Object.prototype.hasOwnProperty;function x(O,$,ie,ne,he,Ee){return ie=Ee.ref,{$$typeof:i,type:O,key:$,ref:ie!==void 0?ie:null,props:Ee}}function I(O,$){return x(O.type,$,void 0,void 0,void 0,O.props)}function b(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function R(O){var $={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ie){return $[ie]})}var k=/\/+/g;function M(O,$){return typeof O=="object"&&O!==null&&O.key!=null?R(""+O.key):$.toString(36)}function N(){}function tt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function($){O.status==="pending"&&(O.status="fulfilled",O.value=$)},function($){O.status==="pending"&&(O.status="rejected",O.reason=$)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function nt(O,$,ie,ne,he){var Ee=typeof O;(Ee==="undefined"||Ee==="boolean")&&(O=null);var pe=!1;if(O===null)pe=!0;else switch(Ee){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(O.$$typeof){case i:case e:pe=!0;break;case E:return pe=O._init,nt(pe(O._payload),$,ie,ne,he)}}if(pe)return he=he(O),pe=ne===""?"."+M(O,0):ne,re(he)?(ie="",pe!=null&&(ie=pe.replace(k,"$&/")+"/"),nt(he,$,ie,"",function(Oe){return Oe})):he!=null&&(b(he)&&(he=I(he,ie+(he.key==null||O&&O.key===he.key?"":(""+he.key).replace(k,"$&/")+"/")+pe)),$.push(he)),1;pe=0;var et=ne===""?".":ne+":";if(re(O))for(var Ne=0;Ne<O.length;Ne++)ne=O[Ne],Ee=et+M(ne,Ne),pe+=nt(ne,$,ie,Ee,he);else if(Ne=C(O),typeof Ne=="function")for(O=Ne.call(O),Ne=0;!(ne=O.next()).done;)ne=ne.value,Ee=et+M(ne,Ne++),pe+=nt(ne,$,ie,Ee,he);else if(Ee==="object"){if(typeof O.then=="function")return nt(tt(O),$,ie,ne,he);throw $=String(O),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return pe}function ae(O,$,ie){if(O==null)return O;var ne=[],he=0;return nt(O,ne,"","",function(Ee){return $.call(ie,Ee,he++)}),ne}function ve(O){if(O._status===-1){var $=O._result;$=$(),$.then(function(ie){(O._status===0||O._status===-1)&&(O._status=1,O._result=ie)},function(ie){(O._status===0||O._status===-1)&&(O._status=2,O._result=ie)}),O._status===-1&&(O._status=0,O._result=$)}if(O._status===1)return O._result.default;throw O._result}var oe=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function z(){}return Me.Children={map:ae,forEach:function(O,$,ie){ae(O,function(){$.apply(this,arguments)},ie)},count:function(O){var $=0;return ae(O,function(){$++}),$},toArray:function(O){return ae(O,function($){return $})||[]},only:function(O){if(!b(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Me.Component=F,Me.Fragment=t,Me.Profiler=a,Me.PureComponent=ee,Me.StrictMode=s,Me.Suspense=_,Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=de,Me.act=function(){throw Error("act(...) is not supported in production builds of React.")},Me.cache=function(O){return function(){return O.apply(null,arguments)}},Me.cloneElement=function(O,$,ie){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ne=H({},O.props),he=O.key,Ee=void 0;if($!=null)for(pe in $.ref!==void 0&&(Ee=void 0),$.key!==void 0&&(he=""+$.key),$)!ye.call($,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&$.ref===void 0||(ne[pe]=$[pe]);var pe=arguments.length-2;if(pe===1)ne.children=ie;else if(1<pe){for(var et=Array(pe),Ne=0;Ne<pe;Ne++)et[Ne]=arguments[Ne+2];ne.children=et}return x(O.type,he,void 0,void 0,Ee,ne)},Me.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},Me.createElement=function(O,$,ie){var ne,he={},Ee=null;if($!=null)for(ne in $.key!==void 0&&(Ee=""+$.key),$)ye.call($,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(he[ne]=$[ne]);var pe=arguments.length-2;if(pe===1)he.children=ie;else if(1<pe){for(var et=Array(pe),Ne=0;Ne<pe;Ne++)et[Ne]=arguments[Ne+2];he.children=et}if(O&&O.defaultProps)for(ne in pe=O.defaultProps,pe)he[ne]===void 0&&(he[ne]=pe[ne]);return x(O,Ee,void 0,void 0,null,he)},Me.createRef=function(){return{current:null}},Me.forwardRef=function(O){return{$$typeof:d,render:O}},Me.isValidElement=b,Me.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:ve}},Me.memo=function(O,$){return{$$typeof:m,type:O,compare:$===void 0?null:$}},Me.startTransition=function(O){var $=de.T,ie={};de.T=ie;try{var ne=O(),he=de.S;he!==null&&he(ie,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(z,oe)}catch(Ee){oe(Ee)}finally{de.T=$}},Me.unstable_useCacheRefresh=function(){return de.H.useCacheRefresh()},Me.use=function(O){return de.H.use(O)},Me.useActionState=function(O,$,ie){return de.H.useActionState(O,$,ie)},Me.useCallback=function(O,$){return de.H.useCallback(O,$)},Me.useContext=function(O){return de.H.useContext(O)},Me.useDebugValue=function(){},Me.useDeferredValue=function(O,$){return de.H.useDeferredValue(O,$)},Me.useEffect=function(O,$){return de.H.useEffect(O,$)},Me.useId=function(){return de.H.useId()},Me.useImperativeHandle=function(O,$,ie){return de.H.useImperativeHandle(O,$,ie)},Me.useInsertionEffect=function(O,$){return de.H.useInsertionEffect(O,$)},Me.useLayoutEffect=function(O,$){return de.H.useLayoutEffect(O,$)},Me.useMemo=function(O,$){return de.H.useMemo(O,$)},Me.useOptimistic=function(O,$){return de.H.useOptimistic(O,$)},Me.useReducer=function(O,$,ie){return de.H.useReducer(O,$,ie)},Me.useRef=function(O){return de.H.useRef(O)},Me.useState=function(O){return de.H.useState(O)},Me.useSyncExternalStore=function(O,$,ie){return de.H.useSyncExternalStore(O,$,ie)},Me.useTransition=function(){return de.H.useTransition()},Me.version="19.0.0",Me}var VE;function gm(){return VE||(VE=1,c_.exports=sR()),c_.exports}var le=gm(),h_={exports:{}},Au={},f_={exports:{}},d_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LE;function rR(){return LE||(LE=1,function(i){function e(ae,ve){var oe=ae.length;ae.push(ve);e:for(;0<oe;){var z=oe-1>>>1,O=ae[z];if(0<a(O,ve))ae[z]=ve,ae[oe]=O,oe=z;else break e}}function t(ae){return ae.length===0?null:ae[0]}function s(ae){if(ae.length===0)return null;var ve=ae[0],oe=ae.pop();if(oe!==ve){ae[0]=oe;e:for(var z=0,O=ae.length,$=O>>>1;z<$;){var ie=2*(z+1)-1,ne=ae[ie],he=ie+1,Ee=ae[he];if(0>a(ne,oe))he<O&&0>a(Ee,ne)?(ae[z]=Ee,ae[he]=oe,z=he):(ae[z]=ne,ae[ie]=oe,z=ie);else if(he<O&&0>a(Ee,oe))ae[z]=Ee,ae[he]=oe,z=he;else break e}}return ve}function a(ae,ve){var oe=ae.sortIndex-ve.sortIndex;return oe!==0?oe:ae.id-ve.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var _=[],m=[],E=1,T=null,C=3,V=!1,H=!1,X=!1,F=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function ue(ae){for(var ve=t(m);ve!==null;){if(ve.callback===null)s(m);else if(ve.startTime<=ae)s(m),ve.sortIndex=ve.expirationTime,e(_,ve);else break;ve=t(m)}}function re(ae){if(X=!1,ue(ae),!H)if(t(_)!==null)H=!0,tt();else{var ve=t(m);ve!==null&&nt(re,ve.startTime-ae)}}var de=!1,ye=-1,x=5,I=-1;function b(){return!(i.unstable_now()-I<x)}function R(){if(de){var ae=i.unstable_now();I=ae;var ve=!0;try{e:{H=!1,X&&(X=!1,Y(ye),ye=-1),V=!0;var oe=C;try{t:{for(ue(ae),T=t(_);T!==null&&!(T.expirationTime>ae&&b());){var z=T.callback;if(typeof z=="function"){T.callback=null,C=T.priorityLevel;var O=z(T.expirationTime<=ae);if(ae=i.unstable_now(),typeof O=="function"){T.callback=O,ue(ae),ve=!0;break t}T===t(_)&&s(_),ue(ae)}else s(_);T=t(_)}if(T!==null)ve=!0;else{var $=t(m);$!==null&&nt(re,$.startTime-ae),ve=!1}}break e}finally{T=null,C=oe,V=!1}ve=void 0}}finally{ve?k():de=!1}}}var k;if(typeof ee=="function")k=function(){ee(R)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,N=M.port2;M.port1.onmessage=R,k=function(){N.postMessage(null)}}else k=function(){F(R,0)};function tt(){de||(de=!0,k())}function nt(ae,ve){ye=F(function(){ae(i.unstable_now())},ve)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(ae){ae.callback=null},i.unstable_continueExecution=function(){H||V||(H=!0,tt())},i.unstable_forceFrameRate=function(ae){0>ae||125<ae?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<ae?Math.floor(1e3/ae):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return t(_)},i.unstable_next=function(ae){switch(C){case 1:case 2:case 3:var ve=3;break;default:ve=C}var oe=C;C=ve;try{return ae()}finally{C=oe}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(ae,ve){switch(ae){case 1:case 2:case 3:case 4:case 5:break;default:ae=3}var oe=C;C=ae;try{return ve()}finally{C=oe}},i.unstable_scheduleCallback=function(ae,ve,oe){var z=i.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?z+oe:z):oe=z,ae){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=oe+O,ae={id:E++,callback:ve,priorityLevel:ae,startTime:oe,expirationTime:O,sortIndex:-1},oe>z?(ae.sortIndex=oe,e(m,ae),t(_)===null&&ae===t(m)&&(X?(Y(ye),ye=-1):X=!0,nt(re,oe-z))):(ae.sortIndex=O,e(_,ae),H||V||(H=!0,tt())),ae},i.unstable_shouldYield=b,i.unstable_wrapCallback=function(ae){var ve=C;return function(){var oe=C;C=ve;try{return ae.apply(this,arguments)}finally{C=oe}}}}(d_)),d_}var UE;function aR(){return UE||(UE=1,f_.exports=rR()),f_.exports}var p_={exports:{}},_n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jE;function oR(){if(jE)return _n;jE=1;var i=gm();function e(_){var m="https://react.dev/errors/"+_;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)m+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+_+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(_,m,E){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:_,containerInfo:m,implementation:E}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(_,m){if(_==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return _n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,_n.createPortal=function(_,m){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return l(_,m,null,E)},_n.flushSync=function(_){var m=c.T,E=s.p;try{if(c.T=null,s.p=2,_)return _()}finally{c.T=m,s.p=E,s.d.f()}},_n.preconnect=function(_,m){typeof _=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(_,m))},_n.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},_n.preinit=function(_,m){if(typeof _=="string"&&m&&typeof m.as=="string"){var E=m.as,T=d(E,m.crossOrigin),C=typeof m.integrity=="string"?m.integrity:void 0,V=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;E==="style"?s.d.S(_,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:T,integrity:C,fetchPriority:V}):E==="script"&&s.d.X(_,{crossOrigin:T,integrity:C,fetchPriority:V,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},_n.preinitModule=function(_,m){if(typeof _=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var E=d(m.as,m.crossOrigin);s.d.M(_,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(_)},_n.preload=function(_,m){if(typeof _=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var E=m.as,T=d(E,m.crossOrigin);s.d.L(_,E,{crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},_n.preloadModule=function(_,m){if(typeof _=="string")if(m){var E=d(m.as,m.crossOrigin);s.d.m(_,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(_)},_n.requestFormReset=function(_){s.d.r(_)},_n.unstable_batchedUpdates=function(_,m){return _(m)},_n.useFormState=function(_,m,E){return c.H.useFormState(_,m,E)},_n.useFormStatus=function(){return c.H.useHostTransitionStatus()},_n.version="19.0.0",_n}var BE;function lR(){if(BE)return p_.exports;BE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),p_.exports=oR(),p_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zE;function uR(){if(zE)return Au;zE=1;var i=aR(),e=gm(),t=lR();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var l=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),V=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),re=Symbol.for("react.memo_cache_sentinel"),de=Symbol.iterator;function ye(n){return n===null||typeof n!="object"?null:(n=de&&n[de]||n["@@iterator"],typeof n=="function"?n:null)}var x=Symbol.for("react.client.reference");function I(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===x?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case _:return"Fragment";case d:return"Portal";case E:return"Profiler";case m:return"StrictMode";case X:return"Suspense";case F:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Provider";case C:return(n._context.displayName||"Context")+".Consumer";case H:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return r=n.displayName||null,r!==null?r:I(n.type)||"Memo";case ee:r=n._payload,n=n._init;try{return I(n(r))}catch{}}return null}var b=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=Object.assign,k,M;function N(n){if(k===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);k=r&&r[1]||"",M=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+k+n+M}var tt=!1;function nt(n,r){if(!n||tt)return"";tt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(W){var q=W}Reflect.construct(n,[],te)}else{try{te.call()}catch(W){q=W}n.call(te.prototype)}}else{try{throw Error()}catch(W){q=W}(te=n())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(W){if(W&&q&&typeof W.stack=="string")return[W.stack,q.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),v=p[0],A=p[1];if(v&&A){var D=v.split(`
`),L=A.split(`
`);for(f=u=0;u<D.length&&!D[u].includes("DetermineComponentFrameRoot");)u++;for(;f<L.length&&!L[f].includes("DetermineComponentFrameRoot");)f++;if(u===D.length||f===L.length)for(u=D.length-1,f=L.length-1;1<=u&&0<=f&&D[u]!==L[f];)f--;for(;1<=u&&0<=f;u--,f--)if(D[u]!==L[f]){if(u!==1||f!==1)do if(u--,f--,0>f||D[u]!==L[f]){var Q=`
`+D[u].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=u&&0<=f);break}}}finally{tt=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?N(o):""}function ae(n){switch(n.tag){case 26:case 27:case 5:return N(n.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 15:return n=nt(n.type,!1),n;case 11:return n=nt(n.type.render,!1),n;case 1:return n=nt(n.type,!0),n;default:return""}}function ve(n){try{var r="";do r+=ae(n),n=n.return;while(n);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function oe(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function z(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function O(n){if(oe(n)!==n)throw Error(s(188))}function $(n){var r=n.alternate;if(!r){if(r=oe(n),r===null)throw Error(s(188));return r!==n?null:n}for(var o=n,u=r;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return O(f),n;if(p===u)return O(f),r;p=p.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=p;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,u=p;break}if(A===u){v=!0,u=f,o=p;break}A=A.sibling}if(!v){for(A=p.child;A;){if(A===o){v=!0,o=p,u=f;break}if(A===u){v=!0,u=p,o=f;break}A=A.sibling}if(!v)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?n:r}function ie(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=ie(n),r!==null)return r;n=n.sibling}return null}var ne=Array.isArray,he=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ee={pending:!1,data:null,method:null,action:null},pe=[],et=-1;function Ne(n){return{current:n}}function Oe(n){0>et||(n.current=pe[et],pe[et]=null,et--)}function Re(n,r){et++,pe[et]=n.current,n.current=r}var Zt=Ne(null),Mn=Ne(null),fn=Ne(null),Pn=Ne(null);function Ai(n,r){switch(Re(fn,r),Re(Mn,n),Re(Zt,null),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)&&(r=r.namespaceURI)?lE(r):0;break;default:if(n=n===8?r.parentNode:r,r=n.tagName,n=n.namespaceURI)n=lE(n),r=uE(n,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}Oe(Zt),Re(Zt,r)}function Qn(){Oe(Zt),Oe(Mn),Oe(fn)}function Xi(n){n.memoizedState!==null&&Re(Pn,n);var r=Zt.current,o=uE(r,n.type);r!==o&&(Re(Mn,n),Re(Zt,o))}function K(n){Mn.current===n&&(Oe(Zt),Oe(Mn)),Pn.current===n&&(Oe(Pn),gu._currentValue=Ee)}var $e=Object.prototype.hasOwnProperty,Ht=i.unstable_scheduleCallback,Jt=i.unstable_cancelCallback,qa=i.unstable_shouldYield,Zi=i.unstable_requestPaint,en=i.unstable_now,qr=i.unstable_getCurrentPriorityLevel,mt=i.unstable_ImmediatePriority,Nt=i.unstable_UserBlockingPriority,Ji=i.unstable_NormalPriority,Sc=i.unstable_LowPriority,vl=i.unstable_IdlePriority,fd=i.log,Gr=i.unstable_setDisableYieldValue,Ls=null,dn=null;function El(n){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Ls,n,void 0,(n.current.flags&128)===128)}catch{}}function wi(n){if(typeof fd=="function"&&Gr(n),dn&&typeof dn.setStrictMode=="function")try{dn.setStrictMode(Ls,n)}catch{}}var wn=Math.clz32?Math.clz32:wc,Tl=Math.log,Ac=Math.LN2;function wc(n){return n>>>=0,n===0?32:31-(Tl(n)/Ac|0)|0}var bi=128,Us=4194304;function di(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Yn(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,f=n.suspendedLanes,p=n.pingedLanes,v=n.warmLanes;n=n.finishedLanes!==0;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=di(o):(p&=A,p!==0?u=di(p):n||(v=A&~v,v!==0&&(u=di(v))))):(A=o&~f,A!==0?u=di(A):p!==0?u=di(p):n||(v=o&~v,v!==0&&(u=di(v)))),u===0?0:r!==0&&r!==u&&(r&f)===0&&(f=u&-u,v=r&-r,f>=v||f===32&&(v&4194176)!==0)?r:u}function js(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Ga(n,r){switch(n){case 1:case 2:case 4:case 8:return r+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sl(){var n=bi;return bi<<=1,(bi&4194176)===0&&(bi=128),n}function Bs(){var n=Us;return Us<<=1,(Us&62914560)===0&&(Us=4194304),n}function Ka(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Ct(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function bc(n,r,o,u,f,p){var v=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var A=n.entanglements,D=n.expirationTimes,L=n.hiddenUpdates;for(o=v&~o;0<o;){var Q=31-wn(o),te=1<<Q;A[Q]=0,D[Q]=-1;var q=L[Q];if(q!==null)for(L[Q]=null,Q=0;Q<q.length;Q++){var W=q[Q];W!==null&&(W.lane&=-536870913)}o&=~te}u!==0&&zs(n,u,0),p!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=p&~(v&~r))}function zs(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-wn(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194218}function Hs(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-wn(o),f=1<<u;f&r|n[u]&r&&(n[u]|=r),o&=~f}}function Cc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Rc(){var n=he.p;return n!==0?n:(n=window.event,n===void 0?32:RE(n.type))}function Fs(n,r){var o=he.p;try{return he.p=n,r()}finally{he.p=o}}var Ci=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Ci,Mt="__reactProps$"+Ci,es="__reactContainer$"+Ci,Kr="__reactEvents$"+Ci,Wa="__reactListeners$"+Ci,Ri="__reactHandles$"+Ci,Al="__reactResources$"+Ci,qs="__reactMarker$"+Ci;function Wr(n){delete n[Ft],delete n[Mt],delete n[Kr],delete n[Wa],delete n[Ri]}function pi(n){var r=n[Ft];if(r)return r;for(var o=n.parentNode;o;){if(r=o[es]||o[Ft]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=fE(n);n!==null;){if(o=n[Ft])return o;n=fE(n)}return r}n=o,o=n.parentNode}return null}function ts(n){if(n=n[Ft]||n[es]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function Gs(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function Ks(n){var r=n[Al];return r||(r=n[Al]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function gt(n){n[qs]=!0}var wl=new Set,Qa={};function Vn(n,r){Nn(n,r),Nn(n+"Capture",r)}function Nn(n,r){for(Qa[n]=r,n=0;n<r.length;n++)wl.add(r[n])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bl={},Cl={};function Ic(n){return $e.call(Cl,n)?!0:$e.call(bl,n)?!1:dd.test(n)?Cl[n]=!0:(bl[n]=!0,!1)}function Ws(n,r,o){if(Ic(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function Qs(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function $n(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}function bn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Nc(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function pd(n){var r=Nc(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(v){u=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(v){u=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Qr(n){n._valueTracker||(n._valueTracker=pd(n))}function Rl(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=Nc(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Ya(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var ns=/[\n"\\]/g;function Tt(n){return n.replace(ns,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Ys(n,r,o,u,f,p,v,A){n.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.type=v:n.removeAttribute("type"),r!=null?v==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+bn(r)):n.value!==""+bn(r)&&(n.value=""+bn(r)):v!=="submit"&&v!=="reset"||n.removeAttribute("value"),r!=null?$a(n,v,bn(r)):o!=null?$a(n,v,bn(o)):u!=null&&n.removeAttribute("value"),f==null&&p!=null&&(n.defaultChecked=!!p),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?n.name=""+bn(A):n.removeAttribute("name")}function Yr(n,r,o,u,f,p,v,A){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(n.type=p),r!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||r!=null))return;o=o!=null?""+bn(o):"",r=r!=null?""+bn(r):o,A||r===n.value||(n.value=r),n.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=A?n.checked:!!u,n.defaultChecked=!!u,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(n.name=v)}function $a(n,r,o){r==="number"&&Ya(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Xe(n,r,o,u){if(n=n.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=r.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+bn(o),r=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function $r(n,r,o){if(r!=null&&(r=""+bn(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+bn(o):""}function $s(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(ne(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=bn(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function Xn(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var _d=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Il(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||_d.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function Dc(n,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Il(n,f,u)}else for(var p in r)r.hasOwnProperty(p)&&Il(n,p,r[p])}function Nl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var md=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ii(n){return gd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Zn=null;function Xa(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var is=null,ss=null;function rs(n){var r=ts(n);if(r&&(n=r.stateNode)){var o=n[Mt]||null;e:switch(n=r.stateNode,r.type){case"input":if(Ys(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Tt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var f=u[Mt]||null;if(!f)throw Error(s(90));Ys(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&Rl(u)}break e;case"textarea":$r(n,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Xe(n,!!o.multiple,r,!1)}}}var Dl=!1;function Oc(n,r,o){if(Dl)return n(r,o);Dl=!0;try{var u=n(r);return u}finally{if(Dl=!1,(is!==null||ss!==null)&&(Sh(),is&&(r=is,n=ss,ss=is=null,rs(r),n)))for(r=0;r<n.length;r++)rs(n[r])}}function Xr(n,r){var o=n.stateNode;if(o===null)return null;var u=o[Mt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var Jn=!1;if(Ln)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Jn=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Jn=!1}var Ni=null,Xs=null,as=null;function Ol(){if(as)return as;var n,r=Xs,o=r.length,u,f="value"in Ni?Ni.value:Ni.textContent,p=f.length;for(n=0;n<o&&r[n]===f[n];n++);var v=o-n;for(u=1;u<=v&&r[o-u]===f[p-u];u++);return as=f.slice(n,1<u?1-u:void 0)}function Di(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Oi(){return!0}function xl(){return!1}function qt(n){function r(o,u,f,p,v){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(o=n[A],this[A]=o?o(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Oi:xl,this.isPropagationStopped=xl,this}return R(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),r}var it={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Za=qt(it),Jr=R({},it,{view:0,detail:0}),xc=qt(Jr),Ja,eo,xi,ea=R({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ia,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xi&&(xi&&n.type==="mousemove"?(Ja=n.screenX-xi.screenX,eo=n.screenY-xi.screenY):eo=Ja=0,xi=n),Ja)},movementY:function(n){return"movementY"in n?n.movementY:eo}}),ei=qt(ea),kc=R({},ea,{dataTransfer:0}),yd=qt(kc),ta=R({},Jr,{relatedTarget:0}),to=qt(ta),kl=R({},it,{animationName:0,elapsedTime:0,pseudoElement:0}),no=qt(kl),Mc=R({},it,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),io=qt(Mc),vd=R({},it,{data:0}),Ml=qt(vd),na={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Vc[n])?!!r[n]:!1}function ia(){return Pl}var Lc=R({},Jr,{key:function(n){if(n.key){var r=na[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Di(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Pc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ia,charCode:function(n){return n.type==="keypress"?Di(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Di(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),so=qt(Lc),Uc=R({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vl=qt(Uc),os=R({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ia}),jc=qt(os),Bc=R({},it,{propertyName:0,elapsedTime:0,pseudoElement:0}),zc=qt(Bc),Hc=R({},ea,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ro=qt(Hc),Cn=R({},it,{newState:0,oldState:0}),Fc=qt(Cn),qc=[9,13,27,32],ki=Ln&&"CompositionEvent"in window,h=null;Ln&&"documentMode"in document&&(h=document.documentMode);var g=Ln&&"TextEvent"in window&&!h,y=Ln&&(!ki||h&&8<h&&11>=h),w=" ",j=!1;function G(n,r){switch(n){case"keyup":return qc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ce(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qe=!1;function Pt(n,r){switch(n){case"compositionend":return ce(r);case"keypress":return r.which!==32?null:(j=!0,w);case"textInput":return n=r.data,n===w&&j?null:n;default:return null}}function Ge(n,r){if(qe)return n==="compositionend"||!ki&&G(n,r)?(n=Ol(),as=Xs=Ni=null,qe=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var Gt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vt(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Gt[n.type]:r==="textarea"}function ls(n,r,o,u){is?ss?ss.push(u):ss=[u]:is=u,r=Rh(r,"onChange"),0<r.length&&(o=new Za("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var tn=null,Mi=null;function Ll(n){iE(n,0)}function Gc(n){var r=Gs(n);if(Rl(r))return n}function xg(n,r){if(n==="change")return r}var kg=!1;if(Ln){var Ed;if(Ln){var Td="oninput"in document;if(!Td){var Mg=document.createElement("div");Mg.setAttribute("oninput","return;"),Td=typeof Mg.oninput=="function"}Ed=Td}else Ed=!1;kg=Ed&&(!document.documentMode||9<document.documentMode)}function Pg(){tn&&(tn.detachEvent("onpropertychange",Vg),Mi=tn=null)}function Vg(n){if(n.propertyName==="value"&&Gc(Mi)){var r=[];ls(r,Mi,n,Xa(n)),Oc(Ll,r)}}function xb(n,r,o){n==="focusin"?(Pg(),tn=r,Mi=o,tn.attachEvent("onpropertychange",Vg)):n==="focusout"&&Pg()}function kb(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Gc(Mi)}function Mb(n,r){if(n==="click")return Gc(r)}function Pb(n,r){if(n==="input"||n==="change")return Gc(r)}function Vb(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Un=typeof Object.is=="function"?Object.is:Vb;function Ul(n,r){if(Un(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!$e.call(r,f)||!Un(n[f],r[f]))return!1}return!0}function Lg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ug(n,r){var o=Lg(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Lg(o)}}function jg(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?jg(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Bg(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Ya(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Ya(n.document)}return r}function Sd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Lb(n,r){var o=Bg(r);r=n.focusedElem;var u=n.selectionRange;if(o!==r&&r&&r.ownerDocument&&jg(r.ownerDocument.documentElement,r)){if(u!==null&&Sd(r)){if(n=u.start,o=u.end,o===void 0&&(o=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(o,r.value.length);else if(o=(n=r.ownerDocument||document)&&n.defaultView||window,o.getSelection){o=o.getSelection();var f=r.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!o.extend&&p>u&&(f=u,u=p,p=f),f=Ug(r,p);var v=Ug(r,u);f&&v&&(o.rangeCount!==1||o.anchorNode!==f.node||o.anchorOffset!==f.offset||o.focusNode!==v.node||o.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(f.node,f.offset),o.removeAllRanges(),p>u?(o.addRange(n),o.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),o.addRange(n)))}}for(n=[],o=r;o=o.parentNode;)o.nodeType===1&&n.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)o=n[r],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var Ub=Ln&&"documentMode"in document&&11>=document.documentMode,ao=null,Ad=null,jl=null,wd=!1;function zg(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;wd||ao==null||ao!==Ya(u)||(u=ao,"selectionStart"in u&&Sd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),jl&&Ul(jl,u)||(jl=u,u=Rh(Ad,"onSelect"),0<u.length&&(r=new Za("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=ao)))}function sa(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var oo={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionrun:sa("Transition","TransitionRun"),transitionstart:sa("Transition","TransitionStart"),transitioncancel:sa("Transition","TransitionCancel"),transitionend:sa("Transition","TransitionEnd")},bd={},Hg={};Ln&&(Hg=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function ra(n){if(bd[n])return bd[n];if(!oo[n])return n;var r=oo[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Hg)return bd[n]=r[o];return n}var Fg=ra("animationend"),qg=ra("animationiteration"),Gg=ra("animationstart"),jb=ra("transitionrun"),Bb=ra("transitionstart"),zb=ra("transitioncancel"),Kg=ra("transitionend"),Wg=new Map,Qg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function _i(n,r){Wg.set(n,r),Vn(r,[n])}var ti=[],lo=0,Cd=0;function Kc(){for(var n=lo,r=Cd=lo=0;r<n;){var o=ti[r];ti[r++]=null;var u=ti[r];ti[r++]=null;var f=ti[r];ti[r++]=null;var p=ti[r];if(ti[r++]=null,u!==null&&f!==null){var v=u.pending;v===null?f.next=f:(f.next=v.next,v.next=f),u.pending=f}p!==0&&Yg(o,f,p)}}function Wc(n,r,o,u){ti[lo++]=n,ti[lo++]=r,ti[lo++]=o,ti[lo++]=u,Cd|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Rd(n,r,o,u){return Wc(n,r,o,u),Qc(n)}function Zs(n,r){return Wc(n,null,null,r),Qc(n)}function Yg(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,p=n.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(n=p.stateNode,n===null||n._visibility&1||(f=!0)),n=p,p=p.return;f&&r!==null&&n.tag===3&&(p=n.stateNode,f=31-wn(o),p=p.hiddenUpdates,n=p[f],n===null?p[f]=[r]:n.push(r),r.lane=o|536870912)}function Qc(n){if(50<cu)throw cu=0,kp=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var uo={},$g=new WeakMap;function ni(n,r){if(typeof n=="object"&&n!==null){var o=$g.get(n);return o!==void 0?o:(r={value:n,source:r,stack:ve(r)},$g.set(n,r),r)}return{value:n,source:r,stack:ve(r)}}var co=[],ho=0,Yc=null,$c=0,ii=[],si=0,aa=null,us=1,cs="";function oa(n,r){co[ho++]=$c,co[ho++]=Yc,Yc=n,$c=r}function Xg(n,r,o){ii[si++]=us,ii[si++]=cs,ii[si++]=aa,aa=n;var u=us;n=cs;var f=32-wn(u)-1;u&=~(1<<f),o+=1;var p=32-wn(r)+f;if(30<p){var v=f-f%5;p=(u&(1<<v)-1).toString(32),u>>=v,f-=v,us=1<<32-wn(r)+f|o<<f|u,cs=p+n}else us=1<<p|o<<f|u,cs=n}function Id(n){n.return!==null&&(oa(n,1),Xg(n,1,0))}function Nd(n){for(;n===Yc;)Yc=co[--ho],co[ho]=null,$c=co[--ho],co[ho]=null;for(;n===aa;)aa=ii[--si],ii[si]=null,cs=ii[--si],ii[si]=null,us=ii[--si],ii[si]=null}var Rn=null,nn=null,Ze=!1,mi=null,Pi=!1,Dd=Error(s(519));function la(n){var r=Error(s(418,""));throw Hl(ni(r,n)),Dd}function Zg(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[Ft]=n,r[Mt]=u,o){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(o=0;o<fu.length;o++)ze(fu[o],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":ze("invalid",r),Yr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Qr(r);break;case"select":ze("invalid",r);break;case"textarea":ze("invalid",r),$s(r,u.value,u.defaultValue,u.children),Qr(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||oE(r.textContent,o)?(u.popover!=null&&(ze("beforetoggle",r),ze("toggle",r)),u.onScroll!=null&&ze("scroll",r),u.onScrollEnd!=null&&ze("scrollend",r),u.onClick!=null&&(r.onclick=Ih),r=!0):r=!1,r||la(n)}function Jg(n){for(Rn=n.return;Rn;)switch(Rn.tag){case 3:case 27:Pi=!0;return;case 5:case 13:Pi=!1;return;default:Rn=Rn.return}}function Bl(n){if(n!==Rn)return!1;if(!Ze)return Jg(n),Ze=!0,!1;var r=!1,o;if((o=n.tag!==3&&n.tag!==27)&&((o=n.tag===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||$p(n.type,n.memoizedProps)),o=!o),o&&(r=!0),r&&nn&&la(n),Jg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(r===0){nn=yi(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;n=n.nextSibling}nn=null}}else nn=Rn?yi(n.stateNode.nextSibling):null;return!0}function zl(){nn=Rn=null,Ze=!1}function Hl(n){mi===null?mi=[n]:mi.push(n)}var Fl=Error(s(460)),ey=Error(s(474)),Od={then:function(){}};function ty(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Xc(){}function ny(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then(Xc,Xc),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,n===Fl?Error(s(483)):n;default:if(typeof r.status=="string")r.then(Xc,Xc);else{if(n=ht,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,n===Fl?Error(s(483)):n}throw ql=r,Fl}}var ql=null;function iy(){if(ql===null)throw Error(s(459));var n=ql;return ql=null,n}var fo=null,Gl=0;function Zc(n){var r=Gl;return Gl+=1,fo===null&&(fo=[]),ny(fo,n,r)}function Kl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Jc(n,r){throw r.$$typeof===l?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function sy(n){var r=n._init;return r(n._payload)}function ry(n){function r(U,P){if(n){var B=U.deletions;B===null?(U.deletions=[P],U.flags|=16):B.push(P)}}function o(U,P){if(!n)return null;for(;P!==null;)r(U,P),P=P.sibling;return null}function u(U){for(var P=new Map;U!==null;)U.key!==null?P.set(U.key,U):P.set(U.index,U),U=U.sibling;return P}function f(U,P){return U=cr(U,P),U.index=0,U.sibling=null,U}function p(U,P,B){return U.index=B,n?(B=U.alternate,B!==null?(B=B.index,B<P?(U.flags|=33554434,P):B):(U.flags|=33554434,P)):(U.flags|=1048576,P)}function v(U){return n&&U.alternate===null&&(U.flags|=33554434),U}function A(U,P,B,Z){return P===null||P.tag!==6?(P=bp(B,U.mode,Z),P.return=U,P):(P=f(P,B),P.return=U,P)}function D(U,P,B,Z){var me=B.type;return me===_?Q(U,P,B.props.children,Z,B.key):P!==null&&(P.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===ee&&sy(me)===P.type)?(P=f(P,B.props),Kl(P,B),P.return=U,P):(P=gh(B.type,B.key,B.props,null,U.mode,Z),Kl(P,B),P.return=U,P)}function L(U,P,B,Z){return P===null||P.tag!==4||P.stateNode.containerInfo!==B.containerInfo||P.stateNode.implementation!==B.implementation?(P=Cp(B,U.mode,Z),P.return=U,P):(P=f(P,B.children||[]),P.return=U,P)}function Q(U,P,B,Z,me){return P===null||P.tag!==7?(P=ya(B,U.mode,Z,me),P.return=U,P):(P=f(P,B),P.return=U,P)}function te(U,P,B){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=bp(""+P,U.mode,B),P.return=U,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case c:return B=gh(P.type,P.key,P.props,null,U.mode,B),Kl(B,P),B.return=U,B;case d:return P=Cp(P,U.mode,B),P.return=U,P;case ee:var Z=P._init;return P=Z(P._payload),te(U,P,B)}if(ne(P)||ye(P))return P=ya(P,U.mode,B,null),P.return=U,P;if(typeof P.then=="function")return te(U,Zc(P),B);if(P.$$typeof===V)return te(U,ph(U,P),B);Jc(U,P)}return null}function q(U,P,B,Z){var me=P!==null?P.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return me!==null?null:A(U,P,""+B,Z);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case c:return B.key===me?D(U,P,B,Z):null;case d:return B.key===me?L(U,P,B,Z):null;case ee:return me=B._init,B=me(B._payload),q(U,P,B,Z)}if(ne(B)||ye(B))return me!==null?null:Q(U,P,B,Z,null);if(typeof B.then=="function")return q(U,P,Zc(B),Z);if(B.$$typeof===V)return q(U,P,ph(U,B),Z);Jc(U,B)}return null}function W(U,P,B,Z,me){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return U=U.get(B)||null,A(P,U,""+Z,me);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case c:return U=U.get(Z.key===null?B:Z.key)||null,D(P,U,Z,me);case d:return U=U.get(Z.key===null?B:Z.key)||null,L(P,U,Z,me);case ee:var Ve=Z._init;return Z=Ve(Z._payload),W(U,P,B,Z,me)}if(ne(Z)||ye(Z))return U=U.get(B)||null,Q(P,U,Z,me,null);if(typeof Z.then=="function")return W(U,P,B,Zc(Z),me);if(Z.$$typeof===V)return W(U,P,B,ph(P,Z),me);Jc(P,Z)}return null}function Te(U,P,B,Z){for(var me=null,Ve=null,Se=P,be=P=0,Qt=null;Se!==null&&be<B.length;be++){Se.index>be?(Qt=Se,Se=null):Qt=Se.sibling;var Je=q(U,Se,B[be],Z);if(Je===null){Se===null&&(Se=Qt);break}n&&Se&&Je.alternate===null&&r(U,Se),P=p(Je,P,be),Ve===null?me=Je:Ve.sibling=Je,Ve=Je,Se=Qt}if(be===B.length)return o(U,Se),Ze&&oa(U,be),me;if(Se===null){for(;be<B.length;be++)Se=te(U,B[be],Z),Se!==null&&(P=p(Se,P,be),Ve===null?me=Se:Ve.sibling=Se,Ve=Se);return Ze&&oa(U,be),me}for(Se=u(Se);be<B.length;be++)Qt=W(Se,U,be,B[be],Z),Qt!==null&&(n&&Qt.alternate!==null&&Se.delete(Qt.key===null?be:Qt.key),P=p(Qt,P,be),Ve===null?me=Qt:Ve.sibling=Qt,Ve=Qt);return n&&Se.forEach(function(gr){return r(U,gr)}),Ze&&oa(U,be),me}function xe(U,P,B,Z){if(B==null)throw Error(s(151));for(var me=null,Ve=null,Se=P,be=P=0,Qt=null,Je=B.next();Se!==null&&!Je.done;be++,Je=B.next()){Se.index>be?(Qt=Se,Se=null):Qt=Se.sibling;var gr=q(U,Se,Je.value,Z);if(gr===null){Se===null&&(Se=Qt);break}n&&Se&&gr.alternate===null&&r(U,Se),P=p(gr,P,be),Ve===null?me=gr:Ve.sibling=gr,Ve=gr,Se=Qt}if(Je.done)return o(U,Se),Ze&&oa(U,be),me;if(Se===null){for(;!Je.done;be++,Je=B.next())Je=te(U,Je.value,Z),Je!==null&&(P=p(Je,P,be),Ve===null?me=Je:Ve.sibling=Je,Ve=Je);return Ze&&oa(U,be),me}for(Se=u(Se);!Je.done;be++,Je=B.next())Je=W(Se,U,be,Je.value,Z),Je!==null&&(n&&Je.alternate!==null&&Se.delete(Je.key===null?be:Je.key),P=p(Je,P,be),Ve===null?me=Je:Ve.sibling=Je,Ve=Je);return n&&Se.forEach(function(tR){return r(U,tR)}),Ze&&oa(U,be),me}function wt(U,P,B,Z){if(typeof B=="object"&&B!==null&&B.type===_&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case c:e:{for(var me=B.key;P!==null;){if(P.key===me){if(me=B.type,me===_){if(P.tag===7){o(U,P.sibling),Z=f(P,B.props.children),Z.return=U,U=Z;break e}}else if(P.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===ee&&sy(me)===P.type){o(U,P.sibling),Z=f(P,B.props),Kl(Z,B),Z.return=U,U=Z;break e}o(U,P);break}else r(U,P);P=P.sibling}B.type===_?(Z=ya(B.props.children,U.mode,Z,B.key),Z.return=U,U=Z):(Z=gh(B.type,B.key,B.props,null,U.mode,Z),Kl(Z,B),Z.return=U,U=Z)}return v(U);case d:e:{for(me=B.key;P!==null;){if(P.key===me)if(P.tag===4&&P.stateNode.containerInfo===B.containerInfo&&P.stateNode.implementation===B.implementation){o(U,P.sibling),Z=f(P,B.children||[]),Z.return=U,U=Z;break e}else{o(U,P);break}else r(U,P);P=P.sibling}Z=Cp(B,U.mode,Z),Z.return=U,U=Z}return v(U);case ee:return me=B._init,B=me(B._payload),wt(U,P,B,Z)}if(ne(B))return Te(U,P,B,Z);if(ye(B)){if(me=ye(B),typeof me!="function")throw Error(s(150));return B=me.call(B),xe(U,P,B,Z)}if(typeof B.then=="function")return wt(U,P,Zc(B),Z);if(B.$$typeof===V)return wt(U,P,ph(U,B),Z);Jc(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,P!==null&&P.tag===6?(o(U,P.sibling),Z=f(P,B),Z.return=U,U=Z):(o(U,P),Z=bp(B,U.mode,Z),Z.return=U,U=Z),v(U)):o(U,P)}return function(U,P,B,Z){try{Gl=0;var me=wt(U,P,B,Z);return fo=null,me}catch(Se){if(Se===Fl)throw Se;var Ve=li(29,Se,null,U.mode);return Ve.lanes=Z,Ve.return=U,Ve}finally{}}}var ua=ry(!0),ay=ry(!1),po=Ne(null),eh=Ne(0);function oy(n,r){n=Ts,Re(eh,n),Re(po,r),Ts=n|r.baseLanes}function xd(){Re(eh,Ts),Re(po,po.current)}function kd(){Ts=eh.current,Oe(po),Oe(eh)}var ri=Ne(null),Vi=null;function Js(n){var r=n.alternate;Re(Lt,Lt.current&1),Re(ri,n),Vi===null&&(r===null||po.current!==null||r.memoizedState!==null)&&(Vi=n)}function ly(n){if(n.tag===22){if(Re(Lt,Lt.current),Re(ri,n),Vi===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(Vi=n)}}else er()}function er(){Re(Lt,Lt.current),Re(ri,ri.current)}function hs(n){Oe(ri),Vi===n&&(Vi=null),Oe(Lt)}var Lt=Ne(0);function th(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Hb=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},Fb=i.unstable_scheduleCallback,qb=i.unstable_NormalPriority,Ut={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Md(){return{controller:new Hb,data:new Map,refCount:0}}function Wl(n){n.refCount--,n.refCount===0&&Fb(qb,function(){n.controller.abort()})}var Ql=null,Pd=0,_o=0,mo=null;function Gb(n,r){if(Ql===null){var o=Ql=[];Pd=0,_o=zp(),mo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Pd++,r.then(uy,uy),r}function uy(){if(--Pd===0&&Ql!==null){mo!==null&&(mo.status="fulfilled");var n=Ql;Ql=null,_o=0,mo=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function Kb(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var cy=b.S;b.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&Gb(n,r),cy!==null&&cy(n,r)};var ca=Ne(null);function Vd(){var n=ca.current;return n!==null?n:ht.pooledCache}function nh(n,r){r===null?Re(ca,ca.current):Re(ca,r.pool)}function hy(){var n=Vd();return n===null?null:{parent:Ut._currentValue,pool:n}}var tr=0,Pe=null,at=null,Dt=null,ih=!1,go=!1,ha=!1,sh=0,Yl=0,yo=null,Wb=0;function Rt(){throw Error(s(321))}function Ld(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!Un(n[o],r[o]))return!1;return!0}function Ud(n,r,o,u,f,p){return tr=p,Pe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,b.H=n===null||n.memoizedState===null?fa:nr,ha=!1,p=o(u,f),ha=!1,go&&(p=dy(r,o,u,f)),fy(n),p}function fy(n){b.H=Li;var r=at!==null&&at.next!==null;if(tr=0,Dt=at=Pe=null,ih=!1,Yl=0,yo=null,r)throw Error(s(300));n===null||Kt||(n=n.dependencies,n!==null&&dh(n)&&(Kt=!0))}function dy(n,r,o,u){Pe=n;var f=0;do{if(go&&(yo=null),Yl=0,go=!1,25<=f)throw Error(s(301));if(f+=1,Dt=at=null,n.updateQueue!=null){var p=n.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}b.H=da,p=r(o,u)}while(go);return p}function Qb(){var n=b.H,r=n.useState()[0];return r=typeof r.then=="function"?$l(r):r,n=n.useState()[0],(at!==null?at.memoizedState:null)!==n&&(Pe.flags|=1024),r}function jd(){var n=sh!==0;return sh=0,n}function Bd(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function zd(n){if(ih){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}ih=!1}tr=0,Dt=at=Pe=null,go=!1,Yl=sh=0,yo=null}function Dn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?Pe.memoizedState=Dt=n:Dt=Dt.next=n,Dt}function Ot(){if(at===null){var n=Pe.alternate;n=n!==null?n.memoizedState:null}else n=at.next;var r=Dt===null?Pe.memoizedState:Dt.next;if(r!==null)Dt=r,at=n;else{if(n===null)throw Pe.alternate===null?Error(s(467)):Error(s(310));at=n,n={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},Dt===null?Pe.memoizedState=Dt=n:Dt=Dt.next=n}return Dt}var rh;rh=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function $l(n){var r=Yl;return Yl+=1,yo===null&&(yo=[]),n=ny(yo,n,r),r=Pe,(Dt===null?r.memoizedState:Dt.next)===null&&(r=r.alternate,b.H=r===null||r.memoizedState===null?fa:nr),n}function ah(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return $l(n);if(n.$$typeof===V)return pn(n)}throw Error(s(438,String(n)))}function Hd(n){var r=null,o=Pe.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Pe.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=rh(),Pe.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=re;return r.index++,o}function fs(n,r){return typeof r=="function"?r(n):r}function oh(n){var r=Ot();return Fd(r,at,n)}function Fd(n,r,o){var u=n.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=n.baseQueue,p=u.pending;if(p!==null){if(f!==null){var v=f.next;f.next=p.next,p.next=v}r.baseQueue=f=p,u.pending=null}if(p=n.baseState,f===null)n.memoizedState=p;else{r=f.next;var A=v=null,D=null,L=r,Q=!1;do{var te=L.lane&-536870913;if(te!==L.lane?(Ke&te)===te:(tr&te)===te){var q=L.revertLane;if(q===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),te===_o&&(Q=!0);else if((tr&q)===q){L=L.next,q===_o&&(Q=!0);continue}else te={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},D===null?(A=D=te,v=p):D=D.next=te,Pe.lanes|=q,hr|=q;te=L.action,ha&&o(p,te),p=L.hasEagerState?L.eagerState:o(p,te)}else q={lane:te,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},D===null?(A=D=q,v=p):D=D.next=q,Pe.lanes|=te,hr|=te;L=L.next}while(L!==null&&L!==r);if(D===null?v=p:D.next=A,!Un(p,n.memoizedState)&&(Kt=!0,Q&&(o=mo,o!==null)))throw o;n.memoizedState=p,n.baseState=v,n.baseQueue=D,u.lastRenderedState=p}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function qd(n){var r=Ot(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,p=r.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do p=n(p,v.action),v=v.next;while(v!==f);Un(p,r.memoizedState)||(Kt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function py(n,r,o){var u=Pe,f=Ot(),p=Ze;if(p){if(o===void 0)throw Error(s(407));o=o()}else o=r();var v=!Un((at||f).memoizedState,o);if(v&&(f.memoizedState=o,Kt=!0),f=f.queue,Wd(gy.bind(null,u,f,n),[n]),f.getSnapshot!==r||v||Dt!==null&&Dt.memoizedState.tag&1){if(u.flags|=2048,vo(9,my.bind(null,u,f,o,r),{destroy:void 0},null),ht===null)throw Error(s(349));p||(tr&60)!==0||_y(u,r,o)}return o}function _y(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Pe.updateQueue,r===null?(r=rh(),Pe.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function my(n,r,o,u){r.value=o,r.getSnapshot=u,yy(r)&&vy(n)}function gy(n,r,o){return o(function(){yy(r)&&vy(n)})}function yy(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!Un(n,o)}catch{return!0}}function vy(n){var r=Zs(n,2);r!==null&&In(r,n,2)}function Gd(n){var r=Dn();if(typeof n=="function"){var o=n;if(n=o(),ha){wi(!0);try{o()}finally{wi(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:n},r}function Ey(n,r,o,u){return n.baseState=o,Fd(n,at,typeof u=="function"?u:fs)}function Yb(n,r,o,u,f){if(ch(n))throw Error(s(485));if(n=r.action,n!==null){var p={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){p.listeners.push(v)}};b.T!==null?o(!0):p.isTransition=!1,u(p),o=r.pending,o===null?(p.next=r.pending=p,Ty(r,p)):(p.next=o.next,r.pending=o.next=p)}}function Ty(n,r){var o=r.action,u=r.payload,f=n.state;if(r.isTransition){var p=b.T,v={};b.T=v;try{var A=o(f,u),D=b.S;D!==null&&D(v,A),Sy(n,r,A)}catch(L){Kd(n,r,L)}finally{b.T=p}}else try{p=o(f,u),Sy(n,r,p)}catch(L){Kd(n,r,L)}}function Sy(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Ay(n,r,u)},function(u){return Kd(n,r,u)}):Ay(n,r,o)}function Ay(n,r,o){r.status="fulfilled",r.value=o,wy(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,Ty(n,o)))}function Kd(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,wy(r),r=r.next;while(r!==u)}n.action=null}function wy(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function by(n,r){return r}function Cy(n,r){if(Ze){var o=ht.formState;if(o!==null){e:{var u=Pe;if(Ze){if(nn){t:{for(var f=nn,p=Pi;f.nodeType!==8;){if(!p){f=null;break t}if(f=yi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){nn=yi(f.nextSibling),u=f.data==="F!";break e}}la(u)}u=!1}u&&(r=o[0])}}return o=Dn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:by,lastRenderedState:r},o.queue=u,o=qy.bind(null,Pe,u),u.dispatch=o,u=Gd(!1),p=Zd.bind(null,Pe,!1,u.queue),u=Dn(),f={state:r,dispatch:null,action:n,pending:null},u.queue=f,o=Yb.bind(null,Pe,f,p,o),f.dispatch=o,u.memoizedState=n,[r,o,!1]}function Ry(n){var r=Ot();return Iy(r,at,n)}function Iy(n,r,o){r=Fd(n,r,by)[0],n=oh(fs)[0],r=typeof r=="object"&&r!==null&&typeof r.then=="function"?$l(r):r;var u=Ot(),f=u.queue,p=f.dispatch;return o!==u.memoizedState&&(Pe.flags|=2048,vo(9,$b.bind(null,f,o),{destroy:void 0},null)),[r,p,n]}function $b(n,r){n.action=r}function Ny(n){var r=Ot(),o=at;if(o!==null)return Iy(r,o,n);Ot(),r=r.memoizedState,o=Ot();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function vo(n,r,o,u){return n={tag:n,create:r,inst:o,deps:u,next:null},r=Pe.updateQueue,r===null&&(r=rh(),Pe.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function Dy(){return Ot().memoizedState}function lh(n,r,o,u){var f=Dn();Pe.flags|=n,f.memoizedState=vo(1|r,o,{destroy:void 0},u===void 0?null:u)}function uh(n,r,o,u){var f=Ot();u=u===void 0?null:u;var p=f.memoizedState.inst;at!==null&&u!==null&&Ld(u,at.memoizedState.deps)?f.memoizedState=vo(r,o,p,u):(Pe.flags|=n,f.memoizedState=vo(1|r,o,p,u))}function Oy(n,r){lh(8390656,8,n,r)}function Wd(n,r){uh(2048,8,n,r)}function xy(n,r){return uh(4,2,n,r)}function ky(n,r){return uh(4,4,n,r)}function My(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Py(n,r,o){o=o!=null?o.concat([n]):null,uh(4,4,My.bind(null,r,n),o)}function Qd(){}function Vy(n,r){var o=Ot();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Ld(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Ly(n,r){var o=Ot();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Ld(r,u[1]))return u[0];if(u=n(),ha){wi(!0);try{n()}finally{wi(!1)}}return o.memoizedState=[u,r],u}function Yd(n,r,o){return o===void 0||(tr&1073741824)!==0?n.memoizedState=r:(n.memoizedState=o,n=jv(),Pe.lanes|=n,hr|=n,o)}function Uy(n,r,o,u){return Un(o,r)?o:po.current!==null?(n=Yd(n,o,u),Un(n,r)||(Kt=!0),n):(tr&42)===0?(Kt=!0,n.memoizedState=o):(n=jv(),Pe.lanes|=n,hr|=n,r)}function jy(n,r,o,u,f){var p=he.p;he.p=p!==0&&8>p?p:8;var v=b.T,A={};b.T=A,Zd(n,!1,r,o);try{var D=f(),L=b.S;if(L!==null&&L(A,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var Q=Kb(D,u);Xl(n,r,Q,Hn(n))}else Xl(n,r,u,Hn(n))}catch(te){Xl(n,r,{then:function(){},status:"rejected",reason:te},Hn())}finally{he.p=p,b.T=v}}function Xb(){}function $d(n,r,o,u){if(n.tag!==5)throw Error(s(476));var f=By(n).queue;jy(n,f,r,Ee,o===null?Xb:function(){return zy(n),o(u)})}function By(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:Ee,baseState:Ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:Ee},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function zy(n){var r=By(n).next.queue;Xl(n,r,{},Hn())}function Xd(){return pn(gu)}function Hy(){return Ot().memoizedState}function Fy(){return Ot().memoizedState}function Zb(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=Hn();n=rr(o);var u=ar(r,n,o);u!==null&&(In(u,r,o),eu(u,r,o)),r={cache:Md()},n.payload=r;return}r=r.return}}function Jb(n,r,o){var u=Hn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},ch(n)?Gy(r,o):(o=Rd(n,r,o,u),o!==null&&(In(o,n,u),Ky(o,r,u)))}function qy(n,r,o){var u=Hn();Xl(n,r,o,u)}function Xl(n,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(ch(n))Gy(r,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,A=p(v,o);if(f.hasEagerState=!0,f.eagerState=A,Un(A,v))return Wc(n,r,f,0),ht===null&&Kc(),!1}catch{}finally{}if(o=Rd(n,r,f,u),o!==null)return In(o,n,u),Ky(o,r,u),!0}return!1}function Zd(n,r,o,u){if(u={lane:2,revertLane:zp(),action:u,hasEagerState:!1,eagerState:null,next:null},ch(n)){if(r)throw Error(s(479))}else r=Rd(n,o,u,2),r!==null&&In(r,n,2)}function ch(n){var r=n.alternate;return n===Pe||r!==null&&r===Pe}function Gy(n,r){go=ih=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Ky(n,r,o){if((o&4194176)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Hs(n,o)}}var Li={readContext:pn,use:ah,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useLayoutEffect:Rt,useInsertionEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useSyncExternalStore:Rt,useId:Rt};Li.useCacheRefresh=Rt,Li.useMemoCache=Rt,Li.useHostTransitionStatus=Rt,Li.useFormState=Rt,Li.useActionState=Rt,Li.useOptimistic=Rt;var fa={readContext:pn,use:ah,useCallback:function(n,r){return Dn().memoizedState=[n,r===void 0?null:r],n},useContext:pn,useEffect:Oy,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,lh(4194308,4,My.bind(null,r,n),o)},useLayoutEffect:function(n,r){return lh(4194308,4,n,r)},useInsertionEffect:function(n,r){lh(4,2,n,r)},useMemo:function(n,r){var o=Dn();r=r===void 0?null:r;var u=n();if(ha){wi(!0);try{n()}finally{wi(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=Dn();if(o!==void 0){var f=o(r);if(ha){wi(!0);try{o(r)}finally{wi(!1)}}}else f=r;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=Jb.bind(null,Pe,n),[u.memoizedState,n]},useRef:function(n){var r=Dn();return n={current:n},r.memoizedState=n},useState:function(n){n=Gd(n);var r=n.queue,o=qy.bind(null,Pe,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:Qd,useDeferredValue:function(n,r){var o=Dn();return Yd(o,n,r)},useTransition:function(){var n=Gd(!1);return n=jy.bind(null,Pe,n.queue,!0,!1),Dn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=Pe,f=Dn();if(Ze){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ht===null)throw Error(s(349));(Ke&60)!==0||_y(u,r,o)}f.memoizedState=o;var p={value:o,getSnapshot:r};return f.queue=p,Oy(gy.bind(null,u,p,n),[n]),u.flags|=2048,vo(9,my.bind(null,u,p,o,r),{destroy:void 0},null),o},useId:function(){var n=Dn(),r=ht.identifierPrefix;if(Ze){var o=cs,u=us;o=(u&~(1<<32-wn(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=sh++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Wb++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},useCacheRefresh:function(){return Dn().memoizedState=Zb.bind(null,Pe)}};fa.useMemoCache=Hd,fa.useHostTransitionStatus=Xd,fa.useFormState=Cy,fa.useActionState=Cy,fa.useOptimistic=function(n){var r=Dn();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Zd.bind(null,Pe,!0,o),o.dispatch=r,[n,r]};var nr={readContext:pn,use:ah,useCallback:Vy,useContext:pn,useEffect:Wd,useImperativeHandle:Py,useInsertionEffect:xy,useLayoutEffect:ky,useMemo:Ly,useReducer:oh,useRef:Dy,useState:function(){return oh(fs)},useDebugValue:Qd,useDeferredValue:function(n,r){var o=Ot();return Uy(o,at.memoizedState,n,r)},useTransition:function(){var n=oh(fs)[0],r=Ot().memoizedState;return[typeof n=="boolean"?n:$l(n),r]},useSyncExternalStore:py,useId:Hy};nr.useCacheRefresh=Fy,nr.useMemoCache=Hd,nr.useHostTransitionStatus=Xd,nr.useFormState=Ry,nr.useActionState=Ry,nr.useOptimistic=function(n,r){var o=Ot();return Ey(o,at,n,r)};var da={readContext:pn,use:ah,useCallback:Vy,useContext:pn,useEffect:Wd,useImperativeHandle:Py,useInsertionEffect:xy,useLayoutEffect:ky,useMemo:Ly,useReducer:qd,useRef:Dy,useState:function(){return qd(fs)},useDebugValue:Qd,useDeferredValue:function(n,r){var o=Ot();return at===null?Yd(o,n,r):Uy(o,at.memoizedState,n,r)},useTransition:function(){var n=qd(fs)[0],r=Ot().memoizedState;return[typeof n=="boolean"?n:$l(n),r]},useSyncExternalStore:py,useId:Hy};da.useCacheRefresh=Fy,da.useMemoCache=Hd,da.useHostTransitionStatus=Xd,da.useFormState=Ny,da.useActionState=Ny,da.useOptimistic=function(n,r){var o=Ot();return at!==null?Ey(o,at,n,r):(o.baseState=n,[n,o.queue.dispatch])};function Jd(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:R({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ep={isMounted:function(n){return(n=n._reactInternals)?oe(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Hn(),f=rr(u);f.payload=r,o!=null&&(f.callback=o),r=ar(n,f,u),r!==null&&(In(r,n,u),eu(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Hn(),f=rr(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=ar(n,f,u),r!==null&&(In(r,n,u),eu(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Hn(),u=rr(o);u.tag=2,r!=null&&(u.callback=r),r=ar(n,u,o),r!==null&&(In(r,n,o),eu(r,n,o))}};function Wy(n,r,o,u,f,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,v):r.prototype&&r.prototype.isPureReactComponent?!Ul(o,u)||!Ul(f,p):!0}function Qy(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&ep.enqueueReplaceState(r,r.state,null)}function pa(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=R({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var hh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Yy(n){hh(n)}function $y(n){console.error(n)}function Xy(n){hh(n)}function fh(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function Zy(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function tp(n,r,o){return o=rr(o),o.tag=3,o.payload={element:null},o.callback=function(){fh(n,r)},o}function Jy(n){return n=rr(n),n.tag=3,n}function ev(n,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var p=u.value;n.payload=function(){return f(p)},n.callback=function(){Zy(r,o,u)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(n.callback=function(){Zy(r,o,u),typeof f!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var A=u.stack;this.componentDidCatch(u.value,{componentStack:A!==null?A:""})})}function eC(n,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Jl(r,o,f,!0),o=ri.current,o!==null){switch(o.tag){case 13:return Vi===null?Vp():o.alternate===null&&At===0&&(At=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Od?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Up(n,u,f)),!1;case 22:return o.flags|=65536,u===Od?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Up(n,u,f)),!1}throw Error(s(435,o.tag))}return Up(n,u,f),Vp(),!1}if(Ze)return r=ri.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Dd&&(n=Error(s(422),{cause:u}),Hl(ni(n,o)))):(u!==Dd&&(r=Error(s(423),{cause:u}),Hl(ni(r,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=ni(u,o),f=tp(n.stateNode,u,f),mp(n,f),At!==4&&(At=2)),!1;var p=Error(s(520),{cause:u});if(p=ni(p,o),lu===null?lu=[p]:lu.push(p),At!==4&&(At=2),r===null)return!0;u=ni(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=tp(o.stateNode,u,n),mp(o,n),!1;case 1:if(r=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(fr===null||!fr.has(p))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Jy(f),ev(f,n,o,u),mp(o,f),!1}o=o.return}while(o!==null);return!1}var tv=Error(s(461)),Kt=!1;function sn(n,r,o,u){r.child=n===null?ay(r,null,o,u):ua(r,n.child,o,u)}function nv(n,r,o,u,f){o=o.render;var p=r.ref;if("ref"in u){var v={};for(var A in u)A!=="ref"&&(v[A]=u[A])}else v=u;return ma(r),u=Ud(n,r,o,v,p,f),A=jd(),n!==null&&!Kt?(Bd(n,r,f),ds(n,r,f)):(Ze&&A&&Id(r),r.flags|=1,sn(n,r,u,f),r.child)}function iv(n,r,o,u,f){if(n===null){var p=o.type;return typeof p=="function"&&!wp(p)&&p.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=p,sv(n,r,p,u,f)):(n=gh(o.type,null,u,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!cp(n,f)){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:Ul,o(v,u)&&n.ref===r.ref)return ds(n,r,f)}return r.flags|=1,n=cr(p,u),n.ref=r.ref,n.return=r,r.child=n}function sv(n,r,o,u,f){if(n!==null){var p=n.memoizedProps;if(Ul(p,u)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=u=p,cp(n,f))(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,ds(n,r,f)}return np(n,r,o,u,f)}function rv(n,r,o){var u=r.pendingProps,f=u.children,p=(r.stateNode._pendingVisibility&2)!==0,v=n!==null?n.memoizedState:null;if(Zl(n,r),u.mode==="hidden"||p){if((r.flags&128)!==0){if(u=v!==null?v.baseLanes|o:o,n!==null){for(f=r.child=n.child,p=0;f!==null;)p=p|f.lanes|f.childLanes,f=f.sibling;r.childLanes=p&~u}else r.childLanes=0,r.child=null;return av(n,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&nh(r,v!==null?v.cachePool:null),v!==null?oy(r,v):xd(),ly(r);else return r.lanes=r.childLanes=536870912,av(n,r,v!==null?v.baseLanes|o:o,o)}else v!==null?(nh(r,v.cachePool),oy(r,v),er(),r.memoizedState=null):(n!==null&&nh(r,null),xd(),er());return sn(n,r,f,o),r.child}function av(n,r,o,u){var f=Vd();return f=f===null?null:{parent:Ut._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},n!==null&&nh(r,null),xd(),ly(r),n!==null&&Jl(n,r,u,!0),null}function Zl(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=2097664);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(n===null||n.ref!==o)&&(r.flags|=2097664)}}function np(n,r,o,u,f){return ma(r),o=Ud(n,r,o,u,void 0,f),u=jd(),n!==null&&!Kt?(Bd(n,r,f),ds(n,r,f)):(Ze&&u&&Id(r),r.flags|=1,sn(n,r,o,f),r.child)}function ov(n,r,o,u,f,p){return ma(r),r.updateQueue=null,o=dy(r,u,o,f),fy(n),u=jd(),n!==null&&!Kt?(Bd(n,r,p),ds(n,r,p)):(Ze&&u&&Id(r),r.flags|=1,sn(n,r,o,p),r.child)}function lv(n,r,o,u,f){if(ma(r),r.stateNode===null){var p=uo,v=o.contextType;typeof v=="object"&&v!==null&&(p=pn(v)),p=new o(u,p),r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=ep,r.stateNode=p,p._reactInternals=r,p=r.stateNode,p.props=u,p.state=r.memoizedState,p.refs={},pp(r),v=o.contextType,p.context=typeof v=="object"&&v!==null?pn(v):uo,p.state=r.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Jd(r,o,v,u),p.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(v=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),v!==p.state&&ep.enqueueReplaceState(p,p.state,null),nu(r,u,p,f),tu(),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){p=r.stateNode;var A=r.memoizedProps,D=pa(o,A);p.props=D;var L=p.context,Q=o.contextType;v=uo,typeof Q=="object"&&Q!==null&&(v=pn(Q));var te=o.getDerivedStateFromProps;Q=typeof te=="function"||typeof p.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,Q||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(A||L!==v)&&Qy(r,p,u,v),sr=!1;var q=r.memoizedState;p.state=q,nu(r,u,p,f),tu(),L=r.memoizedState,A||q!==L||sr?(typeof te=="function"&&(Jd(r,o,te,u),L=r.memoizedState),(D=sr||Wy(r,o,D,u,q,L,v))?(Q||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=L),p.props=u,p.state=L,p.context=v,u=D):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{p=r.stateNode,_p(n,r),v=r.memoizedProps,Q=pa(o,v),p.props=Q,te=r.pendingProps,q=p.context,L=o.contextType,D=uo,typeof L=="object"&&L!==null&&(D=pn(L)),A=o.getDerivedStateFromProps,(L=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(v!==te||q!==D)&&Qy(r,p,u,D),sr=!1,q=r.memoizedState,p.state=q,nu(r,u,p,f),tu();var W=r.memoizedState;v!==te||q!==W||sr||n!==null&&n.dependencies!==null&&dh(n.dependencies)?(typeof A=="function"&&(Jd(r,o,A,u),W=r.memoizedState),(Q=sr||Wy(r,o,Q,u,q,W,D)||n!==null&&n.dependencies!==null&&dh(n.dependencies))?(L||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,W,D),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,W,D)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||v===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=W),p.props=u,p.state=W,p.context=D,u=Q):(typeof p.componentDidUpdate!="function"||v===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),u=!1)}return p=u,Zl(n,r),u=(r.flags&128)!==0,p||u?(p=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),r.flags|=1,n!==null&&u?(r.child=ua(r,n.child,null,f),r.child=ua(r,null,o,f)):sn(n,r,o,f),r.memoizedState=p.state,n=r.child):n=ds(n,r,f),n}function uv(n,r,o,u){return zl(),r.flags|=256,sn(n,r,o,u),r.child}var ip={dehydrated:null,treeContext:null,retryLane:0};function sp(n){return{baseLanes:n,cachePool:hy()}}function rp(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=ui),n}function cv(n,r,o){var u=r.pendingProps,f=!1,p=(r.flags&128)!==0,v;if((v=p)||(v=n!==null&&n.memoizedState===null?!1:(Lt.current&2)!==0),v&&(f=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,n===null){if(Ze){if(f?Js(r):er(),Ze){var A=nn,D;if(D=A){e:{for(D=A,A=Pi;D.nodeType!==8;){if(!A){A=null;break e}if(D=yi(D.nextSibling),D===null){A=null;break e}}A=D}A!==null?(r.memoizedState={dehydrated:A,treeContext:aa!==null?{id:us,overflow:cs}:null,retryLane:536870912},D=li(18,null,null,0),D.stateNode=A,D.return=r,r.child=D,Rn=r,nn=null,D=!0):D=!1}D||la(r)}if(A=r.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?r.lanes=16:r.lanes=536870912,null;hs(r)}return A=u.children,u=u.fallback,f?(er(),f=r.mode,A=op({mode:"hidden",children:A},f),u=ya(u,f,o,null),A.return=r,u.return=r,A.sibling=u,r.child=A,f=r.child,f.memoizedState=sp(o),f.childLanes=rp(n,v,o),r.memoizedState=ip,u):(Js(r),ap(r,A))}if(D=n.memoizedState,D!==null&&(A=D.dehydrated,A!==null)){if(p)r.flags&256?(Js(r),r.flags&=-257,r=lp(n,r,o)):r.memoizedState!==null?(er(),r.child=n.child,r.flags|=128,r=null):(er(),f=u.fallback,A=r.mode,u=op({mode:"visible",children:u.children},A),f=ya(f,A,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,ua(r,n.child,null,o),u=r.child,u.memoizedState=sp(o),u.childLanes=rp(n,v,o),r.memoizedState=ip,r=f);else if(Js(r),A.data==="$!"){if(v=A.nextSibling&&A.nextSibling.dataset,v)var L=v.dgst;v=L,u=Error(s(419)),u.stack="",u.digest=v,Hl({value:u,source:null,stack:null}),r=lp(n,r,o)}else if(Kt||Jl(n,r,o,!1),v=(o&n.childLanes)!==0,Kt||v){if(v=ht,v!==null){if(u=o&-o,(u&42)!==0)u=1;else switch(u){case 2:u=1;break;case 8:u=4;break;case 32:u=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:u=64;break;case 268435456:u=134217728;break;default:u=0}if(u=(u&(v.suspendedLanes|o))!==0?0:u,u!==0&&u!==D.retryLane)throw D.retryLane=u,Zs(n,u),In(v,n,u),tv}A.data==="$?"||Vp(),r=lp(n,r,o)}else A.data==="$?"?(r.flags|=128,r.child=n.child,r=_C.bind(null,n),A._reactRetry=r,r=null):(n=D.treeContext,nn=yi(A.nextSibling),Rn=r,Ze=!0,mi=null,Pi=!1,n!==null&&(ii[si++]=us,ii[si++]=cs,ii[si++]=aa,us=n.id,cs=n.overflow,aa=r),r=ap(r,u.children),r.flags|=4096);return r}return f?(er(),f=u.fallback,A=r.mode,D=n.child,L=D.sibling,u=cr(D,{mode:"hidden",children:u.children}),u.subtreeFlags=D.subtreeFlags&31457280,L!==null?f=cr(L,f):(f=ya(f,A,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,A=n.child.memoizedState,A===null?A=sp(o):(D=A.cachePool,D!==null?(L=Ut._currentValue,D=D.parent!==L?{parent:L,pool:L}:D):D=hy(),A={baseLanes:A.baseLanes|o,cachePool:D}),f.memoizedState=A,f.childLanes=rp(n,v,o),r.memoizedState=ip,u):(Js(r),o=n.child,n=o.sibling,o=cr(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(v=r.deletions,v===null?(r.deletions=[n],r.flags|=16):v.push(n)),r.child=o,r.memoizedState=null,o)}function ap(n,r){return r=op({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function op(n,r){return Vv(n,r,0,null)}function lp(n,r,o){return ua(r,n.child,null,o),n=ap(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function hv(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),fp(n.return,r,o)}function up(n,r,o,u,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function fv(n,r,o){var u=r.pendingProps,f=u.revealOrder,p=u.tail;if(sn(n,r,u.children,o),u=Lt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&hv(n,o,r);else if(n.tag===19)hv(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(Re(Lt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)n=o.alternate,n!==null&&th(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),up(r,!1,f,o,p);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&th(n)===null){r.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}up(r,!0,o,null,p);break;case"together":up(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ds(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),hr|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(Jl(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,o=cr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=cr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function cp(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&dh(n)))}function tC(n,r,o){switch(r.tag){case 3:Ai(r,r.stateNode.containerInfo),ir(r,Ut,n.memoizedState.cache),zl();break;case 27:case 5:Xi(r);break;case 4:Ai(r,r.stateNode.containerInfo);break;case 10:ir(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Js(r),r.flags|=128,null):(o&r.child.childLanes)!==0?cv(n,r,o):(Js(r),n=ds(n,r,o),n!==null?n.sibling:null);Js(r);break;case 19:var f=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Jl(n,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return fv(n,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Re(Lt,Lt.current),u)break;return null;case 22:case 23:return r.lanes=0,rv(n,r,o);case 24:ir(r,Ut,n.memoizedState.cache)}return ds(n,r,o)}function dv(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)Kt=!0;else{if(!cp(n,o)&&(r.flags&128)===0)return Kt=!1,tC(n,r,o);Kt=(n.flags&131072)!==0}else Kt=!1,Ze&&(r.flags&1048576)!==0&&Xg(r,$c,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")wp(u)?(n=pa(u,n),r.tag=1,r=lv(null,r,u,n,o)):(r.tag=0,r=np(null,r,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===H){r.tag=11,r=nv(null,r,u,n,o);break e}else if(f===Y){r.tag=14,r=iv(null,r,u,n,o);break e}}throw r=I(u)||u,Error(s(306,r,""))}}return r;case 0:return np(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=pa(u,r.pendingProps),lv(n,r,u,f,o);case 3:e:{if(Ai(r,r.stateNode.containerInfo),n===null)throw Error(s(387));var p=r.pendingProps;f=r.memoizedState,u=f.element,_p(n,r),nu(r,p,null,o);var v=r.memoizedState;if(p=v.cache,ir(r,Ut,p),p!==f.cache&&dp(r,[Ut],o,!0),tu(),p=v.element,f.isDehydrated)if(f={element:p,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=uv(n,r,p,o);break e}else if(p!==u){u=ni(Error(s(424)),r),Hl(u),r=uv(n,r,p,o);break e}else for(nn=yi(r.stateNode.containerInfo.firstChild),Rn=r,Ze=!0,mi=null,Pi=!0,o=ay(r,null,p,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(zl(),p===u){r=ds(n,r,o);break e}sn(n,r,p,o)}r=r.child}return r;case 26:return Zl(n,r),n===null?(o=mE(r.type,null,r.pendingProps,null))?r.memoizedState=o:Ze||(o=r.type,n=r.pendingProps,u=Nh(fn.current).createElement(o),u[Ft]=r,u[Mt]=n,rn(u,o,n),gt(u),r.stateNode=u):r.memoizedState=mE(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Xi(r),n===null&&Ze&&(u=r.stateNode=dE(r.type,r.pendingProps,fn.current),Rn=r,Pi=!0,nn=yi(u.firstChild)),u=r.pendingProps.children,n!==null||Ze?sn(n,r,u,o):r.child=ua(r,null,u,o),Zl(n,r),r.child;case 5:return n===null&&Ze&&((f=u=nn)&&(u=OC(u,r.type,r.pendingProps,Pi),u!==null?(r.stateNode=u,Rn=r,nn=yi(u.firstChild),Pi=!1,f=!0):f=!1),f||la(r)),Xi(r),f=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,u=p.children,$p(f,p)?u=null:v!==null&&$p(f,v)&&(r.flags|=32),r.memoizedState!==null&&(f=Ud(n,r,Qb,null,null,o),gu._currentValue=f),Zl(n,r),sn(n,r,u,o),r.child;case 6:return n===null&&Ze&&((n=o=nn)&&(o=xC(o,r.pendingProps,Pi),o!==null?(r.stateNode=o,Rn=r,nn=null,n=!0):n=!1),n||la(r)),null;case 13:return cv(n,r,o);case 4:return Ai(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=ua(r,null,u,o):sn(n,r,u,o),r.child;case 11:return nv(n,r,r.type,r.pendingProps,o);case 7:return sn(n,r,r.pendingProps,o),r.child;case 8:return sn(n,r,r.pendingProps.children,o),r.child;case 12:return sn(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,ir(r,r.type,u.value),sn(n,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ma(r),f=pn(f),u=u(f),r.flags|=1,sn(n,r,u,o),r.child;case 14:return iv(n,r,r.type,r.pendingProps,o);case 15:return sv(n,r,r.type,r.pendingProps,o);case 19:return fv(n,r,o);case 22:return rv(n,r,o);case 24:return ma(r),u=pn(Ut),n===null?(f=Vd(),f===null&&(f=ht,p=Md(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=o),f=p),r.memoizedState={parent:u,cache:f},pp(r),ir(r,Ut,f)):((n.lanes&o)!==0&&(_p(n,r),nu(r,null,null,o),tu()),f=n.memoizedState,p=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),ir(r,Ut,u)):(u=p.cache,ir(r,Ut,u),u!==f.cache&&dp(r,[Ut],o,!0))),sn(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}var hp=Ne(null),_a=null,ps=null;function ir(n,r,o){Re(hp,r._currentValue),r._currentValue=o}function _s(n){n._currentValue=hp.current,Oe(hp)}function fp(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function dp(n,r,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var p=f.dependencies;if(p!==null){var v=f.child;p=p.firstContext;e:for(;p!==null;){var A=p;p=f;for(var D=0;D<r.length;D++)if(A.context===r[D]){p.lanes|=o,A=p.alternate,A!==null&&(A.lanes|=o),fp(p.return,o,n),u||(v=null);break e}p=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(s(341));v.lanes|=o,p=v.alternate,p!==null&&(p.lanes|=o),fp(v,o,n),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===n){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Jl(n,r,o,u){n=null;for(var f=r,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var A=f.type;Un(f.pendingProps.value,v.value)||(n!==null?n.push(A):n=[A])}}else if(f===Pn.current){if(v=f.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(gu):n=[gu])}f=f.return}n!==null&&dp(r,n,o,u),r.flags|=262144}function dh(n){for(n=n.firstContext;n!==null;){if(!Un(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ma(n){_a=n,ps=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function pn(n){return pv(_a,n)}function ph(n,r){return _a===null&&ma(n),pv(n,r)}function pv(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},ps===null){if(n===null)throw Error(s(308));ps=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else ps=ps.next=r;return o}var sr=!1;function pp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _p(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function rr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ar(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(vt&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=Qc(n),Yg(n,null,o),r}return Wc(n,u,r,o),Qc(n)}function eu(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194176)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Hs(n,o)}}function mp(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?f=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?f=p=r:p=p.next=r}else f=p=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var gp=!1;function tu(){if(gp){var n=mo;if(n!==null)throw n}}function nu(n,r,o,u){gp=!1;var f=n.updateQueue;sr=!1;var p=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var D=A,L=D.next;D.next=null,v===null?p=L:v.next=L,v=D;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,A=Q.lastBaseUpdate,A!==v&&(A===null?Q.firstBaseUpdate=L:A.next=L,Q.lastBaseUpdate=D))}if(p!==null){var te=f.baseState;v=0,Q=L=D=null,A=p;do{var q=A.lane&-536870913,W=q!==A.lane;if(W?(Ke&q)===q:(u&q)===q){q!==0&&q===_o&&(gp=!0),Q!==null&&(Q=Q.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Te=n,xe=A;q=r;var wt=o;switch(xe.tag){case 1:if(Te=xe.payload,typeof Te=="function"){te=Te.call(wt,te,q);break e}te=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=xe.payload,q=typeof Te=="function"?Te.call(wt,te,q):Te,q==null)break e;te=R({},te,q);break e;case 2:sr=!0}}q=A.callback,q!==null&&(n.flags|=64,W&&(n.flags|=8192),W=f.callbacks,W===null?f.callbacks=[q]:W.push(q))}else W={lane:q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Q===null?(L=Q=W,D=te):Q=Q.next=W,v|=q;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;W=A,A=W.next,W.next=null,f.lastBaseUpdate=W,f.shared.pending=null}}while(!0);Q===null&&(D=te),f.baseState=D,f.firstBaseUpdate=L,f.lastBaseUpdate=Q,p===null&&(f.shared.lanes=0),hr|=v,n.lanes=v,n.memoizedState=te}}function _v(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function mv(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)_v(o[n],r)}function iu(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var p=o.create,v=o.inst;u=p(),v.destroy=u}o=o.next}while(o!==f)}}catch(A){ut(r,r.return,A)}}function or(n,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var p=f.next;u=p;do{if((u.tag&n)===n){var v=u.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=r;var D=o;try{A()}catch(L){ut(f,D,L)}}}u=u.next}while(u!==p)}}catch(L){ut(r,r.return,L)}}function gv(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{mv(r,o)}catch(u){ut(n,n.return,u)}}}function yv(n,r,o){o.props=pa(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){ut(n,r,u)}}function ga(n,r){try{var o=n.ref;if(o!==null){var u=n.stateNode;switch(n.tag){case 26:case 27:case 5:var f=u;break;default:f=u}typeof o=="function"?n.refCleanup=o(f):o.current=f}}catch(p){ut(n,r,p)}}function jn(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){ut(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ut(n,r,f)}else o.current=null}function vv(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){ut(n,n.return,f)}}function Ev(n,r,o){try{var u=n.stateNode;CC(u,n.type,o,r),u[Mt]=r}catch(f){ut(n,n.return,f)}}function Tv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function yp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Tv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vp(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Ih));else if(u!==4&&u!==27&&(n=n.child,n!==null))for(vp(n,r,o),n=n.sibling;n!==null;)vp(n,r,o),n=n.sibling}function _h(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&u!==27&&(n=n.child,n!==null))for(_h(n,r,o),n=n.sibling;n!==null;)_h(n,r,o),n=n.sibling}var ms=!1,St=!1,Ep=!1,Sv=typeof WeakSet=="function"?WeakSet:Set,Wt=null,Av=!1;function nC(n,r){if(n=n.containerInfo,Qp=Ph,n=Bg(n),Sd(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,A=-1,D=-1,L=0,Q=0,te=n,q=null;t:for(;;){for(var W;te!==o||f!==0&&te.nodeType!==3||(A=v+f),te!==p||u!==0&&te.nodeType!==3||(D=v+u),te.nodeType===3&&(v+=te.nodeValue.length),(W=te.firstChild)!==null;)q=te,te=W;for(;;){if(te===n)break t;if(q===o&&++L===f&&(A=v),q===p&&++Q===u&&(D=v),(W=te.nextSibling)!==null)break;te=q,q=te.parentNode}te=W}o=A===-1||D===-1?null:{start:A,end:D}}else o=null}o=o||{start:0,end:0}}else o=null;for(Yp={focusedElem:n,selectionRange:o},Ph=!1,Wt=r;Wt!==null;)if(r=Wt,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Wt=n;else for(;Wt!==null;){switch(r=Wt,p=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&p!==null){n=void 0,o=r,f=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var Te=pa(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(Te,p),u.__reactInternalSnapshotBeforeUpdate=n}catch(xe){ut(o,o.return,xe)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)Jp(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Jp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,Wt=n;break}Wt=r.return}return Te=Av,Av=!1,Te}function wv(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:ys(n,o),u&4&&iu(5,o);break;case 1:if(ys(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(A){ut(o,o.return,A)}else{var f=pa(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(A){ut(o,o.return,A)}}u&64&&gv(o),u&512&&ga(o,o.return);break;case 3:if(ys(n,o),u&64&&(u=o.updateQueue,u!==null)){if(n=null,o.child!==null)switch(o.child.tag){case 27:case 5:n=o.child.stateNode;break;case 1:n=o.child.stateNode}try{mv(u,n)}catch(A){ut(o,o.return,A)}}break;case 26:ys(n,o),u&512&&ga(o,o.return);break;case 27:case 5:ys(n,o),r===null&&u&4&&vv(o),u&512&&ga(o,o.return);break;case 12:ys(n,o);break;case 13:ys(n,o),u&4&&Rv(n,o);break;case 22:if(f=o.memoizedState!==null||ms,!f){r=r!==null&&r.memoizedState!==null||St;var p=ms,v=St;ms=f,(St=r)&&!v?lr(n,o,(o.subtreeFlags&8772)!==0):ys(n,o),ms=p,St=v}u&512&&(o.memoizedProps.mode==="manual"?ga(o,o.return):jn(o,o.return));break;default:ys(n,o)}}function bv(n){var r=n.alternate;r!==null&&(n.alternate=null,bv(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Wr(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var xt=null,Bn=!1;function gs(n,r,o){for(o=o.child;o!==null;)Cv(n,r,o),o=o.sibling}function Cv(n,r,o){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Ls,o)}catch{}switch(o.tag){case 26:St||jn(o,r),gs(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:St||jn(o,r);var u=xt,f=Bn;for(xt=o.stateNode,gs(n,r,o),o=o.stateNode,r=o.attributes;r.length;)o.removeAttributeNode(r[0]);Wr(o),xt=u,Bn=f;break;case 5:St||jn(o,r);case 6:f=xt;var p=Bn;if(xt=null,gs(n,r,o),xt=f,Bn=p,xt!==null)if(Bn)try{n=xt,u=o.stateNode,n.nodeType===8?n.parentNode.removeChild(u):n.removeChild(u)}catch(v){ut(o,r,v)}else try{xt.removeChild(o.stateNode)}catch(v){ut(o,r,v)}break;case 18:xt!==null&&(Bn?(r=xt,o=o.stateNode,r.nodeType===8?Zp(r.parentNode,o):r.nodeType===1&&Zp(r,o),Tu(r)):Zp(xt,o.stateNode));break;case 4:u=xt,f=Bn,xt=o.stateNode.containerInfo,Bn=!0,gs(n,r,o),xt=u,Bn=f;break;case 0:case 11:case 14:case 15:St||or(2,o,r),St||or(4,o,r),gs(n,r,o);break;case 1:St||(jn(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&yv(o,r,u)),gs(n,r,o);break;case 21:gs(n,r,o);break;case 22:St||jn(o,r),St=(u=St)||o.memoizedState!==null,gs(n,r,o),St=u;break;default:gs(n,r,o)}}function Rv(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Tu(n)}catch(o){ut(r,r.return,o)}}function iC(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Sv),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Sv),r;default:throw Error(s(435,n.tag))}}function Tp(n,r){var o=iC(n);r.forEach(function(u){var f=mC.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function ai(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],p=n,v=r,A=v;e:for(;A!==null;){switch(A.tag){case 27:case 5:xt=A.stateNode,Bn=!1;break e;case 3:xt=A.stateNode.containerInfo,Bn=!0;break e;case 4:xt=A.stateNode.containerInfo,Bn=!0;break e}A=A.return}if(xt===null)throw Error(s(160));Cv(p,v,f),xt=null,Bn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Iv(r,n),r=r.sibling}var gi=null;function Iv(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ai(r,n),oi(n),u&4&&(or(3,n,n.return),iu(3,n),or(5,n,n.return));break;case 1:ai(r,n),oi(n),u&512&&(St||o===null||jn(o,o.return)),u&64&&ms&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=gi;if(ai(r,n),oi(n),u&512&&(St||o===null||jn(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":p=f.getElementsByTagName("title")[0],(!p||p[qs]||p[Ft]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(u),f.head.insertBefore(p,f.querySelector("head > title"))),rn(p,u,o),p[Ft]=n,gt(p),u=p;break e;case"link":var v=vE("link","href",f).get(u+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(p=v[A],p.getAttribute("href")===(o.href==null?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}p=f.createElement(u),rn(p,u,o),f.head.appendChild(p);break;case"meta":if(v=vE("meta","content",f).get(u+(o.content||""))){for(A=0;A<v.length;A++)if(p=v[A],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}p=f.createElement(u),rn(p,u,o),f.head.appendChild(p);break;default:throw Error(s(468,u))}p[Ft]=n,gt(p),u=p}n.stateNode=u}else EE(f,n.type,n.stateNode);else n.stateNode=yE(f,u,n.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?EE(f,n.type,n.stateNode):yE(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Ev(n,n.memoizedProps,o.memoizedProps)}break;case 27:if(u&4&&n.alternate===null){f=n.stateNode,p=n.memoizedProps;try{for(var D=f.firstChild;D;){var L=D.nextSibling,Q=D.nodeName;D[qs]||Q==="HEAD"||Q==="BODY"||Q==="SCRIPT"||Q==="STYLE"||Q==="LINK"&&D.rel.toLowerCase()==="stylesheet"||f.removeChild(D),D=L}for(var te=n.type,q=f.attributes;q.length;)f.removeAttributeNode(q[0]);rn(f,te,p),f[Ft]=n,f[Mt]=p}catch(Te){ut(n,n.return,Te)}}case 5:if(ai(r,n),oi(n),u&512&&(St||o===null||jn(o,o.return)),n.flags&32){f=n.stateNode;try{Xn(f,"")}catch(Te){ut(n,n.return,Te)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,Ev(n,f,o!==null?o.memoizedProps:f)),u&1024&&(Ep=!0);break;case 6:if(ai(r,n),oi(n),u&4){if(n.stateNode===null)throw Error(s(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(Te){ut(n,n.return,Te)}}break;case 3:if(xh=null,f=gi,gi=Dh(r.containerInfo),ai(r,n),gi=f,oi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Tu(r.containerInfo)}catch(Te){ut(n,n.return,Te)}Ep&&(Ep=!1,Nv(n));break;case 4:u=gi,gi=Dh(n.stateNode.containerInfo),ai(r,n),oi(n),gi=u;break;case 12:ai(r,n),oi(n);break;case 13:ai(r,n),oi(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Dp=en()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Tp(n,u)));break;case 22:if(u&512&&(St||o===null||jn(o,o.return)),D=n.memoizedState!==null,L=o!==null&&o.memoizedState!==null,Q=ms,te=St,ms=Q||D,St=te||L,ai(r,n),St=te,ms=Q,oi(n),r=n.stateNode,r._current=n,r._visibility&=-3,r._visibility|=r._pendingVisibility&2,u&8192&&(r._visibility=D?r._visibility&-2:r._visibility|1,D&&(r=ms||St,o===null||L||r||Eo(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))e:for(o=null,r=n;;){if(r.tag===5||r.tag===26||r.tag===27){if(o===null){L=o=r;try{if(f=L.stateNode,D)p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{v=L.stateNode,A=L.memoizedProps.style;var W=A!=null&&A.hasOwnProperty("display")?A.display:null;v.style.display=W==null||typeof W=="boolean"?"":(""+W).trim()}}catch(Te){ut(L,L.return,Te)}}}else if(r.tag===6){if(o===null){L=r;try{L.stateNode.nodeValue=D?"":L.memoizedProps}catch(Te){ut(L,L.return,Te)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Tp(n,o))));break;case 19:ai(r,n),oi(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Tp(n,u)));break;case 21:break;default:ai(r,n),oi(n)}}function oi(n){var r=n.flags;if(r&2){try{if(n.tag!==27){e:{for(var o=n.return;o!==null;){if(Tv(o)){var u=o;break e}o=o.return}throw Error(s(160))}switch(u.tag){case 27:var f=u.stateNode,p=yp(n);_h(n,p,f);break;case 5:var v=u.stateNode;u.flags&32&&(Xn(v,""),u.flags&=-33);var A=yp(n);_h(n,A,v);break;case 3:case 4:var D=u.stateNode.containerInfo,L=yp(n);vp(n,L,D);break;default:throw Error(s(161))}}}catch(Q){ut(n,n.return,Q)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Nv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Nv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function ys(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)wv(n,r.alternate,r),r=r.sibling}function Eo(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:or(4,r,r.return),Eo(r);break;case 1:jn(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&yv(r,r.return,o),Eo(r);break;case 26:case 27:case 5:jn(r,r.return),Eo(r);break;case 22:jn(r,r.return),r.memoizedState===null&&Eo(r);break;default:Eo(r)}n=n.sibling}}function lr(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=n,p=r,v=p.flags;switch(p.tag){case 0:case 11:case 15:lr(f,p,o),iu(4,p);break;case 1:if(lr(f,p,o),u=p,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(L){ut(u,u.return,L)}if(u=p,f=u.updateQueue,f!==null){var A=u.stateNode;try{var D=f.shared.hiddenCallbacks;if(D!==null)for(f.shared.hiddenCallbacks=null,f=0;f<D.length;f++)_v(D[f],A)}catch(L){ut(u,u.return,L)}}o&&v&64&&gv(p),ga(p,p.return);break;case 26:case 27:case 5:lr(f,p,o),o&&u===null&&v&4&&vv(p),ga(p,p.return);break;case 12:lr(f,p,o);break;case 13:lr(f,p,o),o&&v&4&&Rv(f,p);break;case 22:p.memoizedState===null&&lr(f,p,o),ga(p,p.return);break;default:lr(f,p,o)}r=r.sibling}}function Sp(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Wl(o))}function Ap(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Wl(n))}function ur(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Dv(n,r,o,u),r=r.sibling}function Dv(n,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:ur(n,r,o,u),f&2048&&iu(9,r);break;case 3:ur(n,r,o,u),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Wl(n)));break;case 12:if(f&2048){ur(n,r,o,u),n=r.stateNode;try{var p=r.memoizedProps,v=p.id,A=p.onPostCommit;typeof A=="function"&&A(v,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(D){ut(r,r.return,D)}}else ur(n,r,o,u);break;case 23:break;case 22:p=r.stateNode,r.memoizedState!==null?p._visibility&4?ur(n,r,o,u):su(n,r):p._visibility&4?ur(n,r,o,u):(p._visibility|=4,To(n,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&Sp(r.alternate,r);break;case 24:ur(n,r,o,u),f&2048&&Ap(r.alternate,r);break;default:ur(n,r,o,u)}}function To(n,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var p=n,v=r,A=o,D=u,L=v.flags;switch(v.tag){case 0:case 11:case 15:To(p,v,A,D,f),iu(8,v);break;case 23:break;case 22:var Q=v.stateNode;v.memoizedState!==null?Q._visibility&4?To(p,v,A,D,f):su(p,v):(Q._visibility|=4,To(p,v,A,D,f)),f&&L&2048&&Sp(v.alternate,v);break;case 24:To(p,v,A,D,f),f&&L&2048&&Ap(v.alternate,v);break;default:To(p,v,A,D,f)}r=r.sibling}}function su(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,f=u.flags;switch(u.tag){case 22:su(o,u),f&2048&&Sp(u.alternate,u);break;case 24:su(o,u),f&2048&&Ap(u.alternate,u);break;default:su(o,u)}r=r.sibling}}var ru=8192;function So(n){if(n.subtreeFlags&ru)for(n=n.child;n!==null;)Ov(n),n=n.sibling}function Ov(n){switch(n.tag){case 26:So(n),n.flags&ru&&n.memoizedState!==null&&GC(gi,n.memoizedState,n.memoizedProps);break;case 5:So(n);break;case 3:case 4:var r=gi;gi=Dh(n.stateNode.containerInfo),So(n),gi=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=ru,ru=16777216,So(n),ru=r):So(n));break;default:So(n)}}function xv(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function au(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Wt=u,Mv(u,n)}xv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)kv(n),n=n.sibling}function kv(n){switch(n.tag){case 0:case 11:case 15:au(n),n.flags&2048&&or(9,n,n.return);break;case 3:au(n);break;case 12:au(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&4&&(n.return===null||n.return.tag!==13)?(r._visibility&=-5,mh(n)):au(n);break;default:au(n)}}function mh(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Wt=u,Mv(u,n)}xv(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:or(8,r,r.return),mh(r);break;case 22:o=r.stateNode,o._visibility&4&&(o._visibility&=-5,mh(r));break;default:mh(r)}n=n.sibling}}function Mv(n,r){for(;Wt!==null;){var o=Wt;switch(o.tag){case 0:case 11:case 15:or(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Wl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Wt=u;else e:for(o=n;Wt!==null;){u=Wt;var f=u.sibling,p=u.return;if(bv(u),u===o){Wt=null;break e}if(f!==null){f.return=p,Wt=f;break e}Wt=p}}}function sC(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,r,o,u){return new sC(n,r,o,u)}function wp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function cr(n,r){var o=n.alternate;return o===null?(o=li(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&31457280,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function Pv(n,r){n.flags&=31457282;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function gh(n,r,o,u,f,p){var v=0;if(u=n,typeof n=="function")wp(n)&&(v=1);else if(typeof n=="string")v=FC(n,o,Zt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case _:return ya(o.children,f,p,r);case m:v=8,f|=24;break;case E:return n=li(12,o,r,f|2),n.elementType=E,n.lanes=p,n;case X:return n=li(13,o,r,f),n.elementType=X,n.lanes=p,n;case F:return n=li(19,o,r,f),n.elementType=F,n.lanes=p,n;case ue:return Vv(o,f,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:case V:v=10;break e;case C:v=9;break e;case H:v=11;break e;case Y:v=14;break e;case ee:v=16,u=null;break e}v=29,o=Error(s(130,n===null?"null":typeof n,"")),u=null}return r=li(v,o,r,f),r.elementType=n,r.type=u,r.lanes=p,r}function ya(n,r,o,u){return n=li(7,n,u,r),n.lanes=o,n}function Vv(n,r,o,u){n=li(22,n,u,r),n.elementType=ue,n.lanes=o;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var p=f._current;if(p===null)throw Error(s(456));if((f._pendingVisibility&2)===0){var v=Zs(p,2);v!==null&&(f._pendingVisibility|=2,In(v,p,2))}},attach:function(){var p=f._current;if(p===null)throw Error(s(456));if((f._pendingVisibility&2)!==0){var v=Zs(p,2);v!==null&&(f._pendingVisibility&=-3,In(v,p,2))}}};return n.stateNode=f,n}function bp(n,r,o){return n=li(6,n,null,r),n.lanes=o,n}function Cp(n,r,o){return r=li(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function vs(n){n.flags|=4}function Lv(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!TE(r)){if(r=ri.current,r!==null&&((Ke&4194176)===Ke?Vi!==null:(Ke&62914560)!==Ke&&(Ke&536870912)===0||r!==Vi))throw ql=Od,ey;n.flags|=8192}}function yh(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?Bs():536870912,n.lanes|=r,wo|=r)}function ou(n,r){if(!Ze)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function yt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&31457280,u|=f.flags&31457280,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function rC(n,r,o){var u=r.pendingProps;switch(Nd(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(r),null;case 1:return yt(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),_s(Ut),Qn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Bl(r)?vs(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,mi!==null&&(Mp(mi),mi=null))),yt(r),null;case 26:return o=r.memoizedState,n===null?(vs(r),o!==null?(yt(r),Lv(r,o)):(yt(r),r.flags&=-16777217)):o?o!==n.memoizedState?(vs(r),yt(r),Lv(r,o)):(yt(r),r.flags&=-16777217):(n.memoizedProps!==u&&vs(r),yt(r),r.flags&=-16777217),null;case 27:K(r),o=fn.current;var f=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&vs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return yt(r),null}n=Zt.current,Bl(r)?Zg(r):(n=dE(f,u,o),r.stateNode=n,vs(r))}return yt(r),null;case 5:if(K(r),o=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&vs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return yt(r),null}if(n=Zt.current,Bl(r))Zg(r);else{switch(f=Nh(fn.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[Ft]=r,n[Mt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=n;e:switch(rn(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&vs(r)}}return yt(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&vs(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(n=fn.current,Bl(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,f=Rn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[Ft]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||oE(n.nodeValue,o)),n||la(r)}else n=Nh(n).createTextNode(u),n[Ft]=r,r.stateNode=n}return yt(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Bl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Ft]=r}else zl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;yt(r),f=!1}else mi!==null&&(Mp(mi),mi=null),f=!0;if(!f)return r.flags&256?(hs(r),r):(hs(r),null)}if(hs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==f&&(u.flags|=2048)}return o!==n&&o&&(r.child.flags|=8192),yh(r,r.updateQueue),yt(r),null;case 4:return Qn(),n===null&&Gp(r.stateNode.containerInfo),yt(r),null;case 10:return _s(r.type),yt(r),null;case 19:if(Oe(Lt),f=r.memoizedState,f===null)return yt(r),null;if(u=(r.flags&128)!==0,p=f.rendering,p===null)if(u)ou(f,!1);else{if(At!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(p=th(n),p!==null){for(r.flags|=128,ou(f,!1),n=p.updateQueue,r.updateQueue=n,yh(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)Pv(o,n),o=o.sibling;return Re(Lt,Lt.current&1|2),r.child}n=n.sibling}f.tail!==null&&en()>vh&&(r.flags|=128,u=!0,ou(f,!1),r.lanes=4194304)}else{if(!u)if(n=th(p),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,yh(r,n),ou(f,!0),f.tail===null&&f.tailMode==="hidden"&&!p.alternate&&!Ze)return yt(r),null}else 2*en()-f.renderingStartTime>vh&&o!==536870912&&(r.flags|=128,u=!0,ou(f,!1),r.lanes=4194304);f.isBackwards?(p.sibling=r.child,r.child=p):(n=f.last,n!==null?n.sibling=p:r.child=p,f.last=p)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=en(),r.sibling=null,n=Lt.current,Re(Lt,u?n&1|2:n&1),r):(yt(r),null);case 22:case 23:return hs(r),kd(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(yt(r),r.subtreeFlags&6&&(r.flags|=8192)):yt(r),o=r.updateQueue,o!==null&&yh(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&Oe(ca),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),_s(Ut),yt(r),null;case 25:return null}throw Error(s(156,r.tag))}function aC(n,r){switch(Nd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return _s(Ut),Qn(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return K(r),null;case 13:if(hs(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));zl()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Oe(Lt),null;case 4:return Qn(),null;case 10:return _s(r.type),null;case 22:case 23:return hs(r),kd(),n!==null&&Oe(ca),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return _s(Ut),null;case 25:return null;default:return null}}function Uv(n,r){switch(Nd(r),r.tag){case 3:_s(Ut),Qn();break;case 26:case 27:case 5:K(r);break;case 4:Qn();break;case 13:hs(r);break;case 19:Oe(Lt);break;case 10:_s(r.type);break;case 22:case 23:hs(r),kd(),n!==null&&Oe(ca);break;case 24:_s(Ut)}}var oC={getCacheForType:function(n){var r=pn(Ut),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o}},lC=typeof WeakMap=="function"?WeakMap:Map,vt=0,ht=null,Ue=null,Ke=0,ft=0,zn=null,Es=!1,Ao=!1,Rp=!1,Ts=0,At=0,hr=0,va=0,Ip=0,ui=0,wo=0,lu=null,Ui=null,Np=!1,Dp=0,vh=1/0,Eh=null,fr=null,Th=!1,Ea=null,uu=0,Op=0,xp=null,cu=0,kp=null;function Hn(){if((vt&2)!==0&&Ke!==0)return Ke&-Ke;if(b.T!==null){var n=_o;return n!==0?n:zp()}return Rc()}function jv(){ui===0&&(ui=(Ke&536870912)===0||Ze?Sl():536870912);var n=ri.current;return n!==null&&(n.flags|=32),ui}function In(n,r,o){(n===ht&&ft===2||n.cancelPendingCommit!==null)&&(bo(n,0),Ss(n,Ke,ui,!1)),Ct(n,o),((vt&2)===0||n!==ht)&&(n===ht&&((vt&2)===0&&(va|=o),At===4&&Ss(n,Ke,ui,!1)),ji(n))}function Bv(n,r,o){if((vt&6)!==0)throw Error(s(327));var u=!o&&(r&60)===0&&(r&n.expiredLanes)===0||js(n,r),f=u?hC(n,r):Lp(n,r,!0),p=u;do{if(f===0){Ao&&!u&&Ss(n,r,0,!1);break}else if(f===6)Ss(n,r,0,!Es);else{if(o=n.current.alternate,p&&!uC(o)){f=Lp(n,r,!1),p=!1;continue}if(f===2){if(p=r,n.errorRecoveryDisabledLanes&p)var v=0;else v=n.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var A=n;f=lu;var D=A.current.memoizedState.isDehydrated;if(D&&(bo(A,v).flags|=256),v=Lp(A,v,!1),v!==2){if(Rp&&!D){A.errorRecoveryDisabledLanes|=p,va|=p,f=4;break e}p=Ui,Ui=f,p!==null&&Mp(p)}f=v}if(p=!1,f!==2)continue}}if(f===1){bo(n,0),Ss(n,r,0,!0);break}e:{switch(u=n,f){case 0:case 1:throw Error(s(345));case 4:if((r&4194176)===r){Ss(u,r,ui,!Es);break e}break;case 2:Ui=null;break;case 3:case 5:break;default:throw Error(s(329))}if(u.finishedWork=o,u.finishedLanes=r,(r&62914560)===r&&(p=Dp+300-en(),10<p)){if(Ss(u,r,ui,!Es),Yn(u,0)!==0)break e;u.timeoutHandle=cE(zv.bind(null,u,o,Ui,Eh,Np,r,ui,va,wo,Es,2,-0,0),p);break e}zv(u,o,Ui,Eh,Np,r,ui,va,wo,Es,0,-0,0)}}break}while(!0);ji(n)}function Mp(n){Ui===null?Ui=n:Ui.push.apply(Ui,n)}function zv(n,r,o,u,f,p,v,A,D,L,Q,te,q){var W=r.subtreeFlags;if((W&8192||(W&16785408)===16785408)&&(mu={stylesheets:null,count:0,unsuspend:qC},Ov(r),r=KC(),r!==null)){n.cancelPendingCommit=r(Qv.bind(null,n,o,u,f,v,A,D,1,te,q)),Ss(n,p,v,!L);return}Qv(n,o,u,f,v,A,D,Q,te,q)}function uC(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!Un(p(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ss(n,r,o,u){r&=~Ip,r&=~va,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var f=r;0<f;){var p=31-wn(f),v=1<<p;u[p]=-1,f&=~v}o!==0&&zs(n,o,r)}function Sh(){return(vt&6)===0?(hu(0),!1):!0}function Pp(){if(Ue!==null){if(ft===0)var n=Ue.return;else n=Ue,ps=_a=null,zd(n),fo=null,Gl=0,n=Ue;for(;n!==null;)Uv(n.alternate,n),n=n.return;Ue=null}}function bo(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,IC(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Pp(),ht=n,Ue=o=cr(n.current,null),Ke=r,ft=0,zn=null,Es=!1,Ao=js(n,r),Rp=!1,wo=ui=Ip=va=hr=At=0,Ui=lu=null,Np=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var f=31-wn(u),p=1<<f;r|=n[f],u&=~p}return Ts=r,Kc(),o}function Hv(n,r){Pe=null,b.H=Li,r===Fl?(r=iy(),ft=3):r===ey?(r=iy(),ft=4):ft=r===tv?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,zn=r,Ue===null&&(At=1,fh(n,ni(r,n.current)))}function Fv(){var n=b.H;return b.H=Li,n===null?Li:n}function qv(){var n=b.A;return b.A=oC,n}function Vp(){At=4,Es||(Ke&4194176)!==Ke&&ri.current!==null||(Ao=!0),(hr&134217727)===0&&(va&134217727)===0||ht===null||Ss(ht,Ke,ui,!1)}function Lp(n,r,o){var u=vt;vt|=2;var f=Fv(),p=qv();(ht!==n||Ke!==r)&&(Eh=null,bo(n,r)),r=!1;var v=At;e:do try{if(ft!==0&&Ue!==null){var A=Ue,D=zn;switch(ft){case 8:Pp(),v=6;break e;case 3:case 2:case 6:ri.current===null&&(r=!0);var L=ft;if(ft=0,zn=null,Co(n,A,D,L),o&&Ao){v=0;break e}break;default:L=ft,ft=0,zn=null,Co(n,A,D,L)}}cC(),v=At;break}catch(Q){Hv(n,Q)}while(!0);return r&&n.shellSuspendCounter++,ps=_a=null,vt=u,b.H=f,b.A=p,Ue===null&&(ht=null,Ke=0,Kc()),v}function cC(){for(;Ue!==null;)Gv(Ue)}function hC(n,r){var o=vt;vt|=2;var u=Fv(),f=qv();ht!==n||Ke!==r?(Eh=null,vh=en()+500,bo(n,r)):Ao=js(n,r);e:do try{if(ft!==0&&Ue!==null){r=Ue;var p=zn;t:switch(ft){case 1:ft=0,zn=null,Co(n,r,p,1);break;case 2:if(ty(p)){ft=0,zn=null,Kv(r);break}r=function(){ft===2&&ht===n&&(ft=7),ji(n)},p.then(r,r);break e;case 3:ft=7;break e;case 4:ft=5;break e;case 7:ty(p)?(ft=0,zn=null,Kv(r)):(ft=0,zn=null,Co(n,r,p,7));break;case 5:var v=null;switch(Ue.tag){case 26:v=Ue.memoizedState;case 5:case 27:var A=Ue;if(!v||TE(v)){ft=0,zn=null;var D=A.sibling;if(D!==null)Ue=D;else{var L=A.return;L!==null?(Ue=L,Ah(L)):Ue=null}break t}}ft=0,zn=null,Co(n,r,p,5);break;case 6:ft=0,zn=null,Co(n,r,p,6);break;case 8:Pp(),At=6;break e;default:throw Error(s(462))}}fC();break}catch(Q){Hv(n,Q)}while(!0);return ps=_a=null,b.H=u,b.A=f,vt=o,Ue!==null?0:(ht=null,Ke=0,Kc(),At)}function fC(){for(;Ue!==null&&!qa();)Gv(Ue)}function Gv(n){var r=dv(n.alternate,n,Ts);n.memoizedProps=n.pendingProps,r===null?Ah(n):Ue=r}function Kv(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=ov(o,r,r.pendingProps,r.type,void 0,Ke);break;case 11:r=ov(o,r,r.pendingProps,r.type.render,r.ref,Ke);break;case 5:zd(r);default:Uv(o,r),r=Ue=Pv(r,Ts),r=dv(o,r,Ts)}n.memoizedProps=n.pendingProps,r===null?Ah(n):Ue=r}function Co(n,r,o,u){ps=_a=null,zd(r),fo=null,Gl=0;var f=r.return;try{if(eC(n,f,r,o,Ke)){At=1,fh(n,ni(o,n.current)),Ue=null;return}}catch(p){if(f!==null)throw Ue=f,p;At=1,fh(n,ni(o,n.current)),Ue=null;return}r.flags&32768?(Ze||u===1?n=!0:Ao||(Ke&536870912)!==0?n=!1:(Es=n=!0,(u===2||u===3||u===6)&&(u=ri.current,u!==null&&u.tag===13&&(u.flags|=16384))),Wv(r,n)):Ah(r)}function Ah(n){var r=n;do{if((r.flags&32768)!==0){Wv(r,Es);return}n=r.return;var o=rC(r.alternate,r,Ts);if(o!==null){Ue=o;return}if(r=r.sibling,r!==null){Ue=r;return}Ue=r=n}while(r!==null);At===0&&(At=5)}function Wv(n,r){do{var o=aC(n.alternate,n);if(o!==null){o.flags&=32767,Ue=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){Ue=n;return}Ue=n=o}while(n!==null);At=6,Ue=null}function Qv(n,r,o,u,f,p,v,A,D,L){var Q=b.T,te=he.p;try{he.p=2,b.T=null,dC(n,r,o,u,te,f,p,v,A,D,L)}finally{b.T=Q,he.p=te}}function dC(n,r,o,u,f,p,v,A){do Ro();while(Ea!==null);if((vt&6)!==0)throw Error(s(327));var D=n.finishedWork;if(u=n.finishedLanes,D===null)return null;if(n.finishedWork=null,n.finishedLanes=0,D===n.current)throw Error(s(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var L=D.lanes|D.childLanes;if(L|=Cd,bc(n,u,L,p,v,A),n===ht&&(Ue=ht=null,Ke=0),(D.subtreeFlags&10256)===0&&(D.flags&10256)===0||Th||(Th=!0,Op=L,xp=o,gC(Ji,function(){return Ro(),null})),o=(D.flags&15990)!==0,(D.subtreeFlags&15990)!==0||o?(o=b.T,b.T=null,p=he.p,he.p=2,v=vt,vt|=4,nC(n,D),Iv(D,n),Lb(Yp,n.containerInfo),Ph=!!Qp,Yp=Qp=null,n.current=D,wv(n,D.alternate,D),Zi(),vt=v,he.p=p,b.T=o):n.current=D,Th?(Th=!1,Ea=n,uu=u):Yv(n,L),L=n.pendingLanes,L===0&&(fr=null),El(D.stateNode),ji(n),r!==null)for(f=n.onRecoverableError,D=0;D<r.length;D++)L=r[D],f(L.value,{componentStack:L.stack});return(uu&3)!==0&&Ro(),L=n.pendingLanes,(u&4194218)!==0&&(L&42)!==0?n===kp?cu++:(cu=0,kp=n):cu=0,hu(0),null}function Yv(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Wl(r)))}function Ro(){if(Ea!==null){var n=Ea,r=Op;Op=0;var o=Cc(uu),u=b.T,f=he.p;try{if(he.p=32>o?32:o,b.T=null,Ea===null)var p=!1;else{o=xp,xp=null;var v=Ea,A=uu;if(Ea=null,uu=0,(vt&6)!==0)throw Error(s(331));var D=vt;if(vt|=4,kv(v.current),Dv(v,v.current,A,o),vt=D,hu(0,!1),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Ls,v)}catch{}p=!0}return p}finally{he.p=f,b.T=u,Yv(n,r)}}return!1}function $v(n,r,o){r=ni(o,r),r=tp(n.stateNode,r,2),n=ar(n,r,2),n!==null&&(Ct(n,2),ji(n))}function ut(n,r,o){if(n.tag===3)$v(n,n,o);else for(;r!==null;){if(r.tag===3){$v(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(fr===null||!fr.has(u))){n=ni(o,n),o=Jy(2),u=ar(r,o,2),u!==null&&(ev(o,u,r,n),Ct(u,2),ji(u));break}}r=r.return}}function Up(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new lC;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(Rp=!0,f.add(o),n=pC.bind(null,n,r,o),r.then(n,n))}function pC(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,ht===n&&(Ke&o)===o&&(At===4||At===3&&(Ke&62914560)===Ke&&300>en()-Dp?(vt&2)===0&&bo(n,0):Ip|=o,wo===Ke&&(wo=0)),ji(n)}function Xv(n,r){r===0&&(r=Bs()),n=Zs(n,r),n!==null&&(Ct(n,r),ji(n))}function _C(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Xv(n,o)}function mC(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),Xv(n,o)}function gC(n,r){return Ht(n,r)}var wh=null,Io=null,jp=!1,bh=!1,Bp=!1,Ta=0;function ji(n){n!==Io&&n.next===null&&(Io===null?wh=Io=n:Io=Io.next=n),bh=!0,jp||(jp=!0,vC(yC))}function hu(n,r){if(!Bp&&bh){Bp=!0;do for(var o=!1,u=wh;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var p=0;else{var v=u.suspendedLanes,A=u.pingedLanes;p=(1<<31-wn(42|n)+1)-1,p&=f&~(v&~A),p=p&201326677?p&201326677|1:p?p|2:0}p!==0&&(o=!0,eE(u,p))}else p=Ke,p=Yn(u,u===ht?p:0),(p&3)===0||js(u,p)||(o=!0,eE(u,p));u=u.next}while(o);Bp=!1}}function yC(){bh=jp=!1;var n=0;Ta!==0&&(RC()&&(n=Ta),Ta=0);for(var r=en(),o=null,u=wh;u!==null;){var f=u.next,p=Zv(u,r);p===0?(u.next=null,o===null?wh=f:o.next=f,f===null&&(Io=o)):(o=u,(n!==0||(p&3)!==0)&&(bh=!0)),u=f}hu(n)}function Zv(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes&-62914561;0<p;){var v=31-wn(p),A=1<<v,D=f[v];D===-1?((A&o)===0||(A&u)!==0)&&(f[v]=Ga(A,r)):D<=r&&(n.expiredLanes|=A),p&=~A}if(r=ht,o=Ke,o=Yn(n,n===r?o:0),u=n.callbackNode,o===0||n===r&&ft===2||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Jt(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||js(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&Jt(u),Cc(o)){case 2:case 8:o=Nt;break;case 32:o=Ji;break;case 268435456:o=vl;break;default:o=Ji}return u=Jv.bind(null,n),o=Ht(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&Jt(u),n.callbackPriority=2,n.callbackNode=null,2}function Jv(n,r){var o=n.callbackNode;if(Ro()&&n.callbackNode!==o)return null;var u=Ke;return u=Yn(n,n===ht?u:0),u===0?null:(Bv(n,u,r),Zv(n,en()),n.callbackNode!=null&&n.callbackNode===o?Jv.bind(null,n):null)}function eE(n,r){if(Ro())return null;Bv(n,r,!0)}function vC(n){NC(function(){(vt&6)!==0?Ht(mt,n):n()})}function zp(){return Ta===0&&(Ta=Sl()),Ta}function tE(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ii(""+n)}function nE(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function EC(n,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var p=tE((f[Mt]||null).action),v=u.submitter;v&&(r=(r=v[Mt]||null)?tE(r.formAction):v.getAttribute("formAction"),r!==null&&(p=r,v=null));var A=new Za("action","action",null,u,f);n.push({event:A,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ta!==0){var D=v?nE(f,v):new FormData(f);$d(o,{pending:!0,data:D,method:f.method,action:p},null,D)}}else typeof p=="function"&&(A.preventDefault(),D=v?nE(f,v):new FormData(f),$d(o,{pending:!0,data:D,method:f.method,action:p},p,D))},currentTarget:f}]})}}for(var Hp=0;Hp<Qg.length;Hp++){var Fp=Qg[Hp],TC=Fp.toLowerCase(),SC=Fp[0].toUpperCase()+Fp.slice(1);_i(TC,"on"+SC)}_i(Fg,"onAnimationEnd"),_i(qg,"onAnimationIteration"),_i(Gg,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(jb,"onTransitionRun"),_i(Bb,"onTransitionStart"),_i(zb,"onTransitionCancel"),_i(Kg,"onTransitionEnd"),Nn("onMouseEnter",["mouseout","mouseover"]),Nn("onMouseLeave",["mouseout","mouseover"]),Nn("onPointerEnter",["pointerout","pointerover"]),Nn("onPointerLeave",["pointerout","pointerover"]),Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fu));function iE(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var v=u.length-1;0<=v;v--){var A=u[v],D=A.instance,L=A.currentTarget;if(A=A.listener,D!==p&&f.isPropagationStopped())break e;p=A,f.currentTarget=L;try{p(f)}catch(Q){hh(Q)}f.currentTarget=null,p=D}else for(v=0;v<u.length;v++){if(A=u[v],D=A.instance,L=A.currentTarget,A=A.listener,D!==p&&f.isPropagationStopped())break e;p=A,f.currentTarget=L;try{p(f)}catch(Q){hh(Q)}f.currentTarget=null,p=D}}}}function ze(n,r){var o=r[Kr];o===void 0&&(o=r[Kr]=new Set);var u=n+"__bubble";o.has(u)||(sE(r,n,2,!1),o.add(u))}function qp(n,r,o){var u=0;r&&(u|=4),sE(o,n,u,r)}var Ch="_reactListening"+Math.random().toString(36).slice(2);function Gp(n){if(!n[Ch]){n[Ch]=!0,wl.forEach(function(o){o!=="selectionchange"&&(AC.has(o)||qp(o,!1,n),qp(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ch]||(r[Ch]=!0,qp("selectionchange",!1,r))}}function sE(n,r,o,u){switch(RE(r)){case 2:var f=YC;break;case 8:f=$C;break;default:f=s_}o=f.bind(null,r,o,n),f=void 0,!Jn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(r,o,{capture:!0,passive:f}):n.addEventListener(r,o,!0):f!==void 0?n.addEventListener(r,o,{passive:f}):n.addEventListener(r,o,!1)}function Kp(n,r,o,u,f){var p=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var v=u.tag;if(v===3||v===4){var A=u.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(v===4)for(v=u.return;v!==null;){var D=v.tag;if((D===3||D===4)&&(D=v.stateNode.containerInfo,D===f||D.nodeType===8&&D.parentNode===f))return;v=v.return}for(;A!==null;){if(v=pi(A),v===null)return;if(D=v.tag,D===5||D===6||D===26||D===27){u=p=v;continue e}A=A.parentNode}}u=u.return}Oc(function(){var L=p,Q=Xa(o),te=[];e:{var q=Wg.get(n);if(q!==void 0){var W=Za,Te=n;switch(n){case"keypress":if(Di(o)===0)break e;case"keydown":case"keyup":W=so;break;case"focusin":Te="focus",W=to;break;case"focusout":Te="blur",W=to;break;case"beforeblur":case"afterblur":W=to;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=ei;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=jc;break;case Fg:case qg:case Gg:W=no;break;case Kg:W=zc;break;case"scroll":case"scrollend":W=xc;break;case"wheel":W=ro;break;case"copy":case"cut":case"paste":W=io;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Vl;break;case"toggle":case"beforetoggle":W=Fc}var xe=(r&4)!==0,wt=!xe&&(n==="scroll"||n==="scrollend"),U=xe?q!==null?q+"Capture":null:q;xe=[];for(var P=L,B;P!==null;){var Z=P;if(B=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||B===null||U===null||(Z=Xr(P,U),Z!=null&&xe.push(du(P,Z,B))),wt)break;P=P.return}0<xe.length&&(q=new W(q,Te,null,o,Q),te.push({event:q,listeners:xe}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",W=n==="mouseout"||n==="pointerout",q&&o!==Zn&&(Te=o.relatedTarget||o.fromElement)&&(pi(Te)||Te[es]))break e;if((W||q)&&(q=Q.window===Q?Q:(q=Q.ownerDocument)?q.defaultView||q.parentWindow:window,W?(Te=o.relatedTarget||o.toElement,W=L,Te=Te?pi(Te):null,Te!==null&&(wt=oe(Te),xe=Te.tag,Te!==wt||xe!==5&&xe!==27&&xe!==6)&&(Te=null)):(W=null,Te=L),W!==Te)){if(xe=ei,Z="onMouseLeave",U="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(xe=Vl,Z="onPointerLeave",U="onPointerEnter",P="pointer"),wt=W==null?q:Gs(W),B=Te==null?q:Gs(Te),q=new xe(Z,P+"leave",W,o,Q),q.target=wt,q.relatedTarget=B,Z=null,pi(Q)===L&&(xe=new xe(U,P+"enter",Te,o,Q),xe.target=B,xe.relatedTarget=wt,Z=xe),wt=Z,W&&Te)t:{for(xe=W,U=Te,P=0,B=xe;B;B=No(B))P++;for(B=0,Z=U;Z;Z=No(Z))B++;for(;0<P-B;)xe=No(xe),P--;for(;0<B-P;)U=No(U),B--;for(;P--;){if(xe===U||U!==null&&xe===U.alternate)break t;xe=No(xe),U=No(U)}xe=null}else xe=null;W!==null&&rE(te,q,W,xe,!1),Te!==null&&wt!==null&&rE(te,wt,Te,xe,!0)}}e:{if(q=L?Gs(L):window,W=q.nodeName&&q.nodeName.toLowerCase(),W==="select"||W==="input"&&q.type==="file")var me=xg;else if(Vt(q))if(kg)me=Pb;else{me=kb;var Ve=xb}else W=q.nodeName,!W||W.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?L&&Nl(L.elementType)&&(me=xg):me=Mb;if(me&&(me=me(n,L))){ls(te,me,o,Q);break e}Ve&&Ve(n,q,L),n==="focusout"&&L&&q.type==="number"&&L.memoizedProps.value!=null&&$a(q,"number",q.value)}switch(Ve=L?Gs(L):window,n){case"focusin":(Vt(Ve)||Ve.contentEditable==="true")&&(ao=Ve,Ad=L,jl=null);break;case"focusout":jl=Ad=ao=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,zg(te,o,Q);break;case"selectionchange":if(Ub)break;case"keydown":case"keyup":zg(te,o,Q)}var Se;if(ki)e:{switch(n){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else qe?G(n,o)&&(be="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(be="onCompositionStart");be&&(y&&o.locale!=="ko"&&(qe||be!=="onCompositionStart"?be==="onCompositionEnd"&&qe&&(Se=Ol()):(Ni=Q,Xs="value"in Ni?Ni.value:Ni.textContent,qe=!0)),Ve=Rh(L,be),0<Ve.length&&(be=new Ml(be,n,null,o,Q),te.push({event:be,listeners:Ve}),Se?be.data=Se:(Se=ce(o),Se!==null&&(be.data=Se)))),(Se=g?Pt(n,o):Ge(n,o))&&(be=Rh(L,"onBeforeInput"),0<be.length&&(Ve=new Ml("onBeforeInput","beforeinput",null,o,Q),te.push({event:Ve,listeners:be}),Ve.data=Se)),EC(te,n,L,o,Q)}iE(te,r)})}function du(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Rh(n,r){for(var o=r+"Capture",u=[];n!==null;){var f=n,p=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Xr(n,o),f!=null&&u.unshift(du(n,f,p)),f=Xr(n,r),f!=null&&u.push(du(n,f,p))),n=n.return}return u}function No(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function rE(n,r,o,u,f){for(var p=r._reactName,v=[];o!==null&&o!==u;){var A=o,D=A.alternate,L=A.stateNode;if(A=A.tag,D!==null&&D===u)break;A!==5&&A!==26&&A!==27||L===null||(D=L,f?(L=Xr(o,p),L!=null&&v.unshift(du(o,L,D))):f||(L=Xr(o,p),L!=null&&v.push(du(o,L,D)))),o=o.return}v.length!==0&&n.push({event:r,listeners:v})}var wC=/\r\n?/g,bC=/\u0000|\uFFFD/g;function aE(n){return(typeof n=="string"?n:""+n).replace(wC,`
`).replace(bC,"")}function oE(n,r){return r=aE(r),aE(n)===r}function Ih(){}function ot(n,r,o,u,f,p){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Xn(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Xn(n,""+u);break;case"className":Qs(n,"class",u);break;case"tabIndex":Qs(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Qs(n,o,u);break;case"style":Dc(n,u,p);break;case"data":if(r!=="object"){Qs(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ii(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(r!=="input"&&ot(n,r,"name",f.name,f,null),ot(n,r,"formEncType",f.formEncType,f,null),ot(n,r,"formMethod",f.formMethod,f,null),ot(n,r,"formTarget",f.formTarget,f,null)):(ot(n,r,"encType",f.encType,f,null),ot(n,r,"method",f.method,f,null),ot(n,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ii(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Ih);break;case"onScroll":u!=null&&ze("scroll",n);break;case"onScrollEnd":u!=null&&ze("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Ii(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":ze("beforetoggle",n),ze("toggle",n),Ws(n,"popover",u);break;case"xlinkActuate":$n(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":$n(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":$n(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":$n(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":$n(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":$n(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":$n(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":$n(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":$n(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ws(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=md.get(o)||o,Ws(n,o,u))}}function Wp(n,r,o,u,f,p){switch(o){case"style":Dc(n,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Xn(n,u):(typeof u=="number"||typeof u=="bigint")&&Xn(n,""+u);break;case"onScroll":u!=null&&ze("scroll",n);break;case"onScrollEnd":u!=null&&ze("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Ih);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qa.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),p=n[Mt]||null,p=p!=null?p[o]:null,typeof p=="function"&&n.removeEventListener(r,p,f),typeof u=="function")){typeof p!="function"&&p!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Ws(n,o,u)}}}function rn(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",n),ze("load",n);var u=!1,f=!1,p;for(p in o)if(o.hasOwnProperty(p)){var v=o[p];if(v!=null)switch(p){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ot(n,r,p,v,o,null)}}f&&ot(n,r,"srcSet",o.srcSet,o,null),u&&ot(n,r,"src",o.src,o,null);return;case"input":ze("invalid",n);var A=p=v=f=null,D=null,L=null;for(u in o)if(o.hasOwnProperty(u)){var Q=o[u];if(Q!=null)switch(u){case"name":f=Q;break;case"type":v=Q;break;case"checked":D=Q;break;case"defaultChecked":L=Q;break;case"value":p=Q;break;case"defaultValue":A=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,r));break;default:ot(n,r,u,Q,o,null)}}Yr(n,p,A,D,L,v,f,!1),Qr(n);return;case"select":ze("invalid",n),u=v=p=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":p=A;break;case"defaultValue":v=A;break;case"multiple":u=A;default:ot(n,r,f,A,o,null)}r=p,o=v,n.multiple=!!u,r!=null?Xe(n,!!u,r,!1):o!=null&&Xe(n,!!u,o,!0);return;case"textarea":ze("invalid",n),p=f=u=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":u=A;break;case"defaultValue":f=A;break;case"children":p=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:ot(n,r,v,A,o,null)}$s(n,u,f,p),Qr(n);return;case"option":for(D in o)if(o.hasOwnProperty(D)&&(u=o[D],u!=null))switch(D){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ot(n,r,D,u,o,null)}return;case"dialog":ze("cancel",n),ze("close",n);break;case"iframe":case"object":ze("load",n);break;case"video":case"audio":for(u=0;u<fu.length;u++)ze(fu[u],n);break;case"image":ze("error",n),ze("load",n);break;case"details":ze("toggle",n);break;case"embed":case"source":case"link":ze("error",n),ze("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in o)if(o.hasOwnProperty(L)&&(u=o[L],u!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ot(n,r,L,u,o,null)}return;default:if(Nl(r)){for(Q in o)o.hasOwnProperty(Q)&&(u=o[Q],u!==void 0&&Wp(n,r,Q,u,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(u=o[A],u!=null&&ot(n,r,A,u,o,null))}function CC(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,v=null,A=null,D=null,L=null,Q=null;for(W in o){var te=o[W];if(o.hasOwnProperty(W)&&te!=null)switch(W){case"checked":break;case"value":break;case"defaultValue":D=te;default:u.hasOwnProperty(W)||ot(n,r,W,null,u,te)}}for(var q in u){var W=u[q];if(te=o[q],u.hasOwnProperty(q)&&(W!=null||te!=null))switch(q){case"type":p=W;break;case"name":f=W;break;case"checked":L=W;break;case"defaultChecked":Q=W;break;case"value":v=W;break;case"defaultValue":A=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,r));break;default:W!==te&&ot(n,r,q,W,u,te)}}Ys(n,v,A,D,L,Q,p,f);return;case"select":W=v=A=q=null;for(p in o)if(D=o[p],o.hasOwnProperty(p)&&D!=null)switch(p){case"value":break;case"multiple":W=D;default:u.hasOwnProperty(p)||ot(n,r,p,null,u,D)}for(f in u)if(p=u[f],D=o[f],u.hasOwnProperty(f)&&(p!=null||D!=null))switch(f){case"value":q=p;break;case"defaultValue":A=p;break;case"multiple":v=p;default:p!==D&&ot(n,r,f,p,u,D)}r=A,o=v,u=W,q!=null?Xe(n,!!o,q,!1):!!u!=!!o&&(r!=null?Xe(n,!!o,r,!0):Xe(n,!!o,o?[]:"",!1));return;case"textarea":W=q=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!u.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ot(n,r,A,null,u,f)}for(v in u)if(f=u[v],p=o[v],u.hasOwnProperty(v)&&(f!=null||p!=null))switch(v){case"value":q=f;break;case"defaultValue":W=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&ot(n,r,v,f,u,p)}$r(n,q,W);return;case"option":for(var Te in o)if(q=o[Te],o.hasOwnProperty(Te)&&q!=null&&!u.hasOwnProperty(Te))switch(Te){case"selected":n.selected=!1;break;default:ot(n,r,Te,null,u,q)}for(D in u)if(q=u[D],W=o[D],u.hasOwnProperty(D)&&q!==W&&(q!=null||W!=null))switch(D){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:ot(n,r,D,q,u,W)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var xe in o)q=o[xe],o.hasOwnProperty(xe)&&q!=null&&!u.hasOwnProperty(xe)&&ot(n,r,xe,null,u,q);for(L in u)if(q=u[L],W=o[L],u.hasOwnProperty(L)&&q!==W&&(q!=null||W!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:ot(n,r,L,q,u,W)}return;default:if(Nl(r)){for(var wt in o)q=o[wt],o.hasOwnProperty(wt)&&q!==void 0&&!u.hasOwnProperty(wt)&&Wp(n,r,wt,void 0,u,q);for(Q in u)q=u[Q],W=o[Q],!u.hasOwnProperty(Q)||q===W||q===void 0&&W===void 0||Wp(n,r,Q,q,u,W);return}}for(var U in o)q=o[U],o.hasOwnProperty(U)&&q!=null&&!u.hasOwnProperty(U)&&ot(n,r,U,null,u,q);for(te in u)q=u[te],W=o[te],!u.hasOwnProperty(te)||q===W||q==null&&W==null||ot(n,r,te,q,u,W)}var Qp=null,Yp=null;function Nh(n){return n.nodeType===9?n:n.ownerDocument}function lE(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function uE(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function $p(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Xp=null;function RC(){var n=window.event;return n&&n.type==="popstate"?n===Xp?!1:(Xp=n,!0):(Xp=null,!1)}var cE=typeof setTimeout=="function"?setTimeout:void 0,IC=typeof clearTimeout=="function"?clearTimeout:void 0,hE=typeof Promise=="function"?Promise:void 0,NC=typeof queueMicrotask=="function"?queueMicrotask:typeof hE<"u"?function(n){return hE.resolve(null).then(n).catch(DC)}:cE;function DC(n){setTimeout(function(){throw n})}function Zp(n,r){var o=r,u=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){n.removeChild(f),Tu(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);Tu(r)}function Jp(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Jp(o),Wr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function OC(n,r,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[qs])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(p=n.getAttribute("rel"),p==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(p!==f.rel||n.getAttribute("href")!==(f.href==null?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(p=n.getAttribute("src"),(p!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===p)return n}else return n;if(n=yi(n.nextSibling),n===null)break}return null}function xC(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=yi(n.nextSibling),n===null))return null;return n}function yi(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}function fE(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}function dE(n,r,o){switch(r=Nh(o),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}var ci=new Map,pE=new Set;function Dh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var As=he.d;he.d={f:kC,r:MC,D:PC,C:VC,L:LC,m:UC,X:BC,S:jC,M:zC};function kC(){var n=As.f(),r=Sh();return n||r}function MC(n){var r=ts(n);r!==null&&r.tag===5&&r.type==="form"?zy(r):As.r(n)}var Do=typeof document>"u"?null:document;function _E(n,r,o){var u=Do;if(u&&typeof r=="string"&&r){var f=Tt(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),pE.has(f)||(pE.add(f),n={rel:n,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),rn(r,"link",n),gt(r),u.head.appendChild(r)))}}function PC(n){As.D(n),_E("dns-prefetch",n,null)}function VC(n,r){As.C(n,r),_E("preconnect",n,r)}function LC(n,r,o){As.L(n,r,o);var u=Do;if(u&&n&&r){var f='link[rel="preload"][as="'+Tt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Tt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Tt(o.imageSizes)+'"]')):f+='[href="'+Tt(n)+'"]';var p=f;switch(r){case"style":p=Oo(n);break;case"script":p=xo(n)}ci.has(p)||(n=R({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),ci.set(p,n),u.querySelector(f)!==null||r==="style"&&u.querySelector(pu(p))||r==="script"&&u.querySelector(_u(p))||(r=u.createElement("link"),rn(r,"link",n),gt(r),u.head.appendChild(r)))}}function UC(n,r){As.m(n,r);var o=Do;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Tt(u)+'"][href="'+Tt(n)+'"]',p=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=xo(n)}if(!ci.has(p)&&(n=R({rel:"modulepreload",href:n},r),ci.set(p,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(_u(p)))return}u=o.createElement("link"),rn(u,"link",n),gt(u),o.head.appendChild(u)}}}function jC(n,r,o){As.S(n,r,o);var u=Do;if(u&&n){var f=Ks(u).hoistableStyles,p=Oo(n);r=r||"default";var v=f.get(p);if(!v){var A={loading:0,preload:null};if(v=u.querySelector(pu(p)))A.loading=5;else{n=R({rel:"stylesheet",href:n,"data-precedence":r},o),(o=ci.get(p))&&e_(n,o);var D=v=u.createElement("link");gt(D),rn(D,"link",n),D._p=new Promise(function(L,Q){D.onload=L,D.onerror=Q}),D.addEventListener("load",function(){A.loading|=1}),D.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Oh(v,r,u)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(p,v)}}}function BC(n,r){As.X(n,r);var o=Do;if(o&&n){var u=Ks(o).hoistableScripts,f=xo(n),p=u.get(f);p||(p=o.querySelector(_u(f)),p||(n=R({src:n,async:!0},r),(r=ci.get(f))&&t_(n,r),p=o.createElement("script"),gt(p),rn(p,"link",n),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function zC(n,r){As.M(n,r);var o=Do;if(o&&n){var u=Ks(o).hoistableScripts,f=xo(n),p=u.get(f);p||(p=o.querySelector(_u(f)),p||(n=R({src:n,async:!0,type:"module"},r),(r=ci.get(f))&&t_(n,r),p=o.createElement("script"),gt(p),rn(p,"link",n),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function mE(n,r,o,u){var f=(f=fn.current)?Dh(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Oo(o.href),o=Ks(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Oo(o.href);var p=Ks(f).hoistableStyles,v=p.get(n);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(n,v),(p=f.querySelector(pu(n)))&&!p._p&&(v.instance=p,v.state.loading=5),ci.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ci.set(n,o),p||HC(f,n,o,v.state))),r&&u===null)throw Error(s(528,""));return v}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=xo(o),o=Ks(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function Oo(n){return'href="'+Tt(n)+'"'}function pu(n){return'link[rel="stylesheet"]['+n+"]"}function gE(n){return R({},n,{"data-precedence":n.precedence,precedence:null})}function HC(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),rn(r,"link",o),gt(r),n.head.appendChild(r))}function xo(n){return'[src="'+Tt(n)+'"]'}function _u(n){return"script[async]"+n}function yE(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+Tt(o.href)+'"]');if(u)return r.instance=u,gt(u),u;var f=R({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),gt(u),rn(u,"style",f),Oh(u,o.precedence,n),r.instance=u;case"stylesheet":f=Oo(o.href);var p=n.querySelector(pu(f));if(p)return r.state.loading|=4,r.instance=p,gt(p),p;u=gE(o),(f=ci.get(f))&&e_(u,f),p=(n.ownerDocument||n).createElement("link"),gt(p);var v=p;return v._p=new Promise(function(A,D){v.onload=A,v.onerror=D}),rn(p,"link",u),r.state.loading|=4,Oh(p,o.precedence,n),r.instance=p;case"script":return p=xo(o.src),(f=n.querySelector(_u(p)))?(r.instance=f,gt(f),f):(u=o,(f=ci.get(p))&&(u=R({},o),t_(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),gt(f),rn(f,"link",u),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Oh(u,o.precedence,n));return r.instance}function Oh(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,p=f,v=0;v<u.length;v++){var A=u[v];if(A.dataset.precedence===r)p=A;else if(p!==f)break}p?p.parentNode.insertBefore(n,p.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function e_(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function t_(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var xh=null;function vE(n,r,o){if(xh===null){var u=new Map,f=xh=new Map;f.set(o,u)}else f=xh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var p=o[f];if(!(p[qs]||p[Ft]||n==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var v=p.getAttribute(r)||"";v=n+v;var A=u.get(v);A?A.push(p):u.set(v,[p])}}return u}function EE(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function FC(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function TE(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var mu=null;function qC(){}function GC(n,r,o){if(mu===null)throw Error(s(475));var u=mu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Oo(o.href),p=n.querySelector(pu(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=kh.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=p,gt(p);return}p=n.ownerDocument||n,o=gE(o),(f=ci.get(f))&&e_(o,f),p=p.createElement("link"),gt(p);var v=p;v._p=new Promise(function(A,D){v.onload=A,v.onerror=D}),rn(p,"link",o),r.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=kh.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function KC(){if(mu===null)throw Error(s(475));var n=mu;return n.stylesheets&&n.count===0&&n_(n,n.stylesheets),0<n.count?function(r){var o=setTimeout(function(){if(n.stylesheets&&n_(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(o)}}:null}function kh(){if(this.count--,this.count===0){if(this.stylesheets)n_(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Mh=null;function n_(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Mh=new Map,r.forEach(WC,n),Mh=null,kh.call(n))}function WC(n,r){if(!(r.state.loading&4)){var o=Mh.get(n);if(o)var u=o.get(null);else{o=new Map,Mh.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var v=f[p];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),u=v)}u&&o.set(null,u)}f=r.instance,v=f.getAttribute("data-precedence"),p=o.get(v)||u,p===u&&o.set(null,f),o.set(v,f),this.count++,u=kh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),p?p.parentNode.insertBefore(f,p.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var gu={$$typeof:V,Provider:null,Consumer:null,_currentValue:Ee,_currentValue2:Ee,_threadCount:0};function QC(n,r,o,u,f,p,v,A){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ka(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ka(0),this.hiddenUpdates=Ka(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function SE(n,r,o,u,f,p,v,A,D,L,Q,te){return n=new QC(n,r,o,v,A,D,L,te),r=1,p===!0&&(r|=24),p=li(3,null,null,r),n.current=p,p.stateNode=n,r=Md(),r.refCount++,n.pooledCache=r,r.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:r},pp(p),n}function AE(n){return n?(n=uo,n):uo}function wE(n,r,o,u,f,p){f=AE(f),u.context===null?u.context=f:u.pendingContext=f,u=rr(r),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=ar(n,u,r),o!==null&&(In(o,n,r),eu(o,n,r))}function bE(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function i_(n,r){bE(n,r),(n=n.alternate)&&bE(n,r)}function CE(n){if(n.tag===13){var r=Zs(n,67108864);r!==null&&In(r,n,67108864),i_(n,67108864)}}var Ph=!0;function YC(n,r,o,u){var f=b.T;b.T=null;var p=he.p;try{he.p=2,s_(n,r,o,u)}finally{he.p=p,b.T=f}}function $C(n,r,o,u){var f=b.T;b.T=null;var p=he.p;try{he.p=8,s_(n,r,o,u)}finally{he.p=p,b.T=f}}function s_(n,r,o,u){if(Ph){var f=r_(u);if(f===null)Kp(n,r,u,Vh,o),IE(n,u);else if(ZC(f,n,r,o,u))u.stopPropagation();else if(IE(n,u),r&4&&-1<XC.indexOf(n)){for(;f!==null;){var p=ts(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var v=di(p.pendingLanes);if(v!==0){var A=p;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var D=1<<31-wn(v);A.entanglements[1]|=D,v&=~D}ji(p),(vt&6)===0&&(vh=en()+500,hu(0))}}break;case 13:A=Zs(p,2),A!==null&&In(A,p,2),Sh(),i_(p,2)}if(p=r_(u),p===null&&Kp(n,r,u,Vh,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else Kp(n,r,u,null,o)}}function r_(n){return n=Xa(n),a_(n)}var Vh=null;function a_(n){if(Vh=null,n=pi(n),n!==null){var r=oe(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=z(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Vh=n,null}function RE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qr()){case mt:return 2;case Nt:return 8;case Ji:case Sc:return 32;case vl:return 268435456;default:return 32}default:return 32}}var o_=!1,dr=null,pr=null,_r=null,yu=new Map,vu=new Map,mr=[],XC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function IE(n,r){switch(n){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":yu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":vu.delete(r.pointerId)}}function Eu(n,r,o,u,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},r!==null&&(r=ts(r),r!==null&&CE(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function ZC(n,r,o,u,f){switch(r){case"focusin":return dr=Eu(dr,n,r,o,u,f),!0;case"dragenter":return pr=Eu(pr,n,r,o,u,f),!0;case"mouseover":return _r=Eu(_r,n,r,o,u,f),!0;case"pointerover":var p=f.pointerId;return yu.set(p,Eu(yu.get(p)||null,n,r,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,vu.set(p,Eu(vu.get(p)||null,n,r,o,u,f)),!0}return!1}function NE(n){var r=pi(n.target);if(r!==null){var o=oe(r);if(o!==null){if(r=o.tag,r===13){if(r=z(o),r!==null){n.blockedOn=r,Fs(n.priority,function(){if(o.tag===13){var u=Hn(),f=Zs(o,u);f!==null&&In(f,o,u),i_(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Lh(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=r_(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Zn=u,o.target.dispatchEvent(u),Zn=null}else return r=ts(o),r!==null&&CE(r),n.blockedOn=o,!1;r.shift()}return!0}function DE(n,r,o){Lh(n)&&o.delete(r)}function JC(){o_=!1,dr!==null&&Lh(dr)&&(dr=null),pr!==null&&Lh(pr)&&(pr=null),_r!==null&&Lh(_r)&&(_r=null),yu.forEach(DE),vu.forEach(DE)}function Uh(n,r){n.blockedOn===r&&(n.blockedOn=null,o_||(o_=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,JC)))}var jh=null;function OE(n){jh!==n&&(jh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){jh===n&&(jh=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],f=n[r+2];if(typeof u!="function"){if(a_(u||o)===null)continue;break}var p=ts(o);p!==null&&(n.splice(r,3),r-=3,$d(p,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Tu(n){function r(D){return Uh(D,n)}dr!==null&&Uh(dr,n),pr!==null&&Uh(pr,n),_r!==null&&Uh(_r,n),yu.forEach(r),vu.forEach(r);for(var o=0;o<mr.length;o++){var u=mr[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<mr.length&&(o=mr[0],o.blockedOn===null);)NE(o),o.blockedOn===null&&mr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],p=o[u+1],v=f[Mt]||null;if(typeof p=="function")v||OE(o);else if(v){var A=null;if(p&&p.hasAttribute("formAction")){if(f=p,v=p[Mt]||null)A=v.formAction;else if(a_(f)!==null)continue}else A=v.action;typeof A=="function"?o[u+1]=A:(o.splice(u,3),u-=3),OE(o)}}}function l_(n){this._internalRoot=n}Bh.prototype.render=l_.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Hn();wE(o,u,n,r,null,null)},Bh.prototype.unmount=l_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;n.tag===0&&Ro(),wE(n.current,2,null,n,null,null),Sh(),r[es]=null}};function Bh(n){this._internalRoot=n}Bh.prototype.unstable_scheduleHydration=function(n){if(n){var r=Rc();n={blockedOn:null,target:n,priority:r};for(var o=0;o<mr.length&&r!==0&&r<mr[o].priority;o++);mr.splice(o,0,n),o===0&&NE(n)}};var xE=e.version;if(xE!=="19.0.0")throw Error(s(527,xE,"19.0.0"));he.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=$(r),n=n!==null?ie(n):null,n=n===null?null:n.stateNode,n};var eR={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:b,findFiberByHostInstance:pi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zh.isDisabled&&zh.supportsFiber)try{Ls=zh.inject(eR),dn=zh}catch{}}return Au.createRoot=function(n,r){if(!a(n))throw Error(s(299));var o=!1,u="",f=Yy,p=$y,v=Xy,A=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks)),r=SE(n,1,!1,null,null,o,u,f,p,v,A,null),n[es]=r.current,Gp(n.nodeType===8?n.parentNode:n),new l_(r)},Au.hydrateRoot=function(n,r,o){if(!a(n))throw Error(s(299));var u=!1,f="",p=Yy,v=$y,A=Xy,D=null,L=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(D=o.unstable_transitionCallbacks),o.formState!==void 0&&(L=o.formState)),r=SE(n,1,!0,r,o??null,u,f,p,v,A,D,L),r.context=AE(null),o=r.current,u=Hn(),f=rr(u),f.callback=null,ar(o,f,u),r.current.lanes=u,Ct(r,u),ji(r),n[es]=r.current,Gp(n),new Bh(r)},Au.version="19.0.0",Au}var HE;function cR(){if(HE)return h_.exports;HE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),h_.exports=uR(),h_.exports}var hR=cR();const fR="_hideHome_1sau2_19",dR="_home_wrapper_1sau2_27",pR="_left_1sau2_43",_R="_wrapTop_1sau2_61",mR="_wrapBottom_1sau2_141",gR="_orange_1sau2_171",yR="_purple_1sau2_177",vR="_blue_1sau2_183",ER="_right_1sau2_193",ws={hideHome:fR,home_wrapper:dR,left:pR,wrapTop:_R,wrapBottom:mR,orange:gR,purple:yR,blue:vR,right:ER},TR="_animateLeft_1cea5_1",SR="_animateImg_1cea5_11",FE={animateLeft:TR,animateImg:SR},ge=({className:i,content:e,func:t,submit:s,icon:a,change:l,element:c})=>S.jsxs("button",{className:`${i}`,onChange:()=>{l()},onSubmit:d=>{s(d)},onClick:()=>{t()},children:[a,e,c]}),AR="_nav_1n3x3_47",wR="_hideNav_1n3x3_55",bR="_left_1n3x3_101",CR="_middle_1n3x3_129",RR="_NavLinks_1n3x3_129",IR="_indicated_1n3x3_167",NR="_indication_1n3x3_177",DR="_right_1n3x3_195",OR="_HamburgerButt_1n3x3_207",xR="_SignInButt_1n3x3_253",kR="_SignUpButt_1n3x3_287",MR="_sidebar_1n3x3_319",PR="_hideSideBar_1n3x3_329",VR="_User_Button_1n3x3_547",ct={nav:AR,hideNav:wR,left:bR,middle:CR,NavLinks:RR,indicated:IR,indication:NR,right:DR,HamburgerButt:OR,SignInButt:xR,SignUpButt:kR,sidebar:MR,hideSideBar:PR,User_Button:VR},LR=()=>{};var qE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=function(i,e){if(!i)throw ol(e)},ol=function(i){return new Error("Firebase Database ("+$S.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},UR=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],d=i[t++],_=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(_>>10)),e[s++]=String.fromCharCode(56320+(_&1023))}else{const l=i[t++],c=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},ym={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,d=c?i[a+1]:0,_=a+2<i.length,m=_?i[a+2]:0,E=l>>2,T=(l&3)<<4|d>>4;let C=(d&15)<<2|m>>6,V=m&63;_||(V=64,c||(C=64)),s.push(t[E],t[T],t[C],t[V])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(XS(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):UR(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],d=a<i.length?t[i.charAt(a)]:0;++a;const m=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||d==null||m==null||T==null)throw new jR;const C=l<<2|d>>4;if(s.push(C),m!==64){const V=d<<4&240|m>>2;if(s.push(V),T!==64){const H=m<<6&192|T;s.push(H)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class jR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZS=function(i){const e=XS(i);return ym.encodeByteArray(e,!0)},uf=function(i){return ZS(i).replace(/\./g,"")},cf=function(i){try{return ym.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(i){return JS(void 0,i)}function JS(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!zR(t)||(i[t]=JS(i[t],e[t]));return i}function zR(i){return i!=="__proto__"}/**
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
 */function HR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FR=()=>HR().__FIREBASE_DEFAULTS__,qR=()=>{if(typeof process>"u"||typeof qE>"u")return;const i=qE.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},GR=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&cf(i[1]);return e&&JSON.parse(e)},Uf=()=>{try{return LR()||FR()||qR()||GR()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},e0=i=>{var e,t;return(t=(e=Uf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},KR=i=>{const e=e0(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},t0=()=>{var i;return(i=Uf())===null||i===void 0?void 0:i.config},n0=i=>{var e;return(e=Uf())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function WR(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[uf(JSON.stringify(t)),uf(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Em(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(An())}function QR(){var i;const e=(i=Uf())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function YR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $R(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function i0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XR(){const i=An();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function ZR(){return $S.NODE_ADMIN===!0}function JR(){return!QR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eI(){try{return typeof indexedDB=="object"}catch{return!1}}function tI(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="FirebaseError";class Ps extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=nI,Object.setPrototypeOf(this,Ps.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oc.prototype.create)}}class oc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?iI(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Ps(a,d,s)}}function iI(i,e){return i.replace(sI,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const sI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(i){return JSON.parse(i)}function ln(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=function(i){let e={},t={},s={},a="";try{const l=i.split(".");e=Yu(cf(l[0])||""),t=Yu(cf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},rI=function(i){const e=s0(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},aI=function(i){const e=s0(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function $o(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function k_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function hf(i,e,t){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(t,i[a],a,i));return s}function Or(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=i[a],c=e[a];if(GE(l)&&GE(c)){if(!Or(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function GE(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Mu(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Pu(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const C=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(C<<1|C>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],_=this.chain_[4],m,E;for(let T=0;T<80;T++){T<40?T<20?(m=d^l&(c^d),E=1518500249):(m=l^c^d,E=1859775393):T<60?(m=l&c|d&(l|c),E=2400959708):(m=l^c^d,E=3395469782);const C=(a<<5|a>>>27)+m+_+E+s[T]&4294967295;_=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=C}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function lI(i,e){const t=new uI(i,e);return t.subscribe.bind(t)}class uI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");cI(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=__),a.error===void 0&&(a.error=__),a.complete===void 0&&(a.complete=__);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cI(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function __(){}function hI(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,fe(s<i.length,"Surrogate pair missing trail surrogate.");const c=i.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},jf=function(i){let e=0;for(let t=0;t<i.length;t++){const s=i.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function cn(i){return i&&i._delegate?i._delegate:i}class xr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Aa="[DEFAULT]";/**
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
 */class dI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new vm;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_I(e))try{this.getOrInitializeService({instanceIdentifier:Aa})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Aa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Aa){return this.instances.has(e)}getOptions(e=Aa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Aa){return this.component?this.component.multipleInstances?e:Aa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pI(i){return i===Aa?void 0:i}function _I(i){return i.instantiationMode==="EAGER"}/**
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
 */class mI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(je||(je={}));const gI={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},yI=je.INFO,vI={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},EI=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=vI[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bf{constructor(e){this.name=e,this._logLevel=yI,this._logHandler=EI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...e),this._logHandler(this,je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...e),this._logHandler(this,je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,je.INFO,...e),this._logHandler(this,je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,je.WARN,...e),this._logHandler(this,je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...e),this._logHandler(this,je.ERROR,...e)}}const TI=(i,e)=>e.some(t=>i instanceof t);let KE,WE;function SI(){return KE||(KE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AI(){return WE||(WE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const r0=new WeakMap,M_=new WeakMap,a0=new WeakMap,m_=new WeakMap,Tm=new WeakMap;function wI(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(Cr(i.result)),a()},c=()=>{s(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&r0.set(t,i)}).catch(()=>{}),Tm.set(e,i),e}function bI(i){if(M_.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});M_.set(i,e)}let P_={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return M_.get(i);if(e==="objectStoreNames")return i.objectStoreNames||a0.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Cr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function CI(i){P_=i(P_)}function RI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(g_(this),e,...t);return a0.set(s,e.sort?e.sort():[e]),Cr(s)}:AI().includes(i)?function(...e){return i.apply(g_(this),e),Cr(r0.get(this))}:function(...e){return Cr(i.apply(g_(this),e))}}function II(i){return typeof i=="function"?RI(i):(i instanceof IDBTransaction&&bI(i),TI(i,SI())?new Proxy(i,P_):i)}function Cr(i){if(i instanceof IDBRequest)return wI(i);if(m_.has(i))return m_.get(i);const e=II(i);return e!==i&&(m_.set(i,e),Tm.set(e,i)),e}const g_=i=>Tm.get(i);function NI(i,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),d=Cr(c);return s&&c.addEventListener("upgradeneeded",_=>{s(Cr(c.result),_.oldVersion,_.newVersion,Cr(c.transaction),_)}),t&&c.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),d.then(_=>{l&&_.addEventListener("close",()=>l()),a&&_.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const DI=["get","getKey","getAll","getAllKeys","count"],OI=["put","add","delete","clear"],y_=new Map;function QE(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(y_.get(e))return y_.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=OI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||DI.includes(t)))return;const l=async function(c,...d){const _=this.transaction(c,a?"readwrite":"readonly");let m=_.store;return s&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),a&&_.done]))[0]};return y_.set(e,l),l}CI(i=>({...i,get:(e,t,s)=>QE(e,t)||i.get(e,t,s),has:(e,t)=>!!QE(e,t)||i.has(e,t)}));/**
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
 */class xI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(kI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function kI(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const V_="@firebase/app",YE="0.11.2";/**
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
 */const Os=new Bf("@firebase/app"),MI="@firebase/app-compat",PI="@firebase/analytics-compat",VI="@firebase/analytics",LI="@firebase/app-check-compat",UI="@firebase/app-check",jI="@firebase/auth",BI="@firebase/auth-compat",zI="@firebase/database",HI="@firebase/data-connect",FI="@firebase/database-compat",qI="@firebase/functions",GI="@firebase/functions-compat",KI="@firebase/installations",WI="@firebase/installations-compat",QI="@firebase/messaging",YI="@firebase/messaging-compat",$I="@firebase/performance",XI="@firebase/performance-compat",ZI="@firebase/remote-config",JI="@firebase/remote-config-compat",e1="@firebase/storage",t1="@firebase/storage-compat",n1="@firebase/firestore",i1="@firebase/vertexai",s1="@firebase/firestore-compat",r1="firebase",a1="11.4.0";/**
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
 */const L_="[DEFAULT]",o1={[V_]:"fire-core",[MI]:"fire-core-compat",[VI]:"fire-analytics",[PI]:"fire-analytics-compat",[UI]:"fire-app-check",[LI]:"fire-app-check-compat",[jI]:"fire-auth",[BI]:"fire-auth-compat",[zI]:"fire-rtdb",[HI]:"fire-data-connect",[FI]:"fire-rtdb-compat",[qI]:"fire-fn",[GI]:"fire-fn-compat",[KI]:"fire-iid",[WI]:"fire-iid-compat",[QI]:"fire-fcm",[YI]:"fire-fcm-compat",[$I]:"fire-perf",[XI]:"fire-perf-compat",[ZI]:"fire-rc",[JI]:"fire-rc-compat",[e1]:"fire-gcs",[t1]:"fire-gcs-compat",[n1]:"fire-fst",[s1]:"fire-fst-compat",[i1]:"fire-vertex","fire-js":"fire-js",[r1]:"fire-js-all"};/**
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
 */const ff=new Map,l1=new Map,U_=new Map;function $E(i,e){try{i.container.addComponent(e)}catch(t){Os.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Ra(i){const e=i.name;if(U_.has(e))return Os.debug(`There were multiple attempts to register component ${e}.`),!1;U_.set(e,i);for(const t of ff.values())$E(t,i);for(const t of l1.values())$E(t,i);return!0}function Sm(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function qn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const u1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rr=new oc("app","Firebase",u1);/**
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
 */class c1{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ua=a1;function o0(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:L_,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw Rr.create("bad-app-name",{appName:String(a)});if(t||(t=t0()),!t)throw Rr.create("no-options");const l=ff.get(a);if(l){if(Or(t,l.options)&&Or(s,l.config))return l;throw Rr.create("duplicate-app",{appName:a})}const c=new mI(a);for(const _ of U_.values())c.addComponent(_);const d=new c1(t,s,c);return ff.set(a,d),d}function l0(i=L_){const e=ff.get(i);if(!e&&i===L_&&t0())return o0();if(!e)throw Rr.create("no-app",{appName:i});return e}function Fi(i,e,t){var s;let a=(s=o1[i])!==null&&s!==void 0?s:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Os.warn(d.join(" "));return}Ra(new xr(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const h1="firebase-heartbeat-database",f1=1,$u="firebase-heartbeat-store";let v_=null;function u0(){return v_||(v_=NI(h1,f1,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore($u)}catch(t){console.warn(t)}}}}).catch(i=>{throw Rr.create("idb-open",{originalErrorMessage:i.message})})),v_}async function d1(i){try{const t=(await u0()).transaction($u),s=await t.objectStore($u).get(c0(i));return await t.done,s}catch(e){if(e instanceof Ps)Os.warn(e.message);else{const t=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Os.warn(t.message)}}}async function XE(i,e){try{const s=(await u0()).transaction($u,"readwrite");await s.objectStore($u).put(e,c0(i)),await s.done}catch(t){if(t instanceof Ps)Os.warn(t.message);else{const s=Rr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Os.warn(s.message)}}}function c0(i){return`${i.name}!${i.options.appId}`}/**
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
 */const p1=1024,_1=30;class m1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new y1(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=ZE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>_1){const c=v1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Os.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ZE(),{heartbeatsToSend:s,unsentEntries:a}=g1(this._heartbeatsCache.heartbeats),l=uf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Os.warn(t),""}}}function ZE(){return new Date().toISOString().substring(0,10)}function g1(i,e=p1){const t=[];let s=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),JE(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),JE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class y1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eI()?tI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await d1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return XE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return XE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function JE(i){return uf(JSON.stringify({version:2,heartbeats:i})).length}function v1(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function E1(i){Ra(new xr("platform-logger",e=>new xI(e),"PRIVATE")),Ra(new xr("heartbeat",e=>new m1(e),"PRIVATE")),Fi(V_,YE,i),Fi(V_,YE,"esm2017"),Fi("fire-js","")}E1("");function Am(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(t[s[a]]=i[s[a]]);return t}function h0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const T1=h0,f0=new oc("auth","Firebase",h0());/**
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
 */const df=new Bf("@firebase/auth");function S1(i,...e){df.logLevel<=je.WARN&&df.warn(`Auth (${Ua}): ${i}`,...e)}function Zh(i,...e){df.logLevel<=je.ERROR&&df.error(`Auth (${Ua}): ${i}`,...e)}/**
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
 */function Si(i,...e){throw wm(i,...e)}function qi(i,...e){return wm(i,...e)}function d0(i,e,t){const s=Object.assign(Object.assign({},T1()),{[e]:t});return new oc("auth","Firebase",s).create(e,{appName:i.name})}function Ns(i){return d0(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wm(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return f0.create(i,...e)}function Ce(i,e,...t){if(!i)throw wm(e,...t)}function bs(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Zh(e),new Error(e)}function xs(i,e){i||bs(e)}/**
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
 */function j_(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function A1(){return eT()==="http:"||eT()==="https:"}function eT(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function w1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(A1()||$R()||"connection"in navigator)?navigator.onLine:!0}function b1(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class lc{constructor(e,t){this.shortDelay=e,this.longDelay=t,xs(t>e,"Short delay should be less than long delay!"),this.isMobile=Em()||i0()}get(){return w1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bm(i,e){xs(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class p0{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const C1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const R1=new lc(3e4,6e4);function Br(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function zr(i,e,t,s,a={}){return _0(i,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=ll(Object.assign({key:i.config.apiKey},c)).slice(1),_=await i._getAdditionalHeaders();_["Content-Type"]="application/json",i.languageCode&&(_["X-Firebase-Locale"]=i.languageCode);const m=Object.assign({method:e,headers:_},l);return YR()||(m.referrerPolicy="no-referrer"),p0.fetch()(m0(i,i.config.apiHost,t,d),m)})}async function _0(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},C1),e);try{const a=new N1(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Hh(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[_,m]=d.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hh(i,"credential-already-in-use",c);if(_==="EMAIL_EXISTS")throw Hh(i,"email-already-in-use",c);if(_==="USER_DISABLED")throw Hh(i,"user-disabled",c);const E=s[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw d0(i,E,m);Si(i,E)}}catch(a){if(a instanceof Ps)throw a;Si(i,"network-request-failed",{message:String(a)})}}async function uc(i,e,t,s,a={}){const l=await zr(i,e,t,s,a);return"mfaPendingCredential"in l&&Si(i,"multi-factor-auth-required",{_serverResponse:l}),l}function m0(i,e,t,s){const a=`${e}${t}?${s}`;return i.config.emulator?bm(i.config,a):`${i.config.apiScheme}://${a}`}function I1(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class N1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(qi(this.auth,"network-request-failed")),R1.get())})}}function Hh(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=qi(i,e,s);return a.customData._tokenResponse=t,a}function tT(i){return i!==void 0&&i.enterprise!==void 0}class D1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return I1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function O1(i,e){return zr(i,"GET","/v2/recaptchaConfig",Br(i,e))}/**
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
 */async function x1(i,e){return zr(i,"POST","/v1/accounts:delete",e)}async function g0(i,e){return zr(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function k1(i,e=!1){const t=cn(i),s=await t.getIdToken(e),a=Cm(s);Ce(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:Bu(E_(a.auth_time)),issuedAtTime:Bu(E_(a.iat)),expirationTime:Bu(E_(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function E_(i){return Number(i)*1e3}function Cm(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Zh("JWT malformed, contained fewer than 3 sections"),null;try{const a=cf(t);return a?JSON.parse(a):(Zh("Failed to decode base64 JWT payload"),null)}catch(a){return Zh("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function nT(i){const e=Cm(i);return Ce(e,"internal-error"),Ce(typeof e.exp<"u","internal-error"),Ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xu(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ps&&M1(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function M1({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class P1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class B_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bu(this.lastLoginAt),this.creationTime=Bu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pf(i){var e;const t=i.auth,s=await i.getIdToken(),a=await Xu(i,g0(t,{idToken:s}));Ce(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?y0(l.providerUserInfo):[],d=L1(i.providerData,c),_=i.isAnonymous,m=!(i.email&&l.passwordHash)&&!(d!=null&&d.length),E=_?m:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new B_(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(i,T)}async function V1(i){const e=cn(i);await pf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function L1(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function y0(i){return i.map(e=>{var{providerId:t}=e,s=Am(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function U1(i,e){const t=await _0(i,{},async()=>{const s=ll({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=m0(i,a,"/v1/token",`key=${l}`),d=await i._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",p0.fetch()(c,{method:"POST",headers:d,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function j1(i,e){return zr(i,"POST","/v2/accounts:revokeToken",Br(i,e))}/**
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
 */class qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ce(e.idToken,"internal-error"),Ce(typeof e.idToken<"u","internal-error"),Ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ce(e.length!==0,"internal-error");const t=nT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await U1(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new qo;return s&&(Ce(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Ce(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ce(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qo,this.toJSON())}_performRefresh(){return bs("not implemented")}}/**
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
 */function yr(i,e){Ce(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Cs{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=Am(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new P1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new B_(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Xu(this,this.stsTokenManager.getToken(this.auth,e));return Ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return k1(this,e)}reload(){return V1(this)}_assign(e){this!==e&&(Ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Cs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await pf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(Ns(this.auth));const e=await this.getIdToken();return await Xu(this,x1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,d,_,m,E;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,C=(a=t.email)!==null&&a!==void 0?a:void 0,V=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,H=(c=t.photoURL)!==null&&c!==void 0?c:void 0,X=(d=t.tenantId)!==null&&d!==void 0?d:void 0,F=(_=t._redirectEventId)!==null&&_!==void 0?_:void 0,Y=(m=t.createdAt)!==null&&m!==void 0?m:void 0,ee=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ue,emailVerified:re,isAnonymous:de,providerData:ye,stsTokenManager:x}=t;Ce(ue&&x,e,"internal-error");const I=qo.fromJSON(this.name,x);Ce(typeof ue=="string",e,"internal-error"),yr(T,e.name),yr(C,e.name),Ce(typeof re=="boolean",e,"internal-error"),Ce(typeof de=="boolean",e,"internal-error"),yr(V,e.name),yr(H,e.name),yr(X,e.name),yr(F,e.name),yr(Y,e.name),yr(ee,e.name);const b=new Cs({uid:ue,auth:e,email:C,emailVerified:re,displayName:T,isAnonymous:de,photoURL:H,phoneNumber:V,tenantId:X,stsTokenManager:I,createdAt:Y,lastLoginAt:ee});return ye&&Array.isArray(ye)&&(b.providerData=ye.map(R=>Object.assign({},R))),F&&(b._redirectEventId=F),b}static async _fromIdTokenResponse(e,t,s=!1){const a=new qo;a.updateFromServerResponse(t);const l=new Cs({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await pf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ce(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?y0(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new qo;d.updateFromIdToken(s);const _=new Cs({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new B_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(_,m),_}}/**
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
 */const iT=new Map;function Rs(i){xs(i instanceof Function,"Expected a class definition");let e=iT.get(i);return e?(xs(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,iT.set(i,e),e)}/**
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
 */class v0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}v0.type="NONE";const sT=v0;/**
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
 */function Jh(i,e,t){return`firebase:${i}:${e}:${t}`}class Go{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=Jh(this.userKey,a.apiKey,l),this.fullPersistenceKey=Jh("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Go(Rs(sT),e,s);const a=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=a[0]||Rs(sT);const c=Jh(s,e.config.apiKey,e.name);let d=null;for(const m of t)try{const E=await m._get(c);if(E){const T=Cs._fromJSON(e,E);m!==l&&(d=T),l=m;break}}catch{}const _=a.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!_.length?new Go(l,e,s):(l=_[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==l)try{await m._remove(c)}catch{}})),new Go(l,e,s))}}/**
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
 */function rT(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(A0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(E0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(b0(e))return"Blackberry";if(C0(e))return"Webos";if(T0(e))return"Safari";if((e.includes("chrome/")||S0(e))&&!e.includes("edge/"))return"Chrome";if(w0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function E0(i=An()){return/firefox\//i.test(i)}function T0(i=An()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function S0(i=An()){return/crios\//i.test(i)}function A0(i=An()){return/iemobile/i.test(i)}function w0(i=An()){return/android/i.test(i)}function b0(i=An()){return/blackberry/i.test(i)}function C0(i=An()){return/webos/i.test(i)}function Rm(i=An()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function B1(i=An()){var e;return Rm(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function z1(){return XR()&&document.documentMode===10}function R0(i=An()){return Rm(i)||w0(i)||C0(i)||b0(i)||/windows phone/i.test(i)||A0(i)}/**
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
 */function I0(i,e=[]){let t;switch(i){case"Browser":t=rT(An());break;case"Worker":t=`${rT(An())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ua}/${s}`}/**
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
 */class H1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const _=e(l);c(_)}catch(_){d(_)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function F1(i,e={}){return zr(i,"GET","/v2/passwordPolicy",Br(i,e))}/**
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
 */const q1=6;class G1{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:q1,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,d;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,_),this.validatePasswordCharacterOptions(e,_),_.isValid&&(_.isValid=(t=_.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),_.isValid&&(_.isValid=(s=_.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),_.isValid&&(_.isValid=(a=_.containsLowercaseLetter)!==null&&a!==void 0?a:!0),_.isValid&&(_.isValid=(l=_.containsUppercaseLetter)!==null&&l!==void 0?l:!0),_.isValid&&(_.isValid=(c=_.containsNumericCharacter)!==null&&c!==void 0?c:!0),_.isValid&&(_.isValid=(d=_.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),_}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class K1{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new aT(this),this.idTokenSubscription=new aT(this),this.beforeStateQueue=new H1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=f0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rs(t)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await Go.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await g0(this,{idToken:e}),s=await Cs._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(qn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,_=await this.tryRedirectSignIn(e);(!c||c===d)&&(_!=null&&_.user)&&(a=_.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await pf(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=b1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qn(this.app))return Promise.reject(Ns(this));const t=e?cn(e):null;return t&&Ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(Ns(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qn(this.app)?Promise.reject(Ns(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await F1(this),t=new G1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await j1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rs(e)||this._popupRedirectResolver;Ce(t,this,"argument-error"),this.redirectPersistenceManager=await Go.create(this,[Rs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ce(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,s,a);return()=>{c=!0,_()}}else{const _=e.addObserver(t);return()=>{c=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=I0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(qn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&S1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ja(i){return cn(i)}class aT{constructor(e){this.auth=e,this.observer=null,this.addObserver=lI(t=>this.observer=t)}get next(){return Ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function W1(i){zf=i}function N0(i){return zf.loadJS(i)}function Q1(){return zf.recaptchaEnterpriseScript}function Y1(){return zf.gapiScript}function $1(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class X1{constructor(){this.enterprise=new Z1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Z1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const J1="recaptcha-enterprise",D0="NO_RECAPTCHA";class eN{constructor(e){this.type=J1,this.auth=ja(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{O1(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new D1(_);return l.tenantId==null?l._agentRecaptchaConfig=m:l._tenantRecaptchaConfigs[l.tenantId]=m,c(m.siteKey)}}).catch(_=>{d(_)})})}function a(l,c,d){const _=window.grecaptcha;tT(_)?_.enterprise.ready(()=>{_.enterprise.execute(l,{action:e}).then(m=>{c(m)}).catch(()=>{c(D0)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new X1().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(d=>{if(!t&&tT(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let _=Q1();_.length!==0&&(_+=d),N0(_).then(()=>{a(d,l,c)}).catch(m=>{c(m)})}}).catch(d=>{c(d)})})}}async function oT(i,e,t,s=!1,a=!1){const l=new eN(i);let c;if(a)c=D0;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const _=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const _=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function z_(i,e,t,s,a){var l;if(!((l=i._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await oT(i,e,t,t==="getOobCode");return s(i,c)}else return s(i,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await oT(i,e,t,t==="getOobCode");return s(i,d)}else return Promise.reject(c)})}/**
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
 */function tN(i,e){const t=Sm(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Or(l,e??{}))return a;Si(a,"already-initialized")}return t.initialize({options:e})}function nN(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Rs);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function iN(i,e,t){const s=ja(i);Ce(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=O0(e),{host:c,port:d}=sN(e),_=d===null?"":`:${d}`,m={url:`${l}//${c}${_}/`},E=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ce(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ce(Or(m,s.config.emulator)&&Or(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=m,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,rN()}function O0(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function sN(i){const e=O0(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:lT(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:lT(c)}}}function lT(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function rN(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Im{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bs("not implemented")}_getIdTokenResponse(e){return bs("not implemented")}_linkToIdToken(e,t){return bs("not implemented")}_getReauthenticationResolver(e){return bs("not implemented")}}async function aN(i,e){return zr(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function oN(i,e){return uc(i,"POST","/v1/accounts:signInWithPassword",Br(i,e))}/**
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
 */async function lN(i,e){return uc(i,"POST","/v1/accounts:signInWithEmailLink",Br(i,e))}async function uN(i,e){return uc(i,"POST","/v1/accounts:signInWithEmailLink",Br(i,e))}/**
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
 */class Zu extends Im{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Zu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Zu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return z_(e,t,"signInWithPassword",oN);case"emailLink":return lN(e,{email:this._email,oobCode:this._password});default:Si(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return z_(e,s,"signUpPassword",aN);case"emailLink":return uN(e,{idToken:t,email:this._email,oobCode:this._password});default:Si(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ko(i,e){return uc(i,"POST","/v1/accounts:signInWithIdp",Br(i,e))}/**
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
 */const cN="http://localhost";class Ia extends Im{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ia(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Si("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=Am(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new Ia(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Ko(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ko(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ko(e,t)}buildRequest(){const e={requestUri:cN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ll(t)}return e}}/**
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
 */function hN(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fN(i){const e=Mu(Pu(i)).link,t=e?Mu(Pu(e)).deep_link_id:null,s=Mu(Pu(i)).deep_link_id;return(s?Mu(Pu(s)).link:null)||s||t||e||i}class Nm{constructor(e){var t,s,a,l,c,d;const _=Mu(Pu(e)),m=(t=_.apiKey)!==null&&t!==void 0?t:null,E=(s=_.oobCode)!==null&&s!==void 0?s:null,T=hN((a=_.mode)!==null&&a!==void 0?a:null);Ce(m&&E&&T,"argument-error"),this.apiKey=m,this.operation=T,this.code=E,this.continueUrl=(l=_.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=_.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=_.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=fN(e);try{return new Nm(t)}catch{return null}}}/**
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
 */class ul{constructor(){this.providerId=ul.PROVIDER_ID}static credential(e,t){return Zu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Nm.parseLink(t);return Ce(s,"argument-error"),Zu._fromEmailAndCode(e,s.code,s.tenantId)}}ul.PROVIDER_ID="password";ul.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ul.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class x0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cc extends x0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tr extends cc{constructor(){super("facebook.com")}static credential(e){return Ia._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tr.PROVIDER_ID="facebook.com";/**
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
 */class Sr extends cc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ia._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Sr.credential(t,s)}catch{return null}}}Sr.GOOGLE_SIGN_IN_METHOD="google.com";Sr.PROVIDER_ID="google.com";/**
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
 */class Ar extends cc{constructor(){super("github.com")}static credential(e){return Ia._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.GITHUB_SIGN_IN_METHOD="github.com";Ar.PROVIDER_ID="github.com";/**
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
 */class wr extends cc{constructor(){super("twitter.com")}static credential(e,t){return Ia._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return wr.credential(t,s)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
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
 */async function dN(i,e){return uc(i,"POST","/v1/accounts:signUp",Br(i,e))}/**
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
 */class Na{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await Cs._fromIdTokenResponse(e,s,a),c=uT(s);return new Na({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=uT(s);return new Na({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function uT(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class _f extends Ps{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,_f.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new _f(e,t,s,a)}}function k0(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?_f._fromErrorAndOperation(i,l,e,s):l})}async function pN(i,e,t=!1){const s=await Xu(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Na._forOperation(i,"link",s)}/**
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
 */async function _N(i,e,t=!1){const{auth:s}=i;if(qn(s.app))return Promise.reject(Ns(s));const a="reauthenticate";try{const l=await Xu(i,k0(s,a,e,i),t);Ce(l.idToken,s,"internal-error");const c=Cm(l.idToken);Ce(c,s,"internal-error");const{sub:d}=c;return Ce(i.uid===d,s,"user-mismatch"),Na._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Si(s,"user-mismatch"),l}}/**
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
 */async function M0(i,e,t=!1){if(qn(i.app))return Promise.reject(Ns(i));const s="signIn",a=await k0(i,s,e),l=await Na._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(l.user),l}async function mN(i,e){return M0(ja(i),e)}/**
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
 */async function P0(i){const e=ja(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gN(i,e,t){if(qn(i.app))return Promise.reject(Ns(i));const s=ja(i),c=await z_(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dN).catch(_=>{throw _.code==="auth/password-does-not-meet-requirements"&&P0(i),_}),d=await Na._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(d.user),d}function yN(i,e,t){return qn(i.app)?Promise.reject(Ns(i)):mN(cn(i),ul.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&P0(i),s})}function vN(i,e,t,s){return cn(i).onIdTokenChanged(e,t,s)}function EN(i,e,t){return cn(i).beforeAuthStateChanged(e,t)}function TN(i,e,t,s){return cn(i).onAuthStateChanged(e,t,s)}function V0(i){return cn(i).signOut()}const mf="__sak";/**
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
 */class L0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mf,"1"),this.storage.removeItem(mf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const SN=1e3,AN=10;class U0 extends L0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=R0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,_)=>{this.notifyListeners(c,_)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);z1()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,AN):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},SN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}U0.type="LOCAL";const wN=U0;/**
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
 */class j0 extends L0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}j0.type="SESSION";const B0=j0;/**
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
 */function bN(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Hf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Hf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async m=>m(t.origin,l)),_=await bN(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hf.receivers=[];/**
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
 */function Dm(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class CN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,_)=>{const m=Dm("",20);a.port1.start();const E=setTimeout(()=>{_(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const C=T;if(C.data.eventId===m)switch(C.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(C.data.response);break;default:clearTimeout(E),clearTimeout(l),_(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Gi(){return window}function RN(i){Gi().location.href=i}/**
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
 */function z0(){return typeof Gi().WorkerGlobalScope<"u"&&typeof Gi().importScripts=="function"}async function IN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NN(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function DN(){return z0()?self:null}/**
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
 */const H0="firebaseLocalStorageDb",ON=1,gf="firebaseLocalStorage",F0="fbase_key";class hc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ff(i,e){return i.transaction([gf],e?"readwrite":"readonly").objectStore(gf)}function xN(){const i=indexedDB.deleteDatabase(H0);return new hc(i).toPromise()}function H_(){const i=indexedDB.open(H0,ON);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(gf,{keyPath:F0})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(gf)?e(s):(s.close(),await xN(),e(await H_()))})})}async function cT(i,e,t){const s=Ff(i,!0).put({[F0]:e,value:t});return new hc(s).toPromise()}async function kN(i,e){const t=Ff(i,!1).get(e),s=await new hc(t).toPromise();return s===void 0?null:s.value}function hT(i,e){const t=Ff(i,!0).delete(e);return new hc(t).toPromise()}const MN=800,PN=3;class q0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await H_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>PN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return z0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hf._getInstance(DN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await IN(),!this.activeServiceWorker)return;this.sender=new CN(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await H_();return await cT(e,mf,"1"),await hT(e,mf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>cT(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>kN(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Ff(a,!1).getAll();return new hc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}q0.type="LOCAL";const VN=q0;new lc(3e4,6e4);/**
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
 */function LN(i,e){return e?Rs(e):(Ce(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Om extends Im{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ko(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ko(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ko(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function UN(i){return M0(i.auth,new Om(i),i.bypassAuthState)}function jN(i){const{auth:e,user:t}=i;return Ce(t,e,"internal-error"),_N(t,new Om(i),i.bypassAuthState)}async function BN(i){const{auth:e,user:t}=i;return Ce(t,e,"internal-error"),pN(t,new Om(i),i.bypassAuthState)}/**
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
 */class G0{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const _={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(_))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UN;case"linkViaPopup":case"linkViaRedirect":return BN;case"reauthViaPopup":case"reauthViaRedirect":return jN;default:Si(this.auth,"internal-error")}}resolve(e){xs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zN=new lc(2e3,1e4);class zo extends G0{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,zo.currentPopupAction&&zo.currentPopupAction.cancel(),zo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ce(e,this.auth,"internal-error"),e}async onExecution(){xs(this.filter.length===1,"Popup operations only handle one event");const e=Dm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(qi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zN.get())};e()}}zo.currentPopupAction=null;/**
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
 */const HN="pendingRedirect",ef=new Map;class FN extends G0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ef.get(this.auth._key());if(!e){try{const s=await qN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ef.set(this.auth._key(),e)}return this.bypassAuthState||ef.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qN(i,e){const t=WN(e),s=KN(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function GN(i,e){ef.set(i._key(),e)}function KN(i){return Rs(i._redirectPersistence)}function WN(i){return Jh(HN,i.config.apiKey,i.name)}async function QN(i,e,t=!1){if(qn(i.app))return Promise.reject(Ns(i));const s=ja(i),a=LN(s,e),c=await new FN(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const YN=10*60*1e3;class $N{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!K0(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(qi(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YN&&this.cachedEventUids.clear(),this.cachedEventUids.has(fT(e))}saveEventToCache(e){this.cachedEventUids.add(fT(e)),this.lastProcessedEventTime=Date.now()}}function fT(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function K0({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XN(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return K0(i);default:return!1}}/**
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
 */async function ZN(i,e={}){return zr(i,"GET","/v1/projects",e)}/**
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
 */const JN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eD=/^https?/;async function tD(i){if(i.config.emulator)return;const{authorizedDomains:e}=await ZN(i);for(const t of e)try{if(nD(t))return}catch{}Si(i,"unauthorized-domain")}function nD(i){const e=j_(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!eD.test(t))return!1;if(JN.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const iD=new lc(3e4,6e4);function dT(){const i=Gi().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function sD(i){return new Promise((e,t)=>{var s,a,l;function c(){dT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dT(),t(qi(i,"network-request-failed"))},timeout:iD.get()})}if(!((a=(s=Gi().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Gi().gapi)===null||l===void 0)&&l.load)c();else{const d=$1("iframefcb");return Gi()[d]=()=>{gapi.load?c():t(qi(i,"network-request-failed"))},N0(`${Y1()}?onload=${d}`).catch(_=>t(_))}}).catch(e=>{throw tf=null,e})}let tf=null;function rD(i){return tf=tf||sD(i),tf}/**
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
 */const aD=new lc(5e3,15e3),oD="__/auth/iframe",lD="emulator/auth/iframe",uD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hD(i){const e=i.config;Ce(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?bm(e,lD):`https://${i.config.authDomain}/${oD}`,s={apiKey:e.apiKey,appName:i.name,v:Ua},a=cD.get(i.config.apiHost);a&&(s.eid=a);const l=i._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${ll(s).slice(1)}`}async function fD(i){const e=await rD(i),t=Gi().gapi;return Ce(t,i,"internal-error"),e.open({where:document.body,url:hD(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uD,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=qi(i,"network-request-failed"),d=Gi().setTimeout(()=>{l(c)},aD.get());function _(){Gi().clearTimeout(d),a(s)}s.ping(_).then(_,()=>{l(c)})}))}/**
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
 */const dD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pD=500,_D=600,mD="_blank",gD="http://localhost";class pT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yD(i,e,t,s=pD,a=_D){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const _=Object.assign(Object.assign({},dD),{width:s.toString(),height:a.toString(),top:l,left:c}),m=An().toLowerCase();t&&(d=S0(m)?mD:t),E0(m)&&(e=e||gD,_.scrollbars="yes");const E=Object.entries(_).reduce((C,[V,H])=>`${C}${V}=${H},`,"");if(B1(m)&&d!=="_self")return vD(e||"",d),new pT(null);const T=window.open(e||"",d,E);Ce(T,i,"popup-blocked");try{T.focus()}catch{}return new pT(T)}function vD(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const ED="__/auth/handler",TD="emulator/auth/handler",SD=encodeURIComponent("fac");async function _T(i,e,t,s,a,l){Ce(i.config.authDomain,i,"auth-domain-config-required"),Ce(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Ua,eventId:a};if(e instanceof x0){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",k_(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))c[E]=T}if(e instanceof cc){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(c.scopes=E.join(","))}i.tenantId&&(c.tid=i.tenantId);const d=c;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const _=await i._getAppCheckToken(),m=_?`#${SD}=${encodeURIComponent(_)}`:"";return`${AD(i)}?${ll(d).slice(1)}${m}`}function AD({config:i}){return i.emulator?bm(i,TD):`https://${i.authDomain}/${ED}`}/**
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
 */const T_="webStorageSupport";class wD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=B0,this._completeRedirectFn=QN,this._overrideRedirectResult=GN}async _openPopup(e,t,s,a){var l;xs((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await _T(e,t,s,j_(),a);return yD(e,c,Dm())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await _T(e,t,s,j_(),a);return RN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(xs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await fD(e),s=new $N(e);return t.register("authEvent",a=>(Ce(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(T_,{type:T_},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[T_];c!==void 0&&t(!!c),Si(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return R0()||T0()||Rm()}}const bD=wD;var mT="@firebase/auth",gT="1.9.1";/**
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
 */class CD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function RD(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ID(i){Ra(new xr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Ce(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const _={apiKey:c,authDomain:d,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:I0(i)},m=new K1(s,a,l,_);return nN(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ra(new xr("auth-internal",e=>{const t=ja(e.getProvider("auth").getImmediate());return(s=>new CD(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fi(mT,gT,RD(i)),Fi(mT,gT,"esm2017")}/**
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
 */const ND=5*60,DD=n0("authIdTokenMaxAge")||ND;let yT=null;const OD=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>DD)return;const a=t==null?void 0:t.token;yT!==a&&(yT=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function xD(i=l0()){const e=Sm(i,"auth");if(e.isInitialized())return e.getImmediate();const t=tN(i,{popupRedirectResolver:bD,persistence:[VN,wN,B0]}),s=n0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=OD(l.toString());EN(t,c,()=>c(t.currentUser)),vN(t,d=>c(d))}}const a=e0("auth");return a&&iN(t,`http://${a}`),t}function kD(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}W1({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const l=qi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",kD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ID("Browser");var MD="firebase",PD="11.4.0";/**
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
 */Fi(MD,PD,"app");var vT={};const ET="@firebase/database",TT="1.0.13";/**
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
 */let W0="";function VD(i){W0=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ln(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Yu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Vs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new LD(e)}}catch{}return new UD},ba=Q0("localStorage"),jD=Q0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=new Bf("@firebase/database"),BD=function(){let i=1;return function(){return i++}}(),Y0=function(i){const e=fI(i),t=new oI;t.update(e);const s=t.digest();return ym.encodeByteArray(s)},fc=function(...i){let e="";for(let t=0;t<i.length;t++){const s=i[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=fc.apply(null,s):typeof s=="object"?e+=ln(s):e+=s,e+=" "}return e};let zu=null,ST=!0;const zD=function(i,e){fe(!0,"Can't turn on custom loggers persistently."),Wo.logLevel=je.VERBOSE,zu=Wo.log.bind(Wo)},vn=function(...i){if(ST===!0&&(ST=!1,zu===null&&jD.get("logging_enabled")===!0&&zD()),zu){const e=fc.apply(null,i);zu(e)}},dc=function(i){return function(...e){vn(i,...e)}},F_=function(...i){const e="FIREBASE INTERNAL ERROR: "+fc(...i);Wo.error(e)},Da=function(...i){const e=`FIREBASE FATAL ERROR: ${fc(...i)}`;throw Wo.error(e),new Error(e)},Kn=function(...i){const e="FIREBASE WARNING: "+fc(...i);Wo.warn(e)},HD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Kn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},$0=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},FD=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Xo="[MIN_NAME]",Oa="[MAX_NAME]",cl=function(i,e){if(i===e)return 0;if(i===Xo||e===Oa)return-1;if(e===Xo||i===Oa)return 1;{const t=AT(i),s=AT(e);return t!==null?s!==null?t-s===0?i.length-e.length:t-s:-1:s!==null?1:i<e?-1:1}},qD=function(i,e){return i===e?0:i<e?-1:1},wu=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+ln(e))},xm=function(i){if(typeof i!="object"||i===null)return ln(i);const e=[];for(const s in i)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ln(e[s]),t+=":",t+=xm(i[e[s]]);return t+="}",t},X0=function(i,e){const t=i.length;if(t<=e)return[i];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(i.substring(a,t)):s.push(i.substring(a,a+e));return s};function fi(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const Z0=function(i){fe(!$0(i),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,_;i===0?(l=0,c=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(i)/Math.LN2),s),l=d+s,c=Math.round(i*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(i/Math.pow(2,1-s-t))));const m=[];for(_=t;_;_-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(_=e;_;_-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(a?1:0),m.reverse();const E=m.join("");let T="";for(_=0;_<64;_+=8){let C=parseInt(E.substr(_,8),2).toString(16);C.length===1&&(C="0"+C),T=T+C}return T.toLowerCase()},GD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},KD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},WD=new RegExp("^-?(0*)\\d{1,10}$"),QD=-2147483648,YD=2147483647,AT=function(i){if(WD.test(i)){const e=Number(i);if(e>=QD&&e<=YD)return e}return null},pc=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Kn("Exception was thrown by user callback.",t),e},Math.floor(0))}},$D=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Hu=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class XD{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,qn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Kn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(vn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Kn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="5",J0="v",eA="s",tA="r",nA="f",iA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,sA="ls",rA="p",q_="ac",aA="websocket",oA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,t,s,a,l=!1,c="",d=!1,_=!1,m=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=_,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ba.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ba.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function eO(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function lA(i,e,t){fe(typeof e=="string","typeof type must == string"),fe(typeof t=="object","typeof params must == object");let s;if(e===aA)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===oA)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eO(i)&&(t.ns=i.namespace);const a=[];return fi(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(){this.counters_={}}incrementCounter(e,t=1){Vs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return BR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_={},A_={};function Mm(i){const e=i.toString();return S_[e]||(S_[e]=new tO),S_[e]}function nO(i,e){const t=i.toString();return A_[t]||(A_[t]=e()),A_[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&pc(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="start",sO="close",rO="pLPCommand",aO="pRTLPCB",uA="id",cA="pw",hA="ser",oO="cb",lO="seg",uO="ts",cO="d",hO="dframe",fA=1870,dA=30,fO=fA-dA,dO=25e3,pO=3e4;class Ho{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=dc(e),this.stats_=Mm(t),this.urlFn=_=>(this.appCheckToken&&(_[q_]=this.appCheckToken),lA(t,oA,_))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new iO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pO)),FD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pm((...l)=>{const[c,d,_,m,E]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===wT)this.id=d,this.password=_;else if(c===sO)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[wT]="t",s[hA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[oO]=this.scriptTagHolder.uniqueCallbackIdentifier),s[J0]=km,this.transportSessionId&&(s[eA]=this.transportSessionId),this.lastSessionId&&(s[sA]=this.lastSessionId),this.applicationId&&(s[rA]=this.applicationId),this.appCheckToken&&(s[q_]=this.appCheckToken),typeof location<"u"&&location.hostname&&iA.test(location.hostname)&&(s[tA]=nA);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ho.forceAllow_=!0}static forceDisallow(){Ho.forceDisallow_=!0}static isAvailable(){return Ho.forceAllow_?!0:!Ho.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!GD()&&!KD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ln(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ZS(t),a=X0(s,fO);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[hO]="t",s[uA]=e,s[cA]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ln(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Pm{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=BD(),window[rO+this.uniqueCallbackIdentifier]=e,window[aO+this.uniqueCallbackIdentifier]=t,this.myIFrame=Pm.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){vn("frame writing exception"),d.stack&&vn(d.stack),vn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||vn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[uA]=this.myID,e[cA]=this.myPW,e[hA]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+dA+s.length<=fA;){const c=this.pendingSegs.shift();s=s+"&"+lO+a+"="+c.seg+"&"+uO+a+"="+c.ts+"&"+cO+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(dO)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{vn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=16384,mO=45e3;let yf=null;typeof MozWebSocket<"u"?yf=MozWebSocket:typeof WebSocket<"u"&&(yf=WebSocket);class vi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=dc(this.connId),this.stats_=Mm(t),this.connURL=vi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[J0]=km,typeof location<"u"&&location.hostname&&iA.test(location.hostname)&&(c[tA]=nA),t&&(c[eA]=t),s&&(c[sA]=s),a&&(c[q_]=a),l&&(c[rA]=l),lA(e,aA,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ba.set("previous_websocket_failure",!0);try{let s;ZR(),this.mySock=new yf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){vi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&yf!==null&&!vi.forceDisallow_}static previouslyFailed(){return ba.isInMemoryStorage||ba.get("previous_websocket_failure")===!0}markConnectionHealthy(){ba.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Yu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(fe(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ln(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=X0(t,_O);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(mO))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vi.responsesRequiredToBeHealthy=2;vi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{static get ALL_TRANSPORTS(){return[Ho,vi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=vi&&vi.isAvailable();let s=t&&!vi.previouslyFailed();if(e.webSocketOnly&&(t||Kn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[vi];else{const a=this.transports_=[];for(const l of Ju.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Ju.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ju.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=6e4,yO=5e3,vO=10*1024,EO=100*1024,w_="t",bT="d",TO="s",CT="r",SO="e",RT="o",IT="a",NT="n",DT="p",AO="h";class wO{constructor(e,t,s,a,l,c,d,_,m,E){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=_,this.onKill_=m,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=dc("c:"+this.id+":"),this.transportManager_=new Ju(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Hu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>EO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(w_ in e){const t=e[w_];t===IT?this.upgradeIfSecondaryHealthy_():t===CT?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===RT&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=wu("t",e),s=wu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:DT,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:IT,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:NT,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=wu("t",e),s=wu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=wu(w_,e);if(bT in e){const s=e[bT];if(t===AO){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===NT){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===TO?this.onConnectionShutdown_(s):t===CT?this.onReset_(s):t===SO?F_("Server Error: "+s):t===RT?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):F_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),km!==s&&Kn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Hu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(gO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Hu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:DT,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ba.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.allowedEvents_=e,this.listeners_={},fe(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){fe(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends _A{static getInstance(){return new vf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Em()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return fe(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=32,xT=768;class _t{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function lt(){return new _t("")}function Qe(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function kr(i){return i.pieces_.length-i.pieceNum_}function pt(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new _t(i.pieces_,e)}function mA(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function bO(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function gA(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function yA(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new _t(e,0)}function Xt(i,e){const t=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)t.push(i.pieces_[s]);if(e instanceof _t)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new _t(t,0)}function Fe(i){return i.pieceNum_>=i.pieces_.length}function hi(i,e){const t=Qe(i),s=Qe(e);if(t===null)return e;if(t===s)return hi(pt(i),pt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function vA(i,e){if(kr(i)!==kr(e))return!1;for(let t=i.pieceNum_,s=e.pieceNum_;t<=i.pieces_.length;t++,s++)if(i.pieces_[t]!==e.pieces_[s])return!1;return!0}function Ei(i,e){let t=i.pieceNum_,s=e.pieceNum_;if(kr(i)>kr(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class CO{constructor(e,t){this.errorPrefix_=t,this.parts_=gA(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=jf(this.parts_[s]);EA(this)}}function RO(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=jf(e),EA(i)}function IO(i){const e=i.parts_.pop();i.byteLength_-=jf(e),i.parts_.length>0&&(i.byteLength_-=1)}function EA(i){if(i.byteLength_>xT)throw new Error(i.errorPrefix_+"has a key path longer than "+xT+" bytes ("+i.byteLength_+").");if(i.parts_.length>OT)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+OT+") or object contains a cycle "+wa(i))}function wa(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm extends _A{static getInstance(){return new Vm}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return fe(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=1e3,NO=60*5*1e3,kT=30*1e3,DO=1.3,OO=3e4,xO="server_kill",MT=3;class Ds extends pA{constructor(e,t,s,a,l,c,d,_){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=_,this.id=Ds.nextPersistentConnectionId_++,this.log_=dc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bu,this.maxReconnectDelay_=NO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(ln(l)),fe(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new vm,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),fe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),fe(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const _=d.d,m=d.s;Ds.warnOnListenWarnings_(_,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(m,_))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Vs(e,"w")){const s=$o(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Kn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||aI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=kT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=rI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),fe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ln(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):F_("Unrecognized action received from server: "+ln(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){fe(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>OO&&(this.reconnectDelay_=bu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*DO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Ds.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const _=function(){d?d.close():(c=!0,s())},m=function(T){fe(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:_,sendRequest:m};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,C]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);c?vn("getToken() completed but was canceled"):(vn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=C&&C.token,d=new wO(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,V=>{Kn(V+" ("+this.repoInfo_.toString()+")"),this.interrupt(xO)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Kn(T),_())}}}interrupt(e){vn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){vn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],k_(this.interruptReasons_)&&(this.reconnectDelay_=bu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>xm(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new _t(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){vn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=MT&&(this.reconnectDelay_=kT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){vn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=MT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+W0.replace(/\./g,"-")]=1,Em()?e["framework.cordova"]=1:i0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vf.getInstance().currentlyOnline();return k_(this.interruptReasons_)&&e}}Ds.nextPersistentConnectionId_=0;Ds.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ye(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ye(Xo,e),a=new Ye(Xo,t);return this.compare(s,a)!==0}minPost(){return Ye.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fh;class TA extends qf{static get __EMPTY_NODE(){return Fh}static set __EMPTY_NODE(e){Fh=e}compare(e,t){return cl(e.name,t.name)}isDefinedOn(e){throw ol("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ye.MIN}maxPost(){return new Ye(Oa,Fh)}makePost(e,t){return fe(typeof e=="string","KeyIndex indexValue must always be a string."),new Ye(e,Fh)}toString(){return".key"}}const Qo=new TA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qh=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Fn=class Vu{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Vu.RED,this.left=a??zi.EMPTY_NODE,this.right=l??zi.EMPTY_NODE}copy(e,t,s,a,l){return new Vu(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return zi.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return zi.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Vu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Vu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Fn.RED=!0;Fn.BLACK=!1;class kO{copy(e,t,s,a,l){return this}insert(e,t,s){return new Fn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let zi=class nf{constructor(e,t=nf.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new nf(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Fn.BLACK,null,null))}remove(e){return new nf(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qh(this.root_,null,this.comparator_,!0,e)}};zi.EMPTY_NODE=new kO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(i,e){return cl(i.name,e.name)}function Lm(i,e){return cl(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G_;function PO(i){G_=i}const SA=function(i){return typeof i=="number"?"number:"+Z0(i):"string:"+i},AA=function(i){if(i.isLeafNode()){const e=i.val();fe(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vs(e,".sv"),"Priority must be a string or number.")}else fe(i===G_||i.isEmpty(),"priority of unexpected type.");fe(i===G_||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PT;class Yt{static set __childrenNodeConstructor(e){PT=e}static get __childrenNodeConstructor(){return PT}constructor(e,t=Yt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,fe(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),AA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Yt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Fe(e)?this:Qe(e)===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Yt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Qe(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(fe(s!==".priority"||kr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Yt.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+SA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Z0(this.value_):e+=this.value_,this.lazyHash_=Y0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Yt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Yt.__childrenNodeConstructor?-1:(fe(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Yt.VALUE_TYPE_ORDER.indexOf(t),l=Yt.VALUE_TYPE_ORDER.indexOf(s);return fe(a>=0,"Unknown leaf type: "+t),fe(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Yt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wA,bA;function VO(i){wA=i}function LO(i){bA=i}class UO extends qf{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?cl(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ye.MIN}maxPost(){return new Ye(Oa,new Yt("[PRIORITY-POST]",bA))}makePost(e,t){const s=wA(e);return new Ye(t,new Yt("[PRIORITY-POST]",s))}toString(){return".priority"}}const Sn=new UO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO=Math.log(2);class BO{constructor(e){const t=l=>parseInt(Math.log(l)/jO,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ef=function(i,e,t,s){i.sort(e);const a=function(_,m){const E=m-_;let T,C;if(E===0)return null;if(E===1)return T=i[_],C=t?t(T):T,new Fn(C,T.node,Fn.BLACK,null,null);{const V=parseInt(E/2,10)+_,H=a(_,V),X=a(V+1,m);return T=i[V],C=t?t(T):T,new Fn(C,T.node,Fn.BLACK,H,X)}},l=function(_){let m=null,E=null,T=i.length;const C=function(H,X){const F=T-H,Y=T;T-=H;const ee=a(F+1,Y),ue=i[F],re=t?t(ue):ue;V(new Fn(re,ue.node,X,null,ee))},V=function(H){m?(m.left=H,m=H):(E=H,m=H)};for(let H=0;H<_.count;++H){const X=_.nextBitIsOne(),F=Math.pow(2,_.count-(H+1));X?C(F,Fn.BLACK):(C(F,Fn.BLACK),C(F,Fn.RED))}return E},c=new BO(i.length),d=l(c);return new zi(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b_;const ko={};class Is{static get Default(){return fe(ko&&Sn,"ChildrenNode.ts has not been loaded"),b_=b_||new Is({".priority":ko},{".priority":Sn}),b_}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=$o(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zi?t:null}hasIndex(e){return Vs(this.indexSet_,e.toString())}addIndex(e,t){fe(e!==Qo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Ye.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=Ef(s,e.getCompare()):d=ko;const _=e.toString(),m=Object.assign({},this.indexSet_);m[_]=e;const E=Object.assign({},this.indexes_);return E[_]=d,new Is(E,m)}addToIndexes(e,t){const s=hf(this.indexes_,(a,l)=>{const c=$o(this.indexSet_,l);if(fe(c,"Missing index implementation for "+l),a===ko)if(c.isDefinedOn(e.node)){const d=[],_=t.getIterator(Ye.Wrap);let m=_.getNext();for(;m;)m.name!==e.name&&d.push(m),m=_.getNext();return d.push(e),Ef(d,c.getCompare())}else return ko;else{const d=t.get(e.name);let _=a;return d&&(_=_.remove(new Ye(e.name,d))),_.insert(e,e.node)}});return new Is(s,this.indexSet_)}removeFromIndexes(e,t){const s=hf(this.indexes_,a=>{if(a===ko)return a;{const l=t.get(e.name);return l?a.remove(new Ye(e.name,l)):a}});return new Is(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu;class st{static get EMPTY_NODE(){return Cu||(Cu=new st(new zi(Lm),null,Is.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&AA(this.priorityNode_),this.children_.isEmpty()&&fe(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Cu}updatePriority(e){return this.children_.isEmpty()?this:new st(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Cu:t}}getChild(e){const t=Qe(e);return t===null?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(fe(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ye(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Cu:this.priorityNode_;return new st(a,c,l)}}updateChild(e,t){const s=Qe(e);if(s===null)return t;{fe(Qe(e)!==".priority"||kr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(pt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(Sn,(c,d)=>{t[c]=d.val(e),s++,l&&st.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+SA(this.getPriority().val())+":"),this.forEachChild(Sn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":Y0(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Ye(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ye(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ye(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Ye.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Ye.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_c?-1:0}withIndex(e){if(e===Qo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new st(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Qo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Sn),a=t.getIterator(Sn);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Qo?null:this.indexMap_.get(e.toString())}}st.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class zO extends st{constructor(){super(new zi(Lm),st.EMPTY_NODE,Is.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return st.EMPTY_NODE}isEmpty(){return!1}}const _c=new zO;Object.defineProperties(Ye,{MIN:{value:new Ye(Xo,st.EMPTY_NODE)},MAX:{value:new Ye(Oa,_c)}});TA.__EMPTY_NODE=st.EMPTY_NODE;Yt.__childrenNodeConstructor=st;PO(_c);LO(_c);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=!0;function En(i,e=null){if(i===null)return st.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),fe(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new Yt(t,En(e))}if(!(i instanceof Array)&&HO){const t=[];let s=!1;if(fi(i,(c,d)=>{if(c.substring(0,1)!=="."){const _=En(d);_.isEmpty()||(s=s||!_.getPriority().isEmpty(),t.push(new Ye(c,_)))}}),t.length===0)return st.EMPTY_NODE;const l=Ef(t,MO,c=>c.name,Lm);if(s){const c=Ef(t,Sn.getCompare());return new st(l,En(e),new Is({".priority":c},{".priority":Sn}))}else return new st(l,En(e),Is.Default)}else{let t=st.EMPTY_NODE;return fi(i,(s,a)=>{if(Vs(i,s)&&s.substring(0,1)!=="."){const l=En(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(En(e))}}VO(En);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO extends qf{constructor(e){super(),this.indexPath_=e,fe(!Fe(e)&&Qe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?cl(e.name,t.name):l}makePost(e,t){const s=En(e),a=st.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ye(t,a)}maxPost(){const e=st.EMPTY_NODE.updateChild(this.indexPath_,_c);return new Ye(Oa,e)}toString(){return gA(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO extends qf{compare(e,t){const s=e.node.compareTo(t.node);return s===0?cl(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ye.MIN}maxPost(){return Ye.MAX}makePost(e,t){const s=En(e);return new Ye(t,s)}toString(){return".value"}}const GO=new qO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(i){return{type:"value",snapshotNode:i}}function WO(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function QO(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function VT(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function YO(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Sn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return fe(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return fe(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xo}hasEnd(){return this.endSet_}getIndexEndValue(){return fe(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return fe(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Oa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return fe(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Sn}copy(){const e=new Um;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function LT(i){const e={};if(i.isDefault())return e;let t;if(i.index_===Sn?t="$priority":i.index_===GO?t="$value":i.index_===Qo?t="$key":(fe(i.index_ instanceof FO,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=ln(t),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=ln(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+ln(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=ln(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+ln(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function UT(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==Sn&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends pA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(fe(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=dc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=Tf.getListenId_(e,s),d={};this.listens_[c]=d;const _=LT(e._queryParams);this.restRequest_(l+".json",_,(m,E)=>{let T=E;if(m===404&&(T=null,m=null),m===null&&this.onDataUpdate_(l,T,!1,s),$o(this.listens_,c)===d){let C;m?m===401?C="permission_denied":C="rest_error:"+m:C="ok",a(C,null)}})}unlisten(e,t){const s=Tf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=LT(e._queryParams),s=e._path.toString(),a=new vm;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ll(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let _=null;if(d.status>=200&&d.status<300){try{_=Yu(d.responseText)}catch{Kn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,_)}else d.status!==401&&d.status!==404&&Kn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(){this.rootNode_=st.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(){return{value:null,children:new Map}}function CA(i,e,t){if(Fe(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const s=Qe(e);i.children.has(s)||i.children.set(s,Sf());const a=i.children.get(s);e=pt(e),CA(a,e,t)}}function K_(i,e,t){i.value!==null?t(e,i.value):XO(i,(s,a)=>{const l=new _t(e.toString()+"/"+s);K_(a,l,t)})}function XO(i,e){i.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&fi(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=10*1e3,JO=30*1e3,ex=5*60*1e3;class tx{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ZO(e);const s=jT+(JO-jT)*Math.random();Hu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;fi(e,(a,l)=>{l>0&&Vs(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Hu(this.reportStats_.bind(this),Math.floor(Math.random()*2*ex))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hi;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Hi||(Hi={}));function RA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function IA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function NA(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Hi.ACK_USER_WRITE,this.source=RA()}operationForChild(e){if(Fe(this.path)){if(this.affectedTree.value!=null)return fe(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new _t(e));return new Af(lt(),t,this.revert)}}else return fe(Qe(this.path)===e,"operationForChild called for unrelated child."),new Af(pt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Hi.OVERWRITE}operationForChild(e){return Fe(this.path)?new xa(this.source,lt(),this.snap.getImmediateChild(e)):new xa(this.source,pt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Hi.MERGE}operationForChild(e){if(Fe(this.path)){const t=this.children.subtree(new _t(e));return t.isEmpty()?null:t.value?new xa(this.source,lt(),t.value):new ec(this.source,lt(),t)}else return fe(Qe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ec(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Fe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Qe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function nx(i,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&i.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(YO(c.childName,c.snapshotNode))}),Ru(i,a,"child_removed",e,s,t),Ru(i,a,"child_added",e,s,t),Ru(i,a,"child_moved",l,s,t),Ru(i,a,"child_changed",e,s,t),Ru(i,a,"value",e,s,t),a}function Ru(i,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,_)=>sx(i,d,_)),c.forEach(d=>{const _=ix(i,d,l);a.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(_,i.query_))})})}function ix(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function sx(i,e,t){if(e.childName==null||t.childName==null)throw ol("Should only compare child_ events.");const s=new Ye(e.childName,e.snapshotNode),a=new Ye(t.childName,t.snapshotNode);return i.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(i,e){return{eventCache:i,serverCache:e}}function Fu(i,e,t,s){return DA(new jm(e,t,s),i.serverCache)}function OA(i,e,t,s){return DA(i.eventCache,new jm(e,t,s))}function W_(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function ka(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C_;const rx=()=>(C_||(C_=new zi(qD)),C_);class dt{static fromObject(e){let t=new dt(null);return fi(e,(s,a)=>{t=t.set(new _t(s),a)}),t}constructor(e,t=rx()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:lt(),value:this.value};if(Fe(e))return null;{const s=Qe(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(pt(e),t);return l!=null?{path:Xt(new _t(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Fe(e))return this;{const t=Qe(e),s=this.children.get(t);return s!==null?s.subtree(pt(e)):new dt(null)}}set(e,t){if(Fe(e))return new dt(t,this.children);{const s=Qe(e),l=(this.children.get(s)||new dt(null)).set(pt(e),t),c=this.children.insert(s,l);return new dt(this.value,c)}}remove(e){if(Fe(e))return this.children.isEmpty()?new dt(null):new dt(null,this.children);{const t=Qe(e),s=this.children.get(t);if(s){const a=s.remove(pt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new dt(null):new dt(this.value,l)}else return this}}get(e){if(Fe(e))return this.value;{const t=Qe(e),s=this.children.get(t);return s?s.get(pt(e)):null}}setTree(e,t){if(Fe(e))return t;{const s=Qe(e),l=(this.children.get(s)||new dt(null)).setTree(pt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new dt(this.value,c)}}fold(e){return this.fold_(lt(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Xt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,lt(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Fe(e))return null;{const l=Qe(e),c=this.children.get(l);return c?c.findOnPath_(pt(e),Xt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,lt(),t)}foreachOnPath_(e,t,s){if(Fe(e))return this;{this.value&&s(t,this.value);const a=Qe(e),l=this.children.get(a);return l?l.foreachOnPath_(pt(e),Xt(t,a),s):new dt(null)}}foreach(e){this.foreach_(lt(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Xt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.writeTree_=e}static empty(){return new Ti(new dt(null))}}function qu(i,e,t){if(Fe(e))return new Ti(new dt(t));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=hi(a,e);return l=l.updateChild(c,t),new Ti(i.writeTree_.set(a,l))}else{const a=new dt(t),l=i.writeTree_.setTree(e,a);return new Ti(l)}}}function BT(i,e,t){let s=i;return fi(t,(a,l)=>{s=qu(s,Xt(e,a),l)}),s}function zT(i,e){if(Fe(e))return Ti.empty();{const t=i.writeTree_.setTree(e,new dt(null));return new Ti(t)}}function Q_(i,e){return Ba(i,e)!=null}function Ba(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild(hi(t.path,e)):null}function HT(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Sn,(s,a)=>{e.push(new Ye(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Ye(s,a.value))}),e}function Ir(i,e){if(Fe(e))return i;{const t=Ba(i,e);return t!=null?new Ti(new dt(t)):new Ti(i.writeTree_.subtree(e))}}function Y_(i){return i.writeTree_.isEmpty()}function Zo(i,e){return xA(lt(),i.writeTree_,e)}function xA(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(fe(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=xA(Xt(i,a),l,t)}),!t.getChild(i).isEmpty()&&s!==null&&(t=t.updateChild(Xt(i,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(i,e){return UA(e,i)}function ax(i,e,t,s,a){fe(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(i.visibleWrites=qu(i.visibleWrites,e,t)),i.lastWriteId=s}function ox(i,e){for(let t=0;t<i.allWrites.length;t++){const s=i.allWrites[t];if(s.writeId===e)return s}return null}function lx(i,e){const t=i.allWrites.findIndex(d=>d.writeId===e);fe(t>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[t];i.allWrites.splice(t,1);let a=s.visible,l=!1,c=i.allWrites.length-1;for(;a&&c>=0;){const d=i.allWrites[c];d.visible&&(c>=t&&ux(d,s.path)?a=!1:Ei(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return cx(i),!0;if(s.snap)i.visibleWrites=zT(i.visibleWrites,s.path);else{const d=s.children;fi(d,_=>{i.visibleWrites=zT(i.visibleWrites,Xt(s.path,_))})}return!0}else return!1}function ux(i,e){if(i.snap)return Ei(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&Ei(Xt(i.path,t),e))return!0;return!1}function cx(i){i.visibleWrites=MA(i.allWrites,hx,lt()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function hx(i){return i.visible}function MA(i,e,t){let s=Ti.empty();for(let a=0;a<i.length;++a){const l=i[a];if(e(l)){const c=l.path;let d;if(l.snap)Ei(t,c)?(d=hi(t,c),s=qu(s,d,l.snap)):Ei(c,t)&&(d=hi(c,t),s=qu(s,lt(),l.snap.getChild(d)));else if(l.children){if(Ei(t,c))d=hi(t,c),s=BT(s,d,l.children);else if(Ei(c,t))if(d=hi(c,t),Fe(d))s=BT(s,lt(),l.children);else{const _=$o(l.children,Qe(d));if(_){const m=_.getChild(pt(d));s=qu(s,lt(),m)}}}else throw ol("WriteRecord should have .snap or .children")}}return s}function PA(i,e,t,s,a){if(!s&&!a){const l=Ba(i.visibleWrites,e);if(l!=null)return l;{const c=Ir(i.visibleWrites,e);if(Y_(c))return t;if(t==null&&!Q_(c,lt()))return null;{const d=t||st.EMPTY_NODE;return Zo(c,d)}}}else{const l=Ir(i.visibleWrites,e);if(!a&&Y_(l))return t;if(!a&&t==null&&!Q_(l,lt()))return null;{const c=function(m){return(m.visible||a)&&(!s||!~s.indexOf(m.writeId))&&(Ei(m.path,e)||Ei(e,m.path))},d=MA(i.allWrites,c,e),_=t||st.EMPTY_NODE;return Zo(d,_)}}}function fx(i,e,t){let s=st.EMPTY_NODE;const a=Ba(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(Sn,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=Ir(i.visibleWrites,e);return t.forEachChild(Sn,(c,d)=>{const _=Zo(Ir(l,new _t(c)),d);s=s.updateImmediateChild(c,_)}),HT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Ir(i.visibleWrites,e);return HT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function dx(i,e,t,s,a){fe(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Xt(e,t);if(Q_(i.visibleWrites,l))return null;{const c=Ir(i.visibleWrites,l);return Y_(c)?a.getChild(t):Zo(c,a.getChild(t))}}function px(i,e,t,s){const a=Xt(e,t),l=Ba(i.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=Ir(i.visibleWrites,a);return Zo(c,s.getNode().getImmediateChild(t))}else return null}function _x(i,e){return Ba(i.visibleWrites,e)}function mx(i,e,t,s,a,l,c){let d;const _=Ir(i.visibleWrites,e),m=Ba(_,lt());if(m!=null)d=m;else if(t!=null)d=Zo(_,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const E=[],T=c.getCompare(),C=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let V=C.getNext();for(;V&&E.length<a;)T(V,s)!==0&&E.push(V),V=C.getNext();return E}else return[]}function gx(){return{visibleWrites:Ti.empty(),allWrites:[],lastWriteId:-1}}function $_(i,e,t,s){return PA(i.writeTree,i.treePath,e,t,s)}function VA(i,e){return fx(i.writeTree,i.treePath,e)}function FT(i,e,t,s){return dx(i.writeTree,i.treePath,e,t,s)}function wf(i,e){return _x(i.writeTree,Xt(i.treePath,e))}function yx(i,e,t,s,a,l){return mx(i.writeTree,i.treePath,e,t,s,a,l)}function Bm(i,e,t){return px(i.writeTree,i.treePath,e,t)}function LA(i,e){return UA(Xt(i.treePath,e),i.writeTree)}function UA(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;fe(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),fe(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,VT(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,QO(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,WO(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,VT(s,e.snapshotNode,a.oldSnap));else throw ol("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const jA=new Ex;class zm{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new jm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bm(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ka(this.viewCache_),l=yx(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function Tx(i,e){fe(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),fe(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function Sx(i,e,t,s,a){const l=new vx;let c,d;if(t.type===Hi.OVERWRITE){const m=t;m.source.fromUser?c=X_(i,e,m.path,m.snap,s,a,l):(fe(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!Fe(m.path),c=bf(i,e,m.path,m.snap,s,a,d,l))}else if(t.type===Hi.MERGE){const m=t;m.source.fromUser?c=wx(i,e,m.path,m.children,s,a,l):(fe(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),c=Z_(i,e,m.path,m.children,s,a,d,l))}else if(t.type===Hi.ACK_USER_WRITE){const m=t;m.revert?c=Rx(i,e,m.path,s,a,l):c=bx(i,e,m.path,m.affectedTree,s,a,l)}else if(t.type===Hi.LISTEN_COMPLETE)c=Cx(i,e,t.path,s,l);else throw ol("Unknown operation type: "+t.type);const _=l.getChanges();return Ax(e,c,_),{viewCache:c,changes:_}}function Ax(i,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=W_(i);(t.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(KO(W_(e)))}}function BA(i,e,t,s,a,l){const c=e.eventCache;if(wf(s,t)!=null)return e;{let d,_;if(Fe(t))if(fe(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=ka(e),E=m instanceof st?m:st.EMPTY_NODE,T=VA(s,E);d=i.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const m=$_(s,ka(e));d=i.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=Qe(t);if(m===".priority"){fe(kr(t)===1,"Can't have a priority with additional path components");const E=c.getNode();_=e.serverCache.getNode();const T=FT(s,t,E,_);T!=null?d=i.filter.updatePriority(E,T):d=c.getNode()}else{const E=pt(t);let T;if(c.isCompleteForChild(m)){_=e.serverCache.getNode();const C=FT(s,t,c.getNode(),_);C!=null?T=c.getNode().getImmediateChild(m).updateChild(E,C):T=c.getNode().getImmediateChild(m)}else T=Bm(s,m,e.serverCache);T!=null?d=i.filter.updateChild(c.getNode(),m,T,E,a,l):d=c.getNode()}}return Fu(e,d,c.isFullyInitialized()||Fe(t),i.filter.filtersNodes())}}function bf(i,e,t,s,a,l,c,d){const _=e.serverCache;let m;const E=c?i.filter:i.filter.getIndexedFilter();if(Fe(t))m=E.updateFullNode(_.getNode(),s,null);else if(E.filtersNodes()&&!_.isFiltered()){const V=_.getNode().updateChild(t,s);m=E.updateFullNode(_.getNode(),V,null)}else{const V=Qe(t);if(!_.isCompleteForPath(t)&&kr(t)>1)return e;const H=pt(t),F=_.getNode().getImmediateChild(V).updateChild(H,s);V===".priority"?m=E.updatePriority(_.getNode(),F):m=E.updateChild(_.getNode(),V,F,H,jA,null)}const T=OA(e,m,_.isFullyInitialized()||Fe(t),E.filtersNodes()),C=new zm(a,T,l);return BA(i,T,t,a,C,d)}function X_(i,e,t,s,a,l,c){const d=e.eventCache;let _,m;const E=new zm(a,e,l);if(Fe(t))m=i.filter.updateFullNode(e.eventCache.getNode(),s,c),_=Fu(e,m,!0,i.filter.filtersNodes());else{const T=Qe(t);if(T===".priority")m=i.filter.updatePriority(e.eventCache.getNode(),s),_=Fu(e,m,d.isFullyInitialized(),d.isFiltered());else{const C=pt(t),V=d.getNode().getImmediateChild(T);let H;if(Fe(C))H=s;else{const X=E.getCompleteChild(T);X!=null?mA(C)===".priority"&&X.getChild(yA(C)).isEmpty()?H=X:H=X.updateChild(C,s):H=st.EMPTY_NODE}if(V.equals(H))_=e;else{const X=i.filter.updateChild(d.getNode(),T,H,C,E,c);_=Fu(e,X,d.isFullyInitialized(),i.filter.filtersNodes())}}}return _}function qT(i,e){return i.eventCache.isCompleteForChild(e)}function wx(i,e,t,s,a,l,c){let d=e;return s.foreach((_,m)=>{const E=Xt(t,_);qT(e,Qe(E))&&(d=X_(i,d,E,m,a,l,c))}),s.foreach((_,m)=>{const E=Xt(t,_);qT(e,Qe(E))||(d=X_(i,d,E,m,a,l,c))}),d}function GT(i,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Z_(i,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let _=e,m;Fe(t)?m=s:m=new dt(null).setTree(t,s);const E=e.serverCache.getNode();return m.children.inorderTraversal((T,C)=>{if(E.hasChild(T)){const V=e.serverCache.getNode().getImmediateChild(T),H=GT(i,V,C);_=bf(i,_,new _t(T),H,a,l,c,d)}}),m.children.inorderTraversal((T,C)=>{const V=!e.serverCache.isCompleteForChild(T)&&C.value===null;if(!E.hasChild(T)&&!V){const H=e.serverCache.getNode().getImmediateChild(T),X=GT(i,H,C);_=bf(i,_,new _t(T),X,a,l,c,d)}}),_}function bx(i,e,t,s,a,l,c){if(wf(a,t)!=null)return e;const d=e.serverCache.isFiltered(),_=e.serverCache;if(s.value!=null){if(Fe(t)&&_.isFullyInitialized()||_.isCompleteForPath(t))return bf(i,e,t,_.getNode().getChild(t),a,l,d,c);if(Fe(t)){let m=new dt(null);return _.getNode().forEachChild(Qo,(E,T)=>{m=m.set(new _t(E),T)}),Z_(i,e,t,m,a,l,d,c)}else return e}else{let m=new dt(null);return s.foreach((E,T)=>{const C=Xt(t,E);_.isCompleteForPath(C)&&(m=m.set(E,_.getNode().getChild(C)))}),Z_(i,e,t,m,a,l,d,c)}}function Cx(i,e,t,s,a){const l=e.serverCache,c=OA(e,l.getNode(),l.isFullyInitialized()||Fe(t),l.isFiltered());return BA(i,c,t,s,jA,a)}function Rx(i,e,t,s,a,l){let c;if(wf(s,t)!=null)return e;{const d=new zm(s,e,a),_=e.eventCache.getNode();let m;if(Fe(t)||Qe(t)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=$_(s,ka(e));else{const T=e.serverCache.getNode();fe(T instanceof st,"serverChildren would be complete if leaf node"),E=VA(s,T)}E=E,m=i.filter.updateFullNode(_,E,l)}else{const E=Qe(t);let T=Bm(s,E,e.serverCache);T==null&&e.serverCache.isCompleteForChild(E)&&(T=_.getImmediateChild(E)),T!=null?m=i.filter.updateChild(_,E,T,pt(t),d,l):e.eventCache.getNode().hasChild(E)?m=i.filter.updateChild(_,E,st.EMPTY_NODE,pt(t),d,l):m=_,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=$_(s,ka(e)),c.isLeafNode()&&(m=i.filter.updateFullNode(m,c,l)))}return c=e.serverCache.isFullyInitialized()||wf(s,lt())!=null,Fu(e,m,c,i.filter.filtersNodes())}}function Ix(i,e){const t=ka(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!Fe(e)&&!t.getImmediateChild(Qe(e)).isEmpty())?t.getChild(e):null}function KT(i,e,t,s){e.type===Hi.MERGE&&e.source.queryId!==null&&(fe(ka(i.viewCache_),"We should always have a full cache before handling merges"),fe(W_(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,l=Sx(i.processor_,a,e,t,s);return Tx(i.processor_,l.viewCache),fe(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=l.viewCache,Nx(i,l.changes,l.viewCache.eventCache.getNode())}function Nx(i,e,t,s){const a=i.eventRegistrations_;return nx(i.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let WT;function Dx(i){fe(!WT,"__referenceConstructor has already been defined"),WT=i}function Hm(i,e,t,s){const a=e.source.queryId;if(a!==null){const l=i.views.get(a);return fe(l!=null,"SyncTree gave us an op for an invalid query."),KT(l,e,t,s)}else{let l=[];for(const c of i.views.values())l=l.concat(KT(c,e,t,s));return l}}function Fm(i,e){let t=null;for(const s of i.views.values())t=t||Ix(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QT;function Ox(i){fe(!QT,"__referenceConstructor has already been defined"),QT=i}class YT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new dt(null),this.pendingWriteTree_=gx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xx(i,e,t,s,a){return ax(i.pendingWriteTree_,e,t,s,a),a?Kf(i,new xa(RA(),e,t)):[]}function Fo(i,e,t=!1){const s=ox(i.pendingWriteTree_,e);if(lx(i.pendingWriteTree_,e)){let l=new dt(null);return s.snap!=null?l=l.set(lt(),!0):fi(s.children,c=>{l=l.set(new _t(c),!0)}),Kf(i,new Af(s.path,l,t))}else return[]}function Gf(i,e,t){return Kf(i,new xa(IA(),e,t))}function kx(i,e,t){const s=dt.fromObject(t);return Kf(i,new ec(IA(),e,s))}function Mx(i,e,t,s){const a=qA(i,s);if(a!=null){const l=GA(a),c=l.path,d=l.queryId,_=hi(c,e),m=new xa(NA(d),_,t);return KA(i,c,m)}else return[]}function Px(i,e,t,s){const a=qA(i,s);if(a){const l=GA(a),c=l.path,d=l.queryId,_=hi(c,e),m=dt.fromObject(t),E=new ec(NA(d),_,m);return KA(i,c,E)}else return[]}function zA(i,e,t){const a=i.pendingWriteTree_,l=i.syncPointTree_.findOnPath(e,(c,d)=>{const _=hi(c,e),m=Fm(d,_);if(m)return m});return PA(a,e,l,t,!0)}function Kf(i,e){return HA(e,i.syncPointTree_,null,kA(i.pendingWriteTree_,lt()))}function HA(i,e,t,s){if(Fe(i.path))return FA(i,e,t,s);{const a=e.get(lt());t==null&&a!=null&&(t=Fm(a,lt()));let l=[];const c=Qe(i.path),d=i.operationForChild(c),_=e.children.get(c);if(_&&d){const m=t?t.getImmediateChild(c):null,E=LA(s,c);l=l.concat(HA(d,_,m,E))}return a&&(l=l.concat(Hm(a,i,s,t))),l}}function FA(i,e,t,s){const a=e.get(lt());t==null&&a!=null&&(t=Fm(a,lt()));let l=[];return e.children.inorderTraversal((c,d)=>{const _=t?t.getImmediateChild(c):null,m=LA(s,c),E=i.operationForChild(c);E&&(l=l.concat(FA(E,d,_,m)))}),a&&(l=l.concat(Hm(a,i,s,t))),l}function qA(i,e){return i.tagToQueryMap.get(e)}function GA(i){const e=i.indexOf("$");return fe(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new _t(i.substr(0,e))}}function KA(i,e,t){const s=i.syncPointTree_.get(e);fe(s,"Missing sync point for query tag that we're tracking");const a=kA(i.pendingWriteTree_,e);return Hm(s,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new qm(t)}node(){return this.node_}}class Gm{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Xt(this.path_,e);return new Gm(this.syncTree_,t)}node(){return zA(this.syncTree_,this.path_)}}const Vx=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},$T=function(i,e,t){if(!i||typeof i!="object")return i;if(fe(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return Lx(i[".sv"],e,t);if(typeof i[".sv"]=="object")return Ux(i[".sv"],e);fe(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},Lx=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:fe(!1,"Unexpected server value: "+i)}},Ux=function(i,e,t){i.hasOwnProperty("increment")||fe(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&fe(!1,"Unexpected increment value: "+s);const a=e.node();if(fe(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},jx=function(i,e,t,s){return Km(e,new Gm(t,i),s)},Bx=function(i,e,t){return Km(i,new qm(e),t)};function Km(i,e,t){const s=i.getPriority().val(),a=$T(s,e.getImmediateChild(".priority"),t);let l;if(i.isLeafNode()){const c=i,d=$T(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Yt(d,En(a)):i}else{const c=i;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Yt(a))),c.forEachChild(Sn,(d,_)=>{const m=Km(_,e.getImmediateChild(d),t);m!==_&&(l=l.updateImmediateChild(d,m))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Qm(i,e){let t=e instanceof _t?e:new _t(e),s=i,a=Qe(t);for(;a!==null;){const l=$o(s.node.children,a)||{children:{},childCount:0};s=new Wm(a,s,l),t=pt(t),a=Qe(t)}return s}function hl(i){return i.node.value}function WA(i,e){i.node.value=e,J_(i)}function QA(i){return i.node.childCount>0}function zx(i){return hl(i)===void 0&&!QA(i)}function Wf(i,e){fi(i.node.children,(t,s)=>{e(new Wm(t,i,s))})}function YA(i,e,t,s){t&&e(i),Wf(i,a=>{YA(a,e,!0)})}function Hx(i,e,t){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function mc(i){return new _t(i.parent===null?i.name:mc(i.parent)+"/"+i.name)}function J_(i){i.parent!==null&&Fx(i.parent,i.name,i)}function Fx(i,e,t){const s=zx(t),a=Vs(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,J_(i)):!s&&!a&&(i.node.children[e]=t.node,i.node.childCount++,J_(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=/[\[\].#$\/\u0000-\u001F\u007F]/,Gx=/[\[\].#$\u0000-\u001F\u007F]/,R_=10*1024*1024,$A=function(i){return typeof i=="string"&&i.length!==0&&!qx.test(i)},Kx=function(i){return typeof i=="string"&&i.length!==0&&!Gx.test(i)},Wx=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Kx(i)},XA=function(i,e,t){const s=t instanceof _t?new CO(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+wa(s));if(typeof e=="function")throw new Error(i+"contains a function "+wa(s)+" with contents = "+e.toString());if($0(e))throw new Error(i+"contains "+e.toString()+" "+wa(s));if(typeof e=="string"&&e.length>R_/3&&jf(e)>R_)throw new Error(i+"contains a string greater than "+R_+" utf8 bytes "+wa(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(fi(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!$A(c)))throw new Error(i+" contains an invalid key ("+c+") "+wa(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);RO(s,c),XA(i,d,s),IO(s)}),a&&l)throw new Error(i+' contains ".value" child '+wa(s)+" in addition to actual children.")}},Qx=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$A(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Wx(t))throw new Error(hI(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $x(i,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!vA(l,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&i.eventLists_.push(t)}function za(i,e,t){$x(i,t),Xx(i,s=>Ei(s,e)||Ei(e,s))}function Xx(i,e){i.recursionDepth_++;let t=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const l=a.path;e(l)?(Zx(i.eventLists_[s]),i.eventLists_[s]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function Zx(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const s=t.getEventRunner();zu&&vn("event: "+t.toString()),pc(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx="repo_interrupt",ek=25;class tk{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Sf(),this.transactionQueueTree_=new Wm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nk(i,e,t){if(i.stats_=Mm(i.repoInfo_),i.forceRestClient_||$D())i.server_=new Tf(i.repoInfo_,(s,a,l,c)=>{XT(i,s,a,l,c)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>ZT(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ln(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new Ds(i.repoInfo_,e,(s,a,l,c)=>{XT(i,s,a,l,c)},s=>{ZT(i,s)},s=>{sk(i,s)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=nO(i.repoInfo_,()=>new tx(i.stats_,i.server_)),i.infoData_=new $O,i.infoSyncTree_=new YT({startListening:(s,a,l,c)=>{let d=[];const _=i.infoData_.getNode(s._path);return _.isEmpty()||(d=Gf(i.infoSyncTree_,s._path,_),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),Ym(i,"connected",!1),i.serverSyncTree_=new YT({startListening:(s,a,l,c)=>(i.server_.listen(s,l,a,(d,_)=>{const m=c(d,_);za(i.eventQueue_,s._path,m)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function ik(i){const t=i.infoData_.getNode(new _t(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ZA(i){return Vx({timestamp:ik(i)})}function XT(i,e,t,s,a){i.dataUpdateCount++;const l=new _t(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const _=hf(t,m=>En(m));c=Px(i.serverSyncTree_,l,_,a)}else{const _=En(t);c=Mx(i.serverSyncTree_,l,_,a)}else if(s){const _=hf(t,m=>En(m));c=kx(i.serverSyncTree_,l,_)}else{const _=En(t);c=Gf(i.serverSyncTree_,l,_)}let d=l;c.length>0&&(d=Xm(i,l)),za(i.eventQueue_,d,c)}function ZT(i,e){Ym(i,"connected",e),e===!1&&ak(i)}function sk(i,e){fi(e,(t,s)=>{Ym(i,t,s)})}function Ym(i,e,t){const s=new _t("/.info/"+e),a=En(t);i.infoData_.updateSnapshot(s,a);const l=Gf(i.infoSyncTree_,s,a);za(i.eventQueue_,s,l)}function rk(i){return i.nextWriteId_++}function ak(i){JA(i,"onDisconnectEvents");const e=ZA(i),t=Sf();K_(i.onDisconnect_,lt(),(a,l)=>{const c=jx(a,l,i.serverSyncTree_,e);CA(t,a,c)});let s=[];K_(t,lt(),(a,l)=>{s=s.concat(Gf(i.serverSyncTree_,a,l));const c=ck(i,a);Xm(i,c)}),i.onDisconnect_=Sf(),za(i.eventQueue_,lt(),s)}function ok(i){i.persistentConnection_&&i.persistentConnection_.interrupt(Jx)}function JA(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),vn(t,...e)}function ew(i,e,t){return zA(i.serverSyncTree_,e,t)||st.EMPTY_NODE}function $m(i,e=i.transactionQueueTree_){if(e||Qf(i,e),hl(e)){const t=nw(i,e);fe(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&lk(i,mc(e),t)}else QA(e)&&Wf(e,t=>{$m(i,t)})}function lk(i,e,t){const s=t.map(m=>m.currentWriteId),a=ew(i,e,s);let l=a;const c=a.hash();for(let m=0;m<t.length;m++){const E=t[m];fe(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const T=hi(e,E.path);l=l.updateChild(T,E.currentOutputSnapshotRaw)}const d=l.val(!0),_=e;i.server_.put(_.toString(),d,m=>{JA(i,"transaction put response",{path:_.toString(),status:m});let E=[];if(m==="ok"){const T=[];for(let C=0;C<t.length;C++)t[C].status=2,E=E.concat(Fo(i.serverSyncTree_,t[C].currentWriteId)),t[C].onComplete&&T.push(()=>t[C].onComplete(null,!0,t[C].currentOutputSnapshotResolved)),t[C].unwatcher();Qf(i,Qm(i.transactionQueueTree_,e)),$m(i,i.transactionQueueTree_),za(i.eventQueue_,e,E);for(let C=0;C<T.length;C++)pc(T[C])}else{if(m==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Kn("transaction at "+_.toString()+" failed: "+m);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=m}Xm(i,e)}},c)}function Xm(i,e){const t=tw(i,e),s=mc(t),a=nw(i,t);return uk(i,a,s),s}function uk(i,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const _=e[d],m=hi(t,_.path);let E=!1,T;if(fe(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)E=!0,T=_.abortReason,a=a.concat(Fo(i.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=ek)E=!0,T="maxretry",a=a.concat(Fo(i.serverSyncTree_,_.currentWriteId,!0));else{const C=ew(i,_.path,c);_.currentInputSnapshot=C;const V=e[d].update(C.val());if(V!==void 0){XA("transaction failed: Data returned ",V,_.path);let H=En(V);typeof V=="object"&&V!=null&&Vs(V,".priority")||(H=H.updatePriority(C.getPriority()));const F=_.currentWriteId,Y=ZA(i),ee=Bx(H,C,Y);_.currentOutputSnapshotRaw=H,_.currentOutputSnapshotResolved=ee,_.currentWriteId=rk(i),c.splice(c.indexOf(F),1),a=a.concat(xx(i.serverSyncTree_,_.path,ee,_.currentWriteId,_.applyLocally)),a=a.concat(Fo(i.serverSyncTree_,F,!0))}else E=!0,T="nodata",a=a.concat(Fo(i.serverSyncTree_,_.currentWriteId,!0))}za(i.eventQueue_,t,a),a=[],E&&(e[d].status=2,function(C){setTimeout(C,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Qf(i,i.transactionQueueTree_);for(let d=0;d<s.length;d++)pc(s[d]);$m(i,i.transactionQueueTree_)}function tw(i,e){let t,s=i.transactionQueueTree_;for(t=Qe(e);t!==null&&hl(s)===void 0;)s=Qm(s,t),e=pt(e),t=Qe(e);return s}function nw(i,e){const t=[];return iw(i,e,t),t.sort((s,a)=>s.order-a.order),t}function iw(i,e,t){const s=hl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Wf(e,a=>{iw(i,a,t)})}function Qf(i,e){const t=hl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,WA(e,t.length>0?t:void 0)}Wf(e,s=>{Qf(i,s)})}function ck(i,e){const t=mc(tw(i,e)),s=Qm(i.transactionQueueTree_,e);return Hx(s,a=>{I_(i,a)}),I_(i,s),YA(s,a=>{I_(i,a)}),t}function I_(i,e){const t=hl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(fe(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(fe(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Fo(i.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?WA(e,void 0):t.length=l+1,za(i.eventQueue_,mc(e),a);for(let c=0;c<s.length;c++)pc(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(i){let e="";const t=i.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function fk(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Kn(`Invalid query segment '${t}' in query '${i}'`)}return e}const JT=function(i,e){const t=dk(i),s=t.namespace;t.domain==="firebase.com"&&Da(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Da("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||HD();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new JD(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new _t(t.pathString)}},dk=function(i){let e="",t="",s="",a="",l="",c=!0,d="https",_=443;if(typeof i=="string"){let m=i.indexOf("//");m>=0&&(d=i.substring(0,m-1),i=i.substring(m+2));let E=i.indexOf("/");E===-1&&(E=i.length);let T=i.indexOf("?");T===-1&&(T=i.length),e=i.substring(0,Math.min(E,T)),E<T&&(a=hk(i.substring(E,T)));const C=fk(i.substring(Math.min(i.length,T)));m=e.indexOf(":"),m>=0?(c=d==="https"||d==="wss",_=parseInt(e.substring(m+1),10)):m=e.length;const V=e.slice(0,m);if(V.toLowerCase()==="localhost")t="localhost";else if(V.split(".").length<=2)t=V;else{const H=e.indexOf(".");s=e.substring(0,H).toLowerCase(),t=e.substring(H+1),l=s}"ns"in C&&(l=C.ns)}return{host:e,port:_,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
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
 */class Zm{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Fe(this._path)?null:mA(this._path)}get ref(){return new fl(this._repo,this._path)}get _queryIdentifier(){const e=UT(this._queryParams),t=xm(e);return t==="{}"?"default":t}get _queryObject(){return UT(this._queryParams)}isEqual(e){if(e=cn(e),!(e instanceof Zm))return!1;const t=this._repo===e._repo,s=vA(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+bO(this._path)}}class fl extends Zm{constructor(e,t){super(e,t,new Um,!1)}get parent(){const e=yA(this._path);return e===null?null:new fl(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Dx(fl);Ox(fl);/**
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
 */const pk="FIREBASE_DATABASE_EMULATOR_HOST",em={};let _k=!1;function mk(i,e,t,s,a){let l=s||i.options.databaseURL;l===void 0&&(i.options.projectId||Da("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),vn("Using default host for project ",i.options.projectId),l=`${i.options.projectId}-default-rtdb.firebaseio.com`);let c=JT(l,a),d=c.repoInfo,_;typeof process<"u"&&vT&&(_=vT[pk]),_?(l=`http://${_}?ns=${d.namespace}`,c=JT(l,a),d=c.repoInfo):c.repoInfo.secure;const m=new ZD(i.name,i.options,e);Qx("Invalid Firebase Database URL",c),Fe(c.path)||Da("Database URL must point to the root of a Firebase Database (not including a child path).");const E=yk(d,i,m,new XD(i,t));return new vk(E,i)}function gk(i,e){const t=em[e];(!t||t[i.key]!==i)&&Da(`Database ${e}(${i.repoInfo_}) has already been deleted.`),ok(i),delete t[i.key]}function yk(i,e,t,s){let a=em[e.name];a||(a={},em[e.name]=a);let l=a[i.toURLString()];return l&&Da("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new tk(i,_k,t,s),a[i.toURLString()]=l,l}class vk{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fl(this._repo,lt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Da("Cannot call "+e+" on a deleted database.")}}/**
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
 */function Ek(i){VD(Ua),Ra(new xr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return mk(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Fi(ET,TT,i),Fi(ET,TT,"esm2017")}Ds.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Ds.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};Ek();var eS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nr,sw;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,I){function b(){}b.prototype=I.prototype,x.D=I.prototype,x.prototype=new b,x.prototype.constructor=x,x.C=function(R,k,M){for(var N=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)N[tt-2]=arguments[tt];return I.prototype[k].apply(R,N)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(x,I,b){b||(b=0);var R=Array(16);if(typeof I=="string")for(var k=0;16>k;++k)R[k]=I.charCodeAt(b++)|I.charCodeAt(b++)<<8|I.charCodeAt(b++)<<16|I.charCodeAt(b++)<<24;else for(k=0;16>k;++k)R[k]=I[b++]|I[b++]<<8|I[b++]<<16|I[b++]<<24;I=x.g[0],b=x.g[1],k=x.g[2];var M=x.g[3],N=I+(M^b&(k^M))+R[0]+3614090360&4294967295;I=b+(N<<7&4294967295|N>>>25),N=M+(k^I&(b^k))+R[1]+3905402710&4294967295,M=I+(N<<12&4294967295|N>>>20),N=k+(b^M&(I^b))+R[2]+606105819&4294967295,k=M+(N<<17&4294967295|N>>>15),N=b+(I^k&(M^I))+R[3]+3250441966&4294967295,b=k+(N<<22&4294967295|N>>>10),N=I+(M^b&(k^M))+R[4]+4118548399&4294967295,I=b+(N<<7&4294967295|N>>>25),N=M+(k^I&(b^k))+R[5]+1200080426&4294967295,M=I+(N<<12&4294967295|N>>>20),N=k+(b^M&(I^b))+R[6]+2821735955&4294967295,k=M+(N<<17&4294967295|N>>>15),N=b+(I^k&(M^I))+R[7]+4249261313&4294967295,b=k+(N<<22&4294967295|N>>>10),N=I+(M^b&(k^M))+R[8]+1770035416&4294967295,I=b+(N<<7&4294967295|N>>>25),N=M+(k^I&(b^k))+R[9]+2336552879&4294967295,M=I+(N<<12&4294967295|N>>>20),N=k+(b^M&(I^b))+R[10]+4294925233&4294967295,k=M+(N<<17&4294967295|N>>>15),N=b+(I^k&(M^I))+R[11]+2304563134&4294967295,b=k+(N<<22&4294967295|N>>>10),N=I+(M^b&(k^M))+R[12]+1804603682&4294967295,I=b+(N<<7&4294967295|N>>>25),N=M+(k^I&(b^k))+R[13]+4254626195&4294967295,M=I+(N<<12&4294967295|N>>>20),N=k+(b^M&(I^b))+R[14]+2792965006&4294967295,k=M+(N<<17&4294967295|N>>>15),N=b+(I^k&(M^I))+R[15]+1236535329&4294967295,b=k+(N<<22&4294967295|N>>>10),N=I+(k^M&(b^k))+R[1]+4129170786&4294967295,I=b+(N<<5&4294967295|N>>>27),N=M+(b^k&(I^b))+R[6]+3225465664&4294967295,M=I+(N<<9&4294967295|N>>>23),N=k+(I^b&(M^I))+R[11]+643717713&4294967295,k=M+(N<<14&4294967295|N>>>18),N=b+(M^I&(k^M))+R[0]+3921069994&4294967295,b=k+(N<<20&4294967295|N>>>12),N=I+(k^M&(b^k))+R[5]+3593408605&4294967295,I=b+(N<<5&4294967295|N>>>27),N=M+(b^k&(I^b))+R[10]+38016083&4294967295,M=I+(N<<9&4294967295|N>>>23),N=k+(I^b&(M^I))+R[15]+3634488961&4294967295,k=M+(N<<14&4294967295|N>>>18),N=b+(M^I&(k^M))+R[4]+3889429448&4294967295,b=k+(N<<20&4294967295|N>>>12),N=I+(k^M&(b^k))+R[9]+568446438&4294967295,I=b+(N<<5&4294967295|N>>>27),N=M+(b^k&(I^b))+R[14]+3275163606&4294967295,M=I+(N<<9&4294967295|N>>>23),N=k+(I^b&(M^I))+R[3]+4107603335&4294967295,k=M+(N<<14&4294967295|N>>>18),N=b+(M^I&(k^M))+R[8]+1163531501&4294967295,b=k+(N<<20&4294967295|N>>>12),N=I+(k^M&(b^k))+R[13]+2850285829&4294967295,I=b+(N<<5&4294967295|N>>>27),N=M+(b^k&(I^b))+R[2]+4243563512&4294967295,M=I+(N<<9&4294967295|N>>>23),N=k+(I^b&(M^I))+R[7]+1735328473&4294967295,k=M+(N<<14&4294967295|N>>>18),N=b+(M^I&(k^M))+R[12]+2368359562&4294967295,b=k+(N<<20&4294967295|N>>>12),N=I+(b^k^M)+R[5]+4294588738&4294967295,I=b+(N<<4&4294967295|N>>>28),N=M+(I^b^k)+R[8]+2272392833&4294967295,M=I+(N<<11&4294967295|N>>>21),N=k+(M^I^b)+R[11]+1839030562&4294967295,k=M+(N<<16&4294967295|N>>>16),N=b+(k^M^I)+R[14]+4259657740&4294967295,b=k+(N<<23&4294967295|N>>>9),N=I+(b^k^M)+R[1]+2763975236&4294967295,I=b+(N<<4&4294967295|N>>>28),N=M+(I^b^k)+R[4]+1272893353&4294967295,M=I+(N<<11&4294967295|N>>>21),N=k+(M^I^b)+R[7]+4139469664&4294967295,k=M+(N<<16&4294967295|N>>>16),N=b+(k^M^I)+R[10]+3200236656&4294967295,b=k+(N<<23&4294967295|N>>>9),N=I+(b^k^M)+R[13]+681279174&4294967295,I=b+(N<<4&4294967295|N>>>28),N=M+(I^b^k)+R[0]+3936430074&4294967295,M=I+(N<<11&4294967295|N>>>21),N=k+(M^I^b)+R[3]+3572445317&4294967295,k=M+(N<<16&4294967295|N>>>16),N=b+(k^M^I)+R[6]+76029189&4294967295,b=k+(N<<23&4294967295|N>>>9),N=I+(b^k^M)+R[9]+3654602809&4294967295,I=b+(N<<4&4294967295|N>>>28),N=M+(I^b^k)+R[12]+3873151461&4294967295,M=I+(N<<11&4294967295|N>>>21),N=k+(M^I^b)+R[15]+530742520&4294967295,k=M+(N<<16&4294967295|N>>>16),N=b+(k^M^I)+R[2]+3299628645&4294967295,b=k+(N<<23&4294967295|N>>>9),N=I+(k^(b|~M))+R[0]+4096336452&4294967295,I=b+(N<<6&4294967295|N>>>26),N=M+(b^(I|~k))+R[7]+1126891415&4294967295,M=I+(N<<10&4294967295|N>>>22),N=k+(I^(M|~b))+R[14]+2878612391&4294967295,k=M+(N<<15&4294967295|N>>>17),N=b+(M^(k|~I))+R[5]+4237533241&4294967295,b=k+(N<<21&4294967295|N>>>11),N=I+(k^(b|~M))+R[12]+1700485571&4294967295,I=b+(N<<6&4294967295|N>>>26),N=M+(b^(I|~k))+R[3]+2399980690&4294967295,M=I+(N<<10&4294967295|N>>>22),N=k+(I^(M|~b))+R[10]+4293915773&4294967295,k=M+(N<<15&4294967295|N>>>17),N=b+(M^(k|~I))+R[1]+2240044497&4294967295,b=k+(N<<21&4294967295|N>>>11),N=I+(k^(b|~M))+R[8]+1873313359&4294967295,I=b+(N<<6&4294967295|N>>>26),N=M+(b^(I|~k))+R[15]+4264355552&4294967295,M=I+(N<<10&4294967295|N>>>22),N=k+(I^(M|~b))+R[6]+2734768916&4294967295,k=M+(N<<15&4294967295|N>>>17),N=b+(M^(k|~I))+R[13]+1309151649&4294967295,b=k+(N<<21&4294967295|N>>>11),N=I+(k^(b|~M))+R[4]+4149444226&4294967295,I=b+(N<<6&4294967295|N>>>26),N=M+(b^(I|~k))+R[11]+3174756917&4294967295,M=I+(N<<10&4294967295|N>>>22),N=k+(I^(M|~b))+R[2]+718787259&4294967295,k=M+(N<<15&4294967295|N>>>17),N=b+(M^(k|~I))+R[9]+3951481745&4294967295,x.g[0]=x.g[0]+I&4294967295,x.g[1]=x.g[1]+(k+(N<<21&4294967295|N>>>11))&4294967295,x.g[2]=x.g[2]+k&4294967295,x.g[3]=x.g[3]+M&4294967295}s.prototype.u=function(x,I){I===void 0&&(I=x.length);for(var b=I-this.blockSize,R=this.B,k=this.h,M=0;M<I;){if(k==0)for(;M<=b;)a(this,x,M),M+=this.blockSize;if(typeof x=="string"){for(;M<I;)if(R[k++]=x.charCodeAt(M++),k==this.blockSize){a(this,R),k=0;break}}else for(;M<I;)if(R[k++]=x[M++],k==this.blockSize){a(this,R),k=0;break}}this.h=k,this.o+=I},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var I=1;I<x.length-8;++I)x[I]=0;var b=8*this.o;for(I=x.length-8;I<x.length;++I)x[I]=b&255,b/=256;for(this.u(x),x=Array(16),I=b=0;4>I;++I)for(var R=0;32>R;R+=8)x[b++]=this.g[I]>>>R&255;return x};function l(x,I){var b=d;return Object.prototype.hasOwnProperty.call(b,x)?b[x]:b[x]=I(x)}function c(x,I){this.h=I;for(var b=[],R=!0,k=x.length-1;0<=k;k--){var M=x[k]|0;R&&M==I||(b[k]=M,R=!1)}this.g=b}var d={};function _(x){return-128<=x&&128>x?l(x,function(I){return new c([I|0],0>I?-1:0)}):new c([x|0],0>x?-1:0)}function m(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return F(m(-x));for(var I=[],b=1,R=0;x>=b;R++)I[R]=x/b|0,b*=4294967296;return new c(I,0)}function E(x,I){if(x.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x.charAt(0)=="-")return F(E(x.substring(1),I));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=m(Math.pow(I,8)),R=T,k=0;k<x.length;k+=8){var M=Math.min(8,x.length-k),N=parseInt(x.substring(k,k+M),I);8>M?(M=m(Math.pow(I,M)),R=R.j(M).add(m(N))):(R=R.j(b),R=R.add(m(N)))}return R}var T=_(0),C=_(1),V=_(16777216);i=c.prototype,i.m=function(){if(X(this))return-F(this).m();for(var x=0,I=1,b=0;b<this.g.length;b++){var R=this.i(b);x+=(0<=R?R:4294967296+R)*I,I*=4294967296}return x},i.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(H(this))return"0";if(X(this))return"-"+F(this).toString(x);for(var I=m(Math.pow(x,6)),b=this,R="";;){var k=re(b,I).g;b=Y(b,k.j(I));var M=((0<b.g.length?b.g[0]:b.h)>>>0).toString(x);if(b=k,H(b))return M+R;for(;6>M.length;)M="0"+M;R=M+R}},i.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function H(x){if(x.h!=0)return!1;for(var I=0;I<x.g.length;I++)if(x.g[I]!=0)return!1;return!0}function X(x){return x.h==-1}i.l=function(x){return x=Y(this,x),X(x)?-1:H(x)?0:1};function F(x){for(var I=x.g.length,b=[],R=0;R<I;R++)b[R]=~x.g[R];return new c(b,~x.h).add(C)}i.abs=function(){return X(this)?F(this):this},i.add=function(x){for(var I=Math.max(this.g.length,x.g.length),b=[],R=0,k=0;k<=I;k++){var M=R+(this.i(k)&65535)+(x.i(k)&65535),N=(M>>>16)+(this.i(k)>>>16)+(x.i(k)>>>16);R=N>>>16,M&=65535,N&=65535,b[k]=N<<16|M}return new c(b,b[b.length-1]&-2147483648?-1:0)};function Y(x,I){return x.add(F(I))}i.j=function(x){if(H(this)||H(x))return T;if(X(this))return X(x)?F(this).j(F(x)):F(F(this).j(x));if(X(x))return F(this.j(F(x)));if(0>this.l(V)&&0>x.l(V))return m(this.m()*x.m());for(var I=this.g.length+x.g.length,b=[],R=0;R<2*I;R++)b[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<x.g.length;k++){var M=this.i(R)>>>16,N=this.i(R)&65535,tt=x.i(k)>>>16,nt=x.i(k)&65535;b[2*R+2*k]+=N*nt,ee(b,2*R+2*k),b[2*R+2*k+1]+=M*nt,ee(b,2*R+2*k+1),b[2*R+2*k+1]+=N*tt,ee(b,2*R+2*k+1),b[2*R+2*k+2]+=M*tt,ee(b,2*R+2*k+2)}for(R=0;R<I;R++)b[R]=b[2*R+1]<<16|b[2*R];for(R=I;R<2*I;R++)b[R]=0;return new c(b,0)};function ee(x,I){for(;(x[I]&65535)!=x[I];)x[I+1]+=x[I]>>>16,x[I]&=65535,I++}function ue(x,I){this.g=x,this.h=I}function re(x,I){if(H(I))throw Error("division by zero");if(H(x))return new ue(T,T);if(X(x))return I=re(F(x),I),new ue(F(I.g),F(I.h));if(X(I))return I=re(x,F(I)),new ue(F(I.g),I.h);if(30<x.g.length){if(X(x)||X(I))throw Error("slowDivide_ only works with positive integers.");for(var b=C,R=I;0>=R.l(x);)b=de(b),R=de(R);var k=ye(b,1),M=ye(R,1);for(R=ye(R,2),b=ye(b,2);!H(R);){var N=M.add(R);0>=N.l(x)&&(k=k.add(b),M=N),R=ye(R,1),b=ye(b,1)}return I=Y(x,k.j(I)),new ue(k,I)}for(k=T;0<=x.l(I);){for(b=Math.max(1,Math.floor(x.m()/I.m())),R=Math.ceil(Math.log(b)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),M=m(b),N=M.j(I);X(N)||0<N.l(x);)b-=R,M=m(b),N=M.j(I);H(M)&&(M=C),k=k.add(M),x=Y(x,N)}return new ue(k,x)}i.A=function(x){return re(this,x).h},i.and=function(x){for(var I=Math.max(this.g.length,x.g.length),b=[],R=0;R<I;R++)b[R]=this.i(R)&x.i(R);return new c(b,this.h&x.h)},i.or=function(x){for(var I=Math.max(this.g.length,x.g.length),b=[],R=0;R<I;R++)b[R]=this.i(R)|x.i(R);return new c(b,this.h|x.h)},i.xor=function(x){for(var I=Math.max(this.g.length,x.g.length),b=[],R=0;R<I;R++)b[R]=this.i(R)^x.i(R);return new c(b,this.h^x.h)};function de(x){for(var I=x.g.length+1,b=[],R=0;R<I;R++)b[R]=x.i(R)<<1|x.i(R-1)>>>31;return new c(b,x.h)}function ye(x,I){var b=I>>5;I%=32;for(var R=x.g.length-b,k=[],M=0;M<R;M++)k[M]=0<I?x.i(M+b)>>>I|x.i(M+b+1)<<32-I:x.i(M+b);return new c(k,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,sw=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=m,c.fromString=E,Nr=c}).apply(typeof eS<"u"?eS:typeof self<"u"?self:typeof window<"u"?window:{});var Gh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rw,Lu,aw,sf,tm,ow,lw,uw;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,g,y){return h==Array.prototype||h==Object.prototype||(h[g]=y.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gh=="object"&&Gh];for(var g=0;g<h.length;++g){var y=h[g];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function a(h,g){if(g)e:{var y=s;h=h.split(".");for(var w=0;w<h.length-1;w++){var j=h[w];if(!(j in y))break e;y=y[j]}h=h[h.length-1],w=y[h],g=g(w),g!=w&&g!=null&&e(y,h,{configurable:!0,writable:!0,value:g})}}function l(h,g){h instanceof String&&(h+="");var y=0,w=!1,j={next:function(){if(!w&&y<h.length){var G=y++;return{value:g(G,h[G]),done:!1}}return w=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}a("Array.prototype.values",function(h){return h||function(){return l(this,function(g,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function _(h){var g=typeof h;return g=g!="object"?g:h?Array.isArray(h)?"array":g:"null",g=="array"||g=="object"&&typeof h.length=="number"}function m(h){var g=typeof h;return g=="object"&&h!=null||g=="function"}function E(h,g,y){return h.call.apply(h.bind,arguments)}function T(h,g,y){if(!h)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,w),h.apply(g,j)}}return function(){return h.apply(g,arguments)}}function C(h,g,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,C.apply(null,arguments)}function V(h,g){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),h.apply(this,w)}}function H(h,g){function y(){}y.prototype=g.prototype,h.aa=g.prototype,h.prototype=new y,h.prototype.constructor=h,h.Qb=function(w,j,G){for(var ce=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)ce[qe-2]=arguments[qe];return g.prototype[j].apply(w,ce)}}function X(h){const g=h.length;if(0<g){const y=Array(g);for(let w=0;w<g;w++)y[w]=h[w];return y}return[]}function F(h,g){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(_(w)){const j=h.length||0,G=w.length||0;h.length=j+G;for(let ce=0;ce<G;ce++)h[j+ce]=w[ce]}else h.push(w)}}class Y{constructor(g,y){this.i=g,this.j=y,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function ee(h){return/^[\s\xa0]*$/.test(h)}function ue(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function re(h){return re[" "](h),h}re[" "]=function(){};var de=ue().indexOf("Gecko")!=-1&&!(ue().toLowerCase().indexOf("webkit")!=-1&&ue().indexOf("Edge")==-1)&&!(ue().indexOf("Trident")!=-1||ue().indexOf("MSIE")!=-1)&&ue().indexOf("Edge")==-1;function ye(h,g,y){for(const w in h)g.call(y,h[w],w,h)}function x(h,g){for(const y in h)g.call(void 0,h[y],y,h)}function I(h){const g={};for(const y in h)g[y]=h[y];return g}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(h,g){let y,w;for(let j=1;j<arguments.length;j++){w=arguments[j];for(y in w)h[y]=w[y];for(let G=0;G<b.length;G++)y=b[G],Object.prototype.hasOwnProperty.call(w,y)&&(h[y]=w[y])}}function k(h){var g=1;h=h.split(":");const y=[];for(;0<g&&h.length;)y.push(h.shift()),g--;return h.length&&y.push(h.join(":")),y}function M(h){d.setTimeout(()=>{throw h},0)}function N(){var h=z;let g=null;return h.g&&(g=h.g,h.g=h.g.next,h.g||(h.h=null),g.next=null),g}class tt{constructor(){this.h=this.g=null}add(g,y){const w=nt.get();w.set(g,y),this.h?this.h.next=w:this.g=w,this.h=w}}var nt=new Y(()=>new ae,h=>h.reset());class ae{constructor(){this.next=this.g=this.h=null}set(g,y){this.h=g,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,oe=!1,z=new tt,O=()=>{const h=d.Promise.resolve(void 0);ve=()=>{h.then($)}};var $=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(y){M(y)}var g=nt;g.j(h),100>g.h&&(g.h++,h.next=g.g,g.g=h)}oe=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ne(h,g){this.type=h,this.g=this.target=g,this.defaultPrevented=!1}ne.prototype.h=function(){this.defaultPrevented=!0};var he=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,g=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const y=()=>{};d.addEventListener("test",y,g),d.removeEventListener("test",y,g)}catch{}return h}();function Ee(h,g){if(ne.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var y=this.type=h.type,w=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=g,g=h.relatedTarget){if(de){e:{try{re(g.nodeName);var j=!0;break e}catch{}j=!1}j||(g=null)}}else y=="mouseover"?g=h.fromElement:y=="mouseout"&&(g=h.toElement);this.relatedTarget=g,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:pe[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ee.aa.h.call(this)}}H(Ee,ne);var pe={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),Ne=0;function Oe(h,g,y,w,j){this.listener=h,this.proxy=null,this.src=g,this.type=y,this.capture=!!w,this.ha=j,this.key=++Ne,this.da=this.fa=!1}function Re(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Zt(h){this.src=h,this.g={},this.h=0}Zt.prototype.add=function(h,g,y,w,j){var G=h.toString();h=this.g[G],h||(h=this.g[G]=[],this.h++);var ce=fn(h,g,w,j);return-1<ce?(g=h[ce],y||(g.fa=!1)):(g=new Oe(g,this.src,G,!!w,j),g.fa=y,h.push(g)),g};function Mn(h,g){var y=g.type;if(y in h.g){var w=h.g[y],j=Array.prototype.indexOf.call(w,g,void 0),G;(G=0<=j)&&Array.prototype.splice.call(w,j,1),G&&(Re(g),h.g[y].length==0&&(delete h.g[y],h.h--))}}function fn(h,g,y,w){for(var j=0;j<h.length;++j){var G=h[j];if(!G.da&&G.listener==g&&G.capture==!!y&&G.ha==w)return j}return-1}var Pn="closure_lm_"+(1e6*Math.random()|0),Ai={};function Qn(h,g,y,w,j){if(Array.isArray(g)){for(var G=0;G<g.length;G++)Qn(h,g[G],y,w,j);return null}return y=qr(y),h&&h[et]?h.K(g,y,m(w)?!!w.capture:!1,j):Xi(h,g,y,!1,w,j)}function Xi(h,g,y,w,j,G){if(!g)throw Error("Invalid event type");var ce=m(j)?!!j.capture:!!j,qe=Zi(h);if(qe||(h[Pn]=qe=new Zt(h)),y=qe.add(g,y,w,ce,G),y.proxy)return y;if(w=K(),y.proxy=w,w.src=h,w.listener=y,h.addEventListener)he||(j=ce),j===void 0&&(j=!1),h.addEventListener(g.toString(),w,j);else if(h.attachEvent)h.attachEvent(Jt(g.toString()),w);else if(h.addListener&&h.removeListener)h.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function K(){function h(y){return g.call(h.src,h.listener,y)}const g=qa;return h}function $e(h,g,y,w,j){if(Array.isArray(g))for(var G=0;G<g.length;G++)$e(h,g[G],y,w,j);else w=m(w)?!!w.capture:!!w,y=qr(y),h&&h[et]?(h=h.i,g=String(g).toString(),g in h.g&&(G=h.g[g],y=fn(G,y,w,j),-1<y&&(Re(G[y]),Array.prototype.splice.call(G,y,1),G.length==0&&(delete h.g[g],h.h--)))):h&&(h=Zi(h))&&(g=h.g[g.toString()],h=-1,g&&(h=fn(g,y,w,j)),(y=-1<h?g[h]:null)&&Ht(y))}function Ht(h){if(typeof h!="number"&&h&&!h.da){var g=h.src;if(g&&g[et])Mn(g.i,h);else{var y=h.type,w=h.proxy;g.removeEventListener?g.removeEventListener(y,w,h.capture):g.detachEvent?g.detachEvent(Jt(y),w):g.addListener&&g.removeListener&&g.removeListener(w),(y=Zi(g))?(Mn(y,h),y.h==0&&(y.src=null,g[Pn]=null)):Re(h)}}}function Jt(h){return h in Ai?Ai[h]:Ai[h]="on"+h}function qa(h,g){if(h.da)h=!0;else{g=new Ee(g,this);var y=h.listener,w=h.ha||h.src;h.fa&&Ht(h),h=y.call(w,g)}return h}function Zi(h){return h=h[Pn],h instanceof Zt?h:null}var en="__closure_events_fn_"+(1e9*Math.random()>>>0);function qr(h){return typeof h=="function"?h:(h[en]||(h[en]=function(g){return h.handleEvent(g)}),h[en])}function mt(){ie.call(this),this.i=new Zt(this),this.M=this,this.F=null}H(mt,ie),mt.prototype[et]=!0,mt.prototype.removeEventListener=function(h,g,y,w){$e(this,h,g,y,w)};function Nt(h,g){var y,w=h.F;if(w)for(y=[];w;w=w.F)y.push(w);if(h=h.M,w=g.type||g,typeof g=="string")g=new ne(g,h);else if(g instanceof ne)g.target=g.target||h;else{var j=g;g=new ne(w,h),R(g,j)}if(j=!0,y)for(var G=y.length-1;0<=G;G--){var ce=g.g=y[G];j=Ji(ce,w,!0,g)&&j}if(ce=g.g=h,j=Ji(ce,w,!0,g)&&j,j=Ji(ce,w,!1,g)&&j,y)for(G=0;G<y.length;G++)ce=g.g=y[G],j=Ji(ce,w,!1,g)&&j}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var h=this.i,g;for(g in h.g){for(var y=h.g[g],w=0;w<y.length;w++)Re(y[w]);delete h.g[g],h.h--}}this.F=null},mt.prototype.K=function(h,g,y,w){return this.i.add(String(h),g,!1,y,w)},mt.prototype.L=function(h,g,y,w){return this.i.add(String(h),g,!0,y,w)};function Ji(h,g,y,w){if(g=h.i.g[String(g)],!g)return!0;g=g.concat();for(var j=!0,G=0;G<g.length;++G){var ce=g[G];if(ce&&!ce.da&&ce.capture==y){var qe=ce.listener,Pt=ce.ha||ce.src;ce.fa&&Mn(h.i,ce),j=qe.call(Pt,w)!==!1&&j}}return j&&!w.defaultPrevented}function Sc(h,g,y){if(typeof h=="function")y&&(h=C(h,y));else if(h&&typeof h.handleEvent=="function")h=C(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(h,g||0)}function vl(h){h.g=Sc(()=>{h.g=null,h.i&&(h.i=!1,vl(h))},h.l);const g=h.h;h.h=null,h.m.apply(null,g)}class fd extends ie{constructor(g,y){super(),this.m=g,this.l=y,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:vl(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gr(h){ie.call(this),this.h=h,this.g={}}H(Gr,ie);var Ls=[];function dn(h){ye(h.g,function(g,y){this.g.hasOwnProperty(y)&&Ht(g)},h),h.g={}}Gr.prototype.N=function(){Gr.aa.N.call(this),dn(this)},Gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var El=d.JSON.stringify,wi=d.JSON.parse,wn=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Tl(){}Tl.prototype.h=null;function Ac(h){return h.h||(h.h=h.i())}function wc(){}var bi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Us(){ne.call(this,"d")}H(Us,ne);function di(){ne.call(this,"c")}H(di,ne);var Yn={},js=null;function Ga(){return js=js||new mt}Yn.La="serverreachability";function Sl(h){ne.call(this,Yn.La,h)}H(Sl,ne);function Bs(h){const g=Ga();Nt(g,new Sl(g))}Yn.STAT_EVENT="statevent";function Ka(h,g){ne.call(this,Yn.STAT_EVENT,h),this.stat=g}H(Ka,ne);function Ct(h){const g=Ga();Nt(g,new Ka(g,h))}Yn.Ma="timingevent";function bc(h,g){ne.call(this,Yn.Ma,h),this.size=g}H(bc,ne);function zs(h,g){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},g)}function Hs(){this.g=!0}Hs.prototype.xa=function(){this.g=!1};function Cc(h,g,y,w,j,G){h.info(function(){if(h.g)if(G)for(var ce="",qe=G.split("&"),Pt=0;Pt<qe.length;Pt++){var Ge=qe[Pt].split("=");if(1<Ge.length){var Gt=Ge[0];Ge=Ge[1];var Vt=Gt.split("_");ce=2<=Vt.length&&Vt[1]=="type"?ce+(Gt+"="+Ge+"&"):ce+(Gt+"=redacted&")}}else ce=null;else ce=G;return"XMLHTTP REQ ("+w+") [attempt "+j+"]: "+g+`
`+y+`
`+ce})}function Rc(h,g,y,w,j,G,ce){h.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+j+"]: "+g+`
`+y+`
`+G+" "+ce})}function Fs(h,g,y,w){h.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ft(h,y)+(w?" "+w:"")})}function Ci(h,g){h.info(function(){return"TIMEOUT: "+g})}Hs.prototype.info=function(){};function Ft(h,g){if(!h.g)return g;if(!g)return null;try{var y=JSON.parse(g);if(y){for(h=0;h<y.length;h++)if(Array.isArray(y[h])){var w=y[h];if(!(2>w.length)){var j=w[1];if(Array.isArray(j)&&!(1>j.length)){var G=j[0];if(G!="noop"&&G!="stop"&&G!="close")for(var ce=1;ce<j.length;ce++)j[ce]=""}}}}return El(y)}catch{return g}}var Mt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},es={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Kr;function Wa(){}H(Wa,Tl),Wa.prototype.g=function(){return new XMLHttpRequest},Wa.prototype.i=function(){return{}},Kr=new Wa;function Ri(h,g,y,w){this.j=h,this.i=g,this.l=y,this.R=w||1,this.U=new Gr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Al}function Al(){this.i=null,this.g="",this.h=!1}var qs={},Wr={};function pi(h,g,y){h.L=1,h.v=$r(Tt(g)),h.m=y,h.P=!0,ts(h,null)}function ts(h,g){h.F=Date.now(),gt(h),h.A=Tt(h.v);var y=h.A,w=h.R;Array.isArray(w)||(w=[String(w)]),ss(y.i,"t",w),h.C=0,y=h.j.J,h.h=new Al,h.g=zc(h.j,y?g:null,!h.m),0<h.O&&(h.M=new fd(C(h.Y,h,h.g),h.O)),g=h.U,y=h.g,w=h.ca;var j="readystatechange";Array.isArray(j)||(j&&(Ls[0]=j.toString()),j=Ls);for(var G=0;G<j.length;G++){var ce=Qn(y,j[G],w||g.handleEvent,!1,g.h||g);if(!ce)break;g.g[ce.key]=ce}g=h.H?I(h.H):{},h.m?(h.u||(h.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,g)):(h.u="GET",h.g.ea(h.A,h.u,null,g)),Bs(),Cc(h.i,h.u,h.A,h.l,h.R,h.m)}Ri.prototype.ca=function(h){h=h.target;const g=this.M;g&&ei(h)==3?g.j():this.Y(h)},Ri.prototype.Y=function(h){try{if(h==this.g)e:{const Vt=ei(this.g);var g=this.g.Ba();const ls=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||kc(this.g)))){this.J||Vt!=4||g==7||(g==8||0>=ls?Bs(3):Bs(2)),Qa(this);var y=this.g.Z();this.X=y;t:if(Gs(this)){var w=kc(this.g);h="";var j=w.length,G=ei(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nn(this),Vn(this);var ce="";break t}this.h.i=new d.TextDecoder}for(g=0;g<j;g++)this.h.h=!0,h+=this.h.i.decode(w[g],{stream:!(G&&g==j-1)});w.length=0,this.h.g+=h,this.C=0,ce=this.h.g}else ce=this.g.oa();if(this.o=y==200,Rc(this.i,this.u,this.A,this.l,this.R,Vt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Pt=this.g;if((qe=Pt.g?Pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(qe)){var Ge=qe;break t}}Ge=null}if(y=Ge)Fs(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ln(this,y);else{this.o=!1,this.s=3,Ct(12),Nn(this),Vn(this);break e}}if(this.P){y=!0;let tn;for(;!this.J&&this.C<ce.length;)if(tn=Ks(this,ce),tn==Wr){Vt==4&&(this.s=4,Ct(14),y=!1),Fs(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==qs){this.s=4,Ct(15),Fs(this.i,this.l,ce,"[Invalid Chunk]"),y=!1;break}else Fs(this.i,this.l,tn,null),Ln(this,tn);if(Gs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||ce.length!=0||this.h.h||(this.s=1,Ct(16),y=!1),this.o=this.o&&y,!y)Fs(this.i,this.l,ce,"[Invalid Chunked Response]"),Nn(this),Vn(this);else if(0<ce.length&&!this.W){this.W=!0;var Gt=this.j;Gt.g==this&&Gt.ba&&!Gt.M&&(Gt.j.info("Great, no buffering proxy detected. Bytes received: "+ce.length),ia(Gt),Gt.M=!0,Ct(11))}}else Fs(this.i,this.l,ce,null),Ln(this,ce);Vt==4&&Nn(this),this.o&&!this.J&&(Vt==4?Uc(this.j,this):(this.o=!1,gt(this)))}else yd(this.g),y==400&&0<ce.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),Nn(this),Vn(this)}}}catch{}finally{}};function Gs(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Ks(h,g){var y=h.C,w=g.indexOf(`
`,y);return w==-1?Wr:(y=Number(g.substring(y,w)),isNaN(y)?qs:(w+=1,w+y>g.length?Wr:(g=g.slice(w,w+y),h.C=w+y,g)))}Ri.prototype.cancel=function(){this.J=!0,Nn(this)};function gt(h){h.S=Date.now()+h.I,wl(h,h.I)}function wl(h,g){if(h.B!=null)throw Error("WatchDog timer not null");h.B=zs(C(h.ba,h),g)}function Qa(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Ri.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Ci(this.i,this.A),this.L!=2&&(Bs(),Ct(17)),Nn(this),this.s=2,Vn(this)):wl(this,this.S-h)};function Vn(h){h.j.G==0||h.J||Uc(h.j,h)}function Nn(h){Qa(h);var g=h.M;g&&typeof g.ma=="function"&&g.ma(),h.M=null,dn(h.U),h.g&&(g=h.g,h.g=null,g.abort(),g.ma())}function Ln(h,g){try{var y=h.j;if(y.G!=0&&(y.g==h||Ws(y.h,h))){if(!h.K&&Ws(y.h,h)&&y.G==3){try{var w=y.Da.g.parse(g)}catch{w=null}if(Array.isArray(w)&&w.length==3){var j=w;if(j[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<h.F)so(y),no(y);else break e;Pl(y),Ct(18)}}else y.za=j[1],0<y.za-y.T&&37500>j[2]&&y.F&&y.v==0&&!y.C&&(y.C=zs(C(y.Za,y),6e3));if(1>=Ic(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else os(y,11)}else if((h.K||y.g==h)&&so(y),!ee(g))for(j=y.Da.g.parse(g),g=0;g<j.length;g++){let Ge=j[g];if(y.T=Ge[0],Ge=Ge[1],y.G==2)if(Ge[0]=="c"){y.K=Ge[1],y.ia=Ge[2];const Gt=Ge[3];Gt!=null&&(y.la=Gt,y.j.info("VER="+y.la));const Vt=Ge[4];Vt!=null&&(y.Aa=Vt,y.j.info("SVER="+y.Aa));const ls=Ge[5];ls!=null&&typeof ls=="number"&&0<ls&&(w=1.5*ls,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const tn=h.g;if(tn){const Mi=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mi){var G=w.h;G.g||Mi.indexOf("spdy")==-1&&Mi.indexOf("quic")==-1&&Mi.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(Qs(G,G.h),G.h=null))}if(w.D){const Ll=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ll&&(w.ya=Ll,Xe(w.I,w.D,Ll))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-h.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var ce=h;if(w.qa=Bc(w,w.J?w.ia:null,w.W),ce.K){$n(w.h,ce);var qe=ce,Pt=w.L;Pt&&(qe.I=Pt),qe.B&&(Qa(qe),gt(qe)),w.g=ce}else Vc(w);0<y.i.length&&io(y)}else Ge[0]!="stop"&&Ge[0]!="close"||os(y,7);else y.G==3&&(Ge[0]=="stop"||Ge[0]=="close"?Ge[0]=="stop"?os(y,7):kl(y):Ge[0]!="noop"&&y.l&&y.l.ta(Ge),y.v=0)}}Bs(4)}catch{}}var dd=class{constructor(h,g){this.g=h,this.map=g}};function bl(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cl(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Ic(h){return h.h?1:h.g?h.g.size:0}function Ws(h,g){return h.h?h.h==g:h.g?h.g.has(g):!1}function Qs(h,g){h.g?h.g.add(g):h.h=g}function $n(h,g){h.h&&h.h==g?h.h=null:h.g&&h.g.has(g)&&h.g.delete(g)}bl.prototype.cancel=function(){if(this.i=bn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function bn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let g=h.i;for(const y of h.g.values())g=g.concat(y.D);return g}return X(h.i)}function Nc(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(_(h)){for(var g=[],y=h.length,w=0;w<y;w++)g.push(h[w]);return g}g=[],y=0;for(w in h)g[y++]=h[w];return g}function pd(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(_(h)||typeof h=="string"){var g=[];h=h.length;for(var y=0;y<h;y++)g.push(y);return g}g=[],y=0;for(const w in h)g[y++]=w;return g}}}function Qr(h,g){if(h.forEach&&typeof h.forEach=="function")h.forEach(g,void 0);else if(_(h)||typeof h=="string")Array.prototype.forEach.call(h,g,void 0);else for(var y=pd(h),w=Nc(h),j=w.length,G=0;G<j;G++)g.call(void 0,w[G],y&&y[G],h)}var Rl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ya(h,g){if(h){h=h.split("&");for(var y=0;y<h.length;y++){var w=h[y].indexOf("="),j=null;if(0<=w){var G=h[y].substring(0,w);j=h[y].substring(w+1)}else G=h[y];g(G,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function ns(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof ns){this.h=h.h,Ys(this,h.j),this.o=h.o,this.g=h.g,Yr(this,h.s),this.l=h.l;var g=h.i,y=new Ii;y.i=g.i,g.g&&(y.g=new Map(g.g),y.h=g.h),$a(this,y),this.m=h.m}else h&&(g=String(h).match(Rl))?(this.h=!1,Ys(this,g[1]||"",!0),this.o=$s(g[2]||""),this.g=$s(g[3]||"",!0),Yr(this,g[4]),this.l=$s(g[5]||"",!0),$a(this,g[6]||"",!0),this.m=$s(g[7]||"")):(this.h=!1,this.i=new Ii(null,this.h))}ns.prototype.toString=function(){var h=[],g=this.j;g&&h.push(Xn(g,Il,!0),":");var y=this.g;return(y||g=="file")&&(h.push("//"),(g=this.o)&&h.push(Xn(g,Il,!0),"@"),h.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&h.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&h.push("/"),h.push(Xn(y,y.charAt(0)=="/"?Nl:Dc,!0))),(y=this.i.toString())&&h.push("?",y),(y=this.m)&&h.push("#",Xn(y,gd)),h.join("")};function Tt(h){return new ns(h)}function Ys(h,g,y){h.j=y?$s(g,!0):g,h.j&&(h.j=h.j.replace(/:$/,""))}function Yr(h,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);h.s=g}else h.s=null}function $a(h,g,y){g instanceof Ii?(h.i=g,Dl(h.i,h.h)):(y||(g=Xn(g,md)),h.i=new Ii(g,h.h))}function Xe(h,g,y){h.i.set(g,y)}function $r(h){return Xe(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function $s(h,g){return h?g?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Xn(h,g,y){return typeof h=="string"?(h=encodeURI(h).replace(g,_d),y&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function _d(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Il=/[#\/\?@]/g,Dc=/[#\?:]/g,Nl=/[#\?]/g,md=/[#\?@]/g,gd=/#/g;function Ii(h,g){this.h=this.g=null,this.i=h||null,this.j=!!g}function Zn(h){h.g||(h.g=new Map,h.h=0,h.i&&Ya(h.i,function(g,y){h.add(decodeURIComponent(g.replace(/\+/g," ")),y)}))}i=Ii.prototype,i.add=function(h,g){Zn(this),this.i=null,h=rs(this,h);var y=this.g.get(h);return y||this.g.set(h,y=[]),y.push(g),this.h+=1,this};function Xa(h,g){Zn(h),g=rs(h,g),h.g.has(g)&&(h.i=null,h.h-=h.g.get(g).length,h.g.delete(g))}function is(h,g){return Zn(h),g=rs(h,g),h.g.has(g)}i.forEach=function(h,g){Zn(this),this.g.forEach(function(y,w){y.forEach(function(j){h.call(g,j,w,this)},this)},this)},i.na=function(){Zn(this);const h=Array.from(this.g.values()),g=Array.from(this.g.keys()),y=[];for(let w=0;w<g.length;w++){const j=h[w];for(let G=0;G<j.length;G++)y.push(g[w])}return y},i.V=function(h){Zn(this);let g=[];if(typeof h=="string")is(this,h)&&(g=g.concat(this.g.get(rs(this,h))));else{h=Array.from(this.g.values());for(let y=0;y<h.length;y++)g=g.concat(h[y])}return g},i.set=function(h,g){return Zn(this),this.i=null,h=rs(this,h),is(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[g]),this.h+=1,this},i.get=function(h,g){return h?(h=this.V(h),0<h.length?String(h[0]):g):g};function ss(h,g,y){Xa(h,g),0<y.length&&(h.i=null,h.g.set(rs(h,g),X(y)),h.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],g=Array.from(this.g.keys());for(var y=0;y<g.length;y++){var w=g[y];const G=encodeURIComponent(String(w)),ce=this.V(w);for(w=0;w<ce.length;w++){var j=G;ce[w]!==""&&(j+="="+encodeURIComponent(String(ce[w]))),h.push(j)}}return this.i=h.join("&")};function rs(h,g){return g=String(g),h.j&&(g=g.toLowerCase()),g}function Dl(h,g){g&&!h.j&&(Zn(h),h.i=null,h.g.forEach(function(y,w){var j=w.toLowerCase();w!=j&&(Xa(this,w),ss(this,j,y))},h)),h.j=g}function Oc(h,g){const y=new Hs;if(d.Image){const w=new Image;w.onload=V(Jn,y,"TestLoadImage: loaded",!0,g,w),w.onerror=V(Jn,y,"TestLoadImage: error",!1,g,w),w.onabort=V(Jn,y,"TestLoadImage: abort",!1,g,w),w.ontimeout=V(Jn,y,"TestLoadImage: timeout",!1,g,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=h}else g(!1)}function Xr(h,g){const y=new Hs,w=new AbortController,j=setTimeout(()=>{w.abort(),Jn(y,"TestPingServer: timeout",!1,g)},1e4);fetch(h,{signal:w.signal}).then(G=>{clearTimeout(j),G.ok?Jn(y,"TestPingServer: ok",!0,g):Jn(y,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(j),Jn(y,"TestPingServer: error",!1,g)})}function Jn(h,g,y,w,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),w(y)}catch{}}function Zr(){this.g=new wn}function Ni(h,g,y){const w=y||"";try{Qr(h,function(j,G){let ce=j;m(j)&&(ce=El(j)),g.push(w+G+"="+encodeURIComponent(ce))})}catch(j){throw g.push(w+"type="+encodeURIComponent("_badmap")),j}}function Xs(h){this.l=h.Ub||null,this.j=h.eb||!1}H(Xs,Tl),Xs.prototype.g=function(){return new as(this.l,this.j)},Xs.prototype.i=function(h){return function(){return h}}({});function as(h,g){mt.call(this),this.D=h,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}H(as,mt),i=as.prototype,i.open=function(h,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=g,this.readyState=1,Oi(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(g.body=h),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Di(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Oi(this)),this.g&&(this.readyState=3,Oi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ol(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ol(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var g=h.value?h.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!h.done}))&&(this.response=this.responseText+=g)}h.done?Di(this):Oi(this),this.readyState==3&&Ol(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,Di(this))},i.Qa=function(h){this.g&&(this.response=h,Di(this))},i.ga=function(){this.g&&Di(this)};function Di(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Oi(h)}i.setRequestHeader=function(h,g){this.u.append(h,g)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],g=this.h.entries();for(var y=g.next();!y.done;)y=y.value,h.push(y[0]+": "+y[1]),y=g.next();return h.join(`\r
`)};function Oi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function xl(h){let g="";return ye(h,function(y,w){g+=w,g+=":",g+=y,g+=`\r
`}),g}function qt(h,g,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=xl(y),typeof h=="string"?y!=null&&encodeURIComponent(String(y)):Xe(h,g,y))}function it(h){mt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}H(it,mt);var Za=/^https?$/i,Jr=["POST","PUT"];i=it.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,g,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);g=g?g.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Kr.g(),this.v=this.o?Ac(this.o):Ac(Kr),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(g,String(h),!0),this.B=!1}catch(G){xc(this,G);return}if(h=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var j in w)y.set(j,w[j]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const G of w.keys())y.set(G,w.get(G));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(G=>G.toLowerCase()=="content-type"),j=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Jr,g,void 0))||w||j||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,ce]of y)this.g.setRequestHeader(G,ce);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ea(this),this.u=!0,this.g.send(h),this.u=!1}catch(G){xc(this,G)}};function xc(h,g){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=g,h.m=5,Ja(h),xi(h)}function Ja(h){h.A||(h.A=!0,Nt(h,"complete"),Nt(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Nt(this,"complete"),Nt(this,"abort"),xi(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xi(this,!0)),it.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?eo(this):this.bb())},i.bb=function(){eo(this)};function eo(h){if(h.h&&typeof c<"u"&&(!h.v[1]||ei(h)!=4||h.Z()!=2)){if(h.u&&ei(h)==4)Sc(h.Ea,0,h);else if(Nt(h,"readystatechange"),ei(h)==4){h.h=!1;try{const ce=h.Z();e:switch(ce){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var y;if(!(y=g)){var w;if(w=ce===0){var j=String(h.D).match(Rl)[1]||null;!j&&d.self&&d.self.location&&(j=d.self.location.protocol.slice(0,-1)),w=!Za.test(j?j.toLowerCase():"")}y=w}if(y)Nt(h,"complete"),Nt(h,"success");else{h.m=6;try{var G=2<ei(h)?h.g.statusText:""}catch{G=""}h.l=G+" ["+h.Z()+"]",Ja(h)}}finally{xi(h)}}}}function xi(h,g){if(h.g){ea(h);const y=h.g,w=h.v[0]?()=>{}:null;h.g=null,h.v=null,g||Nt(h,"ready");try{y.onreadystatechange=w}catch{}}}function ea(h){h.I&&(d.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function ei(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<ei(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var g=this.g.responseText;return h&&g.indexOf(h)==0&&(g=g.substring(h.length)),wi(g)}};function kc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function yd(h){const g={};h=(h.g&&2<=ei(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<h.length;w++){if(ee(h[w]))continue;var y=k(h[w]);const j=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const G=g[j]||[];g[j]=G,G.push(y)}x(g,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ta(h,g,y){return y&&y.internalChannelParams&&y.internalChannelParams[h]||g}function to(h){this.Aa=0,this.i=[],this.j=new Hs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ta("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ta("baseRetryDelayMs",5e3,h),this.cb=ta("retryDelaySeedMs",1e4,h),this.Wa=ta("forwardChannelMaxRetries",2,h),this.wa=ta("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new bl(h&&h.concurrentRequestLimit),this.Da=new Zr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=to.prototype,i.la=8,i.G=1,i.connect=function(h,g,y,w){Ct(0),this.W=h,this.H=g||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=Bc(this,null,this.W),io(this)};function kl(h){if(Mc(h),h.G==3){var g=h.U++,y=Tt(h.I);if(Xe(y,"SID",h.K),Xe(y,"RID",g),Xe(y,"TYPE","terminate"),na(h,y),g=new Ri(h,h.j,g),g.L=2,g.v=$r(Tt(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=g.v,y=!0),y||(g.g=zc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),gt(g)}jc(h)}function no(h){h.g&&(ia(h),h.g.cancel(),h.g=null)}function Mc(h){no(h),h.u&&(d.clearTimeout(h.u),h.u=null),so(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function io(h){if(!Cl(h.h)&&!h.s){h.s=!0;var g=h.Ga;ve||O(),oe||(ve(),oe=!0),z.add(g,h),h.B=0}}function vd(h,g){return Ic(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=g.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=zs(C(h.Ga,h,g),Vl(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const j=new Ri(this,this.j,h);let G=this.o;if(this.S&&(G?(G=I(G),R(G,this.S)):G=this.S),this.m!==null||this.O||(j.H=G,G=null),this.P)e:{for(var g=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(g+=w,4096<g){g=y;break e}if(g===4096||y===this.i.length-1){g=y+1;break e}}g=1e3}else g=1e3;g=Pc(this,j,g),y=Tt(this.I),Xe(y,"RID",h),Xe(y,"CVER",22),this.D&&Xe(y,"X-HTTP-Session-Id",this.D),na(this,y),G&&(this.O?g="headers="+encodeURIComponent(String(xl(G)))+"&"+g:this.m&&qt(y,this.m,G)),Qs(this.h,j),this.Ua&&Xe(y,"TYPE","init"),this.P?(Xe(y,"$req",g),Xe(y,"SID","null"),j.T=!0,pi(j,y,null)):pi(j,y,g),this.G=2}}else this.G==3&&(h?Ml(this,h):this.i.length==0||Cl(this.h)||Ml(this))};function Ml(h,g){var y;g?y=g.l:y=h.U++;const w=Tt(h.I);Xe(w,"SID",h.K),Xe(w,"RID",y),Xe(w,"AID",h.T),na(h,w),h.m&&h.o&&qt(w,h.m,h.o),y=new Ri(h,h.j,y,h.B+1),h.m===null&&(y.H=h.o),g&&(h.i=g.D.concat(h.i)),g=Pc(h,y,1e3),y.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Qs(h.h,y),pi(y,w,g)}function na(h,g){h.H&&ye(h.H,function(y,w){Xe(g,w,y)}),h.l&&Qr({},function(y,w){Xe(g,w,y)})}function Pc(h,g,y){y=Math.min(h.i.length,y);var w=h.l?C(h.l.Na,h.l,h):null;e:{var j=h.i;let G=-1;for(;;){const ce=["count="+y];G==-1?0<y?(G=j[0].g,ce.push("ofs="+G)):G=0:ce.push("ofs="+G);let qe=!0;for(let Pt=0;Pt<y;Pt++){let Ge=j[Pt].g;const Gt=j[Pt].map;if(Ge-=G,0>Ge)G=Math.max(0,j[Pt].g-100),qe=!1;else try{Ni(Gt,ce,"req"+Ge+"_")}catch{w&&w(Gt)}}if(qe){w=ce.join("&");break e}}}return h=h.i.splice(0,y),g.D=h,w}function Vc(h){if(!h.g&&!h.u){h.Y=1;var g=h.Fa;ve||O(),oe||(ve(),oe=!0),z.add(g,h),h.v=0}}function Pl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=zs(C(h.Fa,h),Vl(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,Lc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=zs(C(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),no(this),Lc(this))};function ia(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Lc(h){h.g=new Ri(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var g=Tt(h.qa);Xe(g,"RID","rpc"),Xe(g,"SID",h.K),Xe(g,"AID",h.T),Xe(g,"CI",h.F?"0":"1"),!h.F&&h.ja&&Xe(g,"TO",h.ja),Xe(g,"TYPE","xmlhttp"),na(h,g),h.m&&h.o&&qt(g,h.m,h.o),h.L&&(h.g.I=h.L);var y=h.g;h=h.ia,y.L=1,y.v=$r(Tt(g)),y.m=null,y.P=!0,ts(y,h)}i.Za=function(){this.C!=null&&(this.C=null,no(this),Pl(this),Ct(19))};function so(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Uc(h,g){var y=null;if(h.g==g){so(h),ia(h),h.g=null;var w=2}else if(Ws(h.h,g))y=g.D,$n(h.h,g),w=1;else return;if(h.G!=0){if(g.o)if(w==1){y=g.m?g.m.length:0,g=Date.now()-g.F;var j=h.B;w=Ga(),Nt(w,new bc(w,y)),io(h)}else Vc(h);else if(j=g.s,j==3||j==0&&0<g.X||!(w==1&&vd(h,g)||w==2&&Pl(h)))switch(y&&0<y.length&&(g=h.h,g.i=g.i.concat(y)),j){case 1:os(h,5);break;case 4:os(h,10);break;case 3:os(h,6);break;default:os(h,2)}}}function Vl(h,g){let y=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(y*=2),y*g}function os(h,g){if(h.j.info("Error code "+g),g==2){var y=C(h.fb,h),w=h.Xa;const j=!w;w=new ns(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ys(w,"https"),$r(w),j?Oc(w.toString(),y):Xr(w.toString(),y)}else Ct(2);h.G=0,h.l&&h.l.sa(g),jc(h),Mc(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function jc(h){if(h.G=0,h.ka=[],h.l){const g=bn(h.h);(g.length!=0||h.i.length!=0)&&(F(h.ka,g),F(h.ka,h.i),h.h.i.length=0,X(h.i),h.i.length=0),h.l.ra()}}function Bc(h,g,y){var w=y instanceof ns?Tt(y):new ns(y);if(w.g!="")g&&(w.g=g+"."+w.g),Yr(w,w.s);else{var j=d.location;w=j.protocol,g=g?g+"."+j.hostname:j.hostname,j=+j.port;var G=new ns(null);w&&Ys(G,w),g&&(G.g=g),j&&Yr(G,j),y&&(G.l=y),w=G}return y=h.D,g=h.ya,y&&g&&Xe(w,y,g),Xe(w,"VER",h.la),na(h,w),w}function zc(h,g,y){if(g&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=h.Ca&&!h.pa?new it(new Xs({eb:y})):new it(h.pa),g.Ha(h.J),g}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hc(){}i=Hc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ro(){}ro.prototype.g=function(h,g){return new Cn(h,g)};function Cn(h,g){mt.call(this),this.g=new to(g),this.l=h,this.h=g&&g.messageUrlParams||null,h=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(h?h["X-WebChannel-Content-Type"]=g.messageContentType:h={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(h?h["X-WebChannel-Client-Profile"]=g.va:h={"X-WebChannel-Client-Profile":g.va}),this.g.S=h,(h=g&&g.Sb)&&!ee(h)&&(this.g.m=h),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!ee(g)&&(this.g.D=g,h=this.h,h!==null&&g in h&&(h=this.h,g in h&&delete h[g])),this.j=new ki(this)}H(Cn,mt),Cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Cn.prototype.close=function(){kl(this.g)},Cn.prototype.o=function(h){var g=this.g;if(typeof h=="string"){var y={};y.__data__=h,h=y}else this.u&&(y={},y.__data__=El(h),h=y);g.i.push(new dd(g.Ya++,h)),g.G==3&&io(g)},Cn.prototype.N=function(){this.g.l=null,delete this.j,kl(this.g),delete this.g,Cn.aa.N.call(this)};function Fc(h){Us.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var g=h.__sm__;if(g){e:{for(const y in g){h=y;break e}h=void 0}(this.i=h)&&(h=this.i,g=g!==null&&h in g?g[h]:void 0),this.data=g}else this.data=h}H(Fc,Us);function qc(){di.call(this),this.status=1}H(qc,di);function ki(h){this.g=h}H(ki,Hc),ki.prototype.ua=function(){Nt(this.g,"a")},ki.prototype.ta=function(h){Nt(this.g,new Fc(h))},ki.prototype.sa=function(h){Nt(this.g,new qc)},ki.prototype.ra=function(){Nt(this.g,"b")},ro.prototype.createWebChannel=ro.prototype.g,Cn.prototype.send=Cn.prototype.o,Cn.prototype.open=Cn.prototype.m,Cn.prototype.close=Cn.prototype.close,uw=function(){return new ro},lw=function(){return Ga()},ow=Yn,tm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mt.NO_ERROR=0,Mt.TIMEOUT=8,Mt.HTTP_ERROR=6,sf=Mt,es.COMPLETE="complete",aw=es,wc.EventType=bi,bi.OPEN="a",bi.CLOSE="b",bi.ERROR="c",bi.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Lu=wc,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,rw=it}).apply(typeof Gh<"u"?Gh:typeof self<"u"?self:typeof window<"u"?window:{});const tS="@firebase/firestore",nS="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yn.UNAUTHENTICATED=new yn(null),yn.GOOGLE_CREDENTIALS=new yn("google-credentials-uid"),yn.FIRST_PARTY=new yn("first-party-uid"),yn.MOCK_USER=new yn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Bf("@firebase/firestore");function Lo(){return Ma.logLevel}function _e(i,...e){if(Ma.logLevel<=je.DEBUG){const t=e.map(Jm);Ma.debug(`Firestore (${dl}): ${i}`,...t)}}function ks(i,...e){if(Ma.logLevel<=je.ERROR){const t=e.map(Jm);Ma.error(`Firestore (${dl}): ${i}`,...t)}}function Jo(i,...e){if(Ma.logLevel<=je.WARN){const t=e.map(Jm);Ma.warn(`Firestore (${dl}): ${i}`,...t)}}function Jm(i){if(typeof i=="string")return i;try{/**
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
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(i="Unexpected state"){const e=`FIRESTORE (${dl}) INTERNAL ASSERTION FAILED: `+i;throw ks(e),new Error(e)}function rt(i,e){i||Ie()}function ke(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ae extends Ps{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Tk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(yn.UNAUTHENTICATED))}shutdown(){}}class Sk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ak{constructor(e){this.t=e,this.currentUser=yn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){rt(this.o===void 0);let s=this.i;const a=_=>this.i!==s?(s=this.i,t(_)):Promise.resolve();let l=new Dr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Dr,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const _=l;e.enqueueRetryable(async()=>{await _.promise,await a(this.currentUser)})},d=_=>{_e("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(_=>d(_)),setTimeout(()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?d(_):(_e("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Dr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(_e("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(rt(typeof s.accessToken=="string"),new cw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return rt(e===null||typeof e=="string"),new yn(e)}}class wk{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=yn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class bk{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new wk(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(yn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ck{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,qn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){rt(this.o===void 0);const s=l=>{l.error!=null&&_e("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,_e("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{_e("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?a(l):_e("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new iS(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(rt(typeof t.token=="string"),this.R=t.token,new iS(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Rk(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=Rk(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function He(i,e){return i<e?-1:i>e?1:0}function el(i,e,t){return i.length===e.length&&i.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=-62135596800,rS=1e6;class Bt{static now(){return Bt.fromMillis(Date.now())}static fromDate(e){return Bt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*rS);return new Bt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ae(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ae(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<sS)throw new Ae(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ae(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rS}_compareTo(e){return this.seconds===e.seconds?He(this.nanoseconds,e.nanoseconds):He(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-sS;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{static fromTimestamp(e){return new De(e)}static min(){return new De(new Bt(0,0))}static max(){return new De(new Bt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="__name__";class Bi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ie(),s===void 0?s=e.length-t:s>e.length-t&&Ie(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Bi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bi?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Bi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=Bi.isNumericId(e),a=Bi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Bi.extractNumericId(e).compare(Bi.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nr.fromString(e.substring(4,e.length-2))}}class bt extends Bi{construct(e,t,s){return new bt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new Ae(se.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new bt(t)}static emptyPath(){return new bt([])}}const Ik=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class un extends Bi{construct(e,t,s){return new un(e,t,s)}static isValidIdentifier(e){return Ik.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),un.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===aS}static keyField(){return new un([aS])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new Ae(se.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new Ae(se.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[a+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new Ae(se.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=_,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new Ae(se.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new un(t)}static emptyPath(){return new un([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.path=e}static fromPath(e){return new we(bt.fromString(e))}static fromName(e){return new we(bt.fromString(e).popFirst(5))}static empty(){return new we(bt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&bt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return bt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new we(new bt(e.slice()))}}/**
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
 */const tc=-1;function Nk(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=De.fromTimestamp(s===1e9?new Bt(t+1,0):new Bt(t,s));return new Mr(a,we.empty(),e)}function Dk(i){return new Mr(i.readTime,i.key,tc)}class Mr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Mr(De.min(),we.empty(),tc)}static max(){return new Mr(De.max(),we.empty(),tc)}}function Ok(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=we.comparator(i.documentKey,e.documentKey),t!==0?t:He(i.largestBatchId,e.largestBatchId))}/**
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
 */const xk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(i){if(i.code!==se.FAILED_PRECONDITION||i.message!==xk)throw i;_e("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof J?t:J.resolve(t)}catch(t){return J.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):J.reject(t)}static resolve(e){return new J((t,s)=>{t(e)})}static reject(e){return new J((t,s)=>{s(e)})}static waitFor(e){return new J((t,s)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},_=>s(_))}),c=!0,l===a&&t()})}static or(e){let t=J.resolve(!1);for(const s of e)t=t.next(a=>a?J.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new J((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let _=0;_<l;_++){const m=_;t(e[m]).next(E=>{c[m]=E,++d,d===l&&s(c)},E=>a(E))}})}static doWhile(e,t){return new J((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function Mk(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function _l(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Yf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Yf.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=-1;function $f(i){return i==null}function Cf(i){return i===0&&1/i==-1/0}function Pk(i){return typeof i=="number"&&Number.isInteger(i)&&!Cf(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="";function Vk(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=oS(e)),e=Lk(i.get(t),e);return oS(e)}function Lk(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case fw:t+="";break;default:t+=l}}return t}function oS(i){return i+fw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Hr(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function dw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t){this.comparator=e,this.root=t||on.EMPTY}insert(e,t){return new Et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,on.BLACK,null,null))}remove(e){return new Et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,on.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kh(this.root,e,this.comparator,!0)}}class Kh{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class on{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??on.RED,this.left=a??on.EMPTY,this.right=l??on.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new on(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return on.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return on.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,on.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,on.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ie();const e=this.left.check();if(e!==this.right.check())throw Ie();return e+(this.isRed()?0:1)}}on.EMPTY=null,on.RED=!0,on.BLACK=!1;on.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie()}get value(){throw Ie()}get color(){throw Ie()}get left(){throw Ie()}get right(){throw Ie()}copy(e,t,s,a,l){return this}insert(e,t,s){return new on(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.comparator=e,this.data=new Et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uS(this.data.getIterator())}getIteratorFrom(e){return new uS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof zt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new zt(this.comparator);return t.data=e,t}}class uS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gn{constructor(e){this.fields=e,e.sort(un.comparator)}static empty(){return new Gn([])}unionWith(e){let t=new zt(un.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Gn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return el(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class pw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class hn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new pw("Invalid base64 string: "+l):l}}(e);return new hn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new hn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return He(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}hn.EMPTY_BYTE_STRING=new hn("");const Uk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(i){if(rt(!!i),typeof i=="string"){let e=0;const t=Uk.exec(i);if(rt(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:It(i.seconds),nanos:It(i.nanos)}}function It(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Vr(i){return typeof i=="string"?hn.fromBase64String(i):hn.fromUint8Array(i)}/**
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
 */const _w="server_timestamp",mw="__type__",gw="__previous_value__",yw="__local_write_time__";function tg(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[mw])===null||t===void 0?void 0:t.stringValue)===_w}function Xf(i){const e=i.mapValue.fields[gw];return tg(e)?Xf(e):e}function nc(i){const e=Pr(i.mapValue.fields[yw].timestampValue);return new Bt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,t,s,a,l,c,d,_,m){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=_,this.useFetchStreams=m}}const Rf="(default)";class ic{constructor(e,t){this.projectId=e,this.database=t||Rf}static empty(){return new ic("","")}get isDefaultDatabase(){return this.database===Rf}isEqual(e){return e instanceof ic&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vw="__type__",Bk="__max__",Wh={mapValue:{}},Ew="__vector__",If="value";function Lr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?tg(i)?4:Hk(i)?9007199254740991:zk(i)?10:11:Ie()}function Yi(i,e){if(i===e)return!0;const t=Lr(i);if(t!==Lr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return nc(i).isEqual(nc(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Pr(a.timestampValue),d=Pr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return Vr(a.bytesValue).isEqual(Vr(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return It(a.geoPointValue.latitude)===It(l.geoPointValue.latitude)&&It(a.geoPointValue.longitude)===It(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return It(a.integerValue)===It(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=It(a.doubleValue),d=It(l.doubleValue);return c===d?Cf(c)===Cf(d):isNaN(c)&&isNaN(d)}return!1}(i,e);case 9:return el(i.arrayValue.values||[],e.arrayValue.values||[],Yi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(lS(c)!==lS(d))return!1;for(const _ in c)if(c.hasOwnProperty(_)&&(d[_]===void 0||!Yi(c[_],d[_])))return!1;return!0}(i,e);default:return Ie()}}function sc(i,e){return(i.values||[]).find(t=>Yi(t,e))!==void 0}function tl(i,e){if(i===e)return 0;const t=Lr(i),s=Lr(e);if(t!==s)return He(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return He(i.booleanValue,e.booleanValue);case 2:return function(l,c){const d=It(l.integerValue||l.doubleValue),_=It(c.integerValue||c.doubleValue);return d<_?-1:d>_?1:d===_?0:isNaN(d)?isNaN(_)?0:-1:1}(i,e);case 3:return cS(i.timestampValue,e.timestampValue);case 4:return cS(nc(i),nc(e));case 5:return He(i.stringValue,e.stringValue);case 6:return function(l,c){const d=Vr(l),_=Vr(c);return d.compareTo(_)}(i.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),_=c.split("/");for(let m=0;m<d.length&&m<_.length;m++){const E=He(d[m],_[m]);if(E!==0)return E}return He(d.length,_.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,c){const d=He(It(l.latitude),It(c.latitude));return d!==0?d:He(It(l.longitude),It(c.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return hS(i.arrayValue,e.arrayValue);case 10:return function(l,c){var d,_,m,E;const T=l.fields||{},C=c.fields||{},V=(d=T[If])===null||d===void 0?void 0:d.arrayValue,H=(_=C[If])===null||_===void 0?void 0:_.arrayValue,X=He(((m=V==null?void 0:V.values)===null||m===void 0?void 0:m.length)||0,((E=H==null?void 0:H.values)===null||E===void 0?void 0:E.length)||0);return X!==0?X:hS(V,H)}(i.mapValue,e.mapValue);case 11:return function(l,c){if(l===Wh.mapValue&&c===Wh.mapValue)return 0;if(l===Wh.mapValue)return 1;if(c===Wh.mapValue)return-1;const d=l.fields||{},_=Object.keys(d),m=c.fields||{},E=Object.keys(m);_.sort(),E.sort();for(let T=0;T<_.length&&T<E.length;++T){const C=He(_[T],E[T]);if(C!==0)return C;const V=tl(d[_[T]],m[E[T]]);if(V!==0)return V}return He(_.length,E.length)}(i.mapValue,e.mapValue);default:throw Ie()}}function cS(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return He(i,e);const t=Pr(i),s=Pr(e),a=He(t.seconds,s.seconds);return a!==0?a:He(t.nanos,s.nanos)}function hS(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=tl(t[a],s[a]);if(l)return l}return He(t.length,s.length)}function nl(i){return nm(i)}function nm(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=Pr(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return Vr(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return we.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=nm(l);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${nm(t.fields[c])}`;return a+"}"}(i.mapValue):Ie()}function rf(i){switch(Lr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xf(i);return e?16+rf(e):16;case 5:return 2*i.stringValue.length;case 6:return Vr(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+rf(l),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return Hr(s.fields,(l,c)=>{a+=l.length+rf(c)}),a}(i.mapValue);default:throw Ie()}}function im(i){return!!i&&"integerValue"in i}function ng(i){return!!i&&"arrayValue"in i}function fS(i){return!!i&&"nullValue"in i}function dS(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function af(i){return!!i&&"mapValue"in i}function zk(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[vw])===null||t===void 0?void 0:t.stringValue)===Ew}function Gu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Hr(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Gu(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gu(i.arrayValue.values[t]);return e}return Object.assign({},i)}function Hk(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===Bk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.value=e}static empty(){return new kn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!af(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gu(t)}setAll(e){let t=un.emptyPath(),s={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const _=this.getFieldsMap(t);this.applyChanges(_,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Gu(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());af(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Yi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];af(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Hr(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new kn(Gu(this.value))}}function Tw(i){const e=[];return Hr(i.fields,(t,s)=>{const a=new un([t]);if(af(s)){const l=Tw(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new Gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Tn(e,0,De.min(),De.min(),De.min(),kn.empty(),0)}static newFoundDocument(e,t,s,a){return new Tn(e,1,t,De.min(),s,a,0)}static newNoDocument(e,t){return new Tn(e,2,t,De.min(),De.min(),kn.empty(),0)}static newUnknownDocument(e,t){return new Tn(e,3,t,De.min(),De.min(),kn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(De.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=De.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nf{constructor(e,t){this.position=e,this.inclusive=t}}function pS(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?s=we.comparator(we.fromName(c.referenceValue),t.key):s=tl(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function _S(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Yi(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Df{constructor(e,t="asc"){this.field=e,this.dir=t}}function Fk(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Sw{}class jt extends Sw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Gk(e,t,s):t==="array-contains"?new Qk(e,s):t==="in"?new Yk(e,s):t==="not-in"?new $k(e,s):t==="array-contains-any"?new Xk(e,s):new jt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Kk(e,s):new Wk(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(tl(t,this.value)):t!==null&&Lr(this.value)===Lr(t)&&this.matchesComparison(tl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $i extends Sw{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new $i(e,t)}matches(e){return Aw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Aw(i){return i.op==="and"}function ww(i){return qk(i)&&Aw(i)}function qk(i){for(const e of i.filters)if(e instanceof $i)return!1;return!0}function sm(i){if(i instanceof jt)return i.field.canonicalString()+i.op.toString()+nl(i.value);if(ww(i))return i.filters.map(e=>sm(e)).join(",");{const e=i.filters.map(t=>sm(t)).join(",");return`${i.op}(${e})`}}function bw(i,e){return i instanceof jt?function(s,a){return a instanceof jt&&s.op===a.op&&s.field.isEqual(a.field)&&Yi(s.value,a.value)}(i,e):i instanceof $i?function(s,a){return a instanceof $i&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,c,d)=>l&&bw(c,a.filters[d]),!0):!1}(i,e):void Ie()}function Cw(i){return i instanceof jt?function(t){return`${t.field.canonicalString()} ${t.op} ${nl(t.value)}`}(i):i instanceof $i?function(t){return t.op.toString()+" {"+t.getFilters().map(Cw).join(" ,")+"}"}(i):"Filter"}class Gk extends jt{constructor(e,t,s){super(e,t,s),this.key=we.fromName(s.referenceValue)}matches(e){const t=we.comparator(e.key,this.key);return this.matchesComparison(t)}}class Kk extends jt{constructor(e,t){super(e,"in",t),this.keys=Rw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Wk extends jt{constructor(e,t){super(e,"not-in",t),this.keys=Rw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Rw(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>we.fromName(s.referenceValue))}class Qk extends jt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ng(t)&&sc(t.arrayValue,this.value)}}class Yk extends jt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&sc(this.value.arrayValue,t)}}class $k extends jt{constructor(e,t){super(e,"not-in",t)}matches(e){if(sc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!sc(this.value.arrayValue,t)}}class Xk extends jt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ng(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>sc(this.value.arrayValue,s))}}/**
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
 */class Zk{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.le=null}}function mS(i,e=null,t=[],s=[],a=null,l=null,c=null){return new Zk(i,e,t,s,a,l,c)}function ig(i){const e=ke(i);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>sm(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),$f(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>nl(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>nl(s)).join(",")),e.le=t}return e.le}function sg(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!Fk(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!bw(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!_S(i.startAt,e.startAt)&&_S(i.endAt,e.endAt)}function rm(i){return we.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=_,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Jk(i,e,t,s,a,l,c,d){return new Zf(i,e,t,s,a,l,c,d)}function rg(i){return new Zf(i)}function gS(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function e2(i){return i.collectionGroup!==null}function Ku(i){const e=ke(i);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new zt(un.comparator);return c.filters.forEach(_=>{_.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new Df(l,s))}),t.has(un.keyField().canonicalString())||e.he.push(new Df(un.keyField(),s))}return e.he}function Ki(i){const e=ke(i);return e.Pe||(e.Pe=t2(e,Ku(i))),e.Pe}function t2(i,e){if(i.limitType==="F")return mS(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Df(a.field,l)});const t=i.endAt?new Nf(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Nf(i.startAt.position,i.startAt.inclusive):null;return mS(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function am(i,e,t){return new Zf(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Jf(i,e){return sg(Ki(i),Ki(e))&&i.limitType===e.limitType}function Iw(i){return`${ig(Ki(i))}|lt:${i.limitType}`}function Uo(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>Cw(a)).join(", ")}]`),$f(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>nl(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>nl(a)).join(",")),`Target(${s})`}(Ki(i))}; limitType=${i.limitType})`}function ed(i,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):we.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(i,e)&&function(s,a){for(const l of Ku(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(c,d,_){const m=pS(c,d,_);return c.inclusive?m<=0:m<0}(s.startAt,Ku(s),a)||s.endAt&&!function(c,d,_){const m=pS(c,d,_);return c.inclusive?m>=0:m>0}(s.endAt,Ku(s),a))}(i,e)}function n2(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Nw(i){return(e,t)=>{let s=!1;for(const a of Ku(i)){const l=i2(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function i2(i,e,t){const s=i.field.isKeyField()?we.comparator(e.key,t.key):function(l,c,d){const _=c.data.field(l),m=d.data.field(l);return _!==null&&m!==null?tl(_,m):Ie()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Ie()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Hr(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return dw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=new Et(we.comparator);function Ms(){return s2}const Dw=new Et(we.comparator);function Uu(...i){let e=Dw;for(const t of i)e=e.insert(t.key,t);return e}function Ow(i){let e=Dw;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Ca(){return Wu()}function xw(){return Wu()}function Wu(){return new Ha(i=>i.toString(),(i,e)=>i.isEqual(e))}const r2=new Et(we.comparator),a2=new zt(we.comparator);function Be(...i){let e=a2;for(const t of i)e=e.add(t);return e}const o2=new zt(He);function l2(){return o2}/**
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
 */function ag(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cf(e)?"-0":e}}function kw(i){return{integerValue:""+i}}function u2(i,e){return Pk(e)?kw(e):ag(i,e)}/**
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
 */class td{constructor(){this._=void 0}}function c2(i,e,t){return i instanceof Of?function(a,l){const c={fields:{[mw]:{stringValue:_w},[yw]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&tg(l)&&(l=Xf(l)),l&&(c.fields[gw]=l),{mapValue:c}}(t,e):i instanceof il?Pw(i,e):i instanceof rc?Vw(i,e):function(a,l){const c=Mw(a,l),d=yS(c)+yS(a.Ie);return im(c)&&im(a.Ie)?kw(d):ag(a.serializer,d)}(i,e)}function h2(i,e,t){return i instanceof il?Pw(i,e):i instanceof rc?Vw(i,e):t}function Mw(i,e){return i instanceof xf?function(s){return im(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class Of extends td{}class il extends td{constructor(e){super(),this.elements=e}}function Pw(i,e){const t=Lw(e);for(const s of i.elements)t.some(a=>Yi(a,s))||t.push(s);return{arrayValue:{values:t}}}class rc extends td{constructor(e){super(),this.elements=e}}function Vw(i,e){let t=Lw(e);for(const s of i.elements)t=t.filter(a=>!Yi(a,s));return{arrayValue:{values:t}}}class xf extends td{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function yS(i){return It(i.integerValue||i.doubleValue)}function Lw(i){return ng(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,t){this.field=e,this.transform=t}}function d2(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof il&&a instanceof il||s instanceof rc&&a instanceof rc?el(s.elements,a.elements,Yi):s instanceof xf&&a instanceof xf?Yi(s.Ie,a.Ie):s instanceof Of&&a instanceof Of}(i.transform,e.transform)}class p2{constructor(e,t){this.version=e,this.transformResults=t}}class Wi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Wi}static exists(e){return new Wi(void 0,e)}static updateTime(e){return new Wi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function of(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class nd{}function Uw(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Bw(i.key,Wi.none()):new gc(i.key,i.data,Wi.none());{const t=i.data,s=kn.empty();let a=new zt(un.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Fr(i.key,s,new Gn(a.toArray()),Wi.none())}}function _2(i,e,t){i instanceof gc?function(a,l,c){const d=a.value.clone(),_=ES(a.fieldTransforms,l,c.transformResults);d.setAll(_),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(i,e,t):i instanceof Fr?function(a,l,c){if(!of(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=ES(a.fieldTransforms,l,c.transformResults),_=l.data;_.setAll(jw(a)),_.setAll(d),l.convertToFoundDocument(c.version,_).setHasCommittedMutations()}(i,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Qu(i,e,t,s){return i instanceof gc?function(l,c,d,_){if(!of(l.precondition,c))return d;const m=l.value.clone(),E=TS(l.fieldTransforms,_,c);return m.setAll(E),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),null}(i,e,t,s):i instanceof Fr?function(l,c,d,_){if(!of(l.precondition,c))return d;const m=TS(l.fieldTransforms,_,c),E=c.data;return E.setAll(jw(l)),E.setAll(m),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(i,e,t,s):function(l,c,d){return of(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(i,e,t)}function m2(i,e){let t=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),l=Mw(s.transform,a||null);l!=null&&(t===null&&(t=kn.empty()),t.set(s.field,l))}return t||null}function vS(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&el(s,a,(l,c)=>d2(l,c))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class gc extends nd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Fr extends nd{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function jw(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function ES(i,e,t){const s=new Map;rt(i.length===t.length);for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,h2(c,d,t[a]))}return s}function TS(i,e,t){const s=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);s.set(a.field,c2(l,c,e))}return s}class Bw extends nd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class g2 extends nd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&_2(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Qu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Qu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=xw();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const _=Uw(c,d);_!==null&&s.set(a.key,_),c.isValidDocument()||c.convertToNoDocument(De.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Be())}isEqual(e){return this.batchId===e.batchId&&el(this.mutations,e.mutations,(t,s)=>vS(t,s))&&el(this.baseMutations,e.baseMutations,(t,s)=>vS(t,s))}}class og{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){rt(e.mutations.length===s.length);let a=function(){return r2}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new og(e,t,s,a)}}/**
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
 */class v2{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class E2{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt,We;function T2(i){switch(i){case se.OK:return Ie();case se.CANCELLED:case se.UNKNOWN:case se.DEADLINE_EXCEEDED:case se.RESOURCE_EXHAUSTED:case se.INTERNAL:case se.UNAVAILABLE:case se.UNAUTHENTICATED:return!1;case se.INVALID_ARGUMENT:case se.NOT_FOUND:case se.ALREADY_EXISTS:case se.PERMISSION_DENIED:case se.FAILED_PRECONDITION:case se.ABORTED:case se.OUT_OF_RANGE:case se.UNIMPLEMENTED:case se.DATA_LOSS:return!0;default:return Ie()}}function zw(i){if(i===void 0)return ks("GRPC error has no .code"),se.UNKNOWN;switch(i){case kt.OK:return se.OK;case kt.CANCELLED:return se.CANCELLED;case kt.UNKNOWN:return se.UNKNOWN;case kt.DEADLINE_EXCEEDED:return se.DEADLINE_EXCEEDED;case kt.RESOURCE_EXHAUSTED:return se.RESOURCE_EXHAUSTED;case kt.INTERNAL:return se.INTERNAL;case kt.UNAVAILABLE:return se.UNAVAILABLE;case kt.UNAUTHENTICATED:return se.UNAUTHENTICATED;case kt.INVALID_ARGUMENT:return se.INVALID_ARGUMENT;case kt.NOT_FOUND:return se.NOT_FOUND;case kt.ALREADY_EXISTS:return se.ALREADY_EXISTS;case kt.PERMISSION_DENIED:return se.PERMISSION_DENIED;case kt.FAILED_PRECONDITION:return se.FAILED_PRECONDITION;case kt.ABORTED:return se.ABORTED;case kt.OUT_OF_RANGE:return se.OUT_OF_RANGE;case kt.UNIMPLEMENTED:return se.UNIMPLEMENTED;case kt.DATA_LOSS:return se.DATA_LOSS;default:return Ie()}}(We=kt||(kt={}))[We.OK=0]="OK",We[We.CANCELLED=1]="CANCELLED",We[We.UNKNOWN=2]="UNKNOWN",We[We.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",We[We.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",We[We.NOT_FOUND=5]="NOT_FOUND",We[We.ALREADY_EXISTS=6]="ALREADY_EXISTS",We[We.PERMISSION_DENIED=7]="PERMISSION_DENIED",We[We.UNAUTHENTICATED=16]="UNAUTHENTICATED",We[We.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",We[We.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",We[We.ABORTED=10]="ABORTED",We[We.OUT_OF_RANGE=11]="OUT_OF_RANGE",We[We.UNIMPLEMENTED=12]="UNIMPLEMENTED",We[We.INTERNAL=13]="INTERNAL",We[We.UNAVAILABLE=14]="UNAVAILABLE",We[We.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function S2(){return new TextEncoder}/**
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
 */const A2=new Nr([4294967295,4294967295],0);function SS(i){const e=S2().encode(i),t=new sw;return t.update(e),new Uint8Array(t.digest())}function AS(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Nr([t,s],0),new Nr([a,l],0)]}class lg{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ju(`Invalid padding: ${t}`);if(s<0)throw new ju(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ju(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ju(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Nr.fromNumber(this.Ee)}Ae(e,t,s){let a=e.add(t.multiply(Nr.fromNumber(s)));return a.compare(A2)===1&&(a=new Nr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=SS(e),[s,a]=AS(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(s,a,l);if(!this.Re(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new lg(l,a,t);return s.forEach(d=>c.insert(d)),c}insert(e){if(this.Ee===0)return;const t=SS(e),[s,a]=AS(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(s,a,l);this.Ve(c)}}Ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ju extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,yc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new id(De.min(),a,new Et(He),Ms(),Be())}}class yc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new yc(s,t,Be(),Be(),Be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t,s,a){this.me=e,this.removedTargetIds=t,this.key=s,this.fe=a}}class Hw{constructor(e,t){this.targetId=e,this.ge=t}}class Fw{constructor(e,t,s=hn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class wS{constructor(){this.pe=0,this.ye=bS(),this.we=hn.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=Be(),t=Be(),s=Be();return this.ye.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Ie()}}),new yc(this.we,this.be,e,t,s)}Me(){this.Se=!1,this.ye=bS()}xe(e,t){this.Se=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,rt(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class w2{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Ms(),this.$e=Qh(),this.Ke=Qh(),this.Ue=new Et(He)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const s=this.He(t);switch(e.state){case 0:this.Je(t)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(t);break;case 3:this.Je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),s.Ce(e.resumeToken));break;default:Ie()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((s,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,s=e.ge.count,a=this.Xe(t);if(a){const l=a.target;if(rm(l))if(s===0){const c=new we(l.path);this.ze(t,c,Tn.newNoDocument(c,De.min()))}else rt(s===1);else{const c=this.et(t);if(c!==s){const d=this.tt(e),_=d?this.nt(d,e,c):1;if(_!==0){this.Ye(t);const m=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,m)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Vr(s).toUint8Array()}catch(_){if(_ instanceof pw)return Jo("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{d=new lg(c,a,l)}catch(_){return Jo(_ instanceof ju?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return d.Ee===0?null:d}nt(e,t,s){return t.ge.count===s-this.st(e,t.targetId)?0:2}st(e,t){const s=this.ke.getRemoteKeysForTarget(t);let a=0;return s.forEach(l=>{const c=this.ke.it(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,l,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((l,c)=>{const d=this.Xe(c);if(d){if(l.current&&rm(d.target)){const _=new we(d.target.path);this._t(_).has(c)||this.ut(c,_)||this.ze(c,_,Tn.newNoDocument(_,e))}l.ve&&(t.set(c,l.Fe()),l.Me())}});let s=Be();this.Ke.forEach((l,c)=>{let d=!0;c.forEachWhile(_=>{const m=this.Xe(_);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(l))}),this.Qe.forEach((l,c)=>c.setReadTime(e));const a=new id(e,t,this.Ue,this.Qe,s);return this.Qe=Ms(),this.$e=Qh(),this.Ke=Qh(),this.Ue=new Et(He),a}Ge(e,t){if(!this.Je(e))return;const s=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,s),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,s){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),s&&(this.Qe=this.Qe.insert(t,s))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new wS,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new zt(He),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new zt(He),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||_e("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new wS),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Qh(){return new Et(we.comparator)}function bS(){return new Et(we.comparator)}const b2={asc:"ASCENDING",desc:"DESCENDING"},C2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},R2={and:"AND",or:"OR"};class I2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function om(i,e){return i.useProto3Json||$f(e)?e:{value:e}}function kf(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qw(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function N2(i,e){return kf(i,e.toTimestamp())}function Qi(i){return rt(!!i),De.fromTimestamp(function(t){const s=Pr(t);return new Bt(s.seconds,s.nanos)}(i))}function ug(i,e){return lm(i,e).canonicalString()}function lm(i,e){const t=function(a){return new bt(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function Gw(i){const e=bt.fromString(i);return rt($w(e)),e}function um(i,e){return ug(i.databaseId,e.path)}function N_(i,e){const t=Gw(e);if(t.get(1)!==i.databaseId.projectId)throw new Ae(se.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new Ae(se.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new we(Ww(t))}function Kw(i,e){return ug(i.databaseId,e)}function D2(i){const e=Gw(i);return e.length===4?bt.emptyPath():Ww(e)}function cm(i){return new bt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Ww(i){return rt(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function CS(i,e,t){return{name:um(i,e),fields:t.value.mapValue.fields}}function O2(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(m,E){return m.useProto3Json?(rt(E===void 0||typeof E=="string"),hn.fromBase64String(E||"")):(rt(E===void 0||E instanceof Buffer||E instanceof Uint8Array),hn.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(m){const E=m.code===void 0?se.UNKNOWN:zw(m.code);return new Ae(E,m.message||"")}(c);t=new Fw(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=N_(i,s.document.name),l=Qi(s.document.updateTime),c=s.document.createTime?Qi(s.document.createTime):De.min(),d=new kn({mapValue:{fields:s.document.fields}}),_=Tn.newFoundDocument(a,l,c,d),m=s.targetIds||[],E=s.removedTargetIds||[];t=new lf(m,E,_.key,_)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=N_(i,s.document),l=s.readTime?Qi(s.readTime):De.min(),c=Tn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new lf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=N_(i,s.document),l=s.removedTargetIds||[];t=new lf([],l,a,null)}else{if(!("filter"in e))return Ie();{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new E2(a,l),d=s.targetId;t=new Hw(d,c)}}return t}function x2(i,e){let t;if(e instanceof gc)t={update:CS(i,e.key,e.value)};else if(e instanceof Bw)t={delete:um(i,e.key)};else if(e instanceof Fr)t={update:CS(i,e.key,e.data),updateMask:z2(e.fieldMask)};else{if(!(e instanceof g2))return Ie();t={verify:um(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,c){const d=c.transform;if(d instanceof Of)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof il)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof rc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof xf)return{fieldPath:c.field.canonicalString(),increment:d.Ie};throw Ie()}(0,s))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:N2(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ie()}(i,e.precondition)),t}function k2(i,e){return i&&i.length>0?(rt(e!==void 0),i.map(t=>function(a,l){let c=a.updateTime?Qi(a.updateTime):Qi(l);return c.isEqual(De.min())&&(c=Qi(l)),new p2(c,a.transformResults||[])}(t,e))):[]}function M2(i,e){return{documents:[Kw(i,e.path)]}}function P2(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Kw(i,a);const l=function(m){if(m.length!==0)return Yw($i.create(m,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(m){if(m.length!==0)return m.map(E=>function(C){return{field:jo(C.field),direction:U2(C.dir)}}(E))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=om(i,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ht:t,parent:a}}function V2(i){let e=D2(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){rt(s===1);const E=t.from[0];E.allDescendants?a=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const C=Qw(T);return C instanceof $i&&ww(C)?C.getFilters():[C]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(C=>function(H){return new Df(Bo(H.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(H.direction))}(C))}(t.orderBy));let d=null;t.limit&&(d=function(T){let C;return C=typeof T=="object"?T.value:T,$f(C)?null:C}(t.limit));let _=null;t.startAt&&(_=function(T){const C=!!T.before,V=T.values||[];return new Nf(V,C)}(t.startAt));let m=null;return t.endAt&&(m=function(T){const C=!T.before,V=T.values||[];return new Nf(V,C)}(t.endAt)),Jk(e,a,c,l,d,"F",_,m)}function L2(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Qw(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Bo(t.unaryFilter.field);return jt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Bo(t.unaryFilter.field);return jt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Bo(t.unaryFilter.field);return jt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Bo(t.unaryFilter.field);return jt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Ie()}}(i):i.fieldFilter!==void 0?function(t){return jt.create(Bo(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ie()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return $i.create(t.compositeFilter.filters.map(s=>Qw(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ie()}}(t.compositeFilter.op))}(i):Ie()}function U2(i){return b2[i]}function j2(i){return C2[i]}function B2(i){return R2[i]}function jo(i){return{fieldPath:i.canonicalString()}}function Bo(i){return un.fromServerFormat(i.fieldPath)}function Yw(i){return i instanceof jt?function(t){if(t.op==="=="){if(dS(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NAN"}};if(fS(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(dS(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NOT_NAN"}};if(fS(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jo(t.field),op:j2(t.op),value:t.value}}}(i):i instanceof $i?function(t){const s=t.getFilters().map(a=>Yw(a));return s.length===1?s[0]:{compositeFilter:{op:B2(t.op),filters:s}}}(i):Ie()}function z2(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function $w(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t,s,a,l=De.min(),c=De.min(),d=hn.EMPTY_BYTE_STRING,_=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=_}withSequenceNumber(e){return new br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e){this.Tt=e}}function F2(i){const e=V2({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?am(e,e.limit,"L"):e}/**
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
 */class q2{constructor(){this.Tn=new G2}addToCollectionParentIndex(e,t){return this.Tn.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(Mr.min())}updateCollectionGroup(e,t,s){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class G2{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new zt(bt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new zt(bt.comparator)).toArray()}}/**
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
 */const RS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xw=41943040;class xn{static withCacheSize(e){return new xn(e,xn.DEFAULT_COLLECTION_PERCENTILE,xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn.DEFAULT_COLLECTION_PERCENTILE=10,xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xn.DEFAULT=new xn(Xw,xn.DEFAULT_COLLECTION_PERCENTILE,xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xn.DISABLED=new xn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new sl(0)}static Un(){return new sl(-1)}}/**
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
 */const IS="LruGarbageCollector",K2=1048576;function NS([i,e],[t,s]){const a=He(i,t);return a===0?He(e,s):a}class W2{constructor(e){this.Hn=e,this.buffer=new zt(NS),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();NS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Q2{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){_e(IS,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){_l(t)?_e(IS,"Ignoring IndexedDB error during garbage collection: ",t):await pl(t)}await this.er(3e5)})}}class Y2{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return J.resolve(Yf.ae);const s=new W2(t);return this.tr.forEachTarget(e,a=>s.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>s.Zn(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_e("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(RS)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(_e("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),RS):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,a,l,c,d,_,m;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(_e("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(s=T,d=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,_=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(m=Date.now(),Lo()<=je.DEBUG&&_e("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-E}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(_-d)+`ms
	Removed ${T} documents in `+(m-_)+`ms
Total Duration: ${m-E}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function $2(i,e){return new Y2(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(){this.changes=new Ha(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Tn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?J.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Z2{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&Qu(s.mutation,a,Gn.empty(),Bt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Be()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Be()){const a=Ca();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let c=Uu();return l.forEach((d,_)=>{c=c.insert(d,_.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const s=Ca();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Be()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,s,a){let l=Ms();const c=Wu(),d=function(){return Wu()}();return t.forEach((_,m)=>{const E=s.get(m.key);a.has(m.key)&&(E===void 0||E.mutation instanceof Fr)?l=l.insert(m.key,m):E!==void 0?(c.set(m.key,E.mutation.getFieldMask()),Qu(E.mutation,m,E.mutation.getFieldMask(),Bt.now())):c.set(m.key,Gn.empty())}),this.recalculateAndSaveOverlays(e,l).next(_=>(_.forEach((m,E)=>c.set(m,E)),t.forEach((m,E)=>{var T;return d.set(m,new Z2(E,(T=c.get(m))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const s=Wu();let a=new Et((c,d)=>c-d),l=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(_=>{const m=t.get(_);if(m===null)return;let E=s.get(_)||Gn.empty();E=d.applyToLocalView(m,E),s.set(_,E);const T=(a.get(d.batchId)||Be()).add(_);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const _=d.getNext(),m=_.key,E=_.value,T=xw();E.forEach(C=>{if(!l.has(C)){const V=Uw(t.get(C),s.get(C));V!==null&&T.set(C,V),l=l.add(C)}}),c.push(this.documentOverlayCache.saveOverlays(e,m,T))}return J.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(c){return we.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):e2(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):J.resolve(Ca());let d=tc,_=l;return c.next(m=>J.forEach(m,(E,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(E)?J.resolve():this.remoteDocumentCache.getEntry(e,E).next(C=>{_=_.insert(E,C)}))).next(()=>this.populateOverlays(e,m,l)).next(()=>this.computeViews(e,_,m,Be())).next(E=>({batchId:d,changes:Ow(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new we(t)).next(s=>{let a=Uu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Uu();return this.indexManager.getCollectionParents(e,l).next(d=>J.forEach(d,_=>{const m=function(T,C){return new Zf(C,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,_.child(l));return this.getDocumentsMatchingCollectionQuery(e,m,s,a).next(E=>{E.forEach((T,C)=>{c=c.insert(T,C)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(c=>{l.forEach((_,m)=>{const E=m.getKey();c.get(E)===null&&(c=c.insert(E,Tn.newInvalidDocument(E)))});let d=Uu();return c.forEach((_,m)=>{const E=l.get(_);E!==void 0&&Qu(E.mutation,m,Gn.empty(),Bt.now()),ed(t,m)&&(d=d.insert(_,m))}),d})}}/**
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
 */class eM{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return J.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Qi(a.createTime)}}(t)),J.resolve()}getNamedQuery(e,t){return J.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:F2(a.bundledQuery),readTime:Qi(a.readTime)}}(t)),J.resolve()}}/**
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
 */class tM{constructor(){this.overlays=new Et(we.comparator),this.Rr=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ca();return J.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.Et(e,t,l)}),J.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Rr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(s)),J.resolve()}getOverlaysForCollection(e,t,s){const a=Ca(),l=t.length+1,c=new we(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const _=d.getNext().value,m=_.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===l&&_.largestBatchId>s&&a.set(_.getKey(),_)}return J.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Et((m,E)=>m-E);const c=this.overlays.getIterator();for(;c.hasNext();){const m=c.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>s){let E=l.get(m.largestBatchId);E===null&&(E=Ca(),l=l.insert(m.largestBatchId,E)),E.set(m.getKey(),m)}}const d=Ca(),_=l.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach((m,E)=>d.set(m,E)),!(d.size()>=a)););return J.resolve(d)}Et(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.Rr.get(a.largestBatchId).delete(s.key);this.Rr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new v2(t,s));let l=this.Rr.get(t);l===void 0&&(l=Be(),this.Rr.set(t,l)),this.Rr.set(t,l.add(s.key))}}/**
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
 */class nM{constructor(){this.sessionToken=hn.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.Vr=new zt($t.mr),this.gr=new zt($t.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new $t(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new $t(e,t))}br(e,t){e.forEach(s=>this.removeReference(s,t))}Sr(e){const t=new we(new bt([])),s=new $t(t,e),a=new $t(t,e+1),l=[];return this.gr.forEachInRange([s,a],c=>{this.wr(c),l.push(c.key)}),l}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new we(new bt([])),s=new $t(t,e),a=new $t(t,e+1);let l=Be();return this.gr.forEachInRange([s,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new $t(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class $t{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return we.comparator(e.key,t.key)||He(e.Cr,t.Cr)}static pr(e,t){return He(e.Cr,t.Cr)||we.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new zt($t.mr)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new y2(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Mr=this.Mr.add(new $t(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(c)}lookupMutationBatch(e,t){return J.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Nr(s),l=a<0?0:a;return J.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?eg:this.Fr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new $t(t,0),a=new $t(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([s,a],c=>{const d=this.Or(c.Cr);l.push(d)}),J.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new zt(He);return t.forEach(a=>{const l=new $t(a,0),c=new $t(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,c],d=>{s=s.add(d.Cr)})}),J.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;we.isDocumentKey(l)||(l=l.child(""));const c=new $t(new we(l),0);let d=new zt(He);return this.Mr.forEachWhile(_=>{const m=_.key.path;return!!s.isPrefixOf(m)&&(m.length===a&&(d=d.add(_.Cr)),!0)},c),J.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(s=>{const a=this.Or(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){rt(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return J.forEach(t.mutations,a=>{const l=new $t(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new $t(t,0),a=this.Mr.firstAfterOrEqual(s);return J.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e){this.kr=e,this.docs=function(){return new Et(we.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return J.resolve(s?s.document.mutableCopy():Tn.newInvalidDocument(t))}getEntries(e,t){let s=Ms();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():Tn.newInvalidDocument(a))}),J.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Ms();const c=t.path,d=new we(c.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(d);for(;_.hasNext();){const{key:m,value:{document:E}}=_.getNext();if(!c.isPrefixOf(m.path))break;m.path.length>c.length+1||Ok(Dk(E),s)<=0||(a.has(E.key)||ed(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return J.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Ie()}qr(e,t){return J.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new rM(this)}getSize(e){return J.resolve(this.size)}}class rM extends X2{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(s)}),J.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e){this.persistence=e,this.Qr=new Ha(t=>ig(t),sg),this.lastRemoteSnapshotVersion=De.min(),this.highestTargetId=0,this.$r=0,this.Kr=new cg,this.targetCount=0,this.Ur=sl.Kn()}forEachTarget(e,t){return this.Qr.forEach((s,a)=>t(a)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),J.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new sl(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.zn(t),J.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.Qr.forEach((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.Qr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),J.waitFor(l).next(()=>a)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return J.resolve(s)}addMatchingKeys(e,t,s){return this.Kr.yr(t,s),J.resolve()}removeMatchingKeys(e,t,s){this.Kr.br(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),J.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),J.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Kr.vr(t);return J.resolve(s)}containsKey(e,t){return J.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Yf(0),this.zr=!1,this.zr=!0,this.jr=new nM,this.referenceDelegate=e(this),this.Hr=new aM(this),this.indexManager=new q2,this.remoteDocumentCache=function(a){return new sM(a)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new H2(t),this.Yr=new eM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new iM(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){_e("MemoryPersistence","Starting transaction:",e);const a=new oM(this.Gr.next());return this.referenceDelegate.Zr(),s(a).next(l=>this.referenceDelegate.Xr(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}ei(e,t){return J.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class oM extends kk{constructor(e){super(),this.currentSequenceNumber=e}}class hg{constructor(e){this.persistence=e,this.ti=new cg,this.ni=null}static ri(e){return new hg(e)}get ii(){if(this.ni)return this.ni;throw Ie()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),J.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),J.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(a=>this.ii.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.ii.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.ii,s=>{const a=we.fromPath(s);return this.si(e,a).next(l=>{l||t.removeEntry(a,De.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return J.or([()=>J.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Mf{constructor(e,t){this.persistence=e,this.oi=new Ha(s=>Vk(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=$2(this,t)}static ri(e,t){return new Mf(e,t)}Zr(){}Xr(e){return J.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return J.forEach(this.oi,(s,a)=>this.ar(e,s,a).next(l=>l?J.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.qr(e,c=>this.ar(e,c,t).next(d=>{d||(s++,l.removeEntry(c,De.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),J.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),J.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),J.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=rf(e.data.value)),t}ar(e,t,s){return J.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return J.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=a}static Yi(e,t){let s=Be(),a=Be();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new fg(e,t.fromCache,s,a)}}/**
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
 */class lM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class uM{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return JR()?8:Mk(An())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.rs(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ss(e,t,a,s).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new lM;return this._s(e,t,c).next(d=>{if(l.result=d,this.Xi)return this.us(e,t,c,d.size)})}).next(()=>l.result)}us(e,t,s,a){return s.documentReadCount<this.es?(Lo()<=je.DEBUG&&_e("QueryEngine","SDK will not create cache indexes for query:",Uo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),J.resolve()):(Lo()<=je.DEBUG&&_e("QueryEngine","Query:",Uo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ts*a?(Lo()<=je.DEBUG&&_e("QueryEngine","The SDK decides to create cache indexes for query:",Uo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ki(t))):J.resolve())}rs(e,t){if(gS(t))return J.resolve(null);let s=Ki(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=am(t,null,"F"),s=Ki(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const c=Be(...l);return this.ns.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,s).next(_=>{const m=this.cs(t,d);return this.ls(t,m,c,_.readTime)?this.rs(e,am(t,null,"F")):this.hs(e,m,t,_)}))})))}ss(e,t,s,a){return gS(t)||a.isEqual(De.min())?J.resolve(null):this.ns.getDocuments(e,s).next(l=>{const c=this.cs(t,l);return this.ls(t,c,s,a)?J.resolve(null):(Lo()<=je.DEBUG&&_e("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Uo(t)),this.hs(e,c,t,Nk(a,tc)).next(d=>d))})}cs(e,t){let s=new zt(Nw(e));return t.forEach((a,l)=>{ed(e,l)&&(s=s.add(l))}),s}ls(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}_s(e,t,s){return Lo()<=je.DEBUG&&_e("QueryEngine","Using full collection scan to execute query:",Uo(t)),this.ns.getDocumentsMatchingQuery(e,t,Mr.min(),s)}hs(e,t,s,a){return this.ns.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */const dg="LocalStore",cM=3e8;class hM{constructor(e,t,s,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new Et(He),this.Is=new Ha(l=>ig(l),sg),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new J2(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function fM(i,e,t,s){return new hM(i,e,t,s)}async function Jw(i,e){const t=ke(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const c=[],d=[];let _=Be();for(const m of a){c.push(m.batchId);for(const E of m.mutations)_=_.add(E.key)}for(const m of l){d.push(m.batchId);for(const E of m.mutations)_=_.add(E.key)}return t.localDocuments.getDocuments(s,_).next(m=>({Rs:m,removedBatchIds:c,addedBatchIds:d}))})})}function dM(i,e){const t=ke(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),l=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,_,m,E){const T=m.batch,C=T.keys();let V=J.resolve();return C.forEach(H=>{V=V.next(()=>E.getEntry(_,H)).next(X=>{const F=m.docVersions.get(H);rt(F!==null),X.version.compareTo(F)<0&&(T.applyToRemoteDocument(X,m),X.isValidDocument()&&(X.setReadTime(m.commitVersion),E.addEntry(X)))})}),V.next(()=>d.mutationQueue.removeMutationBatch(_,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let _=Be();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(_=_.add(d.batch.mutations[m].key));return _}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function eb(i){const e=ke(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function pM(i,e){const t=ke(i),s=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const d=[];e.targetChanges.forEach((E,T)=>{const C=a.get(T);if(!C)return;d.push(t.Hr.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.Hr.addMatchingKeys(l,E.addedDocuments,T)));let V=C.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?V=V.withResumeToken(hn.EMPTY_BYTE_STRING,De.min()).withLastLimboFreeSnapshotVersion(De.min()):E.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(E.resumeToken,s)),a=a.insert(T,V),function(X,F,Y){return X.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=cM?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(C,V,E)&&d.push(t.Hr.updateTargetData(l,V))});let _=Ms(),m=Be();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),d.push(_M(l,c,e.documentUpdates).next(E=>{_=E.Vs,m=E.fs})),!s.isEqual(De.min())){const E=t.Hr.getLastRemoteSnapshotVersion(l).next(T=>t.Hr.setTargetsMetadata(l,l.currentSequenceNumber,s));d.push(E)}return J.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,_,m)).next(()=>_)}).then(l=>(t.Ts=a,l))}function _M(i,e,t){let s=Be(),a=Be();return t.forEach(l=>s=s.add(l)),e.getEntries(i,s).next(l=>{let c=Ms();return t.forEach((d,_)=>{const m=l.get(d);_.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(d)),_.isNoDocument()&&_.version.isEqual(De.min())?(e.removeEntry(d,_.readTime),c=c.insert(d,_)):!m.isValidDocument()||_.version.compareTo(m.version)>0||_.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(_),c=c.insert(d,_)):_e(dg,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",_.version)}),{Vs:c,fs:a}})}function mM(i,e){const t=ke(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=eg),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function gM(i,e){const t=ke(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.Hr.getTargetData(s,e).next(l=>l?(a=l,J.resolve(a)):t.Hr.allocateTargetId(s).next(c=>(a=new br(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Hr.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.Ts.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(s.targetId,s),t.Is.set(e,s.targetId)),s})}async function hm(i,e,t){const s=ke(i),a=s.Ts.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,c=>s.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!_l(c))throw c;_e(dg,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ts=s.Ts.remove(e),s.Is.delete(a.target)}function DS(i,e,t){const s=ke(i);let a=De.min(),l=Be();return s.persistence.runTransaction("Execute query","readwrite",c=>function(_,m,E){const T=ke(_),C=T.Is.get(E);return C!==void 0?J.resolve(T.Ts.get(C)):T.Hr.getTargetData(m,E)}(s,c,Ki(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(c,d.targetId).next(_=>{l=_})}).next(()=>s.Ps.getDocumentsMatchingQuery(c,e,t?a:De.min(),t?l:Be())).next(d=>(yM(s,n2(e),d),{documents:d,gs:l})))}function yM(i,e,t){let s=i.Es.get(e)||De.min();t.forEach((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),i.Es.set(e,s)}class OS{constructor(){this.activeTargetIds=l2()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vM{constructor(){this.ho=new OS,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new OS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class EM{To(e){}shutdown(){}}/**
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
 */const xS="ConnectivityMonitor";class kS{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){_e(xS,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){_e(xS,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yh=null;function fm(){return Yh===null?Yh=function(){return 268435456+Math.round(2147483648*Math.random())}():Yh++,"0x"+Yh.toString(16)}/**
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
 */const D_="RestConnection",TM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class SM{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${a}`,this.wo=this.databaseId.database===Rf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}bo(e,t,s,a,l){const c=fm(),d=this.So(e,t.toUriEncodedString());_e(D_,`Sending RPC '${e}' ${c}:`,d,s);const _={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(_,a,l),this.vo(e,d,_,s).then(m=>(_e(D_,`Received RPC '${e}' ${c}: `,m),m),m=>{throw Jo(D_,`RPC '${e}' ${c} failed with error: `,m,"url: ",d,"request:",s),m})}Co(e,t,s,a,l,c){return this.bo(e,t,s,a,l)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+dl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}So(e,t){const s=TM[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="WebChannelConnection";class wM extends SM{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,a){const l=fm();return new Promise((c,d)=>{const _=new rw;_.setWithCredentials(!0),_.listenOnce(aw.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case sf.NO_ERROR:const E=_.getResponseJson();_e(mn,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),c(E);break;case sf.TIMEOUT:_e(mn,`RPC '${e}' ${l} timed out`),d(new Ae(se.DEADLINE_EXCEEDED,"Request time out"));break;case sf.HTTP_ERROR:const T=_.getStatus();if(_e(mn,`RPC '${e}' ${l} failed with status:`,T,"response text:",_.getResponseText()),T>0){let C=_.getResponseJson();Array.isArray(C)&&(C=C[0]);const V=C==null?void 0:C.error;if(V&&V.status&&V.message){const H=function(F){const Y=F.toLowerCase().replace(/_/g,"-");return Object.values(se).indexOf(Y)>=0?Y:se.UNKNOWN}(V.status);d(new Ae(H,V.message))}else d(new Ae(se.UNKNOWN,"Server responded with status "+_.getStatus()))}else d(new Ae(se.UNAVAILABLE,"Connection failed."));break;default:Ie()}}finally{_e(mn,`RPC '${e}' ${l} completed.`)}});const m=JSON.stringify(a);_e(mn,`RPC '${e}' ${l} sending request:`,a),_.send(t,"POST",m,s,15)})}Wo(e,t,s){const a=fm(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=uw(),d=lw(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(_.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(_.useFetchStreams=!0),this.Do(_.initMessageHeaders,t,s),_.encodeInitMessageHeaders=!0;const E=l.join("");_e(mn,`Creating RPC '${e}' stream ${a}: ${E}`,_);const T=c.createWebChannel(E,_);let C=!1,V=!1;const H=new AM({Fo:F=>{V?_e(mn,`Not sending because RPC '${e}' stream ${a} is closed:`,F):(C||(_e(mn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),C=!0),_e(mn,`RPC '${e}' stream ${a} sending:`,F),T.send(F))},Mo:()=>T.close()}),X=(F,Y,ee)=>{F.listen(Y,ue=>{try{ee(ue)}catch(re){setTimeout(()=>{throw re},0)}})};return X(T,Lu.EventType.OPEN,()=>{V||(_e(mn,`RPC '${e}' stream ${a} transport opened.`),H.Qo())}),X(T,Lu.EventType.CLOSE,()=>{V||(V=!0,_e(mn,`RPC '${e}' stream ${a} transport closed`),H.Ko())}),X(T,Lu.EventType.ERROR,F=>{V||(V=!0,Jo(mn,`RPC '${e}' stream ${a} transport errored:`,F),H.Ko(new Ae(se.UNAVAILABLE,"The operation could not be completed")))}),X(T,Lu.EventType.MESSAGE,F=>{var Y;if(!V){const ee=F.data[0];rt(!!ee);const ue=ee,re=(ue==null?void 0:ue.error)||((Y=ue[0])===null||Y===void 0?void 0:Y.error);if(re){_e(mn,`RPC '${e}' stream ${a} received error:`,re);const de=re.status;let ye=function(b){const R=kt[b];if(R!==void 0)return zw(R)}(de),x=re.message;ye===void 0&&(ye=se.INTERNAL,x="Unknown error status: "+de+" with message "+re.message),V=!0,H.Ko(new Ae(ye,x)),T.close()}else _e(mn,`RPC '${e}' stream ${a} received:`,ee),H.Uo(ee)}}),X(d,ow.STAT_EVENT,F=>{F.stat===tm.PROXY?_e(mn,`RPC '${e}' stream ${a} detected buffering proxy`):F.stat===tm.NOPROXY&&_e(mn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{H.$o()},0),H}}function O_(){return typeof document<"u"?document:null}/**
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
 */function sd(i){return new I2(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=a,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-s);a>0&&_e("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="PersistentStream";class nb{constructor(e,t,s,a,l,c,d,_){this.Ti=e,this.n_=s,this.r_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=_,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new tb(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===se.RESOURCE_EXHAUSTED?(ks(t.toString()),ks("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===se.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.i_===t&&this.V_(s,a)},s=>{e(()=>{const a=new Ae(se.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(a)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{s(()=>this.m_(a))}),this.stream.onMessage(a=>{s(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return _e(MS,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(_e(MS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bM extends nb{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=O2(this.serializer,e),s=function(l){if(!("targetChange"in l))return De.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?De.min():c.readTime?Qi(c.readTime):De.min()}(e);return this.listener.p_(t,s)}y_(e){const t={};t.database=cm(this.serializer),t.addTarget=function(l,c){let d;const _=c.target;if(d=rm(_)?{documents:M2(l,_)}:{query:P2(l,_).ht},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=qw(l,c.resumeToken);const m=om(l,c.expectedCount);m!==null&&(d.expectedCount=m)}else if(c.snapshotVersion.compareTo(De.min())>0){d.readTime=kf(l,c.snapshotVersion.toTimestamp());const m=om(l,c.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const s=L2(this.serializer,e);s&&(t.labels=s),this.I_(t)}w_(e){const t={};t.database=cm(this.serializer),t.removeTarget=e,this.I_(t)}}class CM extends nb{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return rt(!!e.streamToken),this.lastStreamToken=e.streamToken,rt(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){rt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=k2(e.writeResults,e.commitTime),s=Qi(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=cm(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>x2(this.serializer,s))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{}class IM extends RM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new Ae(se.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,s,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.bo(e,lm(t,s),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Ae(se.UNKNOWN,l.toString())})}Co(e,t,s,a,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Co(e,lm(t,s),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new Ae(se.UNKNOWN,c.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class NM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(ks(t),this.N_=!1):_e("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="RemoteStore";class DM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(c=>{s.enqueueAndForget(async()=>{Fa(this)&&(_e(Pa,"Restarting streams for network reachability change."),await async function(_){const m=ke(_);m.W_.add(4),await vc(m),m.j_.set("Unknown"),m.W_.delete(4),await rd(m)}(this))})}),this.j_=new NM(s,a)}}async function rd(i){if(Fa(i))for(const e of i.G_)await e(!0)}async function vc(i){for(const e of i.G_)await e(!1)}function ib(i,e){const t=ke(i);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),gg(t)?mg(t):ml(t).c_()&&_g(t,e))}function pg(i,e){const t=ke(i),s=ml(t);t.U_.delete(e),s.c_()&&sb(t,e),t.U_.size===0&&(s.c_()?s.P_():Fa(t)&&t.j_.set("Unknown"))}function _g(i,e){if(i.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(De.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ml(i).y_(e)}function sb(i,e){i.H_.Ne(e),ml(i).w_(e)}function mg(i){i.H_=new w2({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>i.U_.get(e)||null,it:()=>i.datastore.serializer.databaseId}),ml(i).start(),i.j_.B_()}function gg(i){return Fa(i)&&!ml(i).u_()&&i.U_.size>0}function Fa(i){return ke(i).W_.size===0}function rb(i){i.H_=void 0}async function OM(i){i.j_.set("Online")}async function xM(i){i.U_.forEach((e,t)=>{_g(i,e)})}async function kM(i,e){rb(i),gg(i)?(i.j_.q_(e),mg(i)):i.j_.set("Unknown")}async function MM(i,e,t){if(i.j_.set("Online"),e instanceof Fw&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.U_.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.U_.delete(d),a.H_.removeTarget(d))}(i,e)}catch(s){_e(Pa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Pf(i,s)}else if(e instanceof lf?i.H_.We(e):e instanceof Hw?i.H_.Ze(e):i.H_.je(e),!t.isEqual(De.min()))try{const s=await eb(i.localStore);t.compareTo(s)>=0&&await function(l,c){const d=l.H_.ot(c);return d.targetChanges.forEach((_,m)=>{if(_.resumeToken.approximateByteSize()>0){const E=l.U_.get(m);E&&l.U_.set(m,E.withResumeToken(_.resumeToken,c))}}),d.targetMismatches.forEach((_,m)=>{const E=l.U_.get(_);if(!E)return;l.U_.set(_,E.withResumeToken(hn.EMPTY_BYTE_STRING,E.snapshotVersion)),sb(l,_);const T=new br(E.target,_,m,E.sequenceNumber);_g(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(i,t)}catch(s){_e(Pa,"Failed to raise snapshot:",s),await Pf(i,s)}}async function Pf(i,e,t){if(!_l(e))throw e;i.W_.add(1),await vc(i),i.j_.set("Offline"),t||(t=()=>eb(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{_e(Pa,"Retrying IndexedDB access"),await t(),i.W_.delete(1),await rd(i)})}function ab(i,e){return e().catch(t=>Pf(i,t,e))}async function ad(i){const e=ke(i),t=Ur(e);let s=e.K_.length>0?e.K_[e.K_.length-1].batchId:eg;for(;PM(e);)try{const a=await mM(e.localStore,s);if(a===null){e.K_.length===0&&t.P_();break}s=a.batchId,VM(e,a)}catch(a){await Pf(e,a)}ob(e)&&lb(e)}function PM(i){return Fa(i)&&i.K_.length<10}function VM(i,e){i.K_.push(e);const t=Ur(i);t.c_()&&t.b_&&t.S_(e.mutations)}function ob(i){return Fa(i)&&!Ur(i).u_()&&i.K_.length>0}function lb(i){Ur(i).start()}async function LM(i){Ur(i).C_()}async function UM(i){const e=Ur(i);for(const t of i.K_)e.S_(t.mutations)}async function jM(i,e,t){const s=i.K_.shift(),a=og.from(s,e,t);await ab(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await ad(i)}async function BM(i,e){e&&Ur(i).b_&&await async function(s,a){if(function(c){return T2(c)&&c!==se.ABORTED}(a.code)){const l=s.K_.shift();Ur(s).h_(),await ab(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a)),await ad(s)}}(i,e),ob(i)&&lb(i)}async function PS(i,e){const t=ke(i);t.asyncQueue.verifyOperationInProgress(),_e(Pa,"RemoteStore received new credentials");const s=Fa(t);t.W_.add(3),await vc(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await rd(t)}async function zM(i,e){const t=ke(i);e?(t.W_.delete(2),await rd(t)):e||(t.W_.add(2),await vc(t),t.j_.set("Unknown"))}function ml(i){return i.J_||(i.J_=function(t,s,a){const l=ke(t);return l.M_(),new bM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{xo:OM.bind(null,i),No:xM.bind(null,i),Lo:kM.bind(null,i),p_:MM.bind(null,i)}),i.G_.push(async e=>{e?(i.J_.h_(),gg(i)?mg(i):i.j_.set("Unknown")):(await i.J_.stop(),rb(i))})),i.J_}function Ur(i){return i.Y_||(i.Y_=function(t,s,a){const l=ke(t);return l.M_(),new CM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{xo:()=>Promise.resolve(),No:LM.bind(null,i),Lo:BM.bind(null,i),D_:UM.bind(null,i),v_:jM.bind(null,i)}),i.G_.push(async e=>{e?(i.Y_.h_(),await ad(i)):(await i.Y_.stop(),i.K_.length>0&&(_e(Pa,`Stopping write stream with ${i.K_.length} pending writes`),i.K_=[]))})),i.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new yg(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ae(se.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vg(i,e){if(ks("AsyncQueue",`${e}: ${i}`),_l(i))return new Ae(se.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{static emptySet(e){return new Yo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||we.comparator(t.key,s.key):(t,s)=>we.comparator(t.key,s.key),this.keyedMap=Uu(),this.sortedSet=new Et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Yo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(){this.Z_=new Et(we.comparator)}track(e){const t=e.doc.key,s=this.Z_.get(t);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(t):e.type===1&&s.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Ie():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class rl{constructor(e,t,s,a,l,c,d,_,m){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=_,this.hasCachedResults=m}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new rl(e,t,Yo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class FM{constructor(){this.queries=LS(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const a=ke(t),l=a.queries;a.queries=LS(),l.forEach((c,d)=>{for(const _ of d.ta)_.onError(s)})})(this,new Ae(se.ABORTED,"Firestore shutting down"))}}function LS(){return new Ha(i=>Iw(i),Jf)}async function qM(i,e){const t=ke(i);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.na()&&e.ra()&&(s=2):(l=new HM,s=e.ra()?0:1);try{switch(s){case 0:l.ea=await t.onListen(a,!0);break;case 1:l.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=vg(c,`Initialization of query '${Uo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.ta.push(e),e.sa(t.onlineState),l.ea&&e.oa(l.ea)&&Eg(t)}async function GM(i,e){const t=ke(i),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.ta.indexOf(e);c>=0&&(l.ta.splice(c,1),l.ta.length===0?a=e.ra()?0:1:!l.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function KM(i,e){const t=ke(i);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.ta)d.oa(a)&&(s=!0);c.ea=a}}s&&Eg(t)}function WM(i,e,t){const s=ke(i),a=s.queries.get(e);if(a)for(const l of a.ta)l.onError(t);s.queries.delete(e)}function Eg(i){i.ia.forEach(e=>{e.next()})}var dm,US;(US=dm||(dm={}))._a="default",US.Cache="cache";class QM{constructor(e,t,s){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new rl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const s=t!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=rl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==dm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.key=e}}class cb{constructor(e){this.key=e}}class YM{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Be(),this.mutatedKeys=Be(),this.ya=Nw(e),this.wa=new Yo(this.ya)}get ba(){return this.fa}Sa(e,t){const s=t?t.Da:new VS,a=t?t.wa:this.wa;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const _=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((E,T)=>{const C=a.get(E),V=ed(this.query,T)?T:null,H=!!C&&this.mutatedKeys.has(C.key),X=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let F=!1;C&&V?C.data.isEqual(V.data)?H!==X&&(s.track({type:3,doc:V}),F=!0):this.va(C,V)||(s.track({type:2,doc:V}),F=!0,(_&&this.ya(V,_)>0||m&&this.ya(V,m)<0)&&(d=!0)):!C&&V?(s.track({type:0,doc:V}),F=!0):C&&!V&&(s.track({type:1,doc:C}),F=!0,(_||m)&&(d=!0)),F&&(V?(c=c.add(V),l=X?l.add(E):l.delete(E)):(c=c.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const E=this.query.limitType==="F"?c.last():c.first();c=c.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{wa:c,Da:s,ls:d,mutatedKeys:l}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const c=e.Da.X_();c.sort((E,T)=>function(V,H){const X=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie()}};return X(V)-X(H)}(E.type,T.type)||this.ya(E.doc,T.doc)),this.Ca(s),a=a!=null&&a;const d=t&&!a?this.Fa():[],_=this.pa.size===0&&this.current&&!a?1:0,m=_!==this.ga;return this.ga=_,c.length!==0||m?{snapshot:new rl(this.query,e.wa,l,c,e.mutatedKeys,_===0,m,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new VS,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Be(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const t=[];return e.forEach(s=>{this.pa.has(s)||t.push(new cb(s))}),this.pa.forEach(s=>{e.has(s)||t.push(new ub(s))}),t}Oa(e){this.fa=e.gs,this.pa=Be();const t=this.Sa(e.documents);return this.applyChanges(t,!0)}Na(){return rl.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Tg="SyncEngine";class $M{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class XM{constructor(e){this.key=e,this.Ba=!1}}class ZM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.La={},this.ka=new Ha(d=>Iw(d),Jf),this.qa=new Map,this.Qa=new Set,this.$a=new Et(we.comparator),this.Ka=new Map,this.Ua=new cg,this.Wa={},this.Ga=new Map,this.za=sl.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function JM(i,e,t=!0){const s=mb(i);let a;const l=s.ka.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.Na()):a=await hb(s,e,t,!0),a}async function eP(i,e){const t=mb(i);await hb(t,e,!0,!1)}async function hb(i,e,t,s){const a=await gM(i.localStore,Ki(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await tP(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&ib(i.remoteStore,a),d}async function tP(i,e,t,s,a){i.Ha=(T,C,V)=>async function(X,F,Y,ee){let ue=F.view.Sa(Y);ue.ls&&(ue=await DS(X.localStore,F.query,!1).then(({documents:x})=>F.view.Sa(x,ue)));const re=ee&&ee.targetChanges.get(F.targetId),de=ee&&ee.targetMismatches.get(F.targetId)!=null,ye=F.view.applyChanges(ue,X.isPrimaryClient,re,de);return BS(X,F.targetId,ye.Ma),ye.snapshot}(i,T,C,V);const l=await DS(i.localStore,e,!0),c=new YM(e,l.gs),d=c.Sa(l.documents),_=yc.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),m=c.applyChanges(d,i.isPrimaryClient,_);BS(i,t,m.Ma);const E=new $M(e,t,c);return i.ka.set(e,E),i.qa.has(t)?i.qa.get(t).push(e):i.qa.set(t,[e]),m.snapshot}async function nP(i,e,t){const s=ke(i),a=s.ka.get(e),l=s.qa.get(a.targetId);if(l.length>1)return s.qa.set(a.targetId,l.filter(c=>!Jf(c,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await hm(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&pg(s.remoteStore,a.targetId),pm(s,a.targetId)}).catch(pl)):(pm(s,a.targetId),await hm(s.localStore,a.targetId,!0))}async function iP(i,e){const t=ke(i),s=t.ka.get(e),a=t.qa.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),pg(t.remoteStore,s.targetId))}async function sP(i,e,t){const s=hP(i);try{const a=await function(c,d){const _=ke(c),m=Bt.now(),E=d.reduce((V,H)=>V.add(H.key),Be());let T,C;return _.persistence.runTransaction("Locally write mutations","readwrite",V=>{let H=Ms(),X=Be();return _.ds.getEntries(V,E).next(F=>{H=F,H.forEach((Y,ee)=>{ee.isValidDocument()||(X=X.add(Y))})}).next(()=>_.localDocuments.getOverlayedDocuments(V,H)).next(F=>{T=F;const Y=[];for(const ee of d){const ue=m2(ee,T.get(ee.key).overlayedDocument);ue!=null&&Y.push(new Fr(ee.key,ue,Tw(ue.value.mapValue),Wi.exists(!0)))}return _.mutationQueue.addMutationBatch(V,m,Y,d)}).next(F=>{C=F;const Y=F.applyToLocalDocumentSet(T,X);return _.documentOverlayCache.saveOverlays(V,F.batchId,Y)})}).then(()=>({batchId:C.batchId,changes:Ow(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(c,d,_){let m=c.Wa[c.currentUser.toKey()];m||(m=new Et(He)),m=m.insert(d,_),c.Wa[c.currentUser.toKey()]=m}(s,a.batchId,t),await Ec(s,a.changes),await ad(s.remoteStore)}catch(a){const l=vg(a,"Failed to persist write");t.reject(l)}}async function fb(i,e){const t=ke(i);try{const s=await pM(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Ka.get(l);c&&(rt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?c.Ba=!0:a.modifiedDocuments.size>0?rt(c.Ba):a.removedDocuments.size>0&&(rt(c.Ba),c.Ba=!1))}),await Ec(t,s,e)}catch(s){await pl(s)}}function jS(i,e,t){const s=ke(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.ka.forEach((l,c)=>{const d=c.view.sa(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const _=ke(c);_.onlineState=d;let m=!1;_.queries.forEach((E,T)=>{for(const C of T.ta)C.sa(d)&&(m=!0)}),m&&Eg(_)}(s.eventManager,e),a.length&&s.La.p_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function rP(i,e,t){const s=ke(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Ka.get(e),l=a&&a.key;if(l){let c=new Et(we.comparator);c=c.insert(l,Tn.newNoDocument(l,De.min()));const d=Be().add(l),_=new id(De.min(),new Map,new Et(He),c,d);await fb(s,_),s.$a=s.$a.remove(l),s.Ka.delete(e),Sg(s)}else await hm(s.localStore,e,!1).then(()=>pm(s,e,t)).catch(pl)}async function aP(i,e){const t=ke(i),s=e.batch.batchId;try{const a=await dM(t.localStore,e);pb(t,s,null),db(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ec(t,a)}catch(a){await pl(a)}}async function oP(i,e,t){const s=ke(i);try{const a=await function(c,d){const _=ke(c);return _.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let E;return _.mutationQueue.lookupMutationBatch(m,d).next(T=>(rt(T!==null),E=T.keys(),_.mutationQueue.removeMutationBatch(m,T))).next(()=>_.mutationQueue.performConsistencyCheck(m)).next(()=>_.documentOverlayCache.removeOverlaysForBatchId(m,E,d)).next(()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,E)).next(()=>_.localDocuments.getDocuments(m,E))})}(s.localStore,e);pb(s,e,t),db(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ec(s,a)}catch(a){await pl(a)}}function db(i,e){(i.Ga.get(e)||[]).forEach(t=>{t.resolve()}),i.Ga.delete(e)}function pb(i,e,t){const s=ke(i);let a=s.Wa[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Wa[s.currentUser.toKey()]=a}}function pm(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.qa.get(e))i.ka.delete(s),t&&i.La.Ja(s,t);i.qa.delete(e),i.isPrimaryClient&&i.Ua.Sr(e).forEach(s=>{i.Ua.containsKey(s)||_b(i,s)})}function _b(i,e){i.Qa.delete(e.path.canonicalString());const t=i.$a.get(e);t!==null&&(pg(i.remoteStore,t),i.$a=i.$a.remove(e),i.Ka.delete(t),Sg(i))}function BS(i,e,t){for(const s of t)s instanceof ub?(i.Ua.addReference(s.key,e),lP(i,s)):s instanceof cb?(_e(Tg,"Document no longer in limbo: "+s.key),i.Ua.removeReference(s.key,e),i.Ua.containsKey(s.key)||_b(i,s.key)):Ie()}function lP(i,e){const t=e.key,s=t.path.canonicalString();i.$a.get(t)||i.Qa.has(s)||(_e(Tg,"New document in limbo: "+t),i.Qa.add(s),Sg(i))}function Sg(i){for(;i.Qa.size>0&&i.$a.size<i.maxConcurrentLimboResolutions;){const e=i.Qa.values().next().value;i.Qa.delete(e);const t=new we(bt.fromString(e)),s=i.za.next();i.Ka.set(s,new XM(t)),i.$a=i.$a.insert(t,s),ib(i.remoteStore,new br(Ki(rg(t.path)),s,"TargetPurposeLimboResolution",Yf.ae))}}async function Ec(i,e,t){const s=ke(i),a=[],l=[],c=[];s.ka.isEmpty()||(s.ka.forEach((d,_)=>{c.push(s.Ha(_,e,t).then(m=>{var E;if((m||t)&&s.isPrimaryClient){const T=m?!m.fromCache:(E=t==null?void 0:t.targetChanges.get(_.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(_.targetId,T?"current":"not-current")}if(m){a.push(m);const T=fg.Yi(_.targetId,m);l.push(T)}}))}),await Promise.all(c),s.La.p_(a),await async function(_,m){const E=ke(_);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>J.forEach(m,C=>J.forEach(C.Hi,V=>E.persistence.referenceDelegate.addReference(T,C.targetId,V)).next(()=>J.forEach(C.Ji,V=>E.persistence.referenceDelegate.removeReference(T,C.targetId,V)))))}catch(T){if(!_l(T))throw T;_e(dg,"Failed to update sequence numbers: "+T)}for(const T of m){const C=T.targetId;if(!T.fromCache){const V=E.Ts.get(C),H=V.snapshotVersion,X=V.withLastLimboFreeSnapshotVersion(H);E.Ts=E.Ts.insert(C,X)}}}(s.localStore,l))}async function uP(i,e){const t=ke(i);if(!t.currentUser.isEqual(e)){_e(Tg,"User change. New user:",e.toKey());const s=await Jw(t.localStore,e);t.currentUser=e,function(l,c){l.Ga.forEach(d=>{d.forEach(_=>{_.reject(new Ae(se.CANCELLED,c))})}),l.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ec(t,s.Rs)}}function cP(i,e){const t=ke(i),s=t.Ka.get(e);if(s&&s.Ba)return Be().add(s.key);{let a=Be();const l=t.qa.get(e);if(!l)return a;for(const c of l){const d=t.ka.get(c);a=a.unionWith(d.view.ba)}return a}}function mb(i){const e=ke(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=fb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rP.bind(null,e),e.La.p_=KM.bind(null,e.eventManager),e.La.Ja=WM.bind(null,e.eventManager),e}function hP(i){const e=ke(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oP.bind(null,e),e}class Vf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sd(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return fM(this.persistence,new uM,e.initialUser,this.serializer)}Xa(e){return new Zw(hg.ri,this.serializer)}Za(e){return new vM}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vf.provider={build:()=>new Vf};class fP extends Vf{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){rt(this.persistence.referenceDelegate instanceof Mf);const s=this.persistence.referenceDelegate.garbageCollector;return new Q2(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?xn.withCacheSize(this.cacheSizeBytes):xn.DEFAULT;return new Zw(s=>Mf.ri(s,t),this.serializer)}}class _m{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>jS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=uP.bind(null,this.syncEngine),await zM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FM}()}createDatastore(e){const t=sd(e.databaseInfo.databaseId),s=function(l){return new wM(l)}(e.databaseInfo);return function(l,c,d,_){return new IM(l,c,d,_)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,c,d){return new DM(s,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>jS(this.syncEngine,t,0),function(){return kS.D()?new kS:new EM}())}createSyncEngine(e,t){return function(a,l,c,d,_,m,E){const T=new ZM(a,l,c,d,_,m);return E&&(T.ja=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=ke(a);_e(Pa,"RemoteStore shutting down."),l.W_.add(5),await vc(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}_m.provider={build:()=>new _m};/**
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
 */class dP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):ks("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="FirestoreClient";class pP{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=yn.UNAUTHENTICATED,this.clientId=hw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async c=>{_e(jr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(_e(jr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=vg(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function x_(i,e){i.asyncQueue.verifyOperationInProgress(),_e(jr,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await Jw(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function zS(i,e){i.asyncQueue.verifyOperationInProgress();const t=await _P(i);_e(jr,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>PS(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>PS(e.remoteStore,a)),i._onlineComponents=e}async function _P(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){_e(jr,"Using user provided OfflineComponentProvider");try{await x_(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===se.FAILED_PRECONDITION||a.code===se.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Jo("Error using user provided cache. Falling back to memory cache: "+t),await x_(i,new Vf)}}else _e(jr,"Using default OfflineComponentProvider"),await x_(i,new fP(void 0));return i._offlineComponents}async function gb(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(_e(jr,"Using user provided OnlineComponentProvider"),await zS(i,i._uninitializedComponentsProvider._online)):(_e(jr,"Using default OnlineComponentProvider"),await zS(i,new _m))),i._onlineComponents}function mP(i){return gb(i).then(e=>e.syncEngine)}async function gP(i){const e=await gb(i),t=e.eventManager;return t.onListen=JM.bind(null,e.syncEngine),t.onUnlisten=nP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=eP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=iP.bind(null,e.syncEngine),t}function yP(i,e,t={}){const s=new Dr;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,d,_,m){const E=new dP({next:C=>{E.su(),c.enqueueAndForget(()=>GM(l,T));const V=C.docs.has(d);!V&&C.fromCache?m.reject(new Ae(se.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&C.fromCache&&_&&_.source==="server"?m.reject(new Ae(se.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(C)},error:C=>m.reject(C)}),T=new QM(rg(d.path),E,{includeMetadataChanges:!0,Ta:!0});return qM(l,T)}(await gP(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function yb(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const HS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(i,e,t){if(!t)throw new Ae(se.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function EP(i,e,t,s){if(e===!0&&s===!0)throw new Ae(se.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function FS(i){if(!we.isDocumentKey(i))throw new Ae(se.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Ag(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ie()}function Va(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new Ae(se.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ag(i);throw new Ae(se.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */const vb="firestore.googleapis.com",qS=!0;class GS{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Ae(se.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vb,this.ssl=qS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:qS;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<K2)throw new Ae(se.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}EP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new Ae(se.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new Ae(se.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new Ae(se.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wg{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new GS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ae(se.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ae(se.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new GS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Tk;switch(s.type){case"firstParty":return new bk(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Ae(se.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=HS.get(t);s&&(_e("ComponentProvider","Removing Datastore"),HS.delete(t),s.terminate())}(this),Promise.resolve()}}function TP(i,e,t,s={}){var a;const l=(i=Va(i,wg))._getSettings(),c=Object.assign(Object.assign({},l),{emulatorOptions:i._getEmulatorOptions()}),d=`${e}:${t}`;l.host!==vb&&l.host!==d&&Jo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},l),{host:d,ssl:!1,emulatorOptions:s});if(!Or(_,c)&&(i._setSettings(_),s.mockUserToken)){let m,E;if(typeof s.mockUserToken=="string")m=s.mockUserToken,E=yn.MOCK_USER;else{m=WR(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new Ae(se.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new yn(T)}i._authCredentials=new Sk(new cw(m,E))}}/**
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
 */class bg{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new bg(this.firestore,e,this._query)}}class Wn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ac(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wn(this.firestore,e,this._key)}}class ac extends bg{constructor(e,t,s){super(e,t,rg(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wn(this.firestore,null,new we(e))}withConverter(e){return new ac(this.firestore,e,this._path)}}function gl(i,e,...t){if(i=cn(i),arguments.length===1&&(e=hw.newId()),vP("doc","path",e),i instanceof wg){const s=bt.fromString(e,...t);return FS(s),new Wn(i,null,new we(s))}{if(!(i instanceof Wn||i instanceof ac))throw new Ae(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(bt.fromString(e,...t));return FS(s),new Wn(i.firestore,i instanceof ac?i.converter:null,new we(s))}}/**
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
 */const KS="AsyncQueue";class WS{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new tb(this,"async_queue_retry"),this.bu=()=>{const s=O_();s&&_e(KS,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=e;const t=O_();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=O_();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Dr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!_l(e))throw e;_e(KS,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const a=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(s);throw ks("INTERNAL UNHANDLED ERROR: ",a),s}).then(s=>(this.pu=!1,s))));return this.Su=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=yg.createAndSchedule(this,e,t,s,l=>this.Fu(l));return this.fu.push(a),a}Du(){this.gu&&Ie()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class od extends wg{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new WS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new WS(e),this._firestoreClient=void 0,await e}}}function SP(i,e){const t=l0(),s=Rf,a=Sm(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=KR("firestore");l&&TP(a,...l)}return a}function Eb(i){if(i._terminated)throw new Ae(se.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||AP(i),i._firestoreClient}function AP(i){var e,t,s;const a=i._freezeSettings(),l=function(d,_,m,E){return new jk(d,_,m,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,yb(E.experimentalLongPollingOptions),E.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new pP(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(d){const _=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(_),_online:_}}(i._componentsProvider))}/**
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
 */class al{constructor(e){this._byteString=e}static fromBase64String(e){try{return new al(hn.fromBase64String(e))}catch(t){throw new Ae(se.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new al(hn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ld{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Ae(se.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new un(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ud{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ae(se.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ae(se.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return He(this._lat,e._lat)||He(this._long,e._long)}}/**
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
 */class Rg{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=/^__.*__$/;class bP{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,t,this.fieldTransforms):new gc(e,this.data,t,this.fieldTransforms)}}class Tb{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Fr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Sb(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie()}}class cd{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new cd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:s,Qu:!1});return a.$u(e),a}Ku(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:s,Qu:!1});return a.Bu(),a}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Lf(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Sb(this.Lu)&&wP.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class CP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||sd(e)}ju(e,t,s,a=!1){return new cd({Lu:e,methodName:t,zu:s,path:un.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ab(i){const e=i._freezeSettings(),t=sd(i._databaseId);return new CP(i._databaseId,!!e.ignoreUndefinedProperties,t)}function RP(i,e,t,s,a,l={}){const c=i.ju(l.merge||l.mergeFields?2:0,e,t,a);Ng("Data must be an object, but it was:",c,s);const d=wb(s,c);let _,m;if(l.merge)_=new Gn(c.fieldMask),m=c.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const C=mm(e,T,t);if(!c.contains(C))throw new Ae(se.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);Cb(E,C)||E.push(C)}_=new Gn(E),m=c.fieldTransforms.filter(T=>_.covers(T.field))}else _=null,m=c.fieldTransforms;return new bP(new kn(d),_,m)}class hd extends ud{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hd}}function IP(i,e,t){return new cd({Lu:3,zu:e.settings.zu,methodName:i._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ig extends ud{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=IP(this,e,!0),s=this.Hu.map(l=>Tc(l,t)),a=new il(s);return new f2(e.path,a)}isEqual(e){return e instanceof Ig&&Or(this.Hu,e.Hu)}}function NP(i,e,t,s){const a=i.ju(1,e,t);Ng("Data must be an object, but it was:",a,s);const l=[],c=kn.empty();Hr(s,(_,m)=>{const E=Dg(e,_,t);m=cn(m);const T=a.Ku(E);if(m instanceof hd)l.push(E);else{const C=Tc(m,T);C!=null&&(l.push(E),c.set(E,C))}});const d=new Gn(l);return new Tb(c,d,a.fieldTransforms)}function DP(i,e,t,s,a,l){const c=i.ju(1,e,t),d=[mm(e,s,t)],_=[a];if(l.length%2!=0)throw new Ae(se.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<l.length;C+=2)d.push(mm(e,l[C])),_.push(l[C+1]);const m=[],E=kn.empty();for(let C=d.length-1;C>=0;--C)if(!Cb(m,d[C])){const V=d[C];let H=_[C];H=cn(H);const X=c.Ku(V);if(H instanceof hd)m.push(V);else{const F=Tc(H,X);F!=null&&(m.push(V),E.set(V,F))}}const T=new Gn(m);return new Tb(E,T,c.fieldTransforms)}function Tc(i,e){if(bb(i=cn(i)))return Ng("Unsupported field value:",e,i),wb(i,e);if(i instanceof ud)return function(s,a){if(!Sb(a.Lu))throw a.Wu(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,a){const l=[];let c=0;for(const d of s){let _=Tc(d,a.Uu(c));_==null&&(_={nullValue:"NULL_VALUE"}),l.push(_),c++}return{arrayValue:{values:l}}}(i,e)}return function(s,a){if((s=cn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return u2(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Bt.fromDate(s);return{timestampValue:kf(a.serializer,l)}}if(s instanceof Bt){const l=new Bt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:kf(a.serializer,l)}}if(s instanceof Cg)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof al)return{bytesValue:qw(a.serializer,s._byteString)};if(s instanceof Wn){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Wu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:ug(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Rg)return function(c,d){return{mapValue:{fields:{[vw]:{stringValue:Ew},[If]:{arrayValue:{values:c.toArray().map(m=>{if(typeof m!="number")throw d.Wu("VectorValues must only contain numeric values.");return ag(d.serializer,m)})}}}}}}(s,a);throw a.Wu(`Unsupported field value: ${Ag(s)}`)}(i,e)}function wb(i,e){const t={};return dw(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hr(i,(s,a)=>{const l=Tc(a,e.qu(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function bb(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Bt||i instanceof Cg||i instanceof al||i instanceof Wn||i instanceof ud||i instanceof Rg)}function Ng(i,e,t){if(!bb(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const s=Ag(t);throw s==="an object"?e.Wu(i+" a custom object"):e.Wu(i+" "+s)}}function mm(i,e,t){if((e=cn(e))instanceof ld)return e._internalPath;if(typeof e=="string")return Dg(i,e);throw Lf("Field path arguments must be of type string or ",i,!1,void 0,t)}const OP=new RegExp("[~\\*/\\[\\]]");function Dg(i,e,t){if(e.search(OP)>=0)throw Lf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new ld(...e.split("."))._internalPath}catch{throw Lf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Lf(i,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let _="";return(l||c)&&(_+=" (found",l&&(_+=` in field ${s}`),c&&(_+=` in document ${a}`),_+=")"),new Ae(se.INVALID_ARGUMENT,d+i+_)}function Cb(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class Rb{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Wn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ib("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xP extends Rb{data(){return super.data()}}function Ib(i,e){return typeof e=="string"?Dg(i,e):e instanceof ld?e._internalPath:e._delegate._internalPath}class kP{convertValue(e,t="none"){switch(Lr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return It(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Hr(e,(a,l)=>{s[a]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[If].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(c=>It(c.doubleValue));return new Rg(l)}convertGeoPoint(e){return new Cg(It(e.latitude),It(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Xf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(nc(e));default:return null}}convertTimestamp(e){const t=Pr(e);return new Bt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=bt.fromString(e);rt($w(s));const a=new ic(s.get(1),s.get(3)),l=new we(s.popFirst(5));return a.isEqual(t)||ks(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function MP(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
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
 */class PP{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nb extends Rb{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new VP(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ib("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class VP extends Nb{data(e={}){return super.data(e)}}/**
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
 */function Db(i){i=Va(i,Wn);const e=Va(i.firestore,od);return yP(Eb(e),i._key).then(t=>jP(e,i,t))}class LP extends kP{constructor(e){super(),this.firestore=e}convertBytes(e){return new al(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Wn(this.firestore,null,t)}}function UP(i,e,t){i=Va(i,Wn);const s=Va(i.firestore,od),a=MP(i.converter,e);return Ob(s,[RP(Ab(s),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,Wi.none())])}function Og(i,e,t,...s){i=Va(i,Wn);const a=Va(i.firestore,od),l=Ab(a);let c;return c=typeof(e=cn(e))=="string"||e instanceof ld?DP(l,"updateDoc",i._key,e,t,s):NP(l,"updateDoc",i._key,e),Ob(a,[c.toMutation(i._key,Wi.exists(!0))])}function Ob(i,e){return function(s,a){const l=new Dr;return s.asyncQueue.enqueueAndForget(async()=>sP(await mP(s),a,l)),l.promise}(Eb(i),e)}function jP(i,e,t){const s=t.docs.get(e._key),a=new LP(i);return new Nb(i,a,e._key,s,new PP(t.hasPendingWrites,t.fromCache),e.converter)}function BP(...i){return new Ig("arrayUnion",i)}(function(e,t=!0){(function(a){dl=a})(Ua),Ra(new xr("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new od(new Ak(s.getProvider("auth-internal")),new Ck(c,s.getProvider("app-check-internal")),function(m,E){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new Ae(se.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ic(m.options.projectId,E)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Fi(tS,nS,e),Fi(tS,nS,"esm2017")})();const zP={apiKey:"AIzaSyDWN5GCnrhUqKZlOt8Rxb0n748lhPf9B58",authDomain:"to-do-list-9cf11.firebaseapp.com",databaseURL:"https://to-do-list-9cf11-default-rtdb.firebaseio.com",projectId:"to-do-list-9cf11",storageBucket:"to-do-list-9cf11.firebasestorage.app",messagingSenderId:"44862500438",appId:"1:44862500438:web:ccb0f012d9c8e7cfe215f7",measurementId:"G-HB8NT8L1FD"};o0(zP);const yl=SP(),La=xD(),HP=({setPaging:i,editing:e,setPage:t,indicated:s,setIndicated:a,showTaskPrompt:l,url:c,setUrl:d,showSignInPrompt:_,showSignUpPrompt:m,setShowSignInPrompt:E,setShowSignUpPrompt:T,user:C,setShowPersonalInformation:V,continueAs:H,setIsSigningOut:X,showNavBar:F,showSaveChanges:Y,setShowSaveChanges:ee,setShowNavbar:ue,setShowMakeUserSignIn:re})=>{const[de,ye]=le.useState(!1),x=[{content:"Home",link:"#Home",icon:()=>S.jsx("i",{className:"fa fa-home"}),paging:1},{content:"Tasks",link:"#Tasks",icon:()=>S.jsx("i",{className:"fa fa-book"}),paging:2},{content:"About",link:"#About",icon:()=>S.jsx("i",{className:"fa fa-user"}),paging:3},{content:"Contacts",link:"#Contacts",icon:()=>S.jsx("i",{className:"fa fa-phone"}),paging:4}],I=R=>{let k=window.location.href;k.toLowerCase();let M=k.search("/Acad/");k=k.slice(0,M+6),d(k.concat(R))},b=(R,k)=>{const M=JSON.parse(localStorage.getItem("Changes"));C!=null?M==null?(a(0),t(R.paging),I(R.link)):(ee(!0),ue(!1),ye(!1),i({link:R.link,page:R.paging})):(M==null&&R.paging!=2&&(a(0),t(R.paging),I(R.link)),R.paging==2&&(re(!0),ye(!1))),console.log(R)};return le.useEffect(()=>{c.includes("#Home")?a(0):c.includes("#Tasks")?a(1):c.includes("#About")?a(2):c.includes("#Contacts")&&a(3)},[c]),S.jsxs(S.Fragment,{children:[S.jsxs("nav",{className:!_&&!m&&!l&&!e&&!H&&F?ct.nav:ct.hideNav,children:[S.jsxs("div",{className:ct.left,children:[S.jsx("img",{src:"./web-icon.png",className:ct.icon}),S.jsx("h1",{children:"ACAD"})]}),S.jsx("div",{className:ct.middle,children:S.jsx("ul",{className:ct.NavLinks,children:x.map((R,k)=>S.jsx("li",{onClick:()=>{b(R)},className:s===k?ct.indicated:ct.notIndicated,children:S.jsxs("a",{href:Y?null:R.link,children:[R.icon()," ",S.jsxs("span",{children:[R.content,S.jsx("span",{className:ct.indication})]})]})},R.link))})}),C?S.jsxs("div",{className:`${ct.right} ${ct.LoggedIn}`,children:[S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-user"}),className:`${ct.User_Button}`,content:"Account",func:()=>V(!0)}),S.jsx(ge,{content:"Sign Out",func:()=>{X(!0)},className:ct.SignUpButt}),S.jsx(ge,{className:ct.HamburgerButt,func:()=>{ye(!0)},content:S.jsx("i",{className:"fa fa-list-ul"})})]}):S.jsxs("div",{className:`${ct.right} ${ct.notLoggedIn}`,children:[S.jsx(ge,{content:"Sign In",func:()=>{E(!0)},className:ct.SignInButt}),S.jsx(ge,{content:"Sign Up",func:()=>{T(!0)},className:ct.SignUpButt}),S.jsx(ge,{className:ct.HamburgerButt,func:()=>{ye(!0)},content:S.jsx("i",{className:"fa fa-list-ul"})})]})]}),S.jsx("div",{className:de&&!Y?ct.sidebar:ct.hideSideBar,children:S.jsxs("ul",{className:de?ct.NavLinks:ct.hideNavLinks,children:[S.jsx(ge,{className:ct.HamburgerButt,func:()=>{ye(!de)},content:S.jsx("i",{className:"fa fa-list-ul"})}),x.map((R,k)=>S.jsx("li",{onClick:()=>{b(R)},className:s===k?ct.indicated:ct.notIndicated,children:S.jsxs("a",{href:Y?null:R.link,children:[R.icon()," ",S.jsxs("span",{children:[R.content,S.jsx("span",{className:ct.indication})]})]})},R.link))]})})]})},FP=({page:i,setPage:e,setIndicated:t,indicated:s})=>S.jsxs("div",{className:i==1?ws.home_wrapper:ws.hideHome,id:"Home",children:[S.jsxs("div",{className:`${ws.left} ${FE.animateLeft}`,children:[S.jsxs("div",{className:ws.wrapTop,children:[S.jsx("h1",{children:"Welcome User !"}),S.jsx("p",{children:"Write, read and document your work and studies using the Acad Web App for free!"}),S.jsx("a",{href:"#Tasks",children:S.jsx(ge,{content:"Get Started",func:()=>{e(2),t(1)}})})]}),S.jsxs("div",{className:ws.wrapBottom,children:[S.jsx(ge,{className:ws.orange}),S.jsx(ge,{className:ws.purple}),S.jsx(ge,{className:ws.blue})]})]}),S.jsx("div",{className:ws.right,children:S.jsx("img",{src:"./StartingPage/Working.png",className:FE.animateImg})})]}),qP="_Task_Container_efcfg_1",GP="_tasks_efcfg_47",KP="_Finished_efcfg_71",WP="_unchecked_efcfg_95",QP="_checked_efcfg_103",YP="_col_efcfg_111",$P="_br_efcfg_119",XP="_fs_efcfg_127",ZP="_bgC_efcfg_135",JP="_fW_efcfg_143",On={Task_Container:qP,tasks:GP,Finished:KP,unchecked:WP,checked:QP,col:YP,br:$P,fs:XP,bgC:ZP,fW:JP},eV=({handleSelectedTasks:i,selectTask:e,tasks:t,setTasks:s,searching:a,filteredTask:l,setFilteredTask:c,setOpenedTask:d,setEditing:_,type:m,sorting:E,sortOptions:T})=>{const[C,V]=le.useState(t.map(Y=>({...Y,isChecked:!1})));function H(Y){let ee=t,ue=[];ee=ee.map(re=>re.id===Y?{...re,isChecked:!re.isChecked}:re);for(let re=0;re<ee.length;re++)ee[re].isChecked&&ue.push({id:ee[re].id,index:re}),re==ee.length-1&&(i(ue),ue=[]);s(re=>re.map(de=>de.id===Y?{...de,isChecked:!de.isChecked}:de)),a&&c(re=>re.map(de=>de.id===Y?{...de,isChecked:!de.isChecked}:de))}le.useEffect(()=>{V([...t])},[t]);const X=()=>{if(a&&l!=null)return S.jsx("div",{className:On.Task_Container,children:l.map((Y,ee)=>{if(Y.type==="pending"&&m==="Pending")return S.jsx(F,{task:Y,i:ee},Y.id);if(Y.type==="finished"&&m==="Finished")return S.jsx(F,{task:Y,i:ee},Y.id);if(m==="All Tasks")return S.jsx(F,{task:Y,i:ee},Y.id)})},"Task_Container");if(E&&!a){let Y=C;for(let ee in T)ee==0&&T[ee].state==!0?Y=Y.sort((ue,re)=>re.dateCreated.time-ue.dateCreated.time):ee==1&&T[ee].state==!0?Y=Y.sort((ue,re)=>ue.dateCreated.time-re.dateCreated.time):ee==2&&T[ee].state==!0?Y=Y.sort((ue,re)=>ue.task.localeCompare(re.task)):ee==3&&T[ee].state==!0&&(Y=Y.sort((ue,re)=>re.task.localeCompare(ue.task)));return S.jsx("div",{className:On.Task_Container,children:Y.map((ee,ue)=>{if(ee.type==="pending"&&m==="Pending")return S.jsx(F,{task:ee,i:ue},ee.id);if(ee.type==="finished"&&m==="Finished")return S.jsx(F,{task:ee,i:ue},ee.id);if(m==="All Tasks")return S.jsx(F,{task:ee,i:ue},ee.id)})})}else if(!E&&!a)return S.jsx("div",{className:On.Task_Container,children:C.map((Y,ee)=>{if(Y.type==="pending"&&m==="Pending")return S.jsx(F,{task:Y,i:ee},Y.id);if(Y.type==="finished"&&m==="Finished")return S.jsx(F,{task:Y,i:ee},Y.id);if(m==="All Tasks")return S.jsx(F,{task:Y,i:ee},Y.id)})})},F=({task:Y,i:ee})=>S.jsxs("label",{htmlFor:"task"+Y.id,style:Y.style!="default"?{...Y.style}:null,className:Y.type=="pending"?`${On.Pending} ${Y.cName.map(ue=>JSON.parse(ue)).join(" ")} ${On.tasks}`:`${On.Finished} ${Y.cName.map(ue=>JSON.parse(ue)).join(" ")} ${On.tasks}`,onDoubleClick:()=>{_(!0),d({id:Y.id,isOpened:!0})},children:[S.jsx("i",{style:e==!1?{display:"none"}:{display:"block"},className:`fa fa-check-square ${Y.isChecked===!0?On.checked:On.unchecked}`}),S.jsx("input",{style:{display:"none"},type:"checkbox",id:"task"+Y.id,onChange:()=>{e&&H(Y.id)}}),Y.task]},Y.id);if(C!=null)return S.jsx(S.Fragment,{children:S.jsx(X,{})})},tV="_Bottom_Options_14lht_1",nV="_toLeft_14lht_31",iV="_toRight_14lht_31",sV="_Unchecked_14lht_57",rV="_hide_14lht_105",vr={Bottom_Options:tV,toLeft:nV,toRight:iV,Unchecked:sV,hide:rV},aV=({handleSelectedTasks:i,selectedTask:e,selectTask:t,setSelectTask:s,unselectAll:a,tasks:l,setTasks:c,searching:d,updateTasks:_,setUpdateTasks:m,filteredTasks:E,setFilteredTasks:T,handleMarking:C})=>{const V=()=>{let F=l,Y=E,ee=[],ue=[];if(d){Y=Y.map(re=>({...re,isChecked:!0}));for(let re=0;re<Y.length;re++)Y[re].isChecked&&ue.push({id:Y[re].id,index:re});i([...ue])}else{F=F.map(re=>({...re,isChecked:!0}));for(let re=0;re<F.length;re++)F[re].isChecked&&ee.push({id:F[re].id,index:re});i([...ee])}d?T([...Y]):m(re=>re.map(de=>({...de,isChecked:!0})))};function H(){let F=l,Y=E;for(let ee in Y)for(let ue in e)Y[ee].id===e[ue].id&&Y.splice(ee,1);for(let ee in l)for(let ue in e)F[ee].id===e[ue].id&&F.splice(ee,1);C(Y,[...F]),i(null)}const X=()=>t==!0?S.jsx(S.Fragment,{children:S.jsxs("div",{className:vr.toLeft,children:[S.jsx(ge,{content:S.jsx("span",{children:" Select All"}),icon:S.jsx("i",{className:"fa fa-check"}),className:vr.SelectAllButton,func:()=>{V()}}),S.jsx(ge,{content:S.jsx("span",{children:" Unselect All"}),icon:S.jsx("i",{className:`fas fa fa-check ${vr.Unchecked}`}),className:vr.UnselectAllButton,func:()=>{a()}})]})}):S.jsx(S.Fragment,{children:S.jsx(ge,{content:"Select",icon:S.jsx("i",{className:"fa fa-hand-o-up"}),className:vr.SelectButton,func:()=>s(!0)})});return S.jsx(S.Fragment,{children:S.jsxs("div",{className:vr.Bottom_Options,children:[S.jsx(X,{}),S.jsxs("div",{className:t==!0?vr.toRight:vr.hide,children:[S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-trash"}),content:" Delete",func:F=>{t?H():console.log("No update")}}),S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-close"}),content:" Cancel",func:()=>{s(!1),a()}})]})]})})},oV="_DropDown_Body_1ouwm_1",lV="_Hide_DropDown_Body_1ouwm_1",uV="_Dropdown_Wrapper_1ouwm_27",cV="_Not_Indicated_1ouwm_59",hV="_Indicated_1ouwm_69",Iu={DropDown_Body:oV,Hide_DropDown_Body:lV,Dropdown_Wrapper:uV,Not_Indicated:cV,Indicated:hV},fV=({setType:i,showDropDown:e,handleType:t,unselectAll:s})=>{const a=["Pending","Finished","All Tasks"],[l,c]=le.useState(0);return S.jsx(S.Fragment,{children:S.jsx("div",{className:e?Iu.DropDown_Body:Iu.Hide_DropDown_Body,onClick:()=>{t()},children:S.jsx("ul",{className:Iu.Dropdown_Wrapper,children:a.map((d,_)=>S.jsx("li",{className:l==_?Iu.Indicated:Iu.Not_Indicated,onClick:()=>{i(a[_]),c(_),s()},children:d},a[_]))})})})},dV="_Options_tab_yd1ph_1",pV="_Prompt_Box_yd1ph_21",_V="_Close_Button_yd1ph_63",mV="_colorPicker_yd1ph_145",gV="_Hide_BG_Color_Prompt_yd1ph_177",yV="_Hide_Color_Prompt_yd1ph_179",vV="_Hide_Border_Color_Prompt_yd1ph_181",EV="_Hide_Font_Weight_Prompt_yd1ph_183",TV="_Hide_Italic_Prompt_yd1ph_185",SV="_BG_Color_Prompt_yd1ph_193",AV="_Color_Prompt_yd1ph_195",wV="_Border_Color_Prompt_yd1ph_197",bV="_Font_Weight_Prompt_yd1ph_199",CV="_Italic_Prompt_yd1ph_201",RV="_Wrap_Options_Tab_yd1ph_209",IV="_createTask_yd1ph_299",NV="_notWorking_yd1ph_321",Le={Options_tab:dV,Prompt_Box:pV,Close_Button:_V,colorPicker:mV,Hide_BG_Color_Prompt:gV,Hide_Color_Prompt:yV,Hide_Border_Color_Prompt:vV,Hide_Font_Weight_Prompt:EV,Hide_Italic_Prompt:TV,BG_Color_Prompt:SV,Color_Prompt:AV,Border_Color_Prompt:wV,Font_Weight_Prompt:bV,Italic_Prompt:CV,Wrap_Options_Tab:RV,createTask:IV,notWorking:NV},DV=({selectedTask:i,filteredTasks:e,updateTasks:t,searching:s,optionTabNumber:a,handleMarking:l,unselectAll:c,setShowTaskPrompt:d,setShowSortPrompt:_,numberOfChanges:m,setNumberOfChanges:E,user:T,setUpdateTask:C,setLoading:V,setShowNavbar:H})=>{var ve;const[X,F]=le.useState(a),[Y,ee]=le.useState(!1),[ue,re]=le.useState(!1),[de,ye]=le.useState(!1),[x,I]=le.useState(!1),[b,R]=le.useState(!1),[k,M]=le.useState(!1);function N(oe,z,O,$,ie,ne){let he=t,Ee=t,pe=e,et=[];for(let Ne in i)if(s)for(let Oe in pe)pe[Oe].id==i[Ne].id?(oe!=!1&&(pe[i[Ne].index].type=oe,et.push(pe[i[Ne].index])),oe==!1&&((pe[Oe].style=="default"||pe[Oe].style==null)&&(pe[Oe].style={color:"default",border:"default",fontStyle:"default",backgroundColor:"default",fontWeight:"default"}),z&&(pe[Oe].style.color=z,et.push(pe[Oe])),O&&(pe[Oe].style.backgroundColor=O,et.push(pe[Oe])),$&&(pe[Oe].style.fontWeight=$,et.push(pe[Oe])),ie&&(pe[Oe].style.fontStyle=ie,et.push(pe[Oe])),ne&&(pe[Oe].style.borderColor=ne,et.push(pe[Oe])))):et.push(pe[i[Ne].index]);for(let Ne in i)Ee=Ee.map(Oe=>{if(i[Ne].id==Oe.id){let Re={...Oe};return Re.style=Re.style==="default"?{color:"default",border:"default",fontStyle:"default",backgroundColor:"default",fontWeight:"default"}:{...Re.style},oe!==!1&&(Re.type=oe),z&&(Re.style={...Re.style,color:z}),O&&(Re.style={...Re.style,backgroundColor:O}),$&&(Re.style={...Re.style,fontWeight:$}),ie&&(Re.style={...Re.style,fontStyle:ie}),ne&&(Re.style={...Re.style,borderColor:ne}),Re.isChecked=!0,Re}else return{...Oe}});s?l([...pe],[...Ee],he):l(pe,[...Ee],he)}function tt(){let oe=m+1,z=JSON.parse(localStorage.getItem("Changes"));z=z[oe],C([...z]),E(oe),console.log(JSON.parse(localStorage.getItem("Changes")))}function nt(){let oe=m-1,z=JSON.parse(localStorage.getItem("Changes"));z=z[oe],C([...z]),E(oe),console.log(JSON.parse(localStorage.getItem("Changes")))}const ae=async()=>{V(!0),H(!1);let oe=JSON.parse(localStorage.getItem("Changes"));oe=[...oe[m]],oe=oe.map($=>({...$,isChecked:!1}));const z=T==null?void 0:T.uid.toString(),O=gl(yl,`Users/${z}`);try{await Og(O,{tasks:oe}),E(null),C([...oe]),localStorage.removeItem("Changes")}catch($){alert($.message)}H(!0),V(!1)};return le.useEffect(()=>{F(a)},[a]),S.jsxs("div",{className:Le.Options_tab,children:[S.jsxs("div",{className:ue?`${Le.BG_Color_Prompt} ${Le.Prompt_Box}`:`${Le.Hide_BG_Color_Prompt} ${Le.Prompt_Box}`,children:[S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Le.Close_Button}`,func:()=>{re(!1)}}),S.jsx("h1",{children:"Change BG Color"}),S.jsxs("label",{htmlFor:"colorPicker",className:Le.colorPicker,children:[S.jsx("input",{type:"color",id:"colorPicker",onBlur:oe=>{N(!1,!1,oe.target.value,!1,!1)}}),S.jsx("span",{children:"Choose BG Color"})]}),S.jsx(ge,{content:"Default",func:()=>{N(!1,!1,"#f09c2e",!1,!1)}})]}),S.jsxs("div",{className:de?`${Le.Color_Prompt} ${Le.Prompt_Box}`:`${Le.Hide_Color_Prompt} ${Le.Prompt_Box}`,children:[S.jsx("h1",{children:"Change Font Color"}),S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Le.Close_Button}`,func:()=>{ye(!1)}}),S.jsxs("label",{htmlFor:"bgColorPicker",className:`${Le.bgColorPicker} ${Le.colorPicker}`,children:[S.jsx("input",{type:"color",id:"bgColorPicker",onBlur:oe=>{N(!1,oe.target.value,!1,!1,!1)}}),S.jsx("span",{children:"Choose Font Color"})]}),S.jsx(ge,{content:"Default",func:()=>{N(!1,"white",!1,!1,!1)}})]}),S.jsxs("div",{className:x?`${Le.Border_Color_Prompt} ${Le.Prompt_Box}`:`${Le.Hide_Border_Color_Prompt} ${Le.Prompt_Box}`,children:[S.jsx("h1",{children:"Change Border Color"}),S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Le.Close_Button}`,func:()=>{I(!1)}}),S.jsxs("label",{htmlFor:"borderColorPicker",className:`${Le.borderColorPicker} ${Le.colorPicker}`,children:[S.jsx("input",{type:"color",id:"borderColorPicker",onBlur:oe=>{N(!1,!1,!1,!1,!1,oe.target.value)}}),S.jsx("span",{children:"Choose Border Color"})]}),S.jsx(ge,{content:"Default",func:()=>{N(!1,!1,!1,!1,!1,"#d16c06")}})]}),S.jsxs("div",{className:b?`${Le.Font_Weight_Prompt} ${Le.Prompt_Box}`:`${Le.Hide_Font_Weight_Prompt} ${Le.Prompt_Box}`,children:[S.jsx("h1",{children:"Change Font Weight"}),S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Le.Close_Button}`,func:()=>{R(!1)}}),S.jsx(ge,{content:"Normal",func:()=>{N(!1,!1,!1,"Normal",!1,!1)}}),S.jsx(ge,{content:"Bold",func:()=>{N(!1,!1,!1,"Bold",!1,!1)}}),S.jsx(ge,{content:"Bolder",func:()=>{N(!1,!1,!1,"Bolder",!1,!1)}})]}),S.jsxs("div",{className:k?`${Le.Italic_Prompt} ${Le.Prompt_Box}`:`${Le.Hide_Italic_Prompt} ${Le.Prompt_Box}`,children:[S.jsx("h1",{children:"Change Italization"}),S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Le.Close_Button}`,func:()=>{M(!1)}}),S.jsx(ge,{content:"Normal",func:()=>{N(!1,!1,!1,!1,"Normal",!1)}}),S.jsx(ge,{content:"Italic",func:()=>{N(!1,!1,!1,!1,"Italic",!1)}})]}),S.jsxs("div",{className:Le.Wrap_Options_Tab,children:[S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-save"}),content:"Save Changes",className:m==null?`${Le.notWorking}`:null,func:()=>{m!=null&&ae()}}),S.jsx(ge,{icon:S.jsx("i",{className:"material-icons",children:"undo"}),content:"Undo",className:m==null||m==0?`${Le.notWorking}`:null,func:()=>{m>0&&nt()}}),S.jsx(ge,{icon:S.jsx("i",{className:"material-icons",children:"redo"}),content:"Redo",className:m<((ve=JSON.parse(localStorage.getItem("Changes")))==null?void 0:ve.length)-1&&m!=null?null:`${Le.notWorking}`,func:()=>{var oe;m<((oe=JSON.parse(localStorage.getItem("Changes")))==null?void 0:oe.length)-1&&m!=null&&tt()}}),S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-plus"}),content:S.jsx("span",{children:" Create New Task"}),className:Le.createTask,func:()=>{d(!0),H(!1)}}),S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-edit"}),content:S.jsx("span",{children:" Mark As Finished"}),func:()=>{N("finished","white","#51af0f",!1,!1,"rgb(8, 97, 20)")}}),S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-edit"}),content:S.jsx("span",{children:" Mark As Pending"}),func:()=>{N("pending","white","#f09c2e",!1,!1,"rgb(209, 108, 6)")}}),S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-sort"}),content:S.jsx("span",{children:" Sort"}),func:()=>{_(!0),H(!1)}}),S.jsx(ge,{icon:S.jsx("i",{className:"material-icons",children:"format_color_fill"}),content:S.jsx("span",{children:" BG Color "}),func:()=>{re(!0),ye(!1),I(!1),R(!1),M(!1)}}),S.jsx(ge,{icon:S.jsx("i",{className:"material-icons",children:"format_color_text"}),content:S.jsx("span",{children:" Font Color"}),func:()=>{ye(!0),re(!1),I(!1),R(!1,M(!1))}}),S.jsx(ge,{icon:S.jsx("i",{className:"material-icons",children:"border_color"}),content:S.jsx("span",{children:" Border Color"}),func:()=>{I(!0),re(!1),ye(!1),R(!1),M(!1)}}),S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-bold"}),content:" Bold",className:`${Le.green} ${Le.black}`,func:()=>{I(!1),re(!1),ye(!1),R(!0),M(!1)}}),S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-italic"}),content:" Italic",func:()=>{I(!1),re(!1),ye(!1),R(!1),M(!0)}})]})]})},OV="_Task_View_19nr4_1",xV="_Hide_Task_View_19nr4_19",kV="_nav_19nr4_57",MV="_content_19nr4_127",PV="_submitButton_19nr4_173",Nu={Task_View:OV,Hide_Task_View:xV,nav:kV,content:MV,submitButton:PV},VV=({openedTask:i,setOpenedTask:e,tasks:t,filteredTasks:s,setEditing:a,editing:l,user:c,handleMarking:d,setShowNavbar:_,setLoading:m})=>{const E=le.useRef(null);function T(){let C=[...t],V=s;for(let H in C)C[H].id===i.id&&(C[H].task=E.current.innerText);for(let H in V)V[H].id===i.id&&(V[H].task=E.current.innerText);d(V,[...C]),_(!0)}if(i.id!=null)return S.jsxs("div",{className:l?Nu.Task_View:Nu.Hide_Task_View,children:[S.jsxs("div",{className:Nu.nav,children:[S.jsxs("h3",{children:[S.jsx("i",{className:"fa fa-edit"})," ",S.jsx("span",{children:"Edit Task"})]}),S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-times"}),func:()=>{e({index:null,isOpened:!1}),a(!1),_(!0)}})]}),S.jsx("div",{className:Nu.content,children:S.jsx("p",{ref:E,contentEditable:l,children:t.map((C,V)=>{if(C.id===i.id)return C.task})})}),S.jsx(ge,{content:"Save Changes",className:Nu.submitButton,func:()=>{T(),a(!1)}})]})},LV="_Task_prompt_wrapper_hoxzz_1",UV="_Hide_task_prompt_wrapper_hoxzz_1",jV="_nav_hoxzz_41",BV="_content_hoxzz_111",zV="_submitButton_hoxzz_157",Du={Task_prompt_wrapper:LV,Hide_task_prompt_wrapper:UV,nav:jV,content:BV,submitButton:zV},HV=({showTaskPrompt:i,setShowTaskPrompt:e,writeTask:t,setShowNavbar:s})=>{const a=le.useRef(null),l=le.useRef(null),[c,d]=le.useState(!1);function _(){d(Math.random()*1)}function m(){t(l.current.innerText)}function E(){l.current.innerHTML="<br>",T()}function T(){l.current.innerText==`
`||l.current.innerHTML=="<br>"?a.current.style.display="block":a.current.style.display="none"}return le.useEffect(()=>{},[c]),S.jsx(S.Fragment,{children:S.jsxs("div",{className:i?Du.Task_prompt_wrapper:Du.Hide_task_prompt_wrapper,children:[S.jsxs("div",{className:Du.nav,children:[S.jsxs("h3",{children:[S.jsx("i",{className:"fa fa-edit"})," ",S.jsx("span",{children:"Task Prompt"})]}),S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-times"}),func:()=>{e(!1),E(),s(!0)}})]}),S.jsxs("div",{className:Du.content,children:[S.jsx("span",{ref:a,children:"Type Any Task..."}),S.jsx("p",{ref:l,contentEditable:"true",onInput:()=>{_(),T()}})]}),S.jsx(ge,{content:"Submit",className:Du.submitButton,func:()=>{m(),e(!1),E(),s(!0)}})]})})},FV="_Sort_Wrapper_1nnq2_17",qV="_Hide_Sort_Wrapper_1nnq2_19",GV="_Sort_Box_1nnq2_51",KV="_Hide_Sort_Box_Button_1nnq2_75",WV="_Sort_Options_1nnq2_105",QV="_checked_1nnq2_153",YV="_unchecked_1nnq2_153",Er={Sort_Wrapper:FV,Hide_Sort_Wrapper:qV,Sort_Box:GV,Hide_Sort_Box_Button:KV,Sort_Options:WV,checked:QV,unchecked:YV},$V=({setShowSortPrompt:i,showSortPrompt:e,sortOptions:t,setSortOptions:s,setSorting:a,setShowNavbar:l,showSaveChanges:c})=>{function d(_){let m=t;m=m.map((E,T)=>m[T]===m[_]?{...E,state:!E.state}:{...E,state:!1});for(let E in m){if(m[E].state==!0){a(!0);break}E==m.length-1&&!m[E].state&&a(!1)}s([...m])}return S.jsx("div",{className:e?Er.Sort_Wrapper:Er.Hide_Sort_Wrapper,children:S.jsxs("div",{className:e?Er.Sort_Box:Er.Hide_Sort_Box,children:[S.jsx("h2",{children:"Sort Settings"}),S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-close"}),className:Er.Hide_Sort_Box_Button,func:()=>{i(!1),l(!0)}}),S.jsx("div",{className:Er.Sort_Options,children:t.map((_,m)=>S.jsx(ge,{icon:S.jsx("i",{className:`fa fa-check-square ${_.state==!0?Er.checked:Er.unchecked}`}),content:_.description,func:()=>{d(m),l(!1)}},_.description))})]})})},XV="_Changes_Wrapper_26idq_1",ZV="_Changes_Box_26idq_27",JV="_Top_26idq_55",eL="_Options_26idq_107",$h={Changes_Wrapper:XV,Changes_Box:ZV,Top:JV,Options:eL},tL=({showSaveChanges:i,setShowSaveChanges:e,setUpdateTask:t,setNumberOfChanges:s,numberOfChanges:a,user:l,paging:c,setPage:d,setShowNavbar:_,setLoading:m})=>{const E=async()=>{var H;let T=JSON.parse(localStorage.getItem("Changes"));T=[...T[a]],T=T.map(X=>({...X,isChecked:!1}));const C=(H=l==null?void 0:l.uid)==null?void 0:H.toString(),V=gl(yl,`Users/${C}`);m(!0);try{if(await Og(V,{tasks:T}),s(null),t([...T]),localStorage.removeItem("Changes"),c){let X=window.location.href;X.toLowerCase();let F=X.search("/Acad/");X=X.slice(0,F+6),X=X.concat(c==null?void 0:c.link),window.location.href=X,d(c.page),m(fase)}}catch(X){alert("Error Saving Your Changes"),e(!1),console.log("Error writing task:",X),m(fase)}_(!0)};if(i)return S.jsx("div",{className:$h.Changes_Wrapper,children:S.jsxs("div",{className:$h.Changes_Box,children:[S.jsxs("div",{className:$h.Top,children:[S.jsx("i",{className:"fa fa-warning"}),S.jsx("h3",{children:"Would You Save Your Previous Changes?"})]}),S.jsxs("div",{className:$h.Options,children:[S.jsx(ge,{content:"No",func:()=>{e(!1),localStorage.removeItem("Changes"),window.location.reload()}}),S.jsx(ge,{content:"Yes",func:()=>{e(!1),E()}})]})]})})},nL="_Hide_Task_Wrapper_1397q_5",iL="_Task_Wrapper_1397q_13",sL="_Tasks_Editor_1397q_33",rL="_Search_wrapper_1397q_103",Mo={Hide_Task_Wrapper:nL,Task_Wrapper:iL,Tasks_Editor:sL,Search_wrapper:rL},aL="_Loading_Wrapper_fw8ew_25",oL="_Loading_Bar_fw8ew_59",QS={Loading_Wrapper:aL,Loading_Bar:oL},lL=({loading:i})=>{if(i)return S.jsxs("div",{className:QS.Loading_Wrapper,children:[S.jsx("div",{className:QS.Loading_Bar}),"Loading..."]})},uL=({page:i,paging:e,setPage:t,setPaging:s,setEditing:a,editing:l,user:c,getTask:d,setShowNavbar:_,setShowSaveChanges:m,showSaveChanges:E,setLoading:T})=>{const C=JSON.parse(localStorage.getItem("Changes")),V=le.useRef(null),[H,X]=le.useState(!1),[F,Y]=le.useState(!1),[ee,ue]=le.useState(!1),[re,de]=le.useState(!1),[ye,x]=le.useState(!1),[I,b]=le.useState(!1),[R,k]=le.useState([]),[M,N]=le.useState(1),[tt,nt]=le.useState("Pending"),[ae,ve]=le.useState(d),[oe,z]=le.useState(C?C.length-1:null),[O,$]=le.useState(ae.map(K=>({...K,isChecked:!1}))),[ie,ne]=le.useState(null),[he,Ee]=le.useState({index:null,isOpened:!1}),[pe,et]=le.useState(null),[Ne,Oe]=le.useState([{description:"Newest to Oldest",state:!1},{description:"Oldest to Newest",state:!1},{description:"From A-Z",state:!1},{description:"From Z-A",state:!1}]);function Re(){ue(!1)}const Zt=async K=>{var qr;let $e=[...ae];const Ht=(qr=c.uid)==null?void 0:qr.toString(),Jt=gl(yl,"Users",Ht);let qa="qwertyuiopasdfghjklzxcvbnm",Zi="";for(let mt=0;mt<10;mt++){let Nt=Math.floor(Math.random()*qa.length);Zi=Zi.concat(qa[Nt])}let en={id:Zi,task:K,dateCreated:{fullDate:new Date,time:Date.now()},selected:!1,style:"default",cName:[JSON.stringify(On.col),JSON.stringify(On.br),JSON.stringify(On.fs),JSON.stringify(On.bgC),JSON.stringify(On.fW)],isChecked:!1,type:"pending"};$e.unshift(en);try{await Og(Jt,{tasks:BP(en)}),b(!1),$([...$e])}catch(mt){console.log("Error writing task:",mt)}};function Mn(K,$e,Ht){const Jt=JSON.parse(localStorage.getItem("Changes"))!=null?JSON.parse(localStorage.getItem("Changes")):[];Jt.length==0&&Jt.push(O),Jt.length>=1&&Jt.push($e),localStorage.setItem("Changes",JSON.stringify(Jt)),console.log(JSON.parse(localStorage.getItem("Changes"))),z(Jt.length-1),R.length>=1&&(F&&ne([...K]),$([...$e]))}function fn(){V.current.value==""?Y(!1):(Y(!0),ne(ae.filter(K=>K.task.toLowerCase().includes(V.current.value.toLowerCase()))),de(!1))}function Pn(K){k(K==null?[]:[...K])}function Ai(K){Ee(K)}function Qn(){let K=Ne;for(let $e=0;$e<Ne.length;$e++)if(K[$e].state==!0){de(!0);break}else $e==Ne.length-1&&Ne[$e].state==!1&&de(!1)}const Xi=()=>{let K=ae,$e=ie;F?($e=$e.map(Ht=>({...Ht,isChecked:!1})),Pn(null)):(K=K.map(Ht=>({...Ht,isChecked:!1})),Pn(null)),F?ne([...$e]):$(Ht=>Ht.map(Jt=>({...Jt,isChecked:!1})))};if(le.useEffect(()=>{console.log(O),ve([...O]),ne([...O.filter(K=>{var $e;return K.task.toLowerCase().includes(($e=V.current)==null?void 0:$e.value.toLowerCase())})])},[O]),le.useEffect(()=>{d!=null&&d.tasks?$(d.tasks):$([])},[d]),le.useEffect(()=>{const K=JSON.parse(localStorage.getItem("Changes"));(K==null?void 0:K.length)>=2&&(m(!0),_(!1))},[]),le.useEffect(()=>{console.log(R)},[R]),i==2)return S.jsx(S.Fragment,{children:S.jsxs("div",{className:i==2?Mo.Task_Wrapper:Mo.Hide_Task_Wrapper,id:"Tasks",children:[S.jsx(HV,{showTaskPrompt:I,setShowTaskPrompt:b,writeTask:K=>{Zt(K)},setShowNavbar:K=>_(K)}),S.jsxs("div",{className:Mo.Tasks_Editor,children:[S.jsxs("h2",{className:Mo.Title_wrapper,children:["Tasks",S.jsx("i",{className:"fa fa-bars",onClick:()=>{ue(!ee)}}),S.jsx(fV,{type:tt,setType:K=>{nt(K)},showDropDown:ee,handleType:K=>{Re()},unselectAll:K=>{Xi()},setSortOptions:K=>{Oe(K)},setSorting:K=>{de(K)}})]}),S.jsx(DV,{optionTabNumber:M,updateTasks:O,filteredTasks:ie,setShowTaskPrompt:K=>{b(K)},searching:F,setSearching:K=>Y(K),handleSearch:()=>{fn()},selectedTask:R,handleMarking:(K,$e,Ht)=>{Mn(K,$e)},markAsPending:K=>{markAsPending(K)},unselectAll:()=>Xi(),setBgColor:K=>setBgColor(K),setColor:K=>setColor(K),setShowSortPrompt:K=>{x(K)},numberOfChanges:oe,setNumberOfChanges:K=>z(K),user:c,setUpdateTask:K=>{$(K)},setShowNavbar:K=>_(K),setLoading:K=>T(K)}),S.jsx("div",{className:Mo.Search_wrapper,children:S.jsxs("div",{children:[S.jsx("label",{htmlFor:"search-bar",children:S.jsx("i",{className:"fa fa-search"})}),S.jsx("input",{ref:V,id:"search-bar",type:"text",placeholder:"Type Task...",onChange:()=>{V.current.value==""&&(Qn(),fn())}}),S.jsx(ge,{content:"Search",className:Mo.Search_button,func:()=>{fn(),Qn()}})]})}),S.jsx(aV,{selectedTask:R,handleSelectedTasks:K=>Pn(K),selectTask:H,setSelectTask:X,unselectAll:()=>{Xi()},tasks:ae,setTasks:K=>{$(K)},filteredTasks:ie,setFilteredTasks:K=>{ne(K)},searching:F,setUpdateTasks:K=>$(K),updateTasks:O,handleMarking:(K,$e,Ht)=>{Mn(K,$e)}}),S.jsx(eV,{selectedTasks:R,setSelectedTasks:()=>k(),selectTask:H,tasks:ae,setTasks:K=>{ve(K)},del:K=>{del(K)},handleSelectedTasks:K=>Pn(K),filteredTask:ie,setFilteredTask:K=>{ne(K)},searching:F,handleOpenedTask:K=>{Ai(K)},openedTask:he,setShowTaskPrompt:K=>{b(K)},editing:l,setEditing:K=>{a(K)},setOpenedTask:K=>{Ee(K)},type:tt,setSorting:K=>{de(K)},sorting:re,sortOptions:Ne}),S.jsx(VV,{openedTask:he,setOpenedTask:K=>{Ee(K)},tasks:ae,filteredTasks:ie,saveChanges:(K,$e)=>{saveChanges(K,$e)},editing:l,searching:F,setEditing:K=>{a(K)},editedValue:pe,user:c,setUpdateTask:K=>{$(K)},setShowNavbar:K=>{_(K)},setLoading:K=>T(K),handleMarking:(K,$e)=>Mn(K,$e)}),S.jsx($V,{showSortPrompt:ye,setShowSortPrompt:K=>{x(K)},sortOptions:Ne,setSortOptions:K=>{Oe(K)},setSorting:K=>{de(K)},sorting:re,setShowNavbar:K=>{_(K)}}),S.jsx(tL,{showSaveChanges:E,numberOfChanges:oe,setNumberOfChanges:K=>z(K),user:c,setUpdateTask:K=>{$(K)},setPaging:K=>{s(K)},paging:e,setPage:K=>{t(K)},setShowSaveChanges:K=>{m(K)},setShowNavbar:K=>{_(K)},setLoading:K=>T(K)})]})]})})},cL="_Continue_As_Wrapper_1tx42_5",hL="_Continue_As_Box_1tx42_47",fL="_Top_1tx42_75",dL="_Options_1tx42_135",Xh={Continue_As_Wrapper:cL,Continue_As_Box:hL,Top:fL,Options:dL},pL=({continueAs:i,setContinueAs:e,user:t,setLoading:s})=>{const[a,l]=le.useState(null),c=async()=>{s(!0);try{await V0(La),setUser(null),s(!1),e(!1)}catch(_){s(!1),e(!1),console.log(_)}},d=async()=>{if((t==null?void 0:t.uid)!=null)try{const _=gl(yl,"Users",t==null?void 0:t.uid),m=await Db(_);m.exists&&l(m.data())}catch(_){console.log(_)}};if(le.useEffect(()=>{t!=null&&d()},[i,t]),i)return S.jsx("div",{className:Xh.Continue_As_Wrapper,children:S.jsxs("div",{className:Xh.Continue_As_Box,children:[S.jsxs("div",{className:Xh.Top,children:[S.jsx("i",{className:"fa fa-user"}),S.jsx("h3",{children:"Continue As: "}),S.jsxs("h3",{children:[a==null?void 0:a.name," ?"]})]}),S.jsxs("div",{className:Xh.Options,children:[S.jsx(ge,{content:"No",func:()=>{c()}}),S.jsx(ge,{content:"Yes",func:()=>{e(!1)}})]})]})})},_L="_sign_up_container_mvskv_19",mL="_goToStartingPage_mvskv_41",gL="_top_arc_mvskv_65",yL="_form_mvskv_91",vL="_username_con_mvskv_105",EL="_password_con_mvskv_107",TL="_more_actions_mvskv_121",SL="_sign_in_button_mvskv_219",AL="_other_platforms_container_mvskv_251",wL="_icon_wrapper_mvskv_273",bL="_wrapper_mvskv_285",an={sign_up_container:_L,goToStartingPage:mL,top_arc:gL,form:yL,username_con:vL,password_con:EL,more_actions:TL,sign_in_button:SL,other_platforms_container:AL,icon_wrapper:wL,wrapper:bL};function CL({user:i,setUser:e,showSignInPrompt:t,setShowSignInPrompt:s,setShowSignUpPrompt:a,setLoading:l,setContinueAs:c}){const[d,_]=le.useState(!1),m=le.useRef(null),E=le.useRef(null),T=le.useRef(null),C=le.useRef(null),V=F=>{(F.target.value==null||F.target.value!=null)&&(m.current.textContent="")},H=F=>{(F.target.value==null||F.target.value!=null)&&(E.current.textContent="")},X=async()=>{l(!0);try{await yN(La,T.current.value,C.current.value),e(La.currentUser),l(!1),s(!1),c(!0)}catch(F){alert(F.message),l(!1)}};if(t==!0)return S.jsx(S.Fragment,{children:S.jsxs("div",{className:an.sign_up_container,children:[S.jsx(ge,{func:()=>{s(!1)},content:"X",className:an.goToStartingPage}),S.jsx("div",{className:an.top_arc,children:"SIGN IN"}),S.jsxs("div",{className:an.form,children:[S.jsxs("div",{className:an.username_con,children:[S.jsx("h3",{children:"Username :"}),S.jsx("input",{className:"emailInput",ref:T,onInput:F=>{V(F)}}),S.jsx("span",{ref:m})]}),S.jsxs("div",{className:an.password_con,children:[S.jsx("h3",{children:"Password :"}),S.jsx("input",{type:d?"text":"password",ref:C,onInput:F=>{H(F)},className:an.Password}),S.jsx("span",{ref:E}),S.jsx("img",{src:d?"./password/visible.png":"./password/unsee.png",className:an.see_password,onClick:()=>{_(!d)}})]}),S.jsxs("div",{className:an.more_actions,children:[S.jsx("span",{className:an.forgot_pass,children:"Forgot Password"}),S.jsx("span",{className:an.create_acc,onClick:()=>{s(!1),a(!0)},children:"Doesn't Have An Account?"})]}),S.jsx(ge,{className:an.sign_in_button,func:()=>{X()},content:"SIGN IN"})]}),S.jsxs("div",{className:an.other_platforms_container,children:[S.jsxs("div",{className:an.icon_wrapper,children:[S.jsx("div",{className:an.wrapper,children:S.jsx("img",{src:"./platforms/GG.png "})}),S.jsx("div",{className:an.wrapper,children:S.jsx("img",{src:"./platforms/facebook.png"})}),S.jsx("div",{className:an.wrapper,children:S.jsx("img",{src:"./platforms/Instagram.png"})})]}),S.jsx("h3",{children:"SIGN IN WITH DIFFERENT PLATFORMS"})]})]})})}const RL="_hide_fc9cy_1",IL="_inputs_1_fc9cy_7",Sa={hide:RL,inputs_1:IL},NL=({show:i,indicated:e,showConfirm:t,setShow:s,setShowConfirm:a,passwordInput:l,confirmPasswordInput:c,emailInput:d,passWarning:_,confirmWarning:m,emailWarning:E})=>S.jsxs("div",{className:e==0?Sa.inputs_1:Sa.hide,children:[S.jsxs("div",{className:Sa.email,children:[S.jsx("h4",{children:"Email"}),S.jsx("input",{type:"text",ref:d}),S.jsx("span",{ref:E})]}),S.jsxs("div",{className:Sa.password,children:[S.jsx("h4",{children:"Password"}),S.jsx("input",{type:i?"text":"password",ref:l}),S.jsx("img",{src:i?"./password/visible.png":"./password/unsee.png",className:Sa.see_password,onClick:()=>{s(!i)}}),S.jsx("span",{ref:_})]}),S.jsxs("div",{className:Sa.confirm,children:[S.jsx("h4",{children:"Confirm Password"}),S.jsx("input",{type:t?"text":"password",ref:c}),S.jsx("img",{src:t?"./password/visible.png":"./password/unsee.png",className:Sa.see_confirm,onClick:()=>{a(!t)}}),S.jsx("span",{ref:m})]})]}),DL="_hide_6obhl_1",OL="_inputs_2_6obhl_11",xL="_top_6obhl_31",kL="_notIndicated_6obhl_71",ML="_indicated_6obhl_81",Ou={hide:DL,inputs_2:OL,top:xL,notIndicated:kL,indicated:ML},PL=({indicated:i,usingAsInput:e,usageOptions:t,handleUsageOptions:s})=>S.jsxs("div",{className:i==1?Ou.inputs_2:Ou.hide,children:[S.jsx("h3",{children:"Why am I using the To-Do List Web App?"}),S.jsx("div",{children:S.jsxs("div",{className:Ou.top,children:[t.map((a,l)=>S.jsx(ge,{content:a.content,className:a.isIndicated?Ou.indicated:Ou.notIndicated,func:()=>{s(l)}},a.content)),S.jsx("input",{type:"text",placeholder:"Other reason...",ref:e})]})})]}),VL="_hide_r58tk_1",LL="_inputs_3_r58tk_9",xu={hide:VL,inputs_3:LL},UL=({show:i,indicated:e,showConfirm:t,nickNameInput:s,schoolInput:a,grSecInput:l,nameWarning:c,schoolWarning:d,grSecWarning:_})=>S.jsxs("div",{className:e==2?xu.inputs_3:xu.hide,children:[S.jsxs("div",{className:xu.username,children:[S.jsx("h4",{children:"Name"}),S.jsx("input",{type:"text",ref:s}),S.jsx("span",{ref:c})]}),S.jsxs("div",{className:xu.password,children:[S.jsx("h4",{children:"School"}),S.jsx("input",{type:"text",ref:a}),S.jsx("span",{ref:d})]}),S.jsxs("div",{className:xu.confirm,children:[S.jsx("h4",{children:"Grade & Section"}),S.jsx("input",{type:"text",ref:l}),S.jsx("span",{ref:_})]})]}),jL="_hide_j48mp_15",BL="_inputs_4_j48mp_23",zL="_wrapper_j48mp_85",HL="_IndicatedButt_j48mp_125",FL="_notIndicatedButt_j48mp_145",Po={hide:jL,inputs_4:BL,wrapper:zL,IndicatedButt:HL,notIndicatedButt:FL},qL=({indicated:i,subjects:e,handleSubjects:t})=>{if(e!=null)return S.jsx("div",{className:i==3?Po.inputs_4:Po.hide,children:S.jsxs("div",{className:Po.wrapper,children:[S.jsx("h4",{children:"What is your favorite subject?"}),S.jsx("div",{className:Po.buttons,children:e.map((s,a)=>S.jsx(ge,{func:()=>{t(a)},className:s.testClass==!0?Po.IndicatedButt:Po.notIndicatedButt,content:e[a].content},s+a.toString()))})]})})},GL="_sign_up_wrapper_6gch2_23",KL="_form_1_6gch2_53",WL="_to_bottom_6gch2_75",QL="_bottom_6gch2_113",YL="_buttons_6gch2_125",$L="_indicator_6gch2_169",XL="_indicated_6gch2_197",ZL="_not_indicated_6gch2_205",JL="_goToStartingPage_6gch2_259",gn={sign_up_wrapper:GL,form_1:KL,to_bottom:WL,bottom:QL,buttons:YL,indicator:$L,indicated:XL,not_indicated:ZL,goToStartingPage:JL},eU=({setUsers:i,setShowSignInPrompt:e,showSignUpPrompt:t,setShowSignUpPrompt:s,setLoading:a,setContinueAs:l})=>{le.useRef(null),le.useRef(null);const c=le.useRef(null),d=le.useRef(null),_=le.useRef(null),m=le.useRef(null),E=le.useRef(null),T=le.useRef(null),C=le.useRef(null),V=le.useRef(null),H=le.useRef(null),X=le.useRef(null),F=le.useRef(null),Y=le.useRef(null),ee=le.useRef(null),[ue,re]=le.useState(!1),[de,ye]=le.useState(!1),[x,I]=le.useState(0),[b,R]=le.useState(),[k,M]=le.useState([]),[N,tt]=le.useState([{content:"For Studies",isIndicated:!1},{content:"For Teaching Purposes",isIndicated:!1},{content:"For My Job",isIndicated:!1},{content:"Just for Fun",isIndicated:!1}]),[nt,ae]=le.useState([{content:"TLE",testClass:!1},{content:"Mathematics",testClass:!1},{content:"Science",testClass:!1},{content:"English",testClass:!1},{content:"Colloquium",testClass:!1},{content:"Filipino",testClass:!1},{content:"Mapeh",testClass:!1},{content:"AP",testClass:!1},{content:"ESP",testClass:!1}]),ve=ie=>{ie=="next"&&x!=3?I(x+1):ie=="back"&&x!=0&&I(x-1)},oe=ie=>{let ne=N;for(let he in ne)if(he==ie){ne=ne[ie].content;break}R(ne),tt(he=>he.map((Ee,pe)=>ie==pe?{...Ee,isIndicated:!0}:{...Ee,isIndicated:!1}))},z=ie=>{let ne=nt,he=[];ne=ne.map((Ee,pe)=>ie==pe?{...Ee,testClass:Ee.testClass!=!0}:{...Ee});for(let Ee in ne)ne[Ee].testClass==!0&&he.push(ne[Ee]);M([...he]),ae(Ee=>Ee.map((pe,et)=>ie==et?{...pe,testClass:pe.testClass!=!0}:{...pe}))},O=async()=>{const ie={password:c.current.value,email:_.current.value,school:H.current.value,grSec:F.current.value,favSubjects:k};try{await gN(La,_.current.value,c.current.value);const ne=La.currentUser;a(!0),s(!1),ne&&await UP(gl(yl,"Users",ne.uid),{email:_.current.value,school:H.current.value,name:C.current.value,grSec:F.current.value,favSubjects:k,usingAs:ee==null?void 0:ee.current.value,purpose:b}),i(he=>[...he,ie]),a(!1),l(!0)}catch(ne){console.log(ne)}};function $(){c.current.value="",d.current.value="",_.current.value="",m.current.value="",E.current.value="",T.current.value="",C.current.value="",V.current.value="",H.current.value="",X.current.value="",F.current.value="",Y.current.value="",ee.current.value="",ae(ie=>ie.map(ne=>({...ne,testClass:!1}))),tt(ie=>ie.map(ne=>({...ne,isIndicated:!1}))),R(null),M([])}if(t==!0)return S.jsx(S.Fragment,{children:S.jsxs("div",{className:gn.sign_up_wrapper,children:[S.jsx(ge,{func:()=>{s(!1),$()},content:"X",className:gn.goToStartingPage}),S.jsxs("form",{onSubmit:ie=>{ie.preventDefault()},className:gn.form_1,children:[S.jsx("header",{children:"SIGN UP"}),S.jsxs("div",{className:gn.to_bottom,children:[S.jsx(NL,{indicated:x,show:ue,showConfirm:de,setShowConfirm:ie=>{ye(ie)},setShow:ie=>{re(ie)},passwordInput:c,confirmPasswordInput:E,emailInput:_,passWarning:d,confirmWarning:T,emailWarning:m}),S.jsx(PL,{indicated:x,usageOptions:N,setUsageOptions:ie=>{tt(ie)},handleUsageOptions:ie=>{oe(ie)},usingAsInput:ee}),S.jsx(UL,{indicated:x,schoolInput:H,schoolWarning:X,grSecInput:F,grSecWarning:Y,nickNameInput:C,nameWarning:V}),S.jsx(qL,{indicated:x,subjects:nt,handleSubjects:ie=>{z(ie)}}),S.jsxs("div",{className:gn.bottom,children:[S.jsxs("div",{className:gn.buttons,children:[S.jsx(ge,{content:"BACK",func:()=>{ve("back")}}),S.jsx(ge,{content:x==3?"SUBMIT":"NEXT",func:()=>{x==3?O():ve("next")}})]}),S.jsxs("div",{className:gn.indicator,children:[S.jsx("div",{className:x==0?gn.indicated:gn.not_indicated}),S.jsx("div",{className:x==1?gn.indicated:gn.not_indicated}),S.jsx("div",{className:x==2?gn.indicated:gn.not_indicated}),S.jsx("div",{className:x==3?gn.indicated:gn.not_indicated})]}),S.jsxs("h4",{id:gn.SignUp,onClick:()=>{e(!0),s(!1),$()},children:[" ",S.jsx("a",{children:"Already Have an Account?"})," "]})]})]})]})]})})},tU="_Signing_Out_Wrapper_d1gt7_5",nU="_Hide_Signing_Out_Wrapper_d1gt7_5",iU="_Signing_Out_Box_d1gt7_47",sU="_Top_d1gt7_75",rU="_Options_d1gt7_137",ku={Signing_Out_Wrapper:tU,Hide_Signing_Out_Wrapper:nU,Signing_Out_Box:iU,Top:sU,Options:rU},aU=({isSigningOut:i,setIsSigningOut:e,setLoading:t,setUser:s})=>{const a=async()=>{t(!0);try{await V0(La),s(null),t(!1),e(!1)}catch(l){t(!1),e(!1),console.log(l)}};if(i)return S.jsx("div",{className:i?ku.Signing_Out_Wrapper:ku.Hide_Signing_Out_Wrapper,children:S.jsxs("div",{className:ku.Signing_Out_Box,children:[S.jsxs("div",{className:ku.Top,children:[S.jsx("i",{className:"fa fa-user"}),S.jsx("h3",{children:"Would You Like To Sign Out?"})]}),S.jsxs("div",{className:ku.Options,children:[S.jsx(ge,{content:"No",func:()=>{e(!1)}}),S.jsx(ge,{content:"Yes",func:()=>{a()}})]})]})})},oU="_Make_User_Sign_In_Wrapper_10wex_1",lU="_Hide_Make_User_Sign_In_Wrapper_10wex_1",uU="_Make_User_Sign_In_Box_10wex_43",cU="_Images_10wex_93",hU="_Buttons_10wex_161",fU="_Hide_Prompt_Button_10wex_205",Vo={Make_User_Sign_In_Wrapper:oU,Hide_Make_User_Sign_In_Wrapper:lU,Make_User_Sign_In_Box:uU,Images:cU,Buttons:hU,Hide_Prompt_Button:fU},dU=({showMakeUserSignIn:i,setShowMakeUserSignIn:e,setPage:t,setShowSignInPrompt:s,setShowSignUpPrompt:a})=>S.jsx(S.Fragment,{children:S.jsx("div",{className:i?Vo.Make_User_Sign_In_Wrapper:Vo.Hide_Make_User_Sign_In_Wrapper,children:S.jsxs("div",{className:Vo.Make_User_Sign_In_Box,children:[S.jsx(ge,{icon:S.jsx("i",{className:"fa fa-close"}),className:Vo.Hide_Prompt_Button,func:()=>{e(!1),t(1)}}),S.jsxs("div",{className:Vo.Images,children:[S.jsx("img",{src:"./Public/cat.png"}),S.jsx("img",{src:"./Public/!.png"})]}),S.jsx("h1",{children:"You're not Signed In !"}),S.jsx("p",{children:"Create an account, log in and get free access to the advanced To-Do List Web Application"}),S.jsxs("div",{className:Vo.Buttons,children:[S.jsx(ge,{content:"Sign Up",func:()=>{a(!0),e(!1)}}),S.jsx(ge,{content:"Sign In",func:()=>{s(!0),e(!1)}})]})]})})}),pU="_Pages_1x53v_25",_U="_Hide_Pages_1x53v_31",YS={Pages:pU,Hide_Pages:_U};function mU(){const[i,e]=le.useState(!0),[t,s]=le.useState(!1),[a,l]=le.useState(window.location.href),[c,d]=le.useState(!1),[_,m]=le.useState(!1),[E,T]=le.useState(!1),[C,V]=le.useState(!1),[H,X]=le.useState(!1),[F,Y]=le.useState(!1),[ee,ue]=le.useState(!1),[re,de]=le.useState(!1),[ye,x]=le.useState(1),[I,b]=le.useState(0),[R,k]=le.useState(JSON.parse(localStorage.getItem("Users"))!=null?JSON.parse(localStorage.getItem("Users")):[]),[M,N]=le.useState(null),[tt,nt]=le.useState(null),[ae,ve]=le.useState([]),oe=async()=>{if(M){const z=gl(yl,"Users",M==null?void 0:M.uid);try{const O=await Db(z);O.exists&&ve(O.data())}catch(O){console.log(O)}}else ve(null)};return TN(La,z=>{(z==null?void 0:z.uid)!=null?(console.log(z.uid),N(z)):ve(null)}),le.useEffect(()=>{oe()},[M]),le.useEffect(()=>{a.includes("#Home")?x(1):a.includes("#Tasks")?x(2):a.includes("#About")?x(3):a.includes("#Contacts")&&x(4)},[]),le.useEffect(()=>{let z=window.location.href;z.toLowerCase();let O=z.search("/Acad/");switch(z=z.slice(0,O+6),ye){case 1:z=z.concat("#Home"),l(z);break;case 2:z=z.concat("#Tasks"),l(z);break;case 3:z=z.concat("#About"),l(z);break;case 4:z=z.concat("#Contacts"),l(z);break}},[ye]),S.jsx(S.Fragment,{children:S.jsxs("div",{children:[S.jsx(HP,{setPage:z=>{x(z)},page:ye,setIndicated:z=>{b(z)},indicated:I,editing:t,url:a,setUrl:z=>{l(z)},showSignInPrompt:c,setShowSignInPrompt:z=>{d(z)},showSignUpPrompt:_,setShowSignUpPrompt:z=>{m(z)},user:M,continueAs:C,setIsSigningOut:z=>{Y(z)},setPaging:z=>{nt(z)},showNavBar:i,setShowNavbar:z=>{e(z)},setShowSaveChanges:z=>{ue(z)},setShowMakeUserSignIn:z=>de(z)}),S.jsxs("div",{className:!c&&!_?YS.Pages:YS.Hide_Pages,children:[S.jsx(FP,{page:ye,setPage:z=>{x(z)},setIndicated:z=>{b(z)},indicated:I,user:M}),S.jsx(uL,{setPage:z=>x(z),page:ye,getTask:ae,editing:t,setEditing:z=>{s(z)},user:M,setUser:z=>{N(z)},loading:E,setLoading:z=>T(z),paging:tt,setPaging:z=>{nt(z)},showNavBar:i,setShowNavbar:z=>{e(z)},showSaveChanges:ee,setShowSaveChanges:z=>ue(z)})]}),S.jsx(CL,{page:ye,setPage:z=>x(z),showSignInPrompt:c,setShowSignUpPrompt:z=>{m(z)},setShowSignInPrompt:z=>{d(z)},user:M,setUser:z=>{N(z)},setLoading:z=>T(z),setContinueAs:z=>V(z),loading:E}),S.jsx(eU,{page:ye,setPage:z=>x(z),showSignUpPrompt:_,setShowSignInPrompt:z=>{d(z)},setShowSignUpPrompt:z=>{m(z)},users:R,setUsers:z=>{k(z)},user:M,setUser:z=>{N(z)},setLoading:z=>T(z),setContinueAs:z=>V(z),loading:E}),S.jsx(lL,{loading:E}),S.jsx(pL,{continueAs:C,setContinueAs:z=>{V(z)},user:M,setLoading:z=>T(z)}),S.jsx(aU,{isSigningOut:F,setIsSigningOut:z=>{Y(z)},setLoading:z=>{T(z)},setUser:z=>{N(z)}}),S.jsx(dU,{showMakeUserSignIn:re,setShowMakeUserSignIn:z=>de(z),setPage:z=>x(z),setShowSignUpPrompt:z=>{m(z)},setShowSignInPrompt:z=>{d(z)}})]})})}hR.createRoot(document.getElementById("root")).render(S.jsx(le.StrictMode,{children:S.jsx(mU,{})}));
