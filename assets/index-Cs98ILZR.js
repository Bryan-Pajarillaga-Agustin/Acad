(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var lm={exports:{}},Tu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE;function tR(){if(kE)return Tu;kE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:i,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Tu.Fragment=e,Tu.jsx=t,Tu.jsxs=t,Tu}var xE;function nR(){return xE||(xE=1,lm.exports=tR()),lm.exports}var S=nR(),um={exports:{}},Me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ME;function iR(){if(ME)return Me;ME=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function C(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,X={};function H(O,$,ne){this.props=O,this.context=$,this.refs=X,this.updater=ne||P}H.prototype.isReactComponent={},H.prototype.setState=function(O,$){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,$,"setState")},H.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Y(){}Y.prototype=H.prototype;function ee(O,$,ne){this.props=O,this.context=$,this.refs=X,this.updater=ne||P}var le=ee.prototype=new Y;le.constructor=ee,z(le,H.prototype),le.isPureReactComponent=!0;var se=Array.isArray,he={H:null,A:null,T:null,S:null},Te=Object.prototype.hasOwnProperty;function k(O,$,ne,ie,fe,ge){return ne=ge.ref,{$$typeof:i,type:O,key:$,ref:ne!==void 0?ne:null,props:ge}}function R(O,$){return k(O.type,$,void 0,void 0,void 0,O.props)}function b(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function I(O){var $={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ne){return $[ne]})}var x=/\/+/g;function L(O,$){return typeof O=="object"&&O!==null&&O.key!=null?I(""+O.key):$.toString(36)}function D(){}function et(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(D,D):(O.status="pending",O.then(function($){O.status==="pending"&&(O.status="fulfilled",O.value=$)},function($){O.status==="pending"&&(O.status="rejected",O.reason=$)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function rt(O,$,ne,ie,fe){var ge=typeof O;(ge==="undefined"||ge==="boolean")&&(O=null);var pe=!1;if(O===null)pe=!0;else switch(ge){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(O.$$typeof){case i:case e:pe=!0;break;case E:return pe=O._init,rt(pe(O._payload),$,ne,ie,fe)}}if(pe)return fe=fe(O),pe=ie===""?"."+L(O,0):ie,se(fe)?(ne="",pe!=null&&(ne=pe.replace(x,"$&/")+"/"),rt(fe,$,ne,"",function(Oe){return Oe})):fe!=null&&(b(fe)&&(fe=R(fe,ne+(fe.key==null||O&&O.key===fe.key?"":(""+fe.key).replace(x,"$&/")+"/")+pe)),$.push(fe)),1;pe=0;var Je=ie===""?".":ie+":";if(se(O))for(var Ne=0;Ne<O.length;Ne++)ie=O[Ne],ge=Je+L(ie,Ne),pe+=rt(ie,$,ne,ge,fe);else if(Ne=C(O),typeof Ne=="function")for(O=Ne.call(O),Ne=0;!(ie=O.next()).done;)ie=ie.value,ge=Je+L(ie,Ne++),pe+=rt(ie,$,ne,ge,fe);else if(ge==="object"){if(typeof O.then=="function")return rt(et(O),$,ne,ie,fe);throw $=String(O),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return pe}function oe(O,$,ne){if(O==null)return O;var ie=[],fe=0;return rt(O,ie,"","",function(ge){return $.call(ne,ge,fe++)}),ie}function F(O){if(O._status===-1){var $=O._result;$=$(),$.then(function(ne){(O._status===0||O._status===-1)&&(O._status=1,O._result=ne)},function(ne){(O._status===0||O._status===-1)&&(O._status=2,O._result=ne)}),O._status===-1&&(O._status=0,O._result=$)}if(O._status===1)return O._result.default;throw O._result}var ae=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ae(){}return Me.Children={map:oe,forEach:function(O,$,ne){oe(O,function(){$.apply(this,arguments)},ne)},count:function(O){var $=0;return oe(O,function(){$++}),$},toArray:function(O){return oe(O,function($){return $})||[]},only:function(O){if(!b(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Me.Component=H,Me.Fragment=t,Me.Profiler=a,Me.PureComponent=ee,Me.StrictMode=s,Me.Suspense=m,Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=he,Me.act=function(){throw Error("act(...) is not supported in production builds of React.")},Me.cache=function(O){return function(){return O.apply(null,arguments)}},Me.cloneElement=function(O,$,ne){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ie=z({},O.props),fe=O.key,ge=void 0;if($!=null)for(pe in $.ref!==void 0&&(ge=void 0),$.key!==void 0&&(fe=""+$.key),$)!Te.call($,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&$.ref===void 0||(ie[pe]=$[pe]);var pe=arguments.length-2;if(pe===1)ie.children=ne;else if(1<pe){for(var Je=Array(pe),Ne=0;Ne<pe;Ne++)Je[Ne]=arguments[Ne+2];ie.children=Je}return k(O.type,fe,void 0,void 0,ge,ie)},Me.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},Me.createElement=function(O,$,ne){var ie,fe={},ge=null;if($!=null)for(ie in $.key!==void 0&&(ge=""+$.key),$)Te.call($,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(fe[ie]=$[ie]);var pe=arguments.length-2;if(pe===1)fe.children=ne;else if(1<pe){for(var Je=Array(pe),Ne=0;Ne<pe;Ne++)Je[Ne]=arguments[Ne+2];fe.children=Je}if(O&&O.defaultProps)for(ie in pe=O.defaultProps,pe)fe[ie]===void 0&&(fe[ie]=pe[ie]);return k(O,ge,void 0,void 0,null,fe)},Me.createRef=function(){return{current:null}},Me.forwardRef=function(O){return{$$typeof:d,render:O}},Me.isValidElement=b,Me.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:F}},Me.memo=function(O,$){return{$$typeof:_,type:O,compare:$===void 0?null:$}},Me.startTransition=function(O){var $=he.T,ne={};he.T=ne;try{var ie=O(),fe=he.S;fe!==null&&fe(ne,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(Ae,ae)}catch(ge){ae(ge)}finally{he.T=$}},Me.unstable_useCacheRefresh=function(){return he.H.useCacheRefresh()},Me.use=function(O){return he.H.use(O)},Me.useActionState=function(O,$,ne){return he.H.useActionState(O,$,ne)},Me.useCallback=function(O,$){return he.H.useCallback(O,$)},Me.useContext=function(O){return he.H.useContext(O)},Me.useDebugValue=function(){},Me.useDeferredValue=function(O,$){return he.H.useDeferredValue(O,$)},Me.useEffect=function(O,$){return he.H.useEffect(O,$)},Me.useId=function(){return he.H.useId()},Me.useImperativeHandle=function(O,$,ne){return he.H.useImperativeHandle(O,$,ne)},Me.useInsertionEffect=function(O,$){return he.H.useInsertionEffect(O,$)},Me.useLayoutEffect=function(O,$){return he.H.useLayoutEffect(O,$)},Me.useMemo=function(O,$){return he.H.useMemo(O,$)},Me.useOptimistic=function(O,$){return he.H.useOptimistic(O,$)},Me.useReducer=function(O,$,ne){return he.H.useReducer(O,$,ne)},Me.useRef=function(O){return he.H.useRef(O)},Me.useState=function(O){return he.H.useState(O)},Me.useSyncExternalStore=function(O,$,ne){return he.H.useSyncExternalStore(O,$,ne)},Me.useTransition=function(){return he.H.useTransition()},Me.version="19.0.0",Me}var PE;function __(){return PE||(PE=1,um.exports=iR()),um.exports}var ue=__(),cm={exports:{}},Su={},hm={exports:{}},fm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VE;function sR(){return VE||(VE=1,function(i){function e(oe,F){var ae=oe.length;oe.push(F);e:for(;0<ae;){var Ae=ae-1>>>1,O=oe[Ae];if(0<a(O,F))oe[Ae]=F,oe[ae]=O,ae=Ae;else break e}}function t(oe){return oe.length===0?null:oe[0]}function s(oe){if(oe.length===0)return null;var F=oe[0],ae=oe.pop();if(ae!==F){oe[0]=ae;e:for(var Ae=0,O=oe.length,$=O>>>1;Ae<$;){var ne=2*(Ae+1)-1,ie=oe[ne],fe=ne+1,ge=oe[fe];if(0>a(ie,ae))fe<O&&0>a(ge,ie)?(oe[Ae]=ge,oe[fe]=ae,Ae=fe):(oe[Ae]=ie,oe[ne]=ae,Ae=ne);else if(fe<O&&0>a(ge,ae))oe[Ae]=ge,oe[fe]=ae,Ae=fe;else break e}}return F}function a(oe,F){var ae=oe.sortIndex-F.sortIndex;return ae!==0?ae:oe.id-F.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var m=[],_=[],E=1,T=null,C=3,P=!1,z=!1,X=!1,H=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function le(oe){for(var F=t(_);F!==null;){if(F.callback===null)s(_);else if(F.startTime<=oe)s(_),F.sortIndex=F.expirationTime,e(m,F);else break;F=t(_)}}function se(oe){if(X=!1,le(oe),!z)if(t(m)!==null)z=!0,et();else{var F=t(_);F!==null&&rt(se,F.startTime-oe)}}var he=!1,Te=-1,k=5,R=-1;function b(){return!(i.unstable_now()-R<k)}function I(){if(he){var oe=i.unstable_now();R=oe;var F=!0;try{e:{z=!1,X&&(X=!1,Y(Te),Te=-1),P=!0;var ae=C;try{t:{for(le(oe),T=t(m);T!==null&&!(T.expirationTime>oe&&b());){var Ae=T.callback;if(typeof Ae=="function"){T.callback=null,C=T.priorityLevel;var O=Ae(T.expirationTime<=oe);if(oe=i.unstable_now(),typeof O=="function"){T.callback=O,le(oe),F=!0;break t}T===t(m)&&s(m),le(oe)}else s(m);T=t(m)}if(T!==null)F=!0;else{var $=t(_);$!==null&&rt(se,$.startTime-oe),F=!1}}break e}finally{T=null,C=ae,P=!1}F=void 0}}finally{F?x():he=!1}}}var x;if(typeof ee=="function")x=function(){ee(I)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,D=L.port2;L.port1.onmessage=I,x=function(){D.postMessage(null)}}else x=function(){H(I,0)};function et(){he||(he=!0,x())}function rt(oe,F){Te=H(function(){oe(i.unstable_now())},F)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(oe){oe.callback=null},i.unstable_continueExecution=function(){z||P||(z=!0,et())},i.unstable_forceFrameRate=function(oe){0>oe||125<oe?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<oe?Math.floor(1e3/oe):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return t(m)},i.unstable_next=function(oe){switch(C){case 1:case 2:case 3:var F=3;break;default:F=C}var ae=C;C=F;try{return oe()}finally{C=ae}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(oe,F){switch(oe){case 1:case 2:case 3:case 4:case 5:break;default:oe=3}var ae=C;C=oe;try{return F()}finally{C=ae}},i.unstable_scheduleCallback=function(oe,F,ae){var Ae=i.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Ae+ae:Ae):ae=Ae,oe){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ae+O,oe={id:E++,callback:F,priorityLevel:oe,startTime:ae,expirationTime:O,sortIndex:-1},ae>Ae?(oe.sortIndex=ae,e(_,oe),t(m)===null&&oe===t(_)&&(X?(Y(Te),Te=-1):X=!0,rt(se,ae-Ae))):(oe.sortIndex=O,e(m,oe),z||P||(z=!0,et())),oe},i.unstable_shouldYield=b,i.unstable_wrapCallback=function(oe){var F=C;return function(){var ae=C;C=F;try{return oe.apply(this,arguments)}finally{C=ae}}}}(fm)),fm}var LE;function rR(){return LE||(LE=1,hm.exports=sR()),hm.exports}var dm={exports:{}},mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UE;function aR(){if(UE)return mn;UE=1;var i=__();function e(m){var _="https://react.dev/errors/"+m;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)_+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+m+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,_,E){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:m,containerInfo:_,implementation:E}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,_){if(m==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,mn.createPortal=function(m,_){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return l(m,_,null,E)},mn.flushSync=function(m){var _=c.T,E=s.p;try{if(c.T=null,s.p=2,m)return m()}finally{c.T=_,s.p=E,s.d.f()}},mn.preconnect=function(m,_){typeof m=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(m,_))},mn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},mn.preinit=function(m,_){if(typeof m=="string"&&_&&typeof _.as=="string"){var E=_.as,T=d(E,_.crossOrigin),C=typeof _.integrity=="string"?_.integrity:void 0,P=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;E==="style"?s.d.S(m,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:T,integrity:C,fetchPriority:P}):E==="script"&&s.d.X(m,{crossOrigin:T,integrity:C,fetchPriority:P,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},mn.preinitModule=function(m,_){if(typeof m=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var E=d(_.as,_.crossOrigin);s.d.M(m,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&s.d.M(m)},mn.preload=function(m,_){if(typeof m=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var E=_.as,T=d(E,_.crossOrigin);s.d.L(m,E,{crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},mn.preloadModule=function(m,_){if(typeof m=="string")if(_){var E=d(_.as,_.crossOrigin);s.d.m(m,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else s.d.m(m)},mn.requestFormReset=function(m){s.d.r(m)},mn.unstable_batchedUpdates=function(m,_){return m(_)},mn.useFormState=function(m,_,E){return c.H.useFormState(m,_,E)},mn.useFormStatus=function(){return c.H.useHostTransitionStatus()},mn.version="19.0.0",mn}var jE;function oR(){if(jE)return dm.exports;jE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),dm.exports=aR(),dm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BE;function lR(){if(BE)return Su;BE=1;var i=rR(),e=__(),t=oR();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var l=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),P=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),se=Symbol.for("react.memo_cache_sentinel"),he=Symbol.iterator;function Te(n){return n===null||typeof n!="object"?null:(n=he&&n[he]||n["@@iterator"],typeof n=="function"?n:null)}var k=Symbol.for("react.client.reference");function R(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===k?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case m:return"Fragment";case d:return"Portal";case E:return"Profiler";case _:return"StrictMode";case X:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Provider";case C:return(n._context.displayName||"Context")+".Consumer";case z:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return r=n.displayName||null,r!==null?r:R(n.type)||"Memo";case ee:r=n._payload,n=n._init;try{return R(n(r))}catch{}}return null}var b=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=Object.assign,x,L;function D(n){if(x===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||"",L=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+x+n+L}var et=!1;function rt(n,r){if(!n||et)return"";et=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(W){var q=W}Reflect.construct(n,[],te)}else{try{te.call()}catch(W){q=W}n.call(te.prototype)}}else{try{throw Error()}catch(W){q=W}(te=n())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(W){if(W&&q&&typeof W.stack=="string")return[W.stack,q.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),v=p[0],A=p[1];if(v&&A){var N=v.split(`
`),V=A.split(`
`);for(f=u=0;u<N.length&&!N[u].includes("DetermineComponentFrameRoot");)u++;for(;f<V.length&&!V[f].includes("DetermineComponentFrameRoot");)f++;if(u===N.length||f===V.length)for(u=N.length-1,f=V.length-1;1<=u&&0<=f&&N[u]!==V[f];)f--;for(;1<=u&&0<=f;u--,f--)if(N[u]!==V[f]){if(u!==1||f!==1)do if(u--,f--,0>f||N[u]!==V[f]){var Q=`
`+N[u].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=u&&0<=f);break}}}finally{et=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?D(o):""}function oe(n){switch(n.tag){case 26:case 27:case 5:return D(n.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 15:return n=rt(n.type,!1),n;case 11:return n=rt(n.type.render,!1),n;case 1:return n=rt(n.type,!0),n;default:return""}}function F(n){try{var r="";do r+=oe(n),n=n.return;while(n);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function ae(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Ae(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function O(n){if(ae(n)!==n)throw Error(s(188))}function $(n){var r=n.alternate;if(!r){if(r=ae(n),r===null)throw Error(s(188));return r!==n?null:n}for(var o=n,u=r;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return O(f),n;if(p===u)return O(f),r;p=p.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=p;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,u=p;break}if(A===u){v=!0,u=f,o=p;break}A=A.sibling}if(!v){for(A=p.child;A;){if(A===o){v=!0,o=p,u=f;break}if(A===u){v=!0,u=p,o=f;break}A=A.sibling}if(!v)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?n:r}function ne(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=ne(n),r!==null)return r;n=n.sibling}return null}var ie=Array.isArray,fe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge={pending:!1,data:null,method:null,action:null},pe=[],Je=-1;function Ne(n){return{current:n}}function Oe(n){0>Je||(n.current=pe[Je],pe[Je]=null,Je--)}function Re(n,r){Je++,pe[Je]=n.current,n.current=r}var Zt=Ne(null),Mn=Ne(null),fn=Ne(null),Pn=Ne(null);function Ai(n,r){switch(Re(fn,r),Re(Mn,n),Re(Zt,null),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)&&(r=r.namespaceURI)?oE(r):0;break;default:if(n=n===8?r.parentNode:r,r=n.tagName,n=n.namespaceURI)n=oE(n),r=lE(n,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}Oe(Zt),Re(Zt,r)}function Qn(){Oe(Zt),Oe(Mn),Oe(fn)}function Xi(n){n.memoizedState!==null&&Re(Pn,n);var r=Zt.current,o=lE(r,n.type);r!==o&&(Re(Mn,n),Re(Zt,o))}function K(n){Mn.current===n&&(Oe(Zt),Oe(Mn)),Pn.current===n&&(Oe(Pn),_u._currentValue=ge)}var tt=Object.prototype.hasOwnProperty,Ht=i.unstable_scheduleCallback,Jt=i.unstable_cancelCallback,qa=i.unstable_shouldYield,Zi=i.unstable_requestPaint,en=i.unstable_now,qr=i.unstable_getCurrentPriorityLevel,_t=i.unstable_ImmediatePriority,Nt=i.unstable_UserBlockingPriority,Ji=i.unstable_NormalPriority,Tc=i.unstable_LowPriority,yl=i.unstable_IdlePriority,hd=i.log,Gr=i.unstable_setDisableYieldValue,Ls=null,dn=null;function vl(n){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Ls,n,void 0,(n.current.flags&128)===128)}catch{}}function wi(n){if(typeof hd=="function"&&Gr(n),dn&&typeof dn.setStrictMode=="function")try{dn.setStrictMode(Ls,n)}catch{}}var wn=Math.clz32?Math.clz32:Ac,El=Math.log,Sc=Math.LN2;function Ac(n){return n>>>=0,n===0?32:31-(El(n)/Sc|0)|0}var bi=128,Us=4194304;function di(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Yn(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,f=n.suspendedLanes,p=n.pingedLanes,v=n.warmLanes;n=n.finishedLanes!==0;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=di(o):(p&=A,p!==0?u=di(p):n||(v=A&~v,v!==0&&(u=di(v))))):(A=o&~f,A!==0?u=di(A):p!==0?u=di(p):n||(v=o&~v,v!==0&&(u=di(v)))),u===0?0:r!==0&&r!==u&&(r&f)===0&&(f=u&-u,v=r&-r,f>=v||f===32&&(v&4194176)!==0)?r:u}function js(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Ga(n,r){switch(n){case 1:case 2:case 4:case 8:return r+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tl(){var n=bi;return bi<<=1,(bi&4194176)===0&&(bi=128),n}function Bs(){var n=Us;return Us<<=1,(Us&62914560)===0&&(Us=4194304),n}function Ka(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Ct(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function wc(n,r,o,u,f,p){var v=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var A=n.entanglements,N=n.expirationTimes,V=n.hiddenUpdates;for(o=v&~o;0<o;){var Q=31-wn(o),te=1<<Q;A[Q]=0,N[Q]=-1;var q=V[Q];if(q!==null)for(V[Q]=null,Q=0;Q<q.length;Q++){var W=q[Q];W!==null&&(W.lane&=-536870913)}o&=~te}u!==0&&zs(n,u,0),p!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=p&~(v&~r))}function zs(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-wn(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194218}function Hs(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-wn(o),f=1<<u;f&r|n[u]&r&&(n[u]|=r),o&=~f}}function bc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Cc(){var n=fe.p;return n!==0?n:(n=window.event,n===void 0?32:CE(n.type))}function Fs(n,r){var o=fe.p;try{return fe.p=n,r()}finally{fe.p=o}}var Ci=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Ci,Mt="__reactProps$"+Ci,es="__reactContainer$"+Ci,Kr="__reactEvents$"+Ci,Wa="__reactListeners$"+Ci,Ri="__reactHandles$"+Ci,Sl="__reactResources$"+Ci,qs="__reactMarker$"+Ci;function Wr(n){delete n[Ft],delete n[Mt],delete n[Kr],delete n[Wa],delete n[Ri]}function pi(n){var r=n[Ft];if(r)return r;for(var o=n.parentNode;o;){if(r=o[es]||o[Ft]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=hE(n);n!==null;){if(o=n[Ft])return o;n=hE(n)}return r}n=o,o=n.parentNode}return null}function ts(n){if(n=n[Ft]||n[es]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function Gs(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function Ks(n){var r=n[Sl];return r||(r=n[Sl]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function gt(n){n[qs]=!0}var Al=new Set,Qa={};function Vn(n,r){Nn(n,r),Nn(n+"Capture",r)}function Nn(n,r){for(Qa[n]=r,n=0;n<r.length;n++)Al.add(r[n])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wl={},bl={};function Rc(n){return tt.call(bl,n)?!0:tt.call(wl,n)?!1:fd.test(n)?bl[n]=!0:(wl[n]=!0,!1)}function Ws(n,r,o){if(Rc(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function Qs(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function $n(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}function bn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ic(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function dd(n){var r=Ic(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(v){u=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(v){u=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Qr(n){n._valueTracker||(n._valueTracker=dd(n))}function Cl(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=Ic(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Ya(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var ns=/[\n"\\]/g;function Tt(n){return n.replace(ns,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Ys(n,r,o,u,f,p,v,A){n.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.type=v:n.removeAttribute("type"),r!=null?v==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+bn(r)):n.value!==""+bn(r)&&(n.value=""+bn(r)):v!=="submit"&&v!=="reset"||n.removeAttribute("value"),r!=null?$a(n,v,bn(r)):o!=null?$a(n,v,bn(o)):u!=null&&n.removeAttribute("value"),f==null&&p!=null&&(n.defaultChecked=!!p),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?n.name=""+bn(A):n.removeAttribute("name")}function Yr(n,r,o,u,f,p,v,A){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(n.type=p),r!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||r!=null))return;o=o!=null?""+bn(o):"",r=r!=null?""+bn(r):o,A||r===n.value||(n.value=r),n.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=A?n.checked:!!u,n.defaultChecked=!!u,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(n.name=v)}function $a(n,r,o){r==="number"&&Ya(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function $e(n,r,o,u){if(n=n.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=r.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+bn(o),r=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function $r(n,r,o){if(r!=null&&(r=""+bn(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+bn(o):""}function $s(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(ie(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=bn(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function Xn(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var pd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rl(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||pd.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function Nc(n,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Rl(n,f,u)}else for(var p in r)r.hasOwnProperty(p)&&Rl(n,p,r[p])}function Il(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var md=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_d=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ii(n){return _d.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Zn=null;function Xa(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var is=null,ss=null;function rs(n){var r=ts(n);if(r&&(n=r.stateNode)){var o=n[Mt]||null;e:switch(n=r.stateNode,r.type){case"input":if(Ys(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Tt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var f=u[Mt]||null;if(!f)throw Error(s(90));Ys(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&Cl(u)}break e;case"textarea":$r(n,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&$e(n,!!o.multiple,r,!1)}}}var Nl=!1;function Dc(n,r,o){if(Nl)return n(r,o);Nl=!0;try{var u=n(r);return u}finally{if(Nl=!1,(is!==null||ss!==null)&&(Th(),is&&(r=is,n=ss,ss=is=null,rs(r),n)))for(r=0;r<n.length;r++)rs(n[r])}}function Xr(n,r){var o=n.stateNode;if(o===null)return null;var u=o[Mt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var Jn=!1;if(Ln)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Jn=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Jn=!1}var Ni=null,Xs=null,as=null;function Dl(){if(as)return as;var n,r=Xs,o=r.length,u,f="value"in Ni?Ni.value:Ni.textContent,p=f.length;for(n=0;n<o&&r[n]===f[n];n++);var v=o-n;for(u=1;u<=v&&r[o-u]===f[p-u];u++);return as=f.slice(n,1<u?1-u:void 0)}function Di(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Oi(){return!0}function Ol(){return!1}function qt(n){function r(o,u,f,p,v){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(o=n[A],this[A]=o?o(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Oi:Ol,this.isPropagationStopped=Ol,this}return I(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),r}var nt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Za=qt(nt),Jr=I({},nt,{view:0,detail:0}),Oc=qt(Jr),Ja,eo,ki,ea=I({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ia,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ki&&(ki&&n.type==="mousemove"?(Ja=n.screenX-ki.screenX,eo=n.screenY-ki.screenY):eo=Ja=0,ki=n),Ja)},movementY:function(n){return"movementY"in n?n.movementY:eo}}),ei=qt(ea),kc=I({},ea,{dataTransfer:0}),gd=qt(kc),ta=I({},Jr,{relatedTarget:0}),to=qt(ta),kl=I({},nt,{animationName:0,elapsedTime:0,pseudoElement:0}),no=qt(kl),xc=I({},nt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),io=qt(xc),yd=I({},nt,{data:0}),xl=qt(yd),na={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ml(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Pc[n])?!!r[n]:!1}function ia(){return Ml}var Vc=I({},Jr,{key:function(n){if(n.key){var r=na[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Di(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Mc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ia,charCode:function(n){return n.type==="keypress"?Di(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Di(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),so=qt(Vc),Lc=I({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pl=qt(Lc),os=I({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ia}),Uc=qt(os),jc=I({},nt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bc=qt(jc),zc=I({},ea,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ro=qt(zc),Cn=I({},nt,{newState:0,oldState:0}),Hc=qt(Cn),Fc=[9,13,27,32],xi=Ln&&"CompositionEvent"in window,h=null;Ln&&"documentMode"in document&&(h=document.documentMode);var g=Ln&&"TextEvent"in window&&!h,y=Ln&&(!xi||h&&8<h&&11>=h),w=" ",j=!1;function G(n,r){switch(n){case"keyup":return Fc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ce(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qe=!1;function Pt(n,r){switch(n){case"compositionend":return ce(r);case"keypress":return r.which!==32?null:(j=!0,w);case"textInput":return n=r.data,n===w&&j?null:n;default:return null}}function Ge(n,r){if(qe)return n==="compositionend"||!xi&&G(n,r)?(n=Dl(),as=Xs=Ni=null,qe=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var Gt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vt(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Gt[n.type]:r==="textarea"}function ls(n,r,o,u){is?ss?ss.push(u):ss=[u]:is=u,r=Ch(r,"onChange"),0<r.length&&(o=new Za("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var tn=null,Mi=null;function Vl(n){nE(n,0)}function qc(n){var r=Gs(n);if(Cl(r))return n}function Og(n,r){if(n==="change")return r}var kg=!1;if(Ln){var vd;if(Ln){var Ed="oninput"in document;if(!Ed){var xg=document.createElement("div");xg.setAttribute("oninput","return;"),Ed=typeof xg.oninput=="function"}vd=Ed}else vd=!1;kg=vd&&(!document.documentMode||9<document.documentMode)}function Mg(){tn&&(tn.detachEvent("onpropertychange",Pg),Mi=tn=null)}function Pg(n){if(n.propertyName==="value"&&qc(Mi)){var r=[];ls(r,Mi,n,Xa(n)),Dc(Vl,r)}}function Ob(n,r,o){n==="focusin"?(Mg(),tn=r,Mi=o,tn.attachEvent("onpropertychange",Pg)):n==="focusout"&&Mg()}function kb(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return qc(Mi)}function xb(n,r){if(n==="click")return qc(r)}function Mb(n,r){if(n==="input"||n==="change")return qc(r)}function Pb(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Un=typeof Object.is=="function"?Object.is:Pb;function Ll(n,r){if(Un(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!tt.call(r,f)||!Un(n[f],r[f]))return!1}return!0}function Vg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Lg(n,r){var o=Vg(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Vg(o)}}function Ug(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Ug(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function jg(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Ya(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Ya(n.document)}return r}function Td(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Vb(n,r){var o=jg(r);r=n.focusedElem;var u=n.selectionRange;if(o!==r&&r&&r.ownerDocument&&Ug(r.ownerDocument.documentElement,r)){if(u!==null&&Td(r)){if(n=u.start,o=u.end,o===void 0&&(o=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(o,r.value.length);else if(o=(n=r.ownerDocument||document)&&n.defaultView||window,o.getSelection){o=o.getSelection();var f=r.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!o.extend&&p>u&&(f=u,u=p,p=f),f=Lg(r,p);var v=Lg(r,u);f&&v&&(o.rangeCount!==1||o.anchorNode!==f.node||o.anchorOffset!==f.offset||o.focusNode!==v.node||o.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(f.node,f.offset),o.removeAllRanges(),p>u?(o.addRange(n),o.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),o.addRange(n)))}}for(n=[],o=r;o=o.parentNode;)o.nodeType===1&&n.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)o=n[r],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var Lb=Ln&&"documentMode"in document&&11>=document.documentMode,ao=null,Sd=null,Ul=null,Ad=!1;function Bg(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ad||ao==null||ao!==Ya(u)||(u=ao,"selectionStart"in u&&Td(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ul&&Ll(Ul,u)||(Ul=u,u=Ch(Sd,"onSelect"),0<u.length&&(r=new Za("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=ao)))}function sa(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var oo={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionrun:sa("Transition","TransitionRun"),transitionstart:sa("Transition","TransitionStart"),transitioncancel:sa("Transition","TransitionCancel"),transitionend:sa("Transition","TransitionEnd")},wd={},zg={};Ln&&(zg=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function ra(n){if(wd[n])return wd[n];if(!oo[n])return n;var r=oo[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in zg)return wd[n]=r[o];return n}var Hg=ra("animationend"),Fg=ra("animationiteration"),qg=ra("animationstart"),Ub=ra("transitionrun"),jb=ra("transitionstart"),Bb=ra("transitioncancel"),Gg=ra("transitionend"),Kg=new Map,Wg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function mi(n,r){Kg.set(n,r),Vn(r,[n])}var ti=[],lo=0,bd=0;function Gc(){for(var n=lo,r=bd=lo=0;r<n;){var o=ti[r];ti[r++]=null;var u=ti[r];ti[r++]=null;var f=ti[r];ti[r++]=null;var p=ti[r];if(ti[r++]=null,u!==null&&f!==null){var v=u.pending;v===null?f.next=f:(f.next=v.next,v.next=f),u.pending=f}p!==0&&Qg(o,f,p)}}function Kc(n,r,o,u){ti[lo++]=n,ti[lo++]=r,ti[lo++]=o,ti[lo++]=u,bd|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Cd(n,r,o,u){return Kc(n,r,o,u),Wc(n)}function Zs(n,r){return Kc(n,null,null,r),Wc(n)}function Qg(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,p=n.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(n=p.stateNode,n===null||n._visibility&1||(f=!0)),n=p,p=p.return;f&&r!==null&&n.tag===3&&(p=n.stateNode,f=31-wn(o),p=p.hiddenUpdates,n=p[f],n===null?p[f]=[r]:n.push(r),r.lane=o|536870912)}function Wc(n){if(50<uu)throw uu=0,kp=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var uo={},Yg=new WeakMap;function ni(n,r){if(typeof n=="object"&&n!==null){var o=Yg.get(n);return o!==void 0?o:(r={value:n,source:r,stack:F(r)},Yg.set(n,r),r)}return{value:n,source:r,stack:F(r)}}var co=[],ho=0,Qc=null,Yc=0,ii=[],si=0,aa=null,us=1,cs="";function oa(n,r){co[ho++]=Yc,co[ho++]=Qc,Qc=n,Yc=r}function $g(n,r,o){ii[si++]=us,ii[si++]=cs,ii[si++]=aa,aa=n;var u=us;n=cs;var f=32-wn(u)-1;u&=~(1<<f),o+=1;var p=32-wn(r)+f;if(30<p){var v=f-f%5;p=(u&(1<<v)-1).toString(32),u>>=v,f-=v,us=1<<32-wn(r)+f|o<<f|u,cs=p+n}else us=1<<p|o<<f|u,cs=n}function Rd(n){n.return!==null&&(oa(n,1),$g(n,1,0))}function Id(n){for(;n===Qc;)Qc=co[--ho],co[ho]=null,Yc=co[--ho],co[ho]=null;for(;n===aa;)aa=ii[--si],ii[si]=null,cs=ii[--si],ii[si]=null,us=ii[--si],ii[si]=null}var Rn=null,nn=null,Xe=!1,_i=null,Pi=!1,Nd=Error(s(519));function la(n){var r=Error(s(418,""));throw zl(ni(r,n)),Nd}function Xg(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[Ft]=n,r[Mt]=u,o){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(o=0;o<hu.length;o++)ze(hu[o],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":ze("invalid",r),Yr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Qr(r);break;case"select":ze("invalid",r);break;case"textarea":ze("invalid",r),$s(r,u.value,u.defaultValue,u.children),Qr(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||aE(r.textContent,o)?(u.popover!=null&&(ze("beforetoggle",r),ze("toggle",r)),u.onScroll!=null&&ze("scroll",r),u.onScrollEnd!=null&&ze("scrollend",r),u.onClick!=null&&(r.onclick=Rh),r=!0):r=!1,r||la(n)}function Zg(n){for(Rn=n.return;Rn;)switch(Rn.tag){case 3:case 27:Pi=!0;return;case 5:case 13:Pi=!1;return;default:Rn=Rn.return}}function jl(n){if(n!==Rn)return!1;if(!Xe)return Zg(n),Xe=!0,!1;var r=!1,o;if((o=n.tag!==3&&n.tag!==27)&&((o=n.tag===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Yp(n.type,n.memoizedProps)),o=!o),o&&(r=!0),r&&nn&&la(n),Zg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(r===0){nn=yi(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;n=n.nextSibling}nn=null}}else nn=Rn?yi(n.stateNode.nextSibling):null;return!0}function Bl(){nn=Rn=null,Xe=!1}function zl(n){_i===null?_i=[n]:_i.push(n)}var Hl=Error(s(460)),Jg=Error(s(474)),Dd={then:function(){}};function ey(n){return n=n.status,n==="fulfilled"||n==="rejected"}function $c(){}function ty(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then($c,$c),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,n===Hl?Error(s(483)):n;default:if(typeof r.status=="string")r.then($c,$c);else{if(n=ht,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,n===Hl?Error(s(483)):n}throw Fl=r,Hl}}var Fl=null;function ny(){if(Fl===null)throw Error(s(459));var n=Fl;return Fl=null,n}var fo=null,ql=0;function Xc(n){var r=ql;return ql+=1,fo===null&&(fo=[]),ty(fo,n,r)}function Gl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Zc(n,r){throw r.$$typeof===l?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function iy(n){var r=n._init;return r(n._payload)}function sy(n){function r(U,M){if(n){var B=U.deletions;B===null?(U.deletions=[M],U.flags|=16):B.push(M)}}function o(U,M){if(!n)return null;for(;M!==null;)r(U,M),M=M.sibling;return null}function u(U){for(var M=new Map;U!==null;)U.key!==null?M.set(U.key,U):M.set(U.index,U),U=U.sibling;return M}function f(U,M){return U=cr(U,M),U.index=0,U.sibling=null,U}function p(U,M,B){return U.index=B,n?(B=U.alternate,B!==null?(B=B.index,B<M?(U.flags|=33554434,M):B):(U.flags|=33554434,M)):(U.flags|=1048576,M)}function v(U){return n&&U.alternate===null&&(U.flags|=33554434),U}function A(U,M,B,Z){return M===null||M.tag!==6?(M=wp(B,U.mode,Z),M.return=U,M):(M=f(M,B),M.return=U,M)}function N(U,M,B,Z){var _e=B.type;return _e===m?Q(U,M,B.props.children,Z,B.key):M!==null&&(M.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===ee&&iy(_e)===M.type)?(M=f(M,B.props),Gl(M,B),M.return=U,M):(M=_h(B.type,B.key,B.props,null,U.mode,Z),Gl(M,B),M.return=U,M)}function V(U,M,B,Z){return M===null||M.tag!==4||M.stateNode.containerInfo!==B.containerInfo||M.stateNode.implementation!==B.implementation?(M=bp(B,U.mode,Z),M.return=U,M):(M=f(M,B.children||[]),M.return=U,M)}function Q(U,M,B,Z,_e){return M===null||M.tag!==7?(M=ya(B,U.mode,Z,_e),M.return=U,M):(M=f(M,B),M.return=U,M)}function te(U,M,B){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=wp(""+M,U.mode,B),M.return=U,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case c:return B=_h(M.type,M.key,M.props,null,U.mode,B),Gl(B,M),B.return=U,B;case d:return M=bp(M,U.mode,B),M.return=U,M;case ee:var Z=M._init;return M=Z(M._payload),te(U,M,B)}if(ie(M)||Te(M))return M=ya(M,U.mode,B,null),M.return=U,M;if(typeof M.then=="function")return te(U,Xc(M),B);if(M.$$typeof===P)return te(U,dh(U,M),B);Zc(U,M)}return null}function q(U,M,B,Z){var _e=M!==null?M.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return _e!==null?null:A(U,M,""+B,Z);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case c:return B.key===_e?N(U,M,B,Z):null;case d:return B.key===_e?V(U,M,B,Z):null;case ee:return _e=B._init,B=_e(B._payload),q(U,M,B,Z)}if(ie(B)||Te(B))return _e!==null?null:Q(U,M,B,Z,null);if(typeof B.then=="function")return q(U,M,Xc(B),Z);if(B.$$typeof===P)return q(U,M,dh(U,B),Z);Zc(U,B)}return null}function W(U,M,B,Z,_e){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return U=U.get(B)||null,A(M,U,""+Z,_e);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case c:return U=U.get(Z.key===null?B:Z.key)||null,N(M,U,Z,_e);case d:return U=U.get(Z.key===null?B:Z.key)||null,V(M,U,Z,_e);case ee:var Ve=Z._init;return Z=Ve(Z._payload),W(U,M,B,Z,_e)}if(ie(Z)||Te(Z))return U=U.get(B)||null,Q(M,U,Z,_e,null);if(typeof Z.then=="function")return W(U,M,B,Xc(Z),_e);if(Z.$$typeof===P)return W(U,M,B,dh(M,Z),_e);Zc(M,Z)}return null}function ve(U,M,B,Z){for(var _e=null,Ve=null,Ee=M,be=M=0,Qt=null;Ee!==null&&be<B.length;be++){Ee.index>be?(Qt=Ee,Ee=null):Qt=Ee.sibling;var Ze=q(U,Ee,B[be],Z);if(Ze===null){Ee===null&&(Ee=Qt);break}n&&Ee&&Ze.alternate===null&&r(U,Ee),M=p(Ze,M,be),Ve===null?_e=Ze:Ve.sibling=Ze,Ve=Ze,Ee=Qt}if(be===B.length)return o(U,Ee),Xe&&oa(U,be),_e;if(Ee===null){for(;be<B.length;be++)Ee=te(U,B[be],Z),Ee!==null&&(M=p(Ee,M,be),Ve===null?_e=Ee:Ve.sibling=Ee,Ve=Ee);return Xe&&oa(U,be),_e}for(Ee=u(Ee);be<B.length;be++)Qt=W(Ee,U,be,B[be],Z),Qt!==null&&(n&&Qt.alternate!==null&&Ee.delete(Qt.key===null?be:Qt.key),M=p(Qt,M,be),Ve===null?_e=Qt:Ve.sibling=Qt,Ve=Qt);return n&&Ee.forEach(function(gr){return r(U,gr)}),Xe&&oa(U,be),_e}function ke(U,M,B,Z){if(B==null)throw Error(s(151));for(var _e=null,Ve=null,Ee=M,be=M=0,Qt=null,Ze=B.next();Ee!==null&&!Ze.done;be++,Ze=B.next()){Ee.index>be?(Qt=Ee,Ee=null):Qt=Ee.sibling;var gr=q(U,Ee,Ze.value,Z);if(gr===null){Ee===null&&(Ee=Qt);break}n&&Ee&&gr.alternate===null&&r(U,Ee),M=p(gr,M,be),Ve===null?_e=gr:Ve.sibling=gr,Ve=gr,Ee=Qt}if(Ze.done)return o(U,Ee),Xe&&oa(U,be),_e;if(Ee===null){for(;!Ze.done;be++,Ze=B.next())Ze=te(U,Ze.value,Z),Ze!==null&&(M=p(Ze,M,be),Ve===null?_e=Ze:Ve.sibling=Ze,Ve=Ze);return Xe&&oa(U,be),_e}for(Ee=u(Ee);!Ze.done;be++,Ze=B.next())Ze=W(Ee,U,be,Ze.value,Z),Ze!==null&&(n&&Ze.alternate!==null&&Ee.delete(Ze.key===null?be:Ze.key),M=p(Ze,M,be),Ve===null?_e=Ze:Ve.sibling=Ze,Ve=Ze);return n&&Ee.forEach(function(eR){return r(U,eR)}),Xe&&oa(U,be),_e}function wt(U,M,B,Z){if(typeof B=="object"&&B!==null&&B.type===m&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case c:e:{for(var _e=B.key;M!==null;){if(M.key===_e){if(_e=B.type,_e===m){if(M.tag===7){o(U,M.sibling),Z=f(M,B.props.children),Z.return=U,U=Z;break e}}else if(M.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===ee&&iy(_e)===M.type){o(U,M.sibling),Z=f(M,B.props),Gl(Z,B),Z.return=U,U=Z;break e}o(U,M);break}else r(U,M);M=M.sibling}B.type===m?(Z=ya(B.props.children,U.mode,Z,B.key),Z.return=U,U=Z):(Z=_h(B.type,B.key,B.props,null,U.mode,Z),Gl(Z,B),Z.return=U,U=Z)}return v(U);case d:e:{for(_e=B.key;M!==null;){if(M.key===_e)if(M.tag===4&&M.stateNode.containerInfo===B.containerInfo&&M.stateNode.implementation===B.implementation){o(U,M.sibling),Z=f(M,B.children||[]),Z.return=U,U=Z;break e}else{o(U,M);break}else r(U,M);M=M.sibling}Z=bp(B,U.mode,Z),Z.return=U,U=Z}return v(U);case ee:return _e=B._init,B=_e(B._payload),wt(U,M,B,Z)}if(ie(B))return ve(U,M,B,Z);if(Te(B)){if(_e=Te(B),typeof _e!="function")throw Error(s(150));return B=_e.call(B),ke(U,M,B,Z)}if(typeof B.then=="function")return wt(U,M,Xc(B),Z);if(B.$$typeof===P)return wt(U,M,dh(U,B),Z);Zc(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,M!==null&&M.tag===6?(o(U,M.sibling),Z=f(M,B),Z.return=U,U=Z):(o(U,M),Z=wp(B,U.mode,Z),Z.return=U,U=Z),v(U)):o(U,M)}return function(U,M,B,Z){try{ql=0;var _e=wt(U,M,B,Z);return fo=null,_e}catch(Ee){if(Ee===Hl)throw Ee;var Ve=li(29,Ee,null,U.mode);return Ve.lanes=Z,Ve.return=U,Ve}finally{}}}var ua=sy(!0),ry=sy(!1),po=Ne(null),Jc=Ne(0);function ay(n,r){n=Ts,Re(Jc,n),Re(po,r),Ts=n|r.baseLanes}function Od(){Re(Jc,Ts),Re(po,po.current)}function kd(){Ts=Jc.current,Oe(po),Oe(Jc)}var ri=Ne(null),Vi=null;function Js(n){var r=n.alternate;Re(Lt,Lt.current&1),Re(ri,n),Vi===null&&(r===null||po.current!==null||r.memoizedState!==null)&&(Vi=n)}function oy(n){if(n.tag===22){if(Re(Lt,Lt.current),Re(ri,n),Vi===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(Vi=n)}}else er()}function er(){Re(Lt,Lt.current),Re(ri,ri.current)}function hs(n){Oe(ri),Vi===n&&(Vi=null),Oe(Lt)}var Lt=Ne(0);function eh(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var zb=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},Hb=i.unstable_scheduleCallback,Fb=i.unstable_NormalPriority,Ut={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xd(){return{controller:new zb,data:new Map,refCount:0}}function Kl(n){n.refCount--,n.refCount===0&&Hb(Fb,function(){n.controller.abort()})}var Wl=null,Md=0,mo=0,_o=null;function qb(n,r){if(Wl===null){var o=Wl=[];Md=0,mo=Bp(),_o={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Md++,r.then(ly,ly),r}function ly(){if(--Md===0&&Wl!==null){_o!==null&&(_o.status="fulfilled");var n=Wl;Wl=null,mo=0,_o=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function Gb(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var uy=b.S;b.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&qb(n,r),uy!==null&&uy(n,r)};var ca=Ne(null);function Pd(){var n=ca.current;return n!==null?n:ht.pooledCache}function th(n,r){r===null?Re(ca,ca.current):Re(ca,r.pool)}function cy(){var n=Pd();return n===null?null:{parent:Ut._currentValue,pool:n}}var tr=0,Pe=null,at=null,Dt=null,nh=!1,go=!1,ha=!1,ih=0,Ql=0,yo=null,Kb=0;function Rt(){throw Error(s(321))}function Vd(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!Un(n[o],r[o]))return!1;return!0}function Ld(n,r,o,u,f,p){return tr=p,Pe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,b.H=n===null||n.memoizedState===null?fa:nr,ha=!1,p=o(u,f),ha=!1,go&&(p=fy(r,o,u,f)),hy(n),p}function hy(n){b.H=Li;var r=at!==null&&at.next!==null;if(tr=0,Dt=at=Pe=null,nh=!1,Ql=0,yo=null,r)throw Error(s(300));n===null||Kt||(n=n.dependencies,n!==null&&fh(n)&&(Kt=!0))}function fy(n,r,o,u){Pe=n;var f=0;do{if(go&&(yo=null),Ql=0,go=!1,25<=f)throw Error(s(301));if(f+=1,Dt=at=null,n.updateQueue!=null){var p=n.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}b.H=da,p=r(o,u)}while(go);return p}function Wb(){var n=b.H,r=n.useState()[0];return r=typeof r.then=="function"?Yl(r):r,n=n.useState()[0],(at!==null?at.memoizedState:null)!==n&&(Pe.flags|=1024),r}function Ud(){var n=ih!==0;return ih=0,n}function jd(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function Bd(n){if(nh){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}nh=!1}tr=0,Dt=at=Pe=null,go=!1,Ql=ih=0,yo=null}function Dn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?Pe.memoizedState=Dt=n:Dt=Dt.next=n,Dt}function Ot(){if(at===null){var n=Pe.alternate;n=n!==null?n.memoizedState:null}else n=at.next;var r=Dt===null?Pe.memoizedState:Dt.next;if(r!==null)Dt=r,at=n;else{if(n===null)throw Pe.alternate===null?Error(s(467)):Error(s(310));at=n,n={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},Dt===null?Pe.memoizedState=Dt=n:Dt=Dt.next=n}return Dt}var sh;sh=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Yl(n){var r=Ql;return Ql+=1,yo===null&&(yo=[]),n=ty(yo,n,r),r=Pe,(Dt===null?r.memoizedState:Dt.next)===null&&(r=r.alternate,b.H=r===null||r.memoizedState===null?fa:nr),n}function rh(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Yl(n);if(n.$$typeof===P)return pn(n)}throw Error(s(438,String(n)))}function zd(n){var r=null,o=Pe.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Pe.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=sh(),Pe.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=se;return r.index++,o}function fs(n,r){return typeof r=="function"?r(n):r}function ah(n){var r=Ot();return Hd(r,at,n)}function Hd(n,r,o){var u=n.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=n.baseQueue,p=u.pending;if(p!==null){if(f!==null){var v=f.next;f.next=p.next,p.next=v}r.baseQueue=f=p,u.pending=null}if(p=n.baseState,f===null)n.memoizedState=p;else{r=f.next;var A=v=null,N=null,V=r,Q=!1;do{var te=V.lane&-536870913;if(te!==V.lane?(Ke&te)===te:(tr&te)===te){var q=V.revertLane;if(q===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),te===mo&&(Q=!0);else if((tr&q)===q){V=V.next,q===mo&&(Q=!0);continue}else te={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},N===null?(A=N=te,v=p):N=N.next=te,Pe.lanes|=q,hr|=q;te=V.action,ha&&o(p,te),p=V.hasEagerState?V.eagerState:o(p,te)}else q={lane:te,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},N===null?(A=N=q,v=p):N=N.next=q,Pe.lanes|=te,hr|=te;V=V.next}while(V!==null&&V!==r);if(N===null?v=p:N.next=A,!Un(p,n.memoizedState)&&(Kt=!0,Q&&(o=_o,o!==null)))throw o;n.memoizedState=p,n.baseState=v,n.baseQueue=N,u.lastRenderedState=p}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Fd(n){var r=Ot(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,p=r.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do p=n(p,v.action),v=v.next;while(v!==f);Un(p,r.memoizedState)||(Kt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function dy(n,r,o){var u=Pe,f=Ot(),p=Xe;if(p){if(o===void 0)throw Error(s(407));o=o()}else o=r();var v=!Un((at||f).memoizedState,o);if(v&&(f.memoizedState=o,Kt=!0),f=f.queue,Kd(_y.bind(null,u,f,n),[n]),f.getSnapshot!==r||v||Dt!==null&&Dt.memoizedState.tag&1){if(u.flags|=2048,vo(9,my.bind(null,u,f,o,r),{destroy:void 0},null),ht===null)throw Error(s(349));p||(tr&60)!==0||py(u,r,o)}return o}function py(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Pe.updateQueue,r===null?(r=sh(),Pe.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function my(n,r,o,u){r.value=o,r.getSnapshot=u,gy(r)&&yy(n)}function _y(n,r,o){return o(function(){gy(r)&&yy(n)})}function gy(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!Un(n,o)}catch{return!0}}function yy(n){var r=Zs(n,2);r!==null&&In(r,n,2)}function qd(n){var r=Dn();if(typeof n=="function"){var o=n;if(n=o(),ha){wi(!0);try{o()}finally{wi(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:n},r}function vy(n,r,o,u){return n.baseState=o,Hd(n,at,typeof u=="function"?u:fs)}function Qb(n,r,o,u,f){if(uh(n))throw Error(s(485));if(n=r.action,n!==null){var p={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){p.listeners.push(v)}};b.T!==null?o(!0):p.isTransition=!1,u(p),o=r.pending,o===null?(p.next=r.pending=p,Ey(r,p)):(p.next=o.next,r.pending=o.next=p)}}function Ey(n,r){var o=r.action,u=r.payload,f=n.state;if(r.isTransition){var p=b.T,v={};b.T=v;try{var A=o(f,u),N=b.S;N!==null&&N(v,A),Ty(n,r,A)}catch(V){Gd(n,r,V)}finally{b.T=p}}else try{p=o(f,u),Ty(n,r,p)}catch(V){Gd(n,r,V)}}function Ty(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Sy(n,r,u)},function(u){return Gd(n,r,u)}):Sy(n,r,o)}function Sy(n,r,o){r.status="fulfilled",r.value=o,Ay(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,Ey(n,o)))}function Gd(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Ay(r),r=r.next;while(r!==u)}n.action=null}function Ay(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function wy(n,r){return r}function by(n,r){if(Xe){var o=ht.formState;if(o!==null){e:{var u=Pe;if(Xe){if(nn){t:{for(var f=nn,p=Pi;f.nodeType!==8;){if(!p){f=null;break t}if(f=yi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){nn=yi(f.nextSibling),u=f.data==="F!";break e}}la(u)}u=!1}u&&(r=o[0])}}return o=Dn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wy,lastRenderedState:r},o.queue=u,o=Fy.bind(null,Pe,u),u.dispatch=o,u=qd(!1),p=Xd.bind(null,Pe,!1,u.queue),u=Dn(),f={state:r,dispatch:null,action:n,pending:null},u.queue=f,o=Qb.bind(null,Pe,f,p,o),f.dispatch=o,u.memoizedState=n,[r,o,!1]}function Cy(n){var r=Ot();return Ry(r,at,n)}function Ry(n,r,o){r=Hd(n,r,wy)[0],n=ah(fs)[0],r=typeof r=="object"&&r!==null&&typeof r.then=="function"?Yl(r):r;var u=Ot(),f=u.queue,p=f.dispatch;return o!==u.memoizedState&&(Pe.flags|=2048,vo(9,Yb.bind(null,f,o),{destroy:void 0},null)),[r,p,n]}function Yb(n,r){n.action=r}function Iy(n){var r=Ot(),o=at;if(o!==null)return Ry(r,o,n);Ot(),r=r.memoizedState,o=Ot();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function vo(n,r,o,u){return n={tag:n,create:r,inst:o,deps:u,next:null},r=Pe.updateQueue,r===null&&(r=sh(),Pe.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function Ny(){return Ot().memoizedState}function oh(n,r,o,u){var f=Dn();Pe.flags|=n,f.memoizedState=vo(1|r,o,{destroy:void 0},u===void 0?null:u)}function lh(n,r,o,u){var f=Ot();u=u===void 0?null:u;var p=f.memoizedState.inst;at!==null&&u!==null&&Vd(u,at.memoizedState.deps)?f.memoizedState=vo(r,o,p,u):(Pe.flags|=n,f.memoizedState=vo(1|r,o,p,u))}function Dy(n,r){oh(8390656,8,n,r)}function Kd(n,r){lh(2048,8,n,r)}function Oy(n,r){return lh(4,2,n,r)}function ky(n,r){return lh(4,4,n,r)}function xy(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function My(n,r,o){o=o!=null?o.concat([n]):null,lh(4,4,xy.bind(null,r,n),o)}function Wd(){}function Py(n,r){var o=Ot();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Vd(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Vy(n,r){var o=Ot();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Vd(r,u[1]))return u[0];if(u=n(),ha){wi(!0);try{n()}finally{wi(!1)}}return o.memoizedState=[u,r],u}function Qd(n,r,o){return o===void 0||(tr&1073741824)!==0?n.memoizedState=r:(n.memoizedState=o,n=Uv(),Pe.lanes|=n,hr|=n,o)}function Ly(n,r,o,u){return Un(o,r)?o:po.current!==null?(n=Qd(n,o,u),Un(n,r)||(Kt=!0),n):(tr&42)===0?(Kt=!0,n.memoizedState=o):(n=Uv(),Pe.lanes|=n,hr|=n,r)}function Uy(n,r,o,u,f){var p=fe.p;fe.p=p!==0&&8>p?p:8;var v=b.T,A={};b.T=A,Xd(n,!1,r,o);try{var N=f(),V=b.S;if(V!==null&&V(A,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var Q=Gb(N,u);$l(n,r,Q,Hn(n))}else $l(n,r,u,Hn(n))}catch(te){$l(n,r,{then:function(){},status:"rejected",reason:te},Hn())}finally{fe.p=p,b.T=v}}function $b(){}function Yd(n,r,o,u){if(n.tag!==5)throw Error(s(476));var f=jy(n).queue;Uy(n,f,r,ge,o===null?$b:function(){return By(n),o(u)})}function jy(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:ge,baseState:ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:ge},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function By(n){var r=jy(n).next.queue;$l(n,r,{},Hn())}function $d(){return pn(_u)}function zy(){return Ot().memoizedState}function Hy(){return Ot().memoizedState}function Xb(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=Hn();n=rr(o);var u=ar(r,n,o);u!==null&&(In(u,r,o),Jl(u,r,o)),r={cache:xd()},n.payload=r;return}r=r.return}}function Zb(n,r,o){var u=Hn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},uh(n)?qy(r,o):(o=Cd(n,r,o,u),o!==null&&(In(o,n,u),Gy(o,r,u)))}function Fy(n,r,o){var u=Hn();$l(n,r,o,u)}function $l(n,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(uh(n))qy(r,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,A=p(v,o);if(f.hasEagerState=!0,f.eagerState=A,Un(A,v))return Kc(n,r,f,0),ht===null&&Gc(),!1}catch{}finally{}if(o=Cd(n,r,f,u),o!==null)return In(o,n,u),Gy(o,r,u),!0}return!1}function Xd(n,r,o,u){if(u={lane:2,revertLane:Bp(),action:u,hasEagerState:!1,eagerState:null,next:null},uh(n)){if(r)throw Error(s(479))}else r=Cd(n,o,u,2),r!==null&&In(r,n,2)}function uh(n){var r=n.alternate;return n===Pe||r!==null&&r===Pe}function qy(n,r){go=nh=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Gy(n,r,o){if((o&4194176)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Hs(n,o)}}var Li={readContext:pn,use:rh,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useLayoutEffect:Rt,useInsertionEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useSyncExternalStore:Rt,useId:Rt};Li.useCacheRefresh=Rt,Li.useMemoCache=Rt,Li.useHostTransitionStatus=Rt,Li.useFormState=Rt,Li.useActionState=Rt,Li.useOptimistic=Rt;var fa={readContext:pn,use:rh,useCallback:function(n,r){return Dn().memoizedState=[n,r===void 0?null:r],n},useContext:pn,useEffect:Dy,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,oh(4194308,4,xy.bind(null,r,n),o)},useLayoutEffect:function(n,r){return oh(4194308,4,n,r)},useInsertionEffect:function(n,r){oh(4,2,n,r)},useMemo:function(n,r){var o=Dn();r=r===void 0?null:r;var u=n();if(ha){wi(!0);try{n()}finally{wi(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=Dn();if(o!==void 0){var f=o(r);if(ha){wi(!0);try{o(r)}finally{wi(!1)}}}else f=r;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=Zb.bind(null,Pe,n),[u.memoizedState,n]},useRef:function(n){var r=Dn();return n={current:n},r.memoizedState=n},useState:function(n){n=qd(n);var r=n.queue,o=Fy.bind(null,Pe,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:Wd,useDeferredValue:function(n,r){var o=Dn();return Qd(o,n,r)},useTransition:function(){var n=qd(!1);return n=Uy.bind(null,Pe,n.queue,!0,!1),Dn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=Pe,f=Dn();if(Xe){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ht===null)throw Error(s(349));(Ke&60)!==0||py(u,r,o)}f.memoizedState=o;var p={value:o,getSnapshot:r};return f.queue=p,Dy(_y.bind(null,u,p,n),[n]),u.flags|=2048,vo(9,my.bind(null,u,p,o,r),{destroy:void 0},null),o},useId:function(){var n=Dn(),r=ht.identifierPrefix;if(Xe){var o=cs,u=us;o=(u&~(1<<32-wn(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=ih++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Kb++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},useCacheRefresh:function(){return Dn().memoizedState=Xb.bind(null,Pe)}};fa.useMemoCache=zd,fa.useHostTransitionStatus=$d,fa.useFormState=by,fa.useActionState=by,fa.useOptimistic=function(n){var r=Dn();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Xd.bind(null,Pe,!0,o),o.dispatch=r,[n,r]};var nr={readContext:pn,use:rh,useCallback:Py,useContext:pn,useEffect:Kd,useImperativeHandle:My,useInsertionEffect:Oy,useLayoutEffect:ky,useMemo:Vy,useReducer:ah,useRef:Ny,useState:function(){return ah(fs)},useDebugValue:Wd,useDeferredValue:function(n,r){var o=Ot();return Ly(o,at.memoizedState,n,r)},useTransition:function(){var n=ah(fs)[0],r=Ot().memoizedState;return[typeof n=="boolean"?n:Yl(n),r]},useSyncExternalStore:dy,useId:zy};nr.useCacheRefresh=Hy,nr.useMemoCache=zd,nr.useHostTransitionStatus=$d,nr.useFormState=Cy,nr.useActionState=Cy,nr.useOptimistic=function(n,r){var o=Ot();return vy(o,at,n,r)};var da={readContext:pn,use:rh,useCallback:Py,useContext:pn,useEffect:Kd,useImperativeHandle:My,useInsertionEffect:Oy,useLayoutEffect:ky,useMemo:Vy,useReducer:Fd,useRef:Ny,useState:function(){return Fd(fs)},useDebugValue:Wd,useDeferredValue:function(n,r){var o=Ot();return at===null?Qd(o,n,r):Ly(o,at.memoizedState,n,r)},useTransition:function(){var n=Fd(fs)[0],r=Ot().memoizedState;return[typeof n=="boolean"?n:Yl(n),r]},useSyncExternalStore:dy,useId:zy};da.useCacheRefresh=Hy,da.useMemoCache=zd,da.useHostTransitionStatus=$d,da.useFormState=Iy,da.useActionState=Iy,da.useOptimistic=function(n,r){var o=Ot();return at!==null?vy(o,at,n,r):(o.baseState=n,[n,o.queue.dispatch])};function Zd(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:I({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Jd={isMounted:function(n){return(n=n._reactInternals)?ae(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Hn(),f=rr(u);f.payload=r,o!=null&&(f.callback=o),r=ar(n,f,u),r!==null&&(In(r,n,u),Jl(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Hn(),f=rr(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=ar(n,f,u),r!==null&&(In(r,n,u),Jl(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Hn(),u=rr(o);u.tag=2,r!=null&&(u.callback=r),r=ar(n,u,o),r!==null&&(In(r,n,o),Jl(r,n,o))}};function Ky(n,r,o,u,f,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,v):r.prototype&&r.prototype.isPureReactComponent?!Ll(o,u)||!Ll(f,p):!0}function Wy(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&Jd.enqueueReplaceState(r,r.state,null)}function pa(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=I({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var ch=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Qy(n){ch(n)}function Yy(n){console.error(n)}function $y(n){ch(n)}function hh(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function Xy(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ep(n,r,o){return o=rr(o),o.tag=3,o.payload={element:null},o.callback=function(){hh(n,r)},o}function Zy(n){return n=rr(n),n.tag=3,n}function Jy(n,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var p=u.value;n.payload=function(){return f(p)},n.callback=function(){Xy(r,o,u)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(n.callback=function(){Xy(r,o,u),typeof f!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var A=u.stack;this.componentDidCatch(u.value,{componentStack:A!==null?A:""})})}function Jb(n,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Zl(r,o,f,!0),o=ri.current,o!==null){switch(o.tag){case 13:return Vi===null?Pp():o.alternate===null&&At===0&&(At=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Dd?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Lp(n,u,f)),!1;case 22:return o.flags|=65536,u===Dd?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Lp(n,u,f)),!1}throw Error(s(435,o.tag))}return Lp(n,u,f),Pp(),!1}if(Xe)return r=ri.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Nd&&(n=Error(s(422),{cause:u}),zl(ni(n,o)))):(u!==Nd&&(r=Error(s(423),{cause:u}),zl(ni(r,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=ni(u,o),f=ep(n.stateNode,u,f),mp(n,f),At!==4&&(At=2)),!1;var p=Error(s(520),{cause:u});if(p=ni(p,o),ou===null?ou=[p]:ou.push(p),At!==4&&(At=2),r===null)return!0;u=ni(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=ep(o.stateNode,u,n),mp(o,n),!1;case 1:if(r=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(fr===null||!fr.has(p))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Zy(f),Jy(f,n,o,u),mp(o,f),!1}o=o.return}while(o!==null);return!1}var ev=Error(s(461)),Kt=!1;function sn(n,r,o,u){r.child=n===null?ry(r,null,o,u):ua(r,n.child,o,u)}function tv(n,r,o,u,f){o=o.render;var p=r.ref;if("ref"in u){var v={};for(var A in u)A!=="ref"&&(v[A]=u[A])}else v=u;return _a(r),u=Ld(n,r,o,v,p,f),A=Ud(),n!==null&&!Kt?(jd(n,r,f),ds(n,r,f)):(Xe&&A&&Rd(r),r.flags|=1,sn(n,r,u,f),r.child)}function nv(n,r,o,u,f){if(n===null){var p=o.type;return typeof p=="function"&&!Ap(p)&&p.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=p,iv(n,r,p,u,f)):(n=_h(o.type,null,u,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!up(n,f)){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:Ll,o(v,u)&&n.ref===r.ref)return ds(n,r,f)}return r.flags|=1,n=cr(p,u),n.ref=r.ref,n.return=r,r.child=n}function iv(n,r,o,u,f){if(n!==null){var p=n.memoizedProps;if(Ll(p,u)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=u=p,up(n,f))(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,ds(n,r,f)}return tp(n,r,o,u,f)}function sv(n,r,o){var u=r.pendingProps,f=u.children,p=(r.stateNode._pendingVisibility&2)!==0,v=n!==null?n.memoizedState:null;if(Xl(n,r),u.mode==="hidden"||p){if((r.flags&128)!==0){if(u=v!==null?v.baseLanes|o:o,n!==null){for(f=r.child=n.child,p=0;f!==null;)p=p|f.lanes|f.childLanes,f=f.sibling;r.childLanes=p&~u}else r.childLanes=0,r.child=null;return rv(n,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&th(r,v!==null?v.cachePool:null),v!==null?ay(r,v):Od(),oy(r);else return r.lanes=r.childLanes=536870912,rv(n,r,v!==null?v.baseLanes|o:o,o)}else v!==null?(th(r,v.cachePool),ay(r,v),er(),r.memoizedState=null):(n!==null&&th(r,null),Od(),er());return sn(n,r,f,o),r.child}function rv(n,r,o,u){var f=Pd();return f=f===null?null:{parent:Ut._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},n!==null&&th(r,null),Od(),oy(r),n!==null&&Zl(n,r,u,!0),null}function Xl(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=2097664);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(n===null||n.ref!==o)&&(r.flags|=2097664)}}function tp(n,r,o,u,f){return _a(r),o=Ld(n,r,o,u,void 0,f),u=Ud(),n!==null&&!Kt?(jd(n,r,f),ds(n,r,f)):(Xe&&u&&Rd(r),r.flags|=1,sn(n,r,o,f),r.child)}function av(n,r,o,u,f,p){return _a(r),r.updateQueue=null,o=fy(r,u,o,f),hy(n),u=Ud(),n!==null&&!Kt?(jd(n,r,p),ds(n,r,p)):(Xe&&u&&Rd(r),r.flags|=1,sn(n,r,o,p),r.child)}function ov(n,r,o,u,f){if(_a(r),r.stateNode===null){var p=uo,v=o.contextType;typeof v=="object"&&v!==null&&(p=pn(v)),p=new o(u,p),r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Jd,r.stateNode=p,p._reactInternals=r,p=r.stateNode,p.props=u,p.state=r.memoizedState,p.refs={},dp(r),v=o.contextType,p.context=typeof v=="object"&&v!==null?pn(v):uo,p.state=r.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Zd(r,o,v,u),p.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(v=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),v!==p.state&&Jd.enqueueReplaceState(p,p.state,null),tu(r,u,p,f),eu(),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){p=r.stateNode;var A=r.memoizedProps,N=pa(o,A);p.props=N;var V=p.context,Q=o.contextType;v=uo,typeof Q=="object"&&Q!==null&&(v=pn(Q));var te=o.getDerivedStateFromProps;Q=typeof te=="function"||typeof p.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,Q||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(A||V!==v)&&Wy(r,p,u,v),sr=!1;var q=r.memoizedState;p.state=q,tu(r,u,p,f),eu(),V=r.memoizedState,A||q!==V||sr?(typeof te=="function"&&(Zd(r,o,te,u),V=r.memoizedState),(N=sr||Ky(r,o,N,u,q,V,v))?(Q||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=V),p.props=u,p.state=V,p.context=v,u=N):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{p=r.stateNode,pp(n,r),v=r.memoizedProps,Q=pa(o,v),p.props=Q,te=r.pendingProps,q=p.context,V=o.contextType,N=uo,typeof V=="object"&&V!==null&&(N=pn(V)),A=o.getDerivedStateFromProps,(V=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(v!==te||q!==N)&&Wy(r,p,u,N),sr=!1,q=r.memoizedState,p.state=q,tu(r,u,p,f),eu();var W=r.memoizedState;v!==te||q!==W||sr||n!==null&&n.dependencies!==null&&fh(n.dependencies)?(typeof A=="function"&&(Zd(r,o,A,u),W=r.memoizedState),(Q=sr||Ky(r,o,Q,u,q,W,N)||n!==null&&n.dependencies!==null&&fh(n.dependencies))?(V||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,W,N),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,W,N)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||v===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=W),p.props=u,p.state=W,p.context=N,u=Q):(typeof p.componentDidUpdate!="function"||v===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),u=!1)}return p=u,Xl(n,r),u=(r.flags&128)!==0,p||u?(p=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),r.flags|=1,n!==null&&u?(r.child=ua(r,n.child,null,f),r.child=ua(r,null,o,f)):sn(n,r,o,f),r.memoizedState=p.state,n=r.child):n=ds(n,r,f),n}function lv(n,r,o,u){return Bl(),r.flags|=256,sn(n,r,o,u),r.child}var np={dehydrated:null,treeContext:null,retryLane:0};function ip(n){return{baseLanes:n,cachePool:cy()}}function sp(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=ui),n}function uv(n,r,o){var u=r.pendingProps,f=!1,p=(r.flags&128)!==0,v;if((v=p)||(v=n!==null&&n.memoizedState===null?!1:(Lt.current&2)!==0),v&&(f=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,n===null){if(Xe){if(f?Js(r):er(),Xe){var A=nn,N;if(N=A){e:{for(N=A,A=Pi;N.nodeType!==8;){if(!A){A=null;break e}if(N=yi(N.nextSibling),N===null){A=null;break e}}A=N}A!==null?(r.memoizedState={dehydrated:A,treeContext:aa!==null?{id:us,overflow:cs}:null,retryLane:536870912},N=li(18,null,null,0),N.stateNode=A,N.return=r,r.child=N,Rn=r,nn=null,N=!0):N=!1}N||la(r)}if(A=r.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?r.lanes=16:r.lanes=536870912,null;hs(r)}return A=u.children,u=u.fallback,f?(er(),f=r.mode,A=ap({mode:"hidden",children:A},f),u=ya(u,f,o,null),A.return=r,u.return=r,A.sibling=u,r.child=A,f=r.child,f.memoizedState=ip(o),f.childLanes=sp(n,v,o),r.memoizedState=np,u):(Js(r),rp(r,A))}if(N=n.memoizedState,N!==null&&(A=N.dehydrated,A!==null)){if(p)r.flags&256?(Js(r),r.flags&=-257,r=op(n,r,o)):r.memoizedState!==null?(er(),r.child=n.child,r.flags|=128,r=null):(er(),f=u.fallback,A=r.mode,u=ap({mode:"visible",children:u.children},A),f=ya(f,A,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,ua(r,n.child,null,o),u=r.child,u.memoizedState=ip(o),u.childLanes=sp(n,v,o),r.memoizedState=np,r=f);else if(Js(r),A.data==="$!"){if(v=A.nextSibling&&A.nextSibling.dataset,v)var V=v.dgst;v=V,u=Error(s(419)),u.stack="",u.digest=v,zl({value:u,source:null,stack:null}),r=op(n,r,o)}else if(Kt||Zl(n,r,o,!1),v=(o&n.childLanes)!==0,Kt||v){if(v=ht,v!==null){if(u=o&-o,(u&42)!==0)u=1;else switch(u){case 2:u=1;break;case 8:u=4;break;case 32:u=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:u=64;break;case 268435456:u=134217728;break;default:u=0}if(u=(u&(v.suspendedLanes|o))!==0?0:u,u!==0&&u!==N.retryLane)throw N.retryLane=u,Zs(n,u),In(v,n,u),ev}A.data==="$?"||Pp(),r=op(n,r,o)}else A.data==="$?"?(r.flags|=128,r.child=n.child,r=pC.bind(null,n),A._reactRetry=r,r=null):(n=N.treeContext,nn=yi(A.nextSibling),Rn=r,Xe=!0,_i=null,Pi=!1,n!==null&&(ii[si++]=us,ii[si++]=cs,ii[si++]=aa,us=n.id,cs=n.overflow,aa=r),r=rp(r,u.children),r.flags|=4096);return r}return f?(er(),f=u.fallback,A=r.mode,N=n.child,V=N.sibling,u=cr(N,{mode:"hidden",children:u.children}),u.subtreeFlags=N.subtreeFlags&31457280,V!==null?f=cr(V,f):(f=ya(f,A,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,A=n.child.memoizedState,A===null?A=ip(o):(N=A.cachePool,N!==null?(V=Ut._currentValue,N=N.parent!==V?{parent:V,pool:V}:N):N=cy(),A={baseLanes:A.baseLanes|o,cachePool:N}),f.memoizedState=A,f.childLanes=sp(n,v,o),r.memoizedState=np,u):(Js(r),o=n.child,n=o.sibling,o=cr(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(v=r.deletions,v===null?(r.deletions=[n],r.flags|=16):v.push(n)),r.child=o,r.memoizedState=null,o)}function rp(n,r){return r=ap({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function ap(n,r){return Pv(n,r,0,null)}function op(n,r,o){return ua(r,n.child,null,o),n=rp(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function cv(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),hp(n.return,r,o)}function lp(n,r,o,u,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function hv(n,r,o){var u=r.pendingProps,f=u.revealOrder,p=u.tail;if(sn(n,r,u.children,o),u=Lt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&cv(n,o,r);else if(n.tag===19)cv(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(Re(Lt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)n=o.alternate,n!==null&&eh(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),lp(r,!1,f,o,p);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&eh(n)===null){r.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}lp(r,!0,o,null,p);break;case"together":lp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ds(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),hr|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(Zl(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,o=cr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=cr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function up(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&fh(n)))}function eC(n,r,o){switch(r.tag){case 3:Ai(r,r.stateNode.containerInfo),ir(r,Ut,n.memoizedState.cache),Bl();break;case 27:case 5:Xi(r);break;case 4:Ai(r,r.stateNode.containerInfo);break;case 10:ir(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Js(r),r.flags|=128,null):(o&r.child.childLanes)!==0?uv(n,r,o):(Js(r),n=ds(n,r,o),n!==null?n.sibling:null);Js(r);break;case 19:var f=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Zl(n,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return hv(n,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Re(Lt,Lt.current),u)break;return null;case 22:case 23:return r.lanes=0,sv(n,r,o);case 24:ir(r,Ut,n.memoizedState.cache)}return ds(n,r,o)}function fv(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)Kt=!0;else{if(!up(n,o)&&(r.flags&128)===0)return Kt=!1,eC(n,r,o);Kt=(n.flags&131072)!==0}else Kt=!1,Xe&&(r.flags&1048576)!==0&&$g(r,Yc,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")Ap(u)?(n=pa(u,n),r.tag=1,r=ov(null,r,u,n,o)):(r.tag=0,r=tp(null,r,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===z){r.tag=11,r=tv(null,r,u,n,o);break e}else if(f===Y){r.tag=14,r=nv(null,r,u,n,o);break e}}throw r=R(u)||u,Error(s(306,r,""))}}return r;case 0:return tp(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=pa(u,r.pendingProps),ov(n,r,u,f,o);case 3:e:{if(Ai(r,r.stateNode.containerInfo),n===null)throw Error(s(387));var p=r.pendingProps;f=r.memoizedState,u=f.element,pp(n,r),tu(r,p,null,o);var v=r.memoizedState;if(p=v.cache,ir(r,Ut,p),p!==f.cache&&fp(r,[Ut],o,!0),eu(),p=v.element,f.isDehydrated)if(f={element:p,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=lv(n,r,p,o);break e}else if(p!==u){u=ni(Error(s(424)),r),zl(u),r=lv(n,r,p,o);break e}else for(nn=yi(r.stateNode.containerInfo.firstChild),Rn=r,Xe=!0,_i=null,Pi=!0,o=ry(r,null,p,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Bl(),p===u){r=ds(n,r,o);break e}sn(n,r,p,o)}r=r.child}return r;case 26:return Xl(n,r),n===null?(o=mE(r.type,null,r.pendingProps,null))?r.memoizedState=o:Xe||(o=r.type,n=r.pendingProps,u=Ih(fn.current).createElement(o),u[Ft]=r,u[Mt]=n,rn(u,o,n),gt(u),r.stateNode=u):r.memoizedState=mE(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Xi(r),n===null&&Xe&&(u=r.stateNode=fE(r.type,r.pendingProps,fn.current),Rn=r,Pi=!0,nn=yi(u.firstChild)),u=r.pendingProps.children,n!==null||Xe?sn(n,r,u,o):r.child=ua(r,null,u,o),Xl(n,r),r.child;case 5:return n===null&&Xe&&((f=u=nn)&&(u=DC(u,r.type,r.pendingProps,Pi),u!==null?(r.stateNode=u,Rn=r,nn=yi(u.firstChild),Pi=!1,f=!0):f=!1),f||la(r)),Xi(r),f=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,u=p.children,Yp(f,p)?u=null:v!==null&&Yp(f,v)&&(r.flags|=32),r.memoizedState!==null&&(f=Ld(n,r,Wb,null,null,o),_u._currentValue=f),Xl(n,r),sn(n,r,u,o),r.child;case 6:return n===null&&Xe&&((n=o=nn)&&(o=OC(o,r.pendingProps,Pi),o!==null?(r.stateNode=o,Rn=r,nn=null,n=!0):n=!1),n||la(r)),null;case 13:return uv(n,r,o);case 4:return Ai(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=ua(r,null,u,o):sn(n,r,u,o),r.child;case 11:return tv(n,r,r.type,r.pendingProps,o);case 7:return sn(n,r,r.pendingProps,o),r.child;case 8:return sn(n,r,r.pendingProps.children,o),r.child;case 12:return sn(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,ir(r,r.type,u.value),sn(n,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,_a(r),f=pn(f),u=u(f),r.flags|=1,sn(n,r,u,o),r.child;case 14:return nv(n,r,r.type,r.pendingProps,o);case 15:return iv(n,r,r.type,r.pendingProps,o);case 19:return hv(n,r,o);case 22:return sv(n,r,o);case 24:return _a(r),u=pn(Ut),n===null?(f=Pd(),f===null&&(f=ht,p=xd(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=o),f=p),r.memoizedState={parent:u,cache:f},dp(r),ir(r,Ut,f)):((n.lanes&o)!==0&&(pp(n,r),tu(r,null,null,o),eu()),f=n.memoizedState,p=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),ir(r,Ut,u)):(u=p.cache,ir(r,Ut,u),u!==f.cache&&fp(r,[Ut],o,!0))),sn(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}var cp=Ne(null),ma=null,ps=null;function ir(n,r,o){Re(cp,r._currentValue),r._currentValue=o}function ms(n){n._currentValue=cp.current,Oe(cp)}function hp(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function fp(n,r,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var p=f.dependencies;if(p!==null){var v=f.child;p=p.firstContext;e:for(;p!==null;){var A=p;p=f;for(var N=0;N<r.length;N++)if(A.context===r[N]){p.lanes|=o,A=p.alternate,A!==null&&(A.lanes|=o),hp(p.return,o,n),u||(v=null);break e}p=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(s(341));v.lanes|=o,p=v.alternate,p!==null&&(p.lanes|=o),hp(v,o,n),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===n){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Zl(n,r,o,u){n=null;for(var f=r,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var A=f.type;Un(f.pendingProps.value,v.value)||(n!==null?n.push(A):n=[A])}}else if(f===Pn.current){if(v=f.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(_u):n=[_u])}f=f.return}n!==null&&fp(r,n,o,u),r.flags|=262144}function fh(n){for(n=n.firstContext;n!==null;){if(!Un(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function _a(n){ma=n,ps=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function pn(n){return dv(ma,n)}function dh(n,r){return ma===null&&_a(n),dv(n,r)}function dv(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},ps===null){if(n===null)throw Error(s(308));ps=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else ps=ps.next=r;return o}var sr=!1;function dp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function rr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ar(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(vt&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=Wc(n),Qg(n,null,o),r}return Kc(n,u,r,o),Wc(n)}function Jl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194176)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Hs(n,o)}}function mp(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?f=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?f=p=r:p=p.next=r}else f=p=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var _p=!1;function eu(){if(_p){var n=_o;if(n!==null)throw n}}function tu(n,r,o,u){_p=!1;var f=n.updateQueue;sr=!1;var p=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var N=A,V=N.next;N.next=null,v===null?p=V:v.next=V,v=N;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,A=Q.lastBaseUpdate,A!==v&&(A===null?Q.firstBaseUpdate=V:A.next=V,Q.lastBaseUpdate=N))}if(p!==null){var te=f.baseState;v=0,Q=V=N=null,A=p;do{var q=A.lane&-536870913,W=q!==A.lane;if(W?(Ke&q)===q:(u&q)===q){q!==0&&q===mo&&(_p=!0),Q!==null&&(Q=Q.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var ve=n,ke=A;q=r;var wt=o;switch(ke.tag){case 1:if(ve=ke.payload,typeof ve=="function"){te=ve.call(wt,te,q);break e}te=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=ke.payload,q=typeof ve=="function"?ve.call(wt,te,q):ve,q==null)break e;te=I({},te,q);break e;case 2:sr=!0}}q=A.callback,q!==null&&(n.flags|=64,W&&(n.flags|=8192),W=f.callbacks,W===null?f.callbacks=[q]:W.push(q))}else W={lane:q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Q===null?(V=Q=W,N=te):Q=Q.next=W,v|=q;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;W=A,A=W.next,W.next=null,f.lastBaseUpdate=W,f.shared.pending=null}}while(!0);Q===null&&(N=te),f.baseState=N,f.firstBaseUpdate=V,f.lastBaseUpdate=Q,p===null&&(f.shared.lanes=0),hr|=v,n.lanes=v,n.memoizedState=te}}function pv(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function mv(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)pv(o[n],r)}function nu(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var p=o.create,v=o.inst;u=p(),v.destroy=u}o=o.next}while(o!==f)}}catch(A){ut(r,r.return,A)}}function or(n,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var p=f.next;u=p;do{if((u.tag&n)===n){var v=u.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=r;var N=o;try{A()}catch(V){ut(f,N,V)}}}u=u.next}while(u!==p)}}catch(V){ut(r,r.return,V)}}function _v(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{mv(r,o)}catch(u){ut(n,n.return,u)}}}function gv(n,r,o){o.props=pa(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){ut(n,r,u)}}function ga(n,r){try{var o=n.ref;if(o!==null){var u=n.stateNode;switch(n.tag){case 26:case 27:case 5:var f=u;break;default:f=u}typeof o=="function"?n.refCleanup=o(f):o.current=f}}catch(p){ut(n,r,p)}}function jn(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){ut(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ut(n,r,f)}else o.current=null}function yv(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){ut(n,n.return,f)}}function vv(n,r,o){try{var u=n.stateNode;bC(u,n.type,o,r),u[Mt]=r}catch(f){ut(n,n.return,f)}}function Ev(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function gp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ev(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function yp(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Rh));else if(u!==4&&u!==27&&(n=n.child,n!==null))for(yp(n,r,o),n=n.sibling;n!==null;)yp(n,r,o),n=n.sibling}function ph(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&u!==27&&(n=n.child,n!==null))for(ph(n,r,o),n=n.sibling;n!==null;)ph(n,r,o),n=n.sibling}var _s=!1,St=!1,vp=!1,Tv=typeof WeakSet=="function"?WeakSet:Set,Wt=null,Sv=!1;function tC(n,r){if(n=n.containerInfo,Wp=Mh,n=jg(n),Td(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,A=-1,N=-1,V=0,Q=0,te=n,q=null;t:for(;;){for(var W;te!==o||f!==0&&te.nodeType!==3||(A=v+f),te!==p||u!==0&&te.nodeType!==3||(N=v+u),te.nodeType===3&&(v+=te.nodeValue.length),(W=te.firstChild)!==null;)q=te,te=W;for(;;){if(te===n)break t;if(q===o&&++V===f&&(A=v),q===p&&++Q===u&&(N=v),(W=te.nextSibling)!==null)break;te=q,q=te.parentNode}te=W}o=A===-1||N===-1?null:{start:A,end:N}}else o=null}o=o||{start:0,end:0}}else o=null;for(Qp={focusedElem:n,selectionRange:o},Mh=!1,Wt=r;Wt!==null;)if(r=Wt,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Wt=n;else for(;Wt!==null;){switch(r=Wt,p=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&p!==null){n=void 0,o=r,f=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var ve=pa(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(ve,p),u.__reactInternalSnapshotBeforeUpdate=n}catch(ke){ut(o,o.return,ke)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)Zp(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Zp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,Wt=n;break}Wt=r.return}return ve=Sv,Sv=!1,ve}function Av(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:ys(n,o),u&4&&nu(5,o);break;case 1:if(ys(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(A){ut(o,o.return,A)}else{var f=pa(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(A){ut(o,o.return,A)}}u&64&&_v(o),u&512&&ga(o,o.return);break;case 3:if(ys(n,o),u&64&&(u=o.updateQueue,u!==null)){if(n=null,o.child!==null)switch(o.child.tag){case 27:case 5:n=o.child.stateNode;break;case 1:n=o.child.stateNode}try{mv(u,n)}catch(A){ut(o,o.return,A)}}break;case 26:ys(n,o),u&512&&ga(o,o.return);break;case 27:case 5:ys(n,o),r===null&&u&4&&yv(o),u&512&&ga(o,o.return);break;case 12:ys(n,o);break;case 13:ys(n,o),u&4&&Cv(n,o);break;case 22:if(f=o.memoizedState!==null||_s,!f){r=r!==null&&r.memoizedState!==null||St;var p=_s,v=St;_s=f,(St=r)&&!v?lr(n,o,(o.subtreeFlags&8772)!==0):ys(n,o),_s=p,St=v}u&512&&(o.memoizedProps.mode==="manual"?ga(o,o.return):jn(o,o.return));break;default:ys(n,o)}}function wv(n){var r=n.alternate;r!==null&&(n.alternate=null,wv(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Wr(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var kt=null,Bn=!1;function gs(n,r,o){for(o=o.child;o!==null;)bv(n,r,o),o=o.sibling}function bv(n,r,o){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Ls,o)}catch{}switch(o.tag){case 26:St||jn(o,r),gs(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:St||jn(o,r);var u=kt,f=Bn;for(kt=o.stateNode,gs(n,r,o),o=o.stateNode,r=o.attributes;r.length;)o.removeAttributeNode(r[0]);Wr(o),kt=u,Bn=f;break;case 5:St||jn(o,r);case 6:f=kt;var p=Bn;if(kt=null,gs(n,r,o),kt=f,Bn=p,kt!==null)if(Bn)try{n=kt,u=o.stateNode,n.nodeType===8?n.parentNode.removeChild(u):n.removeChild(u)}catch(v){ut(o,r,v)}else try{kt.removeChild(o.stateNode)}catch(v){ut(o,r,v)}break;case 18:kt!==null&&(Bn?(r=kt,o=o.stateNode,r.nodeType===8?Xp(r.parentNode,o):r.nodeType===1&&Xp(r,o),Eu(r)):Xp(kt,o.stateNode));break;case 4:u=kt,f=Bn,kt=o.stateNode.containerInfo,Bn=!0,gs(n,r,o),kt=u,Bn=f;break;case 0:case 11:case 14:case 15:St||or(2,o,r),St||or(4,o,r),gs(n,r,o);break;case 1:St||(jn(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&gv(o,r,u)),gs(n,r,o);break;case 21:gs(n,r,o);break;case 22:St||jn(o,r),St=(u=St)||o.memoizedState!==null,gs(n,r,o),St=u;break;default:gs(n,r,o)}}function Cv(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Eu(n)}catch(o){ut(r,r.return,o)}}function nC(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Tv),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Tv),r;default:throw Error(s(435,n.tag))}}function Ep(n,r){var o=nC(n);r.forEach(function(u){var f=mC.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function ai(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],p=n,v=r,A=v;e:for(;A!==null;){switch(A.tag){case 27:case 5:kt=A.stateNode,Bn=!1;break e;case 3:kt=A.stateNode.containerInfo,Bn=!0;break e;case 4:kt=A.stateNode.containerInfo,Bn=!0;break e}A=A.return}if(kt===null)throw Error(s(160));bv(p,v,f),kt=null,Bn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Rv(r,n),r=r.sibling}var gi=null;function Rv(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ai(r,n),oi(n),u&4&&(or(3,n,n.return),nu(3,n),or(5,n,n.return));break;case 1:ai(r,n),oi(n),u&512&&(St||o===null||jn(o,o.return)),u&64&&_s&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=gi;if(ai(r,n),oi(n),u&512&&(St||o===null||jn(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":p=f.getElementsByTagName("title")[0],(!p||p[qs]||p[Ft]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(u),f.head.insertBefore(p,f.querySelector("head > title"))),rn(p,u,o),p[Ft]=n,gt(p),u=p;break e;case"link":var v=yE("link","href",f).get(u+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(p=v[A],p.getAttribute("href")===(o.href==null?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break t}}p=f.createElement(u),rn(p,u,o),f.head.appendChild(p);break;case"meta":if(v=yE("meta","content",f).get(u+(o.content||""))){for(A=0;A<v.length;A++)if(p=v[A],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break t}}p=f.createElement(u),rn(p,u,o),f.head.appendChild(p);break;default:throw Error(s(468,u))}p[Ft]=n,gt(p),u=p}n.stateNode=u}else vE(f,n.type,n.stateNode);else n.stateNode=gE(f,u,n.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?vE(f,n.type,n.stateNode):gE(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&vv(n,n.memoizedProps,o.memoizedProps)}break;case 27:if(u&4&&n.alternate===null){f=n.stateNode,p=n.memoizedProps;try{for(var N=f.firstChild;N;){var V=N.nextSibling,Q=N.nodeName;N[qs]||Q==="HEAD"||Q==="BODY"||Q==="SCRIPT"||Q==="STYLE"||Q==="LINK"&&N.rel.toLowerCase()==="stylesheet"||f.removeChild(N),N=V}for(var te=n.type,q=f.attributes;q.length;)f.removeAttributeNode(q[0]);rn(f,te,p),f[Ft]=n,f[Mt]=p}catch(ve){ut(n,n.return,ve)}}case 5:if(ai(r,n),oi(n),u&512&&(St||o===null||jn(o,o.return)),n.flags&32){f=n.stateNode;try{Xn(f,"")}catch(ve){ut(n,n.return,ve)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,vv(n,f,o!==null?o.memoizedProps:f)),u&1024&&(vp=!0);break;case 6:if(ai(r,n),oi(n),u&4){if(n.stateNode===null)throw Error(s(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(ve){ut(n,n.return,ve)}}break;case 3:if(Oh=null,f=gi,gi=Nh(r.containerInfo),ai(r,n),gi=f,oi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Eu(r.containerInfo)}catch(ve){ut(n,n.return,ve)}vp&&(vp=!1,Iv(n));break;case 4:u=gi,gi=Nh(n.stateNode.containerInfo),ai(r,n),oi(n),gi=u;break;case 12:ai(r,n),oi(n);break;case 13:ai(r,n),oi(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Np=en()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Ep(n,u)));break;case 22:if(u&512&&(St||o===null||jn(o,o.return)),N=n.memoizedState!==null,V=o!==null&&o.memoizedState!==null,Q=_s,te=St,_s=Q||N,St=te||V,ai(r,n),St=te,_s=Q,oi(n),r=n.stateNode,r._current=n,r._visibility&=-3,r._visibility|=r._pendingVisibility&2,u&8192&&(r._visibility=N?r._visibility&-2:r._visibility|1,N&&(r=_s||St,o===null||V||r||Eo(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))e:for(o=null,r=n;;){if(r.tag===5||r.tag===26||r.tag===27){if(o===null){V=o=r;try{if(f=V.stateNode,N)p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{v=V.stateNode,A=V.memoizedProps.style;var W=A!=null&&A.hasOwnProperty("display")?A.display:null;v.style.display=W==null||typeof W=="boolean"?"":(""+W).trim()}}catch(ve){ut(V,V.return,ve)}}}else if(r.tag===6){if(o===null){V=r;try{V.stateNode.nodeValue=N?"":V.memoizedProps}catch(ve){ut(V,V.return,ve)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Ep(n,o))));break;case 19:ai(r,n),oi(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Ep(n,u)));break;case 21:break;default:ai(r,n),oi(n)}}function oi(n){var r=n.flags;if(r&2){try{if(n.tag!==27){e:{for(var o=n.return;o!==null;){if(Ev(o)){var u=o;break e}o=o.return}throw Error(s(160))}switch(u.tag){case 27:var f=u.stateNode,p=gp(n);ph(n,p,f);break;case 5:var v=u.stateNode;u.flags&32&&(Xn(v,""),u.flags&=-33);var A=gp(n);ph(n,A,v);break;case 3:case 4:var N=u.stateNode.containerInfo,V=gp(n);yp(n,V,N);break;default:throw Error(s(161))}}}catch(Q){ut(n,n.return,Q)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Iv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Iv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function ys(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Av(n,r.alternate,r),r=r.sibling}function Eo(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:or(4,r,r.return),Eo(r);break;case 1:jn(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&gv(r,r.return,o),Eo(r);break;case 26:case 27:case 5:jn(r,r.return),Eo(r);break;case 22:jn(r,r.return),r.memoizedState===null&&Eo(r);break;default:Eo(r)}n=n.sibling}}function lr(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=n,p=r,v=p.flags;switch(p.tag){case 0:case 11:case 15:lr(f,p,o),nu(4,p);break;case 1:if(lr(f,p,o),u=p,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(V){ut(u,u.return,V)}if(u=p,f=u.updateQueue,f!==null){var A=u.stateNode;try{var N=f.shared.hiddenCallbacks;if(N!==null)for(f.shared.hiddenCallbacks=null,f=0;f<N.length;f++)pv(N[f],A)}catch(V){ut(u,u.return,V)}}o&&v&64&&_v(p),ga(p,p.return);break;case 26:case 27:case 5:lr(f,p,o),o&&u===null&&v&4&&yv(p),ga(p,p.return);break;case 12:lr(f,p,o);break;case 13:lr(f,p,o),o&&v&4&&Cv(f,p);break;case 22:p.memoizedState===null&&lr(f,p,o),ga(p,p.return);break;default:lr(f,p,o)}r=r.sibling}}function Tp(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Kl(o))}function Sp(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Kl(n))}function ur(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Nv(n,r,o,u),r=r.sibling}function Nv(n,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:ur(n,r,o,u),f&2048&&nu(9,r);break;case 3:ur(n,r,o,u),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Kl(n)));break;case 12:if(f&2048){ur(n,r,o,u),n=r.stateNode;try{var p=r.memoizedProps,v=p.id,A=p.onPostCommit;typeof A=="function"&&A(v,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(N){ut(r,r.return,N)}}else ur(n,r,o,u);break;case 23:break;case 22:p=r.stateNode,r.memoizedState!==null?p._visibility&4?ur(n,r,o,u):iu(n,r):p._visibility&4?ur(n,r,o,u):(p._visibility|=4,To(n,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&Tp(r.alternate,r);break;case 24:ur(n,r,o,u),f&2048&&Sp(r.alternate,r);break;default:ur(n,r,o,u)}}function To(n,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var p=n,v=r,A=o,N=u,V=v.flags;switch(v.tag){case 0:case 11:case 15:To(p,v,A,N,f),nu(8,v);break;case 23:break;case 22:var Q=v.stateNode;v.memoizedState!==null?Q._visibility&4?To(p,v,A,N,f):iu(p,v):(Q._visibility|=4,To(p,v,A,N,f)),f&&V&2048&&Tp(v.alternate,v);break;case 24:To(p,v,A,N,f),f&&V&2048&&Sp(v.alternate,v);break;default:To(p,v,A,N,f)}r=r.sibling}}function iu(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,f=u.flags;switch(u.tag){case 22:iu(o,u),f&2048&&Tp(u.alternate,u);break;case 24:iu(o,u),f&2048&&Sp(u.alternate,u);break;default:iu(o,u)}r=r.sibling}}var su=8192;function So(n){if(n.subtreeFlags&su)for(n=n.child;n!==null;)Dv(n),n=n.sibling}function Dv(n){switch(n.tag){case 26:So(n),n.flags&su&&n.memoizedState!==null&&qC(gi,n.memoizedState,n.memoizedProps);break;case 5:So(n);break;case 3:case 4:var r=gi;gi=Nh(n.stateNode.containerInfo),So(n),gi=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=su,su=16777216,So(n),su=r):So(n));break;default:So(n)}}function Ov(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function ru(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Wt=u,xv(u,n)}Ov(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)kv(n),n=n.sibling}function kv(n){switch(n.tag){case 0:case 11:case 15:ru(n),n.flags&2048&&or(9,n,n.return);break;case 3:ru(n);break;case 12:ru(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&4&&(n.return===null||n.return.tag!==13)?(r._visibility&=-5,mh(n)):ru(n);break;default:ru(n)}}function mh(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Wt=u,xv(u,n)}Ov(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:or(8,r,r.return),mh(r);break;case 22:o=r.stateNode,o._visibility&4&&(o._visibility&=-5,mh(r));break;default:mh(r)}n=n.sibling}}function xv(n,r){for(;Wt!==null;){var o=Wt;switch(o.tag){case 0:case 11:case 15:or(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Kl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Wt=u;else e:for(o=n;Wt!==null;){u=Wt;var f=u.sibling,p=u.return;if(wv(u),u===o){Wt=null;break e}if(f!==null){f.return=p,Wt=f;break e}Wt=p}}}function iC(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,r,o,u){return new iC(n,r,o,u)}function Ap(n){return n=n.prototype,!(!n||!n.isReactComponent)}function cr(n,r){var o=n.alternate;return o===null?(o=li(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&31457280,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function Mv(n,r){n.flags&=31457282;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function _h(n,r,o,u,f,p){var v=0;if(u=n,typeof n=="function")Ap(n)&&(v=1);else if(typeof n=="string")v=HC(n,o,Zt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case m:return ya(o.children,f,p,r);case _:v=8,f|=24;break;case E:return n=li(12,o,r,f|2),n.elementType=E,n.lanes=p,n;case X:return n=li(13,o,r,f),n.elementType=X,n.lanes=p,n;case H:return n=li(19,o,r,f),n.elementType=H,n.lanes=p,n;case le:return Pv(o,f,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:case P:v=10;break e;case C:v=9;break e;case z:v=11;break e;case Y:v=14;break e;case ee:v=16,u=null;break e}v=29,o=Error(s(130,n===null?"null":typeof n,"")),u=null}return r=li(v,o,r,f),r.elementType=n,r.type=u,r.lanes=p,r}function ya(n,r,o,u){return n=li(7,n,u,r),n.lanes=o,n}function Pv(n,r,o,u){n=li(22,n,u,r),n.elementType=le,n.lanes=o;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var p=f._current;if(p===null)throw Error(s(456));if((f._pendingVisibility&2)===0){var v=Zs(p,2);v!==null&&(f._pendingVisibility|=2,In(v,p,2))}},attach:function(){var p=f._current;if(p===null)throw Error(s(456));if((f._pendingVisibility&2)!==0){var v=Zs(p,2);v!==null&&(f._pendingVisibility&=-3,In(v,p,2))}}};return n.stateNode=f,n}function wp(n,r,o){return n=li(6,n,null,r),n.lanes=o,n}function bp(n,r,o){return r=li(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function vs(n){n.flags|=4}function Vv(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!EE(r)){if(r=ri.current,r!==null&&((Ke&4194176)===Ke?Vi!==null:(Ke&62914560)!==Ke&&(Ke&536870912)===0||r!==Vi))throw Fl=Dd,Jg;n.flags|=8192}}function gh(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?Bs():536870912,n.lanes|=r,wo|=r)}function au(n,r){if(!Xe)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function yt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&31457280,u|=f.flags&31457280,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function sC(n,r,o){var u=r.pendingProps;switch(Id(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(r),null;case 1:return yt(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),ms(Ut),Qn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(jl(r)?vs(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,_i!==null&&(xp(_i),_i=null))),yt(r),null;case 26:return o=r.memoizedState,n===null?(vs(r),o!==null?(yt(r),Vv(r,o)):(yt(r),r.flags&=-16777217)):o?o!==n.memoizedState?(vs(r),yt(r),Vv(r,o)):(yt(r),r.flags&=-16777217):(n.memoizedProps!==u&&vs(r),yt(r),r.flags&=-16777217),null;case 27:K(r),o=fn.current;var f=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&vs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return yt(r),null}n=Zt.current,jl(r)?Xg(r):(n=fE(f,u,o),r.stateNode=n,vs(r))}return yt(r),null;case 5:if(K(r),o=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&vs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return yt(r),null}if(n=Zt.current,jl(r))Xg(r);else{switch(f=Ih(fn.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[Ft]=r,n[Mt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=n;e:switch(rn(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&vs(r)}}return yt(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&vs(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(n=fn.current,jl(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,f=Rn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[Ft]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||aE(n.nodeValue,o)),n||la(r)}else n=Ih(n).createTextNode(u),n[Ft]=r,r.stateNode=n}return yt(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=jl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Ft]=r}else Bl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;yt(r),f=!1}else _i!==null&&(xp(_i),_i=null),f=!0;if(!f)return r.flags&256?(hs(r),r):(hs(r),null)}if(hs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==f&&(u.flags|=2048)}return o!==n&&o&&(r.child.flags|=8192),gh(r,r.updateQueue),yt(r),null;case 4:return Qn(),n===null&&qp(r.stateNode.containerInfo),yt(r),null;case 10:return ms(r.type),yt(r),null;case 19:if(Oe(Lt),f=r.memoizedState,f===null)return yt(r),null;if(u=(r.flags&128)!==0,p=f.rendering,p===null)if(u)au(f,!1);else{if(At!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(p=eh(n),p!==null){for(r.flags|=128,au(f,!1),n=p.updateQueue,r.updateQueue=n,gh(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)Mv(o,n),o=o.sibling;return Re(Lt,Lt.current&1|2),r.child}n=n.sibling}f.tail!==null&&en()>yh&&(r.flags|=128,u=!0,au(f,!1),r.lanes=4194304)}else{if(!u)if(n=eh(p),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,gh(r,n),au(f,!0),f.tail===null&&f.tailMode==="hidden"&&!p.alternate&&!Xe)return yt(r),null}else 2*en()-f.renderingStartTime>yh&&o!==536870912&&(r.flags|=128,u=!0,au(f,!1),r.lanes=4194304);f.isBackwards?(p.sibling=r.child,r.child=p):(n=f.last,n!==null?n.sibling=p:r.child=p,f.last=p)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=en(),r.sibling=null,n=Lt.current,Re(Lt,u?n&1|2:n&1),r):(yt(r),null);case 22:case 23:return hs(r),kd(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(yt(r),r.subtreeFlags&6&&(r.flags|=8192)):yt(r),o=r.updateQueue,o!==null&&gh(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&Oe(ca),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),ms(Ut),yt(r),null;case 25:return null}throw Error(s(156,r.tag))}function rC(n,r){switch(Id(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ms(Ut),Qn(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return K(r),null;case 13:if(hs(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Bl()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Oe(Lt),null;case 4:return Qn(),null;case 10:return ms(r.type),null;case 22:case 23:return hs(r),kd(),n!==null&&Oe(ca),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return ms(Ut),null;case 25:return null;default:return null}}function Lv(n,r){switch(Id(r),r.tag){case 3:ms(Ut),Qn();break;case 26:case 27:case 5:K(r);break;case 4:Qn();break;case 13:hs(r);break;case 19:Oe(Lt);break;case 10:ms(r.type);break;case 22:case 23:hs(r),kd(),n!==null&&Oe(ca);break;case 24:ms(Ut)}}var aC={getCacheForType:function(n){var r=pn(Ut),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o}},oC=typeof WeakMap=="function"?WeakMap:Map,vt=0,ht=null,Ue=null,Ke=0,ft=0,zn=null,Es=!1,Ao=!1,Cp=!1,Ts=0,At=0,hr=0,va=0,Rp=0,ui=0,wo=0,ou=null,Ui=null,Ip=!1,Np=0,yh=1/0,vh=null,fr=null,Eh=!1,Ea=null,lu=0,Dp=0,Op=null,uu=0,kp=null;function Hn(){if((vt&2)!==0&&Ke!==0)return Ke&-Ke;if(b.T!==null){var n=mo;return n!==0?n:Bp()}return Cc()}function Uv(){ui===0&&(ui=(Ke&536870912)===0||Xe?Tl():536870912);var n=ri.current;return n!==null&&(n.flags|=32),ui}function In(n,r,o){(n===ht&&ft===2||n.cancelPendingCommit!==null)&&(bo(n,0),Ss(n,Ke,ui,!1)),Ct(n,o),((vt&2)===0||n!==ht)&&(n===ht&&((vt&2)===0&&(va|=o),At===4&&Ss(n,Ke,ui,!1)),ji(n))}function jv(n,r,o){if((vt&6)!==0)throw Error(s(327));var u=!o&&(r&60)===0&&(r&n.expiredLanes)===0||js(n,r),f=u?cC(n,r):Vp(n,r,!0),p=u;do{if(f===0){Ao&&!u&&Ss(n,r,0,!1);break}else if(f===6)Ss(n,r,0,!Es);else{if(o=n.current.alternate,p&&!lC(o)){f=Vp(n,r,!1),p=!1;continue}if(f===2){if(p=r,n.errorRecoveryDisabledLanes&p)var v=0;else v=n.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var A=n;f=ou;var N=A.current.memoizedState.isDehydrated;if(N&&(bo(A,v).flags|=256),v=Vp(A,v,!1),v!==2){if(Cp&&!N){A.errorRecoveryDisabledLanes|=p,va|=p,f=4;break e}p=Ui,Ui=f,p!==null&&xp(p)}f=v}if(p=!1,f!==2)continue}}if(f===1){bo(n,0),Ss(n,r,0,!0);break}e:{switch(u=n,f){case 0:case 1:throw Error(s(345));case 4:if((r&4194176)===r){Ss(u,r,ui,!Es);break e}break;case 2:Ui=null;break;case 3:case 5:break;default:throw Error(s(329))}if(u.finishedWork=o,u.finishedLanes=r,(r&62914560)===r&&(p=Np+300-en(),10<p)){if(Ss(u,r,ui,!Es),Yn(u,0)!==0)break e;u.timeoutHandle=uE(Bv.bind(null,u,o,Ui,vh,Ip,r,ui,va,wo,Es,2,-0,0),p);break e}Bv(u,o,Ui,vh,Ip,r,ui,va,wo,Es,0,-0,0)}}break}while(!0);ji(n)}function xp(n){Ui===null?Ui=n:Ui.push.apply(Ui,n)}function Bv(n,r,o,u,f,p,v,A,N,V,Q,te,q){var W=r.subtreeFlags;if((W&8192||(W&16785408)===16785408)&&(mu={stylesheets:null,count:0,unsuspend:FC},Dv(r),r=GC(),r!==null)){n.cancelPendingCommit=r(Wv.bind(null,n,o,u,f,v,A,N,1,te,q)),Ss(n,p,v,!V);return}Wv(n,o,u,f,v,A,N,Q,te,q)}function lC(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!Un(p(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ss(n,r,o,u){r&=~Rp,r&=~va,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var f=r;0<f;){var p=31-wn(f),v=1<<p;u[p]=-1,f&=~v}o!==0&&zs(n,o,r)}function Th(){return(vt&6)===0?(cu(0),!1):!0}function Mp(){if(Ue!==null){if(ft===0)var n=Ue.return;else n=Ue,ps=ma=null,Bd(n),fo=null,ql=0,n=Ue;for(;n!==null;)Lv(n.alternate,n),n=n.return;Ue=null}}function bo(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,RC(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Mp(),ht=n,Ue=o=cr(n.current,null),Ke=r,ft=0,zn=null,Es=!1,Ao=js(n,r),Cp=!1,wo=ui=Rp=va=hr=At=0,Ui=ou=null,Ip=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var f=31-wn(u),p=1<<f;r|=n[f],u&=~p}return Ts=r,Gc(),o}function zv(n,r){Pe=null,b.H=Li,r===Hl?(r=ny(),ft=3):r===Jg?(r=ny(),ft=4):ft=r===ev?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,zn=r,Ue===null&&(At=1,hh(n,ni(r,n.current)))}function Hv(){var n=b.H;return b.H=Li,n===null?Li:n}function Fv(){var n=b.A;return b.A=aC,n}function Pp(){At=4,Es||(Ke&4194176)!==Ke&&ri.current!==null||(Ao=!0),(hr&134217727)===0&&(va&134217727)===0||ht===null||Ss(ht,Ke,ui,!1)}function Vp(n,r,o){var u=vt;vt|=2;var f=Hv(),p=Fv();(ht!==n||Ke!==r)&&(vh=null,bo(n,r)),r=!1;var v=At;e:do try{if(ft!==0&&Ue!==null){var A=Ue,N=zn;switch(ft){case 8:Mp(),v=6;break e;case 3:case 2:case 6:ri.current===null&&(r=!0);var V=ft;if(ft=0,zn=null,Co(n,A,N,V),o&&Ao){v=0;break e}break;default:V=ft,ft=0,zn=null,Co(n,A,N,V)}}uC(),v=At;break}catch(Q){zv(n,Q)}while(!0);return r&&n.shellSuspendCounter++,ps=ma=null,vt=u,b.H=f,b.A=p,Ue===null&&(ht=null,Ke=0,Gc()),v}function uC(){for(;Ue!==null;)qv(Ue)}function cC(n,r){var o=vt;vt|=2;var u=Hv(),f=Fv();ht!==n||Ke!==r?(vh=null,yh=en()+500,bo(n,r)):Ao=js(n,r);e:do try{if(ft!==0&&Ue!==null){r=Ue;var p=zn;t:switch(ft){case 1:ft=0,zn=null,Co(n,r,p,1);break;case 2:if(ey(p)){ft=0,zn=null,Gv(r);break}r=function(){ft===2&&ht===n&&(ft=7),ji(n)},p.then(r,r);break e;case 3:ft=7;break e;case 4:ft=5;break e;case 7:ey(p)?(ft=0,zn=null,Gv(r)):(ft=0,zn=null,Co(n,r,p,7));break;case 5:var v=null;switch(Ue.tag){case 26:v=Ue.memoizedState;case 5:case 27:var A=Ue;if(!v||EE(v)){ft=0,zn=null;var N=A.sibling;if(N!==null)Ue=N;else{var V=A.return;V!==null?(Ue=V,Sh(V)):Ue=null}break t}}ft=0,zn=null,Co(n,r,p,5);break;case 6:ft=0,zn=null,Co(n,r,p,6);break;case 8:Mp(),At=6;break e;default:throw Error(s(462))}}hC();break}catch(Q){zv(n,Q)}while(!0);return ps=ma=null,b.H=u,b.A=f,vt=o,Ue!==null?0:(ht=null,Ke=0,Gc(),At)}function hC(){for(;Ue!==null&&!qa();)qv(Ue)}function qv(n){var r=fv(n.alternate,n,Ts);n.memoizedProps=n.pendingProps,r===null?Sh(n):Ue=r}function Gv(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=av(o,r,r.pendingProps,r.type,void 0,Ke);break;case 11:r=av(o,r,r.pendingProps,r.type.render,r.ref,Ke);break;case 5:Bd(r);default:Lv(o,r),r=Ue=Mv(r,Ts),r=fv(o,r,Ts)}n.memoizedProps=n.pendingProps,r===null?Sh(n):Ue=r}function Co(n,r,o,u){ps=ma=null,Bd(r),fo=null,ql=0;var f=r.return;try{if(Jb(n,f,r,o,Ke)){At=1,hh(n,ni(o,n.current)),Ue=null;return}}catch(p){if(f!==null)throw Ue=f,p;At=1,hh(n,ni(o,n.current)),Ue=null;return}r.flags&32768?(Xe||u===1?n=!0:Ao||(Ke&536870912)!==0?n=!1:(Es=n=!0,(u===2||u===3||u===6)&&(u=ri.current,u!==null&&u.tag===13&&(u.flags|=16384))),Kv(r,n)):Sh(r)}function Sh(n){var r=n;do{if((r.flags&32768)!==0){Kv(r,Es);return}n=r.return;var o=sC(r.alternate,r,Ts);if(o!==null){Ue=o;return}if(r=r.sibling,r!==null){Ue=r;return}Ue=r=n}while(r!==null);At===0&&(At=5)}function Kv(n,r){do{var o=rC(n.alternate,n);if(o!==null){o.flags&=32767,Ue=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){Ue=n;return}Ue=n=o}while(n!==null);At=6,Ue=null}function Wv(n,r,o,u,f,p,v,A,N,V){var Q=b.T,te=fe.p;try{fe.p=2,b.T=null,fC(n,r,o,u,te,f,p,v,A,N,V)}finally{b.T=Q,fe.p=te}}function fC(n,r,o,u,f,p,v,A){do Ro();while(Ea!==null);if((vt&6)!==0)throw Error(s(327));var N=n.finishedWork;if(u=n.finishedLanes,N===null)return null;if(n.finishedWork=null,n.finishedLanes=0,N===n.current)throw Error(s(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var V=N.lanes|N.childLanes;if(V|=bd,wc(n,u,V,p,v,A),n===ht&&(Ue=ht=null,Ke=0),(N.subtreeFlags&10256)===0&&(N.flags&10256)===0||Eh||(Eh=!0,Dp=V,Op=o,_C(Ji,function(){return Ro(),null})),o=(N.flags&15990)!==0,(N.subtreeFlags&15990)!==0||o?(o=b.T,b.T=null,p=fe.p,fe.p=2,v=vt,vt|=4,tC(n,N),Rv(N,n),Vb(Qp,n.containerInfo),Mh=!!Wp,Qp=Wp=null,n.current=N,Av(n,N.alternate,N),Zi(),vt=v,fe.p=p,b.T=o):n.current=N,Eh?(Eh=!1,Ea=n,lu=u):Qv(n,V),V=n.pendingLanes,V===0&&(fr=null),vl(N.stateNode),ji(n),r!==null)for(f=n.onRecoverableError,N=0;N<r.length;N++)V=r[N],f(V.value,{componentStack:V.stack});return(lu&3)!==0&&Ro(),V=n.pendingLanes,(u&4194218)!==0&&(V&42)!==0?n===kp?uu++:(uu=0,kp=n):uu=0,cu(0),null}function Qv(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Kl(r)))}function Ro(){if(Ea!==null){var n=Ea,r=Dp;Dp=0;var o=bc(lu),u=b.T,f=fe.p;try{if(fe.p=32>o?32:o,b.T=null,Ea===null)var p=!1;else{o=Op,Op=null;var v=Ea,A=lu;if(Ea=null,lu=0,(vt&6)!==0)throw Error(s(331));var N=vt;if(vt|=4,kv(v.current),Nv(v,v.current,A,o),vt=N,cu(0,!1),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Ls,v)}catch{}p=!0}return p}finally{fe.p=f,b.T=u,Qv(n,r)}}return!1}function Yv(n,r,o){r=ni(o,r),r=ep(n.stateNode,r,2),n=ar(n,r,2),n!==null&&(Ct(n,2),ji(n))}function ut(n,r,o){if(n.tag===3)Yv(n,n,o);else for(;r!==null;){if(r.tag===3){Yv(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(fr===null||!fr.has(u))){n=ni(o,n),o=Zy(2),u=ar(r,o,2),u!==null&&(Jy(o,u,r,n),Ct(u,2),ji(u));break}}r=r.return}}function Lp(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new oC;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(Cp=!0,f.add(o),n=dC.bind(null,n,r,o),r.then(n,n))}function dC(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,ht===n&&(Ke&o)===o&&(At===4||At===3&&(Ke&62914560)===Ke&&300>en()-Np?(vt&2)===0&&bo(n,0):Rp|=o,wo===Ke&&(wo=0)),ji(n)}function $v(n,r){r===0&&(r=Bs()),n=Zs(n,r),n!==null&&(Ct(n,r),ji(n))}function pC(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),$v(n,o)}function mC(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),$v(n,o)}function _C(n,r){return Ht(n,r)}var Ah=null,Io=null,Up=!1,wh=!1,jp=!1,Ta=0;function ji(n){n!==Io&&n.next===null&&(Io===null?Ah=Io=n:Io=Io.next=n),wh=!0,Up||(Up=!0,yC(gC))}function cu(n,r){if(!jp&&wh){jp=!0;do for(var o=!1,u=Ah;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var p=0;else{var v=u.suspendedLanes,A=u.pingedLanes;p=(1<<31-wn(42|n)+1)-1,p&=f&~(v&~A),p=p&201326677?p&201326677|1:p?p|2:0}p!==0&&(o=!0,Jv(u,p))}else p=Ke,p=Yn(u,u===ht?p:0),(p&3)===0||js(u,p)||(o=!0,Jv(u,p));u=u.next}while(o);jp=!1}}function gC(){wh=Up=!1;var n=0;Ta!==0&&(CC()&&(n=Ta),Ta=0);for(var r=en(),o=null,u=Ah;u!==null;){var f=u.next,p=Xv(u,r);p===0?(u.next=null,o===null?Ah=f:o.next=f,f===null&&(Io=o)):(o=u,(n!==0||(p&3)!==0)&&(wh=!0)),u=f}cu(n)}function Xv(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes&-62914561;0<p;){var v=31-wn(p),A=1<<v,N=f[v];N===-1?((A&o)===0||(A&u)!==0)&&(f[v]=Ga(A,r)):N<=r&&(n.expiredLanes|=A),p&=~A}if(r=ht,o=Ke,o=Yn(n,n===r?o:0),u=n.callbackNode,o===0||n===r&&ft===2||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Jt(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||js(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&Jt(u),bc(o)){case 2:case 8:o=Nt;break;case 32:o=Ji;break;case 268435456:o=yl;break;default:o=Ji}return u=Zv.bind(null,n),o=Ht(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&Jt(u),n.callbackPriority=2,n.callbackNode=null,2}function Zv(n,r){var o=n.callbackNode;if(Ro()&&n.callbackNode!==o)return null;var u=Ke;return u=Yn(n,n===ht?u:0),u===0?null:(jv(n,u,r),Xv(n,en()),n.callbackNode!=null&&n.callbackNode===o?Zv.bind(null,n):null)}function Jv(n,r){if(Ro())return null;jv(n,r,!0)}function yC(n){IC(function(){(vt&6)!==0?Ht(_t,n):n()})}function Bp(){return Ta===0&&(Ta=Tl()),Ta}function eE(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ii(""+n)}function tE(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function vC(n,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var p=eE((f[Mt]||null).action),v=u.submitter;v&&(r=(r=v[Mt]||null)?eE(r.formAction):v.getAttribute("formAction"),r!==null&&(p=r,v=null));var A=new Za("action","action",null,u,f);n.push({event:A,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ta!==0){var N=v?tE(f,v):new FormData(f);Yd(o,{pending:!0,data:N,method:f.method,action:p},null,N)}}else typeof p=="function"&&(A.preventDefault(),N=v?tE(f,v):new FormData(f),Yd(o,{pending:!0,data:N,method:f.method,action:p},p,N))},currentTarget:f}]})}}for(var zp=0;zp<Wg.length;zp++){var Hp=Wg[zp],EC=Hp.toLowerCase(),TC=Hp[0].toUpperCase()+Hp.slice(1);mi(EC,"on"+TC)}mi(Hg,"onAnimationEnd"),mi(Fg,"onAnimationIteration"),mi(qg,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Ub,"onTransitionRun"),mi(jb,"onTransitionStart"),mi(Bb,"onTransitionCancel"),mi(Gg,"onTransitionEnd"),Nn("onMouseEnter",["mouseout","mouseover"]),Nn("onMouseLeave",["mouseout","mouseover"]),Nn("onPointerEnter",["pointerout","pointerover"]),Nn("onPointerLeave",["pointerout","pointerover"]),Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hu));function nE(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var v=u.length-1;0<=v;v--){var A=u[v],N=A.instance,V=A.currentTarget;if(A=A.listener,N!==p&&f.isPropagationStopped())break e;p=A,f.currentTarget=V;try{p(f)}catch(Q){ch(Q)}f.currentTarget=null,p=N}else for(v=0;v<u.length;v++){if(A=u[v],N=A.instance,V=A.currentTarget,A=A.listener,N!==p&&f.isPropagationStopped())break e;p=A,f.currentTarget=V;try{p(f)}catch(Q){ch(Q)}f.currentTarget=null,p=N}}}}function ze(n,r){var o=r[Kr];o===void 0&&(o=r[Kr]=new Set);var u=n+"__bubble";o.has(u)||(iE(r,n,2,!1),o.add(u))}function Fp(n,r,o){var u=0;r&&(u|=4),iE(o,n,u,r)}var bh="_reactListening"+Math.random().toString(36).slice(2);function qp(n){if(!n[bh]){n[bh]=!0,Al.forEach(function(o){o!=="selectionchange"&&(SC.has(o)||Fp(o,!1,n),Fp(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[bh]||(r[bh]=!0,Fp("selectionchange",!1,r))}}function iE(n,r,o,u){switch(CE(r)){case 2:var f=QC;break;case 8:f=YC;break;default:f=im}o=f.bind(null,r,o,n),f=void 0,!Jn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(r,o,{capture:!0,passive:f}):n.addEventListener(r,o,!0):f!==void 0?n.addEventListener(r,o,{passive:f}):n.addEventListener(r,o,!1)}function Gp(n,r,o,u,f){var p=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var v=u.tag;if(v===3||v===4){var A=u.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(v===4)for(v=u.return;v!==null;){var N=v.tag;if((N===3||N===4)&&(N=v.stateNode.containerInfo,N===f||N.nodeType===8&&N.parentNode===f))return;v=v.return}for(;A!==null;){if(v=pi(A),v===null)return;if(N=v.tag,N===5||N===6||N===26||N===27){u=p=v;continue e}A=A.parentNode}}u=u.return}Dc(function(){var V=p,Q=Xa(o),te=[];e:{var q=Kg.get(n);if(q!==void 0){var W=Za,ve=n;switch(n){case"keypress":if(Di(o)===0)break e;case"keydown":case"keyup":W=so;break;case"focusin":ve="focus",W=to;break;case"focusout":ve="blur",W=to;break;case"beforeblur":case"afterblur":W=to;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=ei;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=Uc;break;case Hg:case Fg:case qg:W=no;break;case Gg:W=Bc;break;case"scroll":case"scrollend":W=Oc;break;case"wheel":W=ro;break;case"copy":case"cut":case"paste":W=io;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Pl;break;case"toggle":case"beforetoggle":W=Hc}var ke=(r&4)!==0,wt=!ke&&(n==="scroll"||n==="scrollend"),U=ke?q!==null?q+"Capture":null:q;ke=[];for(var M=V,B;M!==null;){var Z=M;if(B=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||B===null||U===null||(Z=Xr(M,U),Z!=null&&ke.push(fu(M,Z,B))),wt)break;M=M.return}0<ke.length&&(q=new W(q,ve,null,o,Q),te.push({event:q,listeners:ke}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",W=n==="mouseout"||n==="pointerout",q&&o!==Zn&&(ve=o.relatedTarget||o.fromElement)&&(pi(ve)||ve[es]))break e;if((W||q)&&(q=Q.window===Q?Q:(q=Q.ownerDocument)?q.defaultView||q.parentWindow:window,W?(ve=o.relatedTarget||o.toElement,W=V,ve=ve?pi(ve):null,ve!==null&&(wt=ae(ve),ke=ve.tag,ve!==wt||ke!==5&&ke!==27&&ke!==6)&&(ve=null)):(W=null,ve=V),W!==ve)){if(ke=ei,Z="onMouseLeave",U="onMouseEnter",M="mouse",(n==="pointerout"||n==="pointerover")&&(ke=Pl,Z="onPointerLeave",U="onPointerEnter",M="pointer"),wt=W==null?q:Gs(W),B=ve==null?q:Gs(ve),q=new ke(Z,M+"leave",W,o,Q),q.target=wt,q.relatedTarget=B,Z=null,pi(Q)===V&&(ke=new ke(U,M+"enter",ve,o,Q),ke.target=B,ke.relatedTarget=wt,Z=ke),wt=Z,W&&ve)t:{for(ke=W,U=ve,M=0,B=ke;B;B=No(B))M++;for(B=0,Z=U;Z;Z=No(Z))B++;for(;0<M-B;)ke=No(ke),M--;for(;0<B-M;)U=No(U),B--;for(;M--;){if(ke===U||U!==null&&ke===U.alternate)break t;ke=No(ke),U=No(U)}ke=null}else ke=null;W!==null&&sE(te,q,W,ke,!1),ve!==null&&wt!==null&&sE(te,wt,ve,ke,!0)}}e:{if(q=V?Gs(V):window,W=q.nodeName&&q.nodeName.toLowerCase(),W==="select"||W==="input"&&q.type==="file")var _e=Og;else if(Vt(q))if(kg)_e=Mb;else{_e=kb;var Ve=Ob}else W=q.nodeName,!W||W.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?V&&Il(V.elementType)&&(_e=Og):_e=xb;if(_e&&(_e=_e(n,V))){ls(te,_e,o,Q);break e}Ve&&Ve(n,q,V),n==="focusout"&&V&&q.type==="number"&&V.memoizedProps.value!=null&&$a(q,"number",q.value)}switch(Ve=V?Gs(V):window,n){case"focusin":(Vt(Ve)||Ve.contentEditable==="true")&&(ao=Ve,Sd=V,Ul=null);break;case"focusout":Ul=Sd=ao=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,Bg(te,o,Q);break;case"selectionchange":if(Lb)break;case"keydown":case"keyup":Bg(te,o,Q)}var Ee;if(xi)e:{switch(n){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else qe?G(n,o)&&(be="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(be="onCompositionStart");be&&(y&&o.locale!=="ko"&&(qe||be!=="onCompositionStart"?be==="onCompositionEnd"&&qe&&(Ee=Dl()):(Ni=Q,Xs="value"in Ni?Ni.value:Ni.textContent,qe=!0)),Ve=Ch(V,be),0<Ve.length&&(be=new xl(be,n,null,o,Q),te.push({event:be,listeners:Ve}),Ee?be.data=Ee:(Ee=ce(o),Ee!==null&&(be.data=Ee)))),(Ee=g?Pt(n,o):Ge(n,o))&&(be=Ch(V,"onBeforeInput"),0<be.length&&(Ve=new xl("onBeforeInput","beforeinput",null,o,Q),te.push({event:Ve,listeners:be}),Ve.data=Ee)),vC(te,n,V,o,Q)}nE(te,r)})}function fu(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Ch(n,r){for(var o=r+"Capture",u=[];n!==null;){var f=n,p=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Xr(n,o),f!=null&&u.unshift(fu(n,f,p)),f=Xr(n,r),f!=null&&u.push(fu(n,f,p))),n=n.return}return u}function No(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function sE(n,r,o,u,f){for(var p=r._reactName,v=[];o!==null&&o!==u;){var A=o,N=A.alternate,V=A.stateNode;if(A=A.tag,N!==null&&N===u)break;A!==5&&A!==26&&A!==27||V===null||(N=V,f?(V=Xr(o,p),V!=null&&v.unshift(fu(o,V,N))):f||(V=Xr(o,p),V!=null&&v.push(fu(o,V,N)))),o=o.return}v.length!==0&&n.push({event:r,listeners:v})}var AC=/\r\n?/g,wC=/\u0000|\uFFFD/g;function rE(n){return(typeof n=="string"?n:""+n).replace(AC,`
`).replace(wC,"")}function aE(n,r){return r=rE(r),rE(n)===r}function Rh(){}function ot(n,r,o,u,f,p){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Xn(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Xn(n,""+u);break;case"className":Qs(n,"class",u);break;case"tabIndex":Qs(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Qs(n,o,u);break;case"style":Nc(n,u,p);break;case"data":if(r!=="object"){Qs(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ii(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(r!=="input"&&ot(n,r,"name",f.name,f,null),ot(n,r,"formEncType",f.formEncType,f,null),ot(n,r,"formMethod",f.formMethod,f,null),ot(n,r,"formTarget",f.formTarget,f,null)):(ot(n,r,"encType",f.encType,f,null),ot(n,r,"method",f.method,f,null),ot(n,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ii(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Rh);break;case"onScroll":u!=null&&ze("scroll",n);break;case"onScrollEnd":u!=null&&ze("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Ii(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":ze("beforetoggle",n),ze("toggle",n),Ws(n,"popover",u);break;case"xlinkActuate":$n(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":$n(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":$n(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":$n(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":$n(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":$n(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":$n(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":$n(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":$n(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ws(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=md.get(o)||o,Ws(n,o,u))}}function Kp(n,r,o,u,f,p){switch(o){case"style":Nc(n,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Xn(n,u):(typeof u=="number"||typeof u=="bigint")&&Xn(n,""+u);break;case"onScroll":u!=null&&ze("scroll",n);break;case"onScrollEnd":u!=null&&ze("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Rh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qa.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),p=n[Mt]||null,p=p!=null?p[o]:null,typeof p=="function"&&n.removeEventListener(r,p,f),typeof u=="function")){typeof p!="function"&&p!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Ws(n,o,u)}}}function rn(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",n),ze("load",n);var u=!1,f=!1,p;for(p in o)if(o.hasOwnProperty(p)){var v=o[p];if(v!=null)switch(p){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ot(n,r,p,v,o,null)}}f&&ot(n,r,"srcSet",o.srcSet,o,null),u&&ot(n,r,"src",o.src,o,null);return;case"input":ze("invalid",n);var A=p=v=f=null,N=null,V=null;for(u in o)if(o.hasOwnProperty(u)){var Q=o[u];if(Q!=null)switch(u){case"name":f=Q;break;case"type":v=Q;break;case"checked":N=Q;break;case"defaultChecked":V=Q;break;case"value":p=Q;break;case"defaultValue":A=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,r));break;default:ot(n,r,u,Q,o,null)}}Yr(n,p,A,N,V,v,f,!1),Qr(n);return;case"select":ze("invalid",n),u=v=p=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":p=A;break;case"defaultValue":v=A;break;case"multiple":u=A;default:ot(n,r,f,A,o,null)}r=p,o=v,n.multiple=!!u,r!=null?$e(n,!!u,r,!1):o!=null&&$e(n,!!u,o,!0);return;case"textarea":ze("invalid",n),p=f=u=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":u=A;break;case"defaultValue":f=A;break;case"children":p=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:ot(n,r,v,A,o,null)}$s(n,u,f,p),Qr(n);return;case"option":for(N in o)if(o.hasOwnProperty(N)&&(u=o[N],u!=null))switch(N){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ot(n,r,N,u,o,null)}return;case"dialog":ze("cancel",n),ze("close",n);break;case"iframe":case"object":ze("load",n);break;case"video":case"audio":for(u=0;u<hu.length;u++)ze(hu[u],n);break;case"image":ze("error",n),ze("load",n);break;case"details":ze("toggle",n);break;case"embed":case"source":case"link":ze("error",n),ze("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in o)if(o.hasOwnProperty(V)&&(u=o[V],u!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ot(n,r,V,u,o,null)}return;default:if(Il(r)){for(Q in o)o.hasOwnProperty(Q)&&(u=o[Q],u!==void 0&&Kp(n,r,Q,u,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(u=o[A],u!=null&&ot(n,r,A,u,o,null))}function bC(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,v=null,A=null,N=null,V=null,Q=null;for(W in o){var te=o[W];if(o.hasOwnProperty(W)&&te!=null)switch(W){case"checked":break;case"value":break;case"defaultValue":N=te;default:u.hasOwnProperty(W)||ot(n,r,W,null,u,te)}}for(var q in u){var W=u[q];if(te=o[q],u.hasOwnProperty(q)&&(W!=null||te!=null))switch(q){case"type":p=W;break;case"name":f=W;break;case"checked":V=W;break;case"defaultChecked":Q=W;break;case"value":v=W;break;case"defaultValue":A=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,r));break;default:W!==te&&ot(n,r,q,W,u,te)}}Ys(n,v,A,N,V,Q,p,f);return;case"select":W=v=A=q=null;for(p in o)if(N=o[p],o.hasOwnProperty(p)&&N!=null)switch(p){case"value":break;case"multiple":W=N;default:u.hasOwnProperty(p)||ot(n,r,p,null,u,N)}for(f in u)if(p=u[f],N=o[f],u.hasOwnProperty(f)&&(p!=null||N!=null))switch(f){case"value":q=p;break;case"defaultValue":A=p;break;case"multiple":v=p;default:p!==N&&ot(n,r,f,p,u,N)}r=A,o=v,u=W,q!=null?$e(n,!!o,q,!1):!!u!=!!o&&(r!=null?$e(n,!!o,r,!0):$e(n,!!o,o?[]:"",!1));return;case"textarea":W=q=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!u.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ot(n,r,A,null,u,f)}for(v in u)if(f=u[v],p=o[v],u.hasOwnProperty(v)&&(f!=null||p!=null))switch(v){case"value":q=f;break;case"defaultValue":W=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&ot(n,r,v,f,u,p)}$r(n,q,W);return;case"option":for(var ve in o)if(q=o[ve],o.hasOwnProperty(ve)&&q!=null&&!u.hasOwnProperty(ve))switch(ve){case"selected":n.selected=!1;break;default:ot(n,r,ve,null,u,q)}for(N in u)if(q=u[N],W=o[N],u.hasOwnProperty(N)&&q!==W&&(q!=null||W!=null))switch(N){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:ot(n,r,N,q,u,W)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ke in o)q=o[ke],o.hasOwnProperty(ke)&&q!=null&&!u.hasOwnProperty(ke)&&ot(n,r,ke,null,u,q);for(V in u)if(q=u[V],W=o[V],u.hasOwnProperty(V)&&q!==W&&(q!=null||W!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:ot(n,r,V,q,u,W)}return;default:if(Il(r)){for(var wt in o)q=o[wt],o.hasOwnProperty(wt)&&q!==void 0&&!u.hasOwnProperty(wt)&&Kp(n,r,wt,void 0,u,q);for(Q in u)q=u[Q],W=o[Q],!u.hasOwnProperty(Q)||q===W||q===void 0&&W===void 0||Kp(n,r,Q,q,u,W);return}}for(var U in o)q=o[U],o.hasOwnProperty(U)&&q!=null&&!u.hasOwnProperty(U)&&ot(n,r,U,null,u,q);for(te in u)q=u[te],W=o[te],!u.hasOwnProperty(te)||q===W||q==null&&W==null||ot(n,r,te,q,u,W)}var Wp=null,Qp=null;function Ih(n){return n.nodeType===9?n:n.ownerDocument}function oE(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lE(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Yp(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var $p=null;function CC(){var n=window.event;return n&&n.type==="popstate"?n===$p?!1:($p=n,!0):($p=null,!1)}var uE=typeof setTimeout=="function"?setTimeout:void 0,RC=typeof clearTimeout=="function"?clearTimeout:void 0,cE=typeof Promise=="function"?Promise:void 0,IC=typeof queueMicrotask=="function"?queueMicrotask:typeof cE<"u"?function(n){return cE.resolve(null).then(n).catch(NC)}:uE;function NC(n){setTimeout(function(){throw n})}function Xp(n,r){var o=r,u=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){n.removeChild(f),Eu(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);Eu(r)}function Zp(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Zp(o),Wr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function DC(n,r,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[qs])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(p=n.getAttribute("rel"),p==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(p!==f.rel||n.getAttribute("href")!==(f.href==null?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(p=n.getAttribute("src"),(p!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===p)return n}else return n;if(n=yi(n.nextSibling),n===null)break}return null}function OC(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=yi(n.nextSibling),n===null))return null;return n}function yi(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}function hE(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}function fE(n,r,o){switch(r=Ih(o),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}var ci=new Map,dE=new Set;function Nh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var As=fe.d;fe.d={f:kC,r:xC,D:MC,C:PC,L:VC,m:LC,X:jC,S:UC,M:BC};function kC(){var n=As.f(),r=Th();return n||r}function xC(n){var r=ts(n);r!==null&&r.tag===5&&r.type==="form"?By(r):As.r(n)}var Do=typeof document>"u"?null:document;function pE(n,r,o){var u=Do;if(u&&typeof r=="string"&&r){var f=Tt(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),dE.has(f)||(dE.add(f),n={rel:n,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),rn(r,"link",n),gt(r),u.head.appendChild(r)))}}function MC(n){As.D(n),pE("dns-prefetch",n,null)}function PC(n,r){As.C(n,r),pE("preconnect",n,r)}function VC(n,r,o){As.L(n,r,o);var u=Do;if(u&&n&&r){var f='link[rel="preload"][as="'+Tt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Tt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Tt(o.imageSizes)+'"]')):f+='[href="'+Tt(n)+'"]';var p=f;switch(r){case"style":p=Oo(n);break;case"script":p=ko(n)}ci.has(p)||(n=I({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),ci.set(p,n),u.querySelector(f)!==null||r==="style"&&u.querySelector(du(p))||r==="script"&&u.querySelector(pu(p))||(r=u.createElement("link"),rn(r,"link",n),gt(r),u.head.appendChild(r)))}}function LC(n,r){As.m(n,r);var o=Do;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Tt(u)+'"][href="'+Tt(n)+'"]',p=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=ko(n)}if(!ci.has(p)&&(n=I({rel:"modulepreload",href:n},r),ci.set(p,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(pu(p)))return}u=o.createElement("link"),rn(u,"link",n),gt(u),o.head.appendChild(u)}}}function UC(n,r,o){As.S(n,r,o);var u=Do;if(u&&n){var f=Ks(u).hoistableStyles,p=Oo(n);r=r||"default";var v=f.get(p);if(!v){var A={loading:0,preload:null};if(v=u.querySelector(du(p)))A.loading=5;else{n=I({rel:"stylesheet",href:n,"data-precedence":r},o),(o=ci.get(p))&&Jp(n,o);var N=v=u.createElement("link");gt(N),rn(N,"link",n),N._p=new Promise(function(V,Q){N.onload=V,N.onerror=Q}),N.addEventListener("load",function(){A.loading|=1}),N.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Dh(v,r,u)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(p,v)}}}function jC(n,r){As.X(n,r);var o=Do;if(o&&n){var u=Ks(o).hoistableScripts,f=ko(n),p=u.get(f);p||(p=o.querySelector(pu(f)),p||(n=I({src:n,async:!0},r),(r=ci.get(f))&&em(n,r),p=o.createElement("script"),gt(p),rn(p,"link",n),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function BC(n,r){As.M(n,r);var o=Do;if(o&&n){var u=Ks(o).hoistableScripts,f=ko(n),p=u.get(f);p||(p=o.querySelector(pu(f)),p||(n=I({src:n,async:!0,type:"module"},r),(r=ci.get(f))&&em(n,r),p=o.createElement("script"),gt(p),rn(p,"link",n),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function mE(n,r,o,u){var f=(f=fn.current)?Nh(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Oo(o.href),o=Ks(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Oo(o.href);var p=Ks(f).hoistableStyles,v=p.get(n);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(n,v),(p=f.querySelector(du(n)))&&!p._p&&(v.instance=p,v.state.loading=5),ci.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ci.set(n,o),p||zC(f,n,o,v.state))),r&&u===null)throw Error(s(528,""));return v}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=ko(o),o=Ks(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function Oo(n){return'href="'+Tt(n)+'"'}function du(n){return'link[rel="stylesheet"]['+n+"]"}function _E(n){return I({},n,{"data-precedence":n.precedence,precedence:null})}function zC(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),rn(r,"link",o),gt(r),n.head.appendChild(r))}function ko(n){return'[src="'+Tt(n)+'"]'}function pu(n){return"script[async]"+n}function gE(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+Tt(o.href)+'"]');if(u)return r.instance=u,gt(u),u;var f=I({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),gt(u),rn(u,"style",f),Dh(u,o.precedence,n),r.instance=u;case"stylesheet":f=Oo(o.href);var p=n.querySelector(du(f));if(p)return r.state.loading|=4,r.instance=p,gt(p),p;u=_E(o),(f=ci.get(f))&&Jp(u,f),p=(n.ownerDocument||n).createElement("link"),gt(p);var v=p;return v._p=new Promise(function(A,N){v.onload=A,v.onerror=N}),rn(p,"link",u),r.state.loading|=4,Dh(p,o.precedence,n),r.instance=p;case"script":return p=ko(o.src),(f=n.querySelector(pu(p)))?(r.instance=f,gt(f),f):(u=o,(f=ci.get(p))&&(u=I({},o),em(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),gt(f),rn(f,"link",u),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Dh(u,o.precedence,n));return r.instance}function Dh(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,p=f,v=0;v<u.length;v++){var A=u[v];if(A.dataset.precedence===r)p=A;else if(p!==f)break}p?p.parentNode.insertBefore(n,p.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function Jp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function em(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Oh=null;function yE(n,r,o){if(Oh===null){var u=new Map,f=Oh=new Map;f.set(o,u)}else f=Oh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var p=o[f];if(!(p[qs]||p[Ft]||n==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var v=p.getAttribute(r)||"";v=n+v;var A=u.get(v);A?A.push(p):u.set(v,[p])}}return u}function vE(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function HC(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function EE(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var mu=null;function FC(){}function qC(n,r,o){if(mu===null)throw Error(s(475));var u=mu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Oo(o.href),p=n.querySelector(du(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=kh.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=p,gt(p);return}p=n.ownerDocument||n,o=_E(o),(f=ci.get(f))&&Jp(o,f),p=p.createElement("link"),gt(p);var v=p;v._p=new Promise(function(A,N){v.onload=A,v.onerror=N}),rn(p,"link",o),r.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=kh.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function GC(){if(mu===null)throw Error(s(475));var n=mu;return n.stylesheets&&n.count===0&&tm(n,n.stylesheets),0<n.count?function(r){var o=setTimeout(function(){if(n.stylesheets&&tm(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(o)}}:null}function kh(){if(this.count--,this.count===0){if(this.stylesheets)tm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var xh=null;function tm(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,xh=new Map,r.forEach(KC,n),xh=null,kh.call(n))}function KC(n,r){if(!(r.state.loading&4)){var o=xh.get(n);if(o)var u=o.get(null);else{o=new Map,xh.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var v=f[p];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),u=v)}u&&o.set(null,u)}f=r.instance,v=f.getAttribute("data-precedence"),p=o.get(v)||u,p===u&&o.set(null,f),o.set(v,f),this.count++,u=kh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),p?p.parentNode.insertBefore(f,p.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var _u={$$typeof:P,Provider:null,Consumer:null,_currentValue:ge,_currentValue2:ge,_threadCount:0};function WC(n,r,o,u,f,p,v,A){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ka(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ka(0),this.hiddenUpdates=Ka(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function TE(n,r,o,u,f,p,v,A,N,V,Q,te){return n=new WC(n,r,o,v,A,N,V,te),r=1,p===!0&&(r|=24),p=li(3,null,null,r),n.current=p,p.stateNode=n,r=xd(),r.refCount++,n.pooledCache=r,r.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:r},dp(p),n}function SE(n){return n?(n=uo,n):uo}function AE(n,r,o,u,f,p){f=SE(f),u.context===null?u.context=f:u.pendingContext=f,u=rr(r),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=ar(n,u,r),o!==null&&(In(o,n,r),Jl(o,n,r))}function wE(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function nm(n,r){wE(n,r),(n=n.alternate)&&wE(n,r)}function bE(n){if(n.tag===13){var r=Zs(n,67108864);r!==null&&In(r,n,67108864),nm(n,67108864)}}var Mh=!0;function QC(n,r,o,u){var f=b.T;b.T=null;var p=fe.p;try{fe.p=2,im(n,r,o,u)}finally{fe.p=p,b.T=f}}function YC(n,r,o,u){var f=b.T;b.T=null;var p=fe.p;try{fe.p=8,im(n,r,o,u)}finally{fe.p=p,b.T=f}}function im(n,r,o,u){if(Mh){var f=sm(u);if(f===null)Gp(n,r,u,Ph,o),RE(n,u);else if(XC(f,n,r,o,u))u.stopPropagation();else if(RE(n,u),r&4&&-1<$C.indexOf(n)){for(;f!==null;){var p=ts(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var v=di(p.pendingLanes);if(v!==0){var A=p;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var N=1<<31-wn(v);A.entanglements[1]|=N,v&=~N}ji(p),(vt&6)===0&&(yh=en()+500,cu(0))}}break;case 13:A=Zs(p,2),A!==null&&In(A,p,2),Th(),nm(p,2)}if(p=sm(u),p===null&&Gp(n,r,u,Ph,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else Gp(n,r,u,null,o)}}function sm(n){return n=Xa(n),rm(n)}var Ph=null;function rm(n){if(Ph=null,n=pi(n),n!==null){var r=ae(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=Ae(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Ph=n,null}function CE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qr()){case _t:return 2;case Nt:return 8;case Ji:case Tc:return 32;case yl:return 268435456;default:return 32}default:return 32}}var am=!1,dr=null,pr=null,mr=null,gu=new Map,yu=new Map,_r=[],$C="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function RE(n,r){switch(n){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":gu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":yu.delete(r.pointerId)}}function vu(n,r,o,u,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},r!==null&&(r=ts(r),r!==null&&bE(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function XC(n,r,o,u,f){switch(r){case"focusin":return dr=vu(dr,n,r,o,u,f),!0;case"dragenter":return pr=vu(pr,n,r,o,u,f),!0;case"mouseover":return mr=vu(mr,n,r,o,u,f),!0;case"pointerover":var p=f.pointerId;return gu.set(p,vu(gu.get(p)||null,n,r,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,yu.set(p,vu(yu.get(p)||null,n,r,o,u,f)),!0}return!1}function IE(n){var r=pi(n.target);if(r!==null){var o=ae(r);if(o!==null){if(r=o.tag,r===13){if(r=Ae(o),r!==null){n.blockedOn=r,Fs(n.priority,function(){if(o.tag===13){var u=Hn(),f=Zs(o,u);f!==null&&In(f,o,u),nm(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Vh(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=sm(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Zn=u,o.target.dispatchEvent(u),Zn=null}else return r=ts(o),r!==null&&bE(r),n.blockedOn=o,!1;r.shift()}return!0}function NE(n,r,o){Vh(n)&&o.delete(r)}function ZC(){am=!1,dr!==null&&Vh(dr)&&(dr=null),pr!==null&&Vh(pr)&&(pr=null),mr!==null&&Vh(mr)&&(mr=null),gu.forEach(NE),yu.forEach(NE)}function Lh(n,r){n.blockedOn===r&&(n.blockedOn=null,am||(am=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,ZC)))}var Uh=null;function DE(n){Uh!==n&&(Uh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Uh===n&&(Uh=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],f=n[r+2];if(typeof u!="function"){if(rm(u||o)===null)continue;break}var p=ts(o);p!==null&&(n.splice(r,3),r-=3,Yd(p,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Eu(n){function r(N){return Lh(N,n)}dr!==null&&Lh(dr,n),pr!==null&&Lh(pr,n),mr!==null&&Lh(mr,n),gu.forEach(r),yu.forEach(r);for(var o=0;o<_r.length;o++){var u=_r[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<_r.length&&(o=_r[0],o.blockedOn===null);)IE(o),o.blockedOn===null&&_r.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],p=o[u+1],v=f[Mt]||null;if(typeof p=="function")v||DE(o);else if(v){var A=null;if(p&&p.hasAttribute("formAction")){if(f=p,v=p[Mt]||null)A=v.formAction;else if(rm(f)!==null)continue}else A=v.action;typeof A=="function"?o[u+1]=A:(o.splice(u,3),u-=3),DE(o)}}}function om(n){this._internalRoot=n}jh.prototype.render=om.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Hn();AE(o,u,n,r,null,null)},jh.prototype.unmount=om.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;n.tag===0&&Ro(),AE(n.current,2,null,n,null,null),Th(),r[es]=null}};function jh(n){this._internalRoot=n}jh.prototype.unstable_scheduleHydration=function(n){if(n){var r=Cc();n={blockedOn:null,target:n,priority:r};for(var o=0;o<_r.length&&r!==0&&r<_r[o].priority;o++);_r.splice(o,0,n),o===0&&IE(n)}};var OE=e.version;if(OE!=="19.0.0")throw Error(s(527,OE,"19.0.0"));fe.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=$(r),n=n!==null?ne(n):null,n=n===null?null:n.stateNode,n};var JC={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:b,findFiberByHostInstance:pi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bh.isDisabled&&Bh.supportsFiber)try{Ls=Bh.inject(JC),dn=Bh}catch{}}return Su.createRoot=function(n,r){if(!a(n))throw Error(s(299));var o=!1,u="",f=Qy,p=Yy,v=$y,A=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks)),r=TE(n,1,!1,null,null,o,u,f,p,v,A,null),n[es]=r.current,qp(n.nodeType===8?n.parentNode:n),new om(r)},Su.hydrateRoot=function(n,r,o){if(!a(n))throw Error(s(299));var u=!1,f="",p=Qy,v=Yy,A=$y,N=null,V=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(N=o.unstable_transitionCallbacks),o.formState!==void 0&&(V=o.formState)),r=TE(n,1,!0,r,o??null,u,f,p,v,A,N,V),r.context=SE(null),o=r.current,u=Hn(),f=rr(u),f.callback=null,ar(o,f,u),r.current.lanes=u,Ct(r,u),ji(r),n[es]=r.current,qp(n),new jh(r)},Su.version="19.0.0",Su}var zE;function uR(){if(zE)return cm.exports;zE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),cm.exports=lR(),cm.exports}var cR=uR();const hR="_hideHome_1sau2_19",fR="_home_wrapper_1sau2_27",dR="_left_1sau2_43",pR="_wrapTop_1sau2_61",mR="_wrapBottom_1sau2_141",_R="_orange_1sau2_171",gR="_purple_1sau2_177",yR="_blue_1sau2_183",vR="_right_1sau2_193",ws={hideHome:hR,home_wrapper:fR,left:dR,wrapTop:pR,wrapBottom:mR,orange:_R,purple:gR,blue:yR,right:vR},ER="_animateLeft_1cea5_1",TR="_animateImg_1cea5_11",HE={animateLeft:ER,animateImg:TR},ye=({className:i,content:e,func:t,submit:s,icon:a,change:l,element:c})=>S.jsxs("button",{className:`${i}`,onChange:()=>{l()},onSubmit:d=>{s(d)},onClick:()=>{t()},children:[a,e,c]}),SR="_nav_1hywv_45",AR="_hideNav_1hywv_53",wR="_left_1hywv_99",bR="_middle_1hywv_127",CR="_NavLinks_1hywv_127",RR="_indicated_1hywv_165",IR="_indication_1hywv_175",NR="_right_1hywv_193",DR="_HamburgerButt_1hywv_205",OR="_SignInButt_1hywv_251",kR="_SignUpButt_1hywv_285",xR="_sidebar_1hywv_317",MR="_hideSideBar_1hywv_327",PR="_User_Button_1hywv_545",ct={nav:SR,hideNav:AR,left:wR,middle:bR,NavLinks:CR,indicated:RR,indication:IR,right:NR,HamburgerButt:DR,SignInButt:OR,SignUpButt:kR,sidebar:xR,hideSideBar:MR,User_Button:PR},VR=()=>{};var FE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=function(i,e){if(!i)throw al(e)},al=function(i){return new Error("Firebase Database ("+YS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},LR=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],d=i[t++],m=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const l=i[t++],c=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},g_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,d=c?i[a+1]:0,m=a+2<i.length,_=m?i[a+2]:0,E=l>>2,T=(l&3)<<4|d>>4;let C=(d&15)<<2|_>>6,P=_&63;m||(P=64,c||(C=64)),s.push(t[E],t[T],t[C],t[P])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray($S(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):LR(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],d=a<i.length?t[i.charAt(a)]:0;++a;const _=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||d==null||_==null||T==null)throw new UR;const C=l<<2|d>>4;if(s.push(C),_!==64){const P=d<<4&240|_>>2;if(s.push(P),T!==64){const z=_<<6&192|T;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class UR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XS=function(i){const e=$S(i);return g_.encodeByteArray(e,!0)},lf=function(i){return XS(i).replace(/\./g,"")},uf=function(i){try{return g_.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(i){return ZS(void 0,i)}function ZS(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!BR(t)||(i[t]=ZS(i[t],e[t]));return i}function BR(i){return i!=="__proto__"}/**
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
 */function zR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HR=()=>zR().__FIREBASE_DEFAULTS__,FR=()=>{if(typeof process>"u"||typeof FE>"u")return;const i=FE.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},qR=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&uf(i[1]);return e&&JSON.parse(e)},Lf=()=>{try{return VR()||HR()||FR()||qR()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},JS=i=>{var e,t;return(t=(e=Lf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},GR=i=>{const e=JS(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},e0=()=>{var i;return(i=Lf())===null||i===void 0?void 0:i.config},t0=i=>{var e;return(e=Lf())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function KR(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[lf(JSON.stringify(t)),lf(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function v_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(An())}function WR(){var i;const e=(i=Lf())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YR(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function n0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $R(){const i=An();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function XR(){return YS.NODE_ADMIN===!0}function ZR(){return!WR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function JR(){try{return typeof indexedDB=="object"}catch{return!1}}function eI(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="FirebaseError";class Ps extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=tI,Object.setPrototypeOf(this,Ps.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ac.prototype.create)}}class ac{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?nI(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Ps(a,d,s)}}function nI(i,e){return i.replace(iI,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const iI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const i0=function(i){let e={},t={},s={},a="";try{const l=i.split(".");e=Qu(uf(l[0])||""),t=Qu(uf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},sI=function(i){const e=i0(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},rI=function(i){const e=i0(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Yo(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function km(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function cf(i,e,t){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(t,i[a],a,i));return s}function Or(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=i[a],c=e[a];if(qE(l)&&qE(c)){if(!Or(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function qE(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function xu(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Mu(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const C=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(C<<1|C>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],m=this.chain_[4],_,E;for(let T=0;T<80;T++){T<40?T<20?(_=d^l&(c^d),E=1518500249):(_=l^c^d,E=1859775393):T<60?(_=l&c|d&(l|c),E=2400959708):(_=l^c^d,E=3395469782);const C=(a<<5|a>>>27)+_+m+E+s[T]&4294967295;m=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=C}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function oI(i,e){const t=new lI(i,e);return t.subscribe.bind(t)}class lI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");uI(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=pm),a.error===void 0&&(a.error=pm),a.complete===void 0&&(a.complete=pm);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uI(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function pm(){}function cI(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,de(s<i.length,"Surrogate pair missing trail surrogate.");const c=i.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Uf=function(i){let e=0;for(let t=0;t<i.length;t++){const s=i.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */class fI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new y_;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pI(e))try{this.getOrInitializeService({instanceIdentifier:Aa})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Aa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Aa){return this.instances.has(e)}getOptions(e=Aa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Aa){return this.component?this.component.multipleInstances?e:Aa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dI(i){return i===Aa?void 0:i}function pI(i){return i.instantiationMode==="EAGER"}/**
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
 */class mI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(je||(je={}));const _I={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},gI=je.INFO,yI={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},vI=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=yI[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jf{constructor(e){this.name=e,this._logLevel=gI,this._logHandler=vI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_I[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...e),this._logHandler(this,je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...e),this._logHandler(this,je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,je.INFO,...e),this._logHandler(this,je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,je.WARN,...e),this._logHandler(this,je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...e),this._logHandler(this,je.ERROR,...e)}}const EI=(i,e)=>e.some(t=>i instanceof t);let GE,KE;function TI(){return GE||(GE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SI(){return KE||(KE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const s0=new WeakMap,xm=new WeakMap,r0=new WeakMap,mm=new WeakMap,E_=new WeakMap;function AI(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(Cr(i.result)),a()},c=()=>{s(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&s0.set(t,i)}).catch(()=>{}),E_.set(e,i),e}function wI(i){if(xm.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});xm.set(i,e)}let Mm={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return xm.get(i);if(e==="objectStoreNames")return i.objectStoreNames||r0.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Cr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function bI(i){Mm=i(Mm)}function CI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(_m(this),e,...t);return r0.set(s,e.sort?e.sort():[e]),Cr(s)}:SI().includes(i)?function(...e){return i.apply(_m(this),e),Cr(s0.get(this))}:function(...e){return Cr(i.apply(_m(this),e))}}function RI(i){return typeof i=="function"?CI(i):(i instanceof IDBTransaction&&wI(i),EI(i,TI())?new Proxy(i,Mm):i)}function Cr(i){if(i instanceof IDBRequest)return AI(i);if(mm.has(i))return mm.get(i);const e=RI(i);return e!==i&&(mm.set(i,e),E_.set(e,i)),e}const _m=i=>E_.get(i);function II(i,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),d=Cr(c);return s&&c.addEventListener("upgradeneeded",m=>{s(Cr(c.result),m.oldVersion,m.newVersion,Cr(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),d.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",_=>a(_.oldVersion,_.newVersion,_))}).catch(()=>{}),d}const NI=["get","getKey","getAll","getAllKeys","count"],DI=["put","add","delete","clear"],gm=new Map;function WE(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(gm.get(e))return gm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=DI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||NI.includes(t)))return;const l=async function(c,...d){const m=this.transaction(c,a?"readwrite":"readonly");let _=m.store;return s&&(_=_.index(d.shift())),(await Promise.all([_[t](...d),a&&m.done]))[0]};return gm.set(e,l),l}bI(i=>({...i,get:(e,t,s)=>WE(e,t)||i.get(e,t,s),has:(e,t)=>!!WE(e,t)||i.has(e,t)}));/**
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
 */class OI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(kI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function kI(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pm="@firebase/app",QE="0.11.2";/**
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
 */const Os=new jf("@firebase/app"),xI="@firebase/app-compat",MI="@firebase/analytics-compat",PI="@firebase/analytics",VI="@firebase/app-check-compat",LI="@firebase/app-check",UI="@firebase/auth",jI="@firebase/auth-compat",BI="@firebase/database",zI="@firebase/data-connect",HI="@firebase/database-compat",FI="@firebase/functions",qI="@firebase/functions-compat",GI="@firebase/installations",KI="@firebase/installations-compat",WI="@firebase/messaging",QI="@firebase/messaging-compat",YI="@firebase/performance",$I="@firebase/performance-compat",XI="@firebase/remote-config",ZI="@firebase/remote-config-compat",JI="@firebase/storage",e1="@firebase/storage-compat",t1="@firebase/firestore",n1="@firebase/vertexai",i1="@firebase/firestore-compat",s1="firebase",r1="11.4.0";/**
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
 */const Vm="[DEFAULT]",a1={[Pm]:"fire-core",[xI]:"fire-core-compat",[PI]:"fire-analytics",[MI]:"fire-analytics-compat",[LI]:"fire-app-check",[VI]:"fire-app-check-compat",[UI]:"fire-auth",[jI]:"fire-auth-compat",[BI]:"fire-rtdb",[zI]:"fire-data-connect",[HI]:"fire-rtdb-compat",[FI]:"fire-fn",[qI]:"fire-fn-compat",[GI]:"fire-iid",[KI]:"fire-iid-compat",[WI]:"fire-fcm",[QI]:"fire-fcm-compat",[YI]:"fire-perf",[$I]:"fire-perf-compat",[XI]:"fire-rc",[ZI]:"fire-rc-compat",[JI]:"fire-gcs",[e1]:"fire-gcs-compat",[t1]:"fire-fst",[i1]:"fire-fst-compat",[n1]:"fire-vertex","fire-js":"fire-js",[s1]:"fire-js-all"};/**
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
 */const hf=new Map,o1=new Map,Lm=new Map;function YE(i,e){try{i.container.addComponent(e)}catch(t){Os.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Ra(i){const e=i.name;if(Lm.has(e))return Os.debug(`There were multiple attempts to register component ${e}.`),!1;Lm.set(e,i);for(const t of hf.values())YE(t,i);for(const t of o1.values())YE(t,i);return!0}function T_(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function qn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const l1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rr=new ac("app","Firebase",l1);/**
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
 */class u1{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ua=r1;function a0(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Vm,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw Rr.create("bad-app-name",{appName:String(a)});if(t||(t=e0()),!t)throw Rr.create("no-options");const l=hf.get(a);if(l){if(Or(t,l.options)&&Or(s,l.config))return l;throw Rr.create("duplicate-app",{appName:a})}const c=new mI(a);for(const m of Lm.values())c.addComponent(m);const d=new u1(t,s,c);return hf.set(a,d),d}function o0(i=Vm){const e=hf.get(i);if(!e&&i===Vm&&e0())return a0();if(!e)throw Rr.create("no-app",{appName:i});return e}function Fi(i,e,t){var s;let a=(s=a1[i])!==null&&s!==void 0?s:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Os.warn(d.join(" "));return}Ra(new kr(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const c1="firebase-heartbeat-database",h1=1,Yu="firebase-heartbeat-store";let ym=null;function l0(){return ym||(ym=II(c1,h1,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Yu)}catch(t){console.warn(t)}}}}).catch(i=>{throw Rr.create("idb-open",{originalErrorMessage:i.message})})),ym}async function f1(i){try{const t=(await l0()).transaction(Yu),s=await t.objectStore(Yu).get(u0(i));return await t.done,s}catch(e){if(e instanceof Ps)Os.warn(e.message);else{const t=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Os.warn(t.message)}}}async function $E(i,e){try{const s=(await l0()).transaction(Yu,"readwrite");await s.objectStore(Yu).put(e,u0(i)),await s.done}catch(t){if(t instanceof Ps)Os.warn(t.message);else{const s=Rr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Os.warn(s.message)}}}function u0(i){return`${i.name}!${i.options.appId}`}/**
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
 */const d1=1024,p1=30;class m1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new g1(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=XE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>p1){const c=y1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Os.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=XE(),{heartbeatsToSend:s,unsentEntries:a}=_1(this._heartbeatsCache.heartbeats),l=lf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Os.warn(t),""}}}function XE(){return new Date().toISOString().substring(0,10)}function _1(i,e=d1){const t=[];let s=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),ZE(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),ZE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class g1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JR()?eI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await f1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return $E(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return $E(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function ZE(i){return lf(JSON.stringify({version:2,heartbeats:i})).length}function y1(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function v1(i){Ra(new kr("platform-logger",e=>new OI(e),"PRIVATE")),Ra(new kr("heartbeat",e=>new m1(e),"PRIVATE")),Fi(Pm,QE,i),Fi(Pm,QE,"esm2017"),Fi("fire-js","")}v1("");function S_(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(t[s[a]]=i[s[a]]);return t}function c0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const E1=c0,h0=new ac("auth","Firebase",c0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=new jf("@firebase/auth");function T1(i,...e){ff.logLevel<=je.WARN&&ff.warn(`Auth (${Ua}): ${i}`,...e)}function Xh(i,...e){ff.logLevel<=je.ERROR&&ff.error(`Auth (${Ua}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(i,...e){throw A_(i,...e)}function qi(i,...e){return A_(i,...e)}function f0(i,e,t){const s=Object.assign(Object.assign({},E1()),{[e]:t});return new ac("auth","Firebase",s).create(e,{appName:i.name})}function Ns(i){return f0(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function A_(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return h0.create(i,...e)}function Ce(i,e,...t){if(!i)throw A_(e,...t)}function bs(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Xh(e),new Error(e)}function ks(i,e){i||bs(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function S1(){return JE()==="http:"||JE()==="https:"}function JE(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(S1()||YR()||"connection"in navigator)?navigator.onLine:!0}function w1(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t){this.shortDelay=e,this.longDelay=t,ks(t>e,"Short delay should be less than long delay!"),this.isMobile=v_()||n0()}get(){return A1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(i,e){ks(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=new oc(3e4,6e4);function Br(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function zr(i,e,t,s,a={}){return p0(i,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=ol(Object.assign({key:i.config.apiKey},c)).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const _=Object.assign({method:e,headers:m},l);return QR()||(_.referrerPolicy="no-referrer"),d0.fetch()(m0(i,i.config.apiHost,t,d),_)})}async function p0(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},b1),e);try{const a=new I1(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw zh(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[m,_]=d.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw zh(i,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw zh(i,"email-already-in-use",c);if(m==="USER_DISABLED")throw zh(i,"user-disabled",c);const E=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw f0(i,E,_);Si(i,E)}}catch(a){if(a instanceof Ps)throw a;Si(i,"network-request-failed",{message:String(a)})}}async function lc(i,e,t,s,a={}){const l=await zr(i,e,t,s,a);return"mfaPendingCredential"in l&&Si(i,"multi-factor-auth-required",{_serverResponse:l}),l}function m0(i,e,t,s){const a=`${e}${t}?${s}`;return i.config.emulator?w_(i.config,a):`${i.config.apiScheme}://${a}`}function R1(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class I1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(qi(this.auth,"network-request-failed")),C1.get())})}}function zh(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=qi(i,e,s);return a.customData._tokenResponse=t,a}function eT(i){return i!==void 0&&i.enterprise!==void 0}class N1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return R1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function D1(i,e){return zr(i,"GET","/v2/recaptchaConfig",Br(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(i,e){return zr(i,"POST","/v1/accounts:delete",e)}async function _0(i,e){return zr(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function k1(i,e=!1){const t=cn(i),s=await t.getIdToken(e),a=b_(s);Ce(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:ju(vm(a.auth_time)),issuedAtTime:ju(vm(a.iat)),expirationTime:ju(vm(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function vm(i){return Number(i)*1e3}function b_(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Xh("JWT malformed, contained fewer than 3 sections"),null;try{const a=uf(t);return a?JSON.parse(a):(Xh("Failed to decode base64 JWT payload"),null)}catch(a){return Xh("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function tT(i){const e=b_(i);return Ce(e,"internal-error"),Ce(typeof e.exp<"u","internal-error"),Ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $u(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ps&&x1(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function x1({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ju(this.lastLoginAt),this.creationTime=ju(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function df(i){var e;const t=i.auth,s=await i.getIdToken(),a=await $u(i,_0(t,{idToken:s}));Ce(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?g0(l.providerUserInfo):[],d=V1(i.providerData,c),m=i.isAnonymous,_=!(i.email&&l.passwordHash)&&!(d!=null&&d.length),E=m?_:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new jm(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(i,T)}async function P1(i){const e=cn(i);await df(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function V1(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function g0(i){return i.map(e=>{var{providerId:t}=e,s=S_(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(i,e){const t=await p0(i,{},async()=>{const s=ol({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=m0(i,a,"/v1/token",`key=${l}`),d=await i._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",d0.fetch()(c,{method:"POST",headers:d,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function U1(i,e){return zr(i,"POST","/v2/accounts:revokeToken",Br(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ce(e.idToken,"internal-error"),Ce(typeof e.idToken<"u","internal-error"),Ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ce(e.length!==0,"internal-error");const t=tT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await L1(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new Fo;return s&&(Ce(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Ce(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ce(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fo,this.toJSON())}_performRefresh(){return bs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(i,e){Ce(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Cs{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=S_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new M1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new jm(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await $u(this,this.stsTokenManager.getToken(this.auth,e));return Ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return k1(this,e)}reload(){return P1(this)}_assign(e){this!==e&&(Ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Cs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await df(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(Ns(this.auth));const e=await this.getIdToken();return await $u(this,O1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,d,m,_,E;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,C=(a=t.email)!==null&&a!==void 0?a:void 0,P=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,z=(c=t.photoURL)!==null&&c!==void 0?c:void 0,X=(d=t.tenantId)!==null&&d!==void 0?d:void 0,H=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,Y=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ee=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:le,emailVerified:se,isAnonymous:he,providerData:Te,stsTokenManager:k}=t;Ce(le&&k,e,"internal-error");const R=Fo.fromJSON(this.name,k);Ce(typeof le=="string",e,"internal-error"),yr(T,e.name),yr(C,e.name),Ce(typeof se=="boolean",e,"internal-error"),Ce(typeof he=="boolean",e,"internal-error"),yr(P,e.name),yr(z,e.name),yr(X,e.name),yr(H,e.name),yr(Y,e.name),yr(ee,e.name);const b=new Cs({uid:le,auth:e,email:C,emailVerified:se,displayName:T,isAnonymous:he,photoURL:z,phoneNumber:P,tenantId:X,stsTokenManager:R,createdAt:Y,lastLoginAt:ee});return Te&&Array.isArray(Te)&&(b.providerData=Te.map(I=>Object.assign({},I))),H&&(b._redirectEventId=H),b}static async _fromIdTokenResponse(e,t,s=!1){const a=new Fo;a.updateFromServerResponse(t);const l=new Cs({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await df(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ce(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?g0(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new Fo;d.updateFromIdToken(s);const m=new Cs({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new jm(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,_),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=new Map;function Rs(i){ks(i instanceof Function,"Expected a class definition");let e=nT.get(i);return e?(ks(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,nT.set(i,e),e)}/**
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
 */class y0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}y0.type="NONE";const iT=y0;/**
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
 */function Zh(i,e,t){return`firebase:${i}:${e}:${t}`}class qo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=Zh(this.userKey,a.apiKey,l),this.fullPersistenceKey=Zh("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new qo(Rs(iT),e,s);const a=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=a[0]||Rs(iT);const c=Zh(s,e.config.apiKey,e.name);let d=null;for(const _ of t)try{const E=await _._get(c);if(E){const T=Cs._fromJSON(e,E);_!==l&&(d=T),l=_;break}}catch{}const m=a.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new qo(l,e,s):(l=m[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(c)}catch{}})),new qo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(v0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(w0(e))return"Blackberry";if(b0(e))return"Webos";if(E0(e))return"Safari";if((e.includes("chrome/")||T0(e))&&!e.includes("edge/"))return"Chrome";if(A0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function v0(i=An()){return/firefox\//i.test(i)}function E0(i=An()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function T0(i=An()){return/crios\//i.test(i)}function S0(i=An()){return/iemobile/i.test(i)}function A0(i=An()){return/android/i.test(i)}function w0(i=An()){return/blackberry/i.test(i)}function b0(i=An()){return/webos/i.test(i)}function C_(i=An()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function j1(i=An()){var e;return C_(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function B1(){return $R()&&document.documentMode===10}function C0(i=An()){return C_(i)||A0(i)||b0(i)||w0(i)||/windows phone/i.test(i)||S0(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(i,e=[]){let t;switch(i){case"Browser":t=sT(An());break;case"Worker":t=`${sT(An())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ua}/${s}`}/**
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
 */class z1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const m=e(l);c(m)}catch(m){d(m)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function H1(i,e={}){return zr(i,"GET","/v2/passwordPolicy",Br(i,e))}/**
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
 */const F1=6;class q1{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:F1,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,d;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(c=m.containsNumericCharacter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(d=m.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),m}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rT(this),this.idTokenSubscription=new rT(this),this.beforeStateQueue=new z1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rs(t)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await qo.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await _0(this,{idToken:e}),s=await Cs._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(qn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===d)&&(m!=null&&m.user)&&(a=m.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await df(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=w1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qn(this.app))return Promise.reject(Ns(this));const t=e?cn(e):null;return t&&Ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(Ns(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qn(this.app)?Promise.reject(Ns(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await H1(this),t=new q1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ac("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await U1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rs(e)||this._popupRedirectResolver;Ce(t,this,"argument-error"),this.redirectPersistenceManager=await qo.create(this,[Rs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ce(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,a);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=R0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(qn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&T1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ja(i){return cn(i)}class rT{constructor(e){this.auth=e,this.observer=null,this.addObserver=oI(t=>this.observer=t)}get next(){return Ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function K1(i){Bf=i}function I0(i){return Bf.loadJS(i)}function W1(){return Bf.recaptchaEnterpriseScript}function Q1(){return Bf.gapiScript}function Y1(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class $1{constructor(){this.enterprise=new X1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class X1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Z1="recaptcha-enterprise",N0="NO_RECAPTCHA";class J1{constructor(e){this.type=Z1,this.auth=ja(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{D1(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const _=new N1(m);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,c(_.siteKey)}}).catch(m=>{d(m)})})}function a(l,c,d){const m=window.grecaptcha;eT(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(_=>{c(_)}).catch(()=>{c(N0)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $1().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(d=>{if(!t&&eT(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let m=W1();m.length!==0&&(m+=d),I0(m).then(()=>{a(d,l,c)}).catch(_=>{c(_)})}}).catch(d=>{c(d)})})}}async function aT(i,e,t,s=!1,a=!1){const l=new J1(i);let c;if(a)c=N0;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const m=d.phoneEnrollmentInfo.phoneNumber,_=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:_,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const m=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Bm(i,e,t,s,a){var l;if(!((l=i._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await aT(i,e,t,t==="getOobCode");return s(i,c)}else return s(i,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await aT(i,e,t,t==="getOobCode");return s(i,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(i,e){const t=T_(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Or(l,e??{}))return a;Si(a,"already-initialized")}return t.initialize({options:e})}function tN(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Rs);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function nN(i,e,t){const s=ja(i);Ce(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=D0(e),{host:c,port:d}=iN(e),m=d===null?"":`:${d}`,_={url:`${l}//${c}${m}/`},E=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ce(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ce(Or(_,s.config.emulator)&&Or(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,sN()}function D0(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function iN(i){const e=D0(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:oT(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:oT(c)}}}function oT(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function sN(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bs("not implemented")}_getIdTokenResponse(e){return bs("not implemented")}_linkToIdToken(e,t){return bs("not implemented")}_getReauthenticationResolver(e){return bs("not implemented")}}async function rN(i,e){return zr(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(i,e){return lc(i,"POST","/v1/accounts:signInWithPassword",Br(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oN(i,e){return lc(i,"POST","/v1/accounts:signInWithEmailLink",Br(i,e))}async function lN(i,e){return lc(i,"POST","/v1/accounts:signInWithEmailLink",Br(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends R_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Xu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Xu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bm(e,t,"signInWithPassword",aN);case"emailLink":return oN(e,{email:this._email,oobCode:this._password});default:Si(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bm(e,s,"signUpPassword",rN);case"emailLink":return lN(e,{idToken:t,email:this._email,oobCode:this._password});default:Si(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(i,e){return lc(i,"POST","/v1/accounts:signInWithIdp",Br(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN="http://localhost";class Ia extends R_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ia(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Si("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=S_(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new Ia(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Go(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Go(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Go(e,t)}buildRequest(){const e={requestUri:uN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ol(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hN(i){const e=xu(Mu(i)).link,t=e?xu(Mu(e)).deep_link_id:null,s=xu(Mu(i)).deep_link_id;return(s?xu(Mu(s)).link:null)||s||t||e||i}class I_{constructor(e){var t,s,a,l,c,d;const m=xu(Mu(e)),_=(t=m.apiKey)!==null&&t!==void 0?t:null,E=(s=m.oobCode)!==null&&s!==void 0?s:null,T=cN((a=m.mode)!==null&&a!==void 0?a:null);Ce(_&&E&&T,"argument-error"),this.apiKey=_,this.operation=T,this.code=E,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=m.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=m.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=hN(e);try{return new I_(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.providerId=ll.PROVIDER_ID}static credential(e,t){return Xu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=I_.parseLink(t);return Ce(s,"argument-error"),Xu._fromEmailAndCode(e,s.code,s.tenantId)}}ll.PROVIDER_ID="password";ll.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ll.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class uc extends O0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends uc{constructor(){super("facebook.com")}static credential(e){return Ia._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends uc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ia._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Sr.credential(t,s)}catch{return null}}}Sr.GOOGLE_SIGN_IN_METHOD="google.com";Sr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends uc{constructor(){super("github.com")}static credential(e){return Ia._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.GITHUB_SIGN_IN_METHOD="github.com";Ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends uc{constructor(){super("twitter.com")}static credential(e,t){return Ia._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return wr.credential(t,s)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(i,e){return lc(i,"POST","/v1/accounts:signUp",Br(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await Cs._fromIdTokenResponse(e,s,a),c=lT(s);return new Na({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=lT(s);return new Na({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function lT(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf extends Ps{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,pf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new pf(e,t,s,a)}}function k0(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?pf._fromErrorAndOperation(i,l,e,s):l})}async function dN(i,e,t=!1){const s=await $u(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Na._forOperation(i,"link",s)}/**
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
 */async function pN(i,e,t=!1){const{auth:s}=i;if(qn(s.app))return Promise.reject(Ns(s));const a="reauthenticate";try{const l=await $u(i,k0(s,a,e,i),t);Ce(l.idToken,s,"internal-error");const c=b_(l.idToken);Ce(c,s,"internal-error");const{sub:d}=c;return Ce(i.uid===d,s,"user-mismatch"),Na._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Si(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(i,e,t=!1){if(qn(i.app))return Promise.reject(Ns(i));const s="signIn",a=await k0(i,s,e),l=await Na._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(l.user),l}async function mN(i,e){return x0(ja(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M0(i){const e=ja(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _N(i,e,t){if(qn(i.app))return Promise.reject(Ns(i));const s=ja(i),c=await Bm(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fN).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&M0(i),m}),d=await Na._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(d.user),d}function gN(i,e,t){return qn(i.app)?Promise.reject(Ns(i)):mN(cn(i),ll.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&M0(i),s})}function yN(i,e,t,s){return cn(i).onIdTokenChanged(e,t,s)}function vN(i,e,t){return cn(i).beforeAuthStateChanged(e,t)}function EN(i,e,t,s){return cn(i).onAuthStateChanged(e,t,s)}function P0(i){return cn(i).signOut()}const mf="__sak";/**
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
 */class V0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mf,"1"),this.storage.removeItem(mf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=1e3,SN=10;class L0 extends V0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=C0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,m)=>{this.notifyListeners(c,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);B1()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,SN):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},TN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}L0.type="LOCAL";const AN=L0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0 extends V0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}U0.type="SESSION";const j0=U0;/**
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
 */function wN(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class zf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new zf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async _=>_(t.origin,l)),m=await wN(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class bN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,m)=>{const _=N_("",20);a.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const C=T;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(C.data.response);break;default:clearTimeout(E),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(){return window}function CN(i){Gi().location.href=i}/**
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
 */function B0(){return typeof Gi().WorkerGlobalScope<"u"&&typeof Gi().importScripts=="function"}async function RN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IN(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function NN(){return B0()?self:null}/**
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
 */const z0="firebaseLocalStorageDb",DN=1,_f="firebaseLocalStorage",H0="fbase_key";class cc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Hf(i,e){return i.transaction([_f],e?"readwrite":"readonly").objectStore(_f)}function ON(){const i=indexedDB.deleteDatabase(z0);return new cc(i).toPromise()}function zm(){const i=indexedDB.open(z0,DN);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(_f,{keyPath:H0})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(_f)?e(s):(s.close(),await ON(),e(await zm()))})})}async function uT(i,e,t){const s=Hf(i,!0).put({[H0]:e,value:t});return new cc(s).toPromise()}async function kN(i,e){const t=Hf(i,!1).get(e),s=await new cc(t).toPromise();return s===void 0?null:s.value}function cT(i,e){const t=Hf(i,!0).delete(e);return new cc(t).toPromise()}const xN=800,MN=3;class F0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>MN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return B0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zf._getInstance(NN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await RN(),!this.activeServiceWorker)return;this.sender=new bN(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zm();return await uT(e,mf,"1"),await cT(e,mf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>uT(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>kN(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>cT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Hf(a,!1).getAll();return new cc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}F0.type="LOCAL";const PN=F0;new oc(3e4,6e4);/**
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
 */function VN(i,e){return e?Rs(e):(Ce(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class D_ extends R_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Go(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Go(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Go(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function LN(i){return x0(i.auth,new D_(i),i.bypassAuthState)}function UN(i){const{auth:e,user:t}=i;return Ce(t,e,"internal-error"),pN(t,new D_(i),i.bypassAuthState)}async function jN(i){const{auth:e,user:t}=i;return Ce(t,e,"internal-error"),dN(t,new D_(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(m))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LN;case"linkViaPopup":case"linkViaRedirect":return jN;case"reauthViaPopup":case"reauthViaRedirect":return UN;default:Si(this.auth,"internal-error")}}resolve(e){ks(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ks(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=new oc(2e3,1e4);class Bo extends q0{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Bo.currentPopupAction&&Bo.currentPopupAction.cancel(),Bo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ce(e,this.auth,"internal-error"),e}async onExecution(){ks(this.filter.length===1,"Popup operations only handle one event");const e=N_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(qi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BN.get())};e()}}Bo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN="pendingRedirect",Jh=new Map;class HN extends q0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Jh.get(this.auth._key());if(!e){try{const s=await FN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Jh.set(this.auth._key(),e)}return this.bypassAuthState||Jh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FN(i,e){const t=KN(e),s=GN(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function qN(i,e){Jh.set(i._key(),e)}function GN(i){return Rs(i._redirectPersistence)}function KN(i){return Zh(zN,i.config.apiKey,i.name)}async function WN(i,e,t=!1){if(qn(i.app))return Promise.reject(Ns(i));const s=ja(i),a=VN(s,e),c=await new HN(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=10*60*1e3;class YN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$N(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!G0(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(qi(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QN&&this.cachedEventUids.clear(),this.cachedEventUids.has(hT(e))}saveEventToCache(e){this.cachedEventUids.add(hT(e)),this.lastProcessedEventTime=Date.now()}}function hT(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function G0({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $N(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return G0(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XN(i,e={}){return zr(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JN=/^https?/;async function eD(i){if(i.config.emulator)return;const{authorizedDomains:e}=await XN(i);for(const t of e)try{if(tD(t))return}catch{}Si(i,"unauthorized-domain")}function tD(i){const e=Um(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!JN.test(t))return!1;if(ZN.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const nD=new oc(3e4,6e4);function fT(){const i=Gi().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function iD(i){return new Promise((e,t)=>{var s,a,l;function c(){fT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fT(),t(qi(i,"network-request-failed"))},timeout:nD.get()})}if(!((a=(s=Gi().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Gi().gapi)===null||l===void 0)&&l.load)c();else{const d=Y1("iframefcb");return Gi()[d]=()=>{gapi.load?c():t(qi(i,"network-request-failed"))},I0(`${Q1()}?onload=${d}`).catch(m=>t(m))}}).catch(e=>{throw ef=null,e})}let ef=null;function sD(i){return ef=ef||iD(i),ef}/**
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
 */const rD=new oc(5e3,15e3),aD="__/auth/iframe",oD="emulator/auth/iframe",lD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cD(i){const e=i.config;Ce(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?w_(e,oD):`https://${i.config.authDomain}/${aD}`,s={apiKey:e.apiKey,appName:i.name,v:Ua},a=uD.get(i.config.apiHost);a&&(s.eid=a);const l=i._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${ol(s).slice(1)}`}async function hD(i){const e=await sD(i),t=Gi().gapi;return Ce(t,i,"internal-error"),e.open({where:document.body,url:cD(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lD,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=qi(i,"network-request-failed"),d=Gi().setTimeout(()=>{l(c)},rD.get());function m(){Gi().clearTimeout(d),a(s)}s.ping(m).then(m,()=>{l(c)})}))}/**
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
 */const fD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dD=500,pD=600,mD="_blank",_D="http://localhost";class dT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gD(i,e,t,s=dD,a=pD){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const m=Object.assign(Object.assign({},fD),{width:s.toString(),height:a.toString(),top:l,left:c}),_=An().toLowerCase();t&&(d=T0(_)?mD:t),v0(_)&&(e=e||_D,m.scrollbars="yes");const E=Object.entries(m).reduce((C,[P,z])=>`${C}${P}=${z},`,"");if(j1(_)&&d!=="_self")return yD(e||"",d),new dT(null);const T=window.open(e||"",d,E);Ce(T,i,"popup-blocked");try{T.focus()}catch{}return new dT(T)}function yD(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const vD="__/auth/handler",ED="emulator/auth/handler",TD=encodeURIComponent("fac");async function pT(i,e,t,s,a,l){Ce(i.config.authDomain,i,"auth-domain-config-required"),Ce(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Ua,eventId:a};if(e instanceof O0){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",km(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))c[E]=T}if(e instanceof uc){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(c.scopes=E.join(","))}i.tenantId&&(c.tid=i.tenantId);const d=c;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const m=await i._getAppCheckToken(),_=m?`#${TD}=${encodeURIComponent(m)}`:"";return`${SD(i)}?${ol(d).slice(1)}${_}`}function SD({config:i}){return i.emulator?w_(i,ED):`https://${i.authDomain}/${vD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="webStorageSupport";class AD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=j0,this._completeRedirectFn=WN,this._overrideRedirectResult=qN}async _openPopup(e,t,s,a){var l;ks((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await pT(e,t,s,Um(),a);return gD(e,c,N_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await pT(e,t,s,Um(),a);return CN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(ks(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await hD(e),s=new YN(e);return t.register("authEvent",a=>(Ce(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Em,{type:Em},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[Em];c!==void 0&&t(!!c),Si(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return C0()||E0()||C_()}}const wD=AD;var mT="@firebase/auth",_T="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RD(i){Ra(new kr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Ce(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:c,authDomain:d,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:R0(i)},_=new G1(s,a,l,m);return tN(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ra(new kr("auth-internal",e=>{const t=ja(e.getProvider("auth").getImmediate());return(s=>new bD(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fi(mT,_T,CD(i)),Fi(mT,_T,"esm2017")}/**
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
 */const ID=5*60,ND=t0("authIdTokenMaxAge")||ID;let gT=null;const DD=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>ND)return;const a=t==null?void 0:t.token;gT!==a&&(gT=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function OD(i=o0()){const e=T_(i,"auth");if(e.isInitialized())return e.getImmediate();const t=eN(i,{popupRedirectResolver:wD,persistence:[PN,AN,j0]}),s=t0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=DD(l.toString());vN(t,c,()=>c(t.currentUser)),yN(t,d=>c(d))}}const a=JS("auth");return a&&nN(t,`http://${a}`),t}function kD(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}K1({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const l=qi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",kD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RD("Browser");var xD="firebase",MD="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fi(xD,MD,"app");var yT={};const vT="@firebase/database",ET="1.0.13";/**
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
 */let K0="";function PD(i){K0=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ln(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Qu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Vs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new VD(e)}}catch{}return new LD},ba=W0("localStorage"),UD=W0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new jf("@firebase/database"),jD=function(){let i=1;return function(){return i++}}(),Q0=function(i){const e=hI(i),t=new aI;t.update(e);const s=t.digest();return g_.encodeByteArray(s)},hc=function(...i){let e="";for(let t=0;t<i.length;t++){const s=i[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=hc.apply(null,s):typeof s=="object"?e+=ln(s):e+=s,e+=" "}return e};let Bu=null,TT=!0;const BD=function(i,e){de(!0,"Can't turn on custom loggers persistently."),Ko.logLevel=je.VERBOSE,Bu=Ko.log.bind(Ko)},vn=function(...i){if(TT===!0&&(TT=!1,Bu===null&&UD.get("logging_enabled")===!0&&BD()),Bu){const e=hc.apply(null,i);Bu(e)}},fc=function(i){return function(...e){vn(i,...e)}},Hm=function(...i){const e="FIREBASE INTERNAL ERROR: "+hc(...i);Ko.error(e)},Da=function(...i){const e=`FIREBASE FATAL ERROR: ${hc(...i)}`;throw Ko.error(e),new Error(e)},Kn=function(...i){const e="FIREBASE WARNING: "+hc(...i);Ko.warn(e)},zD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Kn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Y0=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},HD=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},$o="[MIN_NAME]",Oa="[MAX_NAME]",ul=function(i,e){if(i===e)return 0;if(i===$o||e===Oa)return-1;if(e===$o||i===Oa)return 1;{const t=ST(i),s=ST(e);return t!==null?s!==null?t-s===0?i.length-e.length:t-s:-1:s!==null?1:i<e?-1:1}},FD=function(i,e){return i===e?0:i<e?-1:1},Au=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+ln(e))},O_=function(i){if(typeof i!="object"||i===null)return ln(i);const e=[];for(const s in i)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ln(e[s]),t+=":",t+=O_(i[e[s]]);return t+="}",t},$0=function(i,e){const t=i.length;if(t<=e)return[i];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(i.substring(a,t)):s.push(i.substring(a,a+e));return s};function fi(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const X0=function(i){de(!Y0(i),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,m;i===0?(l=0,c=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(i)/Math.LN2),s),l=d+s,c=Math.round(i*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(i/Math.pow(2,1-s-t))));const _=[];for(m=t;m;m-=1)_.push(c%2?1:0),c=Math.floor(c/2);for(m=e;m;m-=1)_.push(l%2?1:0),l=Math.floor(l/2);_.push(a?1:0),_.reverse();const E=_.join("");let T="";for(m=0;m<64;m+=8){let C=parseInt(E.substr(m,8),2).toString(16);C.length===1&&(C="0"+C),T=T+C}return T.toLowerCase()},qD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},GD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},KD=new RegExp("^-?(0*)\\d{1,10}$"),WD=-2147483648,QD=2147483647,ST=function(i){if(KD.test(i)){const e=Number(i);if(e>=WD&&e<=QD)return e}return null},dc=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Kn("Exception was thrown by user callback.",t),e},Math.floor(0))}},YD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zu=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class $D{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,qn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Kn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(vn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Kn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="5",Z0="v",J0="s",eA="r",tA="f",nA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,iA="ls",sA="p",Fm="ac",rA="websocket",aA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,t,s,a,l=!1,c="",d=!1,m=!1,_=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=m,this.emulatorOptions=_,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ba.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ba.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function JD(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function oA(i,e,t){de(typeof e=="string","typeof type must == string"),de(typeof t=="object","typeof params must == object");let s;if(e===rA)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===aA)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);JD(i)&&(t.ns=i.namespace);const a=[];return fi(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(){this.counters_={}}incrementCounter(e,t=1){Vs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return jR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm={},Sm={};function x_(i){const e=i.toString();return Tm[e]||(Tm[e]=new eO),Tm[e]}function tO(i,e){const t=i.toString();return Sm[t]||(Sm[t]=e()),Sm[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&dc(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="start",iO="close",sO="pLPCommand",rO="pRTLPCB",lA="id",uA="pw",cA="ser",aO="cb",oO="seg",lO="ts",uO="d",cO="dframe",hA=1870,fA=30,hO=hA-fA,fO=25e3,dO=3e4;class zo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fc(e),this.stats_=x_(t),this.urlFn=m=>(this.appCheckToken&&(m[Fm]=this.appCheckToken),oA(t,aA,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new nO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dO)),HD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new M_((...l)=>{const[c,d,m,_,E]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===AT)this.id=d,this.password=m;else if(c===iO)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[AT]="t",s[cA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[aO]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Z0]=k_,this.transportSessionId&&(s[J0]=this.transportSessionId),this.lastSessionId&&(s[iA]=this.lastSessionId),this.applicationId&&(s[sA]=this.applicationId),this.appCheckToken&&(s[Fm]=this.appCheckToken),typeof location<"u"&&location.hostname&&nA.test(location.hostname)&&(s[eA]=tA);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zo.forceAllow_=!0}static forceDisallow(){zo.forceDisallow_=!0}static isAvailable(){return zo.forceAllow_?!0:!zo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!qD()&&!GD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ln(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=XS(t),a=$0(s,hO);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[cO]="t",s[lA]=e,s[uA]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ln(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class M_{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jD(),window[sO+this.uniqueCallbackIdentifier]=e,window[rO+this.uniqueCallbackIdentifier]=t,this.myIFrame=M_.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){vn("frame writing exception"),d.stack&&vn(d.stack),vn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||vn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[lA]=this.myID,e[uA]=this.myPW,e[cA]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+fA+s.length<=hA;){const c=this.pendingSegs.shift();s=s+"&"+oO+a+"="+c.seg+"&"+lO+a+"="+c.ts+"&"+uO+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(fO)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{vn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=16384,mO=45e3;let gf=null;typeof MozWebSocket<"u"?gf=MozWebSocket:typeof WebSocket<"u"&&(gf=WebSocket);class vi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fc(this.connId),this.stats_=x_(t),this.connURL=vi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[Z0]=k_,typeof location<"u"&&location.hostname&&nA.test(location.hostname)&&(c[eA]=tA),t&&(c[J0]=t),s&&(c[iA]=s),a&&(c[Fm]=a),l&&(c[sA]=l),oA(e,rA,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ba.set("previous_websocket_failure",!0);try{let s;XR(),this.mySock=new gf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){vi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&gf!==null&&!vi.forceDisallow_}static previouslyFailed(){return ba.isInMemoryStorage||ba.get("previous_websocket_failure")===!0}markConnectionHealthy(){ba.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Qu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(de(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ln(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=$0(t,pO);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(mO))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vi.responsesRequiredToBeHealthy=2;vi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{static get ALL_TRANSPORTS(){return[zo,vi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=vi&&vi.isAvailable();let s=t&&!vi.previouslyFailed();if(e.webSocketOnly&&(t||Kn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[vi];else{const a=this.transports_=[];for(const l of Zu.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Zu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=6e4,gO=5e3,yO=10*1024,vO=100*1024,Am="t",wT="d",EO="s",bT="r",TO="e",CT="o",RT="a",IT="n",NT="p",SO="h";class AO{constructor(e,t,s,a,l,c,d,m,_,E){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=m,this.onKill_=_,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fc("c:"+this.id+":"),this.transportManager_=new Zu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=zu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>vO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>yO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Am in e){const t=e[Am];t===RT?this.upgradeIfSecondaryHealthy_():t===bT?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===CT&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Au("t",e),s=Au("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:NT,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:RT,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:IT,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Au("t",e),s=Au("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Au(Am,e);if(wT in e){const s=e[wT];if(t===SO){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===IT){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===EO?this.onConnectionShutdown_(s):t===bT?this.onReset_(s):t===TO?Hm("Server Error: "+s):t===CT?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),k_!==s&&Kn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),zu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_O))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:NT,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ba.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.allowedEvents_=e,this.listeners_={},de(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){de(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf extends pA{static getInstance(){return new yf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!v_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return de(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=32,OT=768;class mt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function lt(){return new mt("")}function Qe(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function xr(i){return i.pieces_.length-i.pieceNum_}function pt(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new mt(i.pieces_,e)}function mA(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function wO(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function _A(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function gA(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new mt(e,0)}function Xt(i,e){const t=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)t.push(i.pieces_[s]);if(e instanceof mt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new mt(t,0)}function Fe(i){return i.pieceNum_>=i.pieces_.length}function hi(i,e){const t=Qe(i),s=Qe(e);if(t===null)return e;if(t===s)return hi(pt(i),pt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function yA(i,e){if(xr(i)!==xr(e))return!1;for(let t=i.pieceNum_,s=e.pieceNum_;t<=i.pieces_.length;t++,s++)if(i.pieces_[t]!==e.pieces_[s])return!1;return!0}function Ei(i,e){let t=i.pieceNum_,s=e.pieceNum_;if(xr(i)>xr(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class bO{constructor(e,t){this.errorPrefix_=t,this.parts_=_A(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Uf(this.parts_[s]);vA(this)}}function CO(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Uf(e),vA(i)}function RO(i){const e=i.parts_.pop();i.byteLength_-=Uf(e),i.parts_.length>0&&(i.byteLength_-=1)}function vA(i){if(i.byteLength_>OT)throw new Error(i.errorPrefix_+"has a key path longer than "+OT+" bytes ("+i.byteLength_+").");if(i.parts_.length>DT)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+DT+") or object contains a cycle "+wa(i))}function wa(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_ extends pA{static getInstance(){return new P_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return de(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=1e3,IO=60*5*1e3,kT=30*1e3,NO=1.3,DO=3e4,OO="server_kill",xT=3;class Ds extends dA{constructor(e,t,s,a,l,c,d,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=m,this.id=Ds.nextPersistentConnectionId_++,this.log_=fc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wu,this.maxReconnectDelay_=IO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");P_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(ln(l)),de(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new y_,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),de(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),de(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const m=d.d,_=d.s;Ds.warnOnListenWarnings_(m,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),_!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(_,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Vs(e,"w")){const s=Yo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Kn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||rI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=kT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=sI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),de(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ln(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Hm("Unrecognized action received from server: "+ln(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){de(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>DO&&(this.reconnectDelay_=wu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*NO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Ds.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const m=function(){d?d.close():(c=!0,s())},_=function(T){de(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:m,sendRequest:_};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,C]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);c?vn("getToken() completed but was canceled"):(vn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=C&&C.token,d=new AO(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,P=>{Kn(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(OO)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Kn(T),m())}}}interrupt(e){vn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){vn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],km(this.interruptReasons_)&&(this.reconnectDelay_=wu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>O_(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new mt(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){vn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xT&&(this.reconnectDelay_=kT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){vn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+K0.replace(/\./g,"-")]=1,v_()?e["framework.cordova"]=1:n0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yf.getInstance().currentlyOnline();return km(this.interruptReasons_)&&e}}Ds.nextPersistentConnectionId_=0;Ds.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ff{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ye($o,e),a=new Ye($o,t);return this.compare(s,a)!==0}minPost(){return Ye.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh;class EA extends Ff{static get __EMPTY_NODE(){return Hh}static set __EMPTY_NODE(e){Hh=e}compare(e,t){return ul(e.name,t.name)}isDefinedOn(e){throw al("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ye.MIN}maxPost(){return new Ye(Oa,Hh)}makePost(e,t){return de(typeof e=="string","KeyIndex indexValue must always be a string."),new Ye(e,Hh)}toString(){return".key"}}const Wo=new EA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fh=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Fn=class Pu{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Pu.RED,this.left=a??zi.EMPTY_NODE,this.right=l??zi.EMPTY_NODE}copy(e,t,s,a,l){return new Pu(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return zi.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return zi.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Fn.RED=!0;Fn.BLACK=!1;class kO{copy(e,t,s,a,l){return this}insert(e,t,s){return new Fn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let zi=class tf{constructor(e,t=tf.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new tf(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Fn.BLACK,null,null))}remove(e){return new tf(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Fh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Fh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Fh(this.root_,null,this.comparator_,!0,e)}};zi.EMPTY_NODE=new kO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(i,e){return ul(i.name,e.name)}function V_(i,e){return ul(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qm;function MO(i){qm=i}const TA=function(i){return typeof i=="number"?"number:"+X0(i):"string:"+i},SA=function(i){if(i.isLeafNode()){const e=i.val();de(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vs(e,".sv"),"Priority must be a string or number.")}else de(i===qm||i.isEmpty(),"priority of unexpected type.");de(i===qm||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MT;class Yt{static set __childrenNodeConstructor(e){MT=e}static get __childrenNodeConstructor(){return MT}constructor(e,t=Yt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,de(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),SA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Yt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Fe(e)?this:Qe(e)===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Yt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Qe(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(de(s!==".priority"||xr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Yt.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+TA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=X0(this.value_):e+=this.value_,this.lazyHash_=Q0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Yt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Yt.__childrenNodeConstructor?-1:(de(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Yt.VALUE_TYPE_ORDER.indexOf(t),l=Yt.VALUE_TYPE_ORDER.indexOf(s);return de(a>=0,"Unknown leaf type: "+t),de(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Yt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AA,wA;function PO(i){AA=i}function VO(i){wA=i}class LO extends Ff{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?ul(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ye.MIN}maxPost(){return new Ye(Oa,new Yt("[PRIORITY-POST]",wA))}makePost(e,t){const s=AA(e);return new Ye(t,new Yt("[PRIORITY-POST]",s))}toString(){return".priority"}}const Sn=new LO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=Math.log(2);class jO{constructor(e){const t=l=>parseInt(Math.log(l)/UO,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vf=function(i,e,t,s){i.sort(e);const a=function(m,_){const E=_-m;let T,C;if(E===0)return null;if(E===1)return T=i[m],C=t?t(T):T,new Fn(C,T.node,Fn.BLACK,null,null);{const P=parseInt(E/2,10)+m,z=a(m,P),X=a(P+1,_);return T=i[P],C=t?t(T):T,new Fn(C,T.node,Fn.BLACK,z,X)}},l=function(m){let _=null,E=null,T=i.length;const C=function(z,X){const H=T-z,Y=T;T-=z;const ee=a(H+1,Y),le=i[H],se=t?t(le):le;P(new Fn(se,le.node,X,null,ee))},P=function(z){_?(_.left=z,_=z):(E=z,_=z)};for(let z=0;z<m.count;++z){const X=m.nextBitIsOne(),H=Math.pow(2,m.count-(z+1));X?C(H,Fn.BLACK):(C(H,Fn.BLACK),C(H,Fn.RED))}return E},c=new jO(i.length),d=l(c);return new zi(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wm;const xo={};class Is{static get Default(){return de(xo&&Sn,"ChildrenNode.ts has not been loaded"),wm=wm||new Is({".priority":xo},{".priority":Sn}),wm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Yo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zi?t:null}hasIndex(e){return Vs(this.indexSet_,e.toString())}addIndex(e,t){de(e!==Wo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Ye.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=vf(s,e.getCompare()):d=xo;const m=e.toString(),_=Object.assign({},this.indexSet_);_[m]=e;const E=Object.assign({},this.indexes_);return E[m]=d,new Is(E,_)}addToIndexes(e,t){const s=cf(this.indexes_,(a,l)=>{const c=Yo(this.indexSet_,l);if(de(c,"Missing index implementation for "+l),a===xo)if(c.isDefinedOn(e.node)){const d=[],m=t.getIterator(Ye.Wrap);let _=m.getNext();for(;_;)_.name!==e.name&&d.push(_),_=m.getNext();return d.push(e),vf(d,c.getCompare())}else return xo;else{const d=t.get(e.name);let m=a;return d&&(m=m.remove(new Ye(e.name,d))),m.insert(e,e.node)}});return new Is(s,this.indexSet_)}removeFromIndexes(e,t){const s=cf(this.indexes_,a=>{if(a===xo)return a;{const l=t.get(e.name);return l?a.remove(new Ye(e.name,l)):a}});return new Is(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu;class it{static get EMPTY_NODE(){return bu||(bu=new it(new zi(V_),null,Is.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&SA(this.priorityNode_),this.children_.isEmpty()&&de(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bu}updatePriority(e){return this.children_.isEmpty()?this:new it(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?bu:t}}getChild(e){const t=Qe(e);return t===null?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(de(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ye(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?bu:this.priorityNode_;return new it(a,c,l)}}updateChild(e,t){const s=Qe(e);if(s===null)return t;{de(Qe(e)!==".priority"||xr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(pt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(Sn,(c,d)=>{t[c]=d.val(e),s++,l&&it.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+TA(this.getPriority().val())+":"),this.forEachChild(Sn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":Q0(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Ye(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ye(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ye(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Ye.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Ye.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===pc?-1:0}withIndex(e){if(e===Wo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new it(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Wo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Sn),a=t.getIterator(Sn);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Wo?null:this.indexMap_.get(e.toString())}}it.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class BO extends it{constructor(){super(new zi(V_),it.EMPTY_NODE,Is.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return it.EMPTY_NODE}isEmpty(){return!1}}const pc=new BO;Object.defineProperties(Ye,{MIN:{value:new Ye($o,it.EMPTY_NODE)},MAX:{value:new Ye(Oa,pc)}});EA.__EMPTY_NODE=it.EMPTY_NODE;Yt.__childrenNodeConstructor=it;MO(pc);VO(pc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=!0;function En(i,e=null){if(i===null)return it.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),de(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new Yt(t,En(e))}if(!(i instanceof Array)&&zO){const t=[];let s=!1;if(fi(i,(c,d)=>{if(c.substring(0,1)!=="."){const m=En(d);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),t.push(new Ye(c,m)))}}),t.length===0)return it.EMPTY_NODE;const l=vf(t,xO,c=>c.name,V_);if(s){const c=vf(t,Sn.getCompare());return new it(l,En(e),new Is({".priority":c},{".priority":Sn}))}else return new it(l,En(e),Is.Default)}else{let t=it.EMPTY_NODE;return fi(i,(s,a)=>{if(Vs(i,s)&&s.substring(0,1)!=="."){const l=En(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(En(e))}}PO(En);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO extends Ff{constructor(e){super(),this.indexPath_=e,de(!Fe(e)&&Qe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?ul(e.name,t.name):l}makePost(e,t){const s=En(e),a=it.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ye(t,a)}maxPost(){const e=it.EMPTY_NODE.updateChild(this.indexPath_,pc);return new Ye(Oa,e)}toString(){return _A(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO extends Ff{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ul(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ye.MIN}maxPost(){return Ye.MAX}makePost(e,t){const s=En(e);return new Ye(t,s)}toString(){return".value"}}const qO=new FO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(i){return{type:"value",snapshotNode:i}}function KO(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function WO(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function PT(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function QO(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Sn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return de(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return de(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$o}hasEnd(){return this.endSet_}getIndexEndValue(){return de(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return de(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Oa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return de(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Sn}copy(){const e=new L_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function VT(i){const e={};if(i.isDefault())return e;let t;if(i.index_===Sn?t="$priority":i.index_===qO?t="$value":i.index_===Wo?t="$key":(de(i.index_ instanceof HO,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=ln(t),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=ln(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+ln(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=ln(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+ln(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function LT(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==Sn&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef extends dA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(de(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=fc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=Ef.getListenId_(e,s),d={};this.listens_[c]=d;const m=VT(e._queryParams);this.restRequest_(l+".json",m,(_,E)=>{let T=E;if(_===404&&(T=null,_=null),_===null&&this.onDataUpdate_(l,T,!1,s),Yo(this.listens_,c)===d){let C;_?_===401?C="permission_denied":C="rest_error:"+_:C="ok",a(C,null)}})}unlisten(e,t){const s=Ef.getListenId_(e,t);delete this.listens_[s]}get(e){const t=VT(e._queryParams),s=e._path.toString(),a=new y_;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ol(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let m=null;if(d.status>=200&&d.status<300){try{m=Qu(d.responseText)}catch{Kn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,m)}else d.status!==401&&d.status!==404&&Kn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(){this.rootNode_=it.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(){return{value:null,children:new Map}}function bA(i,e,t){if(Fe(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const s=Qe(e);i.children.has(s)||i.children.set(s,Tf());const a=i.children.get(s);e=pt(e),bA(a,e,t)}}function Gm(i,e,t){i.value!==null?t(e,i.value):$O(i,(s,a)=>{const l=new mt(e.toString()+"/"+s);Gm(a,l,t)})}function $O(i,e){i.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&fi(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=10*1e3,ZO=30*1e3,JO=5*60*1e3;class ek{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new XO(e);const s=UT+(ZO-UT)*Math.random();zu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;fi(e,(a,l)=>{l>0&&Vs(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),zu(this.reportStats_.bind(this),Math.floor(Math.random()*2*JO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hi;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Hi||(Hi={}));function CA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function RA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function IA(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Hi.ACK_USER_WRITE,this.source=CA()}operationForChild(e){if(Fe(this.path)){if(this.affectedTree.value!=null)return de(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new mt(e));return new Sf(lt(),t,this.revert)}}else return de(Qe(this.path)===e,"operationForChild called for unrelated child."),new Sf(pt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Hi.OVERWRITE}operationForChild(e){return Fe(this.path)?new ka(this.source,lt(),this.snap.getImmediateChild(e)):new ka(this.source,pt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Hi.MERGE}operationForChild(e){if(Fe(this.path)){const t=this.children.subtree(new mt(e));return t.isEmpty()?null:t.value?new ka(this.source,lt(),t.value):new Ju(this.source,lt(),t)}else return de(Qe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ju(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Fe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Qe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function tk(i,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&i.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(QO(c.childName,c.snapshotNode))}),Cu(i,a,"child_removed",e,s,t),Cu(i,a,"child_added",e,s,t),Cu(i,a,"child_moved",l,s,t),Cu(i,a,"child_changed",e,s,t),Cu(i,a,"value",e,s,t),a}function Cu(i,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,m)=>ik(i,d,m)),c.forEach(d=>{const m=nk(i,d,l);a.forEach(_=>{_.respondsTo(d.type)&&e.push(_.createEvent(m,i.query_))})})}function nk(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function ik(i,e,t){if(e.childName==null||t.childName==null)throw al("Should only compare child_ events.");const s=new Ye(e.childName,e.snapshotNode),a=new Ye(t.childName,t.snapshotNode);return i.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(i,e){return{eventCache:i,serverCache:e}}function Hu(i,e,t,s){return NA(new U_(e,t,s),i.serverCache)}function DA(i,e,t,s){return NA(i.eventCache,new U_(e,t,s))}function Km(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function xa(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bm;const sk=()=>(bm||(bm=new zi(FD)),bm);class dt{static fromObject(e){let t=new dt(null);return fi(e,(s,a)=>{t=t.set(new mt(s),a)}),t}constructor(e,t=sk()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:lt(),value:this.value};if(Fe(e))return null;{const s=Qe(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(pt(e),t);return l!=null?{path:Xt(new mt(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Fe(e))return this;{const t=Qe(e),s=this.children.get(t);return s!==null?s.subtree(pt(e)):new dt(null)}}set(e,t){if(Fe(e))return new dt(t,this.children);{const s=Qe(e),l=(this.children.get(s)||new dt(null)).set(pt(e),t),c=this.children.insert(s,l);return new dt(this.value,c)}}remove(e){if(Fe(e))return this.children.isEmpty()?new dt(null):new dt(null,this.children);{const t=Qe(e),s=this.children.get(t);if(s){const a=s.remove(pt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new dt(null):new dt(this.value,l)}else return this}}get(e){if(Fe(e))return this.value;{const t=Qe(e),s=this.children.get(t);return s?s.get(pt(e)):null}}setTree(e,t){if(Fe(e))return t;{const s=Qe(e),l=(this.children.get(s)||new dt(null)).setTree(pt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new dt(this.value,c)}}fold(e){return this.fold_(lt(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Xt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,lt(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Fe(e))return null;{const l=Qe(e),c=this.children.get(l);return c?c.findOnPath_(pt(e),Xt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,lt(),t)}foreachOnPath_(e,t,s){if(Fe(e))return this;{this.value&&s(t,this.value);const a=Qe(e),l=this.children.get(a);return l?l.foreachOnPath_(pt(e),Xt(t,a),s):new dt(null)}}foreach(e){this.foreach_(lt(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Xt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.writeTree_=e}static empty(){return new Ti(new dt(null))}}function Fu(i,e,t){if(Fe(e))return new Ti(new dt(t));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=hi(a,e);return l=l.updateChild(c,t),new Ti(i.writeTree_.set(a,l))}else{const a=new dt(t),l=i.writeTree_.setTree(e,a);return new Ti(l)}}}function jT(i,e,t){let s=i;return fi(t,(a,l)=>{s=Fu(s,Xt(e,a),l)}),s}function BT(i,e){if(Fe(e))return Ti.empty();{const t=i.writeTree_.setTree(e,new dt(null));return new Ti(t)}}function Wm(i,e){return Ba(i,e)!=null}function Ba(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild(hi(t.path,e)):null}function zT(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Sn,(s,a)=>{e.push(new Ye(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Ye(s,a.value))}),e}function Ir(i,e){if(Fe(e))return i;{const t=Ba(i,e);return t!=null?new Ti(new dt(t)):new Ti(i.writeTree_.subtree(e))}}function Qm(i){return i.writeTree_.isEmpty()}function Xo(i,e){return OA(lt(),i.writeTree_,e)}function OA(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(de(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=OA(Xt(i,a),l,t)}),!t.getChild(i).isEmpty()&&s!==null&&(t=t.updateChild(Xt(i,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(i,e){return LA(e,i)}function rk(i,e,t,s,a){de(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(i.visibleWrites=Fu(i.visibleWrites,e,t)),i.lastWriteId=s}function ak(i,e){for(let t=0;t<i.allWrites.length;t++){const s=i.allWrites[t];if(s.writeId===e)return s}return null}function ok(i,e){const t=i.allWrites.findIndex(d=>d.writeId===e);de(t>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[t];i.allWrites.splice(t,1);let a=s.visible,l=!1,c=i.allWrites.length-1;for(;a&&c>=0;){const d=i.allWrites[c];d.visible&&(c>=t&&lk(d,s.path)?a=!1:Ei(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return uk(i),!0;if(s.snap)i.visibleWrites=BT(i.visibleWrites,s.path);else{const d=s.children;fi(d,m=>{i.visibleWrites=BT(i.visibleWrites,Xt(s.path,m))})}return!0}else return!1}function lk(i,e){if(i.snap)return Ei(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&Ei(Xt(i.path,t),e))return!0;return!1}function uk(i){i.visibleWrites=xA(i.allWrites,ck,lt()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function ck(i){return i.visible}function xA(i,e,t){let s=Ti.empty();for(let a=0;a<i.length;++a){const l=i[a];if(e(l)){const c=l.path;let d;if(l.snap)Ei(t,c)?(d=hi(t,c),s=Fu(s,d,l.snap)):Ei(c,t)&&(d=hi(c,t),s=Fu(s,lt(),l.snap.getChild(d)));else if(l.children){if(Ei(t,c))d=hi(t,c),s=jT(s,d,l.children);else if(Ei(c,t))if(d=hi(c,t),Fe(d))s=jT(s,lt(),l.children);else{const m=Yo(l.children,Qe(d));if(m){const _=m.getChild(pt(d));s=Fu(s,lt(),_)}}}else throw al("WriteRecord should have .snap or .children")}}return s}function MA(i,e,t,s,a){if(!s&&!a){const l=Ba(i.visibleWrites,e);if(l!=null)return l;{const c=Ir(i.visibleWrites,e);if(Qm(c))return t;if(t==null&&!Wm(c,lt()))return null;{const d=t||it.EMPTY_NODE;return Xo(c,d)}}}else{const l=Ir(i.visibleWrites,e);if(!a&&Qm(l))return t;if(!a&&t==null&&!Wm(l,lt()))return null;{const c=function(_){return(_.visible||a)&&(!s||!~s.indexOf(_.writeId))&&(Ei(_.path,e)||Ei(e,_.path))},d=xA(i.allWrites,c,e),m=t||it.EMPTY_NODE;return Xo(d,m)}}}function hk(i,e,t){let s=it.EMPTY_NODE;const a=Ba(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(Sn,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=Ir(i.visibleWrites,e);return t.forEachChild(Sn,(c,d)=>{const m=Xo(Ir(l,new mt(c)),d);s=s.updateImmediateChild(c,m)}),zT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Ir(i.visibleWrites,e);return zT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function fk(i,e,t,s,a){de(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Xt(e,t);if(Wm(i.visibleWrites,l))return null;{const c=Ir(i.visibleWrites,l);return Qm(c)?a.getChild(t):Xo(c,a.getChild(t))}}function dk(i,e,t,s){const a=Xt(e,t),l=Ba(i.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=Ir(i.visibleWrites,a);return Xo(c,s.getNode().getImmediateChild(t))}else return null}function pk(i,e){return Ba(i.visibleWrites,e)}function mk(i,e,t,s,a,l,c){let d;const m=Ir(i.visibleWrites,e),_=Ba(m,lt());if(_!=null)d=_;else if(t!=null)d=Xo(m,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const E=[],T=c.getCompare(),C=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let P=C.getNext();for(;P&&E.length<a;)T(P,s)!==0&&E.push(P),P=C.getNext();return E}else return[]}function _k(){return{visibleWrites:Ti.empty(),allWrites:[],lastWriteId:-1}}function Ym(i,e,t,s){return MA(i.writeTree,i.treePath,e,t,s)}function PA(i,e){return hk(i.writeTree,i.treePath,e)}function HT(i,e,t,s){return fk(i.writeTree,i.treePath,e,t,s)}function Af(i,e){return pk(i.writeTree,Xt(i.treePath,e))}function gk(i,e,t,s,a,l){return mk(i.writeTree,i.treePath,e,t,s,a,l)}function j_(i,e,t){return dk(i.writeTree,i.treePath,e,t)}function VA(i,e){return LA(Xt(i.treePath,e),i.writeTree)}function LA(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;de(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),de(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,PT(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,WO(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,KO(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,PT(s,e.snapshotNode,a.oldSnap));else throw al("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const UA=new vk;class B_{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new U_(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return j_(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xa(this.viewCache_),l=gk(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function Ek(i,e){de(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),de(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function Tk(i,e,t,s,a){const l=new yk;let c,d;if(t.type===Hi.OVERWRITE){const _=t;_.source.fromUser?c=$m(i,e,_.path,_.snap,s,a,l):(de(_.source.fromServer,"Unknown source."),d=_.source.tagged||e.serverCache.isFiltered()&&!Fe(_.path),c=wf(i,e,_.path,_.snap,s,a,d,l))}else if(t.type===Hi.MERGE){const _=t;_.source.fromUser?c=Ak(i,e,_.path,_.children,s,a,l):(de(_.source.fromServer,"Unknown source."),d=_.source.tagged||e.serverCache.isFiltered(),c=Xm(i,e,_.path,_.children,s,a,d,l))}else if(t.type===Hi.ACK_USER_WRITE){const _=t;_.revert?c=Ck(i,e,_.path,s,a,l):c=wk(i,e,_.path,_.affectedTree,s,a,l)}else if(t.type===Hi.LISTEN_COMPLETE)c=bk(i,e,t.path,s,l);else throw al("Unknown operation type: "+t.type);const m=l.getChanges();return Sk(e,c,m),{viewCache:c,changes:m}}function Sk(i,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=Km(i);(t.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(GO(Km(e)))}}function jA(i,e,t,s,a,l){const c=e.eventCache;if(Af(s,t)!=null)return e;{let d,m;if(Fe(t))if(de(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const _=xa(e),E=_ instanceof it?_:it.EMPTY_NODE,T=PA(s,E);d=i.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const _=Ym(s,xa(e));d=i.filter.updateFullNode(e.eventCache.getNode(),_,l)}else{const _=Qe(t);if(_===".priority"){de(xr(t)===1,"Can't have a priority with additional path components");const E=c.getNode();m=e.serverCache.getNode();const T=HT(s,t,E,m);T!=null?d=i.filter.updatePriority(E,T):d=c.getNode()}else{const E=pt(t);let T;if(c.isCompleteForChild(_)){m=e.serverCache.getNode();const C=HT(s,t,c.getNode(),m);C!=null?T=c.getNode().getImmediateChild(_).updateChild(E,C):T=c.getNode().getImmediateChild(_)}else T=j_(s,_,e.serverCache);T!=null?d=i.filter.updateChild(c.getNode(),_,T,E,a,l):d=c.getNode()}}return Hu(e,d,c.isFullyInitialized()||Fe(t),i.filter.filtersNodes())}}function wf(i,e,t,s,a,l,c,d){const m=e.serverCache;let _;const E=c?i.filter:i.filter.getIndexedFilter();if(Fe(t))_=E.updateFullNode(m.getNode(),s,null);else if(E.filtersNodes()&&!m.isFiltered()){const P=m.getNode().updateChild(t,s);_=E.updateFullNode(m.getNode(),P,null)}else{const P=Qe(t);if(!m.isCompleteForPath(t)&&xr(t)>1)return e;const z=pt(t),H=m.getNode().getImmediateChild(P).updateChild(z,s);P===".priority"?_=E.updatePriority(m.getNode(),H):_=E.updateChild(m.getNode(),P,H,z,UA,null)}const T=DA(e,_,m.isFullyInitialized()||Fe(t),E.filtersNodes()),C=new B_(a,T,l);return jA(i,T,t,a,C,d)}function $m(i,e,t,s,a,l,c){const d=e.eventCache;let m,_;const E=new B_(a,e,l);if(Fe(t))_=i.filter.updateFullNode(e.eventCache.getNode(),s,c),m=Hu(e,_,!0,i.filter.filtersNodes());else{const T=Qe(t);if(T===".priority")_=i.filter.updatePriority(e.eventCache.getNode(),s),m=Hu(e,_,d.isFullyInitialized(),d.isFiltered());else{const C=pt(t),P=d.getNode().getImmediateChild(T);let z;if(Fe(C))z=s;else{const X=E.getCompleteChild(T);X!=null?mA(C)===".priority"&&X.getChild(gA(C)).isEmpty()?z=X:z=X.updateChild(C,s):z=it.EMPTY_NODE}if(P.equals(z))m=e;else{const X=i.filter.updateChild(d.getNode(),T,z,C,E,c);m=Hu(e,X,d.isFullyInitialized(),i.filter.filtersNodes())}}}return m}function FT(i,e){return i.eventCache.isCompleteForChild(e)}function Ak(i,e,t,s,a,l,c){let d=e;return s.foreach((m,_)=>{const E=Xt(t,m);FT(e,Qe(E))&&(d=$m(i,d,E,_,a,l,c))}),s.foreach((m,_)=>{const E=Xt(t,m);FT(e,Qe(E))||(d=$m(i,d,E,_,a,l,c))}),d}function qT(i,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Xm(i,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,_;Fe(t)?_=s:_=new dt(null).setTree(t,s);const E=e.serverCache.getNode();return _.children.inorderTraversal((T,C)=>{if(E.hasChild(T)){const P=e.serverCache.getNode().getImmediateChild(T),z=qT(i,P,C);m=wf(i,m,new mt(T),z,a,l,c,d)}}),_.children.inorderTraversal((T,C)=>{const P=!e.serverCache.isCompleteForChild(T)&&C.value===null;if(!E.hasChild(T)&&!P){const z=e.serverCache.getNode().getImmediateChild(T),X=qT(i,z,C);m=wf(i,m,new mt(T),X,a,l,c,d)}}),m}function wk(i,e,t,s,a,l,c){if(Af(a,t)!=null)return e;const d=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(Fe(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return wf(i,e,t,m.getNode().getChild(t),a,l,d,c);if(Fe(t)){let _=new dt(null);return m.getNode().forEachChild(Wo,(E,T)=>{_=_.set(new mt(E),T)}),Xm(i,e,t,_,a,l,d,c)}else return e}else{let _=new dt(null);return s.foreach((E,T)=>{const C=Xt(t,E);m.isCompleteForPath(C)&&(_=_.set(E,m.getNode().getChild(C)))}),Xm(i,e,t,_,a,l,d,c)}}function bk(i,e,t,s,a){const l=e.serverCache,c=DA(e,l.getNode(),l.isFullyInitialized()||Fe(t),l.isFiltered());return jA(i,c,t,s,UA,a)}function Ck(i,e,t,s,a,l){let c;if(Af(s,t)!=null)return e;{const d=new B_(s,e,a),m=e.eventCache.getNode();let _;if(Fe(t)||Qe(t)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=Ym(s,xa(e));else{const T=e.serverCache.getNode();de(T instanceof it,"serverChildren would be complete if leaf node"),E=PA(s,T)}E=E,_=i.filter.updateFullNode(m,E,l)}else{const E=Qe(t);let T=j_(s,E,e.serverCache);T==null&&e.serverCache.isCompleteForChild(E)&&(T=m.getImmediateChild(E)),T!=null?_=i.filter.updateChild(m,E,T,pt(t),d,l):e.eventCache.getNode().hasChild(E)?_=i.filter.updateChild(m,E,it.EMPTY_NODE,pt(t),d,l):_=m,_.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Ym(s,xa(e)),c.isLeafNode()&&(_=i.filter.updateFullNode(_,c,l)))}return c=e.serverCache.isFullyInitialized()||Af(s,lt())!=null,Hu(e,_,c,i.filter.filtersNodes())}}function Rk(i,e){const t=xa(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!Fe(e)&&!t.getImmediateChild(Qe(e)).isEmpty())?t.getChild(e):null}function GT(i,e,t,s){e.type===Hi.MERGE&&e.source.queryId!==null&&(de(xa(i.viewCache_),"We should always have a full cache before handling merges"),de(Km(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,l=Tk(i.processor_,a,e,t,s);return Ek(i.processor_,l.viewCache),de(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=l.viewCache,Ik(i,l.changes,l.viewCache.eventCache.getNode())}function Ik(i,e,t,s){const a=i.eventRegistrations_;return tk(i.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let KT;function Nk(i){de(!KT,"__referenceConstructor has already been defined"),KT=i}function z_(i,e,t,s){const a=e.source.queryId;if(a!==null){const l=i.views.get(a);return de(l!=null,"SyncTree gave us an op for an invalid query."),GT(l,e,t,s)}else{let l=[];for(const c of i.views.values())l=l.concat(GT(c,e,t,s));return l}}function H_(i,e){let t=null;for(const s of i.views.values())t=t||Rk(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let WT;function Dk(i){de(!WT,"__referenceConstructor has already been defined"),WT=i}class QT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new dt(null),this.pendingWriteTree_=_k(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ok(i,e,t,s,a){return rk(i.pendingWriteTree_,e,t,s,a),a?Gf(i,new ka(CA(),e,t)):[]}function Ho(i,e,t=!1){const s=ak(i.pendingWriteTree_,e);if(ok(i.pendingWriteTree_,e)){let l=new dt(null);return s.snap!=null?l=l.set(lt(),!0):fi(s.children,c=>{l=l.set(new mt(c),!0)}),Gf(i,new Sf(s.path,l,t))}else return[]}function qf(i,e,t){return Gf(i,new ka(RA(),e,t))}function kk(i,e,t){const s=dt.fromObject(t);return Gf(i,new Ju(RA(),e,s))}function xk(i,e,t,s){const a=FA(i,s);if(a!=null){const l=qA(a),c=l.path,d=l.queryId,m=hi(c,e),_=new ka(IA(d),m,t);return GA(i,c,_)}else return[]}function Mk(i,e,t,s){const a=FA(i,s);if(a){const l=qA(a),c=l.path,d=l.queryId,m=hi(c,e),_=dt.fromObject(t),E=new Ju(IA(d),m,_);return GA(i,c,E)}else return[]}function BA(i,e,t){const a=i.pendingWriteTree_,l=i.syncPointTree_.findOnPath(e,(c,d)=>{const m=hi(c,e),_=H_(d,m);if(_)return _});return MA(a,e,l,t,!0)}function Gf(i,e){return zA(e,i.syncPointTree_,null,kA(i.pendingWriteTree_,lt()))}function zA(i,e,t,s){if(Fe(i.path))return HA(i,e,t,s);{const a=e.get(lt());t==null&&a!=null&&(t=H_(a,lt()));let l=[];const c=Qe(i.path),d=i.operationForChild(c),m=e.children.get(c);if(m&&d){const _=t?t.getImmediateChild(c):null,E=VA(s,c);l=l.concat(zA(d,m,_,E))}return a&&(l=l.concat(z_(a,i,s,t))),l}}function HA(i,e,t,s){const a=e.get(lt());t==null&&a!=null&&(t=H_(a,lt()));let l=[];return e.children.inorderTraversal((c,d)=>{const m=t?t.getImmediateChild(c):null,_=VA(s,c),E=i.operationForChild(c);E&&(l=l.concat(HA(E,d,m,_)))}),a&&(l=l.concat(z_(a,i,s,t))),l}function FA(i,e){return i.tagToQueryMap.get(e)}function qA(i){const e=i.indexOf("$");return de(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new mt(i.substr(0,e))}}function GA(i,e,t){const s=i.syncPointTree_.get(e);de(s,"Missing sync point for query tag that we're tracking");const a=kA(i.pendingWriteTree_,e);return z_(s,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new F_(t)}node(){return this.node_}}class q_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Xt(this.path_,e);return new q_(this.syncTree_,t)}node(){return BA(this.syncTree_,this.path_)}}const Pk=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},YT=function(i,e,t){if(!i||typeof i!="object")return i;if(de(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return Vk(i[".sv"],e,t);if(typeof i[".sv"]=="object")return Lk(i[".sv"],e);de(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},Vk=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:de(!1,"Unexpected server value: "+i)}},Lk=function(i,e,t){i.hasOwnProperty("increment")||de(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&de(!1,"Unexpected increment value: "+s);const a=e.node();if(de(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},Uk=function(i,e,t,s){return G_(e,new q_(t,i),s)},jk=function(i,e,t){return G_(i,new F_(e),t)};function G_(i,e,t){const s=i.getPriority().val(),a=YT(s,e.getImmediateChild(".priority"),t);let l;if(i.isLeafNode()){const c=i,d=YT(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Yt(d,En(a)):i}else{const c=i;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Yt(a))),c.forEachChild(Sn,(d,m)=>{const _=G_(m,e.getImmediateChild(d),t);_!==m&&(l=l.updateImmediateChild(d,_))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function W_(i,e){let t=e instanceof mt?e:new mt(e),s=i,a=Qe(t);for(;a!==null;){const l=Yo(s.node.children,a)||{children:{},childCount:0};s=new K_(a,s,l),t=pt(t),a=Qe(t)}return s}function cl(i){return i.node.value}function KA(i,e){i.node.value=e,Zm(i)}function WA(i){return i.node.childCount>0}function Bk(i){return cl(i)===void 0&&!WA(i)}function Kf(i,e){fi(i.node.children,(t,s)=>{e(new K_(t,i,s))})}function QA(i,e,t,s){t&&e(i),Kf(i,a=>{QA(a,e,!0)})}function zk(i,e,t){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function mc(i){return new mt(i.parent===null?i.name:mc(i.parent)+"/"+i.name)}function Zm(i){i.parent!==null&&Hk(i.parent,i.name,i)}function Hk(i,e,t){const s=Bk(t),a=Vs(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,Zm(i)):!s&&!a&&(i.node.children[e]=t.node,i.node.childCount++,Zm(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=/[\[\].#$\/\u0000-\u001F\u007F]/,qk=/[\[\].#$\u0000-\u001F\u007F]/,Cm=10*1024*1024,YA=function(i){return typeof i=="string"&&i.length!==0&&!Fk.test(i)},Gk=function(i){return typeof i=="string"&&i.length!==0&&!qk.test(i)},Kk=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Gk(i)},$A=function(i,e,t){const s=t instanceof mt?new bO(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+wa(s));if(typeof e=="function")throw new Error(i+"contains a function "+wa(s)+" with contents = "+e.toString());if(Y0(e))throw new Error(i+"contains "+e.toString()+" "+wa(s));if(typeof e=="string"&&e.length>Cm/3&&Uf(e)>Cm)throw new Error(i+"contains a string greater than "+Cm+" utf8 bytes "+wa(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(fi(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!YA(c)))throw new Error(i+" contains an invalid key ("+c+") "+wa(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);CO(s,c),$A(i,d,s),RO(s)}),a&&l)throw new Error(i+' contains ".value" child '+wa(s)+" in addition to actual children.")}},Wk=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!YA(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Kk(t))throw new Error(cI(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yk(i,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!yA(l,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&i.eventLists_.push(t)}function za(i,e,t){Yk(i,t),$k(i,s=>Ei(s,e)||Ei(e,s))}function $k(i,e){i.recursionDepth_++;let t=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const l=a.path;e(l)?(Xk(i.eventLists_[s]),i.eventLists_[s]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function Xk(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const s=t.getEventRunner();Bu&&vn("event: "+t.toString()),dc(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="repo_interrupt",Jk=25;class ex{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Qk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tf(),this.transactionQueueTree_=new K_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function tx(i,e,t){if(i.stats_=x_(i.repoInfo_),i.forceRestClient_||YD())i.server_=new Ef(i.repoInfo_,(s,a,l,c)=>{$T(i,s,a,l,c)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>XT(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ln(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new Ds(i.repoInfo_,e,(s,a,l,c)=>{$T(i,s,a,l,c)},s=>{XT(i,s)},s=>{ix(i,s)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=tO(i.repoInfo_,()=>new ek(i.stats_,i.server_)),i.infoData_=new YO,i.infoSyncTree_=new QT({startListening:(s,a,l,c)=>{let d=[];const m=i.infoData_.getNode(s._path);return m.isEmpty()||(d=qf(i.infoSyncTree_,s._path,m),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),Q_(i,"connected",!1),i.serverSyncTree_=new QT({startListening:(s,a,l,c)=>(i.server_.listen(s,l,a,(d,m)=>{const _=c(d,m);za(i.eventQueue_,s._path,_)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function nx(i){const t=i.infoData_.getNode(new mt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function XA(i){return Pk({timestamp:nx(i)})}function $T(i,e,t,s,a){i.dataUpdateCount++;const l=new mt(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const m=cf(t,_=>En(_));c=Mk(i.serverSyncTree_,l,m,a)}else{const m=En(t);c=xk(i.serverSyncTree_,l,m,a)}else if(s){const m=cf(t,_=>En(_));c=kk(i.serverSyncTree_,l,m)}else{const m=En(t);c=qf(i.serverSyncTree_,l,m)}let d=l;c.length>0&&(d=$_(i,l)),za(i.eventQueue_,d,c)}function XT(i,e){Q_(i,"connected",e),e===!1&&rx(i)}function ix(i,e){fi(e,(t,s)=>{Q_(i,t,s)})}function Q_(i,e,t){const s=new mt("/.info/"+e),a=En(t);i.infoData_.updateSnapshot(s,a);const l=qf(i.infoSyncTree_,s,a);za(i.eventQueue_,s,l)}function sx(i){return i.nextWriteId_++}function rx(i){ZA(i,"onDisconnectEvents");const e=XA(i),t=Tf();Gm(i.onDisconnect_,lt(),(a,l)=>{const c=Uk(a,l,i.serverSyncTree_,e);bA(t,a,c)});let s=[];Gm(t,lt(),(a,l)=>{s=s.concat(qf(i.serverSyncTree_,a,l));const c=ux(i,a);$_(i,c)}),i.onDisconnect_=Tf(),za(i.eventQueue_,lt(),s)}function ax(i){i.persistentConnection_&&i.persistentConnection_.interrupt(Zk)}function ZA(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),vn(t,...e)}function JA(i,e,t){return BA(i.serverSyncTree_,e,t)||it.EMPTY_NODE}function Y_(i,e=i.transactionQueueTree_){if(e||Wf(i,e),cl(e)){const t=tw(i,e);de(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&ox(i,mc(e),t)}else WA(e)&&Kf(e,t=>{Y_(i,t)})}function ox(i,e,t){const s=t.map(_=>_.currentWriteId),a=JA(i,e,s);let l=a;const c=a.hash();for(let _=0;_<t.length;_++){const E=t[_];de(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const T=hi(e,E.path);l=l.updateChild(T,E.currentOutputSnapshotRaw)}const d=l.val(!0),m=e;i.server_.put(m.toString(),d,_=>{ZA(i,"transaction put response",{path:m.toString(),status:_});let E=[];if(_==="ok"){const T=[];for(let C=0;C<t.length;C++)t[C].status=2,E=E.concat(Ho(i.serverSyncTree_,t[C].currentWriteId)),t[C].onComplete&&T.push(()=>t[C].onComplete(null,!0,t[C].currentOutputSnapshotResolved)),t[C].unwatcher();Wf(i,W_(i.transactionQueueTree_,e)),Y_(i,i.transactionQueueTree_),za(i.eventQueue_,e,E);for(let C=0;C<T.length;C++)dc(T[C])}else{if(_==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Kn("transaction at "+m.toString()+" failed: "+_);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=_}$_(i,e)}},c)}function $_(i,e){const t=ew(i,e),s=mc(t),a=tw(i,t);return lx(i,a,s),s}function lx(i,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const m=e[d],_=hi(t,m.path);let E=!1,T;if(de(_!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)E=!0,T=m.abortReason,a=a.concat(Ho(i.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=Jk)E=!0,T="maxretry",a=a.concat(Ho(i.serverSyncTree_,m.currentWriteId,!0));else{const C=JA(i,m.path,c);m.currentInputSnapshot=C;const P=e[d].update(C.val());if(P!==void 0){$A("transaction failed: Data returned ",P,m.path);let z=En(P);typeof P=="object"&&P!=null&&Vs(P,".priority")||(z=z.updatePriority(C.getPriority()));const H=m.currentWriteId,Y=XA(i),ee=jk(z,C,Y);m.currentOutputSnapshotRaw=z,m.currentOutputSnapshotResolved=ee,m.currentWriteId=sx(i),c.splice(c.indexOf(H),1),a=a.concat(Ok(i.serverSyncTree_,m.path,ee,m.currentWriteId,m.applyLocally)),a=a.concat(Ho(i.serverSyncTree_,H,!0))}else E=!0,T="nodata",a=a.concat(Ho(i.serverSyncTree_,m.currentWriteId,!0))}za(i.eventQueue_,t,a),a=[],E&&(e[d].status=2,function(C){setTimeout(C,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Wf(i,i.transactionQueueTree_);for(let d=0;d<s.length;d++)dc(s[d]);Y_(i,i.transactionQueueTree_)}function ew(i,e){let t,s=i.transactionQueueTree_;for(t=Qe(e);t!==null&&cl(s)===void 0;)s=W_(s,t),e=pt(e),t=Qe(e);return s}function tw(i,e){const t=[];return nw(i,e,t),t.sort((s,a)=>s.order-a.order),t}function nw(i,e,t){const s=cl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Kf(e,a=>{nw(i,a,t)})}function Wf(i,e){const t=cl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,KA(e,t.length>0?t:void 0)}Kf(e,s=>{Wf(i,s)})}function ux(i,e){const t=mc(ew(i,e)),s=W_(i.transactionQueueTree_,e);return zk(s,a=>{Rm(i,a)}),Rm(i,s),QA(s,a=>{Rm(i,a)}),t}function Rm(i,e){const t=cl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(de(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(de(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Ho(i.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?KA(e,void 0):t.length=l+1,za(i.eventQueue_,mc(e),a);for(let c=0;c<s.length;c++)dc(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(i){let e="";const t=i.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function hx(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Kn(`Invalid query segment '${t}' in query '${i}'`)}return e}const ZT=function(i,e){const t=fx(i),s=t.namespace;t.domain==="firebase.com"&&Da(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Da("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||zD();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ZD(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new mt(t.pathString)}},fx=function(i){let e="",t="",s="",a="",l="",c=!0,d="https",m=443;if(typeof i=="string"){let _=i.indexOf("//");_>=0&&(d=i.substring(0,_-1),i=i.substring(_+2));let E=i.indexOf("/");E===-1&&(E=i.length);let T=i.indexOf("?");T===-1&&(T=i.length),e=i.substring(0,Math.min(E,T)),E<T&&(a=cx(i.substring(E,T)));const C=hx(i.substring(Math.min(i.length,T)));_=e.indexOf(":"),_>=0?(c=d==="https"||d==="wss",m=parseInt(e.substring(_+1),10)):_=e.length;const P=e.slice(0,_);if(P.toLowerCase()==="localhost")t="localhost";else if(P.split(".").length<=2)t=P;else{const z=e.indexOf(".");s=e.substring(0,z).toLowerCase(),t=e.substring(z+1),l=s}"ns"in C&&(l=C.ns)}return{host:e,port:m,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Fe(this._path)?null:mA(this._path)}get ref(){return new hl(this._repo,this._path)}get _queryIdentifier(){const e=LT(this._queryParams),t=O_(e);return t==="{}"?"default":t}get _queryObject(){return LT(this._queryParams)}isEqual(e){if(e=cn(e),!(e instanceof X_))return!1;const t=this._repo===e._repo,s=yA(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+wO(this._path)}}class hl extends X_{constructor(e,t){super(e,t,new L_,!1)}get parent(){const e=gA(this._path);return e===null?null:new hl(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Nk(hl);Dk(hl);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx="FIREBASE_DATABASE_EMULATOR_HOST",Jm={};let px=!1;function mx(i,e,t,s,a){let l=s||i.options.databaseURL;l===void 0&&(i.options.projectId||Da("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),vn("Using default host for project ",i.options.projectId),l=`${i.options.projectId}-default-rtdb.firebaseio.com`);let c=ZT(l,a),d=c.repoInfo,m;typeof process<"u"&&yT&&(m=yT[dx]),m?(l=`http://${m}?ns=${d.namespace}`,c=ZT(l,a),d=c.repoInfo):c.repoInfo.secure;const _=new XD(i.name,i.options,e);Wk("Invalid Firebase Database URL",c),Fe(c.path)||Da("Database URL must point to the root of a Firebase Database (not including a child path).");const E=gx(d,i,_,new $D(i,t));return new yx(E,i)}function _x(i,e){const t=Jm[e];(!t||t[i.key]!==i)&&Da(`Database ${e}(${i.repoInfo_}) has already been deleted.`),ax(i),delete t[i.key]}function gx(i,e,t,s){let a=Jm[e.name];a||(a={},Jm[e.name]=a);let l=a[i.toURLString()];return l&&Da("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new ex(i,px,t,s),a[i.toURLString()]=l,l}class yx{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(tx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new hl(this._repo,lt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_x(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Da("Cannot call "+e+" on a deleted database.")}}/**
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
 */function vx(i){PD(Ua),Ra(new kr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return mx(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Fi(vT,ET,i),Fi(vT,ET,"esm2017")}Ds.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Ds.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};vx();var JT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nr,iw;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,R){function b(){}b.prototype=R.prototype,k.D=R.prototype,k.prototype=new b,k.prototype.constructor=k,k.C=function(I,x,L){for(var D=Array(arguments.length-2),et=2;et<arguments.length;et++)D[et-2]=arguments[et];return R.prototype[x].apply(I,D)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(k,R,b){b||(b=0);var I=Array(16);if(typeof R=="string")for(var x=0;16>x;++x)I[x]=R.charCodeAt(b++)|R.charCodeAt(b++)<<8|R.charCodeAt(b++)<<16|R.charCodeAt(b++)<<24;else for(x=0;16>x;++x)I[x]=R[b++]|R[b++]<<8|R[b++]<<16|R[b++]<<24;R=k.g[0],b=k.g[1],x=k.g[2];var L=k.g[3],D=R+(L^b&(x^L))+I[0]+3614090360&4294967295;R=b+(D<<7&4294967295|D>>>25),D=L+(x^R&(b^x))+I[1]+3905402710&4294967295,L=R+(D<<12&4294967295|D>>>20),D=x+(b^L&(R^b))+I[2]+606105819&4294967295,x=L+(D<<17&4294967295|D>>>15),D=b+(R^x&(L^R))+I[3]+3250441966&4294967295,b=x+(D<<22&4294967295|D>>>10),D=R+(L^b&(x^L))+I[4]+4118548399&4294967295,R=b+(D<<7&4294967295|D>>>25),D=L+(x^R&(b^x))+I[5]+1200080426&4294967295,L=R+(D<<12&4294967295|D>>>20),D=x+(b^L&(R^b))+I[6]+2821735955&4294967295,x=L+(D<<17&4294967295|D>>>15),D=b+(R^x&(L^R))+I[7]+4249261313&4294967295,b=x+(D<<22&4294967295|D>>>10),D=R+(L^b&(x^L))+I[8]+1770035416&4294967295,R=b+(D<<7&4294967295|D>>>25),D=L+(x^R&(b^x))+I[9]+2336552879&4294967295,L=R+(D<<12&4294967295|D>>>20),D=x+(b^L&(R^b))+I[10]+4294925233&4294967295,x=L+(D<<17&4294967295|D>>>15),D=b+(R^x&(L^R))+I[11]+2304563134&4294967295,b=x+(D<<22&4294967295|D>>>10),D=R+(L^b&(x^L))+I[12]+1804603682&4294967295,R=b+(D<<7&4294967295|D>>>25),D=L+(x^R&(b^x))+I[13]+4254626195&4294967295,L=R+(D<<12&4294967295|D>>>20),D=x+(b^L&(R^b))+I[14]+2792965006&4294967295,x=L+(D<<17&4294967295|D>>>15),D=b+(R^x&(L^R))+I[15]+1236535329&4294967295,b=x+(D<<22&4294967295|D>>>10),D=R+(x^L&(b^x))+I[1]+4129170786&4294967295,R=b+(D<<5&4294967295|D>>>27),D=L+(b^x&(R^b))+I[6]+3225465664&4294967295,L=R+(D<<9&4294967295|D>>>23),D=x+(R^b&(L^R))+I[11]+643717713&4294967295,x=L+(D<<14&4294967295|D>>>18),D=b+(L^R&(x^L))+I[0]+3921069994&4294967295,b=x+(D<<20&4294967295|D>>>12),D=R+(x^L&(b^x))+I[5]+3593408605&4294967295,R=b+(D<<5&4294967295|D>>>27),D=L+(b^x&(R^b))+I[10]+38016083&4294967295,L=R+(D<<9&4294967295|D>>>23),D=x+(R^b&(L^R))+I[15]+3634488961&4294967295,x=L+(D<<14&4294967295|D>>>18),D=b+(L^R&(x^L))+I[4]+3889429448&4294967295,b=x+(D<<20&4294967295|D>>>12),D=R+(x^L&(b^x))+I[9]+568446438&4294967295,R=b+(D<<5&4294967295|D>>>27),D=L+(b^x&(R^b))+I[14]+3275163606&4294967295,L=R+(D<<9&4294967295|D>>>23),D=x+(R^b&(L^R))+I[3]+4107603335&4294967295,x=L+(D<<14&4294967295|D>>>18),D=b+(L^R&(x^L))+I[8]+1163531501&4294967295,b=x+(D<<20&4294967295|D>>>12),D=R+(x^L&(b^x))+I[13]+2850285829&4294967295,R=b+(D<<5&4294967295|D>>>27),D=L+(b^x&(R^b))+I[2]+4243563512&4294967295,L=R+(D<<9&4294967295|D>>>23),D=x+(R^b&(L^R))+I[7]+1735328473&4294967295,x=L+(D<<14&4294967295|D>>>18),D=b+(L^R&(x^L))+I[12]+2368359562&4294967295,b=x+(D<<20&4294967295|D>>>12),D=R+(b^x^L)+I[5]+4294588738&4294967295,R=b+(D<<4&4294967295|D>>>28),D=L+(R^b^x)+I[8]+2272392833&4294967295,L=R+(D<<11&4294967295|D>>>21),D=x+(L^R^b)+I[11]+1839030562&4294967295,x=L+(D<<16&4294967295|D>>>16),D=b+(x^L^R)+I[14]+4259657740&4294967295,b=x+(D<<23&4294967295|D>>>9),D=R+(b^x^L)+I[1]+2763975236&4294967295,R=b+(D<<4&4294967295|D>>>28),D=L+(R^b^x)+I[4]+1272893353&4294967295,L=R+(D<<11&4294967295|D>>>21),D=x+(L^R^b)+I[7]+4139469664&4294967295,x=L+(D<<16&4294967295|D>>>16),D=b+(x^L^R)+I[10]+3200236656&4294967295,b=x+(D<<23&4294967295|D>>>9),D=R+(b^x^L)+I[13]+681279174&4294967295,R=b+(D<<4&4294967295|D>>>28),D=L+(R^b^x)+I[0]+3936430074&4294967295,L=R+(D<<11&4294967295|D>>>21),D=x+(L^R^b)+I[3]+3572445317&4294967295,x=L+(D<<16&4294967295|D>>>16),D=b+(x^L^R)+I[6]+76029189&4294967295,b=x+(D<<23&4294967295|D>>>9),D=R+(b^x^L)+I[9]+3654602809&4294967295,R=b+(D<<4&4294967295|D>>>28),D=L+(R^b^x)+I[12]+3873151461&4294967295,L=R+(D<<11&4294967295|D>>>21),D=x+(L^R^b)+I[15]+530742520&4294967295,x=L+(D<<16&4294967295|D>>>16),D=b+(x^L^R)+I[2]+3299628645&4294967295,b=x+(D<<23&4294967295|D>>>9),D=R+(x^(b|~L))+I[0]+4096336452&4294967295,R=b+(D<<6&4294967295|D>>>26),D=L+(b^(R|~x))+I[7]+1126891415&4294967295,L=R+(D<<10&4294967295|D>>>22),D=x+(R^(L|~b))+I[14]+2878612391&4294967295,x=L+(D<<15&4294967295|D>>>17),D=b+(L^(x|~R))+I[5]+4237533241&4294967295,b=x+(D<<21&4294967295|D>>>11),D=R+(x^(b|~L))+I[12]+1700485571&4294967295,R=b+(D<<6&4294967295|D>>>26),D=L+(b^(R|~x))+I[3]+2399980690&4294967295,L=R+(D<<10&4294967295|D>>>22),D=x+(R^(L|~b))+I[10]+4293915773&4294967295,x=L+(D<<15&4294967295|D>>>17),D=b+(L^(x|~R))+I[1]+2240044497&4294967295,b=x+(D<<21&4294967295|D>>>11),D=R+(x^(b|~L))+I[8]+1873313359&4294967295,R=b+(D<<6&4294967295|D>>>26),D=L+(b^(R|~x))+I[15]+4264355552&4294967295,L=R+(D<<10&4294967295|D>>>22),D=x+(R^(L|~b))+I[6]+2734768916&4294967295,x=L+(D<<15&4294967295|D>>>17),D=b+(L^(x|~R))+I[13]+1309151649&4294967295,b=x+(D<<21&4294967295|D>>>11),D=R+(x^(b|~L))+I[4]+4149444226&4294967295,R=b+(D<<6&4294967295|D>>>26),D=L+(b^(R|~x))+I[11]+3174756917&4294967295,L=R+(D<<10&4294967295|D>>>22),D=x+(R^(L|~b))+I[2]+718787259&4294967295,x=L+(D<<15&4294967295|D>>>17),D=b+(L^(x|~R))+I[9]+3951481745&4294967295,k.g[0]=k.g[0]+R&4294967295,k.g[1]=k.g[1]+(x+(D<<21&4294967295|D>>>11))&4294967295,k.g[2]=k.g[2]+x&4294967295,k.g[3]=k.g[3]+L&4294967295}s.prototype.u=function(k,R){R===void 0&&(R=k.length);for(var b=R-this.blockSize,I=this.B,x=this.h,L=0;L<R;){if(x==0)for(;L<=b;)a(this,k,L),L+=this.blockSize;if(typeof k=="string"){for(;L<R;)if(I[x++]=k.charCodeAt(L++),x==this.blockSize){a(this,I),x=0;break}}else for(;L<R;)if(I[x++]=k[L++],x==this.blockSize){a(this,I),x=0;break}}this.h=x,this.o+=R},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var R=1;R<k.length-8;++R)k[R]=0;var b=8*this.o;for(R=k.length-8;R<k.length;++R)k[R]=b&255,b/=256;for(this.u(k),k=Array(16),R=b=0;4>R;++R)for(var I=0;32>I;I+=8)k[b++]=this.g[R]>>>I&255;return k};function l(k,R){var b=d;return Object.prototype.hasOwnProperty.call(b,k)?b[k]:b[k]=R(k)}function c(k,R){this.h=R;for(var b=[],I=!0,x=k.length-1;0<=x;x--){var L=k[x]|0;I&&L==R||(b[x]=L,I=!1)}this.g=b}var d={};function m(k){return-128<=k&&128>k?l(k,function(R){return new c([R|0],0>R?-1:0)}):new c([k|0],0>k?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return T;if(0>k)return H(_(-k));for(var R=[],b=1,I=0;k>=b;I++)R[I]=k/b|0,b*=4294967296;return new c(R,0)}function E(k,R){if(k.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(k.charAt(0)=="-")return H(E(k.substring(1),R));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=_(Math.pow(R,8)),I=T,x=0;x<k.length;x+=8){var L=Math.min(8,k.length-x),D=parseInt(k.substring(x,x+L),R);8>L?(L=_(Math.pow(R,L)),I=I.j(L).add(_(D))):(I=I.j(b),I=I.add(_(D)))}return I}var T=m(0),C=m(1),P=m(16777216);i=c.prototype,i.m=function(){if(X(this))return-H(this).m();for(var k=0,R=1,b=0;b<this.g.length;b++){var I=this.i(b);k+=(0<=I?I:4294967296+I)*R,R*=4294967296}return k},i.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(z(this))return"0";if(X(this))return"-"+H(this).toString(k);for(var R=_(Math.pow(k,6)),b=this,I="";;){var x=se(b,R).g;b=Y(b,x.j(R));var L=((0<b.g.length?b.g[0]:b.h)>>>0).toString(k);if(b=x,z(b))return L+I;for(;6>L.length;)L="0"+L;I=L+I}},i.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function z(k){if(k.h!=0)return!1;for(var R=0;R<k.g.length;R++)if(k.g[R]!=0)return!1;return!0}function X(k){return k.h==-1}i.l=function(k){return k=Y(this,k),X(k)?-1:z(k)?0:1};function H(k){for(var R=k.g.length,b=[],I=0;I<R;I++)b[I]=~k.g[I];return new c(b,~k.h).add(C)}i.abs=function(){return X(this)?H(this):this},i.add=function(k){for(var R=Math.max(this.g.length,k.g.length),b=[],I=0,x=0;x<=R;x++){var L=I+(this.i(x)&65535)+(k.i(x)&65535),D=(L>>>16)+(this.i(x)>>>16)+(k.i(x)>>>16);I=D>>>16,L&=65535,D&=65535,b[x]=D<<16|L}return new c(b,b[b.length-1]&-2147483648?-1:0)};function Y(k,R){return k.add(H(R))}i.j=function(k){if(z(this)||z(k))return T;if(X(this))return X(k)?H(this).j(H(k)):H(H(this).j(k));if(X(k))return H(this.j(H(k)));if(0>this.l(P)&&0>k.l(P))return _(this.m()*k.m());for(var R=this.g.length+k.g.length,b=[],I=0;I<2*R;I++)b[I]=0;for(I=0;I<this.g.length;I++)for(var x=0;x<k.g.length;x++){var L=this.i(I)>>>16,D=this.i(I)&65535,et=k.i(x)>>>16,rt=k.i(x)&65535;b[2*I+2*x]+=D*rt,ee(b,2*I+2*x),b[2*I+2*x+1]+=L*rt,ee(b,2*I+2*x+1),b[2*I+2*x+1]+=D*et,ee(b,2*I+2*x+1),b[2*I+2*x+2]+=L*et,ee(b,2*I+2*x+2)}for(I=0;I<R;I++)b[I]=b[2*I+1]<<16|b[2*I];for(I=R;I<2*R;I++)b[I]=0;return new c(b,0)};function ee(k,R){for(;(k[R]&65535)!=k[R];)k[R+1]+=k[R]>>>16,k[R]&=65535,R++}function le(k,R){this.g=k,this.h=R}function se(k,R){if(z(R))throw Error("division by zero");if(z(k))return new le(T,T);if(X(k))return R=se(H(k),R),new le(H(R.g),H(R.h));if(X(R))return R=se(k,H(R)),new le(H(R.g),R.h);if(30<k.g.length){if(X(k)||X(R))throw Error("slowDivide_ only works with positive integers.");for(var b=C,I=R;0>=I.l(k);)b=he(b),I=he(I);var x=Te(b,1),L=Te(I,1);for(I=Te(I,2),b=Te(b,2);!z(I);){var D=L.add(I);0>=D.l(k)&&(x=x.add(b),L=D),I=Te(I,1),b=Te(b,1)}return R=Y(k,x.j(R)),new le(x,R)}for(x=T;0<=k.l(R);){for(b=Math.max(1,Math.floor(k.m()/R.m())),I=Math.ceil(Math.log(b)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),L=_(b),D=L.j(R);X(D)||0<D.l(k);)b-=I,L=_(b),D=L.j(R);z(L)&&(L=C),x=x.add(L),k=Y(k,D)}return new le(x,k)}i.A=function(k){return se(this,k).h},i.and=function(k){for(var R=Math.max(this.g.length,k.g.length),b=[],I=0;I<R;I++)b[I]=this.i(I)&k.i(I);return new c(b,this.h&k.h)},i.or=function(k){for(var R=Math.max(this.g.length,k.g.length),b=[],I=0;I<R;I++)b[I]=this.i(I)|k.i(I);return new c(b,this.h|k.h)},i.xor=function(k){for(var R=Math.max(this.g.length,k.g.length),b=[],I=0;I<R;I++)b[I]=this.i(I)^k.i(I);return new c(b,this.h^k.h)};function he(k){for(var R=k.g.length+1,b=[],I=0;I<R;I++)b[I]=k.i(I)<<1|k.i(I-1)>>>31;return new c(b,k.h)}function Te(k,R){var b=R>>5;R%=32;for(var I=k.g.length-b,x=[],L=0;L<I;L++)x[L]=0<R?k.i(L+b)>>>R|k.i(L+b+1)<<32-R:k.i(L+b);return new c(x,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,iw=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=_,c.fromString=E,Nr=c}).apply(typeof JT<"u"?JT:typeof self<"u"?self:typeof window<"u"?window:{});var qh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sw,Vu,rw,nf,e_,aw,ow,lw;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,g,y){return h==Array.prototype||h==Object.prototype||(h[g]=y.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof qh=="object"&&qh];for(var g=0;g<h.length;++g){var y=h[g];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function a(h,g){if(g)e:{var y=s;h=h.split(".");for(var w=0;w<h.length-1;w++){var j=h[w];if(!(j in y))break e;y=y[j]}h=h[h.length-1],w=y[h],g=g(w),g!=w&&g!=null&&e(y,h,{configurable:!0,writable:!0,value:g})}}function l(h,g){h instanceof String&&(h+="");var y=0,w=!1,j={next:function(){if(!w&&y<h.length){var G=y++;return{value:g(G,h[G]),done:!1}}return w=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}a("Array.prototype.values",function(h){return h||function(){return l(this,function(g,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function m(h){var g=typeof h;return g=g!="object"?g:h?Array.isArray(h)?"array":g:"null",g=="array"||g=="object"&&typeof h.length=="number"}function _(h){var g=typeof h;return g=="object"&&h!=null||g=="function"}function E(h,g,y){return h.call.apply(h.bind,arguments)}function T(h,g,y){if(!h)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,w),h.apply(g,j)}}return function(){return h.apply(g,arguments)}}function C(h,g,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,C.apply(null,arguments)}function P(h,g){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),h.apply(this,w)}}function z(h,g){function y(){}y.prototype=g.prototype,h.aa=g.prototype,h.prototype=new y,h.prototype.constructor=h,h.Qb=function(w,j,G){for(var ce=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)ce[qe-2]=arguments[qe];return g.prototype[j].apply(w,ce)}}function X(h){const g=h.length;if(0<g){const y=Array(g);for(let w=0;w<g;w++)y[w]=h[w];return y}return[]}function H(h,g){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(m(w)){const j=h.length||0,G=w.length||0;h.length=j+G;for(let ce=0;ce<G;ce++)h[j+ce]=w[ce]}else h.push(w)}}class Y{constructor(g,y){this.i=g,this.j=y,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function ee(h){return/^[\s\xa0]*$/.test(h)}function le(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function se(h){return se[" "](h),h}se[" "]=function(){};var he=le().indexOf("Gecko")!=-1&&!(le().toLowerCase().indexOf("webkit")!=-1&&le().indexOf("Edge")==-1)&&!(le().indexOf("Trident")!=-1||le().indexOf("MSIE")!=-1)&&le().indexOf("Edge")==-1;function Te(h,g,y){for(const w in h)g.call(y,h[w],w,h)}function k(h,g){for(const y in h)g.call(void 0,h[y],y,h)}function R(h){const g={};for(const y in h)g[y]=h[y];return g}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(h,g){let y,w;for(let j=1;j<arguments.length;j++){w=arguments[j];for(y in w)h[y]=w[y];for(let G=0;G<b.length;G++)y=b[G],Object.prototype.hasOwnProperty.call(w,y)&&(h[y]=w[y])}}function x(h){var g=1;h=h.split(":");const y=[];for(;0<g&&h.length;)y.push(h.shift()),g--;return h.length&&y.push(h.join(":")),y}function L(h){d.setTimeout(()=>{throw h},0)}function D(){var h=Ae;let g=null;return h.g&&(g=h.g,h.g=h.g.next,h.g||(h.h=null),g.next=null),g}class et{constructor(){this.h=this.g=null}add(g,y){const w=rt.get();w.set(g,y),this.h?this.h.next=w:this.g=w,this.h=w}}var rt=new Y(()=>new oe,h=>h.reset());class oe{constructor(){this.next=this.g=this.h=null}set(g,y){this.h=g,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let F,ae=!1,Ae=new et,O=()=>{const h=d.Promise.resolve(void 0);F=()=>{h.then($)}};var $=()=>{for(var h;h=D();){try{h.h.call(h.g)}catch(y){L(y)}var g=rt;g.j(h),100>g.h&&(g.h++,h.next=g.g,g.g=h)}ae=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(h,g){this.type=h,this.g=this.target=g,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var fe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,g=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const y=()=>{};d.addEventListener("test",y,g),d.removeEventListener("test",y,g)}catch{}return h}();function ge(h,g){if(ie.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var y=this.type=h.type,w=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=g,g=h.relatedTarget){if(he){e:{try{se(g.nodeName);var j=!0;break e}catch{}j=!1}j||(g=null)}}else y=="mouseover"?g=h.fromElement:y=="mouseout"&&(g=h.toElement);this.relatedTarget=g,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:pe[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&ge.aa.h.call(this)}}z(ge,ie);var pe={2:"touch",3:"pen",4:"mouse"};ge.prototype.h=function(){ge.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Je="closure_listenable_"+(1e6*Math.random()|0),Ne=0;function Oe(h,g,y,w,j){this.listener=h,this.proxy=null,this.src=g,this.type=y,this.capture=!!w,this.ha=j,this.key=++Ne,this.da=this.fa=!1}function Re(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Zt(h){this.src=h,this.g={},this.h=0}Zt.prototype.add=function(h,g,y,w,j){var G=h.toString();h=this.g[G],h||(h=this.g[G]=[],this.h++);var ce=fn(h,g,w,j);return-1<ce?(g=h[ce],y||(g.fa=!1)):(g=new Oe(g,this.src,G,!!w,j),g.fa=y,h.push(g)),g};function Mn(h,g){var y=g.type;if(y in h.g){var w=h.g[y],j=Array.prototype.indexOf.call(w,g,void 0),G;(G=0<=j)&&Array.prototype.splice.call(w,j,1),G&&(Re(g),h.g[y].length==0&&(delete h.g[y],h.h--))}}function fn(h,g,y,w){for(var j=0;j<h.length;++j){var G=h[j];if(!G.da&&G.listener==g&&G.capture==!!y&&G.ha==w)return j}return-1}var Pn="closure_lm_"+(1e6*Math.random()|0),Ai={};function Qn(h,g,y,w,j){if(Array.isArray(g)){for(var G=0;G<g.length;G++)Qn(h,g[G],y,w,j);return null}return y=qr(y),h&&h[Je]?h.K(g,y,_(w)?!!w.capture:!1,j):Xi(h,g,y,!1,w,j)}function Xi(h,g,y,w,j,G){if(!g)throw Error("Invalid event type");var ce=_(j)?!!j.capture:!!j,qe=Zi(h);if(qe||(h[Pn]=qe=new Zt(h)),y=qe.add(g,y,w,ce,G),y.proxy)return y;if(w=K(),y.proxy=w,w.src=h,w.listener=y,h.addEventListener)fe||(j=ce),j===void 0&&(j=!1),h.addEventListener(g.toString(),w,j);else if(h.attachEvent)h.attachEvent(Jt(g.toString()),w);else if(h.addListener&&h.removeListener)h.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function K(){function h(y){return g.call(h.src,h.listener,y)}const g=qa;return h}function tt(h,g,y,w,j){if(Array.isArray(g))for(var G=0;G<g.length;G++)tt(h,g[G],y,w,j);else w=_(w)?!!w.capture:!!w,y=qr(y),h&&h[Je]?(h=h.i,g=String(g).toString(),g in h.g&&(G=h.g[g],y=fn(G,y,w,j),-1<y&&(Re(G[y]),Array.prototype.splice.call(G,y,1),G.length==0&&(delete h.g[g],h.h--)))):h&&(h=Zi(h))&&(g=h.g[g.toString()],h=-1,g&&(h=fn(g,y,w,j)),(y=-1<h?g[h]:null)&&Ht(y))}function Ht(h){if(typeof h!="number"&&h&&!h.da){var g=h.src;if(g&&g[Je])Mn(g.i,h);else{var y=h.type,w=h.proxy;g.removeEventListener?g.removeEventListener(y,w,h.capture):g.detachEvent?g.detachEvent(Jt(y),w):g.addListener&&g.removeListener&&g.removeListener(w),(y=Zi(g))?(Mn(y,h),y.h==0&&(y.src=null,g[Pn]=null)):Re(h)}}}function Jt(h){return h in Ai?Ai[h]:Ai[h]="on"+h}function qa(h,g){if(h.da)h=!0;else{g=new ge(g,this);var y=h.listener,w=h.ha||h.src;h.fa&&Ht(h),h=y.call(w,g)}return h}function Zi(h){return h=h[Pn],h instanceof Zt?h:null}var en="__closure_events_fn_"+(1e9*Math.random()>>>0);function qr(h){return typeof h=="function"?h:(h[en]||(h[en]=function(g){return h.handleEvent(g)}),h[en])}function _t(){ne.call(this),this.i=new Zt(this),this.M=this,this.F=null}z(_t,ne),_t.prototype[Je]=!0,_t.prototype.removeEventListener=function(h,g,y,w){tt(this,h,g,y,w)};function Nt(h,g){var y,w=h.F;if(w)for(y=[];w;w=w.F)y.push(w);if(h=h.M,w=g.type||g,typeof g=="string")g=new ie(g,h);else if(g instanceof ie)g.target=g.target||h;else{var j=g;g=new ie(w,h),I(g,j)}if(j=!0,y)for(var G=y.length-1;0<=G;G--){var ce=g.g=y[G];j=Ji(ce,w,!0,g)&&j}if(ce=g.g=h,j=Ji(ce,w,!0,g)&&j,j=Ji(ce,w,!1,g)&&j,y)for(G=0;G<y.length;G++)ce=g.g=y[G],j=Ji(ce,w,!1,g)&&j}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var h=this.i,g;for(g in h.g){for(var y=h.g[g],w=0;w<y.length;w++)Re(y[w]);delete h.g[g],h.h--}}this.F=null},_t.prototype.K=function(h,g,y,w){return this.i.add(String(h),g,!1,y,w)},_t.prototype.L=function(h,g,y,w){return this.i.add(String(h),g,!0,y,w)};function Ji(h,g,y,w){if(g=h.i.g[String(g)],!g)return!0;g=g.concat();for(var j=!0,G=0;G<g.length;++G){var ce=g[G];if(ce&&!ce.da&&ce.capture==y){var qe=ce.listener,Pt=ce.ha||ce.src;ce.fa&&Mn(h.i,ce),j=qe.call(Pt,w)!==!1&&j}}return j&&!w.defaultPrevented}function Tc(h,g,y){if(typeof h=="function")y&&(h=C(h,y));else if(h&&typeof h.handleEvent=="function")h=C(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(h,g||0)}function yl(h){h.g=Tc(()=>{h.g=null,h.i&&(h.i=!1,yl(h))},h.l);const g=h.h;h.h=null,h.m.apply(null,g)}class hd extends ne{constructor(g,y){super(),this.m=g,this.l=y,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:yl(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gr(h){ne.call(this),this.h=h,this.g={}}z(Gr,ne);var Ls=[];function dn(h){Te(h.g,function(g,y){this.g.hasOwnProperty(y)&&Ht(g)},h),h.g={}}Gr.prototype.N=function(){Gr.aa.N.call(this),dn(this)},Gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vl=d.JSON.stringify,wi=d.JSON.parse,wn=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function El(){}El.prototype.h=null;function Sc(h){return h.h||(h.h=h.i())}function Ac(){}var bi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Us(){ie.call(this,"d")}z(Us,ie);function di(){ie.call(this,"c")}z(di,ie);var Yn={},js=null;function Ga(){return js=js||new _t}Yn.La="serverreachability";function Tl(h){ie.call(this,Yn.La,h)}z(Tl,ie);function Bs(h){const g=Ga();Nt(g,new Tl(g))}Yn.STAT_EVENT="statevent";function Ka(h,g){ie.call(this,Yn.STAT_EVENT,h),this.stat=g}z(Ka,ie);function Ct(h){const g=Ga();Nt(g,new Ka(g,h))}Yn.Ma="timingevent";function wc(h,g){ie.call(this,Yn.Ma,h),this.size=g}z(wc,ie);function zs(h,g){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},g)}function Hs(){this.g=!0}Hs.prototype.xa=function(){this.g=!1};function bc(h,g,y,w,j,G){h.info(function(){if(h.g)if(G)for(var ce="",qe=G.split("&"),Pt=0;Pt<qe.length;Pt++){var Ge=qe[Pt].split("=");if(1<Ge.length){var Gt=Ge[0];Ge=Ge[1];var Vt=Gt.split("_");ce=2<=Vt.length&&Vt[1]=="type"?ce+(Gt+"="+Ge+"&"):ce+(Gt+"=redacted&")}}else ce=null;else ce=G;return"XMLHTTP REQ ("+w+") [attempt "+j+"]: "+g+`
`+y+`
`+ce})}function Cc(h,g,y,w,j,G,ce){h.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+j+"]: "+g+`
`+y+`
`+G+" "+ce})}function Fs(h,g,y,w){h.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ft(h,y)+(w?" "+w:"")})}function Ci(h,g){h.info(function(){return"TIMEOUT: "+g})}Hs.prototype.info=function(){};function Ft(h,g){if(!h.g)return g;if(!g)return null;try{var y=JSON.parse(g);if(y){for(h=0;h<y.length;h++)if(Array.isArray(y[h])){var w=y[h];if(!(2>w.length)){var j=w[1];if(Array.isArray(j)&&!(1>j.length)){var G=j[0];if(G!="noop"&&G!="stop"&&G!="close")for(var ce=1;ce<j.length;ce++)j[ce]=""}}}}return vl(y)}catch{return g}}var Mt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},es={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Kr;function Wa(){}z(Wa,El),Wa.prototype.g=function(){return new XMLHttpRequest},Wa.prototype.i=function(){return{}},Kr=new Wa;function Ri(h,g,y,w){this.j=h,this.i=g,this.l=y,this.R=w||1,this.U=new Gr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sl}function Sl(){this.i=null,this.g="",this.h=!1}var qs={},Wr={};function pi(h,g,y){h.L=1,h.v=$r(Tt(g)),h.m=y,h.P=!0,ts(h,null)}function ts(h,g){h.F=Date.now(),gt(h),h.A=Tt(h.v);var y=h.A,w=h.R;Array.isArray(w)||(w=[String(w)]),ss(y.i,"t",w),h.C=0,y=h.j.J,h.h=new Sl,h.g=Bc(h.j,y?g:null,!h.m),0<h.O&&(h.M=new hd(C(h.Y,h,h.g),h.O)),g=h.U,y=h.g,w=h.ca;var j="readystatechange";Array.isArray(j)||(j&&(Ls[0]=j.toString()),j=Ls);for(var G=0;G<j.length;G++){var ce=Qn(y,j[G],w||g.handleEvent,!1,g.h||g);if(!ce)break;g.g[ce.key]=ce}g=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,g)):(h.u="GET",h.g.ea(h.A,h.u,null,g)),Bs(),bc(h.i,h.u,h.A,h.l,h.R,h.m)}Ri.prototype.ca=function(h){h=h.target;const g=this.M;g&&ei(h)==3?g.j():this.Y(h)},Ri.prototype.Y=function(h){try{if(h==this.g)e:{const Vt=ei(this.g);var g=this.g.Ba();const ls=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||kc(this.g)))){this.J||Vt!=4||g==7||(g==8||0>=ls?Bs(3):Bs(2)),Qa(this);var y=this.g.Z();this.X=y;t:if(Gs(this)){var w=kc(this.g);h="";var j=w.length,G=ei(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nn(this),Vn(this);var ce="";break t}this.h.i=new d.TextDecoder}for(g=0;g<j;g++)this.h.h=!0,h+=this.h.i.decode(w[g],{stream:!(G&&g==j-1)});w.length=0,this.h.g+=h,this.C=0,ce=this.h.g}else ce=this.g.oa();if(this.o=y==200,Cc(this.i,this.u,this.A,this.l,this.R,Vt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Pt=this.g;if((qe=Pt.g?Pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(qe)){var Ge=qe;break t}}Ge=null}if(y=Ge)Fs(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ln(this,y);else{this.o=!1,this.s=3,Ct(12),Nn(this),Vn(this);break e}}if(this.P){y=!0;let tn;for(;!this.J&&this.C<ce.length;)if(tn=Ks(this,ce),tn==Wr){Vt==4&&(this.s=4,Ct(14),y=!1),Fs(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==qs){this.s=4,Ct(15),Fs(this.i,this.l,ce,"[Invalid Chunk]"),y=!1;break}else Fs(this.i,this.l,tn,null),Ln(this,tn);if(Gs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||ce.length!=0||this.h.h||(this.s=1,Ct(16),y=!1),this.o=this.o&&y,!y)Fs(this.i,this.l,ce,"[Invalid Chunked Response]"),Nn(this),Vn(this);else if(0<ce.length&&!this.W){this.W=!0;var Gt=this.j;Gt.g==this&&Gt.ba&&!Gt.M&&(Gt.j.info("Great, no buffering proxy detected. Bytes received: "+ce.length),ia(Gt),Gt.M=!0,Ct(11))}}else Fs(this.i,this.l,ce,null),Ln(this,ce);Vt==4&&Nn(this),this.o&&!this.J&&(Vt==4?Lc(this.j,this):(this.o=!1,gt(this)))}else gd(this.g),y==400&&0<ce.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),Nn(this),Vn(this)}}}catch{}finally{}};function Gs(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Ks(h,g){var y=h.C,w=g.indexOf(`
`,y);return w==-1?Wr:(y=Number(g.substring(y,w)),isNaN(y)?qs:(w+=1,w+y>g.length?Wr:(g=g.slice(w,w+y),h.C=w+y,g)))}Ri.prototype.cancel=function(){this.J=!0,Nn(this)};function gt(h){h.S=Date.now()+h.I,Al(h,h.I)}function Al(h,g){if(h.B!=null)throw Error("WatchDog timer not null");h.B=zs(C(h.ba,h),g)}function Qa(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Ri.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Ci(this.i,this.A),this.L!=2&&(Bs(),Ct(17)),Nn(this),this.s=2,Vn(this)):Al(this,this.S-h)};function Vn(h){h.j.G==0||h.J||Lc(h.j,h)}function Nn(h){Qa(h);var g=h.M;g&&typeof g.ma=="function"&&g.ma(),h.M=null,dn(h.U),h.g&&(g=h.g,h.g=null,g.abort(),g.ma())}function Ln(h,g){try{var y=h.j;if(y.G!=0&&(y.g==h||Ws(y.h,h))){if(!h.K&&Ws(y.h,h)&&y.G==3){try{var w=y.Da.g.parse(g)}catch{w=null}if(Array.isArray(w)&&w.length==3){var j=w;if(j[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<h.F)so(y),no(y);else break e;Ml(y),Ct(18)}}else y.za=j[1],0<y.za-y.T&&37500>j[2]&&y.F&&y.v==0&&!y.C&&(y.C=zs(C(y.Za,y),6e3));if(1>=Rc(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else os(y,11)}else if((h.K||y.g==h)&&so(y),!ee(g))for(j=y.Da.g.parse(g),g=0;g<j.length;g++){let Ge=j[g];if(y.T=Ge[0],Ge=Ge[1],y.G==2)if(Ge[0]=="c"){y.K=Ge[1],y.ia=Ge[2];const Gt=Ge[3];Gt!=null&&(y.la=Gt,y.j.info("VER="+y.la));const Vt=Ge[4];Vt!=null&&(y.Aa=Vt,y.j.info("SVER="+y.Aa));const ls=Ge[5];ls!=null&&typeof ls=="number"&&0<ls&&(w=1.5*ls,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const tn=h.g;if(tn){const Mi=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mi){var G=w.h;G.g||Mi.indexOf("spdy")==-1&&Mi.indexOf("quic")==-1&&Mi.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(Qs(G,G.h),G.h=null))}if(w.D){const Vl=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Vl&&(w.ya=Vl,$e(w.I,w.D,Vl))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-h.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var ce=h;if(w.qa=jc(w,w.J?w.ia:null,w.W),ce.K){$n(w.h,ce);var qe=ce,Pt=w.L;Pt&&(qe.I=Pt),qe.B&&(Qa(qe),gt(qe)),w.g=ce}else Pc(w);0<y.i.length&&io(y)}else Ge[0]!="stop"&&Ge[0]!="close"||os(y,7);else y.G==3&&(Ge[0]=="stop"||Ge[0]=="close"?Ge[0]=="stop"?os(y,7):kl(y):Ge[0]!="noop"&&y.l&&y.l.ta(Ge),y.v=0)}}Bs(4)}catch{}}var fd=class{constructor(h,g){this.g=h,this.map=g}};function wl(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bl(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Rc(h){return h.h?1:h.g?h.g.size:0}function Ws(h,g){return h.h?h.h==g:h.g?h.g.has(g):!1}function Qs(h,g){h.g?h.g.add(g):h.h=g}function $n(h,g){h.h&&h.h==g?h.h=null:h.g&&h.g.has(g)&&h.g.delete(g)}wl.prototype.cancel=function(){if(this.i=bn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function bn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let g=h.i;for(const y of h.g.values())g=g.concat(y.D);return g}return X(h.i)}function Ic(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var g=[],y=h.length,w=0;w<y;w++)g.push(h[w]);return g}g=[],y=0;for(w in h)g[y++]=h[w];return g}function dd(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var g=[];h=h.length;for(var y=0;y<h;y++)g.push(y);return g}g=[],y=0;for(const w in h)g[y++]=w;return g}}}function Qr(h,g){if(h.forEach&&typeof h.forEach=="function")h.forEach(g,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,g,void 0);else for(var y=dd(h),w=Ic(h),j=w.length,G=0;G<j;G++)g.call(void 0,w[G],y&&y[G],h)}var Cl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ya(h,g){if(h){h=h.split("&");for(var y=0;y<h.length;y++){var w=h[y].indexOf("="),j=null;if(0<=w){var G=h[y].substring(0,w);j=h[y].substring(w+1)}else G=h[y];g(G,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function ns(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof ns){this.h=h.h,Ys(this,h.j),this.o=h.o,this.g=h.g,Yr(this,h.s),this.l=h.l;var g=h.i,y=new Ii;y.i=g.i,g.g&&(y.g=new Map(g.g),y.h=g.h),$a(this,y),this.m=h.m}else h&&(g=String(h).match(Cl))?(this.h=!1,Ys(this,g[1]||"",!0),this.o=$s(g[2]||""),this.g=$s(g[3]||"",!0),Yr(this,g[4]),this.l=$s(g[5]||"",!0),$a(this,g[6]||"",!0),this.m=$s(g[7]||"")):(this.h=!1,this.i=new Ii(null,this.h))}ns.prototype.toString=function(){var h=[],g=this.j;g&&h.push(Xn(g,Rl,!0),":");var y=this.g;return(y||g=="file")&&(h.push("//"),(g=this.o)&&h.push(Xn(g,Rl,!0),"@"),h.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&h.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&h.push("/"),h.push(Xn(y,y.charAt(0)=="/"?Il:Nc,!0))),(y=this.i.toString())&&h.push("?",y),(y=this.m)&&h.push("#",Xn(y,_d)),h.join("")};function Tt(h){return new ns(h)}function Ys(h,g,y){h.j=y?$s(g,!0):g,h.j&&(h.j=h.j.replace(/:$/,""))}function Yr(h,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);h.s=g}else h.s=null}function $a(h,g,y){g instanceof Ii?(h.i=g,Nl(h.i,h.h)):(y||(g=Xn(g,md)),h.i=new Ii(g,h.h))}function $e(h,g,y){h.i.set(g,y)}function $r(h){return $e(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function $s(h,g){return h?g?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Xn(h,g,y){return typeof h=="string"?(h=encodeURI(h).replace(g,pd),y&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function pd(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Rl=/[#\/\?@]/g,Nc=/[#\?:]/g,Il=/[#\?]/g,md=/[#\?@]/g,_d=/#/g;function Ii(h,g){this.h=this.g=null,this.i=h||null,this.j=!!g}function Zn(h){h.g||(h.g=new Map,h.h=0,h.i&&Ya(h.i,function(g,y){h.add(decodeURIComponent(g.replace(/\+/g," ")),y)}))}i=Ii.prototype,i.add=function(h,g){Zn(this),this.i=null,h=rs(this,h);var y=this.g.get(h);return y||this.g.set(h,y=[]),y.push(g),this.h+=1,this};function Xa(h,g){Zn(h),g=rs(h,g),h.g.has(g)&&(h.i=null,h.h-=h.g.get(g).length,h.g.delete(g))}function is(h,g){return Zn(h),g=rs(h,g),h.g.has(g)}i.forEach=function(h,g){Zn(this),this.g.forEach(function(y,w){y.forEach(function(j){h.call(g,j,w,this)},this)},this)},i.na=function(){Zn(this);const h=Array.from(this.g.values()),g=Array.from(this.g.keys()),y=[];for(let w=0;w<g.length;w++){const j=h[w];for(let G=0;G<j.length;G++)y.push(g[w])}return y},i.V=function(h){Zn(this);let g=[];if(typeof h=="string")is(this,h)&&(g=g.concat(this.g.get(rs(this,h))));else{h=Array.from(this.g.values());for(let y=0;y<h.length;y++)g=g.concat(h[y])}return g},i.set=function(h,g){return Zn(this),this.i=null,h=rs(this,h),is(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[g]),this.h+=1,this},i.get=function(h,g){return h?(h=this.V(h),0<h.length?String(h[0]):g):g};function ss(h,g,y){Xa(h,g),0<y.length&&(h.i=null,h.g.set(rs(h,g),X(y)),h.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],g=Array.from(this.g.keys());for(var y=0;y<g.length;y++){var w=g[y];const G=encodeURIComponent(String(w)),ce=this.V(w);for(w=0;w<ce.length;w++){var j=G;ce[w]!==""&&(j+="="+encodeURIComponent(String(ce[w]))),h.push(j)}}return this.i=h.join("&")};function rs(h,g){return g=String(g),h.j&&(g=g.toLowerCase()),g}function Nl(h,g){g&&!h.j&&(Zn(h),h.i=null,h.g.forEach(function(y,w){var j=w.toLowerCase();w!=j&&(Xa(this,w),ss(this,j,y))},h)),h.j=g}function Dc(h,g){const y=new Hs;if(d.Image){const w=new Image;w.onload=P(Jn,y,"TestLoadImage: loaded",!0,g,w),w.onerror=P(Jn,y,"TestLoadImage: error",!1,g,w),w.onabort=P(Jn,y,"TestLoadImage: abort",!1,g,w),w.ontimeout=P(Jn,y,"TestLoadImage: timeout",!1,g,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=h}else g(!1)}function Xr(h,g){const y=new Hs,w=new AbortController,j=setTimeout(()=>{w.abort(),Jn(y,"TestPingServer: timeout",!1,g)},1e4);fetch(h,{signal:w.signal}).then(G=>{clearTimeout(j),G.ok?Jn(y,"TestPingServer: ok",!0,g):Jn(y,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(j),Jn(y,"TestPingServer: error",!1,g)})}function Jn(h,g,y,w,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),w(y)}catch{}}function Zr(){this.g=new wn}function Ni(h,g,y){const w=y||"";try{Qr(h,function(j,G){let ce=j;_(j)&&(ce=vl(j)),g.push(w+G+"="+encodeURIComponent(ce))})}catch(j){throw g.push(w+"type="+encodeURIComponent("_badmap")),j}}function Xs(h){this.l=h.Ub||null,this.j=h.eb||!1}z(Xs,El),Xs.prototype.g=function(){return new as(this.l,this.j)},Xs.prototype.i=function(h){return function(){return h}}({});function as(h,g){_t.call(this),this.D=h,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(as,_t),i=as.prototype,i.open=function(h,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=g,this.readyState=1,Oi(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(g.body=h),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Di(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Oi(this)),this.g&&(this.readyState=3,Oi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var g=h.value?h.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!h.done}))&&(this.response=this.responseText+=g)}h.done?Di(this):Oi(this),this.readyState==3&&Dl(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,Di(this))},i.Qa=function(h){this.g&&(this.response=h,Di(this))},i.ga=function(){this.g&&Di(this)};function Di(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Oi(h)}i.setRequestHeader=function(h,g){this.u.append(h,g)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],g=this.h.entries();for(var y=g.next();!y.done;)y=y.value,h.push(y[0]+": "+y[1]),y=g.next();return h.join(`\r
`)};function Oi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Ol(h){let g="";return Te(h,function(y,w){g+=w,g+=":",g+=y,g+=`\r
`}),g}function qt(h,g,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=Ol(y),typeof h=="string"?y!=null&&encodeURIComponent(String(y)):$e(h,g,y))}function nt(h){_t.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(nt,_t);var Za=/^https?$/i,Jr=["POST","PUT"];i=nt.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,g,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);g=g?g.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Kr.g(),this.v=this.o?Sc(this.o):Sc(Kr),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(g,String(h),!0),this.B=!1}catch(G){Oc(this,G);return}if(h=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var j in w)y.set(j,w[j]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const G of w.keys())y.set(G,w.get(G));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(G=>G.toLowerCase()=="content-type"),j=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Jr,g,void 0))||w||j||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,ce]of y)this.g.setRequestHeader(G,ce);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ea(this),this.u=!0,this.g.send(h),this.u=!1}catch(G){Oc(this,G)}};function Oc(h,g){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=g,h.m=5,Ja(h),ki(h)}function Ja(h){h.A||(h.A=!0,Nt(h,"complete"),Nt(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Nt(this,"complete"),Nt(this,"abort"),ki(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ki(this,!0)),nt.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?eo(this):this.bb())},i.bb=function(){eo(this)};function eo(h){if(h.h&&typeof c<"u"&&(!h.v[1]||ei(h)!=4||h.Z()!=2)){if(h.u&&ei(h)==4)Tc(h.Ea,0,h);else if(Nt(h,"readystatechange"),ei(h)==4){h.h=!1;try{const ce=h.Z();e:switch(ce){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var y;if(!(y=g)){var w;if(w=ce===0){var j=String(h.D).match(Cl)[1]||null;!j&&d.self&&d.self.location&&(j=d.self.location.protocol.slice(0,-1)),w=!Za.test(j?j.toLowerCase():"")}y=w}if(y)Nt(h,"complete"),Nt(h,"success");else{h.m=6;try{var G=2<ei(h)?h.g.statusText:""}catch{G=""}h.l=G+" ["+h.Z()+"]",Ja(h)}}finally{ki(h)}}}}function ki(h,g){if(h.g){ea(h);const y=h.g,w=h.v[0]?()=>{}:null;h.g=null,h.v=null,g||Nt(h,"ready");try{y.onreadystatechange=w}catch{}}}function ea(h){h.I&&(d.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function ei(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<ei(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var g=this.g.responseText;return h&&g.indexOf(h)==0&&(g=g.substring(h.length)),wi(g)}};function kc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function gd(h){const g={};h=(h.g&&2<=ei(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<h.length;w++){if(ee(h[w]))continue;var y=x(h[w]);const j=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const G=g[j]||[];g[j]=G,G.push(y)}k(g,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ta(h,g,y){return y&&y.internalChannelParams&&y.internalChannelParams[h]||g}function to(h){this.Aa=0,this.i=[],this.j=new Hs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ta("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ta("baseRetryDelayMs",5e3,h),this.cb=ta("retryDelaySeedMs",1e4,h),this.Wa=ta("forwardChannelMaxRetries",2,h),this.wa=ta("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new wl(h&&h.concurrentRequestLimit),this.Da=new Zr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=to.prototype,i.la=8,i.G=1,i.connect=function(h,g,y,w){Ct(0),this.W=h,this.H=g||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=jc(this,null,this.W),io(this)};function kl(h){if(xc(h),h.G==3){var g=h.U++,y=Tt(h.I);if($e(y,"SID",h.K),$e(y,"RID",g),$e(y,"TYPE","terminate"),na(h,y),g=new Ri(h,h.j,g),g.L=2,g.v=$r(Tt(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=g.v,y=!0),y||(g.g=Bc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),gt(g)}Uc(h)}function no(h){h.g&&(ia(h),h.g.cancel(),h.g=null)}function xc(h){no(h),h.u&&(d.clearTimeout(h.u),h.u=null),so(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function io(h){if(!bl(h.h)&&!h.s){h.s=!0;var g=h.Ga;F||O(),ae||(F(),ae=!0),Ae.add(g,h),h.B=0}}function yd(h,g){return Rc(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=g.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=zs(C(h.Ga,h,g),Pl(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const j=new Ri(this,this.j,h);let G=this.o;if(this.S&&(G?(G=R(G),I(G,this.S)):G=this.S),this.m!==null||this.O||(j.H=G,G=null),this.P)e:{for(var g=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(g+=w,4096<g){g=y;break e}if(g===4096||y===this.i.length-1){g=y+1;break e}}g=1e3}else g=1e3;g=Mc(this,j,g),y=Tt(this.I),$e(y,"RID",h),$e(y,"CVER",22),this.D&&$e(y,"X-HTTP-Session-Id",this.D),na(this,y),G&&(this.O?g="headers="+encodeURIComponent(String(Ol(G)))+"&"+g:this.m&&qt(y,this.m,G)),Qs(this.h,j),this.Ua&&$e(y,"TYPE","init"),this.P?($e(y,"$req",g),$e(y,"SID","null"),j.T=!0,pi(j,y,null)):pi(j,y,g),this.G=2}}else this.G==3&&(h?xl(this,h):this.i.length==0||bl(this.h)||xl(this))};function xl(h,g){var y;g?y=g.l:y=h.U++;const w=Tt(h.I);$e(w,"SID",h.K),$e(w,"RID",y),$e(w,"AID",h.T),na(h,w),h.m&&h.o&&qt(w,h.m,h.o),y=new Ri(h,h.j,y,h.B+1),h.m===null&&(y.H=h.o),g&&(h.i=g.D.concat(h.i)),g=Mc(h,y,1e3),y.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Qs(h.h,y),pi(y,w,g)}function na(h,g){h.H&&Te(h.H,function(y,w){$e(g,w,y)}),h.l&&Qr({},function(y,w){$e(g,w,y)})}function Mc(h,g,y){y=Math.min(h.i.length,y);var w=h.l?C(h.l.Na,h.l,h):null;e:{var j=h.i;let G=-1;for(;;){const ce=["count="+y];G==-1?0<y?(G=j[0].g,ce.push("ofs="+G)):G=0:ce.push("ofs="+G);let qe=!0;for(let Pt=0;Pt<y;Pt++){let Ge=j[Pt].g;const Gt=j[Pt].map;if(Ge-=G,0>Ge)G=Math.max(0,j[Pt].g-100),qe=!1;else try{Ni(Gt,ce,"req"+Ge+"_")}catch{w&&w(Gt)}}if(qe){w=ce.join("&");break e}}}return h=h.i.splice(0,y),g.D=h,w}function Pc(h){if(!h.g&&!h.u){h.Y=1;var g=h.Fa;F||O(),ae||(F(),ae=!0),Ae.add(g,h),h.v=0}}function Ml(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=zs(C(h.Fa,h),Pl(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,Vc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=zs(C(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),no(this),Vc(this))};function ia(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Vc(h){h.g=new Ri(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var g=Tt(h.qa);$e(g,"RID","rpc"),$e(g,"SID",h.K),$e(g,"AID",h.T),$e(g,"CI",h.F?"0":"1"),!h.F&&h.ja&&$e(g,"TO",h.ja),$e(g,"TYPE","xmlhttp"),na(h,g),h.m&&h.o&&qt(g,h.m,h.o),h.L&&(h.g.I=h.L);var y=h.g;h=h.ia,y.L=1,y.v=$r(Tt(g)),y.m=null,y.P=!0,ts(y,h)}i.Za=function(){this.C!=null&&(this.C=null,no(this),Ml(this),Ct(19))};function so(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Lc(h,g){var y=null;if(h.g==g){so(h),ia(h),h.g=null;var w=2}else if(Ws(h.h,g))y=g.D,$n(h.h,g),w=1;else return;if(h.G!=0){if(g.o)if(w==1){y=g.m?g.m.length:0,g=Date.now()-g.F;var j=h.B;w=Ga(),Nt(w,new wc(w,y)),io(h)}else Pc(h);else if(j=g.s,j==3||j==0&&0<g.X||!(w==1&&yd(h,g)||w==2&&Ml(h)))switch(y&&0<y.length&&(g=h.h,g.i=g.i.concat(y)),j){case 1:os(h,5);break;case 4:os(h,10);break;case 3:os(h,6);break;default:os(h,2)}}}function Pl(h,g){let y=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(y*=2),y*g}function os(h,g){if(h.j.info("Error code "+g),g==2){var y=C(h.fb,h),w=h.Xa;const j=!w;w=new ns(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ys(w,"https"),$r(w),j?Dc(w.toString(),y):Xr(w.toString(),y)}else Ct(2);h.G=0,h.l&&h.l.sa(g),Uc(h),xc(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function Uc(h){if(h.G=0,h.ka=[],h.l){const g=bn(h.h);(g.length!=0||h.i.length!=0)&&(H(h.ka,g),H(h.ka,h.i),h.h.i.length=0,X(h.i),h.i.length=0),h.l.ra()}}function jc(h,g,y){var w=y instanceof ns?Tt(y):new ns(y);if(w.g!="")g&&(w.g=g+"."+w.g),Yr(w,w.s);else{var j=d.location;w=j.protocol,g=g?g+"."+j.hostname:j.hostname,j=+j.port;var G=new ns(null);w&&Ys(G,w),g&&(G.g=g),j&&Yr(G,j),y&&(G.l=y),w=G}return y=h.D,g=h.ya,y&&g&&$e(w,y,g),$e(w,"VER",h.la),na(h,w),w}function Bc(h,g,y){if(g&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=h.Ca&&!h.pa?new nt(new Xs({eb:y})):new nt(h.pa),g.Ha(h.J),g}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function zc(){}i=zc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ro(){}ro.prototype.g=function(h,g){return new Cn(h,g)};function Cn(h,g){_t.call(this),this.g=new to(g),this.l=h,this.h=g&&g.messageUrlParams||null,h=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(h?h["X-WebChannel-Content-Type"]=g.messageContentType:h={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(h?h["X-WebChannel-Client-Profile"]=g.va:h={"X-WebChannel-Client-Profile":g.va}),this.g.S=h,(h=g&&g.Sb)&&!ee(h)&&(this.g.m=h),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!ee(g)&&(this.g.D=g,h=this.h,h!==null&&g in h&&(h=this.h,g in h&&delete h[g])),this.j=new xi(this)}z(Cn,_t),Cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Cn.prototype.close=function(){kl(this.g)},Cn.prototype.o=function(h){var g=this.g;if(typeof h=="string"){var y={};y.__data__=h,h=y}else this.u&&(y={},y.__data__=vl(h),h=y);g.i.push(new fd(g.Ya++,h)),g.G==3&&io(g)},Cn.prototype.N=function(){this.g.l=null,delete this.j,kl(this.g),delete this.g,Cn.aa.N.call(this)};function Hc(h){Us.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var g=h.__sm__;if(g){e:{for(const y in g){h=y;break e}h=void 0}(this.i=h)&&(h=this.i,g=g!==null&&h in g?g[h]:void 0),this.data=g}else this.data=h}z(Hc,Us);function Fc(){di.call(this),this.status=1}z(Fc,di);function xi(h){this.g=h}z(xi,zc),xi.prototype.ua=function(){Nt(this.g,"a")},xi.prototype.ta=function(h){Nt(this.g,new Hc(h))},xi.prototype.sa=function(h){Nt(this.g,new Fc)},xi.prototype.ra=function(){Nt(this.g,"b")},ro.prototype.createWebChannel=ro.prototype.g,Cn.prototype.send=Cn.prototype.o,Cn.prototype.open=Cn.prototype.m,Cn.prototype.close=Cn.prototype.close,lw=function(){return new ro},ow=function(){return Ga()},aw=Yn,e_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mt.NO_ERROR=0,Mt.TIMEOUT=8,Mt.HTTP_ERROR=6,nf=Mt,es.COMPLETE="complete",rw=es,Ac.EventType=bi,bi.OPEN="a",bi.CLOSE="b",bi.ERROR="c",bi.MESSAGE="d",_t.prototype.listen=_t.prototype.K,Vu=Ac,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,sw=nt}).apply(typeof qh<"u"?qh:typeof self<"u"?self:typeof window<"u"?window:{});const eS="@firebase/firestore",tS="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let fl="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new jf("@firebase/firestore");function Vo(){return Ma.logLevel}function me(i,...e){if(Ma.logLevel<=je.DEBUG){const t=e.map(Z_);Ma.debug(`Firestore (${fl}): ${i}`,...t)}}function xs(i,...e){if(Ma.logLevel<=je.ERROR){const t=e.map(Z_);Ma.error(`Firestore (${fl}): ${i}`,...t)}}function Zo(i,...e){if(Ma.logLevel<=je.WARN){const t=e.map(Z_);Ma.warn(`Firestore (${fl}): ${i}`,...t)}}function Z_(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ie(i="Unexpected state"){const e=`FIRESTORE (${fl}) INTERNAL ASSERTION FAILED: `+i;throw xs(e),new Error(e)}function st(i,e){i||Ie()}function xe(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class uw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ex{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(yn.UNAUTHENTICATED))}shutdown(){}}class Tx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Sx{constructor(e){this.t=e,this.currentUser=yn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){st(this.o===void 0);let s=this.i;const a=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let l=new Dr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Dr,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const m=l;e.enqueueRetryable(async()=>{await m.promise,await a(this.currentUser)})},d=m=>{me("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(m=>d(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?d(m):(me("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Dr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(me("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(st(typeof s.accessToken=="string"),new uw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return st(e===null||typeof e=="string"),new yn(e)}}class Ax{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=yn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class wx{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new Ax(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(yn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bx{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,qn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){st(this.o===void 0);const s=l=>{l.error!=null&&me("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,me("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{me("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?a(l):me("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new nS(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(st(typeof t.token=="string"),this.R=t.token,new nS(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=Cx(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function He(i,e){return i<e?-1:i>e?1:0}function Jo(i,e,t){return i.length===e.length&&i.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=-62135596800,sS=1e6;class Bt{static now(){return Bt.fromMillis(Date.now())}static fromDate(e){return Bt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*sS);return new Bt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Se(re.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Se(re.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<iS)throw new Se(re.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Se(re.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sS}_compareTo(e){return this.seconds===e.seconds?He(this.nanoseconds,e.nanoseconds):He(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-iS;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const rS="__name__";class Bi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ie(),s===void 0?s=e.length-t:s>e.length-t&&Ie(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Bi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bi?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Bi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=Bi.isNumericId(e),a=Bi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Bi.extractNumericId(e).compare(Bi.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nr.fromString(e.substring(4,e.length-2))}}class bt extends Bi{construct(e,t,s){return new bt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new Se(re.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new bt(t)}static emptyPath(){return new bt([])}}const Rx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class un extends Bi{construct(e,t,s){return new un(e,t,s)}static isValidIdentifier(e){return Rx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),un.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rS}static keyField(){return new un([rS])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new Se(re.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new Se(re.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new Se(re.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new Se(re.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new un(t)}static emptyPath(){return new un([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ec=-1;function Ix(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=De.fromTimestamp(s===1e9?new Bt(t+1,0):new Bt(t,s));return new Mr(a,we.empty(),e)}function Nx(i){return new Mr(i.readTime,i.key,ec)}class Mr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Mr(De.min(),we.empty(),ec)}static max(){return new Mr(De.max(),we.empty(),ec)}}function Dx(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=we.comparator(i.documentKey,e.documentKey),t!==0?t:He(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(i){if(i.code!==re.FAILED_PRECONDITION||i.message!==Ox)throw i;me("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof J?t:J.resolve(t)}catch(t){return J.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):J.reject(t)}static resolve(e){return new J((t,s)=>{t(e)})}static reject(e){return new J((t,s)=>{s(e)})}static waitFor(e){return new J((t,s)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},m=>s(m))}),c=!0,l===a&&t()})}static or(e){let t=J.resolve(!1);for(const s of e)t=t.next(a=>a?J.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new J((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let m=0;m<l;m++){const _=m;t(e[_]).next(E=>{c[_]=E,++d,d===l&&s(c)},E=>a(E))}})}static doWhile(e,t){return new J((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function xx(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function pl(i){return i.name==="IndexedDbTransactionError"}/**
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
 */const J_=-1;function Yf(i){return i==null}function bf(i){return i===0&&1/i==-1/0}function Mx(i){return typeof i=="number"&&Number.isInteger(i)&&!bf(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="";function Px(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=aS(e)),e=Vx(i.get(t),e);return aS(e)}function Vx(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case hw:t+="";break;default:t+=l}}return t}function aS(i){return i+hw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Hr(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function fw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t){this.comparator=e,this.root=t||on.EMPTY}insert(e,t){return new Et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,on.BLACK,null,null))}remove(e){return new Et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,on.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gh(this.root,e,this.comparator,!0)}}class Gh{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class on{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??on.RED,this.left=a??on.EMPTY,this.right=l??on.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new on(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return on.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return on.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,on.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,on.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ie();const e=this.left.check();if(e!==this.right.check())throw Ie();return e+(this.isRed()?0:1)}}on.EMPTY=null,on.RED=!0,on.BLACK=!1;on.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie()}get value(){throw Ie()}get color(){throw Ie()}get left(){throw Ie()}get right(){throw Ie()}copy(e,t,s,a,l){return this}insert(e,t,s){return new on(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.comparator=e,this.data=new Et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new lS(this.data.getIterator())}getIteratorFrom(e){return new lS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof zt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new zt(this.comparator);return t.data=e,t}}class lS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.fields=e,e.sort(un.comparator)}static empty(){return new Gn([])}unionWith(e){let t=new zt(un.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Gn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Jo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class dw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new dw("Invalid base64 string: "+l):l}}(e);return new hn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new hn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return He(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}hn.EMPTY_BYTE_STRING=new hn("");const Lx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(i){if(st(!!i),typeof i=="string"){let e=0;const t=Lx.exec(i);if(st(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:It(i.seconds),nanos:It(i.nanos)}}function It(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Vr(i){return typeof i=="string"?hn.fromBase64String(i):hn.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="server_timestamp",mw="__type__",_w="__previous_value__",gw="__local_write_time__";function eg(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[mw])===null||t===void 0?void 0:t.stringValue)===pw}function $f(i){const e=i.mapValue.fields[_w];return eg(e)?$f(e):e}function tc(i){const e=Pr(i.mapValue.fields[gw].timestampValue);return new Bt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,t,s,a,l,c,d,m,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=m,this.useFetchStreams=_}}const Cf="(default)";class nc{constructor(e,t){this.projectId=e,this.database=t||Cf}static empty(){return new nc("","")}get isDefaultDatabase(){return this.database===Cf}isEqual(e){return e instanceof nc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="__type__",jx="__max__",Kh={mapValue:{}},vw="__vector__",Rf="value";function Lr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?eg(i)?4:zx(i)?9007199254740991:Bx(i)?10:11:Ie()}function Yi(i,e){if(i===e)return!0;const t=Lr(i);if(t!==Lr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return tc(i).isEqual(tc(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Pr(a.timestampValue),d=Pr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return Vr(a.bytesValue).isEqual(Vr(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return It(a.geoPointValue.latitude)===It(l.geoPointValue.latitude)&&It(a.geoPointValue.longitude)===It(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return It(a.integerValue)===It(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=It(a.doubleValue),d=It(l.doubleValue);return c===d?bf(c)===bf(d):isNaN(c)&&isNaN(d)}return!1}(i,e);case 9:return Jo(i.arrayValue.values||[],e.arrayValue.values||[],Yi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(oS(c)!==oS(d))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(d[m]===void 0||!Yi(c[m],d[m])))return!1;return!0}(i,e);default:return Ie()}}function ic(i,e){return(i.values||[]).find(t=>Yi(t,e))!==void 0}function el(i,e){if(i===e)return 0;const t=Lr(i),s=Lr(e);if(t!==s)return He(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return He(i.booleanValue,e.booleanValue);case 2:return function(l,c){const d=It(l.integerValue||l.doubleValue),m=It(c.integerValue||c.doubleValue);return d<m?-1:d>m?1:d===m?0:isNaN(d)?isNaN(m)?0:-1:1}(i,e);case 3:return uS(i.timestampValue,e.timestampValue);case 4:return uS(tc(i),tc(e));case 5:return He(i.stringValue,e.stringValue);case 6:return function(l,c){const d=Vr(l),m=Vr(c);return d.compareTo(m)}(i.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),m=c.split("/");for(let _=0;_<d.length&&_<m.length;_++){const E=He(d[_],m[_]);if(E!==0)return E}return He(d.length,m.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,c){const d=He(It(l.latitude),It(c.latitude));return d!==0?d:He(It(l.longitude),It(c.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return cS(i.arrayValue,e.arrayValue);case 10:return function(l,c){var d,m,_,E;const T=l.fields||{},C=c.fields||{},P=(d=T[Rf])===null||d===void 0?void 0:d.arrayValue,z=(m=C[Rf])===null||m===void 0?void 0:m.arrayValue,X=He(((_=P==null?void 0:P.values)===null||_===void 0?void 0:_.length)||0,((E=z==null?void 0:z.values)===null||E===void 0?void 0:E.length)||0);return X!==0?X:cS(P,z)}(i.mapValue,e.mapValue);case 11:return function(l,c){if(l===Kh.mapValue&&c===Kh.mapValue)return 0;if(l===Kh.mapValue)return 1;if(c===Kh.mapValue)return-1;const d=l.fields||{},m=Object.keys(d),_=c.fields||{},E=Object.keys(_);m.sort(),E.sort();for(let T=0;T<m.length&&T<E.length;++T){const C=He(m[T],E[T]);if(C!==0)return C;const P=el(d[m[T]],_[E[T]]);if(P!==0)return P}return He(m.length,E.length)}(i.mapValue,e.mapValue);default:throw Ie()}}function uS(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return He(i,e);const t=Pr(i),s=Pr(e),a=He(t.seconds,s.seconds);return a!==0?a:He(t.nanos,s.nanos)}function cS(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=el(t[a],s[a]);if(l)return l}return He(t.length,s.length)}function tl(i){return t_(i)}function t_(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=Pr(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return Vr(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return we.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=t_(l);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${t_(t.fields[c])}`;return a+"}"}(i.mapValue):Ie()}function sf(i){switch(Lr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$f(i);return e?16+sf(e):16;case 5:return 2*i.stringValue.length;case 6:return Vr(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+sf(l),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return Hr(s.fields,(l,c)=>{a+=l.length+sf(c)}),a}(i.mapValue);default:throw Ie()}}function n_(i){return!!i&&"integerValue"in i}function tg(i){return!!i&&"arrayValue"in i}function hS(i){return!!i&&"nullValue"in i}function fS(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function rf(i){return!!i&&"mapValue"in i}function Bx(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[yw])===null||t===void 0?void 0:t.stringValue)===vw}function qu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Hr(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=qu(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qu(i.arrayValue.values[t]);return e}return Object.assign({},i)}function zx(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===jx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.value=e}static empty(){return new xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!rf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qu(t)}setAll(e){let t=un.emptyPath(),s={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const m=this.getFieldsMap(t);this.applyChanges(m,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=qu(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());rf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Yi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];rf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Hr(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new xn(qu(this.value))}}function Ew(i){const e=[];return Hr(i.fields,(t,s)=>{const a=new un([t]);if(rf(s)){const l=Ew(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new Gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Tn(e,0,De.min(),De.min(),De.min(),xn.empty(),0)}static newFoundDocument(e,t,s,a){return new Tn(e,1,t,De.min(),s,a,0)}static newNoDocument(e,t){return new Tn(e,2,t,De.min(),De.min(),xn.empty(),0)}static newUnknownDocument(e,t){return new Tn(e,3,t,De.min(),De.min(),xn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(De.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=De.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class If{constructor(e,t){this.position=e,this.inclusive=t}}function dS(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?s=we.comparator(we.fromName(c.referenceValue),t.key):s=el(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function pS(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Yi(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Nf{constructor(e,t="asc"){this.field=e,this.dir=t}}function Hx(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Tw{}class jt extends Tw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new qx(e,t,s):t==="array-contains"?new Wx(e,s):t==="in"?new Qx(e,s):t==="not-in"?new Yx(e,s):t==="array-contains-any"?new $x(e,s):new jt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Gx(e,s):new Kx(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(el(t,this.value)):t!==null&&Lr(this.value)===Lr(t)&&this.matchesComparison(el(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $i extends Tw{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new $i(e,t)}matches(e){return Sw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Sw(i){return i.op==="and"}function Aw(i){return Fx(i)&&Sw(i)}function Fx(i){for(const e of i.filters)if(e instanceof $i)return!1;return!0}function i_(i){if(i instanceof jt)return i.field.canonicalString()+i.op.toString()+tl(i.value);if(Aw(i))return i.filters.map(e=>i_(e)).join(",");{const e=i.filters.map(t=>i_(t)).join(",");return`${i.op}(${e})`}}function ww(i,e){return i instanceof jt?function(s,a){return a instanceof jt&&s.op===a.op&&s.field.isEqual(a.field)&&Yi(s.value,a.value)}(i,e):i instanceof $i?function(s,a){return a instanceof $i&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,c,d)=>l&&ww(c,a.filters[d]),!0):!1}(i,e):void Ie()}function bw(i){return i instanceof jt?function(t){return`${t.field.canonicalString()} ${t.op} ${tl(t.value)}`}(i):i instanceof $i?function(t){return t.op.toString()+" {"+t.getFilters().map(bw).join(" ,")+"}"}(i):"Filter"}class qx extends jt{constructor(e,t,s){super(e,t,s),this.key=we.fromName(s.referenceValue)}matches(e){const t=we.comparator(e.key,this.key);return this.matchesComparison(t)}}class Gx extends jt{constructor(e,t){super(e,"in",t),this.keys=Cw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Kx extends jt{constructor(e,t){super(e,"not-in",t),this.keys=Cw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Cw(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>we.fromName(s.referenceValue))}class Wx extends jt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return tg(t)&&ic(t.arrayValue,this.value)}}class Qx extends jt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ic(this.value.arrayValue,t)}}class Yx extends jt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ic(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ic(this.value.arrayValue,t)}}class $x extends jt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!tg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ic(this.value.arrayValue,s))}}/**
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
 */class Xx{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.le=null}}function mS(i,e=null,t=[],s=[],a=null,l=null,c=null){return new Xx(i,e,t,s,a,l,c)}function ng(i){const e=xe(i);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>i_(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),Yf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>tl(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>tl(s)).join(",")),e.le=t}return e.le}function ig(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!Hx(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!ww(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!pS(i.startAt,e.startAt)&&pS(i.endAt,e.endAt)}function s_(i){return we.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=m,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Zx(i,e,t,s,a,l,c,d){return new Xf(i,e,t,s,a,l,c,d)}function sg(i){return new Xf(i)}function _S(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Jx(i){return i.collectionGroup!==null}function Gu(i){const e=xe(i);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new zt(un.comparator);return c.filters.forEach(m=>{m.getFlattenedFilters().forEach(_=>{_.isInequality()&&(d=d.add(_.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new Nf(l,s))}),t.has(un.keyField().canonicalString())||e.he.push(new Nf(un.keyField(),s))}return e.he}function Ki(i){const e=xe(i);return e.Pe||(e.Pe=e2(e,Gu(i))),e.Pe}function e2(i,e){if(i.limitType==="F")return mS(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Nf(a.field,l)});const t=i.endAt?new If(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new If(i.startAt.position,i.startAt.inclusive):null;return mS(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function r_(i,e,t){return new Xf(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Zf(i,e){return ig(Ki(i),Ki(e))&&i.limitType===e.limitType}function Rw(i){return`${ng(Ki(i))}|lt:${i.limitType}`}function Lo(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>bw(a)).join(", ")}]`),Yf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>tl(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>tl(a)).join(",")),`Target(${s})`}(Ki(i))}; limitType=${i.limitType})`}function Jf(i,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):we.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(i,e)&&function(s,a){for(const l of Gu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(c,d,m){const _=dS(c,d,m);return c.inclusive?_<=0:_<0}(s.startAt,Gu(s),a)||s.endAt&&!function(c,d,m){const _=dS(c,d,m);return c.inclusive?_>=0:_>0}(s.endAt,Gu(s),a))}(i,e)}function t2(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Iw(i){return(e,t)=>{let s=!1;for(const a of Gu(i)){const l=n2(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function n2(i,e,t){const s=i.field.isKeyField()?we.comparator(e.key,t.key):function(l,c,d){const m=c.data.field(l),_=d.data.field(l);return m!==null&&_!==null?el(m,_):Ie()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Ie()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Hr(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return fw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=new Et(we.comparator);function Ms(){return i2}const Nw=new Et(we.comparator);function Lu(...i){let e=Nw;for(const t of i)e=e.insert(t.key,t);return e}function Dw(i){let e=Nw;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Ca(){return Ku()}function Ow(){return Ku()}function Ku(){return new Ha(i=>i.toString(),(i,e)=>i.isEqual(e))}const s2=new Et(we.comparator),r2=new zt(we.comparator);function Be(...i){let e=r2;for(const t of i)e=e.add(t);return e}const a2=new zt(He);function o2(){return a2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bf(e)?"-0":e}}function kw(i){return{integerValue:""+i}}function l2(i,e){return Mx(e)?kw(e):rg(i,e)}/**
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
 */class ed{constructor(){this._=void 0}}function u2(i,e,t){return i instanceof Df?function(a,l){const c={fields:{[mw]:{stringValue:pw},[gw]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&eg(l)&&(l=$f(l)),l&&(c.fields[_w]=l),{mapValue:c}}(t,e):i instanceof nl?Mw(i,e):i instanceof sc?Pw(i,e):function(a,l){const c=xw(a,l),d=gS(c)+gS(a.Ie);return n_(c)&&n_(a.Ie)?kw(d):rg(a.serializer,d)}(i,e)}function c2(i,e,t){return i instanceof nl?Mw(i,e):i instanceof sc?Pw(i,e):t}function xw(i,e){return i instanceof Of?function(s){return n_(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class Df extends ed{}class nl extends ed{constructor(e){super(),this.elements=e}}function Mw(i,e){const t=Vw(e);for(const s of i.elements)t.some(a=>Yi(a,s))||t.push(s);return{arrayValue:{values:t}}}class sc extends ed{constructor(e){super(),this.elements=e}}function Pw(i,e){let t=Vw(e);for(const s of i.elements)t=t.filter(a=>!Yi(a,s));return{arrayValue:{values:t}}}class Of extends ed{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function gS(i){return It(i.integerValue||i.doubleValue)}function Vw(i){return tg(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,t){this.field=e,this.transform=t}}function f2(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof nl&&a instanceof nl||s instanceof sc&&a instanceof sc?Jo(s.elements,a.elements,Yi):s instanceof Of&&a instanceof Of?Yi(s.Ie,a.Ie):s instanceof Df&&a instanceof Df}(i.transform,e.transform)}class d2{constructor(e,t){this.version=e,this.transformResults=t}}class Wi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Wi}static exists(e){return new Wi(void 0,e)}static updateTime(e){return new Wi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function af(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class td{}function Lw(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new jw(i.key,Wi.none()):new _c(i.key,i.data,Wi.none());{const t=i.data,s=xn.empty();let a=new zt(un.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Fr(i.key,s,new Gn(a.toArray()),Wi.none())}}function p2(i,e,t){i instanceof _c?function(a,l,c){const d=a.value.clone(),m=vS(a.fieldTransforms,l,c.transformResults);d.setAll(m),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(i,e,t):i instanceof Fr?function(a,l,c){if(!af(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=vS(a.fieldTransforms,l,c.transformResults),m=l.data;m.setAll(Uw(a)),m.setAll(d),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()}(i,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Wu(i,e,t,s){return i instanceof _c?function(l,c,d,m){if(!af(l.precondition,c))return d;const _=l.value.clone(),E=ES(l.fieldTransforms,m,c);return _.setAll(E),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),null}(i,e,t,s):i instanceof Fr?function(l,c,d,m){if(!af(l.precondition,c))return d;const _=ES(l.fieldTransforms,m,c),E=c.data;return E.setAll(Uw(l)),E.setAll(_),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(i,e,t,s):function(l,c,d){return af(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(i,e,t)}function m2(i,e){let t=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),l=xw(s.transform,a||null);l!=null&&(t===null&&(t=xn.empty()),t.set(s.field,l))}return t||null}function yS(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Jo(s,a,(l,c)=>f2(l,c))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class _c extends td{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Fr extends td{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Uw(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function vS(i,e,t){const s=new Map;st(i.length===t.length);for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,c2(c,d,t[a]))}return s}function ES(i,e,t){const s=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);s.set(a.field,u2(l,c,e))}return s}class jw extends td{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _2 extends td{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&p2(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Wu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Wu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Ow();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const m=Lw(c,d);m!==null&&s.set(a.key,m),c.isValidDocument()||c.convertToNoDocument(De.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Be())}isEqual(e){return this.batchId===e.batchId&&Jo(this.mutations,e.mutations,(t,s)=>yS(t,s))&&Jo(this.baseMutations,e.baseMutations,(t,s)=>yS(t,s))}}class ag{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){st(e.mutations.length===s.length);let a=function(){return s2}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new ag(e,t,s,a)}}/**
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
 */class y2{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class v2{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt,We;function E2(i){switch(i){case re.OK:return Ie();case re.CANCELLED:case re.UNKNOWN:case re.DEADLINE_EXCEEDED:case re.RESOURCE_EXHAUSTED:case re.INTERNAL:case re.UNAVAILABLE:case re.UNAUTHENTICATED:return!1;case re.INVALID_ARGUMENT:case re.NOT_FOUND:case re.ALREADY_EXISTS:case re.PERMISSION_DENIED:case re.FAILED_PRECONDITION:case re.ABORTED:case re.OUT_OF_RANGE:case re.UNIMPLEMENTED:case re.DATA_LOSS:return!0;default:return Ie()}}function Bw(i){if(i===void 0)return xs("GRPC error has no .code"),re.UNKNOWN;switch(i){case xt.OK:return re.OK;case xt.CANCELLED:return re.CANCELLED;case xt.UNKNOWN:return re.UNKNOWN;case xt.DEADLINE_EXCEEDED:return re.DEADLINE_EXCEEDED;case xt.RESOURCE_EXHAUSTED:return re.RESOURCE_EXHAUSTED;case xt.INTERNAL:return re.INTERNAL;case xt.UNAVAILABLE:return re.UNAVAILABLE;case xt.UNAUTHENTICATED:return re.UNAUTHENTICATED;case xt.INVALID_ARGUMENT:return re.INVALID_ARGUMENT;case xt.NOT_FOUND:return re.NOT_FOUND;case xt.ALREADY_EXISTS:return re.ALREADY_EXISTS;case xt.PERMISSION_DENIED:return re.PERMISSION_DENIED;case xt.FAILED_PRECONDITION:return re.FAILED_PRECONDITION;case xt.ABORTED:return re.ABORTED;case xt.OUT_OF_RANGE:return re.OUT_OF_RANGE;case xt.UNIMPLEMENTED:return re.UNIMPLEMENTED;case xt.DATA_LOSS:return re.DATA_LOSS;default:return Ie()}}(We=xt||(xt={}))[We.OK=0]="OK",We[We.CANCELLED=1]="CANCELLED",We[We.UNKNOWN=2]="UNKNOWN",We[We.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",We[We.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",We[We.NOT_FOUND=5]="NOT_FOUND",We[We.ALREADY_EXISTS=6]="ALREADY_EXISTS",We[We.PERMISSION_DENIED=7]="PERMISSION_DENIED",We[We.UNAUTHENTICATED=16]="UNAUTHENTICATED",We[We.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",We[We.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",We[We.ABORTED=10]="ABORTED",We[We.OUT_OF_RANGE=11]="OUT_OF_RANGE",We[We.UNIMPLEMENTED=12]="UNIMPLEMENTED",We[We.INTERNAL=13]="INTERNAL",We[We.UNAVAILABLE=14]="UNAVAILABLE",We[We.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function T2(){return new TextEncoder}/**
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
 */const S2=new Nr([4294967295,4294967295],0);function TS(i){const e=T2().encode(i),t=new iw;return t.update(e),new Uint8Array(t.digest())}function SS(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Nr([t,s],0),new Nr([a,l],0)]}class og{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Uu(`Invalid padding: ${t}`);if(s<0)throw new Uu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Uu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Uu(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Nr.fromNumber(this.Ee)}Ae(e,t,s){let a=e.add(t.multiply(Nr.fromNumber(s)));return a.compare(S2)===1&&(a=new Nr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=TS(e),[s,a]=SS(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(s,a,l);if(!this.Re(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new og(l,a,t);return s.forEach(d=>c.insert(d)),c}insert(e){if(this.Ee===0)return;const t=TS(e),[s,a]=SS(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(s,a,l);this.Ve(c)}}Ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Uu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,gc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new nd(De.min(),a,new Et(He),Ms(),Be())}}class gc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new gc(s,t,Be(),Be(),Be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t,s,a){this.me=e,this.removedTargetIds=t,this.key=s,this.fe=a}}class zw{constructor(e,t){this.targetId=e,this.ge=t}}class Hw{constructor(e,t,s=hn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class AS{constructor(){this.pe=0,this.ye=wS(),this.we=hn.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=Be(),t=Be(),s=Be();return this.ye.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Ie()}}),new gc(this.we,this.be,e,t,s)}Me(){this.Se=!1,this.ye=wS()}xe(e,t){this.Se=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,st(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class A2{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Ms(),this.$e=Wh(),this.Ke=Wh(),this.Ue=new Et(He)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const s=this.He(t);switch(e.state){case 0:this.Je(t)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(t);break;case 3:this.Je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),s.Ce(e.resumeToken));break;default:Ie()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((s,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,s=e.ge.count,a=this.Xe(t);if(a){const l=a.target;if(s_(l))if(s===0){const c=new we(l.path);this.ze(t,c,Tn.newNoDocument(c,De.min()))}else st(s===1);else{const c=this.et(t);if(c!==s){const d=this.tt(e),m=d?this.nt(d,e,c):1;if(m!==0){this.Ye(t);const _=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,_)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Vr(s).toUint8Array()}catch(m){if(m instanceof dw)return Zo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{d=new og(c,a,l)}catch(m){return Zo(m instanceof Uu?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return d.Ee===0?null:d}nt(e,t,s){return t.ge.count===s-this.st(e,t.targetId)?0:2}st(e,t){const s=this.ke.getRemoteKeysForTarget(t);let a=0;return s.forEach(l=>{const c=this.ke.it(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,l,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((l,c)=>{const d=this.Xe(c);if(d){if(l.current&&s_(d.target)){const m=new we(d.target.path);this._t(m).has(c)||this.ut(c,m)||this.ze(c,m,Tn.newNoDocument(m,e))}l.ve&&(t.set(c,l.Fe()),l.Me())}});let s=Be();this.Ke.forEach((l,c)=>{let d=!0;c.forEachWhile(m=>{const _=this.Xe(m);return!_||_.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(l))}),this.Qe.forEach((l,c)=>c.setReadTime(e));const a=new nd(e,t,this.Ue,this.Qe,s);return this.Qe=Ms(),this.$e=Wh(),this.Ke=Wh(),this.Ue=new Et(He),a}Ge(e,t){if(!this.Je(e))return;const s=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,s),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,s){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),s&&(this.Qe=this.Qe.insert(t,s))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new AS,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new zt(He),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new zt(He),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||me("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new AS),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Wh(){return new Et(we.comparator)}function wS(){return new Et(we.comparator)}const w2={asc:"ASCENDING",desc:"DESCENDING"},b2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},C2={and:"AND",or:"OR"};class R2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function a_(i,e){return i.useProto3Json||Yf(e)?e:{value:e}}function kf(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fw(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function I2(i,e){return kf(i,e.toTimestamp())}function Qi(i){return st(!!i),De.fromTimestamp(function(t){const s=Pr(t);return new Bt(s.seconds,s.nanos)}(i))}function lg(i,e){return o_(i,e).canonicalString()}function o_(i,e){const t=function(a){return new bt(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function qw(i){const e=bt.fromString(i);return st(Yw(e)),e}function l_(i,e){return lg(i.databaseId,e.path)}function Im(i,e){const t=qw(e);if(t.get(1)!==i.databaseId.projectId)throw new Se(re.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new Se(re.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new we(Kw(t))}function Gw(i,e){return lg(i.databaseId,e)}function N2(i){const e=qw(i);return e.length===4?bt.emptyPath():Kw(e)}function u_(i){return new bt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Kw(i){return st(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function bS(i,e,t){return{name:l_(i,e),fields:t.value.mapValue.fields}}function D2(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(_,E){return _.useProto3Json?(st(E===void 0||typeof E=="string"),hn.fromBase64String(E||"")):(st(E===void 0||E instanceof Buffer||E instanceof Uint8Array),hn.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(_){const E=_.code===void 0?re.UNKNOWN:Bw(_.code);return new Se(E,_.message||"")}(c);t=new Hw(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=Im(i,s.document.name),l=Qi(s.document.updateTime),c=s.document.createTime?Qi(s.document.createTime):De.min(),d=new xn({mapValue:{fields:s.document.fields}}),m=Tn.newFoundDocument(a,l,c,d),_=s.targetIds||[],E=s.removedTargetIds||[];t=new of(_,E,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=Im(i,s.document),l=s.readTime?Qi(s.readTime):De.min(),c=Tn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new of([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=Im(i,s.document),l=s.removedTargetIds||[];t=new of([],l,a,null)}else{if(!("filter"in e))return Ie();{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new v2(a,l),d=s.targetId;t=new zw(d,c)}}return t}function O2(i,e){let t;if(e instanceof _c)t={update:bS(i,e.key,e.value)};else if(e instanceof jw)t={delete:l_(i,e.key)};else if(e instanceof Fr)t={update:bS(i,e.key,e.data),updateMask:B2(e.fieldMask)};else{if(!(e instanceof _2))return Ie();t={verify:l_(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,c){const d=c.transform;if(d instanceof Df)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof nl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof sc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Of)return{fieldPath:c.field.canonicalString(),increment:d.Ie};throw Ie()}(0,s))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:I2(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ie()}(i,e.precondition)),t}function k2(i,e){return i&&i.length>0?(st(e!==void 0),i.map(t=>function(a,l){let c=a.updateTime?Qi(a.updateTime):Qi(l);return c.isEqual(De.min())&&(c=Qi(l)),new d2(c,a.transformResults||[])}(t,e))):[]}function x2(i,e){return{documents:[Gw(i,e.path)]}}function M2(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Gw(i,a);const l=function(_){if(_.length!==0)return Qw($i.create(_,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(_){if(_.length!==0)return _.map(E=>function(C){return{field:Uo(C.field),direction:L2(C.dir)}}(E))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=a_(i,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{ht:t,parent:a}}function P2(i){let e=N2(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){st(s===1);const E=t.from[0];E.allDescendants?a=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const C=Ww(T);return C instanceof $i&&Aw(C)?C.getFilters():[C]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(C=>function(z){return new Nf(jo(z.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(z.direction))}(C))}(t.orderBy));let d=null;t.limit&&(d=function(T){let C;return C=typeof T=="object"?T.value:T,Yf(C)?null:C}(t.limit));let m=null;t.startAt&&(m=function(T){const C=!!T.before,P=T.values||[];return new If(P,C)}(t.startAt));let _=null;return t.endAt&&(_=function(T){const C=!T.before,P=T.values||[];return new If(P,C)}(t.endAt)),Zx(e,a,c,l,d,"F",m,_)}function V2(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ww(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=jo(t.unaryFilter.field);return jt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=jo(t.unaryFilter.field);return jt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=jo(t.unaryFilter.field);return jt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=jo(t.unaryFilter.field);return jt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Ie()}}(i):i.fieldFilter!==void 0?function(t){return jt.create(jo(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ie()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return $i.create(t.compositeFilter.filters.map(s=>Ww(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ie()}}(t.compositeFilter.op))}(i):Ie()}function L2(i){return w2[i]}function U2(i){return b2[i]}function j2(i){return C2[i]}function Uo(i){return{fieldPath:i.canonicalString()}}function jo(i){return un.fromServerFormat(i.fieldPath)}function Qw(i){return i instanceof jt?function(t){if(t.op==="=="){if(fS(t.value))return{unaryFilter:{field:Uo(t.field),op:"IS_NAN"}};if(hS(t.value))return{unaryFilter:{field:Uo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fS(t.value))return{unaryFilter:{field:Uo(t.field),op:"IS_NOT_NAN"}};if(hS(t.value))return{unaryFilter:{field:Uo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Uo(t.field),op:U2(t.op),value:t.value}}}(i):i instanceof $i?function(t){const s=t.getFilters().map(a=>Qw(a));return s.length===1?s[0]:{compositeFilter:{op:j2(t.op),filters:s}}}(i):Ie()}function B2(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Yw(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t,s,a,l=De.min(),c=De.min(),d=hn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=m}withSequenceNumber(e){return new br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.Tt=e}}function H2(i){const e=P2({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?r_(e,e.limit,"L"):e}/**
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
 */class F2{constructor(){this.Tn=new q2}addToCollectionParentIndex(e,t){return this.Tn.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(Mr.min())}updateCollectionGroup(e,t,s){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class q2{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new zt(bt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new zt(bt.comparator)).toArray()}}/**
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
 */const CS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$w=41943040;class kn{static withCacheSize(e){return new kn(e,kn.DEFAULT_COLLECTION_PERCENTILE,kn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn.DEFAULT_COLLECTION_PERCENTILE=10,kn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kn.DEFAULT=new kn($w,kn.DEFAULT_COLLECTION_PERCENTILE,kn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kn.DISABLED=new kn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new il(0)}static Un(){return new il(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="LruGarbageCollector",G2=1048576;function IS([i,e],[t,s]){const a=He(i,t);return a===0?He(e,s):a}class K2{constructor(e){this.Hn=e,this.buffer=new zt(IS),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();IS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class W2{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){me(RS,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){pl(t)?me(RS,"Ignoring IndexedDB error during garbage collection: ",t):await dl(t)}await this.er(3e5)})}}class Q2{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return J.resolve(Qf.ae);const s=new K2(t);return this.tr.forEachTarget(e,a=>s.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>s.Zn(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(me("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(CS)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(me("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),CS):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,a,l,c,d,m,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(me("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(s=T,d=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(_=Date.now(),Vo()<=je.DEBUG&&me("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-E}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(m-d)+`ms
	Removed ${T} documents in `+(_-m)+`ms
Total Duration: ${_-E}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function Y2(i,e){return new Q2(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(){this.changes=new Ha(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Tn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?J.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class X2{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&Wu(s.mutation,a,Gn.empty(),Bt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Be()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Be()){const a=Ca();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let c=Lu();return l.forEach((d,m)=>{c=c.insert(d,m.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const s=Ca();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Be()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,s,a){let l=Ms();const c=Ku(),d=function(){return Ku()}();return t.forEach((m,_)=>{const E=s.get(_.key);a.has(_.key)&&(E===void 0||E.mutation instanceof Fr)?l=l.insert(_.key,_):E!==void 0?(c.set(_.key,E.mutation.getFieldMask()),Wu(E.mutation,_,E.mutation.getFieldMask(),Bt.now())):c.set(_.key,Gn.empty())}),this.recalculateAndSaveOverlays(e,l).next(m=>(m.forEach((_,E)=>c.set(_,E)),t.forEach((_,E)=>{var T;return d.set(_,new X2(E,(T=c.get(_))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const s=Ku();let a=new Et((c,d)=>c-d),l=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(m=>{const _=t.get(m);if(_===null)return;let E=s.get(m)||Gn.empty();E=d.applyToLocalView(_,E),s.set(m,E);const T=(a.get(d.batchId)||Be()).add(m);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const m=d.getNext(),_=m.key,E=m.value,T=Ow();E.forEach(C=>{if(!l.has(C)){const P=Lw(t.get(C),s.get(C));P!==null&&T.set(C,P),l=l.add(C)}}),c.push(this.documentOverlayCache.saveOverlays(e,_,T))}return J.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(c){return we.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Jx(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):J.resolve(Ca());let d=ec,m=l;return c.next(_=>J.forEach(_,(E,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(E)?J.resolve():this.remoteDocumentCache.getEntry(e,E).next(C=>{m=m.insert(E,C)}))).next(()=>this.populateOverlays(e,_,l)).next(()=>this.computeViews(e,m,_,Be())).next(E=>({batchId:d,changes:Dw(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new we(t)).next(s=>{let a=Lu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Lu();return this.indexManager.getCollectionParents(e,l).next(d=>J.forEach(d,m=>{const _=function(T,C){return new Xf(C,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,a).next(E=>{E.forEach((T,C)=>{c=c.insert(T,C)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(c=>{l.forEach((m,_)=>{const E=_.getKey();c.get(E)===null&&(c=c.insert(E,Tn.newInvalidDocument(E)))});let d=Lu();return c.forEach((m,_)=>{const E=l.get(m);E!==void 0&&Wu(E.mutation,_,Gn.empty(),Bt.now()),Jf(t,_)&&(d=d.insert(m,_))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return J.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Qi(a.createTime)}}(t)),J.resolve()}getNamedQuery(e,t){return J.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:H2(a.bundledQuery),readTime:Qi(a.readTime)}}(t)),J.resolve()}}/**
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
 */class eM{constructor(){this.overlays=new Et(we.comparator),this.Rr=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ca();return J.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.Et(e,t,l)}),J.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Rr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(s)),J.resolve()}getOverlaysForCollection(e,t,s){const a=Ca(),l=t.length+1,c=new we(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const m=d.getNext().value,_=m.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&m.largestBatchId>s&&a.set(m.getKey(),m)}return J.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Et((_,E)=>_-E);const c=this.overlays.getIterator();for(;c.hasNext();){const _=c.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=l.get(_.largestBatchId);E===null&&(E=Ca(),l=l.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const d=Ca(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((_,E)=>d.set(_,E)),!(d.size()>=a)););return J.resolve(d)}Et(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.Rr.get(a.largestBatchId).delete(s.key);this.Rr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new y2(t,s));let l=this.Rr.get(t);l===void 0&&(l=Be(),this.Rr.set(t,l)),this.Rr.set(t,l.add(s.key))}}/**
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
 */class tM{constructor(){this.sessionToken=hn.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this.Vr=new zt($t.mr),this.gr=new zt($t.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new $t(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new $t(e,t))}br(e,t){e.forEach(s=>this.removeReference(s,t))}Sr(e){const t=new we(new bt([])),s=new $t(t,e),a=new $t(t,e+1),l=[];return this.gr.forEachInRange([s,a],c=>{this.wr(c),l.push(c.key)}),l}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new we(new bt([])),s=new $t(t,e),a=new $t(t,e+1);let l=Be();return this.gr.forEachInRange([s,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new $t(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class $t{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return we.comparator(e.key,t.key)||He(e.Cr,t.Cr)}static pr(e,t){return He(e.Cr,t.Cr)||we.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new zt($t.mr)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new g2(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Mr=this.Mr.add(new $t(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(c)}lookupMutationBatch(e,t){return J.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Nr(s),l=a<0?0:a;return J.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?J_:this.Fr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new $t(t,0),a=new $t(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([s,a],c=>{const d=this.Or(c.Cr);l.push(d)}),J.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new zt(He);return t.forEach(a=>{const l=new $t(a,0),c=new $t(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,c],d=>{s=s.add(d.Cr)})}),J.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;we.isDocumentKey(l)||(l=l.child(""));const c=new $t(new we(l),0);let d=new zt(He);return this.Mr.forEachWhile(m=>{const _=m.key.path;return!!s.isPrefixOf(_)&&(_.length===a&&(d=d.add(m.Cr)),!0)},c),J.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(s=>{const a=this.Or(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){st(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return J.forEach(t.mutations,a=>{const l=new $t(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new $t(t,0),a=this.Mr.firstAfterOrEqual(s);return J.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.kr=e,this.docs=function(){return new Et(we.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return J.resolve(s?s.document.mutableCopy():Tn.newInvalidDocument(t))}getEntries(e,t){let s=Ms();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():Tn.newInvalidDocument(a))}),J.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Ms();const c=t.path,d=new we(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(d);for(;m.hasNext();){const{key:_,value:{document:E}}=m.getNext();if(!c.isPrefixOf(_.path))break;_.path.length>c.length+1||Dx(Nx(E),s)<=0||(a.has(E.key)||Jf(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return J.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Ie()}qr(e,t){return J.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new sM(this)}getSize(e){return J.resolve(this.size)}}class sM extends $2{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(s)}),J.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e){this.persistence=e,this.Qr=new Ha(t=>ng(t),ig),this.lastRemoteSnapshotVersion=De.min(),this.highestTargetId=0,this.$r=0,this.Kr=new ug,this.targetCount=0,this.Ur=il.Kn()}forEachTarget(e,t){return this.Qr.forEach((s,a)=>t(a)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),J.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new il(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.zn(t),J.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.Qr.forEach((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.Qr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),J.waitFor(l).next(()=>a)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return J.resolve(s)}addMatchingKeys(e,t,s){return this.Kr.yr(t,s),J.resolve()}removeMatchingKeys(e,t,s){this.Kr.br(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),J.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),J.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Kr.vr(t);return J.resolve(s)}containsKey(e,t){return J.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Qf(0),this.zr=!1,this.zr=!0,this.jr=new tM,this.referenceDelegate=e(this),this.Hr=new rM(this),this.indexManager=new F2,this.remoteDocumentCache=function(a){return new iM(a)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new z2(t),this.Yr=new J2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new nM(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){me("MemoryPersistence","Starting transaction:",e);const a=new aM(this.Gr.next());return this.referenceDelegate.Zr(),s(a).next(l=>this.referenceDelegate.Xr(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}ei(e,t){return J.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class aM extends kx{constructor(e){super(),this.currentSequenceNumber=e}}class cg{constructor(e){this.persistence=e,this.ti=new ug,this.ni=null}static ri(e){return new cg(e)}get ii(){if(this.ni)return this.ni;throw Ie()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),J.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),J.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(a=>this.ii.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.ii.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.ii,s=>{const a=we.fromPath(s);return this.si(e,a).next(l=>{l||t.removeEntry(a,De.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return J.or([()=>J.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class xf{constructor(e,t){this.persistence=e,this.oi=new Ha(s=>Px(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=Y2(this,t)}static ri(e,t){return new xf(e,t)}Zr(){}Xr(e){return J.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return J.forEach(this.oi,(s,a)=>this.ar(e,s,a).next(l=>l?J.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.qr(e,c=>this.ar(e,c,t).next(d=>{d||(s++,l.removeEntry(c,De.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),J.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),J.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),J.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=sf(e.data.value)),t}ar(e,t,s){return J.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return J.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=a}static Yi(e,t){let s=Be(),a=Be();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new hg(e,t.fromCache,s,a)}}/**
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
 */class oM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lM{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return ZR()?8:xx(An())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.rs(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ss(e,t,a,s).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new oM;return this._s(e,t,c).next(d=>{if(l.result=d,this.Xi)return this.us(e,t,c,d.size)})}).next(()=>l.result)}us(e,t,s,a){return s.documentReadCount<this.es?(Vo()<=je.DEBUG&&me("QueryEngine","SDK will not create cache indexes for query:",Lo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),J.resolve()):(Vo()<=je.DEBUG&&me("QueryEngine","Query:",Lo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ts*a?(Vo()<=je.DEBUG&&me("QueryEngine","The SDK decides to create cache indexes for query:",Lo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ki(t))):J.resolve())}rs(e,t){if(_S(t))return J.resolve(null);let s=Ki(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=r_(t,null,"F"),s=Ki(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const c=Be(...l);return this.ns.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,s).next(m=>{const _=this.cs(t,d);return this.ls(t,_,c,m.readTime)?this.rs(e,r_(t,null,"F")):this.hs(e,_,t,m)}))})))}ss(e,t,s,a){return _S(t)||a.isEqual(De.min())?J.resolve(null):this.ns.getDocuments(e,s).next(l=>{const c=this.cs(t,l);return this.ls(t,c,s,a)?J.resolve(null):(Vo()<=je.DEBUG&&me("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Lo(t)),this.hs(e,c,t,Ix(a,ec)).next(d=>d))})}cs(e,t){let s=new zt(Iw(e));return t.forEach((a,l)=>{Jf(e,l)&&(s=s.add(l))}),s}ls(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}_s(e,t,s){return Vo()<=je.DEBUG&&me("QueryEngine","Using full collection scan to execute query:",Lo(t)),this.ns.getDocumentsMatchingQuery(e,t,Mr.min(),s)}hs(e,t,s,a){return this.ns.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="LocalStore",uM=3e8;class cM{constructor(e,t,s,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new Et(He),this.Is=new Ha(l=>ng(l),ig),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Z2(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function hM(i,e,t,s){return new cM(i,e,t,s)}async function Zw(i,e){const t=xe(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const c=[],d=[];let m=Be();for(const _ of a){c.push(_.batchId);for(const E of _.mutations)m=m.add(E.key)}for(const _ of l){d.push(_.batchId);for(const E of _.mutations)m=m.add(E.key)}return t.localDocuments.getDocuments(s,m).next(_=>({Rs:_,removedBatchIds:c,addedBatchIds:d}))})})}function fM(i,e){const t=xe(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),l=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,m,_,E){const T=_.batch,C=T.keys();let P=J.resolve();return C.forEach(z=>{P=P.next(()=>E.getEntry(m,z)).next(X=>{const H=_.docVersions.get(z);st(H!==null),X.version.compareTo(H)<0&&(T.applyToRemoteDocument(X,_),X.isValidDocument()&&(X.setReadTime(_.commitVersion),E.addEntry(X)))})}),P.next(()=>d.mutationQueue.removeMutationBatch(m,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let m=Be();for(let _=0;_<d.mutationResults.length;++_)d.mutationResults[_].transformResults.length>0&&(m=m.add(d.batch.mutations[_].key));return m}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function Jw(i){const e=xe(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function dM(i,e){const t=xe(i),s=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const d=[];e.targetChanges.forEach((E,T)=>{const C=a.get(T);if(!C)return;d.push(t.Hr.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.Hr.addMatchingKeys(l,E.addedDocuments,T)));let P=C.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?P=P.withResumeToken(hn.EMPTY_BYTE_STRING,De.min()).withLastLimboFreeSnapshotVersion(De.min()):E.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(E.resumeToken,s)),a=a.insert(T,P),function(X,H,Y){return X.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=uM?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(C,P,E)&&d.push(t.Hr.updateTargetData(l,P))});let m=Ms(),_=Be();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),d.push(pM(l,c,e.documentUpdates).next(E=>{m=E.Vs,_=E.fs})),!s.isEqual(De.min())){const E=t.Hr.getLastRemoteSnapshotVersion(l).next(T=>t.Hr.setTargetsMetadata(l,l.currentSequenceNumber,s));d.push(E)}return J.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,m,_)).next(()=>m)}).then(l=>(t.Ts=a,l))}function pM(i,e,t){let s=Be(),a=Be();return t.forEach(l=>s=s.add(l)),e.getEntries(i,s).next(l=>{let c=Ms();return t.forEach((d,m)=>{const _=l.get(d);m.isFoundDocument()!==_.isFoundDocument()&&(a=a.add(d)),m.isNoDocument()&&m.version.isEqual(De.min())?(e.removeEntry(d,m.readTime),c=c.insert(d,m)):!_.isValidDocument()||m.version.compareTo(_.version)>0||m.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(m),c=c.insert(d,m)):me(fg,"Ignoring outdated watch update for ",d,". Current version:",_.version," Watch version:",m.version)}),{Vs:c,fs:a}})}function mM(i,e){const t=xe(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=J_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function _M(i,e){const t=xe(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.Hr.getTargetData(s,e).next(l=>l?(a=l,J.resolve(a)):t.Hr.allocateTargetId(s).next(c=>(a=new br(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Hr.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.Ts.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(s.targetId,s),t.Is.set(e,s.targetId)),s})}async function c_(i,e,t){const s=xe(i),a=s.Ts.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,c=>s.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!pl(c))throw c;me(fg,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ts=s.Ts.remove(e),s.Is.delete(a.target)}function NS(i,e,t){const s=xe(i);let a=De.min(),l=Be();return s.persistence.runTransaction("Execute query","readwrite",c=>function(m,_,E){const T=xe(m),C=T.Is.get(E);return C!==void 0?J.resolve(T.Ts.get(C)):T.Hr.getTargetData(_,E)}(s,c,Ki(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(c,d.targetId).next(m=>{l=m})}).next(()=>s.Ps.getDocumentsMatchingQuery(c,e,t?a:De.min(),t?l:Be())).next(d=>(gM(s,t2(e),d),{documents:d,gs:l})))}function gM(i,e,t){let s=i.Es.get(e)||De.min();t.forEach((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),i.Es.set(e,s)}class DS{constructor(){this.activeTargetIds=o2()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yM{constructor(){this.ho=new DS,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new DS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class vM{To(e){}shutdown(){}}/**
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
 */const OS="ConnectivityMonitor";class kS{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){me(OS,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){me(OS,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qh=null;function h_(){return Qh===null?Qh=function(){return 268435456+Math.round(2147483648*Math.random())}():Qh++,"0x"+Qh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="RestConnection",EM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class TM{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${a}`,this.wo=this.databaseId.database===Cf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}bo(e,t,s,a,l){const c=h_(),d=this.So(e,t.toUriEncodedString());me(Nm,`Sending RPC '${e}' ${c}:`,d,s);const m={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(m,a,l),this.vo(e,d,m,s).then(_=>(me(Nm,`Received RPC '${e}' ${c}: `,_),_),_=>{throw Zo(Nm,`RPC '${e}' ${c} failed with error: `,_,"url: ",d,"request:",s),_})}Co(e,t,s,a,l,c){return this.bo(e,t,s,a,l)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}So(e,t){const s=EM[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="WebChannelConnection";class AM extends TM{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,a){const l=h_();return new Promise((c,d)=>{const m=new sw;m.setWithCredentials(!0),m.listenOnce(rw.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case nf.NO_ERROR:const E=m.getResponseJson();me(_n,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),c(E);break;case nf.TIMEOUT:me(_n,`RPC '${e}' ${l} timed out`),d(new Se(re.DEADLINE_EXCEEDED,"Request time out"));break;case nf.HTTP_ERROR:const T=m.getStatus();if(me(_n,`RPC '${e}' ${l} failed with status:`,T,"response text:",m.getResponseText()),T>0){let C=m.getResponseJson();Array.isArray(C)&&(C=C[0]);const P=C==null?void 0:C.error;if(P&&P.status&&P.message){const z=function(H){const Y=H.toLowerCase().replace(/_/g,"-");return Object.values(re).indexOf(Y)>=0?Y:re.UNKNOWN}(P.status);d(new Se(z,P.message))}else d(new Se(re.UNKNOWN,"Server responded with status "+m.getStatus()))}else d(new Se(re.UNAVAILABLE,"Connection failed."));break;default:Ie()}}finally{me(_n,`RPC '${e}' ${l} completed.`)}});const _=JSON.stringify(a);me(_n,`RPC '${e}' ${l} sending request:`,a),m.send(t,"POST",_,s,15)})}Wo(e,t,s){const a=h_(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=lw(),d=ow(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(m.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Do(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const E=l.join("");me(_n,`Creating RPC '${e}' stream ${a}: ${E}`,m);const T=c.createWebChannel(E,m);let C=!1,P=!1;const z=new SM({Fo:H=>{P?me(_n,`Not sending because RPC '${e}' stream ${a} is closed:`,H):(C||(me(_n,`Opening RPC '${e}' stream ${a} transport.`),T.open(),C=!0),me(_n,`RPC '${e}' stream ${a} sending:`,H),T.send(H))},Mo:()=>T.close()}),X=(H,Y,ee)=>{H.listen(Y,le=>{try{ee(le)}catch(se){setTimeout(()=>{throw se},0)}})};return X(T,Vu.EventType.OPEN,()=>{P||(me(_n,`RPC '${e}' stream ${a} transport opened.`),z.Qo())}),X(T,Vu.EventType.CLOSE,()=>{P||(P=!0,me(_n,`RPC '${e}' stream ${a} transport closed`),z.Ko())}),X(T,Vu.EventType.ERROR,H=>{P||(P=!0,Zo(_n,`RPC '${e}' stream ${a} transport errored:`,H),z.Ko(new Se(re.UNAVAILABLE,"The operation could not be completed")))}),X(T,Vu.EventType.MESSAGE,H=>{var Y;if(!P){const ee=H.data[0];st(!!ee);const le=ee,se=(le==null?void 0:le.error)||((Y=le[0])===null||Y===void 0?void 0:Y.error);if(se){me(_n,`RPC '${e}' stream ${a} received error:`,se);const he=se.status;let Te=function(b){const I=xt[b];if(I!==void 0)return Bw(I)}(he),k=se.message;Te===void 0&&(Te=re.INTERNAL,k="Unknown error status: "+he+" with message "+se.message),P=!0,z.Ko(new Se(Te,k)),T.close()}else me(_n,`RPC '${e}' stream ${a} received:`,ee),z.Uo(ee)}}),X(d,aw.STAT_EVENT,H=>{H.stat===e_.PROXY?me(_n,`RPC '${e}' stream ${a} detected buffering proxy`):H.stat===e_.NOPROXY&&me(_n,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{z.$o()},0),z}}function Dm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(i){return new R2(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=a,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-s);a>0&&me("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS="PersistentStream";class tb{constructor(e,t,s,a,l,c,d,m){this.Ti=e,this.n_=s,this.r_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=m,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new eb(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===re.RESOURCE_EXHAUSTED?(xs(t.toString()),xs("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===re.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.i_===t&&this.V_(s,a)},s=>{e(()=>{const a=new Se(re.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(a)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{s(()=>this.m_(a))}),this.stream.onMessage(a=>{s(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return me(xS,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(me(xS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wM extends tb{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=D2(this.serializer,e),s=function(l){if(!("targetChange"in l))return De.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?De.min():c.readTime?Qi(c.readTime):De.min()}(e);return this.listener.p_(t,s)}y_(e){const t={};t.database=u_(this.serializer),t.addTarget=function(l,c){let d;const m=c.target;if(d=s_(m)?{documents:x2(l,m)}:{query:M2(l,m).ht},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=Fw(l,c.resumeToken);const _=a_(l,c.expectedCount);_!==null&&(d.expectedCount=_)}else if(c.snapshotVersion.compareTo(De.min())>0){d.readTime=kf(l,c.snapshotVersion.toTimestamp());const _=a_(l,c.expectedCount);_!==null&&(d.expectedCount=_)}return d}(this.serializer,e);const s=V2(this.serializer,e);s&&(t.labels=s),this.I_(t)}w_(e){const t={};t.database=u_(this.serializer),t.removeTarget=e,this.I_(t)}}class bM extends tb{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return st(!!e.streamToken),this.lastStreamToken=e.streamToken,st(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){st(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=k2(e.writeResults,e.commitTime),s=Qi(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=u_(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>O2(this.serializer,s))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{}class RM extends CM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new Se(re.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,s,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.bo(e,o_(t,s),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===re.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Se(re.UNKNOWN,l.toString())})}Co(e,t,s,a,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Co(e,o_(t,s),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===re.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new Se(re.UNKNOWN,c.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class IM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(xs(t),this.N_=!1):me("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="RemoteStore";class NM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(c=>{s.enqueueAndForget(async()=>{Fa(this)&&(me(Pa,"Restarting streams for network reachability change."),await async function(m){const _=xe(m);_.W_.add(4),await yc(_),_.j_.set("Unknown"),_.W_.delete(4),await sd(_)}(this))})}),this.j_=new IM(s,a)}}async function sd(i){if(Fa(i))for(const e of i.G_)await e(!0)}async function yc(i){for(const e of i.G_)await e(!1)}function nb(i,e){const t=xe(i);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),_g(t)?mg(t):ml(t).c_()&&pg(t,e))}function dg(i,e){const t=xe(i),s=ml(t);t.U_.delete(e),s.c_()&&ib(t,e),t.U_.size===0&&(s.c_()?s.P_():Fa(t)&&t.j_.set("Unknown"))}function pg(i,e){if(i.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(De.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ml(i).y_(e)}function ib(i,e){i.H_.Ne(e),ml(i).w_(e)}function mg(i){i.H_=new A2({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>i.U_.get(e)||null,it:()=>i.datastore.serializer.databaseId}),ml(i).start(),i.j_.B_()}function _g(i){return Fa(i)&&!ml(i).u_()&&i.U_.size>0}function Fa(i){return xe(i).W_.size===0}function sb(i){i.H_=void 0}async function DM(i){i.j_.set("Online")}async function OM(i){i.U_.forEach((e,t)=>{pg(i,e)})}async function kM(i,e){sb(i),_g(i)?(i.j_.q_(e),mg(i)):i.j_.set("Unknown")}async function xM(i,e,t){if(i.j_.set("Online"),e instanceof Hw&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.U_.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.U_.delete(d),a.H_.removeTarget(d))}(i,e)}catch(s){me(Pa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mf(i,s)}else if(e instanceof of?i.H_.We(e):e instanceof zw?i.H_.Ze(e):i.H_.je(e),!t.isEqual(De.min()))try{const s=await Jw(i.localStore);t.compareTo(s)>=0&&await function(l,c){const d=l.H_.ot(c);return d.targetChanges.forEach((m,_)=>{if(m.resumeToken.approximateByteSize()>0){const E=l.U_.get(_);E&&l.U_.set(_,E.withResumeToken(m.resumeToken,c))}}),d.targetMismatches.forEach((m,_)=>{const E=l.U_.get(m);if(!E)return;l.U_.set(m,E.withResumeToken(hn.EMPTY_BYTE_STRING,E.snapshotVersion)),ib(l,m);const T=new br(E.target,m,_,E.sequenceNumber);pg(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(i,t)}catch(s){me(Pa,"Failed to raise snapshot:",s),await Mf(i,s)}}async function Mf(i,e,t){if(!pl(e))throw e;i.W_.add(1),await yc(i),i.j_.set("Offline"),t||(t=()=>Jw(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{me(Pa,"Retrying IndexedDB access"),await t(),i.W_.delete(1),await sd(i)})}function rb(i,e){return e().catch(t=>Mf(i,t,e))}async function rd(i){const e=xe(i),t=Ur(e);let s=e.K_.length>0?e.K_[e.K_.length-1].batchId:J_;for(;MM(e);)try{const a=await mM(e.localStore,s);if(a===null){e.K_.length===0&&t.P_();break}s=a.batchId,PM(e,a)}catch(a){await Mf(e,a)}ab(e)&&ob(e)}function MM(i){return Fa(i)&&i.K_.length<10}function PM(i,e){i.K_.push(e);const t=Ur(i);t.c_()&&t.b_&&t.S_(e.mutations)}function ab(i){return Fa(i)&&!Ur(i).u_()&&i.K_.length>0}function ob(i){Ur(i).start()}async function VM(i){Ur(i).C_()}async function LM(i){const e=Ur(i);for(const t of i.K_)e.S_(t.mutations)}async function UM(i,e,t){const s=i.K_.shift(),a=ag.from(s,e,t);await rb(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await rd(i)}async function jM(i,e){e&&Ur(i).b_&&await async function(s,a){if(function(c){return E2(c)&&c!==re.ABORTED}(a.code)){const l=s.K_.shift();Ur(s).h_(),await rb(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a)),await rd(s)}}(i,e),ab(i)&&ob(i)}async function MS(i,e){const t=xe(i);t.asyncQueue.verifyOperationInProgress(),me(Pa,"RemoteStore received new credentials");const s=Fa(t);t.W_.add(3),await yc(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await sd(t)}async function BM(i,e){const t=xe(i);e?(t.W_.delete(2),await sd(t)):e||(t.W_.add(2),await yc(t),t.j_.set("Unknown"))}function ml(i){return i.J_||(i.J_=function(t,s,a){const l=xe(t);return l.M_(),new wM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{xo:DM.bind(null,i),No:OM.bind(null,i),Lo:kM.bind(null,i),p_:xM.bind(null,i)}),i.G_.push(async e=>{e?(i.J_.h_(),_g(i)?mg(i):i.j_.set("Unknown")):(await i.J_.stop(),sb(i))})),i.J_}function Ur(i){return i.Y_||(i.Y_=function(t,s,a){const l=xe(t);return l.M_(),new bM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{xo:()=>Promise.resolve(),No:VM.bind(null,i),Lo:jM.bind(null,i),D_:LM.bind(null,i),v_:UM.bind(null,i)}),i.G_.push(async e=>{e?(i.Y_.h_(),await rd(i)):(await i.Y_.stop(),i.K_.length>0&&(me(Pa,`Stopping write stream with ${i.K_.length} pending writes`),i.K_=[]))})),i.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new gg(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Se(re.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yg(i,e){if(xs("AsyncQueue",`${e}: ${i}`),pl(i))return new Se(re.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{static emptySet(e){return new Qo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||we.comparator(t.key,s.key):(t,s)=>we.comparator(t.key,s.key),this.keyedMap=Lu(),this.sortedSet=new Et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Qo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Qo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(){this.Z_=new Et(we.comparator)}track(e){const t=e.doc.key,s=this.Z_.get(t);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(t):e.type===1&&s.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Ie():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class sl{constructor(e,t,s,a,l,c,d,m,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=m,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new sl(e,t,Qo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class HM{constructor(){this.queries=VS(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const a=xe(t),l=a.queries;a.queries=VS(),l.forEach((c,d)=>{for(const m of d.ta)m.onError(s)})})(this,new Se(re.ABORTED,"Firestore shutting down"))}}function VS(){return new Ha(i=>Rw(i),Zf)}async function FM(i,e){const t=xe(i);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.na()&&e.ra()&&(s=2):(l=new zM,s=e.ra()?0:1);try{switch(s){case 0:l.ea=await t.onListen(a,!0);break;case 1:l.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=yg(c,`Initialization of query '${Lo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.ta.push(e),e.sa(t.onlineState),l.ea&&e.oa(l.ea)&&vg(t)}async function qM(i,e){const t=xe(i),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.ta.indexOf(e);c>=0&&(l.ta.splice(c,1),l.ta.length===0?a=e.ra()?0:1:!l.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function GM(i,e){const t=xe(i);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.ta)d.oa(a)&&(s=!0);c.ea=a}}s&&vg(t)}function KM(i,e,t){const s=xe(i),a=s.queries.get(e);if(a)for(const l of a.ta)l.onError(t);s.queries.delete(e)}function vg(i){i.ia.forEach(e=>{e.next()})}var f_,LS;(LS=f_||(f_={}))._a="default",LS.Cache="cache";class WM{constructor(e,t,s){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new sl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const s=t!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=sl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==f_.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.key=e}}class ub{constructor(e){this.key=e}}class QM{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Be(),this.mutatedKeys=Be(),this.ya=Iw(e),this.wa=new Qo(this.ya)}get ba(){return this.fa}Sa(e,t){const s=t?t.Da:new PS,a=t?t.wa:this.wa;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,_=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((E,T)=>{const C=a.get(E),P=Jf(this.query,T)?T:null,z=!!C&&this.mutatedKeys.has(C.key),X=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let H=!1;C&&P?C.data.isEqual(P.data)?z!==X&&(s.track({type:3,doc:P}),H=!0):this.va(C,P)||(s.track({type:2,doc:P}),H=!0,(m&&this.ya(P,m)>0||_&&this.ya(P,_)<0)&&(d=!0)):!C&&P?(s.track({type:0,doc:P}),H=!0):C&&!P&&(s.track({type:1,doc:C}),H=!0,(m||_)&&(d=!0)),H&&(P?(c=c.add(P),l=X?l.add(E):l.delete(E)):(c=c.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const E=this.query.limitType==="F"?c.last():c.first();c=c.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{wa:c,Da:s,ls:d,mutatedKeys:l}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const c=e.Da.X_();c.sort((E,T)=>function(P,z){const X=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie()}};return X(P)-X(z)}(E.type,T.type)||this.ya(E.doc,T.doc)),this.Ca(s),a=a!=null&&a;const d=t&&!a?this.Fa():[],m=this.pa.size===0&&this.current&&!a?1:0,_=m!==this.ga;return this.ga=m,c.length!==0||_?{snapshot:new sl(this.query,e.wa,l,c,e.mutatedKeys,m===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new PS,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Be(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const t=[];return e.forEach(s=>{this.pa.has(s)||t.push(new ub(s))}),this.pa.forEach(s=>{e.has(s)||t.push(new lb(s))}),t}Oa(e){this.fa=e.gs,this.pa=Be();const t=this.Sa(e.documents);return this.applyChanges(t,!0)}Na(){return sl.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Eg="SyncEngine";class YM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class $M{constructor(e){this.key=e,this.Ba=!1}}class XM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.La={},this.ka=new Ha(d=>Rw(d),Zf),this.qa=new Map,this.Qa=new Set,this.$a=new Et(we.comparator),this.Ka=new Map,this.Ua=new ug,this.Wa={},this.Ga=new Map,this.za=il.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function ZM(i,e,t=!0){const s=mb(i);let a;const l=s.ka.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.Na()):a=await cb(s,e,t,!0),a}async function JM(i,e){const t=mb(i);await cb(t,e,!0,!1)}async function cb(i,e,t,s){const a=await _M(i.localStore,Ki(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await eP(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&nb(i.remoteStore,a),d}async function eP(i,e,t,s,a){i.Ha=(T,C,P)=>async function(X,H,Y,ee){let le=H.view.Sa(Y);le.ls&&(le=await NS(X.localStore,H.query,!1).then(({documents:k})=>H.view.Sa(k,le)));const se=ee&&ee.targetChanges.get(H.targetId),he=ee&&ee.targetMismatches.get(H.targetId)!=null,Te=H.view.applyChanges(le,X.isPrimaryClient,se,he);return jS(X,H.targetId,Te.Ma),Te.snapshot}(i,T,C,P);const l=await NS(i.localStore,e,!0),c=new QM(e,l.gs),d=c.Sa(l.documents),m=gc.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),_=c.applyChanges(d,i.isPrimaryClient,m);jS(i,t,_.Ma);const E=new YM(e,t,c);return i.ka.set(e,E),i.qa.has(t)?i.qa.get(t).push(e):i.qa.set(t,[e]),_.snapshot}async function tP(i,e,t){const s=xe(i),a=s.ka.get(e),l=s.qa.get(a.targetId);if(l.length>1)return s.qa.set(a.targetId,l.filter(c=>!Zf(c,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await c_(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&dg(s.remoteStore,a.targetId),d_(s,a.targetId)}).catch(dl)):(d_(s,a.targetId),await c_(s.localStore,a.targetId,!0))}async function nP(i,e){const t=xe(i),s=t.ka.get(e),a=t.qa.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),dg(t.remoteStore,s.targetId))}async function iP(i,e,t){const s=cP(i);try{const a=await function(c,d){const m=xe(c),_=Bt.now(),E=d.reduce((P,z)=>P.add(z.key),Be());let T,C;return m.persistence.runTransaction("Locally write mutations","readwrite",P=>{let z=Ms(),X=Be();return m.ds.getEntries(P,E).next(H=>{z=H,z.forEach((Y,ee)=>{ee.isValidDocument()||(X=X.add(Y))})}).next(()=>m.localDocuments.getOverlayedDocuments(P,z)).next(H=>{T=H;const Y=[];for(const ee of d){const le=m2(ee,T.get(ee.key).overlayedDocument);le!=null&&Y.push(new Fr(ee.key,le,Ew(le.value.mapValue),Wi.exists(!0)))}return m.mutationQueue.addMutationBatch(P,_,Y,d)}).next(H=>{C=H;const Y=H.applyToLocalDocumentSet(T,X);return m.documentOverlayCache.saveOverlays(P,H.batchId,Y)})}).then(()=>({batchId:C.batchId,changes:Dw(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(c,d,m){let _=c.Wa[c.currentUser.toKey()];_||(_=new Et(He)),_=_.insert(d,m),c.Wa[c.currentUser.toKey()]=_}(s,a.batchId,t),await vc(s,a.changes),await rd(s.remoteStore)}catch(a){const l=yg(a,"Failed to persist write");t.reject(l)}}async function hb(i,e){const t=xe(i);try{const s=await dM(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Ka.get(l);c&&(st(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?c.Ba=!0:a.modifiedDocuments.size>0?st(c.Ba):a.removedDocuments.size>0&&(st(c.Ba),c.Ba=!1))}),await vc(t,s,e)}catch(s){await dl(s)}}function US(i,e,t){const s=xe(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.ka.forEach((l,c)=>{const d=c.view.sa(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const m=xe(c);m.onlineState=d;let _=!1;m.queries.forEach((E,T)=>{for(const C of T.ta)C.sa(d)&&(_=!0)}),_&&vg(m)}(s.eventManager,e),a.length&&s.La.p_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function sP(i,e,t){const s=xe(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Ka.get(e),l=a&&a.key;if(l){let c=new Et(we.comparator);c=c.insert(l,Tn.newNoDocument(l,De.min()));const d=Be().add(l),m=new nd(De.min(),new Map,new Et(He),c,d);await hb(s,m),s.$a=s.$a.remove(l),s.Ka.delete(e),Tg(s)}else await c_(s.localStore,e,!1).then(()=>d_(s,e,t)).catch(dl)}async function rP(i,e){const t=xe(i),s=e.batch.batchId;try{const a=await fM(t.localStore,e);db(t,s,null),fb(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await vc(t,a)}catch(a){await dl(a)}}async function aP(i,e,t){const s=xe(i);try{const a=await function(c,d){const m=xe(c);return m.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let E;return m.mutationQueue.lookupMutationBatch(_,d).next(T=>(st(T!==null),E=T.keys(),m.mutationQueue.removeMutationBatch(_,T))).next(()=>m.mutationQueue.performConsistencyCheck(_)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(_,E,d)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E)).next(()=>m.localDocuments.getDocuments(_,E))})}(s.localStore,e);db(s,e,t),fb(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await vc(s,a)}catch(a){await dl(a)}}function fb(i,e){(i.Ga.get(e)||[]).forEach(t=>{t.resolve()}),i.Ga.delete(e)}function db(i,e,t){const s=xe(i);let a=s.Wa[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Wa[s.currentUser.toKey()]=a}}function d_(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.qa.get(e))i.ka.delete(s),t&&i.La.Ja(s,t);i.qa.delete(e),i.isPrimaryClient&&i.Ua.Sr(e).forEach(s=>{i.Ua.containsKey(s)||pb(i,s)})}function pb(i,e){i.Qa.delete(e.path.canonicalString());const t=i.$a.get(e);t!==null&&(dg(i.remoteStore,t),i.$a=i.$a.remove(e),i.Ka.delete(t),Tg(i))}function jS(i,e,t){for(const s of t)s instanceof lb?(i.Ua.addReference(s.key,e),oP(i,s)):s instanceof ub?(me(Eg,"Document no longer in limbo: "+s.key),i.Ua.removeReference(s.key,e),i.Ua.containsKey(s.key)||pb(i,s.key)):Ie()}function oP(i,e){const t=e.key,s=t.path.canonicalString();i.$a.get(t)||i.Qa.has(s)||(me(Eg,"New document in limbo: "+t),i.Qa.add(s),Tg(i))}function Tg(i){for(;i.Qa.size>0&&i.$a.size<i.maxConcurrentLimboResolutions;){const e=i.Qa.values().next().value;i.Qa.delete(e);const t=new we(bt.fromString(e)),s=i.za.next();i.Ka.set(s,new $M(t)),i.$a=i.$a.insert(t,s),nb(i.remoteStore,new br(Ki(sg(t.path)),s,"TargetPurposeLimboResolution",Qf.ae))}}async function vc(i,e,t){const s=xe(i),a=[],l=[],c=[];s.ka.isEmpty()||(s.ka.forEach((d,m)=>{c.push(s.Ha(m,e,t).then(_=>{var E;if((_||t)&&s.isPrimaryClient){const T=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(m.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(_){a.push(_);const T=hg.Yi(m.targetId,_);l.push(T)}}))}),await Promise.all(c),s.La.p_(a),await async function(m,_){const E=xe(m);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>J.forEach(_,C=>J.forEach(C.Hi,P=>E.persistence.referenceDelegate.addReference(T,C.targetId,P)).next(()=>J.forEach(C.Ji,P=>E.persistence.referenceDelegate.removeReference(T,C.targetId,P)))))}catch(T){if(!pl(T))throw T;me(fg,"Failed to update sequence numbers: "+T)}for(const T of _){const C=T.targetId;if(!T.fromCache){const P=E.Ts.get(C),z=P.snapshotVersion,X=P.withLastLimboFreeSnapshotVersion(z);E.Ts=E.Ts.insert(C,X)}}}(s.localStore,l))}async function lP(i,e){const t=xe(i);if(!t.currentUser.isEqual(e)){me(Eg,"User change. New user:",e.toKey());const s=await Zw(t.localStore,e);t.currentUser=e,function(l,c){l.Ga.forEach(d=>{d.forEach(m=>{m.reject(new Se(re.CANCELLED,c))})}),l.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await vc(t,s.Rs)}}function uP(i,e){const t=xe(i),s=t.Ka.get(e);if(s&&s.Ba)return Be().add(s.key);{let a=Be();const l=t.qa.get(e);if(!l)return a;for(const c of l){const d=t.ka.get(c);a=a.unionWith(d.view.ba)}return a}}function mb(i){const e=xe(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=hb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sP.bind(null,e),e.La.p_=GM.bind(null,e.eventManager),e.La.Ja=KM.bind(null,e.eventManager),e}function cP(i){const e=xe(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aP.bind(null,e),e}class Pf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=id(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return hM(this.persistence,new lM,e.initialUser,this.serializer)}Xa(e){return new Xw(cg.ri,this.serializer)}Za(e){return new yM}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pf.provider={build:()=>new Pf};class hP extends Pf{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){st(this.persistence.referenceDelegate instanceof xf);const s=this.persistence.referenceDelegate.garbageCollector;return new W2(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?kn.withCacheSize(this.cacheSizeBytes):kn.DEFAULT;return new Xw(s=>xf.ri(s,t),this.serializer)}}class p_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>US(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lP.bind(null,this.syncEngine),await BM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new HM}()}createDatastore(e){const t=id(e.databaseInfo.databaseId),s=function(l){return new AM(l)}(e.databaseInfo);return function(l,c,d,m){return new RM(l,c,d,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,c,d){return new NM(s,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>US(this.syncEngine,t,0),function(){return kS.D()?new kS:new vM}())}createSyncEngine(e,t){return function(a,l,c,d,m,_,E){const T=new XM(a,l,c,d,m,_);return E&&(T.ja=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=xe(a);me(Pa,"RemoteStore shutting down."),l.W_.add(5),await yc(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}p_.provider={build:()=>new p_};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):xs("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="FirestoreClient";class dP{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=yn.UNAUTHENTICATED,this.clientId=cw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async c=>{me(jr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(me(jr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=yg(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Om(i,e){i.asyncQueue.verifyOperationInProgress(),me(jr,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await Zw(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function BS(i,e){i.asyncQueue.verifyOperationInProgress();const t=await pP(i);me(jr,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>MS(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>MS(e.remoteStore,a)),i._onlineComponents=e}async function pP(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){me(jr,"Using user provided OfflineComponentProvider");try{await Om(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===re.FAILED_PRECONDITION||a.code===re.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Zo("Error using user provided cache. Falling back to memory cache: "+t),await Om(i,new Pf)}}else me(jr,"Using default OfflineComponentProvider"),await Om(i,new hP(void 0));return i._offlineComponents}async function _b(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(me(jr,"Using user provided OnlineComponentProvider"),await BS(i,i._uninitializedComponentsProvider._online)):(me(jr,"Using default OnlineComponentProvider"),await BS(i,new p_))),i._onlineComponents}function mP(i){return _b(i).then(e=>e.syncEngine)}async function _P(i){const e=await _b(i),t=e.eventManager;return t.onListen=ZM.bind(null,e.syncEngine),t.onUnlisten=tP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=JM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nP.bind(null,e.syncEngine),t}function gP(i,e,t={}){const s=new Dr;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,d,m,_){const E=new fP({next:C=>{E.su(),c.enqueueAndForget(()=>qM(l,T));const P=C.docs.has(d);!P&&C.fromCache?_.reject(new Se(re.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&C.fromCache&&m&&m.source==="server"?_.reject(new Se(re.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(C)},error:C=>_.reject(C)}),T=new WM(sg(d.path),E,{includeMetadataChanges:!0,Ta:!0});return FM(l,T)}(await _P(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function gb(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(i,e,t){if(!t)throw new Se(re.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function vP(i,e,t,s){if(e===!0&&s===!0)throw new Se(re.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function HS(i){if(!we.isDocumentKey(i))throw new Se(re.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Sg(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ie()}function Va(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new Se(re.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Sg(i);throw new Se(re.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb="firestore.googleapis.com",FS=!0;class qS{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Se(re.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yb,this.ssl=FS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:FS;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$w;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<G2)throw new Se(re.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new Se(re.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new Se(re.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new Se(re.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ag{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Se(re.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Se(re.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Ex;switch(s.type){case"firstParty":return new wx(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Se(re.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=zS.get(t);s&&(me("ComponentProvider","Removing Datastore"),zS.delete(t),s.terminate())}(this),Promise.resolve()}}function EP(i,e,t,s={}){var a;const l=(i=Va(i,Ag))._getSettings(),c=Object.assign(Object.assign({},l),{emulatorOptions:i._getEmulatorOptions()}),d=`${e}:${t}`;l.host!==yb&&l.host!==d&&Zo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},l),{host:d,ssl:!1,emulatorOptions:s});if(!Or(m,c)&&(i._setSettings(m),s.mockUserToken)){let _,E;if(typeof s.mockUserToken=="string")_=s.mockUserToken,E=yn.MOCK_USER;else{_=KR(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new Se(re.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new yn(T)}i._authCredentials=new Tx(new uw(_,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new wg(this.firestore,e,this._query)}}class Wn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wn(this.firestore,e,this._key)}}class rc extends wg{constructor(e,t,s){super(e,t,sg(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wn(this.firestore,null,new we(e))}withConverter(e){return new rc(this.firestore,e,this._path)}}function _l(i,e,...t){if(i=cn(i),arguments.length===1&&(e=cw.newId()),yP("doc","path",e),i instanceof Ag){const s=bt.fromString(e,...t);return HS(s),new Wn(i,null,new we(s))}{if(!(i instanceof Wn||i instanceof rc))throw new Se(re.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(bt.fromString(e,...t));return HS(s),new Wn(i.firestore,i instanceof rc?i.converter:null,new we(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="AsyncQueue";class KS{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new eb(this,"async_queue_retry"),this.bu=()=>{const s=Dm();s&&me(GS,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=e;const t=Dm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Dm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Dr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!pl(e))throw e;me(GS,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const a=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(s);throw xs("INTERNAL UNHANDLED ERROR: ",a),s}).then(s=>(this.pu=!1,s))));return this.Su=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=gg.createAndSchedule(this,e,t,s,l=>this.Fu(l));return this.fu.push(a),a}Du(){this.gu&&Ie()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class ad extends Ag{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new KS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new KS(e),this._firestoreClient=void 0,await e}}}function TP(i,e){const t=o0(),s=Cf,a=T_(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=GR("firestore");l&&EP(a,...l)}return a}function vb(i){if(i._terminated)throw new Se(re.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||SP(i),i._firestoreClient}function SP(i){var e,t,s;const a=i._freezeSettings(),l=function(d,m,_,E){return new Ux(d,m,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,gb(E.experimentalLongPollingOptions),E.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new dP(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(d){const m=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(m),_online:m}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rl(hn.fromBase64String(e))}catch(t){throw new Se(re.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new rl(hn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bg{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Se(re.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Se(re.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return He(this._lat,e._lat)||He(this._long,e._long)}}/**
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
 */class Cg{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=/^__.*__$/;class wP{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,t,this.fieldTransforms):new _c(e,this.data,t,this.fieldTransforms)}}class Eb{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Fr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Tb(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie()}}class ud{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new ud(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:s,Qu:!1});return a.$u(e),a}Ku(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:s,Qu:!1});return a.Bu(),a}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Vf(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Tb(this.Lu)&&AP.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class bP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||id(e)}ju(e,t,s,a=!1){return new ud({Lu:e,methodName:t,zu:s,path:un.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sb(i){const e=i._freezeSettings(),t=id(i._databaseId);return new bP(i._databaseId,!!e.ignoreUndefinedProperties,t)}function CP(i,e,t,s,a,l={}){const c=i.ju(l.merge||l.mergeFields?2:0,e,t,a);Ig("Data must be an object, but it was:",c,s);const d=Ab(s,c);let m,_;if(l.merge)m=new Gn(c.fieldMask),_=c.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const C=m_(e,T,t);if(!c.contains(C))throw new Se(re.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);bb(E,C)||E.push(C)}m=new Gn(E),_=c.fieldTransforms.filter(T=>m.covers(T.field))}else m=null,_=c.fieldTransforms;return new wP(new xn(d),m,_)}class cd extends ld{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cd}}function RP(i,e,t){return new ud({Lu:3,zu:e.settings.zu,methodName:i._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Rg extends ld{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=RP(this,e,!0),s=this.Hu.map(l=>Ec(l,t)),a=new nl(s);return new h2(e.path,a)}isEqual(e){return e instanceof Rg&&Or(this.Hu,e.Hu)}}function IP(i,e,t,s){const a=i.ju(1,e,t);Ig("Data must be an object, but it was:",a,s);const l=[],c=xn.empty();Hr(s,(m,_)=>{const E=Ng(e,m,t);_=cn(_);const T=a.Ku(E);if(_ instanceof cd)l.push(E);else{const C=Ec(_,T);C!=null&&(l.push(E),c.set(E,C))}});const d=new Gn(l);return new Eb(c,d,a.fieldTransforms)}function NP(i,e,t,s,a,l){const c=i.ju(1,e,t),d=[m_(e,s,t)],m=[a];if(l.length%2!=0)throw new Se(re.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<l.length;C+=2)d.push(m_(e,l[C])),m.push(l[C+1]);const _=[],E=xn.empty();for(let C=d.length-1;C>=0;--C)if(!bb(_,d[C])){const P=d[C];let z=m[C];z=cn(z);const X=c.Ku(P);if(z instanceof cd)_.push(P);else{const H=Ec(z,X);H!=null&&(_.push(P),E.set(P,H))}}const T=new Gn(_);return new Eb(E,T,c.fieldTransforms)}function Ec(i,e){if(wb(i=cn(i)))return Ig("Unsupported field value:",e,i),Ab(i,e);if(i instanceof ld)return function(s,a){if(!Tb(a.Lu))throw a.Wu(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,a){const l=[];let c=0;for(const d of s){let m=Ec(d,a.Uu(c));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),c++}return{arrayValue:{values:l}}}(i,e)}return function(s,a){if((s=cn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return l2(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Bt.fromDate(s);return{timestampValue:kf(a.serializer,l)}}if(s instanceof Bt){const l=new Bt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:kf(a.serializer,l)}}if(s instanceof bg)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof rl)return{bytesValue:Fw(a.serializer,s._byteString)};if(s instanceof Wn){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Wu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:lg(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Cg)return function(c,d){return{mapValue:{fields:{[yw]:{stringValue:vw},[Rf]:{arrayValue:{values:c.toArray().map(_=>{if(typeof _!="number")throw d.Wu("VectorValues must only contain numeric values.");return rg(d.serializer,_)})}}}}}}(s,a);throw a.Wu(`Unsupported field value: ${Sg(s)}`)}(i,e)}function Ab(i,e){const t={};return fw(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hr(i,(s,a)=>{const l=Ec(a,e.qu(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function wb(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Bt||i instanceof bg||i instanceof rl||i instanceof Wn||i instanceof ld||i instanceof Cg)}function Ig(i,e,t){if(!wb(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const s=Sg(t);throw s==="an object"?e.Wu(i+" a custom object"):e.Wu(i+" "+s)}}function m_(i,e,t){if((e=cn(e))instanceof od)return e._internalPath;if(typeof e=="string")return Ng(i,e);throw Vf("Field path arguments must be of type string or ",i,!1,void 0,t)}const DP=new RegExp("[~\\*/\\[\\]]");function Ng(i,e,t){if(e.search(DP)>=0)throw Vf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new od(...e.split("."))._internalPath}catch{throw Vf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Vf(i,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let m="";return(l||c)&&(m+=" (found",l&&(m+=` in field ${s}`),c&&(m+=` in document ${a}`),m+=")"),new Se(re.INVALID_ARGUMENT,d+i+m)}function bb(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Wn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Rb("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class OP extends Cb{data(){return super.data()}}function Rb(i,e){return typeof e=="string"?Ng(i,e):e instanceof od?e._internalPath:e._delegate._internalPath}class kP{convertValue(e,t="none"){switch(Lr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return It(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Hr(e,(a,l)=>{s[a]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[Rf].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(c=>It(c.doubleValue));return new Cg(l)}convertGeoPoint(e){return new bg(It(e.latitude),It(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=$f(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(tc(e));default:return null}}convertTimestamp(e){const t=Pr(e);return new Bt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=bt.fromString(e);st(Yw(s));const a=new nc(s.get(1),s.get(3)),l=new we(s.popFirst(5));return a.isEqual(t)||xs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ib extends Cb{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new PP(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Rb("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class PP extends Ib{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(i){i=Va(i,Wn);const e=Va(i.firestore,ad);return gP(vb(e),i._key).then(t=>UP(e,i,t))}class VP extends kP{constructor(e){super(),this.firestore=e}convertBytes(e){return new rl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Wn(this.firestore,null,t)}}function LP(i,e,t){i=Va(i,Wn);const s=Va(i.firestore,ad),a=xP(i.converter,e);return Db(s,[CP(Sb(s),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,Wi.none())])}function Dg(i,e,t,...s){i=Va(i,Wn);const a=Va(i.firestore,ad),l=Sb(a);let c;return c=typeof(e=cn(e))=="string"||e instanceof od?NP(l,"updateDoc",i._key,e,t,s):IP(l,"updateDoc",i._key,e),Db(a,[c.toMutation(i._key,Wi.exists(!0))])}function Db(i,e){return function(s,a){const l=new Dr;return s.asyncQueue.enqueueAndForget(async()=>iP(await mP(s),a,l)),l.promise}(vb(i),e)}function UP(i,e,t){const s=t.docs.get(e._key),a=new VP(i);return new Ib(i,a,e._key,s,new MP(t.hasPendingWrites,t.fromCache),e.converter)}function jP(...i){return new Rg("arrayUnion",i)}(function(e,t=!0){(function(a){fl=a})(Ua),Ra(new kr("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new ad(new Sx(s.getProvider("auth-internal")),new bx(c,s.getProvider("app-check-internal")),function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new Se(re.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nc(_.options.projectId,E)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Fi(eS,tS,e),Fi(eS,tS,"esm2017")})();const BP={apiKey:"AIzaSyDWN5GCnrhUqKZlOt8Rxb0n748lhPf9B58",authDomain:"to-do-list-9cf11.firebaseapp.com",databaseURL:"https://to-do-list-9cf11-default-rtdb.firebaseio.com",projectId:"to-do-list-9cf11",storageBucket:"to-do-list-9cf11.firebasestorage.app",messagingSenderId:"44862500438",appId:"1:44862500438:web:ccb0f012d9c8e7cfe215f7",measurementId:"G-HB8NT8L1FD"};a0(BP);const gl=TP(),La=OD(),zP=({setPaging:i,editing:e,setPage:t,indicated:s,setIndicated:a,showTaskPrompt:l,url:c,setUrl:d,showSignInPrompt:m,showSignUpPrompt:_,setShowSignInPrompt:E,setShowSignUpPrompt:T,user:C,setShowPersonalInformation:P,continueAs:z,setIsSigningOut:X,showNavBar:H,showSaveChanges:Y,setShowSaveChanges:ee,setShowNavbar:le})=>{const[se,he]=ue.useState(!1),Te=[{content:"Home",link:"#Home",icon:()=>S.jsx("i",{class:"fa fa-home"}),paging:1},{content:"Tasks",link:"#Tasks",icon:()=>S.jsx("i",{class:"fa fa-book"}),paging:2},{content:"About",link:"#About",icon:()=>S.jsx("i",{class:"fa fa-user"}),paging:3},{content:"Contacts",link:"#Contacts",icon:()=>S.jsx("i",{class:"fa fa-phone"}),paging:4}],k=b=>{let I=window.location.href;I.toLowerCase();let x=I.search("/Acad/");I=I.slice(0,x+6),d(I.concat(b))},R=(b,I)=>{JSON.parse(localStorage.getItem("Changes"))==null?(a(0),t(b.paging),k(b.link)):(ee(!0),le(!1),he(!1),i({link:b.link,page:b.paging}))};return ue.useEffect(()=>{c.includes("#Home")?a(0):c.includes("#Tasks")?a(1):c.includes("#About")?a(2):c.includes("#Contacts")&&a(3),window.location.href=c},[c]),S.jsxs(S.Fragment,{children:[S.jsxs("nav",{className:!m&&!_&&!l&&!e&&!z&&H?ct.nav:ct.hideNav,children:[S.jsxs("div",{className:ct.left,children:[S.jsx("img",{src:"./web-icon.png",className:ct.icon}),S.jsx("h1",{children:"ACAD"})]}),S.jsx("div",{className:ct.middle,children:S.jsx("ul",{className:ct.NavLinks,children:Te.map((b,I)=>S.jsx("li",{onClick:()=>{R(b)},className:s===I?ct.indicated:ct.notIndicated,children:S.jsxs("a",{href:Y?null:b.link,children:[b.icon()," ",S.jsxs("span",{children:[b.content,S.jsx("span",{className:ct.indication})]})]})},b.link))})}),C?S.jsxs("div",{className:`${ct.right} ${ct.LoggedIn}`,children:[S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-user"}),className:`${ct.User_Button}`,content:"Account",func:()=>P(!0)}),S.jsx(ye,{content:"Sign Out",func:()=>{X(!0)},className:ct.SignUpButt}),S.jsx(ye,{className:ct.HamburgerButt,func:()=>{he(!0)},content:S.jsx("i",{className:"fa fa-list-ul"})})]}):S.jsxs("div",{className:`${ct.right} ${ct.notLoggedIn}`,children:[S.jsx(ye,{content:"Sign In",func:()=>{E(!0)},className:ct.SignInButt}),S.jsx(ye,{content:"Sign Up",func:()=>{T(!0)},className:ct.SignUpButt}),S.jsx(ye,{className:ct.HamburgerButt,func:()=>{he(!0)},content:S.jsx("i",{className:"fa fa-list-ul"})})]})]}),S.jsx("div",{className:se&&!Y?ct.sidebar:ct.hideSideBar,children:S.jsxs("ul",{className:se?ct.NavLinks:ct.hideNavLinks,children:[S.jsx(ye,{className:ct.HamburgerButt,func:()=>{he(!se)},content:S.jsx("i",{className:"fa fa-list-ul"})}),Te.map((b,I)=>S.jsx("li",{onClick:()=>{R(b)},className:s===I?ct.indicated:ct.notIndicated,children:S.jsxs("a",{href:Y?null:b.link,children:[b.icon()," ",S.jsxs("span",{children:[b.content,S.jsx("span",{className:ct.indication})]})]})},b.link))]})})]})},HP=({page:i,setPage:e,setIndicated:t,indicated:s})=>S.jsxs("div",{className:i==1?ws.home_wrapper:ws.hideHome,id:"Home",children:[S.jsxs("div",{className:`${ws.left} ${HE.animateLeft}`,children:[S.jsxs("div",{className:ws.wrapTop,children:[S.jsx("h1",{children:"Welcome User !"}),S.jsx("p",{children:"Write, read and document your work and studies using the Acad Web App for free!"}),S.jsx("a",{href:"#Tasks",children:S.jsx(ye,{content:"Get Started",func:()=>{e(2),t(1)}})})]}),S.jsxs("div",{className:ws.wrapBottom,children:[S.jsx(ye,{className:ws.orange}),S.jsx(ye,{className:ws.purple}),S.jsx(ye,{className:ws.blue})]})]}),S.jsx("div",{className:ws.right,children:S.jsx("img",{src:"./StartingPage/Working.png",className:HE.animateImg})})]}),FP="_Task_Container_efcfg_1",qP="_tasks_efcfg_47",GP="_Finished_efcfg_71",KP="_unchecked_efcfg_95",WP="_checked_efcfg_103",QP="_col_efcfg_111",YP="_br_efcfg_119",$P="_fs_efcfg_127",XP="_bgC_efcfg_135",ZP="_fW_efcfg_143",On={Task_Container:FP,tasks:qP,Finished:GP,unchecked:KP,checked:WP,col:QP,br:YP,fs:$P,bgC:XP,fW:ZP},JP=({handleSelectedTasks:i,selectTask:e,tasks:t,setTasks:s,searching:a,filteredTask:l,setFilteredTask:c,setOpenedTask:d,setEditing:m,type:_,sorting:E,sortOptions:T})=>{const[C,P]=ue.useState(t.map(Y=>({...Y,isChecked:!1})));function z(Y){let ee=t,le=[];ee=ee.map(se=>se.id===Y?{...se,isChecked:!se.isChecked}:se);for(let se=0;se<ee.length;se++)ee[se].isChecked&&le.push({id:ee[se].id,index:se}),se==ee.length-1&&(i(le),le=[]);s(se=>se.map(he=>he.id===Y?{...he,isChecked:!he.isChecked}:he)),a&&c(se=>se.map(he=>he.id===Y?{...he,isChecked:!he.isChecked}:he))}ue.useEffect(()=>{P([...t])},[t]);const X=()=>{if(a&&l!=null)return S.jsx("div",{className:On.Task_Container,children:l.map((Y,ee)=>{if(Y.type==="pending"&&_==="Pending")return S.jsx(H,{task:Y,i:ee},Y.id);if(Y.type==="finished"&&_==="Finished")return S.jsx(H,{task:Y,i:ee},Y.id);if(_==="All Tasks")return S.jsx(H,{task:Y,i:ee},Y.id)})},"Task_Container");if(E&&!a){let Y=C;for(let ee in T)ee==0&&T[ee].state==!0?Y=Y.sort((le,se)=>se.dateCreated.time-le.dateCreated.time):ee==1&&T[ee].state==!0?Y=Y.sort((le,se)=>le.dateCreated.time-se.dateCreated.time):ee==2&&T[ee].state==!0?Y=Y.sort((le,se)=>le.task.localeCompare(se.task)):ee==3&&T[ee].state==!0&&(Y=Y.sort((le,se)=>se.task.localeCompare(le.task)));return S.jsx("div",{className:On.Task_Container,children:Y.map((ee,le)=>{if(ee.type==="pending"&&_==="Pending")return S.jsx(H,{task:ee,i:le},ee.id);if(ee.type==="finished"&&_==="Finished")return S.jsx(H,{task:ee,i:le},ee.id);if(_==="All Tasks")return S.jsx(H,{task:ee,i:le},ee.id)})})}else if(!E&&!a)return S.jsx("div",{className:On.Task_Container,children:C.map((Y,ee)=>{if(Y.type==="pending"&&_==="Pending")return S.jsx(H,{task:Y,i:ee},Y.id);if(Y.type==="finished"&&_==="Finished")return S.jsx(H,{task:Y,i:ee},Y.id);if(_==="All Tasks")return S.jsx(H,{task:Y,i:ee},Y.id)})})},H=({task:Y,i:ee})=>S.jsxs("label",{htmlFor:"task"+Y.id,style:Y.style!="default"?{...Y.style}:null,className:Y.type=="pending"?`${On.Pending} ${Y.cName.map(le=>JSON.parse(le)).join(" ")} ${On.tasks}`:`${On.Finished} ${Y.cName.map(le=>JSON.parse(le)).join(" ")} ${On.tasks}`,onDoubleClick:()=>{m(!0),d({id:Y.id,isOpened:!0})},children:[S.jsx("i",{style:e==!1?{display:"none"}:{display:"block"},className:`fa fa-check-square ${Y.isChecked===!0?On.checked:On.unchecked}`}),S.jsx("input",{style:{display:"none"},type:"checkbox",id:"task"+Y.id,onChange:()=>{e&&z(Y.id)}}),Y.task]},Y.id);if(C!=null)return S.jsx(S.Fragment,{children:S.jsx(X,{})})},eV="_Bottom_Options_14lht_1",tV="_toLeft_14lht_31",nV="_toRight_14lht_31",iV="_Unchecked_14lht_57",sV="_hide_14lht_105",vr={Bottom_Options:eV,toLeft:tV,toRight:nV,Unchecked:iV,hide:sV},rV=({handleSelectedTasks:i,selectedTask:e,selectTask:t,setSelectTask:s,unselectAll:a,tasks:l,setTasks:c,searching:d,updateTasks:m,setUpdateTasks:_,filteredTasks:E,setFilteredTasks:T,handleMarking:C})=>{const P=()=>{let H=l,Y=E,ee=[],le=[];if(d){Y=Y.map(se=>({...se,isChecked:!0}));for(let se=0;se<Y.length;se++)Y[se].isChecked&&le.push({id:Y[se].id,index:se});i([...le])}else{H=H.map(se=>({...se,isChecked:!0}));for(let se=0;se<H.length;se++)H[se].isChecked&&ee.push({id:H[se].id,index:se});i([...ee])}d?T([...Y]):_(se=>se.map(he=>({...he,isChecked:!0})))};function z(){let H=l,Y=E;for(let ee in Y)for(let le in e)Y[ee].id===e[le].id&&Y.splice(ee,1);for(let ee in l)for(let le in e)H[ee].id===e[le].id&&H.splice(ee,1);C(Y,[...H]),i(null)}const X=()=>t==!0?S.jsx(S.Fragment,{children:S.jsxs("div",{className:vr.toLeft,children:[S.jsx(ye,{content:S.jsx("span",{children:" Select All"}),icon:S.jsx("i",{className:"fa fa-check"}),className:vr.SelectAllButton,func:()=>{P()}}),S.jsx(ye,{content:S.jsx("span",{children:" Unselect All"}),icon:S.jsx("i",{className:`fas fa fa-check ${vr.Unchecked}`}),className:vr.UnselectAllButton,func:()=>{a()}})]})}):S.jsx(S.Fragment,{children:S.jsx(ye,{content:"Select",icon:S.jsx("i",{className:"fa fa-hand-o-up"}),className:vr.SelectButton,func:()=>s(!0)})});return S.jsx(S.Fragment,{children:S.jsxs("div",{className:vr.Bottom_Options,children:[S.jsx(X,{}),S.jsxs("div",{className:t==!0?vr.toRight:vr.hide,children:[S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-trash"}),content:" Delete",func:H=>{t?z():console.log("No update")}}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-close"}),content:" Cancel",func:()=>{s(!1),a()}})]})]})})},aV="_DropDown_Body_1ouwm_1",oV="_Hide_DropDown_Body_1ouwm_1",lV="_Dropdown_Wrapper_1ouwm_27",uV="_Not_Indicated_1ouwm_59",cV="_Indicated_1ouwm_69",Ru={DropDown_Body:aV,Hide_DropDown_Body:oV,Dropdown_Wrapper:lV,Not_Indicated:uV,Indicated:cV},hV=({setType:i,showDropDown:e,handleType:t,unselectAll:s})=>{const a=["Pending","Finished","All Tasks"],[l,c]=ue.useState(0);return S.jsx(S.Fragment,{children:S.jsx("div",{className:e?Ru.DropDown_Body:Ru.Hide_DropDown_Body,onClick:()=>{t()},children:S.jsx("ul",{className:Ru.Dropdown_Wrapper,children:a.map((d,m)=>S.jsx("li",{className:l==m?Ru.Indicated:Ru.Not_Indicated,onClick:()=>{i(a[m]),c(m),s()},children:d},a[m]))})})})},fV="_Options_tab_yd1ph_1",dV="_Prompt_Box_yd1ph_21",pV="_Close_Button_yd1ph_63",mV="_colorPicker_yd1ph_145",_V="_Hide_BG_Color_Prompt_yd1ph_177",gV="_Hide_Color_Prompt_yd1ph_179",yV="_Hide_Border_Color_Prompt_yd1ph_181",vV="_Hide_Font_Weight_Prompt_yd1ph_183",EV="_Hide_Italic_Prompt_yd1ph_185",TV="_BG_Color_Prompt_yd1ph_193",SV="_Color_Prompt_yd1ph_195",AV="_Border_Color_Prompt_yd1ph_197",wV="_Font_Weight_Prompt_yd1ph_199",bV="_Italic_Prompt_yd1ph_201",CV="_Wrap_Options_Tab_yd1ph_209",RV="_createTask_yd1ph_299",IV="_notWorking_yd1ph_321",Le={Options_tab:fV,Prompt_Box:dV,Close_Button:pV,colorPicker:mV,Hide_BG_Color_Prompt:_V,Hide_Color_Prompt:gV,Hide_Border_Color_Prompt:yV,Hide_Font_Weight_Prompt:vV,Hide_Italic_Prompt:EV,BG_Color_Prompt:TV,Color_Prompt:SV,Border_Color_Prompt:AV,Font_Weight_Prompt:wV,Italic_Prompt:bV,Wrap_Options_Tab:CV,createTask:RV,notWorking:IV},NV=({selectedTask:i,filteredTasks:e,updateTasks:t,searching:s,optionTabNumber:a,handleMarking:l,unselectAll:c,setShowTaskPrompt:d,setShowSortPrompt:m,numberOfChanges:_,setNumberOfChanges:E,user:T,setUpdateTask:C,setLoading:P,setShowNavbar:z})=>{var F;const[X,H]=ue.useState(a),[Y,ee]=ue.useState(!1),[le,se]=ue.useState(!1),[he,Te]=ue.useState(!1),[k,R]=ue.useState(!1),[b,I]=ue.useState(!1),[x,L]=ue.useState(!1);function D(ae,Ae,O,$,ne,ie){let fe=t,ge=t,pe=e,Je=[];for(let Ne in i)if(s)for(let Oe in pe)pe[Oe].id==i[Ne].id?(ae!=!1&&(pe[i[Ne].index].type=ae,Je.push(pe[i[Ne].index])),ae==!1&&((pe[Oe].style=="default"||pe[Oe].style==null)&&(pe[Oe].style={color:"default",border:"default",fontStyle:"default",backgroundColor:"default",fontWeight:"default"}),Ae&&(pe[Oe].style.color=Ae,Je.push(pe[Oe])),O&&(pe[Oe].style.backgroundColor=O,Je.push(pe[Oe])),$&&(pe[Oe].style.fontWeight=$,Je.push(pe[Oe])),ne&&(pe[Oe].style.fontStyle=ne,Je.push(pe[Oe])),ie&&(pe[Oe].style.borderColor=ie,Je.push(pe[Oe])))):Je.push(pe[i[Ne].index]);for(let Ne in i)ge=ge.map(Oe=>{if(i[Ne].id==Oe.id){let Re={...Oe};return Re.style=Re.style==="default"?{color:"default",border:"default",fontStyle:"default",backgroundColor:"default",fontWeight:"default"}:{...Re.style},ae!==!1&&(Re.type=ae),Ae&&(Re.style={...Re.style,color:Ae}),O&&(Re.style={...Re.style,backgroundColor:O}),$&&(Re.style={...Re.style,fontWeight:$}),ne&&(Re.style={...Re.style,fontStyle:ne}),ie&&(Re.style={...Re.style,borderColor:ie}),Re.isChecked=!0,Re}else return{...Oe}});s?l([...pe],[...ge],fe):l(pe,[...ge],fe)}function et(){let ae=_+1,Ae=JSON.parse(localStorage.getItem("Changes"));Ae=Ae[ae],C([...Ae]),E(ae),console.log(JSON.parse(localStorage.getItem("Changes")))}function rt(){let ae=_-1,Ae=JSON.parse(localStorage.getItem("Changes"));Ae=Ae[ae],C([...Ae]),E(ae),console.log(JSON.parse(localStorage.getItem("Changes")))}const oe=async()=>{var $;P(!0),z(!1);let ae=JSON.parse(localStorage.getItem("Changes"));ae=[...ae[_]],ae=ae.map(ne=>({...ne,isChecked:!1}));const Ae=($=T==null?void 0:T.uid)==null?void 0:$.toString(),O=_l(gl,`Users/${Ae}`);try{await Dg(O,{tasks:ae}),E(null),C([...ae]),localStorage.removeItem("Changes")}catch(ne){alert(ne.message)}z(!0),P(!1)};return ue.useEffect(()=>{H(a)},[a]),S.jsxs("div",{className:Le.Options_tab,children:[S.jsxs("div",{className:le?`${Le.BG_Color_Prompt} ${Le.Prompt_Box}`:`${Le.Hide_BG_Color_Prompt} ${Le.Prompt_Box}`,children:[S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Le.Close_Button}`,func:()=>{se(!1)}}),S.jsx("h1",{children:"Change BG Color"}),S.jsxs("label",{htmlFor:"colorPicker",className:Le.colorPicker,children:[S.jsx("input",{type:"color",id:"colorPicker",onBlur:ae=>{D(!1,!1,ae.target.value,!1,!1)}}),S.jsx("span",{children:"Choose BG Color"})]}),S.jsx(ye,{content:"Default",func:()=>{D(!1,!1,"#f09c2e",!1,!1)}})]}),S.jsxs("div",{className:he?`${Le.Color_Prompt} ${Le.Prompt_Box}`:`${Le.Hide_Color_Prompt} ${Le.Prompt_Box}`,children:[S.jsx("h1",{children:"Change Font Color"}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Le.Close_Button}`,func:()=>{Te(!1)}}),S.jsxs("label",{htmlFor:"bgColorPicker",className:`${Le.bgColorPicker} ${Le.colorPicker}`,children:[S.jsx("input",{type:"color",id:"bgColorPicker",onBlur:ae=>{D(!1,ae.target.value,!1,!1,!1)}}),S.jsx("span",{children:"Choose Font Color"})]}),S.jsx(ye,{content:"Default",func:()=>{D(!1,"white",!1,!1,!1)}})]}),S.jsxs("div",{className:k?`${Le.Border_Color_Prompt} ${Le.Prompt_Box}`:`${Le.Hide_Border_Color_Prompt} ${Le.Prompt_Box}`,children:[S.jsx("h1",{children:"Change Border Color"}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Le.Close_Button}`,func:()=>{R(!1)}}),S.jsxs("label",{htmlFor:"borderColorPicker",className:`${Le.borderColorPicker} ${Le.colorPicker}`,children:[S.jsx("input",{type:"color",id:"borderColorPicker",onBlur:ae=>{D(!1,!1,!1,!1,!1,ae.target.value)}}),S.jsx("span",{children:"Choose Border Color"})]}),S.jsx(ye,{content:"Default",func:()=>{D(!1,!1,!1,!1,!1,"#d16c06")}})]}),S.jsxs("div",{className:b?`${Le.Font_Weight_Prompt} ${Le.Prompt_Box}`:`${Le.Hide_Font_Weight_Prompt} ${Le.Prompt_Box}`,children:[S.jsx("h1",{children:"Change Font Weight"}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Le.Close_Button}`,func:()=>{I(!1)}}),S.jsx(ye,{content:"Normal",func:()=>{D(!1,!1,!1,"Normal",!1,!1)}}),S.jsx(ye,{content:"Bold",func:()=>{D(!1,!1,!1,"Bold",!1,!1)}}),S.jsx(ye,{content:"Bolder",func:()=>{D(!1,!1,!1,"Bolder",!1,!1)}})]}),S.jsxs("div",{className:x?`${Le.Italic_Prompt} ${Le.Prompt_Box}`:`${Le.Hide_Italic_Prompt} ${Le.Prompt_Box}`,children:[S.jsx("h1",{children:"Change Italization"}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-close"}),className:`${Le.Close_Button}`,func:()=>{L(!1)}}),S.jsx(ye,{content:"Normal",func:()=>{D(!1,!1,!1,!1,"Normal",!1)}}),S.jsx(ye,{content:"Italic",func:()=>{D(!1,!1,!1,!1,"Italic",!1)}})]}),S.jsxs("div",{className:Le.Wrap_Options_Tab,children:[S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-save"}),content:"Save Changes",className:_==null?`${Le.notWorking}`:null,func:()=>{_!=null&&oe()}}),S.jsx(ye,{icon:S.jsx("i",{className:"material-icons",children:"undo"}),content:"Undo",className:_==null||_==0?`${Le.notWorking}`:null,func:()=>{_>0&&rt()}}),S.jsx(ye,{icon:S.jsx("i",{className:"material-icons",children:"redo"}),content:"Redo",className:_<((F=JSON.parse(localStorage.getItem("Changes")))==null?void 0:F.length)-1&&_!=null?null:`${Le.notWorking}`,func:()=>{var ae;_<((ae=JSON.parse(localStorage.getItem("Changes")))==null?void 0:ae.length)-1&&_!=null&&et()}}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-plus"}),content:S.jsx("span",{children:" Create New Task"}),className:Le.createTask,func:()=>{d(!0),z(!1)}}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-edit"}),content:S.jsx("span",{children:" Mark As Finished"}),func:()=>{D("finished","white","#51af0f",!1,!1,"rgb(8, 97, 20)")}}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-edit"}),content:S.jsx("span",{children:" Mark As Pending"}),func:()=>{D("pending","white","#f09c2e",!1,!1,"rgb(209, 108, 6)")}}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-sort"}),content:S.jsx("span",{children:" Sort"}),func:()=>{m(!0),z(!1)}}),S.jsx(ye,{icon:S.jsx("i",{className:"material-icons",children:"format_color_fill"}),content:S.jsx("span",{children:" BG Color "}),func:()=>{se(!0),Te(!1),R(!1),I(!1),L(!1)}}),S.jsx(ye,{icon:S.jsx("i",{className:"material-icons",children:"format_color_text"}),content:S.jsx("span",{children:" Font Color"}),func:()=>{Te(!0),se(!1),R(!1),I(!1,L(!1))}}),S.jsx(ye,{icon:S.jsx("i",{className:"material-icons",children:"border_color"}),content:S.jsx("span",{children:" Border Color"}),func:()=>{R(!0),se(!1),Te(!1),I(!1),L(!1)}}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-bold"}),content:" Bold",className:`${Le.green} ${Le.black}`,func:()=>{R(!1),se(!1),Te(!1),I(!0),L(!1)}}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-italic"}),content:" Italic",func:()=>{R(!1),se(!1),Te(!1),I(!1),L(!0)}})]})]})},DV="_Task_View_19nr4_1",OV="_Hide_Task_View_19nr4_19",kV="_nav_19nr4_57",xV="_content_19nr4_127",MV="_submitButton_19nr4_173",Iu={Task_View:DV,Hide_Task_View:OV,nav:kV,content:xV,submitButton:MV},PV=({openedTask:i,setOpenedTask:e,tasks:t,filteredTasks:s,setEditing:a,editing:l,user:c,handleMarking:d,setShowNavbar:m,setLoading:_})=>{const E=ue.useRef(null);function T(){let C=[...t],P=s;for(let z in C)C[z].id===i.id&&(C[z].task=E.current.innerText);for(let z in P)P[z].id===i.id&&(P[z].task=E.current.innerText);d(P,[...C]),m(!0)}if(i.id!=null)return S.jsxs("div",{className:l?Iu.Task_View:Iu.Hide_Task_View,children:[S.jsxs("div",{className:Iu.nav,children:[S.jsxs("h3",{children:[S.jsx("i",{className:"fa fa-edit"})," ",S.jsx("span",{children:"Edit Task"})]}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-times"}),func:()=>{e({index:null,isOpened:!1}),a(!1),m(!0)}})]}),S.jsx("div",{className:Iu.content,children:S.jsx("p",{ref:E,contentEditable:l,children:t.map((C,P)=>{if(C.id===i.id)return C.task})})}),S.jsx(ye,{content:"Save Changes",className:Iu.submitButton,func:()=>{T(),a(!1)}})]})},VV="_Task_prompt_wrapper_hoxzz_1",LV="_Hide_task_prompt_wrapper_hoxzz_1",UV="_nav_hoxzz_41",jV="_content_hoxzz_111",BV="_submitButton_hoxzz_157",Nu={Task_prompt_wrapper:VV,Hide_task_prompt_wrapper:LV,nav:UV,content:jV,submitButton:BV},zV=({showTaskPrompt:i,setShowTaskPrompt:e,writeTask:t,setShowNavbar:s})=>{const a=ue.useRef(null),l=ue.useRef(null),[c,d]=ue.useState(!1);function m(){d(Math.random()*1)}function _(){t(l.current.innerText)}function E(){l.current.innerHTML="<br>",T()}function T(){l.current.innerText==`
`||l.current.innerHTML=="<br>"?a.current.style.display="block":a.current.style.display="none"}return ue.useEffect(()=>{},[c]),S.jsx(S.Fragment,{children:S.jsxs("div",{className:i?Nu.Task_prompt_wrapper:Nu.Hide_task_prompt_wrapper,children:[S.jsxs("div",{className:Nu.nav,children:[S.jsxs("h3",{children:[S.jsx("i",{className:"fa fa-edit"})," ",S.jsx("span",{children:"Task Prompt"})]}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-times"}),func:()=>{e(!1),E(),s(!0)}})]}),S.jsxs("div",{className:Nu.content,children:[S.jsx("span",{ref:a,children:"Type Any Task..."}),S.jsx("p",{ref:l,contentEditable:"true",onInput:()=>{m(),T()}})]}),S.jsx(ye,{content:"Submit",className:Nu.submitButton,func:()=>{_(),e(!1),E(),s(!0)}})]})})},HV="_Sort_Wrapper_1nnq2_17",FV="_Hide_Sort_Wrapper_1nnq2_19",qV="_Sort_Box_1nnq2_51",GV="_Hide_Sort_Box_Button_1nnq2_75",KV="_Sort_Options_1nnq2_105",WV="_checked_1nnq2_153",QV="_unchecked_1nnq2_153",Er={Sort_Wrapper:HV,Hide_Sort_Wrapper:FV,Sort_Box:qV,Hide_Sort_Box_Button:GV,Sort_Options:KV,checked:WV,unchecked:QV},YV=({setShowSortPrompt:i,showSortPrompt:e,sortOptions:t,setSortOptions:s,setSorting:a,setShowNavbar:l,showSaveChanges:c})=>{function d(m){let _=t;_=_.map((E,T)=>_[T]===_[m]?{...E,state:!E.state}:{...E,state:!1});for(let E in _){if(_[E].state==!0){a(!0);break}E==_.length-1&&!_[E].state&&a(!1)}s([..._])}return S.jsx("div",{className:e?Er.Sort_Wrapper:Er.Hide_Sort_Wrapper,children:S.jsxs("div",{className:e?Er.Sort_Box:Er.Hide_Sort_Box,children:[S.jsx("h2",{children:"Sort Settings"}),S.jsx(ye,{icon:S.jsx("i",{className:"fa fa-close"}),className:Er.Hide_Sort_Box_Button,func:()=>{i(!1),l(!0)}}),S.jsx("div",{className:Er.Sort_Options,children:t.map((m,_)=>S.jsx(ye,{icon:S.jsx("i",{className:`fa fa-check-square ${m.state==!0?Er.checked:Er.unchecked}`}),content:m.description,func:()=>{d(_),l(!1)}},m.description))})]})})},$V="_Changes_Wrapper_26idq_1",XV="_Changes_Box_26idq_27",ZV="_Top_26idq_55",JV="_Options_26idq_107",Yh={Changes_Wrapper:$V,Changes_Box:XV,Top:ZV,Options:JV},eL=({showSaveChanges:i,setShowSaveChanges:e,setUpdateTask:t,setNumberOfChanges:s,numberOfChanges:a,user:l,paging:c,setPage:d,setShowNavbar:m,setLoading:_})=>{const E=async()=>{var z;let T=JSON.parse(localStorage.getItem("Changes"));T=[...T[a]],T=T.map(X=>({...X,isChecked:!1}));const C=(z=l==null?void 0:l.uid)==null?void 0:z.toString(),P=_l(gl,`Users/${C}`);_(!0);try{if(await Dg(P,{tasks:T}),s(null),t([...T]),localStorage.removeItem("Changes"),c){let X=window.location.href;X.toLowerCase();let H=X.search("/Acad/");X=X.slice(0,H+6),X=X.concat(c==null?void 0:c.link),window.location.href=X,d(c.page),_(fase)}}catch(X){alert("Error Saving Your Changes"),e(!1),console.log("Error writing task:",X),_(fase)}m(!0)};if(i)return S.jsx("div",{className:Yh.Changes_Wrapper,children:S.jsxs("div",{className:Yh.Changes_Box,children:[S.jsxs("div",{className:Yh.Top,children:[S.jsx("i",{className:"fa fa-warning"}),S.jsx("h3",{children:"Would You Save Your Previous Changes?"})]}),S.jsxs("div",{className:Yh.Options,children:[S.jsx(ye,{content:"No",func:()=>{e(!1),localStorage.removeItem("Changes"),window.location.reload()}}),S.jsx(ye,{content:"Yes",func:()=>{e(!1),E()}})]})]})})},tL="_Hide_Task_Wrapper_1397q_5",nL="_Task_Wrapper_1397q_13",iL="_Tasks_Editor_1397q_33",sL="_Search_wrapper_1397q_103",Mo={Hide_Task_Wrapper:tL,Task_Wrapper:nL,Tasks_Editor:iL,Search_wrapper:sL},rL="_Loading_Wrapper_fw8ew_25",aL="_Loading_Bar_fw8ew_59",WS={Loading_Wrapper:rL,Loading_Bar:aL},oL=({loading:i})=>{if(i)return S.jsxs("div",{className:WS.Loading_Wrapper,children:[S.jsx("div",{className:WS.Loading_Bar}),"Loading..."]})},lL=({page:i,paging:e,setPage:t,setPaging:s,setEditing:a,editing:l,user:c,getTask:d,setShowNavbar:m,setShowSaveChanges:_,showSaveChanges:E,setLoading:T})=>{const C=JSON.parse(localStorage.getItem("Changes")),P=ue.useRef(null),[z,X]=ue.useState(!1),[H,Y]=ue.useState(!1),[ee,le]=ue.useState(!1),[se,he]=ue.useState(!1),[Te,k]=ue.useState(!1),[R,b]=ue.useState(!1),[I,x]=ue.useState([]),[L,D]=ue.useState(1),[et,rt]=ue.useState("Pending"),[oe,F]=ue.useState(d),[ae,Ae]=ue.useState(C?C.length-1:null),[O,$]=ue.useState(oe.map(K=>({...K,isChecked:!1}))),[ne,ie]=ue.useState(null),[fe,ge]=ue.useState({index:null,isOpened:!1}),[pe,Je]=ue.useState(null),[Ne,Oe]=ue.useState([{description:"Newest to Oldest",state:!1},{description:"Oldest to Newest",state:!1},{description:"From A-Z",state:!1},{description:"From Z-A",state:!1}]);function Re(){le(!1)}const Zt=async K=>{var qr;let tt=[...oe];const Ht=(qr=c.uid)==null?void 0:qr.toString(),Jt=_l(gl,"Users",Ht);let qa="qwertyuiopasdfghjklzxcvbnm",Zi="";for(let _t=0;_t<10;_t++){let Nt=Math.floor(Math.random()*qa.length);Zi=Zi.concat(qa[Nt])}let en={id:Zi,task:K,dateCreated:{fullDate:new Date,time:Date.now()},selected:!1,style:"default",cName:[JSON.stringify(On.col),JSON.stringify(On.br),JSON.stringify(On.fs),JSON.stringify(On.bgC),JSON.stringify(On.fW)],isChecked:!1,type:"pending"};tt.unshift(en);try{await Dg(Jt,{tasks:jP(en)}),b(!1),$([...tt])}catch(_t){console.log("Error writing task:",_t)}};function Mn(K,tt,Ht){const Jt=JSON.parse(localStorage.getItem("Changes"))!=null?JSON.parse(localStorage.getItem("Changes")):[];Jt.length==0&&Jt.push(O),Jt.length>=1&&Jt.push(tt),localStorage.setItem("Changes",JSON.stringify(Jt)),console.log(JSON.parse(localStorage.getItem("Changes"))),Ae(Jt.length-1),I.length>=1&&(H&&ie([...K]),$([...tt]))}function fn(){P.current.value==""?Y(!1):(Y(!0),ie(oe.filter(K=>K.task.toLowerCase().includes(P.current.value.toLowerCase()))),he(!1))}function Pn(K){x(K==null?[]:[...K])}function Ai(K){ge(K)}function Qn(){let K=Ne;for(let tt=0;tt<Ne.length;tt++)if(K[tt].state==!0){he(!0);break}else tt==Ne.length-1&&Ne[tt].state==!1&&he(!1)}const Xi=()=>{let K=oe,tt=ne;H?(tt=tt.map(Ht=>({...Ht,isChecked:!1})),Pn(null)):(K=K.map(Ht=>({...Ht,isChecked:!1})),Pn(null)),H?ie([...tt]):$(Ht=>Ht.map(Jt=>({...Jt,isChecked:!1})))};if(ue.useEffect(()=>{F([...O]),ie([...O.filter(K=>K.task.toLowerCase().includes(P.current.value.toLowerCase()))])},[O]),ue.useEffect(()=>{d!=null&&d.tasks&&$(d.tasks)},[d]),ue.useEffect(()=>{const K=JSON.parse(localStorage.getItem("Changes"));(K==null?void 0:K.length)>=2&&(_(!0),m(!1))},[]),ue.useEffect(()=>{console.log(I)},[I]),i==2)return S.jsx(S.Fragment,{children:S.jsxs("div",{className:i==2?Mo.Task_Wrapper:Mo.Hide_Task_Wrapper,id:"Tasks",children:[S.jsx(zV,{showTaskPrompt:R,setShowTaskPrompt:b,writeTask:K=>{Zt(K)},setShowNavbar:K=>m(K)}),S.jsxs("div",{className:Mo.Tasks_Editor,children:[S.jsxs("h2",{className:Mo.Title_wrapper,children:["Tasks",S.jsx("i",{className:"fa fa-bars",onClick:()=>{le(!ee)}}),S.jsx(hV,{type:et,setType:K=>{rt(K)},showDropDown:ee,handleType:K=>{Re()},unselectAll:K=>{Xi()},setSortOptions:K=>{Oe(K)},setSorting:K=>{he(K)}})]}),S.jsx(NV,{optionTabNumber:L,updateTasks:O,filteredTasks:ne,setShowTaskPrompt:K=>{b(K)},searching:H,setSearching:K=>Y(K),handleSearch:()=>{fn()},selectedTask:I,handleMarking:(K,tt,Ht)=>{Mn(K,tt)},markAsPending:K=>{markAsPending(K)},unselectAll:()=>Xi(),setBgColor:K=>setBgColor(K),setColor:K=>setColor(K),setShowSortPrompt:K=>{k(K)},numberOfChanges:ae,setNumberOfChanges:K=>Ae(K),user:c,setUpdateTask:K=>{$(K)},setShowNavbar:K=>m(K),setLoading:K=>T(K)}),S.jsx("div",{className:Mo.Search_wrapper,children:S.jsxs("div",{children:[S.jsx("label",{htmlFor:"search-bar",children:S.jsx("i",{className:"fa fa-search"})}),S.jsx("input",{ref:P,id:"search-bar",type:"text",placeholder:"Type Task...",onChange:()=>{P.current.value==""&&(Qn(),fn())}}),S.jsx(ye,{content:"Search",className:Mo.Search_button,func:()=>{fn(),Qn()}})]})}),S.jsx(rV,{selectedTask:I,handleSelectedTasks:K=>Pn(K),selectTask:z,setSelectTask:X,unselectAll:()=>{Xi()},tasks:oe,setTasks:K=>{$(K)},filteredTasks:ne,setFilteredTasks:K=>{ie(K)},searching:H,setUpdateTasks:K=>$(K),updateTasks:O,handleMarking:(K,tt,Ht)=>{Mn(K,tt)}}),S.jsx(JP,{selectedTasks:I,setSelectedTasks:()=>x(),selectTask:z,tasks:oe,setTasks:K=>{F(K)},del:K=>{del(K)},handleSelectedTasks:K=>Pn(K),filteredTask:ne,setFilteredTask:K=>{ie(K)},searching:H,handleOpenedTask:K=>{Ai(K)},openedTask:fe,setShowTaskPrompt:K=>{b(K)},editing:l,setEditing:K=>{a(K)},setOpenedTask:K=>{ge(K)},type:et,setSorting:K=>{he(K)},sorting:se,sortOptions:Ne}),S.jsx(PV,{openedTask:fe,setOpenedTask:K=>{ge(K)},tasks:oe,filteredTasks:ne,saveChanges:(K,tt)=>{saveChanges(K,tt)},editing:l,searching:H,setEditing:K=>{a(K)},editedValue:pe,user:c,setUpdateTask:K=>{$(K)},setShowNavbar:K=>{m(K)},setLoading:K=>T(K),handleMarking:(K,tt)=>Mn(K,tt)}),S.jsx(YV,{showSortPrompt:Te,setShowSortPrompt:K=>{k(K)},sortOptions:Ne,setSortOptions:K=>{Oe(K)},setSorting:K=>{he(K)},sorting:se,setShowNavbar:K=>{m(K)}}),S.jsx(eL,{showSaveChanges:E,numberOfChanges:ae,setNumberOfChanges:K=>Ae(K),user:c,setUpdateTask:K=>{$(K)},setPaging:K=>{s(K)},paging:e,setPage:K=>{t(K)},setShowSaveChanges:K=>{_(K)},setShowNavbar:K=>{m(K)},setLoading:K=>T(K)})]})]})})},uL="_sign_up_container_mvskv_19",cL="_goToStartingPage_mvskv_41",hL="_top_arc_mvskv_65",fL="_form_mvskv_91",dL="_username_con_mvskv_105",pL="_password_con_mvskv_107",mL="_more_actions_mvskv_121",_L="_sign_in_button_mvskv_219",gL="_other_platforms_container_mvskv_251",yL="_icon_wrapper_mvskv_273",vL="_wrapper_mvskv_285",an={sign_up_container:uL,goToStartingPage:cL,top_arc:hL,form:fL,username_con:dL,password_con:pL,more_actions:mL,sign_in_button:_L,other_platforms_container:gL,icon_wrapper:yL,wrapper:vL};function EL({user:i,setUser:e,showSignInPrompt:t,setShowSignInPrompt:s,setShowSignUpPrompt:a,setLoading:l,setContinueAs:c}){const[d,m]=ue.useState(!1),_=ue.useRef(null),E=ue.useRef(null),T=ue.useRef(null),C=ue.useRef(null),P=H=>{(H.target.value==null||H.target.value!=null)&&(_.current.textContent="")},z=H=>{(H.target.value==null||H.target.value!=null)&&(E.current.textContent="")},X=async()=>{l(!0);try{await gN(La,T.current.value,C.current.value),e(La.currentUser),l(!1),s(!1),c(!0)}catch(H){console.log(H)}};if(t==!0)return S.jsx(S.Fragment,{children:S.jsxs("div",{className:an.sign_up_container,children:[S.jsx(ye,{func:()=>{s(!1)},content:"X",className:an.goToStartingPage}),S.jsx("div",{className:an.top_arc,children:"SIGN IN"}),S.jsxs("div",{className:an.form,children:[S.jsxs("div",{className:an.username_con,children:[S.jsx("h3",{children:"Username :"}),S.jsx("input",{className:"emailInput",ref:T,onInput:H=>{P(H)}}),S.jsx("span",{ref:_})]}),S.jsxs("div",{className:an.password_con,children:[S.jsx("h3",{children:"Password :"}),S.jsx("input",{type:d?"text":"password",ref:C,onInput:H=>{z(H)},className:an.Password}),S.jsx("span",{ref:E}),S.jsx("img",{src:d?"./password/visible.png":"./password/unsee.png",className:an.see_password,onClick:()=>{m(!d)}})]}),S.jsxs("div",{className:an.more_actions,children:[S.jsx("span",{className:an.forgot_pass,children:"Forgot Password"}),S.jsx("span",{className:an.create_acc,onClick:()=>{s(!1),a(!0)},children:"Doesn't Have An Account?"})]}),S.jsx(ye,{className:an.sign_in_button,func:()=>{X()},content:"SIGN IN"})]}),S.jsxs("div",{className:an.other_platforms_container,children:[S.jsxs("div",{className:an.icon_wrapper,children:[S.jsx("div",{className:an.wrapper,children:S.jsx("img",{src:"./platforms/GG.png "})}),S.jsx("div",{className:an.wrapper,children:S.jsx("img",{src:"./platforms/facebook.png"})}),S.jsx("div",{className:an.wrapper,children:S.jsx("img",{src:"./platforms/Instagram.png"})})]}),S.jsx("h3",{children:"SIGN IN WITH DIFFERENT PLATFORMS"})]})]})})}const TL="_hide_fc9cy_1",SL="_inputs_1_fc9cy_7",Sa={hide:TL,inputs_1:SL},AL=({show:i,indicated:e,showConfirm:t,setShow:s,setShowConfirm:a,passwordInput:l,confirmPasswordInput:c,emailInput:d,passWarning:m,confirmWarning:_,emailWarning:E})=>S.jsxs("div",{className:e==0?Sa.inputs_1:Sa.hide,children:[S.jsxs("div",{className:Sa.email,children:[S.jsx("h4",{children:"Email"}),S.jsx("input",{type:"text",ref:d}),S.jsx("span",{ref:E})]}),S.jsxs("div",{className:Sa.password,children:[S.jsx("h4",{children:"Password"}),S.jsx("input",{type:i?"text":"password",ref:l}),S.jsx("img",{src:i?"./password/visible.png":"./password/unsee.png",className:Sa.see_password,onClick:()=>{s(!i)}}),S.jsx("span",{ref:m})]}),S.jsxs("div",{className:Sa.confirm,children:[S.jsx("h4",{children:"Confirm Password"}),S.jsx("input",{type:t?"text":"password",ref:c}),S.jsx("img",{src:t?"./password/visible.png":"./password/unsee.png",className:Sa.see_confirm,onClick:()=>{a(!t)}}),S.jsx("span",{ref:_})]})]}),wL="_hide_6obhl_1",bL="_inputs_2_6obhl_11",CL="_top_6obhl_31",RL="_notIndicated_6obhl_71",IL="_indicated_6obhl_81",Du={hide:wL,inputs_2:bL,top:CL,notIndicated:RL,indicated:IL},NL=({indicated:i,usingAsInput:e,usageOptions:t,handleUsageOptions:s})=>S.jsxs("div",{className:i==1?Du.inputs_2:Du.hide,children:[S.jsx("h3",{children:"Why am I using the To-Do List Web App?"}),S.jsx("div",{children:S.jsxs("div",{className:Du.top,children:[t.map((a,l)=>S.jsx(ye,{content:a.content,className:a.isIndicated?Du.indicated:Du.notIndicated,func:()=>{s(l)}},a.content)),S.jsx("input",{type:"text",placeholder:"Other reason...",ref:e})]})})]}),DL="_hide_r58tk_1",OL="_inputs_3_r58tk_9",Ou={hide:DL,inputs_3:OL},kL=({show:i,indicated:e,showConfirm:t,nickNameInput:s,schoolInput:a,grSecInput:l,nameWarning:c,schoolWarning:d,grSecWarning:m})=>S.jsxs("div",{className:e==2?Ou.inputs_3:Ou.hide,children:[S.jsxs("div",{className:Ou.username,children:[S.jsx("h4",{children:"Name"}),S.jsx("input",{type:"text",ref:s}),S.jsx("span",{ref:c})]}),S.jsxs("div",{className:Ou.password,children:[S.jsx("h4",{children:"School"}),S.jsx("input",{type:"text",ref:a}),S.jsx("span",{ref:d})]}),S.jsxs("div",{className:Ou.confirm,children:[S.jsx("h4",{children:"Grade & Section"}),S.jsx("input",{type:"text",ref:l}),S.jsx("span",{ref:m})]})]}),xL="_hide_j48mp_15",ML="_inputs_4_j48mp_23",PL="_wrapper_j48mp_85",VL="_IndicatedButt_j48mp_125",LL="_notIndicatedButt_j48mp_145",Po={hide:xL,inputs_4:ML,wrapper:PL,IndicatedButt:VL,notIndicatedButt:LL},UL=({indicated:i,subjects:e,handleSubjects:t})=>{if(e!=null)return S.jsx("div",{className:i==3?Po.inputs_4:Po.hide,children:S.jsxs("div",{className:Po.wrapper,children:[S.jsx("h4",{children:"What is your favorite subject?"}),S.jsx("div",{className:Po.buttons,children:e.map((s,a)=>S.jsx(ye,{func:()=>{t(a)},className:s.testClass==!0?Po.IndicatedButt:Po.notIndicatedButt,content:e[a].content},s+a.toString()))})]})})},jL="_sign_up_wrapper_6gch2_23",BL="_form_1_6gch2_53",zL="_to_bottom_6gch2_75",HL="_bottom_6gch2_113",FL="_buttons_6gch2_125",qL="_indicator_6gch2_169",GL="_indicated_6gch2_197",KL="_not_indicated_6gch2_205",WL="_goToStartingPage_6gch2_259",gn={sign_up_wrapper:jL,form_1:BL,to_bottom:zL,bottom:HL,buttons:FL,indicator:qL,indicated:GL,not_indicated:KL,goToStartingPage:WL},QL=({setUsers:i,setShowSignInPrompt:e,showSignUpPrompt:t,setShowSignUpPrompt:s,setLoading:a,setContinueAs:l})=>{ue.useRef(null),ue.useRef(null);const c=ue.useRef(null),d=ue.useRef(null),m=ue.useRef(null),_=ue.useRef(null),E=ue.useRef(null),T=ue.useRef(null),C=ue.useRef(null),P=ue.useRef(null),z=ue.useRef(null),X=ue.useRef(null),H=ue.useRef(null),Y=ue.useRef(null),ee=ue.useRef(null),[le,se]=ue.useState(!1),[he,Te]=ue.useState(!1),[k,R]=ue.useState(0),[b,I]=ue.useState(),[x,L]=ue.useState([]),[D,et]=ue.useState([{content:"For Studies",isIndicated:!1},{content:"For Teaching Purposes",isIndicated:!1},{content:"For My Job",isIndicated:!1},{content:"Just for Fun",isIndicated:!1}]),[rt,oe]=ue.useState([{content:"TLE",testClass:!1},{content:"Mathematics",testClass:!1},{content:"Science",testClass:!1},{content:"English",testClass:!1},{content:"Colloquium",testClass:!1},{content:"Filipino",testClass:!1},{content:"Mapeh",testClass:!1},{content:"AP",testClass:!1},{content:"ESP",testClass:!1}]),F=ne=>{ne=="next"&&k!=3?R(k+1):ne=="back"&&k!=0&&R(k-1)},ae=ne=>{let ie=D;for(let fe in ie)if(fe==ne){ie=ie[ne].content;break}I(ie),et(fe=>fe.map((ge,pe)=>ne==pe?{...ge,isIndicated:!0}:{...ge,isIndicated:!1}))},Ae=ne=>{let ie=rt,fe=[];ie=ie.map((ge,pe)=>ne==pe?{...ge,testClass:ge.testClass!=!0}:{...ge});for(let ge in ie)ie[ge].testClass==!0&&fe.push(ie[ge]);L([...fe]),oe(ge=>ge.map((pe,Je)=>ne==Je?{...pe,testClass:pe.testClass!=!0}:{...pe}))},O=async()=>{const ne={password:c.current.value,email:m.current.value,school:z.current.value,grSec:H.current.value,favSubjects:x};try{await _N(La,m.current.value,c.current.value);const ie=La.currentUser;a(!0),s(!1),ie&&await LP(_l(gl,"Users",ie.uid),{email:m.current.value,school:z.current.value,name:C.current.value,grSec:H.current.value,favSubjects:x,usingAs:ee==null?void 0:ee.current.value,purpose:b}),i(fe=>[...fe,ne]),a(!1),l(!0)}catch(ie){console.log(ie)}};function $(){c.current.value="",d.current.value="",m.current.value="",_.current.value="",E.current.value="",T.current.value="",C.current.value="",P.current.value="",z.current.value="",X.current.value="",H.current.value="",Y.current.value="",ee.current.value="",oe(ne=>ne.map(ie=>({...ie,testClass:!1}))),et(ne=>ne.map(ie=>({...ie,isIndicated:!1}))),I(null),L([])}if(t==!0)return S.jsx(S.Fragment,{children:S.jsxs("div",{className:gn.sign_up_wrapper,children:[S.jsx(ye,{func:()=>{s(!1),$()},content:"X",className:gn.goToStartingPage}),S.jsxs("form",{onSubmit:ne=>{ne.preventDefault()},className:gn.form_1,children:[S.jsx("header",{children:"SIGN UP"}),S.jsxs("div",{className:gn.to_bottom,children:[S.jsx(AL,{indicated:k,show:le,showConfirm:he,setShowConfirm:ne=>{Te(ne)},setShow:ne=>{se(ne)},passwordInput:c,confirmPasswordInput:E,emailInput:m,passWarning:d,confirmWarning:T,emailWarning:_}),S.jsx(NL,{indicated:k,usageOptions:D,setUsageOptions:ne=>{et(ne)},handleUsageOptions:ne=>{ae(ne)},usingAsInput:ee}),S.jsx(kL,{indicated:k,schoolInput:z,schoolWarning:X,grSecInput:H,grSecWarning:Y,nickNameInput:C,nameWarning:P}),S.jsx(UL,{indicated:k,subjects:rt,handleSubjects:ne=>{Ae(ne)}}),S.jsxs("div",{className:gn.bottom,children:[S.jsxs("div",{className:gn.buttons,children:[S.jsx(ye,{content:"BACK",func:()=>{F("back")}}),S.jsx(ye,{content:k==3?"SUBMIT":"NEXT",func:()=>{k==3?O():F("next")}})]}),S.jsxs("div",{className:gn.indicator,children:[S.jsx("div",{className:k==0?gn.indicated:gn.not_indicated}),S.jsx("div",{className:k==1?gn.indicated:gn.not_indicated}),S.jsx("div",{className:k==2?gn.indicated:gn.not_indicated}),S.jsx("div",{className:k==3?gn.indicated:gn.not_indicated})]}),S.jsxs("h4",{id:gn.SignUp,onClick:()=>{e(!0),s(!1),$()},children:[" ",S.jsx("a",{children:"Already Have an Account?"})," "]})]})]})]})]})})},YL="_Continue_As_Wrapper_1tx42_5",$L="_Continue_As_Box_1tx42_47",XL="_Top_1tx42_75",ZL="_Options_1tx42_135",$h={Continue_As_Wrapper:YL,Continue_As_Box:$L,Top:XL,Options:ZL},JL=({continueAs:i,setContinueAs:e,user:t,setLoading:s})=>{const[a,l]=ue.useState(null),c=async()=>{s(!0);try{await P0(La),setUser(null),s(!1),e(!1)}catch(m){s(!1),e(!1),console.log(m)}},d=async()=>{try{const m=_l(gl,"Users",t==null?void 0:t.uid),_=await Nb(m);_.exists&&l(_.data())}catch(m){console.log(m)}};if(ue.useEffect(()=>{t!=null&&d()},[i,t]),i)return S.jsx("div",{className:$h.Continue_As_Wrapper,children:S.jsxs("div",{className:$h.Continue_As_Box,children:[S.jsxs("div",{className:$h.Top,children:[S.jsx("i",{className:"fa fa-user"}),S.jsx("h3",{children:"Continue As: "}),S.jsxs("h3",{children:[a==null?void 0:a.name," ?"]})]}),S.jsxs("div",{className:$h.Options,children:[S.jsx(ye,{content:"No",func:()=>{c()}}),S.jsx(ye,{content:"Yes",func:()=>{e(!1)}})]})]})})},eU="_Signing_Out_Wrapper_d1gt7_5",tU="_Hide_Signing_Out_Wrapper_d1gt7_5",nU="_Signing_Out_Box_d1gt7_47",iU="_Top_d1gt7_75",sU="_Options_d1gt7_137",ku={Signing_Out_Wrapper:eU,Hide_Signing_Out_Wrapper:tU,Signing_Out_Box:nU,Top:iU,Options:sU},rU=({isSigningOut:i,setIsSigningOut:e,setLoading:t,setUser:s})=>{const a=async()=>{t(!0);try{await P0(La),s({}),t(!1),e(!1)}catch(l){t(!1),e(!1),console.log(l)}};if(i)return S.jsx("div",{className:i?ku.Signing_Out_Wrapper:ku.Hide_Signing_Out_Wrapper,children:S.jsxs("div",{className:ku.Signing_Out_Box,children:[S.jsxs("div",{className:ku.Top,children:[S.jsx("i",{className:"fa fa-user"}),S.jsx("h3",{children:"Would You Like To Sign Out?"})]}),S.jsxs("div",{className:ku.Options,children:[S.jsx(ye,{content:"No",func:()=>{e(!1)}}),S.jsx(ye,{content:"Yes",func:()=>{a()}})]})]})})},aU="_Pages_1x53v_25",oU="_Hide_Pages_1x53v_31",QS={Pages:aU,Hide_Pages:oU};function lU(){const[i,e]=ue.useState(!0),[t,s]=ue.useState(!1),[a,l]=ue.useState(window.location.href),[c,d]=ue.useState(!1),[m,_]=ue.useState(!1),[E,T]=ue.useState(!1),[C,P]=ue.useState(!1),[z,X]=ue.useState(!1),[H,Y]=ue.useState(!1),[ee,le]=ue.useState(!1),[se,he]=ue.useState(1),[Te,k]=ue.useState(0),[R,b]=ue.useState(JSON.parse(localStorage.getItem("Users"))!=null?JSON.parse(localStorage.getItem("Users")):[]),[I,x]=ue.useState(null),[L,D]=ue.useState(null),[et,rt]=ue.useState([]),oe=async()=>{try{const F=_l(gl,"Users",I==null?void 0:I.uid),ae=await Nb(F);ae.exists&&rt(ae.data())}catch{console.log(error)}};return EN(La,F=>{x(F)}),ue.useEffect(()=>{I!=null&&oe()},[I]),ue.useEffect(()=>{a.includes("#Home")?he(1):a.includes("#Tasks")?he(2):a.includes("#About")?he(3):a.includes("#Contacts")&&he(4)},[]),ue.useEffect(()=>{let F=window.location.href;F.toLowerCase();let ae=F.search("/Acad/");switch(F=F.slice(0,ae+6),se){case 1:F=F.concat("#Home"),l(F);break;case 2:F=F.concat("#Tasks"),l(F);break;case 3:F=F.concat("#About"),l(F);break;case 4:F=F.concat("#Contacts"),l(F);break}},[se]),S.jsx(S.Fragment,{children:S.jsxs("div",{children:[S.jsx(zP,{setPage:F=>{he(F)},page:se,setIndicated:F=>{k(F)},indicated:Te,editing:t,url:a,setUrl:F=>{l(F)},showSignInPrompt:c,setShowSignInPrompt:F=>{d(F)},showSignUpPrompt:m,setShowSignUpPrompt:F=>{_(F)},user:I,continueAs:C,setIsSigningOut:F=>{Y(F)},setPaging:F=>{D(F)},showNavBar:i,setShowNavbar:F=>{e(F)},setShowSaveChanges:F=>{le(F)}}),S.jsxs("div",{className:!c&&!m?QS.Pages:QS.Hide_Pages,children:[S.jsx(HP,{page:se,setPage:F=>{he(F)},setIndicated:F=>{k(F)},indicated:Te,user:I}),S.jsx(lL,{setPage:F=>he(F),page:se,getTask:et,editing:t,setEditing:F=>{s(F)},user:I,setUser:F=>{x(F)},loading:E,setLoading:F=>T(F),paging:L,setPaging:F=>{D(F)},showNavBar:i,setShowNavbar:F=>{e(F)},showSaveChanges:ee,setShowSaveChanges:F=>le(F)})]}),S.jsx(EL,{page:se,setPage:F=>he(F),showSignInPrompt:c,setShowSignUpPrompt:F=>{_(F)},setShowSignInPrompt:F=>{d(F)},user:I,setUser:F=>{x(F)},setLoading:F=>T(F),setContinueAs:F=>P(F),loading:E}),S.jsx(QL,{page:se,setPage:F=>he(F),showSignUpPrompt:m,setShowSignInPrompt:F=>{d(F)},setShowSignUpPrompt:F=>{_(F)},users:R,setUsers:F=>{b(F)},user:I,setUser:F=>{x(F)},setLoading:F=>T(F),setContinueAs:F=>P(F),loading:E}),S.jsx(oL,{loading:E}),S.jsx(JL,{continueAs:C,setContinueAs:F=>{P(F)},user:I,setLoading:F=>T(F)}),S.jsx(rU,{isSigningOut:H,setIsSigningOut:F=>{Y(F)},setLoading:F=>{T(F)},setUser:F=>{x(F)}})]})})}cR.createRoot(document.getElementById("root")).render(S.jsx(ue.StrictMode,{children:S.jsx(lU,{})}));
