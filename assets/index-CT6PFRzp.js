(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var u_={exports:{}},Tu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xE;function eR(){if(xE)return Tu;xE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:i,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Tu.Fragment=e,Tu.jsx=t,Tu.jsxs=t,Tu}var kE;function tR(){return kE||(kE=1,u_.exports=eR()),u_.exports}var S=tR(),c_={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ME;function nR(){if(ME)return xe;ME=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function R(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,Q={};function F(O,k,te){this.props=O,this.context=k,this.refs=Q,this.updater=te||P}F.prototype.isReactComponent={},F.prototype.setState=function(O,k){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,k,"setState")},F.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function X(){}X.prototype=F.prototype;function Y(O,k,te){this.props=O,this.context=k,this.refs=Q,this.updater=te||P}var J=Y.prototype=new X;J.constructor=Y,q(J,F.prototype),J.isPureReactComponent=!0;var fe=Array.isArray,de={H:null,A:null,T:null,S:null},Ce=Object.prototype.hasOwnProperty;function x(O,k,te,se,ne,ge){return te=ge.ref,{$$typeof:i,type:O,key:k,ref:te!==void 0?te:null,props:ge}}function C(O,k){return x(O.type,k,void 0,void 0,void 0,O.props)}function b(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function D(O){var k={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(te){return k[te]})}var M=/\/+/g;function U(O,k){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):k.toString(36)}function N(){}function ke(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(k){O.status==="pending"&&(O.status="fulfilled",O.value=k)},function(k){O.status==="pending"&&(O.status="rejected",O.reason=k)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function Me(O,k,te,se,ne){var ge=typeof O;(ge==="undefined"||ge==="boolean")&&(O=null);var pe=!1;if(O===null)pe=!0;else switch(ge){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(O.$$typeof){case i:case e:pe=!0;break;case E:return pe=O._init,Me(pe(O._payload),k,te,se,ne)}}if(pe)return ne=ne(O),pe=se===""?"."+U(O,0):se,fe(ne)?(te="",pe!=null&&(te=pe.replace(M,"$&/")+"/"),Me(ne,k,te,"",function(_t){return _t})):ne!=null&&(b(ne)&&(ne=C(ne,te+(ne.key==null||O&&O.key===ne.key?"":(""+ne.key).replace(M,"$&/")+"/")+pe)),k.push(ne)),1;pe=0;var Be=se===""?".":se+":";if(fe(O))for(var Te=0;Te<O.length;Te++)se=O[Te],ge=Be+U(se,Te),pe+=Me(se,k,te,ge,ne);else if(Te=R(O),typeof Te=="function")for(O=Te.call(O),Te=0;!(se=O.next()).done;)se=se.value,ge=Be+U(se,Te++),pe+=Me(se,k,te,ge,ne);else if(ge==="object"){if(typeof O.then=="function")return Me(ke(O),k,te,se,ne);throw k=String(O),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return pe}function oe(O,k,te){if(O==null)return O;var se=[],ne=0;return Me(O,se,"","",function(ge){return k.call(te,ge,ne++)}),se}function le(O){if(O._status===-1){var k=O._result;k=k(),k.then(function(te){(O._status===0||O._status===-1)&&(O._status=1,O._result=te)},function(te){(O._status===0||O._status===-1)&&(O._status=2,O._result=te)}),O._status===-1&&(O._status=0,O._result=k)}if(O._status===1)return O._result.default;throw O._result}var ce=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ie(){}return xe.Children={map:oe,forEach:function(O,k,te){oe(O,function(){k.apply(this,arguments)},te)},count:function(O){var k=0;return oe(O,function(){k++}),k},toArray:function(O){return oe(O,function(k){return k})||[]},only:function(O){if(!b(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},xe.Component=F,xe.Fragment=t,xe.Profiler=a,xe.PureComponent=Y,xe.StrictMode=s,xe.Suspense=_,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=de,xe.act=function(){throw Error("act(...) is not supported in production builds of React.")},xe.cache=function(O){return function(){return O.apply(null,arguments)}},xe.cloneElement=function(O,k,te){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var se=q({},O.props),ne=O.key,ge=void 0;if(k!=null)for(pe in k.ref!==void 0&&(ge=void 0),k.key!==void 0&&(ne=""+k.key),k)!Ce.call(k,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&k.ref===void 0||(se[pe]=k[pe]);var pe=arguments.length-2;if(pe===1)se.children=te;else if(1<pe){for(var Be=Array(pe),Te=0;Te<pe;Te++)Be[Te]=arguments[Te+2];se.children=Be}return x(O.type,ne,void 0,void 0,ge,se)},xe.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},xe.createElement=function(O,k,te){var se,ne={},ge=null;if(k!=null)for(se in k.key!==void 0&&(ge=""+k.key),k)Ce.call(k,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ne[se]=k[se]);var pe=arguments.length-2;if(pe===1)ne.children=te;else if(1<pe){for(var Be=Array(pe),Te=0;Te<pe;Te++)Be[Te]=arguments[Te+2];ne.children=Be}if(O&&O.defaultProps)for(se in pe=O.defaultProps,pe)ne[se]===void 0&&(ne[se]=pe[se]);return x(O,ge,void 0,void 0,null,ne)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(O){return{$$typeof:d,render:O}},xe.isValidElement=b,xe.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:le}},xe.memo=function(O,k){return{$$typeof:m,type:O,compare:k===void 0?null:k}},xe.startTransition=function(O){var k=de.T,te={};de.T=te;try{var se=O(),ne=de.S;ne!==null&&ne(te,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(Ie,ce)}catch(ge){ce(ge)}finally{de.T=k}},xe.unstable_useCacheRefresh=function(){return de.H.useCacheRefresh()},xe.use=function(O){return de.H.use(O)},xe.useActionState=function(O,k,te){return de.H.useActionState(O,k,te)},xe.useCallback=function(O,k){return de.H.useCallback(O,k)},xe.useContext=function(O){return de.H.useContext(O)},xe.useDebugValue=function(){},xe.useDeferredValue=function(O,k){return de.H.useDeferredValue(O,k)},xe.useEffect=function(O,k){return de.H.useEffect(O,k)},xe.useId=function(){return de.H.useId()},xe.useImperativeHandle=function(O,k,te){return de.H.useImperativeHandle(O,k,te)},xe.useInsertionEffect=function(O,k){return de.H.useInsertionEffect(O,k)},xe.useLayoutEffect=function(O,k){return de.H.useLayoutEffect(O,k)},xe.useMemo=function(O,k){return de.H.useMemo(O,k)},xe.useOptimistic=function(O,k){return de.H.useOptimistic(O,k)},xe.useReducer=function(O,k,te){return de.H.useReducer(O,k,te)},xe.useRef=function(O){return de.H.useRef(O)},xe.useState=function(O){return de.H.useState(O)},xe.useSyncExternalStore=function(O,k,te){return de.H.useSyncExternalStore(O,k,te)},xe.useTransition=function(){return de.H.useTransition()},xe.version="19.0.0",xe}var PE;function gm(){return PE||(PE=1,c_.exports=nR()),c_.exports}var ae=gm(),h_={exports:{}},Su={},f_={exports:{}},d_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VE;function iR(){return VE||(VE=1,function(i){function e(oe,le){var ce=oe.length;oe.push(le);e:for(;0<ce;){var Ie=ce-1>>>1,O=oe[Ie];if(0<a(O,le))oe[Ie]=le,oe[ce]=O,ce=Ie;else break e}}function t(oe){return oe.length===0?null:oe[0]}function s(oe){if(oe.length===0)return null;var le=oe[0],ce=oe.pop();if(ce!==le){oe[0]=ce;e:for(var Ie=0,O=oe.length,k=O>>>1;Ie<k;){var te=2*(Ie+1)-1,se=oe[te],ne=te+1,ge=oe[ne];if(0>a(se,ce))ne<O&&0>a(ge,se)?(oe[Ie]=ge,oe[ne]=ce,Ie=ne):(oe[Ie]=se,oe[te]=ce,Ie=te);else if(ne<O&&0>a(ge,ce))oe[Ie]=ge,oe[ne]=ce,Ie=ne;else break e}}return le}function a(oe,le){var ce=oe.sortIndex-le.sortIndex;return ce!==0?ce:oe.id-le.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var _=[],m=[],E=1,T=null,R=3,P=!1,q=!1,Q=!1,F=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function J(oe){for(var le=t(m);le!==null;){if(le.callback===null)s(m);else if(le.startTime<=oe)s(m),le.sortIndex=le.expirationTime,e(_,le);else break;le=t(m)}}function fe(oe){if(Q=!1,J(oe),!q)if(t(_)!==null)q=!0,ke();else{var le=t(m);le!==null&&Me(fe,le.startTime-oe)}}var de=!1,Ce=-1,x=5,C=-1;function b(){return!(i.unstable_now()-C<x)}function D(){if(de){var oe=i.unstable_now();C=oe;var le=!0;try{e:{q=!1,Q&&(Q=!1,X(Ce),Ce=-1),P=!0;var ce=R;try{t:{for(J(oe),T=t(_);T!==null&&!(T.expirationTime>oe&&b());){var Ie=T.callback;if(typeof Ie=="function"){T.callback=null,R=T.priorityLevel;var O=Ie(T.expirationTime<=oe);if(oe=i.unstable_now(),typeof O=="function"){T.callback=O,J(oe),le=!0;break t}T===t(_)&&s(_),J(oe)}else s(_);T=t(_)}if(T!==null)le=!0;else{var k=t(m);k!==null&&Me(fe,k.startTime-oe),le=!1}}break e}finally{T=null,R=ce,P=!1}le=void 0}}finally{le?M():de=!1}}}var M;if(typeof Y=="function")M=function(){Y(D)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,N=U.port2;U.port1.onmessage=D,M=function(){N.postMessage(null)}}else M=function(){F(D,0)};function ke(){de||(de=!0,M())}function Me(oe,le){Ce=F(function(){oe(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(oe){oe.callback=null},i.unstable_continueExecution=function(){q||P||(q=!0,ke())},i.unstable_forceFrameRate=function(oe){0>oe||125<oe?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<oe?Math.floor(1e3/oe):5},i.unstable_getCurrentPriorityLevel=function(){return R},i.unstable_getFirstCallbackNode=function(){return t(_)},i.unstable_next=function(oe){switch(R){case 1:case 2:case 3:var le=3;break;default:le=R}var ce=R;R=le;try{return oe()}finally{R=ce}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(oe,le){switch(oe){case 1:case 2:case 3:case 4:case 5:break;default:oe=3}var ce=R;R=oe;try{return le()}finally{R=ce}},i.unstable_scheduleCallback=function(oe,le,ce){var Ie=i.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?Ie+ce:Ie):ce=Ie,oe){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ce+O,oe={id:E++,callback:le,priorityLevel:oe,startTime:ce,expirationTime:O,sortIndex:-1},ce>Ie?(oe.sortIndex=ce,e(m,oe),t(_)===null&&oe===t(m)&&(Q?(X(Ce),Ce=-1):Q=!0,Me(fe,ce-Ie))):(oe.sortIndex=O,e(_,oe),q||P||(q=!0,ke())),oe},i.unstable_shouldYield=b,i.unstable_wrapCallback=function(oe){var le=R;return function(){var ce=R;R=le;try{return oe.apply(this,arguments)}finally{R=ce}}}}(d_)),d_}var LE;function sR(){return LE||(LE=1,f_.exports=iR()),f_.exports}var p_={exports:{}},pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UE;function rR(){if(UE)return pn;UE=1;var i=gm();function e(_){var m="https://react.dev/errors/"+_;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)m+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+_+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(_,m,E){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:_,containerInfo:m,implementation:E}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(_,m){if(_==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,pn.createPortal=function(_,m){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return l(_,m,null,E)},pn.flushSync=function(_){var m=c.T,E=s.p;try{if(c.T=null,s.p=2,_)return _()}finally{c.T=m,s.p=E,s.d.f()}},pn.preconnect=function(_,m){typeof _=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(_,m))},pn.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},pn.preinit=function(_,m){if(typeof _=="string"&&m&&typeof m.as=="string"){var E=m.as,T=d(E,m.crossOrigin),R=typeof m.integrity=="string"?m.integrity:void 0,P=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;E==="style"?s.d.S(_,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:T,integrity:R,fetchPriority:P}):E==="script"&&s.d.X(_,{crossOrigin:T,integrity:R,fetchPriority:P,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},pn.preinitModule=function(_,m){if(typeof _=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var E=d(m.as,m.crossOrigin);s.d.M(_,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(_)},pn.preload=function(_,m){if(typeof _=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var E=m.as,T=d(E,m.crossOrigin);s.d.L(_,E,{crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},pn.preloadModule=function(_,m){if(typeof _=="string")if(m){var E=d(m.as,m.crossOrigin);s.d.m(_,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(_)},pn.requestFormReset=function(_){s.d.r(_)},pn.unstable_batchedUpdates=function(_,m){return _(m)},pn.useFormState=function(_,m,E){return c.H.useFormState(_,m,E)},pn.useFormStatus=function(){return c.H.useHostTransitionStatus()},pn.version="19.0.0",pn}var jE;function aR(){if(jE)return p_.exports;jE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),p_.exports=rR(),p_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BE;function oR(){if(BE)return Su;BE=1;var i=sR(),e=gm(),t=aR();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var l=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),R=Symbol.for("react.consumer"),P=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),fe=Symbol.for("react.memo_cache_sentinel"),de=Symbol.iterator;function Ce(n){return n===null||typeof n!="object"?null:(n=de&&n[de]||n["@@iterator"],typeof n=="function"?n:null)}var x=Symbol.for("react.client.reference");function C(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===x?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case _:return"Fragment";case d:return"Portal";case E:return"Profiler";case m:return"StrictMode";case Q:return"Suspense";case F:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Provider";case R:return(n._context.displayName||"Context")+".Consumer";case q:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case X:return r=n.displayName||null,r!==null?r:C(n.type)||"Memo";case Y:r=n._payload,n=n._init;try{return C(n(r))}catch{}}return null}var b=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=Object.assign,M,U;function N(n){if(M===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);M=r&&r[1]||"",U=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M+n+U}var ke=!1;function Me(n,r){if(!n||ke)return"";ke=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(K){var H=K}Reflect.construct(n,[],ee)}else{try{ee.call()}catch(K){H=K}n.call(ee.prototype)}}else{try{throw Error()}catch(K){H=K}(ee=n())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(K){if(K&&H&&typeof K.stack=="string")return[K.stack,H.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),v=p[0],A=p[1];if(v&&A){var I=v.split(`
`),L=A.split(`
`);for(f=u=0;u<I.length&&!I[u].includes("DetermineComponentFrameRoot");)u++;for(;f<L.length&&!L[f].includes("DetermineComponentFrameRoot");)f++;if(u===I.length||f===L.length)for(u=I.length-1,f=L.length-1;1<=u&&0<=f&&I[u]!==L[f];)f--;for(;1<=u&&0<=f;u--,f--)if(I[u]!==L[f]){if(u!==1||f!==1)do if(u--,f--,0>f||I[u]!==L[f]){var W=`
`+I[u].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=u&&0<=f);break}}}finally{ke=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?N(o):""}function oe(n){switch(n.tag){case 26:case 27:case 5:return N(n.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 15:return n=Me(n.type,!1),n;case 11:return n=Me(n.type.render,!1),n;case 1:return n=Me(n.type,!0),n;default:return""}}function le(n){try{var r="";do r+=oe(n),n=n.return;while(n);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function ce(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Ie(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function O(n){if(ce(n)!==n)throw Error(s(188))}function k(n){var r=n.alternate;if(!r){if(r=ce(n),r===null)throw Error(s(188));return r!==n?null:n}for(var o=n,u=r;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return O(f),n;if(p===u)return O(f),r;p=p.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=p;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,u=p;break}if(A===u){v=!0,u=f,o=p;break}A=A.sibling}if(!v){for(A=p.child;A;){if(A===o){v=!0,o=p,u=f;break}if(A===u){v=!0,u=p,o=f;break}A=A.sibling}if(!v)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?n:r}function te(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=te(n),r!==null)return r;n=n.sibling}return null}var se=Array.isArray,ne=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge={pending:!1,data:null,method:null,action:null},pe=[],Be=-1;function Te(n){return{current:n}}function _t(n){0>Be||(n.current=pe[Be],pe[Be]=null,Be--)}function et(n,r){Be++,pe[Be]=n.current,n.current=r}var Zt=Te(null),kn=Te(null),Jt=Te(null),Ai=Te(null);function hi(n,r){switch(et(Jt,r),et(kn,n),et(Zt,null),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)&&(r=r.namespaceURI)?oE(r):0;break;default:if(n=n===8?r.parentNode:r,r=n.tagName,n=n.namespaceURI)n=oE(n),r=lE(n,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}_t(Zt),et(Zt,r)}function Mn(){_t(Zt),_t(kn),_t(Jt)}function ie(n){n.memoizedState!==null&&et(Ai,n);var r=Zt.current,o=lE(r,n.type);r!==o&&(et(kn,n),et(Zt,o))}function ut(n){kn.current===n&&(_t(Zt),_t(kn)),Ai.current===n&&(_t(Ai),mu._currentValue=ge)}var bt=Object.prototype.hasOwnProperty,fi=i.unstable_scheduleCallback,Zi=i.unstable_cancelCallback,Gr=i.unstable_shouldYield,Ls=i.unstable_requestPaint,en=i.unstable_now,Ji=i.unstable_getCurrentPriorityLevel,Ct=i.unstable_ImmediatePriority,Ht=i.unstable_UserBlockingPriority,es=i.unstable_NormalPriority,Tc=i.unstable_LowPriority,yl=i.unstable_IdlePriority,fd=i.log,Kr=i.unstable_setDisableYieldValue,Us=null,fn=null;function vl(n){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(Us,n,void 0,(n.current.flags&128)===128)}catch{}}function wi(n){if(typeof fd=="function"&&Kr(n),fn&&typeof fn.setStrictMode=="function")try{fn.setStrictMode(Us,n)}catch{}}var An=Math.clz32?Math.clz32:Ac,El=Math.log,Sc=Math.LN2;function Ac(n){return n>>>=0,n===0?32:31-(El(n)/Sc|0)|0}var bi=128,js=4194304;function di(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Wn(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,f=n.suspendedLanes,p=n.pingedLanes,v=n.warmLanes;n=n.finishedLanes!==0;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=di(o):(p&=A,p!==0?u=di(p):n||(v=A&~v,v!==0&&(u=di(v))))):(A=o&~f,A!==0?u=di(A):p!==0?u=di(p):n||(v=o&~v,v!==0&&(u=di(v)))),u===0?0:r!==0&&r!==u&&(r&f)===0&&(f=u&-u,v=r&-r,f>=v||f===32&&(v&4194176)!==0)?r:u}function Bs(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Wa(n,r){switch(n){case 1:case 2:case 4:case 8:return r+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tl(){var n=bi;return bi<<=1,(bi&4194176)===0&&(bi=128),n}function zs(){var n=js;return js<<=1,(js&62914560)===0&&(js=4194304),n}function Qa(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Rt(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function wc(n,r,o,u,f,p){var v=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var A=n.entanglements,I=n.expirationTimes,L=n.hiddenUpdates;for(o=v&~o;0<o;){var W=31-An(o),ee=1<<W;A[W]=0,I[W]=-1;var H=L[W];if(H!==null)for(L[W]=null,W=0;W<H.length;W++){var K=H[W];K!==null&&(K.lane&=-536870913)}o&=~ee}u!==0&&Hs(n,u,0),p!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=p&~(v&~r))}function Hs(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-An(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194218}function Fs(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-An(o),f=1<<u;f&r|n[u]&r&&(n[u]|=r),o&=~f}}function bc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Cc(){var n=ne.p;return n!==0?n:(n=window.event,n===void 0?32:CE(n.type))}function qs(n,r){var o=ne.p;try{return ne.p=n,r()}finally{ne.p=o}}var Ci=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Ci,Mt="__reactProps$"+Ci,ts="__reactContainer$"+Ci,Wr="__reactEvents$"+Ci,Ya="__reactListeners$"+Ci,Ri="__reactHandles$"+Ci,Sl="__reactResources$"+Ci,Gs="__reactMarker$"+Ci;function Qr(n){delete n[Ft],delete n[Mt],delete n[Wr],delete n[Ya],delete n[Ri]}function pi(n){var r=n[Ft];if(r)return r;for(var o=n.parentNode;o;){if(r=o[ts]||o[Ft]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=hE(n);n!==null;){if(o=n[Ft])return o;n=hE(n)}return r}n=o,o=n.parentNode}return null}function ns(n){if(n=n[Ft]||n[ts]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function Ks(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function Ws(n){var r=n[Sl];return r||(r=n[Sl]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function mt(n){n[Gs]=!0}var Al=new Set,$a={};function Pn(n,r){In(n,r),In(n+"Capture",r)}function In(n,r){for($a[n]=r,n=0;n<r.length;n++)Al.add(r[n])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wl={},bl={};function Rc(n){return bt.call(bl,n)?!0:bt.call(wl,n)?!1:dd.test(n)?bl[n]=!0:(wl[n]=!0,!1)}function Qs(n,r,o){if(Rc(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function Ys(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function Qn(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}function wn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ic(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function pd(n){var r=Ic(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(v){u=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(v){u=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Yr(n){n._valueTracker||(n._valueTracker=pd(n))}function Cl(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=Ic(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Xa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var is=/[\n"\\]/g;function Et(n){return n.replace(is,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function $s(n,r,o,u,f,p,v,A){n.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.type=v:n.removeAttribute("type"),r!=null?v==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+wn(r)):n.value!==""+wn(r)&&(n.value=""+wn(r)):v!=="submit"&&v!=="reset"||n.removeAttribute("value"),r!=null?Za(n,v,wn(r)):o!=null?Za(n,v,wn(o)):u!=null&&n.removeAttribute("value"),f==null&&p!=null&&(n.defaultChecked=!!p),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?n.name=""+wn(A):n.removeAttribute("name")}function $r(n,r,o,u,f,p,v,A){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(n.type=p),r!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||r!=null))return;o=o!=null?""+wn(o):"",r=r!=null?""+wn(r):o,A||r===n.value||(n.value=r),n.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=A?n.checked:!!u,n.defaultChecked=!!u,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(n.name=v)}function Za(n,r,o){r==="number"&&Xa(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Xe(n,r,o,u){if(n=n.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=r.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+wn(o),r=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function Xr(n,r,o){if(r!=null&&(r=""+wn(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+wn(o):""}function Xs(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(se(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=wn(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function Yn(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var _d=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rl(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||_d.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function Nc(n,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Rl(n,f,u)}else for(var p in r)r.hasOwnProperty(p)&&Rl(n,p,r[p])}function Il(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var md=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ii(n){return gd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var $n=null;function Ja(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ss=null,rs=null;function as(n){var r=ns(n);if(r&&(n=r.stateNode)){var o=n[Mt]||null;e:switch(n=r.stateNode,r.type){case"input":if($s(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Et(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var f=u[Mt]||null;if(!f)throw Error(s(90));$s(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&Cl(u)}break e;case"textarea":Xr(n,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Xe(n,!!o.multiple,r,!1)}}}var Nl=!1;function Dc(n,r,o){if(Nl)return n(r,o);Nl=!0;try{var u=n(r);return u}finally{if(Nl=!1,(ss!==null||rs!==null)&&(Th(),ss&&(r=ss,n=rs,rs=ss=null,as(r),n)))for(r=0;r<n.length;r++)as(n[r])}}function Zr(n,r){var o=n.stateNode;if(o===null)return null;var u=o[Mt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var Xn=!1;if(Vn)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){Xn=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{Xn=!1}var Ni=null,Zs=null,os=null;function Dl(){if(os)return os;var n,r=Zs,o=r.length,u,f="value"in Ni?Ni.value:Ni.textContent,p=f.length;for(n=0;n<o&&r[n]===f[n];n++);var v=o-n;for(u=1;u<=v&&r[o-u]===f[p-u];u++);return os=f.slice(n,1<u?1-u:void 0)}function Di(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Oi(){return!0}function Ol(){return!1}function qt(n){function r(o,u,f,p,v){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(o=n[A],this[A]=o?o(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Oi:Ol,this.isPropagationStopped=Ol,this}return D(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),r}var tt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=qt(tt),ea=D({},tt,{view:0,detail:0}),Oc=qt(ea),to,no,xi,ta=D({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sa,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xi&&(xi&&n.type==="mousemove"?(to=n.screenX-xi.screenX,no=n.screenY-xi.screenY):no=to=0,xi=n),to)},movementY:function(n){return"movementY"in n?n.movementY:no}}),Zn=qt(ta),xc=D({},ta,{dataTransfer:0}),yd=qt(xc),na=D({},ea,{relatedTarget:0}),io=qt(na),xl=D({},tt,{animationName:0,elapsedTime:0,pseudoElement:0}),so=qt(xl),kc=D({},tt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ro=qt(kc),vd=D({},tt,{data:0}),kl=qt(vd),ia={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ml(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Pc[n])?!!r[n]:!1}function sa(){return Ml}var Vc=D({},ea,{key:function(n){if(n.key){var r=ia[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Di(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Mc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sa,charCode:function(n){return n.type==="keypress"?Di(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Di(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ao=qt(Vc),Lc=D({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pl=qt(Lc),ls=D({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sa}),Uc=qt(ls),jc=D({},tt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bc=qt(jc),zc=D({},ta,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),oo=qt(zc),bn=D({},tt,{newState:0,oldState:0}),Hc=qt(bn),Fc=[9,13,27,32],ki=Vn&&"CompositionEvent"in window,h=null;Vn&&"documentMode"in document&&(h=document.documentMode);var g=Vn&&"TextEvent"in window&&!h,y=Vn&&(!ki||h&&8<h&&11>=h),w=" ",B=!1;function G(n,r){switch(n){case"keyup":return Fc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ue(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ge=!1;function Pt(n,r){switch(n){case"compositionend":return ue(r);case"keypress":return r.which!==32?null:(B=!0,w);case"textInput":return n=r.data,n===w&&B?null:n;default:return null}}function Ke(n,r){if(Ge)return n==="compositionend"||!ki&&G(n,r)?(n=Dl(),os=Zs=Ni=null,Ge=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var Gt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vt(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Gt[n.type]:r==="textarea"}function us(n,r,o,u){ss?rs?rs.push(u):rs=[u]:ss=u,r=Ch(r,"onChange"),0<r.length&&(o=new eo("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var tn=null,Mi=null;function Vl(n){nE(n,0)}function qc(n){var r=Ks(n);if(Cl(r))return n}function Og(n,r){if(n==="change")return r}var xg=!1;if(Vn){var Ed;if(Vn){var Td="oninput"in document;if(!Td){var kg=document.createElement("div");kg.setAttribute("oninput","return;"),Td=typeof kg.oninput=="function"}Ed=Td}else Ed=!1;xg=Ed&&(!document.documentMode||9<document.documentMode)}function Mg(){tn&&(tn.detachEvent("onpropertychange",Pg),Mi=tn=null)}function Pg(n){if(n.propertyName==="value"&&qc(Mi)){var r=[];us(r,Mi,n,Ja(n)),Dc(Vl,r)}}function Db(n,r,o){n==="focusin"?(Mg(),tn=r,Mi=o,tn.attachEvent("onpropertychange",Pg)):n==="focusout"&&Mg()}function Ob(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return qc(Mi)}function xb(n,r){if(n==="click")return qc(r)}function kb(n,r){if(n==="input"||n==="change")return qc(r)}function Mb(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Ln=typeof Object.is=="function"?Object.is:Mb;function Ll(n,r){if(Ln(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!bt.call(r,f)||!Ln(n[f],r[f]))return!1}return!0}function Vg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Lg(n,r){var o=Vg(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Vg(o)}}function Ug(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Ug(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function jg(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Xa(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Xa(n.document)}return r}function Sd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Pb(n,r){var o=jg(r);r=n.focusedElem;var u=n.selectionRange;if(o!==r&&r&&r.ownerDocument&&Ug(r.ownerDocument.documentElement,r)){if(u!==null&&Sd(r)){if(n=u.start,o=u.end,o===void 0&&(o=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(o,r.value.length);else if(o=(n=r.ownerDocument||document)&&n.defaultView||window,o.getSelection){o=o.getSelection();var f=r.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!o.extend&&p>u&&(f=u,u=p,p=f),f=Lg(r,p);var v=Lg(r,u);f&&v&&(o.rangeCount!==1||o.anchorNode!==f.node||o.anchorOffset!==f.offset||o.focusNode!==v.node||o.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(f.node,f.offset),o.removeAllRanges(),p>u?(o.addRange(n),o.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),o.addRange(n)))}}for(n=[],o=r;o=o.parentNode;)o.nodeType===1&&n.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)o=n[r],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var Vb=Vn&&"documentMode"in document&&11>=document.documentMode,lo=null,Ad=null,Ul=null,wd=!1;function Bg(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;wd||lo==null||lo!==Xa(u)||(u=lo,"selectionStart"in u&&Sd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ul&&Ll(Ul,u)||(Ul=u,u=Ch(Ad,"onSelect"),0<u.length&&(r=new eo("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=lo)))}function ra(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var uo={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionrun:ra("Transition","TransitionRun"),transitionstart:ra("Transition","TransitionStart"),transitioncancel:ra("Transition","TransitionCancel"),transitionend:ra("Transition","TransitionEnd")},bd={},zg={};Vn&&(zg=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function aa(n){if(bd[n])return bd[n];if(!uo[n])return n;var r=uo[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in zg)return bd[n]=r[o];return n}var Hg=aa("animationend"),Fg=aa("animationiteration"),qg=aa("animationstart"),Lb=aa("transitionrun"),Ub=aa("transitionstart"),jb=aa("transitioncancel"),Gg=aa("transitionend"),Kg=new Map,Wg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function _i(n,r){Kg.set(n,r),Pn(r,[n])}var Jn=[],co=0,Cd=0;function Gc(){for(var n=co,r=Cd=co=0;r<n;){var o=Jn[r];Jn[r++]=null;var u=Jn[r];Jn[r++]=null;var f=Jn[r];Jn[r++]=null;var p=Jn[r];if(Jn[r++]=null,u!==null&&f!==null){var v=u.pending;v===null?f.next=f:(f.next=v.next,v.next=f),u.pending=f}p!==0&&Qg(o,f,p)}}function Kc(n,r,o,u){Jn[co++]=n,Jn[co++]=r,Jn[co++]=o,Jn[co++]=u,Cd|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Rd(n,r,o,u){return Kc(n,r,o,u),Wc(n)}function Js(n,r){return Kc(n,null,null,r),Wc(n)}function Qg(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,p=n.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(n=p.stateNode,n===null||n._visibility&1||(f=!0)),n=p,p=p.return;f&&r!==null&&n.tag===3&&(p=n.stateNode,f=31-An(o),p=p.hiddenUpdates,n=p[f],n===null?p[f]=[r]:n.push(r),r.lane=o|536870912)}function Wc(n){if(50<uu)throw uu=0,kp=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var ho={},Yg=new WeakMap;function ei(n,r){if(typeof n=="object"&&n!==null){var o=Yg.get(n);return o!==void 0?o:(r={value:n,source:r,stack:le(r)},Yg.set(n,r),r)}return{value:n,source:r,stack:le(r)}}var fo=[],po=0,Qc=null,Yc=0,ti=[],ni=0,oa=null,cs=1,hs="";function la(n,r){fo[po++]=Yc,fo[po++]=Qc,Qc=n,Yc=r}function $g(n,r,o){ti[ni++]=cs,ti[ni++]=hs,ti[ni++]=oa,oa=n;var u=cs;n=hs;var f=32-An(u)-1;u&=~(1<<f),o+=1;var p=32-An(r)+f;if(30<p){var v=f-f%5;p=(u&(1<<v)-1).toString(32),u>>=v,f-=v,cs=1<<32-An(r)+f|o<<f|u,hs=p+n}else cs=1<<p|o<<f|u,hs=n}function Id(n){n.return!==null&&(la(n,1),$g(n,1,0))}function Nd(n){for(;n===Qc;)Qc=fo[--po],fo[po]=null,Yc=fo[--po],fo[po]=null;for(;n===oa;)oa=ti[--ni],ti[ni]=null,hs=ti[--ni],ti[ni]=null,cs=ti[--ni],ti[ni]=null}var Cn=null,nn=null,Ze=!1,mi=null,Pi=!1,Dd=Error(s(519));function ua(n){var r=Error(s(418,""));throw zl(ei(r,n)),Dd}function Xg(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[Ft]=n,r[Mt]=u,o){case"dialog":He("cancel",r),He("close",r);break;case"iframe":case"object":case"embed":He("load",r);break;case"video":case"audio":for(o=0;o<hu.length;o++)He(hu[o],r);break;case"source":He("error",r);break;case"img":case"image":case"link":He("error",r),He("load",r);break;case"details":He("toggle",r);break;case"input":He("invalid",r),$r(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Yr(r);break;case"select":He("invalid",r);break;case"textarea":He("invalid",r),Xs(r,u.value,u.defaultValue,u.children),Yr(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||aE(r.textContent,o)?(u.popover!=null&&(He("beforetoggle",r),He("toggle",r)),u.onScroll!=null&&He("scroll",r),u.onScrollEnd!=null&&He("scrollend",r),u.onClick!=null&&(r.onclick=Rh),r=!0):r=!1,r||ua(n)}function Zg(n){for(Cn=n.return;Cn;)switch(Cn.tag){case 3:case 27:Pi=!0;return;case 5:case 13:Pi=!1;return;default:Cn=Cn.return}}function jl(n){if(n!==Cn)return!1;if(!Ze)return Zg(n),Ze=!0,!1;var r=!1,o;if((o=n.tag!==3&&n.tag!==27)&&((o=n.tag===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||$p(n.type,n.memoizedProps)),o=!o),o&&(r=!0),r&&nn&&ua(n),Zg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(r===0){nn=yi(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;n=n.nextSibling}nn=null}}else nn=Cn?yi(n.stateNode.nextSibling):null;return!0}function Bl(){nn=Cn=null,Ze=!1}function zl(n){mi===null?mi=[n]:mi.push(n)}var Hl=Error(s(460)),Jg=Error(s(474)),Od={then:function(){}};function ey(n){return n=n.status,n==="fulfilled"||n==="rejected"}function $c(){}function ty(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then($c,$c),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,n===Hl?Error(s(483)):n;default:if(typeof r.status=="string")r.then($c,$c);else{if(n=ct,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,n===Hl?Error(s(483)):n}throw Fl=r,Hl}}var Fl=null;function ny(){if(Fl===null)throw Error(s(459));var n=Fl;return Fl=null,n}var _o=null,ql=0;function Xc(n){var r=ql;return ql+=1,_o===null&&(_o=[]),ty(_o,n,r)}function Gl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Zc(n,r){throw r.$$typeof===l?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function iy(n){var r=n._init;return r(n._payload)}function sy(n){function r(j,V){if(n){var z=j.deletions;z===null?(j.deletions=[V],j.flags|=16):z.push(V)}}function o(j,V){if(!n)return null;for(;V!==null;)r(j,V),V=V.sibling;return null}function u(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function f(j,V){return j=hr(j,V),j.index=0,j.sibling=null,j}function p(j,V,z){return j.index=z,n?(z=j.alternate,z!==null?(z=z.index,z<V?(j.flags|=33554434,V):z):(j.flags|=33554434,V)):(j.flags|=1048576,V)}function v(j){return n&&j.alternate===null&&(j.flags|=33554434),j}function A(j,V,z,$){return V===null||V.tag!==6?(V=bp(z,j.mode,$),V.return=j,V):(V=f(V,z),V.return=j,V)}function I(j,V,z,$){var me=z.type;return me===_?W(j,V,z.props.children,$,z.key):V!==null&&(V.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===Y&&iy(me)===V.type)?(V=f(V,z.props),Gl(V,z),V.return=j,V):(V=mh(z.type,z.key,z.props,null,j.mode,$),Gl(V,z),V.return=j,V)}function L(j,V,z,$){return V===null||V.tag!==4||V.stateNode.containerInfo!==z.containerInfo||V.stateNode.implementation!==z.implementation?(V=Cp(z,j.mode,$),V.return=j,V):(V=f(V,z.children||[]),V.return=j,V)}function W(j,V,z,$,me){return V===null||V.tag!==7?(V=va(z,j.mode,$,me),V.return=j,V):(V=f(V,z),V.return=j,V)}function ee(j,V,z){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=bp(""+V,j.mode,z),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case c:return z=mh(V.type,V.key,V.props,null,j.mode,z),Gl(z,V),z.return=j,z;case d:return V=Cp(V,j.mode,z),V.return=j,V;case Y:var $=V._init;return V=$(V._payload),ee(j,V,z)}if(se(V)||Ce(V))return V=va(V,j.mode,z,null),V.return=j,V;if(typeof V.then=="function")return ee(j,Xc(V),z);if(V.$$typeof===P)return ee(j,dh(j,V),z);Zc(j,V)}return null}function H(j,V,z,$){var me=V!==null?V.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return me!==null?null:A(j,V,""+z,$);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case c:return z.key===me?I(j,V,z,$):null;case d:return z.key===me?L(j,V,z,$):null;case Y:return me=z._init,z=me(z._payload),H(j,V,z,$)}if(se(z)||Ce(z))return me!==null?null:W(j,V,z,$,null);if(typeof z.then=="function")return H(j,V,Xc(z),$);if(z.$$typeof===P)return H(j,V,dh(j,z),$);Zc(j,z)}return null}function K(j,V,z,$,me){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return j=j.get(z)||null,A(V,j,""+$,me);if(typeof $=="object"&&$!==null){switch($.$$typeof){case c:return j=j.get($.key===null?z:$.key)||null,I(V,j,$,me);case d:return j=j.get($.key===null?z:$.key)||null,L(V,j,$,me);case Y:var Ve=$._init;return $=Ve($._payload),K(j,V,z,$,me)}if(se($)||Ce($))return j=j.get(z)||null,W(V,j,$,me,null);if(typeof $.then=="function")return K(j,V,z,Xc($),me);if($.$$typeof===P)return K(j,V,z,dh(V,$),me);Zc(V,$)}return null}function ve(j,V,z,$){for(var me=null,Ve=null,Ee=V,we=V=0,Qt=null;Ee!==null&&we<z.length;we++){Ee.index>we?(Qt=Ee,Ee=null):Qt=Ee.sibling;var Je=H(j,Ee,z[we],$);if(Je===null){Ee===null&&(Ee=Qt);break}n&&Ee&&Je.alternate===null&&r(j,Ee),V=p(Je,V,we),Ve===null?me=Je:Ve.sibling=Je,Ve=Je,Ee=Qt}if(we===z.length)return o(j,Ee),Ze&&la(j,we),me;if(Ee===null){for(;we<z.length;we++)Ee=ee(j,z[we],$),Ee!==null&&(V=p(Ee,V,we),Ve===null?me=Ee:Ve.sibling=Ee,Ve=Ee);return Ze&&la(j,we),me}for(Ee=u(Ee);we<z.length;we++)Qt=K(Ee,j,we,z[we],$),Qt!==null&&(n&&Qt.alternate!==null&&Ee.delete(Qt.key===null?we:Qt.key),V=p(Qt,V,we),Ve===null?me=Qt:Ve.sibling=Qt,Ve=Qt);return n&&Ee.forEach(function(yr){return r(j,yr)}),Ze&&la(j,we),me}function De(j,V,z,$){if(z==null)throw Error(s(151));for(var me=null,Ve=null,Ee=V,we=V=0,Qt=null,Je=z.next();Ee!==null&&!Je.done;we++,Je=z.next()){Ee.index>we?(Qt=Ee,Ee=null):Qt=Ee.sibling;var yr=H(j,Ee,Je.value,$);if(yr===null){Ee===null&&(Ee=Qt);break}n&&Ee&&yr.alternate===null&&r(j,Ee),V=p(yr,V,we),Ve===null?me=yr:Ve.sibling=yr,Ve=yr,Ee=Qt}if(Je.done)return o(j,Ee),Ze&&la(j,we),me;if(Ee===null){for(;!Je.done;we++,Je=z.next())Je=ee(j,Je.value,$),Je!==null&&(V=p(Je,V,we),Ve===null?me=Je:Ve.sibling=Je,Ve=Je);return Ze&&la(j,we),me}for(Ee=u(Ee);!Je.done;we++,Je=z.next())Je=K(Ee,j,we,Je.value,$),Je!==null&&(n&&Je.alternate!==null&&Ee.delete(Je.key===null?we:Je.key),V=p(Je,V,we),Ve===null?me=Je:Ve.sibling=Je,Ve=Je);return n&&Ee.forEach(function(JC){return r(j,JC)}),Ze&&la(j,we),me}function At(j,V,z,$){if(typeof z=="object"&&z!==null&&z.type===_&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case c:e:{for(var me=z.key;V!==null;){if(V.key===me){if(me=z.type,me===_){if(V.tag===7){o(j,V.sibling),$=f(V,z.props.children),$.return=j,j=$;break e}}else if(V.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===Y&&iy(me)===V.type){o(j,V.sibling),$=f(V,z.props),Gl($,z),$.return=j,j=$;break e}o(j,V);break}else r(j,V);V=V.sibling}z.type===_?($=va(z.props.children,j.mode,$,z.key),$.return=j,j=$):($=mh(z.type,z.key,z.props,null,j.mode,$),Gl($,z),$.return=j,j=$)}return v(j);case d:e:{for(me=z.key;V!==null;){if(V.key===me)if(V.tag===4&&V.stateNode.containerInfo===z.containerInfo&&V.stateNode.implementation===z.implementation){o(j,V.sibling),$=f(V,z.children||[]),$.return=j,j=$;break e}else{o(j,V);break}else r(j,V);V=V.sibling}$=Cp(z,j.mode,$),$.return=j,j=$}return v(j);case Y:return me=z._init,z=me(z._payload),At(j,V,z,$)}if(se(z))return ve(j,V,z,$);if(Ce(z)){if(me=Ce(z),typeof me!="function")throw Error(s(150));return z=me.call(z),De(j,V,z,$)}if(typeof z.then=="function")return At(j,V,Xc(z),$);if(z.$$typeof===P)return At(j,V,dh(j,z),$);Zc(j,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,V!==null&&V.tag===6?(o(j,V.sibling),$=f(V,z),$.return=j,j=$):(o(j,V),$=bp(z,j.mode,$),$.return=j,j=$),v(j)):o(j,V)}return function(j,V,z,$){try{ql=0;var me=At(j,V,z,$);return _o=null,me}catch(Ee){if(Ee===Hl)throw Ee;var Ve=ai(29,Ee,null,j.mode);return Ve.lanes=$,Ve.return=j,Ve}finally{}}}var ca=sy(!0),ry=sy(!1),mo=Te(null),Jc=Te(0);function ay(n,r){n=Ss,et(Jc,n),et(mo,r),Ss=n|r.baseLanes}function xd(){et(Jc,Ss),et(mo,mo.current)}function kd(){Ss=Jc.current,_t(mo),_t(Jc)}var ii=Te(null),Vi=null;function er(n){var r=n.alternate;et(Lt,Lt.current&1),et(ii,n),Vi===null&&(r===null||mo.current!==null||r.memoizedState!==null)&&(Vi=n)}function oy(n){if(n.tag===22){if(et(Lt,Lt.current),et(ii,n),Vi===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(Vi=n)}}else tr()}function tr(){et(Lt,Lt.current),et(ii,ii.current)}function fs(n){_t(ii),Vi===n&&(Vi=null),_t(Lt)}var Lt=Te(0);function eh(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Bb=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},zb=i.unstable_scheduleCallback,Hb=i.unstable_NormalPriority,Ut={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Md(){return{controller:new Bb,data:new Map,refCount:0}}function Kl(n){n.refCount--,n.refCount===0&&zb(Hb,function(){n.controller.abort()})}var Wl=null,Pd=0,go=0,yo=null;function Fb(n,r){if(Wl===null){var o=Wl=[];Pd=0,go=zp(),yo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Pd++,r.then(ly,ly),r}function ly(){if(--Pd===0&&Wl!==null){yo!==null&&(yo.status="fulfilled");var n=Wl;Wl=null,go=0,yo=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function qb(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var uy=b.S;b.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&Fb(n,r),uy!==null&&uy(n,r)};var ha=Te(null);function Vd(){var n=ha.current;return n!==null?n:ct.pooledCache}function th(n,r){r===null?et(ha,ha.current):et(ha,r.pool)}function cy(){var n=Vd();return n===null?null:{parent:Ut._currentValue,pool:n}}var nr=0,Pe=null,st=null,Dt=null,nh=!1,vo=!1,fa=!1,ih=0,Ql=0,Eo=null,Gb=0;function It(){throw Error(s(321))}function Ld(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!Ln(n[o],r[o]))return!1;return!0}function Ud(n,r,o,u,f,p){return nr=p,Pe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,b.H=n===null||n.memoizedState===null?da:ir,fa=!1,p=o(u,f),fa=!1,vo&&(p=fy(r,o,u,f)),hy(n),p}function hy(n){b.H=Li;var r=st!==null&&st.next!==null;if(nr=0,Dt=st=Pe=null,nh=!1,Ql=0,Eo=null,r)throw Error(s(300));n===null||Kt||(n=n.dependencies,n!==null&&fh(n)&&(Kt=!0))}function fy(n,r,o,u){Pe=n;var f=0;do{if(vo&&(Eo=null),Ql=0,vo=!1,25<=f)throw Error(s(301));if(f+=1,Dt=st=null,n.updateQueue!=null){var p=n.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}b.H=pa,p=r(o,u)}while(vo);return p}function Kb(){var n=b.H,r=n.useState()[0];return r=typeof r.then=="function"?Yl(r):r,n=n.useState()[0],(st!==null?st.memoizedState:null)!==n&&(Pe.flags|=1024),r}function jd(){var n=ih!==0;return ih=0,n}function Bd(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function zd(n){if(nh){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}nh=!1}nr=0,Dt=st=Pe=null,vo=!1,Ql=ih=0,Eo=null}function Nn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?Pe.memoizedState=Dt=n:Dt=Dt.next=n,Dt}function Ot(){if(st===null){var n=Pe.alternate;n=n!==null?n.memoizedState:null}else n=st.next;var r=Dt===null?Pe.memoizedState:Dt.next;if(r!==null)Dt=r,st=n;else{if(n===null)throw Pe.alternate===null?Error(s(467)):Error(s(310));st=n,n={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},Dt===null?Pe.memoizedState=Dt=n:Dt=Dt.next=n}return Dt}var sh;sh=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Yl(n){var r=Ql;return Ql+=1,Eo===null&&(Eo=[]),n=ty(Eo,n,r),r=Pe,(Dt===null?r.memoizedState:Dt.next)===null&&(r=r.alternate,b.H=r===null||r.memoizedState===null?da:ir),n}function rh(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Yl(n);if(n.$$typeof===P)return dn(n)}throw Error(s(438,String(n)))}function Hd(n){var r=null,o=Pe.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Pe.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=sh(),Pe.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=fe;return r.index++,o}function ds(n,r){return typeof r=="function"?r(n):r}function ah(n){var r=Ot();return Fd(r,st,n)}function Fd(n,r,o){var u=n.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=n.baseQueue,p=u.pending;if(p!==null){if(f!==null){var v=f.next;f.next=p.next,p.next=v}r.baseQueue=f=p,u.pending=null}if(p=n.baseState,f===null)n.memoizedState=p;else{r=f.next;var A=v=null,I=null,L=r,W=!1;do{var ee=L.lane&-536870913;if(ee!==L.lane?(We&ee)===ee:(nr&ee)===ee){var H=L.revertLane;if(H===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),ee===go&&(W=!0);else if((nr&H)===H){L=L.next,H===go&&(W=!0);continue}else ee={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},I===null?(A=I=ee,v=p):I=I.next=ee,Pe.lanes|=H,fr|=H;ee=L.action,fa&&o(p,ee),p=L.hasEagerState?L.eagerState:o(p,ee)}else H={lane:ee,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},I===null?(A=I=H,v=p):I=I.next=H,Pe.lanes|=ee,fr|=ee;L=L.next}while(L!==null&&L!==r);if(I===null?v=p:I.next=A,!Ln(p,n.memoizedState)&&(Kt=!0,W&&(o=yo,o!==null)))throw o;n.memoizedState=p,n.baseState=v,n.baseQueue=I,u.lastRenderedState=p}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function qd(n){var r=Ot(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,p=r.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do p=n(p,v.action),v=v.next;while(v!==f);Ln(p,r.memoizedState)||(Kt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function dy(n,r,o){var u=Pe,f=Ot(),p=Ze;if(p){if(o===void 0)throw Error(s(407));o=o()}else o=r();var v=!Ln((st||f).memoizedState,o);if(v&&(f.memoizedState=o,Kt=!0),f=f.queue,Wd(my.bind(null,u,f,n),[n]),f.getSnapshot!==r||v||Dt!==null&&Dt.memoizedState.tag&1){if(u.flags|=2048,To(9,_y.bind(null,u,f,o,r),{destroy:void 0},null),ct===null)throw Error(s(349));p||(nr&60)!==0||py(u,r,o)}return o}function py(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Pe.updateQueue,r===null?(r=sh(),Pe.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function _y(n,r,o,u){r.value=o,r.getSnapshot=u,gy(r)&&yy(n)}function my(n,r,o){return o(function(){gy(r)&&yy(n)})}function gy(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!Ln(n,o)}catch{return!0}}function yy(n){var r=Js(n,2);r!==null&&Rn(r,n,2)}function Gd(n){var r=Nn();if(typeof n=="function"){var o=n;if(n=o(),fa){wi(!0);try{o()}finally{wi(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:n},r}function vy(n,r,o,u){return n.baseState=o,Fd(n,st,typeof u=="function"?u:ds)}function Wb(n,r,o,u,f){if(uh(n))throw Error(s(485));if(n=r.action,n!==null){var p={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){p.listeners.push(v)}};b.T!==null?o(!0):p.isTransition=!1,u(p),o=r.pending,o===null?(p.next=r.pending=p,Ey(r,p)):(p.next=o.next,r.pending=o.next=p)}}function Ey(n,r){var o=r.action,u=r.payload,f=n.state;if(r.isTransition){var p=b.T,v={};b.T=v;try{var A=o(f,u),I=b.S;I!==null&&I(v,A),Ty(n,r,A)}catch(L){Kd(n,r,L)}finally{b.T=p}}else try{p=o(f,u),Ty(n,r,p)}catch(L){Kd(n,r,L)}}function Ty(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Sy(n,r,u)},function(u){return Kd(n,r,u)}):Sy(n,r,o)}function Sy(n,r,o){r.status="fulfilled",r.value=o,Ay(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,Ey(n,o)))}function Kd(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Ay(r),r=r.next;while(r!==u)}n.action=null}function Ay(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function wy(n,r){return r}function by(n,r){if(Ze){var o=ct.formState;if(o!==null){e:{var u=Pe;if(Ze){if(nn){t:{for(var f=nn,p=Pi;f.nodeType!==8;){if(!p){f=null;break t}if(f=yi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){nn=yi(f.nextSibling),u=f.data==="F!";break e}}ua(u)}u=!1}u&&(r=o[0])}}return o=Nn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wy,lastRenderedState:r},o.queue=u,o=Fy.bind(null,Pe,u),u.dispatch=o,u=Gd(!1),p=Zd.bind(null,Pe,!1,u.queue),u=Nn(),f={state:r,dispatch:null,action:n,pending:null},u.queue=f,o=Wb.bind(null,Pe,f,p,o),f.dispatch=o,u.memoizedState=n,[r,o,!1]}function Cy(n){var r=Ot();return Ry(r,st,n)}function Ry(n,r,o){r=Fd(n,r,wy)[0],n=ah(ds)[0],r=typeof r=="object"&&r!==null&&typeof r.then=="function"?Yl(r):r;var u=Ot(),f=u.queue,p=f.dispatch;return o!==u.memoizedState&&(Pe.flags|=2048,To(9,Qb.bind(null,f,o),{destroy:void 0},null)),[r,p,n]}function Qb(n,r){n.action=r}function Iy(n){var r=Ot(),o=st;if(o!==null)return Ry(r,o,n);Ot(),r=r.memoizedState,o=Ot();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function To(n,r,o,u){return n={tag:n,create:r,inst:o,deps:u,next:null},r=Pe.updateQueue,r===null&&(r=sh(),Pe.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function Ny(){return Ot().memoizedState}function oh(n,r,o,u){var f=Nn();Pe.flags|=n,f.memoizedState=To(1|r,o,{destroy:void 0},u===void 0?null:u)}function lh(n,r,o,u){var f=Ot();u=u===void 0?null:u;var p=f.memoizedState.inst;st!==null&&u!==null&&Ld(u,st.memoizedState.deps)?f.memoizedState=To(r,o,p,u):(Pe.flags|=n,f.memoizedState=To(1|r,o,p,u))}function Dy(n,r){oh(8390656,8,n,r)}function Wd(n,r){lh(2048,8,n,r)}function Oy(n,r){return lh(4,2,n,r)}function xy(n,r){return lh(4,4,n,r)}function ky(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function My(n,r,o){o=o!=null?o.concat([n]):null,lh(4,4,ky.bind(null,r,n),o)}function Qd(){}function Py(n,r){var o=Ot();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Ld(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Vy(n,r){var o=Ot();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Ld(r,u[1]))return u[0];if(u=n(),fa){wi(!0);try{n()}finally{wi(!1)}}return o.memoizedState=[u,r],u}function Yd(n,r,o){return o===void 0||(nr&1073741824)!==0?n.memoizedState=r:(n.memoizedState=o,n=Uv(),Pe.lanes|=n,fr|=n,o)}function Ly(n,r,o,u){return Ln(o,r)?o:mo.current!==null?(n=Yd(n,o,u),Ln(n,r)||(Kt=!0),n):(nr&42)===0?(Kt=!0,n.memoizedState=o):(n=Uv(),Pe.lanes|=n,fr|=n,r)}function Uy(n,r,o,u,f){var p=ne.p;ne.p=p!==0&&8>p?p:8;var v=b.T,A={};b.T=A,Zd(n,!1,r,o);try{var I=f(),L=b.S;if(L!==null&&L(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var W=qb(I,u);$l(n,r,W,zn(n))}else $l(n,r,u,zn(n))}catch(ee){$l(n,r,{then:function(){},status:"rejected",reason:ee},zn())}finally{ne.p=p,b.T=v}}function Yb(){}function $d(n,r,o,u){if(n.tag!==5)throw Error(s(476));var f=jy(n).queue;Uy(n,f,r,ge,o===null?Yb:function(){return By(n),o(u)})}function jy(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:ge,baseState:ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:ge},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function By(n){var r=jy(n).next.queue;$l(n,r,{},zn())}function Xd(){return dn(mu)}function zy(){return Ot().memoizedState}function Hy(){return Ot().memoizedState}function $b(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=zn();n=ar(o);var u=or(r,n,o);u!==null&&(Rn(u,r,o),Jl(u,r,o)),r={cache:Md()},n.payload=r;return}r=r.return}}function Xb(n,r,o){var u=zn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},uh(n)?qy(r,o):(o=Rd(n,r,o,u),o!==null&&(Rn(o,n,u),Gy(o,r,u)))}function Fy(n,r,o){var u=zn();$l(n,r,o,u)}function $l(n,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(uh(n))qy(r,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,A=p(v,o);if(f.hasEagerState=!0,f.eagerState=A,Ln(A,v))return Kc(n,r,f,0),ct===null&&Gc(),!1}catch{}finally{}if(o=Rd(n,r,f,u),o!==null)return Rn(o,n,u),Gy(o,r,u),!0}return!1}function Zd(n,r,o,u){if(u={lane:2,revertLane:zp(),action:u,hasEagerState:!1,eagerState:null,next:null},uh(n)){if(r)throw Error(s(479))}else r=Rd(n,o,u,2),r!==null&&Rn(r,n,2)}function uh(n){var r=n.alternate;return n===Pe||r!==null&&r===Pe}function qy(n,r){vo=nh=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Gy(n,r,o){if((o&4194176)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Fs(n,o)}}var Li={readContext:dn,use:rh,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useLayoutEffect:It,useInsertionEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useSyncExternalStore:It,useId:It};Li.useCacheRefresh=It,Li.useMemoCache=It,Li.useHostTransitionStatus=It,Li.useFormState=It,Li.useActionState=It,Li.useOptimistic=It;var da={readContext:dn,use:rh,useCallback:function(n,r){return Nn().memoizedState=[n,r===void 0?null:r],n},useContext:dn,useEffect:Dy,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,oh(4194308,4,ky.bind(null,r,n),o)},useLayoutEffect:function(n,r){return oh(4194308,4,n,r)},useInsertionEffect:function(n,r){oh(4,2,n,r)},useMemo:function(n,r){var o=Nn();r=r===void 0?null:r;var u=n();if(fa){wi(!0);try{n()}finally{wi(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=Nn();if(o!==void 0){var f=o(r);if(fa){wi(!0);try{o(r)}finally{wi(!1)}}}else f=r;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=Xb.bind(null,Pe,n),[u.memoizedState,n]},useRef:function(n){var r=Nn();return n={current:n},r.memoizedState=n},useState:function(n){n=Gd(n);var r=n.queue,o=Fy.bind(null,Pe,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:Qd,useDeferredValue:function(n,r){var o=Nn();return Yd(o,n,r)},useTransition:function(){var n=Gd(!1);return n=Uy.bind(null,Pe,n.queue,!0,!1),Nn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=Pe,f=Nn();if(Ze){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ct===null)throw Error(s(349));(We&60)!==0||py(u,r,o)}f.memoizedState=o;var p={value:o,getSnapshot:r};return f.queue=p,Dy(my.bind(null,u,p,n),[n]),u.flags|=2048,To(9,_y.bind(null,u,p,o,r),{destroy:void 0},null),o},useId:function(){var n=Nn(),r=ct.identifierPrefix;if(Ze){var o=hs,u=cs;o=(u&~(1<<32-An(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=ih++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Gb++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},useCacheRefresh:function(){return Nn().memoizedState=$b.bind(null,Pe)}};da.useMemoCache=Hd,da.useHostTransitionStatus=Xd,da.useFormState=by,da.useActionState=by,da.useOptimistic=function(n){var r=Nn();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Zd.bind(null,Pe,!0,o),o.dispatch=r,[n,r]};var ir={readContext:dn,use:rh,useCallback:Py,useContext:dn,useEffect:Wd,useImperativeHandle:My,useInsertionEffect:Oy,useLayoutEffect:xy,useMemo:Vy,useReducer:ah,useRef:Ny,useState:function(){return ah(ds)},useDebugValue:Qd,useDeferredValue:function(n,r){var o=Ot();return Ly(o,st.memoizedState,n,r)},useTransition:function(){var n=ah(ds)[0],r=Ot().memoizedState;return[typeof n=="boolean"?n:Yl(n),r]},useSyncExternalStore:dy,useId:zy};ir.useCacheRefresh=Hy,ir.useMemoCache=Hd,ir.useHostTransitionStatus=Xd,ir.useFormState=Cy,ir.useActionState=Cy,ir.useOptimistic=function(n,r){var o=Ot();return vy(o,st,n,r)};var pa={readContext:dn,use:rh,useCallback:Py,useContext:dn,useEffect:Wd,useImperativeHandle:My,useInsertionEffect:Oy,useLayoutEffect:xy,useMemo:Vy,useReducer:qd,useRef:Ny,useState:function(){return qd(ds)},useDebugValue:Qd,useDeferredValue:function(n,r){var o=Ot();return st===null?Yd(o,n,r):Ly(o,st.memoizedState,n,r)},useTransition:function(){var n=qd(ds)[0],r=Ot().memoizedState;return[typeof n=="boolean"?n:Yl(n),r]},useSyncExternalStore:dy,useId:zy};pa.useCacheRefresh=Hy,pa.useMemoCache=Hd,pa.useHostTransitionStatus=Xd,pa.useFormState=Iy,pa.useActionState=Iy,pa.useOptimistic=function(n,r){var o=Ot();return st!==null?vy(o,st,n,r):(o.baseState=n,[n,o.queue.dispatch])};function Jd(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:D({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ep={isMounted:function(n){return(n=n._reactInternals)?ce(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=zn(),f=ar(u);f.payload=r,o!=null&&(f.callback=o),r=or(n,f,u),r!==null&&(Rn(r,n,u),Jl(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=zn(),f=ar(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=or(n,f,u),r!==null&&(Rn(r,n,u),Jl(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=zn(),u=ar(o);u.tag=2,r!=null&&(u.callback=r),r=or(n,u,o),r!==null&&(Rn(r,n,o),Jl(r,n,o))}};function Ky(n,r,o,u,f,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,v):r.prototype&&r.prototype.isPureReactComponent?!Ll(o,u)||!Ll(f,p):!0}function Wy(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&ep.enqueueReplaceState(r,r.state,null)}function _a(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=D({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var ch=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Qy(n){ch(n)}function Yy(n){console.error(n)}function $y(n){ch(n)}function hh(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function Xy(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function tp(n,r,o){return o=ar(o),o.tag=3,o.payload={element:null},o.callback=function(){hh(n,r)},o}function Zy(n){return n=ar(n),n.tag=3,n}function Jy(n,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var p=u.value;n.payload=function(){return f(p)},n.callback=function(){Xy(r,o,u)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(n.callback=function(){Xy(r,o,u),typeof f!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var A=u.stack;this.componentDidCatch(u.value,{componentStack:A!==null?A:""})})}function Zb(n,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Zl(r,o,f,!0),o=ii.current,o!==null){switch(o.tag){case 13:return Vi===null?Vp():o.alternate===null&&St===0&&(St=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Od?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Up(n,u,f)),!1;case 22:return o.flags|=65536,u===Od?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Up(n,u,f)),!1}throw Error(s(435,o.tag))}return Up(n,u,f),Vp(),!1}if(Ze)return r=ii.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Dd&&(n=Error(s(422),{cause:u}),zl(ei(n,o)))):(u!==Dd&&(r=Error(s(423),{cause:u}),zl(ei(r,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=ei(u,o),f=tp(n.stateNode,u,f),mp(n,f),St!==4&&(St=2)),!1;var p=Error(s(520),{cause:u});if(p=ei(p,o),ou===null?ou=[p]:ou.push(p),St!==4&&(St=2),r===null)return!0;u=ei(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=tp(o.stateNode,u,n),mp(o,n),!1;case 1:if(r=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(dr===null||!dr.has(p))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Zy(f),Jy(f,n,o,u),mp(o,f),!1}o=o.return}while(o!==null);return!1}var ev=Error(s(461)),Kt=!1;function sn(n,r,o,u){r.child=n===null?ry(r,null,o,u):ca(r,n.child,o,u)}function tv(n,r,o,u,f){o=o.render;var p=r.ref;if("ref"in u){var v={};for(var A in u)A!=="ref"&&(v[A]=u[A])}else v=u;return ga(r),u=Ud(n,r,o,v,p,f),A=jd(),n!==null&&!Kt?(Bd(n,r,f),ps(n,r,f)):(Ze&&A&&Id(r),r.flags|=1,sn(n,r,u,f),r.child)}function nv(n,r,o,u,f){if(n===null){var p=o.type;return typeof p=="function"&&!wp(p)&&p.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=p,iv(n,r,p,u,f)):(n=mh(o.type,null,u,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!cp(n,f)){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:Ll,o(v,u)&&n.ref===r.ref)return ps(n,r,f)}return r.flags|=1,n=hr(p,u),n.ref=r.ref,n.return=r,r.child=n}function iv(n,r,o,u,f){if(n!==null){var p=n.memoizedProps;if(Ll(p,u)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=u=p,cp(n,f))(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,ps(n,r,f)}return np(n,r,o,u,f)}function sv(n,r,o){var u=r.pendingProps,f=u.children,p=(r.stateNode._pendingVisibility&2)!==0,v=n!==null?n.memoizedState:null;if(Xl(n,r),u.mode==="hidden"||p){if((r.flags&128)!==0){if(u=v!==null?v.baseLanes|o:o,n!==null){for(f=r.child=n.child,p=0;f!==null;)p=p|f.lanes|f.childLanes,f=f.sibling;r.childLanes=p&~u}else r.childLanes=0,r.child=null;return rv(n,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&th(r,v!==null?v.cachePool:null),v!==null?ay(r,v):xd(),oy(r);else return r.lanes=r.childLanes=536870912,rv(n,r,v!==null?v.baseLanes|o:o,o)}else v!==null?(th(r,v.cachePool),ay(r,v),tr(),r.memoizedState=null):(n!==null&&th(r,null),xd(),tr());return sn(n,r,f,o),r.child}function rv(n,r,o,u){var f=Vd();return f=f===null?null:{parent:Ut._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},n!==null&&th(r,null),xd(),oy(r),n!==null&&Zl(n,r,u,!0),null}function Xl(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=2097664);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(n===null||n.ref!==o)&&(r.flags|=2097664)}}function np(n,r,o,u,f){return ga(r),o=Ud(n,r,o,u,void 0,f),u=jd(),n!==null&&!Kt?(Bd(n,r,f),ps(n,r,f)):(Ze&&u&&Id(r),r.flags|=1,sn(n,r,o,f),r.child)}function av(n,r,o,u,f,p){return ga(r),r.updateQueue=null,o=fy(r,u,o,f),hy(n),u=jd(),n!==null&&!Kt?(Bd(n,r,p),ps(n,r,p)):(Ze&&u&&Id(r),r.flags|=1,sn(n,r,o,p),r.child)}function ov(n,r,o,u,f){if(ga(r),r.stateNode===null){var p=ho,v=o.contextType;typeof v=="object"&&v!==null&&(p=dn(v)),p=new o(u,p),r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=ep,r.stateNode=p,p._reactInternals=r,p=r.stateNode,p.props=u,p.state=r.memoizedState,p.refs={},pp(r),v=o.contextType,p.context=typeof v=="object"&&v!==null?dn(v):ho,p.state=r.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Jd(r,o,v,u),p.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(v=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),v!==p.state&&ep.enqueueReplaceState(p,p.state,null),tu(r,u,p,f),eu(),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){p=r.stateNode;var A=r.memoizedProps,I=_a(o,A);p.props=I;var L=p.context,W=o.contextType;v=ho,typeof W=="object"&&W!==null&&(v=dn(W));var ee=o.getDerivedStateFromProps;W=typeof ee=="function"||typeof p.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,W||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(A||L!==v)&&Wy(r,p,u,v),rr=!1;var H=r.memoizedState;p.state=H,tu(r,u,p,f),eu(),L=r.memoizedState,A||H!==L||rr?(typeof ee=="function"&&(Jd(r,o,ee,u),L=r.memoizedState),(I=rr||Ky(r,o,I,u,H,L,v))?(W||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=L),p.props=u,p.state=L,p.context=v,u=I):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{p=r.stateNode,_p(n,r),v=r.memoizedProps,W=_a(o,v),p.props=W,ee=r.pendingProps,H=p.context,L=o.contextType,I=ho,typeof L=="object"&&L!==null&&(I=dn(L)),A=o.getDerivedStateFromProps,(L=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(v!==ee||H!==I)&&Wy(r,p,u,I),rr=!1,H=r.memoizedState,p.state=H,tu(r,u,p,f),eu();var K=r.memoizedState;v!==ee||H!==K||rr||n!==null&&n.dependencies!==null&&fh(n.dependencies)?(typeof A=="function"&&(Jd(r,o,A,u),K=r.memoizedState),(W=rr||Ky(r,o,W,u,H,K,I)||n!==null&&n.dependencies!==null&&fh(n.dependencies))?(L||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,K,I),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,K,I)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||v===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=K),p.props=u,p.state=K,p.context=I,u=W):(typeof p.componentDidUpdate!="function"||v===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),u=!1)}return p=u,Xl(n,r),u=(r.flags&128)!==0,p||u?(p=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),r.flags|=1,n!==null&&u?(r.child=ca(r,n.child,null,f),r.child=ca(r,null,o,f)):sn(n,r,o,f),r.memoizedState=p.state,n=r.child):n=ps(n,r,f),n}function lv(n,r,o,u){return Bl(),r.flags|=256,sn(n,r,o,u),r.child}var ip={dehydrated:null,treeContext:null,retryLane:0};function sp(n){return{baseLanes:n,cachePool:cy()}}function rp(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=oi),n}function uv(n,r,o){var u=r.pendingProps,f=!1,p=(r.flags&128)!==0,v;if((v=p)||(v=n!==null&&n.memoizedState===null?!1:(Lt.current&2)!==0),v&&(f=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,n===null){if(Ze){if(f?er(r):tr(),Ze){var A=nn,I;if(I=A){e:{for(I=A,A=Pi;I.nodeType!==8;){if(!A){A=null;break e}if(I=yi(I.nextSibling),I===null){A=null;break e}}A=I}A!==null?(r.memoizedState={dehydrated:A,treeContext:oa!==null?{id:cs,overflow:hs}:null,retryLane:536870912},I=ai(18,null,null,0),I.stateNode=A,I.return=r,r.child=I,Cn=r,nn=null,I=!0):I=!1}I||ua(r)}if(A=r.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?r.lanes=16:r.lanes=536870912,null;fs(r)}return A=u.children,u=u.fallback,f?(tr(),f=r.mode,A=op({mode:"hidden",children:A},f),u=va(u,f,o,null),A.return=r,u.return=r,A.sibling=u,r.child=A,f=r.child,f.memoizedState=sp(o),f.childLanes=rp(n,v,o),r.memoizedState=ip,u):(er(r),ap(r,A))}if(I=n.memoizedState,I!==null&&(A=I.dehydrated,A!==null)){if(p)r.flags&256?(er(r),r.flags&=-257,r=lp(n,r,o)):r.memoizedState!==null?(tr(),r.child=n.child,r.flags|=128,r=null):(tr(),f=u.fallback,A=r.mode,u=op({mode:"visible",children:u.children},A),f=va(f,A,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,ca(r,n.child,null,o),u=r.child,u.memoizedState=sp(o),u.childLanes=rp(n,v,o),r.memoizedState=ip,r=f);else if(er(r),A.data==="$!"){if(v=A.nextSibling&&A.nextSibling.dataset,v)var L=v.dgst;v=L,u=Error(s(419)),u.stack="",u.digest=v,zl({value:u,source:null,stack:null}),r=lp(n,r,o)}else if(Kt||Zl(n,r,o,!1),v=(o&n.childLanes)!==0,Kt||v){if(v=ct,v!==null){if(u=o&-o,(u&42)!==0)u=1;else switch(u){case 2:u=1;break;case 8:u=4;break;case 32:u=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:u=64;break;case 268435456:u=134217728;break;default:u=0}if(u=(u&(v.suspendedLanes|o))!==0?0:u,u!==0&&u!==I.retryLane)throw I.retryLane=u,Js(n,u),Rn(v,n,u),ev}A.data==="$?"||Vp(),r=lp(n,r,o)}else A.data==="$?"?(r.flags|=128,r.child=n.child,r=dC.bind(null,n),A._reactRetry=r,r=null):(n=I.treeContext,nn=yi(A.nextSibling),Cn=r,Ze=!0,mi=null,Pi=!1,n!==null&&(ti[ni++]=cs,ti[ni++]=hs,ti[ni++]=oa,cs=n.id,hs=n.overflow,oa=r),r=ap(r,u.children),r.flags|=4096);return r}return f?(tr(),f=u.fallback,A=r.mode,I=n.child,L=I.sibling,u=hr(I,{mode:"hidden",children:u.children}),u.subtreeFlags=I.subtreeFlags&31457280,L!==null?f=hr(L,f):(f=va(f,A,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,A=n.child.memoizedState,A===null?A=sp(o):(I=A.cachePool,I!==null?(L=Ut._currentValue,I=I.parent!==L?{parent:L,pool:L}:I):I=cy(),A={baseLanes:A.baseLanes|o,cachePool:I}),f.memoizedState=A,f.childLanes=rp(n,v,o),r.memoizedState=ip,u):(er(r),o=n.child,n=o.sibling,o=hr(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(v=r.deletions,v===null?(r.deletions=[n],r.flags|=16):v.push(n)),r.child=o,r.memoizedState=null,o)}function ap(n,r){return r=op({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function op(n,r){return Pv(n,r,0,null)}function lp(n,r,o){return ca(r,n.child,null,o),n=ap(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function cv(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),fp(n.return,r,o)}function up(n,r,o,u,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function hv(n,r,o){var u=r.pendingProps,f=u.revealOrder,p=u.tail;if(sn(n,r,u.children,o),u=Lt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&cv(n,o,r);else if(n.tag===19)cv(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(et(Lt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)n=o.alternate,n!==null&&eh(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),up(r,!1,f,o,p);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&eh(n)===null){r.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}up(r,!0,o,null,p);break;case"together":up(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ps(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),fr|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(Zl(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,o=hr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=hr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function cp(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&fh(n)))}function Jb(n,r,o){switch(r.tag){case 3:hi(r,r.stateNode.containerInfo),sr(r,Ut,n.memoizedState.cache),Bl();break;case 27:case 5:ie(r);break;case 4:hi(r,r.stateNode.containerInfo);break;case 10:sr(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(er(r),r.flags|=128,null):(o&r.child.childLanes)!==0?uv(n,r,o):(er(r),n=ps(n,r,o),n!==null?n.sibling:null);er(r);break;case 19:var f=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Zl(n,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return hv(n,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),et(Lt,Lt.current),u)break;return null;case 22:case 23:return r.lanes=0,sv(n,r,o);case 24:sr(r,Ut,n.memoizedState.cache)}return ps(n,r,o)}function fv(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)Kt=!0;else{if(!cp(n,o)&&(r.flags&128)===0)return Kt=!1,Jb(n,r,o);Kt=(n.flags&131072)!==0}else Kt=!1,Ze&&(r.flags&1048576)!==0&&$g(r,Yc,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")wp(u)?(n=_a(u,n),r.tag=1,r=ov(null,r,u,n,o)):(r.tag=0,r=np(null,r,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===q){r.tag=11,r=tv(null,r,u,n,o);break e}else if(f===X){r.tag=14,r=nv(null,r,u,n,o);break e}}throw r=C(u)||u,Error(s(306,r,""))}}return r;case 0:return np(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=_a(u,r.pendingProps),ov(n,r,u,f,o);case 3:e:{if(hi(r,r.stateNode.containerInfo),n===null)throw Error(s(387));var p=r.pendingProps;f=r.memoizedState,u=f.element,_p(n,r),tu(r,p,null,o);var v=r.memoizedState;if(p=v.cache,sr(r,Ut,p),p!==f.cache&&dp(r,[Ut],o,!0),eu(),p=v.element,f.isDehydrated)if(f={element:p,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=lv(n,r,p,o);break e}else if(p!==u){u=ei(Error(s(424)),r),zl(u),r=lv(n,r,p,o);break e}else for(nn=yi(r.stateNode.containerInfo.firstChild),Cn=r,Ze=!0,mi=null,Pi=!0,o=ry(r,null,p,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Bl(),p===u){r=ps(n,r,o);break e}sn(n,r,p,o)}r=r.child}return r;case 26:return Xl(n,r),n===null?(o=_E(r.type,null,r.pendingProps,null))?r.memoizedState=o:Ze||(o=r.type,n=r.pendingProps,u=Ih(Jt.current).createElement(o),u[Ft]=r,u[Mt]=n,rn(u,o,n),mt(u),r.stateNode=u):r.memoizedState=_E(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return ie(r),n===null&&Ze&&(u=r.stateNode=fE(r.type,r.pendingProps,Jt.current),Cn=r,Pi=!0,nn=yi(u.firstChild)),u=r.pendingProps.children,n!==null||Ze?sn(n,r,u,o):r.child=ca(r,null,u,o),Xl(n,r),r.child;case 5:return n===null&&Ze&&((f=u=nn)&&(u=NC(u,r.type,r.pendingProps,Pi),u!==null?(r.stateNode=u,Cn=r,nn=yi(u.firstChild),Pi=!1,f=!0):f=!1),f||ua(r)),ie(r),f=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,u=p.children,$p(f,p)?u=null:v!==null&&$p(f,v)&&(r.flags|=32),r.memoizedState!==null&&(f=Ud(n,r,Kb,null,null,o),mu._currentValue=f),Xl(n,r),sn(n,r,u,o),r.child;case 6:return n===null&&Ze&&((n=o=nn)&&(o=DC(o,r.pendingProps,Pi),o!==null?(r.stateNode=o,Cn=r,nn=null,n=!0):n=!1),n||ua(r)),null;case 13:return uv(n,r,o);case 4:return hi(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=ca(r,null,u,o):sn(n,r,u,o),r.child;case 11:return tv(n,r,r.type,r.pendingProps,o);case 7:return sn(n,r,r.pendingProps,o),r.child;case 8:return sn(n,r,r.pendingProps.children,o),r.child;case 12:return sn(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,sr(r,r.type,u.value),sn(n,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ga(r),f=dn(f),u=u(f),r.flags|=1,sn(n,r,u,o),r.child;case 14:return nv(n,r,r.type,r.pendingProps,o);case 15:return iv(n,r,r.type,r.pendingProps,o);case 19:return hv(n,r,o);case 22:return sv(n,r,o);case 24:return ga(r),u=dn(Ut),n===null?(f=Vd(),f===null&&(f=ct,p=Md(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=o),f=p),r.memoizedState={parent:u,cache:f},pp(r),sr(r,Ut,f)):((n.lanes&o)!==0&&(_p(n,r),tu(r,null,null,o),eu()),f=n.memoizedState,p=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),sr(r,Ut,u)):(u=p.cache,sr(r,Ut,u),u!==f.cache&&dp(r,[Ut],o,!0))),sn(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}var hp=Te(null),ma=null,_s=null;function sr(n,r,o){et(hp,r._currentValue),r._currentValue=o}function ms(n){n._currentValue=hp.current,_t(hp)}function fp(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function dp(n,r,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var p=f.dependencies;if(p!==null){var v=f.child;p=p.firstContext;e:for(;p!==null;){var A=p;p=f;for(var I=0;I<r.length;I++)if(A.context===r[I]){p.lanes|=o,A=p.alternate,A!==null&&(A.lanes|=o),fp(p.return,o,n),u||(v=null);break e}p=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(s(341));v.lanes|=o,p=v.alternate,p!==null&&(p.lanes|=o),fp(v,o,n),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===n){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Zl(n,r,o,u){n=null;for(var f=r,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var A=f.type;Ln(f.pendingProps.value,v.value)||(n!==null?n.push(A):n=[A])}}else if(f===Ai.current){if(v=f.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(mu):n=[mu])}f=f.return}n!==null&&dp(r,n,o,u),r.flags|=262144}function fh(n){for(n=n.firstContext;n!==null;){if(!Ln(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ga(n){ma=n,_s=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function dn(n){return dv(ma,n)}function dh(n,r){return ma===null&&ga(n),dv(n,r)}function dv(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},_s===null){if(n===null)throw Error(s(308));_s=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else _s=_s.next=r;return o}var rr=!1;function pp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _p(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ar(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function or(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(yt&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=Wc(n),Qg(n,null,o),r}return Kc(n,u,r,o),Wc(n)}function Jl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194176)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Fs(n,o)}}function mp(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?f=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?f=p=r:p=p.next=r}else f=p=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var gp=!1;function eu(){if(gp){var n=yo;if(n!==null)throw n}}function tu(n,r,o,u){gp=!1;var f=n.updateQueue;rr=!1;var p=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var I=A,L=I.next;I.next=null,v===null?p=L:v.next=L,v=I;var W=n.alternate;W!==null&&(W=W.updateQueue,A=W.lastBaseUpdate,A!==v&&(A===null?W.firstBaseUpdate=L:A.next=L,W.lastBaseUpdate=I))}if(p!==null){var ee=f.baseState;v=0,W=L=I=null,A=p;do{var H=A.lane&-536870913,K=H!==A.lane;if(K?(We&H)===H:(u&H)===H){H!==0&&H===go&&(gp=!0),W!==null&&(W=W.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var ve=n,De=A;H=r;var At=o;switch(De.tag){case 1:if(ve=De.payload,typeof ve=="function"){ee=ve.call(At,ee,H);break e}ee=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=De.payload,H=typeof ve=="function"?ve.call(At,ee,H):ve,H==null)break e;ee=D({},ee,H);break e;case 2:rr=!0}}H=A.callback,H!==null&&(n.flags|=64,K&&(n.flags|=8192),K=f.callbacks,K===null?f.callbacks=[H]:K.push(H))}else K={lane:H,tag:A.tag,payload:A.payload,callback:A.callback,next:null},W===null?(L=W=K,I=ee):W=W.next=K,v|=H;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;K=A,A=K.next,K.next=null,f.lastBaseUpdate=K,f.shared.pending=null}}while(!0);W===null&&(I=ee),f.baseState=I,f.firstBaseUpdate=L,f.lastBaseUpdate=W,p===null&&(f.shared.lanes=0),fr|=v,n.lanes=v,n.memoizedState=ee}}function pv(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function _v(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)pv(o[n],r)}function nu(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var p=o.create,v=o.inst;u=p(),v.destroy=u}o=o.next}while(o!==f)}}catch(A){ot(r,r.return,A)}}function lr(n,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var p=f.next;u=p;do{if((u.tag&n)===n){var v=u.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=r;var I=o;try{A()}catch(L){ot(f,I,L)}}}u=u.next}while(u!==p)}}catch(L){ot(r,r.return,L)}}function mv(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{_v(r,o)}catch(u){ot(n,n.return,u)}}}function gv(n,r,o){o.props=_a(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){ot(n,r,u)}}function ya(n,r){try{var o=n.ref;if(o!==null){var u=n.stateNode;switch(n.tag){case 26:case 27:case 5:var f=u;break;default:f=u}typeof o=="function"?n.refCleanup=o(f):o.current=f}}catch(p){ot(n,r,p)}}function Un(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){ot(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ot(n,r,f)}else o.current=null}function yv(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){ot(n,n.return,f)}}function vv(n,r,o){try{var u=n.stateNode;wC(u,n.type,o,r),u[Mt]=r}catch(f){ot(n,n.return,f)}}function Ev(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function yp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ev(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vp(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Rh));else if(u!==4&&u!==27&&(n=n.child,n!==null))for(vp(n,r,o),n=n.sibling;n!==null;)vp(n,r,o),n=n.sibling}function ph(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&u!==27&&(n=n.child,n!==null))for(ph(n,r,o),n=n.sibling;n!==null;)ph(n,r,o),n=n.sibling}var gs=!1,Tt=!1,Ep=!1,Tv=typeof WeakSet=="function"?WeakSet:Set,Wt=null,Sv=!1;function eC(n,r){if(n=n.containerInfo,Qp=Mh,n=jg(n),Sd(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,A=-1,I=-1,L=0,W=0,ee=n,H=null;t:for(;;){for(var K;ee!==o||f!==0&&ee.nodeType!==3||(A=v+f),ee!==p||u!==0&&ee.nodeType!==3||(I=v+u),ee.nodeType===3&&(v+=ee.nodeValue.length),(K=ee.firstChild)!==null;)H=ee,ee=K;for(;;){if(ee===n)break t;if(H===o&&++L===f&&(A=v),H===p&&++W===u&&(I=v),(K=ee.nextSibling)!==null)break;ee=H,H=ee.parentNode}ee=K}o=A===-1||I===-1?null:{start:A,end:I}}else o=null}o=o||{start:0,end:0}}else o=null;for(Yp={focusedElem:n,selectionRange:o},Mh=!1,Wt=r;Wt!==null;)if(r=Wt,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Wt=n;else for(;Wt!==null;){switch(r=Wt,p=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&p!==null){n=void 0,o=r,f=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var ve=_a(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(ve,p),u.__reactInternalSnapshotBeforeUpdate=n}catch(De){ot(o,o.return,De)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)Jp(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Jp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,Wt=n;break}Wt=r.return}return ve=Sv,Sv=!1,ve}function Av(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:vs(n,o),u&4&&nu(5,o);break;case 1:if(vs(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(A){ot(o,o.return,A)}else{var f=_a(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(A){ot(o,o.return,A)}}u&64&&mv(o),u&512&&ya(o,o.return);break;case 3:if(vs(n,o),u&64&&(u=o.updateQueue,u!==null)){if(n=null,o.child!==null)switch(o.child.tag){case 27:case 5:n=o.child.stateNode;break;case 1:n=o.child.stateNode}try{_v(u,n)}catch(A){ot(o,o.return,A)}}break;case 26:vs(n,o),u&512&&ya(o,o.return);break;case 27:case 5:vs(n,o),r===null&&u&4&&yv(o),u&512&&ya(o,o.return);break;case 12:vs(n,o);break;case 13:vs(n,o),u&4&&Cv(n,o);break;case 22:if(f=o.memoizedState!==null||gs,!f){r=r!==null&&r.memoizedState!==null||Tt;var p=gs,v=Tt;gs=f,(Tt=r)&&!v?ur(n,o,(o.subtreeFlags&8772)!==0):vs(n,o),gs=p,Tt=v}u&512&&(o.memoizedProps.mode==="manual"?ya(o,o.return):Un(o,o.return));break;default:vs(n,o)}}function wv(n){var r=n.alternate;r!==null&&(n.alternate=null,wv(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Qr(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var xt=null,jn=!1;function ys(n,r,o){for(o=o.child;o!==null;)bv(n,r,o),o=o.sibling}function bv(n,r,o){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(Us,o)}catch{}switch(o.tag){case 26:Tt||Un(o,r),ys(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Tt||Un(o,r);var u=xt,f=jn;for(xt=o.stateNode,ys(n,r,o),o=o.stateNode,r=o.attributes;r.length;)o.removeAttributeNode(r[0]);Qr(o),xt=u,jn=f;break;case 5:Tt||Un(o,r);case 6:f=xt;var p=jn;if(xt=null,ys(n,r,o),xt=f,jn=p,xt!==null)if(jn)try{n=xt,u=o.stateNode,n.nodeType===8?n.parentNode.removeChild(u):n.removeChild(u)}catch(v){ot(o,r,v)}else try{xt.removeChild(o.stateNode)}catch(v){ot(o,r,v)}break;case 18:xt!==null&&(jn?(r=xt,o=o.stateNode,r.nodeType===8?Zp(r.parentNode,o):r.nodeType===1&&Zp(r,o),Eu(r)):Zp(xt,o.stateNode));break;case 4:u=xt,f=jn,xt=o.stateNode.containerInfo,jn=!0,ys(n,r,o),xt=u,jn=f;break;case 0:case 11:case 14:case 15:Tt||lr(2,o,r),Tt||lr(4,o,r),ys(n,r,o);break;case 1:Tt||(Un(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&gv(o,r,u)),ys(n,r,o);break;case 21:ys(n,r,o);break;case 22:Tt||Un(o,r),Tt=(u=Tt)||o.memoizedState!==null,ys(n,r,o),Tt=u;break;default:ys(n,r,o)}}function Cv(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Eu(n)}catch(o){ot(r,r.return,o)}}function tC(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Tv),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Tv),r;default:throw Error(s(435,n.tag))}}function Tp(n,r){var o=tC(n);r.forEach(function(u){var f=pC.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function si(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],p=n,v=r,A=v;e:for(;A!==null;){switch(A.tag){case 27:case 5:xt=A.stateNode,jn=!1;break e;case 3:xt=A.stateNode.containerInfo,jn=!0;break e;case 4:xt=A.stateNode.containerInfo,jn=!0;break e}A=A.return}if(xt===null)throw Error(s(160));bv(p,v,f),xt=null,jn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Rv(r,n),r=r.sibling}var gi=null;function Rv(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:si(r,n),ri(n),u&4&&(lr(3,n,n.return),nu(3,n),lr(5,n,n.return));break;case 1:si(r,n),ri(n),u&512&&(Tt||o===null||Un(o,o.return)),u&64&&gs&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=gi;if(si(r,n),ri(n),u&512&&(Tt||o===null||Un(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Gs]||p[Ft]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(u),f.head.insertBefore(p,f.querySelector("head > title"))),rn(p,u,o),p[Ft]=n,mt(p),u=p;break e;case"link":var v=yE("link","href",f).get(u+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(p=v[A],p.getAttribute("href")===(o.href==null?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}p=f.createElement(u),rn(p,u,o),f.head.appendChild(p);break;case"meta":if(v=yE("meta","content",f).get(u+(o.content||""))){for(A=0;A<v.length;A++)if(p=v[A],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}p=f.createElement(u),rn(p,u,o),f.head.appendChild(p);break;default:throw Error(s(468,u))}p[Ft]=n,mt(p),u=p}n.stateNode=u}else vE(f,n.type,n.stateNode);else n.stateNode=gE(f,u,n.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?vE(f,n.type,n.stateNode):gE(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&vv(n,n.memoizedProps,o.memoizedProps)}break;case 27:if(u&4&&n.alternate===null){f=n.stateNode,p=n.memoizedProps;try{for(var I=f.firstChild;I;){var L=I.nextSibling,W=I.nodeName;I[Gs]||W==="HEAD"||W==="BODY"||W==="SCRIPT"||W==="STYLE"||W==="LINK"&&I.rel.toLowerCase()==="stylesheet"||f.removeChild(I),I=L}for(var ee=n.type,H=f.attributes;H.length;)f.removeAttributeNode(H[0]);rn(f,ee,p),f[Ft]=n,f[Mt]=p}catch(ve){ot(n,n.return,ve)}}case 5:if(si(r,n),ri(n),u&512&&(Tt||o===null||Un(o,o.return)),n.flags&32){f=n.stateNode;try{Yn(f,"")}catch(ve){ot(n,n.return,ve)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,vv(n,f,o!==null?o.memoizedProps:f)),u&1024&&(Ep=!0);break;case 6:if(si(r,n),ri(n),u&4){if(n.stateNode===null)throw Error(s(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(ve){ot(n,n.return,ve)}}break;case 3:if(Oh=null,f=gi,gi=Nh(r.containerInfo),si(r,n),gi=f,ri(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Eu(r.containerInfo)}catch(ve){ot(n,n.return,ve)}Ep&&(Ep=!1,Iv(n));break;case 4:u=gi,gi=Nh(n.stateNode.containerInfo),si(r,n),ri(n),gi=u;break;case 12:si(r,n),ri(n);break;case 13:si(r,n),ri(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Dp=en()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Tp(n,u)));break;case 22:if(u&512&&(Tt||o===null||Un(o,o.return)),I=n.memoizedState!==null,L=o!==null&&o.memoizedState!==null,W=gs,ee=Tt,gs=W||I,Tt=ee||L,si(r,n),Tt=ee,gs=W,ri(n),r=n.stateNode,r._current=n,r._visibility&=-3,r._visibility|=r._pendingVisibility&2,u&8192&&(r._visibility=I?r._visibility&-2:r._visibility|1,I&&(r=gs||Tt,o===null||L||r||So(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))e:for(o=null,r=n;;){if(r.tag===5||r.tag===26||r.tag===27){if(o===null){L=o=r;try{if(f=L.stateNode,I)p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{v=L.stateNode,A=L.memoizedProps.style;var K=A!=null&&A.hasOwnProperty("display")?A.display:null;v.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(ve){ot(L,L.return,ve)}}}else if(r.tag===6){if(o===null){L=r;try{L.stateNode.nodeValue=I?"":L.memoizedProps}catch(ve){ot(L,L.return,ve)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Tp(n,o))));break;case 19:si(r,n),ri(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Tp(n,u)));break;case 21:break;default:si(r,n),ri(n)}}function ri(n){var r=n.flags;if(r&2){try{if(n.tag!==27){e:{for(var o=n.return;o!==null;){if(Ev(o)){var u=o;break e}o=o.return}throw Error(s(160))}switch(u.tag){case 27:var f=u.stateNode,p=yp(n);ph(n,p,f);break;case 5:var v=u.stateNode;u.flags&32&&(Yn(v,""),u.flags&=-33);var A=yp(n);ph(n,A,v);break;case 3:case 4:var I=u.stateNode.containerInfo,L=yp(n);vp(n,L,I);break;default:throw Error(s(161))}}}catch(W){ot(n,n.return,W)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Iv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Iv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function vs(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Av(n,r.alternate,r),r=r.sibling}function So(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:lr(4,r,r.return),So(r);break;case 1:Un(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&gv(r,r.return,o),So(r);break;case 26:case 27:case 5:Un(r,r.return),So(r);break;case 22:Un(r,r.return),r.memoizedState===null&&So(r);break;default:So(r)}n=n.sibling}}function ur(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=n,p=r,v=p.flags;switch(p.tag){case 0:case 11:case 15:ur(f,p,o),nu(4,p);break;case 1:if(ur(f,p,o),u=p,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(L){ot(u,u.return,L)}if(u=p,f=u.updateQueue,f!==null){var A=u.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)pv(I[f],A)}catch(L){ot(u,u.return,L)}}o&&v&64&&mv(p),ya(p,p.return);break;case 26:case 27:case 5:ur(f,p,o),o&&u===null&&v&4&&yv(p),ya(p,p.return);break;case 12:ur(f,p,o);break;case 13:ur(f,p,o),o&&v&4&&Cv(f,p);break;case 22:p.memoizedState===null&&ur(f,p,o),ya(p,p.return);break;default:ur(f,p,o)}r=r.sibling}}function Sp(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Kl(o))}function Ap(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Kl(n))}function cr(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Nv(n,r,o,u),r=r.sibling}function Nv(n,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:cr(n,r,o,u),f&2048&&nu(9,r);break;case 3:cr(n,r,o,u),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Kl(n)));break;case 12:if(f&2048){cr(n,r,o,u),n=r.stateNode;try{var p=r.memoizedProps,v=p.id,A=p.onPostCommit;typeof A=="function"&&A(v,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(I){ot(r,r.return,I)}}else cr(n,r,o,u);break;case 23:break;case 22:p=r.stateNode,r.memoizedState!==null?p._visibility&4?cr(n,r,o,u):iu(n,r):p._visibility&4?cr(n,r,o,u):(p._visibility|=4,Ao(n,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&Sp(r.alternate,r);break;case 24:cr(n,r,o,u),f&2048&&Ap(r.alternate,r);break;default:cr(n,r,o,u)}}function Ao(n,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var p=n,v=r,A=o,I=u,L=v.flags;switch(v.tag){case 0:case 11:case 15:Ao(p,v,A,I,f),nu(8,v);break;case 23:break;case 22:var W=v.stateNode;v.memoizedState!==null?W._visibility&4?Ao(p,v,A,I,f):iu(p,v):(W._visibility|=4,Ao(p,v,A,I,f)),f&&L&2048&&Sp(v.alternate,v);break;case 24:Ao(p,v,A,I,f),f&&L&2048&&Ap(v.alternate,v);break;default:Ao(p,v,A,I,f)}r=r.sibling}}function iu(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,f=u.flags;switch(u.tag){case 22:iu(o,u),f&2048&&Sp(u.alternate,u);break;case 24:iu(o,u),f&2048&&Ap(u.alternate,u);break;default:iu(o,u)}r=r.sibling}}var su=8192;function wo(n){if(n.subtreeFlags&su)for(n=n.child;n!==null;)Dv(n),n=n.sibling}function Dv(n){switch(n.tag){case 26:wo(n),n.flags&su&&n.memoizedState!==null&&FC(gi,n.memoizedState,n.memoizedProps);break;case 5:wo(n);break;case 3:case 4:var r=gi;gi=Nh(n.stateNode.containerInfo),wo(n),gi=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=su,su=16777216,wo(n),su=r):wo(n));break;default:wo(n)}}function Ov(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function ru(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Wt=u,kv(u,n)}Ov(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)xv(n),n=n.sibling}function xv(n){switch(n.tag){case 0:case 11:case 15:ru(n),n.flags&2048&&lr(9,n,n.return);break;case 3:ru(n);break;case 12:ru(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&4&&(n.return===null||n.return.tag!==13)?(r._visibility&=-5,_h(n)):ru(n);break;default:ru(n)}}function _h(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Wt=u,kv(u,n)}Ov(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:lr(8,r,r.return),_h(r);break;case 22:o=r.stateNode,o._visibility&4&&(o._visibility&=-5,_h(r));break;default:_h(r)}n=n.sibling}}function kv(n,r){for(;Wt!==null;){var o=Wt;switch(o.tag){case 0:case 11:case 15:lr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Kl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Wt=u;else e:for(o=n;Wt!==null;){u=Wt;var f=u.sibling,p=u.return;if(wv(u),u===o){Wt=null;break e}if(f!==null){f.return=p,Wt=f;break e}Wt=p}}}function nC(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(n,r,o,u){return new nC(n,r,o,u)}function wp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hr(n,r){var o=n.alternate;return o===null?(o=ai(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&31457280,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function Mv(n,r){n.flags&=31457282;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function mh(n,r,o,u,f,p){var v=0;if(u=n,typeof n=="function")wp(n)&&(v=1);else if(typeof n=="string")v=zC(n,o,Zt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case _:return va(o.children,f,p,r);case m:v=8,f|=24;break;case E:return n=ai(12,o,r,f|2),n.elementType=E,n.lanes=p,n;case Q:return n=ai(13,o,r,f),n.elementType=Q,n.lanes=p,n;case F:return n=ai(19,o,r,f),n.elementType=F,n.lanes=p,n;case J:return Pv(o,f,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:case P:v=10;break e;case R:v=9;break e;case q:v=11;break e;case X:v=14;break e;case Y:v=16,u=null;break e}v=29,o=Error(s(130,n===null?"null":typeof n,"")),u=null}return r=ai(v,o,r,f),r.elementType=n,r.type=u,r.lanes=p,r}function va(n,r,o,u){return n=ai(7,n,u,r),n.lanes=o,n}function Pv(n,r,o,u){n=ai(22,n,u,r),n.elementType=J,n.lanes=o;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var p=f._current;if(p===null)throw Error(s(456));if((f._pendingVisibility&2)===0){var v=Js(p,2);v!==null&&(f._pendingVisibility|=2,Rn(v,p,2))}},attach:function(){var p=f._current;if(p===null)throw Error(s(456));if((f._pendingVisibility&2)!==0){var v=Js(p,2);v!==null&&(f._pendingVisibility&=-3,Rn(v,p,2))}}};return n.stateNode=f,n}function bp(n,r,o){return n=ai(6,n,null,r),n.lanes=o,n}function Cp(n,r,o){return r=ai(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Es(n){n.flags|=4}function Vv(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!EE(r)){if(r=ii.current,r!==null&&((We&4194176)===We?Vi!==null:(We&62914560)!==We&&(We&536870912)===0||r!==Vi))throw Fl=Od,Jg;n.flags|=8192}}function gh(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?zs():536870912,n.lanes|=r,Co|=r)}function au(n,r){if(!Ze)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function gt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&31457280,u|=f.flags&31457280,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function iC(n,r,o){var u=r.pendingProps;switch(Nd(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(r),null;case 1:return gt(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),ms(Ut),Mn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(jl(r)?Es(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,mi!==null&&(Mp(mi),mi=null))),gt(r),null;case 26:return o=r.memoizedState,n===null?(Es(r),o!==null?(gt(r),Vv(r,o)):(gt(r),r.flags&=-16777217)):o?o!==n.memoizedState?(Es(r),gt(r),Vv(r,o)):(gt(r),r.flags&=-16777217):(n.memoizedProps!==u&&Es(r),gt(r),r.flags&=-16777217),null;case 27:ut(r),o=Jt.current;var f=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&Es(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return gt(r),null}n=Zt.current,jl(r)?Xg(r):(n=fE(f,u,o),r.stateNode=n,Es(r))}return gt(r),null;case 5:if(ut(r),o=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&Es(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return gt(r),null}if(n=Zt.current,jl(r))Xg(r);else{switch(f=Ih(Jt.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[Ft]=r,n[Mt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=n;e:switch(rn(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Es(r)}}return gt(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&Es(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(n=Jt.current,jl(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,f=Cn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[Ft]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||aE(n.nodeValue,o)),n||ua(r)}else n=Ih(n).createTextNode(u),n[Ft]=r,r.stateNode=n}return gt(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=jl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Ft]=r}else Bl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;gt(r),f=!1}else mi!==null&&(Mp(mi),mi=null),f=!0;if(!f)return r.flags&256?(fs(r),r):(fs(r),null)}if(fs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==f&&(u.flags|=2048)}return o!==n&&o&&(r.child.flags|=8192),gh(r,r.updateQueue),gt(r),null;case 4:return Mn(),n===null&&Gp(r.stateNode.containerInfo),gt(r),null;case 10:return ms(r.type),gt(r),null;case 19:if(_t(Lt),f=r.memoizedState,f===null)return gt(r),null;if(u=(r.flags&128)!==0,p=f.rendering,p===null)if(u)au(f,!1);else{if(St!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(p=eh(n),p!==null){for(r.flags|=128,au(f,!1),n=p.updateQueue,r.updateQueue=n,gh(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)Mv(o,n),o=o.sibling;return et(Lt,Lt.current&1|2),r.child}n=n.sibling}f.tail!==null&&en()>yh&&(r.flags|=128,u=!0,au(f,!1),r.lanes=4194304)}else{if(!u)if(n=eh(p),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,gh(r,n),au(f,!0),f.tail===null&&f.tailMode==="hidden"&&!p.alternate&&!Ze)return gt(r),null}else 2*en()-f.renderingStartTime>yh&&o!==536870912&&(r.flags|=128,u=!0,au(f,!1),r.lanes=4194304);f.isBackwards?(p.sibling=r.child,r.child=p):(n=f.last,n!==null?n.sibling=p:r.child=p,f.last=p)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=en(),r.sibling=null,n=Lt.current,et(Lt,u?n&1|2:n&1),r):(gt(r),null);case 22:case 23:return fs(r),kd(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(gt(r),r.subtreeFlags&6&&(r.flags|=8192)):gt(r),o=r.updateQueue,o!==null&&gh(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&_t(ha),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),ms(Ut),gt(r),null;case 25:return null}throw Error(s(156,r.tag))}function sC(n,r){switch(Nd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ms(Ut),Mn(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return ut(r),null;case 13:if(fs(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Bl()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return _t(Lt),null;case 4:return Mn(),null;case 10:return ms(r.type),null;case 22:case 23:return fs(r),kd(),n!==null&&_t(ha),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return ms(Ut),null;case 25:return null;default:return null}}function Lv(n,r){switch(Nd(r),r.tag){case 3:ms(Ut),Mn();break;case 26:case 27:case 5:ut(r);break;case 4:Mn();break;case 13:fs(r);break;case 19:_t(Lt);break;case 10:ms(r.type);break;case 22:case 23:fs(r),kd(),n!==null&&_t(ha);break;case 24:ms(Ut)}}var rC={getCacheForType:function(n){var r=dn(Ut),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o}},aC=typeof WeakMap=="function"?WeakMap:Map,yt=0,ct=null,Ue=null,We=0,ht=0,Bn=null,Ts=!1,bo=!1,Rp=!1,Ss=0,St=0,fr=0,Ea=0,Ip=0,oi=0,Co=0,ou=null,Ui=null,Np=!1,Dp=0,yh=1/0,vh=null,dr=null,Eh=!1,Ta=null,lu=0,Op=0,xp=null,uu=0,kp=null;function zn(){if((yt&2)!==0&&We!==0)return We&-We;if(b.T!==null){var n=go;return n!==0?n:zp()}return Cc()}function Uv(){oi===0&&(oi=(We&536870912)===0||Ze?Tl():536870912);var n=ii.current;return n!==null&&(n.flags|=32),oi}function Rn(n,r,o){(n===ct&&ht===2||n.cancelPendingCommit!==null)&&(Ro(n,0),As(n,We,oi,!1)),Rt(n,o),((yt&2)===0||n!==ct)&&(n===ct&&((yt&2)===0&&(Ea|=o),St===4&&As(n,We,oi,!1)),ji(n))}function jv(n,r,o){if((yt&6)!==0)throw Error(s(327));var u=!o&&(r&60)===0&&(r&n.expiredLanes)===0||Bs(n,r),f=u?uC(n,r):Lp(n,r,!0),p=u;do{if(f===0){bo&&!u&&As(n,r,0,!1);break}else if(f===6)As(n,r,0,!Ts);else{if(o=n.current.alternate,p&&!oC(o)){f=Lp(n,r,!1),p=!1;continue}if(f===2){if(p=r,n.errorRecoveryDisabledLanes&p)var v=0;else v=n.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var A=n;f=ou;var I=A.current.memoizedState.isDehydrated;if(I&&(Ro(A,v).flags|=256),v=Lp(A,v,!1),v!==2){if(Rp&&!I){A.errorRecoveryDisabledLanes|=p,Ea|=p,f=4;break e}p=Ui,Ui=f,p!==null&&Mp(p)}f=v}if(p=!1,f!==2)continue}}if(f===1){Ro(n,0),As(n,r,0,!0);break}e:{switch(u=n,f){case 0:case 1:throw Error(s(345));case 4:if((r&4194176)===r){As(u,r,oi,!Ts);break e}break;case 2:Ui=null;break;case 3:case 5:break;default:throw Error(s(329))}if(u.finishedWork=o,u.finishedLanes=r,(r&62914560)===r&&(p=Dp+300-en(),10<p)){if(As(u,r,oi,!Ts),Wn(u,0)!==0)break e;u.timeoutHandle=uE(Bv.bind(null,u,o,Ui,vh,Np,r,oi,Ea,Co,Ts,2,-0,0),p);break e}Bv(u,o,Ui,vh,Np,r,oi,Ea,Co,Ts,0,-0,0)}}break}while(!0);ji(n)}function Mp(n){Ui===null?Ui=n:Ui.push.apply(Ui,n)}function Bv(n,r,o,u,f,p,v,A,I,L,W,ee,H){var K=r.subtreeFlags;if((K&8192||(K&16785408)===16785408)&&(_u={stylesheets:null,count:0,unsuspend:HC},Dv(r),r=qC(),r!==null)){n.cancelPendingCommit=r(Wv.bind(null,n,o,u,f,v,A,I,1,ee,H)),As(n,p,v,!L);return}Wv(n,o,u,f,v,A,I,W,ee,H)}function oC(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!Ln(p(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function As(n,r,o,u){r&=~Ip,r&=~Ea,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var f=r;0<f;){var p=31-An(f),v=1<<p;u[p]=-1,f&=~v}o!==0&&Hs(n,o,r)}function Th(){return(yt&6)===0?(cu(0),!1):!0}function Pp(){if(Ue!==null){if(ht===0)var n=Ue.return;else n=Ue,_s=ma=null,zd(n),_o=null,ql=0,n=Ue;for(;n!==null;)Lv(n.alternate,n),n=n.return;Ue=null}}function Ro(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,CC(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Pp(),ct=n,Ue=o=hr(n.current,null),We=r,ht=0,Bn=null,Ts=!1,bo=Bs(n,r),Rp=!1,Co=oi=Ip=Ea=fr=St=0,Ui=ou=null,Np=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var f=31-An(u),p=1<<f;r|=n[f],u&=~p}return Ss=r,Gc(),o}function zv(n,r){Pe=null,b.H=Li,r===Hl?(r=ny(),ht=3):r===Jg?(r=ny(),ht=4):ht=r===ev?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Bn=r,Ue===null&&(St=1,hh(n,ei(r,n.current)))}function Hv(){var n=b.H;return b.H=Li,n===null?Li:n}function Fv(){var n=b.A;return b.A=rC,n}function Vp(){St=4,Ts||(We&4194176)!==We&&ii.current!==null||(bo=!0),(fr&134217727)===0&&(Ea&134217727)===0||ct===null||As(ct,We,oi,!1)}function Lp(n,r,o){var u=yt;yt|=2;var f=Hv(),p=Fv();(ct!==n||We!==r)&&(vh=null,Ro(n,r)),r=!1;var v=St;e:do try{if(ht!==0&&Ue!==null){var A=Ue,I=Bn;switch(ht){case 8:Pp(),v=6;break e;case 3:case 2:case 6:ii.current===null&&(r=!0);var L=ht;if(ht=0,Bn=null,Io(n,A,I,L),o&&bo){v=0;break e}break;default:L=ht,ht=0,Bn=null,Io(n,A,I,L)}}lC(),v=St;break}catch(W){zv(n,W)}while(!0);return r&&n.shellSuspendCounter++,_s=ma=null,yt=u,b.H=f,b.A=p,Ue===null&&(ct=null,We=0,Gc()),v}function lC(){for(;Ue!==null;)qv(Ue)}function uC(n,r){var o=yt;yt|=2;var u=Hv(),f=Fv();ct!==n||We!==r?(vh=null,yh=en()+500,Ro(n,r)):bo=Bs(n,r);e:do try{if(ht!==0&&Ue!==null){r=Ue;var p=Bn;t:switch(ht){case 1:ht=0,Bn=null,Io(n,r,p,1);break;case 2:if(ey(p)){ht=0,Bn=null,Gv(r);break}r=function(){ht===2&&ct===n&&(ht=7),ji(n)},p.then(r,r);break e;case 3:ht=7;break e;case 4:ht=5;break e;case 7:ey(p)?(ht=0,Bn=null,Gv(r)):(ht=0,Bn=null,Io(n,r,p,7));break;case 5:var v=null;switch(Ue.tag){case 26:v=Ue.memoizedState;case 5:case 27:var A=Ue;if(!v||EE(v)){ht=0,Bn=null;var I=A.sibling;if(I!==null)Ue=I;else{var L=A.return;L!==null?(Ue=L,Sh(L)):Ue=null}break t}}ht=0,Bn=null,Io(n,r,p,5);break;case 6:ht=0,Bn=null,Io(n,r,p,6);break;case 8:Pp(),St=6;break e;default:throw Error(s(462))}}cC();break}catch(W){zv(n,W)}while(!0);return _s=ma=null,b.H=u,b.A=f,yt=o,Ue!==null?0:(ct=null,We=0,Gc(),St)}function cC(){for(;Ue!==null&&!Gr();)qv(Ue)}function qv(n){var r=fv(n.alternate,n,Ss);n.memoizedProps=n.pendingProps,r===null?Sh(n):Ue=r}function Gv(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=av(o,r,r.pendingProps,r.type,void 0,We);break;case 11:r=av(o,r,r.pendingProps,r.type.render,r.ref,We);break;case 5:zd(r);default:Lv(o,r),r=Ue=Mv(r,Ss),r=fv(o,r,Ss)}n.memoizedProps=n.pendingProps,r===null?Sh(n):Ue=r}function Io(n,r,o,u){_s=ma=null,zd(r),_o=null,ql=0;var f=r.return;try{if(Zb(n,f,r,o,We)){St=1,hh(n,ei(o,n.current)),Ue=null;return}}catch(p){if(f!==null)throw Ue=f,p;St=1,hh(n,ei(o,n.current)),Ue=null;return}r.flags&32768?(Ze||u===1?n=!0:bo||(We&536870912)!==0?n=!1:(Ts=n=!0,(u===2||u===3||u===6)&&(u=ii.current,u!==null&&u.tag===13&&(u.flags|=16384))),Kv(r,n)):Sh(r)}function Sh(n){var r=n;do{if((r.flags&32768)!==0){Kv(r,Ts);return}n=r.return;var o=iC(r.alternate,r,Ss);if(o!==null){Ue=o;return}if(r=r.sibling,r!==null){Ue=r;return}Ue=r=n}while(r!==null);St===0&&(St=5)}function Kv(n,r){do{var o=sC(n.alternate,n);if(o!==null){o.flags&=32767,Ue=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){Ue=n;return}Ue=n=o}while(n!==null);St=6,Ue=null}function Wv(n,r,o,u,f,p,v,A,I,L){var W=b.T,ee=ne.p;try{ne.p=2,b.T=null,hC(n,r,o,u,ee,f,p,v,A,I,L)}finally{b.T=W,ne.p=ee}}function hC(n,r,o,u,f,p,v,A){do No();while(Ta!==null);if((yt&6)!==0)throw Error(s(327));var I=n.finishedWork;if(u=n.finishedLanes,I===null)return null;if(n.finishedWork=null,n.finishedLanes=0,I===n.current)throw Error(s(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var L=I.lanes|I.childLanes;if(L|=Cd,wc(n,u,L,p,v,A),n===ct&&(Ue=ct=null,We=0),(I.subtreeFlags&10256)===0&&(I.flags&10256)===0||Eh||(Eh=!0,Op=L,xp=o,_C(es,function(){return No(),null})),o=(I.flags&15990)!==0,(I.subtreeFlags&15990)!==0||o?(o=b.T,b.T=null,p=ne.p,ne.p=2,v=yt,yt|=4,eC(n,I),Rv(I,n),Pb(Yp,n.containerInfo),Mh=!!Qp,Yp=Qp=null,n.current=I,Av(n,I.alternate,I),Ls(),yt=v,ne.p=p,b.T=o):n.current=I,Eh?(Eh=!1,Ta=n,lu=u):Qv(n,L),L=n.pendingLanes,L===0&&(dr=null),vl(I.stateNode),ji(n),r!==null)for(f=n.onRecoverableError,I=0;I<r.length;I++)L=r[I],f(L.value,{componentStack:L.stack});return(lu&3)!==0&&No(),L=n.pendingLanes,(u&4194218)!==0&&(L&42)!==0?n===kp?uu++:(uu=0,kp=n):uu=0,cu(0),null}function Qv(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Kl(r)))}function No(){if(Ta!==null){var n=Ta,r=Op;Op=0;var o=bc(lu),u=b.T,f=ne.p;try{if(ne.p=32>o?32:o,b.T=null,Ta===null)var p=!1;else{o=xp,xp=null;var v=Ta,A=lu;if(Ta=null,lu=0,(yt&6)!==0)throw Error(s(331));var I=yt;if(yt|=4,xv(v.current),Nv(v,v.current,A,o),yt=I,cu(0,!1),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(Us,v)}catch{}p=!0}return p}finally{ne.p=f,b.T=u,Qv(n,r)}}return!1}function Yv(n,r,o){r=ei(o,r),r=tp(n.stateNode,r,2),n=or(n,r,2),n!==null&&(Rt(n,2),ji(n))}function ot(n,r,o){if(n.tag===3)Yv(n,n,o);else for(;r!==null;){if(r.tag===3){Yv(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(dr===null||!dr.has(u))){n=ei(o,n),o=Zy(2),u=or(r,o,2),u!==null&&(Jy(o,u,r,n),Rt(u,2),ji(u));break}}r=r.return}}function Up(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new aC;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(Rp=!0,f.add(o),n=fC.bind(null,n,r,o),r.then(n,n))}function fC(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,ct===n&&(We&o)===o&&(St===4||St===3&&(We&62914560)===We&&300>en()-Dp?(yt&2)===0&&Ro(n,0):Ip|=o,Co===We&&(Co=0)),ji(n)}function $v(n,r){r===0&&(r=zs()),n=Js(n,r),n!==null&&(Rt(n,r),ji(n))}function dC(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),$v(n,o)}function pC(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),$v(n,o)}function _C(n,r){return fi(n,r)}var Ah=null,Do=null,jp=!1,wh=!1,Bp=!1,Sa=0;function ji(n){n!==Do&&n.next===null&&(Do===null?Ah=Do=n:Do=Do.next=n),wh=!0,jp||(jp=!0,gC(mC))}function cu(n,r){if(!Bp&&wh){Bp=!0;do for(var o=!1,u=Ah;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var p=0;else{var v=u.suspendedLanes,A=u.pingedLanes;p=(1<<31-An(42|n)+1)-1,p&=f&~(v&~A),p=p&201326677?p&201326677|1:p?p|2:0}p!==0&&(o=!0,Jv(u,p))}else p=We,p=Wn(u,u===ct?p:0),(p&3)===0||Bs(u,p)||(o=!0,Jv(u,p));u=u.next}while(o);Bp=!1}}function mC(){wh=jp=!1;var n=0;Sa!==0&&(bC()&&(n=Sa),Sa=0);for(var r=en(),o=null,u=Ah;u!==null;){var f=u.next,p=Xv(u,r);p===0?(u.next=null,o===null?Ah=f:o.next=f,f===null&&(Do=o)):(o=u,(n!==0||(p&3)!==0)&&(wh=!0)),u=f}cu(n)}function Xv(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes&-62914561;0<p;){var v=31-An(p),A=1<<v,I=f[v];I===-1?((A&o)===0||(A&u)!==0)&&(f[v]=Wa(A,r)):I<=r&&(n.expiredLanes|=A),p&=~A}if(r=ct,o=We,o=Wn(n,n===r?o:0),u=n.callbackNode,o===0||n===r&&ht===2||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Zi(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Bs(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&Zi(u),bc(o)){case 2:case 8:o=Ht;break;case 32:o=es;break;case 268435456:o=yl;break;default:o=es}return u=Zv.bind(null,n),o=fi(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&Zi(u),n.callbackPriority=2,n.callbackNode=null,2}function Zv(n,r){var o=n.callbackNode;if(No()&&n.callbackNode!==o)return null;var u=We;return u=Wn(n,n===ct?u:0),u===0?null:(jv(n,u,r),Xv(n,en()),n.callbackNode!=null&&n.callbackNode===o?Zv.bind(null,n):null)}function Jv(n,r){if(No())return null;jv(n,r,!0)}function gC(n){RC(function(){(yt&6)!==0?fi(Ct,n):n()})}function zp(){return Sa===0&&(Sa=Tl()),Sa}function eE(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ii(""+n)}function tE(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function yC(n,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var p=eE((f[Mt]||null).action),v=u.submitter;v&&(r=(r=v[Mt]||null)?eE(r.formAction):v.getAttribute("formAction"),r!==null&&(p=r,v=null));var A=new eo("action","action",null,u,f);n.push({event:A,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Sa!==0){var I=v?tE(f,v):new FormData(f);$d(o,{pending:!0,data:I,method:f.method,action:p},null,I)}}else typeof p=="function"&&(A.preventDefault(),I=v?tE(f,v):new FormData(f),$d(o,{pending:!0,data:I,method:f.method,action:p},p,I))},currentTarget:f}]})}}for(var Hp=0;Hp<Wg.length;Hp++){var Fp=Wg[Hp],vC=Fp.toLowerCase(),EC=Fp[0].toUpperCase()+Fp.slice(1);_i(vC,"on"+EC)}_i(Hg,"onAnimationEnd"),_i(Fg,"onAnimationIteration"),_i(qg,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Lb,"onTransitionRun"),_i(Ub,"onTransitionStart"),_i(jb,"onTransitionCancel"),_i(Gg,"onTransitionEnd"),In("onMouseEnter",["mouseout","mouseover"]),In("onMouseLeave",["mouseout","mouseover"]),In("onPointerEnter",["pointerout","pointerover"]),In("onPointerLeave",["pointerout","pointerover"]),Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hu));function nE(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var v=u.length-1;0<=v;v--){var A=u[v],I=A.instance,L=A.currentTarget;if(A=A.listener,I!==p&&f.isPropagationStopped())break e;p=A,f.currentTarget=L;try{p(f)}catch(W){ch(W)}f.currentTarget=null,p=I}else for(v=0;v<u.length;v++){if(A=u[v],I=A.instance,L=A.currentTarget,A=A.listener,I!==p&&f.isPropagationStopped())break e;p=A,f.currentTarget=L;try{p(f)}catch(W){ch(W)}f.currentTarget=null,p=I}}}}function He(n,r){var o=r[Wr];o===void 0&&(o=r[Wr]=new Set);var u=n+"__bubble";o.has(u)||(iE(r,n,2,!1),o.add(u))}function qp(n,r,o){var u=0;r&&(u|=4),iE(o,n,u,r)}var bh="_reactListening"+Math.random().toString(36).slice(2);function Gp(n){if(!n[bh]){n[bh]=!0,Al.forEach(function(o){o!=="selectionchange"&&(TC.has(o)||qp(o,!1,n),qp(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[bh]||(r[bh]=!0,qp("selectionchange",!1,r))}}function iE(n,r,o,u){switch(CE(r)){case 2:var f=WC;break;case 8:f=QC;break;default:f=s_}o=f.bind(null,r,o,n),f=void 0,!Xn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(r,o,{capture:!0,passive:f}):n.addEventListener(r,o,!0):f!==void 0?n.addEventListener(r,o,{passive:f}):n.addEventListener(r,o,!1)}function Kp(n,r,o,u,f){var p=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var v=u.tag;if(v===3||v===4){var A=u.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(v===4)for(v=u.return;v!==null;){var I=v.tag;if((I===3||I===4)&&(I=v.stateNode.containerInfo,I===f||I.nodeType===8&&I.parentNode===f))return;v=v.return}for(;A!==null;){if(v=pi(A),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){u=p=v;continue e}A=A.parentNode}}u=u.return}Dc(function(){var L=p,W=Ja(o),ee=[];e:{var H=Kg.get(n);if(H!==void 0){var K=eo,ve=n;switch(n){case"keypress":if(Di(o)===0)break e;case"keydown":case"keyup":K=ao;break;case"focusin":ve="focus",K=io;break;case"focusout":ve="blur",K=io;break;case"beforeblur":case"afterblur":K=io;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Zn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Uc;break;case Hg:case Fg:case qg:K=so;break;case Gg:K=Bc;break;case"scroll":case"scrollend":K=Oc;break;case"wheel":K=oo;break;case"copy":case"cut":case"paste":K=ro;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Pl;break;case"toggle":case"beforetoggle":K=Hc}var De=(r&4)!==0,At=!De&&(n==="scroll"||n==="scrollend"),j=De?H!==null?H+"Capture":null:H;De=[];for(var V=L,z;V!==null;){var $=V;if(z=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||z===null||j===null||($=Zr(V,j),$!=null&&De.push(fu(V,$,z))),At)break;V=V.return}0<De.length&&(H=new K(H,ve,null,o,W),ee.push({event:H,listeners:De}))}}if((r&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",K=n==="mouseout"||n==="pointerout",H&&o!==$n&&(ve=o.relatedTarget||o.fromElement)&&(pi(ve)||ve[ts]))break e;if((K||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,K?(ve=o.relatedTarget||o.toElement,K=L,ve=ve?pi(ve):null,ve!==null&&(At=ce(ve),De=ve.tag,ve!==At||De!==5&&De!==27&&De!==6)&&(ve=null)):(K=null,ve=L),K!==ve)){if(De=Zn,$="onMouseLeave",j="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(De=Pl,$="onPointerLeave",j="onPointerEnter",V="pointer"),At=K==null?H:Ks(K),z=ve==null?H:Ks(ve),H=new De($,V+"leave",K,o,W),H.target=At,H.relatedTarget=z,$=null,pi(W)===L&&(De=new De(j,V+"enter",ve,o,W),De.target=z,De.relatedTarget=At,$=De),At=$,K&&ve)t:{for(De=K,j=ve,V=0,z=De;z;z=Oo(z))V++;for(z=0,$=j;$;$=Oo($))z++;for(;0<V-z;)De=Oo(De),V--;for(;0<z-V;)j=Oo(j),z--;for(;V--;){if(De===j||j!==null&&De===j.alternate)break t;De=Oo(De),j=Oo(j)}De=null}else De=null;K!==null&&sE(ee,H,K,De,!1),ve!==null&&At!==null&&sE(ee,At,ve,De,!0)}}e:{if(H=L?Ks(L):window,K=H.nodeName&&H.nodeName.toLowerCase(),K==="select"||K==="input"&&H.type==="file")var me=Og;else if(Vt(H))if(xg)me=kb;else{me=Ob;var Ve=Db}else K=H.nodeName,!K||K.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?L&&Il(L.elementType)&&(me=Og):me=xb;if(me&&(me=me(n,L))){us(ee,me,o,W);break e}Ve&&Ve(n,H,L),n==="focusout"&&L&&H.type==="number"&&L.memoizedProps.value!=null&&Za(H,"number",H.value)}switch(Ve=L?Ks(L):window,n){case"focusin":(Vt(Ve)||Ve.contentEditable==="true")&&(lo=Ve,Ad=L,Ul=null);break;case"focusout":Ul=Ad=lo=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,Bg(ee,o,W);break;case"selectionchange":if(Vb)break;case"keydown":case"keyup":Bg(ee,o,W)}var Ee;if(ki)e:{switch(n){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Ge?G(n,o)&&(we="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(we="onCompositionStart");we&&(y&&o.locale!=="ko"&&(Ge||we!=="onCompositionStart"?we==="onCompositionEnd"&&Ge&&(Ee=Dl()):(Ni=W,Zs="value"in Ni?Ni.value:Ni.textContent,Ge=!0)),Ve=Ch(L,we),0<Ve.length&&(we=new kl(we,n,null,o,W),ee.push({event:we,listeners:Ve}),Ee?we.data=Ee:(Ee=ue(o),Ee!==null&&(we.data=Ee)))),(Ee=g?Pt(n,o):Ke(n,o))&&(we=Ch(L,"onBeforeInput"),0<we.length&&(Ve=new kl("onBeforeInput","beforeinput",null,o,W),ee.push({event:Ve,listeners:we}),Ve.data=Ee)),yC(ee,n,L,o,W)}nE(ee,r)})}function fu(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Ch(n,r){for(var o=r+"Capture",u=[];n!==null;){var f=n,p=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Zr(n,o),f!=null&&u.unshift(fu(n,f,p)),f=Zr(n,r),f!=null&&u.push(fu(n,f,p))),n=n.return}return u}function Oo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function sE(n,r,o,u,f){for(var p=r._reactName,v=[];o!==null&&o!==u;){var A=o,I=A.alternate,L=A.stateNode;if(A=A.tag,I!==null&&I===u)break;A!==5&&A!==26&&A!==27||L===null||(I=L,f?(L=Zr(o,p),L!=null&&v.unshift(fu(o,L,I))):f||(L=Zr(o,p),L!=null&&v.push(fu(o,L,I)))),o=o.return}v.length!==0&&n.push({event:r,listeners:v})}var SC=/\r\n?/g,AC=/\u0000|\uFFFD/g;function rE(n){return(typeof n=="string"?n:""+n).replace(SC,`
`).replace(AC,"")}function aE(n,r){return r=rE(r),rE(n)===r}function Rh(){}function rt(n,r,o,u,f,p){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Yn(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Yn(n,""+u);break;case"className":Ys(n,"class",u);break;case"tabIndex":Ys(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ys(n,o,u);break;case"style":Nc(n,u,p);break;case"data":if(r!=="object"){Ys(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ii(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(r!=="input"&&rt(n,r,"name",f.name,f,null),rt(n,r,"formEncType",f.formEncType,f,null),rt(n,r,"formMethod",f.formMethod,f,null),rt(n,r,"formTarget",f.formTarget,f,null)):(rt(n,r,"encType",f.encType,f,null),rt(n,r,"method",f.method,f,null),rt(n,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ii(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Rh);break;case"onScroll":u!=null&&He("scroll",n);break;case"onScrollEnd":u!=null&&He("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Ii(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":He("beforetoggle",n),He("toggle",n),Qs(n,"popover",u);break;case"xlinkActuate":Qn(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Qn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Qn(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Qn(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Qn(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Qn(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Qn(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Qn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Qn(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Qs(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=md.get(o)||o,Qs(n,o,u))}}function Wp(n,r,o,u,f,p){switch(o){case"style":Nc(n,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Yn(n,u):(typeof u=="number"||typeof u=="bigint")&&Yn(n,""+u);break;case"onScroll":u!=null&&He("scroll",n);break;case"onScrollEnd":u!=null&&He("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Rh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$a.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),p=n[Mt]||null,p=p!=null?p[o]:null,typeof p=="function"&&n.removeEventListener(r,p,f),typeof u=="function")){typeof p!="function"&&p!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Qs(n,o,u)}}}function rn(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",n),He("load",n);var u=!1,f=!1,p;for(p in o)if(o.hasOwnProperty(p)){var v=o[p];if(v!=null)switch(p){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:rt(n,r,p,v,o,null)}}f&&rt(n,r,"srcSet",o.srcSet,o,null),u&&rt(n,r,"src",o.src,o,null);return;case"input":He("invalid",n);var A=p=v=f=null,I=null,L=null;for(u in o)if(o.hasOwnProperty(u)){var W=o[u];if(W!=null)switch(u){case"name":f=W;break;case"type":v=W;break;case"checked":I=W;break;case"defaultChecked":L=W;break;case"value":p=W;break;case"defaultValue":A=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,r));break;default:rt(n,r,u,W,o,null)}}$r(n,p,A,I,L,v,f,!1),Yr(n);return;case"select":He("invalid",n),u=v=p=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":p=A;break;case"defaultValue":v=A;break;case"multiple":u=A;default:rt(n,r,f,A,o,null)}r=p,o=v,n.multiple=!!u,r!=null?Xe(n,!!u,r,!1):o!=null&&Xe(n,!!u,o,!0);return;case"textarea":He("invalid",n),p=f=u=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":u=A;break;case"defaultValue":f=A;break;case"children":p=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:rt(n,r,v,A,o,null)}Xs(n,u,f,p),Yr(n);return;case"option":for(I in o)if(o.hasOwnProperty(I)&&(u=o[I],u!=null))switch(I){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:rt(n,r,I,u,o,null)}return;case"dialog":He("cancel",n),He("close",n);break;case"iframe":case"object":He("load",n);break;case"video":case"audio":for(u=0;u<hu.length;u++)He(hu[u],n);break;case"image":He("error",n),He("load",n);break;case"details":He("toggle",n);break;case"embed":case"source":case"link":He("error",n),He("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in o)if(o.hasOwnProperty(L)&&(u=o[L],u!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:rt(n,r,L,u,o,null)}return;default:if(Il(r)){for(W in o)o.hasOwnProperty(W)&&(u=o[W],u!==void 0&&Wp(n,r,W,u,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(u=o[A],u!=null&&rt(n,r,A,u,o,null))}function wC(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,v=null,A=null,I=null,L=null,W=null;for(K in o){var ee=o[K];if(o.hasOwnProperty(K)&&ee!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":I=ee;default:u.hasOwnProperty(K)||rt(n,r,K,null,u,ee)}}for(var H in u){var K=u[H];if(ee=o[H],u.hasOwnProperty(H)&&(K!=null||ee!=null))switch(H){case"type":p=K;break;case"name":f=K;break;case"checked":L=K;break;case"defaultChecked":W=K;break;case"value":v=K;break;case"defaultValue":A=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,r));break;default:K!==ee&&rt(n,r,H,K,u,ee)}}$s(n,v,A,I,L,W,p,f);return;case"select":K=v=A=H=null;for(p in o)if(I=o[p],o.hasOwnProperty(p)&&I!=null)switch(p){case"value":break;case"multiple":K=I;default:u.hasOwnProperty(p)||rt(n,r,p,null,u,I)}for(f in u)if(p=u[f],I=o[f],u.hasOwnProperty(f)&&(p!=null||I!=null))switch(f){case"value":H=p;break;case"defaultValue":A=p;break;case"multiple":v=p;default:p!==I&&rt(n,r,f,p,u,I)}r=A,o=v,u=K,H!=null?Xe(n,!!o,H,!1):!!u!=!!o&&(r!=null?Xe(n,!!o,r,!0):Xe(n,!!o,o?[]:"",!1));return;case"textarea":K=H=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!u.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:rt(n,r,A,null,u,f)}for(v in u)if(f=u[v],p=o[v],u.hasOwnProperty(v)&&(f!=null||p!=null))switch(v){case"value":H=f;break;case"defaultValue":K=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&rt(n,r,v,f,u,p)}Xr(n,H,K);return;case"option":for(var ve in o)if(H=o[ve],o.hasOwnProperty(ve)&&H!=null&&!u.hasOwnProperty(ve))switch(ve){case"selected":n.selected=!1;break;default:rt(n,r,ve,null,u,H)}for(I in u)if(H=u[I],K=o[I],u.hasOwnProperty(I)&&H!==K&&(H!=null||K!=null))switch(I){case"selected":n.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:rt(n,r,I,H,u,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in o)H=o[De],o.hasOwnProperty(De)&&H!=null&&!u.hasOwnProperty(De)&&rt(n,r,De,null,u,H);for(L in u)if(H=u[L],K=o[L],u.hasOwnProperty(L)&&H!==K&&(H!=null||K!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:rt(n,r,L,H,u,K)}return;default:if(Il(r)){for(var At in o)H=o[At],o.hasOwnProperty(At)&&H!==void 0&&!u.hasOwnProperty(At)&&Wp(n,r,At,void 0,u,H);for(W in u)H=u[W],K=o[W],!u.hasOwnProperty(W)||H===K||H===void 0&&K===void 0||Wp(n,r,W,H,u,K);return}}for(var j in o)H=o[j],o.hasOwnProperty(j)&&H!=null&&!u.hasOwnProperty(j)&&rt(n,r,j,null,u,H);for(ee in u)H=u[ee],K=o[ee],!u.hasOwnProperty(ee)||H===K||H==null&&K==null||rt(n,r,ee,H,u,K)}var Qp=null,Yp=null;function Ih(n){return n.nodeType===9?n:n.ownerDocument}function oE(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lE(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function $p(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Xp=null;function bC(){var n=window.event;return n&&n.type==="popstate"?n===Xp?!1:(Xp=n,!0):(Xp=null,!1)}var uE=typeof setTimeout=="function"?setTimeout:void 0,CC=typeof clearTimeout=="function"?clearTimeout:void 0,cE=typeof Promise=="function"?Promise:void 0,RC=typeof queueMicrotask=="function"?queueMicrotask:typeof cE<"u"?function(n){return cE.resolve(null).then(n).catch(IC)}:uE;function IC(n){setTimeout(function(){throw n})}function Zp(n,r){var o=r,u=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){n.removeChild(f),Eu(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);Eu(r)}function Jp(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Jp(o),Qr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function NC(n,r,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Gs])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(p=n.getAttribute("rel"),p==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(p!==f.rel||n.getAttribute("href")!==(f.href==null?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(p=n.getAttribute("src"),(p!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===p)return n}else return n;if(n=yi(n.nextSibling),n===null)break}return null}function DC(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=yi(n.nextSibling),n===null))return null;return n}function yi(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}function hE(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}function fE(n,r,o){switch(r=Ih(o),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}var li=new Map,dE=new Set;function Nh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var ws=ne.d;ne.d={f:OC,r:xC,D:kC,C:MC,L:PC,m:VC,X:UC,S:LC,M:jC};function OC(){var n=ws.f(),r=Th();return n||r}function xC(n){var r=ns(n);r!==null&&r.tag===5&&r.type==="form"?By(r):ws.r(n)}var xo=typeof document>"u"?null:document;function pE(n,r,o){var u=xo;if(u&&typeof r=="string"&&r){var f=Et(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),dE.has(f)||(dE.add(f),n={rel:n,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),rn(r,"link",n),mt(r),u.head.appendChild(r)))}}function kC(n){ws.D(n),pE("dns-prefetch",n,null)}function MC(n,r){ws.C(n,r),pE("preconnect",n,r)}function PC(n,r,o){ws.L(n,r,o);var u=xo;if(u&&n&&r){var f='link[rel="preload"][as="'+Et(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Et(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Et(o.imageSizes)+'"]')):f+='[href="'+Et(n)+'"]';var p=f;switch(r){case"style":p=ko(n);break;case"script":p=Mo(n)}li.has(p)||(n=D({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),li.set(p,n),u.querySelector(f)!==null||r==="style"&&u.querySelector(du(p))||r==="script"&&u.querySelector(pu(p))||(r=u.createElement("link"),rn(r,"link",n),mt(r),u.head.appendChild(r)))}}function VC(n,r){ws.m(n,r);var o=xo;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Et(u)+'"][href="'+Et(n)+'"]',p=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Mo(n)}if(!li.has(p)&&(n=D({rel:"modulepreload",href:n},r),li.set(p,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(pu(p)))return}u=o.createElement("link"),rn(u,"link",n),mt(u),o.head.appendChild(u)}}}function LC(n,r,o){ws.S(n,r,o);var u=xo;if(u&&n){var f=Ws(u).hoistableStyles,p=ko(n);r=r||"default";var v=f.get(p);if(!v){var A={loading:0,preload:null};if(v=u.querySelector(du(p)))A.loading=5;else{n=D({rel:"stylesheet",href:n,"data-precedence":r},o),(o=li.get(p))&&e_(n,o);var I=v=u.createElement("link");mt(I),rn(I,"link",n),I._p=new Promise(function(L,W){I.onload=L,I.onerror=W}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Dh(v,r,u)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(p,v)}}}function UC(n,r){ws.X(n,r);var o=xo;if(o&&n){var u=Ws(o).hoistableScripts,f=Mo(n),p=u.get(f);p||(p=o.querySelector(pu(f)),p||(n=D({src:n,async:!0},r),(r=li.get(f))&&t_(n,r),p=o.createElement("script"),mt(p),rn(p,"link",n),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function jC(n,r){ws.M(n,r);var o=xo;if(o&&n){var u=Ws(o).hoistableScripts,f=Mo(n),p=u.get(f);p||(p=o.querySelector(pu(f)),p||(n=D({src:n,async:!0,type:"module"},r),(r=li.get(f))&&t_(n,r),p=o.createElement("script"),mt(p),rn(p,"link",n),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function _E(n,r,o,u){var f=(f=Jt.current)?Nh(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=ko(o.href),o=Ws(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=ko(o.href);var p=Ws(f).hoistableStyles,v=p.get(n);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(n,v),(p=f.querySelector(du(n)))&&!p._p&&(v.instance=p,v.state.loading=5),li.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},li.set(n,o),p||BC(f,n,o,v.state))),r&&u===null)throw Error(s(528,""));return v}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Mo(o),o=Ws(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function ko(n){return'href="'+Et(n)+'"'}function du(n){return'link[rel="stylesheet"]['+n+"]"}function mE(n){return D({},n,{"data-precedence":n.precedence,precedence:null})}function BC(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),rn(r,"link",o),mt(r),n.head.appendChild(r))}function Mo(n){return'[src="'+Et(n)+'"]'}function pu(n){return"script[async]"+n}function gE(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+Et(o.href)+'"]');if(u)return r.instance=u,mt(u),u;var f=D({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),mt(u),rn(u,"style",f),Dh(u,o.precedence,n),r.instance=u;case"stylesheet":f=ko(o.href);var p=n.querySelector(du(f));if(p)return r.state.loading|=4,r.instance=p,mt(p),p;u=mE(o),(f=li.get(f))&&e_(u,f),p=(n.ownerDocument||n).createElement("link"),mt(p);var v=p;return v._p=new Promise(function(A,I){v.onload=A,v.onerror=I}),rn(p,"link",u),r.state.loading|=4,Dh(p,o.precedence,n),r.instance=p;case"script":return p=Mo(o.src),(f=n.querySelector(pu(p)))?(r.instance=f,mt(f),f):(u=o,(f=li.get(p))&&(u=D({},o),t_(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),mt(f),rn(f,"link",u),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Dh(u,o.precedence,n));return r.instance}function Dh(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,p=f,v=0;v<u.length;v++){var A=u[v];if(A.dataset.precedence===r)p=A;else if(p!==f)break}p?p.parentNode.insertBefore(n,p.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function e_(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function t_(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Oh=null;function yE(n,r,o){if(Oh===null){var u=new Map,f=Oh=new Map;f.set(o,u)}else f=Oh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var p=o[f];if(!(p[Gs]||p[Ft]||n==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var v=p.getAttribute(r)||"";v=n+v;var A=u.get(v);A?A.push(p):u.set(v,[p])}}return u}function vE(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function zC(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function EE(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var _u=null;function HC(){}function FC(n,r,o){if(_u===null)throw Error(s(475));var u=_u;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=ko(o.href),p=n.querySelector(du(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=xh.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=p,mt(p);return}p=n.ownerDocument||n,o=mE(o),(f=li.get(f))&&e_(o,f),p=p.createElement("link"),mt(p);var v=p;v._p=new Promise(function(A,I){v.onload=A,v.onerror=I}),rn(p,"link",o),r.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=xh.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function qC(){if(_u===null)throw Error(s(475));var n=_u;return n.stylesheets&&n.count===0&&n_(n,n.stylesheets),0<n.count?function(r){var o=setTimeout(function(){if(n.stylesheets&&n_(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(o)}}:null}function xh(){if(this.count--,this.count===0){if(this.stylesheets)n_(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var kh=null;function n_(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,kh=new Map,r.forEach(GC,n),kh=null,xh.call(n))}function GC(n,r){if(!(r.state.loading&4)){var o=kh.get(n);if(o)var u=o.get(null);else{o=new Map,kh.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var v=f[p];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),u=v)}u&&o.set(null,u)}f=r.instance,v=f.getAttribute("data-precedence"),p=o.get(v)||u,p===u&&o.set(null,f),o.set(v,f),this.count++,u=xh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),p?p.parentNode.insertBefore(f,p.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var mu={$$typeof:P,Provider:null,Consumer:null,_currentValue:ge,_currentValue2:ge,_threadCount:0};function KC(n,r,o,u,f,p,v,A){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qa(0),this.hiddenUpdates=Qa(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function TE(n,r,o,u,f,p,v,A,I,L,W,ee){return n=new KC(n,r,o,v,A,I,L,ee),r=1,p===!0&&(r|=24),p=ai(3,null,null,r),n.current=p,p.stateNode=n,r=Md(),r.refCount++,n.pooledCache=r,r.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:r},pp(p),n}function SE(n){return n?(n=ho,n):ho}function AE(n,r,o,u,f,p){f=SE(f),u.context===null?u.context=f:u.pendingContext=f,u=ar(r),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=or(n,u,r),o!==null&&(Rn(o,n,r),Jl(o,n,r))}function wE(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function i_(n,r){wE(n,r),(n=n.alternate)&&wE(n,r)}function bE(n){if(n.tag===13){var r=Js(n,67108864);r!==null&&Rn(r,n,67108864),i_(n,67108864)}}var Mh=!0;function WC(n,r,o,u){var f=b.T;b.T=null;var p=ne.p;try{ne.p=2,s_(n,r,o,u)}finally{ne.p=p,b.T=f}}function QC(n,r,o,u){var f=b.T;b.T=null;var p=ne.p;try{ne.p=8,s_(n,r,o,u)}finally{ne.p=p,b.T=f}}function s_(n,r,o,u){if(Mh){var f=r_(u);if(f===null)Kp(n,r,u,Ph,o),RE(n,u);else if($C(f,n,r,o,u))u.stopPropagation();else if(RE(n,u),r&4&&-1<YC.indexOf(n)){for(;f!==null;){var p=ns(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var v=di(p.pendingLanes);if(v!==0){var A=p;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var I=1<<31-An(v);A.entanglements[1]|=I,v&=~I}ji(p),(yt&6)===0&&(yh=en()+500,cu(0))}}break;case 13:A=Js(p,2),A!==null&&Rn(A,p,2),Th(),i_(p,2)}if(p=r_(u),p===null&&Kp(n,r,u,Ph,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else Kp(n,r,u,null,o)}}function r_(n){return n=Ja(n),a_(n)}var Ph=null;function a_(n){if(Ph=null,n=pi(n),n!==null){var r=ce(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=Ie(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Ph=n,null}function CE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ji()){case Ct:return 2;case Ht:return 8;case es:case Tc:return 32;case yl:return 268435456;default:return 32}default:return 32}}var o_=!1,pr=null,_r=null,mr=null,gu=new Map,yu=new Map,gr=[],YC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function RE(n,r){switch(n){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":gu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":yu.delete(r.pointerId)}}function vu(n,r,o,u,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},r!==null&&(r=ns(r),r!==null&&bE(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function $C(n,r,o,u,f){switch(r){case"focusin":return pr=vu(pr,n,r,o,u,f),!0;case"dragenter":return _r=vu(_r,n,r,o,u,f),!0;case"mouseover":return mr=vu(mr,n,r,o,u,f),!0;case"pointerover":var p=f.pointerId;return gu.set(p,vu(gu.get(p)||null,n,r,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,yu.set(p,vu(yu.get(p)||null,n,r,o,u,f)),!0}return!1}function IE(n){var r=pi(n.target);if(r!==null){var o=ce(r);if(o!==null){if(r=o.tag,r===13){if(r=Ie(o),r!==null){n.blockedOn=r,qs(n.priority,function(){if(o.tag===13){var u=zn(),f=Js(o,u);f!==null&&Rn(f,o,u),i_(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Vh(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=r_(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);$n=u,o.target.dispatchEvent(u),$n=null}else return r=ns(o),r!==null&&bE(r),n.blockedOn=o,!1;r.shift()}return!0}function NE(n,r,o){Vh(n)&&o.delete(r)}function XC(){o_=!1,pr!==null&&Vh(pr)&&(pr=null),_r!==null&&Vh(_r)&&(_r=null),mr!==null&&Vh(mr)&&(mr=null),gu.forEach(NE),yu.forEach(NE)}function Lh(n,r){n.blockedOn===r&&(n.blockedOn=null,o_||(o_=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,XC)))}var Uh=null;function DE(n){Uh!==n&&(Uh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Uh===n&&(Uh=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],f=n[r+2];if(typeof u!="function"){if(a_(u||o)===null)continue;break}var p=ns(o);p!==null&&(n.splice(r,3),r-=3,$d(p,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Eu(n){function r(I){return Lh(I,n)}pr!==null&&Lh(pr,n),_r!==null&&Lh(_r,n),mr!==null&&Lh(mr,n),gu.forEach(r),yu.forEach(r);for(var o=0;o<gr.length;o++){var u=gr[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<gr.length&&(o=gr[0],o.blockedOn===null);)IE(o),o.blockedOn===null&&gr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],p=o[u+1],v=f[Mt]||null;if(typeof p=="function")v||DE(o);else if(v){var A=null;if(p&&p.hasAttribute("formAction")){if(f=p,v=p[Mt]||null)A=v.formAction;else if(a_(f)!==null)continue}else A=v.action;typeof A=="function"?o[u+1]=A:(o.splice(u,3),u-=3),DE(o)}}}function l_(n){this._internalRoot=n}jh.prototype.render=l_.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=zn();AE(o,u,n,r,null,null)},jh.prototype.unmount=l_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;n.tag===0&&No(),AE(n.current,2,null,n,null,null),Th(),r[ts]=null}};function jh(n){this._internalRoot=n}jh.prototype.unstable_scheduleHydration=function(n){if(n){var r=Cc();n={blockedOn:null,target:n,priority:r};for(var o=0;o<gr.length&&r!==0&&r<gr[o].priority;o++);gr.splice(o,0,n),o===0&&IE(n)}};var OE=e.version;if(OE!=="19.0.0")throw Error(s(527,OE,"19.0.0"));ne.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=k(r),n=n!==null?te(n):null,n=n===null?null:n.stateNode,n};var ZC={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:b,findFiberByHostInstance:pi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bh.isDisabled&&Bh.supportsFiber)try{Us=Bh.inject(ZC),fn=Bh}catch{}}return Su.createRoot=function(n,r){if(!a(n))throw Error(s(299));var o=!1,u="",f=Qy,p=Yy,v=$y,A=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks)),r=TE(n,1,!1,null,null,o,u,f,p,v,A,null),n[ts]=r.current,Gp(n.nodeType===8?n.parentNode:n),new l_(r)},Su.hydrateRoot=function(n,r,o){if(!a(n))throw Error(s(299));var u=!1,f="",p=Qy,v=Yy,A=$y,I=null,L=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(I=o.unstable_transitionCallbacks),o.formState!==void 0&&(L=o.formState)),r=TE(n,1,!0,r,o??null,u,f,p,v,A,I,L),r.context=SE(null),o=r.current,u=zn(),f=ar(u),f.callback=null,or(o,f,u),r.current.lanes=u,Rt(r,u),ji(r),n[ts]=r.current,Gp(n),new jh(r)},Su.version="19.0.0",Su}var zE;function lR(){if(zE)return h_.exports;zE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),h_.exports=oR(),h_.exports}var uR=lR();const cR="_hideHome_1it95_19",hR="_home_wrapper_1it95_27",fR="_left_1it95_41",dR="_wrapTop_1it95_59",pR="_wrapBottom_1it95_139",_R="_orange_1it95_169",mR="_purple_1it95_175",gR="_blue_1it95_181",yR="_right_1it95_191",Bi={hideHome:cR,home_wrapper:hR,left:fR,wrapTop:dR,wrapBottom:pR,orange:_R,purple:mR,blue:gR,right:yR},ye=({className:i,content:e,func:t,submit:s,icon:a,change:l,element:c})=>S.jsxs("button",{className:`${i}`,onChange:()=>{l()},onSubmit:d=>{s(d)},onClick:()=>{t()},children:[a,e,c]}),vR="_nav_11pvi_45",ER="_hideNav_11pvi_53",TR="_left_11pvi_99",SR="_middle_11pvi_127",AR="_NavLinks_11pvi_127",wR="_indicated_11pvi_173",bR="_indication_11pvi_183",CR="_right_11pvi_201",RR="_HamburgerButt_11pvi_231",IR="_SignInButt_11pvi_247",NR="_SignUpButt_11pvi_281",DR="_sidebar_11pvi_313",OR="_hideSideBar_11pvi_323",xR="_User_Button_11pvi_541",lt={nav:vR,hideNav:ER,left:TR,middle:SR,NavLinks:AR,indicated:wR,indication:bR,right:CR,HamburgerButt:RR,SignInButt:IR,SignUpButt:NR,sidebar:DR,hideSideBar:OR,User_Button:xR},kR=()=>{};var HE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=function(i,e){if(!i)throw ll(e)},ll=function(i){return new Error("Firebase Database ("+QS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},MR=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],d=i[t++],_=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(_>>10)),e[s++]=String.fromCharCode(56320+(_&1023))}else{const l=i[t++],c=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},ym={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,d=c?i[a+1]:0,_=a+2<i.length,m=_?i[a+2]:0,E=l>>2,T=(l&3)<<4|d>>4;let R=(d&15)<<2|m>>6,P=m&63;_||(P=64,c||(R=64)),s.push(t[E],t[T],t[R],t[P])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(YS(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):MR(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],d=a<i.length?t[i.charAt(a)]:0;++a;const m=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||d==null||m==null||T==null)throw new PR;const R=l<<2|d>>4;if(s.push(R),m!==64){const P=d<<4&240|m>>2;if(s.push(P),T!==64){const q=m<<6&192|T;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class PR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $S=function(i){const e=YS(i);return ym.encodeByteArray(e,!0)},lf=function(i){return $S(i).replace(/\./g,"")},uf=function(i){try{return ym.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(i){return XS(void 0,i)}function XS(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!LR(t)||(i[t]=XS(i[t],e[t]));return i}function LR(i){return i!=="__proto__"}/**
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
 */function UR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jR=()=>UR().__FIREBASE_DEFAULTS__,BR=()=>{if(typeof process>"u"||typeof HE>"u")return;const i=HE.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},zR=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&uf(i[1]);return e&&JSON.parse(e)},Lf=()=>{try{return kR()||jR()||BR()||zR()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},ZS=i=>{var e,t;return(t=(e=Lf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},HR=i=>{const e=ZS(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},JS=()=>{var i;return(i=Lf())===null||i===void 0?void 0:i.config},e0=i=>{var e;return(e=Lf())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function FR(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[lf(JSON.stringify(t)),lf(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Em(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Sn())}function qR(){var i;const e=(i=Lf())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function KR(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function t0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WR(){const i=Sn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function QR(){return QS.NODE_ADMIN===!0}function YR(){return!qR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $R(){try{return typeof indexedDB=="object"}catch{return!1}}function XR(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR="FirebaseError";class Ps extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ZR,Object.setPrototypeOf(this,Ps.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ac.prototype.create)}}class ac{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?JR(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Ps(a,d,s)}}function JR(i,e){return i.replace(eI,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const eI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(i){return JSON.parse(i)}function ln(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=function(i){let e={},t={},s={},a="";try{const l=i.split(".");e=Qu(uf(l[0])||""),t=Qu(uf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},tI=function(i){const e=n0(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},nI=function(i){const e=n0(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Xo(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function k_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function cf(i,e,t){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(t,i[a],a,i));return s}function xr(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=i[a],c=e[a];if(FE(l)&&FE(c)){if(!xr(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function FE(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ku(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Mu(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const R=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(R<<1|R>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],_=this.chain_[4],m,E;for(let T=0;T<80;T++){T<40?T<20?(m=d^l&(c^d),E=1518500249):(m=l^c^d,E=1859775393):T<60?(m=l&c|d&(l|c),E=2400959708):(m=l^c^d,E=3395469782);const R=(a<<5|a>>>27)+m+_+E+s[T]&4294967295;_=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=R}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function sI(i,e){const t=new rI(i,e);return t.subscribe.bind(t)}class rI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");aI(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=__),a.error===void 0&&(a.error=__),a.complete===void 0&&(a.complete=__);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aI(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function __(){}function oI(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,he(s<i.length,"Surrogate pair missing trail surrogate.");const c=i.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Uf=function(i){let e=0;for(let t=0;t<i.length;t++){const s=i.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function cn(i){return i&&i._delegate?i._delegate:i}class kr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wa="[DEFAULT]";/**
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
 */class uI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new vm;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hI(e))try{this.getOrInitializeService({instanceIdentifier:wa})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=wa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wa){return this.instances.has(e)}getOptions(e=wa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=wa){return this.component?this.component.multipleInstances?e:wa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cI(i){return i===wa?void 0:i}function hI(i){return i.instantiationMode==="EAGER"}/**
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
 */class fI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new uI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(je||(je={}));const dI={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},pI=je.INFO,_I={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},mI=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=_I[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jf{constructor(e){this.name=e,this._logLevel=pI,this._logHandler=mI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...e),this._logHandler(this,je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...e),this._logHandler(this,je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,je.INFO,...e),this._logHandler(this,je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,je.WARN,...e),this._logHandler(this,je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...e),this._logHandler(this,je.ERROR,...e)}}const gI=(i,e)=>e.some(t=>i instanceof t);let qE,GE;function yI(){return qE||(qE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vI(){return GE||(GE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const i0=new WeakMap,M_=new WeakMap,s0=new WeakMap,m_=new WeakMap,Tm=new WeakMap;function EI(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(Rr(i.result)),a()},c=()=>{s(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&i0.set(t,i)}).catch(()=>{}),Tm.set(e,i),e}function TI(i){if(M_.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});M_.set(i,e)}let P_={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return M_.get(i);if(e==="objectStoreNames")return i.objectStoreNames||s0.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function SI(i){P_=i(P_)}function AI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(g_(this),e,...t);return s0.set(s,e.sort?e.sort():[e]),Rr(s)}:vI().includes(i)?function(...e){return i.apply(g_(this),e),Rr(i0.get(this))}:function(...e){return Rr(i.apply(g_(this),e))}}function wI(i){return typeof i=="function"?AI(i):(i instanceof IDBTransaction&&TI(i),gI(i,yI())?new Proxy(i,P_):i)}function Rr(i){if(i instanceof IDBRequest)return EI(i);if(m_.has(i))return m_.get(i);const e=wI(i);return e!==i&&(m_.set(i,e),Tm.set(e,i)),e}const g_=i=>Tm.get(i);function bI(i,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),d=Rr(c);return s&&c.addEventListener("upgradeneeded",_=>{s(Rr(c.result),_.oldVersion,_.newVersion,Rr(c.transaction),_)}),t&&c.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),d.then(_=>{l&&_.addEventListener("close",()=>l()),a&&_.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const CI=["get","getKey","getAll","getAllKeys","count"],RI=["put","add","delete","clear"],y_=new Map;function KE(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(y_.get(e))return y_.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=RI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||CI.includes(t)))return;const l=async function(c,...d){const _=this.transaction(c,a?"readwrite":"readonly");let m=_.store;return s&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),a&&_.done]))[0]};return y_.set(e,l),l}SI(i=>({...i,get:(e,t,s)=>KE(e,t)||i.get(e,t,s),has:(e,t)=>!!KE(e,t)||i.has(e,t)}));/**
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
 */class II{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(NI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function NI(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const V_="@firebase/app",WE="0.11.2";/**
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
 */const Os=new jf("@firebase/app"),DI="@firebase/app-compat",OI="@firebase/analytics-compat",xI="@firebase/analytics",kI="@firebase/app-check-compat",MI="@firebase/app-check",PI="@firebase/auth",VI="@firebase/auth-compat",LI="@firebase/database",UI="@firebase/data-connect",jI="@firebase/database-compat",BI="@firebase/functions",zI="@firebase/functions-compat",HI="@firebase/installations",FI="@firebase/installations-compat",qI="@firebase/messaging",GI="@firebase/messaging-compat",KI="@firebase/performance",WI="@firebase/performance-compat",QI="@firebase/remote-config",YI="@firebase/remote-config-compat",$I="@firebase/storage",XI="@firebase/storage-compat",ZI="@firebase/firestore",JI="@firebase/vertexai",e1="@firebase/firestore-compat",t1="firebase",n1="11.4.0";/**
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
 */const L_="[DEFAULT]",i1={[V_]:"fire-core",[DI]:"fire-core-compat",[xI]:"fire-analytics",[OI]:"fire-analytics-compat",[MI]:"fire-app-check",[kI]:"fire-app-check-compat",[PI]:"fire-auth",[VI]:"fire-auth-compat",[LI]:"fire-rtdb",[UI]:"fire-data-connect",[jI]:"fire-rtdb-compat",[BI]:"fire-fn",[zI]:"fire-fn-compat",[HI]:"fire-iid",[FI]:"fire-iid-compat",[qI]:"fire-fcm",[GI]:"fire-fcm-compat",[KI]:"fire-perf",[WI]:"fire-perf-compat",[QI]:"fire-rc",[YI]:"fire-rc-compat",[$I]:"fire-gcs",[XI]:"fire-gcs-compat",[ZI]:"fire-fst",[e1]:"fire-fst-compat",[JI]:"fire-vertex","fire-js":"fire-js",[t1]:"fire-js-all"};/**
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
 */const hf=new Map,s1=new Map,U_=new Map;function QE(i,e){try{i.container.addComponent(e)}catch(t){Os.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Ia(i){const e=i.name;if(U_.has(e))return Os.debug(`There were multiple attempts to register component ${e}.`),!1;U_.set(e,i);for(const t of hf.values())QE(t,i);for(const t of s1.values())QE(t,i);return!0}function Sm(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Fn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const r1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new ac("app","Firebase",r1);/**
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
 */class a1{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
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
 */const ja=n1;function r0(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:L_,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw Ir.create("bad-app-name",{appName:String(a)});if(t||(t=JS()),!t)throw Ir.create("no-options");const l=hf.get(a);if(l){if(xr(t,l.options)&&xr(s,l.config))return l;throw Ir.create("duplicate-app",{appName:a})}const c=new fI(a);for(const _ of U_.values())c.addComponent(_);const d=new a1(t,s,c);return hf.set(a,d),d}function a0(i=L_){const e=hf.get(i);if(!e&&i===L_&&JS())return r0();if(!e)throw Ir.create("no-app",{appName:i});return e}function qi(i,e,t){var s;let a=(s=i1[i])!==null&&s!==void 0?s:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Os.warn(d.join(" "));return}Ia(new kr(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const o1="firebase-heartbeat-database",l1=1,Yu="firebase-heartbeat-store";let v_=null;function o0(){return v_||(v_=bI(o1,l1,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Yu)}catch(t){console.warn(t)}}}}).catch(i=>{throw Ir.create("idb-open",{originalErrorMessage:i.message})})),v_}async function u1(i){try{const t=(await o0()).transaction(Yu),s=await t.objectStore(Yu).get(l0(i));return await t.done,s}catch(e){if(e instanceof Ps)Os.warn(e.message);else{const t=Ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Os.warn(t.message)}}}async function YE(i,e){try{const s=(await o0()).transaction(Yu,"readwrite");await s.objectStore(Yu).put(e,l0(i)),await s.done}catch(t){if(t instanceof Ps)Os.warn(t.message);else{const s=Ir.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Os.warn(s.message)}}}function l0(i){return`${i.name}!${i.options.appId}`}/**
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
 */const c1=1024,h1=30;class f1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new p1(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=$E();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>h1){const c=_1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Os.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$E(),{heartbeatsToSend:s,unsentEntries:a}=d1(this._heartbeatsCache.heartbeats),l=lf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Os.warn(t),""}}}function $E(){return new Date().toISOString().substring(0,10)}function d1(i,e=c1){const t=[];let s=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),XE(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),XE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class p1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $R()?XR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await u1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return YE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return YE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function XE(i){return lf(JSON.stringify({version:2,heartbeats:i})).length}function _1(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function m1(i){Ia(new kr("platform-logger",e=>new II(e),"PRIVATE")),Ia(new kr("heartbeat",e=>new f1(e),"PRIVATE")),qi(V_,WE,i),qi(V_,WE,"esm2017"),qi("fire-js","")}m1("");function Am(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(t[s[a]]=i[s[a]]);return t}function u0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const g1=u0,c0=new ac("auth","Firebase",u0());/**
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
 */const ff=new jf("@firebase/auth");function y1(i,...e){ff.logLevel<=je.WARN&&ff.warn(`Auth (${ja}): ${i}`,...e)}function Xh(i,...e){ff.logLevel<=je.ERROR&&ff.error(`Auth (${ja}): ${i}`,...e)}/**
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
 */function Si(i,...e){throw wm(i,...e)}function Gi(i,...e){return wm(i,...e)}function h0(i,e,t){const s=Object.assign(Object.assign({},g1()),{[e]:t});return new ac("auth","Firebase",s).create(e,{appName:i.name})}function Ns(i){return h0(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wm(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return c0.create(i,...e)}function be(i,e,...t){if(!i)throw wm(e,...t)}function bs(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Xh(e),new Error(e)}function xs(i,e){i||bs(e)}/**
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
 */function j_(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function v1(){return ZE()==="http:"||ZE()==="https:"}function ZE(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function E1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(v1()||KR()||"connection"in navigator)?navigator.onLine:!0}function T1(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class oc{constructor(e,t){this.shortDelay=e,this.longDelay=t,xs(t>e,"Short delay should be less than long delay!"),this.isMobile=Em()||t0()}get(){return E1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class f0{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const S1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const A1=new oc(3e4,6e4);function zr(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Hr(i,e,t,s,a={}){return d0(i,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=ul(Object.assign({key:i.config.apiKey},c)).slice(1),_=await i._getAdditionalHeaders();_["Content-Type"]="application/json",i.languageCode&&(_["X-Firebase-Locale"]=i.languageCode);const m=Object.assign({method:e,headers:_},l);return GR()||(m.referrerPolicy="no-referrer"),f0.fetch()(p0(i,i.config.apiHost,t,d),m)})}async function d0(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},S1),e);try{const a=new b1(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw zh(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[_,m]=d.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw zh(i,"credential-already-in-use",c);if(_==="EMAIL_EXISTS")throw zh(i,"email-already-in-use",c);if(_==="USER_DISABLED")throw zh(i,"user-disabled",c);const E=s[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw h0(i,E,m);Si(i,E)}}catch(a){if(a instanceof Ps)throw a;Si(i,"network-request-failed",{message:String(a)})}}async function lc(i,e,t,s,a={}){const l=await Hr(i,e,t,s,a);return"mfaPendingCredential"in l&&Si(i,"multi-factor-auth-required",{_serverResponse:l}),l}function p0(i,e,t,s){const a=`${e}${t}?${s}`;return i.config.emulator?bm(i.config,a):`${i.config.apiScheme}://${a}`}function w1(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class b1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Gi(this.auth,"network-request-failed")),A1.get())})}}function zh(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Gi(i,e,s);return a.customData._tokenResponse=t,a}function JE(i){return i!==void 0&&i.enterprise!==void 0}class C1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return w1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function R1(i,e){return Hr(i,"GET","/v2/recaptchaConfig",zr(i,e))}/**
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
 */async function I1(i,e){return Hr(i,"POST","/v1/accounts:delete",e)}async function _0(i,e){return Hr(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function ju(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function N1(i,e=!1){const t=cn(i),s=await t.getIdToken(e),a=Cm(s);be(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:ju(E_(a.auth_time)),issuedAtTime:ju(E_(a.iat)),expirationTime:ju(E_(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function E_(i){return Number(i)*1e3}function Cm(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Xh("JWT malformed, contained fewer than 3 sections"),null;try{const a=uf(t);return a?JSON.parse(a):(Xh("Failed to decode base64 JWT payload"),null)}catch(a){return Xh("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function eT(i){const e=Cm(i);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $u(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ps&&D1(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function D1({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class O1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class B_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ju(this.lastLoginAt),this.creationTime=ju(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function df(i){var e;const t=i.auth,s=await i.getIdToken(),a=await $u(i,_0(t,{idToken:s}));be(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?m0(l.providerUserInfo):[],d=k1(i.providerData,c),_=i.isAnonymous,m=!(i.email&&l.passwordHash)&&!(d!=null&&d.length),E=_?m:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new B_(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(i,T)}async function x1(i){const e=cn(i);await df(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function k1(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function m0(i){return i.map(e=>{var{providerId:t}=e,s=Am(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function M1(i,e){const t=await d0(i,{},async()=>{const s=ul({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=p0(i,a,"/v1/token",`key=${l}`),d=await i._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",f0.fetch()(c,{method:"POST",headers:d,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function P1(i,e){return Hr(i,"POST","/v2/accounts:revokeToken",zr(i,e))}/**
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
 */class Go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){be(e.length!==0,"internal-error");const t=eT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await M1(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new Go;return s&&(be(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(be(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(be(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Go,this.toJSON())}_performRefresh(){return bs("not implemented")}}/**
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
 */function vr(i,e){be(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Cs{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=Am(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new O1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new B_(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await $u(this,this.stsTokenManager.getToken(this.auth,e));return be(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return N1(this,e)}reload(){return x1(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Cs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await df(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fn(this.auth.app))return Promise.reject(Ns(this.auth));const e=await this.getIdToken();return await $u(this,I1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,d,_,m,E;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,R=(a=t.email)!==null&&a!==void 0?a:void 0,P=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,q=(c=t.photoURL)!==null&&c!==void 0?c:void 0,Q=(d=t.tenantId)!==null&&d!==void 0?d:void 0,F=(_=t._redirectEventId)!==null&&_!==void 0?_:void 0,X=(m=t.createdAt)!==null&&m!==void 0?m:void 0,Y=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:J,emailVerified:fe,isAnonymous:de,providerData:Ce,stsTokenManager:x}=t;be(J&&x,e,"internal-error");const C=Go.fromJSON(this.name,x);be(typeof J=="string",e,"internal-error"),vr(T,e.name),vr(R,e.name),be(typeof fe=="boolean",e,"internal-error"),be(typeof de=="boolean",e,"internal-error"),vr(P,e.name),vr(q,e.name),vr(Q,e.name),vr(F,e.name),vr(X,e.name),vr(Y,e.name);const b=new Cs({uid:J,auth:e,email:R,emailVerified:fe,displayName:T,isAnonymous:de,photoURL:q,phoneNumber:P,tenantId:Q,stsTokenManager:C,createdAt:X,lastLoginAt:Y});return Ce&&Array.isArray(Ce)&&(b.providerData=Ce.map(D=>Object.assign({},D))),F&&(b._redirectEventId=F),b}static async _fromIdTokenResponse(e,t,s=!1){const a=new Go;a.updateFromServerResponse(t);const l=new Cs({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await df(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];be(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?m0(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new Go;d.updateFromIdToken(s);const _=new Cs({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new B_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(_,m),_}}/**
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
 */const tT=new Map;function Rs(i){xs(i instanceof Function,"Expected a class definition");let e=tT.get(i);return e?(xs(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,tT.set(i,e),e)}/**
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
 */class g0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}g0.type="NONE";const nT=g0;/**
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
 */function Zh(i,e,t){return`firebase:${i}:${e}:${t}`}class Ko{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=Zh(this.userKey,a.apiKey,l),this.fullPersistenceKey=Zh("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Ko(Rs(nT),e,s);const a=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=a[0]||Rs(nT);const c=Zh(s,e.config.apiKey,e.name);let d=null;for(const m of t)try{const E=await m._get(c);if(E){const T=Cs._fromJSON(e,E);m!==l&&(d=T),l=m;break}}catch{}const _=a.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!_.length?new Ko(l,e,s):(l=_[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==l)try{await m._remove(c)}catch{}})),new Ko(l,e,s))}}/**
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
 */function iT(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(T0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(y0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(A0(e))return"Blackberry";if(w0(e))return"Webos";if(v0(e))return"Safari";if((e.includes("chrome/")||E0(e))&&!e.includes("edge/"))return"Chrome";if(S0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function y0(i=Sn()){return/firefox\//i.test(i)}function v0(i=Sn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function E0(i=Sn()){return/crios\//i.test(i)}function T0(i=Sn()){return/iemobile/i.test(i)}function S0(i=Sn()){return/android/i.test(i)}function A0(i=Sn()){return/blackberry/i.test(i)}function w0(i=Sn()){return/webos/i.test(i)}function Rm(i=Sn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function V1(i=Sn()){var e;return Rm(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function L1(){return WR()&&document.documentMode===10}function b0(i=Sn()){return Rm(i)||S0(i)||w0(i)||A0(i)||/windows phone/i.test(i)||T0(i)}/**
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
 */function C0(i,e=[]){let t;switch(i){case"Browser":t=iT(Sn());break;case"Worker":t=`${iT(Sn())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ja}/${s}`}/**
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
 */class U1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const _=e(l);c(_)}catch(_){d(_)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function j1(i,e={}){return Hr(i,"GET","/v2/passwordPolicy",zr(i,e))}/**
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
 */const B1=6;class z1{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:B1,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,d;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,_),this.validatePasswordCharacterOptions(e,_),_.isValid&&(_.isValid=(t=_.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),_.isValid&&(_.isValid=(s=_.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),_.isValid&&(_.isValid=(a=_.containsLowercaseLetter)!==null&&a!==void 0?a:!0),_.isValid&&(_.isValid=(l=_.containsUppercaseLetter)!==null&&l!==void 0?l:!0),_.isValid&&(_.isValid=(c=_.containsNumericCharacter)!==null&&c!==void 0?c:!0),_.isValid&&(_.isValid=(d=_.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),_}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class H1{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sT(this),this.idTokenSubscription=new sT(this),this.beforeStateQueue=new U1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rs(t)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await Ko.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await _0(this,{idToken:e}),s=await Cs._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Fn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,_=await this.tryRedirectSignIn(e);(!c||c===d)&&(_!=null&&_.user)&&(a=_.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await df(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fn(this.app))return Promise.reject(Ns(this));const t=e?cn(e):null;return t&&be(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fn(this.app)?Promise.reject(Ns(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fn(this.app)?Promise.reject(Ns(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await j1(this),t=new z1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ac("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await P1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rs(e)||this._popupRedirectResolver;be(t,this,"argument-error"),this.redirectPersistenceManager=await Ko.create(this,[Rs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,s,a);return()=>{c=!0,_()}}else{const _=e.addObserver(t);return()=>{c=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=C0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(Fn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&y1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ba(i){return cn(i)}class sT{constructor(e){this.auth=e,this.observer=null,this.addObserver=sI(t=>this.observer=t)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Bf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function F1(i){Bf=i}function R0(i){return Bf.loadJS(i)}function q1(){return Bf.recaptchaEnterpriseScript}function G1(){return Bf.gapiScript}function K1(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class W1{constructor(){this.enterprise=new Q1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Q1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Y1="recaptcha-enterprise",I0="NO_RECAPTCHA";class $1{constructor(e){this.type=Y1,this.auth=Ba(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{R1(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new C1(_);return l.tenantId==null?l._agentRecaptchaConfig=m:l._tenantRecaptchaConfigs[l.tenantId]=m,c(m.siteKey)}}).catch(_=>{d(_)})})}function a(l,c,d){const _=window.grecaptcha;JE(_)?_.enterprise.ready(()=>{_.enterprise.execute(l,{action:e}).then(m=>{c(m)}).catch(()=>{c(I0)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new W1().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(d=>{if(!t&&JE(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let _=q1();_.length!==0&&(_+=d),R0(_).then(()=>{a(d,l,c)}).catch(m=>{c(m)})}}).catch(d=>{c(d)})})}}async function rT(i,e,t,s=!1,a=!1){const l=new $1(i);let c;if(a)c=I0;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const _=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const _=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function z_(i,e,t,s,a){var l;if(!((l=i._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await rT(i,e,t,t==="getOobCode");return s(i,c)}else return s(i,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await rT(i,e,t,t==="getOobCode");return s(i,d)}else return Promise.reject(c)})}/**
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
 */function X1(i,e){const t=Sm(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(xr(l,e??{}))return a;Si(a,"already-initialized")}return t.initialize({options:e})}function Z1(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Rs);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function J1(i,e,t){const s=Ba(i);be(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=N0(e),{host:c,port:d}=eN(e),_=d===null?"":`:${d}`,m={url:`${l}//${c}${_}/`},E=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){be(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),be(xr(m,s.config.emulator)&&xr(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=m,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,tN()}function N0(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function eN(i){const e=N0(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:aT(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:aT(c)}}}function aT(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function tN(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Im{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bs("not implemented")}_getIdTokenResponse(e){return bs("not implemented")}_linkToIdToken(e,t){return bs("not implemented")}_getReauthenticationResolver(e){return bs("not implemented")}}async function nN(i,e){return Hr(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function iN(i,e){return lc(i,"POST","/v1/accounts:signInWithPassword",zr(i,e))}/**
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
 */async function sN(i,e){return lc(i,"POST","/v1/accounts:signInWithEmailLink",zr(i,e))}async function rN(i,e){return lc(i,"POST","/v1/accounts:signInWithEmailLink",zr(i,e))}/**
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
 */class Xu extends Im{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Xu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Xu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return z_(e,t,"signInWithPassword",iN);case"emailLink":return sN(e,{email:this._email,oobCode:this._password});default:Si(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return z_(e,s,"signUpPassword",nN);case"emailLink":return rN(e,{idToken:t,email:this._email,oobCode:this._password});default:Si(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Wo(i,e){return lc(i,"POST","/v1/accounts:signInWithIdp",zr(i,e))}/**
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
 */const aN="http://localhost";class Na extends Im{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Na(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Si("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=Am(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new Na(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Wo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Wo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wo(e,t)}buildRequest(){const e={requestUri:aN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ul(t)}return e}}/**
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
 */function oN(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lN(i){const e=ku(Mu(i)).link,t=e?ku(Mu(e)).deep_link_id:null,s=ku(Mu(i)).deep_link_id;return(s?ku(Mu(s)).link:null)||s||t||e||i}class Nm{constructor(e){var t,s,a,l,c,d;const _=ku(Mu(e)),m=(t=_.apiKey)!==null&&t!==void 0?t:null,E=(s=_.oobCode)!==null&&s!==void 0?s:null,T=oN((a=_.mode)!==null&&a!==void 0?a:null);be(m&&E&&T,"argument-error"),this.apiKey=m,this.operation=T,this.code=E,this.continueUrl=(l=_.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=_.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=_.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=lN(e);try{return new Nm(t)}catch{return null}}}/**
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
 */class cl{constructor(){this.providerId=cl.PROVIDER_ID}static credential(e,t){return Xu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Nm.parseLink(t);return be(s,"argument-error"),Xu._fromEmailAndCode(e,s.code,s.tenantId)}}cl.PROVIDER_ID="password";cl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class D0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class uc extends D0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Sr extends uc{constructor(){super("facebook.com")}static credential(e){return Na._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sr.PROVIDER_ID="facebook.com";/**
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
 */class Ar extends uc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Na._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ar.credential(t,s)}catch{return null}}}Ar.GOOGLE_SIGN_IN_METHOD="google.com";Ar.PROVIDER_ID="google.com";/**
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
 */class wr extends uc{constructor(){super("github.com")}static credential(e){return Na._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
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
 */class br extends uc{constructor(){super("twitter.com")}static credential(e,t){return Na._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return br.credential(t,s)}catch{return null}}}br.TWITTER_SIGN_IN_METHOD="twitter.com";br.PROVIDER_ID="twitter.com";/**
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
 */async function uN(i,e){return lc(i,"POST","/v1/accounts:signUp",zr(i,e))}/**
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
 */class Da{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await Cs._fromIdTokenResponse(e,s,a),c=oT(s);return new Da({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=oT(s);return new Da({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function oT(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class pf extends Ps{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,pf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new pf(e,t,s,a)}}function O0(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?pf._fromErrorAndOperation(i,l,e,s):l})}async function cN(i,e,t=!1){const s=await $u(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Da._forOperation(i,"link",s)}/**
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
 */async function hN(i,e,t=!1){const{auth:s}=i;if(Fn(s.app))return Promise.reject(Ns(s));const a="reauthenticate";try{const l=await $u(i,O0(s,a,e,i),t);be(l.idToken,s,"internal-error");const c=Cm(l.idToken);be(c,s,"internal-error");const{sub:d}=c;return be(i.uid===d,s,"user-mismatch"),Da._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Si(s,"user-mismatch"),l}}/**
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
 */async function x0(i,e,t=!1){if(Fn(i.app))return Promise.reject(Ns(i));const s="signIn",a=await O0(i,s,e),l=await Da._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(l.user),l}async function fN(i,e){return x0(Ba(i),e)}/**
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
 */async function k0(i){const e=Ba(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dN(i,e,t){if(Fn(i.app))return Promise.reject(Ns(i));const s=Ba(i),c=await z_(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uN).catch(_=>{throw _.code==="auth/password-does-not-meet-requirements"&&k0(i),_}),d=await Da._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(d.user),d}function pN(i,e,t){return Fn(i.app)?Promise.reject(Ns(i)):fN(cn(i),cl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&k0(i),s})}function _N(i,e,t,s){return cn(i).onIdTokenChanged(e,t,s)}function mN(i,e,t){return cn(i).beforeAuthStateChanged(e,t)}function gN(i,e,t,s){return cn(i).onAuthStateChanged(e,t,s)}function M0(i){return cn(i).signOut()}const _f="__sak";/**
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
 */class P0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_f,"1"),this.storage.removeItem(_f),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yN=1e3,vN=10;class V0 extends P0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=b0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,_)=>{this.notifyListeners(c,_)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);L1()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,vN):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},yN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}V0.type="LOCAL";const EN=V0;/**
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
 */class L0 extends P0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}L0.type="SESSION";const U0=L0;/**
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
 */function TN(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class zf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new zf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async m=>m(t.origin,l)),_=await TN(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zf.receivers=[];/**
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
 */class SN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,_)=>{const m=Dm("",20);a.port1.start();const E=setTimeout(()=>{_(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const R=T;if(R.data.eventId===m)switch(R.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(R.data.response);break;default:clearTimeout(E),clearTimeout(l),_(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Ki(){return window}function AN(i){Ki().location.href=i}/**
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
 */function j0(){return typeof Ki().WorkerGlobalScope<"u"&&typeof Ki().importScripts=="function"}async function wN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bN(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function CN(){return j0()?self:null}/**
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
 */const B0="firebaseLocalStorageDb",RN=1,mf="firebaseLocalStorage",z0="fbase_key";class cc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Hf(i,e){return i.transaction([mf],e?"readwrite":"readonly").objectStore(mf)}function IN(){const i=indexedDB.deleteDatabase(B0);return new cc(i).toPromise()}function H_(){const i=indexedDB.open(B0,RN);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(mf,{keyPath:z0})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(mf)?e(s):(s.close(),await IN(),e(await H_()))})})}async function lT(i,e,t){const s=Hf(i,!0).put({[z0]:e,value:t});return new cc(s).toPromise()}async function NN(i,e){const t=Hf(i,!1).get(e),s=await new cc(t).toPromise();return s===void 0?null:s.value}function uT(i,e){const t=Hf(i,!0).delete(e);return new cc(t).toPromise()}const DN=800,ON=3;class H0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await H_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>ON)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return j0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zf._getInstance(CN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await wN(),!this.activeServiceWorker)return;this.sender=new SN(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await H_();return await lT(e,_f,"1"),await uT(e,_f),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>lT(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>NN(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>uT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Hf(a,!1).getAll();return new cc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}H0.type="LOCAL";const xN=H0;new oc(3e4,6e4);/**
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
 */function kN(i,e){return e?Rs(e):(be(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Om extends Im{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function MN(i){return x0(i.auth,new Om(i),i.bypassAuthState)}function PN(i){const{auth:e,user:t}=i;return be(t,e,"internal-error"),hN(t,new Om(i),i.bypassAuthState)}async function VN(i){const{auth:e,user:t}=i;return be(t,e,"internal-error"),cN(t,new Om(i),i.bypassAuthState)}/**
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
 */class F0{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const _={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(_))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MN;case"linkViaPopup":case"linkViaRedirect":return VN;case"reauthViaPopup":case"reauthViaRedirect":return PN;default:Si(this.auth,"internal-error")}}resolve(e){xs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const LN=new oc(2e3,1e4);class Ho extends F0{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Ho.currentPopupAction&&Ho.currentPopupAction.cancel(),Ho.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){xs(this.filter.length===1,"Popup operations only handle one event");const e=Dm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Gi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ho.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LN.get())};e()}}Ho.currentPopupAction=null;/**
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
 */const UN="pendingRedirect",Jh=new Map;class jN extends F0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Jh.get(this.auth._key());if(!e){try{const s=await BN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Jh.set(this.auth._key(),e)}return this.bypassAuthState||Jh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BN(i,e){const t=FN(e),s=HN(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function zN(i,e){Jh.set(i._key(),e)}function HN(i){return Rs(i._redirectPersistence)}function FN(i){return Zh(UN,i.config.apiKey,i.name)}async function qN(i,e,t=!1){if(Fn(i.app))return Promise.reject(Ns(i));const s=Ba(i),a=kN(s,e),c=await new jN(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const GN=10*60*1e3;class KN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!q0(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Gi(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GN&&this.cachedEventUids.clear(),this.cachedEventUids.has(cT(e))}saveEventToCache(e){this.cachedEventUids.add(cT(e)),this.lastProcessedEventTime=Date.now()}}function cT(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function q0({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WN(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return q0(i);default:return!1}}/**
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
 */async function QN(i,e={}){return Hr(i,"GET","/v1/projects",e)}/**
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
 */const YN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$N=/^https?/;async function XN(i){if(i.config.emulator)return;const{authorizedDomains:e}=await QN(i);for(const t of e)try{if(ZN(t))return}catch{}Si(i,"unauthorized-domain")}function ZN(i){const e=j_(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!$N.test(t))return!1;if(YN.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const JN=new oc(3e4,6e4);function hT(){const i=Ki().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function eD(i){return new Promise((e,t)=>{var s,a,l;function c(){hT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hT(),t(Gi(i,"network-request-failed"))},timeout:JN.get()})}if(!((a=(s=Ki().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Ki().gapi)===null||l===void 0)&&l.load)c();else{const d=K1("iframefcb");return Ki()[d]=()=>{gapi.load?c():t(Gi(i,"network-request-failed"))},R0(`${G1()}?onload=${d}`).catch(_=>t(_))}}).catch(e=>{throw ef=null,e})}let ef=null;function tD(i){return ef=ef||eD(i),ef}/**
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
 */const nD=new oc(5e3,15e3),iD="__/auth/iframe",sD="emulator/auth/iframe",rD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oD(i){const e=i.config;be(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?bm(e,sD):`https://${i.config.authDomain}/${iD}`,s={apiKey:e.apiKey,appName:i.name,v:ja},a=aD.get(i.config.apiHost);a&&(s.eid=a);const l=i._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${ul(s).slice(1)}`}async function lD(i){const e=await tD(i),t=Ki().gapi;return be(t,i,"internal-error"),e.open({where:document.body,url:oD(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rD,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=Gi(i,"network-request-failed"),d=Ki().setTimeout(()=>{l(c)},nD.get());function _(){Ki().clearTimeout(d),a(s)}s.ping(_).then(_,()=>{l(c)})}))}/**
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
 */const uD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cD=500,hD=600,fD="_blank",dD="http://localhost";class fT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pD(i,e,t,s=cD,a=hD){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const _=Object.assign(Object.assign({},uD),{width:s.toString(),height:a.toString(),top:l,left:c}),m=Sn().toLowerCase();t&&(d=E0(m)?fD:t),y0(m)&&(e=e||dD,_.scrollbars="yes");const E=Object.entries(_).reduce((R,[P,q])=>`${R}${P}=${q},`,"");if(V1(m)&&d!=="_self")return _D(e||"",d),new fT(null);const T=window.open(e||"",d,E);be(T,i,"popup-blocked");try{T.focus()}catch{}return new fT(T)}function _D(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const mD="__/auth/handler",gD="emulator/auth/handler",yD=encodeURIComponent("fac");async function dT(i,e,t,s,a,l){be(i.config.authDomain,i,"auth-domain-config-required"),be(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:ja,eventId:a};if(e instanceof D0){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",k_(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))c[E]=T}if(e instanceof uc){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(c.scopes=E.join(","))}i.tenantId&&(c.tid=i.tenantId);const d=c;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const _=await i._getAppCheckToken(),m=_?`#${yD}=${encodeURIComponent(_)}`:"";return`${vD(i)}?${ul(d).slice(1)}${m}`}function vD({config:i}){return i.emulator?bm(i,gD):`https://${i.authDomain}/${mD}`}/**
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
 */const T_="webStorageSupport";class ED{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=U0,this._completeRedirectFn=qN,this._overrideRedirectResult=zN}async _openPopup(e,t,s,a){var l;xs((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await dT(e,t,s,j_(),a);return pD(e,c,Dm())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await dT(e,t,s,j_(),a);return AN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(xs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await lD(e),s=new KN(e);return t.register("authEvent",a=>(be(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(T_,{type:T_},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[T_];c!==void 0&&t(!!c),Si(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=XN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return b0()||v0()||Rm()}}const TD=ED;var pT="@firebase/auth",_T="1.9.1";/**
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
 */class SD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function AD(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wD(i){Ia(new kr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;be(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const _={apiKey:c,authDomain:d,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:C0(i)},m=new H1(s,a,l,_);return Z1(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ia(new kr("auth-internal",e=>{const t=Ba(e.getProvider("auth").getImmediate());return(s=>new SD(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),qi(pT,_T,AD(i)),qi(pT,_T,"esm2017")}/**
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
 */const bD=5*60,CD=e0("authIdTokenMaxAge")||bD;let mT=null;const RD=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>CD)return;const a=t==null?void 0:t.token;mT!==a&&(mT=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function ID(i=a0()){const e=Sm(i,"auth");if(e.isInitialized())return e.getImmediate();const t=X1(i,{popupRedirectResolver:TD,persistence:[xN,EN,U0]}),s=e0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=RD(l.toString());mN(t,c,()=>c(t.currentUser)),_N(t,d=>c(d))}}const a=ZS("auth");return a&&J1(t,`http://${a}`),t}function ND(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}F1({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const l=Gi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",ND().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wD("Browser");var DD="firebase",OD="11.4.0";/**
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
 */qi(DD,OD,"app");var gT={};const yT="@firebase/database",vT="1.0.13";/**
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
 */let G0="";function xD(i){G0=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ln(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Qu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Vs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kD(e)}}catch{}return new MD},Ca=K0("localStorage"),PD=K0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=new jf("@firebase/database"),VD=function(){let i=1;return function(){return i++}}(),W0=function(i){const e=lI(i),t=new iI;t.update(e);const s=t.digest();return ym.encodeByteArray(s)},hc=function(...i){let e="";for(let t=0;t<i.length;t++){const s=i[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=hc.apply(null,s):typeof s=="object"?e+=ln(s):e+=s,e+=" "}return e};let Bu=null,ET=!0;const LD=function(i,e){he(!0,"Can't turn on custom loggers persistently."),Qo.logLevel=je.VERBOSE,Bu=Qo.log.bind(Qo)},yn=function(...i){if(ET===!0&&(ET=!1,Bu===null&&PD.get("logging_enabled")===!0&&LD()),Bu){const e=hc.apply(null,i);Bu(e)}},fc=function(i){return function(...e){yn(i,...e)}},F_=function(...i){const e="FIREBASE INTERNAL ERROR: "+hc(...i);Qo.error(e)},Oa=function(...i){const e=`FIREBASE FATAL ERROR: ${hc(...i)}`;throw Qo.error(e),new Error(e)},Gn=function(...i){const e="FIREBASE WARNING: "+hc(...i);Qo.warn(e)},UD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Gn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Q0=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},jD=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Zo="[MIN_NAME]",xa="[MAX_NAME]",hl=function(i,e){if(i===e)return 0;if(i===Zo||e===xa)return-1;if(e===Zo||i===xa)return 1;{const t=TT(i),s=TT(e);return t!==null?s!==null?t-s===0?i.length-e.length:t-s:-1:s!==null?1:i<e?-1:1}},BD=function(i,e){return i===e?0:i<e?-1:1},Au=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+ln(e))},xm=function(i){if(typeof i!="object"||i===null)return ln(i);const e=[];for(const s in i)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ln(e[s]),t+=":",t+=xm(i[e[s]]);return t+="}",t},Y0=function(i,e){const t=i.length;if(t<=e)return[i];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(i.substring(a,t)):s.push(i.substring(a,a+e));return s};function ci(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const $0=function(i){he(!Q0(i),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,_;i===0?(l=0,c=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(i)/Math.LN2),s),l=d+s,c=Math.round(i*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(i/Math.pow(2,1-s-t))));const m=[];for(_=t;_;_-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(_=e;_;_-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(a?1:0),m.reverse();const E=m.join("");let T="";for(_=0;_<64;_+=8){let R=parseInt(E.substr(_,8),2).toString(16);R.length===1&&(R="0"+R),T=T+R}return T.toLowerCase()},zD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},HD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},FD=new RegExp("^-?(0*)\\d{1,10}$"),qD=-2147483648,GD=2147483647,TT=function(i){if(FD.test(i)){const e=Number(i);if(e>=qD&&e<=GD)return e}return null},dc=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Gn("Exception was thrown by user callback.",t),e},Math.floor(0))}},KD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zu=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class WD{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Fn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Gn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(yn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Gn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="5",X0="v",Z0="s",J0="r",eA="f",tA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,nA="ls",iA="p",q_="ac",sA="websocket",rA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,t,s,a,l=!1,c="",d=!1,_=!1,m=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=_,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ca.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ca.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function $D(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function aA(i,e,t){he(typeof e=="string","typeof type must == string"),he(typeof t=="object","typeof params must == object");let s;if(e===sA)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===rA)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$D(i)&&(t.ns=i.namespace);const a=[];return ci(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(){this.counters_={}}incrementCounter(e,t=1){Vs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return VR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_={},A_={};function Mm(i){const e=i.toString();return S_[e]||(S_[e]=new XD),S_[e]}function ZD(i,e){const t=i.toString();return A_[t]||(A_[t]=e()),A_[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&dc(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="start",eO="close",tO="pLPCommand",nO="pRTLPCB",oA="id",lA="pw",uA="ser",iO="cb",sO="seg",rO="ts",aO="d",oO="dframe",cA=1870,hA=30,lO=cA-hA,uO=25e3,cO=3e4;class Fo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fc(e),this.stats_=Mm(t),this.urlFn=_=>(this.appCheckToken&&(_[q_]=this.appCheckToken),aA(t,rA,_))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new JD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cO)),jD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pm((...l)=>{const[c,d,_,m,E]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===ST)this.id=d,this.password=_;else if(c===eO)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[ST]="t",s[uA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[iO]=this.scriptTagHolder.uniqueCallbackIdentifier),s[X0]=km,this.transportSessionId&&(s[Z0]=this.transportSessionId),this.lastSessionId&&(s[nA]=this.lastSessionId),this.applicationId&&(s[iA]=this.applicationId),this.appCheckToken&&(s[q_]=this.appCheckToken),typeof location<"u"&&location.hostname&&tA.test(location.hostname)&&(s[J0]=eA);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fo.forceAllow_=!0}static forceDisallow(){Fo.forceDisallow_=!0}static isAvailable(){return Fo.forceAllow_?!0:!Fo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zD()&&!HD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ln(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=$S(t),a=Y0(s,lO);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[oO]="t",s[oA]=e,s[lA]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ln(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Pm{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=VD(),window[tO+this.uniqueCallbackIdentifier]=e,window[nO+this.uniqueCallbackIdentifier]=t,this.myIFrame=Pm.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){yn("frame writing exception"),d.stack&&yn(d.stack),yn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||yn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[oA]=this.myID,e[lA]=this.myPW,e[uA]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+hA+s.length<=cA;){const c=this.pendingSegs.shift();s=s+"&"+sO+a+"="+c.seg+"&"+rO+a+"="+c.ts+"&"+aO+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(uO)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{yn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO=16384,fO=45e3;let gf=null;typeof MozWebSocket<"u"?gf=MozWebSocket:typeof WebSocket<"u"&&(gf=WebSocket);class vi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fc(this.connId),this.stats_=Mm(t),this.connURL=vi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[X0]=km,typeof location<"u"&&location.hostname&&tA.test(location.hostname)&&(c[J0]=eA),t&&(c[Z0]=t),s&&(c[nA]=s),a&&(c[q_]=a),l&&(c[iA]=l),aA(e,sA,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ca.set("previous_websocket_failure",!0);try{let s;QR(),this.mySock=new gf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){vi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&gf!==null&&!vi.forceDisallow_}static previouslyFailed(){return Ca.isInMemoryStorage||Ca.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ca.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Qu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(he(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ln(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Y0(t,hO);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(fO))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vi.responsesRequiredToBeHealthy=2;vi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{static get ALL_TRANSPORTS(){return[Fo,vi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=vi&&vi.isAvailable();let s=t&&!vi.previouslyFailed();if(e.webSocketOnly&&(t||Gn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[vi];else{const a=this.transports_=[];for(const l of Zu.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Zu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=6e4,pO=5e3,_O=10*1024,mO=100*1024,w_="t",AT="d",gO="s",wT="r",yO="e",bT="o",CT="a",RT="n",IT="p",vO="h";class EO{constructor(e,t,s,a,l,c,d,_,m,E){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=_,this.onKill_=m,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fc("c:"+this.id+":"),this.transportManager_=new Zu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=zu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>mO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_O?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(w_ in e){const t=e[w_];t===CT?this.upgradeIfSecondaryHealthy_():t===wT?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===bT&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Au("t",e),s=Au("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:IT,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:CT,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:RT,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Au("t",e),s=Au("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Au(w_,e);if(AT in e){const s=e[AT];if(t===vO){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===RT){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===gO?this.onConnectionShutdown_(s):t===wT?this.onReset_(s):t===yO?F_("Server Error: "+s):t===bT?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):F_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),km!==s&&Gn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),zu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(pO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:IT,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ca.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.allowedEvents_=e,this.listeners_={},he(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){he(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf extends dA{static getInstance(){return new yf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Em()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return he(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=32,DT=768;class pt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function at(){return new pt("")}function Ye(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Mr(i){return i.pieces_.length-i.pieceNum_}function dt(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new pt(i.pieces_,e)}function pA(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function TO(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function _A(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function mA(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new pt(e,0)}function Xt(i,e){const t=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)t.push(i.pieces_[s]);if(e instanceof pt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new pt(t,0)}function qe(i){return i.pieceNum_>=i.pieces_.length}function ui(i,e){const t=Ye(i),s=Ye(e);if(t===null)return e;if(t===s)return ui(dt(i),dt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function gA(i,e){if(Mr(i)!==Mr(e))return!1;for(let t=i.pieceNum_,s=e.pieceNum_;t<=i.pieces_.length;t++,s++)if(i.pieces_[t]!==e.pieces_[s])return!1;return!0}function Ei(i,e){let t=i.pieceNum_,s=e.pieceNum_;if(Mr(i)>Mr(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class SO{constructor(e,t){this.errorPrefix_=t,this.parts_=_A(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Uf(this.parts_[s]);yA(this)}}function AO(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Uf(e),yA(i)}function wO(i){const e=i.parts_.pop();i.byteLength_-=Uf(e),i.parts_.length>0&&(i.byteLength_-=1)}function yA(i){if(i.byteLength_>DT)throw new Error(i.errorPrefix_+"has a key path longer than "+DT+" bytes ("+i.byteLength_+").");if(i.parts_.length>NT)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+NT+") or object contains a cycle "+ba(i))}function ba(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm extends dA{static getInstance(){return new Vm}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return he(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=1e3,bO=60*5*1e3,OT=30*1e3,CO=1.3,RO=3e4,IO="server_kill",xT=3;class Ds extends fA{constructor(e,t,s,a,l,c,d,_){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=_,this.id=Ds.nextPersistentConnectionId_++,this.log_=fc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wu,this.maxReconnectDelay_=bO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(ln(l)),he(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new vm,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),he(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),he(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const _=d.d,m=d.s;Ds.warnOnListenWarnings_(_,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(m,_))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Vs(e,"w")){const s=Xo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Gn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||nI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=OT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=tI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),he(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ln(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):F_("Unrecognized action received from server: "+ln(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){he(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>RO&&(this.reconnectDelay_=wu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*CO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Ds.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const _=function(){d?d.close():(c=!0,s())},m=function(T){he(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:_,sendRequest:m};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,R]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);c?yn("getToken() completed but was canceled"):(yn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=R&&R.token,d=new EO(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,P=>{Gn(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(IO)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Gn(T),_())}}}interrupt(e){yn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){yn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],k_(this.interruptReasons_)&&(this.reconnectDelay_=wu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>xm(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new pt(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){yn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xT&&(this.reconnectDelay_=OT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){yn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+G0.replace(/\./g,"-")]=1,Em()?e["framework.cordova"]=1:t0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yf.getInstance().currentlyOnline();return k_(this.interruptReasons_)&&e}}Ds.nextPersistentConnectionId_=0;Ds.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new $e(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new $e(Zo,e),a=new $e(Zo,t);return this.compare(s,a)!==0}minPost(){return $e.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh;class vA extends Ff{static get __EMPTY_NODE(){return Hh}static set __EMPTY_NODE(e){Hh=e}compare(e,t){return hl(e.name,t.name)}isDefinedOn(e){throw ll("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return $e.MIN}maxPost(){return new $e(xa,Hh)}makePost(e,t){return he(typeof e=="string","KeyIndex indexValue must always be a string."),new $e(e,Hh)}toString(){return".key"}}const Yo=new vA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fh=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Hn=class Pu{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Pu.RED,this.left=a??Hi.EMPTY_NODE,this.right=l??Hi.EMPTY_NODE}copy(e,t,s,a,l){return new Pu(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Hi.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Hi.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Hn.RED=!0;Hn.BLACK=!1;class NO{copy(e,t,s,a,l){return this}insert(e,t,s){return new Hn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Hi=class tf{constructor(e,t=tf.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new tf(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Hn.BLACK,null,null))}remove(e){return new tf(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Hn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Fh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Fh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Fh(this.root_,null,this.comparator_,!0,e)}};Hi.EMPTY_NODE=new NO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(i,e){return hl(i.name,e.name)}function Lm(i,e){return hl(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G_;function OO(i){G_=i}const EA=function(i){return typeof i=="number"?"number:"+$0(i):"string:"+i},TA=function(i){if(i.isLeafNode()){const e=i.val();he(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vs(e,".sv"),"Priority must be a string or number.")}else he(i===G_||i.isEmpty(),"priority of unexpected type.");he(i===G_||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kT;class Yt{static set __childrenNodeConstructor(e){kT=e}static get __childrenNodeConstructor(){return kT}constructor(e,t=Yt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,he(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),TA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Yt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return qe(e)?this:Ye(e)===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Yt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Ye(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(he(s!==".priority"||Mr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Yt.__childrenNodeConstructor.EMPTY_NODE.updateChild(dt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+EA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=$0(this.value_):e+=this.value_,this.lazyHash_=W0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Yt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Yt.__childrenNodeConstructor?-1:(he(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Yt.VALUE_TYPE_ORDER.indexOf(t),l=Yt.VALUE_TYPE_ORDER.indexOf(s);return he(a>=0,"Unknown leaf type: "+t),he(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Yt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SA,AA;function xO(i){SA=i}function kO(i){AA=i}class MO extends Ff{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?hl(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return $e.MIN}maxPost(){return new $e(xa,new Yt("[PRIORITY-POST]",AA))}makePost(e,t){const s=SA(e);return new $e(t,new Yt("[PRIORITY-POST]",s))}toString(){return".priority"}}const Tn=new MO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO=Math.log(2);class VO{constructor(e){const t=l=>parseInt(Math.log(l)/PO,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vf=function(i,e,t,s){i.sort(e);const a=function(_,m){const E=m-_;let T,R;if(E===0)return null;if(E===1)return T=i[_],R=t?t(T):T,new Hn(R,T.node,Hn.BLACK,null,null);{const P=parseInt(E/2,10)+_,q=a(_,P),Q=a(P+1,m);return T=i[P],R=t?t(T):T,new Hn(R,T.node,Hn.BLACK,q,Q)}},l=function(_){let m=null,E=null,T=i.length;const R=function(q,Q){const F=T-q,X=T;T-=q;const Y=a(F+1,X),J=i[F],fe=t?t(J):J;P(new Hn(fe,J.node,Q,null,Y))},P=function(q){m?(m.left=q,m=q):(E=q,m=q)};for(let q=0;q<_.count;++q){const Q=_.nextBitIsOne(),F=Math.pow(2,_.count-(q+1));Q?R(F,Hn.BLACK):(R(F,Hn.BLACK),R(F,Hn.RED))}return E},c=new VO(i.length),d=l(c);return new Hi(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b_;const Po={};class Is{static get Default(){return he(Po&&Tn,"ChildrenNode.ts has not been loaded"),b_=b_||new Is({".priority":Po},{".priority":Tn}),b_}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Xo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Hi?t:null}hasIndex(e){return Vs(this.indexSet_,e.toString())}addIndex(e,t){he(e!==Yo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator($e.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=vf(s,e.getCompare()):d=Po;const _=e.toString(),m=Object.assign({},this.indexSet_);m[_]=e;const E=Object.assign({},this.indexes_);return E[_]=d,new Is(E,m)}addToIndexes(e,t){const s=cf(this.indexes_,(a,l)=>{const c=Xo(this.indexSet_,l);if(he(c,"Missing index implementation for "+l),a===Po)if(c.isDefinedOn(e.node)){const d=[],_=t.getIterator($e.Wrap);let m=_.getNext();for(;m;)m.name!==e.name&&d.push(m),m=_.getNext();return d.push(e),vf(d,c.getCompare())}else return Po;else{const d=t.get(e.name);let _=a;return d&&(_=_.remove(new $e(e.name,d))),_.insert(e,e.node)}});return new Is(s,this.indexSet_)}removeFromIndexes(e,t){const s=cf(this.indexes_,a=>{if(a===Po)return a;{const l=t.get(e.name);return l?a.remove(new $e(e.name,l)):a}});return new Is(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu;class nt{static get EMPTY_NODE(){return bu||(bu=new nt(new Hi(Lm),null,Is.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&TA(this.priorityNode_),this.children_.isEmpty()&&he(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bu}updatePriority(e){return this.children_.isEmpty()?this:new nt(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?bu:t}}getChild(e){const t=Ye(e);return t===null?this:this.getImmediateChild(t).getChild(dt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(he(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new $e(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?bu:this.priorityNode_;return new nt(a,c,l)}}updateChild(e,t){const s=Ye(e);if(s===null)return t;{he(Ye(e)!==".priority"||Mr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(dt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(Tn,(c,d)=>{t[c]=d.val(e),s++,l&&nt.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+EA(this.getPriority().val())+":"),this.forEachChild(Tn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":W0(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new $e(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new $e(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new $e(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,$e.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,$e.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===pc?-1:0}withIndex(e){if(e===Yo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new nt(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Yo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Tn),a=t.getIterator(Tn);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Yo?null:this.indexMap_.get(e.toString())}}nt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class LO extends nt{constructor(){super(new Hi(Lm),nt.EMPTY_NODE,Is.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return nt.EMPTY_NODE}isEmpty(){return!1}}const pc=new LO;Object.defineProperties($e,{MIN:{value:new $e(Zo,nt.EMPTY_NODE)},MAX:{value:new $e(xa,pc)}});vA.__EMPTY_NODE=nt.EMPTY_NODE;Yt.__childrenNodeConstructor=nt;OO(pc);kO(pc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=!0;function vn(i,e=null){if(i===null)return nt.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),he(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new Yt(t,vn(e))}if(!(i instanceof Array)&&UO){const t=[];let s=!1;if(ci(i,(c,d)=>{if(c.substring(0,1)!=="."){const _=vn(d);_.isEmpty()||(s=s||!_.getPriority().isEmpty(),t.push(new $e(c,_)))}}),t.length===0)return nt.EMPTY_NODE;const l=vf(t,DO,c=>c.name,Lm);if(s){const c=vf(t,Tn.getCompare());return new nt(l,vn(e),new Is({".priority":c},{".priority":Tn}))}else return new nt(l,vn(e),Is.Default)}else{let t=nt.EMPTY_NODE;return ci(i,(s,a)=>{if(Vs(i,s)&&s.substring(0,1)!=="."){const l=vn(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(vn(e))}}xO(vn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO extends Ff{constructor(e){super(),this.indexPath_=e,he(!qe(e)&&Ye(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?hl(e.name,t.name):l}makePost(e,t){const s=vn(e),a=nt.EMPTY_NODE.updateChild(this.indexPath_,s);return new $e(t,a)}maxPost(){const e=nt.EMPTY_NODE.updateChild(this.indexPath_,pc);return new $e(xa,e)}toString(){return _A(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO extends Ff{compare(e,t){const s=e.node.compareTo(t.node);return s===0?hl(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return $e.MIN}maxPost(){return $e.MAX}makePost(e,t){const s=vn(e);return new $e(t,s)}toString(){return".value"}}const zO=new BO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(i){return{type:"value",snapshotNode:i}}function FO(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function qO(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function MT(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function GO(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Tn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return he(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return he(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Zo}hasEnd(){return this.endSet_}getIndexEndValue(){return he(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return he(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return he(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Tn}copy(){const e=new Um;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function PT(i){const e={};if(i.isDefault())return e;let t;if(i.index_===Tn?t="$priority":i.index_===zO?t="$value":i.index_===Yo?t="$key":(he(i.index_ instanceof jO,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=ln(t),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=ln(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+ln(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=ln(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+ln(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function VT(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==Tn&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef extends fA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(he(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=fc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=Ef.getListenId_(e,s),d={};this.listens_[c]=d;const _=PT(e._queryParams);this.restRequest_(l+".json",_,(m,E)=>{let T=E;if(m===404&&(T=null,m=null),m===null&&this.onDataUpdate_(l,T,!1,s),Xo(this.listens_,c)===d){let R;m?m===401?R="permission_denied":R="rest_error:"+m:R="ok",a(R,null)}})}unlisten(e,t){const s=Ef.getListenId_(e,t);delete this.listens_[s]}get(e){const t=PT(e._queryParams),s=e._path.toString(),a=new vm;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ul(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let _=null;if(d.status>=200&&d.status<300){try{_=Qu(d.responseText)}catch{Gn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,_)}else d.status!==401&&d.status!==404&&Gn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(){this.rootNode_=nt.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(){return{value:null,children:new Map}}function wA(i,e,t){if(qe(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const s=Ye(e);i.children.has(s)||i.children.set(s,Tf());const a=i.children.get(s);e=dt(e),wA(a,e,t)}}function K_(i,e,t){i.value!==null?t(e,i.value):WO(i,(s,a)=>{const l=new pt(e.toString()+"/"+s);K_(a,l,t)})}function WO(i,e){i.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ci(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=10*1e3,YO=30*1e3,$O=5*60*1e3;class XO{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new QO(e);const s=LT+(YO-LT)*Math.random();zu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ci(e,(a,l)=>{l>0&&Vs(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),zu(this.reportStats_.bind(this),Math.floor(Math.random()*2*$O))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fi;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Fi||(Fi={}));function bA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function CA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function RA(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Fi.ACK_USER_WRITE,this.source=bA()}operationForChild(e){if(qe(this.path)){if(this.affectedTree.value!=null)return he(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new pt(e));return new Sf(at(),t,this.revert)}}else return he(Ye(this.path)===e,"operationForChild called for unrelated child."),new Sf(dt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Fi.OVERWRITE}operationForChild(e){return qe(this.path)?new ka(this.source,at(),this.snap.getImmediateChild(e)):new ka(this.source,dt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Fi.MERGE}operationForChild(e){if(qe(this.path)){const t=this.children.subtree(new pt(e));return t.isEmpty()?null:t.value?new ka(this.source,at(),t.value):new Ju(this.source,at(),t)}else return he(Ye(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ju(this.source,dt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(qe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ye(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function ZO(i,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&i.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(GO(c.childName,c.snapshotNode))}),Cu(i,a,"child_removed",e,s,t),Cu(i,a,"child_added",e,s,t),Cu(i,a,"child_moved",l,s,t),Cu(i,a,"child_changed",e,s,t),Cu(i,a,"value",e,s,t),a}function Cu(i,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,_)=>ex(i,d,_)),c.forEach(d=>{const _=JO(i,d,l);a.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(_,i.query_))})})}function JO(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function ex(i,e,t){if(e.childName==null||t.childName==null)throw ll("Should only compare child_ events.");const s=new $e(e.childName,e.snapshotNode),a=new $e(t.childName,t.snapshotNode);return i.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(i,e){return{eventCache:i,serverCache:e}}function Hu(i,e,t,s){return IA(new jm(e,t,s),i.serverCache)}function NA(i,e,t,s){return IA(i.eventCache,new jm(e,t,s))}function W_(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Ma(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C_;const tx=()=>(C_||(C_=new Hi(BD)),C_);class ft{static fromObject(e){let t=new ft(null);return ci(e,(s,a)=>{t=t.set(new pt(s),a)}),t}constructor(e,t=tx()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:at(),value:this.value};if(qe(e))return null;{const s=Ye(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(dt(e),t);return l!=null?{path:Xt(new pt(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(qe(e))return this;{const t=Ye(e),s=this.children.get(t);return s!==null?s.subtree(dt(e)):new ft(null)}}set(e,t){if(qe(e))return new ft(t,this.children);{const s=Ye(e),l=(this.children.get(s)||new ft(null)).set(dt(e),t),c=this.children.insert(s,l);return new ft(this.value,c)}}remove(e){if(qe(e))return this.children.isEmpty()?new ft(null):new ft(null,this.children);{const t=Ye(e),s=this.children.get(t);if(s){const a=s.remove(dt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ft(null):new ft(this.value,l)}else return this}}get(e){if(qe(e))return this.value;{const t=Ye(e),s=this.children.get(t);return s?s.get(dt(e)):null}}setTree(e,t){if(qe(e))return t;{const s=Ye(e),l=(this.children.get(s)||new ft(null)).setTree(dt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new ft(this.value,c)}}fold(e){return this.fold_(at(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Xt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,at(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(qe(e))return null;{const l=Ye(e),c=this.children.get(l);return c?c.findOnPath_(dt(e),Xt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,at(),t)}foreachOnPath_(e,t,s){if(qe(e))return this;{this.value&&s(t,this.value);const a=Ye(e),l=this.children.get(a);return l?l.foreachOnPath_(dt(e),Xt(t,a),s):new ft(null)}}foreach(e){this.foreach_(at(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Xt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.writeTree_=e}static empty(){return new Ti(new ft(null))}}function Fu(i,e,t){if(qe(e))return new Ti(new ft(t));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=ui(a,e);return l=l.updateChild(c,t),new Ti(i.writeTree_.set(a,l))}else{const a=new ft(t),l=i.writeTree_.setTree(e,a);return new Ti(l)}}}function UT(i,e,t){let s=i;return ci(t,(a,l)=>{s=Fu(s,Xt(e,a),l)}),s}function jT(i,e){if(qe(e))return Ti.empty();{const t=i.writeTree_.setTree(e,new ft(null));return new Ti(t)}}function Q_(i,e){return za(i,e)!=null}function za(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild(ui(t.path,e)):null}function BT(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Tn,(s,a)=>{e.push(new $e(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new $e(s,a.value))}),e}function Nr(i,e){if(qe(e))return i;{const t=za(i,e);return t!=null?new Ti(new ft(t)):new Ti(i.writeTree_.subtree(e))}}function Y_(i){return i.writeTree_.isEmpty()}function Jo(i,e){return DA(at(),i.writeTree_,e)}function DA(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(he(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=DA(Xt(i,a),l,t)}),!t.getChild(i).isEmpty()&&s!==null&&(t=t.updateChild(Xt(i,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(i,e){return VA(e,i)}function nx(i,e,t,s,a){he(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(i.visibleWrites=Fu(i.visibleWrites,e,t)),i.lastWriteId=s}function ix(i,e){for(let t=0;t<i.allWrites.length;t++){const s=i.allWrites[t];if(s.writeId===e)return s}return null}function sx(i,e){const t=i.allWrites.findIndex(d=>d.writeId===e);he(t>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[t];i.allWrites.splice(t,1);let a=s.visible,l=!1,c=i.allWrites.length-1;for(;a&&c>=0;){const d=i.allWrites[c];d.visible&&(c>=t&&rx(d,s.path)?a=!1:Ei(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return ax(i),!0;if(s.snap)i.visibleWrites=jT(i.visibleWrites,s.path);else{const d=s.children;ci(d,_=>{i.visibleWrites=jT(i.visibleWrites,Xt(s.path,_))})}return!0}else return!1}function rx(i,e){if(i.snap)return Ei(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&Ei(Xt(i.path,t),e))return!0;return!1}function ax(i){i.visibleWrites=xA(i.allWrites,ox,at()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function ox(i){return i.visible}function xA(i,e,t){let s=Ti.empty();for(let a=0;a<i.length;++a){const l=i[a];if(e(l)){const c=l.path;let d;if(l.snap)Ei(t,c)?(d=ui(t,c),s=Fu(s,d,l.snap)):Ei(c,t)&&(d=ui(c,t),s=Fu(s,at(),l.snap.getChild(d)));else if(l.children){if(Ei(t,c))d=ui(t,c),s=UT(s,d,l.children);else if(Ei(c,t))if(d=ui(c,t),qe(d))s=UT(s,at(),l.children);else{const _=Xo(l.children,Ye(d));if(_){const m=_.getChild(dt(d));s=Fu(s,at(),m)}}}else throw ll("WriteRecord should have .snap or .children")}}return s}function kA(i,e,t,s,a){if(!s&&!a){const l=za(i.visibleWrites,e);if(l!=null)return l;{const c=Nr(i.visibleWrites,e);if(Y_(c))return t;if(t==null&&!Q_(c,at()))return null;{const d=t||nt.EMPTY_NODE;return Jo(c,d)}}}else{const l=Nr(i.visibleWrites,e);if(!a&&Y_(l))return t;if(!a&&t==null&&!Q_(l,at()))return null;{const c=function(m){return(m.visible||a)&&(!s||!~s.indexOf(m.writeId))&&(Ei(m.path,e)||Ei(e,m.path))},d=xA(i.allWrites,c,e),_=t||nt.EMPTY_NODE;return Jo(d,_)}}}function lx(i,e,t){let s=nt.EMPTY_NODE;const a=za(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(Tn,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=Nr(i.visibleWrites,e);return t.forEachChild(Tn,(c,d)=>{const _=Jo(Nr(l,new pt(c)),d);s=s.updateImmediateChild(c,_)}),BT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Nr(i.visibleWrites,e);return BT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function ux(i,e,t,s,a){he(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Xt(e,t);if(Q_(i.visibleWrites,l))return null;{const c=Nr(i.visibleWrites,l);return Y_(c)?a.getChild(t):Jo(c,a.getChild(t))}}function cx(i,e,t,s){const a=Xt(e,t),l=za(i.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=Nr(i.visibleWrites,a);return Jo(c,s.getNode().getImmediateChild(t))}else return null}function hx(i,e){return za(i.visibleWrites,e)}function fx(i,e,t,s,a,l,c){let d;const _=Nr(i.visibleWrites,e),m=za(_,at());if(m!=null)d=m;else if(t!=null)d=Jo(_,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const E=[],T=c.getCompare(),R=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let P=R.getNext();for(;P&&E.length<a;)T(P,s)!==0&&E.push(P),P=R.getNext();return E}else return[]}function dx(){return{visibleWrites:Ti.empty(),allWrites:[],lastWriteId:-1}}function $_(i,e,t,s){return kA(i.writeTree,i.treePath,e,t,s)}function MA(i,e){return lx(i.writeTree,i.treePath,e)}function zT(i,e,t,s){return ux(i.writeTree,i.treePath,e,t,s)}function Af(i,e){return hx(i.writeTree,Xt(i.treePath,e))}function px(i,e,t,s,a,l){return fx(i.writeTree,i.treePath,e,t,s,a,l)}function Bm(i,e,t){return cx(i.writeTree,i.treePath,e,t)}function PA(i,e){return VA(Xt(i.treePath,e),i.writeTree)}function VA(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;he(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),he(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,MT(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,qO(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,FO(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,MT(s,e.snapshotNode,a.oldSnap));else throw ll("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const LA=new mx;class zm{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new jm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bm(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ma(this.viewCache_),l=px(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function gx(i,e){he(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),he(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function yx(i,e,t,s,a){const l=new _x;let c,d;if(t.type===Fi.OVERWRITE){const m=t;m.source.fromUser?c=X_(i,e,m.path,m.snap,s,a,l):(he(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!qe(m.path),c=wf(i,e,m.path,m.snap,s,a,d,l))}else if(t.type===Fi.MERGE){const m=t;m.source.fromUser?c=Ex(i,e,m.path,m.children,s,a,l):(he(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),c=Z_(i,e,m.path,m.children,s,a,d,l))}else if(t.type===Fi.ACK_USER_WRITE){const m=t;m.revert?c=Ax(i,e,m.path,s,a,l):c=Tx(i,e,m.path,m.affectedTree,s,a,l)}else if(t.type===Fi.LISTEN_COMPLETE)c=Sx(i,e,t.path,s,l);else throw ll("Unknown operation type: "+t.type);const _=l.getChanges();return vx(e,c,_),{viewCache:c,changes:_}}function vx(i,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=W_(i);(t.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(HO(W_(e)))}}function UA(i,e,t,s,a,l){const c=e.eventCache;if(Af(s,t)!=null)return e;{let d,_;if(qe(t))if(he(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Ma(e),E=m instanceof nt?m:nt.EMPTY_NODE,T=MA(s,E);d=i.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const m=$_(s,Ma(e));d=i.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=Ye(t);if(m===".priority"){he(Mr(t)===1,"Can't have a priority with additional path components");const E=c.getNode();_=e.serverCache.getNode();const T=zT(s,t,E,_);T!=null?d=i.filter.updatePriority(E,T):d=c.getNode()}else{const E=dt(t);let T;if(c.isCompleteForChild(m)){_=e.serverCache.getNode();const R=zT(s,t,c.getNode(),_);R!=null?T=c.getNode().getImmediateChild(m).updateChild(E,R):T=c.getNode().getImmediateChild(m)}else T=Bm(s,m,e.serverCache);T!=null?d=i.filter.updateChild(c.getNode(),m,T,E,a,l):d=c.getNode()}}return Hu(e,d,c.isFullyInitialized()||qe(t),i.filter.filtersNodes())}}function wf(i,e,t,s,a,l,c,d){const _=e.serverCache;let m;const E=c?i.filter:i.filter.getIndexedFilter();if(qe(t))m=E.updateFullNode(_.getNode(),s,null);else if(E.filtersNodes()&&!_.isFiltered()){const P=_.getNode().updateChild(t,s);m=E.updateFullNode(_.getNode(),P,null)}else{const P=Ye(t);if(!_.isCompleteForPath(t)&&Mr(t)>1)return e;const q=dt(t),F=_.getNode().getImmediateChild(P).updateChild(q,s);P===".priority"?m=E.updatePriority(_.getNode(),F):m=E.updateChild(_.getNode(),P,F,q,LA,null)}const T=NA(e,m,_.isFullyInitialized()||qe(t),E.filtersNodes()),R=new zm(a,T,l);return UA(i,T,t,a,R,d)}function X_(i,e,t,s,a,l,c){const d=e.eventCache;let _,m;const E=new zm(a,e,l);if(qe(t))m=i.filter.updateFullNode(e.eventCache.getNode(),s,c),_=Hu(e,m,!0,i.filter.filtersNodes());else{const T=Ye(t);if(T===".priority")m=i.filter.updatePriority(e.eventCache.getNode(),s),_=Hu(e,m,d.isFullyInitialized(),d.isFiltered());else{const R=dt(t),P=d.getNode().getImmediateChild(T);let q;if(qe(R))q=s;else{const Q=E.getCompleteChild(T);Q!=null?pA(R)===".priority"&&Q.getChild(mA(R)).isEmpty()?q=Q:q=Q.updateChild(R,s):q=nt.EMPTY_NODE}if(P.equals(q))_=e;else{const Q=i.filter.updateChild(d.getNode(),T,q,R,E,c);_=Hu(e,Q,d.isFullyInitialized(),i.filter.filtersNodes())}}}return _}function HT(i,e){return i.eventCache.isCompleteForChild(e)}function Ex(i,e,t,s,a,l,c){let d=e;return s.foreach((_,m)=>{const E=Xt(t,_);HT(e,Ye(E))&&(d=X_(i,d,E,m,a,l,c))}),s.foreach((_,m)=>{const E=Xt(t,_);HT(e,Ye(E))||(d=X_(i,d,E,m,a,l,c))}),d}function FT(i,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Z_(i,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let _=e,m;qe(t)?m=s:m=new ft(null).setTree(t,s);const E=e.serverCache.getNode();return m.children.inorderTraversal((T,R)=>{if(E.hasChild(T)){const P=e.serverCache.getNode().getImmediateChild(T),q=FT(i,P,R);_=wf(i,_,new pt(T),q,a,l,c,d)}}),m.children.inorderTraversal((T,R)=>{const P=!e.serverCache.isCompleteForChild(T)&&R.value===null;if(!E.hasChild(T)&&!P){const q=e.serverCache.getNode().getImmediateChild(T),Q=FT(i,q,R);_=wf(i,_,new pt(T),Q,a,l,c,d)}}),_}function Tx(i,e,t,s,a,l,c){if(Af(a,t)!=null)return e;const d=e.serverCache.isFiltered(),_=e.serverCache;if(s.value!=null){if(qe(t)&&_.isFullyInitialized()||_.isCompleteForPath(t))return wf(i,e,t,_.getNode().getChild(t),a,l,d,c);if(qe(t)){let m=new ft(null);return _.getNode().forEachChild(Yo,(E,T)=>{m=m.set(new pt(E),T)}),Z_(i,e,t,m,a,l,d,c)}else return e}else{let m=new ft(null);return s.foreach((E,T)=>{const R=Xt(t,E);_.isCompleteForPath(R)&&(m=m.set(E,_.getNode().getChild(R)))}),Z_(i,e,t,m,a,l,d,c)}}function Sx(i,e,t,s,a){const l=e.serverCache,c=NA(e,l.getNode(),l.isFullyInitialized()||qe(t),l.isFiltered());return UA(i,c,t,s,LA,a)}function Ax(i,e,t,s,a,l){let c;if(Af(s,t)!=null)return e;{const d=new zm(s,e,a),_=e.eventCache.getNode();let m;if(qe(t)||Ye(t)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=$_(s,Ma(e));else{const T=e.serverCache.getNode();he(T instanceof nt,"serverChildren would be complete if leaf node"),E=MA(s,T)}E=E,m=i.filter.updateFullNode(_,E,l)}else{const E=Ye(t);let T=Bm(s,E,e.serverCache);T==null&&e.serverCache.isCompleteForChild(E)&&(T=_.getImmediateChild(E)),T!=null?m=i.filter.updateChild(_,E,T,dt(t),d,l):e.eventCache.getNode().hasChild(E)?m=i.filter.updateChild(_,E,nt.EMPTY_NODE,dt(t),d,l):m=_,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=$_(s,Ma(e)),c.isLeafNode()&&(m=i.filter.updateFullNode(m,c,l)))}return c=e.serverCache.isFullyInitialized()||Af(s,at())!=null,Hu(e,m,c,i.filter.filtersNodes())}}function wx(i,e){const t=Ma(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!qe(e)&&!t.getImmediateChild(Ye(e)).isEmpty())?t.getChild(e):null}function qT(i,e,t,s){e.type===Fi.MERGE&&e.source.queryId!==null&&(he(Ma(i.viewCache_),"We should always have a full cache before handling merges"),he(W_(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,l=yx(i.processor_,a,e,t,s);return gx(i.processor_,l.viewCache),he(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=l.viewCache,bx(i,l.changes,l.viewCache.eventCache.getNode())}function bx(i,e,t,s){const a=i.eventRegistrations_;return ZO(i.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GT;function Cx(i){he(!GT,"__referenceConstructor has already been defined"),GT=i}function Hm(i,e,t,s){const a=e.source.queryId;if(a!==null){const l=i.views.get(a);return he(l!=null,"SyncTree gave us an op for an invalid query."),qT(l,e,t,s)}else{let l=[];for(const c of i.views.values())l=l.concat(qT(c,e,t,s));return l}}function Fm(i,e){let t=null;for(const s of i.views.values())t=t||wx(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let KT;function Rx(i){he(!KT,"__referenceConstructor has already been defined"),KT=i}class WT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ft(null),this.pendingWriteTree_=dx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ix(i,e,t,s,a){return nx(i.pendingWriteTree_,e,t,s,a),a?Gf(i,new ka(bA(),e,t)):[]}function qo(i,e,t=!1){const s=ix(i.pendingWriteTree_,e);if(sx(i.pendingWriteTree_,e)){let l=new ft(null);return s.snap!=null?l=l.set(at(),!0):ci(s.children,c=>{l=l.set(new pt(c),!0)}),Gf(i,new Sf(s.path,l,t))}else return[]}function qf(i,e,t){return Gf(i,new ka(CA(),e,t))}function Nx(i,e,t){const s=ft.fromObject(t);return Gf(i,new Ju(CA(),e,s))}function Dx(i,e,t,s){const a=HA(i,s);if(a!=null){const l=FA(a),c=l.path,d=l.queryId,_=ui(c,e),m=new ka(RA(d),_,t);return qA(i,c,m)}else return[]}function Ox(i,e,t,s){const a=HA(i,s);if(a){const l=FA(a),c=l.path,d=l.queryId,_=ui(c,e),m=ft.fromObject(t),E=new Ju(RA(d),_,m);return qA(i,c,E)}else return[]}function jA(i,e,t){const a=i.pendingWriteTree_,l=i.syncPointTree_.findOnPath(e,(c,d)=>{const _=ui(c,e),m=Fm(d,_);if(m)return m});return kA(a,e,l,t,!0)}function Gf(i,e){return BA(e,i.syncPointTree_,null,OA(i.pendingWriteTree_,at()))}function BA(i,e,t,s){if(qe(i.path))return zA(i,e,t,s);{const a=e.get(at());t==null&&a!=null&&(t=Fm(a,at()));let l=[];const c=Ye(i.path),d=i.operationForChild(c),_=e.children.get(c);if(_&&d){const m=t?t.getImmediateChild(c):null,E=PA(s,c);l=l.concat(BA(d,_,m,E))}return a&&(l=l.concat(Hm(a,i,s,t))),l}}function zA(i,e,t,s){const a=e.get(at());t==null&&a!=null&&(t=Fm(a,at()));let l=[];return e.children.inorderTraversal((c,d)=>{const _=t?t.getImmediateChild(c):null,m=PA(s,c),E=i.operationForChild(c);E&&(l=l.concat(zA(E,d,_,m)))}),a&&(l=l.concat(Hm(a,i,s,t))),l}function HA(i,e){return i.tagToQueryMap.get(e)}function FA(i){const e=i.indexOf("$");return he(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new pt(i.substr(0,e))}}function qA(i,e,t){const s=i.syncPointTree_.get(e);he(s,"Missing sync point for query tag that we're tracking");const a=OA(i.pendingWriteTree_,e);return Hm(s,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new qm(t)}node(){return this.node_}}class Gm{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Xt(this.path_,e);return new Gm(this.syncTree_,t)}node(){return jA(this.syncTree_,this.path_)}}const xx=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},QT=function(i,e,t){if(!i||typeof i!="object")return i;if(he(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return kx(i[".sv"],e,t);if(typeof i[".sv"]=="object")return Mx(i[".sv"],e);he(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},kx=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:he(!1,"Unexpected server value: "+i)}},Mx=function(i,e,t){i.hasOwnProperty("increment")||he(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&he(!1,"Unexpected increment value: "+s);const a=e.node();if(he(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},Px=function(i,e,t,s){return Km(e,new Gm(t,i),s)},Vx=function(i,e,t){return Km(i,new qm(e),t)};function Km(i,e,t){const s=i.getPriority().val(),a=QT(s,e.getImmediateChild(".priority"),t);let l;if(i.isLeafNode()){const c=i,d=QT(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Yt(d,vn(a)):i}else{const c=i;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Yt(a))),c.forEachChild(Tn,(d,_)=>{const m=Km(_,e.getImmediateChild(d),t);m!==_&&(l=l.updateImmediateChild(d,m))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Qm(i,e){let t=e instanceof pt?e:new pt(e),s=i,a=Ye(t);for(;a!==null;){const l=Xo(s.node.children,a)||{children:{},childCount:0};s=new Wm(a,s,l),t=dt(t),a=Ye(t)}return s}function fl(i){return i.node.value}function GA(i,e){i.node.value=e,J_(i)}function KA(i){return i.node.childCount>0}function Lx(i){return fl(i)===void 0&&!KA(i)}function Kf(i,e){ci(i.node.children,(t,s)=>{e(new Wm(t,i,s))})}function WA(i,e,t,s){t&&e(i),Kf(i,a=>{WA(a,e,!0)})}function Ux(i,e,t){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function _c(i){return new pt(i.parent===null?i.name:_c(i.parent)+"/"+i.name)}function J_(i){i.parent!==null&&jx(i.parent,i.name,i)}function jx(i,e,t){const s=Lx(t),a=Vs(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,J_(i)):!s&&!a&&(i.node.children[e]=t.node,i.node.childCount++,J_(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx=/[\[\].#$\/\u0000-\u001F\u007F]/,zx=/[\[\].#$\u0000-\u001F\u007F]/,R_=10*1024*1024,QA=function(i){return typeof i=="string"&&i.length!==0&&!Bx.test(i)},Hx=function(i){return typeof i=="string"&&i.length!==0&&!zx.test(i)},Fx=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Hx(i)},YA=function(i,e,t){const s=t instanceof pt?new SO(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+ba(s));if(typeof e=="function")throw new Error(i+"contains a function "+ba(s)+" with contents = "+e.toString());if(Q0(e))throw new Error(i+"contains "+e.toString()+" "+ba(s));if(typeof e=="string"&&e.length>R_/3&&Uf(e)>R_)throw new Error(i+"contains a string greater than "+R_+" utf8 bytes "+ba(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(ci(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!QA(c)))throw new Error(i+" contains an invalid key ("+c+") "+ba(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);AO(s,c),YA(i,d,s),wO(s)}),a&&l)throw new Error(i+' contains ".value" child '+ba(s)+" in addition to actual children.")}},qx=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!QA(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Fx(t))throw new Error(oI(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Kx(i,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!gA(l,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&i.eventLists_.push(t)}function Ha(i,e,t){Kx(i,t),Wx(i,s=>Ei(s,e)||Ei(e,s))}function Wx(i,e){i.recursionDepth_++;let t=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const l=a.path;e(l)?(Qx(i.eventLists_[s]),i.eventLists_[s]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function Qx(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const s=t.getEventRunner();Bu&&yn("event: "+t.toString()),dc(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx="repo_interrupt",$x=25;class Xx{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Gx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tf(),this.transactionQueueTree_=new Wm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Zx(i,e,t){if(i.stats_=Mm(i.repoInfo_),i.forceRestClient_||KD())i.server_=new Ef(i.repoInfo_,(s,a,l,c)=>{YT(i,s,a,l,c)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>$T(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ln(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new Ds(i.repoInfo_,e,(s,a,l,c)=>{YT(i,s,a,l,c)},s=>{$T(i,s)},s=>{ek(i,s)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=ZD(i.repoInfo_,()=>new XO(i.stats_,i.server_)),i.infoData_=new KO,i.infoSyncTree_=new WT({startListening:(s,a,l,c)=>{let d=[];const _=i.infoData_.getNode(s._path);return _.isEmpty()||(d=qf(i.infoSyncTree_,s._path,_),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),Ym(i,"connected",!1),i.serverSyncTree_=new WT({startListening:(s,a,l,c)=>(i.server_.listen(s,l,a,(d,_)=>{const m=c(d,_);Ha(i.eventQueue_,s._path,m)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function Jx(i){const t=i.infoData_.getNode(new pt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function $A(i){return xx({timestamp:Jx(i)})}function YT(i,e,t,s,a){i.dataUpdateCount++;const l=new pt(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const _=cf(t,m=>vn(m));c=Ox(i.serverSyncTree_,l,_,a)}else{const _=vn(t);c=Dx(i.serverSyncTree_,l,_,a)}else if(s){const _=cf(t,m=>vn(m));c=Nx(i.serverSyncTree_,l,_)}else{const _=vn(t);c=qf(i.serverSyncTree_,l,_)}let d=l;c.length>0&&(d=Xm(i,l)),Ha(i.eventQueue_,d,c)}function $T(i,e){Ym(i,"connected",e),e===!1&&nk(i)}function ek(i,e){ci(e,(t,s)=>{Ym(i,t,s)})}function Ym(i,e,t){const s=new pt("/.info/"+e),a=vn(t);i.infoData_.updateSnapshot(s,a);const l=qf(i.infoSyncTree_,s,a);Ha(i.eventQueue_,s,l)}function tk(i){return i.nextWriteId_++}function nk(i){XA(i,"onDisconnectEvents");const e=$A(i),t=Tf();K_(i.onDisconnect_,at(),(a,l)=>{const c=Px(a,l,i.serverSyncTree_,e);wA(t,a,c)});let s=[];K_(t,at(),(a,l)=>{s=s.concat(qf(i.serverSyncTree_,a,l));const c=ak(i,a);Xm(i,c)}),i.onDisconnect_=Tf(),Ha(i.eventQueue_,at(),s)}function ik(i){i.persistentConnection_&&i.persistentConnection_.interrupt(Yx)}function XA(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),yn(t,...e)}function ZA(i,e,t){return jA(i.serverSyncTree_,e,t)||nt.EMPTY_NODE}function $m(i,e=i.transactionQueueTree_){if(e||Wf(i,e),fl(e)){const t=ew(i,e);he(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&sk(i,_c(e),t)}else KA(e)&&Kf(e,t=>{$m(i,t)})}function sk(i,e,t){const s=t.map(m=>m.currentWriteId),a=ZA(i,e,s);let l=a;const c=a.hash();for(let m=0;m<t.length;m++){const E=t[m];he(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const T=ui(e,E.path);l=l.updateChild(T,E.currentOutputSnapshotRaw)}const d=l.val(!0),_=e;i.server_.put(_.toString(),d,m=>{XA(i,"transaction put response",{path:_.toString(),status:m});let E=[];if(m==="ok"){const T=[];for(let R=0;R<t.length;R++)t[R].status=2,E=E.concat(qo(i.serverSyncTree_,t[R].currentWriteId)),t[R].onComplete&&T.push(()=>t[R].onComplete(null,!0,t[R].currentOutputSnapshotResolved)),t[R].unwatcher();Wf(i,Qm(i.transactionQueueTree_,e)),$m(i,i.transactionQueueTree_),Ha(i.eventQueue_,e,E);for(let R=0;R<T.length;R++)dc(T[R])}else{if(m==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Gn("transaction at "+_.toString()+" failed: "+m);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=m}Xm(i,e)}},c)}function Xm(i,e){const t=JA(i,e),s=_c(t),a=ew(i,t);return rk(i,a,s),s}function rk(i,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const _=e[d],m=ui(t,_.path);let E=!1,T;if(he(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)E=!0,T=_.abortReason,a=a.concat(qo(i.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=$x)E=!0,T="maxretry",a=a.concat(qo(i.serverSyncTree_,_.currentWriteId,!0));else{const R=ZA(i,_.path,c);_.currentInputSnapshot=R;const P=e[d].update(R.val());if(P!==void 0){YA("transaction failed: Data returned ",P,_.path);let q=vn(P);typeof P=="object"&&P!=null&&Vs(P,".priority")||(q=q.updatePriority(R.getPriority()));const F=_.currentWriteId,X=$A(i),Y=Vx(q,R,X);_.currentOutputSnapshotRaw=q,_.currentOutputSnapshotResolved=Y,_.currentWriteId=tk(i),c.splice(c.indexOf(F),1),a=a.concat(Ix(i.serverSyncTree_,_.path,Y,_.currentWriteId,_.applyLocally)),a=a.concat(qo(i.serverSyncTree_,F,!0))}else E=!0,T="nodata",a=a.concat(qo(i.serverSyncTree_,_.currentWriteId,!0))}Ha(i.eventQueue_,t,a),a=[],E&&(e[d].status=2,function(R){setTimeout(R,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Wf(i,i.transactionQueueTree_);for(let d=0;d<s.length;d++)dc(s[d]);$m(i,i.transactionQueueTree_)}function JA(i,e){let t,s=i.transactionQueueTree_;for(t=Ye(e);t!==null&&fl(s)===void 0;)s=Qm(s,t),e=dt(e),t=Ye(e);return s}function ew(i,e){const t=[];return tw(i,e,t),t.sort((s,a)=>s.order-a.order),t}function tw(i,e,t){const s=fl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Kf(e,a=>{tw(i,a,t)})}function Wf(i,e){const t=fl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,GA(e,t.length>0?t:void 0)}Kf(e,s=>{Wf(i,s)})}function ak(i,e){const t=_c(JA(i,e)),s=Qm(i.transactionQueueTree_,e);return Ux(s,a=>{I_(i,a)}),I_(i,s),WA(s,a=>{I_(i,a)}),t}function I_(i,e){const t=fl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(he(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(he(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(qo(i.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?GA(e,void 0):t.length=l+1,Ha(i.eventQueue_,_c(e),a);for(let c=0;c<s.length;c++)dc(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(i){let e="";const t=i.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function lk(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Gn(`Invalid query segment '${t}' in query '${i}'`)}return e}const XT=function(i,e){const t=uk(i),s=t.namespace;t.domain==="firebase.com"&&Oa(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Oa("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||UD();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new YD(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new pt(t.pathString)}},uk=function(i){let e="",t="",s="",a="",l="",c=!0,d="https",_=443;if(typeof i=="string"){let m=i.indexOf("//");m>=0&&(d=i.substring(0,m-1),i=i.substring(m+2));let E=i.indexOf("/");E===-1&&(E=i.length);let T=i.indexOf("?");T===-1&&(T=i.length),e=i.substring(0,Math.min(E,T)),E<T&&(a=ok(i.substring(E,T)));const R=lk(i.substring(Math.min(i.length,T)));m=e.indexOf(":"),m>=0?(c=d==="https"||d==="wss",_=parseInt(e.substring(m+1),10)):m=e.length;const P=e.slice(0,m);if(P.toLowerCase()==="localhost")t="localhost";else if(P.split(".").length<=2)t=P;else{const q=e.indexOf(".");s=e.substring(0,q).toLowerCase(),t=e.substring(q+1),l=s}"ns"in R&&(l=R.ns)}return{host:e,port:_,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
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
 */class Zm{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return qe(this._path)?null:pA(this._path)}get ref(){return new dl(this._repo,this._path)}get _queryIdentifier(){const e=VT(this._queryParams),t=xm(e);return t==="{}"?"default":t}get _queryObject(){return VT(this._queryParams)}isEqual(e){if(e=cn(e),!(e instanceof Zm))return!1;const t=this._repo===e._repo,s=gA(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+TO(this._path)}}class dl extends Zm{constructor(e,t){super(e,t,new Um,!1)}get parent(){const e=mA(this._path);return e===null?null:new dl(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Cx(dl);Rx(dl);/**
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
 */const ck="FIREBASE_DATABASE_EMULATOR_HOST",em={};let hk=!1;function fk(i,e,t,s,a){let l=s||i.options.databaseURL;l===void 0&&(i.options.projectId||Oa("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),yn("Using default host for project ",i.options.projectId),l=`${i.options.projectId}-default-rtdb.firebaseio.com`);let c=XT(l,a),d=c.repoInfo,_;typeof process<"u"&&gT&&(_=gT[ck]),_?(l=`http://${_}?ns=${d.namespace}`,c=XT(l,a),d=c.repoInfo):c.repoInfo.secure;const m=new QD(i.name,i.options,e);qx("Invalid Firebase Database URL",c),qe(c.path)||Oa("Database URL must point to the root of a Firebase Database (not including a child path).");const E=pk(d,i,m,new WD(i,t));return new _k(E,i)}function dk(i,e){const t=em[e];(!t||t[i.key]!==i)&&Oa(`Database ${e}(${i.repoInfo_}) has already been deleted.`),ik(i),delete t[i.key]}function pk(i,e,t,s){let a=em[e.name];a||(a={},em[e.name]=a);let l=a[i.toURLString()];return l&&Oa("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new Xx(i,hk,t,s),a[i.toURLString()]=l,l}class _k{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Zx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dl(this._repo,at())),this._rootInternal}_delete(){return this._rootInternal!==null&&(dk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Oa("Cannot call "+e+" on a deleted database.")}}/**
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
 */function mk(i){xD(ja),Ia(new kr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return fk(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),qi(yT,vT,i),qi(yT,vT,"esm2017")}Ds.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Ds.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};mk();var ZT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,nw;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,C){function b(){}b.prototype=C.prototype,x.D=C.prototype,x.prototype=new b,x.prototype.constructor=x,x.C=function(D,M,U){for(var N=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)N[ke-2]=arguments[ke];return C.prototype[M].apply(D,N)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(x,C,b){b||(b=0);var D=Array(16);if(typeof C=="string")for(var M=0;16>M;++M)D[M]=C.charCodeAt(b++)|C.charCodeAt(b++)<<8|C.charCodeAt(b++)<<16|C.charCodeAt(b++)<<24;else for(M=0;16>M;++M)D[M]=C[b++]|C[b++]<<8|C[b++]<<16|C[b++]<<24;C=x.g[0],b=x.g[1],M=x.g[2];var U=x.g[3],N=C+(U^b&(M^U))+D[0]+3614090360&4294967295;C=b+(N<<7&4294967295|N>>>25),N=U+(M^C&(b^M))+D[1]+3905402710&4294967295,U=C+(N<<12&4294967295|N>>>20),N=M+(b^U&(C^b))+D[2]+606105819&4294967295,M=U+(N<<17&4294967295|N>>>15),N=b+(C^M&(U^C))+D[3]+3250441966&4294967295,b=M+(N<<22&4294967295|N>>>10),N=C+(U^b&(M^U))+D[4]+4118548399&4294967295,C=b+(N<<7&4294967295|N>>>25),N=U+(M^C&(b^M))+D[5]+1200080426&4294967295,U=C+(N<<12&4294967295|N>>>20),N=M+(b^U&(C^b))+D[6]+2821735955&4294967295,M=U+(N<<17&4294967295|N>>>15),N=b+(C^M&(U^C))+D[7]+4249261313&4294967295,b=M+(N<<22&4294967295|N>>>10),N=C+(U^b&(M^U))+D[8]+1770035416&4294967295,C=b+(N<<7&4294967295|N>>>25),N=U+(M^C&(b^M))+D[9]+2336552879&4294967295,U=C+(N<<12&4294967295|N>>>20),N=M+(b^U&(C^b))+D[10]+4294925233&4294967295,M=U+(N<<17&4294967295|N>>>15),N=b+(C^M&(U^C))+D[11]+2304563134&4294967295,b=M+(N<<22&4294967295|N>>>10),N=C+(U^b&(M^U))+D[12]+1804603682&4294967295,C=b+(N<<7&4294967295|N>>>25),N=U+(M^C&(b^M))+D[13]+4254626195&4294967295,U=C+(N<<12&4294967295|N>>>20),N=M+(b^U&(C^b))+D[14]+2792965006&4294967295,M=U+(N<<17&4294967295|N>>>15),N=b+(C^M&(U^C))+D[15]+1236535329&4294967295,b=M+(N<<22&4294967295|N>>>10),N=C+(M^U&(b^M))+D[1]+4129170786&4294967295,C=b+(N<<5&4294967295|N>>>27),N=U+(b^M&(C^b))+D[6]+3225465664&4294967295,U=C+(N<<9&4294967295|N>>>23),N=M+(C^b&(U^C))+D[11]+643717713&4294967295,M=U+(N<<14&4294967295|N>>>18),N=b+(U^C&(M^U))+D[0]+3921069994&4294967295,b=M+(N<<20&4294967295|N>>>12),N=C+(M^U&(b^M))+D[5]+3593408605&4294967295,C=b+(N<<5&4294967295|N>>>27),N=U+(b^M&(C^b))+D[10]+38016083&4294967295,U=C+(N<<9&4294967295|N>>>23),N=M+(C^b&(U^C))+D[15]+3634488961&4294967295,M=U+(N<<14&4294967295|N>>>18),N=b+(U^C&(M^U))+D[4]+3889429448&4294967295,b=M+(N<<20&4294967295|N>>>12),N=C+(M^U&(b^M))+D[9]+568446438&4294967295,C=b+(N<<5&4294967295|N>>>27),N=U+(b^M&(C^b))+D[14]+3275163606&4294967295,U=C+(N<<9&4294967295|N>>>23),N=M+(C^b&(U^C))+D[3]+4107603335&4294967295,M=U+(N<<14&4294967295|N>>>18),N=b+(U^C&(M^U))+D[8]+1163531501&4294967295,b=M+(N<<20&4294967295|N>>>12),N=C+(M^U&(b^M))+D[13]+2850285829&4294967295,C=b+(N<<5&4294967295|N>>>27),N=U+(b^M&(C^b))+D[2]+4243563512&4294967295,U=C+(N<<9&4294967295|N>>>23),N=M+(C^b&(U^C))+D[7]+1735328473&4294967295,M=U+(N<<14&4294967295|N>>>18),N=b+(U^C&(M^U))+D[12]+2368359562&4294967295,b=M+(N<<20&4294967295|N>>>12),N=C+(b^M^U)+D[5]+4294588738&4294967295,C=b+(N<<4&4294967295|N>>>28),N=U+(C^b^M)+D[8]+2272392833&4294967295,U=C+(N<<11&4294967295|N>>>21),N=M+(U^C^b)+D[11]+1839030562&4294967295,M=U+(N<<16&4294967295|N>>>16),N=b+(M^U^C)+D[14]+4259657740&4294967295,b=M+(N<<23&4294967295|N>>>9),N=C+(b^M^U)+D[1]+2763975236&4294967295,C=b+(N<<4&4294967295|N>>>28),N=U+(C^b^M)+D[4]+1272893353&4294967295,U=C+(N<<11&4294967295|N>>>21),N=M+(U^C^b)+D[7]+4139469664&4294967295,M=U+(N<<16&4294967295|N>>>16),N=b+(M^U^C)+D[10]+3200236656&4294967295,b=M+(N<<23&4294967295|N>>>9),N=C+(b^M^U)+D[13]+681279174&4294967295,C=b+(N<<4&4294967295|N>>>28),N=U+(C^b^M)+D[0]+3936430074&4294967295,U=C+(N<<11&4294967295|N>>>21),N=M+(U^C^b)+D[3]+3572445317&4294967295,M=U+(N<<16&4294967295|N>>>16),N=b+(M^U^C)+D[6]+76029189&4294967295,b=M+(N<<23&4294967295|N>>>9),N=C+(b^M^U)+D[9]+3654602809&4294967295,C=b+(N<<4&4294967295|N>>>28),N=U+(C^b^M)+D[12]+3873151461&4294967295,U=C+(N<<11&4294967295|N>>>21),N=M+(U^C^b)+D[15]+530742520&4294967295,M=U+(N<<16&4294967295|N>>>16),N=b+(M^U^C)+D[2]+3299628645&4294967295,b=M+(N<<23&4294967295|N>>>9),N=C+(M^(b|~U))+D[0]+4096336452&4294967295,C=b+(N<<6&4294967295|N>>>26),N=U+(b^(C|~M))+D[7]+1126891415&4294967295,U=C+(N<<10&4294967295|N>>>22),N=M+(C^(U|~b))+D[14]+2878612391&4294967295,M=U+(N<<15&4294967295|N>>>17),N=b+(U^(M|~C))+D[5]+4237533241&4294967295,b=M+(N<<21&4294967295|N>>>11),N=C+(M^(b|~U))+D[12]+1700485571&4294967295,C=b+(N<<6&4294967295|N>>>26),N=U+(b^(C|~M))+D[3]+2399980690&4294967295,U=C+(N<<10&4294967295|N>>>22),N=M+(C^(U|~b))+D[10]+4293915773&4294967295,M=U+(N<<15&4294967295|N>>>17),N=b+(U^(M|~C))+D[1]+2240044497&4294967295,b=M+(N<<21&4294967295|N>>>11),N=C+(M^(b|~U))+D[8]+1873313359&4294967295,C=b+(N<<6&4294967295|N>>>26),N=U+(b^(C|~M))+D[15]+4264355552&4294967295,U=C+(N<<10&4294967295|N>>>22),N=M+(C^(U|~b))+D[6]+2734768916&4294967295,M=U+(N<<15&4294967295|N>>>17),N=b+(U^(M|~C))+D[13]+1309151649&4294967295,b=M+(N<<21&4294967295|N>>>11),N=C+(M^(b|~U))+D[4]+4149444226&4294967295,C=b+(N<<6&4294967295|N>>>26),N=U+(b^(C|~M))+D[11]+3174756917&4294967295,U=C+(N<<10&4294967295|N>>>22),N=M+(C^(U|~b))+D[2]+718787259&4294967295,M=U+(N<<15&4294967295|N>>>17),N=b+(U^(M|~C))+D[9]+3951481745&4294967295,x.g[0]=x.g[0]+C&4294967295,x.g[1]=x.g[1]+(M+(N<<21&4294967295|N>>>11))&4294967295,x.g[2]=x.g[2]+M&4294967295,x.g[3]=x.g[3]+U&4294967295}s.prototype.u=function(x,C){C===void 0&&(C=x.length);for(var b=C-this.blockSize,D=this.B,M=this.h,U=0;U<C;){if(M==0)for(;U<=b;)a(this,x,U),U+=this.blockSize;if(typeof x=="string"){for(;U<C;)if(D[M++]=x.charCodeAt(U++),M==this.blockSize){a(this,D),M=0;break}}else for(;U<C;)if(D[M++]=x[U++],M==this.blockSize){a(this,D),M=0;break}}this.h=M,this.o+=C},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var C=1;C<x.length-8;++C)x[C]=0;var b=8*this.o;for(C=x.length-8;C<x.length;++C)x[C]=b&255,b/=256;for(this.u(x),x=Array(16),C=b=0;4>C;++C)for(var D=0;32>D;D+=8)x[b++]=this.g[C]>>>D&255;return x};function l(x,C){var b=d;return Object.prototype.hasOwnProperty.call(b,x)?b[x]:b[x]=C(x)}function c(x,C){this.h=C;for(var b=[],D=!0,M=x.length-1;0<=M;M--){var U=x[M]|0;D&&U==C||(b[M]=U,D=!1)}this.g=b}var d={};function _(x){return-128<=x&&128>x?l(x,function(C){return new c([C|0],0>C?-1:0)}):new c([x|0],0>x?-1:0)}function m(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return F(m(-x));for(var C=[],b=1,D=0;x>=b;D++)C[D]=x/b|0,b*=4294967296;return new c(C,0)}function E(x,C){if(x.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(x.charAt(0)=="-")return F(E(x.substring(1),C));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=m(Math.pow(C,8)),D=T,M=0;M<x.length;M+=8){var U=Math.min(8,x.length-M),N=parseInt(x.substring(M,M+U),C);8>U?(U=m(Math.pow(C,U)),D=D.j(U).add(m(N))):(D=D.j(b),D=D.add(m(N)))}return D}var T=_(0),R=_(1),P=_(16777216);i=c.prototype,i.m=function(){if(Q(this))return-F(this).m();for(var x=0,C=1,b=0;b<this.g.length;b++){var D=this.i(b);x+=(0<=D?D:4294967296+D)*C,C*=4294967296}return x},i.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(q(this))return"0";if(Q(this))return"-"+F(this).toString(x);for(var C=m(Math.pow(x,6)),b=this,D="";;){var M=fe(b,C).g;b=X(b,M.j(C));var U=((0<b.g.length?b.g[0]:b.h)>>>0).toString(x);if(b=M,q(b))return U+D;for(;6>U.length;)U="0"+U;D=U+D}},i.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function q(x){if(x.h!=0)return!1;for(var C=0;C<x.g.length;C++)if(x.g[C]!=0)return!1;return!0}function Q(x){return x.h==-1}i.l=function(x){return x=X(this,x),Q(x)?-1:q(x)?0:1};function F(x){for(var C=x.g.length,b=[],D=0;D<C;D++)b[D]=~x.g[D];return new c(b,~x.h).add(R)}i.abs=function(){return Q(this)?F(this):this},i.add=function(x){for(var C=Math.max(this.g.length,x.g.length),b=[],D=0,M=0;M<=C;M++){var U=D+(this.i(M)&65535)+(x.i(M)&65535),N=(U>>>16)+(this.i(M)>>>16)+(x.i(M)>>>16);D=N>>>16,U&=65535,N&=65535,b[M]=N<<16|U}return new c(b,b[b.length-1]&-2147483648?-1:0)};function X(x,C){return x.add(F(C))}i.j=function(x){if(q(this)||q(x))return T;if(Q(this))return Q(x)?F(this).j(F(x)):F(F(this).j(x));if(Q(x))return F(this.j(F(x)));if(0>this.l(P)&&0>x.l(P))return m(this.m()*x.m());for(var C=this.g.length+x.g.length,b=[],D=0;D<2*C;D++)b[D]=0;for(D=0;D<this.g.length;D++)for(var M=0;M<x.g.length;M++){var U=this.i(D)>>>16,N=this.i(D)&65535,ke=x.i(M)>>>16,Me=x.i(M)&65535;b[2*D+2*M]+=N*Me,Y(b,2*D+2*M),b[2*D+2*M+1]+=U*Me,Y(b,2*D+2*M+1),b[2*D+2*M+1]+=N*ke,Y(b,2*D+2*M+1),b[2*D+2*M+2]+=U*ke,Y(b,2*D+2*M+2)}for(D=0;D<C;D++)b[D]=b[2*D+1]<<16|b[2*D];for(D=C;D<2*C;D++)b[D]=0;return new c(b,0)};function Y(x,C){for(;(x[C]&65535)!=x[C];)x[C+1]+=x[C]>>>16,x[C]&=65535,C++}function J(x,C){this.g=x,this.h=C}function fe(x,C){if(q(C))throw Error("division by zero");if(q(x))return new J(T,T);if(Q(x))return C=fe(F(x),C),new J(F(C.g),F(C.h));if(Q(C))return C=fe(x,F(C)),new J(F(C.g),C.h);if(30<x.g.length){if(Q(x)||Q(C))throw Error("slowDivide_ only works with positive integers.");for(var b=R,D=C;0>=D.l(x);)b=de(b),D=de(D);var M=Ce(b,1),U=Ce(D,1);for(D=Ce(D,2),b=Ce(b,2);!q(D);){var N=U.add(D);0>=N.l(x)&&(M=M.add(b),U=N),D=Ce(D,1),b=Ce(b,1)}return C=X(x,M.j(C)),new J(M,C)}for(M=T;0<=x.l(C);){for(b=Math.max(1,Math.floor(x.m()/C.m())),D=Math.ceil(Math.log(b)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),U=m(b),N=U.j(C);Q(N)||0<N.l(x);)b-=D,U=m(b),N=U.j(C);q(U)&&(U=R),M=M.add(U),x=X(x,N)}return new J(M,x)}i.A=function(x){return fe(this,x).h},i.and=function(x){for(var C=Math.max(this.g.length,x.g.length),b=[],D=0;D<C;D++)b[D]=this.i(D)&x.i(D);return new c(b,this.h&x.h)},i.or=function(x){for(var C=Math.max(this.g.length,x.g.length),b=[],D=0;D<C;D++)b[D]=this.i(D)|x.i(D);return new c(b,this.h|x.h)},i.xor=function(x){for(var C=Math.max(this.g.length,x.g.length),b=[],D=0;D<C;D++)b[D]=this.i(D)^x.i(D);return new c(b,this.h^x.h)};function de(x){for(var C=x.g.length+1,b=[],D=0;D<C;D++)b[D]=x.i(D)<<1|x.i(D-1)>>>31;return new c(b,x.h)}function Ce(x,C){var b=C>>5;C%=32;for(var D=x.g.length-b,M=[],U=0;U<D;U++)M[U]=0<C?x.i(U+b)>>>C|x.i(U+b+1)<<32-C:x.i(U+b);return new c(M,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,nw=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=m,c.fromString=E,Dr=c}).apply(typeof ZT<"u"?ZT:typeof self<"u"?self:typeof window<"u"?window:{});var qh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iw,Vu,sw,nf,tm,rw,aw,ow;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,g,y){return h==Array.prototype||h==Object.prototype||(h[g]=y.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof qh=="object"&&qh];for(var g=0;g<h.length;++g){var y=h[g];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function a(h,g){if(g)e:{var y=s;h=h.split(".");for(var w=0;w<h.length-1;w++){var B=h[w];if(!(B in y))break e;y=y[B]}h=h[h.length-1],w=y[h],g=g(w),g!=w&&g!=null&&e(y,h,{configurable:!0,writable:!0,value:g})}}function l(h,g){h instanceof String&&(h+="");var y=0,w=!1,B={next:function(){if(!w&&y<h.length){var G=y++;return{value:g(G,h[G]),done:!1}}return w=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}a("Array.prototype.values",function(h){return h||function(){return l(this,function(g,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function _(h){var g=typeof h;return g=g!="object"?g:h?Array.isArray(h)?"array":g:"null",g=="array"||g=="object"&&typeof h.length=="number"}function m(h){var g=typeof h;return g=="object"&&h!=null||g=="function"}function E(h,g,y){return h.call.apply(h.bind,arguments)}function T(h,g,y){if(!h)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,w),h.apply(g,B)}}return function(){return h.apply(g,arguments)}}function R(h,g,y){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,R.apply(null,arguments)}function P(h,g){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),h.apply(this,w)}}function q(h,g){function y(){}y.prototype=g.prototype,h.aa=g.prototype,h.prototype=new y,h.prototype.constructor=h,h.Qb=function(w,B,G){for(var ue=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)ue[Ge-2]=arguments[Ge];return g.prototype[B].apply(w,ue)}}function Q(h){const g=h.length;if(0<g){const y=Array(g);for(let w=0;w<g;w++)y[w]=h[w];return y}return[]}function F(h,g){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(_(w)){const B=h.length||0,G=w.length||0;h.length=B+G;for(let ue=0;ue<G;ue++)h[B+ue]=w[ue]}else h.push(w)}}class X{constructor(g,y){this.i=g,this.j=y,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function Y(h){return/^[\s\xa0]*$/.test(h)}function J(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function fe(h){return fe[" "](h),h}fe[" "]=function(){};var de=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function Ce(h,g,y){for(const w in h)g.call(y,h[w],w,h)}function x(h,g){for(const y in h)g.call(void 0,h[y],y,h)}function C(h){const g={};for(const y in h)g[y]=h[y];return g}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(h,g){let y,w;for(let B=1;B<arguments.length;B++){w=arguments[B];for(y in w)h[y]=w[y];for(let G=0;G<b.length;G++)y=b[G],Object.prototype.hasOwnProperty.call(w,y)&&(h[y]=w[y])}}function M(h){var g=1;h=h.split(":");const y=[];for(;0<g&&h.length;)y.push(h.shift()),g--;return h.length&&y.push(h.join(":")),y}function U(h){d.setTimeout(()=>{throw h},0)}function N(){var h=Ie;let g=null;return h.g&&(g=h.g,h.g=h.g.next,h.g||(h.h=null),g.next=null),g}class ke{constructor(){this.h=this.g=null}add(g,y){const w=Me.get();w.set(g,y),this.h?this.h.next=w:this.g=w,this.h=w}}var Me=new X(()=>new oe,h=>h.reset());class oe{constructor(){this.next=this.g=this.h=null}set(g,y){this.h=g,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let le,ce=!1,Ie=new ke,O=()=>{const h=d.Promise.resolve(void 0);le=()=>{h.then(k)}};var k=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(y){U(y)}var g=Me;g.j(h),100>g.h&&(g.h++,h.next=g.g,g.g=h)}ce=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(h,g){this.type=h,this.g=this.target=g,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ne=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,g=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const y=()=>{};d.addEventListener("test",y,g),d.removeEventListener("test",y,g)}catch{}return h}();function ge(h,g){if(se.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var y=this.type=h.type,w=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=g,g=h.relatedTarget){if(de){e:{try{fe(g.nodeName);var B=!0;break e}catch{}B=!1}B||(g=null)}}else y=="mouseover"?g=h.fromElement:y=="mouseout"&&(g=h.toElement);this.relatedTarget=g,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:pe[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&ge.aa.h.call(this)}}q(ge,se);var pe={2:"touch",3:"pen",4:"mouse"};ge.prototype.h=function(){ge.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Be="closure_listenable_"+(1e6*Math.random()|0),Te=0;function _t(h,g,y,w,B){this.listener=h,this.proxy=null,this.src=g,this.type=y,this.capture=!!w,this.ha=B,this.key=++Te,this.da=this.fa=!1}function et(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Zt(h){this.src=h,this.g={},this.h=0}Zt.prototype.add=function(h,g,y,w,B){var G=h.toString();h=this.g[G],h||(h=this.g[G]=[],this.h++);var ue=Jt(h,g,w,B);return-1<ue?(g=h[ue],y||(g.fa=!1)):(g=new _t(g,this.src,G,!!w,B),g.fa=y,h.push(g)),g};function kn(h,g){var y=g.type;if(y in h.g){var w=h.g[y],B=Array.prototype.indexOf.call(w,g,void 0),G;(G=0<=B)&&Array.prototype.splice.call(w,B,1),G&&(et(g),h.g[y].length==0&&(delete h.g[y],h.h--))}}function Jt(h,g,y,w){for(var B=0;B<h.length;++B){var G=h[B];if(!G.da&&G.listener==g&&G.capture==!!y&&G.ha==w)return B}return-1}var Ai="closure_lm_"+(1e6*Math.random()|0),hi={};function Mn(h,g,y,w,B){if(Array.isArray(g)){for(var G=0;G<g.length;G++)Mn(h,g[G],y,w,B);return null}return y=Ji(y),h&&h[Be]?h.K(g,y,m(w)?!!w.capture:!1,B):ie(h,g,y,!1,w,B)}function ie(h,g,y,w,B,G){if(!g)throw Error("Invalid event type");var ue=m(B)?!!B.capture:!!B,Ge=Ls(h);if(Ge||(h[Ai]=Ge=new Zt(h)),y=Ge.add(g,y,w,ue,G),y.proxy)return y;if(w=ut(),y.proxy=w,w.src=h,w.listener=y,h.addEventListener)ne||(B=ue),B===void 0&&(B=!1),h.addEventListener(g.toString(),w,B);else if(h.attachEvent)h.attachEvent(Zi(g.toString()),w);else if(h.addListener&&h.removeListener)h.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ut(){function h(y){return g.call(h.src,h.listener,y)}const g=Gr;return h}function bt(h,g,y,w,B){if(Array.isArray(g))for(var G=0;G<g.length;G++)bt(h,g[G],y,w,B);else w=m(w)?!!w.capture:!!w,y=Ji(y),h&&h[Be]?(h=h.i,g=String(g).toString(),g in h.g&&(G=h.g[g],y=Jt(G,y,w,B),-1<y&&(et(G[y]),Array.prototype.splice.call(G,y,1),G.length==0&&(delete h.g[g],h.h--)))):h&&(h=Ls(h))&&(g=h.g[g.toString()],h=-1,g&&(h=Jt(g,y,w,B)),(y=-1<h?g[h]:null)&&fi(y))}function fi(h){if(typeof h!="number"&&h&&!h.da){var g=h.src;if(g&&g[Be])kn(g.i,h);else{var y=h.type,w=h.proxy;g.removeEventListener?g.removeEventListener(y,w,h.capture):g.detachEvent?g.detachEvent(Zi(y),w):g.addListener&&g.removeListener&&g.removeListener(w),(y=Ls(g))?(kn(y,h),y.h==0&&(y.src=null,g[Ai]=null)):et(h)}}}function Zi(h){return h in hi?hi[h]:hi[h]="on"+h}function Gr(h,g){if(h.da)h=!0;else{g=new ge(g,this);var y=h.listener,w=h.ha||h.src;h.fa&&fi(h),h=y.call(w,g)}return h}function Ls(h){return h=h[Ai],h instanceof Zt?h:null}var en="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ji(h){return typeof h=="function"?h:(h[en]||(h[en]=function(g){return h.handleEvent(g)}),h[en])}function Ct(){te.call(this),this.i=new Zt(this),this.M=this,this.F=null}q(Ct,te),Ct.prototype[Be]=!0,Ct.prototype.removeEventListener=function(h,g,y,w){bt(this,h,g,y,w)};function Ht(h,g){var y,w=h.F;if(w)for(y=[];w;w=w.F)y.push(w);if(h=h.M,w=g.type||g,typeof g=="string")g=new se(g,h);else if(g instanceof se)g.target=g.target||h;else{var B=g;g=new se(w,h),D(g,B)}if(B=!0,y)for(var G=y.length-1;0<=G;G--){var ue=g.g=y[G];B=es(ue,w,!0,g)&&B}if(ue=g.g=h,B=es(ue,w,!0,g)&&B,B=es(ue,w,!1,g)&&B,y)for(G=0;G<y.length;G++)ue=g.g=y[G],B=es(ue,w,!1,g)&&B}Ct.prototype.N=function(){if(Ct.aa.N.call(this),this.i){var h=this.i,g;for(g in h.g){for(var y=h.g[g],w=0;w<y.length;w++)et(y[w]);delete h.g[g],h.h--}}this.F=null},Ct.prototype.K=function(h,g,y,w){return this.i.add(String(h),g,!1,y,w)},Ct.prototype.L=function(h,g,y,w){return this.i.add(String(h),g,!0,y,w)};function es(h,g,y,w){if(g=h.i.g[String(g)],!g)return!0;g=g.concat();for(var B=!0,G=0;G<g.length;++G){var ue=g[G];if(ue&&!ue.da&&ue.capture==y){var Ge=ue.listener,Pt=ue.ha||ue.src;ue.fa&&kn(h.i,ue),B=Ge.call(Pt,w)!==!1&&B}}return B&&!w.defaultPrevented}function Tc(h,g,y){if(typeof h=="function")y&&(h=R(h,y));else if(h&&typeof h.handleEvent=="function")h=R(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(h,g||0)}function yl(h){h.g=Tc(()=>{h.g=null,h.i&&(h.i=!1,yl(h))},h.l);const g=h.h;h.h=null,h.m.apply(null,g)}class fd extends te{constructor(g,y){super(),this.m=g,this.l=y,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:yl(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kr(h){te.call(this),this.h=h,this.g={}}q(Kr,te);var Us=[];function fn(h){Ce(h.g,function(g,y){this.g.hasOwnProperty(y)&&fi(g)},h),h.g={}}Kr.prototype.N=function(){Kr.aa.N.call(this),fn(this)},Kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vl=d.JSON.stringify,wi=d.JSON.parse,An=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function El(){}El.prototype.h=null;function Sc(h){return h.h||(h.h=h.i())}function Ac(){}var bi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function js(){se.call(this,"d")}q(js,se);function di(){se.call(this,"c")}q(di,se);var Wn={},Bs=null;function Wa(){return Bs=Bs||new Ct}Wn.La="serverreachability";function Tl(h){se.call(this,Wn.La,h)}q(Tl,se);function zs(h){const g=Wa();Ht(g,new Tl(g))}Wn.STAT_EVENT="statevent";function Qa(h,g){se.call(this,Wn.STAT_EVENT,h),this.stat=g}q(Qa,se);function Rt(h){const g=Wa();Ht(g,new Qa(g,h))}Wn.Ma="timingevent";function wc(h,g){se.call(this,Wn.Ma,h),this.size=g}q(wc,se);function Hs(h,g){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},g)}function Fs(){this.g=!0}Fs.prototype.xa=function(){this.g=!1};function bc(h,g,y,w,B,G){h.info(function(){if(h.g)if(G)for(var ue="",Ge=G.split("&"),Pt=0;Pt<Ge.length;Pt++){var Ke=Ge[Pt].split("=");if(1<Ke.length){var Gt=Ke[0];Ke=Ke[1];var Vt=Gt.split("_");ue=2<=Vt.length&&Vt[1]=="type"?ue+(Gt+"="+Ke+"&"):ue+(Gt+"=redacted&")}}else ue=null;else ue=G;return"XMLHTTP REQ ("+w+") [attempt "+B+"]: "+g+`
`+y+`
`+ue})}function Cc(h,g,y,w,B,G,ue){h.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+B+"]: "+g+`
`+y+`
`+G+" "+ue})}function qs(h,g,y,w){h.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ft(h,y)+(w?" "+w:"")})}function Ci(h,g){h.info(function(){return"TIMEOUT: "+g})}Fs.prototype.info=function(){};function Ft(h,g){if(!h.g)return g;if(!g)return null;try{var y=JSON.parse(g);if(y){for(h=0;h<y.length;h++)if(Array.isArray(y[h])){var w=y[h];if(!(2>w.length)){var B=w[1];if(Array.isArray(B)&&!(1>B.length)){var G=B[0];if(G!="noop"&&G!="stop"&&G!="close")for(var ue=1;ue<B.length;ue++)B[ue]=""}}}}return vl(y)}catch{return g}}var Mt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ts={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wr;function Ya(){}q(Ya,El),Ya.prototype.g=function(){return new XMLHttpRequest},Ya.prototype.i=function(){return{}},Wr=new Ya;function Ri(h,g,y,w){this.j=h,this.i=g,this.l=y,this.R=w||1,this.U=new Kr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sl}function Sl(){this.i=null,this.g="",this.h=!1}var Gs={},Qr={};function pi(h,g,y){h.L=1,h.v=Xr(Et(g)),h.m=y,h.P=!0,ns(h,null)}function ns(h,g){h.F=Date.now(),mt(h),h.A=Et(h.v);var y=h.A,w=h.R;Array.isArray(w)||(w=[String(w)]),rs(y.i,"t",w),h.C=0,y=h.j.J,h.h=new Sl,h.g=Bc(h.j,y?g:null,!h.m),0<h.O&&(h.M=new fd(R(h.Y,h,h.g),h.O)),g=h.U,y=h.g,w=h.ca;var B="readystatechange";Array.isArray(B)||(B&&(Us[0]=B.toString()),B=Us);for(var G=0;G<B.length;G++){var ue=Mn(y,B[G],w||g.handleEvent,!1,g.h||g);if(!ue)break;g.g[ue.key]=ue}g=h.H?C(h.H):{},h.m?(h.u||(h.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,g)):(h.u="GET",h.g.ea(h.A,h.u,null,g)),zs(),bc(h.i,h.u,h.A,h.l,h.R,h.m)}Ri.prototype.ca=function(h){h=h.target;const g=this.M;g&&Zn(h)==3?g.j():this.Y(h)},Ri.prototype.Y=function(h){try{if(h==this.g)e:{const Vt=Zn(this.g);var g=this.g.Ba();const us=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||xc(this.g)))){this.J||Vt!=4||g==7||(g==8||0>=us?zs(3):zs(2)),$a(this);var y=this.g.Z();this.X=y;t:if(Ks(this)){var w=xc(this.g);h="";var B=w.length,G=Zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){In(this),Pn(this);var ue="";break t}this.h.i=new d.TextDecoder}for(g=0;g<B;g++)this.h.h=!0,h+=this.h.i.decode(w[g],{stream:!(G&&g==B-1)});w.length=0,this.h.g+=h,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=y==200,Cc(this.i,this.u,this.A,this.l,this.R,Vt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ge,Pt=this.g;if((Ge=Pt.g?Pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(Ge)){var Ke=Ge;break t}}Ke=null}if(y=Ke)qs(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vn(this,y);else{this.o=!1,this.s=3,Rt(12),In(this),Pn(this);break e}}if(this.P){y=!0;let tn;for(;!this.J&&this.C<ue.length;)if(tn=Ws(this,ue),tn==Qr){Vt==4&&(this.s=4,Rt(14),y=!1),qs(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Gs){this.s=4,Rt(15),qs(this.i,this.l,ue,"[Invalid Chunk]"),y=!1;break}else qs(this.i,this.l,tn,null),Vn(this,tn);if(Ks(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||ue.length!=0||this.h.h||(this.s=1,Rt(16),y=!1),this.o=this.o&&y,!y)qs(this.i,this.l,ue,"[Invalid Chunked Response]"),In(this),Pn(this);else if(0<ue.length&&!this.W){this.W=!0;var Gt=this.j;Gt.g==this&&Gt.ba&&!Gt.M&&(Gt.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),sa(Gt),Gt.M=!0,Rt(11))}}else qs(this.i,this.l,ue,null),Vn(this,ue);Vt==4&&In(this),this.o&&!this.J&&(Vt==4?Lc(this.j,this):(this.o=!1,mt(this)))}else yd(this.g),y==400&&0<ue.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),In(this),Pn(this)}}}catch{}finally{}};function Ks(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Ws(h,g){var y=h.C,w=g.indexOf(`
`,y);return w==-1?Qr:(y=Number(g.substring(y,w)),isNaN(y)?Gs:(w+=1,w+y>g.length?Qr:(g=g.slice(w,w+y),h.C=w+y,g)))}Ri.prototype.cancel=function(){this.J=!0,In(this)};function mt(h){h.S=Date.now()+h.I,Al(h,h.I)}function Al(h,g){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Hs(R(h.ba,h),g)}function $a(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Ri.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Ci(this.i,this.A),this.L!=2&&(zs(),Rt(17)),In(this),this.s=2,Pn(this)):Al(this,this.S-h)};function Pn(h){h.j.G==0||h.J||Lc(h.j,h)}function In(h){$a(h);var g=h.M;g&&typeof g.ma=="function"&&g.ma(),h.M=null,fn(h.U),h.g&&(g=h.g,h.g=null,g.abort(),g.ma())}function Vn(h,g){try{var y=h.j;if(y.G!=0&&(y.g==h||Qs(y.h,h))){if(!h.K&&Qs(y.h,h)&&y.G==3){try{var w=y.Da.g.parse(g)}catch{w=null}if(Array.isArray(w)&&w.length==3){var B=w;if(B[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<h.F)ao(y),so(y);else break e;Ml(y),Rt(18)}}else y.za=B[1],0<y.za-y.T&&37500>B[2]&&y.F&&y.v==0&&!y.C&&(y.C=Hs(R(y.Za,y),6e3));if(1>=Rc(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else ls(y,11)}else if((h.K||y.g==h)&&ao(y),!Y(g))for(B=y.Da.g.parse(g),g=0;g<B.length;g++){let Ke=B[g];if(y.T=Ke[0],Ke=Ke[1],y.G==2)if(Ke[0]=="c"){y.K=Ke[1],y.ia=Ke[2];const Gt=Ke[3];Gt!=null&&(y.la=Gt,y.j.info("VER="+y.la));const Vt=Ke[4];Vt!=null&&(y.Aa=Vt,y.j.info("SVER="+y.Aa));const us=Ke[5];us!=null&&typeof us=="number"&&0<us&&(w=1.5*us,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const tn=h.g;if(tn){const Mi=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mi){var G=w.h;G.g||Mi.indexOf("spdy")==-1&&Mi.indexOf("quic")==-1&&Mi.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(Ys(G,G.h),G.h=null))}if(w.D){const Vl=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Vl&&(w.ya=Vl,Xe(w.I,w.D,Vl))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-h.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var ue=h;if(w.qa=jc(w,w.J?w.ia:null,w.W),ue.K){Qn(w.h,ue);var Ge=ue,Pt=w.L;Pt&&(Ge.I=Pt),Ge.B&&($a(Ge),mt(Ge)),w.g=ue}else Pc(w);0<y.i.length&&ro(y)}else Ke[0]!="stop"&&Ke[0]!="close"||ls(y,7);else y.G==3&&(Ke[0]=="stop"||Ke[0]=="close"?Ke[0]=="stop"?ls(y,7):xl(y):Ke[0]!="noop"&&y.l&&y.l.ta(Ke),y.v=0)}}zs(4)}catch{}}var dd=class{constructor(h,g){this.g=h,this.map=g}};function wl(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bl(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Rc(h){return h.h?1:h.g?h.g.size:0}function Qs(h,g){return h.h?h.h==g:h.g?h.g.has(g):!1}function Ys(h,g){h.g?h.g.add(g):h.h=g}function Qn(h,g){h.h&&h.h==g?h.h=null:h.g&&h.g.has(g)&&h.g.delete(g)}wl.prototype.cancel=function(){if(this.i=wn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function wn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let g=h.i;for(const y of h.g.values())g=g.concat(y.D);return g}return Q(h.i)}function Ic(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(_(h)){for(var g=[],y=h.length,w=0;w<y;w++)g.push(h[w]);return g}g=[],y=0;for(w in h)g[y++]=h[w];return g}function pd(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(_(h)||typeof h=="string"){var g=[];h=h.length;for(var y=0;y<h;y++)g.push(y);return g}g=[],y=0;for(const w in h)g[y++]=w;return g}}}function Yr(h,g){if(h.forEach&&typeof h.forEach=="function")h.forEach(g,void 0);else if(_(h)||typeof h=="string")Array.prototype.forEach.call(h,g,void 0);else for(var y=pd(h),w=Ic(h),B=w.length,G=0;G<B;G++)g.call(void 0,w[G],y&&y[G],h)}var Cl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xa(h,g){if(h){h=h.split("&");for(var y=0;y<h.length;y++){var w=h[y].indexOf("="),B=null;if(0<=w){var G=h[y].substring(0,w);B=h[y].substring(w+1)}else G=h[y];g(G,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function is(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof is){this.h=h.h,$s(this,h.j),this.o=h.o,this.g=h.g,$r(this,h.s),this.l=h.l;var g=h.i,y=new Ii;y.i=g.i,g.g&&(y.g=new Map(g.g),y.h=g.h),Za(this,y),this.m=h.m}else h&&(g=String(h).match(Cl))?(this.h=!1,$s(this,g[1]||"",!0),this.o=Xs(g[2]||""),this.g=Xs(g[3]||"",!0),$r(this,g[4]),this.l=Xs(g[5]||"",!0),Za(this,g[6]||"",!0),this.m=Xs(g[7]||"")):(this.h=!1,this.i=new Ii(null,this.h))}is.prototype.toString=function(){var h=[],g=this.j;g&&h.push(Yn(g,Rl,!0),":");var y=this.g;return(y||g=="file")&&(h.push("//"),(g=this.o)&&h.push(Yn(g,Rl,!0),"@"),h.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&h.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&h.push("/"),h.push(Yn(y,y.charAt(0)=="/"?Il:Nc,!0))),(y=this.i.toString())&&h.push("?",y),(y=this.m)&&h.push("#",Yn(y,gd)),h.join("")};function Et(h){return new is(h)}function $s(h,g,y){h.j=y?Xs(g,!0):g,h.j&&(h.j=h.j.replace(/:$/,""))}function $r(h,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);h.s=g}else h.s=null}function Za(h,g,y){g instanceof Ii?(h.i=g,Nl(h.i,h.h)):(y||(g=Yn(g,md)),h.i=new Ii(g,h.h))}function Xe(h,g,y){h.i.set(g,y)}function Xr(h){return Xe(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Xs(h,g){return h?g?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Yn(h,g,y){return typeof h=="string"?(h=encodeURI(h).replace(g,_d),y&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function _d(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Rl=/[#\/\?@]/g,Nc=/[#\?:]/g,Il=/[#\?]/g,md=/[#\?@]/g,gd=/#/g;function Ii(h,g){this.h=this.g=null,this.i=h||null,this.j=!!g}function $n(h){h.g||(h.g=new Map,h.h=0,h.i&&Xa(h.i,function(g,y){h.add(decodeURIComponent(g.replace(/\+/g," ")),y)}))}i=Ii.prototype,i.add=function(h,g){$n(this),this.i=null,h=as(this,h);var y=this.g.get(h);return y||this.g.set(h,y=[]),y.push(g),this.h+=1,this};function Ja(h,g){$n(h),g=as(h,g),h.g.has(g)&&(h.i=null,h.h-=h.g.get(g).length,h.g.delete(g))}function ss(h,g){return $n(h),g=as(h,g),h.g.has(g)}i.forEach=function(h,g){$n(this),this.g.forEach(function(y,w){y.forEach(function(B){h.call(g,B,w,this)},this)},this)},i.na=function(){$n(this);const h=Array.from(this.g.values()),g=Array.from(this.g.keys()),y=[];for(let w=0;w<g.length;w++){const B=h[w];for(let G=0;G<B.length;G++)y.push(g[w])}return y},i.V=function(h){$n(this);let g=[];if(typeof h=="string")ss(this,h)&&(g=g.concat(this.g.get(as(this,h))));else{h=Array.from(this.g.values());for(let y=0;y<h.length;y++)g=g.concat(h[y])}return g},i.set=function(h,g){return $n(this),this.i=null,h=as(this,h),ss(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[g]),this.h+=1,this},i.get=function(h,g){return h?(h=this.V(h),0<h.length?String(h[0]):g):g};function rs(h,g,y){Ja(h,g),0<y.length&&(h.i=null,h.g.set(as(h,g),Q(y)),h.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],g=Array.from(this.g.keys());for(var y=0;y<g.length;y++){var w=g[y];const G=encodeURIComponent(String(w)),ue=this.V(w);for(w=0;w<ue.length;w++){var B=G;ue[w]!==""&&(B+="="+encodeURIComponent(String(ue[w]))),h.push(B)}}return this.i=h.join("&")};function as(h,g){return g=String(g),h.j&&(g=g.toLowerCase()),g}function Nl(h,g){g&&!h.j&&($n(h),h.i=null,h.g.forEach(function(y,w){var B=w.toLowerCase();w!=B&&(Ja(this,w),rs(this,B,y))},h)),h.j=g}function Dc(h,g){const y=new Fs;if(d.Image){const w=new Image;w.onload=P(Xn,y,"TestLoadImage: loaded",!0,g,w),w.onerror=P(Xn,y,"TestLoadImage: error",!1,g,w),w.onabort=P(Xn,y,"TestLoadImage: abort",!1,g,w),w.ontimeout=P(Xn,y,"TestLoadImage: timeout",!1,g,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=h}else g(!1)}function Zr(h,g){const y=new Fs,w=new AbortController,B=setTimeout(()=>{w.abort(),Xn(y,"TestPingServer: timeout",!1,g)},1e4);fetch(h,{signal:w.signal}).then(G=>{clearTimeout(B),G.ok?Xn(y,"TestPingServer: ok",!0,g):Xn(y,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(B),Xn(y,"TestPingServer: error",!1,g)})}function Xn(h,g,y,w,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),w(y)}catch{}}function Jr(){this.g=new An}function Ni(h,g,y){const w=y||"";try{Yr(h,function(B,G){let ue=B;m(B)&&(ue=vl(B)),g.push(w+G+"="+encodeURIComponent(ue))})}catch(B){throw g.push(w+"type="+encodeURIComponent("_badmap")),B}}function Zs(h){this.l=h.Ub||null,this.j=h.eb||!1}q(Zs,El),Zs.prototype.g=function(){return new os(this.l,this.j)},Zs.prototype.i=function(h){return function(){return h}}({});function os(h,g){Ct.call(this),this.D=h,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(os,Ct),i=os.prototype,i.open=function(h,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=g,this.readyState=1,Oi(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(g.body=h),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Di(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Oi(this)),this.g&&(this.readyState=3,Oi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var g=h.value?h.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!h.done}))&&(this.response=this.responseText+=g)}h.done?Di(this):Oi(this),this.readyState==3&&Dl(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,Di(this))},i.Qa=function(h){this.g&&(this.response=h,Di(this))},i.ga=function(){this.g&&Di(this)};function Di(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Oi(h)}i.setRequestHeader=function(h,g){this.u.append(h,g)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],g=this.h.entries();for(var y=g.next();!y.done;)y=y.value,h.push(y[0]+": "+y[1]),y=g.next();return h.join(`\r
`)};function Oi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(os.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Ol(h){let g="";return Ce(h,function(y,w){g+=w,g+=":",g+=y,g+=`\r
`}),g}function qt(h,g,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=Ol(y),typeof h=="string"?y!=null&&encodeURIComponent(String(y)):Xe(h,g,y))}function tt(h){Ct.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(tt,Ct);var eo=/^https?$/i,ea=["POST","PUT"];i=tt.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,g,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);g=g?g.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wr.g(),this.v=this.o?Sc(this.o):Sc(Wr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(g,String(h),!0),this.B=!1}catch(G){Oc(this,G);return}if(h=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var B in w)y.set(B,w[B]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const G of w.keys())y.set(G,w.get(G));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(G=>G.toLowerCase()=="content-type"),B=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ea,g,void 0))||w||B||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,ue]of y)this.g.setRequestHeader(G,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ta(this),this.u=!0,this.g.send(h),this.u=!1}catch(G){Oc(this,G)}};function Oc(h,g){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=g,h.m=5,to(h),xi(h)}function to(h){h.A||(h.A=!0,Ht(h,"complete"),Ht(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ht(this,"complete"),Ht(this,"abort"),xi(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xi(this,!0)),tt.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?no(this):this.bb())},i.bb=function(){no(this)};function no(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Zn(h)!=4||h.Z()!=2)){if(h.u&&Zn(h)==4)Tc(h.Ea,0,h);else if(Ht(h,"readystatechange"),Zn(h)==4){h.h=!1;try{const ue=h.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var y;if(!(y=g)){var w;if(w=ue===0){var B=String(h.D).match(Cl)[1]||null;!B&&d.self&&d.self.location&&(B=d.self.location.protocol.slice(0,-1)),w=!eo.test(B?B.toLowerCase():"")}y=w}if(y)Ht(h,"complete"),Ht(h,"success");else{h.m=6;try{var G=2<Zn(h)?h.g.statusText:""}catch{G=""}h.l=G+" ["+h.Z()+"]",to(h)}}finally{xi(h)}}}}function xi(h,g){if(h.g){ta(h);const y=h.g,w=h.v[0]?()=>{}:null;h.g=null,h.v=null,g||Ht(h,"ready");try{y.onreadystatechange=w}catch{}}}function ta(h){h.I&&(d.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function Zn(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<Zn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var g=this.g.responseText;return h&&g.indexOf(h)==0&&(g=g.substring(h.length)),wi(g)}};function xc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function yd(h){const g={};h=(h.g&&2<=Zn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<h.length;w++){if(Y(h[w]))continue;var y=M(h[w]);const B=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const G=g[B]||[];g[B]=G,G.push(y)}x(g,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function na(h,g,y){return y&&y.internalChannelParams&&y.internalChannelParams[h]||g}function io(h){this.Aa=0,this.i=[],this.j=new Fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=na("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=na("baseRetryDelayMs",5e3,h),this.cb=na("retryDelaySeedMs",1e4,h),this.Wa=na("forwardChannelMaxRetries",2,h),this.wa=na("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new wl(h&&h.concurrentRequestLimit),this.Da=new Jr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=io.prototype,i.la=8,i.G=1,i.connect=function(h,g,y,w){Rt(0),this.W=h,this.H=g||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=jc(this,null,this.W),ro(this)};function xl(h){if(kc(h),h.G==3){var g=h.U++,y=Et(h.I);if(Xe(y,"SID",h.K),Xe(y,"RID",g),Xe(y,"TYPE","terminate"),ia(h,y),g=new Ri(h,h.j,g),g.L=2,g.v=Xr(Et(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=g.v,y=!0),y||(g.g=Bc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),mt(g)}Uc(h)}function so(h){h.g&&(sa(h),h.g.cancel(),h.g=null)}function kc(h){so(h),h.u&&(d.clearTimeout(h.u),h.u=null),ao(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function ro(h){if(!bl(h.h)&&!h.s){h.s=!0;var g=h.Ga;le||O(),ce||(le(),ce=!0),Ie.add(g,h),h.B=0}}function vd(h,g){return Rc(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=g.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Hs(R(h.Ga,h,g),Pl(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const B=new Ri(this,this.j,h);let G=this.o;if(this.S&&(G?(G=C(G),D(G,this.S)):G=this.S),this.m!==null||this.O||(B.H=G,G=null),this.P)e:{for(var g=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(g+=w,4096<g){g=y;break e}if(g===4096||y===this.i.length-1){g=y+1;break e}}g=1e3}else g=1e3;g=Mc(this,B,g),y=Et(this.I),Xe(y,"RID",h),Xe(y,"CVER",22),this.D&&Xe(y,"X-HTTP-Session-Id",this.D),ia(this,y),G&&(this.O?g="headers="+encodeURIComponent(String(Ol(G)))+"&"+g:this.m&&qt(y,this.m,G)),Ys(this.h,B),this.Ua&&Xe(y,"TYPE","init"),this.P?(Xe(y,"$req",g),Xe(y,"SID","null"),B.T=!0,pi(B,y,null)):pi(B,y,g),this.G=2}}else this.G==3&&(h?kl(this,h):this.i.length==0||bl(this.h)||kl(this))};function kl(h,g){var y;g?y=g.l:y=h.U++;const w=Et(h.I);Xe(w,"SID",h.K),Xe(w,"RID",y),Xe(w,"AID",h.T),ia(h,w),h.m&&h.o&&qt(w,h.m,h.o),y=new Ri(h,h.j,y,h.B+1),h.m===null&&(y.H=h.o),g&&(h.i=g.D.concat(h.i)),g=Mc(h,y,1e3),y.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Ys(h.h,y),pi(y,w,g)}function ia(h,g){h.H&&Ce(h.H,function(y,w){Xe(g,w,y)}),h.l&&Yr({},function(y,w){Xe(g,w,y)})}function Mc(h,g,y){y=Math.min(h.i.length,y);var w=h.l?R(h.l.Na,h.l,h):null;e:{var B=h.i;let G=-1;for(;;){const ue=["count="+y];G==-1?0<y?(G=B[0].g,ue.push("ofs="+G)):G=0:ue.push("ofs="+G);let Ge=!0;for(let Pt=0;Pt<y;Pt++){let Ke=B[Pt].g;const Gt=B[Pt].map;if(Ke-=G,0>Ke)G=Math.max(0,B[Pt].g-100),Ge=!1;else try{Ni(Gt,ue,"req"+Ke+"_")}catch{w&&w(Gt)}}if(Ge){w=ue.join("&");break e}}}return h=h.i.splice(0,y),g.D=h,w}function Pc(h){if(!h.g&&!h.u){h.Y=1;var g=h.Fa;le||O(),ce||(le(),ce=!0),Ie.add(g,h),h.v=0}}function Ml(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Hs(R(h.Fa,h),Pl(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,Vc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Hs(R(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),so(this),Vc(this))};function sa(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Vc(h){h.g=new Ri(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var g=Et(h.qa);Xe(g,"RID","rpc"),Xe(g,"SID",h.K),Xe(g,"AID",h.T),Xe(g,"CI",h.F?"0":"1"),!h.F&&h.ja&&Xe(g,"TO",h.ja),Xe(g,"TYPE","xmlhttp"),ia(h,g),h.m&&h.o&&qt(g,h.m,h.o),h.L&&(h.g.I=h.L);var y=h.g;h=h.ia,y.L=1,y.v=Xr(Et(g)),y.m=null,y.P=!0,ns(y,h)}i.Za=function(){this.C!=null&&(this.C=null,so(this),Ml(this),Rt(19))};function ao(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Lc(h,g){var y=null;if(h.g==g){ao(h),sa(h),h.g=null;var w=2}else if(Qs(h.h,g))y=g.D,Qn(h.h,g),w=1;else return;if(h.G!=0){if(g.o)if(w==1){y=g.m?g.m.length:0,g=Date.now()-g.F;var B=h.B;w=Wa(),Ht(w,new wc(w,y)),ro(h)}else Pc(h);else if(B=g.s,B==3||B==0&&0<g.X||!(w==1&&vd(h,g)||w==2&&Ml(h)))switch(y&&0<y.length&&(g=h.h,g.i=g.i.concat(y)),B){case 1:ls(h,5);break;case 4:ls(h,10);break;case 3:ls(h,6);break;default:ls(h,2)}}}function Pl(h,g){let y=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(y*=2),y*g}function ls(h,g){if(h.j.info("Error code "+g),g==2){var y=R(h.fb,h),w=h.Xa;const B=!w;w=new is(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||$s(w,"https"),Xr(w),B?Dc(w.toString(),y):Zr(w.toString(),y)}else Rt(2);h.G=0,h.l&&h.l.sa(g),Uc(h),kc(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function Uc(h){if(h.G=0,h.ka=[],h.l){const g=wn(h.h);(g.length!=0||h.i.length!=0)&&(F(h.ka,g),F(h.ka,h.i),h.h.i.length=0,Q(h.i),h.i.length=0),h.l.ra()}}function jc(h,g,y){var w=y instanceof is?Et(y):new is(y);if(w.g!="")g&&(w.g=g+"."+w.g),$r(w,w.s);else{var B=d.location;w=B.protocol,g=g?g+"."+B.hostname:B.hostname,B=+B.port;var G=new is(null);w&&$s(G,w),g&&(G.g=g),B&&$r(G,B),y&&(G.l=y),w=G}return y=h.D,g=h.ya,y&&g&&Xe(w,y,g),Xe(w,"VER",h.la),ia(h,w),w}function Bc(h,g,y){if(g&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=h.Ca&&!h.pa?new tt(new Zs({eb:y})):new tt(h.pa),g.Ha(h.J),g}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function zc(){}i=zc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function oo(){}oo.prototype.g=function(h,g){return new bn(h,g)};function bn(h,g){Ct.call(this),this.g=new io(g),this.l=h,this.h=g&&g.messageUrlParams||null,h=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(h?h["X-WebChannel-Content-Type"]=g.messageContentType:h={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(h?h["X-WebChannel-Client-Profile"]=g.va:h={"X-WebChannel-Client-Profile":g.va}),this.g.S=h,(h=g&&g.Sb)&&!Y(h)&&(this.g.m=h),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!Y(g)&&(this.g.D=g,h=this.h,h!==null&&g in h&&(h=this.h,g in h&&delete h[g])),this.j=new ki(this)}q(bn,Ct),bn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bn.prototype.close=function(){xl(this.g)},bn.prototype.o=function(h){var g=this.g;if(typeof h=="string"){var y={};y.__data__=h,h=y}else this.u&&(y={},y.__data__=vl(h),h=y);g.i.push(new dd(g.Ya++,h)),g.G==3&&ro(g)},bn.prototype.N=function(){this.g.l=null,delete this.j,xl(this.g),delete this.g,bn.aa.N.call(this)};function Hc(h){js.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var g=h.__sm__;if(g){e:{for(const y in g){h=y;break e}h=void 0}(this.i=h)&&(h=this.i,g=g!==null&&h in g?g[h]:void 0),this.data=g}else this.data=h}q(Hc,js);function Fc(){di.call(this),this.status=1}q(Fc,di);function ki(h){this.g=h}q(ki,zc),ki.prototype.ua=function(){Ht(this.g,"a")},ki.prototype.ta=function(h){Ht(this.g,new Hc(h))},ki.prototype.sa=function(h){Ht(this.g,new Fc)},ki.prototype.ra=function(){Ht(this.g,"b")},oo.prototype.createWebChannel=oo.prototype.g,bn.prototype.send=bn.prototype.o,bn.prototype.open=bn.prototype.m,bn.prototype.close=bn.prototype.close,ow=function(){return new oo},aw=function(){return Wa()},rw=Wn,tm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mt.NO_ERROR=0,Mt.TIMEOUT=8,Mt.HTTP_ERROR=6,nf=Mt,ts.COMPLETE="complete",sw=ts,Ac.EventType=bi,bi.OPEN="a",bi.CLOSE="b",bi.ERROR="c",bi.MESSAGE="d",Ct.prototype.listen=Ct.prototype.K,Vu=Ac,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,iw=tt}).apply(typeof qh<"u"?qh:typeof self<"u"?self:typeof window<"u"?window:{});const JT="@firebase/firestore",eS="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gn.UNAUTHENTICATED=new gn(null),gn.GOOGLE_CREDENTIALS=new gn("google-credentials-uid"),gn.FIRST_PARTY=new gn("first-party-uid"),gn.MOCK_USER=new gn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=new jf("@firebase/firestore");function Uo(){return Pa.logLevel}function _e(i,...e){if(Pa.logLevel<=je.DEBUG){const t=e.map(Jm);Pa.debug(`Firestore (${pl}): ${i}`,...t)}}function ks(i,...e){if(Pa.logLevel<=je.ERROR){const t=e.map(Jm);Pa.error(`Firestore (${pl}): ${i}`,...t)}}function el(i,...e){if(Pa.logLevel<=je.WARN){const t=e.map(Jm);Pa.warn(`Firestore (${pl}): ${i}`,...t)}}function Jm(i){if(typeof i=="string")return i;try{/**
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
 */function Re(i="Unexpected state"){const e=`FIRESTORE (${pl}) INTERNAL ASSERTION FAILED: `+i;throw ks(e),new Error(e)}function it(i,e){i||Re()}function Oe(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Se extends Ps{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(gn.UNAUTHENTICATED))}shutdown(){}}class yk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class vk{constructor(e){this.t=e,this.currentUser=gn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){it(this.o===void 0);let s=this.i;const a=_=>this.i!==s?(s=this.i,t(_)):Promise.resolve();let l=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Or,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const _=l;e.enqueueRetryable(async()=>{await _.promise,await a(this.currentUser)})},d=_=>{_e("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(_=>d(_)),setTimeout(()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?d(_):(_e("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Or)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(_e("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(it(typeof s.accessToken=="string"),new lw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return it(e===null||typeof e=="string"),new gn(e)}}class Ek{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=gn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Tk{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new Ek(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(gn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sk{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Fn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){it(this.o===void 0);const s=l=>{l.error!=null&&_e("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,_e("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{_e("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?a(l):_e("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new tS(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(it(typeof t.token=="string"),this.R=t.token,new tS(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ak(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=Ak(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Fe(i,e){return i<e?-1:i>e?1:0}function tl(i,e,t){return i.length===e.length&&i.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=-62135596800,iS=1e6;class Bt{static now(){return Bt.fromMillis(Date.now())}static fromDate(e){return Bt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*iS);return new Bt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Se(re.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Se(re.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<nS)throw new Se(re.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Se(re.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/iS}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-nS;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{static fromTimestamp(e){return new Ne(e)}static min(){return new Ne(new Bt(0,0))}static max(){return new Ne(new Bt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="__name__";class zi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Re(),s===void 0?s=e.length-t:s>e.length-t&&Re(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return zi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof zi?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=zi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=zi.isNumericId(e),a=zi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?zi.extractNumericId(e).compare(zi.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dr.fromString(e.substring(4,e.length-2))}}class wt extends zi{construct(e,t,s){return new wt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new Se(re.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new wt(t)}static emptyPath(){return new wt([])}}const wk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class un extends zi{construct(e,t,s){return new un(e,t,s)}static isValidIdentifier(e){return wk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),un.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sS}static keyField(){return new un([sS])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new Se(re.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new Se(re.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[a+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new Se(re.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=_,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new Se(re.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new un(t)}static emptyPath(){return new un([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.path=e}static fromPath(e){return new Ae(wt.fromString(e))}static fromName(e){return new Ae(wt.fromString(e).popFirst(5))}static empty(){return new Ae(wt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&wt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return wt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ae(new wt(e.slice()))}}/**
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
 */const ec=-1;function bk(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=Ne.fromTimestamp(s===1e9?new Bt(t+1,0):new Bt(t,s));return new Pr(a,Ae.empty(),e)}function Ck(i){return new Pr(i.readTime,i.key,ec)}class Pr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Pr(Ne.min(),Ae.empty(),ec)}static max(){return new Pr(Ne.max(),Ae.empty(),ec)}}function Rk(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=Ae.comparator(i.documentKey,e.documentKey),t!==0?t:Fe(i.largestBatchId,e.largestBatchId))}/**
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
 */const Ik="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(i){if(i.code!==re.FAILED_PRECONDITION||i.message!==Ik)throw i;_e("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,s)=>{t(e)})}static reject(e){return new Z((t,s)=>{s(e)})}static waitFor(e){return new Z((t,s)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},_=>s(_))}),c=!0,l===a&&t()})}static or(e){let t=Z.resolve(!1);for(const s of e)t=t.next(a=>a?Z.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new Z((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let _=0;_<l;_++){const m=_;t(e[m]).next(E=>{c[m]=E,++d,d===l&&s(c)},E=>a(E))}})}static doWhile(e,t){return new Z((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function Dk(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ml(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Qf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Qf.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=-1;function Yf(i){return i==null}function bf(i){return i===0&&1/i==-1/0}function Ok(i){return typeof i=="number"&&Number.isInteger(i)&&!bf(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="";function xk(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=rS(e)),e=kk(i.get(t),e);return rS(e)}function kk(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case cw:t+="";break;default:t+=l}}return t}function rS(i){return i+cw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Fr(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function hw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t){this.comparator=e,this.root=t||on.EMPTY}insert(e,t){return new vt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,on.BLACK,null,null))}remove(e){return new vt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,on.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gh(this.root,e,this.comparator,!0)}}class Gh{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class on{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??on.RED,this.left=a??on.EMPTY,this.right=l??on.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new on(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return on.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return on.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,on.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,on.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Re();const e=this.left.check();if(e!==this.right.check())throw Re();return e+(this.isRed()?0:1)}}on.EMPTY=null,on.RED=!0,on.BLACK=!1;on.EMPTY=new class{constructor(){this.size=0}get key(){throw Re()}get value(){throw Re()}get color(){throw Re()}get left(){throw Re()}get right(){throw Re()}copy(e,t,s,a,l){return this}insert(e,t,s){return new on(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.comparator=e,this.data=new vt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new oS(this.data.getIterator())}getIteratorFrom(e){return new oS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof zt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new zt(this.comparator);return t.data=e,t}}class oS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qn{constructor(e){this.fields=e,e.sort(un.comparator)}static empty(){return new qn([])}unionWith(e){let t=new zt(un.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return tl(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class fw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class hn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new fw("Invalid base64 string: "+l):l}}(e);return new hn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new hn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}hn.EMPTY_BYTE_STRING=new hn("");const Mk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(i){if(it(!!i),typeof i=="string"){let e=0;const t=Mk.exec(i);if(it(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Nt(i.seconds),nanos:Nt(i.nanos)}}function Nt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Lr(i){return typeof i=="string"?hn.fromBase64String(i):hn.fromUint8Array(i)}/**
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
 */const dw="server_timestamp",pw="__type__",_w="__previous_value__",mw="__local_write_time__";function tg(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[pw])===null||t===void 0?void 0:t.stringValue)===dw}function $f(i){const e=i.mapValue.fields[_w];return tg(e)?$f(e):e}function tc(i){const e=Vr(i.mapValue.fields[mw].timestampValue);return new Bt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,t,s,a,l,c,d,_,m){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=_,this.useFetchStreams=m}}const Cf="(default)";class nc{constructor(e,t){this.projectId=e,this.database=t||Cf}static empty(){return new nc("","")}get isDefaultDatabase(){return this.database===Cf}isEqual(e){return e instanceof nc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const gw="__type__",Vk="__max__",Kh={mapValue:{}},yw="__vector__",Rf="value";function Ur(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?tg(i)?4:Uk(i)?9007199254740991:Lk(i)?10:11:Re()}function $i(i,e){if(i===e)return!0;const t=Ur(i);if(t!==Ur(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return tc(i).isEqual(tc(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Vr(a.timestampValue),d=Vr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return Lr(a.bytesValue).isEqual(Lr(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return Nt(a.geoPointValue.latitude)===Nt(l.geoPointValue.latitude)&&Nt(a.geoPointValue.longitude)===Nt(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return Nt(a.integerValue)===Nt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Nt(a.doubleValue),d=Nt(l.doubleValue);return c===d?bf(c)===bf(d):isNaN(c)&&isNaN(d)}return!1}(i,e);case 9:return tl(i.arrayValue.values||[],e.arrayValue.values||[],$i);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(aS(c)!==aS(d))return!1;for(const _ in c)if(c.hasOwnProperty(_)&&(d[_]===void 0||!$i(c[_],d[_])))return!1;return!0}(i,e);default:return Re()}}function ic(i,e){return(i.values||[]).find(t=>$i(t,e))!==void 0}function nl(i,e){if(i===e)return 0;const t=Ur(i),s=Ur(e);if(t!==s)return Fe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Fe(i.booleanValue,e.booleanValue);case 2:return function(l,c){const d=Nt(l.integerValue||l.doubleValue),_=Nt(c.integerValue||c.doubleValue);return d<_?-1:d>_?1:d===_?0:isNaN(d)?isNaN(_)?0:-1:1}(i,e);case 3:return lS(i.timestampValue,e.timestampValue);case 4:return lS(tc(i),tc(e));case 5:return Fe(i.stringValue,e.stringValue);case 6:return function(l,c){const d=Lr(l),_=Lr(c);return d.compareTo(_)}(i.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),_=c.split("/");for(let m=0;m<d.length&&m<_.length;m++){const E=Fe(d[m],_[m]);if(E!==0)return E}return Fe(d.length,_.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Fe(Nt(l.latitude),Nt(c.latitude));return d!==0?d:Fe(Nt(l.longitude),Nt(c.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return uS(i.arrayValue,e.arrayValue);case 10:return function(l,c){var d,_,m,E;const T=l.fields||{},R=c.fields||{},P=(d=T[Rf])===null||d===void 0?void 0:d.arrayValue,q=(_=R[Rf])===null||_===void 0?void 0:_.arrayValue,Q=Fe(((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0,((E=q==null?void 0:q.values)===null||E===void 0?void 0:E.length)||0);return Q!==0?Q:uS(P,q)}(i.mapValue,e.mapValue);case 11:return function(l,c){if(l===Kh.mapValue&&c===Kh.mapValue)return 0;if(l===Kh.mapValue)return 1;if(c===Kh.mapValue)return-1;const d=l.fields||{},_=Object.keys(d),m=c.fields||{},E=Object.keys(m);_.sort(),E.sort();for(let T=0;T<_.length&&T<E.length;++T){const R=Fe(_[T],E[T]);if(R!==0)return R;const P=nl(d[_[T]],m[E[T]]);if(P!==0)return P}return Fe(_.length,E.length)}(i.mapValue,e.mapValue);default:throw Re()}}function lS(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Fe(i,e);const t=Vr(i),s=Vr(e),a=Fe(t.seconds,s.seconds);return a!==0?a:Fe(t.nanos,s.nanos)}function uS(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=nl(t[a],s[a]);if(l)return l}return Fe(t.length,s.length)}function il(i){return nm(i)}function nm(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=Vr(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return Lr(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return Ae.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=nm(l);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${nm(t.fields[c])}`;return a+"}"}(i.mapValue):Re()}function sf(i){switch(Ur(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$f(i);return e?16+sf(e):16;case 5:return 2*i.stringValue.length;case 6:return Lr(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+sf(l),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return Fr(s.fields,(l,c)=>{a+=l.length+sf(c)}),a}(i.mapValue);default:throw Re()}}function im(i){return!!i&&"integerValue"in i}function ng(i){return!!i&&"arrayValue"in i}function cS(i){return!!i&&"nullValue"in i}function hS(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function rf(i){return!!i&&"mapValue"in i}function Lk(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[gw])===null||t===void 0?void 0:t.stringValue)===yw}function qu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Fr(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=qu(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qu(i.arrayValue.values[t]);return e}return Object.assign({},i)}function Uk(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===Vk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.value=e}static empty(){return new xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!rf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qu(t)}setAll(e){let t=un.emptyPath(),s={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const _=this.getFieldsMap(t);this.applyChanges(_,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=qu(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());rf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $i(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];rf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Fr(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new xn(qu(this.value))}}function vw(i){const e=[];return Fr(i.fields,(t,s)=>{const a=new un([t]);if(rf(s)){const l=vw(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new En(e,0,Ne.min(),Ne.min(),Ne.min(),xn.empty(),0)}static newFoundDocument(e,t,s,a){return new En(e,1,t,Ne.min(),s,a,0)}static newNoDocument(e,t){return new En(e,2,t,Ne.min(),Ne.min(),xn.empty(),0)}static newUnknownDocument(e,t){return new En(e,3,t,Ne.min(),Ne.min(),xn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof En&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new En(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class If{constructor(e,t){this.position=e,this.inclusive=t}}function fS(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?s=Ae.comparator(Ae.fromName(c.referenceValue),t.key):s=nl(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function dS(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!$i(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Nf{constructor(e,t="asc"){this.field=e,this.dir=t}}function jk(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Ew{}class jt extends Ew{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new zk(e,t,s):t==="array-contains"?new qk(e,s):t==="in"?new Gk(e,s):t==="not-in"?new Kk(e,s):t==="array-contains-any"?new Wk(e,s):new jt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Hk(e,s):new Fk(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(nl(t,this.value)):t!==null&&Ur(this.value)===Ur(t)&&this.matchesComparison(nl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xi extends Ew{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Xi(e,t)}matches(e){return Tw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Tw(i){return i.op==="and"}function Sw(i){return Bk(i)&&Tw(i)}function Bk(i){for(const e of i.filters)if(e instanceof Xi)return!1;return!0}function sm(i){if(i instanceof jt)return i.field.canonicalString()+i.op.toString()+il(i.value);if(Sw(i))return i.filters.map(e=>sm(e)).join(",");{const e=i.filters.map(t=>sm(t)).join(",");return`${i.op}(${e})`}}function Aw(i,e){return i instanceof jt?function(s,a){return a instanceof jt&&s.op===a.op&&s.field.isEqual(a.field)&&$i(s.value,a.value)}(i,e):i instanceof Xi?function(s,a){return a instanceof Xi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,c,d)=>l&&Aw(c,a.filters[d]),!0):!1}(i,e):void Re()}function ww(i){return i instanceof jt?function(t){return`${t.field.canonicalString()} ${t.op} ${il(t.value)}`}(i):i instanceof Xi?function(t){return t.op.toString()+" {"+t.getFilters().map(ww).join(" ,")+"}"}(i):"Filter"}class zk extends jt{constructor(e,t,s){super(e,t,s),this.key=Ae.fromName(s.referenceValue)}matches(e){const t=Ae.comparator(e.key,this.key);return this.matchesComparison(t)}}class Hk extends jt{constructor(e,t){super(e,"in",t),this.keys=bw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Fk extends jt{constructor(e,t){super(e,"not-in",t),this.keys=bw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function bw(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>Ae.fromName(s.referenceValue))}class qk extends jt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ng(t)&&ic(t.arrayValue,this.value)}}class Gk extends jt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ic(this.value.arrayValue,t)}}class Kk extends jt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ic(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ic(this.value.arrayValue,t)}}class Wk extends jt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ng(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ic(this.value.arrayValue,s))}}/**
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
 */class Qk{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.le=null}}function pS(i,e=null,t=[],s=[],a=null,l=null,c=null){return new Qk(i,e,t,s,a,l,c)}function ig(i){const e=Oe(i);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>sm(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),Yf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>il(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>il(s)).join(",")),e.le=t}return e.le}function sg(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!jk(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Aw(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!dS(i.startAt,e.startAt)&&dS(i.endAt,e.endAt)}function rm(i){return Ae.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=_,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Yk(i,e,t,s,a,l,c,d){return new Xf(i,e,t,s,a,l,c,d)}function rg(i){return new Xf(i)}function _S(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function $k(i){return i.collectionGroup!==null}function Gu(i){const e=Oe(i);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new zt(un.comparator);return c.filters.forEach(_=>{_.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new Nf(l,s))}),t.has(un.keyField().canonicalString())||e.he.push(new Nf(un.keyField(),s))}return e.he}function Wi(i){const e=Oe(i);return e.Pe||(e.Pe=Xk(e,Gu(i))),e.Pe}function Xk(i,e){if(i.limitType==="F")return pS(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Nf(a.field,l)});const t=i.endAt?new If(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new If(i.startAt.position,i.startAt.inclusive):null;return pS(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function am(i,e,t){return new Xf(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Zf(i,e){return sg(Wi(i),Wi(e))&&i.limitType===e.limitType}function Cw(i){return`${ig(Wi(i))}|lt:${i.limitType}`}function jo(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>ww(a)).join(", ")}]`),Yf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>il(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>il(a)).join(",")),`Target(${s})`}(Wi(i))}; limitType=${i.limitType})`}function Jf(i,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):Ae.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(i,e)&&function(s,a){for(const l of Gu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(c,d,_){const m=fS(c,d,_);return c.inclusive?m<=0:m<0}(s.startAt,Gu(s),a)||s.endAt&&!function(c,d,_){const m=fS(c,d,_);return c.inclusive?m>=0:m>0}(s.endAt,Gu(s),a))}(i,e)}function Zk(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Rw(i){return(e,t)=>{let s=!1;for(const a of Gu(i)){const l=Jk(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function Jk(i,e,t){const s=i.field.isKeyField()?Ae.comparator(e.key,t.key):function(l,c,d){const _=c.data.field(l),m=d.data.field(l);return _!==null&&m!==null?nl(_,m):Re()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Fr(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return hw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=new vt(Ae.comparator);function Ms(){return e2}const Iw=new vt(Ae.comparator);function Lu(...i){let e=Iw;for(const t of i)e=e.insert(t.key,t);return e}function Nw(i){let e=Iw;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Ra(){return Ku()}function Dw(){return Ku()}function Ku(){return new Fa(i=>i.toString(),(i,e)=>i.isEqual(e))}const t2=new vt(Ae.comparator),n2=new zt(Ae.comparator);function ze(...i){let e=n2;for(const t of i)e=e.add(t);return e}const i2=new zt(Fe);function s2(){return i2}/**
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
 */function ag(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bf(e)?"-0":e}}function Ow(i){return{integerValue:""+i}}function r2(i,e){return Ok(e)?Ow(e):ag(i,e)}/**
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
 */class ed{constructor(){this._=void 0}}function a2(i,e,t){return i instanceof Df?function(a,l){const c={fields:{[pw]:{stringValue:dw},[mw]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&tg(l)&&(l=$f(l)),l&&(c.fields[_w]=l),{mapValue:c}}(t,e):i instanceof sl?kw(i,e):i instanceof sc?Mw(i,e):function(a,l){const c=xw(a,l),d=mS(c)+mS(a.Ie);return im(c)&&im(a.Ie)?Ow(d):ag(a.serializer,d)}(i,e)}function o2(i,e,t){return i instanceof sl?kw(i,e):i instanceof sc?Mw(i,e):t}function xw(i,e){return i instanceof Of?function(s){return im(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class Df extends ed{}class sl extends ed{constructor(e){super(),this.elements=e}}function kw(i,e){const t=Pw(e);for(const s of i.elements)t.some(a=>$i(a,s))||t.push(s);return{arrayValue:{values:t}}}class sc extends ed{constructor(e){super(),this.elements=e}}function Mw(i,e){let t=Pw(e);for(const s of i.elements)t=t.filter(a=>!$i(a,s));return{arrayValue:{values:t}}}class Of extends ed{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function mS(i){return Nt(i.integerValue||i.doubleValue)}function Pw(i){return ng(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e,t){this.field=e,this.transform=t}}function u2(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof sl&&a instanceof sl||s instanceof sc&&a instanceof sc?tl(s.elements,a.elements,$i):s instanceof Of&&a instanceof Of?$i(s.Ie,a.Ie):s instanceof Df&&a instanceof Df}(i.transform,e.transform)}class c2{constructor(e,t){this.version=e,this.transformResults=t}}class Qi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qi}static exists(e){return new Qi(void 0,e)}static updateTime(e){return new Qi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function af(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class td{}function Vw(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Uw(i.key,Qi.none()):new mc(i.key,i.data,Qi.none());{const t=i.data,s=xn.empty();let a=new zt(un.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new qr(i.key,s,new qn(a.toArray()),Qi.none())}}function h2(i,e,t){i instanceof mc?function(a,l,c){const d=a.value.clone(),_=yS(a.fieldTransforms,l,c.transformResults);d.setAll(_),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(i,e,t):i instanceof qr?function(a,l,c){if(!af(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=yS(a.fieldTransforms,l,c.transformResults),_=l.data;_.setAll(Lw(a)),_.setAll(d),l.convertToFoundDocument(c.version,_).setHasCommittedMutations()}(i,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Wu(i,e,t,s){return i instanceof mc?function(l,c,d,_){if(!af(l.precondition,c))return d;const m=l.value.clone(),E=vS(l.fieldTransforms,_,c);return m.setAll(E),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),null}(i,e,t,s):i instanceof qr?function(l,c,d,_){if(!af(l.precondition,c))return d;const m=vS(l.fieldTransforms,_,c),E=c.data;return E.setAll(Lw(l)),E.setAll(m),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(i,e,t,s):function(l,c,d){return af(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(i,e,t)}function f2(i,e){let t=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),l=xw(s.transform,a||null);l!=null&&(t===null&&(t=xn.empty()),t.set(s.field,l))}return t||null}function gS(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&tl(s,a,(l,c)=>u2(l,c))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class mc extends td{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class qr extends td{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Lw(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function yS(i,e,t){const s=new Map;it(i.length===t.length);for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,o2(c,d,t[a]))}return s}function vS(i,e,t){const s=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);s.set(a.field,a2(l,c,e))}return s}class Uw extends td{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class d2 extends td{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&h2(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Wu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Wu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Dw();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const _=Vw(c,d);_!==null&&s.set(a.key,_),c.isValidDocument()||c.convertToNoDocument(Ne.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ze())}isEqual(e){return this.batchId===e.batchId&&tl(this.mutations,e.mutations,(t,s)=>gS(t,s))&&tl(this.baseMutations,e.baseMutations,(t,s)=>gS(t,s))}}class og{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){it(e.mutations.length===s.length);let a=function(){return t2}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new og(e,t,s,a)}}/**
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
 */class _2{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class m2{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt,Qe;function g2(i){switch(i){case re.OK:return Re();case re.CANCELLED:case re.UNKNOWN:case re.DEADLINE_EXCEEDED:case re.RESOURCE_EXHAUSTED:case re.INTERNAL:case re.UNAVAILABLE:case re.UNAUTHENTICATED:return!1;case re.INVALID_ARGUMENT:case re.NOT_FOUND:case re.ALREADY_EXISTS:case re.PERMISSION_DENIED:case re.FAILED_PRECONDITION:case re.ABORTED:case re.OUT_OF_RANGE:case re.UNIMPLEMENTED:case re.DATA_LOSS:return!0;default:return Re()}}function jw(i){if(i===void 0)return ks("GRPC error has no .code"),re.UNKNOWN;switch(i){case kt.OK:return re.OK;case kt.CANCELLED:return re.CANCELLED;case kt.UNKNOWN:return re.UNKNOWN;case kt.DEADLINE_EXCEEDED:return re.DEADLINE_EXCEEDED;case kt.RESOURCE_EXHAUSTED:return re.RESOURCE_EXHAUSTED;case kt.INTERNAL:return re.INTERNAL;case kt.UNAVAILABLE:return re.UNAVAILABLE;case kt.UNAUTHENTICATED:return re.UNAUTHENTICATED;case kt.INVALID_ARGUMENT:return re.INVALID_ARGUMENT;case kt.NOT_FOUND:return re.NOT_FOUND;case kt.ALREADY_EXISTS:return re.ALREADY_EXISTS;case kt.PERMISSION_DENIED:return re.PERMISSION_DENIED;case kt.FAILED_PRECONDITION:return re.FAILED_PRECONDITION;case kt.ABORTED:return re.ABORTED;case kt.OUT_OF_RANGE:return re.OUT_OF_RANGE;case kt.UNIMPLEMENTED:return re.UNIMPLEMENTED;case kt.DATA_LOSS:return re.DATA_LOSS;default:return Re()}}(Qe=kt||(kt={}))[Qe.OK=0]="OK",Qe[Qe.CANCELLED=1]="CANCELLED",Qe[Qe.UNKNOWN=2]="UNKNOWN",Qe[Qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qe[Qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qe[Qe.NOT_FOUND=5]="NOT_FOUND",Qe[Qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qe[Qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qe[Qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qe[Qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qe[Qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qe[Qe.ABORTED=10]="ABORTED",Qe[Qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qe[Qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qe[Qe.INTERNAL=13]="INTERNAL",Qe[Qe.UNAVAILABLE=14]="UNAVAILABLE",Qe[Qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function y2(){return new TextEncoder}/**
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
 */const v2=new Dr([4294967295,4294967295],0);function ES(i){const e=y2().encode(i),t=new nw;return t.update(e),new Uint8Array(t.digest())}function TS(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Dr([t,s],0),new Dr([a,l],0)]}class lg{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Uu(`Invalid padding: ${t}`);if(s<0)throw new Uu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Uu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Uu(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Dr.fromNumber(this.Ee)}Ae(e,t,s){let a=e.add(t.multiply(Dr.fromNumber(s)));return a.compare(v2)===1&&(a=new Dr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=ES(e),[s,a]=TS(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(s,a,l);if(!this.Re(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new lg(l,a,t);return s.forEach(d=>c.insert(d)),c}insert(e){if(this.Ee===0)return;const t=ES(e),[s,a]=TS(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(s,a,l);this.Ve(c)}}Ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Uu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,gc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new nd(Ne.min(),a,new vt(Fe),Ms(),ze())}}class gc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new gc(s,t,ze(),ze(),ze())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t,s,a){this.me=e,this.removedTargetIds=t,this.key=s,this.fe=a}}class Bw{constructor(e,t){this.targetId=e,this.ge=t}}class zw{constructor(e,t,s=hn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class SS{constructor(){this.pe=0,this.ye=AS(),this.we=hn.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=ze(),t=ze(),s=ze();return this.ye.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Re()}}),new gc(this.we,this.be,e,t,s)}Me(){this.Se=!1,this.ye=AS()}xe(e,t){this.Se=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,it(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class E2{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Ms(),this.$e=Wh(),this.Ke=Wh(),this.Ue=new vt(Fe)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const s=this.He(t);switch(e.state){case 0:this.Je(t)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(t);break;case 3:this.Je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),s.Ce(e.resumeToken));break;default:Re()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((s,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,s=e.ge.count,a=this.Xe(t);if(a){const l=a.target;if(rm(l))if(s===0){const c=new Ae(l.path);this.ze(t,c,En.newNoDocument(c,Ne.min()))}else it(s===1);else{const c=this.et(t);if(c!==s){const d=this.tt(e),_=d?this.nt(d,e,c):1;if(_!==0){this.Ye(t);const m=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,m)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Lr(s).toUint8Array()}catch(_){if(_ instanceof fw)return el("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{d=new lg(c,a,l)}catch(_){return el(_ instanceof Uu?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return d.Ee===0?null:d}nt(e,t,s){return t.ge.count===s-this.st(e,t.targetId)?0:2}st(e,t){const s=this.ke.getRemoteKeysForTarget(t);let a=0;return s.forEach(l=>{const c=this.ke.it(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,l,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((l,c)=>{const d=this.Xe(c);if(d){if(l.current&&rm(d.target)){const _=new Ae(d.target.path);this._t(_).has(c)||this.ut(c,_)||this.ze(c,_,En.newNoDocument(_,e))}l.ve&&(t.set(c,l.Fe()),l.Me())}});let s=ze();this.Ke.forEach((l,c)=>{let d=!0;c.forEachWhile(_=>{const m=this.Xe(_);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(l))}),this.Qe.forEach((l,c)=>c.setReadTime(e));const a=new nd(e,t,this.Ue,this.Qe,s);return this.Qe=Ms(),this.$e=Wh(),this.Ke=Wh(),this.Ue=new vt(Fe),a}Ge(e,t){if(!this.Je(e))return;const s=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,s),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,s){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),s&&(this.Qe=this.Qe.insert(t,s))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new SS,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new zt(Fe),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new zt(Fe),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||_e("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new SS),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Wh(){return new vt(Ae.comparator)}function AS(){return new vt(Ae.comparator)}const T2={asc:"ASCENDING",desc:"DESCENDING"},S2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},A2={and:"AND",or:"OR"};class w2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function om(i,e){return i.useProto3Json||Yf(e)?e:{value:e}}function xf(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hw(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function b2(i,e){return xf(i,e.toTimestamp())}function Yi(i){return it(!!i),Ne.fromTimestamp(function(t){const s=Vr(t);return new Bt(s.seconds,s.nanos)}(i))}function ug(i,e){return lm(i,e).canonicalString()}function lm(i,e){const t=function(a){return new wt(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function Fw(i){const e=wt.fromString(i);return it(Qw(e)),e}function um(i,e){return ug(i.databaseId,e.path)}function N_(i,e){const t=Fw(e);if(t.get(1)!==i.databaseId.projectId)throw new Se(re.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new Se(re.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new Ae(Gw(t))}function qw(i,e){return ug(i.databaseId,e)}function C2(i){const e=Fw(i);return e.length===4?wt.emptyPath():Gw(e)}function cm(i){return new wt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Gw(i){return it(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function wS(i,e,t){return{name:um(i,e),fields:t.value.mapValue.fields}}function R2(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Re()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(m,E){return m.useProto3Json?(it(E===void 0||typeof E=="string"),hn.fromBase64String(E||"")):(it(E===void 0||E instanceof Buffer||E instanceof Uint8Array),hn.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(m){const E=m.code===void 0?re.UNKNOWN:jw(m.code);return new Se(E,m.message||"")}(c);t=new zw(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=N_(i,s.document.name),l=Yi(s.document.updateTime),c=s.document.createTime?Yi(s.document.createTime):Ne.min(),d=new xn({mapValue:{fields:s.document.fields}}),_=En.newFoundDocument(a,l,c,d),m=s.targetIds||[],E=s.removedTargetIds||[];t=new of(m,E,_.key,_)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=N_(i,s.document),l=s.readTime?Yi(s.readTime):Ne.min(),c=En.newNoDocument(a,l),d=s.removedTargetIds||[];t=new of([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=N_(i,s.document),l=s.removedTargetIds||[];t=new of([],l,a,null)}else{if(!("filter"in e))return Re();{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new m2(a,l),d=s.targetId;t=new Bw(d,c)}}return t}function I2(i,e){let t;if(e instanceof mc)t={update:wS(i,e.key,e.value)};else if(e instanceof Uw)t={delete:um(i,e.key)};else if(e instanceof qr)t={update:wS(i,e.key,e.data),updateMask:L2(e.fieldMask)};else{if(!(e instanceof d2))return Re();t={verify:um(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,c){const d=c.transform;if(d instanceof Df)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof sl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof sc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Of)return{fieldPath:c.field.canonicalString(),increment:d.Ie};throw Re()}(0,s))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:b2(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Re()}(i,e.precondition)),t}function N2(i,e){return i&&i.length>0?(it(e!==void 0),i.map(t=>function(a,l){let c=a.updateTime?Yi(a.updateTime):Yi(l);return c.isEqual(Ne.min())&&(c=Yi(l)),new c2(c,a.transformResults||[])}(t,e))):[]}function D2(i,e){return{documents:[qw(i,e.path)]}}function O2(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=qw(i,a);const l=function(m){if(m.length!==0)return Ww(Xi.create(m,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(m){if(m.length!==0)return m.map(E=>function(R){return{field:Bo(R.field),direction:M2(R.dir)}}(E))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=om(i,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ht:t,parent:a}}function x2(i){let e=C2(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){it(s===1);const E=t.from[0];E.allDescendants?a=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const R=Kw(T);return R instanceof Xi&&Sw(R)?R.getFilters():[R]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(R=>function(q){return new Nf(zo(q.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(q.direction))}(R))}(t.orderBy));let d=null;t.limit&&(d=function(T){let R;return R=typeof T=="object"?T.value:T,Yf(R)?null:R}(t.limit));let _=null;t.startAt&&(_=function(T){const R=!!T.before,P=T.values||[];return new If(P,R)}(t.startAt));let m=null;return t.endAt&&(m=function(T){const R=!T.before,P=T.values||[];return new If(P,R)}(t.endAt)),Yk(e,a,c,l,d,"F",_,m)}function k2(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Re()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Kw(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=zo(t.unaryFilter.field);return jt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=zo(t.unaryFilter.field);return jt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=zo(t.unaryFilter.field);return jt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=zo(t.unaryFilter.field);return jt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Re()}}(i):i.fieldFilter!==void 0?function(t){return jt.create(zo(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Re()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Xi.create(t.compositeFilter.filters.map(s=>Kw(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Re()}}(t.compositeFilter.op))}(i):Re()}function M2(i){return T2[i]}function P2(i){return S2[i]}function V2(i){return A2[i]}function Bo(i){return{fieldPath:i.canonicalString()}}function zo(i){return un.fromServerFormat(i.fieldPath)}function Ww(i){return i instanceof jt?function(t){if(t.op==="=="){if(hS(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NAN"}};if(cS(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(hS(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NOT_NAN"}};if(cS(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bo(t.field),op:P2(t.op),value:t.value}}}(i):i instanceof Xi?function(t){const s=t.getFilters().map(a=>Ww(a));return s.length===1?s[0]:{compositeFilter:{op:V2(t.op),filters:s}}}(i):Re()}function L2(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Qw(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t,s,a,l=Ne.min(),c=Ne.min(),d=hn.EMPTY_BYTE_STRING,_=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=_}withSequenceNumber(e){return new Cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e){this.Tt=e}}function j2(i){const e=x2({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?am(e,e.limit,"L"):e}/**
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
 */class B2{constructor(){this.Tn=new z2}addToCollectionParentIndex(e,t){return this.Tn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(Pr.min())}updateCollectionGroup(e,t,s){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class z2{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new zt(wt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new zt(wt.comparator)).toArray()}}/**
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
 */const bS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yw=41943040;class On{static withCacheSize(e){return new On(e,On.DEFAULT_COLLECTION_PERCENTILE,On.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On.DEFAULT_COLLECTION_PERCENTILE=10,On.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,On.DEFAULT=new On(Yw,On.DEFAULT_COLLECTION_PERCENTILE,On.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),On.DISABLED=new On(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new rl(0)}static Un(){return new rl(-1)}}/**
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
 */const CS="LruGarbageCollector",H2=1048576;function RS([i,e],[t,s]){const a=Fe(i,t);return a===0?Fe(e,s):a}class F2{constructor(e){this.Hn=e,this.buffer=new zt(RS),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();RS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class q2{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){_e(CS,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ml(t)?_e(CS,"Ignoring IndexedDB error during garbage collection: ",t):await _l(t)}await this.er(3e5)})}}class G2{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(Qf.ae);const s=new F2(t);return this.tr.forEachTarget(e,a=>s.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>s.Zn(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_e("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(bS)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(_e("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bS):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,a,l,c,d,_,m;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(_e("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(s=T,d=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,_=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(m=Date.now(),Uo()<=je.DEBUG&&_e("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-E}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(_-d)+`ms
	Removed ${T} documents in `+(m-_)+`ms
Total Duration: ${m-E}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function K2(i,e){return new G2(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(){this.changes=new Fa(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,En.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Q2{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&Wu(s.mutation,a,qn.empty(),Bt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,ze()).next(()=>s))}getLocalViewOfDocuments(e,t,s=ze()){const a=Ra();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let c=Lu();return l.forEach((d,_)=>{c=c.insert(d,_.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const s=Ra();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,ze()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,s,a){let l=Ms();const c=Ku(),d=function(){return Ku()}();return t.forEach((_,m)=>{const E=s.get(m.key);a.has(m.key)&&(E===void 0||E.mutation instanceof qr)?l=l.insert(m.key,m):E!==void 0?(c.set(m.key,E.mutation.getFieldMask()),Wu(E.mutation,m,E.mutation.getFieldMask(),Bt.now())):c.set(m.key,qn.empty())}),this.recalculateAndSaveOverlays(e,l).next(_=>(_.forEach((m,E)=>c.set(m,E)),t.forEach((m,E)=>{var T;return d.set(m,new Q2(E,(T=c.get(m))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const s=Ku();let a=new vt((c,d)=>c-d),l=ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(_=>{const m=t.get(_);if(m===null)return;let E=s.get(_)||qn.empty();E=d.applyToLocalView(m,E),s.set(_,E);const T=(a.get(d.batchId)||ze()).add(_);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const _=d.getNext(),m=_.key,E=_.value,T=Dw();E.forEach(R=>{if(!l.has(R)){const P=Vw(t.get(R),s.get(R));P!==null&&T.set(R,P),l=l.add(R)}}),c.push(this.documentOverlayCache.saveOverlays(e,m,T))}return Z.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(c){return Ae.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):$k(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):Z.resolve(Ra());let d=ec,_=l;return c.next(m=>Z.forEach(m,(E,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(E)?Z.resolve():this.remoteDocumentCache.getEntry(e,E).next(R=>{_=_.insert(E,R)}))).next(()=>this.populateOverlays(e,m,l)).next(()=>this.computeViews(e,_,m,ze())).next(E=>({batchId:d,changes:Nw(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ae(t)).next(s=>{let a=Lu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Lu();return this.indexManager.getCollectionParents(e,l).next(d=>Z.forEach(d,_=>{const m=function(T,R){return new Xf(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,_.child(l));return this.getDocumentsMatchingCollectionQuery(e,m,s,a).next(E=>{E.forEach((T,R)=>{c=c.insert(T,R)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(c=>{l.forEach((_,m)=>{const E=m.getKey();c.get(E)===null&&(c=c.insert(E,En.newInvalidDocument(E)))});let d=Lu();return c.forEach((_,m)=>{const E=l.get(_);E!==void 0&&Wu(E.mutation,m,qn.empty(),Bt.now()),Jf(t,m)&&(d=d.insert(_,m))}),d})}}/**
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
 */class $2{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return Z.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Yi(a.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:j2(a.bundledQuery),readTime:Yi(a.readTime)}}(t)),Z.resolve()}}/**
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
 */class X2{constructor(){this.overlays=new vt(Ae.comparator),this.Rr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ra();return Z.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.Et(e,t,l)}),Z.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Rr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(s)),Z.resolve()}getOverlaysForCollection(e,t,s){const a=Ra(),l=t.length+1,c=new Ae(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const _=d.getNext().value,m=_.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===l&&_.largestBatchId>s&&a.set(_.getKey(),_)}return Z.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new vt((m,E)=>m-E);const c=this.overlays.getIterator();for(;c.hasNext();){const m=c.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>s){let E=l.get(m.largestBatchId);E===null&&(E=Ra(),l=l.insert(m.largestBatchId,E)),E.set(m.getKey(),m)}}const d=Ra(),_=l.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach((m,E)=>d.set(m,E)),!(d.size()>=a)););return Z.resolve(d)}Et(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.Rr.get(a.largestBatchId).delete(s.key);this.Rr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new _2(t,s));let l=this.Rr.get(t);l===void 0&&(l=ze(),this.Rr.set(t,l)),this.Rr.set(t,l.add(s.key))}}/**
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
 */class Z2{constructor(){this.sessionToken=hn.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.Vr=new zt($t.mr),this.gr=new zt($t.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new $t(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new $t(e,t))}br(e,t){e.forEach(s=>this.removeReference(s,t))}Sr(e){const t=new Ae(new wt([])),s=new $t(t,e),a=new $t(t,e+1),l=[];return this.gr.forEachInRange([s,a],c=>{this.wr(c),l.push(c.key)}),l}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new Ae(new wt([])),s=new $t(t,e),a=new $t(t,e+1);let l=ze();return this.gr.forEachInRange([s,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new $t(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class $t{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return Ae.comparator(e.key,t.key)||Fe(e.Cr,t.Cr)}static pr(e,t){return Fe(e.Cr,t.Cr)||Ae.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new zt($t.mr)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new p2(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Mr=this.Mr.add(new $t(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Z.resolve(c)}lookupMutationBatch(e,t){return Z.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Nr(s),l=a<0?0:a;return Z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?eg:this.Fr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new $t(t,0),a=new $t(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([s,a],c=>{const d=this.Or(c.Cr);l.push(d)}),Z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new zt(Fe);return t.forEach(a=>{const l=new $t(a,0),c=new $t(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,c],d=>{s=s.add(d.Cr)})}),Z.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;Ae.isDocumentKey(l)||(l=l.child(""));const c=new $t(new Ae(l),0);let d=new zt(Fe);return this.Mr.forEachWhile(_=>{const m=_.key.path;return!!s.isPrefixOf(m)&&(m.length===a&&(d=d.add(_.Cr)),!0)},c),Z.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(s=>{const a=this.Or(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){it(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return Z.forEach(t.mutations,a=>{const l=new $t(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new $t(t,0),a=this.Mr.firstAfterOrEqual(s);return Z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e){this.kr=e,this.docs=function(){return new vt(Ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Z.resolve(s?s.document.mutableCopy():En.newInvalidDocument(t))}getEntries(e,t){let s=Ms();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():En.newInvalidDocument(a))}),Z.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Ms();const c=t.path,d=new Ae(c.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(d);for(;_.hasNext();){const{key:m,value:{document:E}}=_.getNext();if(!c.isPrefixOf(m.path))break;m.path.length>c.length+1||Rk(Ck(E),s)<=0||(a.has(E.key)||Jf(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return Z.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Re()}qr(e,t){return Z.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new tM(this)}getSize(e){return Z.resolve(this.size)}}class tM extends W2{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(s)}),Z.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e){this.persistence=e,this.Qr=new Fa(t=>ig(t),sg),this.lastRemoteSnapshotVersion=Ne.min(),this.highestTargetId=0,this.$r=0,this.Kr=new cg,this.targetCount=0,this.Ur=rl.Kn()}forEachTarget(e,t){return this.Qr.forEach((s,a)=>t(a)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),Z.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new rl(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.zn(t),Z.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.Qr.forEach((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.Qr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),Z.waitFor(l).next(()=>a)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return Z.resolve(s)}addMatchingKeys(e,t,s){return this.Kr.yr(t,s),Z.resolve()}removeMatchingKeys(e,t,s){this.Kr.br(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),Z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Kr.vr(t);return Z.resolve(s)}containsKey(e,t){return Z.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Qf(0),this.zr=!1,this.zr=!0,this.jr=new Z2,this.referenceDelegate=e(this),this.Hr=new nM(this),this.indexManager=new B2,this.remoteDocumentCache=function(a){return new eM(a)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new U2(t),this.Yr=new $2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new X2,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new J2(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){_e("MemoryPersistence","Starting transaction:",e);const a=new iM(this.Gr.next());return this.referenceDelegate.Zr(),s(a).next(l=>this.referenceDelegate.Xr(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}ei(e,t){return Z.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class iM extends Nk{constructor(e){super(),this.currentSequenceNumber=e}}class hg{constructor(e){this.persistence=e,this.ti=new cg,this.ni=null}static ri(e){return new hg(e)}get ii(){if(this.ni)return this.ni;throw Re()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),Z.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),Z.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(a=>this.ii.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.ii.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.ii,s=>{const a=Ae.fromPath(s);return this.si(e,a).next(l=>{l||t.removeEntry(a,Ne.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return Z.or([()=>Z.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class kf{constructor(e,t){this.persistence=e,this.oi=new Fa(s=>xk(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=K2(this,t)}static ri(e,t){return new kf(e,t)}Zr(){}Xr(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return Z.forEach(this.oi,(s,a)=>this.ar(e,s,a).next(l=>l?Z.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.qr(e,c=>this.ar(e,c,t).next(d=>{d||(s++,l.removeEntry(c,Ne.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),Z.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=sf(e.data.value)),t}ar(e,t,s){return Z.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return Z.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=a}static Yi(e,t){let s=ze(),a=ze();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new fg(e,t.fromCache,s,a)}}/**
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
 */class sM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class rM{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return YR()?8:Dk(Sn())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.rs(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ss(e,t,a,s).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new sM;return this._s(e,t,c).next(d=>{if(l.result=d,this.Xi)return this.us(e,t,c,d.size)})}).next(()=>l.result)}us(e,t,s,a){return s.documentReadCount<this.es?(Uo()<=je.DEBUG&&_e("QueryEngine","SDK will not create cache indexes for query:",jo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),Z.resolve()):(Uo()<=je.DEBUG&&_e("QueryEngine","Query:",jo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ts*a?(Uo()<=je.DEBUG&&_e("QueryEngine","The SDK decides to create cache indexes for query:",jo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wi(t))):Z.resolve())}rs(e,t){if(_S(t))return Z.resolve(null);let s=Wi(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=am(t,null,"F"),s=Wi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const c=ze(...l);return this.ns.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,s).next(_=>{const m=this.cs(t,d);return this.ls(t,m,c,_.readTime)?this.rs(e,am(t,null,"F")):this.hs(e,m,t,_)}))})))}ss(e,t,s,a){return _S(t)||a.isEqual(Ne.min())?Z.resolve(null):this.ns.getDocuments(e,s).next(l=>{const c=this.cs(t,l);return this.ls(t,c,s,a)?Z.resolve(null):(Uo()<=je.DEBUG&&_e("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),jo(t)),this.hs(e,c,t,bk(a,ec)).next(d=>d))})}cs(e,t){let s=new zt(Rw(e));return t.forEach((a,l)=>{Jf(e,l)&&(s=s.add(l))}),s}ls(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}_s(e,t,s){return Uo()<=je.DEBUG&&_e("QueryEngine","Using full collection scan to execute query:",jo(t)),this.ns.getDocumentsMatchingQuery(e,t,Pr.min(),s)}hs(e,t,s,a){return this.ns.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */const dg="LocalStore",aM=3e8;class oM{constructor(e,t,s,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new vt(Fe),this.Is=new Fa(l=>ig(l),sg),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Y2(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function lM(i,e,t,s){return new oM(i,e,t,s)}async function Xw(i,e){const t=Oe(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const c=[],d=[];let _=ze();for(const m of a){c.push(m.batchId);for(const E of m.mutations)_=_.add(E.key)}for(const m of l){d.push(m.batchId);for(const E of m.mutations)_=_.add(E.key)}return t.localDocuments.getDocuments(s,_).next(m=>({Rs:m,removedBatchIds:c,addedBatchIds:d}))})})}function uM(i,e){const t=Oe(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),l=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,_,m,E){const T=m.batch,R=T.keys();let P=Z.resolve();return R.forEach(q=>{P=P.next(()=>E.getEntry(_,q)).next(Q=>{const F=m.docVersions.get(q);it(F!==null),Q.version.compareTo(F)<0&&(T.applyToRemoteDocument(Q,m),Q.isValidDocument()&&(Q.setReadTime(m.commitVersion),E.addEntry(Q)))})}),P.next(()=>d.mutationQueue.removeMutationBatch(_,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let _=ze();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(_=_.add(d.batch.mutations[m].key));return _}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function Zw(i){const e=Oe(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function cM(i,e){const t=Oe(i),s=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const d=[];e.targetChanges.forEach((E,T)=>{const R=a.get(T);if(!R)return;d.push(t.Hr.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.Hr.addMatchingKeys(l,E.addedDocuments,T)));let P=R.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?P=P.withResumeToken(hn.EMPTY_BYTE_STRING,Ne.min()).withLastLimboFreeSnapshotVersion(Ne.min()):E.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(E.resumeToken,s)),a=a.insert(T,P),function(Q,F,X){return Q.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=aM?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0}(R,P,E)&&d.push(t.Hr.updateTargetData(l,P))});let _=Ms(),m=ze();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),d.push(hM(l,c,e.documentUpdates).next(E=>{_=E.Vs,m=E.fs})),!s.isEqual(Ne.min())){const E=t.Hr.getLastRemoteSnapshotVersion(l).next(T=>t.Hr.setTargetsMetadata(l,l.currentSequenceNumber,s));d.push(E)}return Z.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,_,m)).next(()=>_)}).then(l=>(t.Ts=a,l))}function hM(i,e,t){let s=ze(),a=ze();return t.forEach(l=>s=s.add(l)),e.getEntries(i,s).next(l=>{let c=Ms();return t.forEach((d,_)=>{const m=l.get(d);_.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(d)),_.isNoDocument()&&_.version.isEqual(Ne.min())?(e.removeEntry(d,_.readTime),c=c.insert(d,_)):!m.isValidDocument()||_.version.compareTo(m.version)>0||_.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(_),c=c.insert(d,_)):_e(dg,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",_.version)}),{Vs:c,fs:a}})}function fM(i,e){const t=Oe(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=eg),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function dM(i,e){const t=Oe(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.Hr.getTargetData(s,e).next(l=>l?(a=l,Z.resolve(a)):t.Hr.allocateTargetId(s).next(c=>(a=new Cr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Hr.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.Ts.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(s.targetId,s),t.Is.set(e,s.targetId)),s})}async function hm(i,e,t){const s=Oe(i),a=s.Ts.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,c=>s.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!ml(c))throw c;_e(dg,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ts=s.Ts.remove(e),s.Is.delete(a.target)}function IS(i,e,t){const s=Oe(i);let a=Ne.min(),l=ze();return s.persistence.runTransaction("Execute query","readwrite",c=>function(_,m,E){const T=Oe(_),R=T.Is.get(E);return R!==void 0?Z.resolve(T.Ts.get(R)):T.Hr.getTargetData(m,E)}(s,c,Wi(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(c,d.targetId).next(_=>{l=_})}).next(()=>s.Ps.getDocumentsMatchingQuery(c,e,t?a:Ne.min(),t?l:ze())).next(d=>(pM(s,Zk(e),d),{documents:d,gs:l})))}function pM(i,e,t){let s=i.Es.get(e)||Ne.min();t.forEach((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),i.Es.set(e,s)}class NS{constructor(){this.activeTargetIds=s2()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _M{constructor(){this.ho=new NS,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new NS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mM{To(e){}shutdown(){}}/**
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
 */const DS="ConnectivityMonitor";class OS{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){_e(DS,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){_e(DS,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qh=null;function fm(){return Qh===null?Qh=function(){return 268435456+Math.round(2147483648*Math.random())}():Qh++,"0x"+Qh.toString(16)}/**
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
 */const D_="RestConnection",gM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yM{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${a}`,this.wo=this.databaseId.database===Cf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}bo(e,t,s,a,l){const c=fm(),d=this.So(e,t.toUriEncodedString());_e(D_,`Sending RPC '${e}' ${c}:`,d,s);const _={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(_,a,l),this.vo(e,d,_,s).then(m=>(_e(D_,`Received RPC '${e}' ${c}: `,m),m),m=>{throw el(D_,`RPC '${e}' ${c} failed with error: `,m,"url: ",d,"request:",s),m})}Co(e,t,s,a,l,c){return this.bo(e,t,s,a,l)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}So(e,t){const s=gM[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="WebChannelConnection";class EM extends yM{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,a){const l=fm();return new Promise((c,d)=>{const _=new iw;_.setWithCredentials(!0),_.listenOnce(sw.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case nf.NO_ERROR:const E=_.getResponseJson();_e(_n,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),c(E);break;case nf.TIMEOUT:_e(_n,`RPC '${e}' ${l} timed out`),d(new Se(re.DEADLINE_EXCEEDED,"Request time out"));break;case nf.HTTP_ERROR:const T=_.getStatus();if(_e(_n,`RPC '${e}' ${l} failed with status:`,T,"response text:",_.getResponseText()),T>0){let R=_.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const q=function(F){const X=F.toLowerCase().replace(/_/g,"-");return Object.values(re).indexOf(X)>=0?X:re.UNKNOWN}(P.status);d(new Se(q,P.message))}else d(new Se(re.UNKNOWN,"Server responded with status "+_.getStatus()))}else d(new Se(re.UNAVAILABLE,"Connection failed."));break;default:Re()}}finally{_e(_n,`RPC '${e}' ${l} completed.`)}});const m=JSON.stringify(a);_e(_n,`RPC '${e}' ${l} sending request:`,a),_.send(t,"POST",m,s,15)})}Wo(e,t,s){const a=fm(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=ow(),d=aw(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(_.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(_.useFetchStreams=!0),this.Do(_.initMessageHeaders,t,s),_.encodeInitMessageHeaders=!0;const E=l.join("");_e(_n,`Creating RPC '${e}' stream ${a}: ${E}`,_);const T=c.createWebChannel(E,_);let R=!1,P=!1;const q=new vM({Fo:F=>{P?_e(_n,`Not sending because RPC '${e}' stream ${a} is closed:`,F):(R||(_e(_n,`Opening RPC '${e}' stream ${a} transport.`),T.open(),R=!0),_e(_n,`RPC '${e}' stream ${a} sending:`,F),T.send(F))},Mo:()=>T.close()}),Q=(F,X,Y)=>{F.listen(X,J=>{try{Y(J)}catch(fe){setTimeout(()=>{throw fe},0)}})};return Q(T,Vu.EventType.OPEN,()=>{P||(_e(_n,`RPC '${e}' stream ${a} transport opened.`),q.Qo())}),Q(T,Vu.EventType.CLOSE,()=>{P||(P=!0,_e(_n,`RPC '${e}' stream ${a} transport closed`),q.Ko())}),Q(T,Vu.EventType.ERROR,F=>{P||(P=!0,el(_n,`RPC '${e}' stream ${a} transport errored:`,F),q.Ko(new Se(re.UNAVAILABLE,"The operation could not be completed")))}),Q(T,Vu.EventType.MESSAGE,F=>{var X;if(!P){const Y=F.data[0];it(!!Y);const J=Y,fe=(J==null?void 0:J.error)||((X=J[0])===null||X===void 0?void 0:X.error);if(fe){_e(_n,`RPC '${e}' stream ${a} received error:`,fe);const de=fe.status;let Ce=function(b){const D=kt[b];if(D!==void 0)return jw(D)}(de),x=fe.message;Ce===void 0&&(Ce=re.INTERNAL,x="Unknown error status: "+de+" with message "+fe.message),P=!0,q.Ko(new Se(Ce,x)),T.close()}else _e(_n,`RPC '${e}' stream ${a} received:`,Y),q.Uo(Y)}}),Q(d,rw.STAT_EVENT,F=>{F.stat===tm.PROXY?_e(_n,`RPC '${e}' stream ${a} detected buffering proxy`):F.stat===tm.NOPROXY&&_e(_n,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{q.$o()},0),q}}function O_(){return typeof document<"u"?document:null}/**
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
 */function id(i){return new w2(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=a,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-s);a>0&&_e("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS="PersistentStream";class eb{constructor(e,t,s,a,l,c,d,_){this.Ti=e,this.n_=s,this.r_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=_,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Jw(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===re.RESOURCE_EXHAUSTED?(ks(t.toString()),ks("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===re.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.i_===t&&this.V_(s,a)},s=>{e(()=>{const a=new Se(re.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(a)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{s(()=>this.m_(a))}),this.stream.onMessage(a=>{s(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return _e(xS,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(_e(xS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TM extends eb{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=R2(this.serializer,e),s=function(l){if(!("targetChange"in l))return Ne.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ne.min():c.readTime?Yi(c.readTime):Ne.min()}(e);return this.listener.p_(t,s)}y_(e){const t={};t.database=cm(this.serializer),t.addTarget=function(l,c){let d;const _=c.target;if(d=rm(_)?{documents:D2(l,_)}:{query:O2(l,_).ht},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=Hw(l,c.resumeToken);const m=om(l,c.expectedCount);m!==null&&(d.expectedCount=m)}else if(c.snapshotVersion.compareTo(Ne.min())>0){d.readTime=xf(l,c.snapshotVersion.toTimestamp());const m=om(l,c.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const s=k2(this.serializer,e);s&&(t.labels=s),this.I_(t)}w_(e){const t={};t.database=cm(this.serializer),t.removeTarget=e,this.I_(t)}}class SM extends eb{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return it(!!e.streamToken),this.lastStreamToken=e.streamToken,it(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){it(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=N2(e.writeResults,e.commitTime),s=Yi(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=cm(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>I2(this.serializer,s))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{}class wM extends AM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new Se(re.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,s,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.bo(e,lm(t,s),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===re.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Se(re.UNKNOWN,l.toString())})}Co(e,t,s,a,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Co(e,lm(t,s),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===re.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new Se(re.UNKNOWN,c.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class bM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const Va="RemoteStore";class CM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(c=>{s.enqueueAndForget(async()=>{qa(this)&&(_e(Va,"Restarting streams for network reachability change."),await async function(_){const m=Oe(_);m.W_.add(4),await yc(m),m.j_.set("Unknown"),m.W_.delete(4),await sd(m)}(this))})}),this.j_=new bM(s,a)}}async function sd(i){if(qa(i))for(const e of i.G_)await e(!0)}async function yc(i){for(const e of i.G_)await e(!1)}function tb(i,e){const t=Oe(i);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),gg(t)?mg(t):gl(t).c_()&&_g(t,e))}function pg(i,e){const t=Oe(i),s=gl(t);t.U_.delete(e),s.c_()&&nb(t,e),t.U_.size===0&&(s.c_()?s.P_():qa(t)&&t.j_.set("Unknown"))}function _g(i,e){if(i.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ne.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gl(i).y_(e)}function nb(i,e){i.H_.Ne(e),gl(i).w_(e)}function mg(i){i.H_=new E2({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>i.U_.get(e)||null,it:()=>i.datastore.serializer.databaseId}),gl(i).start(),i.j_.B_()}function gg(i){return qa(i)&&!gl(i).u_()&&i.U_.size>0}function qa(i){return Oe(i).W_.size===0}function ib(i){i.H_=void 0}async function RM(i){i.j_.set("Online")}async function IM(i){i.U_.forEach((e,t)=>{_g(i,e)})}async function NM(i,e){ib(i),gg(i)?(i.j_.q_(e),mg(i)):i.j_.set("Unknown")}async function DM(i,e,t){if(i.j_.set("Online"),e instanceof zw&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.U_.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.U_.delete(d),a.H_.removeTarget(d))}(i,e)}catch(s){_e(Va,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mf(i,s)}else if(e instanceof of?i.H_.We(e):e instanceof Bw?i.H_.Ze(e):i.H_.je(e),!t.isEqual(Ne.min()))try{const s=await Zw(i.localStore);t.compareTo(s)>=0&&await function(l,c){const d=l.H_.ot(c);return d.targetChanges.forEach((_,m)=>{if(_.resumeToken.approximateByteSize()>0){const E=l.U_.get(m);E&&l.U_.set(m,E.withResumeToken(_.resumeToken,c))}}),d.targetMismatches.forEach((_,m)=>{const E=l.U_.get(_);if(!E)return;l.U_.set(_,E.withResumeToken(hn.EMPTY_BYTE_STRING,E.snapshotVersion)),nb(l,_);const T=new Cr(E.target,_,m,E.sequenceNumber);_g(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(i,t)}catch(s){_e(Va,"Failed to raise snapshot:",s),await Mf(i,s)}}async function Mf(i,e,t){if(!ml(e))throw e;i.W_.add(1),await yc(i),i.j_.set("Offline"),t||(t=()=>Zw(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{_e(Va,"Retrying IndexedDB access"),await t(),i.W_.delete(1),await sd(i)})}function sb(i,e){return e().catch(t=>Mf(i,t,e))}async function rd(i){const e=Oe(i),t=jr(e);let s=e.K_.length>0?e.K_[e.K_.length-1].batchId:eg;for(;OM(e);)try{const a=await fM(e.localStore,s);if(a===null){e.K_.length===0&&t.P_();break}s=a.batchId,xM(e,a)}catch(a){await Mf(e,a)}rb(e)&&ab(e)}function OM(i){return qa(i)&&i.K_.length<10}function xM(i,e){i.K_.push(e);const t=jr(i);t.c_()&&t.b_&&t.S_(e.mutations)}function rb(i){return qa(i)&&!jr(i).u_()&&i.K_.length>0}function ab(i){jr(i).start()}async function kM(i){jr(i).C_()}async function MM(i){const e=jr(i);for(const t of i.K_)e.S_(t.mutations)}async function PM(i,e,t){const s=i.K_.shift(),a=og.from(s,e,t);await sb(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await rd(i)}async function VM(i,e){e&&jr(i).b_&&await async function(s,a){if(function(c){return g2(c)&&c!==re.ABORTED}(a.code)){const l=s.K_.shift();jr(s).h_(),await sb(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a)),await rd(s)}}(i,e),rb(i)&&ab(i)}async function kS(i,e){const t=Oe(i);t.asyncQueue.verifyOperationInProgress(),_e(Va,"RemoteStore received new credentials");const s=qa(t);t.W_.add(3),await yc(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await sd(t)}async function LM(i,e){const t=Oe(i);e?(t.W_.delete(2),await sd(t)):e||(t.W_.add(2),await yc(t),t.j_.set("Unknown"))}function gl(i){return i.J_||(i.J_=function(t,s,a){const l=Oe(t);return l.M_(),new TM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{xo:RM.bind(null,i),No:IM.bind(null,i),Lo:NM.bind(null,i),p_:DM.bind(null,i)}),i.G_.push(async e=>{e?(i.J_.h_(),gg(i)?mg(i):i.j_.set("Unknown")):(await i.J_.stop(),ib(i))})),i.J_}function jr(i){return i.Y_||(i.Y_=function(t,s,a){const l=Oe(t);return l.M_(),new SM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{xo:()=>Promise.resolve(),No:kM.bind(null,i),Lo:VM.bind(null,i),D_:MM.bind(null,i),v_:PM.bind(null,i)}),i.G_.push(async e=>{e?(i.Y_.h_(),await rd(i)):(await i.Y_.stop(),i.K_.length>0&&(_e(Va,`Stopping write stream with ${i.K_.length} pending writes`),i.K_=[]))})),i.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new yg(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Se(re.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vg(i,e){if(ks("AsyncQueue",`${e}: ${i}`),ml(i))return new Se(re.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{static emptySet(e){return new $o(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Ae.comparator(t.key,s.key):(t,s)=>Ae.comparator(t.key,s.key),this.keyedMap=Lu(),this.sortedSet=new vt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $o)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new $o;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(){this.Z_=new vt(Ae.comparator)}track(e){const t=e.doc.key,s=this.Z_.get(t);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(t):e.type===1&&s.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Re():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class al{constructor(e,t,s,a,l,c,d,_,m){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=_,this.hasCachedResults=m}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new al(e,t,$o.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class jM{constructor(){this.queries=PS(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const a=Oe(t),l=a.queries;a.queries=PS(),l.forEach((c,d)=>{for(const _ of d.ta)_.onError(s)})})(this,new Se(re.ABORTED,"Firestore shutting down"))}}function PS(){return new Fa(i=>Cw(i),Zf)}async function BM(i,e){const t=Oe(i);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.na()&&e.ra()&&(s=2):(l=new UM,s=e.ra()?0:1);try{switch(s){case 0:l.ea=await t.onListen(a,!0);break;case 1:l.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=vg(c,`Initialization of query '${jo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.ta.push(e),e.sa(t.onlineState),l.ea&&e.oa(l.ea)&&Eg(t)}async function zM(i,e){const t=Oe(i),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.ta.indexOf(e);c>=0&&(l.ta.splice(c,1),l.ta.length===0?a=e.ra()?0:1:!l.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function HM(i,e){const t=Oe(i);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.ta)d.oa(a)&&(s=!0);c.ea=a}}s&&Eg(t)}function FM(i,e,t){const s=Oe(i),a=s.queries.get(e);if(a)for(const l of a.ta)l.onError(t);s.queries.delete(e)}function Eg(i){i.ia.forEach(e=>{e.next()})}var dm,VS;(VS=dm||(dm={}))._a="default",VS.Cache="cache";class qM{constructor(e,t,s){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new al(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const s=t!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=al.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==dm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.key=e}}class lb{constructor(e){this.key=e}}class GM{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ze(),this.mutatedKeys=ze(),this.ya=Rw(e),this.wa=new $o(this.ya)}get ba(){return this.fa}Sa(e,t){const s=t?t.Da:new MS,a=t?t.wa:this.wa;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const _=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((E,T)=>{const R=a.get(E),P=Jf(this.query,T)?T:null,q=!!R&&this.mutatedKeys.has(R.key),Q=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let F=!1;R&&P?R.data.isEqual(P.data)?q!==Q&&(s.track({type:3,doc:P}),F=!0):this.va(R,P)||(s.track({type:2,doc:P}),F=!0,(_&&this.ya(P,_)>0||m&&this.ya(P,m)<0)&&(d=!0)):!R&&P?(s.track({type:0,doc:P}),F=!0):R&&!P&&(s.track({type:1,doc:R}),F=!0,(_||m)&&(d=!0)),F&&(P?(c=c.add(P),l=Q?l.add(E):l.delete(E)):(c=c.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const E=this.query.limitType==="F"?c.last():c.first();c=c.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{wa:c,Da:s,ls:d,mutatedKeys:l}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const c=e.Da.X_();c.sort((E,T)=>function(P,q){const Q=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Re()}};return Q(P)-Q(q)}(E.type,T.type)||this.ya(E.doc,T.doc)),this.Ca(s),a=a!=null&&a;const d=t&&!a?this.Fa():[],_=this.pa.size===0&&this.current&&!a?1:0,m=_!==this.ga;return this.ga=_,c.length!==0||m?{snapshot:new al(this.query,e.wa,l,c,e.mutatedKeys,_===0,m,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new MS,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ze(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const t=[];return e.forEach(s=>{this.pa.has(s)||t.push(new lb(s))}),this.pa.forEach(s=>{e.has(s)||t.push(new ob(s))}),t}Oa(e){this.fa=e.gs,this.pa=ze();const t=this.Sa(e.documents);return this.applyChanges(t,!0)}Na(){return al.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Tg="SyncEngine";class KM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class WM{constructor(e){this.key=e,this.Ba=!1}}class QM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.La={},this.ka=new Fa(d=>Cw(d),Zf),this.qa=new Map,this.Qa=new Set,this.$a=new vt(Ae.comparator),this.Ka=new Map,this.Ua=new cg,this.Wa={},this.Ga=new Map,this.za=rl.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function YM(i,e,t=!0){const s=pb(i);let a;const l=s.ka.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.Na()):a=await ub(s,e,t,!0),a}async function $M(i,e){const t=pb(i);await ub(t,e,!0,!1)}async function ub(i,e,t,s){const a=await dM(i.localStore,Wi(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await XM(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&tb(i.remoteStore,a),d}async function XM(i,e,t,s,a){i.Ha=(T,R,P)=>async function(Q,F,X,Y){let J=F.view.Sa(X);J.ls&&(J=await IS(Q.localStore,F.query,!1).then(({documents:x})=>F.view.Sa(x,J)));const fe=Y&&Y.targetChanges.get(F.targetId),de=Y&&Y.targetMismatches.get(F.targetId)!=null,Ce=F.view.applyChanges(J,Q.isPrimaryClient,fe,de);return US(Q,F.targetId,Ce.Ma),Ce.snapshot}(i,T,R,P);const l=await IS(i.localStore,e,!0),c=new GM(e,l.gs),d=c.Sa(l.documents),_=gc.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),m=c.applyChanges(d,i.isPrimaryClient,_);US(i,t,m.Ma);const E=new KM(e,t,c);return i.ka.set(e,E),i.qa.has(t)?i.qa.get(t).push(e):i.qa.set(t,[e]),m.snapshot}async function ZM(i,e,t){const s=Oe(i),a=s.ka.get(e),l=s.qa.get(a.targetId);if(l.length>1)return s.qa.set(a.targetId,l.filter(c=>!Zf(c,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await hm(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&pg(s.remoteStore,a.targetId),pm(s,a.targetId)}).catch(_l)):(pm(s,a.targetId),await hm(s.localStore,a.targetId,!0))}async function JM(i,e){const t=Oe(i),s=t.ka.get(e),a=t.qa.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),pg(t.remoteStore,s.targetId))}async function eP(i,e,t){const s=oP(i);try{const a=await function(c,d){const _=Oe(c),m=Bt.now(),E=d.reduce((P,q)=>P.add(q.key),ze());let T,R;return _.persistence.runTransaction("Locally write mutations","readwrite",P=>{let q=Ms(),Q=ze();return _.ds.getEntries(P,E).next(F=>{q=F,q.forEach((X,Y)=>{Y.isValidDocument()||(Q=Q.add(X))})}).next(()=>_.localDocuments.getOverlayedDocuments(P,q)).next(F=>{T=F;const X=[];for(const Y of d){const J=f2(Y,T.get(Y.key).overlayedDocument);J!=null&&X.push(new qr(Y.key,J,vw(J.value.mapValue),Qi.exists(!0)))}return _.mutationQueue.addMutationBatch(P,m,X,d)}).next(F=>{R=F;const X=F.applyToLocalDocumentSet(T,Q);return _.documentOverlayCache.saveOverlays(P,F.batchId,X)})}).then(()=>({batchId:R.batchId,changes:Nw(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(c,d,_){let m=c.Wa[c.currentUser.toKey()];m||(m=new vt(Fe)),m=m.insert(d,_),c.Wa[c.currentUser.toKey()]=m}(s,a.batchId,t),await vc(s,a.changes),await rd(s.remoteStore)}catch(a){const l=vg(a,"Failed to persist write");t.reject(l)}}async function cb(i,e){const t=Oe(i);try{const s=await cM(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Ka.get(l);c&&(it(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?c.Ba=!0:a.modifiedDocuments.size>0?it(c.Ba):a.removedDocuments.size>0&&(it(c.Ba),c.Ba=!1))}),await vc(t,s,e)}catch(s){await _l(s)}}function LS(i,e,t){const s=Oe(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.ka.forEach((l,c)=>{const d=c.view.sa(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const _=Oe(c);_.onlineState=d;let m=!1;_.queries.forEach((E,T)=>{for(const R of T.ta)R.sa(d)&&(m=!0)}),m&&Eg(_)}(s.eventManager,e),a.length&&s.La.p_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function tP(i,e,t){const s=Oe(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Ka.get(e),l=a&&a.key;if(l){let c=new vt(Ae.comparator);c=c.insert(l,En.newNoDocument(l,Ne.min()));const d=ze().add(l),_=new nd(Ne.min(),new Map,new vt(Fe),c,d);await cb(s,_),s.$a=s.$a.remove(l),s.Ka.delete(e),Sg(s)}else await hm(s.localStore,e,!1).then(()=>pm(s,e,t)).catch(_l)}async function nP(i,e){const t=Oe(i),s=e.batch.batchId;try{const a=await uM(t.localStore,e);fb(t,s,null),hb(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await vc(t,a)}catch(a){await _l(a)}}async function iP(i,e,t){const s=Oe(i);try{const a=await function(c,d){const _=Oe(c);return _.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let E;return _.mutationQueue.lookupMutationBatch(m,d).next(T=>(it(T!==null),E=T.keys(),_.mutationQueue.removeMutationBatch(m,T))).next(()=>_.mutationQueue.performConsistencyCheck(m)).next(()=>_.documentOverlayCache.removeOverlaysForBatchId(m,E,d)).next(()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,E)).next(()=>_.localDocuments.getDocuments(m,E))})}(s.localStore,e);fb(s,e,t),hb(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await vc(s,a)}catch(a){await _l(a)}}function hb(i,e){(i.Ga.get(e)||[]).forEach(t=>{t.resolve()}),i.Ga.delete(e)}function fb(i,e,t){const s=Oe(i);let a=s.Wa[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Wa[s.currentUser.toKey()]=a}}function pm(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.qa.get(e))i.ka.delete(s),t&&i.La.Ja(s,t);i.qa.delete(e),i.isPrimaryClient&&i.Ua.Sr(e).forEach(s=>{i.Ua.containsKey(s)||db(i,s)})}function db(i,e){i.Qa.delete(e.path.canonicalString());const t=i.$a.get(e);t!==null&&(pg(i.remoteStore,t),i.$a=i.$a.remove(e),i.Ka.delete(t),Sg(i))}function US(i,e,t){for(const s of t)s instanceof ob?(i.Ua.addReference(s.key,e),sP(i,s)):s instanceof lb?(_e(Tg,"Document no longer in limbo: "+s.key),i.Ua.removeReference(s.key,e),i.Ua.containsKey(s.key)||db(i,s.key)):Re()}function sP(i,e){const t=e.key,s=t.path.canonicalString();i.$a.get(t)||i.Qa.has(s)||(_e(Tg,"New document in limbo: "+t),i.Qa.add(s),Sg(i))}function Sg(i){for(;i.Qa.size>0&&i.$a.size<i.maxConcurrentLimboResolutions;){const e=i.Qa.values().next().value;i.Qa.delete(e);const t=new Ae(wt.fromString(e)),s=i.za.next();i.Ka.set(s,new WM(t)),i.$a=i.$a.insert(t,s),tb(i.remoteStore,new Cr(Wi(rg(t.path)),s,"TargetPurposeLimboResolution",Qf.ae))}}async function vc(i,e,t){const s=Oe(i),a=[],l=[],c=[];s.ka.isEmpty()||(s.ka.forEach((d,_)=>{c.push(s.Ha(_,e,t).then(m=>{var E;if((m||t)&&s.isPrimaryClient){const T=m?!m.fromCache:(E=t==null?void 0:t.targetChanges.get(_.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(_.targetId,T?"current":"not-current")}if(m){a.push(m);const T=fg.Yi(_.targetId,m);l.push(T)}}))}),await Promise.all(c),s.La.p_(a),await async function(_,m){const E=Oe(_);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>Z.forEach(m,R=>Z.forEach(R.Hi,P=>E.persistence.referenceDelegate.addReference(T,R.targetId,P)).next(()=>Z.forEach(R.Ji,P=>E.persistence.referenceDelegate.removeReference(T,R.targetId,P)))))}catch(T){if(!ml(T))throw T;_e(dg,"Failed to update sequence numbers: "+T)}for(const T of m){const R=T.targetId;if(!T.fromCache){const P=E.Ts.get(R),q=P.snapshotVersion,Q=P.withLastLimboFreeSnapshotVersion(q);E.Ts=E.Ts.insert(R,Q)}}}(s.localStore,l))}async function rP(i,e){const t=Oe(i);if(!t.currentUser.isEqual(e)){_e(Tg,"User change. New user:",e.toKey());const s=await Xw(t.localStore,e);t.currentUser=e,function(l,c){l.Ga.forEach(d=>{d.forEach(_=>{_.reject(new Se(re.CANCELLED,c))})}),l.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await vc(t,s.Rs)}}function aP(i,e){const t=Oe(i),s=t.Ka.get(e);if(s&&s.Ba)return ze().add(s.key);{let a=ze();const l=t.qa.get(e);if(!l)return a;for(const c of l){const d=t.ka.get(c);a=a.unionWith(d.view.ba)}return a}}function pb(i){const e=Oe(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=cb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tP.bind(null,e),e.La.p_=HM.bind(null,e.eventManager),e.La.Ja=FM.bind(null,e.eventManager),e}function oP(i){const e=Oe(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iP.bind(null,e),e}class Pf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=id(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return lM(this.persistence,new rM,e.initialUser,this.serializer)}Xa(e){return new $w(hg.ri,this.serializer)}Za(e){return new _M}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pf.provider={build:()=>new Pf};class lP extends Pf{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){it(this.persistence.referenceDelegate instanceof kf);const s=this.persistence.referenceDelegate.garbageCollector;return new q2(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?On.withCacheSize(this.cacheSizeBytes):On.DEFAULT;return new $w(s=>kf.ri(s,t),this.serializer)}}class _m{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>LS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rP.bind(null,this.syncEngine),await LM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jM}()}createDatastore(e){const t=id(e.databaseInfo.databaseId),s=function(l){return new EM(l)}(e.databaseInfo);return function(l,c,d,_){return new wM(l,c,d,_)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,c,d){return new CM(s,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>LS(this.syncEngine,t,0),function(){return OS.D()?new OS:new mM}())}createSyncEngine(e,t){return function(a,l,c,d,_,m,E){const T=new QM(a,l,c,d,_,m);return E&&(T.ja=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=Oe(a);_e(Va,"RemoteStore shutting down."),l.W_.add(5),await yc(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}_m.provider={build:()=>new _m};/**
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
 */class uP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):ks("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="FirestoreClient";class cP{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=gn.UNAUTHENTICATED,this.clientId=uw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async c=>{_e(Br,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(_e(Br,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=vg(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function x_(i,e){i.asyncQueue.verifyOperationInProgress(),_e(Br,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await Xw(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function jS(i,e){i.asyncQueue.verifyOperationInProgress();const t=await hP(i);_e(Br,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>kS(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>kS(e.remoteStore,a)),i._onlineComponents=e}async function hP(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){_e(Br,"Using user provided OfflineComponentProvider");try{await x_(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===re.FAILED_PRECONDITION||a.code===re.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;el("Error using user provided cache. Falling back to memory cache: "+t),await x_(i,new Pf)}}else _e(Br,"Using default OfflineComponentProvider"),await x_(i,new lP(void 0));return i._offlineComponents}async function _b(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(_e(Br,"Using user provided OnlineComponentProvider"),await jS(i,i._uninitializedComponentsProvider._online)):(_e(Br,"Using default OnlineComponentProvider"),await jS(i,new _m))),i._onlineComponents}function fP(i){return _b(i).then(e=>e.syncEngine)}async function dP(i){const e=await _b(i),t=e.eventManager;return t.onListen=YM.bind(null,e.syncEngine),t.onUnlisten=ZM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=$M.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=JM.bind(null,e.syncEngine),t}function pP(i,e,t={}){const s=new Or;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,d,_,m){const E=new uP({next:R=>{E.su(),c.enqueueAndForget(()=>zM(l,T));const P=R.docs.has(d);!P&&R.fromCache?m.reject(new Se(re.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&R.fromCache&&_&&_.source==="server"?m.reject(new Se(re.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(R)},error:R=>m.reject(R)}),T=new qM(rg(d.path),E,{includeMetadataChanges:!0,Ta:!0});return BM(l,T)}(await dP(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function mb(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const BS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(i,e,t){if(!t)throw new Se(re.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function mP(i,e,t,s){if(e===!0&&s===!0)throw new Se(re.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function zS(i){if(!Ae.isDocumentKey(i))throw new Se(re.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Ag(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Re()}function La(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new Se(re.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ag(i);throw new Se(re.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */const gb="firestore.googleapis.com",HS=!0;class FS{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Se(re.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gb,this.ssl=HS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:HS;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<H2)throw new Se(re.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new Se(re.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new Se(re.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new Se(re.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wg{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new FS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Se(re.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Se(re.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new FS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new gk;switch(s.type){case"firstParty":return new Tk(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Se(re.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=BS.get(t);s&&(_e("ComponentProvider","Removing Datastore"),BS.delete(t),s.terminate())}(this),Promise.resolve()}}function gP(i,e,t,s={}){var a;const l=(i=La(i,wg))._getSettings(),c=Object.assign(Object.assign({},l),{emulatorOptions:i._getEmulatorOptions()}),d=`${e}:${t}`;l.host!==gb&&l.host!==d&&el("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},l),{host:d,ssl:!1,emulatorOptions:s});if(!xr(_,c)&&(i._setSettings(_),s.mockUserToken)){let m,E;if(typeof s.mockUserToken=="string")m=s.mockUserToken,E=gn.MOCK_USER;else{m=FR(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new Se(re.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new gn(T)}i._authCredentials=new yk(new lw(m,E))}}/**
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
 */class bg{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new bg(this.firestore,e,this._query)}}class Kn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kn(this.firestore,e,this._key)}}class rc extends bg{constructor(e,t,s){super(e,t,rg(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kn(this.firestore,null,new Ae(e))}withConverter(e){return new rc(this.firestore,e,this._path)}}function Ga(i,e,...t){if(i=cn(i),arguments.length===1&&(e=uw.newId()),_P("doc","path",e),i instanceof wg){const s=wt.fromString(e,...t);return zS(s),new Kn(i,null,new Ae(s))}{if(!(i instanceof Kn||i instanceof rc))throw new Se(re.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(wt.fromString(e,...t));return zS(s),new Kn(i.firestore,i instanceof rc?i.converter:null,new Ae(s))}}/**
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
 */const qS="AsyncQueue";class GS{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Jw(this,"async_queue_retry"),this.bu=()=>{const s=O_();s&&_e(qS,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=e;const t=O_();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=O_();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Or;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ml(e))throw e;_e(qS,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const a=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(s);throw ks("INTERNAL UNHANDLED ERROR: ",a),s}).then(s=>(this.pu=!1,s))));return this.Su=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=yg.createAndSchedule(this,e,t,s,l=>this.Fu(l));return this.fu.push(a),a}Du(){this.gu&&Re()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class ad extends wg{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new GS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new GS(e),this._firestoreClient=void 0,await e}}}function yP(i,e){const t=a0(),s=Cf,a=Sm(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=HR("firestore");l&&gP(a,...l)}return a}function yb(i){if(i._terminated)throw new Se(re.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||vP(i),i._firestoreClient}function vP(i){var e,t,s;const a=i._freezeSettings(),l=function(d,_,m,E){return new Pk(d,_,m,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,mb(E.experimentalLongPollingOptions),E.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new cP(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(d){const _=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(_),_online:_}}(i._componentsProvider))}/**
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
 */class ol{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ol(hn.fromBase64String(e))}catch(t){throw new Se(re.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ol(hn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class od{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Se(re.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new un(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ld{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Se(re.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Se(re.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}}/**
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
 */const EP=/^__.*__$/;class TP{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new qr(e,this.data,this.fieldMask,t,this.fieldTransforms):new mc(e,this.data,t,this.fieldTransforms)}}class vb{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new qr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Eb(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Re()}}class ud{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new ud(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:s,Qu:!1});return a.$u(e),a}Ku(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:s,Qu:!1});return a.Bu(),a}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Vf(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Eb(this.Lu)&&EP.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class SP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||id(e)}ju(e,t,s,a=!1){return new ud({Lu:e,methodName:t,zu:s,path:un.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tb(i){const e=i._freezeSettings(),t=id(i._databaseId);return new SP(i._databaseId,!!e.ignoreUndefinedProperties,t)}function AP(i,e,t,s,a,l={}){const c=i.ju(l.merge||l.mergeFields?2:0,e,t,a);Ng("Data must be an object, but it was:",c,s);const d=Sb(s,c);let _,m;if(l.merge)_=new qn(c.fieldMask),m=c.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const R=mm(e,T,t);if(!c.contains(R))throw new Se(re.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);wb(E,R)||E.push(R)}_=new qn(E),m=c.fieldTransforms.filter(T=>_.covers(T.field))}else _=null,m=c.fieldTransforms;return new TP(new xn(d),_,m)}class cd extends ld{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cd}}function wP(i,e,t){return new ud({Lu:3,zu:e.settings.zu,methodName:i._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ig extends ld{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=wP(this,e,!0),s=this.Hu.map(l=>Ec(l,t)),a=new sl(s);return new l2(e.path,a)}isEqual(e){return e instanceof Ig&&xr(this.Hu,e.Hu)}}function bP(i,e,t,s){const a=i.ju(1,e,t);Ng("Data must be an object, but it was:",a,s);const l=[],c=xn.empty();Fr(s,(_,m)=>{const E=Dg(e,_,t);m=cn(m);const T=a.Ku(E);if(m instanceof cd)l.push(E);else{const R=Ec(m,T);R!=null&&(l.push(E),c.set(E,R))}});const d=new qn(l);return new vb(c,d,a.fieldTransforms)}function CP(i,e,t,s,a,l){const c=i.ju(1,e,t),d=[mm(e,s,t)],_=[a];if(l.length%2!=0)throw new Se(re.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<l.length;R+=2)d.push(mm(e,l[R])),_.push(l[R+1]);const m=[],E=xn.empty();for(let R=d.length-1;R>=0;--R)if(!wb(m,d[R])){const P=d[R];let q=_[R];q=cn(q);const Q=c.Ku(P);if(q instanceof cd)m.push(P);else{const F=Ec(q,Q);F!=null&&(m.push(P),E.set(P,F))}}const T=new qn(m);return new vb(E,T,c.fieldTransforms)}function Ec(i,e){if(Ab(i=cn(i)))return Ng("Unsupported field value:",e,i),Sb(i,e);if(i instanceof ld)return function(s,a){if(!Eb(a.Lu))throw a.Wu(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,a){const l=[];let c=0;for(const d of s){let _=Ec(d,a.Uu(c));_==null&&(_={nullValue:"NULL_VALUE"}),l.push(_),c++}return{arrayValue:{values:l}}}(i,e)}return function(s,a){if((s=cn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return r2(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Bt.fromDate(s);return{timestampValue:xf(a.serializer,l)}}if(s instanceof Bt){const l=new Bt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:xf(a.serializer,l)}}if(s instanceof Cg)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ol)return{bytesValue:Hw(a.serializer,s._byteString)};if(s instanceof Kn){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Wu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:ug(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Rg)return function(c,d){return{mapValue:{fields:{[gw]:{stringValue:yw},[Rf]:{arrayValue:{values:c.toArray().map(m=>{if(typeof m!="number")throw d.Wu("VectorValues must only contain numeric values.");return ag(d.serializer,m)})}}}}}}(s,a);throw a.Wu(`Unsupported field value: ${Ag(s)}`)}(i,e)}function Sb(i,e){const t={};return hw(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fr(i,(s,a)=>{const l=Ec(a,e.qu(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function Ab(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Bt||i instanceof Cg||i instanceof ol||i instanceof Kn||i instanceof ld||i instanceof Rg)}function Ng(i,e,t){if(!Ab(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const s=Ag(t);throw s==="an object"?e.Wu(i+" a custom object"):e.Wu(i+" "+s)}}function mm(i,e,t){if((e=cn(e))instanceof od)return e._internalPath;if(typeof e=="string")return Dg(i,e);throw Vf("Field path arguments must be of type string or ",i,!1,void 0,t)}const RP=new RegExp("[~\\*/\\[\\]]");function Dg(i,e,t){if(e.search(RP)>=0)throw Vf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new od(...e.split("."))._internalPath}catch{throw Vf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Vf(i,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let _="";return(l||c)&&(_+=" (found",l&&(_+=` in field ${s}`),c&&(_+=` in document ${a}`),_+=")"),new Se(re.INVALID_ARGUMENT,d+i+_)}function wb(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class bb{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Kn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Cb("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class IP extends bb{data(){return super.data()}}function Cb(i,e){return typeof e=="string"?Dg(i,e):e instanceof od?e._internalPath:e._delegate._internalPath}class NP{convertValue(e,t="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Re()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Fr(e,(a,l)=>{s[a]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[Rf].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(c=>Nt(c.doubleValue));return new Rg(l)}convertGeoPoint(e){return new Cg(Nt(e.latitude),Nt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=$f(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(tc(e));default:return null}}convertTimestamp(e){const t=Vr(e);return new Bt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=wt.fromString(e);it(Qw(s));const a=new nc(s.get(1),s.get(3)),l=new Ae(s.popFirst(5));return a.isEqual(t)||ks(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function DP(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
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
 */class OP{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rb extends bb{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xP(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Cb("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class xP extends Rb{data(e={}){return super.data(e)}}/**
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
 */function Ib(i){i=La(i,Kn);const e=La(i.firestore,ad);return pP(yb(e),i._key).then(t=>PP(e,i,t))}class kP extends NP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ol(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Kn(this.firestore,null,t)}}function MP(i,e,t){i=La(i,Kn);const s=La(i.firestore,ad),a=DP(i.converter,e);return Nb(s,[AP(Tb(s),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,Qi.none())])}function hd(i,e,t,...s){i=La(i,Kn);const a=La(i.firestore,ad),l=Tb(a);let c;return c=typeof(e=cn(e))=="string"||e instanceof od?CP(l,"updateDoc",i._key,e,t,s):bP(l,"updateDoc",i._key,e),Nb(a,[c.toMutation(i._key,Qi.exists(!0))])}function Nb(i,e){return function(s,a){const l=new Or;return s.asyncQueue.enqueueAndForget(async()=>eP(await fP(s),a,l)),l.promise}(yb(i),e)}function PP(i,e,t){const s=t.docs.get(e._key),a=new kP(i);return new Rb(i,a,e._key,s,new OP(t.hasPendingWrites,t.fromCache),e.converter)}function VP(...i){return new Ig("arrayUnion",i)}(function(e,t=!0){(function(a){pl=a})(ja),Ia(new kr("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new ad(new vk(s.getProvider("auth-internal")),new Sk(c,s.getProvider("app-check-internal")),function(m,E){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new Se(re.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nc(m.options.projectId,E)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),qi(JT,eS,e),qi(JT,eS,"esm2017")})();const LP={apiKey:"AIzaSyDWN5GCnrhUqKZlOt8Rxb0n748lhPf9B58",authDomain:"to-do-list-9cf11.firebaseapp.com",databaseURL:"https://to-do-list-9cf11-default-rtdb.firebaseio.com",projectId:"to-do-list-9cf11",storageBucket:"to-do-list-9cf11.firebasestorage.app",messagingSenderId:"44862500438",appId:"1:44862500438:web:ccb0f012d9c8e7cfe215f7",measurementId:"G-HB8NT8L1FD"};r0(LP);const Ka=yP(),Ua=ID(),UP=({setPaging:i,editing:e,setPage:t,indicated:s,setIndicated:a,showTaskPrompt:l,url:c,setUrl:d,showSignInPrompt:_,showSignUpPrompt:m,setShowSignInPrompt:E,setShowSignUpPrompt:T,showSortPrompt:R,user:P,setShowPersonalInformation:q,continueAs:Q,setIsSigningOut:F,setShowSaveChanges:X,showSaveChanges:Y})=>{const[J,fe]=ae.useState(!1),de=[{content:"Home",link:"#Home",src:"./icons/house.svg",paging:1},{content:"Tasks",link:"#Tasks",src:"./icons/book-solid.svg",paging:2},{content:"Social",link:"#Social",src:"./icons/circle-info-solid.svg",paging:3}],Ce=C=>{let b=window.location.href;b.toLowerCase();let D=b.search("/Acad/");b=b.slice(0,D+6),console.log(b.concat(C)),d(b.concat(C))},x=(C,b)=>{JSON.parse(localStorage.getItem("Changes"))==null?(a(0),t(C.paging),Ce(C.link)):(X(!0),i({link:C.link,page:C.paging}))};return ae.useEffect(()=>{c.includes("#Home")?a(0):c.includes("#Tasks")?a(1):c.includes("#About")?a(2):c.includes("#Contacts")&&a(3)},[c]),S.jsxs(S.Fragment,{children:[S.jsxs("nav",{className:!_&&!m&&!l&&!e&&!R&&!Q&&!Y?lt.nav:lt.hideNav,children:[S.jsxs("div",{className:lt.left,children:[S.jsx("img",{src:"./web-icon.png",className:lt.icon}),S.jsx("h1",{children:"ACAD"})]}),S.jsx("div",{className:lt.middle,children:S.jsx("ul",{className:lt.NavLinks,children:de.map((C,b)=>S.jsx("li",{onClick:()=>{x(C)},className:s===b?lt.indicated:lt.notIndicated,children:S.jsxs("a",{href:Y?null:C.link,children:[S.jsx("img",{src:C.src})," ",S.jsxs("span",{children:[C.content,S.jsx("span",{className:lt.indication})]})]})},C.link))})}),P?S.jsxs("div",{className:`${lt.right} ${lt.LoggedIn}`,children:[S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-user"}),className:`${lt.User_Button}`,content:"Account",func:()=>q(!0)}),S.jsx(ye,{content:"Sign Out",func:()=>{F(!0)},className:lt.SignUpButt}),S.jsx(ye,{className:lt.HamburgerButt,func:()=>{fe(!0)},content:S.jsx("i",{className:"fa fa-list-ul"})})]}):S.jsxs("div",{className:`${lt.right} ${lt.notLoggedIn}`,children:[S.jsx(ye,{content:"Sign In",func:()=>{E(!0)},className:lt.SignInButt}),S.jsx(ye,{content:"Sign Up",func:()=>{T(!0)},className:lt.SignUpButt}),S.jsx(ye,{className:lt.HamburgerButt,func:()=>{fe(!0)},content:S.jsx("i",{className:"fa fa-list-ul"})})]})]}),S.jsx("div",{className:J&&!Y?lt.sidebar:lt.hideSideBar,children:S.jsxs("ul",{className:J?lt.NavLinks:lt.hideNavLinks,children:[S.jsx(ye,{className:lt.HamburgerButt,func:()=>{fe(!J)},content:S.jsx("i",{className:"fa fa-list-ul"})}),de.map((C,b)=>S.jsx("li",{onClick:()=>{x(C)},className:s===b?lt.indicated:lt.notIndicated,children:S.jsxs("a",{href:Y?null:C.link,children:[S.jsx("img",{src:C.src})," ",S.jsxs("span",{children:[C.content,S.jsx("span",{className:lt.indication})]})]})},C.link))]})})]})},jP=({page:i,setPage:e,setIndicated:t,indicated:s})=>S.jsxs("div",{className:i==1?Bi.home_wrapper:Bi.hideHome,id:"Home",children:[S.jsxs("div",{className:Bi.left,children:[S.jsxs("div",{className:Bi.wrapTop,children:[S.jsxs("h1",{children:["Welcome User",S.jsx("img",{src:"./web-icon.png",className:Bi.icon})]}),S.jsx("p",{children:"Write, read and document your work and studies using the Acad Web App for free!"}),S.jsx("a",{href:"#Tasks",children:S.jsx(ye,{content:"Get Started",func:()=>{e(2),t(1)}})})]}),S.jsxs("div",{className:Bi.wrapBottom,children:[S.jsx(ye,{className:Bi.orange}),S.jsx(ye,{className:Bi.purple}),S.jsx(ye,{className:Bi.blue})]})]}),S.jsx("div",{className:Bi.right,children:S.jsx("img",{src:"./StartingPage/Working.png"})})]}),BP="_Task_Container_jr2xj_1",zP="_tasks_jr2xj_45",HP="_Finished_jr2xj_69",FP="_unchecked_jr2xj_93",qP="_checked_jr2xj_101",GP="_col_jr2xj_109",KP="_br_jr2xj_117",WP="_fs_jr2xj_125",QP="_bgC_jr2xj_133",YP="_fW_jr2xj_141",Dn={Task_Container:BP,tasks:zP,Finished:HP,unchecked:FP,checked:qP,col:GP,br:KP,fs:WP,bgC:QP,fW:YP},$P=({handleSelectedTasks:i,selectTask:e,tasks:t,setTasks:s,searching:a,filteredTask:l,setFilteredTask:c,setOpenedTask:d,setEditing:_,type:m,sorting:E,sortOptions:T})=>{const[R,P]=ae.useState(t.map(X=>({...X,isChecked:!1})));function q(X){let Y=t,J=[];Y=Y.map(fe=>fe.id===X?{...fe,isChecked:!fe.isChecked}:fe);for(let fe=0;fe<Y.length;fe++)Y[fe].isChecked&&J.push({id:Y[fe].id,index:fe}),fe==Y.length-1&&(console.log(Y),i(J),J=[]);s(fe=>fe.map(de=>de.id===X?{...de,isChecked:!de.isChecked}:de)),a&&c(fe=>fe.map(de=>de.id===X?{...de,isChecked:!de.isChecked}:de))}ae.useEffect(()=>{P([...t])},[t]);const Q=()=>{if(a&&l!=null)return S.jsx("div",{className:Dn.Task_Container,children:l.map((X,Y)=>{if(X.type==="pending"&&m==="Pending")return S.jsx(F,{task:X,i:Y},X.id);if(X.type==="finished"&&m==="Finished")return S.jsx(F,{task:X,i:Y},X.id);if(m==="All Tasks")return S.jsx(F,{task:X,i:Y},X.id)})},"Task_Container");if(E&&!a){let X=R;for(let Y in T)Y==0&&T[Y].state==!0?X=X.sort((J,fe)=>fe.dateCreated.time-J.dateCreated.time):Y==1&&T[Y].state==!0?X=X.sort((J,fe)=>J.dateCreated.time-fe.dateCreated.time):Y==2&&T[Y].state==!0?X=X.sort((J,fe)=>J.task.localeCompare(fe.task)):Y==3&&T[Y].state==!0&&(X=X.sort((J,fe)=>fe.task.localeCompare(J.task)));return S.jsx("div",{className:Dn.Task_Container,children:X.map((Y,J)=>{if(Y.type==="pending"&&m==="Pending")return S.jsx(F,{task:Y,i:J},Y.id);if(Y.type==="finished"&&m==="Finished")return S.jsx(F,{task:Y,i:J},Y.id);if(m==="All Tasks")return S.jsx(F,{task:Y,i:J},Y.id)})})}else if(!E&&!a)return S.jsx("div",{className:Dn.Task_Container,children:R.map((X,Y)=>{if(X.type==="pending"&&m==="Pending")return S.jsx(F,{task:X,i:Y},X.id);if(X.type==="finished"&&m==="Finished")return S.jsx(F,{task:X,i:Y},X.id);if(m==="All Tasks")return S.jsx(F,{task:X,i:Y},X.id)})})},F=({task:X,i:Y})=>S.jsxs("label",{htmlFor:"task"+X.id,style:X.style!="default"?{...X.style}:null,className:X.type=="pending"?`${Dn.Pending} ${X.cName.map(J=>JSON.parse(J)).join(" ")} ${Dn.tasks}`:`${Dn.Finished} ${X.cName.map(J=>JSON.parse(J)).join(" ")} ${Dn.tasks}`,onDoubleClick:()=>{_(!0),d({id:X.id,isOpened:!0})},children:[S.jsx("i",{style:e==!1?{display:"none"}:{display:"block"},className:`fa fa-check-square ${X.isChecked===!0?Dn.checked:Dn.unchecked}`}),S.jsx("input",{style:{display:"none"},type:"checkbox",id:"task"+X.id,onChange:()=>{e&&q(X.id)}}),X.task]},X.id);if(R!=null)return S.jsx(S.Fragment,{children:S.jsx(Q,{})})},XP="_Bottom_Options_14lht_1",ZP="_toLeft_14lht_31",JP="_toRight_14lht_31",eV="_Unchecked_14lht_57",tV="_hide_14lht_105",Er={Bottom_Options:XP,toLeft:ZP,toRight:JP,Unchecked:eV,hide:tV},nV=({handleSelectedTasks:i,selectedTask:e,selectTask:t,setSelectTask:s,unselectAll:a,tasks:l,setTasks:c,searching:d,updateTasks:_,setUpdateTasks:m,filteredTasks:E,setFilteredTasks:T})=>{const R=()=>{let Q=l,F=E,X=[],Y=[];if(d){F=F.map(J=>({...J,isChecked:!0}));for(let J=0;J<F.length;J++)F[J].isChecked&&Y.push({id:F[J].id,index:J});i([...Y])}else{Q=Q.map(J=>({...J,isChecked:!0}));for(let J=0;J<Q.length;J++)Q[J].isChecked&&X.push({id:Q[J].id,index:J});i([...X])}d?T([...F]):m(J=>J.map(fe=>({...fe,isChecked:!0})))};function P(){let Q=l,F=E;for(let X in F)for(let Y in e)F[X].id===e[Y].id&&F.splice(X,1);for(let X in l)for(let Y in e)Q[X].id===e[Y].id&&Q.splice(X,1);localStorage.setItem("dataTask",JSON.stringify(Q)),c([...Q]),d&&T([...F]),i(null)}const q=()=>t==!0?S.jsx(S.Fragment,{children:S.jsxs("div",{className:Er.toLeft,children:[S.jsx(ye,{content:S.jsx("span",{children:" Select All"}),icon:S.jsx("i",{className:"fa fa-check"}),className:Er.SelectAllButton,func:()=>{R()}}),S.jsx(ye,{content:S.jsx("span",{children:" Unselect All"}),icon:S.jsx("i",{className:`fas fa fa-check ${Er.Unchecked}`}),className:Er.UnselectAllButton,func:()=>{a()}})]})}):S.jsx(S.Fragment,{children:S.jsx(ye,{content:"Select",icon:S.jsx("i",{className:"fa fa-hand-o-up"}),className:Er.SelectButton,func:()=>s(!0)})});return S.jsx(S.Fragment,{children:S.jsxs("div",{className:Er.Bottom_Options,children:[S.jsx(q,{}),S.jsxs("div",{className:t==!0?Er.toRight:Er.hide,children:[S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-trash"}),content:" Delete",func:Q=>{t?P():console.log("No update")}}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-close"}),content:" Cancel",func:()=>{s(!1),a()}})]})]})})},iV="_DropDown_Body_1fdho_1",sV="_Hide_DropDown_Body_1fdho_1",rV="_Dropdown_Wrapper_1fdho_27",aV="_Not_Indicated_1fdho_59",oV="_Indicated_1fdho_69",Ru={DropDown_Body:iV,Hide_DropDown_Body:sV,Dropdown_Wrapper:rV,Not_Indicated:aV,Indicated:oV},lV=({setType:i,showDropDown:e,handleType:t,unselectAll:s})=>{const a=["Pending","Finished","All Tasks"],[l,c]=ae.useState(0);return S.jsx(S.Fragment,{children:S.jsx("div",{className:e?Ru.DropDown_Body:Ru.Hide_DropDown_Body,onClick:()=>{t()},children:S.jsx("ul",{className:Ru.Dropdown_Wrapper,children:a.map((d,_)=>S.jsx("li",{className:l==_?Ru.Indicated:Ru.Not_Indicated,onClick:()=>{i(a[_]),c(_),s()},children:d},a[_]))})})})},uV="_Options_tab_1g176_1",cV="_Prompt_Box_1g176_19",hV="_Close_Button_1g176_61",fV="_colorPicker_1g176_143",dV="_Hide_BG_Color_Prompt_1g176_175",pV="_Hide_Color_Prompt_1g176_177",_V="_Hide_Border_Color_Prompt_1g176_179",mV="_Hide_Font_Weight_Prompt_1g176_181",gV="_Hide_Italic_Prompt_1g176_183",yV="_BG_Color_Prompt_1g176_191",vV="_Color_Prompt_1g176_193",EV="_Border_Color_Prompt_1g176_195",TV="_Font_Weight_Prompt_1g176_197",SV="_Italic_Prompt_1g176_199",AV="_Wrap_Options_Tab_1g176_207",wV="_createTask_1g176_301",bV="_notWorking_1g176_323",Le={Options_tab:uV,Prompt_Box:cV,Close_Button:hV,colorPicker:fV,Hide_BG_Color_Prompt:dV,Hide_Color_Prompt:pV,Hide_Border_Color_Prompt:_V,Hide_Font_Weight_Prompt:mV,Hide_Italic_Prompt:gV,BG_Color_Prompt:yV,Color_Prompt:vV,Border_Color_Prompt:EV,Font_Weight_Prompt:TV,Italic_Prompt:SV,Wrap_Options_Tab:AV,createTask:wV,notWorking:bV},CV=({selectedTask:i,filteredTasks:e,updateTasks:t,searching:s,optionTabNumber:a,handleMarking:l,unselectAll:c,setShowTaskPrompt:d,setShowSortPrompt:_,numberOfChanges:m,setNumberOfChanges:E,user:T,setUpdateTask:R,setLoading:P})=>{var oe;const[q,Q]=ae.useState(a),[F,X]=ae.useState(!1),[Y,J]=ae.useState(!1),[fe,de]=ae.useState(!1),[Ce,x]=ae.useState(!1),[C,b]=ae.useState(!1),[D,M]=ae.useState(!1);function U(le,ce,Ie,O,k,te){let se=t,ne=e,ge=[];for(let pe in i)if(s)for(let Be in ne)Be==i[pe].index?(ne[Be].isChecked=!0,le!=!1&&(ne[i[pe].index].type=le,ge.push(ne[i[pe].index])),le==!1&&((ne[i[pe].index].style=="default"||ne[i[pe].index].style==null)&&(ne[i[pe].index].style={color:"default",border:"default",fontStyle:"default",backgroundColor:"default",fontWeight:"default"}),ce&&(ne[i[pe].index].style.color=ce,ge.push(ne[i[pe].index])),Ie&&(ne[i[pe].index].style.backgroundColor=Ie,ge.push(ne[i[pe].index])),O&&(ne[i[pe].index].style.fontWeight=O,ge.push(ne[i[pe].index])),k&&(ne[i[pe].index].style.fontStyle=k,ge.push(ne[i[pe].index])),te&&(ne[i[pe].index].style.borderColor=te,ge.push(ne[i[pe].index])))):ge.push(ne[i[pe].index]);for(let pe in i)se=se.map(Be=>{if(i[pe].id==Be.id){let Te={...Be};return Te.style=Te.style==="default"?{color:"default",border:"default",fontStyle:"default",backgroundColor:"default",fontWeight:"default"}:{...Te.style},le!==!1&&(Te.type=le),ce&&(Te.style={...Te.style,color:ce}),Ie&&(Te.style={...Te.style,backgroundColor:Ie}),O&&(Te.style={...Te.style,fontWeight:O}),k&&(Te.style={...Te.style,fontStyle:k}),te&&(Te.style={...Te.style,borderColor:te}),Te.isChecked=!0,Te}else return{...Be}});s?l([...ne],[...se]):l(ne,[...se])}function N(){let le=m+1,ce=JSON.parse(localStorage.getItem("Changes"));ce=ce[le],R(ce),E(le)}function ke(){let le=m-1,ce=JSON.parse(localStorage.getItem("Changes"));ce=ce[le],R(ce),E(le)}const Me=async()=>{var O;let le=JSON.parse(localStorage.getItem("Changes"));le=[...le[m]],le=le.map(k=>({...k,isChecked:!1}));const ce=(O=T==null?void 0:T.uid)==null?void 0:O.toString(),Ie=Ga(Ka,`Users/${ce}`);try{await hd(Ie,{tasks:le}),E(null),R([...le]),localStorage.removeItem("Changes")}catch(k){console.log("Error writing task:",k)}};return ae.useEffect(()=>{Q(a)},[a]),ae.useEffect(()=>{console.log(s,e)},[s,e]),S.jsxs("div",{className:Le.Options_tab,children:[S.jsxs("div",{className:Y?`${Le.BG_Color_Prompt} ${Le.Prompt_Box}`:`${Le.Hide_BG_Color_Prompt} ${Le.Prompt_Box}`,children:[S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Le.Close_Button}`,func:()=>{J(!1)}}),S.jsx("h1",{children:"Change BG Color"}),S.jsxs("label",{htmlFor:"colorPicker",className:Le.colorPicker,children:[S.jsx("input",{type:"color",id:"colorPicker",onBlur:le=>{U(!1,!1,le.target.value,!1,!1)}}),S.jsx("span",{children:"Choose BG Color"})]}),S.jsx(ye,{content:"Default",func:()=>{U(!1,!1,"#f09c2e",!1,!1)}})]}),S.jsxs("div",{className:fe?`${Le.Color_Prompt} ${Le.Prompt_Box}`:`${Le.Hide_Color_Prompt} ${Le.Prompt_Box}`,children:[S.jsx("h1",{children:"Change Font Color"}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Le.Close_Button}`,func:()=>{de(!1)}}),S.jsxs("label",{htmlFor:"bgColorPicker",className:`${Le.bgColorPicker} ${Le.colorPicker}`,children:[S.jsx("input",{type:"color",id:"bgColorPicker",onBlur:le=>{U(!1,le.target.value,!1,!1,!1)}}),S.jsx("span",{children:"Choose Font Color"})]}),S.jsx(ye,{content:"Default",func:()=>{U(!1,"white",!1,!1,!1)}})]}),S.jsxs("div",{className:Ce?`${Le.Border_Color_Prompt} ${Le.Prompt_Box}`:`${Le.Hide_Border_Color_Prompt} ${Le.Prompt_Box}`,children:[S.jsx("h1",{children:"Change Border Color"}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Le.Close_Button}`,func:()=>{x(!1)}}),S.jsxs("label",{htmlFor:"borderColorPicker",className:`${Le.borderColorPicker} ${Le.colorPicker}`,children:[S.jsx("input",{type:"color",id:"borderColorPicker",onBlur:le=>{U(!1,!1,!1,!1,!1,le.target.value)}}),S.jsx("span",{children:"Choose Border Color"})]}),S.jsx(ye,{content:"Default",func:()=>{U(!1,!1,!1,!1,!1,"#d16c06")}})]}),S.jsxs("div",{className:C?`${Le.Font_Weight_Prompt} ${Le.Prompt_Box}`:`${Le.Hide_Font_Weight_Prompt} ${Le.Prompt_Box}`,children:[S.jsx("h1",{children:"Change Font Weight"}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Le.Close_Button}`,func:()=>{b(!1)}}),S.jsx(ye,{content:"Normal",func:()=>{U(!1,!1,!1,"Normal",!1,!1)}}),S.jsx(ye,{content:"Bold",func:()=>{U(!1,!1,!1,"Bold",!1,!1)}}),S.jsx(ye,{content:"Bolder",func:()=>{U(!1,!1,!1,"Bolder",!1,!1)}})]}),S.jsxs("div",{className:D?`${Le.Italic_Prompt} ${Le.Prompt_Box}`:`${Le.Hide_Italic_Prompt} ${Le.Prompt_Box}`,children:[S.jsx("h1",{children:"Change Italization"}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Le.Close_Button}`,func:()=>{M(!1)}}),S.jsx(ye,{content:"Normal",func:()=>{U(!1,!1,!1,!1,"Normal",!1)}}),S.jsx(ye,{content:"Italic",func:()=>{U(!1,!1,!1,!1,"Italic",!1)}})]}),S.jsxs("div",{className:Le.Wrap_Options_Tab,children:[S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-save"}),content:"Save Changes",className:m==0||m==null?`${Le.notWorking}`:null,func:()=>{m!=0&&m!=null&&Me()}}),S.jsx(ye,{icon:S.jsx("i",{className:"material-icons",children:"undo"}),content:"Undo",className:m==null||m==0?`${Le.notWorking}`:null,func:()=>{m>0&&ke()}}),S.jsx(ye,{icon:S.jsx("i",{className:"material-icons",children:"redo"}),content:"Redo",className:m<((oe=JSON.parse(localStorage.getItem("Changes")))==null?void 0:oe.length)-1&&m!=null?null:`${Le.notWorking}`,func:()=>{var le;m<((le=JSON.parse(localStorage.getItem("Changes")))==null?void 0:le.length)-1&&m!=null&&N()}}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-plus"}),content:S.jsx("span",{children:" Create New Task"}),className:Le.createTask,func:()=>d(!0)}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-edit"}),content:S.jsx("span",{children:" Mark As Finished"}),func:()=>{U("finished","white","#51af0f",!1,!1,"rgb(8, 97, 20)"),c()}}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-edit"}),content:S.jsx("span",{children:" Mark As Pending"}),func:()=>{U("pending","white","#f09c2e",!1,!1,"rgb(209, 108, 6)"),c()}}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-sort"}),content:S.jsx("span",{children:" Sort"}),func:()=>{_(!0)}}),S.jsx(ye,{icon:S.jsx("i",{className:"material-icons",children:"format_color_fill"}),content:S.jsx("span",{children:" BG Color "}),func:()=>{J(!0),de(!1),x(!1),b(!1),M(!1)}}),S.jsx(ye,{icon:S.jsx("i",{className:"material-icons",children:"format_color_text"}),content:S.jsx("span",{children:" Font Color"}),func:()=>{de(!0),J(!1),x(!1),b(!1,M(!1))}}),S.jsx(ye,{icon:S.jsx("i",{className:"material-icons",children:"border_color"}),content:S.jsx("span",{children:" Border Color"}),func:()=>{x(!0),J(!1),de(!1),b(!1),M(!1)}}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-bold"}),content:" Bold",className:`${Le.green} ${Le.black}`,func:()=>{x(!1),J(!1),de(!1),b(!0),M(!1)}}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-italic"}),content:" Italic",func:()=>{x(!1),J(!1),de(!1),b(!1),M(!0)}})]})]})},RV="_Task_View_19nr4_1",IV="_Hide_Task_View_19nr4_19",NV="_nav_19nr4_57",DV="_content_19nr4_127",OV="_submitButton_19nr4_173",Iu={Task_View:RV,Hide_Task_View:IV,nav:NV,content:DV,submitButton:OV},xV=({openedTask:i,setOpenedTask:e,tasks:t,setEditing:s,editing:a,user:l,setUpdateTask:c})=>{const d=ae.useRef(null),_=async()=>{const m=Ga(Ka,"Users",l==null?void 0:l.uid);try{await hd(m,{tasks:data}),c(E=>E.map(T=>T.id===i.id?{...T,task:d.current.innerText}:{...T}))}catch{}};return S.jsxs("div",{className:a?Iu.Task_View:Iu.Hide_Task_View,children:[S.jsxs("div",{className:Iu.nav,children:[S.jsxs("h3",{children:[S.jsx("i",{className:"fa fa-edit"})," ",S.jsx("span",{children:"Edit Task"})]}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-times"}),func:()=>{e({index:null,isOpened:!1}),s(!1)}})]}),S.jsx("div",{className:Iu.content,children:S.jsx("p",{ref:d,contentEditable:a,children:t.map((m,E)=>{if(m.id===i.id)return m.task})})}),S.jsx(ye,{content:"Save Changes",className:Iu.submitButton,func:()=>{s(!1),_()}})]})},kV="_Task_prompt_wrapper_hoxzz_1",MV="_Hide_task_prompt_wrapper_hoxzz_1",PV="_nav_hoxzz_41",VV="_content_hoxzz_111",LV="_submitButton_hoxzz_157",Nu={Task_prompt_wrapper:kV,Hide_task_prompt_wrapper:MV,nav:PV,content:VV,submitButton:LV},UV=({showTaskPrompt:i,setShowTaskPrompt:e,writeTask:t})=>{const s=ae.useRef(null),a=ae.useRef(null),[l,c]=ae.useState(!1);function d(){c(Math.random()*1)}function _(){t(a.current.innerText)}function m(){a.current.innerHTML="<br>",E()}function E(){a.current.innerText==`
`||a.current.innerHTML=="<br>"?s.current.style.display="block":s.current.style.display="none"}return ae.useEffect(()=>{},[l]),S.jsx(S.Fragment,{children:S.jsxs("div",{className:i?Nu.Task_prompt_wrapper:Nu.Hide_task_prompt_wrapper,children:[S.jsxs("div",{className:Nu.nav,children:[S.jsxs("h3",{children:[S.jsx("i",{className:"fa fa-edit"})," ",S.jsx("span",{children:"Task Prompt"})]}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-times"}),func:()=>{e(!1),m()}})]}),S.jsxs("div",{className:Nu.content,children:[S.jsx("span",{ref:s,children:"Type Any Task..."}),S.jsx("p",{ref:a,contentEditable:"true",onInput:()=>{d(),E()}})]}),S.jsx(ye,{content:"Submit",className:Nu.submitButton,func:()=>{_(),e(!1),m()}})]})})},jV="_Sort_Wrapper_1nnq2_17",BV="_Hide_Sort_Wrapper_1nnq2_19",zV="_Sort_Box_1nnq2_51",HV="_Hide_Sort_Box_Button_1nnq2_75",FV="_Sort_Options_1nnq2_105",qV="_checked_1nnq2_153",GV="_unchecked_1nnq2_153",Tr={Sort_Wrapper:jV,Hide_Sort_Wrapper:BV,Sort_Box:zV,Hide_Sort_Box_Button:HV,Sort_Options:FV,checked:qV,unchecked:GV},KV=({setShowSortPrompt:i,showSortPrompt:e,sortOptions:t,setSortOptions:s,setSorting:a,sorting:l})=>{function c(d){let _=t;_=_.map((m,E)=>_[E]===_[d]?{...m,state:!m.state}:{...m,state:!1});for(let m in _){if(_[m].state==!0){a(!0);break}m==_.length-1&&!_[m].state&&a(!1)}s([..._])}return S.jsx("div",{className:e?Tr.Sort_Wrapper:Tr.Hide_Sort_Wrapper,children:S.jsxs("div",{className:e?Tr.Sort_Box:Tr.Hide_Sort_Box,children:[S.jsx("h2",{children:"Sort Settings"}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-close"}),className:Tr.Hide_Sort_Box_Button,func:()=>{i(!1)}}),S.jsx("div",{className:Tr.Sort_Options,children:t.map((d,_)=>S.jsx(ye,{icon:S.jsx("i",{className:`fa fa-check-square ${d.state==!0?Tr.checked:Tr.unchecked}`}),content:d.description,func:()=>{c(_)}},d.description))})]})})},WV="_Changes_Wrapper_26idq_1",QV="_Changes_Box_26idq_27",YV="_Top_26idq_55",$V="_Options_26idq_107",Yh={Changes_Wrapper:WV,Changes_Box:QV,Top:YV,Options:$V},XV=({showSaveChanges:i,setShowSaveChanges:e,setUpdateTask:t,setNumberOfChanges:s,numberOfChanges:a,user:l,paging:c,setPage:d})=>{const _=async()=>{var R;let m=JSON.parse(localStorage.getItem("Changes"));m=[...m[a]],m=m.map(P=>({...P,isChecked:!1}));const E=(R=l==null?void 0:l.uid)==null?void 0:R.toString(),T=Ga(Ka,`Users/${E}`);try{if(await hd(T,{tasks:m}),s(null),t([...m]),localStorage.removeItem("Changes"),c){let P=window.location.href;P.toLowerCase();let q=P.search("/Acad/");P=P.slice(0,q+6),P=P.concat(c==null?void 0:c.link),window.location.href=P,d(c.page)}}catch(P){console.log("Error writing task:",P)}};if(i)return S.jsx("div",{className:Yh.Changes_Wrapper,children:S.jsxs("div",{className:Yh.Changes_Box,children:[S.jsxs("div",{className:Yh.Top,children:[S.jsx("i",{className:"fa fa-warning"}),S.jsx("h3",{children:"Would You Save Your Previous Changes?"})]}),S.jsxs("div",{className:Yh.Options,children:[S.jsx(ye,{content:"No",func:()=>{e(!1),localStorage.removeItem("Changes")}}),S.jsx(ye,{content:"Yes",func:()=>{e(!1),_()}})]})]})})},ZV="_Hide_Task_Wrapper_1397q_5",JV="_Task_Wrapper_1397q_13",eL="_Tasks_Editor_1397q_33",tL="_Search_wrapper_1397q_103",Vo={Hide_Task_Wrapper:ZV,Task_Wrapper:JV,Tasks_Editor:eL,Search_wrapper:tL},nL="_Loading_Wrapper_fw8ew_25",iL="_Loading_Bar_fw8ew_59",KS={Loading_Wrapper:nL,Loading_Bar:iL},sL=({loading:i})=>{if(i)return S.jsxs("div",{className:KS.Loading_Wrapper,children:[S.jsx("div",{className:KS.Loading_Bar}),"Loading..."]})},rL=({page:i,paging:e,setPage:t,setPaging:s,showTaskPrompt:a,setShowTaskPrompt:l,setEditing:c,editing:d,showSortPrompt:_,setShowSortPrompt:m,user:E,showSaveChanges:T,setShowSaveChanges:R,getTask:P,setLoading:q})=>{const Q=JSON.parse(localStorage.getItem("Changes")),F=ae.useRef(null),[X,Y]=ae.useState(!1),[J,fe]=ae.useState(!1),[de,Ce]=ae.useState(!1),[x,C]=ae.useState(!1),[b,D]=ae.useState([]),[M,U]=ae.useState(1),[N,ke]=ae.useState("Pending"),[Me,oe]=ae.useState(P),[le,ce]=ae.useState(Q?Q.length-1:null),[Ie,O]=ae.useState(Me.map(ie=>({...ie,isChecked:!1}))),[k,te]=ae.useState(null),[se,ne]=ae.useState({index:null,isOpened:!1}),[ge,pe]=ae.useState(null),[Be,Te]=ae.useState([{description:"Newest to Oldest",state:!1},{description:"Oldest to Newest",state:!1},{description:"From A-Z",state:!1},{description:"From Z-A",state:!1}]);function _t(){Ce(!1)}const et=async ie=>{var en;let ut=[...Me];const bt=(en=E.uid)==null?void 0:en.toString(),fi=Ga(Ka,"Users",bt);let Zi="qwertyuiopasdfghjklzxcvbnm",Gr="";for(let Ji=0;Ji<10;Ji++){let Ct=Math.floor(Math.random()*Zi.length);Gr=Gr.concat(Zi[Ct])}let Ls={id:Gr,task:ie,dateCreated:{fullDate:new Date,time:Date.now()},selected:!1,style:"default",cName:[JSON.stringify(Dn.col),JSON.stringify(Dn.br),JSON.stringify(Dn.fs),JSON.stringify(Dn.bgC),JSON.stringify(Dn.fW)],isChecked:!1,type:"pending"};ut.unshift(Ls);try{await hd(fi,{tasks:VP(Ls)}),l(!1),O([...ut])}catch(Ji){console.log("Error writing task:",Ji)}};function Zt(ie,ut){const bt=JSON.parse(localStorage.getItem("Changes"))!=null?JSON.parse(localStorage.getItem("Changes")):[];bt.length==0&&bt.push(Me),bt.length>=1&&bt.push(ut),localStorage.setItem("Changes",JSON.stringify(bt)),ce(bt.length-1),b.length>=1&&(J&&te([...ie]),O([...ut]))}function kn(){F.current.value==""?fe(!1):(fe(!0),te(Me.filter(ie=>ie.task.toLowerCase().includes(F.current.value.toLowerCase()))),C(!1))}function Jt(ie){D(ie==null?[]:[...ie])}function Ai(ie){ne(ie)}function hi(){let ie=Be;for(let ut=0;ut<Be.length;ut++)if(ie[ut].state==!0){C(!0);break}else ut==Be.length-1&&Be[ut].state==!1&&C(!1)}const Mn=()=>{let ie=Me,ut=k;J?(ut=ut.map(bt=>({...bt,isChecked:!1})),Jt(null)):(ie=ie.map(bt=>({...bt,isChecked:!1})),Jt(null)),J?te([...ut]):O(bt=>bt.map(fi=>({...fi,isChecked:!1})))};if(ae.useEffect(()=>{oe([...Ie])},[k,Ie]),ae.useEffect(()=>{P!=null&&P.tasks&&O(P.tasks)},[P]),i==2)return S.jsx(S.Fragment,{children:S.jsxs("div",{className:i==2?Vo.Task_Wrapper:Vo.Hide_Task_Wrapper,id:"Tasks",children:[S.jsx(UV,{showTaskPrompt:a,setShowTaskPrompt:l,writeTask:ie=>{et(ie)}}),S.jsxs("div",{className:Vo.Tasks_Editor,children:[S.jsxs("h2",{className:Vo.Title_wrapper,children:["Tasks",S.jsx("i",{className:"fa fa-bars",onClick:()=>{Ce(!de)}}),S.jsx(lV,{type:N,setType:ie=>{ke(ie)},showDropDown:de,handleType:ie=>{_t()},unselectAll:ie=>{Mn()},setSortOptions:ie=>{Te(ie)},setSorting:ie=>{C(ie)}})]}),S.jsx(CV,{optionTabNumber:M,updateTasks:Ie,filteredTasks:k,setShowTaskPrompt:ie=>{l(ie)},searching:J,setSearching:ie=>fe(ie),handleSearch:()=>{kn()},selectedTask:b,handleMarking:(ie,ut)=>{Zt(ie,ut)},markAsPending:ie=>{markAsPending(ie)},unselectAll:()=>Mn(),setBgColor:ie=>setBgColor(ie),setColor:ie=>setColor(ie),setShowSortPrompt:ie=>{m(ie)},numberOfChanges:le,setNumberOfChanges:ie=>ce(ie),user:E,setUpdateTask:ie=>{O(ie)}}),S.jsx("div",{className:Vo.Search_wrapper,children:S.jsxs("div",{children:[S.jsx("label",{htmlFor:"search-bar",children:S.jsx("i",{className:"fa fa-search"})}),S.jsx("input",{ref:F,id:"search-bar",type:"text",placeholder:"Type Task...",onChange:()=>{F.current.value==""&&(hi(),kn())}}),S.jsx(ye,{content:"Search",className:Vo.Search_button,func:()=>{kn(),hi()}})]})}),S.jsx(nV,{selectedTask:b,handleSelectedTasks:ie=>Jt(ie),selectTask:X,setSelectTask:Y,unselectAll:()=>{Mn()},tasks:Me,setTasks:ie=>{O(ie)},filteredTasks:k,setFilteredTasks:ie=>{te(ie)},searching:J,setUpdateTasks:ie=>O(ie),updateTasks:Ie}),S.jsx($P,{selectedTasks:b,setSelectedTasks:()=>D(),selectTask:X,tasks:Me,setTasks:ie=>{oe(ie)},del:ie=>{del(ie)},handleSelectedTasks:ie=>Jt(ie),filteredTask:k,setFilteredTask:ie=>{te(ie)},searching:J,handleOpenedTask:ie=>{Ai(ie)},openedTask:se,setShowTaskPrompt:ie=>{l(ie)},editing:d,setEditing:ie=>{c(ie)},setOpenedTask:ie=>{ne(ie)},type:N,setSorting:ie=>{C(ie)},sorting:x,sortOptions:Be}),S.jsx(xV,{openedTask:se,setOpenedTask:ie=>{ne(ie)},tasks:Me,saveChanges:(ie,ut)=>{saveChanges(ie,ut)},editing:d,searching:J,setEditing:ie=>{c(ie)},editedValue:ge,user:E,setUpdateTask:ie=>{O(ie)}}),S.jsx(KV,{showSortPrompt:_,setShowSortPrompt:ie=>{m(ie)},sortOptions:Be,setSortOptions:ie=>{Te(ie)},setSorting:ie=>{C(ie)},sorting:x}),S.jsx(XV,{showSaveChanges:T,setShowSaveChanges:ie=>{R(ie)},numberOfChanges:le,setNumberOfChanges:ie=>ce(ie),user:E,setUpdateTask:ie=>{O(ie)},setPaging:ie=>{s(ie)},paging:e,setPage:ie=>{t(ie)}})]})]})})},aL="_sign_up_container_mvskv_19",oL="_goToStartingPage_mvskv_41",lL="_top_arc_mvskv_65",uL="_form_mvskv_91",cL="_username_con_mvskv_105",hL="_password_con_mvskv_107",fL="_more_actions_mvskv_121",dL="_sign_in_button_mvskv_219",pL="_other_platforms_container_mvskv_251",_L="_icon_wrapper_mvskv_273",mL="_wrapper_mvskv_285",an={sign_up_container:aL,goToStartingPage:oL,top_arc:lL,form:uL,username_con:cL,password_con:hL,more_actions:fL,sign_in_button:dL,other_platforms_container:pL,icon_wrapper:_L,wrapper:mL};function gL({user:i,setUser:e,showSignInPrompt:t,setShowSignInPrompt:s,setShowSignUpPrompt:a,setLoading:l,setContinueAs:c}){const[d,_]=ae.useState(!1),m=ae.useRef(null),E=ae.useRef(null),T=ae.useRef(null),R=ae.useRef(null),P=F=>{(F.target.value==null||F.target.value!=null)&&(m.current.textContent="")},q=F=>{(F.target.value==null||F.target.value!=null)&&(E.current.textContent="")},Q=async()=>{l(!0);try{await pN(Ua,T.current.value,R.current.value),e(Ua.currentUser),l(!1),s(!1),c(!0)}catch(F){console.log(F)}};if(t==!0)return S.jsx(S.Fragment,{children:S.jsxs("div",{className:an.sign_up_container,children:[S.jsx(ye,{func:()=>{s(!1)},content:"X",className:an.goToStartingPage}),S.jsx("div",{className:an.top_arc,children:"SIGN IN"}),S.jsxs("div",{className:an.form,children:[S.jsxs("div",{className:an.username_con,children:[S.jsx("h3",{children:"Username :"}),S.jsx("input",{className:"emailInput",ref:T,onInput:F=>{P(F)}}),S.jsx("span",{ref:m})]}),S.jsxs("div",{className:an.password_con,children:[S.jsx("h3",{children:"Password :"}),S.jsx("input",{type:d?"text":"password",ref:R,onInput:F=>{q(F)},className:an.Password}),S.jsx("span",{ref:E}),S.jsx("img",{src:d?"./password/visible.png":"./password/unsee.png",className:an.see_password,onClick:()=>{_(!d)}})]}),S.jsxs("div",{className:an.more_actions,children:[S.jsx("span",{className:an.forgot_pass,children:"Forgot Password"}),S.jsx("span",{className:an.create_acc,onClick:()=>{s(!1),a(!0)},children:"Doesn't Have An Account?"})]}),S.jsx(ye,{className:an.sign_in_button,func:()=>{Q()},content:"SIGN IN"})]}),S.jsxs("div",{className:an.other_platforms_container,children:[S.jsxs("div",{className:an.icon_wrapper,children:[S.jsx("div",{className:an.wrapper,children:S.jsx("img",{src:"./platforms/GG.png "})}),S.jsx("div",{className:an.wrapper,children:S.jsx("img",{src:"./platforms/facebook.png"})}),S.jsx("div",{className:an.wrapper,children:S.jsx("img",{src:"./platforms/Instagram.png"})})]}),S.jsx("h3",{children:"SIGN IN WITH DIFFERENT PLATFORMS"})]})]})})}const yL="_hide_fc9cy_1",vL="_inputs_1_fc9cy_7",Aa={hide:yL,inputs_1:vL},EL=({show:i,indicated:e,showConfirm:t,setShow:s,setShowConfirm:a,passwordInput:l,confirmPasswordInput:c,emailInput:d,passWarning:_,confirmWarning:m,emailWarning:E})=>S.jsxs("div",{className:e==0?Aa.inputs_1:Aa.hide,children:[S.jsxs("div",{className:Aa.email,children:[S.jsx("h4",{children:"Email"}),S.jsx("input",{type:"text",ref:d}),S.jsx("span",{ref:E})]}),S.jsxs("div",{className:Aa.password,children:[S.jsx("h4",{children:"Password"}),S.jsx("input",{type:i?"text":"password",ref:l}),S.jsx("img",{src:i?"./password/visible.png":"./password/unsee.png",className:Aa.see_password,onClick:()=>{s(!i)}}),S.jsx("span",{ref:_})]}),S.jsxs("div",{className:Aa.confirm,children:[S.jsx("h4",{children:"Confirm Password"}),S.jsx("input",{type:t?"text":"password",ref:c}),S.jsx("img",{src:t?"./password/visible.png":"./password/unsee.png",className:Aa.see_confirm,onClick:()=>{a(!t)}}),S.jsx("span",{ref:m})]})]}),TL="_hide_6obhl_1",SL="_inputs_2_6obhl_11",AL="_top_6obhl_31",wL="_notIndicated_6obhl_71",bL="_indicated_6obhl_81",Du={hide:TL,inputs_2:SL,top:AL,notIndicated:wL,indicated:bL},CL=({indicated:i,usingAsInput:e,usageOptions:t,handleUsageOptions:s})=>S.jsxs("div",{className:i==1?Du.inputs_2:Du.hide,children:[S.jsx("h3",{children:"Why am I using the To-Do List Web App?"}),S.jsx("div",{children:S.jsxs("div",{className:Du.top,children:[t.map((a,l)=>S.jsx(ye,{content:a.content,className:a.isIndicated?Du.indicated:Du.notIndicated,func:()=>{s(l)}},a.content)),S.jsx("input",{type:"text",placeholder:"Other reason...",ref:e})]})})]}),RL="_hide_r58tk_1",IL="_inputs_3_r58tk_9",Ou={hide:RL,inputs_3:IL},NL=({show:i,indicated:e,showConfirm:t,nickNameInput:s,schoolInput:a,grSecInput:l,nameWarning:c,schoolWarning:d,grSecWarning:_})=>S.jsxs("div",{className:e==2?Ou.inputs_3:Ou.hide,children:[S.jsxs("div",{className:Ou.username,children:[S.jsx("h4",{children:"Name"}),S.jsx("input",{type:"text",ref:s}),S.jsx("span",{ref:c})]}),S.jsxs("div",{className:Ou.password,children:[S.jsx("h4",{children:"School"}),S.jsx("input",{type:"text",ref:a}),S.jsx("span",{ref:d})]}),S.jsxs("div",{className:Ou.confirm,children:[S.jsx("h4",{children:"Grade & Section"}),S.jsx("input",{type:"text",ref:l}),S.jsx("span",{ref:_})]})]}),DL="_hide_j48mp_15",OL="_inputs_4_j48mp_23",xL="_wrapper_j48mp_85",kL="_IndicatedButt_j48mp_125",ML="_notIndicatedButt_j48mp_145",Lo={hide:DL,inputs_4:OL,wrapper:xL,IndicatedButt:kL,notIndicatedButt:ML},PL=({indicated:i,subjects:e,handleSubjects:t})=>{if(e!=null)return S.jsx("div",{className:i==3?Lo.inputs_4:Lo.hide,children:S.jsxs("div",{className:Lo.wrapper,children:[S.jsx("h4",{children:"What is your favorite subject?"}),S.jsx("div",{className:Lo.buttons,children:e.map((s,a)=>S.jsx(ye,{func:()=>{t(a)},className:s.testClass==!0?Lo.IndicatedButt:Lo.notIndicatedButt,content:e[a].content},s+a.toString()))})]})})},VL="_sign_up_wrapper_6gch2_23",LL="_form_1_6gch2_53",UL="_to_bottom_6gch2_75",jL="_bottom_6gch2_113",BL="_buttons_6gch2_125",zL="_indicator_6gch2_169",HL="_indicated_6gch2_197",FL="_not_indicated_6gch2_205",qL="_goToStartingPage_6gch2_259",mn={sign_up_wrapper:VL,form_1:LL,to_bottom:UL,bottom:jL,buttons:BL,indicator:zL,indicated:HL,not_indicated:FL,goToStartingPage:qL},GL=({setUsers:i,setShowSignInPrompt:e,showSignUpPrompt:t,setShowSignUpPrompt:s,setLoading:a,setContinueAs:l})=>{ae.useRef(null),ae.useRef(null);const c=ae.useRef(null),d=ae.useRef(null),_=ae.useRef(null),m=ae.useRef(null),E=ae.useRef(null),T=ae.useRef(null),R=ae.useRef(null),P=ae.useRef(null),q=ae.useRef(null),Q=ae.useRef(null),F=ae.useRef(null),X=ae.useRef(null),Y=ae.useRef(null),[J,fe]=ae.useState(!1),[de,Ce]=ae.useState(!1),[x,C]=ae.useState(0),[b,D]=ae.useState(),[M,U]=ae.useState([]),[N,ke]=ae.useState([{content:"For Studies",isIndicated:!1},{content:"For Teaching Purposes",isIndicated:!1},{content:"For My Job",isIndicated:!1},{content:"Just for Fun",isIndicated:!1}]),[Me,oe]=ae.useState([{content:"TLE",testClass:!1},{content:"Mathematics",testClass:!1},{content:"Science",testClass:!1},{content:"English",testClass:!1},{content:"Colloquium",testClass:!1},{content:"Filipino",testClass:!1},{content:"Mapeh",testClass:!1},{content:"AP",testClass:!1},{content:"ESP",testClass:!1}]),le=te=>{te=="next"&&x!=3?C(x+1):te=="back"&&x!=0&&C(x-1)},ce=te=>{let se=N;for(let ne in se)if(ne==te){se=se[te].content;break}D(se),ke(ne=>ne.map((ge,pe)=>te==pe?{...ge,isIndicated:!0}:{...ge,isIndicated:!1}))},Ie=te=>{let se=Me,ne=[];se=se.map((ge,pe)=>te==pe?{...ge,testClass:ge.testClass!=!0}:{...ge});for(let ge in se)se[ge].testClass==!0&&ne.push(se[ge]);U([...ne]),oe(ge=>ge.map((pe,Be)=>te==Be?{...pe,testClass:pe.testClass!=!0}:{...pe}))},O=async()=>{const te={password:c.current.value,email:_.current.value,school:q.current.value,grSec:F.current.value,favSubjects:M};try{await dN(Ua,_.current.value,c.current.value);const se=Ua.currentUser;a(!0),s(!1),se&&await MP(Ga(Ka,"Users",se.uid),{email:_.current.value,school:q.current.value,name:R.current.value,grSec:F.current.value,favSubjects:M,usingAs:Y==null?void 0:Y.current.value,purpose:b}),i(ne=>[...ne,te]),a(!1),l(!0)}catch(se){console.log(se)}};function k(){c.current.value="",d.current.value="",_.current.value="",m.current.value="",E.current.value="",T.current.value="",R.current.value="",P.current.value="",q.current.value="",Q.current.value="",F.current.value="",X.current.value="",Y.current.value="",oe(te=>te.map(se=>({...se,testClass:!1}))),ke(te=>te.map(se=>({...se,isIndicated:!1}))),D(null),U([])}if(t==!0)return S.jsx(S.Fragment,{children:S.jsxs("div",{className:mn.sign_up_wrapper,children:[S.jsx(ye,{func:()=>{s(!1),k()},content:"X",className:mn.goToStartingPage}),S.jsxs("form",{onSubmit:te=>{te.preventDefault()},className:mn.form_1,children:[S.jsx("header",{children:"SIGN UP"}),S.jsxs("div",{className:mn.to_bottom,children:[S.jsx(EL,{indicated:x,show:J,showConfirm:de,setShowConfirm:te=>{Ce(te)},setShow:te=>{fe(te)},passwordInput:c,confirmPasswordInput:E,emailInput:_,passWarning:d,confirmWarning:T,emailWarning:m}),S.jsx(CL,{indicated:x,usageOptions:N,setUsageOptions:te=>{ke(te)},handleUsageOptions:te=>{ce(te)},usingAsInput:Y}),S.jsx(NL,{indicated:x,schoolInput:q,schoolWarning:Q,grSecInput:F,grSecWarning:X,nickNameInput:R,nameWarning:P}),S.jsx(PL,{indicated:x,subjects:Me,handleSubjects:te=>{Ie(te)}}),S.jsxs("div",{className:mn.bottom,children:[S.jsxs("div",{className:mn.buttons,children:[S.jsx(ye,{content:"BACK",func:()=>{le("back")}}),S.jsx(ye,{content:x==3?"SUBMIT":"NEXT",func:()=>{x==3?O():le("next")}})]}),S.jsxs("div",{className:mn.indicator,children:[S.jsx("div",{className:x==0?mn.indicated:mn.not_indicated}),S.jsx("div",{className:x==1?mn.indicated:mn.not_indicated}),S.jsx("div",{className:x==2?mn.indicated:mn.not_indicated}),S.jsx("div",{className:x==3?mn.indicated:mn.not_indicated})]}),S.jsxs("h4",{id:mn.SignUp,onClick:()=>{e(!0),s(!1),k()},children:[" ",S.jsx("a",{children:"Already Have an Account?"})," "]})]})]})]})]})})},KL="_Continue_As_Wrapper_1tx42_5",WL="_Continue_As_Box_1tx42_47",QL="_Top_1tx42_75",YL="_Options_1tx42_135",$h={Continue_As_Wrapper:KL,Continue_As_Box:WL,Top:QL,Options:YL},$L=({continueAs:i,setContinueAs:e,user:t,setLoading:s})=>{const[a,l]=ae.useState(null),c=async()=>{s(!0);try{await M0(Ua),setUser(null),s(!1),e(!1)}catch(_){s(!1),e(!1),console.log(_)}},d=async()=>{try{const _=Ga(Ka,"Users",t==null?void 0:t.uid),m=await Ib(_);m.exists&&l(m.data())}catch(_){console.log(_)}};if(ae.useEffect(()=>{t!=null&&d()},[i,t]),i)return S.jsx("div",{className:$h.Continue_As_Wrapper,children:S.jsxs("div",{className:$h.Continue_As_Box,children:[S.jsxs("div",{className:$h.Top,children:[S.jsx("i",{className:"fa fa-user"}),S.jsx("h3",{children:"Continue As: "}),S.jsxs("h3",{children:[a==null?void 0:a.name," ?"]})]}),S.jsxs("div",{className:$h.Options,children:[S.jsx(ye,{content:"No",func:()=>{c()}}),S.jsx(ye,{content:"Yes",func:()=>{e(!1)}})]})]})})},XL="_Signing_Out_Wrapper_d1gt7_5",ZL="_Hide_Signing_Out_Wrapper_d1gt7_5",JL="_Signing_Out_Box_d1gt7_47",eU="_Top_d1gt7_75",tU="_Options_d1gt7_137",xu={Signing_Out_Wrapper:XL,Hide_Signing_Out_Wrapper:ZL,Signing_Out_Box:JL,Top:eU,Options:tU},nU=({isSigningOut:i,setIsSigningOut:e,setLoading:t,setUser:s})=>{const a=async()=>{t(!0);try{await M0(Ua),s({}),t(!1),e(!1)}catch(l){t(!1),e(!1),console.log(l)}};if(i)return S.jsx("div",{className:i?xu.Signing_Out_Wrapper:xu.Hide_Signing_Out_Wrapper,children:S.jsxs("div",{className:xu.Signing_Out_Box,children:[S.jsxs("div",{className:xu.Top,children:[S.jsx("i",{className:"fa fa-user"}),S.jsx("h3",{children:"Would You Like To Sign Out?"})]}),S.jsxs("div",{className:xu.Options,children:[S.jsx(ye,{content:"No",func:()=>{e(!1)}}),S.jsx(ye,{content:"Yes",func:()=>{a()}})]})]})})},iU="_Pages_1x53v_25",sU="_Hide_Pages_1x53v_31",WS={Pages:iU,Hide_Pages:sU};function rU(){const[i,e]=ae.useState(!1),[t,s]=ae.useState(!1),[a,l]=ae.useState(!1),[c,d]=ae.useState(window.location.href),[_,m]=ae.useState(!1),[E,T]=ae.useState(!1),[R,P]=ae.useState(!1),[q,Q]=ae.useState(!1),[F,X]=ae.useState(!1),[Y,J]=ae.useState(!1),[fe,de]=ae.useState(!1),[Ce,x]=ae.useState(0),[C,b]=ae.useState(1),[D,M]=ae.useState(0),[U,N]=ae.useState(JSON.parse(localStorage.getItem("Users"))!=null?JSON.parse(localStorage.getItem("Users")):[]),[ke,Me]=ae.useState(null),[oe,le]=ae.useState(null),[ce,Ie]=ae.useState([]),O=async()=>{try{const k=Ga(Ka,"Users",ke==null?void 0:ke.uid),te=await Ib(k);te.exists&&Ie(te.data())}catch{console.log(error)}};return gN(Ua,k=>{Me(k)}),ae.useEffect(()=>{console.log(ke),ke!=null&&O()},[ke]),ae.useEffect(()=>{c.includes("#Home")?b(1):c.includes("#Tasks")?b(2):c.includes("#About")?b(3):c.includes("#Contacts")&&b(4)},[]),ae.useEffect(()=>{let k=window.location.href;k.toLowerCase();let te=k.search("/Acad/");switch(k=k.slice(0,te+6),console.log(k),C){case 1:k=k.concat("#Home"),d(k);break;case 2:k=k.concat("#Tasks"),d(k);break;case 3:k=k.concat("#About"),d(k);break;case 4:k=k.concat("#Contacts"),d(k);break}},[C]),S.jsx(S.Fragment,{children:S.jsxs("div",{children:[S.jsx(UP,{setPage:k=>{b(k)},page:C,setIndicated:k=>{M(k)},indicated:D,showTaskPrompt:i,editing:a,url:c,setUrl:k=>{d(k)},showSignInPrompt:_,setShowSignInPrompt:k=>{m(k)},showSignUpPrompt:E,setShowSignUpPrompt:k=>{T(k)},showSortPrompt:t,user:ke,continueAs:q,setIsSigningOut:k=>{J(k)},showSaveChanges:fe,setShowSaveChanges:k=>{de(k)},setPaging:k=>{le(k)}}),S.jsxs("div",{className:!_&&!E?WS.Pages:WS.Hide_Pages,children:[S.jsx(jP,{page:C,setPage:k=>{b(k)},setIndicated:k=>{M(k)},indicated:D,user:ke}),S.jsx(rL,{setPage:k=>b(k),page:C,setShowTaskPrompt:k=>{e(k)},showTaskPrompt:i,editing:a,setEditing:k=>{l(k)},showSortPrompt:t,setShowSortPrompt:k=>s(k),user:ke,setUser:k=>{Me(k)},getTask:ce,showSaveChanges:fe,setShowSaveChanges:k=>{de(k)},setLoading:k=>P(k),loading:R,setPaging:k=>{le(k)},paging:oe})]}),S.jsx(gL,{page:C,setPage:k=>b(k),showSignInPrompt:_,setShowSignUpPrompt:k=>{T(k)},setShowSignInPrompt:k=>{m(k)},user:ke,setUser:k=>{Me(k)},setLoading:k=>P(k),setContinueAs:k=>Q(k),loading:R}),S.jsx(GL,{page:C,setPage:k=>b(k),showSignUpPrompt:E,setShowSignInPrompt:k=>{m(k)},setShowSignUpPrompt:k=>{T(k)},users:U,setUsers:k=>{N(k)},user:ke,setUser:k=>{Me(k)},setLoading:k=>P(k),setContinueAs:k=>Q(k),loading:R}),S.jsx(sL,{loading:R}),S.jsx($L,{continueAs:q,setContinueAs:k=>{Q(k)},user:ke,setLoading:k=>P(k)}),S.jsx(nU,{isSigningOut:Y,setIsSigningOut:k=>{J(k)},setLoading:k=>{P(k)},setUser:k=>{Me(k)}})]})})}uR.createRoot(document.getElementById("root")).render(S.jsx(ae.StrictMode,{children:S.jsx(rU,{})}));
